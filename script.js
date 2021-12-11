let input = document.querySelector('.search');
let output = document.querySelector('.output');
let data = [
{
  名称: 'mac子弹头口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
{
  名称: 'mac磨砂口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' },
  {
  名称: 'mac透明口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' },
  {
  名称: 'mac渐变口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' },
  {
  名称: 'mac新款唇釉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' },
  {
  名称: 'mac棒棒糖唇釉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' },
  {
  名称: 'mac12支口红套盒',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac独角兽高光',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac镭射高光',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac生姜高光',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac鼻影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac四色高光',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac双色遮瑕',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac六色遮瑕盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac烘焙腮红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac五花肉腮红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac戏精眼影系列',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac四色眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac九色眼影盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac 15色眼影盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac腮红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac散粉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac妆前乳',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac奶瓶粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac滴管粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac无暇粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac眼线笔',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac眉粉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac粉饼',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac粉底膏',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac高质量12支口红套盒',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac定妆喷雾',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac樱花高光',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac透明小眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac透明高光',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac双色腮红修容',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'mac四色腮红高光修容',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars泰姬陵',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars高潮',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars高潮限量版',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars深喉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars 12色限定眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars粉饼',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars散粉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars六色眼影磨砂限定',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars 5色综合盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars遮瑕膏',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars遮瑕液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars三色高光腮红盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars双色眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars六色眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nars修容',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior红管口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior红管唇釉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior唇釉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior腮红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior黑色睫毛膏',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
   {
  名称: 'Dior原单小奶瓶',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior粉饼',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior高版本五色眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior高版本设计师眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior修容',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior凝脂清透粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior粉底刷',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior唇刷',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior眼影刷',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior雪精灵气垫',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior限定6色眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior皮带限定眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior限定方盒眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior限定长款字母眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior烈焰蓝金口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Dior漆光口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '阿玛尼红黑口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '阿玛尼红管唇釉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '网玛尼精油粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '阿玛尼蓝标大师粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
   {
  名称: '阿玛尼银标大师粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '阿玛尼权力粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '阿玛尼红管4支套盒',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '阿玛尼红管8支套盒',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '阿玛尼红管12支套盒',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '阿玛尼红管16支套盒',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: ' 阿玛尼蓝标气垫',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '阿玛尼妆前乳',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '阿玛尼红色气垫',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '阿玛尼散粉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'TF气垫',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'TF黑管口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'TF红管口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'TF黑管新款哑光口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'TF睫毛膏',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'TF粉底棒',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'TF四色眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'TF双层眼影膏',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'TF银管口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '香奈儿磨砂口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
   {
  名称: '香奈儿口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '香奈儿coco口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '香奈儿粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '香奈儿原单果冻气垫',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '香奈儿四色眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '香奈儿狮子头高光',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '香奈儿泡泡粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '香奈儿三色修容高光盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '香奈儿山茶花高光',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '香奈儿腮红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nyx三色腮红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nyx四色眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nyx 16色眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nyx遮瑕',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nyx凤凰盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'nyx喷雾',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'ysl小金条',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'ysl圆管口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'ysl妆前乳',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'ysl黑管唇釉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
   {
  名称: 'ysl羽毛粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'ysl黑色气垫',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'ysl方管哑光唇釉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '纪梵希四宫格散粉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '纪梵希4色眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '纪梵希上海版散粉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '纪梵希小羊皮口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '纪梵希红管口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '纪梵希双色粉饼',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '纪梵希白色散粉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '纪梵希黑色限定散粉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '雅诗兰黛dw粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '雅诗兰黛dw粉底液高版本',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '雅诗兰黛双管粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '雅诗兰黛沁水粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '雅诗兰黛口红333',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '兰蔻持妆粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '兰蔻196口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '兰燕红管口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '兰蔻黑管口红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
   {
  名称: 'Rmk新款粉底霜',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Rmk粉底霜',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'Rmk粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '德国面具遮瑕',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'DC金管遮瑕',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'ipsa三色遮瑕',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '娇兰小灯泡粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '娇兰金钻粉饼',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'stila液体眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'stila腮红眼影盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'stila遮瑕盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'zovea玫瑰眼影盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'zovea南瓜眼影盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '完美日记眼影盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '大理石眼影盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '贝玲妃5色腮红高光修容',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '贝玲妃新款腮红高光修容',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '贝玲妃天外飞仙睫毛膏',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '沙漠玫瑰眼影盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '沙漠玫瑰眼影盘普通',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
   {
  名称: '沙漠黄昏',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '反转玫瑰',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '芭比布朗五花肉高光',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '芭比布朗虫草粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '3ce10支唇釉套盒',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '3ce唇釉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '3ce九宫格眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '3ce透明眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '3ce16色眼影盘',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '兰芝隔离',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'vdl提亮液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '法国大宝',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'suqqu粉液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'make up foever水粉霜',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'make up foever定妆喷雾',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'cpd黑色长管隔离',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'cpb高光',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'kate眉粉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '悦诗风呤睫毛膏',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'kiss me眼线笔',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
   {
  名称: 'kiss me睫毛膏',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '植村秀粉底刷',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '植村秀砍刀眉笔',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '植村秀睫毛夹',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '植村秀小方瓶粉底液',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '资生堂睫毛夹',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '资生堂高光PK07',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'beca腮红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'beca液体腮红',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '黛珂散粉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '衰败城市眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '衰败城市限定眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '独角兽眼影盘6色',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '独角兽眼影盘16色',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '钻石高光',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '罗拉散粉',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'F鹿儿16色眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '艺术课堂三色修容',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '安耐晒60ml',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '7支狐狸毛刷子',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
   {
  名称: '24支动物毛刷子',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '芭比布朗18支刷子',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: 'make up foever 36支刷子',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '卡拉泡泡加州挚爱眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '卡拉泡泡4色眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' }, 
  {
  名称: '卡拉泡泡单色眼影',
  //进价: '666',
  市场价: '888',
  敢敢: '666888' },];



function isMatch(value, regExp) {
  value += '';
  if (value.match(regExp)) {
    return true;
  } else {
    return false;
  }
}
function draw(data, container) {
  if (data.length) {
    let outHTML = `<table><thead><td>名称</td><td>市场价</td><td>敢敢</td></thead>`;
    data.forEach((value, index) => {
      outHTML += `<tr class="tran" style="animation-delay: ${index / 30}s">
										<td>${value.名称}</td>
										
										<td>${value.市场价}</td>
										<td>${value.敢敢}</td>
									</tr>`;
    });
    container.innerHTML = outHTML + `</table>`;
  } else {
    container.innerHTML = `<h3 class="err tran">抱歉！您的产品未找到！</h3>`;
  }
}
draw([...data], output);
input.addEventListener('keyup', e => {
  let inputData = e.target.value;
  if (inputData !== '') {
    let reg = new RegExp(inputData, 'gi');
    let outar = [...data].filter((value, index) => {
      return isMatch(value.名称, reg) ||
      //isMatch(value.//进价, reg) ||
      isMatch(value.市场价, reg) ||
      isMatch(value.敢敢, reg);
    }).map(v => {
      return {
        
        名称: v.名称.replace(reg, `<span class='accent'>${inputData}</span>`),
		////进价: v.//进价.replace(reg, `<span class='accent'>${inputData}</span>`),
		市场价: v.市场价.replace(reg, `<span class='accent'>${inputData}</span>`),
        敢敢: v.敢敢.replace(reg, `<span class='accent'>${inputData}</span>`) };

    });
    draw(outar, output);
  } else {
    draw([...data], output);
  }
});