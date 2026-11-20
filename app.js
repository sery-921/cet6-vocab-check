const STORAGE_KEY = 'cet6-starred-progress-v1';
const UNDO_KEY = 'cet6-starred-last-action-v1';
const examples = {
  arrogant: {text: 'To avoid appearing arrogant.', source: '2026 年 6 月第一套 · 听力选项 · PDF 第 1 页'},
  humiliate: {text: 'To guard against humiliation.', source: '2026 年 6 月第一套 · 听力选项 · PDF 第 1 页'},
  meticulous: {text: 'He finds the woman more meticulous about details.', source: '2026 年 6 月第一套 · 听力选项 · PDF 第 1 页'},
  clench: {text: 'Those forcing us to clench our teeth.', source: '2026 年 6 月第一套 · 听力选项 · PDF 第 2 页'},
  autonomous: {text: 'Developing sensor-based systems for autonomous vehicles.', source: '2026 年 6 月第一套 · 听力选项 · PDF 第 3 页'},
  transition: {text: 'make sure that the transition from the driver to the vehicle is done in a safe way', source: '2026 年 6 月第一套 · 听力原文 · 你提供的答案截图第 8 张'},
  detriment: {text: 'Rent increases have an even more detrimental effect.', source: '2026 年 6 月第一套 · 阅读 Section A · PDF 第 3 页'},
  demographic: {text: 'on some demographic groups, such as racial minorities.', source: '2026 年 6 月第一套 · 阅读 Section A · PDF 第 3 页'},
  haven: {text: 'under a mango tree in a tropical haven', source: '2026 年 6 月第一套 · 阅读 Section B · PDF 第 5 页'},
  exotic: {text: 'rather than exotic beachfront cafés.', source: '2026 年 6 月第一套 · 阅读 Section B · PDF 第 5 页'},
  harass: {text: 'girls have experienced online harassment.', source: '2026 年 6 月第一套 · 阅读 Section C · PDF 第 6 页'},
  differentiate: {text: 'call for a greater degree of differentiation', source: '2026 年 6 月第一套 · 阅读 Section C · PDF 第 6 页'},
  statute: {text: 'Statutory regulation of the digital media giants is long overdue.', source: '2026 年 6 月第一套 · 阅读 Section C · PDF 第 6 页'},
  divert: {text: 'politicians keen to divert attention', source: '2026 年 6 月第一套 · 阅读 Section C · PDF 第 7 页'},
  chunk: {text: 'shielded a large chunk of corporate profits', source: '2026 年 6 月第一套 · 阅读 Section C · PDF 第 7 页'},
  relentless: {text: 'which has been relentless since the 1980s.', source: '2026 年 6 月第一套 · 阅读 Section C · PDF 第 7 页'},
  lenient: {text: 'generous or lenient corporate tax rates', source: '2026 年 6 月第一套 · 阅读 Section C · PDF 第 8 页'},
  levy: {text: 'Making joint efforts to levy corporate taxes.', source: '2026 年 6 月第一套 · 阅读选项 · PDF 第 8 页'}
};
let words = [];
let progress = {};
let mode = 'new';
let activeTab = 'practice';
let current = null;
let lastAction = null;
let pageSize = 40;
const $ = (id) => document.getElementById(id);

function loadProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) progress = parsed;
  } catch { progress = {}; }
  try { lastAction = JSON.parse(localStorage.getItem(UNDO_KEY) || 'null'); } catch { lastAction = null; }
}
function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
  catch { alert('浏览器未能保存进度，请先使用“备份进度”导出。'); }
}
function statusOf(word) { return progress[word.head] === 'known' || progress[word.head] === 'unknown' ? progress[word.head] : 'new'; }
function updateStats() {
  const known = words.filter(w => statusOf(w) === 'known').length;
  const unknown = words.filter(w => statusOf(w) === 'unknown').length;
  $('heroTotal').textContent = words.length.toLocaleString('zh-CN');
  $('knownCount').textContent = known;
  $('unknownCount').textContent = unknown;
  $('reviewedCount').textContent = known + unknown;
  const percent = words.length ? Math.round((known + unknown) / words.length * 100) : 0;
  $('progressPercent').textContent = percent + '%';
  $('progressFill').style.width = percent + '%';
}
function nextWord() {
  const pool = words.filter(w => statusOf(w) === mode);
  if (!pool.length) {
    current = null;
    $('currentWord').textContent = mode === 'new' ? '本轮已通关！' : '重练列表为空';
    $('wordForms').textContent = mode === 'new' ? '你已判断全部词条。切换到“重练”继续。' : '遇到不认识的词时，它会出现在这里。';
    $('cardIndex').textContent = '✓';
    $('exampleBox').classList.add('hidden');
    $('knownButton').disabled = $('unknownButton').disabled = true;
    return;
  }
  current = pool[Math.floor(Math.random() * pool.length)];
  $('knownButton').disabled = $('unknownButton').disabled = false;
  $('currentWord').textContent = current.head;
  $('wordForms').textContent = current.forms.length > 1 ? '同列词形：' + current.forms.slice(1).join(' · ') : '考纲 ★ 词';
  $('cardMode').textContent = mode === 'new' ? '未判断' : '重练';
  $('cardIndex').textContent = `原 PDF 第 ${current.page} 页`;
  const e = examples[current.head] || current.forms.map(f => examples[f]).find(Boolean);
  $('exampleBox').classList.toggle('hidden', !e);
  if (e) $('exampleBox').innerHTML = `<span></span><small></small>`;
  if (e) { $('exampleBox').querySelector('span').textContent = e.text; $('exampleBox').querySelector('small').textContent = e.source; }
}
function judge(value) {
  if (!current) return;
  lastAction = {word: current.head, previous: statusOf(current)};
  try { localStorage.setItem(UNDO_KEY, JSON.stringify(lastAction)); } catch {}
  progress[current.head] = value;
  saveProgress(); updateStats(); nextWord(); updateUndoButton();
  if (activeTab === 'library') renderLibrary();
}
function updateUndoButton() { $('undoButton').disabled = !lastAction; }
function undoJudgment() {
  if (!lastAction || !words.some(w => w.head === lastAction.word)) return;
  const {word, previous} = lastAction;
  if (previous === 'new') delete progress[word]; else progress[word] = previous;
  lastAction = null;
  try { localStorage.removeItem(UNDO_KEY); } catch {}
  saveProgress(); updateStats(); nextWord(); updateUndoButton();
  if (activeTab === 'library') renderLibrary();
}
function changeStatus(word, value) {
  const previous = statusOf(word);
  if (value === 'new') delete progress[word.head]; else progress[word.head] = value;
  lastAction = {word: word.head, previous};
  try { localStorage.setItem(UNDO_KEY, JSON.stringify(lastAction)); } catch {}
  saveProgress(); updateStats(); nextWord(); updateUndoButton(); renderLibrary();
}
function setTab(tab) {
  activeTab = tab;
  document.querySelectorAll('[data-tab]').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  for (const name of ['practice','library','about']) $(name + 'Panel').classList.toggle('hidden', name !== tab);
  if (tab === 'library') renderLibrary();
}
function openStatus(status) {
  $('searchInput').value = '';
  $('statusFilter').value = status;
  pageSize = 40;
  setTab('library');
  $('libraryPanel').scrollIntoView({behavior:'smooth', block:'start'});
}
function openExamples() {
  $('searchInput').value = '';
  $('statusFilter').value = 'all';
  $('exampleFilter').value = 'with';
  pageSize = 40;
  setTab('library');
  $('libraryPanel').scrollIntoView({behavior:'smooth', block:'start'});
}
function renderLibrary() {
  const q = $('searchInput').value.trim().toLowerCase();
  const filter = $('statusFilter').value;
  const exampleOnly = $('exampleFilter').value === 'with';
  $('libraryTitle').textContent = exampleOnly ? '已核对的真题例句' : '查找考纲词';
  $('exampleContext').classList.toggle('hidden', !exampleOnly);
  const exampleFor = w => examples[w.head] || w.forms.map(f => examples[f]).find(Boolean);
  const matches = words.filter(w => (!q || w.forms.some(f => f.toLowerCase().includes(q))) && (filter === 'all' || statusOf(w) === filter) && (!exampleOnly || exampleFor(w)));
  $('resultCount').textContent = `${matches.length} 条结果`;
  const list = $('wordList'); list.replaceChildren();
  for (const w of matches.slice(0, pageSize)) {
    const item = document.createElement('article'); item.className = 'word-item';
    const top = document.createElement('div'); top.className = 'word-item-top';
    const name = document.createElement('b'); name.textContent = w.head;
    const status = document.createElement('span'); status.className = 'tag ' + statusOf(w); status.textContent = {new:'未判断',known:'认识',unknown:'需重练'}[statusOf(w)];
    top.append(name,status); item.append(top);
    if (w.forms.length > 1) { const forms = document.createElement('p'); forms.textContent = w.forms.slice(1).join(' · '); item.append(forms); }
    const e = exampleFor(w);
    if (e) { const sample = document.createElement('p'); sample.className = 'sample'; sample.textContent = '真题：' + e.text; item.append(sample); const source = document.createElement('p'); source.className = 'sample-source'; source.textContent = e.source; item.append(source); }
    const actions = document.createElement('div'); actions.className = 'item-actions';
    for (const [value, label] of [['known','改为认识'],['unknown','加入重练'],['new','重置']]) {
      const button = document.createElement('button'); button.type = 'button'; button.textContent = label;
      button.disabled = statusOf(w) === value;
      button.addEventListener('click', () => changeStatus(w, value)); actions.append(button);
    }
    item.append(actions);
    list.append(item);
  }
  $('moreButton').classList.toggle('hidden', matches.length <= pageSize);
}
function backup() {
  const blob = new Blob([JSON.stringify({version:1, exportedAt:new Date().toISOString(), progress}, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'cet6-progress.json'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
async function importBackup(file) {
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (data.version !== 1 || !data.progress || typeof data.progress !== 'object' || Array.isArray(data.progress)) throw Error('格式不符');
    const valid = new Set(words.map(w => w.head));
    const clean = {};
    for (const [word, value] of Object.entries(data.progress)) if (valid.has(word) && ['known','unknown'].includes(value)) clean[word] = value;
    progress = clean; lastAction = null; try { localStorage.removeItem(UNDO_KEY); } catch {} saveProgress(); updateStats(); nextWord(); updateUndoButton(); renderLibrary();
    alert(`已导入 ${Object.keys(clean).length} 条进度。`);
  } catch { alert('无法导入：请选择本站导出的有效进度 JSON 文件。'); }
  $('importFile').value = '';
}
async function init() {
  loadProgress();
  try {
    words = window.CET6_WORDS;
    if (!Array.isArray(words) || !words.length) throw Error('empty data');
  } catch {
    $('currentWord').textContent = '词表载入失败';
    $('wordForms').textContent = '请确认 data/vocab.js 与网页文件位于同一项目中。';
    return;
  }
  const exampleFor = w => examples[w.head] || w.forms.map(f => examples[f]).find(Boolean);
  $('exampleCount').textContent = words.filter(exampleFor).length;
  updateStats(); nextWord(); updateUndoButton();
  $('knownButton').addEventListener('click', () => judge('known'));
  $('unknownButton').addEventListener('click', () => judge('unknown'));
  $('undoButton').addEventListener('click', undoJudgment);
  $('knownStat').addEventListener('click', () => openStatus('known'));
  $('unknownStat').addEventListener('click', () => openStatus('unknown'));
  $('openExamplesButton').addEventListener('click', openExamples);
  document.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => setTab(b.dataset.tab)));
  document.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => { mode = b.dataset.mode; document.querySelectorAll('[data-mode]').forEach(x => x.classList.toggle('active', x === b)); $('practiceTitle').textContent = mode === 'new' ? '今日继续' : '再练不认识的词'; nextWord(); }));
  $('searchInput').addEventListener('input', () => {pageSize = 40; renderLibrary();});
  $('statusFilter').addEventListener('change', () => {pageSize = 40; renderLibrary();});
  $('exampleFilter').addEventListener('change', () => {pageSize = 40; renderLibrary();});
  $('moreButton').addEventListener('click', () => {pageSize += 40; renderLibrary();});
  $('backupButton').addEventListener('click', backup);
  $('importButton').addEventListener('click', () => $('importFile').click());
  $('importFile').addEventListener('change', e => importBackup(e.target.files[0]));
  document.addEventListener('keydown', e => { if (activeTab !== 'practice' || ['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName)) return; if (e.key === 'ArrowLeft') judge('unknown'); if (e.key === 'ArrowRight') judge('known'); });
}
init();
