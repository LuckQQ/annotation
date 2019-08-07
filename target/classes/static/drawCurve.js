//切记：每次旋转或者平移了原点之后都要保持回到原位，否则后面会很麻烦==！
function drawcurve(){
	
	hb.lineWidth = 1;// 控制线的宽度
	hb.clearRect(0,0, 6100, 1800);// 与cover大小一致

	var str = "<br><br>";
	for (var i=0; i<arcs.length; i++)
	{
			str += arcs[i].x1 + ",    " + arcs[i].x2 + "   <br>" ;
			hb.beginPath();
			
			if(arcs[i].start < arcs[i].end){           // to right
				console.log("start :" + arcs[i].start + "   end:" + arcs[i].end);
				var begin = arcs[i].x1+arcs[i].width/2+7;
				var end = arcs[i].x2 + arcs[i].width/2 - 7;
				hb.moveTo(begin, arcs[i].y1);
				hb.bezierCurveTo(begin, arcs[i].y, end, arcs[i].yy, end, arcs[i].y2);
				console.log("开始点： （" + (arcs[i].x1+arcs[i].width/2-10) + "," +(arcs[i].y1 + 3) + ")")
				console.log("控制点一： （" + (arcs[i].x1+arcs[i].width/2-10) + "," +arcs[i].y + ")")
				console.log("控制点二： （" + (arcs[i].xx) + "," +arcs[i].yy + ")")
				console.log("结束点： （" + (arcs[i].x2) + "," +arcs[i].y2 + ")")

				if(arcs[i].choose == true){
					hb.strokeStyle = "rgb(255,0,0)";// 红色
					hb.fillStyle = "rgb(255,0 , 0)";
				}
				else if(arcs[i].graph == true){
					hb.strokeStyle = "black";// 黑色
					hb.fillStyle = "black";
				}
				else{
					hb.fillStyle="blue";
					hb.strokeStyle = "blue";// 蓝色
				}
				hb.stroke();
				hb.save();
				hb.closePath();
				hb.beginPath();
				// 画箭头
				hb.translate(end, arcs[i].y2);
				
				hb.rotate(1.5);// left->right
				
				hb.lineTo(-5,-5); 
				hb.lineTo(5,0); 
				hb.lineTo(-5,5); 
				hb.lineTo(0,0); 
				hb.fill();
				hb.restore();   
				var vancas = document.getElementById('cc').getContext("2d");// 原点归为
				hb = vancas;
				arcs[i].xtxt = (begin+end)/2;// 更改弧线中心，及tag所在位置
				hb.translate(arcs[i].xtxt-10, arcs[i].ytxt-7);
				hb.fillStyle = "#E1E1DF";
				hb.fillRect(0, 0, 20, 10);
				// if(arcs[i].choose == true){
					hb.fillStyle = "rgb(255,0 , 0)";
				/*
				 * }else{ hb.fillStyle="black"; }
				 */
				hb.translate(10, 7);
				hb.textAlign = 'center';
				hb.font="14.5px serif";
				hb.fillText(arcs[i].text,0,0);
				hb.restore();
				hb.translate((-1)*arcs[i].xtxt, (-1)*arcs[i].ytxt);
				hb.closePath();
			}
			else{// to left
				hb.moveTo(arcs[i].x1-10, arcs[i].y1+3);
				hb.bezierCurveTo(arcs[i].x - 10, arcs[i].y, arcs[i].xx, arcs[i].yy, arcs[i].x2, arcs[i].y2);
				if(arcs[i].choose == true){
					hb.strokeStyle = "rgb(255,0,0)";// 红色
					hb.fillStyle = "rgb(255,0 , 0)";
				}else{
					hb.fillStyle="blue";
					hb.strokeStyle = "blue";// 黑色
				}
				hb.stroke();
				hb.save();
				hb.closePath();
				hb.beginPath();
				// 画箭头
				hb.translate(arcs[i].x2, arcs[i].y2);
				
				hb.rotate(1.6);// arrow is from right <- left
				hb.lineTo(-5,-5); 
				hb.lineTo(5,0); 
				hb.lineTo(-5,5); 
				hb.lineTo(0,0); 
				hb.fill();
				hb.restore();   
				var vancas = document.getElementById('cc').getContext("2d");// 原点归为
				hb = vancas;
				arcs[i].xtxt = (arcs[i].x - 10 +arcs[i].x2)/2;// 更改弧线中心，及tag所在位置
				hb.translate(arcs[i].xtxt-10, arcs[i].ytxt-7);
				hb.fillStyle = "#E1E1DF";// E1E1DF
				hb.fillRect(0, 0, 20, 10);
				hb.fillStyle = "rgb(255,0 , 0)";
				
				hb.translate(10, 7);
				hb.textAlign = 'center';
				hb.font="14.5px serif";
				hb.fillText(arcs[i].text,0,0);
				hb.restore();
				hb.translate((-1)*arcs[i].xtxt, (-1)*arcs[i].ytxt);
				hb.closePath();
			}
	}
	
}
