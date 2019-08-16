var cmen = [
		{
			"text": "语义周边角色",
			"sub": [
				{
					"text": " 主 体 角 色 ",
					"sub":[
						{
							"text": "  Agt&nbsp&nbsp&nbsp&nbsp&nbsp施事",
							"events": {
									"click": function(e){
										changeTag(this.getElementsByTagName("span")[1].innerHTML);
									}
							}
						},
						{
							"text": "    Aft&nbsp&nbsp&nbsp&nbsp&nbsp感事"
						},
						{
							"text": "    Exp&nbsp&nbsp&nbsp&nbsp&nbsp当事"
						},
						{
							"text": "    Poss&nbsp&nbsp&nbsp&nbsp&nbsp领事"
						}
					]
				},
				{
					"text": " 客 体 角 色",
					"sub": [
						{
							"text": "  Pat     受事"
						},
						{
							"text": "  Cont     客事"
						},
						{
							"text": "  Prod     成事"
						},
						{
							"text": "  Cons     结局"
						},
						{
							"text": "  Datv     涉事"
						},
						{
							"text": "  Orig     源事"
						},
						{
							"text": "  Comp     比较"
						},
						{
							"text": "  Clas     类事"
						},
						{
							"text": "  Belg     属事"
						}
					]
				},
				{
					"text": " 情 境 角 色 1",
					"sub": [
						{
							"text": "Mann	方式"
						},
						{
							"text": "Accd	依据"
						},
						{
							"text": "Reas	缘故"
						},
						{
							"text": "Int	意图"
						},
						{
							"text": "Mann	方式"
						},
						{
							"text": "Tool	工具"
						},
						{
							"text": "Matl	材料"
						},
						{
							"text": "Sco	范围"
						}
					]
				},
				{
					"text": " 情 境 角 色 2",
					"sub": [
						{
							"text": "Time	时间"
						},
						{
							"text": "Tini	时间起点"
						},
						{
							"text": "Tfin	时间终点"
						},
						{
							"text": "Tdur	时段"
						},
						{
							"text": "Trang	时距"
						},
						{
							"text": "Loc	空间"
						},
						{
							"text": "Lini	原处所"
						},
						{
							"text": "Lfin	终处所"
						},
						{
							"text": "Lthru	通过处所"
						},
						{
							"text": "Dir	趋向"
						}
					]	
				},
				{
					"text": " 情 境 角 色 3",
					"sub": [
						{
							"text": "     Quan        数量"
						},
						{
							"text": "Qp        数量短语"
						},
						{
							"text": "Nini        起始量"
						},
						{
							"text": "Nfin        终止量"
						},
						{
							"text": "Freq        频率"
						},
						{
							"text": "Seq        顺序"
						},
						{
							"text": "Nvar        变化量"
						},
						{
							"text": "Desc        描写"
						},
						{
							"text": "Host        宿主"
						},
						{
							"text": "Nmod	名称修饰语"
						},
						{
							"text": "Tmod	时间修饰语"
						},
						{
							"text": "Stat	状态"
						},
						{
							"text": "Sini	起始状态"
						},
						{
							"text": "Sfin	终止状态"
						},
						{
							"text": "Sproc	历经状态"
						}
					]	
				}
			]
		},
		{
			"text": "语义结构关系",
			"sub": [
				{
					"text": "   反关系1",
					"sub":[
						{
							"text": "rAgt	反施事"
						},
						{
							"text": "rAft	反感事"
						},
						{
							"text": "rExp	反当事"
						},
						{
							"text": "rPoss	反领事"
						},
						{
							"text": "rPat	反受事"
						},
						{
							"text": "rCont	反客事"
						},
						{
							"text": "rProd	反成事"
						},
						{
							"text": "rCons	反结局"
						},
						{
							"text": "rDatv	反涉事"
						},
						{
							"text": "rOrig	反源事"
						},
						{
							"text": "rComp	反比较"
						},
						{
							"text": "rClas	反类事"
						},
						{
							"text": "rBelg	反属事"
						}
					]
				},
				{
					"text": "   反关系2",
					"sub": [
						{
							"text": "  Pat     受事"
						},
						{
							"text": "  Cont     客事"
						},
						{
							"text": "  Prod     成事"
						},
						{
							"text": "  Cons     结局"
						},
						{
							"text": "  Datv     涉事"
						},
						{
							"text": "  Orig     源事"
						},
						{
							"text": "  Comp     比较"
						},
						{
							"text": "  Clas     类事"
						},
						{
							"text": "  Belg     属事"
						}
					]
				},
				{
					"text": " 情 境 角 色 1",
					"sub": [
						{
							"text": "Mann	方式"
						},
						{
							"text": "Accd	依据"
						},
						{
							"text": "Reas	缘故"
						},
						{
							"text": "Int	意图"
						},
						{
							"text": "Mann	方式"
						},
						{
							"text": "Tool	工具"
						},
						{
							"text": "Matl	材料"
						},
						{
							"text": "Sco	范围"
						}
					]
				},
				{
					"text": " 情 境 角 色 2",
					"sub": [
						{
							"text": "Time	时间"
						},
						{
							"text": "Tini	时间起点"
						},
						{
							"text": "Tfin	时间终点"
						},
						{
							"text": "Tdur	时段"
						},
						{
							"text": "Trang	时距"
						},
						{
							"text": "Loc	空间"
						},
						{
							"text": "Lini	原处所"
						},
						{
							"text": "Lfin	终处所"
						},
						{
							"text": "Lthru	通过处所"
						},
						{
							"text": "Dir	趋向"
						}
					]	
				},
				{
					"text": " 情 境 角 色 3",
					"sub": [
						{
							"text": "Quan	数量"
						},
						{
							"text": "Qp	数量短语"
						},
						{
							"text": "Nini	起始量"
						},
						{
							"text": "Nfin	终止量"
						},
						{
							"text": "Freq	频率"
						},
						{
							"text": "Seq	顺序"
						},
						{
							"text": "Nvar	变化量"
						},
						{
							"text": "Desc	描写"
						},
						{
							"text": "Host	宿主"
						},
						{
							"text": "Nmod	名称修饰语"
						},
						{
							"text": "Tmod	时间修饰语"
						},
						{
							"text": "Stat	状态"
						},
						{
							"text": "Sini	起始状态"
						},
						{
							"text": "Sfin	终止状态"
						},
						{
							"text": "Sproc	历经状态"
						}
					]	
				}
			]
		}
	];