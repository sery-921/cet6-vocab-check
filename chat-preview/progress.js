// 独立于词汇判断的聊天练习记录；同域页面及备份导入导出共用。
(function(){
  const key='cet6-chat-progress-v1';
  const max=10000000000000;
  const validTime=x=>Number.isInteger(x)&&x>0&&x<max?x:null;
  function clean(input){
    const out={};
    if(!input||typeof input!=='object'||Array.isArray(input))return out;
    const topics=window.CHAT_TOPICS||{};
    for(const [id,v] of Object.entries(input)){
      const n=topics[id]?.vocab?.length;
      if(!n||!v||typeof v!=='object'||Array.isArray(v))continue;
      const step=Number.isInteger(v.step)?Math.max(0,Math.min(4,v.step)):0;
      const shown=Number.isInteger(v.shown)?Math.max(0,Math.min(n,v.shown)):0;
      const recallIndex=Number.isInteger(v.recallIndex)?Math.max(0,Math.min(n,v.recallIndex)):0;
      const validIndex=x=>Number.isInteger(x)&&x>=0&&x<n;
      const seen=Array.isArray(v.seen)?[...new Set(v.seen.filter(validIndex))]:[];
      const matched=Array.isArray(v.matched)?[...new Set(v.matched.filter(validIndex))]:[];
      const grades={};
      if(v.grades&&typeof v.grades==='object'&&!Array.isArray(v.grades))for(const [word,grade] of Object.entries(v.grades))if(topics[id].vocab.some(x=>x.word===word)&&['remembered','hesitated','forgot'].includes(grade))grades[word]=grade;
      out[id]={step,shown,recallIndex,seen,matched,grades,lastOpenedAt:validTime(v.lastOpenedAt),completedAt:validTime(v.completedAt),inProgress:Boolean(v.inProgress)&&step<4};
    }
    return out;
  }
  function read(){try{return clean(JSON.parse(localStorage.getItem(key)||'{}'));}catch{return {};}}
  function write(data){const cleaned=clean(data);localStorage.setItem(key,JSON.stringify(cleaned));return cleaned;}
  window.CET6_CHAT_PROGRESS={key,clean,read,write};
})();
