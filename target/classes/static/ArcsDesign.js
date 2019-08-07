//单元格宽度是40，该数是写到代码里的，待改。
var CellWidth =40;   
var CellCont = CellWidth -2;
var ArcStartPx = CellWidth/2 -4;
var maxwords = 150;//要调整该值，要同时调整canvas属性width和height，还有ycoordinate的值。
var xcoordinate =new Array();
var ycoordinate = 296;
var canvasWidth = 2000;
var canvasHeight= 300;


/*****************************history page set up global variable*/
var pageline = 100;//每页显示的句子数量，从cookie上复制
var canvasStartPxinTabal = 190;

/******************************/


var Arcs = function(start, end, x1, ycoordinate, x2, xtxt, delt, text,width){


	this.start = start;
	this.end = end;

	// (x1+10, y1 + 3) 开始点
	this.x1 = x1;
	this.y1 = ycoordinate;

	// (x + 10, y) 控制点一
	this.x  = x1;
	this.y  = ycoordinate-(30-0.1*delt)*delt;//调整25这个值可以调整弧高度，越大，弧越高。

//	this.y  = ycoordinate-(30-0.1*delt)*delt;//调整25这个值可以调整弧高度，越大，弧越高。

	// (xx, yy) 控制点二	
	this.xx = x2;
	this.yy = ycoordinate-(30-0.1*delt)*delt;

	// (arcs[i].x2, arcs[i].y2) 结束点
	this.x2 = x2;
	this.y2 = ycoordinate;
	
	this.ytxt = this.y + 5 + 0.25 * (ycoordinate - this.y);//三次贝塞尔曲线可以算，有公式
	this.xtxt = xtxt;
	this.text = text;
	this.choose = false;//判断该弧是否是用户点击的弧
	this.graph = false;
	this.width = width;
};
