import express from 'express';
import bodyParser = require('body-parser');

const xuelijiaoyu = express();
xuelijiaoyu.use(bodyParser.json());
export class lesson{
    constructor(
        public id:number,
        public lessonName:string,
        public images:string,
        public task:number,
        public person:number
    ){}
}
export class task{
	constructor(
		public id:number,
		public taskName:string,
		public author:string,
		public time:string,
		public Fraction:number,
		public WaitCount:number,
		public UnfinishedCount:number,
		public AcceptedCount:number
	){}
}
export class course{
	constructor(
		public id:number,
		public courseName:string,
		public images:string,
		public content:string,
		public classHour:number,
		public person:number
	){}
}
export class community{
	constructor(
		public id:number,
		public communityName:string,
		public images:string,
		public content:string,
		public Publisher:string,
		public time:string,
		public readcount:number,
		public commentcount:number
	){}
}
export class conversation{
	constructor(
		public content:string,
		public Number:string
	){}
}
const lessons = [
	new lesson(1,'2016�����Ӧ�ÿ���',
	'http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130',
	10,90),
	new lesson(2,'javascript',
	'http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130',
	15,92),
	new lesson(3,'HTML5+CSS3+Bootstrap',
	'http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130',
	20,76),
	new lesson(4,'���ݽṹ',
	'http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130',
	17,85),
	new lesson(5,'2017��Web����(��)',
	'http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130',
	25,90),
	new lesson(6,'2016���������',
	'http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130',
	2,52),
	new lesson(7,'2017��3��4���������',
	'http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130',
	5,54),
	new lesson(8,'2018����Ϣ����ʵ��',
	'http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130',
	3,57),
	new lesson(9,'2018�����������',
	'http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130',
	4,105),
	new lesson(10,'2017������ԭ��',
	'http://usercontent.edu2act.cn/media/team/18-03-07/BGWzBhRgmujgPmLn4efeFd.png?imageView2/1/w/230/h/130',
	12,125),
	new lesson(11,'2017��������ƻ���:C����',
	'http://usercontent.edu2act.cn/media/team/18-03-05/5AmFY6EtdvJUXsJKVAPXqK.jpg?imageView2/1/w/230/h/130',
	5,99),
	new lesson(12,'2016������ϵͳ',
	'http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130',
	15,396),

]
const tasks = [
	new task(1,'��һ����ҵ','3-��ܷ��',
	'2018-09-29 16:49',5,9,32,23),
	new task(2,'�ڶ�����ҵ','3-��ܷ��',
	'2018-10-02 12:42',3,9,3,52),
	new task(3,'��������ҵ','3-��ܷ��',
	'2018-10-09 14:49',2,2,30,22),
	new task(4,'���Ĵ���ҵ','3-��ܷ��',
	'2018-10-19 15:32',2,9,3,25),
	new task(5,'�������ҵ','3-��ܷ��',
	'2018-10-29 12:24',20,0,3,99)
]
const courses = [
	new course(1,'Github ��Դ֮����Ƶ�γ̵�һ��������',
	'http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190',
	'��ɱ��γ�֮���ܹ��ﵽ����Ŀ�꣺- ʵ��ע�� Github �˻�- �ܹ��� Github ����������- �ܹ������˺���Ŀ�Ļ�Ծ��- ���� Github �罻��- �ܹ����� Github Զ�ֿ̲�- �ܹ�ɾ�� Github Զ�ֿ̲�- �ܹ��������زֿ�- �ܹ��ѱ��زֿ��Զ�ֿ̲⽨������- �ܹ��ڱ��زֿ��Զ�ɲֿ�֮�� push �� pull',
	24,4524),
	new course(2,'CSS3����',
	'http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190',
	'CSS3����ǰ�Ļ��������������µ�ѡ�����Լ��µ���ʽ�����γ̽�����CSS3����ʽ�Լ������ԡ�',
	24,424),
	new course(3,'HTML5����',
	'http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190',
	'HTML5�����µ�һ��Web��׼����ԭ��HTML4�Ļ����϶�����һЩ�µı�ǩ���µ�JavaScript API����ԭ��HTML4��׼��һ�����������γ���Ҫ����HTML5���������Լ���ӦAPI��',
	425,2455),
	new course(4,'Selenium IDE WEB�Զ�������������Ƶ�γ̣��У�',
	'http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190',
	'��ƪ���Զ������ԵĻ���֪ʶ��һЩ������Ϊ�������Զ������������̵棬Ȼ�󽲽�IDE���ߵĻ����÷���ѧ���˿���¼�Ƽ򵥵��Զ������Խű�����ƪ����ƪ����ܺܶ༼��ϸ�ڡ���������ƪ�����õ��ļ���ϸ�ڶ�������������ƪ����ƪ�����ݿ���Ӧ��80%��վ���Զ������������ˡ���ƪ��Щ�߼����⣬����ÿ���˶����õ��ģ��ʺϹǻҼ���ҡ�',
	34,742),
	new course(5,'��չ��ICONIX�������ʵ��',
	'http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190',
	'ICONIX������̵��������˼���Ǿ���������׶Σ����̷���������ڵ����������������ļ�ͳһ����(RUP)�� ���ڼ��ޱ��(XP)���������������˼�롣 ICONIX������ UML��RUP��ȣ����������Ĺ��̡���ʵ���γ��ǻ���12306��Ʊ��Ʊϵͳ������ȫ�潲��ICONIX���׶����ɵ�UMLģ���Լ�EA���ߵ�ʹ�á�',
	42,731),
	new course(6,'Selenium IDE WEB�Զ�������������Ƶ�γ� ��',
	'http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190',
	'��ƪ���Զ������ԵĻ���֪ʶ��һЩ������Ϊ�������Զ������������̵棬Ȼ�󽲽�IDE���ߵĻ����÷���ѧ���˿���¼�Ƽ򵥵��Զ������Խű���',
	43,1243),
	new course(7,'��ҳ�����뿪��',
	'http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190',
	'���γ������������������ϵ��ڿη�ʽ������ҳ�����������DreamweaverΪ���ߣ��̸�ѧ�����ٴ��վ�ķ���������ѧ���߱��ܹ��������޵Ĵ�����ٴ����վҳ���������',
	24,346),
	new course(8,'��Ʒ&���������Щ�¶�',
	'http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190',
	'���γ��Ǻ�ѧԱһ��̽�ֽ������ڲ�Ʒ��ƺͽ�����Ƶ�һЩ�����ѵ����Ͼ��尸��������һЩ�ھ������ĳЩ���ܵ�ʱ��Ҫע������⡣',
	83,3453),
	new course(9,'VR AR��Ʒ��Ƶ�˼����Ƶ�γ�',
	'http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190',
	'��2016��VRԪ�ꡱ����һ�۵������ڼ������������ҵ�����п�������VR��صĸ��ַ����о�Ҳ�ǲ�����������Google Cardboard�ȼ������ռ���VRʹ�óɱ�Ҳ�ڲ��Ͻ��͡�VR���������漰����Ϸ������ѵ���������Լ����������ȫ��ֱ����Ӧ��Ҳ��ʼ���˲��������VRӦ�ñؽ��ܿ��߳���ͳ���ǹ�������Ϸ����άģ���Ӧ�÷�Χ�������΢�š��Ա��ȳ����ֻ�Ӧ��һ�������ճ������У�������Ʒ����Ҳ��Ҫ����˽�VR������������ȫ�½Ƕȹ滮�û����󷢾򡢲�Ʒ������Ƶȹ���������Ϊ�������ҵĲȡ���෢չ������',
	453,2313),
	new course(10,'ProcessOn����ԭ�ͻ���',
	'http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190',
	'ProcessOn�ǹ��ڱȽ�������ͼ����Ʒ�������������ǿ���������ͼ���ܡ����ογ���Ҫ���������ԭ��ͼ�Ļ��ƹ��ܡ��γ���Ҫ�������¼��ProcessOn����ԭ�ͻ��ƹ��ܵ���Ҫ������ProcessOn����ԭ�ͻ��ƹ��ܵ�ʹ�ü��ɡ���΢��Ϊ��Ҫ�ο������΢��App�ĸ߱������ԭ����ơ�ProcessOn�����ǽ���ԭ�ͻ��ƹ����н�Ϊ�򵥵�һ�֣���Ҫ��ɸ�������ԭ���������ʹ��Axure�ȽϺã�',
	83,3453),
	new course(11,'ProcessOn��������ͼ',
	'http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190',
	'��������ͼ���ڲ�Ʒ��ƹ�����������н׶ηǳ���Ҫ���ֶΡ�����ͼ����������ͼ�����ṩһ�ּ򵥶�Ҫ�ġ����Ը��ͼ�����������ڿ����˽�ҵ�������ת��������ؼ���PRD�ĵ��в�������ͼ�����ÿ�����Ա��˳�����˽⹦�ܵ����̡�',
	13,434),
	new course(12,'��Ŀ����ƽ̨Redmine',
	'http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190',
	'���γ̽�������Ŀ����ƽ̨redmine�İ�װ���𡢹���Աά������ͨ�û�ʹ�ã�������ͬ����ƽ̨�����˼򵥵ĶԱȡ���ѧԱ�ܹ�������ʹ��redmine������Ŀ���ȵİ��ա�',
	21,4345)
]

