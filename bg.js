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



(lib.cloudclean2 = function() {
	this.initialize(img.cloudclean2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,863,341);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222321").s().p("Ag2h4IhTAAICJj2ICKD2IhTAAIABHnIhtAAg");
	this.shape.setTransform(0,0,1.762,1.762);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-64.7,48.6,129.4);


(lib.Tween69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222321").s().p("Ag2h4IhTAAICJj2ICKD2IhTAAIABHnIhtAAg");
	this.shape.setTransform(0,0,1.762,1.762);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-64.7,48.6,129.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("ADpQsIgJgQIgdgqQgigtgwgsQgygtg8grQgsghhRg1QhthGithiQjFhthhg5Qheg3g3glQhQg2g5gxQiPh9glh7QgKgegCguQgCgZAAgzIABhiQDGiWBPgxQAkgUCciQQCTiHAsgTQEDhwG8haQDeguCsgWIAAAUQiuBBjZBcQmwC4jaCHQhlA/hNBJQgnAngXAcQgdAjgKAeQgMAjAFBIQAFBJAUAdQAoA7BrA/QAqAYBJAkQAwAWBcAlIFICAQDTBSCWBDQBsAwBPApQBmAzBVA1QBhA6BTBEQAhAaAzAxQA4A6ATAZQBCBVAfBSg");
	this.shape.setTransform(117.9,106.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,235.8,213.6), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("EgwKAS1QAwjZCHjEQCcjoEZjMQB3hXCbhXQAvgbBigyQByg2AjgPQAugWBpgpICZg7QBzgqDCg6ICbgsICYgmQBvgcC4gmQDwgzE8g3IIIhaQJkhqFAhMQDYgzCjg3QA8gVBbglIAggOQAWgJAJgGIAbgNIAZgPIAYgOIAegVIAugoIAGgIIAMgRIAKgQQASghAEgfQAEgfgPgpIgEgKIOwAAQABABAOgFQANgGAAACIABB+QABA+gGAsIgKA2QgDARgMAjIgwBpIg0BNIgUAZIgqAwQgIAJgmAkQgcAchJA4QgKAKgQALIgbATQggAWgXAQQh+BPhpA1QjLBmkbBsQjdBRkSBYQi4A6k1BcInjCPQkDBNjCBCQiFAuhIAbIi0BLQhuA0gxAbIhHAoIhBAqIg7ApIg0ArQg0AsgeAmQhDBSgOBKIgEAeg");
	this.shape.setTransform(308.3,120.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,616.5,240.9), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("EgDdAgxQBEgsA4grIBAgwIA4gwQA1gvAsgvQBYhiAhhVQAohqgghyQgmiMiWigQieiqkRi0QkFisl4i2IjShfQhtgwiYhIQkWiFjmiCQj+iPjjidQj2iqjAiuQhghXhjhpQhkhrhKhjQhRhshAhyQhAh0grh5Qgph1gNh0QgMhjAAi/QAAgEQxgCIQwgBQAFATAFAPQAbBNA7BKQA/BQBoBVQBpBVCKBSQCFBQCqBQQCgBLC/BJQCzBFDMBAQBeAeBsAgIEBBOQEeBcEPBmQEeBrD/ByQI8EAGxEmQH1FVEpGCQBLBjA9BkIAAS0g");
	this.shape.setTransform(359.3,209.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,718.5,419.5), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ApVGVIAAgyIAwAAIAAAygAqiGVIAAgyIAxAAIAAAygAqKFPIgTgGQgWgJgMgRQgIgMgDgLQgDgMAAgMIAFg1IAWAAIAAAJQAAAIAKAJQAGAEAEACIAGADIAGABIAIABIAlgBIAjgHQAEAAAAgDQAAgEgSgKIgGgEIgIgDQgFgCgDAAIALgiIDBAAIAAggIAvAAIAAARIAtguQARgNAKgHIAVgLIANgEIAMgBIAMABIALAGIAHAFIAGAHQAGAHACAJQADAGAAAMIACAsIDmAAQgCgHgHgMIgHgMIgQgQQgHgHgJgDQgKgEgSAAQgQAAgKACQgKADgOAIIgNAKIAAgfQAYgRARgGQAVgFAdAAQAOAAAJAEQAGACAOAGQAPAIARASQAOAPAIAPQAGANAEAQICOAAIgbg9IAzAAIAaA9IAjAAIgag9IAyAAIAaA9IAmAAIgqhgIAzAAIApBgIBpAAIAAiqIA+AAIAAEJIx2AAIAAATQgRAYgUALQgMAHgLADIgIADIgFABgAkqCLQgbAVAAAJIAAADIBgAAIACgJIgCgdQgCgIgFgDQgFgFgJAAQgUAAgcAVgAKtELIAAkJIAhAAIAAEJgAEeBEIAAgwIAxAAIAAAwgADSBEIAAgwIAyAAIAAAwgAg+AyIAAgkIAjAAIAAAkgAD7gEIAAgyIAyAAIAAAygAFHiGIAAhfIBJhWIgHgKIAvAAIAVAiIAAA+IBGAAIAAiqIA8AAIAACEQAPgRAMgIQAigYAGgCQANgHAOAAIAKABIAVAGIACAAIAAC4gAJ1kFQgbAXADAJIBgAAIACgTQAAgRgEgHQgEgIgFgCIgKgBQgUAAgfAWgAFzjlIA4AAIAAg/gAGwljIAAgxIAxAAIAAAxgAFkljIAAgxIAxAAIAAAxg");
	this.shape.setTransform(71.8,40.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkjF5IAAgxIAxAAIAAAxgAlvF5IAAgxIAwAAIAAAxgAh6FfQgQAAgVgGQgWgIgKgHIAAhWQAJALAJAEQAKADAMAAIAQgBQARgCAGgEIAKgMIgNgDIgLgGIgRgMQgNgKgFgLQgEgMAAgOIABgNQAEgYAMgOQAOgPAVgEIAHAAIAGAAQANAAALAEQAMAGAKAJQAWAUAAAYIAAAcIBDAAIAAiqIA7AAIAACEQAOgQANgJIAngaQAPgGANAAIAKABQAPACAGADQAMAEAFAIQAFAHAHAUQAHAWAAAUIAAAIIB9AAIgag+IAyAAIAZA+IBwAAIAAiqIA+AAIAAEKIp9AAIAAADQgHAWgPAMQgJAGgKAFIggAKIgKABgACFCmQgcAUADAKIBhAAIABgTQAAgRgEgHQgEgIgFgBIgKgCQgVAAgdAYgAh2COQgIAHAAAJQAAAJAJAJQAGAGAPAHIAPAGIgCgcQgDgcgHgDIgEgCIgFAAQgKAAgGAIgAowESIAqgHQAXgHAIgKQAJgKACgIQADgGAAgGIAAgVIgRhjIBAAAIAPBgICEAAIgqhgIAzAAIAoBfIAABhIi1AAIgfAbQgRAKgTAIQgGADgMACIgvAJIgRAAgAKXEkIAAkKIA7AAIAAEKgArREkIAAkKIAaAAIAAEKgAGBBfIAAgyIAxAAIAAAygAE1BfIAAgyIAxAAIAAAygArRhtIAAi4QAJAEAFAHQAHAKAFARQAIAYAAASIAAAEIgBAEIDfAAQgDgLgGgKIgRgUIgMgJQgEgDgIgDQgFgDgIAAIgIgBIgHAAQgPAAgTAFQgQAGgNAMIABggQAXgRASgDQATgFAdAAQAZAAAUAJQAVAMAQATIALAOIAEAFIACAGIAEAHIACAHIAEAPIAABggAo8lHIAAgxIAxAAIAAAxg");
	this.shape_1.setTransform(215.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbB9IAAj5IA3AAIAAD5g");
	this.shape_2.setTransform(285.1,56.1,1.059,1.151);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJB9IAAhaIBYAAIAAifIA7AAIAAD5g");
	this.shape_3.setTransform(268.4,56.1,1.059,1.151);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhhB0IAAhaIBzAAIgZg5IAvAAIAYA5IAiAAIAABagAAWhFIAAguIAvAAIAAAugAgxhFIAAguIAvAAIAAAug");
	this.shape_4.setTransform(252.1,57.2,1.059,1.151);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiUB9IAAhaIBBAAIAAifIA4AAIAAB8QANgPAMgIIAkgYQAOgGAMAAIAKAAQAPADAFACQALAEAEAIQAGAGAGATQAGATAAAUIAAAHIAaAAIAABagAAIAGQgZAUAEAJIBZAAIACgSQAAgPgEgGQgEgHgEgCIgKgBQgUAAgcAUg");
	this.shape_5.setTransform(228.3,56.1,1.059,1.151);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYB1QgPAAgUgHQgVgHgJgHIAAhQQAJAJAIAEQAJAEAMAAIAPgBQAQgDAFgEIAKgKIgNgEIgKgFIgQgKQgNgKgDgLQgFgKAAgPIABgLQAEgXAMgNQANgOAUgEIAGgBIAGAAQAMAAAJAFQAMAFAKAJQATATAAAXIAAAaIAfAAIAABZIgfAAIgBADQgHAVgOALQgJAGgIAFIgeAKIgKABgAgUhRQgIAHAAAJQAAAIAIAJQAHAGANAGIAOAGIgCgbQgDgagGgDIgEgBIgEgBQgJAAgGAHg");
	this.shape_6.setTransform(206.3,63.6,1.059,1.151);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYCDIAAgvIAuAAIAAAvgAgvCDIAAgvIAuAAIAAAvgAhRAyIAAhZIB0AAIgmhaIAvAAIAmBZIAABag");
	this.shape_7.setTransform(184.2,64.8,1.059,1.151);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhXAtIAngHQAWgGAIgJQAIgKACgHQADgGAAgFIAAgUIgQhcIA8AAIANBaIAkAAIAABZIgjAAIgeAZQgQAKgRAHQgGADgLADIgsAIIgQAAg");
	this.shape_8.setTransform(169.2,63.4,1.059,1.151);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbB9IAAj5IA3AAIAAD5g");
	this.shape_9.setTransform(143.4,56.1,1.059,1.151);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhJB9IAAhaIBYAAIAAifIA7AAIAAD5g");
	this.shape_10.setTransform(126.7,56.1,1.059,1.151);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ai0CYIAAhaIB3AAIgZg5IAvAAIAZA5IAgAAIgXg5IAuAAIAYA5IAkAAIgnhZIAvAAIAoBZIAgAAIAABagAgNgiIAAguIAuAAIAAAugAhUgiIAAguIAuAAIAAAugAguhoIAAgvIAuAAIAAAvg");
	this.shape_11.setTransform(102.1,53,1.059,1.151);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiRB3IAAhaIDLAAQgBgGgHgMIgHgLIgPgOQgHgGgJgDQgKgEgQAAQgPAAgJACQgJACgNAIIgNAKIAAgeQAWgQARgFQAUgFAaAAQANAAAKAEQAFABANAHQAPAHAQAQQANAPAIANQAFAMAEAPIAgAAIAABagAghhVIAAghIAhAAIAAAhg");
	this.shape_12.setTransform(69.2,56.8,1.059,1.151);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiUBbIAAhaIBBAAIAAgdIAsAAIAAAQIANgPIAdgcQAQgNAKgHIATgKIANgDIALgBIALABIAKAEIAHAGIAGAGQAFAHADAIQACAGAAALIACApIAfAAIAABagAAWgdQgYATAAAKIAAABIBZAAIACgIIgCgaQgCgIgEgDQgFgFgJAAQgTAAgaAUg");
	this.shape_13.setTransform(39.8,60.1,1.059,1.151);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBuIAAgvIAtAAIAAAvgAhVBuIAAgvIAuAAIAAAvgAg+AsIgSgFQgUgJgMgQQgHgLgEgKQgCgLAAgMIAEgyIAWAAIAAAJQAAAIAJAIIAJAGIAFACIAGABIAIACIAjgCIAfgGQAFgBAAgCQAAgEgQgJIgGgDIgIgEQgEgCgDAAIALggICQAAIAABaIhAAAIAAASQgRAVgTALQgLAGgKADIgGADIgGABg");
	this.shape_14.setTransform(13.6,72.9,1.059,1.151);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiCB+IAAhaIDPAAQgDgLgGgJIgQgSIgLgJQgEgDgHgCQgFgCgIgBIgIgBIgGAAQgOAAgRAFQgPAGgMAKIAAgdQAWgQARgDQARgFAcAAQAXAAATAJQATALAQASIAKANIAEAEIACAGIADAGIADAHQADAIAAAGIAABagAgXhOIAAgvIAtAAIAAAvg");
	this.shape_15.setTransform(161.3,12.4,1.059,1.151);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiTB9IgBhaIBBAAIAAifIA4AAIAAB8QAOgQAMgHQAfgWAFgDQANgFANAAIAJABQAIABAMADQAKAEAGAIQAGAIAFARQAHAWAAARIAAADIAAAEIAZAAIAABagAAJAGQgaAWADAHIBbAAIABgSQAAgPgEgGQgEgIgFgBIgJgCQgTAAgcAVg");
	this.shape_16.setTransform(134,12.5,1.059,1.151);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhSB/IAAhaIBEhPIgGgJIArAAIAUAgIAAA4IAoAAIAABagAgoAlIAzAAIAAg5gAAQhQIAAguIAuAAIAAAugAg3hQIAAguIAuAAIAAAug");
	this.shape_17.setTransform(113.5,12.2,1.059,1.151);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbB9IAAj5IA3AAIAAD5g");
	this.shape_18.setTransform(285.1,56.1,1.059,1.151);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhJB9IAAhaIBYAAIAAifIA7AAIAAD5g");
	this.shape_19.setTransform(268.4,56.1,1.059,1.151);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhhB0IAAhaIBzAAIgZg5IAvAAIAYA5IAiAAIAABagAAWhFIAAguIAvAAIAAAugAgxhFIAAguIAvAAIAAAug");
	this.shape_20.setTransform(252.1,57.2,1.059,1.151);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiUB9IAAhaIBBAAIAAifIA4AAIAAB8QANgPAMgIIAkgYQAOgGAMAAIAKAAQAPADAFACQALAEAEAIQAGAGAGATQAGATAAAUIAAAHIAaAAIAABagAAIAGQgZAUAEAJIBZAAIACgSQAAgPgEgGQgEgHgEgCIgKgBQgUAAgcAUg");
	this.shape_21.setTransform(228.3,56.1,1.059,1.151);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYB1QgPAAgUgHQgVgHgJgHIAAhQQAJAJAIAEQAJAEAMAAIAPgBQAQgDAFgEIAKgKIgNgEIgKgFIgQgKQgNgKgDgLQgFgKAAgPIABgLQAEgXAMgNQANgOAUgEIAGgBIAGAAQAMAAAJAFQAMAFAKAJQATATAAAXIAAAaIAfAAIAABZIgfAAIgBADQgHAVgOALQgJAGgIAFIgeAKIgKABgAgUhRQgIAHAAAJQAAAIAIAJQAHAGANAGIAOAGIgCgbQgDgagGgDIgEgBIgEgBQgJAAgGAHg");
	this.shape_22.setTransform(206.3,63.6,1.059,1.151);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAYCDIAAgvIAuAAIAAAvgAgvCDIAAgvIAuAAIAAAvgAhRAyIAAhZIB0AAIgmhaIAvAAIAmBZIAABag");
	this.shape_23.setTransform(184.2,64.8,1.059,1.151);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhXAtIAngHQAWgGAIgJQAIgKACgHQADgGAAgFIAAgUIgQhcIA8AAIANBaIAkAAIAABZIgjAAIgeAZQgQAKgRAHQgGADgLADIgsAIIgQAAg");
	this.shape_24.setTransform(169.2,63.4,1.059,1.151);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbB9IAAj5IA3AAIAAD5g");
	this.shape_25.setTransform(143.4,56.1,1.059,1.151);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhJB9IAAhaIBYAAIAAifIA7AAIAAD5g");
	this.shape_26.setTransform(126.7,56.1,1.059,1.151);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ai0CYIAAhaIB3AAIgZg5IAvAAIAZA5IAgAAIgXg5IAuAAIAYA5IAkAAIgnhZIAvAAIAoBZIAgAAIAABagAgNgiIAAguIAuAAIAAAugAhUgiIAAguIAuAAIAAAugAguhoIAAgvIAuAAIAAAvg");
	this.shape_27.setTransform(102.1,53,1.059,1.151);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiRB3IAAhaIDLAAQgBgGgHgMIgHgLIgPgOQgHgGgJgDQgKgEgQAAQgPAAgJACQgJACgNAIIgNAKIAAgeQAWgQARgFQAUgFAaAAQANAAAKAEQAFABANAHQAPAHAQAQQANAPAIANQAFAMAEAPIAgAAIAABagAghhVIAAghIAhAAIAAAhg");
	this.shape_28.setTransform(69.2,56.8,1.059,1.151);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AiUBbIAAhaIBBAAIAAgdIAsAAIAAAQIANgPIAdgcQAQgNAKgHIATgKIANgDIALgBIALABIAKAEIAHAGIAGAGQAFAHADAIQACAGAAALIACApIAfAAIAABagAAWgdQgYATAAAKIAAABIBZAAIACgIIgCgaQgCgIgEgDQgFgFgJAAQgTAAgaAUg");
	this.shape_29.setTransform(39.8,60.1,1.059,1.151);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNBuIAAgvIAtAAIAAAvgAhVBuIAAgvIAuAAIAAAvgAg+AsIgSgFQgUgJgMgQQgHgLgEgKQgCgLAAgMIAEgyIAWAAIAAAJQAAAIAJAIIAJAGIAFACIAGABIAIACIAjgCIAfgGQAFgBAAgCQAAgEgQgJIgGgDIgIgEQgEgCgDAAIALggICQAAIAABaIhAAAIAAASQgRAVgTALQgLAGgKADIgGADIgGABg");
	this.shape_30.setTransform(13.6,72.9,1.059,1.151);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AiCB+IAAhaIDPAAQgDgLgGgJIgQgSIgLgJQgEgDgHgCQgFgCgIgBIgIgBIgGAAQgOAAgRAFQgPAGgMAKIAAgdQAWgQARgDQARgFAcAAQAXAAATAJQATALAQASIAKANIAEAEIACAGIADAGIADAHQADAIAAAGIAABagAgXhOIAAgvIAtAAIAAAvg");
	this.shape_31.setTransform(161.3,12.4,1.059,1.151);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AiTB9IgBhaIBBAAIAAifIA4AAIAAB8QAOgQAMgHQAfgWAFgDQANgFANAAIAJABQAIABAMADQAKAEAGAIQAGAIAFARQAHAWAAARIAAADIAAAEIAZAAIAABagAAJAGQgaAWADAHIBbAAIABgSQAAgPgEgGQgEgIgFgBIgJgCQgTAAgcAVg");
	this.shape_32.setTransform(134,12.5,1.059,1.151);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhSB/IAAhaIBEhPIgGgJIArAAIAUAgIAAA4IAoAAIAABagAgoAlIAzAAIAAg5gAAQhQIAAguIAuAAIAAAugAg3hQIAAguIAuAAIAAAug");
	this.shape_33.setTransform(113.5,12.2,1.059,1.151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,-2.4,288.1,88), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloudclean2();
	this.instance.parent = this;
	this.instance.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,-40,863,341), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhPV9MAAAgr5ICfAAMAAAAr5g");
	mask.setTransform(8,222.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#46465B").s().p("AogdsMAAAg7XIRBAAMAAAA7Xg");
	this.shape.setTransform(62.5,190);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(8,82,8,281), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhONHIr4r4QggghAAguQAAgtAgghIL4r4QAhggAtAAQAuAAAhAgIL4L4QAgAhAAAtQAAAuggAhIr4L4QghAhgugBQgtABghghg");
	mask.setTransform(87.1,108.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9B225").s().p("EgIgAisMAAAhFXIRBAAMAAABFXg");
	this.shape.setTransform(141.2,222);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(86.7,21,87.6,174.3), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454545").s().p("Ao3B/Qjrg1AAhKQAAhKDrg1QDsg0FLAAQFMAADsA0QDrA1AABKQAABKjrA1QjsA1lMAAQlLAAjsg1g");
	this.shape.setTransform(128.5,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(48.2,-12.9,160.6,36), null);


(lib.mountainai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyAWQAwgZAtgDQAUgCAYgXQAmgkAJgGQgpBDgxAmQgIAGgBgBQgbgSggAPQgyAYgFAAQgLABgQAGIgbAJQBFgtAOgHg");
	this.shape.setTransform(125,47.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AktCYQBAgiAXgKQAxgWArgFQBKgKAyg4QAkgmAkgNQAogNAvASQAaAKAXgJQAUgJAQgZIA3hZQgLBRggAiQgeAihKAMQgzAJgVAGQgoALgcAUQgLAJgSAdQgQAZgNAFQgMAFgdgIQgggIgPACQgzAHhKAYIgUAJQgGABgFAAQgGAAgHgCg");
	this.shape_1.setTransform(108,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AsxEwQAngXBohJQBYg/A6gcQAWgKAogVQA0gbADgGQAIADAJgEQAFgCAMgHQAHgBAMgIQAMgHAEgHIABgCQAFgBAUgKIAAAAQALgHBfgzQBhg1AkgYQBFgsA5gSQAWgGANgBQATgCAOAGQAVAIAUgGQAKgDAbgOQANgHBIgtQAzggAmgLQAOgEAFABQAKABAHAJIGYHhIAFAJQgIABgHgFIgKgJQhxhYglgcQhWg/hIgqQgUgMgHABQgMACABAdIgugjQgPAYgKApIgRBEIgGg4QgDghgBgXQAAgfgXgTQgJgIgkgSQgIgEgIAOQgKASgJABQAAgaALghIAXg/QgfATgcAYQgSAPgfAdQgIAJgsAJQgrAJgMgEQgIgCgIAGQgJAHgFADIjtCGQiIBKhuAtQgNAJgIACQgMADgEgXQgBgIgKAEIgOAIQg9AhhQAlIiPA/IgKAFIgEAAQgFAAgEgDg");
	this.shape_2.setTransform(121.4,30.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3E3E2").s().p("AysFwQEOiFCXg/IKUlrIFMhqIBdhGIA1AAIJiIyIDgCtg");
	this.shape_3.setTransform(119.7,43.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239.3,80.7);


(lib.mobilesign2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AG9EnIt+AAIAApNIOIAA");
	this.shape.setTransform(45.5,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFD01F").s().p("AnDEnIAApNIOHAAIgJJNg");
	this.shape_1.setTransform(45.8,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("Am8kmIN+AAIAAJNIuIgB");
	this.shape_2.setTransform(134.5,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9B225").s().p("AnDEnIAJpNIN+AAIAAJNg");
	this.shape_3.setTransform(134.3,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,181,61);


(lib.logo2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7498CF").s().p("AgEAAQACgPAKg4IgLCPQgGgfAFgpg");
	this.shape.setTransform(67.2,97.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7498CF").s().p("AgChRQAMBYgMBLg");
	this.shape_1.setTransform(75.7,126.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7498CF").s().p("AgEhKIAJABIAABIQgCApgHAjg");
	this.shape_2.setTransform(76,96.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7498CF").s().p("AgfBmIA3jNIAIACIg2DNg");
	this.shape_3.setTransform(50.7,100.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7498CF").s().p("AgDAAQgHhEACg1QADApAJBQQAHBJgCAxIgMh6g");
	this.shape_4.setTransform(85.2,133.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7498CF").s().p("AgEAAQgGgyAFglQASBjgHBMQgHg7gDgdg");
	this.shape_5.setTransform(82.1,98.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7498CF").s().p("AAwiFQgnCTg4B4QAoihA3hqg");
	this.shape_6.setTransform(40.8,103.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7498CF").s().p("AAXilIANACQgRBpgNA8QgRBcgXBJg");
	this.shape_7.setTransform(57.5,105.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7498CF").s().p("ABmiwQhQCvh7CyQBkjFBnicg");
	this.shape_8.setTransform(13.9,115.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7498CF").s().p("ABrjoQhmD7hvDWQBYjsB9jlg");
	this.shape_9.setTransform(24.2,118.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7498CF").s().p("AgHhHQAKA4ACAPQAFApgGAfg");
	this.shape_10.setTransform(103.9,97.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7498CF").s().p("AADhRIAACjQgMhLAMhYg");
	this.shape_11.setTransform(95.4,126.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7498CF").s().p("AgEgBIAAhIIAJgBIAACVQgHgjgCgpg");
	this.shape_12.setTransform(95.1,96.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7498CF").s().p("AgfhlIAIgCIA3DNIgJACg");
	this.shape_13.setTransform(120.4,100.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7498CF").s().p("AAGhXQAFAkgGAzIgLBYQgGhNAShig");
	this.shape_14.setTransform(89,98.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7498CF").s().p("AgviFQA4BrAnCgQg3h4goiTg");
	this.shape_15.setTransform(130.2,103.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7498CF").s().p("AgFACQgMg5gShsIANgCIA6FMQgXhJgShcg");
	this.shape_16.setTransform(113.6,105.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7498CF").s().p("AhliwQBoCdBjDEQh7izhQiug");
	this.shape_17.setTransform(157.1,115.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7498CF").s().p("AhqjoQB9DmBYDrQhwjYhlj5g");
	this.shape_18.setTransform(146.8,118.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7498CF").s().p("Ag2ANQANgUAPgTIAYANQAEgIAMgNQATAJAWAPQgOAVgOAPIgYgLIgPAUQgXgLgTgLg");
	this.shape_19.setTransform(23.1,90.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7498CF").s().p("Ag6AKQAPgUARgRQAMAGANAIQAJgMAKgIQAYANARANQgOASgSARQgRgJgHgFIgSAUQgXgLgUgNg");
	this.shape_20.setTransform(38,62.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7498CF").s().p("AAAAOIgTARQgWgSgOgOQAQgPAVgPIATASQALgJALgIQARAQAPASQgQAPgTANg");
	this.shape_21.setTransform(104.2,84.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7498CF").s().p("AAAAPIgXAOQgSgQgRgSQASgPAWgNQAIAHALANIAZgPQASAQAPAUQgRAOgXAMg");
	this.shape_22.setTransform(125.6,61.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7498CF").s().p("AgBAOIgZAMQgTgTgNgSQAVgOAWgKIASAWIAZgMQAQAQAPAXQgVAMgVAKIgSgWg");
	this.shape_23.setTransform(159.6,64.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F6A93F").s().p("AAABhQAAgIgEgJQgKgSgYgHIgUgFQgYgEgLgPQgLgPAFgWIBAAJQAmAJAUARQAFgDABgLQgigDgWgMQgfgSAHgeQAHgbAfgOQAdgOAcAJQAcAIAQAWQAQAWgCAdQgEAvgYAgQgYAggiAAIgQgBgAALgzQgLAAABAJQAAAKASAFIANAEQAAgHgDgHQgGgOgMAAIAAAAg");
	this.shape_24.setTransform(154.7,77.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F6A93F").s().p("AAaBGQgqgXAFgdIgFAKQgFAMAAAJIg1gIQgTgCgLgRQgJgPACgSIArAFQAKgbARgSQATgWAXgFQAqgKAkAiQAjAhgCArQgPAWgPAZQgHAMgPAAQgOAAgUgLgAANgMIgHAHIAOAKQAQAJAQgDQgDgQgJgJIgKgGQgIABgJAHg");
	this.shape_25.setTransform(136.7,75.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F6A93F").s().p("AgBBDIgcgCQgUgCgLgQQgLgPABgUIBAAGQgWgrAYgbQAZgbAsAWQAJAIgFAEQgcAfASA6QgKAOgRAGQgLAEgMAAIgKgBg");
	this.shape_26.setTransform(122.6,72.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F6A93F").s().p("AgnBbQglgFgYgWQgagYABgjQABgeAWgUQAVgTAfAAQgOAjAKAdQAMAhAlAIQgagUgHgcQgGgfATgaQAWghArAGQAdAEAqAWQgGAEgJANQgNAUAKAXQAJAXAYADIgDAxQgOgBgLgDQgdgJgUgZQgSgYgDgfQgOAUAKAZQAGAQATAZQgQASgZAHQgPAEgRAAIgPgBg");
	this.shape_27.setTransform(107.4,71.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F6A93F").s().p("AAZBrQgNgOgYgBQgxgEgWggIgEAAQgTACgNgPQgMgNgCgTIAogDQAEgVATgOQASgOAXgBQAagBATAPQAVAPABAYQAAARgKALQgMALgVABIgRABQANAJAWgDQANgBALgLQAOgOAAgVQgBgfgbgSQgXgRghADQgdACgOgWQgPgWAQgZQAPAPAbAGQAQACAeAAQAwgBAjAdQAmAfAAAvQAAAqgeAfQgcAdgrAIQgBgGgHgHgAgnAEIAQgBQAIAAAAgHQgBgHgIAAQgLABgEAOg");
	this.shape_28.setTransform(73.7,72.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F6A93F").s().p("AApBIQgtgLgDgdIgDALQgCAMADAJIg1AGQgTADgOgNQgNgNgDgTIAqgGQAJhBApgWQAlgUArAYQAqAXAJApIgRA2QgFASgZAAQgKAAgOgDgAAIgEIgFAIIAQAGQATAFAOgHQgHgPgMgGIgKgDQgIADgHAJg");
	this.shape_29.setTransform(52.3,72.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F6A93F").s().p("AgwA/QgOgLgEgUIBAgLQghgjARghQASghAvAKQALAGgEAFQgTAlAgAzQgGAQgPALQgOAJgSADIgbAEIgIABQgPAAgMgKg");
	this.shape_30.setTransform(37.8,73.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F6A93F").s().p("AhXBYQgggQgIgjQgIgeARgYQAQgYAegIQgFAmASAZQAUAeAmgCQgegNgOgaQgPgbAMgfQAOglArgGQAdgEAvALIgDAFIgIAPQgHAXAPAUQAPATAYgCIAJAvQgOADgLgBQgfAAgZgUQgYgSgLgdQgIAXAQAVQAKAOAZATQgLAVgXAOQgUAMgZAEIgRABQgaAAgWgMg");
	this.shape_31.setTransform(23.6,77.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7498CF").s().p("AgzAWQAxgZAtgDQAUgCAYgXQAmgkAJgGQgpBDgxAmQgIAGgBgBQgbgSggAPQgyAYgFAAQgLABgQAGIgbAJQBDgrAPgJg");
	this.shape_32.setTransform(89.1,51.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7498CF").s().p("AktCYQBBgiAWgKQAxgWAqgFQBMgKAxg4QAjgmAlgNQAogNAwASQAZAKAXgJQAUgJAQgZIA3hZQgLBRggAiQgeAihKAMQgzAJgVAGQgoALgcAUQgMAJgRAcQgRAagMAFQgMAFgdgIQgggIgPACQgzAHhKAYIgUAJQgGABgFAAQgGAAgHgCg");
	this.shape_33.setTransform(72.1,45.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F6A93F").s().p("AhCCAIAAgBQgDgOAGgWIALghQALgnACgSQABgGgDgFQgEgHgJAAQgHABgDgLQgEgKAEgHIALgfQAIgQANgJIABgCIABgFQAFgTARAJIAHADQACAAADgHQAEgIAKABQAKABAEAJQAEAHAHAGQgIgCgHALQgHALgJgCQAGAGADAPQALAUAVAAIAKAAQAFACAAAHQgBALgPgDIgWgDQgMgDgHgJQgJAQABAHQAAAIAMALIAGAEQATANgHAYQgBAFgEAlQgRAKgIACQAEgJgBgVQgBgVAEgKQgHgPgKgCQgJgCgCAPIgEAWQgCAKgHAOIgJAUQgDAHABAGQACAEAFAGIADAAQgLAHgFACQgGADgFAAIgGgBg");
	this.shape_34.setTransform(51,27.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7498CF").s().p("AsxEwQAngXBohJQBYg/A6gcQBxg2AFgKQAHADAJgEQAGgCAKgHQAIgBAMgIQANgHADgHIABgCQAIgBARgLIAAABQAMgHBegzQBhg1AlgYQBDgsA6gSQAtgNAYAKQAUAIAUgGQAKgDAbgOQAOgHBHgtQAzggAngLQANgEAGABQAIABAJAJIGYHhIAEAJQgIABgGgFIgLgJQhvhWgngeQhWg/hIgqQgTgMgIABQgMACABAdIgugjQgPAYgKApQgNA8gEAIIgFg4QgEghgBgXQAAgfgWgTQgLgJgjgRQgIgEgIAOQgJASgKABQAAgaALghIAXg/QgfATgcAYQgSAPgeAdQgJAJgrAJQgrAJgNgEQgIgCgIAGQgIAHgGADQjLB0giASQiJBKhtAtQgNAJgIACQgMADgEgYQgBgHgKAEIgOAIQg9AhhQAlIiPA/IgKAFIgEAAQgEAAgFgDg");
	this.shape_35.setTransform(85.5,34.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgbAyQgUgHgWgMQgIgFgCgIQgCgIAGgJQANgRAQgSQAPgQAVAIIADACIACgDQAOgPAVAIQAWAKASANQAKAHAAAHQABAHgGAHQgLAQgRATQgPAOgUgHIgDgCIgCADQgJAKgLAAQgHAAgHgEg");
	this.shape_36.setTransform(22.4,90.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag2AMQAMgSARgRIAYALIAPgTQAXAJASANQgMAQgQARIgYgLIgQATQgWgJgTgLg");
	this.shape_37.setTransform(22.4,90.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgfAxQgcgNgQgJQgOgIAFgLQABgFAEgEQANgSAUgRQAIgIAKgBQALgCAKAFIADABIACgCQAHgHALgCQALgBAJAFQASAJAXAPQAIAGABAIQACAIgIAHQgRATgPANQgRAPgUgJIgEgCIgCACQgJAKgMAAQgIAAgHgEg");
	this.shape_38.setTransform(37.8,64.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag6AJQAOgRATgRIAYANIATgSQAWAKATANQgOAQgTAQIgYgLIgSASQgWgKgUgNg");
	this.shape_39.setTransform(37.9,64.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AABAsIgBgCIgDACQgRALgSgNQgUgPgPgOQgIgHABgIQAAgIAHgGQATgRASgMQAJgFAKAAQAKABAHAGIACACIADgCQAIgFAKAAQAKABAIAGQAVARANAPQAGAHAAAGQABAIgJAIQgTAQgRAKQgIAFgIAAQgKAAgKgHg");
	this.shape_40.setTransform(104.2,84.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAAANIgTAPQgTgNgRgQQARgPAUgNIATARQAJgHANgIQASAPAPAQQgPANgUANQgKgHgLgKg");
	this.shape_41.setTransform(104.2,84.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAAAsIgCgCIgCABQgUALgSgPQgUgPgQgQQgLgKAFgJQACgFAGgFQASgOAXgMQAUgLASAPIACACIADgBQAKgFALABQAKABAIAHQASAPAQATQAHAHgBAIQgBAIgJAGQgVAOgSAJQgIAEgIAAQgLAAgLgIg");
	this.shape_42.setTransform(125.4,63.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAAANIgWANQgWgRgOgOQATgOAVgLIAUASIAXgNQASAPAQARQgQAMgXAMg");
	this.shape_43.setTransform(125.5,63.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgDArIgDgCIgDABQgUAJgRgQQgWgVgLgOQgJgKAEgIQACgGAIgFQASgLAZgLQAKgEAKACQALACAHAIIACADIADgCQAKgEALADQAKACAIAIQARARAOATQAMASgTALQgWAMgUAHQgHADgGAAQgNAAgKgLg");
	this.shape_44.setTransform(159.3,66.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgBANIgYALQgWgUgLgPQAWgNAVgIIASAUIAZgLQAQAQAPAUQgVAMgVAIIgSgUg");
	this.shape_45.setTransform(159.4,66.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AASAjIgDAAIAAAAIgEgBIgLgDQgVgGgMgLQgKgLACgNQACgOANgGQASgIATAHQANAFALAQQAGAKABANIAAADIAAADQgBAGgFAEIgDACIgHADIgHABIgBAAg");
	this.shape_46.setTransform(156.7,73.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgCB1QgIgBgGgHQgHgGAAgHQgBgLgNgGQgIgEgQgEIgBAAIgCAAIgBAAQgdgIgSgUQgTgWAEgeQACgJAJgFQAJgFAKACIAUADQgOgxA0gcQAwgaAtAQQAuAQASApQARAlgLApQgMArggAaQgfAXgmAAIgNAAgAg3AdQAgAHAVAOQAPALAIAOQAjgGAQgxQAUg6gmgZQgegTgiAcQgNALgBALQgBAMARAGQASAHAQACQANABAJAGQAIAIgBALQgDARgIAGQgIAGgKAAQgLAAgIgGQgTgOgigGIgcgEQAFAGAOADg");
	this.shape_47.setTransform(155.1,77.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AACBfQAAgHgFgJQgKgRgZgHIgUgFQgXgEgMgOQgMgQAFgVIBBAJQAnAIAUAQQAFgCAAgLQghgDgXgMQgfgRAHgdQAGgcAggNQAcgNAcAIQAcAHAQAWQARAWgCAdQgDAugYAgQgXAegjAAIgPgBgAALgyQgLABAAAJQABAJASAFIANAEQAAgHgDgHQgGgOgMAAIAAAAg");
	this.shape_48.setTransform(155,77.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgKAgQgSgHgPgOQgGgFABgHQAAgHAFgGQANgRAWgEIAGgBIADAAQAIAAAHAFQAKAFAIAJQAMAOADARQACAJgHAHQgGAGgLABIgKAAQgOAAgNgFg");
	this.shape_49.setTransform(139.8,74.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("ABDBkQgpgBgdgVIgLgIQgEABgGAAQgegDgPgDQgbgFgQgKQgOgKgHgSQgGgRABgRQABgJAJgFQAIgGALACIAWACQANgbAZgUQAigaAnADQArAEAhAfQAhAfAFAqQACANgIANQgKAOgFAJQgJATgKAJQgNANgRAAIgBAAgAgGAAQATAGABARQAAAMAJAJQAJAKAPACQANACACgDIAHgQQALgRAHgIIgCABQABgEgBgFIgFgMQgNgcgXgOQgcgRgXATQgVAQgQAiQgFAMgNAAIgJAAIgGgBQAGAFAKADIATADQACgJAEgHQAIgKANAAIAJAAg");
	this.shape_50.setTransform(136.9,75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAbBFQgqgWAEgdIgFAKQgFALAAAJIg1gHQgUgCgKgQQgJgPABgTIArAFQALgaAQgSQATgVAXgGQAqgJAlAhQAjAggBAqQgPAWgPAZQgHAMgPAAQgOAAgUgLgAANgLIgHAHIAOAJQARAJAPgDQgDgQgJgIIgKgGQgIABgJAHg");
	this.shape_51.setTransform(136.9,75.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDBWQgagDgNgDQgXgGgMgOQgUgUACggQABgIAIgFQAJgGAKABIAcADQgDgUAGgUQAMgmAtgBQAkAAAXALQAVAKgHAbQgEAOgJAaIAEAeQADASgKAKQgZAbgrAAIgNgBgAgZApIAeADQAUABAIgIQgDgMgCgRQgBgVAFgQIAHgNIAAgBQgLgBgGACQgQAEADASQABAHAJAVQAFANgHAHQgGALgRgCIgfgDQAEAGAIABg");
	this.shape_52.setTransform(122.5,72);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAABCIgdgDQgUgBgLgQQgLgPABgUIBBAGQgYgqAagaQAYgbAsAWQAJAHgFAFQgcAeATA4QgKAOgRAGQgMAFgMAAIgJgBg");
	this.shape_53.setTransform(122.6,71.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgpBuQhJgJgcg2QgZgvAhgsQAfgqA2ABIAJABQAcgdAwADQAsACAwAbQALAGAAALQABAKgKAHQgOAKABAQQAAARAUAEQAIACAFAHQAFAHgBAHIgDAvQgCAJgGAFQgHAGgNgBQgcgDgXgLQgjAlg3AAIgXgCgAhegPQgOAcAQAXQATAbAoAFQAgAEATgOIgDgFQgMALgPgEQgtgNgSgmQgJgSAAgVQgGAGgEAJgAAigrQATABACAPQADAdATAVQAKAKANAGIAAgGQgbgOgGgfQgFgZAMgVQgWgHgVgBQgrgBAAAnQgBARAHAMQgCgVAOgPQAJgJANAAIAGABg");
	this.shape_54.setTransform(107.3,71.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgnBaQgkgFgZgVQgagYAAgjQABgeAWgTQAWgSAfgBQgOAjALAdQAMAgAkAIQgagUgHgbQgHgfATgZQAXggArAFQAdAEArAWQgGAEgJANQgNAUAKAWQAKAVAXAEIgDAwQgOgBgKgDQgegJgUgYQgTgYgDgeQgNAUAKAYQAGAPATAZQgQARgZAHQgPAFgRAAIgQgBg");
	this.shape_55.setTransform(107.4,71.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgfAWQgIgIACgKQAFgRAPgKQAKgGALABQAMAAAKAGQAKAGACALQACAKgGAJQgIAMgRACIgEAAIgPABIgCAAQgLAAgIgHgAAPAJIAAAAIAAAAIAAgBg");
	this.shape_56.setTransform(70.7,71.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAWCHQgKgEgDgHQgFgLgVgEQgagDgJgDQgZgHgVgVQgUgCgQgNQgWgSgEgeQgBgIAIgGQAHgHALgBIAVgCQAKgTATgMQgTgPgDgYQgDgWALgWQAGgLARAAQARgBAHAJQAQAQAtABQA4ACAPAGQAhAMAWAbQAYAdACAiQACAzgjApQgjAng0AJIgGAAQgHAAgGgDgAAOhDQASADAPANQAiAggFApQgEAlgnANIgOAEQAQAGALAKQAmgOATgqQAZg1gvgiQgWgRhGgEIgTgCQAQAEAcADgAg9AsIAOAMQgBgEABgGQAEgQAUgBQAYAAADgOQACgMgNgLQgPgNgRADQgTAEgKAZIgDAGQgFAKgRABIgGABQAEAFAIgBIACAAQANAAALALg");
	this.shape_57.setTransform(73.5,71.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAZBpQgNgNgYgCQgxgEgXgfIgEAAQgTACgNgOQgMgNgCgTIAogDQAFgVATgOQASgNAXgBQAagBATAOQAVAPABAZQABAQgLAKQgMAMgVAAIgRABQAOAJAVgCQANgCALgLQAOgOAAgUQgBgfgbgSQgXgQghACQgdADgOgVQgQgWARgZQAPAQAbAEQAPADAfAAQAwgBAkAdQAmAeAAAuQAAAqgfAeQgcAbgrAJQgBgGgHgHgAgYgKQgLAAgEAOIAQgBQAIAAAAgGQAAgDgDgCQgCgCgDAAIgBAAg");
	this.shape_58.setTransform(73.5,71.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgEAjQgTgCgSgKQgOgHAHgRQAKgUAUgKIAFgCIAGgBQAGgBAFABQANADAKAHQAPAKAHARQAEAIgFAIQgFAHgKAEQgNAGgQAAIgIgBg");
	this.shape_59.setTransform(54.7,72.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAPBXIgMgFQgDACgGAAQgeAFgQABQgbADgSgHQgQgFgLgQQgKgPgDgSQgBgJAHgHQAHgIAKgBIAWgDQAFgdAVgZQAbgiAngHQApgHAoAWQAnAWAQAoQAFANgFANIgJAaQgEAUgHAMQgKAQgRAEQgRAEgPAAQgWAAgUgHgAgGAMQAUABAFAQQADALALAHQALAGAPgBQANgBABgEQAAgHADgKQAGgSAGgMIgCADQAAgDgDgEIgIgMQgTgYgagIQgegJgTAYQgQAVgHAlQgCALgKAEQgFACgGABIgGABQAHADAKABIATgCQAAgJADgIQAFgRATAAIACAAg");
	this.shape_60.setTransform(51.8,72.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AApBHQgtgLgDgdIgDAKQgDANAEAIIg2AHQgTADgOgOQgMgMgEgTIArgGQADgbAMgVQANgZAXgMQAkgTAsAXQAqAWAJApIgSA0QgFATgZAAQgKAAgOgDgAAJgEIgGAIIAQAGQATAFAOgHQgHgPgMgGIgKgDQgIADgGAJg");
	this.shape_61.setTransform(52,72.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Ag+BRQgXgPgGgfQgCgIAHgIQAHgHAKgCIAbgEQgIgSACgUQADgpAsgLQAggKAaAFQAYAEgBAcQAAAPgCAdIALAbQAHAQgHANQgVAlg0AIQgZAEgOAAQgXgBgQgKgAAKgrQgOAIAGARQADAHAOASQAIAKgFAJQgDANgSADIgeAFQAGAEAHgBIAfgFQATgFAFgJQgFgMgGgOQgGgUAAgSQAAgDAEgKIABgBQgMABgFADg");
	this.shape_62.setTransform(37.2,73.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgwA+QgOgMgEgTIBAgKQghgkASgfQARggAwAKQALAEgEAGQgKAUAEAZQAFAUANAVQgGARgPAKQgOAJgSACIgbAFIgJABQgOAAgMgKg");
	this.shape_63.setTransform(37.3,73.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AiFBSQglgpAWgxQAVgwA0gNIAIgBQAWgkAugJQAsgJA1AOQAMAEADAKQADAJgIAJQgKAOAEAPQAEARAVAAQAIAAAHAFQAGAFABAHIAFAXIADAXQABAIgEAGQgFAJgOACQgcAEgagFQgcA1hIAKQgNACgMAAQg4AAghgmgAhmAJQgHAfAWATQAZAVAogFQAfgEARgTIgFgEQgIAOgRAAQgugBgbghQgOgQgFgTQgEAHgCAJgABkAOIgBgHQgegGgNgcQgLgYAGgXQgXgCgVAFQgpAKAJAmQADAQAKALQgHgVALgSQAIgMARgDQASgDAFAOQALAcAXAOQANAIANADg");
	this.shape_64.setTransform(22.9,77.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhYBXQgggQgIgiQgHgeARgYQARgXAegIQgFAlASAZQATAdAmgCQgegNgOgaQgOgaAMgeQAPglArgFQAdgEAvALIgDAFIgIAPQgIAWAPAUQAQATAXgDIAJAuQgOADgLAAQgfgBgZgTQgYgSgLgcQgIAWAQAVQAJAMAaAVQgMAVgXANQgVAMgZADIgSABQgaAAgVgLg");
	this.shape_65.setTransform(22.9,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 2
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AiRBwQgRgDgHgXQgFgUAIgMQAEgHAJgFIABgBIBCgqQAogXAhgJQANgEAcgFQAXgGANgOQAZgYAZgUQAXgRAWAXQAVAXgOAXQghAzgTAWQgkAqgiAMQgJADgQgGQgRgHgGADIgjASQgPAHgbAHIglAKQgKAGgIAAQgFAAgEgCg");
	this.shape_66.setTransform(89.2,51.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgzAWQAxgZAtgDQAUgCAYgXQAmgkAJgGQgpBDgxAmQgIAGgBgBQgbgSggAPQgyAYgFAAQgLABgQAGIgbAJQBDgrAPgJg");
	this.shape_67.setTransform(89.1,51.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Ak2C+QgYgEgDgbQgDgbAVgLIBKgnQArgWAjgIQA/gOAOgFQAngOAcgdQAwg1A5gNQANgCA7AKQAtAHAPgVIA3hZQASgcAcANQAbAMgEAgQgIAxgNAfQgRAqgfAXQggAag6AMQhTARgMAEQguAQgPAXQgSAdgHAHQgiAhgsgKQglgIgnAFQgdAEgtAPIgnAMQgMADgMAAIgRgBg");
	this.shape_68.setTransform(72.1,45.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AktCYQBBgiAWgKQAxgWAqgFQBMgKAxg4QAjgmAlgNQAogNAwASQAZAKAXgJQAUgJAQgZIA3hZQgLBRggAiQgeAihKAMQgzAJgVAGQgoALgcAUQgMAJgRAcQgRAagMAFQgMAFgdgIQgggIgPACQgzAHhKAYIgUAJQgGABgFAAQgGAAgHgCg");
	this.shape_69.setTransform(72.1,45.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AhgCWQgKgPADgSQAEgmAGgTIALgdIAGgUQgUgNgFgaQgHglAZgjQAGgJAIgJQABAXABgWQAFgRAJgJQARgRAaAEQAQgKAQADQATAEAcAbQATASgLAWIgFAJQAGACAGAEQAPAIAEASQAEARgHAPQgKAUgVAFQAFAQgFAaQgIAqgGAJQgKARghAMIgJADIgDAGQgFAQgUACIgOAFQgLADgQACIgEAAQgQAAgKgPg");
	this.shape_70.setTransform(51.1,27.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AhCCAIAAgBQgDgOAGgWIALghQALgnACgSQABgGgDgFQgEgHgJAAQgHABgDgLQgEgKAEgHIALgfQAIgQANgJIABgCIABgFQAFgTARAJIAHADQACAAADgHQAEgIAKABQAKABAEAJQAEAHAHAGQgIgCgHALQgHALgJgCQAGAGADAPQALAUAVAAIAKAAQAFACAAAHQgBALgPgDIgWgDQgMgDgHgJQgJAQABAHQAAAIAMALIAGAEQATANgHAYQgBAFgEAlQgRAKgIACQAEgJgBgVQgBgVAEgKQgHgPgKgCQgJgCgCAPIgEAWQgCAKgHAOIgJAUQgDAHABAGQACAEAFAGIADAAQgLAHgFACQgGADgFAAIgGgBg");
	this.shape_71.setTransform(51,27.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("As7FWQgYgEgDgbQgCgZAUgMQAmgXB0hPQBehBA/gfQBug2BQgtIAEgBQAmgZBOgpQBRgrAmgZQA1giAhgPQA1gZApgBQARAAAeAEQAZABAUgLIBOgvQAzggASgJQAvgXAcAKQASAFAPAPIAaAeIF2G4QAJAFAGANIAEAJQALAYgOARQgOASgZgEQgRgCgUgPIghgbQhPg+gcgVQg8gtgrgcIgugdIgEgCQgFAHgIAFQgUANgRgNIgLgIIgGAVIgQBAQgJAggegGQgfgFgDgfQgCg6gFgfQgHgugVgMIgDAEQgJAMgLAEQgTAIgTgIQgUgKACgWIABgQIgSAOQgWAQg3AIQghAFgLAAQgIgBgGAFIgSAMIh+BIQizBmhwAxIgtAXQgeAPgSAAQgUAAgLgPIgBgCIgOAHIgnAWQg0AagwAVIhTAqQgoASgeAAQgJAAgIgCgABNicQgoAKgrAYIhOAtQgcARhPAqQhEAjgmAZQgFADgFABIgGABIgCADQgMAQgaAMQgTAIgVAEQgTATgmARIgQAHIAHAHIABAAQAogRAigQQA4gaA7gfQBVgtCKhOQAOgIAhgZQAhgVATgBQAwgCAPgDQASgFAVgNQgMADgbgGQgQgEgLAAQgHAAgFACgAJTgMIhZhpIhBhSQg2hEgIACQghALgqAaQAUAPgIAWIgTAxQAWAHAaAUQASAOALAWQAHgIALgDQAQgFAMAJIAKAJQAMgLAQACQAaACAfASIAyAiIAeAUg");
	this.shape_72.setTransform(85.5,34.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AsxEwQAngXBohJQBYg/A6gcQBxg2AFgKQAHADAJgEQAGgCAKgHQAIgBAMgIQANgHADgHIABgCQAIgBARgLIAAABQAMgHBegzQBhg1AlgYQBDgsA6gSQAtgNAYAKQAUAIAUgGQAKgDAbgOQAOgHBHgtQAzggAngLQANgEAGABQAIABAJAJIGYHhIAEAJQgIABgGgFIgLgJQhvhWgngeQhWg/hIgqQgTgMgIABQgMACABAdIgugjQgPAYgKApQgNA8gEAIIgFg4QgEghgBgXQAAgfgWgTQgLgJgjgRQgIgEgIAOQgJASgKABQAAgaALghIAXg/QgfATgcAYQgSAPgeAdQgJAJgrAJQgrAJgNgEQgIgCgIAGQgIAHgGADQjLB0giASQiJBKhtAtQgNAJgIACQgMADgEgYQgBgHgKAEIgOAIQg9AhhQAlIiPA/IgKAFIgEAAQgEAAgFgDg");
	this.shape_73.setTransform(85.5,34.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.1,146.1);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ApOLEIAA2IIScAAIAAWIg");
	mask_1.setTransform(59.1,70.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FCFCFC","#A3DCF1","#2B73D2"],[0,0.396,1],0,73.8,0,-97.1).s().p("ApOLEIAA2IIScAAIAAWIg");
	this.shape_1.setTransform(59.1,70.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,118.1,141.7), null);


(lib.Tween68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0A0A0").s().p("AgYAaQgLgKAAgQQAAgOALgLQAKgLAOAAQAPAAALALQALALAAAOQAAAQgLAKQgLAKgPAAQgOAAgKgKg");
	this.shape.setTransform(-0.3,-38.1,1.478,1.478);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0A0A0").s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgLAOABQAPgBALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgKgLg");
	this.shape_1.setTransform(-0.3,-226.1,1.478,1.478);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#46465B").ss(3).p("ABELVQgcAcgoAAQgnAAgcgcIqRqRQgcgcAAgoQAAgnAcgcIKRqRQAcgcAnAAQAoAAAcAcIKRKRQAcAcAAAnQAAAogcAcg");
	this.shape_2.setTransform(0,-134.3,1.478,1.478);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(15.8,34.2,1.478,1.478,0,0,0,97.9,222.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFD01F").s().p("AhONHIr4r4QggggAAgvQAAgtAgghIL4r3QAhgiAtAAQAuAAAhAiIL4L3QAgAhAAAtQAAAvggAgIr4L4QghAhguAAQgtAAghghg");
	this.shape_3.setTransform(0,-134.3,1.478,1.478);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.9,7.6,1.478,1.478,0,0,0,58.6,190.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#425261").s().p("AhPV9MAAAgr5ICfAAMAAAAr5g");
	this.shape_4.setTransform(-0.7,55.5,1.478,1.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.9,-294.1,289.2,656.3);


(lib.Tween67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0A0A0").s().p("AgYAaQgLgKAAgQQAAgOALgLQAKgLAOAAQAPAAALALQALALAAAOQAAAQgLAKQgLAKgPAAQgOAAgKgKg");
	this.shape.setTransform(-0.3,-38.1,1.478,1.478);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0A0A0").s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgLAOABQAPgBALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgKgLg");
	this.shape_1.setTransform(-0.3,-226.1,1.478,1.478);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#46465B").ss(3).p("ABELVQgcAcgoAAQgnAAgcgcIqRqRQgcgcAAgoQAAgnAcgcIKRqRQAcgcAnAAQAoAAAcAcIKRKRQAcAcAAAnQAAAogcAcg");
	this.shape_2.setTransform(0,-134.3,1.478,1.478);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(15.8,34.2,1.478,1.478,0,0,0,97.9,222.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFD01F").s().p("AhONHIr4r4QggggAAgvQAAgtAgghIL4r3QAhgiAtAAQAuAAAhAiIL4L3QAgAhAAAtQAAAvggAgIr4L4QghAhguAAQgtAAghghg");
	this.shape_3.setTransform(0,-134.3,1.478,1.478);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.9,7.6,1.478,1.478,0,0,0,58.6,190.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#425261").s().p("AhPV9MAAAgr5ICfAAMAAAAr5g");
	this.shape_4.setTransform(-0.7,55.5,1.478,1.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.9,-294.1,289.2,656.3);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAldBFiIANgdQBMjBAdjFQAfjTgbjOQgbjVhajTQhajSiUjGQkTlynelNQmYkdotkBQjwhukbhuQkFhkkaheIj9hRQhSgZh6goQjfhLimhDQi/hNikhRQiphUiMhXQiNhYhphbQhqhcg+hYQg9hTgWhVQgUhRAXhRQAWhSBNhWQAjgpA5guIA4grQAogdAXgOIBFgqQAxgcAbgNQA7ggBrgwIBaglIBfglQBZghB4goQC6g8ERhRIHliLQE+hdCwg3QERhVDbhRQEbhpDHhlQBrg1B6hMIA2glQAsgeAJgIIAzgoQAcgXAUgUQAfgcAPgPIApgvIAUgYIARgZIAigyQAQgfAKgVIAVgzQAMgiADgRIAKg0QAOhqgghmQgdhdhJhfQgUgag0g4Qg1gygdgXQhQhBhgg8Qhag3hfgxQhWgshigsQiVhDjShTIlHiCQhaglgxgXQhCgfgygeQhshCgog9Qgqg/AZhCQAXg/BShHQBHg8Bjg5QBOguBtg1QCchJDHhMQB2gtCgg5IAWgHIgWAIQjIBIhOAeQjOBQiUBGQhsAzhPAvQhjA6hGA7QhRBGgWA/QgZBBAqBAQAqA+BqA/QAzAeBAAfQA3AaBUAiIFICBQDfBYCIA+QBpAvBRApQBiAyBXA2QBgA8BRBCQAgAZAyAwQAzA1AWAeQBLBfAdBeQAgBmgOBrIgKA1IgHAZIgRAzIgMAaIgbA1IghAyIhPBgQgLAMgjAgQgTATgdAYIgzApQgRAOgkAYIg3AlQh5BNhsA1QjPBokVBnQjdBSkPBWQi8A7kyBZInkCNQkVBRi1A8QiOAxhBAYIhfAlIhZAmQhyA0gyAbIhKApQgwAcgUAOIg+AqIg3ArQg2AugiAoQhKBVgTBPQgUBQAWBNQAZBTA8BQQA/BVBqBZQBpBZCMBWQCSBYCiBPQCqBRC4BIQCyBGDSBFQBaAdByAiID/BQQESBZESBoQEqBzDpBqQI1EAGiEgQHnFPEeF5QCaDNBeDTQBeDWAfDcQAfDTgdDYQgaDDhNDNIgEAKg");
	this.shape.setTransform(468.2,455.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EADvBGUQCchPCBhNQC0hsB3heIAhgaIAggbQAogiASgSQA9g7AmgtQBXhrAehkQAjh0grh9QgyiVihilQipiukbi1QkNitmAi2IjThfQh2gziNhDQkViCjliAQkAiQjeiYQjwikjDiuQhnhchbhgQhghohMhjQhUhxg7hoQhBh0gqh1Qhbj6Acj8QAckDCljzQCYjjESjJQB7haCThSQAngXBng1QBrg0AngRQAkgRBxgvQCCgyAVgHQB2gsC6g4ICZgsICXgmQBZgWDMguQDfgvFIg7IIIhcQEqg0C+gmQD+gxDAguQDmg6CWg0QBFgXBVgkIAggPQAXgKAIgFIAcgPQAQgJAJgGIA3gkIAagVQAHgJAHgGIAHgHIAGgJQAKgMADgFIAKgRQARgiAEgiQACgfgQgrQgCgJgSghQgTgdgLgNQgngxgvgoQgzgug7grQgqgfhWg4QhqhCiyhkIiThSQhZgyg7giQheg3g3gkQhPg1g5gxQiPh9glh6QgWhGAOhDQALg9AthAQBFheCQhZQBrhACIg3QBsgtB/gpQC1g7Dmg6QB8gfC4gqIEAg5IABAAIkBA6Qi8Arh3AeQjmA7i0A6QiJAuhiApQiJA3hpBAQiPBXhEBfQgsA9gNA/QgNBEAWBEQAlB5CPB9QA7AxBNA1QAxAgBkA6QBhA4DGBtQCqBeBzBJQBMAvA1AnQBCAvAuApQA1AvAiAqQAIAKAYAiQASAiADAIQARAsgDAgQgCAjgRAjIgKASIgNARIgGAJIgvAuIgLAHIgUAPIgZAPQgJAHgQAJIgdAPIgfAPIggAQQheAog9AUQidA4jhA4Qi/Avj/AzQi6AlktA2IoHBdQlFA8jgAwQiqAlh4AfIiWAmQgzAOhlAeQiuA1h/AvQgdAKh3AvQhyAwghAPQgrAUhlAxQhjAzgpAYQiTBUh1BXQkMDEiVDiQhPB1gvB9QgwB+gNB9QgaD2BbD3QApBzBBByQA8BmBUBwQBKBfBhBoQBiBlBfBUQDBCqDwCjQDVCQEGCSQDsCBELB9QCQBCBzAxIDVBeQGMC4ERCrQEmC3C0CxQCtCoA+CeQA2CGgcCBQgXBvhZB4QhTBviOB2QiFBuirBrQhRAyhZAyg");
	this.shape_1.setTransform(279.8,450.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjZBrIA7gnQBDgpBOgkQBtg2B4guIACACQh4AuhsA2QhUAog8AlIg7Ang");
	this.shape_2.setTransform(442.3,40.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA2BuQg/gxgogyQgug0gPg4QgHgZAAgNIgBgPIAIAAIABAPQAAANAHAYQAOA0AvA4QAoAwA/AxQAhAYAYAPIgIAFQgYgRghgYg");
	this.shape_3.setTransform(413.1,93.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACUBLQg5gdhcgtIjfhoIAIgFIDeBoQBdArA7AeIAxAYIASAKIgKAGg");
	this.shape_4.setTransform(485,139.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABeBkQgVgsg2g8QgggnhFg7Ig1gpIANgGIA2AqQBHA8AgAmQA2A7AYAvIAXAzIgTACg");
	this.shape_5.setTransform(555.8,186.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiqCBIATgKQAJgEAkgXQApgYAUgPIAhgWIAegZIAegZIAzgyIASgWQAVgcAEgHIAIgNIAVAEIgIAOQgEAHgWAcIhFBLIhfBJQgNALgTAMIgdASIhBAlg");
	this.shape_6.setTransform(549,244.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkDBEIBRgWQBhgaBPgXID4hRIAOAOIhNAbIhQAaQg6ASgjAKQhOAYhhAbIhRAXg");
	this.shape_7.setTransform(466.1,283.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AkPAzIEKg8IEIg+IANATIoRB8g");
	this.shape_8.setTransform(367,309.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkKA8IBPgYQAxgPCBgjQCAgjCFghIAPAWQiDAhiAAiQhqAehFAVIhOAZg");
	this.shape_9.setTransform(267,334.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjhBoQAXgQAmgXIBAgnIBNgqQA9ghBYgqIA0gXIAUgJIAcAWIgTAJIgzAXQhPAlhEAlQgvAZgbARIg/AmQgkAXgWAQg");
	this.shape_10.setTransform(176.8,368.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhwCfIAEgPQADgLAJgbQAOgrAlhFQAlhDAhgqIAcgjIALgNIAxAOIgLANQgIAJgSAZQgdAlgoBFQgiBEgMApQgKAfgBAGIgEAOg");
	this.shape_11.setTransform(118.7,421);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvAFQgWgvgShDIgNg0IA+gFIAMAzQATA9AVAyQAjBQA0BNIg+AOQgzhQgjhSg");
	this.shape_12.setTransform(116.6,483.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABRBsIiyiQIhihaIA9gWICbCLICvCBIg6Adg");
	this.shape_13.setTransform(162.9,540.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAUQhEghhOgsIhBglIA3ghIBBAkQBOArBCAhQBsA1BvAzIg0AnQhwg1hsg3g");
	this.shape_14.setTransform(236.1,587.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAWQh6gsgsgSIhLgdIAygrIBKAcQA2AVBuAoQB6AsB3AuIg0AuQh1gvh3gsg");
	this.shape_15.setTransform(323.2,625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AB0BfIiShLIjchoIA8gtIDgBpQA3AZBfAxIBDAkIhGAsg");
	this.shape_16.setTransform(411,662.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AByCLQgKgJgbgVIh0hbIhBguIg6gpIg6gnIBQgqIA8AnIA8ApIBDAwIB5BcIAnAfIAOAMIhdAmg");
	this.shape_17.setTransform(487,707.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AASB4QgNgZgPgZQgegxgGgIIgog2IglgxIgcghIgLgNIBqgfIALAMIAeAjIAmAyIAqA5QAPATAYAnQAPAXAQAdIAcAzIh3AUg");
	this.shape_18.setTransform(541.9,761.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhJCkIADgOQAEgWACgPIAHhwQgDhIgEgoIgGglIgDgOICAgJIAEAPIAFAnQAIAtABBIIgEB2QgCAQgEAXIgCAPg");
	this.shape_19.setTransform(563.3,824);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiiCaIgDgBQA9hKAxhNIAig4IA0hjICIAWIg2BoIgQAcQgLATgIALQgfA0g0BHg");
	this.shape_20.setTransform(543.4,884.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-466.8,0,450.8).s().p("EgOmBGUQDkhoC3hpQCxhlB0hYIA/gwQAoggARgQQAzgtAugxQBXhhAhhXQAohogfhzQgoiNiUifQieiqkRizQkGitl4i1IjRhgQhtgwiYhIQkOiAjviIQkEiTjdiZQjzipjDivQhjhZhghnQhghnhNhmQhRhthAhxQhBh1gqh5QhbkAAekAQAPiCAziCQAyiCBUh6QCcjnEZjNQB3hXCbhXQAvgbBigyQBpgzAsgSICXhBQCCgxAXgIQB7gtC6g4ICbgrICYgnQCKgiCdggQDegvFOg6IIJhaQEqg0C8gkQD/gxC+guQDfg2Ccg0QA2gRBhgpIAggNQAWgKAJgFQAmgTAOgJIAYgPIAUgNIA4gvIAGgJQAJgLADgFIAKgRQASggAEgfQAEgfgPgqQgDgJgQgfQgVgigIgIQgjgtgwgrQgygtg7grQgyglhMgyQhvhGirhhQjFhuhhg5Qhfg3g2glQhQg2g5gxQiPh9gmh8QgVhFAOhFQANhBAsg9QBFhfCShaQBrg+CKg5QBsgsCAgqQC3g6Dlg5QB4geC9grIEAg6IAWAbIjrBTQiuA+hoApQjHBMiaBKQhmAxhUAxQhkA8hEA6QhPBFgWA/QgXBAAqA9QAoA8BrBAQAzAdBAAeQA0AZBXAiQBnApDjBXQDLBPCeBHQBqAuBRAqQBmAzBVA1QBjA8BRBDQAeAWA2A0QA0A2AWAdQBNBjAdBdQAhBogNBuIgKA1QgDARgMAjIgwBqIg0BNIgUAYIgqAwQgKAMgkAhQgUAUgdAYIg0ApIg1AnIg3AmQh3BLhwA5QjLBnkbBrQjdBTkSBXQizA5k6BdIniCPQkdBWipA5QiFAuhIAcIi0BLQhuAzgxAbIhHApIhBApQgWAOglAcQgnAegNAMQg0AtgeAmQhDBQgOBMQgPBKAZBFQAbBPA8BJQA+BQBoBUQBpBWCKBRQCJBTCnBOQCnBOC3BGQCoBBDZBEQBlAhBjAdIEBBPQEaBZETBnQEpBwD0BuQJBECGsElQH2FVEoGDQChDRBhDZQBiDcAiDkQAgDZgcDfQgZDHhKDIg");
	this.shape_21.setTransform(372.9,450.1);

	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(359.6,679.7,1,1,0,0,0,359.3,209.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(497.8,109.5,1,1,0,0,0,117.9,106.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(102,102,102,1)",3,3,4);

	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(310.8,337.3,1,1,0,0,0,308.3,120.5);
	this.instance_2.shadow = new cjs.Shadow("rgba(102,102,102,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-2.7,-0.3,748.5,900.5), null);


(lib.cloudbgai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(59.1,70.9,1,1,0,0,0,59.1,70.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.1,141.7);


// stage content:
(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(258.3,1127.6,1,1,0,0,0,144,40.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({alpha:1},5).wait(38));

	// Layer 39 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("A5uJDIAAyFMAzeAAAIAASFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:264.9,y:1121.9}).wait(46));

	// Layer 38
	this.instance_1 = new lib.mobilesign2ai("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(258.7,1232.3,1.732,1.732,0,0,0,90.1,30.1);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({y:1124.8},3).to({y:1127.8},2).wait(41));

	// Layer 32 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_10 = new cjs.Graphics().p("AmUMCIAA4DIMpAAIAAYDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_1_graphics_10,x:257.6,y:901.7}).wait(52));

	// Isolation Mode
	this.instance_2 = new lib.Tween69("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(258.3,1043.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween70("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(258.3,913.5);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},7).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({_off:true,y:913.5},7).wait(45));

	// Layer 29 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EgjAAwdMAAAhg5MBGAAAAMAAABg5g");
	mask_2.setTransform(238.1,1002.3);

	// objects
	this.instance_4 = new lib.Tween67("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(257.7,1586);

	this.instance_5 = new lib.Tween68("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(257.7,1009);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,y:1009},9).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},9).to({y:1048},2).wait(51));

	// Layer 35
	this.instance_6 = new lib.Path();
	this.instance_6.parent = this;
	this.instance_6.setTransform(253.5,1314.4,0.513,0.513,0,0,0,121.2,12.6);
	this.instance_6.alpha = 0.219;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(62));

	// Layer 20 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_6 = new cjs.Graphics().p("Egh8AQuQkfgRjMhfQj4h0icjxQidjxgFkSQgFkQCSj3QCTj3D0h+QC5hfEDgfQCggUE4gBMAkUgABQEgAACbgFQD1gHDFgYQBCgIDTgfQCtgZBogJQFAgdDhBEQERBTDCDmQDCDmAjEbQAkEbiDEOQiEEOj0CUQiVBajMAzQiWAmjlAaQq7BSxxgHQplgGkzgBQoTgBmFARQjxALiSAAQhOAAgzgDg");
	var mask_3_graphics_7 = new cjs.Graphics().p("EggUAVyQjWgFiRgjQhagThOgeQh5gthjhHQiFhdhjiLQglg0geg3QhxjQgFjmIAAgBQgEjmBojTQAcg3Aig1QBeiRCDhjQApgfAtgbQArgzA0gtQBchRB+g+QBZgtBngeQBlgiCVgTQBpgQCDgHIBlgEIAVAAIAygVQCPhDC9hSQDEhUDwg9QCMghCcgdQCNgUCmgdQCmgcCRgPQCIgSCEgKIAsgEQCogLCMgFIB7gDIC6gFQCbgFCEgIQAtgCBLgGICsgJQCAgHBiAEQAkAAAgACQDEAICiAuQBqAcBaArQBlAwBWBDQA+AwA3A5QBYBABOBSQAtAvAnAyQBvCMA7CfQAXA9APA/QAZBoAEBpQAGCpg1CnIgOArQgzCPhWBzIgkAtQgxBkhMBVIgfAhQhcBgiHBLIgXATQgmAfgzAfQhOA3hvAyQhPAnheAlQi/BSj0AuQiRAdioAQQiTANiuAIQkcANlKAEQoPABl+gCIhUAAQmTgCkjAGQiXACiHAFQktAKi0ABIhJgBg");
	var mask_3_graphics_8 = new cjs.Graphics().p("EgkxAawQhggPhUgaQiFgohthCQiVhbhuiPQgpg1gig6Qh/jbgGj1IAAgBQgEj1B3jfQAfg6Amg2QBpiWCThgQAtgeAygZQAfg/Aqg6QBMhqB1hZQBUhDBkgvQBpg5CTghQBugcCKgOQA0gFA3gDIAXgBIAigqQAsiFCGikQCMioDlh7QCChBCjg7QCEgnC3g6QC2g4CMgdQCPglCIgUIAugHQCogVCggIICFgEQBggDBmAAQClgCCMAAQA2ABBIgCIC1AGQCFAFBrARIBHALQDJAhCnBKQBrAtBZA6QBjBBBRBSQA7A7AxBDQBiBBBXBSQAzAvAtAyQB/COBOCgQAfA+AWBAQAmBsAQBtQAbC0gmC0IgLAuQgnCdhTCBQgRAagSAYQgOBygxBsQgKAWgLAVQg/B/hzBrIgKAcQgRAwgfAxQgtBZhVBVQg9BDhSBAQirCRj0BQQiTAxi0AcQiTAVjBAOQknAVlkAJQoDAInMgCIhagBQnBgCkfADQihABiQAEQk0AIjNAEIhPABIgJAAQjsAAiJgZg");
	var mask_3_graphics_9 = new cjs.Graphics().p("EgjrAgjQhngLhbgVQiRgih2g/QikhYh6iTQgsg2gng+QiOjmgFkCIAAgCQgFkDCFjrQAjg9Apg3QB0ibCkhfQAxgcA2gYQAUhLAghHQA8iCBrh1QBQhYBghBQBuhPCRgvQBzgoCRgVQA3gHA6gFIAYgCQAIgfALggQg4jHBRj2QBTj9Dai4QB5hhCphZQB8g6DIhXQDEhVCGgrQCZg2CMgfIAvgKQCnggC2gLQBEgDBKgCQBjgCBvABQCwACCUAHICDAIQBeAIBgALQCJASB0AeQAmAJAkAKQDPA7CtBmQBrA9BYBKQBgBSBNBhQA4BGAsBNQBrBBBgBSQA4AvA0AzQCQCPBgChQAmBAAeBBQAzBvAcByQAvC+gXDCIgHAyQgbCphQCQQgQAcgSAbQAUCBgVCCIgLA1QghCdhgCNQACASAAASQAEBAgKBEQgMB8g7B3QgrBehGBcQiXDQj0ByQiUBFjAAoQiVAdjTAUQkyAdl+AOQn3AQobgDIhggBQnugEkcABQipABiaACQk6AGjoAIIhUACIiGABQirAAhjgMg");
	var mask_3_graphics_10 = new cjs.Graphics().p("EgiqAmWQkfgQjMhfQj4h1icjwQidjygFkRQgFkSCSj2QCTj3D0h+QA1gcA7gWQAWj6CWjdQCnjzEDhvQClhIDhgYIAagCQAAgqAEgqQickJAblIQAblSDPj1QBuiCCxh2QBzhNDZh0QDThxCAg6QC/hVClgqQCngqDJgOQCfgKDXAGQEQAHDOAbQEAAjDSBIQECBYDSCaQDfCiCKDYQA1BRAmBXQC2BpCfCOQChCPBzCjQB8CwA/C9QBDDIgIDOQgIDXhYC0QgPAfgSAeQBCCtgFC5QgFC8hMCtQAlBmAOBuQAkEbiDEPQiEEOj0CUQiVBajMAzQiWAmjlAaQq7BRxxgGQplgGkzgBQoTgBmFARQjwAKiTAAQhNAAg0gDg");
	var mask_3_graphics_11 = new cjs.Graphics().p("EggrApKQh1gChTgKQi2gUiRg3QhDgZg7ghQjChqiEi8QgUgdgSgdQiMjmgGkBIAAgBQgEkCCCjpQARgfATgdQB9jCC9hyQAxgdA1gYIAMgSQAegxAngtQAcibBQiPQA1hhBJhTQBmh2CChNQB3hICVgpQAngLAqgJIAYgFQARgbAUgZQAThGAshEIAKgPQgGgqgBgqIgDgDQg8gngzg1QhJhLguhlQgMgbgKgcQgTgRgSgTQgogrghg5QgohJgchWQgpiZAPimQAGg6ANg3QAXhoA1hjQAihHAxg/QAxhFBOhAQBJg+Bpg9IAKgFQBXgxBzg2QBVgpBIggQDLhaCrg5QCsg6ChghIAtgKQC4goDNgTQD7gbDWADIAqABQBrAEBaAOQB8ATBnAqQAjAPAhARQBTAsBFA/QBCALA/AQQB2AcBmAsQDFBRB/CNQA1A7AnBFQAeA2AVA8QANAlAKAlIAFAJQBfAlBXAtQBoA0BfBAQBwBKBgBYQBDA8A5BBQBrB5BJCIQAeA3AYA5IAUAzQBzCLBLChIADAFQBMCnAWCjIAEAkQADAgABAgQA9B8AcCBQANA5AGA7QAOCHgVCFQgKA+gRA8QAIBxgSBuIgFAaQgGAfgIAfQAjCmgaCrQgNBVgcBSQgdBTgqBNQgIBagcBYQgeBjg3BZQhEBxhuBkQgiAfglAcQiFBxjNBJIgdAKQiZA2jAAgQibAZjMARQn9Aqq5AFQkIAAj4gBInhgEQjbgBinABQlHABkMAJIkNAJQiNAFhiAAIguAAg");
	var mask_3_graphics_12 = new cjs.Graphics().p("EgiqAsLQkfgQjMhfQj4h1icjwQidjygFkRQgFkSCSj2QCTj3D0h+QA1gcA7gWQAWj6CWjdQCnj0EDhvQClhIDhgXIAagCQAAgqAEgrQhhikgai8QhWgNhOgnQhqg2hLhhQgUgagRgcQgjgDgigHQixgoiKiaQh8iMg+jBQg+jDAVi8QAWjPB2iLQBHhTB1hGQBJgrCShCQI/kEFHhxQH+iwGxgfQCSgLBsAMQCIAQBnA1QB/BBBQB9QBKgDBIABQGlAFDLDNQBqBrAiCbQALAwADAvQBrAZBiAiQECBYDSCaQDfCiCKDYQA1BRAmBWQC2BqCfCOQChCPBzCjQB8CwA/C9QBDDIgIDNQgIDYhYC0QgPAfgSAdQBCCtgFC6QgFC8hMCtQAlBmAOBuQAkEbiDEPQiEEOj0CUQiVBajMAzQiWAmjlAaQq7BRxxgGQplgGkzgBQoTgBmFARQjwAKiTAAQhNAAg0gDg");
	var mask_3_graphics_13 = new cjs.Graphics().p("EggxAxkQkggQjMhfQj3h1idjwQicjygGkRQgFkSCTj2QCTj3Dzh+QA1gbA7gXQAWj6CXjdQCmj0EDhvQCmhIDhgYIAagCQgBgqAEgqQhgikgbi8QhWgNhOgnQhqg2hLhhQgUgagRgbQgjgDgigIQiwgoiKiaQhJhRgzhkQiFAtiEgXQiGgYhuhZQhuhbgxh+QgQgogJgsQhxhdgyiQQg0iPAbiPQAPhRAphYQAhhGA4hWQDOk9ExkJQEej6Fji8QCrhbCEglQCsgwCSAcQCRAcBzBpIAcAbQBogjBBgQQB9gdBoAIQCdAMCEBiQCFBiA3CTQAtB3gPCAIA6gFQCSgLBrAMQCKAQBmA1QB/BBBQB9QBKgDBIABQGlAFDLDNQBqBrAjCbQAKAwADAvQBrAZBiAiQECBYDSCaQDfCiCKDYQA1BRAmBXQC2BpCfCOQChCPBzCjQB8CwA/C8QBDDIgHDOQgIDYhZC0QgPAfgRAeQBBCtgFC5QgFC8hMCtQAlBmAOBuQAkEbiDEPQiDEOj1CUQiUBajMAzQiWAmjmAaQq7BRxwgGQplgGkzgBQoUgBmFARQjwAKiTAAQhNAAgzgDg");
	var mask_3_graphics_14 = new cjs.Graphics().p("EgcLAyVQi8gCh6gXQhcgPhQgZQirg0iEhhQhKg2g/hEQh+iIhGirQgehLgRhNQgrjCAojCQAMg/AWg+QBGjICQiZQAlgnApgiQAsgmAyghQA/iQBuh0QAogrAwgnIALgeQBXjgC0igQAYgUAZgTQCOhzDCg7IAXgHQASgeATgdIAEgLQAch4BehxIAEgLIAEgKQgPglgMglIgBgBQiUhVhoiLQg4gRg2gbQgagNgYgPQhqhBhNhfQgVgagSgbQgUgMgTgOIgVAAQi7gGikhnQgbgQgbgTQg/gsg2g4Qh/gMh1g/Qg9gig4gvQgwgpgqgxIgXgeQhCg2gzhDQgVgcgSgeQgWgmgSgoQhJhQgvhmQgQgkgOgmQgyiRAKiVIAAgBQAFhXAahbQAWhRAohZIAGgNQBMiqByicQBjiHB6hzIAxgrQBmhZBxhGQDYiEEKhFQBBgSBAgMQBpgVBcgFQBVgFBPAIQBSAIBLAWQBkAfBWA4QAcATAbAVIAZAJIAjANIATgEQBZgQBEgFQB8gMBmAKIALABQCmATCIBPIAsAbQByBMBKBuIAPAWQBPAzAwA8IA8AAQArAAApADQBfAFBPAQQCIAaBqA5QAeAQAcATQBdA+BHBbQA5AYA2AeIAIAFIABAAQEdAHDSBXQBZAmBKA0QB+BaBLCBIAXAsQAKATAJAUQBcA3BMBDQBVBIBEBYQCNA8B9BRQBNAxBEA5QCQB1BoCOQAtA+AmBDIAUAlQAyAyAsA1QB6BMBuBdQAwAnAsArQBxBqBZB1QAfAqAbAqQBbCJA2CRQAPAnALAnQAyCmgBCrIgCA9QgMC7hKCfIgSAlIgOAbIgDAiQA5CggDCqIAAAUQgHC3hKCpQAkBjAOBrIABALQAhEPh4EEIgRAjQh7DxjYCNQgcATgfARQh7BEidAsQgpALgtAKQh3AbijAVQg1AHg3AFQqRBIwCgCIjFgCQm3gEkJgBIjxAAQlsABkjAKIkfAJQhnADhLAAIgpAAg");
	var mask_3_graphics_15 = new cjs.Graphics().p("EgcPAzZQkfgRjMhfQj4h0icjxQidjxgFkSQgFkRCSj3QCTj3D0h+QA1gbA7gWQAWj7CWjcQCnj1EDhvQClhIDhgXIAagDQAAgqAEgqQhqizgWjQQgygwgtg3QkDgKjmiSQi/h5hyizQj1AojmhRQkchji8kCQg1hIgmhLQhHgyg8g/QiHiJhNi6QhLi2gJjGQgJi/A1jCQA0i7BniqQBciWB5h1QB/h7CVhLQEXiMGEAKQDKAGCuAuQDCAzCVBkQAcATAbAVIBcgDQDogDCkAXQDWAeCiBQQCLBFBtBtQDUgJCoAXQEaAnDICDQCbBmBsCeIAHAJQEYALDqBNQEiBfC8C9QC5C7BEEGQDvBXDGCQQDfCjCKDXQA0BSAnBWQC1BpCgCOQChCQBzCjQB8CvA/C8QBDDIgIDPQgIDXhYC0QgQAfgRAeQBBCtgEC5QgFC9hMCsQAlBmAOBuQAkEciDEOQiEEOj0CUQiVBajMAzQiWAmjlAaQq7BSxxgHQplgGkzgBQoTgBmFARQjxALiSAAQhOAAgzgDg");
	var mask_3_graphics_16 = new cjs.Graphics().p("EgZ1A0sIgygDQj4gSi4hOQgigOghgRQjLhqiLjCQgdgogZgrQhxjDgSjXQgFg/ADg+QAKjLBfi8QAihDArg9QBxijCihmQAyggA3gaIAagnQAfguAngrQAciYBPiMQAxhZBBhOQByiICVhVQBfg3BzgkQBKgXBUgQIAYgEQAUgaAWgYQAOgmAWglIAJgNQgIgqgEgqQgchFgShIQglg3gfg8QgqghglgnQg9geg5goQhwgVhpgwQiJg/hxhiQgtgngngsQiSglh6hQQhKgBhJgMQiogdiUhVQhog8hXhVQg9g7gxhCQhBg1g5hCIgUgXQg4hFgshMQg5g+gvhHIgDgFQgQgZgPgaIgYgLQiDg7heh0IgcgkQhkiKgai3QgZi0A7iqIAPgnQASgsAZgvIBHiAQAbgyAxhSIATgfQA5hdA0hBQAmgvAsgtQA5g6BDgzQBFg2BTgxQAtgaAwgYQBmg0BiggQBpglBqgTQBHgMBSgHQB/gICHAHQBDADA7AIQAvAGAqAJQBvAXBaAtQAkASAhAVQAeATAbAXQApAPAnASQAYAMAXANQBiA1A8A/QA3APAxATIAhAMQAfANAdANQAtAEAtAGQBrANBcAYQBcAWBNAhQA8AYA2AeQCFANBxAfQBCARA8AYQBLAeBDAnQDCATCaA6IAIADQCwBACFByIAJAIQA8APA4AUQCqA7CHBnIAIAHIAoAGQD0AuDABoQAuAaArAcQC9B8ByC3QAWAkATAmQCpB3BxClQAlASAkAUQCzBkCNCGQAyAwAtA0QBABKA0BRQBEA5A+BAQA/BDA3BJIAyAkQCNBqB2B9QAaAcAZAcQBuCABMCKQAXAoATAqQBECOAdCVQALA3AFA3QAOCUgYCMQgLA/gTA8QgLAigNAgQAGBhgPBfQgFAggIAgQAMAyAGAzQAOB9gTB9QgKA/gSA9QAKBrgQBtIgCAMQAZBnABBrQADCwg/CrQgjBegzBWQhmCoiYBxQhFAzhQApQhaAthsAiQhHAWhTARQhkAWiDARQhDAJhKAIQqjBJwlgGIg6AAQpKgGkrgBIgPAAQoGgBl+ARIgbABQjnAJiOAAQg8AAgtgBg");
	var mask_3_graphics_17 = new cjs.Graphics().p("EgYTA2IQkggRjMhfQj3h0idjxQicjxgGkSQgFkRCTj3QCTj3Dzh+QA1gbA8gWQAVj6CXjdQCmj1EDhvQCmhIDhgXIAagDQAAgqADgqQhpizgWjRQgzgvgsg4QkEgJjmiSQi+h4hyizQj1AnjnhRQkchji8kCQg0hIgmhLQhHgyg9g/QiGiJhNi6QgNgfgLghIgeAAQjDgFiNh0QiNhzgri+Qgri+BMilQAag3AzhIQA6hRAcgpQAbgoBLh/QA9hqAsg7QBShuB8hlQBkhSCQhZQBrhCBYgrQBsg2BigeQCogzEAgNQCGgHBYAIQB4AKBbAnQCRA+BaCMQBGBrAPB1QBGAiA+ApQAdATAaAVIBcgDQDogDClAXQDVAeCiBQQCMBGBsBsQDTgJCpAXQEaAnDICDQCbBmBtCeIAGAKQEYAKDqBNQEiBfC8C9QC6C7BEEGQDvBXDFCQQDfCjCKDXQA1BSAnBWQC1BqCfCNQChCQBzCiQB8CwA/C8QBDDIgHDPQgIDXhZC0QgPAggRAdQBBCtgFC5QgEC9hNCtQAmBmANBtQAkEciDEOQiDEOj1CUQiUBajMAzQiWAmjmAaQq7BSxwgHQpmgGkygBQoUgBmFARQjwALiSAAQhOAAgzgDg");
	var mask_3_graphics_18 = new cjs.Graphics().p("EgURA6jQkggQjMhfQj3h1idjwQicjygGkRQgFkSCTj2QCTj3Dzh+QA1gcA8gWQAVj6CXjdQCmj0EDhvQCmhIDhgYIAagCQAAgqADgqQhpi0gWjQQgygwgtg4QkEgJjmiSQi+h5hyiyQj1AojnhRQkchki8kCQg0hHgmhLQhHgzg9g+QiGiKhNi6QgNgfgLggIgeAAQjDgGiNhzQiFhuguivIgLgGQihhPhQiVQhaiuAYj2IgXgSQhwhdgziOQg0iQAeiNQAjiiCIiTQBnhwC0h5QCghqCOhKQClhWCcgyQDOhDEDgbQDAgTEcgCQCWAABWAKQCBAQBeAvQCGBBBSCEQAOAWALAWQB0BJBDByQBOCEgFCgQgEBgghBTQAKAkAFAmQBGAhA+AqQAdATAaAUIBcgCQDogEClAXQDVAeCiBRQCMBFBrBsQDVgJCoAXQEaAnDICEQCbBlBtCeIAGAKQEYAKDqBNQEiBfC8C+QC6C6BEEHQDvBXDFCQQDfCiCKDYQA1BRAnBXQC1BpCfCNQChCPBzCjQB8CwA/C9QBDDIgHDOQgIDYhZC0QgPAfgRAeQBBCsgFC6QgEC8hNCtQAmBmANBuQAkEbiDEPQiDEOj1CUQiUBajMAzQiWAmjmAaQq7BRxwgGQpmgGkzgBQoTgBmFARQjwAKiSAAQhOAAgzgDg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EgRqA/JQjygHidgnQgygKgngNQjphBikiPIgQgNQjBirhUj2IgGgUQhLjvA4jzQAHgdAIgdQBBjbCbipQAlgnAogiQAvgpA1gjQA6h8BehkQAlgpAsgkQAQg2AWg1QBIipCAiHQBKhNBYg6QCAhYClgvQAqgNAtgJIAagGQAVgbAYgbQAWgwAkguIAJgMQgGgogDgnQgahAgRhEQgog6gfhBQghgegdghQg5gcg2glQiPgXiGhCQhcguhSg+QhihMhJhdQhJgahBgmQimANiegqQhCgSg/gbQjghfifjHQgcgjgZglQgagmgVgnQgagcgXgdQgpgfgmglQgWgVgVgXQhzh8hGiiIgMgeIgEgJIgTgQIgegCQiBgQhwg4Qg5gcgyglQhdhFhAhfQgjgygbg5IgJgJQhZhOg7hoQgagwgUgzQgvh7gHiOQgDhWAKhYIgKgaQgjhggFhtQgNgegLggQgxiOAKiYQAMixBZinQAqhVBAhWQAvhCA6g/QBXhgBehQQAqgjAqgeQA9gtA/gkIALgOQA4hFBAg8QBAg8BOg1QBxhOCIg0QArgRAvgPQCDgsCigUQArgGAugEQB0gJBiAEIAhACQB+ALBwAjQCOAwB5BeIAQAOIAWASQCAA/BbBaQB0BvAxCHIACAFQAeBSAJBSQAPAjALAkIAQAQQArAvAlAzQAUAbARAdIAsAnIALAJQBVBKAxBRQAbAjASAjQAgA0ATA2QAbBDAIBDQAEAaABAbQADAlgBAlQAOAsAIAtIATAfIAIAFIAgAVQCPAWB3AsIAjAOQAeAMAdAOQAsADAsAGQC4AVCMA0IAoAPQCiA9B6BnIAJAIIAZAGQCPAmB6BDQB0AIBoATQBIANBBASQDlA+ClB/QAVAQATAQQCHBzBWCfIAFAKQAsAdAnAhQDAAqCnBOQA7AbA3AfQC8BrCFCVQAsAyAlA1QA5BTApBaQA2A9AuBEQB2A8BrBLQBYA9BOBGQBTBJBGBSQBeBvBDB6QAjA/AbBCIAPAmQBzCNBKCiIAFALQBMCsARCmIAAAMQAEAfABAfQBHCOAcCWQAGAhAEAhQAVCkgfCiQgFAbgHAaQANBwgMBtQgGA3gMA1QgHAfgKAgQAcCpglCuQgGAegIAdQgnCPhNB7QgPBYgiBVQgOAkgSAiQhHCTiPB8QgVATgXATQhqBeiXBFQhcAuhpAjQieA1jEAfQigAYjQAQQmdAfoTAHQmyAEl6gCIihgBQm5gDkgAEIjfAEQlUAJjKAAQg7AAg5gCg");
	var mask_3_graphics_20 = new cjs.Graphics().p("EgWABD4QkfgQjMhfQj4h1icjwQidjygFkRQgFkSCSj2QCTj3D0h+QA1gcA7gWQAWj6CWjdQCnj0EDhvQClhIDhgYIAagCQAAgqAEgqQhqi0gVjQQgzgwgtg4QkDgJjmiSQi/h5hyizQj1AojmhRQkchki8kCQg0hGgnhLQhGgzg9g+QiHiKhNi6IgEgKQiggXiThKQiphVh5iIQiCiQhHjCQhEi5gEjLQgEjoBMjYQhEiogMjIQgRkqBwkeQBUjYCOimQBbhqBqhLIAEgUQAsjHB7ipQB8iqCwhmQCEhOCggnQCXgkCkACQElAEFFB4QFkCCC+DNQBjBrBACKQA9CGAWCVQAWCggbCiQgcCihKCPQhMCQh2BxQgtArgwAlQgWBZgnBUIAGALIAUAqQClAyCCBYQAcATAbAUIBcgCQDogECkAXQDWAeCiBRQCLBFBtBsQDTgJCoAXQEbAnDICEQCbBlBsCeIAHAKQEYAKDqBNQEiBfC8C+QC5C6BEEHQDwBXDFCQQDfCiCKDXQA0BRAnBXQC2BpCfCOQChCPBzCjQB8CwA/C9QBDDIgIDOQgIDYhYC0QgPAfgSAeQBCCtgFC5QgFC8hMCtQAlBmAOBuQAkEbiDEPQiEEOj0CUQiVBajMAzQiWAmjlAaQq7BRxxgGQpmgGkzgBQoSgBmFARQjxAKiSAAQhOAAgzgDg");
	var mask_3_graphics_21 = new cjs.Graphics().p("EgQdBDyIgsgDQkJgRjIhFQing6iEhhQhSg4hChGQhghZgzhfQhJhxggh+QgThDgGhDQgUisA4iyQALgjANgjQBPjNCliLIAHgGQAnghAugeQARi4BYioQAihDAsg+QBniQCIhfQAtgfAxgbQAsgnAygiQByhRCeg1QAogNAqgLIAZgHQAGgpAKgoQgkh+AFiAQACgzAIgzQgZgrgTgvQgbgDgZgGIgMgDQgcgNgcgPQiThAh7hxIgQgQQg0glgtgqQh6hMhbhsQhVAEhTgLQiegWiOhGQgcgOgagPQjLg5iiiQQgugpgpguQg8hDguhIQhHg0g+hCIglgqQgyg7gphDQgtg8gmhEIgQgfIgEgJQiLgqh6hTIgHgGIgTgHQh+g2hohSQgqgigmgmQhNhNg7hdQgyhNgkhZQgghMgUhRQgdh1gFh7QgDg5ADg3QAIi0A7iqIgLgwQg3iZgLiyQgQkLBakDQAMglAQgmQA+iYBbh+QApg6AvgzQAigmAkghIALgOQAxg9A4gyIAFgVQAZhZAohUQAzhoBLhbQAqgzAvgsQBmhgB+hAIAGgDQB5g8CLgeIAvgJQCcgbCnALQBKAFBLAMQCDgSCSALQBYAGBdARQCUAdCCAwQCyBGB/BrQAtAmAoAsQA4ArAxA4QBEBQAwBgQAIANAGAOQA4B5AOCIQAHBFgDBEQgDBDgOBDQgeCHhHB6IgSAdQgUAegVAdQgIBbgZBWIAGAMIATAsQBRAtBEA4QAwAoAoArQAWAYATAYIBDASQBZAWBEAbQA+AVAwAWQB6AyBRBDIAUARQBGA7AvBKIALASICigLIANAAIAwASQBdAkBEAvQBBArAyAzQAmAoAeAtQAuBLAfBUIAEAKIApANQAkAMAiAMQA8AaA1AdIAKAEIAkAQQBGASBBAXQBHAZBAAgQAcANAbAPQAmAPAlAQQCHA5BpBQQAbAUAYAVQCGBuBRCUQAbAuAWAzQBKAgBFAmQCkA3CMBRIAHAFQDNB0COClQAbAgAaAiQA6BPAtBWIApAdIAHAGQCmBNCVBsQAnAdAmAeQCCBoBkB4QA5BFAuBKQBDBpAqBxQAnBoASBsQAiBXARBaQAUBrgBBmQgCBTgRBPQgGAfgJAeQAuBgAYBlQATBOAGBQIABAJQAfCogcCkQAxBiAbBqQASBGAIBHQAVCxgsCwQgHAggKAfQgsCOhNB1QhMB1htBYQgdAYggAWQgYARgbAQQhJA/hiA1QgcAQgfAPQhpA5iaAxIgRAGQhCAchMAeQixBJjzBAQjXA/kFAiQieAUiyALQiMAHieAEIg0ABQokAGlkADQl2ABlIAGIj4AGQjsAIiYAAQhVAAg7gCg");
	var mask_3_graphics_22 = new cjs.Graphics().p("EgLzBEEIgsgBQkPgNjTgzQiygqiPhHQhegphLg0Qh3hBg+hJQhkhXg9hpQgkg4gYg8QhCiZAGiyQABglADgkQAVjUB6isIAFgHQAdgqAkgmQATi9BeitQAkhEAvg+QBriRCRhdQAvgfA0gZQAigwAqgqQBghoCShPQAlgVAngSIAXgKQANgoAQgnQADh7AshxQAQgtAXgrQgBglAHgnQgHgFgFgGIgCgCQgWgUgUgWQiGhahjiFIgNgTQg0gogtgtQiEg7hrhgQhWgGhTgWQiegpiFhYQgagRgYgTQjWghiziAQgzgkgugrQhDg+g2hGQhIg3g/hFIglgrQgzg/gohFQg0g5grhDIgSgeIgGgJQiEg/hshnIgGgGIgUgHQiEguhwhPQgtgggpglQhUhLhBhdQg2hNgohaQgjhNgYhTQghh3gJh/QgDg5ABg6QAGi6A6iuIgDgyQg7idgLi3IAAAAQgQkTBfkKQAOgnAQgmQBBibBhiBQAsg6AygzQAkgmAmghIAKgPQAphDAzg7IAGgUQAdhbAuhUQA6hpBRhYQAtgyAzgqQBuhcCHg6IAGgCQCAg2CQgWIAxgGQCggSCsAUQBLAJBNAQQB3gyCPgTQBYgOBeABQCUADCNAfQC7AtCQBeQAxAhAuAnQA9AQA7AdQBTAqBKA/IAVASQBZBSA3BuQAdA4AUA8QATA6AJA+QAQB+gZCDIgHAfQgHAigLAgQAIBbgLBaIAFANIARAuQBEA8AyBHQAjAwAcA0QAOAbAMAcIAqAnQA4AvAfAwQAfAkATAhQA3BJALBFIAFAQQAPA4gFA3IgBANQAZgHASgSIAEgDQAKAOAIAOQAmAzALAxQAQArAFAqQAEAfgDAfQAWBRAEBVIABAJIASAYIAdAmQAoApAeArIAJAGIAgAWQBIAUBCAZQBJAcBAAjQAdAPAaAQQApALAnAMQCSAqByA/QAeAQAbARQCaBaBmCDQAiAqAeAvQBKAkBDAtQCxAnCTBDIAHADQDfBhCbCdQAfAeAcAhQBBBMAzBXIAnAiIAHAHQC0A8CeBdQAsAZApAbQCPBcBvBzQA/BCA0BIQBLBoAwByQAsBpAVBwQA1BLAmBRQAtBgAZBfQAVBOAFBNQADAeAAAeQA3BeAiBlQAaBNAOBRIACAJQBFCYATCeQA8BfAoBnQAbBFASBFQAvCxgRCzQgDAhgFAhQgWCTg7CCQg7CChfBmQgaAcgdAbQgWAVgYATQgrBQhHBLQgUAXgYAWQhPBXiFBOIgPAJQgoAvg2AxQh8B+jWB0QjCBzkCA+QibAmi4AVQiKANimAJIg2ADQoHARmhAGIrYAIIj9AEQjZAFiYAAQhrAAhKgDg");
	var mask_3_graphics_23 = new cjs.Graphics().p("EgHVBExIgtgCQkTgIjfghQi8gbicgsQhogZhUgiQiPgqhKgyQh+g+hahUQg1gtgqg0QhwiGgsi0QgJgkgHgmQgljdBPjLIADgJQATgyAbgvQAUjBBjixQAnhGAxg/QBxiSCahcQAxgdA2gYQAZg4AhgzQBOh/CFhpQAigcAkgYIAWgPQATgnAXgkQArh5BShiQAegnAmgjQAYggAggfIAcgLIAHgDQgPgcgLgcQh7h0hKiZIgKgWQgzgqgugxQiOgph7hUQhWgQhUggQieg9h8hqQgYgVgXgWQjggJjEhxQg4ggg0gnQhJg4g+hFQhKg5g/hJQgTgWgSgYQg0hAgnhHQg6g3gxhCIgVgdIgHgIQh9hUheh7IgFgIIgWgFQiJgoh4hLQgwgfgsgjQhahJhHhdQg7hNgthaQgmhOgbhVQgmh6gLiBQgFg8ABg7QACi/A6i1IAEgzQg+ihgLi8IAAAAQgQkbBkkRQAPgnARgnQBFifBniCQAvg7A0gzQAmgmApggIAHgSQAihKAthBIAHgVQAihbAzhVQBBhqBXhWQAygwA3gpQB1hXCQgzIAGgDQCGgvCWgOIAygEQClgJCxAeQBMANBOAUQBthTCLgxQBXggBfgQQCUgXCZANQDEAUChBRQA2AcAzAkQBDgOBFADQBhAEBkAfIAcAJQB6AqBgBUQAyArArAzQAqAzAfA6QA/B0AWCMIAEAhQAEAkABAkQAWBdACBcIAFANIAQAxQA1BMAhBVQAXA6AOA6QAIAgAEAfQAKAfAIAdQAVBHgGBGQACAzgKAsQgMBhg5BFIgMAQQgoA1g5AkIgNAJQglgIgmggIgGgFQgEAUgGASQgRBCgvAzQghAsgoAeQgfAYgiAQQgEBYgWBVIgCAJQgCARgDARQgFAbgHAZQATA5AHA4IAIAIIAcAdQBKAVBFAcQBJAeBBAnIA3AiIBUAOQCeAbB7AvQAgAMAfANQCtBGB6ByQArAlAlArQBKApBCAzQC8AXCaA0IAHADQDyBOCpCTQAiAeAfAgQBIBJA4BYQATASASAUIAHAIQDBAqCpBOQAvAWAsAXQCdBSB5BtQBGA/A6BIQBSBlA3B1QAwBpAZBzQBIBAA7BHQBGBUA0BaQAqBJAcBKQALAeAKAeQBABcAsBkQAiBNAWBRIACAJQBrCJBBCZQBIBcA1BjQAlBCAbBFQBJCwAJC2QACAjABAiQgBCZgqCPQgpCOhRB1QgXAhgZAfQgUAYgWAXQgMBhgtBgQgMAegQAdQg3B2hvBrIgMAMQgPBBgfBGQhHCyi7CnQitCnj9BbQiZA3i/AfQiHAUiuAOIg4AEQnqAcnfAKQlzAGl9ABIkFACQjEADiTAAQiDAAhcgCg");
	var mask_3_graphics_24 = new cjs.Graphics().p("EgDBBFpIgtgBQkZgEjqgOQjHgMingSQh1gKhdgQQimgShVgcQiZgkh2g+QhHgjg7gsQifhzhdi1QgTglgRgnQhfjlAjjsIABgJQAJg7ASg4QAWjFBpi2QAphIAzg+QB2iTCihbQAzgcA5gXQAPhAAZg8QA8iWB5iDQAfgjAigfIAUgTQAagmAcgiQBTh3B4hTQAtggA0gbQAxgbA6gWQAggIAjgFIARgDQgIgjgEgjQhuiNgyitIgHgZQgzgtgtg1QiZgXiKhJQhXgZhUgrQiehRhzh7QgXgZgVgaQjqAPjWhgQg9gcg4gkQhRgzhGhCQhKg8hAhMQgUgXgSgZQg0hEgnhIQhAg1g3hAIgXgcIgIgJQh2hphQiOIgFgJIgWgEQiPghiAhIQgzgdgvgiQhhhGhNhdQhAhNgwhbQgqhPgehXQgqh9gPiEQgGg9AAg+QgBjEA6i6IALg1QhBikgLjBIAAgBQgRkjBqkXQAQgpARgnQBJijBtiEQAxg8A3gzQAoglArggIAGgTQAbhRAnhJIAIgVQAmhcA5hVQBIhrBehUQA1gvA7gnQB9hSCYgtIAGgCQCOgpCagGIA1gBQCpgBC1AnQBOARBQAZQBhhzCIhQQBWgzBgggQCVgxCkgFQDMgECyBDQA7AXA5AgQBIgqBPgYQBwghB9gDIAkABQCbACCJA6QBHAeBCArQBAArA2A1QBsBrBFCVIAOAiQARAoAMAoQAmBdAQBgIAEANIAPAzQAnBcAPBjQALBDABBCQABAjgDAkQgCApgGAoQgMBfgqBbQgdBCgnA4QhQB4h9BGIgcAQQhfAyhtARIgYADQhmgHheguIgPgIQgTAZgUAWQhJBRhnA2QhSAshVAUQhBAQhDABQgcBegxBWIgFAJQgNAXgQAVQgZAjgcAfQgBBJgQBGIAHAJIAYAkQBNAWBFAfQBMAgBCAqQAdASAaATIBYAGQCqAMCDAfQAkAHAhAJQDBAyCOBhQAyAiAtAnQBKAtBBA5QDIAHChAmIAHACQEEA7C3CKQAlAcAiAfQBOBHA+BYQATAUARAWIAHAJQDOAaCzA/QAzARAwAUQCqBHCEBoQBMA8A/BHQBbBkA8B3QA1BpAcB3QBbAzBRA/QBeBIBPBUQBABDAyBJQAVAdASAdQBJBaA2BkQApBNAeBSIAEAJQCQB5BwCTQBUBZBCBfQAtBBAlBDQBjCxAkC5QAHAkAFAkQAWCegYCbQgYCbhECEQgTAlgXAkQgRAbgUAbQATBygSB2QgFAkgIAlQgeCUhaCHIgKAQQAMBTgJBaQgSDnieDbQiZDaj5B3QiWBJjGApQiEAbi2ATIg6AFQnOAnocAOQlyAImWgBIkMAAIhnAAQkrAAi1gCg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EgWABILQkfgQjMhfQj4h1icjwQidjygFkRQgFkSCSj2QCTj3D0h+QA1gcA7gWQAWj6CWjdQCnj0EDhvQClhIDhgYIAagCQAAgqAEgrQhqizgVjQQgzgwgtg4QkDgJjmiSQi/h5hyizQj1AojmhRQkchki8kCQg0hIgnhLQhGgyg9g+QiHiJhNi6IgEgKQiggXiThKQiphVh5iIQiCiQhHjCQhEi5gEjLQgEjoBMjYQhEiogMjIQgRkqBwkeQBUjYCOimQBbhqBqhLIAEgUQAsjHB7ipQB8iqCwhmQCEhOCggnQCXgkCkACQERADEtBpQBWiUCFhtQDYiyEignQEdgmD6BtQC4imEDg8QE2hJEZBvQEYBuCyEJQCzEJgEEuQgEEti4EEQi5EEkbBoQirA+i4gCQi4gDiohCIgZgKQiWCJjOBHQjnBPjjgfQhLCMhzBuQgtArgwAlQgWBZgnBUIAGALIAUAqQClAyCCBYQAcATAbAUIBcgCQDogECkAXQDWAeCiBRQCLBFBtBsQDTgJCoAXQEbAnDICEQCbBlBsCeIAHAKQEYAKDqBNQEiBfC8C+QC5C6BEEHQDwBWDFCQQDfCiCKDYQA0BRAnBWQC2BqCfCOQChCPBzCjQB8CwA/C9QBDDIgIDOQgIDYhYC0QgPAfgSAdQBCCtgFC6QgFC8hMCtQAlBmAOBuQAkEbiDEPQiEEOj0CUQiVBajMAzQiWAmjlAaQq7BRxxgGQpmgGkzgBQoSgBmFARQjxAKiSAAQhOAAgzgDg");
	var mask_3_graphics_26 = new cjs.Graphics().p("EgPfBIIQg9AAgugCQklgOjXhKQhhgihVgvQibhQhsh5QgrgqgggrQiDifgri8IgGgYQgvjXBBjgIAKgiQBFjOCQiTQAigiAngfQAsgkAzgfQAQiBAyh5QAyh3BPhpQBJhiBahJQArgkAvgfQBJhNBbg7QBWg5BtgrQBOgfBYgVIAZgGQAHgoAKgoQgZhYgDhaQgEhUAPhWQgagpgTgvIgIgBIgMgCQgegKgcgNQikg5iHh1IgmgbQghgXgegZQidhYhwiIQg1ACg0gFQi+gPinhWIgFgDQjTgxipiLQhBg2g6hDQg7hDgthJQhHg2g9hCIgIgJQg1g7gqhBQgxg8gohEQgSgfgQggIgEgKQh7gmhshGIgHgEIgzgUQhvgxhehIQg3gpgvgwQhFhFg2hSQg4hWgphkQgchEgShIQghh8gFiEQgCgyABgyQAIi6A9iuIgKgqQg5ibgKi1QgQkPBbkFQAMgiANghQBAieBgiDQAmgzAqgvQAogsArgnIALgNQAsg1AxgtIAFgVQAbhkAvhdQAvhdBDhSQAyg+A7g1QBfhWB1g7IAYgMQB9g8CRgbIALgDQCbgcCoAKQBeAGBjASQCEgOCTAOQAsAEAtAHQBliLCShgQAYgQAZgOQDUh4D4gIIATgFQDVg3DSAkQA7ALA5ARQCqhyDOgjQAsgHAugEQBRgHBOAHQAvgKAwgFQB3gcB9AHQAdACAdAEQCVAUCEBGQBqA2BdBYIACADQBcBXBABmQATAeAQAgQAVAjARAmQAYAzAPA6QALAmAHAnQAOBVgGBcQgGBbgfBeQgJAggNAgQg/CVhmB5QhBBGhPA7IggAXQg/AphDAgQhOAohTAQIgQAEQhaAXhdgCQg+gBhAgLIgYgEIAAAAQg/A1hIAnQhdAzhoAbIgiAXQhfA4hmAiQhpAjhvAHQg5BehNBQQgjAlgmAhQgxApg0AjQgmBOg0BGIADAJIADAWIADANQBeArBEA6QAQANAOANIAVgEIAhgHIBZgRQBVAUA8AVIAEABQBjAfBIAqQAWANAUANQA7AoAvA0IAJAKIATAgQBuARBQAYIAkAJQBsAfBRAvQA2AtAsAzQAdAiAYAlQAaAlAVAoQAlA8AbBCIAEAKIADAAIAKADIAmAKQCXASCGAoIA6ATQApAHApAJIAmAJQClApCDBDQB1A6BfBQQAlAfAiAiQBhBiBAB6QAqA3AhA+QBcAaBUAiQCXA8CDBXQA/ApA4AvQCEBsBfCIIAFAJIAfAeQBABDA0BJQBqAyBiA/QBSA0BLA9QCABlBjB2QAjApAfArQBtCYA8CoQAPAYANAYQBaCjAhCvIAGAiQAgDKguC2IgEARIgNAtQAXA4ARA5QAwBuATB3QAKA6ADA5QAHB2gYByQAYA2ATA4QAPAxALAyQAdCEgGCEQgHCYg3CVIgWA3QhKCuh/CAQgVAWgYAVQgZAegbAdQhFBHheA8Qg2Akg/AfQhDAkhaAgQg/AghSAgIgEACQiwBNj1BDQjYBCkLAkQigAWi0AMQigAJi6AFIiXADIu4AGQkXAAj9ADQjhADi9AGQjvAIiWAAIgiAAg");
	var mask_3_graphics_27 = new cjs.Graphics().p("EgLZBIgIhvgCQkqgKjig2QhngYhagiQivg6h1hbQg1gfglghQimh7hRijIgLgUQhii/AKjkQABgRACgRQARjTBriuQAagoAegmQAjgtAqgoQAViDA5h7QA4h4BUhnQBPhfBhhHQAugiAygcQA6haBPhJQBLhJBlg7QBIgtBTghIAYgJQAOgmARglQAFhVAahPQAVhKAphGQgBgkAHglIgCgBIgDgCQgWgSgUgUQiVhYhriMIgmgdQgggZgegcQiohEiCh8Qg1gGg0gLQi9gqiahsIgEgDQjcgbi4h9QhIgwhAg+QhBg/g1hIQhGg5g9hGIgIgKQg1g9gqhEQg2g6gthCQgUgegTggIgFgKQhzg4hghYIgGgGIg1gSQhzgrhlhFQg6gngzgwQhJhDg7hSQg9hWgthkQgehFgVhJQglh/gIiHQgDgzABgzQAFjAA8izIgDgrQg8iegLi6QgQkVBgkMQANgjAOghQBEiiBliFQAogzAsgvQAqgsAtgmIAJgQQAlg6Atg0IAFgVQAghlA0hdQA1heBHhQQA3g9A/gzQBmhSB7g2IAagLQCDg2CVgUIAMgCQCfgUCsATQBgAKBkAXQB5gwCPgQQAsgGAtgCQB0iDCehRIA1gZQDmhkD5AVIARgHQDNhPDcAMQA9AEA7AMQC7hdDRgEQAtgBAtADQBSAGBNATQAvgPAwgKQBjg7B0gdQAbgGAcgDQCNgXCNAfQBxAYBsA8IADACQBrA8BUBUQAZAZAWAaQAbAQAbAVQAlAcAgAnQAWAaATAeQAoBBAYBTQAWBSgCBeQgBAggDAhQgVCWhCCPQgsBRg6BMIgYAeQgwA1g0AyQg9A+hEAiIgMAHQhMAxhWAUQg5AQhAADIgYABQhDA0hNAjQhiAuhtAPIgcAeQhNBKhbA4QheA3hoAfQg/BdhTBOQgmAjgpAfQg1Aog4AgQg0BEhBA4IgBAHIgFARIgEAKQAZAkAGAdIAEANIAGgHIALgMQAQgQAPgTQAkAjALAdIACABQAgAmAJAfIAHASQAMAbADAaIABAGIAEAgQAyApAOAhIALAMQAgAlAMAdQAdA2ARA5QAMAlAHAnQAIAnADAnQAXBBAMBFIACALIACAAIAJAFIAhASQCaAaCFA0IA6AYIBUAMIAoAHQCvAeCHA3QB+AxBmBIQApAcAlAfQBrBbBMB2QA2ApAuAvQBgAUBXAdQCgA0CIBRQBDAoA7AuQCJBrBjCOIAFAIIAkAYQBMAzBBA6QBwArBnA5QBXAwBQA5QCIBhBpB3QAkApAhAsQBwCZA6CxIAkAqQB2COBECjIANAgQBIC8gDC4IgBARIgCAuQAaA4AUA7QBCBkArBuQAUA3AQA2QAgBxAEBwQAdA1AXA4QAUAwAPAxQAqCEAHCGQAICbgoCcQgHAdgJAcQg6C5h1CNQgUAYgWAXQgOAjgSAhQgrBVhHBPQgpAwg0AsQg3A0hOAwQgmAxg6AzIgDAEQh7CAjZB1QjDB1kFBAQidAmi6AWQieARjEAKIiZAHQonAOmwADIomAEQjnABjAAFQj5AFidAAIgcAAg");
	var mask_3_graphics_28 = new cjs.Graphics().p("EgHYBJXIhzgBQkvgGjugiQhrgPhggVQjDgjh/g8Qg+gVgrgXQjIhYh3iIIgQgRQiUingujoIgFgjQgijXBGjIQARgvAWgtQAZg1AjgyQAZiEBAh9QA+h6BahkQBVheBohEQAwggA2gaQAphlBDhZQBBhXBchMQBDg6BPgtIAXgNQAUgkAYgiQAjhRA3hFQAug/BDg4QAZgdAfgcIAFgBIAHgCQgPgbgNgbQiGh3hOiiIgmgfQgfgcgegfQizgviThxQg1gMg0gSQi9hEiNiCIgDgEQjkgFjIhuQhPgrhGg6QhHg7g8hGQhGg8g+hKIgIgKQg0hBgphGQg8g4gyhBQgXgegUgfIgGgIQhrhMhUhqIgGgHQgbgHgbgJQh4glhshCQg9gmg2guQhPhCg/hRQhDhWgwhmQghhFgYhLQgpiBgLiKQgEg1ABg0QACjEA8i5IAEgsQg/iigLi+QgRkcBmkSQANgjAPgjQBHilBriGQApg1AuguQAtgsAvgmIAIgRQAehAAng7IAHgUQAjhnA7heQA6heBMhOQA7g8BDgwQBthPCBgxIAbgJQCKgwCagNIAMgBQCjgNCvAbQBjAPBlAbQBuhRCMgvQAqgPAtgLQCDh7CrhCQAcgLAdgJQD3hQD6AzIARgKQDEhoDlgLQA/gDA+AGQDMhHDUAaQAvAGAtAKQBSATBLAgQAvgVAvgQQBPhZBshAQAZgOAagMQCGhBCVgIQB4gHB8AhIADABQB6AhBpBCQAfATAdAWQAhgDAkADQAzAEAwAVQAgAOAgAVQBCAsA2BLQAyBJAaBeQAJAgAGAiQAWCXggCmQgWBbgmBeIgQAlQggA/gmBFQgsBTgzA1IgKALQg9BLhOAqQg1AfhAASIgYAGIgBAAQhGAzhSAgQhoAnhwAEIgWAlQg7BdhQBMQhSBNhjA1QhEBchbBMQgpAigrAeQg5Amg8AeQhDA5hOAqIgGAGIgNAMIgKAHQgtAcg3ABIgXgBIgIgKIgMgRQgOgYgMgdQgNAzglAjIgBADQgiAsg3AVIgaAKQglANgnABIgIAAIgKAhQgNBAgyArIgPAPQgsArg6ALQAFBAgIA/QgFAogKAoQgKApgOAmQAIBHgDBHIgBALIABACIAIAGIAdAbQCeAhCEBAQAdAOAcAPIBVAIIAqAEQC4AUCMArQCGAoBuA/QAtAaAoAcQB2BUBXBzQBDAaA5AgQBlAOBaAYQCqArCMBMQBGAmA+AtQCPBpBmCUIAGAJIApARQBYAkBOAtQB1AkBsAzQBeArBUA2QCQBbBuB3QAnAqAhAtQB0CbA4C5QAXARAVATQCTB6BnCXIAUAdQBvCuAoC6IADARQAFAXAEAYQAdA5AVA7QBVBaBCBnQAgAyAcA1QA5BrAgBuQAiA0AbA3QAZAwAUAxQA2CEATCGQAZCggZChIgLA9QgpDDhsCZQgTAbgUAZQgDAogIAmQgSBjgwBhQgdA8gnA4QgsBFhCBAQgNBCgiBHIgBAFQhHCyi8CoQiuCokABbQiZA4jAAgQicAXjPAQIiaAKQoIAYnvAGQkZADkeABQjwAAjCACQjXACiVAAIhQAAg");
	var mask_3_graphics_29 = new cjs.Graphics().p("EAKnBKoQj2gCjGABInHAAIh2gBQk0gDj5gNQhxgGhlgIQjYgMiIgfQhIgKgvgNQjrgzidhvIgWgOQjGiOhljsQgHgRgGgSQhVjdAhjjQAIg1AOgzQAQg+Aag7QAeiGBGh/QBFh8BfhhQBahcBwhBQAzgeA4gYQAbhyA3hnQA1hmBUhdQA+hIBKg4IAWgQQAbgjAfgfQBBhNBTg7QBIg1BdgoQAxgXA6gSIAKgCIARgCQgIgigEgjQh4iVgyi6IglghQgfgegdghQi+gcilhkQg2gUg0gZQi8heh/iZIgDgEQjtARjXhfQhWgmhMg1QhNg3hDhFQhGg+g+hOIgIgLQg0hEgohJQhBg1g3hAQgagdgXgfIgGgJQhkhehHh7IgFgJQgcgGgdgHQh8gghyg/QhAgkg6gtQhThAhEhRQhIhWg1hmQgjhGgahNQguiEgNiNQgFg1AAg2QgBjKA8i9IAKgtQhCilgLjDQgRkjBqkZQAOgkAQgjQBLioBwiIQAsg1AwguQAugsAygmIAFgTQAYhGAihBIAHgVQAphnA/heQBAhfBRhMQA/g7BIgvQBzhLCIgrIAcgJQCQgqCfgFIAMgBQCogECzAjQBkAUBnAgQBihzCIhOQArgZAsgUQCShyC4g0QAdgIAfgHQEKg7D6BQIAQgMQC8iBDvgjQBBgJA/AAQDdgxDYA5QAwAMAtARQBSAfBKAtQAugbAvgVQA7h4BkhjQAXgWAYgUQB+hrCegvQCAgmCLAFIADABQCJAFB+AwQAkAOAjARQAogWAugOQA/gTBBACQAsABAsAMQBbAYBUBCQBOBAA3BeQASAgAQAjQA/CYAEC9QgBBlgRBvIgIAsQgRBMgWBWQgbBqgkBGIgHAPQguBlhHBAQgxAvhAAgIgYALQhKAzhXAbQhuAjh0gJIgPAsQgpBvhFBiQhHBihdBMQhKBbhiBKQgrAhguAcQg9AkhAAcQhSAuhbAcIgJAEIgWAIIgQAEQhzAVh1gdQgYgFgYgIIgXgNQgSgLgRgMQgtgggmgnQg/BDhWArIgEACQhlA0h0AJQgfADgegBQhVAAhSgYIgQgFIgZAhQhLBZhzA0QgUAKgVAIQh4Awh+gHQgVBKgiBEQgWAsgbAqQgcAqgfAmQgGBMgTBKIgDAMIAAABIAHAJIAZAiQChAqCDBMIA4AiIBZADIAsACQDCAJCPAgQCOAfB2A3QAwAWAsAaQCABMBiBwQBPALBHARQBpAJBdASQCyAjCSBHQBKAkBAAtQCVBnBqCZIAGAJIAuAKQBjAVBbAfQB8AdBxAtQBjAnBYAyQCZBYBzB4QAoAqAjAsQB3CcA2DCIA1AeQCvBmCJCKIAbAbQCYChBSC7IAHARQALAYAJAZQAfA5AZA8QBnBQBZBfQArAvAoAxQBTBmA8BsQAmA0AgA2QAdAvAYAwQBDCEAhCJQAoCjgLCnQgCAggDAfQgZDOhiCnQgRAcgTAcQAIAsACArQAIBxgaB0QgPBIgcBFQggBUg2BQQAMBUgKBaIgBAGQgSDmifDZQiZDbj6B4QiXBIjGAqQiZAfjaAUQhMAIhQAGQnoAiouAIQj6AEkLAAIhDAAg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EgWABNGQkfgRjMhfQj4h0icjxQidjxgFkSQgFkRCSj3QCTj3D0h+QA1gbA7gWQAWj6CWjdQCnj1EDhvQClhIDhgXIAagDQAAgqAEgqQhqizgVjRQgzgvgtg4QkDgJjmiTQi/h5hyiyQj1AnjmhRQkchji8kCQg0hIgnhLQhGgyg9g/QiHiJhNi6IgEgKQiggYiThIQiphVh5iJQiCiPhHjCQhEi5gEjMQgEjnBMjYQhEipgMjHQgRkqBwkfQBUjYCOimQBbhpBqhLIAEgVQAsjHB7ipQB8ipCwhnQCEhOCggmQCXgkCkABQERAEEtBpQBWiUCFhuQDYiyEigmQEdgmD6BtQC4imEDg9QE2hIEZBuQCIA2BxBaQAtggAugbQAniWBciHQCDi/DGhmQCHhFCagWQCZgWCVAdQAqAJAqAMQAtgoA4ggQCBhICMAEQB1AEBxA6QBrA3BTBdQCWCsAwEGQAUBvADCBQACBrgKCGQgLCOgXBeQggB+g/BXQg1BJhRA0QhNAyhbAXQh0Adh4gUQgUCdhGCOQhwDljbCXQjbCWj9AXQj+AYjzhtQhsgxhahEQhwBUiGAwQirA/i4gDQi4gCiohDIgZgKQiWCKjOBGQjnBPjjgeQhLCLhzBvQgtArgwAlQgWBZgnBTIAGAMIAUAqQClAyCCBXQAcATAbAVIBcgDQDogDCkAXQDWAeCiBQQCLBFBtBtQDTgJCoAXQEbAnDICDQCbBmBsCeIAHAKQEYAKDqBNQEiBfC8C9QC5C7BEEFQDwBXDFCQQDfCjCKDXQA0BSAnBWQC2BqCfCNQChCQBzCjQB8CwA/C8QBDDIgIDPQgIDXhYC0QgPAggSAdQBCCtgFC5QgFC9hMCtQAlBlAOBuQAkEciDEOQiEEOj0CUQiVBajMAzQiWAmjlAaQq7BSxxgHQpmgGkzgBQoSgBmFARQjxALiSAAQhOAAgzgDg");
	var mask_3_graphics_31 = new cjs.Graphics().p("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");
	var mask_3_graphics_32 = new cjs.Graphics().p("EgRnBQgQg/gBg7gDQjmgLidgtQg2gOgtgSQjXhKiYiTIgdgcQizi2hCj3IgBgFQhBj8BNj6IAIgYQBPjqCzioQAXgWAYgTQAvgnA1ghQA3iXBph8QAkgrAqgnIAXg3QBWjCCbiNQA4gzA/gpQCWhlDKgvIAWgFIAagFQAQggAUgeQAJhOAlhMIAHgPQgGgngDgpQgKgegIggQgsg3gjg+QhDgng5g0Qg7gcg3glQhlgXhfgtQiDg/hshfQg5gzgvg5Qh4gYhog2Qh0ABhwgbQhxgbhog1QiohWiAiXQg6hDguhMIgMgLQg6g4gwg/IgDgEQg+g4g1hBQhFhXgzhoIgEgJQg2gfgygmIgHgGQhagUhVglQg7gag2ggQhthBhWhYQglglgggoQhchzg6iRQgPglgMgmQgyibgHinIgBg2QABjSBEjEIgCgXQg/ijgLi/IAAgBQgRkfBokVIANgjQBMi8B4iVQAVgaAWgYQBChKBKg5IAKgQQASgYASgXIAFgVQAniVBViEQAdguAigqQBahxB0hQQA3gmA9gfQBKgmBRgbQBJgXBNgPQBJgNBMgFQBWgFBZAFQC5ALDFA5QBRgYBagLQAigvAogqQBOhWBhhAQB+hUCUgpQCAglCGgDQCCgDB6AdQCHghCNALQBKgyBUglQCYhCCmgQQB6gLB3ATQCJAVB7A7QAqgEAqAAIALABIAHgCIAPAGIAfAJQAMglARglIAAgKIgNgbQghhJgChcIgBgRQAAhlAlhpQATg0AggxQAegwAogrQAwgzA/gpQAqgbAvgVQBQglBYgOQApgGAqgBQBmgDBoAfIAaAIQA/iXCShdQCVhgCnAIQCoAHCLBuQCLBvAtChQAIAcALA7IANA+QBGA5A8BLQBaBzA6CRQBhD2ADFVQACBhgJBFQgLBZgfBGQgdBCg5BFQglAthKBKQhQBRgxApQgpAkgpAaQgpAyg1ApQhaBFhqAdQhhAahmgLIgVgCQgVASgXAQQgdAVgfATQiABLiXAbQgUAEgUACQglAQgoALQhJAThKAFIgZAbQhSBXhnBAQhlA+hyAmQg6ATg9ALQixAiiwgfIgGgBIgZgFQizBXjPAHIgdABQhsAAhkgVQhmAihsAKIgfAdQhgBah2A9QgcAOgdAMIg2AVQg1Ayg9AoIgBAFIgHATIAIACIAEABQAkBBANBEQAEASACASIAKAIIAHAEQA2AYAQACQBABFAfBKQANAZAKAZIAFAMQAlA7AZBBIAIAJIAcAiQAZAPAYAQQCCAQBwAgQAfAJAeAKIBHAEIASABQDTAQChA4QA9AUA3AaQB1A2BeBOQAwAnArAuIAIAJQBKAUBEAcQDFAJCmApIALACQD9BAC0CIQAnAdAjAhQBgBZBFBvIAFAJQBeBFBJBWQB2AhBsAvQB8A2BrBIQB4BPBgBjQBbBeBCBuQAzBUAkBdIAdAgQCsBWCXB3QAlAcAjAeQCBBxBiCAQA2BGAqBJQAwBRAjBUIAkAyQBcCEA5CSQAOAlAMAmQAsCOAHCHQACAwgCAwQgCAfgDAfQAsBlAXBpQARBMAEBPQAIB4gVB3QgMBFgWBCQAOBrgKBsIgEAeQgEAggGAgQAcCrgjCuQgOBBgWBAQgmBqg5BdQgXBZgpBTQgeA9gpA4QhcCFifBrIgEADQh+BhjBBDQhJAchRAXQihAujEAbQiiAWjOAOQmrAdokAFQmsAClggCIiwgBQmogCkjAFIjhAFQkrAJi2AAIg0gBg");
	var mask_3_graphics_33 = new cjs.Graphics().p("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");
	var mask_3_graphics_34 = new cjs.Graphics().p("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");
	var mask_3_graphics_35 = new cjs.Graphics().p("EgWABSCQkfgRjMhfQj4h0icjxQidjxgFkSQgFkRCSj3QCTj3D0h+QA1gbA7gWQAWj7CWjcQCnj1EDhvQClhIDhgXIAagDQAAgqAEgqQhqizgVjRQgzgwgtg3QkDgKjmiSQi/h5hyizQj1AojmhRQkchji8kCQg0hIgnhLQhGgyg9g/QiHiJhNi6IgEgKQiggYiThJQiphVh5iJQiCiOhHjCQhEi5gEjMQgEjoBMjYQhEiogMjHQgRkqBwkfQBUjYCOimQBbhqBqhKIAEgVQAsjHB7ipQB8ipCwhnQCEhOCggmQCXgkCkABQERAEEtBoQBWiTCFhuQDYiyEigmQEdgnD6BtQC4ilEDg9QE2hIEZBuQCIA2BxBaQAtggAugbIADgKQgsgTgrgbQiLhWhGiLQgaACgagBQidgEh+hPQh+hOhJiKQhJiJAFiWQAFiVBTiEQBTiECDhGQCEhFCcAGQCcAHB+BQQB9BRBICKIACAEQBQgEBTATQBrAYBVA4QA3iYB8hdQCLhpC7AAQC6ABCMBqQBJA4BABbQAxBFA2BqIAdA8IAcAOQAzAcA6ApQAmAaBCAyQBhBKAvApQBOBCAyBAQBfB5AnCZQARBJAGBcQAEA7AABrQAACFgIBMQgNBzgkBVQgdBFg7BSQgjAwhIBcQg7BOhzCgQhpCEhqA/QiIBQimgJIgJAAQhuDGjFCIQjbCWj9AXQj+AYjzhtQhsgxhahFQhwBUiGAxQirA/i4gDQi4gCiohDIgZgKQiWCKjOBGQjnBPjjgeQhLCLhzBvQgtArgwAkQgWBZgnBUIAGAMIAUApQClAzCCBXQAcATAbAVIBcgDQDogDCkAXQDWAeCiBQQCLBFBtBtQDTgJCoAXQEbAnDICDQCbBmBsCeIAHAJQEYAKDqBOQEiBfC8C8QC5C7BEEGQDwBXDFCQQDfCjCKDXQA0BRAnBXQC2BpCfCOQChCQBzCjQB8CwA/C8QBDDIgIDPQgIDXhYC0QgPAfgSAeQBCCtgFC5QgFC9hMCsQAlBmAOBuQAkEciDEOQiEEOj0CUQiVBajMAzQiWAmjlAaQq7BSxxgHQpmgGkzgBQoSgBmFARQjxALiSAAQhOAAgzgDg");
	var mask_3_graphics_36 = new cjs.Graphics().p("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");
	var mask_3_graphics_37 = new cjs.Graphics().p("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");
	var mask_3_graphics_38 = new cjs.Graphics().p("EgM8BVZQjdgDi2gQQhCgGg7gJQjggah6g5QhYgehNgqQiBhChehZQhghYhBhyQg4hhghhwQgtiWAKiZQAFhcAXhaQAuiwBwiRQAlgwAsguIAEgJQBhj1DKiiIAGgEQAtgkAygeQBHjWCmijIANgMQCLiHC+hKIAYgKQAYgeAbgdIAJgNQA/hsB+hYIAOgLQgLgjgIglQgTgbgSgdQhshehFh/Qg3glgxguQgpgJgngMQjFg8ifiJIgagYQiug5iFhxQhAABg/gHQimgTiWhKQiFhChshqQhBg/g2hJQgigighgkQgcghgagjQgXgggVghQg/g3g1hBQgzg+gphHIgFgKQhIg4g9hIIgFgHQhAgPg+gWQhVgghOgtQhag1hLhFQg2gygvg6QhUhng3h/QgWgxgSg1QgwiRgJieQgCglgBglQABjPBBjBIADgeQhBikgLjBQgRkgBokVIAUgzQBLizB0iPQAegmAhgiQA5g8BAgxIAIgRQAVgsAagoIAGgVQAniABLh0QArhDA1g7QBPhXBfhCQBRg3BcgoQAwgVA0gQQBqgiBygOQAngFAogCQB8gHCDAPQCTARCbAtQBohJCDgqIAOgPQB0h7CWhMQBXgsBhgaQC9gzC/AVQBDAIBBARQC6hcDWgFIAqgTQDhhdDtASQAuAEAtAIQCHAZB3A7QAvgRAvgMIAGgFQgJgHgJgKIgHgLQgUgeAEgqIgQAMIgCABQgTgPgQgTIgEgFQgygQgvgZQgWgMgVgOQhPg0g5hLIgdAJQiWAviAgPQiJgPh1hWQh1hVg6h/QgdhAgLhFQgZgZgVgeQg7hSgahlQgZhlAMhlQAMhkAxhdQAwhbBMhEQBZhPBsgkQA2gSBAgKQA6guBDgdQBlgqCNgKQBCgEC7ADIAKABQArgJAuABQAyAAAvALIEzAGQCJAGB2ARQAqgQAtgGQA7gHA8AMIAUAEQBHARA8AqQAzAjAnA0QAcALAbAOQBSAuAzBCIATAbQAjA3ANA8IAEAUIAKAfQAyARAvAcQBEApBZBWQB9B6AWASIALAKQA5ALA8AXQBPAfBvA9QBkA4BJAyQBaA+BEBAQCjCcAyC2QATBDAGBUQAEA8gBBdQAABhgEA6QgHBUgTBDQgcBkg+BaQg8BXhVBEQiXB7jjA/QjQA5iigjQhVAshvAfQhSAXhKAKIgYAUQgNALgPAJQhMB3hxBbQgeAZghAWIgmAZQgxBchIBKQgqAtgyAnQhLA6hXAnIgUAIQhRBThkBAQhXA4hfAlQiIA1iPAMQhmAIhmgNQhwAlh5ABIgmABQg5gDg1gIIgZAAQguA4g3AwIgEAIIgUAeIgNATQgfAygvAiIgTANIgFADQgNgBgMgEQgZgLgbgZIgFgFQgFAkgPAfQgOAtggAmQgUAdgZAXQglAkguAXIgCArQAKBAgMA5QgDAbgHAZIAHATQAQAwAGAwIAIAIIAdAeQCfAvB+BSIAXAQIAgAWIBSAUQB+AfBlAvIAJAEQA6AEA2AGQDLAZCjBDQAdAMAcANQBqAzBZBHQC9AbCUA9IACABQDtBbCUCrQAQARAOATQCGBMBqBvIAHAHQBjAWBcAfQCRAwB8BGQBtA8BbBMQBNBAA+BKQAmAcAjAdQCFByBeCRQAoA/AhBEQB7BHBqBVQBKA8BBBCQBVBYBDBgQBKBrAxB2QAhBOAVBSIADAKQBpCPBACYIAFAPQALAcAJAcQBcB8A4CHQAPAiAMAjQA1CUAKCWQADAiAAAiQAiBvAJBzQAEAwgBAwQgCDMhQC0QgOAfgPAdIACAoQAECSgpCMQgoCHhQB0QgRAZgTAYQgLBPggBPQgRAvgYAtQg+CLiTCBIgNAMQiuCtkHBgQicA6jDAhQidAZjTARQkYAWlRAKQoIAMnWAAIiZgBQn4gCk8AFIhIABQkBAEi2AAIgoAAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("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");
	var mask_3_graphics_40 = new cjs.Graphics().p("EgWABaAQkfgQjMhfQj4h1icjwQidjygFkRQgFkSCSj2QCTj3D0h+QA1gcA7gWQAWj6CWjdQCnj0EDhvQClhIDhgYIAagCQAAgqAEgrQhqizgVjQQgzgwgtg4QkDgJjmiSQi/h5hyizQj1AojmhRQkchki8kCQg0hHgnhMQhGgyg9g+QiHiKhNi6IgEgKQiggXiThKQiphVh5iIQiCiQhHjCQhEi5gEjKQgEjoBMjYQhEiogMjIQgRkqBwkeQBUjYCOimQBbhqBqhLIAEgUQAsjHB7ipQB8iqCwhmQCEhOCggnQCXgkCkACQERADEtBpQBWiUCFhtQDYiyEignQEdgmD6BtQC4imEDg8QE2hJEZBvQCIA2BxBaQAtghAugbIADgKQgsgSgrgbQiLhXhGiKQgaABgaAAQidgFh+hOQglgXgggcQh/gNiSg+QjQhZhriDQhDhQgnhpQgkhjgIhuQgOjEBNjhQA/i1BniGQBziXCYhIQBegtB/gWQBRgOCYgMIIMgrQASgNAUgLQBHgpBUgJQAzgFAxAHIADgEQAyhEBIgoQBHgpBUgJQBUgJBPAZQBiAfBJBQQBKBQAXBlQAHAfACAgQAjAKAhANQCAAzBaBxQBaBxAXCJQAWCJgxCIQgxCHhpBbQApA5AaA/QAyAgA6AqQCrB7BtB3QCHCUA4ChQAdBWAMBnQAJBWgBBtQgCBegKBFQgNBXgdBFQg9CNiQBwQhCCbh9B/IgkAiQgFDYhdC/QhwDkjbCXQjbCXj9AXQj+AXjzhtQhsgxhahEQhwBUiGAxQirA+i4gCQi4gDiohCIgZgKQiWCJjOBHQjnBPjjgfQhLCMhzBuQgtArgwAlQgWBZgnBUIAGALIAUAqQClAyCCBYQAcATAbAUIBcgCQDogECkAXQDWAeCiBRQCLBFBtBsQDTgJCoAXQEbAnDICEQCbBkBsCeIAHAKQEYAKDqBNQEiBfC8C+QC5C6BEEHQDwBXDFCQQDfCiCKDYQA0BRAnBWQC2BqCfCOQChCPBzCjQB8CwA/C9QBDDIgIDOQgIDYhYC0QgPAfgSAdQBCCtgFC6QgFC8hMCtQAlBmAOBuQAkEbiDEPQiEEOj0CUQiVBajMAzQiWAmjlAaQq7BRxxgGQpmgGkzgBQoSgBmFARQjxAKiSAAQhOAAgzgDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_3_graphics_6,x:484.3,y:1454.2}).wait(1).to({graphics:mask_3_graphics_7,x:484.6,y:1421.7}).wait(1).to({graphics:mask_3_graphics_8,x:485.6,y:1387.3}).wait(1).to({graphics:mask_3_graphics_9,x:487,y:1351.5}).wait(1).to({graphics:mask_3_graphics_10,x:488.9,y:1315.7}).wait(1).to({graphics:mask_3_graphics_11,x:486.8,y:1297.9}).wait(1).to({graphics:mask_3_graphics_12,x:488.9,y:1278.4}).wait(1).to({graphics:mask_3_graphics_13,x:476.9,y:1243.9}).wait(1).to({graphics:mask_3_graphics_14,x:462.5,y:1239.1}).wait(1).to({graphics:mask_3_graphics_15,x:447.8,y:1232.3}).wait(1).to({graphics:mask_3_graphics_16,x:434.8,y:1224.1}).wait(1).to({graphics:mask_3_graphics_17,x:422.7,y:1214.8}).wait(1).to({graphics:mask_3_graphics_18,x:396.9,y:1186.4}).wait(1).to({graphics:mask_3_graphics_19,x:400.3,y:1156.2}).wait(1).to({graphics:mask_3_graphics_20,x:407.9,y:1126.7}).wait(1).to({graphics:mask_3_graphics_21,x:402.1,y:1126.9}).wait(1).to({graphics:mask_3_graphics_22,x:401.9,y:1124.6}).wait(1).to({graphics:mask_3_graphics_23,x:402.9,y:1119.7}).wait(1).to({graphics:mask_3_graphics_24,x:405,y:1113.6}).wait(1).to({graphics:mask_3_graphics_25,x:407.9,y:1099.2}).wait(1).to({graphics:mask_3_graphics_26,x:403.3,y:1099.3}).wait(1).to({graphics:mask_3_graphics_27,x:403.7,y:1096.4}).wait(1).to({graphics:mask_3_graphics_28,x:404.7,y:1090.3}).wait(1).to({graphics:mask_3_graphics_29,x:406.1,y:1081.9}).wait(1).to({graphics:mask_3_graphics_30,x:407.9,y:1067.8}).wait(1).to({graphics:mask_3_graphics_31,x:405.9,y:1057.6}).wait(1).to({graphics:mask_3_graphics_32,x:405.6,y:1045.4}).wait(1).to({graphics:mask_3_graphics_33,x:404.8,y:1044.4}).wait(1).to({graphics:mask_3_graphics_34,x:406.4,y:1040.8}).wait(1).to({graphics:mask_3_graphics_35,x:407.9,y:1036.2}).wait(1).to({graphics:mask_3_graphics_36,x:406.1,y:1029.1}).wait(1).to({graphics:mask_3_graphics_37,x:405.5,y:1019.3}).wait(1).to({graphics:mask_3_graphics_38,x:406.1,y:1013.5}).wait(1).to({graphics:mask_3_graphics_39,x:407,y:999.2}).wait(1).to({graphics:mask_3_graphics_40,x:407.9,y:985.1}).wait(22));

	// Layer 1
	this.instance_7 = new lib.Symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(376.5,890.1,0.983,0.983,0,0,0,372.9,450.2);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).wait(56));

	// grass
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B8D759").s().p("EjawBl9MAAAiguQSep1X2n9QX9n/cAloQcflvfLi+UAgFgDFAhWAAAUAhHAAAAf1ADBQe7C8cVFpQb1FjX4H4QXxH1ShJtMAAAChWg");
	this.shape.setTransform(1020.5,1077.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(62));

	// mountain2
	this.instance_8 = new lib.mountainai("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(219,622.3,2.682,2.682,-9.4,0,0,119.6,40.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(38).to({_off:false},0).to({y:438.3,alpha:1},4).to({y:462.3},2).wait(18));

	// mountain1
	this.instance_9 = new lib.mountainai("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(645.4,510.6,1.728,1.728,-1.7,0,0,119.7,40.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(33).to({_off:false},0).to({y:392.6,alpha:1},4).to({y:408.6},2).wait(23));

	// logo2
	this.instance_10 = new lib.logo2ai("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(513.6,315.4,2.095,2.095,-4.4,0,0,85.5,73.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(41).to({_off:false},0).to({y:283.4,alpha:1},4).to({y:299.4},2).wait(15));

	// Layer 21 copy
	this.instance_11 = new lib.Symbol7();
	this.instance_11.parent = this;
	this.instance_11.setTransform(60.5,330.5,1,1,0,0,180,431.5,170.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:140.5,alpha:0.43},48).wait(14));

	// Layer 21
	this.instance_12 = new lib.Symbol7();
	this.instance_12.parent = this;
	this.instance_12.setTransform(292.5,230.5,1,1,0,0,0,431.5,170.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(17).to({_off:false},0).to({x:400.5,alpha:0.57},31).wait(14));

	// cloud
	this.instance_13 = new lib.cloudbgai("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(371.2,-235.5,12.745,13.643,0,0,0,58.9,70.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-533.1,2800.2,2930.5);
// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/cloudclean2.png", id:"cloudclean2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;