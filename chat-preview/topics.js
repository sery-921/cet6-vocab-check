// 每个主题只填内容。聊天、回忆和配对使用同一套界面与逻辑。
window.CHAT_TOPICS = {
  report: {
    title:'小组报告，今晚交稿。', icon:'组', name:'报告讨论组', subtitle:'3 位成员 · 今晚 23:00 截止',
    vocab:[
      {word:'allocate',pos:'v.',zh:'分配',english:'Let’s allocate the remaining tasks before we start.'},
      {word:'meticulous',pos:'adj.',zh:'一丝不苟的',english:'Your notes are meticulous, but we have little time left.'},
      {word:'abrupt',pos:'adj.',zh:'唐突的',english:'I’m sorry my comment sounded abrupt.'},
      {word:'overlap',pos:'v.',zh:'重叠',english:'The two sections overlap, so we can combine them.'},
      {word:'intervene',pos:'v.',zh:'介入；调停',english:'Maya intervened before the disagreement got worse.'},
      {word:'concede',pos:'v.',zh:'承认；让步',english:'I concede that your outline is clearer than mine.'},
      {word:'reassure',pos:'v.',zh:'使安心',english:'I want to reassure you that we can finish tonight.'},
      {word:'constrain',pos:'v.',zh:'限制',english:'The word limit will constrain how much we can include.'}
    ],
    dialogue:[
      {who:'me',face:'林',before:'报告今晚交，我们先 ',word:'allocate',after:' 一下剩下的任务吧。'},
      {who:'other',face:'周',before:'我写方法部分。但你别太 ',word:'meticulous',after:'，时间真的不够。'},
      {who:'me',face:'林',before:'你刚才说我写得乱，语气有点 ',word:'abrupt',after:'……'},
      {who:'other',face:'周',before:'抱歉。我只是发现我们的两段内容 ',word:'overlap',after:' 了。'},
      {who:'third',face:'夏',before:'我来 ',word:'intervene',after:' 一下：把重复的段落合成一段怎么样？'},
      {who:'me',face:'林',before:'好吧，我 ',word:'concede',after:'，你的提纲确实更清楚。'},
      {who:'other',face:'周',before:'我也想 ',word:'reassure',after:' 你：十点前我能把方法部分改好。'},
      {who:'third',face:'夏',before:'太好了。字数还会 ',word:'constrain',after:' 我们，最后一起删减。'}
    ],
    matchOrder:[3,0,6,2,7,4,1,5]
  },
  exhibition: {
    title:'展览快开场，相机却不见了。', icon:'展', name:'校园展览筹备组', subtitle:'3 位成员 · 开场前 40 分钟',
    vocab:[
      {word:'venue',pos:'n.',zh:'活动场地',english:'The venue has changed to the library hall.'},
      {word:'frantic',pos:'adj.',zh:'慌乱的',english:'She made a frantic search for the missing camera.'},
      {word:'whereabouts',pos:'n.',zh:'下落；所在位置',english:'Do you know the whereabouts of the camera?'},
      {word:'inventory',pos:'n.',zh:'物品清单',english:'The camera is still on the equipment inventory.'},
      {word:'plausible',pos:'adj.',zh:'看似合理的',english:'That is a plausible explanation for its disappearance.'},
      {word:'retrieve',pos:'v.',zh:'取回',english:'I can retrieve it from the old classroom.'},
      {word:'escort',pos:'v.',zh:'陪同；护送',english:'A staff member will escort us into the locked room.'},
      {word:'safeguard',pos:'v.',zh:'妥善保护',english:'We should safeguard the equipment during the event.'}
    ],
    dialogue:[
      {who:'me',face:'叶',before:'新的 ',word:'venue',after:' 确定了吗？观众已经在找入口。'},
      {who:'other',face:'陈',before:'在图书馆大厅。但我现在有点 ',word:'frantic',after:'：拍照的相机不见了。'},
      {who:'third',face:'吴',before:'先别急。你最后知道它的 ',word:'whereabouts',after:' 是哪里？'},
      {who:'other',face:'陈',before:'我看了器材 ',word:'inventory',after:'，上面写着昨天带去了旧教室。'},
      {who:'me',face:'叶',before:'那它还在旧教室，这个猜测挺 ',word:'plausible',after:'。'},
      {who:'third',face:'吴',before:'我现在去 ',word:'retrieve',after:'，你们先布置展台。'},
      {who:'other',face:'陈',before:'旧教室锁了，找管理员 ',word:'escort',after:' 你进去吧。'},
      {who:'me',face:'叶',before:'找回后我们得 ',word:'safeguard',after:' 好器材，别再随手放了。'}
    ],
    matchOrder:[6,2,5,0,7,3,1,4]
  }
};
