(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Tween36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AncMwQjNhyhujTQhtjSAAkaQAAm4DtjzQDvjzGtAAQEMAADMBvQDMBwBuDSQBuDSAAEbQAAG0jvD3QjvD2mrAAQkMAAjMhwgAkmmSQhZCGgBELQABEIBaCJQBbCIDLAAQDMAABYiHQBZiHAAkLQAAkMhaiEQhZiEjLAAQjLAAhbCDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.1,-92.8,180.2,185.7);


(lib.Tween35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AncMwQjNhyhujTQhtjSAAkaQAAm4DtjzQDvjzGtAAQEMAADMBvQDMBwBuDSQBuDSAAEbQAAG0jvD3QjvD2mrAAQkMAAjMhwgAkmmSQhZCGgBELQABEIBaCJQBbCIDLAAQDMAABYiHQBZiHAAkLQAAkMhaiEQhZiEjLAAQjLAAhbCDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.1,-92.8,180.2,185.7);


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmlToIAA2QIkYAAIAAjsIEYiDIAAiDQAAkzCciNQCdiMFWAAQEGAADOBLIiCFnQiZgviCAAQhrAAgxA+QgwA+AABfIAABxIG3AAIAAFvIm3AAIAAWQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-125.5,140.4,251.1);


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmlToIAA2QIkYAAIAAjsIEYiDIAAiDQAAkzCciNQCdiMFWAAQEGAADOBLIiCFnQiZgviCAAQhrAAgxA+QgwA+AABfIAABxIG3AAIAAFvIm3AAIAAWQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-125.5,140.4,251.1);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFfORIAAwWQAAjBhHhiQhIhhicAAQjUAAhfCKQheCIAAE9IAANLIn8AAIAA7/IGDAAIBFDlIAcAAQBUiBCWhDQCThCC+AAQFFgBCnCqQCoCpAAE+IAASQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.8,-91.2,171.6,182.5);


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFfORIAAwWQAAjBhHhiQhIhhicAAQjUAAhfCKQheCIAAE9IAANLIn8AAIAA7/IGDAAIBFDlIAcAAQBUiBCWhDQCThCC+AAQFFgBCnCqQCoCpAAE+IAASQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.8,-91.2,171.6,182.5);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AncMwQjNhyhtjTQhujTAAkZQAAm4DujzQDujzGtAAQEMAADMBvQDMBwBuDSQBuDSAAEbQAAG0jvD3QjvD2mrAAQkMAAjMhwgAklmSQhaCFAAEMQAAEIBbCJQBaCIDMAAQDLAABYiHQBZiIAAkKQAAkLhZiFQhaiEjMAAQjKAAhaCDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.1,-92.8,180.3,185.7);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AncMwQjNhyhtjTQhujTAAkZQAAm4DujzQDujzGtAAQEMAADMBvQDMBwBuDSQBuDSAAEbQAAG0jvD3QjvD2mrAAQkMAAjMhwgAklmSQhaCFAAEMQAAEIBbCJQBaCIDMAAQDLAABYiHQBZiIAAkKQAAkLhZiFQhaiEjMAAQjKAAhaCDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.1,-92.8,180.3,185.7);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApbORIAA7/IGAAAIBLEtIAYAAQBXiXCShcQCThcCtABQBpAABCAOIgmHKQg+gQhXAAQjzAAiIB5QiGB3AADXIAAORg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-91.2,120.9,182.5);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApbORIAA7/IGAAAIBLEtIAYAAQBXiXCShcQCThcCtABQBpAABCAOIgmHKQg+gQhXAAQjzAAiIB5QiGB3AADXIAAORg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-91.2,120.9,182.5);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqyLnQiniqAAk9IAAyPIH7AAIAAQWQAADBBHBhQBIBhCdAAQDTAABfiJQBfiJAAk8IAAtLIH7AAIAAb/ImFAAIhEjmIgbAAQhRB+iWBEQiUBEjAAAQlHAAimipg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.8,-91.1,171.6,182.4);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqyLnQiniqAAk9IAAyPIH7AAIAAQWQAADBBHBhQBIBhCdAAQDTAABfiJQBfiJAAk8IAAtLIH7AAIAAb/ImFAAIhEjmIgbAAQhRB+iWBEQiUBEjAAAQlHAAimipg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.8,-91.1,171.6,182.4);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApbKyQj8jvAAm1QAAnCDpj2QDqj1GbAAQGKAADcDYQDbDYAAF9IAADtIyuAAQAIDQB4B1QB5B1DWAAQCpgBCVghQCYgjCghJIAAF7QiGBAiWAfQiXAgjagBQnAAAj9jugAjhniQhcBjgNC1ILHAAQgEi2hfhiQhehiiiAAQigAAhbBig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.6,-92.8,171.3,185.7);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApbKyQj8jvAAm1QAAnCDpj2QDqj1GbAAQGKAADcDYQDbDYAAF9IAADtIyuAAQAIDQB4B1QB5B1DWAAQCpgBCVghQCYgjCghJIAAF7QiGBAiWAfQiXAgjagBQnAAAj9jugAjhniQhcBjgNC1ILHAAQgEi2hfhiQhehiiiAAQigAAhbBig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.6,-92.8,171.3,185.7);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGnSTIwg7rIgPAAQAfHWAADHIAAROInMAAMAAAgklIKKAAIQfbZIALAAQgZnNAAi4IAAxUIHQAAMAAAAklg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.8,-117.1,215.7,234.3);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGnSTIwg7rIgPAAQAfHWAADHIAAROInMAAMAAAgklIKKAAIQfbZIALAAQgZnNAAi4IAAxUIHQAAMAAAAklg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.8,-117.1,215.7,234.3);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#19426F","#060023"],[0.012,1],0,0,0,0,0,960).s().p("EiV/BY1MAAAixpMEr/AAAMAAACxpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-568.4,1920,1137);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#19426F","#060023"],[0.012,1],0,0,0,0,0,960).s().p("EiV/BY1MAAAixpMEr/AAAMAAACxpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-568.4,1920,1137);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 74
	this.instance = new lib.Tween35("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1709.5,883.9);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.29, 0.29, 0.29, 1, 0, 0, 0, 0)];
	this.instance.cache(-92,-95,184,190);

	this.instance_1 = new lib.Tween36("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1709.5,861.9);
	this.instance_1._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AncMwQjNhyhujTQhtjSAAkaQAAm4DtjzQDvjzGtAAQEMAADMBvQDMBwBuDSQBuDSAAEbQAAG0jvD3QjvD2mrAAQkMAAjMhwgAkmmSQhZCGgBELQABEIBaCJQBbCIDLAAQDMAABYiHQBZiHAAkLQAAkMhaiEQhZiEjLAAQjLAAhbCDg");
	this.shape.setTransform(1709.5,883.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},187).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.shape}]},4).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(187).to({_off:false},0).to({_off:true,y:861.9},4).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(187).to({_off:false},4).to({_off:true,y:883.9},4).wait(5));

	// Layer 73
	this.instance_2 = new lib.Tween33("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1549.2,848);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0.29, 0.29, 0.29, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-72,-127,144,255);

	this.instance_3 = new lib.Tween34("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1549.2,824);
	this.instance_3._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmlToIAA2QIkYAAIAAjsIEYiDIAAiDQAAkzCciNQCdiMFWAAQEGAADOBLIiCFnQiZgviCAAQhrAAgxA+QgwA+AABfIAABxIG3AAIAAFvIm3AAIAAWQg");
	this.shape_1.setTransform(1549.2,848);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},182).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.shape_1}]},4).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(182).to({_off:false},0).to({_off:true,y:824},3).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(182).to({_off:false},3).to({_off:true,y:848},4).wait(11));

	// Layer 72
	this.instance_4 = new lib.Tween31("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1366.8,882.3);
	this.instance_4._off = true;
	this.instance_4.filters = [new cjs.ColorFilter(0.29, 0.29, 0.29, 1, 0, 0, 0, 0)];
	this.instance_4.cache(-88,-93,176,187);

	this.instance_5 = new lib.Tween32("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1366.8,860.3);
	this.instance_5._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFfORIAAwWQAAjBhHhiQhIhhicAAQjUAAhfCKQheCIAAE9IAANLIn8AAIAA7/IGDAAIBFDlIAcAAQBUiBCWhDQCThCC+AAQFFgBCnCqQCoCpAAE+IAASQg");
	this.shape_2.setTransform(1366.8,882.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},178).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.shape_2}]},3).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(178).to({_off:false},0).to({_off:true,y:860.3},3).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(178).to({_off:false},3).to({_off:true,y:882.3},3).wait(16));

	// Layer 71
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhKAUIAAgnICVAAIgJABIAAAmg");
	this.shape_3.setTransform(1240.8,969.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhKEXIAAouICVAAIgJACIAAIsg");
	this.shape_4.setTransform(1240.8,943.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKIbIAAw1ICVAAIgJADIAAQyg");
	this.shape_5.setTransform(1240.8,917.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhKMeIAA47ICVAAIgJAEIAAY3g");
	this.shape_6.setTransform(1240.8,891.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhKQiMAAAghDICVAAIgJAFMAAAAg+g");
	this.shape_7.setTransform(1240.8,865.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhKUlMAAAgpJICVAAIgJAGMAAAApDg");
	this.shape_8.setTransform(1240.8,839.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhKYpMAAAgxRICVAAIgJAIMAAAAxJg");
	this.shape_9.setTransform(1240.8,813.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},174).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(13));

	// Layer 70
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhFAJIAAgSICLAAIAAATg");
	this.shape_10.setTransform(1215.7,972.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhFInIAAxNICLAAIAARNg");
	this.shape_11.setTransform(1215.7,918);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhFREMAAAgiHICLAAMAAAAiIg");
	this.shape_12.setTransform(1215.7,863.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhFZiMAAAgzBICLgCMAAAAzDg");
	this.shape_13.setTransform(1215.7,808.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgBFAh/MAAAhD7ICLgCMAAABD9g");
	this.shape_14.setTransform(1215.7,754.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgBFAqcMAAAhU1ICLgCMAAABU3g");
	this.shape_15.setTransform(1215.7,699.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("EgBFAlwMAAAhLcICLgDMAAABLfg");
	this.shape_16.setTransform(1215.7,730.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EgBFAhDMAAAhCDICLgCMAAABCFg");
	this.shape_17.setTransform(1215.7,760.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhFcWMAAAg4qICLgBMAAAA4rg");
	this.shape_18.setTransform(1215.7,790.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhFXpMAAAgvQICLgCMAAAAvTg");
	this.shape_19.setTransform(1215.7,821);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhFS9MAAAgl4ICLgBMAAAAl5g");
	this.shape_20.setTransform(1215.7,851.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhFOQIAA8eICLgBIAAcfg");
	this.shape_21.setTransform(1215.7,881.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhFJjIAAzFICLAAIAATGg");
	this.shape_22.setTransform(1215.7,911.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhFE2IAApsICLAAIAAJtg");
	this.shape_23.setTransform(1215.7,942.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},173).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).wait(12));

	// Layer 69
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhFAUIAAgnICLAAIAAAng");
	this.shape_24.setTransform(1189.4,973.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhFFHIAAqNICLAAIAAKNg");
	this.shape_25.setTransform(1189.4,942.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhFJ6IAAzzICLAAIAATzg");
	this.shape_26.setTransform(1189.4,910.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhFOtIAA9ZICLAAIAAdZg");
	this.shape_27.setTransform(1189.4,879.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhFTgMAAAgm/ICLAAMAAAAm/g");
	this.shape_28.setTransform(1189.4,848);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhFYTMAAAgwlICLAAMAAAAwlg");
	this.shape_29.setTransform(1189.4,816.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhFdGMAAAg6LICLAAMAAAA6Lg");
	this.shape_30.setTransform(1189.4,785.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhFaOMAAAg0bICLAAMAAAA0bg");
	this.shape_31.setTransform(1189.4,804.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhFXVMAAAguqICLAAMAAAAuqg");
	this.shape_32.setTransform(1189.4,823);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhFUdMAAAgo5ICLAAMAAAAo5g");
	this.shape_33.setTransform(1189.4,841.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhFRlMAAAgjJICLAAMAAAAjJg");
	this.shape_34.setTransform(1189.4,860.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhFL1IAA3pICLAAIAAXpg");
	this.shape_35.setTransform(1189.4,898.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhFI9IAAx4ICLAAIAAR4g");
	this.shape_36.setTransform(1189.4,917);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhFGEIAAsHICLAAIAAMHg");
	this.shape_37.setTransform(1189.4,935.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhFDMIAAmXICLAAIAAGXg");
	this.shape_38.setTransform(1189.4,954.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24}]},172).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).wait(11));

	// Layer 68
	this.instance_6 = new lib.Tween27("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1061.7,883.9);
	this.instance_6._off = true;
	this.instance_6.filters = [new cjs.ColorFilter(0.23, 0.23, 0.23, 1, 0, 0, 0, 0)];
	this.instance_6.cache(-92,-95,184,190);

	this.instance_7 = new lib.Tween28("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1061.7,843.9);
	this.instance_7._off = true;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AncMwQjNhyhtjTQhujTAAkZQAAm4DujzQDujzGtAAQEMAADMBvQDMBwBuDSQBuDSAAEbQAAG0jvD3QjvD2mrAAQkMAAjMhwgAklmSQhaCFAAEMQAAEIBbCJQBaCIDMAAQDLAABYiHQBZiIAAkKQAAkLhZiFQhaiEjMAAQjKAAhaCDg");
	this.shape_39.setTransform(1061.7,883.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},165).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.shape_39}]},3).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(165).to({_off:false},0).to({_off:true,y:843.9},4).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(165).to({_off:false},4).to({_off:true,y:883.9},3).wait(28));

	// Layer 67
	this.instance_8 = new lib.Tween25("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(888.7,902.3);
	this.instance_8._off = true;
	this.instance_8.filters = [new cjs.ColorFilter(0.23, 0.23, 0.23, 1, 0, 0, 0, 0)];
	this.instance_8.cache(-62,-93,125,187);

	this.instance_9 = new lib.Tween26("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(888.7,860.3);
	this.instance_9._off = true;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("ApbORIAA7/IGAAAIBLEtIAYAAQBXiXCShcQCThcCtABQBpAABCAOIgmHKQg+gQhXAAQjzAAiIB5QiGB3AADXIAAORg");
	this.shape_40.setTransform(888.7,882.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},160).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.shape_40}]},3).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(160).to({_off:false},0).to({_off:true,y:860.3},3).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(160).to({_off:false},3).to({_off:true,y:882.3},3).wait(34));

	// Layer 66
	this.instance_10 = new lib.Tween23("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(689.3,905.5);
	this.instance_10._off = true;
	this.instance_10.filters = [new cjs.ColorFilter(0.23, 0.23, 0.23, 1, 0, 0, 0, 0)];
	this.instance_10.cache(-88,-93,176,186);

	this.instance_11 = new lib.Tween24("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(689.3,859.5);
	this.instance_11._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AqyLnQiniqAAk9IAAyPIH7AAIAAQWQAADBBHBhQBIBhCdAAQDTAABfiJQBfiJAAk8IAAtLIH7AAIAAb/ImFAAIhEjmIgbAAQhRB+iWBEQiUBEjAAAQlHAAimipg");
	this.shape_41.setTransform(689.3,885.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},156).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.shape_41}]},3).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(156).to({_off:false},0).to({_off:true,y:859.5},2).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(156).to({_off:false},2).to({_off:true,y:885.5},3).wait(39));

	// Layer 65
	this.instance_12 = new lib.Tween21("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(477.7,903.9);
	this.instance_12._off = true;
	this.instance_12.filters = [new cjs.ColorFilter(0.23, 0.23, 0.23, 1, 0, 0, 0, 0)];
	this.instance_12.cache(-88,-95,175,190);

	this.instance_13 = new lib.Tween22("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(477.7,879.9);
	this.instance_13._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("ApbKyQj8jvAAm1QAAnCDpj2QDqj1GbAAQGKAADcDYQDbDYAAF9IAADtIyuAAQAIDQB4B1QB5B1DWAAQCpgBCVghQCYgjCghJIAAF7QiGBAiWAfQiXAgjagBQnAAAj9jugAjhniQhcBjgNC1ILHAAQgEi2hfhiQhehiiiAAQigAAhbBig");
	this.shape_42.setTransform(477.7,887.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},153).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.shape_42}]},2).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(153).to({_off:false},0).to({_off:true,y:879.9},2).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(153).to({_off:false},2).to({_off:true,y:887.9},2).wait(43));

	// Layer 64
	this.instance_14 = new lib.Tween19("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(238.3,896.4);
	this.instance_14._off = true;
	this.instance_14.filters = [new cjs.ColorFilter(0.23, 0.23, 0.23, 1, 0, 0, 0, 0)];
	this.instance_14.cache(-110,-119,220,238);

	this.instance_15 = new lib.Tween20("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(238.3,856.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},150).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(150).to({_off:false},0).to({y:836.4},2).to({_off:true,y:856.4},2).wait(46));

	// Layer 63
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-9.5,0,9.6,0).s().p("AgEBgQgngCgbgeQgbgdACgnQACgoAegaQAdgbAnACQAoACAaAeQAbAegCAmQgCAngeAbQgbAZgkAAIgFAAgAgmgrQgSAQgBAZQgCAXARASQAQASAYACQAXABASgRQATgPABgZQABgYgQgRQgRgTgYAAIgDgBQgVAAgRAPg");
	this.shape_43.setTransform(1381.6,609,4.234,4.234);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-32.8,0,32.9,0).s().p("AgPFJQiHgHhdhlQhbhlAHiIQAHiHBlhbQBlhdCHAHQCJAJBaBlQBbBlgHCGQgGCIhmBcQhdBUh9AAIgRAAgAiFiUQg+A3gDBUQgFBTA4A+QA3A9BSADQBTAGA+g5QA/g3ADhUQAEhSg3g+Qg5g+hTgDIgKgBQhLAAg6A0g");
	this.shape_44.setTransform(1381.6,606.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-25.1,0,25.1,0).s().p("AgMD7QhngFhHhNQhFhNAFhoQAGhnBNhGQBNhGBmAFQBpAGBFBOQBGBNgGBmQgFBohNBGQhGBBhfAAIgPgBgAhmhxQgvAqgDBAQgDA/ArAwQAqAvA+ACQBAAEAvgrQAwgqADhAQACg/gqgvQgrgvhAgDIgHAAQg6AAgsAng");
	this.shape_45.setTransform(1381.7,604.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-17.3,0,17.4,0).s().p("AgICuQhHgEgxg1Qgwg2AEhHQADhIA2gvQA1gxBHADQBIAFAwA1QAwA2gEBGQgDBHg2AxQgxAthCAAIgJAAgAhGhOQghAdgBAtQgDArAeAgQAdAhArACQArACAhgdQAhgdACgtQACgrgdggQgeghgsgCIgFAAQgnAAgfAbg");
	this.shape_46.setTransform(1381.7,602.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_43,p:{scaleX:4.234,scaleY:4.234,x:1381.6,y:609}}]},90).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_43,p:{scaleX:1,scaleY:1,x:1381.7,y:599.9}}]},1).wait(106));

	// Layer 61
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-12.4,0,12.4,0).s().p("AhXBYQgkgkAAg0QAAgyAkglQAlgkAyAAQAzAAAlAkQAkAlAAAyQAAA0gkAkQglAkgzAAQgyAAglgkgAg5g5QgYAZAAAgQAAAiAYAYQAYAYAhAAQAiAAAYgYQAYgYAAgiQAAghgYgYQgYgYgiAAQghAAgYAYg");
	this.shape_47.setTransform(1315,660.3,2.893,2.893);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-28,0.1,28,0.1).s().p("AjGDGQhShRAAh0QAAh0BShTQBThSBzAAQB0AABTBSQBSBTAAB0QAAB0hSBRQhTBTh0AAQhzAAhThTgAiDiBQg2A3AABLQAABLA2A3QA3A2BMAAQBMAAA3g2QA2g2AAhMQAAhMg2g2Qg3g3hMAAQhLAAg4A3g");
	this.shape_48.setTransform(1315.2,656.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-20.2,0,20.2,0).s().p("AiOCPQg8g7ABhUQgBhTA8g7QA7g8BTAAQBTAAA8A8QA8A7AABTQAABUg8A7Qg8A8hTAAQhTAAg7g8gAhehdQgnAoAAA1QAAA3AnAnQAnAnA3AAQA3AAAngnQAogmgBg4QABg2gognQgngng3AAQg2AAgoAng");
	this.shape_49.setTransform(1315.5,653.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_47,p:{scaleX:2.893,scaleY:2.893,x:1315,y:660.3}}]},85).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_47,p:{scaleX:1,scaleY:1,x:1315.8,y:649.5}}]},1).wait(112));

	// Layer 60
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-11,0,11,0).s().p("AgDBuQgtgBgfgiQggghACgtQACgtAhgfQAhggAtACQAtACAfAhQAgAhgCAtQgBAtgiAfQggAegrAAIgDAAgAgqgtQgUASgBAaQAAAZASAUQASATAaABQAaABATgSQATgTABgaQABgZgSgTQgSgUgbgBIgBAAQgZAAgSASg");
	this.shape_50.setTransform(1069.2,543.4,2.845,2.845);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-27.2,0,27.3,0).s().p("AgJERQhwgEhNhTQhOhTAFhwQAEhwBThNQBRhOBwAFQBxAEBMBTQBPBRgEBwQgEBxhTBMQhPBLhqAAIgKAAgAhqhyQgwAtgDBAQgBBBAsAwQAtAxBCABQBAACAvgsQAxguABhAQAChAgsgwQgtgwhBgDIgDAAQg+AAgvArg");
	this.shape_51.setTransform(1069.3,542);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-23.1,0,23.2,0).s().p("AgIDoQhfgDhChHQhChHAEhfQADhfBHhCQBFhCBfAEQBgADBBBHQBDBFgDBfQgDBghHBBQhDBAhaAAIgJAAgAhbhhQgpAmgCA3QgBA3AmApQAmApA4ABQA3ACAogmQApgnABg3QACg1gmgqQgmgpg4gCIgDAAQgzAAgpAlg");
	this.shape_52.setTransform(1069.6,540.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-19.1,0,19.1,0).s().p("AgGC/QhPgCg2g7Qg3g6AEhOQADhPA6g2QA5g3BOAEQBPADA2A6QA3A5gDBOQgCBPg7A2Qg3A0hLAAIgGAAgAhKhQQgiAggCAtQgBAtAfAiQAgAiAuABQAtABAhgfQAiggABgtQABgtgfghQgfgigugCIgDAAQgrAAggAeg");
	this.shape_53.setTransform(1069.8,539.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-15,0,15.1,0).s().p("AgECXQg/gCgqguQgrguADg9QACg/AtgqQAugrA9ADQA+ACArAtQArAugCA9QgCA+guArQgsApg7AAIgEAAgAg6g+QgbAYgBAkQgBAjAZAbQAYAaAkABQAkABAagYQAagZABgkQABgjgYgaQgZgbgkgBIgDAAQghAAgZAYg");
	this.shape_54.setTransform(1070,538);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50,p:{scaleX:2.845,scaleY:2.845,x:1069.2,y:543.4}}]},88).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_50,p:{scaleX:1,scaleY:1,x:1070.2,y:536.7}}]},1).wait(107));

	// Layer 59
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-13.9,0,13.9,0).s().p("AgECLQg6gCgngqQgngqACg4QACg6AqgoQAqgnA5ACQA5ACAoAqQAnAqgCA5QgCA5gqAoQgoAlg2AAIgFAAgAg/hCQgbAagCAmQgBAlAaAcQAaAcAnACQAlABAcgaQAcgaACgnQABgmgagcQgbgcgmgBIgDAAQgkAAgbAag");
	this.shape_55.setTransform(1137.7,610.6,2.441,2.441);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-29.9,0,29.9,0).s().p("AgKErQh7gEhVhaQhVhbAFh7QAEh8BbhVQBahUB7AEQB7AEBVBaQBWBbgFB7QgEB8hbBUQhWBRh2AAIgKAAgAiIiQQg8A4gDBSQgCBSA4A9QA5A8BSACQBRADA+g5QA8g4AChSQAChSg4g9Qg5g8hSgCIgHAAQhMAAg7A2g");
	this.shape_56.setTransform(1137.8,607.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-25.9,0,25.9,0).s().p("AgIEDQhrgEhKhOQhJhOAEhrQAEhrBOhKQBOhJBqAEQBrADBKBPQBKBOgEBqQgEBshOBJQhKBGhlAAIgKAAgAh1h9Qg1AwgCBIQgCBHAwA0QAyA1BHABQBGADA1gxQA0gxAChHQAChHgwg1Qgyg0hHgCIgGAAQhCAAgyAvg");
	this.shape_57.setTransform(1137.8,604.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-21.9,0,21.9,0).s().p("AgHDbQhbgDg+hCQg9hCADhaQADhbBCg+QBCg+BaADQBbADA+BCQA+BDgDBZQgDBbhCA+Qg/A7hXAAIgHAAgAhjhpQgsApgDA8QgBA8ApAsQApAsA8ACQA8ACAtgqQAsgpACg8QABg8gpgsQgpgsg8gCIgGAAQg4AAgqAog");
	this.shape_58.setTransform(1137.9,601.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-17.9,0,17.9,0).s().p("AgGCzQhJgDg0g2Qgyg2ADhJQADhKA1gzQA3gzBJADQBKACAzA3QAzA2gDBJQgDBKg2AzQgzAwhFAAIgIAAgAhQhWQglAhgCAyQgBAxAhAkQAjAkAwABQAxACAlgiQAkgiABgxQABgxghgkQgigkgxgBIgEAAQguAAgiAgg");
	this.shape_59.setTransform(1137.9,599);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55,p:{scaleX:2.441,scaleY:2.441,x:1137.7,y:610.6}}]},95).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_55,p:{scaleX:1,scaleY:1,x:1137.9,y:596.1}}]},1).wait(100));

	// Layer 58
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-14.7,0,14.8,0).s().p("AhnBoQgrgrAAg9QAAg8ArgrQArgrA8AAQA9AAArArQArArAAA8QAAA9grArQgrArg9AAQg8AAgrgrgAhGhGQgdAdAAApQAAApAdAeQAeAdAoAAQAqAAAdgdQAdgeAAgpQAAgpgdgdQgegegpAAQgoAAgeAeg");
	this.shape_60.setTransform(1157.1,442.9,2.676,2.676);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-33.2,0,33.2,0).s().p("AjqDrQhhhiAAiJQAAiJBhhhQBihhCIAAQCKAABhBhQBhBiAACIQAACJhhBiQhhBhiKAAQiIAAhihhgAieigQhDBDAABdQAABdBDBDQBCBCBcAAQBeAABChCQBChDAAhdQAAhdhChDQhDhChdAAQhcAAhCBCg");
	this.shape_61.setTransform(1157,440.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-27,0,27.1,0).s().p("Ai+DAQhQhQAAhwQAAhvBQhQQBQhPBuAAQBwAABPBPQBPBQAABvQAABwhPBQQhPBPhwAAQhuAAhQhPgAiBiCQg2A2AABMQAABMA2A2QA2A2BLAAQBNAAA1g2QA2g2AAhMQAAhMg2g2Qg2g2hMAAQhLAAg2A2g");
	this.shape_62.setTransform(1157,437.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-20.8,0,21,0).s().p("AiTCUQg9g+AAhWQAAhWA9g9QA+g9BWAAQBWAAA9A9QA9A+AABVQAABWg9A+Qg9A9hWAAQhWAAg+g9gAhjhkQgqAqAAA6QAAA7AqApQApAqA7AAQA7AAApgqQApgpAAg7QAAg6gpgqQgrgqg5AAQg7AAgpAqg");
	this.shape_63.setTransform(1157,435.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60,p:{scaleX:2.676,scaleY:2.676,x:1157.1,y:442.9}}]},145).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_60,p:{scaleX:1,scaleY:1,x:1156.9,y:432.5}}]},1).wait(51));

	// Layer 57
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-9.7,0,9.8,0).s().p("AhEBFQgcgdAAgoQAAgnAcgdQAdgdAnAAQAoAAAdAdQAcAdAAAnQAAAogcAdQgdAdgogBQgnABgdgdgAgogoQgRAQAAAYQAAAYARASQARAQAXABQAYgBARgQQARgSAAgYQAAgYgRgQQgRgSgYABQgXgBgRASg");
	this.shape_64.setTransform(974.6,441.2,3.413,3.413);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-27.4,0,27.3,0).s().p("AjADBQhQhRAAhwQAAhvBQhSQBQhQBwAAQBxAABQBQQBQBSAABvQAABwhQBRQhQBRhxAAQhwAAhQhRgAhzhzQgwAvAABEQAABDAwAyQAwAvBDABQBEgBAwgvQAwgyAAhDQAAhEgwgvQgwgxhEAAQhDAAgwAxg");
	this.shape_65.setTransform(974.7,440.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-21.5,0,21.4,0).s().p("AiXCYQg+hAgBhYQABhXA+hAQBAg/BXAAQBZAAA/A/QA+BAAABXQAABYg+BAQg/A/hZAAQhXAAhAg/gAhahbQglAmAAA1QAAA1AlAnQAlAlA1AAQA1AAAmglQAmgngBg1QABg1gmgmQgmglg1AAQg1AAglAlg");
	this.shape_66.setTransform(974.9,439.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-15.6,0,15.6,0).s().p("AhtBvQgugvAAhAQAAg/AuguQAtguBAAAQBAAAAuAuQAuAuAAA/QAABAguAvQguAthAAAQhAAAgtgtgAhBhBQgcAbAAAmQAAAnAcAcQAbAbAmAAQAnAAAbgbQAcgcgBgnQABgmgcgbQgbgcgnAAQgmAAgbAcg");
	this.shape_67.setTransform(975,438.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_64,p:{scaleX:3.413,scaleY:3.413,x:974.6,y:441.2}}]},100).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_64,p:{scaleX:1,scaleY:1,x:975.1,y:437.7}}]},1).wait(96));

	// Layer 56
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-10.8,0,10.9,0).s().p("AgBBsQgtAAgfghQgfggAAgsQABgtAggfQAhgfAsAAQAsABAgAgQAfAhgBArQAAAtghAgQgfAfgrAAIgCgBgAgqgsQgSASgBAaQgBAYASATQASASAaABQAZAAASgSQASgSABgZQAAgZgSgSQgRgTgaAAIgBAAQgYAAgSARg");
	this.shape_68.setTransform(1332.2,463.7,3.364,3.364);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-30.1,0,30.1,0).s().p("AgDEtQh9gChYhaQhWhaACh8QADh7BYhXQBbhWB7ABQB8ADBXBYQBYBbgDB6QgCB9haBXQhXBVh2AAIgHAAgAh2h6QgzAwgCBIQgCBGAyAzQAyAzBHACQBHABAzgyQAygxAChHQABhHgygyQgxgzhHgCIgDAAQhEAAgyAxg");
	this.shape_69.setTransform(1332.3,461.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-23.6,0,23.7,0).s().p("AgCDtQhjgBhEhHQhEhHABhhQAChhBGhFQBHhEBhABQBhACBFBGQBFBHgCBgQgCBihGBFQhFBDheAAIgEAAgAhdhgQgnAmgCA5QgCA2AoApQAnAoA4ABQA3ABApgnQAngnABg4QABg4gngnQgmgog5gBIgCAAQg2AAgnAmg");
	this.shape_70.setTransform(1332.4,460);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-17.2,0,17.3,0).s().p("AgCCsQhHAAgyg0Qgyg0ABhGQAChHAzgyQAzgyBHABQBHACAyAzQAyAzgCBGQAABIg0AyQgyAxhDAAIgFgBgAhEhGQgcAcgCApQgBAoAdAdQAdAeAoABQApAAAdgcQAdgdAAgpQABgogcgdQgcgdgqgBIgBAAQgnAAgdAcg");
	this.shape_71.setTransform(1332.4,458.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_68,p:{scaleX:3.364,scaleY:3.364,x:1332.2,y:463.7}}]},122).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_68,p:{scaleX:1,scaleY:1,x:1332.5,y:456.3}}]},1).wait(74));

	// Layer 55
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-102.8,-0.1,103.3,-0.1).s().p("ArWLZQkwkwAAmpQAAmoEwkxQEskvGsgBQGrABEvEvQErExABGoQgBGpkrEwQkvEwmrABQmsgBkskwgAntnwQjPDLgBElQABEhDPDOQDLDQEkAAQEnAADKjQQDRjOAAkhQgBkljQjLQjKjQknAAQkkAAjLDQg");
	this.shape_72.setTransform(1037.4,371.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-79.7,-0.1,80,-0.1).s().p("AoyI1QjsjsAAlJQAAlJDsjrQDnjrFNAAQFKAADrDrQDoDrAAFJQAAFJjoDsQjrDrlKABQlNgBjnjrgAl+mAQihCdAADjQAADgChCgQCeChDiAAQDkAACdihQChigAAjgQAAjjihidQidihjkAAQjiAAieChg");
	this.shape_73.setTransform(1037.1,375.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-56.5,0,56.8,0).s().p("AmOGQQioimAAjqQAAjoCoioQCkinDrAAQDrAACmCnQClCoAADoQAADqilCmQimCojrAAQjrAAikiogAkOkQQhyBvAAChQAACfByBxQBvBzCgAAQCiAABvhzQBzhxAAifQAAihhzhvQhvhyiiAAQigAAhvByg");
	this.shape_74.setTransform(1036.8,378.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-33.3,0,33.5,0).s().p("AjrDsQhihiAAiKQAAiJBihjQBhhiCLAAQCKAABiBiQBhBjAACJQAACKhhBiQhiBjiKAAQiLAAhhhjgAifigQhEBCAABeQAABeBEBDQBCBDBeAAQBfAABBhDQBEhDAAheQAAhehEhCQhBhDhfAAQheAAhCBDg");
	this.shape_75.setTransform(1036.5,382.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-10.1,0,10.2,0).s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAgwgwQgUAUAAAcQAAAdAUAUQAUAUAcABQAdgBAUgUQAVgUAAgdQAAgcgVgUQgUgVgdAAQgcAAgUAVg");
	this.shape_76.setTransform(1036.1,385.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_72}]},92).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).wait(104));

	// Layer 54
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-11.7,0,11.8,0).s().p("AgBB1QgwAAgigjQgigjABgwQABgxAighQAjgiAwABQAwAAAiAjQAiAjgBAwQAAAwgjAiQgiAhgvAAIgCAAgAg2g4QgYAXAAAhQgBAfAXAYQAXAYAhAAQAfABAYgXQAYgXAAghQABgggXgXQgXgYghAAIgBAAQgfAAgXAWg");
	this.shape_77.setTransform(1397.5,435.5,6.315,6.315);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-53.4,-0.1,53.2,-0.1).s().p("AgHIVQjcgCibifQiYifACjeQAFjdCdiYQCfiaDbAEQDcADCbCfQCaCfgEDbQgCDcifCbQibCWjUAAIgMAAgAj6kDQhrBpgCCWQgCCSBoBrQBnBtCWACQCSADBthpQBrhoACiUQADiVhphrQhohriUgCIgGAAQiRAAhpBkg");
	this.shape_78.setTransform(1397.9,451.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-32.6,0,32.5,0).s().p("AgEFFQiGgChfhhQhdhhACiGQADiHBfhdQBhheCGADQCGABBeBhQBfBhgDCGQgCCGhhBeQheBciBAAIgHAAgAiYieQhBBAgCBbQgBBZBABCQA+BCBbABQBZACBDhAQBBhAABhaQAChahAhBQhAhBhagCIgDAAQhZAAg/A9g");
	this.shape_79.setTransform(1398.3,468);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_77,p:{scaleX:6.315,scaleY:6.315,x:1397.5,y:435.5}}]},115).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_77,p:{scaleX:1,scaleY:1,x:1398.6,y:484.2}}]},1).wait(82));

	// Layer 53
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-14.7,0,14.8,0).s().p("AhnBoQgrgrAAg9QAAg8ArgrQArgrA8AAQA9AAArArQArArAAA8QAAA9grArQgrArg9AAQg8AAgrgrgAhGhGQgdAdAAApQAAApAdAeQAeAdAoAAQAqAAAdgdQAegeAAgpQAAgpgegdQgdgegqAAQgoAAgeAeg");
	this.shape_80.setTransform(1296.6,430.1,2.593,2.593);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-30.3,0,30.4,0).s().p("AjWDWQhZhYAAh+QAAh9BZhZQBZhZB9AAQB+AABZBZQBZBaAAB8QAAB+hZBYQhaBah9AAQh9AAhZhagAiRiSQg9A9AABVQAABVA9A9QA9A8BUABQBWgBA9g8QA8g9AAhVQAAhVg8g9Qg9g8hWAAQhUAAg9A8g");
	this.shape_81.setTransform(1296.5,429.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-22.5,0,22.6,0).s().p("AifCfQhChCABhdQgBhdBChCQBDhCBcAAQBeAABCBCQBCBDgBBcQABBdhCBCQhDBChdAAQhcAAhDhCgAhrhsQgtAtAAA/QAAA/AtAtQAtAtA+AAQBAAAAtgtQAtgtAAg/QAAg/gtgtQgtgthAAAQg+AAgtAtg");
	this.shape_82.setTransform(1296.4,429.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_80,p:{scaleX:2.593,scaleY:2.593,x:1296.6,y:430.1}}]},118).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_80,p:{scaleX:1,scaleY:1,x:1296.3,y:429}}]},1).wait(79));

	// Layer 52
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-14.2,0,14.2,0).s().p("AhjBkQgqgpAAg7QAAg6AqgpQAqgqA5AAQA7AAApAqQAqApAAA6QAAA7gqApQgpAqg7AAQg5AAgqgqgAhChCQgcAcAAAmQAAAnAcAcQAbAcAnAAQAnAAAcgcQAcgcAAgnQAAgmgcgcQgcgcgnAAQgnAAgbAcg");
	this.shape_83.setTransform(1251.5,327.1,4.404,4.404);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-46.4,0,46.3,0).s().p("AlGFJQiKiKABi/QgBjACKiIQCIiHC+AAQDBAACICHQCHCIAADAQAAC/iHCKQiICHjBAAQi+AAiIiHgAjajaQhcBaABCAQgBCBBcBaQBaBcCAAAQCBAABahcQBchagBiBQABiAhchaQhahbiBAAQiAAAhaBbg");
	this.shape_84.setTransform(1250.6,337.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-30.3,0,30.3,0).s().p("AjVDWQhZhZAAh9QAAh9BZhZQBZhYB8AAQB+AABZBYQBYBZAAB9QAAB9hYBZQhZBZh+AAQh8AAhZhZgAiOiOQg8A7AABTQAABUA8A7QA6A7BUABQBVgBA6g7QA8g7AAhUQAAhTg8g7Qg6g8hVAAQhUAAg6A8g");
	this.shape_85.setTransform(1249.6,347.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_83,p:{scaleX:4.404,scaleY:4.404,x:1251.5,y:327.1}}]},130).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_83,p:{scaleX:1,scaleY:1,x:1248.7,y:357.3}}]},1).wait(67));

	// Layer 48
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-12.4,0,12.4,0).s().p("AhXBXQgkgkAAgzQAAgyAkgkQAkglAzAAQA0AAAjAlQAlAkAAAyQAAAzglAkQgjAlg0AAQgzAAgkglgAg7g7QgZAYAAAjQAAAkAZAYQAZAZAiAAQAkAAAYgZQAZgZAAgjQAAgigZgZQgYgagkAAQgiAAgZAag");
	this.shape_86.setTransform(980,284.3,2.657,2.657);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-26,0,26.1,0).s().p("Ai3C4QhNhNAAhrQAAhrBNhMQBMhNBrAAQBsAABMBNQBNBMAABrQAABrhNBNQhMBNhsAAQhrAAhMhNgAh9h/Qg1A1AABKQAABLA1AzQA0A1BJAAQBLAAA0g1QA2g1gBhJQABhJg2g2Qg0g0hLAAQhJAAg0A0g");
	this.shape_87.setTransform(980.1,285.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-19.2,0,19.3,0).s().p("AiHCIQg4g5gBhPQABhPA4g4QA4g4BPgBQBQABA4A4QA5A4AABPQAABPg5A5Qg4A4hQABQhPgBg4g4gAhdhdQgmAnAAA2QAAA3AmAmQAnAnA2AAQA3AAAngnQAmgnAAg2QAAg2gmgnQgngmg3AAQg2AAgnAmg");
	this.shape_88.setTransform(980.2,287.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_86,p:{scaleX:2.657,scaleY:2.657,x:980,y:284.3}}]},166).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_86,p:{scaleX:1,scaleY:1,x:980.3,y:289}}]},1).wait(31));

	// Layer 47
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-12.4,0,12.4,0).s().p("AhXBYQgkglAAgzQAAgyAkglQAlgkAyAAQAzAAAlAkQAkAlAAAyQAAAzgkAlQglAkgzAAQgyAAglgkgAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_89.setTransform(921,319.1,3.7,3.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-34.7,-0.1,34.7,-0.1).s().p("Aj1D1QhmhmAAiOQAAiQBmhmQBmhmCPAAQCPAABmBmQBnBmAACQQAACOhnBmQhmBniPAAQiPAAhmhngAioioQhGBGAABjQAABhBGBGQBGBHBigBQBjABBGhHQBGhGAAhhQAAhjhGhGQhGhGhjAAQhiAAhGBGg");
	this.shape_90.setTransform(920.6,319.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-23.6,0,23.5,0).s().p("AimCnQhFhGAAhhQAAhhBFhFQBGhFBgAAQBhAABGBFQBFBFAABhQAABhhFBGQhGBFhhAAQhgAAhGhFgAhyhxQgvAvAABCQAABDAvAvQAwAwBCAAQBDAAAvgwQAwgvAAhDQAAhCgwgvQgvgwhDAAQhCAAgwAwg");
	this.shape_91.setTransform(920.3,319.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_89,p:{scaleX:3.7,scaleY:3.7,x:921,y:319.1}}]},163).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_89,p:{scaleX:1,scaleY:1,x:919.9,y:319.5}}]},1).wait(34));

	// Layer 46
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-11.1,0,11.2,0).s().p("AhOBQQghghAAgvQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAvghAhQghAgguAAQgtAAghgggAgygzQgWAWAAAdQAAAeAWAVQAVAWAdAAQAfAAAUgWQAWgVAAgeQAAgdgWgWQgUgVgfAAQgdAAgVAVg");
	this.shape_92.setTransform(865.6,346.3,5.025,5.025);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-41.2,0,41.2,0).s().p("AkiEkQh6h5AAirQAAioB6h6QB6h6CoAAQCsAAB5B6QB4B6AACoQAACrh4B5Qh5B4isABQiogBh6h4gAi8i8QhQBPAABtQAABxBQBMQBPBQBtAAQBxAABNhQQBPhMAAhxQAAhthPhPQhNhQhxAAQhtAAhPBQg");
	this.shape_93.setTransform(865.7,352.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-26.1,0,26.2,0).s().p("Ai4C6QhNhNAAhtQAAhrBNhNQBNhNBrAAQBtAABNBNQBMBNAABrQAABthMBNQhNBMhtAAQhrAAhNhMgAh4h4QgyAzAABFQAABHAyAyQAzAyBFAAQBHAAAygyQAygyAAhHQAAhFgygzQgygyhHAAQhFAAgzAyg");
	this.shape_94.setTransform(865.7,359.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_92,p:{scaleX:5.025,scaleY:5.025,x:865.6,y:346.3}}]},159).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_92,p:{scaleX:1,scaleY:1,x:865.8,y:365.6}}]},1).wait(38));

	// Layer 49
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-12,0,12,0).s().p("AhUBVQgjgjAAgyQAAgwAjgkQAjgjAxAAQAxAAAkAjQAjAkAAAwQAAAygjAjQgkAjgxAAQgxAAgjgjgAg5g5QgZAYABAhQgBAiAZAYQAYAZAhAAQAiAAAZgZQAXgYAAgiQAAghgXgYQgZgYgiAAQghAAgYAYg");
	this.shape_95.setTransform(1034.5,297.1,2.752,2.752);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-26,0,26,0).s().p("Ai3C4QhMhMAAhsQAAhrBMhLQBMhNBrAAQBrAABNBNQBMBLAABrQAABshMBMQhNBMhrAAQhrAAhMhMgAh+h9Qg0A0AABJQAABKA0A0QA1A1BJAAQBKAAA1g1QA0g0AAhKQAAhJg0g0Qg1g0hKAAQhJAAg1A0g");
	this.shape_96.setTransform(1036.2,300.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-19,0,19,0).s().p("AiFCHQg4g4AAhPQAAhNA4g4QA3g4BOAAQBPAAA4A4QA3A4AABNQAABPg3A4Qg4A3hPAAQhOAAg3g3gAhchbQglAmgBA1QABA2AlAnQAnAmA1AAQA2AAAngmQAmgnAAg2QAAg1gmgmQgngmg2AAQg1AAgnAmg");
	this.shape_97.setTransform(1037.9,303.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_95,p:{scaleX:2.752,scaleY:2.752,x:1034.5,y:297.1}}]},151).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_95,p:{scaleX:1,scaleY:1,x:1039.7,y:306.7}}]},1).wait(46));

	// Layer 50
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-11.4,0,11.5,0).s().p("AhRBRQghghAAgwQAAguAhgjQAjghAuAAQAwAAAiAhQAhAjAAAuQAAAwghAhQgiAigwAAQguAAgjgigAg3g3QgXAXAAAgQAAAhAXAWQAYAYAfAAQAgAAAYgYQAXgWAAghQAAgggXgXQgXgXghAAQgfAAgYAXg");
	this.shape_98.setTransform(1099.8,294.6,3.876,3.876);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-33.4,0,33.5,0).s().p("AjsDtQhjhjABiKQgBiJBjhkQBihiCKAAQCLAABjBiQBhBkAACJQAACKhhBjQhjBiiLAAQiKAAhihigAiiiiQhDBFAABdQAABfBDBDQBFBDBdAAQBfAABEhDQBDhDABhfQgBhdhDhFQhEhDhfgBQhdABhFBDg");
	this.shape_99.setTransform(1100,303.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-22.4,0,22.5,0).s().p("AifCgQhBhDAAhdQAAhcBBhDQBDhBBcAAQBdAABDBBQBBBDAABcQAABdhBBDQhDBBhdAAQhcAAhDhBgAhthtQgtAuAAA/QAABAAtAtQAuAtA/AAQBAAAAugtQAtgtAAhAQAAg/gtguQgugthAAAQg/AAguAtg");
	this.shape_100.setTransform(1100.2,312.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_98,p:{scaleX:3.876,scaleY:3.876,x:1099.8,y:294.6}}]},148).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_98,p:{scaleX:1,scaleY:1,x:1100.4,y:321.4}}]},1).wait(49));

	// Layer 45
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-12.1,0,12.2,0).s().p("AhVBWQgjgkgBgyQABgxAjgkQAkgjAxAAQAzAAAjAjQAjAkABAxQgBAygjAkQgjAjgzAAQgyAAgjgjgAgzg0QgXAWAAAeQAAAfAXAWQAVAWAeAAQAfAAAVgWQAXgWAAgfQAAgegXgWQgVgWgfAAQgeAAgVAWg");
	this.shape_101.setTransform(1171,356.9,8.515,8.515);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-72.9,-0.1,73,-0.1).s().p("AoEIEQjWjWAAksQAAksDWjYQDZjWErAAQEwAADVDWQDVDYABEsQgBEsjVDWQjVDVkwAAQkuAAjWjVgAk6k8QiFCFABC5QgBC6CFCBQCDCFC3AAQC6AACCiFQCDiBAAi6QAAi5iDiFQiCiEi6AAQi6AAiACEg");
	this.shape_102.setTransform(1170.7,352);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-42.5,-0.1,42.6,-0.1).s().p("AksEsQh9h8AAivQAAiuB9h/QB+h8CuAAQCxAAB8B8QB9B/AACuQAACvh9B8Qh8B9ixAAQiwAAh8h9gAi3i4QhNBNAABsQAABsBNBMQBNBNBqAAQBtAABLhNQBNhMAAhsQAAhshNhNQhLhNhtAAQhsAAhLBNg");
	this.shape_103.setTransform(1170.3,347.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_101,p:{scaleX:8.515,scaleY:8.515,x:1171,y:356.9}}]},133).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_101,p:{scaleX:1,scaleY:1,x:1170,y:342.3}}]},1).wait(64));

	// Layer 28
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.7,-19.3,26.8,-19.3).s().p("AgNAlIgNgNIABg8IAdAAIgBAxIAYAYg");
	this.shape_104.setTransform(1332,530.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.7,-14.6,26.8,-14.6).s().p("AgNBUIgNgOIACiZIAdABIgCCOIAYAYg");
	this.shape_105.setTransform(1332,526.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.7,-10,26.8,-10).s().p("AgNCCIgNgNIAEj2IAdAAIgEDrIAYAYg");
	this.shape_106.setTransform(1332,521.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.7,-5.3,26.8,-5.3).s().p("AgNCxIgNgOIAFlTIAdABIgFFHIAYAZg");
	this.shape_107.setTransform(1332,516.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.7,-0.7,26.8,-0.7).s().p("AgNDfIgNgNIAHmwIAdAAIgHGlIAYAYg");
	this.shape_108.setTransform(1332,512.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.7,3.9,26.8,3.9).s().p("AgNENIgNgNIAIoNIAdABIgIIBIAYAYg");
	this.shape_109.setTransform(1332,507.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.7,8.5,26.8,8.5).s().p("AgNE8IgNgOIAKppIAdAAIgKJeIAYAZg");
	this.shape_110.setTransform(1332,503);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.7,13.2,26.8,13.2).s().p("AgNFqIgNgNIALrGIAdAAIgLK7IAYAYg");
	this.shape_111.setTransform(1332,498.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_104}]},105).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).wait(88));

	// Layer 27
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-23.2,-44.2,6.3,-44.2).s().p("Ag9gzIApAAIBSBTIgWAUg");
	this.shape_112.setTransform(1352.6,555.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-21.2,-42.2,8.2,-42.2).s().p("AhRhHIAqAAIB4B7IgVAUg");
	this.shape_113.setTransform(1350.6,553.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-19.3,-40.2,10.2,-40.2).s().p("AhkhbIApAAICgCjIgWAUg");
	this.shape_114.setTransform(1348.7,551.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-17.3,-38.2,12.2,-38.2).s().p("Ah4hvIApAAIDIDLIgWAUg");
	this.shape_115.setTransform(1346.7,549.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-15.3,-36.2,14.2,-36.2).s().p("AiMiDIApAAIDwDzIgWAUg");
	this.shape_116.setTransform(1344.7,547.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_112}]},101).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).wait(95));

	// Layer 26
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-36.2,0.2,3.3,0.2).s().p("AgbgJIASgRIAAgQIAlAAIgBAhIg2A0g");
	this.shape_117.setTransform(1397.1,527.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-36.3,3.1,3.2,3.1).s().p("AgbAUIARgRIAChLIAkAAIgBBcIg2A1g");
	this.shape_118.setTransform(1397.2,524.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-36.3,6,3.2,6).s().p("AgcAxIASgRIACiFIAlAAIgDCWIg2A1g");
	this.shape_119.setTransform(1397.2,521.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-36.4,9,3.1,9).s().p("AgcBOIARgRIAEi/IAkAAIgDDQIg2A1g");
	this.shape_120.setTransform(1397.3,518.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-36.4,11.9,3.1,11.9).s().p("AgcBsIARgRIADj6IAlAAIgDELIg2A1g");
	this.shape_121.setTransform(1397.3,515.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-36.5,14.8,3,14.8).s().p("AgdCJIARgRIAFk1IAlABIgFFFIg2A1g");
	this.shape_122.setTransform(1397.4,512.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_117}]},99).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).wait(96));

	// Layer 25
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.7,-29.7,36.8,-29.7).s().p("AgbANIA3g0IAAA0IgcAbg");
	this.shape_123.setTransform(1363.6,557.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.5,-27,34,-27).s().p("Ag3AoIBvhqIAAA1IhUBQg");
	this.shape_124.setTransform(1366.4,554.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-8.3,-24.3,31.2,-24.3).s().p("AhTBCICmifIAAA1IiLCGg");
	this.shape_125.setTransform(1369.2,551.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-11.1,-21.6,28.4,-21.6).s().p("AhvBdIDejVIAAA1IjDC8g");
	this.shape_126.setTransform(1372,549);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-13.9,-19,25.6,-19).s().p("AiLB4IEXkKIAAA1Ij8Dwg");
	this.shape_127.setTransform(1374.8,546.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-16.7,-16.2,22.8,-16.2).s().p("AinCTIFPlBIAAA1Ik0Eog");
	this.shape_128.setTransform(1377.6,543.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_123}]},94).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).wait(101));

	// Layer 24
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.5,-19.7,3.9,-19.7).s().p("AgYA/IAEh/IAtAAIgECAg");
	this.shape_129.setTransform(1136,653.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.6,-16.4,3.8,-16.4).s().p("AgZBgIAGjAIAtAAIgGDBg");
	this.shape_130.setTransform(1136.1,649.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.7,-13.1,3.7,-13.1).s().p("AgbCBIAJkCIAuAAIgKEDg");
	this.shape_131.setTransform(1136.3,646.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.8,-9.8,3.6,-9.8).s().p("AgcCiIAMlEIAtABIgMFEg");
	this.shape_132.setTransform(1136.4,643.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.9,-6.5,3.5,-6.5).s().p("AgdDCIAOmFIAtABIgOGGg");
	this.shape_133.setTransform(1136.5,640);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-3,-3.2,3.3,-3.2).s().p("AgeDjIAQnHIAtACIgQHHg");
	this.shape_134.setTransform(1136.6,636.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-3.1,0,3.2,0).s().p("AgfEEIASoJIAtACIgSIIg");
	this.shape_135.setTransform(1136.7,633.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_129}]},88).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).wait(106));

	// Layer 21
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.7,33.7,66.3,33.7).s().p("AgFAyIg0g1IACguIAvAAIgBAcIBCBHg");
	this.shape_136.setTransform(1071.9,589.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.7,37.6,66.3,37.6).s().p("AgFBZIg0g2IAFh7IAuAAIgDBpIBCBIg");
	this.shape_137.setTransform(1071.9,585.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.7,41.6,66.3,41.6).s().p("AgFCBIg0g2IAHjLIAuABIgFC4IBCBIg");
	this.shape_138.setTransform(1071.9,581.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.7,45.5,66.3,45.5).s().p("AgFCoIg0g2IAKkZIAvABIgJEGIBCBIg");
	this.shape_139.setTransform(1071.9,577.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.7,49.5,66.3,49.5).s().p("AgFDPIg0g2IANloIAtACIgKFUIBCBIg");
	this.shape_140.setTransform(1071.9,573.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.7,53.4,66.3,53.4).s().p("AgFD3Ig0g2IAPm3IAtACIgMGjIBCBIg");
	this.shape_141.setTransform(1071.9,570);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_136}]},83).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).wait(112));

	// Layer 20
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-66.2,-34.8,5.8,-34.8).s().p("AAKAyIABgcIhEhHIA/AAIA0A2IgCAtg");
	this.shape_142.setTransform(1132.4,658.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-61.6,-29.9,10.4,-29.9).s().p("AA4BjIABgcIigipIBAAAICPCXIgCAug");
	this.shape_143.setTransform(1127.8,653.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-57,-25,15,-25).s().p("ABmCTIABgcIj8kJIBAAAIDrD4IgCAtg");
	this.shape_144.setTransform(1123.2,648.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-52.4,-20.1,19.6,-20.1).s().p("ACUDEIABgcIlYlrIA/AAIFIFaIgCAtg");
	this.shape_145.setTransform(1118.6,643.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-47.8,-15.3,24.2,-15.3).s().p("ADCD1IABgcIm0nNIA/AAIGkG8IgBAtg");
	this.shape_146.setTransform(1113.9,638.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-43.2,-10.4,28.8,-10.4).s().p("ADwEmIABgcIoQovIA/AAIIAIdIgBAug");
	this.shape_147.setTransform(1109.3,633.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-38.5,-5.5,33.5,-5.5).s().p("AEfFWIABgcIpuqQIBAAAIJdJ/IgCAtg");
	this.shape_148.setTransform(1104.7,628.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_142}]},77).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).wait(117));

	// Layer 19
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-68.5,-70.6,3.5,-70.6).s().p("AgZAZIAEhiIAvAAIgFCTg");
	this.shape_149.setTransform(1134.6,694);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-68.6,-67.6,3.4,-67.6).s().p("AgaA3IAHidIAuAAIgHDOg");
	this.shape_150.setTransform(1134.7,691);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-68.7,-64.6,3.3,-64.6).s().p("AgbBVIAJjaIAuAAIgJELg");
	this.shape_151.setTransform(1134.8,688);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-68.8,-61.6,3.2,-61.6).s().p("AgcBzIALkWIAuAAIgLFHg");
	this.shape_152.setTransform(1134.9,685);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-68.9,-58.6,3.1,-58.6).s().p("AgdCRIANlRIAuAAIgNGCg");
	this.shape_153.setTransform(1135,682);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_149}]},73).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).wait(123));

	// Layer 18
	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-63.9,16.3,5,16.3).s().p("AgkBBIAAgLIAjggIAEhWIAiAAIgGBlIgeAcg");
	this.shape_154.setTransform(1378,640.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-64.1,18.8,4.8,18.8).s().p("AglBbIAAgLIAjggIAGiKIAiABIgICYIgeAcg");
	this.shape_155.setTransform(1378.2,637.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-64.2,21.4,4.7,21.4).s().p("AgmB0IAAgKIAjghIAIi9IAiABIgKDMIgdAbg");
	this.shape_156.setTransform(1378.3,635);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-64.3,24,4.6,24).s().p("AgoCOIAAgLIAjggIAMjwIAhABIgND+IgcAcg");
	this.shape_157.setTransform(1378.4,632.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-64.4,26.5,4.5,26.5).s().p("AgpCoIAAgLIAjggIAOkkIAiACIgQExIgdAcg");
	this.shape_158.setTransform(1378.5,629.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-64.6,29.1,4.3,29.1).s().p("AgqDBIAAgLIAjggIARlWIAhABIgSFlIgdAbg");
	this.shape_159.setTransform(1378.7,627.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_154}]},79).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).wait(116));

	// Layer 17
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.6,-41,63.3,-41).s().p("Ag3AcIBvhlIAAAtIhvBmg");
	this.shape_160.setTransform(1319.7,697.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-9.4,-38,59.5,-38).s().p("AhdBZIARgtIChiSIABAAIAFgCIADAFIgTAzIioCZg");
	this.shape_161.setTransform(1323.5,694.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-13.2,-34.8,55.7,-34.8).s().p("AiDB0IAjg5IDVjCIACACIAGgCIAHAEIgnA/IjgDMg");
	this.shape_162.setTransform(1327.2,691.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-16.9,-31.6,52,-31.6).s().p("AioCPIAzhDIELjzIABADIAJgBIAJADIg5BLIkYD/g");
	this.shape_163.setTransform(1331,688.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-20.7,-28.4,48.2,-28.4).s().p("AjOCqIBEhNIFBkkIABAFIALgBIAMACIhMBXIlREyg");
	this.shape_164.setTransform(1334.8,684.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-24.5,-25.2,44.4,-25.2).s().p("Aj0DFIBVhXIF3lVIABAHIAcABIhfBiImKFlg");
	this.shape_165.setTransform(1338.6,681.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-28.3,-22,40.6,-22).s().p("AkZDgIBlhiIGtmFIABAJIAhAAIhzBuInCGYg");
	this.shape_166.setTransform(1342.3,678.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-32,-18.7,36.9,-18.7).s().p("Ak/D7IJaojIAAAMIAlAAIp/JFg");
	this.shape_167.setTransform(1346.1,675.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_160}]},72).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).wait(121));

	// Layer 16
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-69.5,3.9,3.4,3.9).s().p("AggBLIAAglIAggZIAAhXIAhAAIAABkIgFAGIg2Arg");
	this.shape_168.setTransform(1314.1,713.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-69.5,6.7,3.4,6.7).s().p("AggBnIAAgkIAggaIAAiPIAhAAIAACcIgFAGIg2Arg");
	this.shape_169.setTransform(1314.1,710.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-69.5,9.5,3.4,9.5).s().p("AggCDIAAgkIAggaIAAjHIAhAAIAADUIgFAGIg2Arg");
	this.shape_170.setTransform(1314.1,707.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-69.5,12.3,3.4,12.3).s().p("AggCfIAAgkIAggaIAAj/IAhAAIAAEMIgFAGIg2Arg");
	this.shape_171.setTransform(1314.1,704.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-69.5,15,3.4,15).s().p("AggC7IAAglIAggaIAAk2IAhAAIAAFEIgFAFIg2Asg");
	this.shape_172.setTransform(1314.1,702);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-69.5,17.8,3.4,17.8).s().p("AggDXIAAglIAggaIAAluIAhAAIAAF8IgFAFIg2Asg");
	this.shape_173.setTransform(1314.1,699.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-69.5,20.6,3.4,20.6).s().p("AggDzIAAglIAggaIAAmmIAhAAIAAG0IgFAFIg2Asg");
	this.shape_174.setTransform(1314.1,696.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-69.5,23.4,3.4,23.4).s().p("AggEPIAAglIAggaIAAneIAhAAIAAHsIgFAFIg2Asg");
	this.shape_175.setTransform(1314.1,693.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-69.5,26.2,3.4,26.2).s().p("AggErIAAglIAggaIAAoWIAhAAIAAIkIgFAFIg2Asg");
	this.shape_176.setTransform(1314.1,690.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_168}]},65).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).wait(127));

	// Layer 15
	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-6.1,-49,66.8,-49).s().p("Ag6AXIB3hdIAAAtIh5Bgg");
	this.shape_177.setTransform(1250.7,766);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-9.5,-46.4,63.4,-46.4).s().p("AheBSIASgtICriFIAAALIABABIgQAsIivCJg");
	this.shape_178.setTransform(1254.1,763.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-12.9,-43.7,60,-43.7).s().p("AiABnIAig1IDeisIAAAOIACACIgfAzIjkCyg");
	this.shape_179.setTransform(1257.5,760.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-16.3,-41.1,56.6,-41.1).s().p("AiiB8IAyg8IERjUIAAASIADABIguA7IkZDbg");
	this.shape_180.setTransform(1260.9,758.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-19.7,-38.5,53.2,-38.5).s().p("AjECSIBChFIFFj7IAAAVIADABIg+BDIlNEEg");
	this.shape_181.setTransform(1264.3,755.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-23.2,-35.9,49.7,-35.9).s().p("AjlCoIBQhNIF5kkIAAAaIAEAAIhNBLImCEug");
	this.shape_182.setTransform(1267.7,752.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-26.6,-33.3,46.3,-33.3).s().p("AkHC9IBghUIGtlMIAAAdIAEAAIhdBSIm2FYg");
	this.shape_183.setTransform(1271.1,750.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-30,-30.6,42.9,-30.6).s().p("AkpDTIBwhcIHgl0IAAAhIAFAAIhsBaInrGAg");
	this.shape_184.setTransform(1274.6,747.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-33.4,-28,39.5,-28).s().p("AlLDpIKToBIAAAlIAGAAIqbIMg");
	this.shape_185.setTransform(1278,745);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_177}]},57).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).wait(135));

	// Layer 14
	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-9.2,74,240.1,74).s().p("AhIA6IgTgTIAAhfIB0AAIAAAvIBDBDg");
	this.shape_186.setTransform(943.9,486.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-9.2,82.5,240.1,82.5).s().p("AhICPIgTgTIAAkKIB0AAIAADZIBDBEg");
	this.shape_187.setTransform(943.9,477.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-9.2,91,240.1,91).s().p("AhIDkIgTgTIAAm0IB0AAIAAGEIBDBDg");
	this.shape_188.setTransform(943.9,469.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-9.2,99.5,240.1,99.5).s().p("AhIE5IgTgTIAApeIB0AAIAAIuIBDBDg");
	this.shape_189.setTransform(943.9,460.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-9.2,108.1,240.1,108.1).s().p("AhIGOIgTgTIAAsIIB0AAIAALYIBDBDg");
	this.shape_190.setTransform(943.9,452.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-9.2,116.6,240.1,116.6).s().p("AhIHjIgTgTIAAuyIB0AAIAAOCIBDBDg");
	this.shape_191.setTransform(943.9,443.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-9.2,125.1,240.1,125.1).s().p("AhII4IgTgSIAAxdIB0AAIAAQsIBDBDg");
	this.shape_192.setTransform(943.9,435.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-9.2,133.6,240.1,133.6).s().p("AhIKNIgTgSIAA0HIB0AAIAATWIBDBDg");
	this.shape_193.setTransform(943.9,426.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_186}]},50).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).wait(143));

	// Layer 13
	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-109.7,-37.2,139.6,-37.2).s().p("AAMBpIAAhFIiMiMICkAAIBdBcIAAB1g");
	this.shape_194.setTransform(1044.5,597.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-100.2,-27.7,149.1,-27.7).s().p("ABrDIIAAhFIlKlKIClAAIEaEZIAAB2g");
	this.shape_195.setTransform(1035,588.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-90.7,-18.2,158.6,-18.2).s().p("ADKEnIAAhFIoIoIIClAAIHYHXIAAB2g");
	this.shape_196.setTransform(1025.5,578.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-81.2,-8.7,168.1,-8.7).s().p("AEpGGIAAhFIrGrGIClAAIKWKVIAAB2g");
	this.shape_197.setTransform(1016,569.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-71.7,0.8,177.6,0.8).s().p("AGIHlIAAhFIuEuEIClAAINUNTIAAB2g");
	this.shape_198.setTransform(1006.5,559.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-62.2,10.3,187.1,10.3).s().p("AHnJEIAAhFIxCxCIClAAIQSQRIAAB2g");
	this.shape_199.setTransform(997,550.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_194}]},45).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).wait(150));

	// Layer 12
	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-117.2,-70.2,132.1,-70.2).s().p("Ag9gMIAAhcIBzAAIAAAsIAJAIIAACdg");
	this.shape_200.setTransform(1052,630.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-117.2,-68.2,132.1,-68.2).s().p("Ag9AHIAAiDIBzAAIAABUIAJAIIAACdg");
	this.shape_201.setTransform(1052,628.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-117.2,-66.2,132.1,-66.2).s().p("Ag9AcIAAisIBzAAIAAB8IAJAIIAACdg");
	this.shape_202.setTransform(1052,626.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-117.2,-64.2,132.1,-64.2).s().p("Ag9AwIAAjUIBzAAIAACkIAJAHIAACeg");
	this.shape_203.setTransform(1052,624.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_200}]},42).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).wait(155));

	// Layer 11
	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-237.4,-178.6,11.9,-178.6).s().p("Ah2gUIAAi1IDtDZIAAC6g");
	this.shape_204.setTransform(1172.2,739);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-228.9,-170.8,20.4,-170.8).s().p("AjLhmIAAixIGXF1IAAC6g");
	this.shape_205.setTransform(1163.7,731.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-220.4,-163.1,28.9,-163.1).s().p("Akgi4IAAitIJBIRIAAC6g");
	this.shape_206.setTransform(1155.2,723.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-211.9,-155.3,37.4,-155.3).s().p("Al1kKIAAipILrKtIAAC6g");
	this.shape_207.setTransform(1146.7,715.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-203.4,-147.5,45.9,-147.5).s().p("AnLlbIAAimIOXNJIAAC6g");
	this.shape_208.setTransform(1138.2,707.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-194.9,-139.7,54.4,-139.7).s().p("AofmtIAAihIRAPjIAAC6g");
	this.shape_209.setTransform(1129.7,700.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-186.4,-131.9,62.9,-131.9).s().p("Ap0n/IAAieITqSBIAAC6g");
	this.shape_210.setTransform(1121.2,692.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_204}]},36).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).wait(158));

	// Layer 10
	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-12.2,193.1,116.7,193.1).s().p("AhNBYIgrgsIAAiCICMAAIAABJIBlBlg");
	this.shape_211.setTransform(1079.8,476.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-12.2,201.4,116.7,201.4).s().p("AhNCrIgrgrIAAkqICMAAIAADvIBlBmg");
	this.shape_212.setTransform(1079.8,468);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-12.2,209.8,116.7,209.8).s().p("AhND/IgrgsIAAnRICMAAIAAGXIBlBmg");
	this.shape_213.setTransform(1079.8,459.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-12.2,218.1,116.8,218.1).s().p("AhNFSIgrgrIgBp4ICNAAIAAI9IBlBmg");
	this.shape_214.setTransform(1079.8,451.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-12.2,226.5,116.8,226.5).s().p("AhMGmIgrgrIgCsgICNAAIAALlIBmBmg");
	this.shape_215.setTransform(1079.7,442.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-12.2,234.8,116.8,234.8).s().p("AhMH5IgrgrIgCvGICNAAIAAOMIBmBlg");
	this.shape_216.setTransform(1079.7,434.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-12.1,243.2,116.8,243.2).s().p("AhMJNIgrgrIgCxuICOAAIAAQzIBlBmg");
	this.shape_217.setTransform(1079.7,426.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_211}]},31).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).wait(163));

	// Layer 8
	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-114.9,79,14.1,79).s().p("AAABXIAAgjIiLiKIDFAAIBSBRIAABcg");
	this.shape_218.setTransform(1182.5,590.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-105.2,88.7,23.7,88.7).s().p("ABgC4IAAgjIlMlMIDHAAIESERIAABeg");
	this.shape_219.setTransform(1172.8,580.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-95.6,98.3,33.4,98.3).s().p("ADBEYIAAgjIoNoMIDHAAIHSHSIAABdg");
	this.shape_220.setTransform(1163.2,571.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-85.9,108,43,108).s().p("AEhF5IAAgjIrNrOIDGAAIKTKUIAABdg");
	this.shape_221.setTransform(1153.5,561.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-76.3,117.6,52.7,117.6).s().p("AGBHaIAAgkIuOuPIDHAAINUNVIAABeg");
	this.shape_222.setTransform(1143.9,551.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-66.6,127.3,62.3,127.3).s().p("AHiI6IAAgjIxPxQIDGAAIQVQWIAABdg");
	this.shape_223.setTransform(1134.2,542.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_218}]},26).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).wait(169));

	// Layer 6
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-121.8,-2.6,7.1,-2.6).s().p("AhFApIAAhSICLAAIAABSg");
	this.shape_224.setTransform(1189.4,967.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-121.8,-15.1,7.1,-15.1).s().p("AhFD0IAAnnICLAAIAAHng");
	this.shape_225.setTransform(1189.4,947.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-121.8,-27.8,7.1,-27.8).s().p("AhFG+IAAt7ICLAAIAAN7g");
	this.shape_226.setTransform(1189.4,926.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-121.8,-40.3,7.1,-40.3).s().p("AhFKIIAA0PICLAAIAAUPg");
	this.shape_227.setTransform(1189.4,906.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-121.8,-52.9,7.1,-52.9).s().p("AhFNSIAA6kICLAAIAAakg");
	this.shape_228.setTransform(1189.4,886.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-121.8,-65.5,7.1,-65.5).s().p("AhFQdMAAAgg5ICLAAMAAAAg5g");
	this.shape_229.setTransform(1189.4,866.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-121.8,-78.1,7.1,-78.1).s().p("AhFTnMAAAgnNICLAAMAAAAnNg");
	this.shape_230.setTransform(1189.4,846);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-121.8,-90.7,7.1,-90.7).s().p("AhFWxMAAAgthICLAAMAAAAthg");
	this.shape_231.setTransform(1189.4,825.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-121.8,-103.3,7.1,-103.3).s().p("AhFZ7MAAAgz1ICLAAMAAAAz1g");
	this.shape_232.setTransform(1189.4,805.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-121.8,-115.9,7.1,-115.9).s().p("AhFdGMAAAg6LICLAAMAAAA6Lg");
	this.shape_233.setTransform(1189.4,785.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_224}]},17).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).wait(174));

	// tree3
	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-11.4,109.7,119.5,109.7).s().p("AhxAhIAAgyIASgPIDRAAIhPBBg");
	this.shape_234.setTransform(1244.7,652.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-20.4,117.7,110.5,117.7).s().p("AjLBxIAAgzIDWitIDBALIkCDVg");
	this.shape_235.setTransform(1253.7,644.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-29.4,125.7,101.5,125.7).s().p("AklDAIAAgyIGclNICvAWIm2Fpg");
	this.shape_236.setTransform(1262.7,636.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-38.4,133.7,92.5,133.7).s().p("AmAEQIAAgyIJintICfAhIprH+g");
	this.shape_237.setTransform(1271.8,628.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-47.4,141.7,83.5,141.7).s().p("AnaFgIAAgyIMnqNICOAsIsfKTg");
	this.shape_238.setTransform(1280.8,620.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-56.4,149.7,74.5,149.7).s().p("Ao0GwIAAgzIPtssIB8A3IvTMog");
	this.shape_239.setTransform(1289.8,613);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-65.4,157.7,65.5,157.7).s().p("AqOIAIAAgzISyvMIBrBCIyHO9g");
	this.shape_240.setTransform(1298.8,605);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_234}]},17).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).wait(177));

	// tree2
	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-0.6,123.4,-0.6).s().p("AhKAUIAAgnICVAAIgJABIAAAmg");
	this.shape_241.setTransform(1240.8,969.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-4.2,123.4,-4.2).s().p("AhKCDIAAkFICVAAIgJABIAAEEg");
	this.shape_242.setTransform(1240.8,958.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-7.8,123.4,-7.8).s().p("AhKDyIAAnjICVAAIgJABIAAHig");
	this.shape_243.setTransform(1240.8,947.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-11.5,123.4,-11.5).s().p("AhKFhIAArBICVAAIgJABIAALAg");
	this.shape_244.setTransform(1240.8,936.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-15.1,123.4,-15.1).s().p("AhKHRIAAuhICVAAIgJADIAAOeg");
	this.shape_245.setTransform(1240.8,925);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-18.7,123.4,-18.7).s().p("AhKJAIAAx/ICVAAIgJADIAAR8g");
	this.shape_246.setTransform(1240.8,913.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-22.3,123.4,-22.3).s().p("AhKKvIAA1dICVAAIgJADIAAVag");
	this.shape_247.setTransform(1240.8,902.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-25.9,123.4,-25.9).s().p("AhKMeIAA47ICVAAIgJAEIAAY3g");
	this.shape_248.setTransform(1240.8,891.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-29.5,123.4,-29.5).s().p("AhKONIAA8aICVAAIgJAFIAAcVg");
	this.shape_249.setTransform(1240.8,880.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-33.1,123.4,-33.1).s().p("AhKP9IAA/5ICVAAIgJAFIAAf0g");
	this.shape_250.setTransform(1240.8,869.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-36.7,123.4,-36.7).s().p("AhKRsMAAAgjXICVAAIgJAFMAAAAjSg");
	this.shape_251.setTransform(1240.8,858.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-40.3,123.4,-40.3).s().p("AhKTbMAAAgm1ICVAAIgJAGMAAAAmvg");
	this.shape_252.setTransform(1240.8,847.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-44,123.4,-44).s().p("AhKVKMAAAgqTICVAAIgJAGMAAAAqNg");
	this.shape_253.setTransform(1240.8,836.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-47.6,123.4,-47.6).s().p("AhKW5MAAAgtxICVAAIgJAHMAAAAtqg");
	this.shape_254.setTransform(1240.8,825);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.5,-51.2,123.4,-51.2).s().p("AhKYpMAAAgxRICVAAIgJAIMAAAAxJg");
	this.shape_255.setTransform(1240.8,813.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_241}]},3).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).wait(183));

	// tree1
	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("AhFAPIAAgdICLAAIAAAdg");
	this.shape_256.setTransform(1215.7,969.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("AhFC4IAAlvICLAAIAAFvg");
	this.shape_257.setTransform(1215.7,953);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("AhFFhIAArBICLAAIAALBg");
	this.shape_258.setTransform(1215.7,936.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("AhFIKIAAwSICLgBIAAQTg");
	this.shape_259.setTransform(1215.7,919.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("AhFKzIAA1kICLgBIAAVlg");
	this.shape_260.setTransform(1215.7,902.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("AhFNcIAA62ICLAAIAAa2g");
	this.shape_261.setTransform(1215.7,885.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("AhFQEMAAAggGICLgBMAAAAgHg");
	this.shape_262.setTransform(1215.7,868.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("AhFStMAAAglYICLgBMAAAAlZg");
	this.shape_263.setTransform(1215.7,851.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("AhFVWMAAAgqqICLgBMAAAAqrg");
	this.shape_264.setTransform(1215.7,834.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("AhFX/MAAAgv7ICLgCMAAAAv9g");
	this.shape_265.setTransform(1215.7,818);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("AhFaoMAAAg1NICLgCMAAAA1Pg");
	this.shape_266.setTransform(1215.7,801.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("AhFdQMAAAg6eICLgBMAAAA6fg");
	this.shape_267.setTransform(1215.7,784.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("AhFf5MAAAg/vICLgCMAAAA/xg");
	this.shape_268.setTransform(1215.7,767.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("EgBFAiiMAAAhFBICLgCMAAABFDg");
	this.shape_269.setTransform(1215.7,750.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("EgBFAlLMAAAhKSICLgDMAAABKVg");
	this.shape_270.setTransform(1215.7,733.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("EgBFAn0MAAAhPkICLgDMAAABPng");
	this.shape_271.setTransform(1215.7,716.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7,0,7.1,0).s().p("EgBFAqcMAAAhU1ICLgCMAAABU3g");
	this.shape_272.setTransform(1215.7,699.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_256}]}).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).wait(184));

	// Layer 41
	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-1.8,487.1,77.3,487.1).s().p("AgQBeIAAi7IAhAAIAAC7g");
	this.shape_273.setTransform(865.7,384.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-3.7,36.1,75.4,36.1).s().p("AgKAsIgagcIAAg7IAjAAIAAAsIAmArg");
	this.shape_274.setTransform(867.7,398.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-3.7,35.4,75.4,35.4).s().p("AgKAlIgagcIAAgtIAjAAIAAAgIAmApg");
	this.shape_275.setTransform(867.7,398.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-1.8,479.5,77.3,479.5).s().p("AgQASIAAgjIAhAAIAAAjg");
	this.shape_276.setTransform(865.7,391.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-1.8,483.5,77.3,483.5).s().p("AgQA6IAAhzIAhAAIAABzg");
	this.shape_277.setTransform(865.7,387.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_274},{t:this.shape_273}]},157).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276},{t:this.shape_274}]},1).to({state:[{t:this.shape_277},{t:this.shape_274}]},1).to({state:[{t:this.shape_273},{t:this.shape_274}]},1).wait(39));

	// Layer 40
	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-70.2,-40.7,8.9,-40.7).s().p("AhYhTIAwAAICBCMIgYAag");
	this.shape_278.setTransform(934.1,475);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-67.3,-37.5,11.8,-37.5).s().p("Ah1hzIAwAAIC7DMIgYAag");
	this.shape_279.setTransform(931.2,471.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-64.3,-34.3,14.8,-34.3).s().p("AiSiTIAwAAID1EMIgYAag");
	this.shape_280.setTransform(928.3,468.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-61.4,-31.1,17.7,-31.1).s().p("AivizIAvAAIExFMIgZAag");
	this.shape_281.setTransform(925.4,465.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-58.5,-27.9,20.6,-27.9).s().p("AjNjSIAwAAIFrGLIgYAag");
	this.shape_282.setTransform(922.4,462.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-55.5,-24.7,23.6,-24.7).s().p("AjqjyIAwAAIGlHLIgYAag");
	this.shape_283.setTransform(919.5,459);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-52.6,-21.5,26.5,-21.5).s().p("AkIkSIAwAAIHhILIgZAag");
	this.shape_284.setTransform(916.6,455.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-49.7,-18.3,29.4,-18.3).s().p("AklkyIAwAAIIbJLIgYAag");
	this.shape_285.setTransform(913.6,452.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-46.7,-15.1,32.4,-15.1).s().p("AlClSIAvAAIJWKLIgYAag");
	this.shape_286.setTransform(910.7,449.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-43.8,-11.9,35.3,-11.9).s().p("AlglzIAwAAIKRLMIgYAag");
	this.shape_287.setTransform(907.7,446.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-40.8,-8.7,38.3,-8.7).s().p("Al9mTIAwAAILLMMIgYAag");
	this.shape_288.setTransform(904.8,443);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_278}]},146).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).wait(44));

	// Layer 39
	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-27.6,-4.5,36.7,-4.5).s().p("AC5ARIAkgiIA3AAIgjAigAkTARIAAgiIAnAAIAAAig");
	this.shape_289.setTransform(945.6,336.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-29.9,-2,34.4,-2).s().p("ACiArIBShPIA3AAIhRBPgAkqArIAAhVIAnAAIAABVg");
	this.shape_290.setTransform(947.9,334.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-32.1,1.2,32.2,1.2).s().p("ACMBLICOiLIAAgKIAnAAIAAAaIh9B7gAlABLIAAhVIAnAAIAABVg");
	this.shape_291.setTransform(950.1,331.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-32.1,8,32.2,8).s().p("ACMCPICOiMIAAiRIAnAAIAAChIh9B8gAlACPIAAhWIAnAAIAABWg");
	this.shape_292.setTransform(950.1,324.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-32.1,13.3,32.2,13.3).s().p("ACMDEICOiMIAAj7IAnAAIAAELIh9B8gAlADEIAAhWIAnAAIAABWg");
	this.shape_293.setTransform(950.1,319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_289}]},156).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).wait(40));

	// Layer 38
	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-25.8,-9.5,38.5,-9.5).s().p("ACJAgIBCg/IA3AAIhBA/gAj4AgIgJgKIAAg1IAnAAIAAAmIAWAZg");
	this.shape_294.setTransform(943.8,341.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-25.8,-9.5,38.5,-9.5).s().p("ACJAgIBCg/IA3AAIhCA/gAj4AgIgKgKIAAg1IAnAAIAAAmIAYAZg");
	this.shape_295.setTransform(943.9,341.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_294}]},155).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_294}]},1).wait(42));

	// Layer 37
	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-22.3,-28.7,42,-28.7).s().p("AghAoIhIhPIA0AAIAlApIAYAAIArgpIA3AAIhSBPg");
	this.shape_296.setTransform(940.3,361.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-22.5,-27.2,41.8,-27.2).s().p("AgjA3IhjhtIA0AAIBABHIAYAAIBKhHIA3AAIhxBtg");
	this.shape_297.setTransform(940.5,359.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-22.7,-25.7,41.6,-25.7).s().p("AglBGIh9iLIA0AAIBaBlIAYAAIBohlIA3AAIiPCLg");
	this.shape_298.setTransform(940.7,358.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-22.8,-24.2,41.5,-24.2).s().p("AgnBVIiYipIA0AAIB2CDIAYAAICGiDIA3AAIiuCpg");
	this.shape_299.setTransform(940.9,356.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-23,-22.7,41.3,-22.7).s().p("AgpBkIizjHIA0AAICRChIAYAAICkihIA4AAIjMDHg");
	this.shape_300.setTransform(941,355.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_296}]},150).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).wait(46));

	// Layer 36
	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-32.8,3,32.8,3).s().p("AEkArIAAhVIAkAAIAABVgAkNArIg6g5IAAgcIAkAAIAAANIBKBIg");
	this.shape_301.setTransform(1069.3,341.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-32.8,4.7,32.8,4.7).s().p("AEkA8IAAhfIAkAAIAABfgAkNA8Ig6g6IAAg9IAkAAIAAAvIBKBIg");
	this.shape_302.setTransform(1069.3,340.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-32.8,6.4,32.8,6.4).s().p("AEkBMIAAhqIAkAAIAABqgAkNBMIg6g5IAAheIAkAAIAABPIBKBIg");
	this.shape_303.setTransform(1069.3,338.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-32.8,8.1,32.8,8.1).s().p("AEkBdIAAh0IAkAAIAAB0gAkNBdIg6g5IAAiAIAkAAIAABxIBKBIg");
	this.shape_304.setTransform(1069.3,336.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-32.8,9.8,32.8,9.8).s().p("AEkBuIAAh/IAkAAIAAB/gAkNBuIg6g5IAAiiIAkAAIAACTIBKBIg");
	this.shape_305.setTransform(1069.3,335.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-32.8,11.5,32.8,11.5).s().p("AEkB/IAAiKIAkAAIAACKgAkNB/Ig6g5IAAjEIAkAAIAAC1IBKBIg");
	this.shape_306.setTransform(1069.3,333.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-32.8,13.2,32.8,13.2).s().p("AEkCQIAAiWIAkAAIAACWgAkNCQIg6g5IAAjmIAkAAIAADXIBKBIg");
	this.shape_307.setTransform(1069.3,331.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_301}]},147).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).wait(47));

	// Layer 35
	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-36.9,-22.3,28.7,-22.3).s().p("AgpAzIhphlIA0AAIBEBBIA7AAIBAhBIAyAAIhjBlg");
	this.shape_308.setTransform(1073.5,367.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-36.5,-20.3,29.1,-20.3).s().p("AgSBHIgbgJIiJiEIAeAAIAhALIBZBVIAaAJIAiAAIAMgEIBUhVIAsgQIANAAIAAAEIgDAHIh1B4IgeAKg");
	this.shape_309.setTransform(1073,365.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-36.2,-18.3,29.4,-18.3).s().p("AgWBbIgegSIipijIAmAAIAlAWIBtBqIAeARIAqAAIANgIIBnhqIAygfIAQAAIAFACIgDAKIiPCUIgiAVg");
	this.shape_310.setTransform(1072.8,363.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-36,-16.3,29.6,-16.3).s().p("AgZBvIghgbIjKjCIAtAAIAqAhICBB+IAiAaIAzAAIANgMIB7h+IA3gvIATAAIAJABIgBAMIirCxIgkAfg");
	this.shape_311.setTransform(1072.5,361.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-35.7,-14.3,29.9,-14.3).s().p("AgdCDIkNkFIA0AAIDpDhIA6AAIDajhIAkAAIAAAOIjvD3g");
	this.shape_312.setTransform(1072.3,359.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_308}]},143).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).wait(53));

	// Layer 34
	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.2,1.1,53.8,1.1).s().p("AgOAqIglgkIAAgvIAvAAIAAAdIA4A2g");
	this.shape_313.setTransform(1159.8,497.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.2,4.6,53.8,4.6).s().p("AgOBNIglgkIAAh1IAvAAIAABiIA4A3g");
	this.shape_314.setTransform(1159.8,493.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.2,8,53.8,8).s().p("AgOBvIglgkIAAi5IAvAAIAACmIA4A3g");
	this.shape_315.setTransform(1159.8,490.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.2,11.4,53.8,11.4).s().p("AgOCSIglgkIAAj/IAvAAIAADrIA4A4g");
	this.shape_316.setTransform(1159.8,487);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.2,14.9,53.8,14.9).s().p("AgOC0IglgkIAAlDIAvAAIAAEwIA4A3g");
	this.shape_317.setTransform(1159.8,483.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.2,18.3,53.8,18.3).s().p("AgODXIglgkIAAmJIAvAAIAAF1IA4A4g");
	this.shape_318.setTransform(1159.8,480.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.2,21.8,53.8,21.8).s().p("AgOD5IglgkIAAnNIAvAAIAAG6IA4A3g");
	this.shape_319.setTransform(1159.8,476.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-5.2,25.2,53.8,25.2).s().p("AgOEbIglgkIAAoSIAvAAIAAH/IA4A3g");
	this.shape_320.setTransform(1159.8,473.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_313}]},138).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).wait(55));

	// Layer 33
	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-51.7,-48.1,7.3,-48.1).s().p("AhIg2IBEAAIBMBLIggAhg");
	this.shape_321.setTransform(1206.4,546.6);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-49.2,-45.6,9.8,-45.6).s().p("AhhhOIBDAAICAB8IghAhg");
	this.shape_322.setTransform(1203.8,544.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-46.6,-43.1,12.4,-43.1).s().p("Ah6hnIBCAAICzCtIggAig");
	this.shape_323.setTransform(1201.3,541.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-44.1,-40.7,14.9,-40.7).s().p("AiUh/IBDAAIDmDeIghAhg");
	this.shape_324.setTransform(1198.7,539.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-41.5,-38.2,17.5,-38.2).s().p("AitiYIBCAAIEZEQIggAhg");
	this.shape_325.setTransform(1196.2,536.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-39,-35.7,20,-35.7).s().p("AjHixIBDAAIFMFBIghAig");
	this.shape_326.setTransform(1193.6,534.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-36.4,-33.3,22.6,-33.3).s().p("AjgjKIBCAAIF/FzIggAhg");
	this.shape_327.setTransform(1191.1,531.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-33.9,-30.8,25.1,-30.8).s().p("Aj6jiIBDAAIGyGkIghAhg");
	this.shape_328.setTransform(1188.5,529.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-31.3,-28.3,27.7,-28.3).s().p("AkTj7IBCAAIHlHVIggAig");
	this.shape_329.setTransform(1186,526.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_321}]},130).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).wait(62));

	// Layer 32
	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-40.6,-2.7,40.7,-2.7).s().p("AExBzIA7g8IAAgjIAqAAIAAA0IgqArgAl7gsIgagbIAAgrIAqAAIAAAbIArArg");
	this.shape_330.setTransform(1208.7,394.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-40.6,-1,40.7,-1).s().p("AExCEIA7g8IAAhCIAqAAIAABTIgqArgAl7gbIgagbIAAhNIAqAAIAAA9IArArg");
	this.shape_331.setTransform(1208.7,392.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-40.6,0.7,40.7,0.7).s().p("AExCVIA7g8IAAhfIAqAAIAABwIgqArgAl7gKIgagbIAAhvIAqAAIAABfIArArg");
	this.shape_332.setTransform(1208.7,390.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-40.6,2.4,40.7,2.4).s().p("AExCmIA7g8IAAh+IAqAAIAACPIgqArgAl7AGIgagaIAAiRIAqAAIAACBIArAqg");
	this.shape_333.setTransform(1208.7,389);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-40.6,4.1,40.7,4.1).s().p("AExC3IA7g8IAAidIAqAAIAACuIgqArgAl7AXIgagaIAAizIAqAAIAACjIArAqg");
	this.shape_334.setTransform(1208.7,387.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-40.6,5.8,40.7,5.8).s().p("AExDIIA7g8IAAi7IAqAAIAADMIgqArgAl7AoIgagbIAAjUIAqAAIAADFIArAqg");
	this.shape_335.setTransform(1208.7,385.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-40.6,7.5,40.7,7.5).s().p("AExDZIA7g8IAAjbIAqAAIAADsIgqArgAl7A5IgagbIAAj2IAqAAIAADmIArArg");
	this.shape_336.setTransform(1208.7,383.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-40.6,9.2,40.7,9.2).s().p("AExDqIA7g8IAAj5IAqAAIAAEKIgqArgAl7BKIgagbIAAkYIAqAAIAAEIIArArg");
	this.shape_337.setTransform(1208.7,382.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-40.6,10.9,40.7,10.9).s().p("AExD7IA7g8IAAkYIAqAAIAAEpIgqArgAl7BbIgagbIAAk6IAqAAIAAEqIArArg");
	this.shape_338.setTransform(1208.7,380.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-40.6,12.6,40.7,12.6).s().p("AExEMIA7g8IAAk2IAqAAIAAFHIgqArgAl7BsIgagbIAAlcIAqAAIAAFMIArArg");
	this.shape_339.setTransform(1208.7,378.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_330}]},124).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).wait(67));

	// Layer 42
	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.2,-28.9,2.2,-28.9).s().p("AgVBDIAAiFIAmAAIAACBIAFAEg");
	this.shape_340.setTransform(974.3,508.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.2,-23.1,2.2,-23.1).s().p("AgVB9IAAj5IAmAAIAAD1IAFAEg");
	this.shape_341.setTransform(974.3,502.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.2,-17.3,2.2,-17.3).s().p("AgVC3IAAltIAmAAIAAFpIAFAEg");
	this.shape_342.setTransform(974.3,496.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.2,-11.5,2.2,-11.5).s().p("AgVDxIAAnhIAmAAIAAHdIAFAEg");
	this.shape_343.setTransform(974.3,490.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.2,-5.7,2.2,-5.7).s().p("AgVErIAApVIAmAAIAAJRIAFAEg");
	this.shape_344.setTransform(974.3,485.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-2.2,0,2.2,0).s().p("AgVFlIAArJIAmAAIAALFIAFAEg");
	this.shape_345.setTransform(974.3,479.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_340}]},94).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).wait(101));

	// Layer 31
	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-47.5,-35,33.8,-35).s().p("AgvArIhUhVIA8AAIAqAqIA6AAIArgqIA8AAIhVBVg");
	this.shape_346.setTransform(1215.6,426.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-46.2,-32.3,35,-32.3).s().p("AgiBGIiJiLIA8AAIBeBgIA7AAIBGhFIA7AAIhvBwg");
	this.shape_347.setTransform(1214.4,423.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-44.9,-29.6,36.3,-29.6).s().p("AgVBhIi+jBIA7AAICUCXIA6AAIBihhIA8AAIiMCLg");
	this.shape_348.setTransform(1213.1,421);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-43.6,-26.9,37.6,-26.9).s().p("AgIB8Ijzj3IA7AAIDIDNIA7AAIB9h9IA8AAIinCng");
	this.shape_349.setTransform(1211.8,418.3);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-42.3,-24.2,38.9,-24.2).s().p("AAECXIknktIA7AAID9EDIA8AAICYiYIA7AAIjBDCg");
	this.shape_350.setTransform(1210.5,415.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-41,-21.4,40.2,-21.4).s().p("AARCyIlcljIA7AAIEyE5IA7AAICzi0IA8AAIjdDeg");
	this.shape_351.setTransform(1209.2,412.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-39.8,-18.7,41.5,-18.7).s().p("AAeDNImRmZIA7AAIFnFvIA7AAIDPjPIA7AAIj4D5g");
	this.shape_352.setTransform(1207.9,410.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_346}]},118).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).wait(76));

	// Layer 44
	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-3.9,1.9,36.9,1.9).s().p("AgGAwIggggIAAg/IAgAAIAAAyIAtAtg");
	this.shape_353.setTransform(1038.5,429.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-3.9,5,36.9,5).s().p("AgGBOIgggfIAAh8IAgAAIAABuIAtAtg");
	this.shape_354.setTransform(1038.5,426.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-3.9,8,36.9,8).s().p("AgGBsIgggfIAAi4IAgAAIAACqIAtAtg");
	this.shape_355.setTransform(1038.5,423.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-3.9,11,36.9,11).s().p("AgGCLIggggIAAj1IAgAAIAADoIAtAtg");
	this.shape_356.setTransform(1038.5,420.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-3.9,14.1,36.9,14.1).s().p("AgGCpIgggfIAAkyIAgAAIAAEkIAtAtg");
	this.shape_357.setTransform(1038.5,417.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-3.9,17.1,36.9,17.1).s().p("AgGDIIggggIAAlvIAgAAIAAFiIAtAtg");
	this.shape_358.setTransform(1038.5,414.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_353}]},59).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).wait(136));

	// Layer 43
	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-33.1,-30.7,7.7,-30.7).s().p("AhMg+IAvAAIBpBmIgWAXg");
	this.shape_359.setTransform(1067.7,461.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-30.9,-28.5,9.9,-28.5).s().p("AhihUIAvAAICWCRIgXAYg");
	this.shape_360.setTransform(1065.5,459.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-28.7,-26.4,12.1,-26.4).s().p("Ah4hpIAuAAIDDC8IgXAXg");
	this.shape_361.setTransform(1063.3,457.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-26.4,-24.2,14.4,-24.2).s().p("AiOh/IAuAAIDvDoIgWAXg");
	this.shape_362.setTransform(1061,455.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-24.2,-22.1,16.6,-22.1).s().p("AikiUIAuAAIEbESIgWAYg");
	this.shape_363.setTransform(1058.8,453.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-22,-19.9,18.8,-19.9).s().p("Ai7iqIAuAAIFJE+IgXAXg");
	this.shape_364.setTransform(1056.6,451.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_359}]},54).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).wait(141));

	// Layer 23
	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-81.1,-3.1,3.5,-3.1).s().p("AgiAZIAXgWIAAhdIAuAAIAABxIhFBEg");
	this.shape_365.setTransform(1295.2,529.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-81.1,1.3,3.5,1.3).s().p("AgiBFIAXgWIAAi1IAuAAIAADJIhFBDg");
	this.shape_366.setTransform(1295.2,525.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-81.1,5.6,3.5,5.6).s().p("AgiBxIAXgWIAAkMIAuAAIAAEgIhFBDg");
	this.shape_367.setTransform(1295.2,520.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-81.1,10,3.5,10).s().p("AgiCcIAXgWIAAljIAuAAIAAF3IhFBEg");
	this.shape_368.setTransform(1295.2,516.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-81.1,14.4,3.5,14.4).s().p("AgiDIIAXgWIAAm7IAuAAIAAHPIhFBDg");
	this.shape_369.setTransform(1295.2,512.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-81.1,18.7,3.5,18.7).s().p("AgiD0IAXgWIAAoSIAuAAIAAImIhFBDg");
	this.shape_370.setTransform(1295.2,507.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-81.1,23.1,3.5,23.1).s().p("AgiEfIAXgVIAApqIAuAAIAAJ9IhFBEg");
	this.shape_371.setTransform(1295.2,503.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-81.1,27.5,3.5,27.5).s().p("AgiFLIAXgWIAArBIAuAAIAALVIhFBDg");
	this.shape_372.setTransform(1295.2,499.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-81.1,31.8,3.5,31.8).s().p("AgiF3IAXgWIAAsYIAuAAIAAMsIhFBDg");
	this.shape_373.setTransform(1295.2,494.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-81.1,36.2,3.5,36.2).s().p("AgiGiIAXgVIAAtwIAuAAIAAODIhFBEg");
	this.shape_374.setTransform(1295.2,490.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_365}]},109).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).wait(82));

	// Layer 22
	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-7.3,-75.7,77.3,-75.7).s().p("AhJA3ICTiOIAABBIhyBug");
	this.shape_375.setTransform(1221.4,602.3);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-11.3,-71.5,73.3,-71.5).s().p("AhlBtIgLgMIDRjLIADACIANgMIAAAsIgKANIgGASIgiAhIgDAEIh9B5g");
	this.shape_376.setTransform(1225.4,598.1);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-15.2,-67.6,69.4,-67.6).s().p("AiXCIIERkKIAFAAIAZgTIAAAqIgWAbIgIAPIjTDOIgwAJg");
	this.shape_377.setTransform(1229.3,594.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-19.2,-64.2,65.4,-64.2).s().p("Ai/CqIFRlIIABAAIAIgIIAlgVIAAAnIgwA6IgCABIkBD7Ig6Aag");
	this.shape_378.setTransform(1233.2,590.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-23.1,-60.8,61.5,-60.8).s().p("AjmDMIGvmkIAegIIAAAkIgtA1IgHAEIgIALIk3EtIhGAsg");
	this.shape_379.setTransform(1237.2,587.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-27,-57.2,57.6,-57.2).s().p("AkODwIHJm8IAAAAIA9g7IAXAEIAAAhIgrAwIgJAEIgYAcIloFeIhRA8g");
	this.shape_380.setTransform(1241.1,583.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-31,-53.2,53.6,-53.2).s().p("Ak1EYIIloTIAAgCIA3g2IAPARIAAAeIgoArIgHACIgsAvImYGOIhdBNg");
	this.shape_381.setTransform(1245,579.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-34.9,-49.1,49.7,-49.1).s().p("AlcFBIKAptIAAgCIAygwIAHAdIAAAbIglAmIgDAAIoMIAIhnBfg");
	this.shape_382.setTransform(1249,575.7);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.lf(["#BC9C51","#CDB161","#DEC772","#EBD77E","#F2E085","#F4E387","#F1DF84","#E8D37B","#D9C06C","#C3A558","#BC9C51"],[0,0.067,0.153,0.251,0.365,0.529,0.643,0.757,0.863,0.969,1],-38.8,-45.1,45.8,-45.1).s().p("AmEFpILcrHIAAA3IAKAAIgKAAIAAg3IAtgsIAABCIgjAhIrFKyg");
	this.shape_383.setTransform(1252.9,571.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_375}]},101).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).wait(91));

	// bg
	this.instance_16 = new lib.Tween7("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(960,568.5);
	this.instance_16.alpha = 0;

	this.instance_17 = new lib.Tween8("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(960,568.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).to({state:[{t:this.instance_17}]},27).wait(173));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true,alpha:1},27).wait(173));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,568.5,1920,1137);
// library properties:
lib.properties = {
	width: 1920,
	height: 1137,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;