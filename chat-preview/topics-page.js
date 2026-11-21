if (!new URLSearchParams(location.search).has('topic')) {
document.getElementById('topicsView').classList.remove('hidden');
const topicInfo={
  report:{description:'任务分配出了分歧，三个人怎样把报告赶出来？'},
  exhibition:{description:'场地刚换，相机又失踪。筹备组得赶在观众到来前找回它。'}
};
const demo=new URLSearchParams(location.search).has('demo');
const records=demo?{
  report:{step:2,inProgress:true,lastOpenedAt:Date.now(),grades:{},completedAt:null},
  exhibition:{step:4,inProgress:false,lastOpenedAt:Date.now()-86400000,grades:{venue:'forgot'},completedAt:Date.now()-86400000}
}:window.CET6_CHAT_PROGRESS.read();
if(demo){document.getElementById('demoToggle').textContent='返回我的真实记录';document.getElementById('demoToggle').href='./index.html';document.getElementById('demoNotice').classList.remove('hidden');}
const groups={continue:[],unplayed:[],completed:[]};
for(const [id,topic] of Object.entries(window.CHAT_TOPICS)){
  const record=records[id];
  const group=record?.inProgress?'continue':record?.completedAt?'completed':'unplayed';
  groups[group].push({id,topic,record});
}
groups.continue.sort((a,b)=>(b.record?.lastOpenedAt||0)-(a.record?.lastOpenedAt||0));
groups.completed.sort((a,b)=>(b.record?.lastOpenedAt||0)-(a.record?.lastOpenedAt||0));
function line(tag,text,className){const x=document.createElement(tag);x.textContent=text;if(className)x.className=className;return x;}
function formatTime(timestamp){return timestamp?new Date(timestamp).toLocaleString('zh-CN',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'}):'';}
function makeCard({id,topic,record},index,group){
  const card=document.createElement(demo?'div':'a');card.className='topic-card';if(!demo)card.href=`./index.html?topic=${encodeURIComponent(id)}`;
  card.append(line('span',topic.icon,'topic-icon'));
  const state=group==='continue'?'进行中':group==='completed'?'已完成':'未开始';
  card.append(line('span',state,`topic-state ${group==='continue'?'active':group==='completed'?'done':''}`));
  card.append(line('span',`话题 ${String(index+1).padStart(2,'0')} · ${topic.vocab.length} 个词`,'topic-number'));
  card.append(line('h2',topic.title),line('p',topicInfo[id]?.description||''));
  card.append(line('span',topic.vocab.slice(0,4).map(x=>x.word).join(' · ')+'…','topic-words'));
  if(group==='continue'){
    const stepName=['聊天','词汇速查','英文回忆','中英文配对'][record.step]||'聊天';
    card.append(line('span',`上次停在：${stepName}`,'topic-meta'));
  }
  if(record?.lastOpenedAt&&!demo)card.append(line('span',`最近练习：${formatTime(record.lastOpenedAt)}`,'topic-meta'));
  if(group==='completed'&&Object.values(record.grades).some(x=>x==='forgot'))card.append(line('span','有没想起来的词，可以再练一次','review-hint'));
  card.append(line('strong',demo?'分类外观示例':group==='continue'?'继续这一关':group==='completed'?'重新练习':'进入聊天关卡'));
  return card;
}
const originalOrder=Object.keys(window.CHAT_TOPICS);
for(const [group,entries] of Object.entries(groups)){
  const section=document.getElementById(`${group}Section`),grid=document.getElementById(`${group}Grid`);
  document.getElementById(`${group}Total`).textContent=entries.length;
  document.getElementById(`${group}Count`).textContent=entries.length;
  if(!entries.length){grid.append(line('p','这一类目前还没有话题。','empty-topic'));continue;}
  for(const entry of entries)grid.append(makeCard(entry,originalOrder.indexOf(entry.id),group));
}
function selectGroup(group){
  for(const name of Object.keys(groups)){
    const active=name===group;
    document.getElementById(`${name}Filter`).setAttribute('aria-pressed',String(active));
    document.getElementById(`${name}Section`).classList.toggle('hidden',!active);
  }
}
for(const name of Object.keys(groups))document.getElementById(`${name}Filter`).addEventListener('click',()=>selectGroup(name));
selectGroup(groups.continue.length?'continue':groups.unplayed.length?'unplayed':'completed');
}
