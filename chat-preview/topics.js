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
  },
  application: {
    title:'暑期项目招新，申请还差一步。', icon:'申', name:'暑期项目申请互助群', subtitle:'3 位成员 · 周五截止申请',
    vocab:[
      {word:'eligible',pos:'adj.',zh:'符合资格的',english:'Are first-year students eligible for this program?'},
      {word:'prerequisite',pos:'n.',zh:'先决条件',english:'A writing sample is a prerequisite for applying.'},
      {word:'portfolio',pos:'n.',zh:'作品集',english:'I put my best designs in the portfolio.'},
      {word:'showcase',pos:'v.',zh:'展示；展现',english:'Use one project to showcase your research skills.'},
      {word:'articulate',pos:'v.',zh:'清楚表达',english:'Try to articulate what you learned from the project.'},
      {word:'mentor',pos:'n.',zh:'导师；指导者',english:'My mentor offered to review the application.'},
      {word:'endorse',pos:'v.',zh:'支持；推荐',english:'The professor agreed to endorse my application.'},
      {word:'certify',pos:'v.',zh:'证明；证实',english:'The university must certify your enrollment status.'}
    ],
    dialogue:[
      {who:'me',face:'许',before:'我刚看到暑期项目招新。大一学生也 ',word:'eligible',after:' 吗？'},
      {who:'other',face:'何',before:'可以申请。不过写作样本是 ',word:'prerequisite',after:'，你准备了吗？'},
      {who:'me',face:'许',before:'准备了。我还把上学期的设计整理成 ',word:'portfolio',after:'。'},
      {who:'third',face:'唐',before:'挺好！挑一个项目重点 ',word:'showcase',after:' 你的研究能力。'},
      {who:'other',face:'何',before:'申请短文里也要 ',word:'articulate',after:' 清楚：你从项目中学到了什么。'},
      {who:'me',face:'许',before:'我先请 ',word:'mentor',after:' 帮我看看短文，别等到截止那天。'},
      {who:'third',face:'唐',before:'她很了解你的项目，也许愿意 ',word:'endorse',after:' 你的申请。'},
      {who:'other',face:'何',before:'对了，学校还得 ',word:'certify',after:' 你的在读身份，别忘了申请证明。'}
    ],
    matchOrder:[4,1,7,0,6,2,5,3]
  },
  rumour: {
    title:'匿名帖子传开了，消息是真的吗？', icon:'核', name:'校园新闻编辑群', subtitle:'3 位成员 · 发布前核实',
    vocab:[
      {word:'anonymous',pos:'adj.',zh:'匿名的',english:'The anonymous post did not name its author.'},
      {word:'credible',pos:'adj.',zh:'可信的',english:'We need a credible source before publishing the story.'},
      {word:'distort',pos:'v.',zh:'歪曲',english:'A short clip can distort what the speaker meant.'},
      {word:'probe',pos:'v.',zh:'深入调查',english:'The editors will probe the claim before reporting it.'},
      {word:'disclose',pos:'v.',zh:'透露；公开',english:"The office declined to disclose the student's name."},
      {word:'scrutiny',pos:'n.',zh:'仔细审查',english:'The figures did not stand up to scrutiny.'},
      {word:'refute',pos:'v.',zh:'驳斥；反驳',english:'The full recording may refute the online claim.'},
      {word:'rectify',pos:'v.',zh:'纠正',english:'We must rectify the error in our earlier report.'}
    ],
    dialogue:[
      {who:'me',face:'秦',before:'有人发了 ',word:'anonymous',after:' 帖子，说学校要取消奖学金。'},
      {who:'other',face:'梁',before:'先别转发。我们有 ',word:'credible',after:' 的消息来源吗？'},
      {who:'third',face:'宋',before:'帖子只截了通知的一句话，可能会 ',word:'distort',after:' 原意。'},
      {who:'me',face:'秦',before:'我来 ',word:'probe',after:' 一下，联系负责奖学金的办公室。'},
      {who:'other',face:'梁',before:'他们愿意 ',word:'disclose',after:' 完整通知吗？个人信息不用公开。'},
      {who:'me',face:'秦',before:'愿意。帖子里的数字经不起 ',word:'scrutiny',after:'，少算了一类名额。'},
      {who:'third',face:'宋',before:'完整通知足以 ',word:'refute',after:' “取消奖学金”的说法。'},
      {who:'other',face:'梁',before:'那我们发核实结果，也 ',word:'rectify',after:' 之前转发时写错的数字。'}
    ],
    matchOrder:[5,0,7,2,4,1,6,3]
  },
  hike: {
    title:'山路起雾，营地还找得到吗？', icon:'山', name:'周末徒步小队', subtitle:'3 位队员 · 天黑前返程',
    vocab:[
      {word:'trek',pos:'n.',zh:'长途跋涉',english:'The trek back to camp took longer than expected.'},
      {word:'terrain',pos:'n.',zh:'地形',english:'The rocky terrain is difficult to cross.'},
      {word:'navigate',pos:'v.',zh:'辨认方向；找路',english:'We can navigate by the trail markers.'},
      {word:'vicinity',pos:'n.',zh:'附近地区',english:'Is there a shelter in the vicinity?'},
      {word:'imminent',pos:'adj.',zh:'即将发生的',english:'The dark clouds suggest that rain is imminent.'},
      {word:'refuge',pos:'n.',zh:'避难处',english:'The hikers found refuge in an empty cabin.'},
      {word:'sturdy',pos:'adj.',zh:'结实的',english:'That sturdy bridge should be safe to cross.'},
      {word:'ordeal',pos:'n.',zh:'艰难经历',english:'Getting home through the storm was an ordeal.'}
    ],
    dialogue:[
      {who:'me',face:'岑',before:'这段 ',word:'trek',after:' 比计划久，离营地还有多远？'},
      {who:'other',face:'顾',before:'前面 ',word:'terrain',after:' 很陡，得放慢一点。'},
      {who:'third',face:'方',before:'别凭感觉走。我来根据路标 ',word:'navigate',after:'。'},
      {who:'me',face:'岑',before:'这片 ',word:'vicinity',after:' 有能避雨的地方吗？'},
      {who:'other',face:'顾',before:'看云层，大雨可能 ',word:'imminent',after:'。先找地方躲。'},
      {who:'third',face:'方',before:'地图上有间小木屋，可以暂时当 ',word:'refuge',after:'。'},
      {who:'me',face:'岑',before:'去木屋得过桥。桥看着够 ',word:'sturdy',after:' 吗？'},
      {who:'other',face:'顾',before:'桥还算结实，慢慢过。今天这趟真是场 ',word:'ordeal',after:'！'}
    ],
    matchOrder:[3,6,1,7,0,5,2,4]
  },
  archive: {
    title:'校史展缺一页，谁能找到原稿？', icon:'档', name:'校史展资料组', subtitle:'3 位成员 · 明天布展',
    vocab:[
      {word:'manuscript',pos:'n.',zh:'手稿',english:'The handwritten manuscript dates from the 1950s.'},
      {word:'archive',pos:'n.',zh:'档案馆；档案室',english:'The original letter is kept in the university archive.'},
      {word:'excerpt',pos:'n.',zh:'摘录；节选',english:'We only have an excerpt from the speech.'},
      {word:'artifact',pos:'n.',zh:'文物；历史物件',english:'This small artifact belonged to the first science lab.'},
      {word:'fragile',pos:'adj.',zh:'易损坏的',english:'The old paper is too fragile to handle without gloves.'},
      {word:'depict',pos:'v.',zh:'描绘',english:'The photograph depicts students working in the old library.'},
      {word:'custody',pos:'n.',zh:'保管；监护',english:'The archive has custody of the original documents.'},
      {word:'commemorate',pos:'v.',zh:'纪念',english:'The exhibition will commemorate the university’s founding.'}
    ],
    dialogue:[
      {who:'me',face:'孟',before:'校史展要放院长的 ',word:'manuscript',after:'，现在只缺原稿。'},
      {who:'other',face:'罗',before:'我查过了，原稿应该在学校的 ',word:'archive',after:'。'},
      {who:'third',face:'季',before:'我们手里只有一段 ',word:'excerpt',after:'，不能当作全文展示。'},
      {who:'me',face:'孟',before:'旁边那件旧仪器也是重要的 ',word:'artifact',after:'，要一起标注来源。'},
      {who:'other',face:'罗',before:'原稿纸张很 ',word:'fragile',after:'，最好展示复制件。'},
      {who:'third',face:'季',before:'配图可以 ',word:'depict',after:' 当年学生在旧图书馆学习的场景。'},
      {who:'me',face:'孟',before:'原稿的 ',word:'custody',after:' 仍归档案室，展台只放高清扫描件。'},
      {who:'other',face:'罗',before:'这样既保护资料，也能 ',word:'commemorate',after:' 学校创办的那段历史。'}
    ],
    matchOrder:[4,0,6,2,7,1,5,3]
  },
  debate: {
    title:'校园辩论赛，结论怎么写？', icon:'辩', name:'校园辩论备赛群', subtitle:'3 位队员 · 赛前最后一晚',
    vocab:[
      {word:'premise',pos:'n.',zh:'前提',english:'Our argument rests on the premise that reusable cups are available.'},
      {word:'ambiguous',pos:'adj.',zh:'含糊不清的',english:'The word “ban” is ambiguous in this motion.'},
      {word:'tentative',pos:'adj.',zh:'暂定的',english:'This is only a tentative plan for the debate.'},
      {word:'stance',pos:'n.',zh:'立场',english:'We need to state our stance clearly at the start.'},
      {word:'dissent',pos:'n.',zh:'异议；不同意见',english:'She voiced her dissent during the team meeting.'},
      {word:'rhetoric',pos:'n.',zh:'言辞；修辞',english:'Strong rhetoric cannot replace practical evidence.'},
      {word:'reconcile',pos:'v.',zh:'调和；使一致',english:'Can we reconcile the two opposing views?'},
      {word:'concise',pos:'adj.',zh:'简明的',english:'Keep the final statement concise and clear.'}
    ],
    dialogue:[
      {who:'me',face:'邵',before:'我们讨论禁用一次性杯子，先说清论证的 ',word:'premise',after:'：替代杯子得买得到。'},
      {who:'other',face:'石',before:'而且“禁用”这个词太 ',word:'ambiguous',after:'，是全校禁止，还是只限制食堂？'},
      {who:'third',face:'蓝',before:'我先写个 ',word:'tentative',after:' 版本，等规则明确再改。'},
      {who:'me',face:'邵',before:'我们的 ',word:'stance',after:' 是逐步减少，不是一夜之间全面禁止。'},
      {who:'other',face:'石',before:'我得提出一点 ',word:'dissent',after:'：如果没有补贴，学生得多花钱。'},
      {who:'third',face:'蓝',before:'这个担忧要回应，光靠漂亮的 ',word:'rhetoric',after:' 说服不了人。'},
      {who:'me',face:'邵',before:'那就用试点和补贴来 ',word:'reconcile',after:' 环保与成本两边的意见。'},
      {who:'other',face:'石',before:'好，我把结论改得更 ',word:'concise',after:'，一分钟内能讲完。'}
    ],
    matchOrder:[5,2,0,7,3,6,1,4]
  },
  prototype: {
    title:'传感器读数不对，演示怎么办？', icon:'研', name:'创新赛项目组', subtitle:'3 位成员 · 明天现场演示',
    vocab:[
      {word:'prototype',pos:'n.',zh:'原型；样机',english:'Our prototype measures the temperature of the room.'},
      {word:'parameter',pos:'n.',zh:'参数',english:'Check the temperature parameter in the software.'},
      {word:'simulate',pos:'v.',zh:'模拟',english:'We can simulate the test before the live demonstration.'},
      {word:'gauge',pos:'v.',zh:'测量；估计',english:'Use a second thermometer to gauge the actual temperature.'},
      {word:'discrepancy',pos:'n.',zh:'差异；不符',english:'There is a discrepancy between the two readings.'},
      {word:'overhaul',pos:'v.',zh:'彻底检修；改造',english:'We may need to overhaul the power supply after the contest.'},
      {word:'viable',pos:'adj.',zh:'可行的',english:'A shorter demonstration is still a viable option.'},
      {word:'robust',pos:'adj.',zh:'可靠耐用的；稳健的',english:'The revised design should be more robust.'}
    ],
    dialogue:[
      {who:'me',face:'翟',before:'我们的 ',word:'prototype',after:' 温度读数又跳了，明天还要演示。'},
      {who:'other',face:'裴',before:'先查软件里的 ',word:'parameter',after:'，会不会单位设错了？'},
      {who:'third',face:'宁',before:'我用测试数据 ',word:'simulate',after:' 一遍，看看程序有没有问题。'},
      {who:'me',face:'翟',before:'我拿另一支温度计 ',word:'gauge',after:' 实际温度。'},
      {who:'other',face:'裴',before:'两边读数有明显 ',word:'discrepancy',after:'，可能是供电不稳。'},
      {who:'third',face:'宁',before:'今晚来不及 ',word:'overhaul',after:' 整个供电模块，先换备用电源。'},
      {who:'me',face:'翟',before:'缩短演示时间也算 ',word:'viable',after:'，至少能展示核心功能。'},
      {who:'other',face:'裴',before:'比赛后再把设计做得更 ',word:'robust',after:'，别总靠备用方案。'}
    ],
    matchOrder:[6,1,4,0,7,3,5,2]
  },
  concert: {
    title:'合唱演出前，独唱段落还没定。', icon:'音', name:'校园合唱团', subtitle:'3 位成员 · 今晚彩排',
    vocab:[
      {word:'rehearse',pos:'v.',zh:'排练',english:'We need to rehearse the opening song once more.'},
      {word:'choir',pos:'n.',zh:'合唱团',english:'The choir will perform at the school concert.'},
      {word:'solo',pos:'n.',zh:'独唱；独奏',english:'Mina will sing a short solo in the second song.'},
      {word:'repertoire',pos:'n.',zh:'演出曲目',english:'We have added a new song to our repertoire.'},
      {word:'tempo',pos:'n.',zh:'速度；节奏',english:'The tempo is too fast for the opening verse.'},
      {word:'melody',pos:'n.',zh:'旋律',english:'The melody is easier to follow when the piano begins first.'},
      {word:'vocal',pos:'adj.',zh:'嗓音的；声乐的',english:'The high notes are a challenge for her vocal range.'},
      {word:'acclaim',pos:'n.',zh:'赞誉；称赞',english:'The choir won acclaim for last year’s concert.'}
    ],
    dialogue:[
      {who:'me',face:'童',before:'开场曲还要再 ',word:'rehearse',after:' 一遍，刚才有人提前进了。'},
      {who:'other',face:'陆',before:'整个 ',word:'choir',after:' 先听钢琴，再一起开口。'},
      {who:'third',face:'米',before:'第二首里的 ',word:'solo',after:' 还是我来唱吗？'},
      {who:'me',face:'童',before:'对，这首刚加进 ',word:'repertoire',after:'，你的段落最熟。'},
      {who:'other',face:'陆',before:'不过开头的 ',word:'tempo',after:' 太快了，歌词都跟不上。'},
      {who:'third',face:'米',before:'让钢琴先弹两小节 ',word:'melody',after:'，大家就能跟上。'},
      {who:'me',face:'童',before:'这段高音对 ',word:'vocal',after:' 技巧要求很高，我们可以降调。'},
      {who:'other',face:'陆',before:'好。去年大家给了我们不少 ',word:'acclaim',after:'，今年也认真唱好每一段。'}
    ],
    matchOrder:[4,7,1,5,0,6,2,3]
  },
  film: {
    title:'电影散场了，影评却意见相反。', icon:'影', name:'周五电影社', subtitle:'3 位成员 · 散场后讨论',
    vocab:[
      {word:'genre',pos:'n.',zh:'类型；体裁',english:'The film blends two different genres.'},
      {word:'portray',pos:'v.',zh:'描绘；刻画',english:'The director portrays the family with warmth.'},
      {word:'metaphor',pos:'n.',zh:'隐喻',english:'The locked door works as a metaphor for isolation.'},
      {word:'aesthetic',pos:'n.',zh:'审美风格',english:'The film has a quiet, almost dreamlike aesthetic.'},
      {word:'stereotype',pos:'n.',zh:'刻板印象',english:'The story challenges a familiar stereotype.'},
      {word:'subtle',pos:'adj.',zh:'细微的；含蓄的',english:'The change in her expression is subtle.'},
      {word:'cliché',pos:'n.',zh:'陈词滥调；老套情节',english:'The ending avoids a familiar romantic cliché.'},
      {word:'evoke',pos:'v.',zh:'唤起；引发',english:'The final scene evokes a sense of hope.'}
    ],
    dialogue:[
      {who:'me',face:'闻',before:'这片到底是什么 ',word:'genre',after:'？前半段像喜剧，后半段又像悬疑。'},
      {who:'other',face:'姜',before:'我喜欢导演 ',word:'portray',after:' 母亲的方式，没有把她写成完美的人。'},
      {who:'third',face:'贺',before:'那扇一直打不开的门，像是孤独的 ',word:'metaphor',after:'。'},
      {who:'me',face:'闻',before:'画面的复古 ',word:'aesthetic',after:' 也很特别，颜色像旧照片。'},
      {who:'other',face:'姜',before:'而且男主没有落入“只会工作”的 ',word:'stereotype',after:'。'},
      {who:'third',face:'贺',before:'他最后看向家人的眼神很 ',word:'subtle',after:'，但我看懂了。'},
      {who:'me',face:'闻',before:'我以为结尾会是团圆 ',word:'cliché',after:'，幸好没有。'},
      {who:'other',face:'姜',before:'开放式结尾反而能 ',word:'evoke',after:' 一点希望。我们把分歧都写进影评吧。'}
    ],
    matchOrder:[6,2,5,0,7,3,1,4]
  },
  wetland: {
    title:'湿地边有垃圾，水质出了问题吗？', icon:'湿', name:'校园湿地调查队', subtitle:'3 位志愿者 · 现场记录',
    vocab:[
      {word:'ecosystem',pos:'n.',zh:'生态系统',english:'A wetland is an ecosystem with many connected species.'},
      {word:'debris',pos:'n.',zh:'碎片；残骸',english:'Plastic debris is floating near the bank.'},
      {word:'toxic',pos:'adj.',zh:'有毒的',english:'We should test the water before calling it toxic.'},
      {word:'vegetation',pos:'n.',zh:'植被',english:'The vegetation is sparse beside the path.'},
      {word:'pesticide',pos:'n.',zh:'农药',english:'The team will check for pesticide residues in the water.'},
      {word:'predator',pos:'n.',zh:'捕食者',english:'The heron is a predator of small fish.'},
      {word:'detriment',pos:'n.',zh:'损害；不利',english:'Removing all the plants would be a detriment to the wetland.'},
      {word:'conserve',pos:'v.',zh:'保护；保存',english:'We want to conserve the wetland for future generations.'}
    ],
    dialogue:[
      {who:'me',face:'白',before:'这片湿地是完整的 ',word:'ecosystem',after:'，清理时不能只看水面。'},
      {who:'other',face:'孔',before:'岸边有塑料 ',word:'debris',after:'，我先拍照记录位置。'},
      {who:'third',face:'邱',before:'有人说水是 ',word:'toxic',after:'，但没检测之前不能这么下结论。'},
      {who:'me',face:'白',before:'小路旁的 ',word:'vegetation',after:' 稀疏，可能是人踩出来的。'},
      {who:'other',face:'孔',before:'附近有农田，水样也要查 ',word:'pesticide',after:' 残留。'},
      {who:'third',face:'邱',before:'那只鹭鸟是小鱼的 ',word:'predator',after:'，它本来就是食物链的一环。'},
      {who:'me',face:'白',before:'所以别把岸边植物全清掉，那会对湿地造成 ',word:'detriment',after:'。'},
      {who:'other',face:'孔',before:'同意。先记录、检测，再决定怎样 ',word:'conserve',after:' 这片湿地。'}
    ],
    matchOrder:[3,0,6,1,7,4,2,5]
  },
  study: {
    title:'复习总是断断续续，怎么重新跟上？', icon:'学', name:'期末复习互助群', subtitle:'3 位同学 · 考前两周',
    vocab:[
      {word:'slump',pos:'n.',zh:'低潮；下滑期',english:'She went through a slump in her practice scores.'},
      {word:'intermittent',pos:'adj.',zh:'断断续续的',english:'Intermittent study has made it hard to retain the material.'},
      {word:'stagnate',pos:'v.',zh:'停滞',english:'Our progress will stagnate without regular practice.'},
      {word:'milestone',pos:'n.',zh:'阶段性目标；里程碑',english:'Finishing the first practice paper is a useful milestone.'},
      {word:'momentum',pos:'n.',zh:'势头；动力',english:'A short daily session can help rebuild momentum.'},
      {word:'bolster',pos:'v.',zh:'增强；支持',english:'Reviewing old mistakes can bolster your confidence.'},
      {word:'recur',pos:'v.',zh:'再次出现',english:'If the same error recurs, check the underlying rule.'},
      {word:'nurture',pos:'v.',zh:'培养',english:'We can nurture a habit of reviewing after each session.'}
    ],
    dialogue:[
      {who:'me',face:'安',before:'最近练习分数进入 ',word:'slump',after:'，越做越没信心。'},
      {who:'other',face:'楚',before:'你这周复习有点 ',word:'intermittent',after:'，可能只是节奏断了。'},
      {who:'third',face:'殷',before:'如果一直不练，进步就会 ',word:'stagnate',after:'。先从短任务开始吧。'},
      {who:'me',face:'安',before:'那今天的 ',word:'milestone',after:' 就是做完并订正一套小练习。'},
      {who:'other',face:'楚',before:'每天固定二十分钟，先把 ',word:'momentum',after:' 找回来。'},
      {who:'third',face:'殷',before:'把以前做对的题也翻翻，能 ',word:'bolster',after:' 一点信心。'},
      {who:'me',face:'安',before:'如果同一种错误 ',word:'recur',after:'，我就回头查规则。'},
      {who:'other',face:'楚',before:'这样慢慢 ',word:'nurture',after:' 复盘习惯，比一天刷很多题更稳。'}
    ],
    matchOrder:[4,1,7,3,0,6,2,5]
  },
  foodfair: {
    title:'美食节要开摊，菜单还没定。', icon:'食', name:'校园美食节筹备群', subtitle:'3 位同学 · 周六开摊',
    vocab:[
      {word:'cuisine',pos:'n.',zh:'菜系；烹饪',english:'The fair will feature cuisine from several regions.'},
      {word:'delicacy',pos:'n.',zh:'美味佳肴；特色食品',english:'This rice cake is a local delicacy.'},
      {word:'spice',pos:'n.',zh:'香料；调味品',english:'Use a little less spice in the second batch.'},
      {word:'recipe',pos:'n.',zh:'食谱；做法',english:'Write down the recipe so every volunteer can follow it.'},
      {word:'fragrant',pos:'adj.',zh:'芳香的',english:'The fragrant soup drew visitors to the stall.'},
      {word:'edible',pos:'adj.',zh:'可食用的',english:'Check whether the flowers are edible before using them.'},
      {word:'hygiene',pos:'n.',zh:'卫生',english:'Food hygiene matters even at a small school fair.'},
      {word:'allergic',pos:'adj.',zh:'过敏的',english:'Some visitors may be allergic to nuts.'}
    ],
    dialogue:[
      {who:'me',face:'苏',before:'这次美食节想介绍不同地区的 ',word:'cuisine',after:'，每个摊位做一道代表菜。'},
      {who:'other',face:'黎',before:'我家乡的米糕算当地 ',word:'delicacy',after:'，可以做成小份。'},
      {who:'third',face:'骆',before:'试吃那份太辣了，下一锅少放一点 ',word:'spice',after:'。'},
      {who:'me',face:'苏',before:'把 ',word:'recipe',after:' 写清楚，换班的同学也能照着做。'},
      {who:'other',face:'黎',before:'刚出锅闻着很 ',word:'fragrant',after:'，应该能吸引人来摊位。'},
      {who:'third',face:'骆',before:'装饰用的花瓣确定 ',word:'edible',after:' 吗？不确定就别放。'},
      {who:'me',face:'苏',before:'对，先把食物 ',word:'hygiene',after:' 做好，分装时戴好手套。'},
      {who:'other',face:'黎',before:'菜单还要标出坚果，提醒可能 ',word:'allergic',after:' 的同学。'}
    ],
    matchOrder:[5,2,7,0,6,3,1,4]
  },
  election: {
    title:'学生会换届，投票规则怎么定？', icon:'选', name:'学生会换届筹备群', subtitle:'3 位成员 · 下周投票',
    vocab:[
      {word:'nominate',pos:'v.',zh:'提名',english:'Each club may nominate one student for the election.'},
      {word:'incumbent',pos:'n.',zh:'现任者；在任者',english:'The incumbent president is running again.'},
      {word:'electoral',pos:'adj.',zh:'选举的',english:'The committee published the electoral rules.'},
      {word:'stipulate',pos:'v.',zh:'规定；明确要求',english:'The rules stipulate that voting ends at six.'},
      {word:'petition',pos:'n.',zh:'请愿书；联名请求',english:'Students submitted a petition to extend voting hours.'},
      {word:'coalition',pos:'n.',zh:'联盟',english:'Two student groups formed a coalition.'},
      {word:'turnout',pos:'n.',zh:'投票人数；投票率',english:'Longer voting hours may improve turnout.'},
      {word:'mandate',pos:'n.',zh:'授权；委托',english:'The vote gave the new team a mandate to improve study spaces.'}
    ],
    dialogue:[
      {who:'me',face:'杜',before:'各社团可以 ',word:'nominate',after:' 一名候选人，周三前交名单。'},
      {who:'other',face:'范',before:'现任主席也会参选，别把 ',word:'incumbent',after:' 漏在候选人介绍之外。'},
      {who:'third',face:'郝',before:'我把 ',word:'electoral',after:' 规则整理成一页，方便大家看。'},
      {who:'me',face:'杜',before:'原规则 ',word:'stipulate',after:' 下午六点截止投票，但有晚课的同学赶不上。'},
      {who:'other',face:'范',before:'他们递了份 ',word:'petition',after:'，希望延长到晚上八点。'},
      {who:'third',face:'郝',before:'还有两个社团组成 ',word:'coalition',after:'，共同提出改善自习室的方案。'},
      {who:'me',face:'杜',before:'延长投票时间也许能提高 ',word:'turnout',after:'，先让筹备组讨论。'},
      {who:'other',face:'范',before:'如果大家投票支持，新团队就有 ',word:'mandate',after:' 推动那个方案。'}
    ],
    matchOrder:[6,0,4,2,7,1,5,3]
  },
  stargazing: {
    title:'观星夜临近，介绍稿还差一段。', icon:'星', name:'天文社观星活动群', subtitle:'3 位成员 · 周末观星夜',
    vocab:[
      {word:'observatory',pos:'n.',zh:'天文台',english:'We will meet outside the observatory at seven.'},
      {word:'eclipse',pos:'n.',zh:'日食；月食',english:'The talk will explain how a lunar eclipse happens.'},
      {word:'hemisphere',pos:'n.',zh:'半球',english:'The star chart is drawn for the northern hemisphere.'},
      {word:'latitude',pos:'n.',zh:'纬度',english:'Your latitude affects which stars you can see.'},
      {word:'comet',pos:'n.',zh:'彗星',english:'The speaker will show a photograph of a comet.'},
      {word:'magnitude',pos:'n.',zh:'星等；亮度等级',english:'A star with a lower apparent magnitude usually appears brighter.'},
      {word:'luminous',pos:'adj.',zh:'发光的；明亮的',english:'The Moon looks luminous, but it reflects sunlight.'},
      {word:'spectacle',pos:'n.',zh:'壮观景象',english:'A clear night sky can be a wonderful spectacle.'}
    ],
    dialogue:[
      {who:'me',face:'祁',before:'观星夜在 ',word:'observatory',after:' 门口集合，记得写进通知。'},
      {who:'other',face:'容',before:'我负责讲月 ',word:'eclipse',after:' 的原理，不预报具体观测时间。'},
      {who:'third',face:'靳',before:'星图要选北 ',word:'hemisphere',after:' 的版本，别拿错。'},
      {who:'me',face:'祁',before:'还得提醒大家，所在 ',word:'latitude',after:' 会影响能看到哪些星。'},
      {who:'other',face:'容',before:'介绍稿里可以放一张 ',word:'comet',after:' 的照片，讲讲它和恒星的区别。'},
      {who:'third',face:'靳',before:'有人问 ',word:'magnitude',after:' 的数字，先解释数值越小通常看起来越亮。'},
      {who:'me',face:'祁',before:'月亮看着 ',word:'luminous',after:'，但它本身不发光，是反射阳光。'},
      {who:'other',face:'容',before:'要是天气晴朗，夜空本身就是一场 ',word:'spectacle',after:'。'}
    ],
    matchOrder:[3,7,1,5,0,6,2,4]
  },
  privacy: {
    title:'签到应用要定位，这个权限合理吗？', icon:'权', name:'校园应用体验群', subtitle:'3 位同学 · 提交反馈前',
    vocab:[
      {word:'default',pos:'n.',zh:'默认设置',english:'Location access is on by default in the new app.'},
      {word:'profile',pos:'n.',zh:'个人资料',english:'The app asks for information in each user profile.'},
      {word:'surveillance',pos:'n.',zh:'监视；监控',english:'Continuous tracking could feel like surveillance.'},
      {word:'legitimate',pos:'adj.',zh:'正当的；合理的',english:'The school may have a legitimate reason to confirm attendance.'},
      {word:'infringe',pos:'v.',zh:'侵犯',english:'Unnecessary tracking may infringe students’ privacy.'},
      {word:'protocol',pos:'n.',zh:'规程；协议',english:'The data protocol should explain who can access records.'},
      {word:'breach',pos:'n.',zh:'泄露；违规',english:'The school needs a plan for a possible data breach.'},
      {word:'override',pos:'v.',zh:'覆盖；更改',english:'Users should be able to override the default setting.'}
    ],
    dialogue:[
      {who:'me',face:'裘',before:'新签到应用里，定位的 ',word:'default',after:' 是开启，我有点担心。'},
      {who:'other',face:'许',before:'它还让我们填完整 ',word:'profile',after:'，但没解释哪些信息是必须的。'},
      {who:'third',face:'贝',before:'如果一直追踪位置，就像 ',word:'surveillance',after:'，不只是签到。'},
      {who:'me',face:'裘',before:'确认到课也许有 ',word:'legitimate',after:' 理由，关键是范围要说清楚。'},
      {who:'other',face:'许',before:'多余的追踪可能 ',word:'infringe',after:' 隐私，我们把具体疑问写下来。'},
      {who:'third',face:'贝',before:'还得问数据 ',word:'protocol',after:'：谁能看记录，保存多久？'},
      {who:'me',face:'裘',before:'如果发生数据 ',word:'breach',after:'，学校准备怎么通知大家？'},
      {who:'other',face:'许',before:'至少该允许我们 ',word:'override',after:' 默认权限，只在签到时开启定位。'}
    ],
    matchOrder:[6,3,0,5,2,7,4,1]
  },
  library: {
    title:'阅览室要施工，安静座位去哪找？', icon:'阅', name:'图书馆空间调整群', subtitle:'3 位成员 · 下周开始施工',
    vocab:[
      {word:'adjacent',pos:'adj.',zh:'相邻的；隔壁的',english:'The reading room is adjacent to the construction area.'},
      {word:'designate',pos:'v.',zh:'指定；划定',english:'We can designate the third floor as a quiet study area.'},
      {word:'interim',pos:'adj.',zh:'临时的；过渡期的',english:'This is an interim arrangement during the repairs.'},
      {word:'conducive',pos:'adj.',zh:'有助于……的',english:'A quiet room is conducive to concentration.'},
      {word:'hurdle',pos:'n.',zh:'障碍；难题',english:'The main hurdle is finding enough power outlets.'},
      {word:'ventilate',pos:'v.',zh:'使通风',english:'Open the windows to ventilate the room after cleaning.'},
      {word:'partition',pos:'n.',zh:'隔板；隔断',english:'A partition can separate the group tables from the quiet seats.'},
      {word:'streamline',pos:'v.',zh:'简化；提高效率',english:'Online booking could streamline the seat allocation process.'}
    ],
    dialogue:[
      {who:'me',face:'程',before:'原阅览室 ',word:'adjacent',after:' 的区域要施工，噪声会传过来。'},
      {who:'other',face:'商',before:'那就 ',word:'designate',after:' 三楼空教室作安静自习区。'},
      {who:'third',face:'焦',before:'先用这个 ',word:'interim',after:' 方案，等维修结束再恢复。'},
      {who:'me',face:'程',before:'三楼远离施工，应该更 ',word:'conducive',after:' 于集中注意力。'},
      {who:'other',face:'商',before:'最大的 ',word:'hurdle',after:' 是插座不够，得先统计需求。'},
      {who:'third',face:'焦',before:'教室刚刷过墙，开放前也要好好 ',word:'ventilate',after:'。'},
      {who:'me',face:'程',before:'再加一道 ',word:'partition',after:'，把讨论桌和安静座位隔开。'},
      {who:'other',face:'商',before:'预约流程可以 ',word:'streamline',after:' 一下，学生在手机上选时段。'}
    ],
    matchOrder:[4,1,6,0,7,2,5,3]
  },
  poetry: {
    title:'诗歌朗读会，译文怎么才像原作？', icon:'诗', name:'诗歌朗读会筹备群', subtitle:'3 位成员 · 周末排练',
    vocab:[
      {word:'verse',pos:'n.',zh:'诗节；诗句',english:'The first verse describes a quiet morning.'},
      {word:'lyric',pos:'n.',zh:'歌词；抒情诗句',english:'The final lyric needs to fit the melody.'},
      {word:'synonym',pos:'n.',zh:'同义词',english:'Can you find a shorter synonym for “beautiful”?'},
      {word:'connotation',pos:'n.',zh:'言外之意；隐含意义',english:'The word “home” has a warm connotation here.'},
      {word:'allude',pos:'v.',zh:'暗指；影射',english:'The poem may allude to the old tree near the school gate.'},
      {word:'analogy',pos:'n.',zh:'类比；比喻',english:'The analogy between a river and time is easy to follow.'},
      {word:'eloquent',pos:'adj.',zh:'表达有力的；雄辩的',english:'Her final lines are simple but eloquent.'},
      {word:'glossary',pos:'n.',zh:'词汇表；术语表',english:'A short glossary will help the audience follow the poem.'}
    ],
    dialogue:[
      {who:'me',face:'叶',before:'第一段 ',word:'verse',after:' 译得太长，朗读时会超时。'},
      {who:'other',face:'柴',before:'副歌那句 ',word:'lyric',after:' 还得配得上旋律，不能只看字面。'},
      {who:'third',face:'陶',before:'“美丽”找个更短的 ',word:'synonym',after:'，节奏会顺一些。'},
      {who:'me',face:'叶',before:'但“家”这个词的 ',word:'connotation',after:' 很温暖，别换掉。'},
      {who:'other',face:'柴',before:'这句还 ',word:'allude',after:' to 校门口那棵老树，听众可能不知道。'},
      {who:'third',face:'陶',before:'把时间比作河流的 ',word:'analogy',after:' 可以保留，大家容易听懂。'},
      {who:'me',face:'叶',before:'结尾不用堆华丽词句，简洁反而更 ',word:'eloquent',after:'。'},
      {who:'other',face:'柴',before:'那就在节目单上附一份小 ',word:'glossary',after:'，解释两三个背景词。'}
    ],
    matchOrder:[5,2,7,0,6,1,4,3]
  },
  pantry: {
    title:'社区食品领取点，物资怎么分？', icon:'助', name:'社区食品领取点', subtitle:'3 位志愿者 · 明早开放',
    vocab:[
      {word:'subsidy',pos:'n.',zh:'补贴；资助',english:'A small subsidy helped the center buy basic food.'},
      {word:'wholesale',pos:'adj.',zh:'批发的',english:'We bought rice at a wholesale price.'},
      {word:'allot',pos:'v.',zh:'分配；拨给',english:'Let’s allot each volunteer a pickup time.'},
      {word:'ration',pos:'v.',zh:'限量供应',english:'We may need to ration the eggs so every family gets some.'},
      {word:'voucher',pos:'n.',zh:'代金券；凭证',english:'Each registered family will receive a food voucher.'},
      {word:'perish',pos:'v.',zh:'腐坏；变质',english:'Fresh vegetables may perish if we store them too long.'},
      {word:'audit',pos:'v.',zh:'审查；核对账目',english:'The center will audit the spending after the event.'},
      {word:'sanitation',pos:'n.',zh:'环境卫生；卫生措施',english:'Good sanitation is essential in the storage room.'}
    ],
    dialogue:[
      {who:'me',face:'耿',before:'社区给了一笔 ',word:'subsidy',after:'，我们可以补买米和鸡蛋。'},
      {who:'other',face:'费',before:'米按 ',word:'wholesale',after:' 价采购，预算能省一些。'},
      {who:'third',face:'柳',before:'先 ',word:'allot',after:' 每位志愿者一个取货时段，别都挤在早上。'},
      {who:'me',face:'耿',before:'鸡蛋数量有限，可能得 ',word:'ration',after:'，保证每家都有。'},
      {who:'other',face:'费',before:'登记过的家庭凭 ',word:'voucher',after:' 领取，现场好核对。'},
      {who:'third',face:'柳',before:'蔬菜放太久会 ',word:'perish',after:'，明天要优先发。'},
      {who:'me',face:'耿',before:'活动后我们再 ',word:'audit',after:' 支出，把采购记录整理清楚。'},
      {who:'other',face:'费',before:'我今晚检查储物间的 ',word:'sanitation',after:'，食物要放在干净的地方。'}
    ],
    matchOrder:[4,0,6,2,7,1,5,3]
  },
  photography: {
    title:'摄影比赛要交稿，哪张更合适？', icon:'摄', name:'城市摄影比赛小组', subtitle:'3 位同学 · 今晚截稿',
    vocab:[
      {word:'panorama',pos:'n.',zh:'全景照片；全景',english:'The panorama shows the river and both sides of the city.'},
      {word:'landmark',pos:'n.',zh:'地标；标志性建筑',english:'The old bridge is a familiar city landmark.'},
      {word:'glare',pos:'n.',zh:'刺眼的强光；眩光',english:'There is too much glare in the midday photograph.'},
      {word:'zoom',pos:'v.',zh:'拉近镜头；变焦',english:'Zoom in on the bridge without losing the river.'},
      {word:'magnify',pos:'v.',zh:'放大',english:'Magnify the image to check whether it is sharp.'},
      {word:'texture',pos:'n.',zh:'质感；纹理',english:'The evening light brings out the texture of the old stones.'},
      {word:'caption',pos:'n.',zh:'图片说明；标题',english:'The caption should say when the bridge was restored.'},
      {word:'spotlight',pos:'v.',zh:'聚焦呈现；突出',english:'The series aims to spotlight the people who restored the bridge.'}
    ],
    dialogue:[
      {who:'me',face:'池',before:'这张 ',word:'panorama',after:' 把河两岸都拍进去了，但桥有点小。'},
      {who:'other',face:'韦',before:'老桥是城市 ',word:'landmark',after:'，最好让观众一眼看到它。'},
      {who:'third',face:'庄',before:'中午那张有太多 ',word:'glare',after:'，傍晚拍的更清楚。'},
      {who:'me',face:'池',before:'我可以稍微 ',word:'zoom',after:'，让桥突出一些，河面也保留。'},
      {who:'other',face:'韦',before:'交稿前先 ',word:'magnify',after:' 图片，确认放大后仍然清晰。'},
      {who:'third',face:'庄',before:'傍晚的光把石头 ',word:'texture',after:' 拍出来了，这张更有味道。'},
      {who:'me',face:'池',before:'我来写 ',word:'caption',after:'，交代老桥何时修复。'},
      {who:'other',face:'韦',before:'再补一张工人的照片，整组作品就能 ',word:'spotlight',after:' 修桥的人。'}
    ],
    matchOrder:[6,2,4,0,7,3,1,5]
  }
};