const communitys = [
	new community(1,'web������������������','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg',
	'��һ��������Ҫ�غ�������Ҫ��Ϊ���������������βΣ�ʵ�Σ�������ֵ��������������������ú�������Ĺؼ���Ϊfunction������ʡ�ԣ�Ҳ��Ҫ�ܼ�д��',
	'3-��ܷ��','2018-10-13',354,32),
	new community(2,'�ඨ��ؼ������','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg',
	'JAVA�����������----�ඨ��ؼ������ static ��ʾ��̬���������������ԣ������ʹ���顣1.static�������ԣ������������ô������ԾͿ���������.��������',
	'3-��ܷ��','2018-10-13',453,43),
	new community(3,'һ��java�ļ��пɰ������main����','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg',
	'һ��java�ļ��пɰ������main����java�е�main������javaӦ�ó������ڣ�java����������ʱ�����ȵ���ִ��main��������������˵java��ֻ����һ��main��',
	'3-��ܷ��','2018-10-13',713,45),
	new community(4,'���ݽṹ�������Ա�ľ���Ӧ��','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg',
	'1. һԪ����ʽ�ı�ʾ����� ����ѧ�ϣ�һ��һԪ����ʽ\(P_{n}(x)\)������д�ɣ�\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)����n+1��ϵ��Ψһȷ����',
	'3-��ܷ��','2018-10-13',131,35),
	new community(5,'ջ�Ͷ���֮����໥ת��','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg',
	'����ʵ��ջ��Ҫ��������data��help����Ϊ�������Ƚ��ȳ�����Ҫģ��ջ�Ľṹ��ÿ��ȡջ����Ԫ��Ҳ���൱��ȡ�����ж�β��Ԫ�أ�Ҫȡdata���еĶ�βԪ',
	'3-��ܷ��','2018-10-13',242,13),
	new community(6,'web���������������ַ�������','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/qrZ4o7jdDUfyqA96vEw74A.jpg',
	'��C�����е�����������û���ַ������ͣ��ַ������ַ����飬��ô�ַ������Ա�������ǰ��JavaScript��������ַ����������������ͣ�Ҳ�����ַ��������Ǵ�',
	'3-��ܷ��','2018-10-13',421,21),
	new community(7,'JavaScript event���¼�����','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg',
	'�ڴ���DOM �ϵ�ĳ���¼�ʱ�������һ���¼����� event����������а������������¼��йص���Ϣ�����������¼���Ԫ�ء��¼��������Լ��������ض��¼���',
	'3-��ܷ��','2018-10-13',134,32),
	new community(8,'���ݽṹ������������','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg',
	'����������C.R.A.Hoare��1962�������һ�ֻ��ֽ���������������һ�ַ��εĲ��ԣ�ͨ������Ϊ���η�(Divide-and-ConquerMethod)�� ���η��Ļ���˼��',
	'3-��ܷ��','2018-10-13',453,43),
]
const conversations = [
	new conversation('# 2015��������ƻ� ... #','2��'),
	new conversation('# 2015���������� ... #','2��'),
	new conversation('# cms��ģ������ #','2��'),
	new conversation('# ���ݽṹ #','2��'),
	new conversation('# ���ݿ�ԭ��5.6. ... #','2��'),
	new conversation('# 2014��PHP���� ... #','2��'),
	new conversation('# Web����������20 ... #','2��'),
	new conversation('# 2016��������ƻ� ... #','2��'),
	new conversation('# Web����������20 ... #','2��'),
]

xuelijiaoyu.get('/api/lesson',(req,res)=>{
    res.json(lessons);
})
xuelijiaoyu.get('/api/lesson/:id', (req, res) => {
    // req.params ��ʾ��������Ǹ�id �����е�res�����ж�
    res.json(lessons.find((ele)=>ele.id == req.params.id));
});


xuelijiaoyu.get('/api/course',(req,res)=>{
    res.json(courses);
})
xuelijiaoyu.get('/api/course/:id', (req, res) => {
    // req.params ��ʾ��������Ǹ�id �����е�res�����ж�
    res.json(courses.find((ele)=>ele.id == req.params.id));
});

xuelijiaoyu.get('/api/community',(req,res)=>{
    res.json(communitys);
})
xuelijiaoyu.get('/api/task',(req,res)=>{
    res.json(tasks);
})


xuelijiaoyu.get('/api/conversation',(req,res)=>{
	res.json(conversations);
})

xuelijiaoyu.post('/api/lesson',(req,res)=>{
    res.json(lessons);
})
xuelijiaoyu.post('/api/community',(req,res)=>{
    res.json(communitys);
})

xuelijiaoyu.listen(8000);
