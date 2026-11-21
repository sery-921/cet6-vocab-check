if (new URLSearchParams(location.search).has('topic')) {
document.getElementById('playView').classList.remove('hidden');
const topicId=new URLSearchParams(location.search).get('topic')||'report';
const topic=window.CHAT_TOPICS[topicId]||window.CHAT_TOPICS.report;
const id=window.CHAT_TOPICS[topicId]?topicId:'report';
const vocab=topic.vocab,dialogue=topic.dialogue,store=window.CET6_CHAT_PROGRESS;
const $=id=>document.getElementById(id);
const old=store.read()[id];
let state=old?.inProgress?old:{step:0,shown:0,recallIndex:0,seen:[],matched:[],grades:{},completedAt:old?.completedAt||null,inProgress:true};
state.lastOpenedAt=Date.now();
state.inProgress=true;
$('topicTitle').textContent=topic.title;
$('topicIcon').textContent=topic.icon;
$('chatName').textContent=topic.name;
$('chatSubtitle').textContent=topic.subtitle;
function save(){try{const all=store.read();all[id]=state;store.write(all);}catch{$('saveNotice').textContent='当前浏览器未能保存聊天进度。';$('saveNotice').classList.remove('hidden');}}
function showStep(n){for(const [i,panel] of ['chatStep','lookupStep','recallStep','matchStep'].entries())$(panel).classList.toggle('hidden',i!==Math.min(n,3));document.querySelectorAll('.stepbar span').forEach((el,i)=>el.classList.toggle('active',i===Math.min(n,3)));window.scrollTo({top:0,behavior:'smooth'});}
function updateSeen(){ $('seenCount').textContent=`已查看 ${state.seen.length} / ${vocab.length} 个词`; $('seenBar').style.width=`${state.seen.length/vocab.length*100}%`; }
function appendMessage(index){
  const d=dialogue[index],v=vocab[index];
  const row=document.createElement('div');row.className='message '+(d.who==='me'?'me':'');
  const face=document.createElement('span');face.className='face';face.textContent=d.face;
  const bubble=document.createElement('div');bubble.className='bubble';bubble.append(document.createTextNode(d.before));
  const word=document.createElement('button');word.className='word';word.type='button';word.textContent=d.word;word.setAttribute('aria-label',`查看 ${d.word} 的意思`);
  function showMeaning(){
    if(!row.querySelector('.note')){const note=document.createElement('span');note.className='note';const title=document.createElement('b');title.textContent=`${v.pos} ${v.zh}`;const sentence=document.createElement('em');sentence.textContent=v.english;note.append(title,document.createElement('br'),sentence);bubble.append(note);}
    word.classList.add('seen');
  }
  word.addEventListener('click',()=>{showMeaning();if(!state.seen.includes(index)){state.seen.push(index);updateSeen();save();}});
  bubble.append(word,document.createTextNode(d.after));row.append(face,bubble);$('messages').append(row);
  if(state.seen.includes(index))showMeaning();
  return row;
}
function updateChatEnd(){const done=state.shown>=dialogue.length;$('nextMessage').classList.toggle('hidden',done);$('chatDone').classList.toggle('hidden',!done);}
function nextMessage(){if(state.shown>=dialogue.length)return;const row=appendMessage(state.shown);state.shown++;state.step=0;state.inProgress=true;state.lastOpenedAt=Date.now();updateChatEnd();save();row.scrollIntoView({block:'nearest',behavior:'smooth'});}
function renderLookup(){const list=$('lookupList');list.replaceChildren();for(const v of vocab){const item=document.createElement('details');item.className='lookup-item';const summary=document.createElement('summary');summary.textContent=v.word;const meaning=document.createElement('p');meaning.textContent=`${v.pos} · ${v.zh}`;const natural=document.createElement('p');natural.className='natural';natural.textContent=v.english;item.append(summary,meaning,natural);list.append(item);}}
function renderRecall(){if(state.recallIndex>=vocab.length){state.step=3;save();renderMatch();showStep(3);return;}const v=vocab[state.recallIndex];$('recallProgress').textContent=`${state.recallIndex+1} / ${vocab.length}`;$('recallWord').textContent=v.word;$('recallAnswer').textContent=`${v.pos} · ${v.zh}`;$('recallAnswer').classList.add('hidden');$('recallChoices').classList.add('hidden');$('reveal').classList.remove('hidden');}
function finish(){state.step=4;state.inProgress=false;state.completedAt=Date.now();state.lastOpenedAt=state.completedAt;save();$('finish').classList.remove('hidden');const grades=Object.values(state.grades);const forgot=grades.filter(x=>x==='forgot').length,hesitant=grades.filter(x=>x==='hesitated').length;$('finishStats').textContent=`回忆阶段：${vocab.length-forgot-hesitant} 个想起来了，${hesitant} 个犹豫，${forgot} 个没想起来。`;}
function renderMatch(){
  const left=$('englishList'),right=$('chineseList');left.replaceChildren();right.replaceChildren();
  for(const [index,v] of vocab.entries()){
    const b=document.createElement('button');b.type='button';b.textContent=v.word;b.dataset.index=index;if(state.matched.includes(index))b.classList.add('done');
    b.addEventListener('click',()=>{if(state.matched.includes(index))return;left.querySelectorAll('button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');selected=index;$('matchStatus').textContent=`已选 ${v.word}，请选择右侧的中文。`;});left.append(b);
  }
  for(const index of topic.matchOrder){
    const b=document.createElement('button');b.type='button';b.textContent=vocab[index].zh;b.dataset.index=index;if(state.matched.includes(index))b.classList.add('done');
    b.addEventListener('click',()=>{if(selected===null){$('matchStatus').textContent='请先选左侧英文。';return;}if(selected!==index){$('matchStatus').textContent='还不对，再试一次。';return;}state.matched.push(index);left.querySelector(`[data-index="${index}"]`).classList.add('done');b.classList.add('done');left.querySelectorAll('button').forEach(x=>x.classList.remove('selected'));selected=null;$('matchStatus').textContent=`配对成功 · ${state.matched.length} / ${vocab.length}`;if(state.matched.length===vocab.length)finish();else save();});right.append(b);
  }
  if(state.step===4)finish();
}
let selected=null;
$('nextMessage').addEventListener('click',nextMessage);
$('toLookup').addEventListener('click',()=>{state.step=1;state.lastOpenedAt=Date.now();save();renderLookup();showStep(1);});
$('toRecall').addEventListener('click',()=>{state.step=2;state.lastOpenedAt=Date.now();save();renderRecall();showStep(2);});
$('reveal').addEventListener('click',()=>{$('recallAnswer').classList.remove('hidden');$('recallChoices').classList.remove('hidden');$('reveal').classList.add('hidden');});
$('recallChoices').addEventListener('click',e=>{const b=e.target.closest('button[data-grade]');if(!b)return;state.grades[vocab[state.recallIndex].word]=b.dataset.grade;state.recallIndex++;state.lastOpenedAt=Date.now();save();renderRecall();});
$('restart').addEventListener('click',()=>{state={step:0,shown:0,recallIndex:0,seen:[],matched:[],grades:{},completedAt:state.completedAt,inProgress:true,lastOpenedAt:Date.now()};selected=null;$('messages').replaceChildren();$('finish').classList.add('hidden');$('matchStatus').textContent='';updateSeen();showStep(0);nextMessage();});
for(let i=0;i<state.shown;i++)appendMessage(i);
updateSeen();updateChatEnd();
if(state.step===0){showStep(0);if(!state.shown)nextMessage();else save();}
else if(state.step===1){renderLookup();showStep(1);save();}
else if(state.step===2){renderRecall();showStep(2);save();}
else{renderMatch();showStep(3);save();}
}
