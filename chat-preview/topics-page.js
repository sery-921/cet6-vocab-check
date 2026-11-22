if (!new URLSearchParams(location.search).has('topic')) {
document.getElementById('topicsView').classList.remove('hidden');
const topicInfo={
  report:{description:'任务分配出了分歧，三个人怎样把报告赶出来？'},
  exhibition:{description:'场地刚换，相机又失踪。筹备组得赶在观众到来前找回它。'},
  application:{description:'核对申请条件、整理作品，并在截止前补齐材料。'},
  rumour:{description:'匿名帖子传得很快，编辑组要先找到可信来源。'},
  hike:{description:'山路起雾，雨也快来了。小队得根据路标找到避雨处。'},
  archive:{description:'展览要用原稿，但档案室里只有一份易损坏的手稿。'},
  debate:{description:'辩题规则还不够清楚，三个人要先统一立场和结论。'},
  prototype:{description:'样机读数异常，项目组要在演示前找到可行方案。'},
  concert:{description:'合唱团排练时发现速度太快，独唱段落也需要调整。'},
  film:{description:'三个人看完同一部电影，却对人物和结尾有不同看法。'},
  wetland:{description:'志愿者记录湿地现状，先检测，再讨论怎样保护。'},
  study:{description:'分数下滑之后，三位同学一起调整复习节奏。'},
  foodfair:{description:'确定代表菜、做法和过敏原标识，让摊位顺利开张。'},
  election:{description:'候选人已报名，筹备组还要处理投票时间和规则。'},
  stargazing:{description:'天文社完善观星活动的介绍稿与集合通知。'},
  privacy:{description:'同学们讨论签到应用的定位权限，整理具体反馈。'},
  library:{description:'阅览室施工前，图书馆要安排临时安静座位。'},
  poetry:{description:'朗读会的译文既要传达原意，也得读起来顺畅。'},
  pantry:{description:'志愿者分配物资、核对凭证，并准备干净的储物空间。'},
  photography:{description:'截稿前比较两张照片，确定主体、质感和图片说明。'}
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
