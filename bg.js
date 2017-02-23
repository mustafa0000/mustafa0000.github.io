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
// helper functions:

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
	this.shape.graphics.f("#F6A93F").s().p("AhWgJIDJgVIgbAnIjKAWg");
	this.shape.setTransform(77.7,88.6,0.504,0.504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6A93F").s().p("AhWgJIDJgVIgbAnIjKAWg");
	this.shape_1.setTransform(155.9,93.3,0.504,0.504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6A93F").s().p("AhbBfQgNgIgHgPQgHgPAAgRQgCgRADgRQACgOAFgQQAFgPAEgFQAAAAAAABQAAAAAAAAQABAAAAgBQABAAABgBIAPgLQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQgEAJgFAVQgDARABAPQACAPAHAKQAIALARgBQASAAAKgKQAKgLAFgOQAGgOACgNQADgOAFgLQAAABAAAAQAAAAAAAAQABAAAAAAQABAAABgBIAMgKQAAAAABAAQAAgBABAAQAAAAABAAQAAABAAAAQgFASAEARQAEAQAIAIQAJAKAOACQAOACAQgLQAEgFAAgIQgBgMgCgFQgCgHgFgLQgFgJgEgGIAegrQAIANADALIAIAYQADAUgBAYQgDAVgHASQgIARgNAMQgOALgTAAQgRAAgHgGQgIgEgKgKIgKAOQgGAKgHAHQgJAIgLAFQgMAGgOABIgHABQgSAAgLgHg");
	this.shape_2.setTransform(53.5,60.4,0.33,0.33);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6A93F").s().p("AhbBfQgNgIgHgPQgHgPAAgRQgCgRADgRQACgOAFgQQAFgPAEgFQAAAAAAABQAAAAAAAAQABAAAAgBQABAAABgBIAPgLQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQgEAJgFAVQgDARABAPQACAPAHAKQAIALARgBQASAAAKgKQAKgLAFgOQAGgOACgNQADgOAFgLQAAABAAAAQAAAAAAAAQABAAAAAAQABAAABgBIAMgKQAAAAABAAQAAgBABAAQAAAAABAAQAAABAAAAQgFASAEARQAEAQAIAIQAJAKAOACQAOACAQgLQAEgFAAgIQgBgMgCgFQgCgHgFgLQgFgJgEgGIAegrQAIANADALIAIAYQADAUgBAYQgDAVgHASQgIARgNAMQgOALgTAAQgRAAgHgGQgIgEgKgKIgKAOQgGAKgHAHQgJAIgLAFQgMAGgOABIgHABQgSAAgLgHg");
	this.shape_3.setTransform(140.3,54.6,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7498CF").s().p("AgEAAQACgPAKg4IgLCPQgGgfAFgpg");
	this.shape_4.setTransform(67.2,97.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7498CF").s().p("AgChRQAMBYgMBLg");
	this.shape_5.setTransform(75.7,126.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7498CF").s().p("AgEhKIAJABIAABIQgCApgHAjg");
	this.shape_6.setTransform(76,96.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7498CF").s().p("AgfBmIA3jNIAIACIg2DNg");
	this.shape_7.setTransform(50.7,100.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7498CF").s().p("AgDAAQgHhEACg1QADApAJBQQAHBJgCAxIgMh6g");
	this.shape_8.setTransform(85.2,133.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7498CF").s().p("AgEAAQgGgyAFglQASBjgHBMQgHg7gDgdg");
	this.shape_9.setTransform(82.1,98.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7498CF").s().p("AAwiFQgnCTg4B4QAoihA3hqg");
	this.shape_10.setTransform(40.8,103.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7498CF").s().p("AAXilIANACQgRBpgNA8QgRBcgXBJg");
	this.shape_11.setTransform(57.5,105.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7498CF").s().p("ABmiwQhQCvh7CyQBkjFBnicg");
	this.shape_12.setTransform(13.9,115.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7498CF").s().p("ABrjoQhmD7hvDWQBYjsB9jlg");
	this.shape_13.setTransform(24.2,118.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7498CF").s().p("AgHhHQAKA4ACAPQAFApgGAfg");
	this.shape_14.setTransform(103.9,97.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7498CF").s().p("AADhRIAACjQgMhLAMhYg");
	this.shape_15.setTransform(95.4,126.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7498CF").s().p("AgEgBIAAhIIAJgBIAACVQgHgjgCgpg");
	this.shape_16.setTransform(95.1,96.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7498CF").s().p("AgfhlIAIgCIA3DNIgJACg");
	this.shape_17.setTransform(120.4,100.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7498CF").s().p("AAGhXQAFAkgGAzIgLBYQgGhNAShig");
	this.shape_18.setTransform(89,98.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7498CF").s().p("AgviFQA4BrAnCgQg3h4goiTg");
	this.shape_19.setTransform(130.2,103.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7498CF").s().p("AgFACQgMg5gShsIANgCIA6FMQgXhJgShcg");
	this.shape_20.setTransform(113.6,105.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7498CF").s().p("AhliwQBoCdBjDEQh7izhQiug");
	this.shape_21.setTransform(157.1,115.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7498CF").s().p("AhqjoQB9DmBYDrQhwjYhlj5g");
	this.shape_22.setTransform(146.8,118.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7498CF").s().p("Ag2ANQANgUAPgTIAYANQAEgIAMgNQATAJAWAPQgOAVgOAPIgYgLIgPAUQgXgLgTgLg");
	this.shape_23.setTransform(23.1,90.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7498CF").s().p("Ag6AKQAPgUARgRQAMAGANAIQAJgMAKgIQAYANARANQgOASgSARQgRgJgHgFIgSAUQgXgLgUgNg");
	this.shape_24.setTransform(38,62.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7498CF").s().p("AAAAOIgTARQgWgSgOgOQAQgPAVgPIATASQALgJALgIQARAQAPASQgQAPgTANg");
	this.shape_25.setTransform(104.2,84.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7498CF").s().p("AAAAPIgXAOQgSgQgRgSQASgPAWgNQAIAHALANIAZgPQASAQAPAUQgRAOgXAMg");
	this.shape_26.setTransform(125.6,61.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7498CF").s().p("AgBAOIgZAMQgTgTgNgSQAVgOAWgKIASAWIAZgMQAQAQAPAXQgVAMgVAKIgSgWg");
	this.shape_27.setTransform(159.6,64.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F6A93F").s().p("AAABhQAAgIgEgJQgKgSgYgHIgUgFQgYgEgLgPQgLgPAFgWIBAAJQAmAJAUARQAFgDABgLQgigDgWgMQgfgSAHgeQAHgbAfgOQAdgOAcAJQAcAIAQAWQAQAWgCAdQgEAvgYAgQgYAggiAAIgQgBgAALgzQgLAAABAJQAAAKASAFIANAEQAAgHgDgHQgGgOgMAAIAAAAg");
	this.shape_28.setTransform(154.7,77.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F6A93F").s().p("AAaBGQgqgXAFgdIgFAKQgFAMAAAJIg1gIQgTgCgLgRQgJgPACgSIArAFQAKgbARgSQATgWAXgFQAqgKAkAiQAjAhgCArQgPAWgPAZQgHAMgPAAQgOAAgUgLgAANgMIgHAHIAOAKQAQAJAQgDQgDgQgJgJIgKgGQgIABgJAHg");
	this.shape_29.setTransform(136.7,75.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F6A93F").s().p("AgBBDIgcgCQgUgCgLgQQgLgPABgUIBAAGQgWgrAYgbQAZgbAsAWQAJAIgFAEQgcAfASA6QgKAOgRAGQgLAEgMAAIgKgBg");
	this.shape_30.setTransform(122.6,72.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F6A93F").s().p("AgnBbQglgFgYgWQgagYABgjQABgeAWgUQAVgTAfAAQgOAjAKAdQAMAhAlAIQgagUgHgcQgGgfATgaQAWghArAGQAdAEAqAWQgGAEgJANQgNAUAKAXQAJAXAYADIgDAxQgOgBgLgDQgdgJgUgZQgSgYgDgfQgOAUAKAZQAGAQATAZQgQASgZAHQgPAEgRAAIgPgBg");
	this.shape_31.setTransform(107.4,71.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F6A93F").s().p("AAZBrQgNgOgYgBQgxgEgWggIgEAAQgTACgNgPQgMgNgCgTIAogDQAEgVATgOQASgOAXgBQAagBATAPQAVAPABAYQAAARgKALQgMALgVABIgRABQANAJAWgDQANgBALgLQAOgOAAgVQgBgfgbgSQgXgRghADQgdACgOgWQgPgWAQgZQAPAPAbAGQAQACAeAAQAwgBAjAdQAmAfAAAvQAAAqgeAfQgcAdgrAIQgBgGgHgHgAgnAEIAQgBQAIAAAAgHQgBgHgIAAQgLABgEAOg");
	this.shape_32.setTransform(73.7,72.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F6A93F").s().p("AApBIQgtgLgDgdIgDALQgCAMADAJIg1AGQgTADgOgNQgNgNgDgTIAqgGQAJhBApgWQAlgUArAYQAqAXAJApIgRA2QgFASgZAAQgKAAgOgDgAAIgEIgFAIIAQAGQATAFAOgHQgHgPgMgGIgKgDQgIADgHAJg");
	this.shape_33.setTransform(52.3,72.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F6A93F").s().p("AgwA/QgOgLgEgUIBAgLQghgjARghQASghAvAKQALAGgEAFQgTAlAgAzQgGAQgPALQgOAJgSADIgbAEIgIABQgPAAgMgKg");
	this.shape_34.setTransform(37.8,73.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F6A93F").s().p("AhXBYQgggQgIgjQgIgeARgYQAQgYAegIQgFAmASAZQAUAeAmgCQgegNgOgaQgPgbAMgfQAOglArgGQAdgEAvALIgDAFIgIAPQgHAXAPAUQAPATAYgCIAJAvQgOADgLgBQgfAAgZgUQgYgSgLgdQgIAXAQAVQAKAOAZATQgLAVgXAOQgUAMgZAEIgRABQgaAAgWgMg");
	this.shape_35.setTransform(23.6,77.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7498CF").s().p("AgzAWQAxgZAtgDQAUgCAYgXQAmgkAJgGQgpBDgxAmQgIAGgBgBQgbgSggAPQgyAYgFAAQgLABgQAGIgbAJQBDgrAPgJg");
	this.shape_36.setTransform(89.1,51.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7498CF").s().p("AktCYQBBgiAWgKQAxgWAqgFQBMgKAxg4QAjgmAlgNQAogNAwASQAZAKAXgJQAUgJAQgZIA3hZQgLBRggAiQgeAihKAMQgzAJgVAGQgoALgcAUQgMAJgRAcQgRAagMAFQgMAFgdgIQgggIgPACQgzAHhKAYIgUAJQgGABgFAAQgGAAgHgCg");
	this.shape_37.setTransform(72.1,45.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F6A93F").s().p("AhCCAIAAgBQgDgOAGgWIALghQALgnACgSQABgGgDgFQgEgHgJAAQgHABgDgLQgEgKAEgHIALgfQAIgQANgJIABgCIABgFQAFgTARAJIAHADQACAAADgHQAEgIAKABQAKABAEAJQAEAHAHAGQgIgCgHALQgHALgJgCQAGAGADAPQALAUAVAAIAKAAQAFACAAAHQgBALgPgDIgWgDQgMgDgHgJQgJAQABAHQAAAIAMALIAGAEQATANgHAYQgBAFgEAlQgRAKgIACQAEgJgBgVQgBgVAEgKQgHgPgKgCQgJgCgCAPIgEAWQgCAKgHAOIgJAUQgDAHABAGQACAEAFAGIADAAQgLAHgFACQgGADgFAAIgGgBg");
	this.shape_38.setTransform(51,27.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7498CF").s().p("AsxEwQAngXBohJQBYg/A6gcQBxg2AFgKQAHADAJgEQAGgCAKgHQAIgBAMgIQANgHADgHIABgCQAIgBARgLIAAABQAMgHBegzQBhg1AlgYQBDgsA6gSQAtgNAYAKQAUAIAUgGQAKgDAbgOQAOgHBHgtQAzggAngLQANgEAGABQAIABAJAJIGYHhIAEAJQgIABgGgFIgLgJQhvhWgngeQhWg/hIgqQgTgMgIABQgMACABAdIgugjQgPAYgKApQgNA8gEAIIgFg4QgEghgBgXQAAgfgWgTQgLgJgjgRQgIgEgIAOQgJASgKABQAAgaALghIAXg/QgfATgcAYQgSAPgeAdQgJAJgrAJQgrAJgNgEQgIgCgIAGQgIAHgGADQjLB0giASQiJBKhtAtQgNAJgIACQgMADgEgYQgBgHgKAEIgOAIQg9AhhQAlIiPA/IgKAFIgEAAQgEAAgFgDg");
	this.shape_39.setTransform(85.5,34.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 3
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgbAyQgUgHgWgMQgIgFgCgIQgCgIAGgJQANgRAQgSQAPgQAVAIIADACIACgDQAOgPAVAIQAWAKASANQAKAHAAAHQABAHgGAHQgLAQgRATQgPAOgUgHIgDgCIgCADQgJAKgLAAQgHAAgHgEg");
	this.shape_40.setTransform(22.4,90.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag2AMQAMgSARgRIAYALIAPgTQAXAJASANQgMAQgQARIgYgLIgQATQgWgJgTgLg");
	this.shape_41.setTransform(22.4,90.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgfAxQgcgNgQgJQgOgIAFgLQABgFAEgEQANgSAUgRQAIgIAKgBQALgCAKAFIADABIACgCQAHgHALgCQALgBAJAFQASAJAXAPQAIAGABAIQACAIgIAHQgRATgPANQgRAPgUgJIgEgCIgCACQgJAKgMAAQgIAAgHgEg");
	this.shape_42.setTransform(37.8,64.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag6AJQAOgRATgRIAYANIATgSQAWAKATANQgOAQgTAQIgYgLIgSASQgWgKgUgNg");
	this.shape_43.setTransform(37.9,64.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AABAsIgBgCIgDACQgRALgSgNQgUgPgPgOQgIgHABgIQAAgIAHgGQATgRASgMQAJgFAKAAQAKABAHAGIACACIADgCQAIgFAKAAQAKABAIAGQAVARANAPQAGAHAAAGQABAIgJAIQgTAQgRAKQgIAFgIAAQgKAAgKgHg");
	this.shape_44.setTransform(104.2,84.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAAANIgTAPQgTgNgRgQQARgPAUgNIATARQAJgHANgIQASAPAPAQQgPANgUANQgKgHgLgKg");
	this.shape_45.setTransform(104.2,84.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAAAsIgCgCIgCABQgUALgSgPQgUgPgQgQQgLgKAFgJQACgFAGgFQASgOAXgMQAUgLASAPIACACIADgBQAKgFALABQAKABAIAHQASAPAQATQAHAHgBAIQgBAIgJAGQgVAOgSAJQgIAEgIAAQgLAAgLgIg");
	this.shape_46.setTransform(125.4,63.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAAANIgWANQgWgRgOgOQATgOAVgLIAUASIAXgNQASAPAQARQgQAMgXAMg");
	this.shape_47.setTransform(125.5,63.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgDArIgDgCIgDABQgUAJgRgQQgWgVgLgOQgJgKAEgIQACgGAIgFQASgLAZgLQAKgEAKACQALACAHAIIACADIADgCQAKgEALADQAKACAIAIQARARAOATQAMASgTALQgWAMgUAHQgHADgGAAQgNAAgKgLg");
	this.shape_48.setTransform(159.3,66.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgBANIgYALQgWgUgLgPQAWgNAVgIIASAUIAZgLQAQAQAPAUQgVAMgVAIIgSgUg");
	this.shape_49.setTransform(159.4,66.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AASAjIgDAAIAAAAIgEgBIgLgDQgVgGgMgLQgKgLACgNQACgOANgGQASgIATAHQANAFALAQQAGAKABANIAAADIAAADQgBAGgFAEIgDACIgHADIgHABIgBAAg");
	this.shape_50.setTransform(156.7,73.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgCB1QgIgBgGgHQgHgGAAgHQgBgLgNgGQgIgEgQgEIgBAAIgCAAIgBAAQgdgIgSgUQgTgWAEgeQACgJAJgFQAJgFAKACIAUADQgOgxA0gcQAwgaAtAQQAuAQASApQARAlgLApQgMArggAaQgfAXgmAAIgNAAgAg3AdQAgAHAVAOQAPALAIAOQAjgGAQgxQAUg6gmgZQgegTgiAcQgNALgBALQgBAMARAGQASAHAQACQANABAJAGQAIAIgBALQgDARgIAGQgIAGgKAAQgLAAgIgGQgTgOgigGIgcgEQAFAGAOADg");
	this.shape_51.setTransform(155.1,77.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AACBfQAAgHgFgJQgKgRgZgHIgUgFQgXgEgMgOQgMgQAFgVIBBAJQAnAIAUAQQAFgCAAgLQghgDgXgMQgfgRAHgdQAGgcAggNQAcgNAcAIQAcAHAQAWQARAWgCAdQgDAugYAgQgXAegjAAIgPgBgAALgyQgLABAAAJQABAJASAFIANAEQAAgHgDgHQgGgOgMAAIAAAAg");
	this.shape_52.setTransform(155,77.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgKAgQgSgHgPgOQgGgFABgHQAAgHAFgGQANgRAWgEIAGgBIADAAQAIAAAHAFQAKAFAIAJQAMAOADARQACAJgHAHQgGAGgLABIgKAAQgOAAgNgFg");
	this.shape_53.setTransform(139.8,74.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("ABDBkQgpgBgdgVIgLgIQgEABgGAAQgegDgPgDQgbgFgQgKQgOgKgHgSQgGgRABgRQABgJAJgFQAIgGALACIAWACQANgbAZgUQAigaAnADQArAEAhAfQAhAfAFAqQACANgIANQgKAOgFAJQgJATgKAJQgNANgRAAIgBAAgAgGAAQATAGABARQAAAMAJAJQAJAKAPACQANACACgDIAHgQQALgRAHgIIgCABQABgEgBgFIgFgMQgNgcgXgOQgcgRgXATQgVAQgQAiQgFAMgNAAIgJAAIgGgBQAGAFAKADIATADQACgJAEgHQAIgKANAAIAJAAg");
	this.shape_54.setTransform(136.9,75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAbBFQgqgWAEgdIgFAKQgFALAAAJIg1gHQgUgCgKgQQgJgPABgTIArAFQALgaAQgSQATgVAXgGQAqgJAlAhQAjAggBAqQgPAWgPAZQgHAMgPAAQgOAAgUgLgAANgLIgHAHIAOAJQARAJAPgDQgDgQgJgIIgKgGQgIABgJAHg");
	this.shape_55.setTransform(136.9,75.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgDBWQgagDgNgDQgXgGgMgOQgUgUACggQABgIAIgFQAJgGAKABIAcADQgDgUAGgUQAMgmAtgBQAkAAAXALQAVAKgHAbQgEAOgJAaIAEAeQADASgKAKQgZAbgrAAIgNgBgAgZApIAeADQAUABAIgIQgDgMgCgRQgBgVAFgQIAHgNIAAgBQgLgBgGACQgQAEADASQABAHAJAVQAFANgHAHQgGALgRgCIgfgDQAEAGAIABg");
	this.shape_56.setTransform(122.5,72);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAABCIgdgDQgUgBgLgQQgLgPABgUIBBAGQgYgqAagaQAYgbAsAWQAJAHgFAFQgcAeATA4QgKAOgRAGQgMAFgMAAIgJgBg");
	this.shape_57.setTransform(122.6,71.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgpBuQhJgJgcg2QgZgvAhgsQAfgqA2ABIAJABQAcgdAwADQAsACAwAbQALAGAAALQABAKgKAHQgOAKABAQQAAARAUAEQAIACAFAHQAFAHgBAHIgDAvQgCAJgGAFQgHAGgNgBQgcgDgXgLQgjAlg3AAIgXgCgAhegPQgOAcAQAXQATAbAoAFQAgAEATgOIgDgFQgMALgPgEQgtgNgSgmQgJgSAAgVQgGAGgEAJgAAigrQATABACAPQADAdATAVQAKAKANAGIAAgGQgbgOgGgfQgFgZAMgVQgWgHgVgBQgrgBAAAnQgBARAHAMQgCgVAOgPQAJgJANAAIAGABg");
	this.shape_58.setTransform(107.3,71.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgnBaQgkgFgZgVQgagYAAgjQABgeAWgTQAWgSAfgBQgOAjALAdQAMAgAkAIQgagUgHgbQgHgfATgZQAXggArAFQAdAEArAWQgGAEgJANQgNAUAKAWQAKAVAXAEIgDAwQgOgBgKgDQgegJgUgYQgTgYgDgeQgNAUAKAYQAGAPATAZQgQARgZAHQgPAFgRAAIgQgBg");
	this.shape_59.setTransform(107.4,71.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgfAWQgIgIACgKQAFgRAPgKQAKgGALABQAMAAAKAGQAKAGACALQACAKgGAJQgIAMgRACIgEAAIgPABIgCAAQgLAAgIgHgAAPAJIAAAAIAAAAIAAgBg");
	this.shape_60.setTransform(70.7,71.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAWCHQgKgEgDgHQgFgLgVgEQgagDgJgDQgZgHgVgVQgUgCgQgNQgWgSgEgeQgBgIAIgGQAHgHALgBIAVgCQAKgTATgMQgTgPgDgYQgDgWALgWQAGgLARAAQARgBAHAJQAQAQAtABQA4ACAPAGQAhAMAWAbQAYAdACAiQACAzgjApQgjAng0AJIgGAAQgHAAgGgDgAAOhDQASADAPANQAiAggFApQgEAlgnANIgOAEQAQAGALAKQAmgOATgqQAZg1gvgiQgWgRhGgEIgTgCQAQAEAcADgAg9AsIAOAMQgBgEABgGQAEgQAUgBQAYAAADgOQACgMgNgLQgPgNgRADQgTAEgKAZIgDAGQgFAKgRABIgGABQAEAFAIgBIACAAQANAAALALg");
	this.shape_61.setTransform(73.5,71.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAZBpQgNgNgYgCQgxgEgXgfIgEAAQgTACgNgOQgMgNgCgTIAogDQAFgVATgOQASgNAXgBQAagBATAOQAVAPABAZQABAQgLAKQgMAMgVAAIgRABQAOAJAVgCQANgCALgLQAOgOAAgUQgBgfgbgSQgXgQghACQgdADgOgVQgQgWARgZQAPAQAbAEQAPADAfAAQAwgBAkAdQAmAeAAAuQAAAqgfAeQgcAbgrAJQgBgGgHgHgAgYgKQgLAAgEAOIAQgBQAIAAAAgGQAAgDgDgCQgCgCgDAAIgBAAg");
	this.shape_62.setTransform(73.5,71.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgEAjQgTgCgSgKQgOgHAHgRQAKgUAUgKIAFgCIAGgBQAGgBAFABQANADAKAHQAPAKAHARQAEAIgFAIQgFAHgKAEQgNAGgQAAIgIgBg");
	this.shape_63.setTransform(54.7,72.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAPBXIgMgFQgDACgGAAQgeAFgQABQgbADgSgHQgQgFgLgQQgKgPgDgSQgBgJAHgHQAHgIAKgBIAWgDQAFgdAVgZQAbgiAngHQApgHAoAWQAnAWAQAoQAFANgFANIgJAaQgEAUgHAMQgKAQgRAEQgRAEgPAAQgWAAgUgHgAgGAMQAUABAFAQQADALALAHQALAGAPgBQANgBABgEQAAgHADgKQAGgSAGgMIgCADQAAgDgDgEIgIgMQgTgYgagIQgegJgTAYQgQAVgHAlQgCALgKAEQgFACgGABIgGABQAHADAKABIATgCQAAgJADgIQAFgRATAAIACAAg");
	this.shape_64.setTransform(51.8,72.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AApBHQgtgLgDgdIgDAKQgDANAEAIIg2AHQgTADgOgOQgMgMgEgTIArgGQADgbAMgVQANgZAXgMQAkgTAsAXQAqAWAJApIgSA0QgFATgZAAQgKAAgOgDgAAJgEIgGAIIAQAGQATAFAOgHQgHgPgMgGIgKgDQgIADgGAJg");
	this.shape_65.setTransform(52,72.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("Ag+BRQgXgPgGgfQgCgIAHgIQAHgHAKgCIAbgEQgIgSACgUQADgpAsgLQAggKAaAFQAYAEgBAcQAAAPgCAdIALAbQAHAQgHANQgVAlg0AIQgZAEgOAAQgXgBgQgKgAAKgrQgOAIAGARQADAHAOASQAIAKgFAJQgDANgSADIgeAFQAGAEAHgBIAfgFQATgFAFgJQgFgMgGgOQgGgUAAgSQAAgDAEgKIABgBQgMABgFADg");
	this.shape_66.setTransform(37.2,73.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgwA+QgOgMgEgTIBAgKQghgkASgfQARggAwAKQALAEgEAGQgKAUAEAZQAFAUANAVQgGARgPAKQgOAJgSACIgbAFIgJABQgOAAgMgKg");
	this.shape_67.setTransform(37.3,73.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AiFBSQglgpAWgxQAVgwA0gNIAIgBQAWgkAugJQAsgJA1AOQAMAEADAKQADAJgIAJQgKAOAEAPQAEARAVAAQAIAAAHAFQAGAFABAHIAFAXIADAXQABAIgEAGQgFAJgOACQgcAEgagFQgcA1hIAKQgNACgMAAQg4AAghgmgAhmAJQgHAfAWATQAZAVAogFQAfgEARgTIgFgEQgIAOgRAAQgugBgbghQgOgQgFgTQgEAHgCAJgABkAOIgBgHQgegGgNgcQgLgYAGgXQgXgCgVAFQgpAKAJAmQADAQAKALQgHgVALgSQAIgMARgDQASgDAFAOQALAcAXAOQANAIANADg");
	this.shape_68.setTransform(22.9,77.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhYBXQgggQgIgiQgHgeARgYQARgXAegIQgFAlASAZQATAdAmgCQgegNgOgaQgOgaAMgeQAPglArgFQAdgEAvALIgDAFIgIAPQgIAWAPAUQAQATAXgDIAJAuQgOADgLAAQgfgBgZgTQgYgSgLgcQgIAWAQAVQAJAMAaAVQgMAVgXANQgVAMgZADIgSABQgaAAgVgLg");
	this.shape_69.setTransform(22.9,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).wait(1));

	// Layer 2
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AiRBwQgRgDgHgXQgFgUAIgMQAEgHAJgFIABgBIBCgqQAogXAhgJQANgEAcgFQAXgGANgOQAZgYAZgUQAXgRAWAXQAVAXgOAXQghAzgTAWQgkAqgiAMQgJADgQgGQgRgHgGADIgjASQgPAHgbAHIglAKQgKAGgIAAQgFAAgEgCg");
	this.shape_70.setTransform(89.2,51.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgzAWQAxgZAtgDQAUgCAYgXQAmgkAJgGQgpBDgxAmQgIAGgBgBQgbgSggAPQgyAYgFAAQgLABgQAGIgbAJQBDgrAPgJg");
	this.shape_71.setTransform(89.1,51.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("Ak2C+QgYgEgDgbQgDgbAVgLIBKgnQArgWAjgIQA/gOAOgFQAngOAcgdQAwg1A5gNQANgCA7AKQAtAHAPgVIA3hZQASgcAcANQAbAMgEAgQgIAxgNAfQgRAqgfAXQggAag6AMQhTARgMAEQguAQgPAXQgSAdgHAHQgiAhgsgKQglgIgnAFQgdAEgtAPIgnAMQgMADgMAAIgRgBg");
	this.shape_72.setTransform(72.1,45.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AktCYQBBgiAWgKQAxgWAqgFQBMgKAxg4QAjgmAlgNQAogNAwASQAZAKAXgJQAUgJAQgZIA3hZQgLBRggAiQgeAihKAMQgzAJgVAGQgoALgcAUQgMAJgRAcQgRAagMAFQgMAFgdgIQgggIgPACQgzAHhKAYIgUAJQgGABgFAAQgGAAgHgCg");
	this.shape_73.setTransform(72.1,45.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhgCWQgKgPADgSQAEgmAGgTIALgdIAGgUQgUgNgFgaQgHglAZgjQAGgJAIgJQABAXABgWQAFgRAJgJQARgRAaAEQAQgKAQADQATAEAcAbQATASgLAWIgFAJQAGACAGAEQAPAIAEASQAEARgHAPQgKAUgVAFQAFAQgFAaQgIAqgGAJQgKARghAMIgJADIgDAGQgFAQgUACIgOAFQgLADgQACIgEAAQgQAAgKgPg");
	this.shape_74.setTransform(51.1,27.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AhCCAIAAgBQgDgOAGgWIALghQALgnACgSQABgGgDgFQgEgHgJAAQgHABgDgLQgEgKAEgHIALgfQAIgQANgJIABgCIABgFQAFgTARAJIAHADQACAAADgHQAEgIAKABQAKABAEAJQAEAHAHAGQgIgCgHALQgHALgJgCQAGAGADAPQALAUAVAAIAKAAQAFACAAAHQgBALgPgDIgWgDQgMgDgHgJQgJAQABAHQAAAIAMALIAGAEQATANgHAYQgBAFgEAlQgRAKgIACQAEgJgBgVQgBgVAEgKQgHgPgKgCQgJgCgCAPIgEAWQgCAKgHAOIgJAUQgDAHABAGQACAEAFAGIADAAQgLAHgFACQgGADgFAAIgGgBg");
	this.shape_75.setTransform(51,27.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("As7FWQgYgEgDgbQgCgZAUgMQAmgXB0hPQBehBA/gfQBug2BQgtIAEgBQAmgZBOgpQBRgrAmgZQA1giAhgPQA1gZApgBQARAAAeAEQAZABAUgLIBOgvQAzggASgJQAvgXAcAKQASAFAPAPIAaAeIF2G4QAJAFAGANIAEAJQALAYgOARQgOASgZgEQgRgCgUgPIghgbQhPg+gcgVQg8gtgrgcIgugdIgEgCQgFAHgIAFQgUANgRgNIgLgIIgGAVIgQBAQgJAggegGQgfgFgDgfQgCg6gFgfQgHgugVgMIgDAEQgJAMgLAEQgTAIgTgIQgUgKACgWIABgQIgSAOQgWAQg3AIQghAFgLAAQgIgBgGAFIgSAMIh+BIQizBmhwAxIgtAXQgeAPgSAAQgUAAgLgPIgBgCIgOAHIgnAWQg0AagwAVIhTAqQgoASgeAAQgJAAgIgCgABNicQgoAKgrAYIhOAtQgcARhPAqQhEAjgmAZQgFADgFABIgGABIgCADQgMAQgaAMQgTAIgVAEQgTATgmARIgQAHIAHAHIABAAQAogRAigQQA4gaA7gfQBVgtCKhOQAOgIAhgZQAhgVATgBQAwgCAPgDQASgFAVgNQgMADgbgGQgQgEgLAAQgHAAgFACgAJTgMIhZhpIhBhSQg2hEgIACQghALgqAaQAUAPgIAWIgTAxQAWAHAaAUQASAOALAWQAHgIALgDQAQgFAMAJIAKAJQAMgLAQACQAaACAfASIAyAiIAeAUg");
	this.shape_76.setTransform(85.5,34.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AsxEwQAngXBohJQBYg/A6gcQBxg2AFgKQAHADAJgEQAGgCAKgHQAIgBAMgIQANgHADgHIABgCQAIgBARgLIAAABQAMgHBegzQBhg1AlgYQBDgsA6gSQAtgNAYAKQAUAIAUgGQAKgDAbgOQAOgHBHgtQAzggAngLQANgEAGABQAIABAJAJIGYHhIAEAJQgIABgGgFIgLgJQhvhWgngeQhWg/hIgqQgTgMgIABQgMACABAdIgugjQgPAYgKApQgNA8gEAIIgFg4QgEghgBgXQAAgfgWgTQgLgJgjgRQgIgEgIAOQgJASgKABQAAgaALghIAXg/QgfATgcAYQgSAPgeAdQgJAJgrAJQgrAJgNgEQgIgCgIAGQgIAHgGADQjLB0giASQiJBKhtAtQgNAJgIACQgMADgEgYQgBgHgKAEIgOAIQg9AhhQAlIiPA/IgKAFIgEAAQgEAAgFgDg");
	this.shape_77.setTransform(85.5,34.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.1,146.1);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
	this.shape_3.graphics.f("#EFD01F").s().p("Ah0TYIxjxjQgwgwAAhFQAAhEAwgwIRjxiQAxgxBDAAQBEAAAxAxIRjRiQAwAwAABEQAABFgwAwIxjRjQgxAwhEAAQhDAAgxgwg");
	this.shape_3.setTransform(0,-134.3);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.9,7.6,1.478,1.478,0,0,0,58.6,190.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#425261").s().p("AhPV9MAAAgr5ICfAAMAAAAr5g");
	this.shape_4.setTransform(-0.7,55.5,1.478,1.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.9,-294.1,289.2,656.3);


// stage content:
(lib._1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(258.3,1147.6,1,1,0,0,0,144,40.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({y:1127.6},5).wait(24));

	// Layer 38
	this.instance_1 = new lib.mobilesign2ai("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(258.7,1232.3,1.732,1.732,0,0,0,90.1,30.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({y:1124.8},3).to({y:1127.8},2).wait(27));

	// Isolation Mode
	this.instance_2 = new lib.Tween69("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(258.3,1043.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween70("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(258.3,891.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({_off:true,y:891.5},7).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},7).to({y:913.5},3).wait(28));

	// objects
	this.instance_4 = new lib.Tween67();
	this.instance_4.parent = this;
	this.instance_4.setTransform(257.7,1586);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween68();
	this.instance_5.parent = this;
	this.instance_5.setTransform(257.7,1009);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({_off:true,y:1009},8).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},8).to({y:1048},2).wait(37));

	// Layer 35
	this.instance_6 = new lib.Path();
	this.instance_6.parent = this;
	this.instance_6.setTransform(253.5,1314.4,0.513,0.513,0,0,0,121.2,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AQpYyIB0iBIAEABIg4BpIgWArgAzhiDIACgBIgCADIAAgCgAMly6QAMAJANAGIgOAOIgLgdgAPC0WQgCgcgNgoIgKgaQAhgUAKgfQASgBARgHQAJgEAIgFIABADIAGA6QAFAaAGATIgKAGIg/ApIgPAKIAAgBgATT3VQgLg4gOg3IACAAQAXBIAQBGIgJAEIgHgjg");
	this.shape.setTransform(150.2,994.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],-81.8,-468.1,-81.8,433.7).s().p("EAohBDpIADgKQAihaAYhZQBOAhAxATQgUBFgZBEgEANTBDpQA1hGAegyIASgeIAQgdIA1hmIiGgWIg0BiIghA4QgwBLg8BJIADABI+oAAQBYgxBPgxQCphpCChsQB0hgBMhcQB9gLCagCQBlgBDHAEIImAJQDiADB+AEQDCAGCeALQFXAZGiBFQCNAXBcAUQB+AdBmAkQAnAOBBAcQgbBmgoBlIgMAdgEgbIBDpQDghmC0hnQCuhkBxhWIA/gvQAggbARgPIACAAIA0gFQAUgDAQgFQAOAFAQAAQAgAAAYgRIAEABQgWAYgbAZQgSASgnAiIgfAaIghAaQh1BcixBrQh/BLiZBNgA9uM5IAEgIIASgFQA0gNBGgLIAFAOIADAGQhLAvhUA0QgRgfAYgzgEglwAL6QAAgLgDgKQBohFBhg5QAhgUAPgLQAagTAQgUQATgYAEgcQAGgfgOgYQgOgZgdgLQgcgLgfAEQgZAEgfANQgTAJggATIjVB+QAigpAOgfQAUgsgNgkQgJgagbgRQgagQgegCQgxgDg/AhQgIgwgtgcQgVgNgWgEQCVgrCXgjQBegXBGgIQAsAvA4AxQBnBaCLBXQBqBBB6BBIg7AIQhHAMhMATQgQgCgRAEQgQAEgWAMIgOAHQhcAdhjAnQhNAfhzA2QAGgUgCgTgA+UG2QiJhUhohYQg2gtgqgsIAXgBIA9gBQAkAjAsAjQBnBUCHBQQCFBPCfBMIhqANQiDhCh4hJgA9WqxIAAAAIALAhIgCABIgJgigEAQRgvsIAAAAIgBAAgEACuhDjIAGgCIABAGIgHgEgEACrhDmIAHgCIABACIgGACIgCgCg");
	this.shape_1.setTransform(458.2,899.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EAkCBDoIAMgdQAohlAbhmIBIAeIAdANQgYBZgiBaIgEAKgEAIRBDoIgEgBQA8hJAwhMIAig3IA0hiICFAWIg1BmIgQAdIgSAdQgeAzg0BGgEgaCBDoQCahOB+hKQCxhsB1hbIAhgaIAfgaQAogiARgSQAbgaAWgXIAOAFQAZAGAgAAQAQAAAqgEIATgCQhMBbhzBgQiDBtipBpQhPAxhXAxgEghfAHEQiKhWhnhaQg5gxgsgvIAngEQArAsA1AtQBoBXCKBVQB3BJCDBCIg4AHQh7hBhqhCgEggBgK6IACAHIAAABIgCgIgEAAFhDlIAGgCIAAABIgFACIgBgBg");
	this.shape_2.setTransform(475.1,899.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EAjlBDoIANgdQBLi9AcjCQAejPgajLQgViig6iiIAuAAIA1AAQA7CgAXCjQAeDPgdDVQgZDAhMDJIgEAKgEAH0BDoIgEgBQA9hJAvhMIAig3IA0hiICGAWIg1BmIgQAdIgSAdQgfAzg0BGgEgaeBDoQCZhOB/hKQCxhsB1hbIAggaIAggaQAngiASgSQA8g6AlgsQBVhpAehjQAFgRAEgSQA9gYA/gXQAAAogJAoQgXBshXB2QhRBtiMB0QiDBtioBpQhPAxhYAxgEAMPA6dIADgNQAEgWABgPIAHhuQgChIgFgnIgFglIgDgNIB/gIIADAOIAFAmQAIAtACBHIgFB0QgBAQgEAWIgDAOgEgh7AHEQiLhWhnhaQg4gxgsgvIAngEQAqAsA2AtQBoBXCJBVQB4BJCCBCIg4AHQh7hBhphCgEggegK6IADAHIgBABIgCgIgEgAXhDlIAGgCIAAABIgFACIgBgBg");
	this.shape_3.setTransform(477.9,899.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],-85,-468.1,-85,433.7).s().p("EAoABDpIAEgKQBLjJAai/QAcjVgejQQgXiig6igQBLAAA7ABQA5CdAYCiQAfDWgbDbQgZDDhJDFgEAMzBDpQA0hGAegyIASgeIAQgdIA1hmIiFgWIg0BiIgiA4QgwBLg8BJIAEABI+oAAQBXgxBPgxQCphpCDhsQCLh0BShtQBXh3AXhsQAIgoABgoQCng8C0gwQGRhqHhguQF5gkIEgFQEfgEIzACQA6CiAUCjQAbDKgeDQQgdDBhLC9IgMAdgEAO0A1dIADAOIAFAkQAFAnACBIIgHBuQgCAPgEAWIgCANICEAIIACgPQAEgWABgQIAFh0QgBhHgIgtIgGgmIgCgOgEgbpBDpQDghmC0hnQCuhkByhWIA+gvQAnggARgQQAygrAugxQBKhTAjhLQBFgfBHgcQgDARgFASQgeBihWBpQglAtg8A5QgRASgoAiIgfAaIghAaQh1BcixBrQh+BLiaBNgA+PM5IAEgIIASgFQA1gNBFgLIAFAOIADAGQhKAvhVA0QgRgfAYgzgEgmQAL6QgBgLgDgKQBphFBgg5QAhgUAQgLQAagTAPgUQATgYAEgcQAGgfgOgYQgNgZgegLQgcgLgeAEQgaAEgeANQgTAJghATIjVB+QAigpAPgfQATgsgNgkQgJgagbgRQgZgQgfgCQgxgDg/AhQgHgwgugcQgVgNgWgEQCVgrCXgjQBegXBGgIQAsAvA5AxQBnBaCKBXQBqBBB7BBIg7AIQhHAMhMATQgQgCgRAEQgRAEgWAMIgOAHQhcAdhiAnQhNAfh0A2QAGgUgBgTgA+0G2QiKhUhohYQg2gtgqgsIAYgBIA8gBQAkAjAsAjQBnBUCIBQQCEBPCgBMIhrANQiDhCh3hJgA93qxIAAAAIALAhIgCABIgJgigEAPwgvsIAAAAIAAAAgEACOhDjIAFgCIACAGIgHgEgEACKhDmIAIgCIABACIgGACIgDgCg");
	this.shape_4.setTransform(461.5,899.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AbnfcIArhAIAEgGQAQBUgZBOQgNgtgZgvgAZVcWQhAhGhVhHQALAAAKgDQAfgHAUgXQAIAfAgASQAeARAigDQAVgBAXgHQASAXAPAXIgXAdIg5BFIgYgZgAHvRAIB1iCIADABIg4BpIgWArgA8bp1IADgCIgDADIAAgBgADs6tQAMAJANAGIgPAPIgKgegAGI8IQgCgdgNgnIgJgaQAggUALggQARAAARgHQAKgEAHgGIABADIAHA6QAEAaAGAUIgJAFIhAApIgPAKIAAAAgAKa/HQgMg4gOg3IADgBQAWBIAQBGIgJAEIgGgig");
	this.shape_5.setTransform(207.1,1044);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],-85,-468.1,-85,433.7).s().p("EAoABDpIAEgKQBLjJAai/QAcjVgejQQgejXhdjTQhcjPiYjJQgfgpghgpIA9ACQAwABAiADIAnAxQCeDOBfDWQBhDXAhDgQAfDWgbDbQgZDDhJDFgEAMzBDpQA0hGAegyIASgeIAQgdIA1hmIiFgWIg0BiIgiA4QgwBLg8BJIAEABI+oAAQBXgxBPgxQCphpCDhsQCLh0BShtQBXh3AXhsQAbh/g1iEQgRgrgZgsQA1gqA/gnQB2hIDqhmQCVhBBJgdQB+gxBmgeQBogfCBgYQBagRCSgWQGVg8FJgbQEvgYETACQApAyAmAzQCSDDBYDOQBZDQAaDRQAbDKgeDQQgdDBhLC9IgMAdgEAO0A1dIADAOIAFAkQAFAnACBIIgHBuQgCAPgEAWIgCANICEAIIACgPQAEgWABgQIAFh0QgBhHgIgtIgGgmIgCgOgEAKKAsUIALANIAbAhIAlAvQAHAJAgAuIAjA4QAQAYAMAYIAaAwIB1gUIgcgyQgPgdgPgWQgYgmgOgTIgpg5IgngxIgdgiIgLgNgEgbpBDpQDghmC0hnQCuhkByhWIA+gvQAnggARgQQAygrAugxQBWhgAhhUIAGgTQAZhPgPhUQAkgzAvgvQAJAUAGAUQAqB7giBzQgeBihWBpQglAtg8A5QgRASgoAiIgfAaIghAaQh1BcixBrQh+BLiaBNgEgNTAxGIAUgHQAUgJAngWIAFgDIANAQQgcAdgjAqQgQgWgSgYgA+PM5IAEgIIASgFQA1gNBFgLIAFAOIADAGQhKAvhVA0QgRgfAYgzgEgmQAL6QgBgLgDgKQBphFBgg5QAhgUAQgLQAagTAPgUQATgYAEgcQAGgfgOgYQgNgZgegLQgcgLgeAEQgaAEgeANQgTAJghATIjVB+QAigpAPgfQATgsgNgkQgJgagbgRQgZgQgfgCQgxgDg/AhQgHgwgugcQgVgNgWgEQCVgrCXgjQBegXBGgIQAsAvA5AxQBnBaCKBXQBqBBB7BBIg7AIQhHAMhMATQgQgCgRAEQgRAEgWAMIgOAHQhcAdhiAnQhNAfh0A2QAGgUgBgTgA+0G2QiKhUhohYQg2gtgqgsIAYgBIA8gBQAkAjAsAjQBnBUCIBQQCEBPCgBMIhrANQiDhCh3hJgA93qxIAAAAIALAhIgCABIgJgigEAPwgvsIAAAAIAAAAgEACOhDjIAFgCIACAGIgHgEgEACKhDmIAIgCIABACIgGACIgDgCg");
	this.shape_6.setTransform(461.5,899.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EAjlBDoIANgdQBLi9AcjCQAejPgajLQgbjRhYjQQhZjNiRjDQgmgzgqgzIBjACQAiAoAfApQCXDJBcDQQBdDSAfDYQAeDPgdDVQgZDAhMDJIgEAKgEAH0BDoIgEgBQA9hJAvhMIAig3IA0hiICGAWIg1BmIgQAdIgSAdQgfAzg0BGgEgaeBDoQCZhOB/hKQCxhsB1hbIAggaIAggaQAngiASgSQA8g6AlgsQBVhpAehjQAihygph7QgHgUgJgUQAkglArgiQAaAsARArQA0CEgbB/QgXBshXB2QhRBtiMB0QiDBtioBpQhPAxhYAxgEAMPA6dIADgNQAEgWABgPIAHhuQgChIgFgnIgFglIgDgNIB/gIIADAOIAFAmQAIAtACBHIgFB0QgBAQgEAWIgDAOgEAKXAwPQgNgZgQgYIgjg3QgggvgHgIIgkgvIgcgiIgKgMIBogfIAKANIAdAhIAnAyIApA4QAPATAXAnQAPAWAQAdIAbAyIh1AUgEgOjAwcIBJgpQgUAQgSARIgXAXIgMgPgEgh7AHEQiLhWhnhaQg4gxgsgvIAngEQAqAsA2AtQBoBXCJBVQB4BJCCBCIg4AHQh7hBhphCgEggegK6IADAHIgBABIgCgIgEgAXhDlIAGgCIAAABIgFACIgBgBg");
	this.shape_7.setTransform(477.9,899.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AZVcWQhFhLhdhNQAghGAnhFQAyAtApAtQCTCcAmCLQAdBmgeBeQgniIiRiagATTXYIB2h2IAVAPQgrBHgkBJIg8gpgAHvRAIB1iCIADABIg4BpIgWArgA8bp1IADgCIgDADIAAgBgADs6tQAMAJANAGIgPAPIgKgegAGI8IQgCgdgNgnIgJgaQAggUALggQARAAARgHQAJgEAIgGIABADIAHA6QAEAaAGAUIgJAFIhAApIgPAKIAAAAgAKa/HQgMg4gOg3IADgBQAWBIAQBGIgJAEIgGgig");
	this.shape_8.setTransform(207.1,1044);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EAjlBDoIANgdQBLi9AcjCQAejPgajLQgbjRhYjQQhZjNiRjDQkOlsnVlHQjyipkoifQApgJAngGQEcCYDtCjQHeFKEaFyQCXDJBcDQQBdDSAfDYQAeDPgdDVQgZDAhMDJIgEAKgEAH0BDoIgEgBQA9hJAvhMIAig3IA0hiICGAWIg1BmIgQAdIgSAdQgfAzg0BGgEgaeBDoQCZhOB/hKQCxhsB1hbIAggaIAggaQAngiASgSQA8g6AlgsQBVhpAehjQAihygph7QgyiSieiiQg7g9hJg+QAUggAWggQBgBMBNBKQCpCmA+CbQA0CEgbB/QgXBshXB2QhRBtiMB0QiDBtioBpQhPAxhYAxgEAMPA6dIADgNQAEgWABgPIAHhuQgChIgFgnIgFglIgDgNIB/gIIADAOIAFAmQAIAtACBHIgFB0QgBAQgEAWIgDAOgEAKXAwPQgNgZgQgYIgjg3QgggvgHgIIgkgvIgcgiIgKgMIBogfIAKANIAdAhIAnAyIApA4QAPATAXAnQAPAWAQAdIAbAyIh1AUgEgUUArTIAcgbIgVAgIgHgFgEADaAoNQgKgKgagVIhzhZIhAguIg4goIg5gmIBOgqIA6AnIA8AoIBCAvIB3BbIAmAfIAOAMIhbAlgEgh7AHEQiLhWhnhaQg4gxgsgvIAngEQAqAsA2AtQBoBXCJBVQB4BJCCBCIg4AHQh7hBhphCgEggegK6IADAHIgBABIgCgIgEgAXhDlIAGgCIAAABIgFACIgBgBg");
	this.shape_9.setTransform(477.9,899.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],-85,-468.1,-85,433.7).s().p("EAoABDpIAEgKQBLjJAai/QAcjVgejQQgejXhdjTQhcjPiYjJQkZlznflKQjsijkdiYQAfgFAdgDQAqgFAdgHQEGCODeCYQHtFQEjF7QCeDOBfDWQBhDXAhDgQAfDWgbDbQgZDDhJDFgEAMzBDpQA0hGAegyIASgeIAQgdIA1hmIiFgWIg0BiIgiA4QgwBLg8BJIAEABI+oAAQBXgxBPgxQCphpCDhsQCLh0BShtQBXh3AXhsQAbh/g1iEQg9iaiqimQhMhLhhhMQA8hYBIhUQCtjKDoiqQDPiYEFiFQDbhvEchuQCRg4BjgeQA6gRA2gMQEnCfDyCpQHVFIEOFrQCSDDBYDOQBZDQAaDRQAbDKgeDQQgdDBhLC9IgMAdgEAO0A1dIADAOIAFAkQAFAnACBIIgHBuQgCAPgEAWIgCANICEAIIACgPQAEgWABgQIAFh0QgBhHgIgtIgGgmIgCgOgEAKKAsUIALANIAbAhIAlAvQAHAJAgAuIAjA4QAQAYAMAYIAaAwIB1gUIgcgyQgPgdgPgWQgYgmgOgTIgpg5IgngxIgdgiIgLgNgEAA1AkaIA5AmIA6AoIA/AvIBzBZQAbAUAKAKIANAMIBcgmIgOgMIgmgeIh4hbIhCgwIg7goIg7gngEgbpBDpQDghmC0hnQCuhkByhWIA+gvQAnggARgQQAygrAugxQBWhgAhhUIAGgTQAehegchnQgniKiSidQgqgsgxguQAUgjAWgjQBKA+A7A9QCdCiAyCSQAqB7giBzQgeBihWBpQglAtg8A5QgRASgoAiIgfAaIghAaQh1BcixBrQh+BLiaBNgEgSlAsJIA2g1IAGAFIgoBAIgUgQgA+PM5IAEgIIASgFQA1gNBFgLIAFAOIADAGQhKAvhVA0QgRgfAYgzgEgmQAL6QgBgLgDgKQBphFBgg5QAhgUAQgLQAagTAPgUQATgYAEgcQAGgfgOgYQgNgZgegLQgcgLgeAEQgaAEgeANQgTAJghATIjVB+QAigpAPgfQATgsgNgkQgJgagbgRQgZgQgfgCQgxgDg/AhQgHgwgugcQgVgNgWgEQCVgrCXgjQBegXBGgIQAsAvA5AxQBnBaCKBXQBqBBB7BBIg7AIQhHAMhMATQgQgCgRAEQgRAEgWAMIgOAHQhcAdhiAnQhNAfh0A2QAGgUgBgTgA+0G2QiKhUhohYQg2gtgqgsIAYgBIA8gBQAkAjAsAjQBnBUCIBQQCEBPCgBMIhrANQiDhCh3hJgA93qxIAAAAIALAhIgCABIgJgigEAPwgvsIAAAAIAAAAgEACOhDjIAFgCIACAGIgHgEgEACKhDmIAIgCIABACIgGACIgDgCg");
	this.shape_10.setTransform(461.5,899.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AZVcWQicinkMixQiShgi3hkQAfhCAihFIAMgXQCJBNBzBMQEMCxCcCnQCTCcAmCLQAdBmgeBeQgniIiRiagAHvRAIB1iCIADABIg4BpIgWArgA8bp1IADgCIgDADIAAgBgADs6tQAMAJANAGIgPAPIgKgegAGI8IQgCgdgNgnIgJgaQAggUALggQARAAARgHQAJgEAIgGIABADIAHA6QAEAaAGAUIgJAFIhAApIgPAKIAAAAgAKa/HQgMg4gOg3IADgBQAWBIAQBGIgJAEIgGgig");
	this.shape_11.setTransform(207.1,1044);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],-85,-468.1,-85,433.7).s().p("EAoABDpIAEgKQBLjJAai/QAcjVgejQQgejXhdjTQhcjPiYjJQkZlznflKQmakbosj7QjBhYjwheIAxgLQAlgJAbgKQDTBSC1BSQI3D9GlEgQHtFQEjF7QCeDOBfDWQBhDXAhDgQAfDWgbDbQgZDDhJDFgEAMzBDpQA0hGAegyIASgeIAQgdIA1hmIiFgWIg0BiIgiA4QgwBLg8BJIAEABI+oAAQBXgxBPgxQCphpCDhsQCLh0BShtQBXh3AXhsQAbh/g1iEQg9iaiqimQixiukhi0QiOhZiwhdQBAh4BgisQAzhaAigpQAjgoA6grIBnhHQA7gpB1hbQByhaA9gqQDBiED/hfQChg8DMgzQD2BhDVBiQIjD8GREYQHVFIEOFrQCSDDBYDOQBZDQAaDRQAbDKgeDQQgdDBhLC9IgMAdgEAO0A1dIADAOIAFAkQAFAnACBIIgHBuQgCAPgEAWIgCANICEAIIACgPQAEgWABgQIAFh0QgBhHgIgtIgGgmIgCgOgEAKKAsUIALANIAbAhIAlAvQAHAJAgAuIAjA4QAQAYAMAYIAaAwIB1gUIgcgyQgPgdgPgWQgYgmgOgTIgpg5IgngxIgdgiIgLgNgEAA1AkaIA5AmIA6AoIA/AvIBzBZQAbAUAKAKIANAMIBcgmIgOgMIgmgeIh4hbIhCgwIg7goIg7gngArSd2IDYBnICQBKIBBAiIBEgrIhBgjQhegwg3gbIjchngEgbpBDpQDghmC0hnQCuhkByhWIA+gvQAnggARgQQAygrAugxQBWhgAhhUIAGgTQAehegchnQgniKiSidQicinkMiwQhzhMiKhOIAeg5QCdBVCCBTQEWCyCmCrQCdCiAyCSQAqB7giBzQgeBihWBpQglAtg8A5QgRASgoAiIgfAaIghAaQh1BcixBrQh+BLiaBNgA+PM5IAEgIIASgFQA1gNBFgLIAFAOIADAGQhKAvhVA0QgRgfAYgzgEgmQAL6QgBgLgDgKQBphFBgg5QAhgUAQgLQAagTAPgUQATgYAEgcQAGgfgOgYQgNgZgegLQgcgLgeAEQgaAEgeANQgTAJghATIjVB+QAigpAPgfQATgsgNgkQgJgagbgRQgZgQgfgCQgxgDg/AhQgHgwgugcQgVgNgWgEQCVgrCXgjQBegXBGgIQAsAvA5AxQBnBaCKBXQBqBBB7BBIg7AIQhHAMhMATQgQgCgRAEQgRAEgWAMIgOAHQhcAdhiAnQhNAfh0A2QAGgUgBgTgA+0G2QiKhUhohYQg2gtgqgsIAYgBIA8gBQAkAjAsAjQBnBUCIBQQCEBPCgBMIhrANQiDhCh3hJgA93qxIAAAAIALAhIgCABIgJgigEAPwgvsIAAAAIAAAAgEACOhDjIAFgCIACAGIgHgEgEACKhDmIAIgCIABACIgGACIgDgCg");
	this.shape_12.setTransform(461.5,899.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EAjlBDoIANgdQBLi9AcjCQAejPgajLQgbjRhYjQQhZjNiRjDQkOlsnVlHQmSkZojj7QjUhij2hhIBIgSQDuBfDCBXQIrD8GbEbQHeFKEaFyQCXDJBcDQQBdDSAfDYQAeDPgdDVQgZDAhMDJIgEAKgEAH0BDoIgEgBQA9hJAvhMIAig3IA0hiICGAWIg1BmIgQAdIgSAdQgfAzg0BGgEgaeBDoQCZhOB/hKQCxhsB1hbIAggaIAggaQAngiASgSQA8g6AlgsQBVhpAehjQAihygph7QgyiSieiiQimiskWixQiBhTidhWIAcg2QCxBdCOBZQEgC0CyCtQCpCmA+CbQA0CEgbB/QgXBshXB2QhRBtiMB0QiDBtioBpQhPAxhYAxgEAMPA6dIADgNQAEgWABgPIAHhuQgChIgFgnIgFglIgDgNIB/gIIADAOIAFAmQAIAtACBHIgFB0QgBAQgEAWIgDAOgEAKXAwPQgNgZgQgYIgjg3QgggvgHgIIgkgvIgcgiIgKgMIBogfIAKANIAdAhIAnAyIApA4QAPATAXAnQAPAWAQAdIAbAyIh1AUgEADaAoNQgKgKgagVIhzhZIhAguIg4goIg5gmIBOgqIA6AnIA8AoIBCAvIB3BbIAmAfIAOAMIhbAlgEgIOAglIiRhJIjYhnIA7gtIDdBnQA3AaBdAxIBCAjIhFArgEgh7AHEQiLhWhnhaQg4gxgsgvIAngEQAqAsA2AtQBoBXCJBVQB4BJCCBCIg4AHQh7hBhphCgEggegK6IADAHIgBABIgCgIgEgAXhDlIAGgCIAAABIgFACIgBgBg");
	this.shape_13.setTransform(477.9,899.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AZVcWQicinkMixQkBiplxizIjOhdQhrgwiWhGIhSgoIAlifIAFgWIAoAUQCWBGBrAwIDOBdQFxCzEBCpQEMCxCcCnQCTCcAmCLQAdBmgeBeQgniIiRiagAkaLIIB5iJIApAVQgIAmgJA8QgIAxgJAlIiAhEgA8bp1IADgCIgDADIAAgBgADs6tQAMAJANAGIgPAPIgKgegAGI8IQgCgdgNgnIgJgaQAggUALggQARAAARgHQAJgEAIgGIABADIAHA6QAEAaAGAUIgJAFIhAApIgPAKIAAAAgAKa/HQgMg4gOg3IADgBQAWBIAQBGIgJAEIgGgig");
	this.shape_14.setTransform(207.1,1044);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EAmEBDoIANgdQBLi9AcjCQAejPgajLQgbjRhYjQQhZjNiRjDQkOlsnVlHQmSkZojj7QjshtkXhsQkAhikUhdIj5hPQhRgZh3gmIhZgfQAbgLATgKIBKAYQBYAdBwAhID7BPQENBYENBmQElBxDlBnQIrD8GbEbQHeFKEaFyQCXDJBcDQQBdDSAfDYQAeDPgdDVQgZDAhMDJIgEAKgEAKTBDoIgEgBQA9hJAvhMIAig3IA0hiICGAWIg1BmIgQAdIgSAdQgfAzg0BGgEgX/BDoQCZhOB/hKQCxhsB1hbIAggaIAggaQAngiASgSQA8g6AlgsQBVhpAehjQAihygph7QgyiSieiiQimiskWixQkIiql7izIjPhdQh0gyiLhBIhKgkIAFgQIABgFQAaAEAYgMIACgBIA8AcQCNBBBxAwIDSBdQGGC0EMCoQEgC0CyCtQCpCmA+CbQA0CEgbB/QgXBshXB2QhRBtiMB0QiDBtioBpQhPAxhYAxgEAOuA6dIADgNQAEgWABgPIAHhuQgChIgFgnIgFglIgDgNIB/gIIADAOIAFAmQAIAtACBHIgFB0QgBAQgEAWIgDAOgEAM2AwPQgNgZgQgYIgjg3QgggvgHgIIgkgvIgcgiIgKgMIBogfIAKANIAdAhIAnAyIApA4QAPATAXAnQAPAWAQAdIAbAyIh1AUgEAF5AoNQgKgKgagVIhzhZIhAguIg5goIg5gmIBOgqIA7AnIA8AoIBCAvIB3BbIAmAfIAOAMIhbAlgEgFvAglIiRhJIjYhnIA7gtIDdBnQA3AaBdAxIBCAjIhFArgEgpwAe6IAjgpQgKAagIAYIgRgJgA1XZuIijg+IhJgcIAwgrIBJAcQA2AVBsAnQB4AsB1AuIgzAtQhzgvh2grgA/cHEQiLhWhnhaQg5gxgrgvIAmgEQArAsA2AtQBoBXCJBVQB3BJCDBCIg4AHQh7hBhphCgA9/q6IADAHIgBABIgCgIgEACHhDlIAGgCIAAABIgFACIgBgBg");
	this.shape_15.setTransform(462,899.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],-85,-468.1,-85,433.7).s().p("EAoABDpIAEgKQBLjJAai/QAcjVgejQQgejXhdjTQhcjPiYjJQkZlznflKQmakbosj7QjlhoklhxQkMhmkOhXIj6hPQhxgihXgdIhKgYIAKgGQAbgSAOgWIBNAZQBkAgBiAcID8BNQEVBZENBlQEkBuDwBsQI3D9GlEgQHtFQEjF7QCeDOBfDWQBhDXAhDgQAfDWgbDbQgZDDhJDFgEAMzBDpQA0hGAegyIASgeIAQgdIA1hmIiFgWIg0BiIgiA4QgwBLg8BJIAEABI+oAAQBXgxBPgxQCphpCDhsQCLh0BShtQBXh3AXhsQAbh/g1iEQg9iaiqimQixiukhi0QkMiomGi0IjShcQhwgxiOhBIg7gcQAhgRAWgqQAKgTAXg/QATgxAfg6QASgiAphEQA6hiAog8IAwhHQAzgzA0gmQAvgjBXgzQBlg7AkgYQAegVBXhBQBIg3AvgcQBJgsBrgpIC9hDIATgHIBZAfQB3AnBSAYID4BPQEVBdD/BiQEXBsDtBtQIjD8GREYQHVFIEOFrQCSDDBYDOQBZDQAaDRQAbDKgeDQQgdDBhLC9IgMAdgEAO0A1dIADAOIAFAkQAFAnACBIIgHBuQgCAPgEAWIgCANICEAIIACgPQAEgWABgQIAFh0QgBhHgIgtIgGgmIgCgOgEAKKAsUIALANIAbAhIAlAvQAHAJAgAuIAjA4QAQAYAMAYIAaAwIB1gUIgcgyQgPgdgPgWQgYgmgOgTIgpg5IgngxIgdgiIgLgNgEAA1AkaIA5AmIA6AoIA/AvIBzBZQAbAUAKAKIANAMIBcgmIgOgMIgmgeIh4hbIhCgwIg7goIg7gngArSd2IDYBnICQBKIBBAiIBEgrIhBgjQhegwg3gbIjchngA4+YVIBJAcICjA+QB2AsBzAuIAzgtQh0guh4gsQhtgng2gVIhIgcgEgbpBDpQDghmC0hnQCuhkByhWIA+gvQAnggARgQQAygrAugxQBWhgAhhUIAGgTQAehegchnQgniKiSidQicinkMiwQkBiqlyiyIjOheQhrgviVhHIgogTIAOg4IBJAjQCMBBBzAyIDQBeQF6CzEJCpQEWCyCmCrQCdCiAyCSQAqB7giBzQgeBihWBpQglAtg8A5QgRASgoAiIgfAaIghAaQh1BcixBrQh+BLiaBNgEgqQAfmIAmgrIARAJIgFARIgJAnIgpgWgA+PM5IAEgIIASgFQA1gNBFgLIAFAOIADAGQhKAvhVA0QgRgfAYgzgEgmQAL6QgBgLgDgKQBphFBgg5QAhgUAQgLQAagTAPgUQATgYAEgcQAGgfgOgYQgNgZgegLQgcgLgeAEQgaAEgeANQgTAJghATIjVB+QAigpAPgfQATgsgNgkQgJgagbgRQgZgQgfgCQgxgDg/AhQgHgwgugcQgVgNgWgEQCVgrCXgjQBegXBGgIQAsAvA5AxQBnBaCKBXQBqBBB7BBIg7AIQhHAMhMATQgQgCgRAEQgRAEgWAMIgOAHQhcAdhiAnQhNAfh0A2QAGgUgBgTgA+0G2QiKhUhohYQg2gtgqgsIAYgBIA8gBQAkAjAsAjQBnBUCIBQQCEBPCgBMIhrANQiDhCh3hJgA93qxIAAAAIALAhIgCABIgJgigEAPwgvsIAAAAIAAAAgEACOhDjIAFgCIACAGIgHgEgEACKhDmIAIgCIABACIgGACIgDgCg");
	this.shape_16.setTransform(461.5,899.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AZVcWQicinkMixQkBiplxizIjOhdQhrgwiWhGQkQiDjiiAQj6iNjfiaIg4gnQAsg+BAhBQDECEDhCAQDqCEEIB/QCWBGBrAwIDOBdQFxCzEBCpQEMCxCcCnQCTCcAmCLQAdBmgeBeQgniIiRiagA8bp1IADgCIgDADIAAgBgADs6tQAMAJANAGIgPAPIgKgegAGI8IQgCgdgNgnIgJgaQAggUALggQARAAARgHQAJgEAIgGIABADIAHA6QAEAaAGAUIgJAFIhAApIgPAKIAAAAgAKa/HQgMg4gOg3IADgBQAWBIAQBGIgJAEIgGgig");
	this.shape_17.setTransform(207.1,1044);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],-57.9,-468.1,-57.9,433.7).s().p("EAsPBDpIAEgKQBLjJAai/QAcjVgejQQgejXhdjTQhcjPiYjJQkZlznflKQmakbosj7QjlhoklhxQkNhmkNhXIj6hPQhxgihXgdQjPhDivhFIg9gYIBrgVIAMAFQClA/DVBEQBkAgBiAcID8BNQEUBZEOBlQEkBuDwBsQI3D9GlEgQHtFQEjF7QCeDOBfDWQBhDXAhDgQAfDWgbDbQgZDDhJDFgEARCBDpQA0hGAegyIASgeIAQgdIA1hmIiFgWIg0BiIgiA4QgwBLg8BJIAEABI+oAAQBXgxBPgxQCphpCDhsQCLh0BShtQBXh3AXhsQAbh/g1iEQg9iaiqimQixiukhi0QkMiomGi0IjShcQhwgxiOhBQkHh6jniAQjviFjGiDQAsgnBAg0QBzheA7guQBhhLBUg1QBqhECJhDQBgguCfhFQB7g1BKgbQBugqBdgWQBRgTB5gQIDMgbIA/gKIBaAkQCjBDDbBKQB3AnBSAYID4BPQEUBdEABiQEXBsDtBtQIjD8GREYQHVFIEOFrQCSDDBYDOQBZDQAaDRQAbDKgeDQQgdDBhLC9IgMAdgEATDA1dIADAOIAFAkQAFAnACBIIgHBuQgCAPgEAWIgCANICEAIIACgPQAEgWABgQIAFh0QgBhHgIgtIgGgmIgCgOgEAOZAsUIALANIAbAhIAlAvQAHAJAgAuIAjA4QAQAYAMAYIAaAwIB1gUIgcgyQgPgdgPgWQgYgmgOgTIgpg5IgngxIgdgiIgLgNgEAFEAkaIA5AmIA6AoIA/AvIBzBZQAbAUAKAKIANAMIBcgmIgOgMIgmgeIh4hbIhCgwIg7goIg7gngAnDd2IDYBnICQBKIBBAiIBDgrIhAgjQhegwg3gbIjchngA0vYVIBJAcICjA+QB2AsBzAuIAzgtQh0guh4gsQhtgng2gVIhIgcgEghxASJIBAAkQBNArBDAiQBqA2BuA0IAzgmQhtgzhqg1QhCghhNgpIg/gkgEgXaBDpQDghmC0hnQCuhkByhWIA+gvQAnggARgQQAygrAugxQBWhgAhhUIAGgTQAehegchnQgniKiSidQicinkMiwQkBiqlyiyIjOheQhrgviVhHQkJh+jriFQjhiAjDiDIAZgZIAQgPQDJCHDlCAQDhB/EPCAQCMBBBzAyIDQBeQF6CzEJCpQEWCyCmCrQCdCiAyCSQAqB7giBzQgeBihWBpQglAtg8A5QgRASgoAiIgfAaIghAaQh1BcixBrQh+BLiaBNgEgiBAL6QgBgLgDgKQBphFBgg5QAhgUAQgLQAagTAPgUQATgYAEgcQAGgfgOgYQgNgZgegLQgcgLgeAEQgaAEgeANQgTAJghATIjVB+QAigpAPgfQATgsgNgkQgJgagbgRQgZgQgfgCQgxgDg/AhQgHgwgugcQgVgNgWgEQCVgrCXgjQBegXBGgIQAsAvA5AxQBnBaCKBXQBqBBB6BBIg6AIQjCAgjlBcQhOAfhzA2QAGgUgBgTgA6lG2QiKhUhohYQg2gtgqgsIAYgBIA8gBQAkAjAsAjQBnBUCIBQQCEBPCfBMIhqANQiDhCh3hJgA5oqxIAAAAIALAhIgCABIgJgigEAT/gvsIAAAAIgBAAgEAGdhDjIAFgCIABAGIgGgEgEAGZhDmIAIgCIAAACIgGACIgCgCg");
	this.shape_18.setTransform(434.4,899.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EArHBDoIANgdQBLi9AcjCQAejPgajLQgbjRhYjQQhZjNiRjDQkOlsnVlHQmSkZojj7QjshtkXhsQkBhikThdIj5hPQhRgZh3gmQjchLijhCIhZgkIA9gLIA9AYQCvBFDOBDQBYAdBwAhID7BPQEMBYEOBmQElBxDlBnQIrD8GbEbQHeFKEaFyQCXDJBcDQQBdDSAfDYQAeDPgdDVQgZDAhMDJIgEAKgEAPWBDoIgEgBQA9hJAvhMIAig3IA0hiICGAWIg1BmIgQAdIgSAdQgfAzg0BGgEgS8BDoQCZhOB/hKQCxhsB1hbIAggaIAggaQAngiASgSQA8g6AlgsQBVhpAehjQAihygph7QgyiSieiiQimiskWixQkIiql7izIjPhdQh0gyiLhBQkQiAjhh/QjkiAjJiHIAngiQDFCDDvCFQDoCAEHB6QCNBBBxAwIDSBdQGGC0EMCoQEgC0CyCtQCpCmA+CbQA0CEgbB/QgXBshXB2QhRBtiMB0QiDBtioBpQhPAxhYAxgEATxA6dIADgNQAEgWABgPIAHhuQgChIgFgnIgFglIgDgNIB/gIIADAOIAFAmQAIAtACBHIgFB0QgBAQgEAWIgDAOgEAR5AwPQgNgZgQgYIgjg3QgggvgHgIIgkgvIgcgiIgKgMIBogfIAKANIAdAhIAnAyIApA4QAPATAXAnQAPAWAQAdIAbAyIh1AUgEAK8AoNQgKgKgagVIhzhZIhAguIg5goIg5gmIBOgqIA7AnIA8AoIBCAvIB3BbIAmAfIAOAMIhbAlgEgAsAglIiRhJIjYhnIA7gtIDdBnQA3AaBcAxIBCAjIhFArgAwUZuIijg+IhJgcIAwgrIBJAcQA2AVBsAnQB4AsB1AuIgzAtQhzgvh2grgA9zT4QhDghhNgrIhAgkIA2ghIBAAkQBMApBDAhQBpA1BuAzIgzAlQhvgzhqg3gA6ZHEQiLhWhnhaQg4gxgsgvIAngEQAqAsA2AtQBoBXCJBVQB4BJCCBCIg4AHQh7hBhphCgA48q6IADAHIgBABIgCgIgEAHKhDlIAGgCIAAABIgFACIgBgBg");
	this.shape_19.setTransform(429.7,899.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#444444").s().p("AZVcWQicinkMixQkBiplxizIjOhdQhrgwiWhGQkQiDjiiAQj6iNjfiaQjxioi9iqQhfhVhihnQhhhphJhhQgbgmgagmQAjgvAugrQBBBTBNBUQBfBkBiBYQC/CtDvClQDZCWEACRQDqCEEIB/QCWBGBrAwIDOBdQFxCzEBCpQEMCxCcCnQCTCcAmCLQAdBmgeBeQgniIiRiagA8bp1IADgCIgDADIAAgBgADs6tQAMAJANAGIgPAPIgKgegAGI8IQgCgdgNgnIgJgaQAggUALggQARAAARgHQAJgEAIgGIABADIAHA6QAEAaAGAUIgJAFIhAApIgPAKIAAAAgAKa/HQgMg4gOg3IADgBQAWBIAQBGIgJAEIgGgig");
	this.shape_20.setTransform(207.1,1044);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("EAxfBDoIANgdQBLi9AcjCQAejPgajLQgbjRhYjQQhZjNiRjDQkOlsnVlHQmSkZojj7QjshtkXhsQkBhikUhdIj4hPQhRgZh3gmQjchLijhCQi7hLiihPQimhTiJhWQiLhWhnhaQg4gxgsgvIAngEQAqAsA2AtQBoBXCJBVQCPBXCgBOQCmBQC2BGQCvBFDOBDQBYAdBwAhID6BPQENBYEOBmQElBxDlBnQIrD8GbEbQHeFKEaFyQCXDJBcDQQBdDSAfDYQAeDPgdDVQgZDAhMDJIgEAKgEAVuBDoIgEgBQA9hJAvhMIAig3IA0hiICGAWIg1BmIgQAdIgSAdQgfAzg0BGgEgMkBDoQCZhOB/hKQCxhsB1hbIAggaIAggaQAngiASgSQA8g6AlgsQBUhpAehjQAihygph7QgyiSidiiQimiskWixQkIiql7izIjPhdQh0gyiLhBQkQiAjhh/Qj7iNjaiVQjtiii/iqQhlhchahdQhXhehGhaIAoggIABAAQBJBfBfBlQBhBkBdBSQC9CnDsCgQDSCNEBCQQDoCAEHB6QCNBBBxAwIDSBdQGGC0EMCoQEgC0CyCtQCoCmA+CbQA0CEgbB/QgXBshXB2QhRBtiLB0QiDBtioBpQhPAxhYAxgEAaJA6dIADgNQAEgWABgPIAHhuQgChIgFgnIgFglIgDgNIB/gIIADAOIAFAmQAIAtACBHIgFB0QgBAQgEAWIgDAOgEAYRAwPQgNgZgQgYIgjg3QgggvgHgIIgkgvIgcgiIgKgMIBogfIAKANIAdAhIAnAyIApA4QAPATAXAnQAPAWAQAdIAbAyIh1AUgEARUAoNQgKgKgagVIhzhZIhAguIg5goIg5gmIBOgqIA7AnIA8AoIBCAvIB3BbIAmAfIAOAMIhbAlgEAFrAglIiRhJIjYhnIA7gtIDdBnQA3AaBdAxIBCAjIhFArgAp8ZuIijg+IhJgcIAwgrIBJAcQA2AVBsAnQB4AsB1AuIgzAtQhzgvh2grgA3bT4QhDghhNgrIhAgkIA2ghIBAAkQBMApBDAhQBpA1BuAzIgzAlQhvgzhqg3gEgjtAL2IhfhZIA7gUICaCHICrCBIg5AcgAykq6IADAHIgBABIgCgIgEANihDlIAGgCIAAABIgFACIgBgBg");
	this.shape_21.setTransform(388.9,899.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],-17.1,-468.1,-17.1,433.7).s().p("EAynBDpIAEgKQBMjJAZi/QAdjVgejQQgfjXhdjTQhcjPiXjJQkalznelKQmbkborj7QjlhoklhxQkOhmkNhXIj6hPQhwgihYgdQjOhDivhFQi2hGimhQQighOiPhXQiJhUhohYQg2gtgqgsIAXgBIA8gBQAlAjAsAjQBnBUCHBQQCHBRCkBNQCkBNC0BFQClA/DVBEQBlAgBhAcID8BNQEVBZEOBlQEjBuDxBsQI2D9GlEgQHtFQEjF7QCfDOBeDWQBhDXAhDgQAgDWgcDbQgYDDhJDFgEAXaBDpQA0hGAfgyIASgeIAQgdIA1hmIiGgWIg0BiIgiA4QgvBLg9BJIAEABI+oAAQBYgxBPgxQCohpCDhsQCMh0BQhtQBXh3AXhsQAbh/g0iEQg+iaioimQiyiukgi0QkMiomGi0IjShcQhxgxiNhBQkHh6joiAQkBiPjSiOQjsigi9inQhdhShhhkQhfhlhJheIgBgBIAEgDQBshQC4hZQJnkrKZicQBegXBGgIQAsAvA4AxQBnBaCLBXQCJBVCmBTQCiBPC7BLQCjBDDcBKQB3AnBRAYID4BPQEUBdEBBiQEXBsDsBtQIjD8GSEYQHVFIEOFrQCRDDBZDOQBYDQAbDRQAaDKgeDQQgcDBhLC9IgNAdgEAZbA1dIADAOIAFAkQAFAnACBIIgHBuQgBAPgEAWIgDANICEAIIADgPQAEgWABgQIAFh0QgChHgIgtIgFgmIgDgOgEAUyAsUIAKANIAcAhIAkAvQAHAJAgAuIAjA4QAQAYANAYIAZAwIB1gUIgbgyQgQgdgPgWQgXgmgPgTIgpg5IgngxIgdgiIgKgNgEALdAkaIA5AmIA5AoIBAAvIBzBZQAaAUAKAKIAOAMIBbgmIgOgMIgmgeIh3hbIhCgwIg8goIg7gngAgrd2IDXBnICRBKIBAAiIBFgrIhCgjQhdgwg3gbIjdhngAuWYVIBJAcICjA+QB2AsBzAuIAzgtQh1guh4gsQhsgng2gVIhJgcgA7ZSJIBAAkQBNArBDAiQBqA2BvA0IAzgmQhugzhpg1QhDghhMgpIhAgkgEgl6AKfIBfBZIDoC2IA5gcIiriAIiaiIgEgRBBDpQDghmC0hnQCthkByhWIA/gvQAnggAQgQQAzgrAtgxQBWhgAhhUIAHgTQAehegdhnQgmiKiTidQicinkMiwQkBiqlxiyIjOheQhrgviWhHQkJh+jqiFQkAiRjZiWQjvimi/isQhihYhfhkQhNhVhBhTQAUgTAXgTQBGBaBXBeQBaBeBlBbQC/CqDtCiQDaCVD7CNQDhB/EQCAQCLBBB0AyIDPBeQF7CzEICpQEWCyCmCrQCeCiAxCSQApB7giBzQgeBihUBpQglAtg8A5QgSASgnAiIggAaIggAaQh1BcixBrQh/BLiZBNgAzQqxIABAAIALAhIgDABIgJgigEAaYgvsIAAAAIgBAAgEAM1hDjIAFgCIACAGIgHgEgEAMyhDmIAHgCIABACIgGACIgCgCg");
	this.shape_22.setTransform(393.5,899.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("AagcWQicinkMixQkBiplyizIjOhdQhrgwiVhGQkQiDjjiAQj5iNjgiaQjxioi9iqQhfhVhhhnQhhhphJhhQhQhrg/hvQg/hzgqh3QgohygNhzQgMhhAAi7QAKCcA3CcQAqB3A/BzQA/BvBQBrQBMBkBeBmQBeBkBiBYQDACtDuClQDaCWD/CRQDrCEEIB/QCVBGBrAwIDOBdQFyCzEBCpQEMCxCcCnQCSCcAnCLQAcBmgeBeQgniIiQiagAE26tQAMAJANAGIgOAPIgLgegAHT8IQgDgdgNgnIgJgaQAhgUAKggQASAAAQgHQAKgEAIgGIAAADIAHA6QAFAaAGAUIgKAFIg/ApIgPAKIAAAAgALk/HQgLg4gOg3IACgBQAWBIAQBGIgIAEIgHgig");
	this.shape_23.setTransform(199.7,1044);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("EA1SBDpIAEgKQBMjJAZi/QAdjVgejQQgfjXhdjTQhcjPiXjJQkalznelKQmbkborj7QjlhoklhxQkOhmkNhXIj7hPQhvgihYgdQjOhDivhFQi2hGimhQQighOiPhXQiJhUhohYQg5gwgtgvQANABAMgCQAXgFARgOQAuAuA7AwQBnBUCHBQQCHBRCkBNQCkBNC0BFQClA/DVBEQBkAgBhAcID9BNQEVBZEOBlQEjBuDxBsQI2D9GlEgQHtFQEjF7QCfDOBeDWQBhDXAhDgQAgDWgcDbQgYDDhJDFgEAaFBDpQA0hGAfgyIASgeIAQgdIA1hmIiGgWIg0BiIgiA4QgvBLg9BJIAEABI+oAAQBYgxBPgxQCohpCChsQCMh0BRhtQBXh3AXhsQAbh/g0iEQg+iaipimQixiukgi0QkMiomGi0IjShcQhxgxiNhBQkHh6joiAQkBiPjSiOQjsigi9inQhdhShhhkQhfhlhJheQhThug6hkQhAhwgphxQhZj0AajwQAMh8Avh7QAdhMAphJQAqgCA/AAQDNgCCFAFQC4AGCYAUQA/AIA7ALIgaAsQgkBFgOArQgJAagDALIgEAPIA5AEIAEgNQABgGAKgfQAMgnAihEIAagsQEIA3DNBuQBAAjAaAgQAKANAfA6QAYAsAaASQAkAZAwgPQAvgOAQgqQANgggJgoIAKAKQgEAwAMAwQAWBUA8BSQA8BWBpBaQBnBaCLBXQCJBVCmBTQCiBPC7BLQCjBDDcBKQB3AnBQAYID5BPQEUBdEBBiQEXBsDsBtQIjD8GSEYQHVFIEOFrQCRDDBZDOQBYDQAbDRQAaDKgeDQQgcDBhLC9IgNAdgEAcGA1dIADAOIAFAkQAFAnACBIIgHBuQgBAPgEAWIgDANICEAIIADgPQAEgWABgQIAFh0QgChHgIgtIgFgmIgDgOgEAXdAsUIAKANIAcAhIAkAvQAHAJAgAuIAjA4QAQAYANAYIAZAwIB1gUIgbgyQgQgdgPgWQgXgmgPgTIgpg5IgngxIgdgiIgKgNgEAOIAkaIA5AmIA5AoIBAAvIBzBZQAaAUAKAKIAOAMIBbgmIgOgMIgmgeIh3hbIhCgwIg8goIg7gngAB/d2IDYBnICRBKIBAAiIBFgrIhCgjQhdgwg3gbIjdhngArrYVIBJAcICjA+QB2AsBzAuIAzgtQh1guh4gsQhsgng2gVIhJgcgA4uSJIBAAkQBNArBDAiQBqA2BvA0IAzgmQhugzhpg1QhDghhMgpIhAgkgEgjPAKfIBfBZIDoC2IA5gcIiriAIiaiIgEgo5ABOIAMA0QATBCAVAuQAiBRA0BPIA9gOQg0hMgihPQgWgxgSg8IgMgygEgOWBDpQDghmC0hnQCthkByhWIA/gvQAnggAQgQQAzgrAtgxQBVhgAhhUIAHgTQAehegdhnQgmiKiSidQicinkMiwQkBiqlxiyIjOheQhrgviWhHQkJh+jqiFQkAiRjZiWQjvimi/isQhihYhfhkQhehnhMhkQhPhqg/hwQg/hygqh3Qg3idgKicQgGhfALheQAPiBAyiAQAZhBAhg+QAegFAhgDQhpC/gWDJQgcD3BaD1QAoBzBAByQA6BnBTBvQBLBhBeBmQBaBeBlBbQC/CqDtCiQDaCVD7CNQDhB/EQCAQCLBBB0AyIDPBeQF7CzEICpQEWCyClCrQCeCiAyCSQApB7giBzQgeBihVBpQglAtg8A5QgRASgnAiIggAaIggAaQh1BcixBrQh/BLiZBNgA5MhAQgLgogBgoIABAAQAnBxAUBKQggg0gQg3gAwlqxIABAAIALAhIgDABIgJgigEAdDgvsIAAAAIgBAAgEAPghDjIAFgCIACAGIgHgEgEAPdhDmIAHgCIABACIgGACIgCgCg");
	this.shape_24.setTransform(376.4,899.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("EA0CBDoIANgdQBLi9AcjCQAejPgajLQgbjRhYjQQhZjNiRjDQkOlsnVlHQmSkZojj7QjshtkXhsQkBhikUhdIj5hPQhRgZh2gmQjchLijhCQi7hLiihPQimhTiJhWQiLhWhnhaQhphbg8hVQg8hTgWhTQgMgwAEgwQAHAGAIAFIAOAGQAAAoAMAnQAQA4AgA0IAEAOQAIAgAFANQAJAZAOAPQAQARAWAIQALADAKABQAsAvA6AwQBoBXCJBVQCPBXCgBOQCmBQC2BGQCvBFDOBDQBXAdBwAhID7BPQENBYEOBmQElBxDlBnQIrD8GbEbQHeFKEaFyQCXDJBcDQQBdDSAfDYQAeDPgdDVQgZDAhMDJIgEAKgEAYRBDoIgEgBQA9hJAvhMIAig3IA0hiICGAWIg1BmIgQAdIgSAdQgfAzg0BGgEgKBBDoQCZhOB/hKQCxhsB1hbIAggaIAggaQAmgiASgSQA8g6AlgsQBVhpAehjQAihygph7QgyiSieiiQiliskWixQkIiql7izIjPhdQh0gyiLhBQkQiAjhh/Qj7iNjaiVQjtiii/iqQhlhchahdQhehmhLhhQhThwg6hmQhAhzgohyQhaj2Acj2QAVjJBpi/IAkgDIARgBQgoBJgdBLQgvB8gMB8QgaDwBZD0QApBwBABxQA6BkBTBtQBJBfBfBlQBhBkBdBSQC9CnDsCgQDSCNEBCQQDoCAEHB6QCNBBBxAwIDSBdQGGC0EMCoQEgC0CxCtQCpCmA+CbQA0CEgbB/QgXBshXB2QhRBtiMB0QiCBtioBpQhPAxhYAxgEAcsA6dIADgNQAEgWABgPIAHhuQgChIgFgnIgFglIgDgNIB/gIIADAOIAFAmQAIAtACBHIgFB0QgBAQgEAWIgDAOgEAa0AwPQgNgZgQgYIgjg3QgggvgHgIIgkgvIgcgiIgKgMIBogfIAKANIAdAhIAnAyIApA4QAPATAXAnQAPAWAQAdIAbAyIh1AUgEAT3AoNQgKgKgagVIhzhZIhAguIg5goIg5gmIBOgqIA7AnIA8AoIBCAvIB3BbIAmAfIAOAMIhbAlgEAIOAglIiRhJIjYhnIA7gtIDdBnQA3AaBdAxIBCAjIhFArgAnZZuIijg+IhJgcIAwgrIBJAcQA2AVBsAnQB4AsB1AuIgzAtQhzgvh2grgA04T4QhDghhNgrIhAgkIA2ghIBAAkQBMApBDAhQBpA1BuAzIgzAlQhvgzhqg3gEghKAL2IhfhZIA7gUICaCHICrCBIg5AcgEgnfADxQgVgugThDIgMgzIA9gEIAMAxQASA8AWAyQAiBPA0BMIg9ANQg0hOgihRgEgoKgDfIAEgPQADgKAJgbQAOgqAkhFIAagsIA0AKIgaAsQgiBEgMAoQgKAfgBAFIgEAOgAwBq6IADAHIgBABIgCgIgEAQFhDlIAGgCIAAABIgFACIgBgBg");
	this.shape_25.setTransform(372.6,899.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("EA0CBDoIANgdQBLi9AcjCQAejPgajLQgbjRhYjQQhZjNiRjDQkOlsnVlHQmSkZojj7QjshtkXhsQkBhikUhdIj5hPQhRgZh2gmQjchLijhCQi7hLiihPQimhTiJhWQiLhWhnhaQhphbg8hVQg8hTgWhTQgMgwAEgwQAHAGAIAFIAOAGQAAAoAMAnQAQA4AgA0IAEAOQAIAgAFANQAJAZAOAPQAQARAWAIQALADAKABQAsAvA6AwQBoBXCJBVQCPBXCgBOQCmBQC2BGQCvBFDOBDQBXAdBwAhID7BPQENBYEOBmQElBxDlBnQIrD8GbEbQHeFKEaFyQCXDJBcDQQBdDSAfDYQAeDPgdDVQgZDAhMDJIgEAKgEAYRBDoIgEgBQA9hJAvhMIAig3IA0hiICGAWIg1BmIgQAdIgSAdQgfAzg0BGgEgKBBDoQCZhOB/hKQCxhsB1hbIAggaIAggaQAmgiASgSQA8g6AlgsQBVhpAehjQAihygph7QgyiSieiiQiliskWixQkIiql7izIjPhdQh0gyiLhBQkQiAjhh/Qj7iNjaiVQjtiii/iqQhlhchahdQhehmhLhhQhThwg6hmQhAhzgohyQhaj2Acj2QAbj/CijvQCWjgENjFQB5hZCQhQQAggTBNgoIAmAMQhQAqglAVQiQBRhzBXQkHDAiTDfQhNBzgvB6QgvB8gMB8QgaDwBZD0QApBwBABxQA6BkBTBtQBJBfBfBlQBhBkBdBSQC9CnDsCgQDSCNEBCQQDoCAEHB6QCNBBBxAwIDSBdQGGC0EMCoQEgC0CxCtQCpCmA+CbQA0CEgbB/QgXBshXB2QhRBtiMB0QiCBtioBpQhPAxhYAxgEAcsA6dIADgNQAEgWABgPIAHhuQgChIgFgnIgFglIgDgNIB/gIIADAOIAFAmQAIAtACBHIgFB0QgBAQgEAWIgDAOgEAa0AwPQgNgZgQgYIgjg3QgggvgHgIIgkgvIgcgiIgKgMIBogfIAKANIAdAhIAnAyIApA4QAPATAXAnQAPAWAQAdIAbAyIh1AUgEAT3AoNQgKgKgagVIhzhZIhAguIg5goIg5gmIBOgqIA7AnIA8AoIBCAvIB3BbIAmAfIAOAMIhbAlgEAIOAglIiRhJIjYhnIA7gtIDdBnQA3AaBdAxIBCAjIhFArgAnZZuIijg+IhJgcIAwgrIBJAcQA2AVBsAnQB4AsB1AuIgzAtQhzgvh2grgA04T4QhDghhNgrIhAgkIA2ghIBAAkQBMApBDAhQBpA1BuAzIgzAlQhvgzhqg3gEghKAL2IhfhZIA7gUICaCHICrCBIg5AcgEgnfADxQgVgugThDIgMgzIA9gEIAMAxQASA8AWAyQAiBPA0BMIg9ANQg0hOgihRgEgoKgDfIAEgPQADgKAJgbQAOgqAkhFQAlhBAhgqIAbgjIALgMIAwANIgKAOQgIAIgSAZQgcAkgoBEQgiBEgMAoQgKAfgBAFIgEAOgAwBq6IADAHIgBABIgCgIgEgg+gMVQAWgQAlgWIATgMIAWAdIgFACQgjAXgWAQgEAQFhDlIAGgCIAAABIgFACIgBgBg");
	this.shape_26.setTransform(372.6,899.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("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");
	this.shape_27.setTransform(376.4,899.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#444444").s().p("AagcWQicinkMixQkBiplyizIjOhdQhrgwiVhGQkQiDjjiAQj5iNjgiaQjxioi9iqQhfhVhhhnQhhhphJhhQhQhrg/hvQg/hzgqh3QgohygNhzQgMhhAAi7QAKCcA3CcQAqB3A/BzQA/BvBQBrQBMBkBeBmQBeBkBiBYQDACtDuClQDaCWD/CRQDrCEEIB/QCVBGBrAwIDOBdQFyCzEBCpQEMCxCcCnQCSCcAnCLQAcBmgeBeQgniIiQiagADU52QAPhKBBhPQAegmAzgsIAzgpQAkgbAWgOIA/goIBHgpQAigTBDggQAWBIAQBGQhfAtgsAZIhHAoIg/ApIg6ApIgzApQgzAsgeAmQg1BAgTA9QgVhAANhFg");
	this.shape_28.setTransform(199.7,1044);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("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");
	this.shape_29.setTransform(376.4,899.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("EA0CBDoIANgdQBLi9AcjCQAejPgajLQgbjRhYjQQhZjNiRjDQkOlsnVlHQmSkZojj7QjshtkXhsQkBhikUhdIj5hPQhRgZh2gmQjchLijhCQi7hLiihPQimhTiJhWQiLhWhnhaQhphbg8hVQg8hTgWhTQgUhPAXhQQAVhQBMhVQAjgoA4gtIA3grQAngcAXgNIBEgqQAvgcAbgNQAwgaBSglIAFAOQhSAmgoAWIhJApQgvAcgTANIg+ApIg1AqQg1AtgiAnQhIBVgUBNQgTBPAWBLQAYBSA7BOQA+BUBoBXQBoBXCJBVQCPBXCgBOQCmBQC2BGQCvBFDOBDQBXAdBwAhID7BPQENBYEOBmQElBxDlBnQIrD8GbEbQHeFKEaFyQCXDJBcDQQBdDSAfDYQAeDPgdDVQgZDAhMDJIgEAKgEAYRBDoIgEgBQA9hJAvhMIAig3IA0hiICGAWIg1BmIgQAdIgSAdQgfAzg0BGgEgKBBDoQCZhOB/hKQCxhsB1hbIAggaIAggaQAmgiASgSQA8g6AlgsQBVhpAehjQAihygph7QgyiSieiiQiliskWixQkIiql7izIjPhdQh0gyiLhBQkQiAjhh/Qj7iNjaiVQjtiii/iqQhlhchahdQhehmhLhhQhThwg6hmQhAhzgohyQhaj2Acj2QAbj/CijvQCWjgENjFQB5hZCQhQQAmgWBlg1QBqgzAmgQQAkgSBugtICVg5QB0grC3g4ICWgpIBDgSIAEAFIAOANIhDARQgyAOhjAdQisA0h8AuIiSA5QhwAughAPQgqAUhjAwQhhAygpAYQiQBRhzBXQkHDAiTDfQhNBzgvB6QgvB8gMB8QgaDwBZD0QApBwBABxQA6BkBTBtQBJBfBfBlQBhBkBdBSQC9CnDsCgQDSCNEBCQQDoCAEHB6QCNBBBxAwIDSBdQGGC0EMCoQEgC0CxCtQCpCmA+CbQA0CEgbB/QgXBshXB2QhRBtiMB0QiCBtioBpQhPAxhYAxgEAcsA6dIADgNQAEgWABgPIAHhuQgChIgFgnIgFglIgDgNIB/gIIADAOIAFAmQAIAtACBHIgFB0QgBAQgEAWIgDAOgEAa0AwPQgNgZgQgYIgjg3QgggvgHgIIgkgvIgcgiIgKgMIBogfIAKANIAdAhIAnAyIApA4QAPATAXAnQAPAWAQAdIAbAyIh1AUgEAT3AoNQgKgKgagVIhzhZIhAguIg5goIg5gmIBOgqIA7AnIA8AoIBCAvIB3BbIAmAfIAOAMIhbAlgEAIOAglIiRhJIjYhnIA7gtIDdBnQA3AaBdAxIBCAjIhFArgAnZZuIijg+IhJgcIAwgrIBJAcQA2AVBsAnQB4AsB1AuIgzAtQhzgvh2grgA04T4QhDghhNgrIhAgkIA2ghIBAAkQBMApBDAhQBpA1BuAzIgzAlQhvgzhqg3gEghKAL2IhfhZIA7gUICaCHICrCBIg5AcgEgnfADxQgVgugThDIgMgzIA9gEIAMAxQASA8AWAyQAiBPA0BMIg9ANQg0hOgihRgEgoKgDfIAEgPQADgKAJgbQAOgqAkhFQAlhBAhgqIAbgjIALgMIAwANIgKAOQgIAIgSAZQgcAkgoBEQgiBEgMAoQgKAfgBAFIgEAOgEgg+gMVQAWgQAlgWQAVgOAqgYIBMgqQA9giBXgpIAygXIAUgJIAbAXIgSAIIgyAXQhOAkhDAlQguAZgbARIg+AlQgjAXgWAQgAzxyVIAZgHIANAYIgRAGgEAQFhDlIAGgCIAAABIgFACIgBgBg");
	this.shape_30.setTransform(372.6,899.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#444444").s().p("AagefQicinkMixQkBiplyizIjOhdQhrgwiVhGQkQiDjjiAQj5iNjgiaQjxioi9iqQhfhWhhhmQhhhphJhhQhQhrg/hvQg/hzgqh3QgohygNhzQgMhhAAi7QAKCcA3CcQAqB3A/BzQA/BvBQBrQBMBkBeBmQBeBkBiBYQDACsDuCmQDaCWD/CRQDrCEEIB/QCVBGBrAwIDOBdQFyCzEBCpQEMCxCcCnQCSCcAnCLQAcBmgeBeQgniIiQiagADU3tQAPhKBBhPQAegmAzgsIAzgpQAkgbAWgOIA/goIBHgpQAvgaBtgzICxhJQBHgbCCgtQB/gsDBg7QAWBKAQBLQjIA9ieA1QiCAuhHAbIixBJQhtAygvAbIhHAoIg/ApIg6ApIgzApQgzAsgeAmQg1BAgTA9QgVhAANhFg");
	this.shape_31.setTransform(199.7,1030.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("EA0CBDoIANgdQBLi9AcjCQAejPgajLQgbjRhYjQQhZjNiRjDQkOlsnVlHQmSkZojj7QjshtkXhsQkBhikUhdIj5hPQhRgZh2gmQjchLijhCQi7hLiihPQimhTiJhWQiLhWhnhaQhphbg8hVQg8hTgWhTQgUhPAXhQQAVhQBMhVQAjgoA4gtIA3grQAngcAXgNIBEgqQAvgcAbgNQA6gfBpgvQAegMA7gZIBdgjQBXghB3gnQCNgvDCg6IAEALQjCA7iJAuQiMAvhAAYIhdAlIhYAlQhwAzgxAaIhJApQgvAcgTANIg+ApIg1AqQg1AtgiAnQhIBVgUBNQgTBPAWBLQAYBSA7BOQA+BUBoBXQBoBXCJBVQCPBXCgBOQCmBQC2BGQCvBFDOBDQBXAdBwAhID7BPQENBYEOBmQElBxDlBnQIrD8GbEbQHeFKEaFyQCXDJBcDQQBdDSAfDYQAeDPgdDVQgZDAhMDJIgEAKgEAYRBDoIgEgBQA9hJAvhMIAig3IA0hiICGAWIg1BmIgQAdIgSAdQgfAzg0BGgEgKBBDoQCZhOB/hKQCxhsB1hbIAggaIAggaQAmgiASgSQA8g6AlgsQBVhpAehjQAihygph7QgyiSieiiQiliskWixQkIiql7izIjPhdQh0gyiLhBQkQiAjhh/Qj7iNjaiVQjtiii/iqQhlhchahdQhehmhLhhQhThwg6hmQhAhzgohyQhaj2Acj2QAbj/CijvQCWjgENjFQB5hZCQhQQAmgWBlg1QBqgzAmgQQAkgSBugtICVg5QB0grC3g4ICWgpICVgnQBXgWDIgsQC4gnECgvIAVAPQkFAwi8ApQinAkh2AeIiTAmQgyAOhjAdQisA0h8AuIiSA5QhwAughAPQgqAUhjAwQhhAygpAYQiQBRhzBXQkHDAiTDfQhNBzgvB6QgvB8gMB8QgaDwBZD0QApBwBABxQA6BkBTBtQBJBfBfBlQBhBkBdBSQC9CnDsCgQDSCNEBCQQDoCAEHB6QCNBBBxAwIDSBdQGGC0EMCoQEgC0CxCtQCpCmA+CbQA0CEgbB/QgXBshXB2QhRBtiMB0QiCBtioBpQhPAxhYAxgEAcsA6dIADgNQAEgWABgPIAHhuQgChIgFgnIgFglIgDgNIB/gIIADAOIAFAmQAIAtACBHIgFB0QgBAQgEAWIgDAOgEAa0AwPQgNgZgQgYIgjg3QgggvgHgIIgkgvIgcgiIgKgMIBogfIAKANIAdAhIAnAyIApA4QAPATAXAnQAPAWAQAdIAbAyIh1AUgEAT3AoNQgKgKgagVIhzhZIhAguIg5goIg5gmIBOgqIA7AnIA8AoIBCAvIB3BbIAmAfIAOAMIhbAlgEAIOAglIiRhJIjYhnIA7gtIDdBnQA3AaBdAxIBCAjIhFArgAnZZuIijg+IhJgcIAwgrIBJAcQA2AVBsAnQB4AsB1AuIgzAtQhzgvh2grgA04T4QhDghhNgrIhAgkIA2ghIBAAkQBMApBDAhQBpA1BuAzIgzAlQhvgzhqg3gEghKAL2IhfhZIA7gUICaCHICrCBIg5AcgEgnfADxQgVgugThDIgMgzIA9gEIAMAxQASA8AWAyQAiBPA0BMIg9ANQg0hOgihRgEgoKgDfIAEgPQADgKAJgbQAOgqAkhFQAlhBAhgqIAbgjIALgMIAwANIgKAOQgIAIgSAZQgcAkgoBEQgiBEgMAoQgKAfgBAFIgEAOgEgg+gMVQAWgQAlgWQAVgOAqgYIBMgqQA9giBXgpIAygXIAUgJIAbAXIgSAIIgyAXQhOAkhDAlQguAZgbARIg+AlQgjAXgWAQgAzxyVIBPgXQAvgPB+gjQCAgiCCggIAPAVQiBAgh+AjQhpAdhDAVIhNAYgEAQFhDlIAGgCIAAABIgFACIgBgBg");
	this.shape_32.setTransform(372.6,899.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("EA1SBDpIAEgKQBMjJAZi/QAdjVgejQQgfjXhdjTQhcjPiXjJQkalznelKQmbkborj7QjlhoklhxQkOhmkNhXIj7hPQhvgihYgdQjOhDivhFQi2hGimhQQighOiPhXQiJhUhohYQhohXg+hUQg7hOgYhRQgWhMAThOQAUhOBIhUQAignA1gtIA1gqIA+gqQATgNAvgcIBJgpQAxgaBwgzIBYglIBdglQBAgYCMgvQCKguDBg6IAIAaQjBA8h/ArQiCAthHAbIixBKQhsAygwAbIhGAoIhAAoQgVAOglAcIgzApQgzAsgeAmQhBBPgOBKQgNBEAUBAIADAKQAbBLA6BJQA+BPBmBSQBnBUCHBQQCHBRCkBNQCkBNC0BFQClA/DVBEQBkAgBhAcID9BNQEVBZEOBlQEjBuDxBsQI2D9GlEgQHtFQEjF7QCfDOBeDWQBhDXAhDgQAgDWgcDbQgYDDhJDFgEAaFBDpQA0hGAfgyIASgeIAQgdIA1hmIiGgWIg0BiIgiA4QgvBLg9BJIAEABI+oAAQBYgxBPgxQCohpCChsQCMh0BRhtQBXh3AXhsQAbh/g0iEQg+iaipimQixiukgi0QkMiomGi0IjShcQhxgxiNhBQkHh6joiAQkBiPjSiOQjsigi9inQhdhShhhkQhfhlhJheQhThug6hkQhAhwgphxQhZj0AajwQAMh8Avh7QAvh7BNhzQCTjeEHjBQBzhWCQhSQApgXBhgzQBjgwAqgTQAhgPBwgvICSg5QB8guCsg0QBjgdAygOICTgmQB2geCngkQC9goEEgxIABABQAvAlA2A8QDHDcB5EVQAnBYAdBaQjCA6iOAvQh3AnhXAhIhdAjQg7AageALQhpAvg6AfQgbANgvAcIhEAqQgXANgnAcIg3ArQg4AtgjAoQhMBVgVBQQgXBQAUBPQAWBUA8BSQA8BWBpBaQBnBaCLBXQCJBVCmBTQCiBPC7BLQCjBDDcBKQB3AnBQAYID5BPQEUBdEBBiQEXBsDsBtQIjD8GSEYQHVFIEOFrQCRDDBZDOQBYDQAbDRQAaDKgeDQQgcDBhLC9IgNAdgEAcGA1dIADAOIAFAkQAFAnACBIIgHBuQgBAPgEAWIgDANICEAIIADgPQAEgWABgQIAFh0QgChHgIgtIgFgmIgDgOgEAXdAsUIAKANIAcAhIAkAvQAHAJAgAuIAjA4QAQAYANAYIAZAwIB1gUIgbgyQgQgdgPgWQgXgmgPgTIgpg5IgngxIgdgiIgKgNgEAOIAkaIA5AmIA5AoIBAAvIBzBZQAaAUAKAKIAOAMIBbgmIgOgMIgmgeIh3hbIhCgwIg8goIg7gngAB/d2IDYBnICRBKIBAAiIBFgrIhCgjQhdgwg3gbIjdhngArrYVIBJAcICjA+QB2AsBzAuIAzgtQh1guh4gsQhsgng2gVIhJgcgA4uSJIBAAkQBNArBDAiQBqA2BvA0IAzgmQhugzhpg1QhDghhMgpIhAgkgEgjPAKfIBfBZIDoC2IA5gcIiriAIiaiIgEgo5ABOIAMA0QATBCAVAuQAiBRA0BPIA9gOQg0hMgihPQgWgxgSg8IgMgygEgmNgIOIgbAiQghAqglBBQgkBFgOArQgJAagDALIgEAPIA5AEIAEgNQABgGAKgfQAMgnAihEQAohFAcgkQASgYAIgJIAKgNIgwgOgA7YvrIgyAWQhXAqg9AhIhMAqQgqAYgVAOQglAXgWAQIAmATQAWgQAjgWIA+gmQAbgQAugZQBDglBOglIAygXIASgIIgbgWgAwbzcQh+AjgvAOIhPAYIAVAWIBNgYQBDgUBpgeQB+gjCBggIgPgVQiCAgiAAjgEgOWBDpQDghmC0hnQCthkByhWIA/gvQAnggAQgQQAzgrAtgxQBVhgAhhUIAHgTQAehegdhnQgmiKiSidQicinkMiwQkBiqlxiyIjOheQhrgviWhHQkJh+jqiFQkAiRjZiWQjvimi/isQhihYhfhkQhehnhMhkQhPhqg/hwQg/hygqh3Qg3idgKicQgGhfALheQAPiBAyiAQAxiABSh4QCajjEUjJQB1hWCZhVQAugbBggxQBngxArgTICVg/ICWg4QB5gtC2g3ICZgqICWgmQCHghCaggQC0gmD+guIAaATQkCAvi5AoQjIAshXAVIiVAnIiWAqQi3A4h0ArIiVA4QhuAugkARQgmAQhqAzQhlA1gmAWQiQBRh5BYQkNDGiWDfQiiDvgbD/QgcD3BaD1QAoBzBAByQA6BnBTBvQBLBhBeBmQBaBeBlBbQC/CqDtCiQDaCVD7CNQDhB/EQCAQCLBBB0AyIDPBeQF7CzEICpQEWCyClCrQCeCiAyCSQApB7giBzQgeBihVBpQglAtg8A5QgRASgnAiIggAaIggAaQh1BcixBrQh/BLiZBNgEAdDgvsIAAAAIgBAAgEAPghDjIAFgCIACAGIgHgEgEAPdhDmIAHgCIABACIgGACIgCgCg");
	this.shape_33.setTransform(376.4,899.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#444444").s().p("AaCflQicinkMixQkBiplxizIjOhdQhrgwiWhGQkQiDjiiAQj6iNjfiaQjxioi9iqQhfhWhihnQhhhohJhhQhPhrg/hvQg/hzgqh3QgphygNhzQgLhhAAi7QAKCcA3CcQAqB3A/BzQA/BvBPBrQBMBkBeBmQBfBkBiBXQC/CtDvCmQDZCWEACRQDqCEEIB/QCWBGBrAwIDOBdQFxCzEBCpQEMCxCcCnQCTCcAmCLQAdBmgeBeQgniIiRiagAC32nQAOhKBBhPQAegmAzgsIAzgpQAlgbAVgOIBAgoIBGgpQAwgaBsgzICxhJQBHgbCCgtQCng5EXhUIFahmIACAiIADBCQACAYAFAhIlmBqQj+BMjABAQiCAuhHAbIixBJQhsAygwAbIhGAoIhAApIg6ApIgzApQgzAsgeAmQg0BBgUA8QgUhAANhFg");
	this.shape_34.setTransform(202.6,1023.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("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");
	this.shape_35.setTransform(376.4,899.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("EA0CBDoIANgdQBLi9AcjCQAejPgajLQgbjRhYjQQhZjNiRjDQkOlsnVlHQmSkZojj7QjshtkXhsQkBhikUhdIj5hPQhRgZh2gmQjchLijhCQi7hLiihPQimhTiJhWQiLhWhnhaQhphbg8hVQg8hTgWhTQgUhPAXhQQAVhQBMhVQAjgoA4gtIA3grQAngcAXgNIBEgqQAvgcAbgNQA6gfBpgvQAegMA7gZIBdgjQBXghB3gnQC2g8ENhPIFphoIABAFIABAFIllBoQkPBQiyA8QiMAvhAAYIhdAlIhYAlQhwAzgxAaIhJApQgvAcgTANIg+ApIg1AqQg1AtgiAnQhIBVgUBNQgTBPAWBLQAYBSA7BOQA+BUBoBXQBoBXCJBVQCPBXCgBOQCmBQC2BGQCvBFDOBDQBXAdBwAhID7BPQENBYEOBmQElBxDlBnQIrD8GbEbQHeFKEaFyQCXDJBcDQQBdDSAfDYQAeDPgdDVQgZDAhMDJIgEAKgEAYRBDoIgEgBQA9hJAvhMIAig3IA0hiICGAWIg1BmIgQAdIgSAdQgfAzg0BGgEgKBBDoQCZhOB/hKQCxhsB1hbIAggaIAggaQAmgiASgSQA8g6AlgsQBVhpAehjQAihygph7QgyiSieiiQiliskWixQkIiql7izIjPhdQh0gyiLhBQkQiAjhh/Qj7iNjaiVQjtiii/iqQhlhchahdQhehmhLhhQhThwg6hmQhAhzgohyQhaj2Acj2QAbj/CijvQCWjgENjFQB5hZCQhQQAmgWBlg1QBqgzAmgQQAkgSBugtICVg5QB0grC3g4ICWgpICVgnQBXgWDIgsQDcguFDg7IHmhVIAGAEIAKAJInrBZQk/A6jdAwQinAkh2AeIiTAmQgyAOhjAdQisA0h8AuIiSA5QhwAughAPQgqAUhjAwQhhAygpAYQiQBRhzBXQkHDAiTDfQhNBzgvB6QgvB8gMB8QgaDwBZD0QApBwBABxQA6BkBTBtQBJBfBfBlQBhBkBdBSQC9CnDsCgQDSCNEBCQQDoCAEHB6QCNBBBxAwIDSBdQGGC0EMCoQEgC0CxCtQCpCmA+CbQA0CEgbB/QgXBshXB2QhRBtiMB0QiCBtioBpQhPAxhYAxgEAcsA6dIADgNQAEgWABgPIAHhuQgChIgFgnIgFglIgDgNIB/gIIADAOIAFAmQAIAtACBHIgFB0QgBAQgEAWIgDAOgEAa0AwPQgNgZgQgYIgjg3QgggvgHgIIgkgvIgcgiIgKgMIBogfIAKANIAdAhIAnAyIApA4QAPATAXAnQAPAWAQAdIAbAyIh1AUgEAT3AoNQgKgKgagVIhzhZIhAguIg5goIg5gmIBOgqIA7AnIA8AoIBCAvIB3BbIAmAfIAOAMIhbAlgEAIOAglIiRhJIjYhnIA7gtIDdBnQA3AaBdAxIBCAjIhFArgAnZZuIijg+IhJgcIAwgrIBJAcQA2AVBsAnQB4AsB1AuIgzAtQhzgvh2grgA04T4QhDghhNgrIhAgkIA2ghIBAAkQBMApBDAhQBpA1BuAzIgzAlQhvgzhqg3gEghKAL2IhfhZIA7gUICaCHICrCBIg5AcgEgnfADxQgVgugThDIgMgzIA9gEIAMAxQASA8AWAyQAiBPA0BMIg9ANQg0hOgihRgEgoKgDfIAEgPQADgKAJgbQAOgqAkhFQAlhBAhgqIAbgjIALgMIAwANIgKAOQgIAIgSAZQgcAkgoBEQgiBEgMAoQgKAfgBAFIgEAOgEgg+gMVQAWgQAlgWQAVgOAqgYIBMgqQA9giBXgpIAygXIAUgJIAbAXIgSAIIgyAXQhOAkhDAlQguAZgbARIg+AlQgjAXgWAQgAzxyVIBPgXQAvgPB+gjQCAgiCCggIAPAVQiBAgh+AjQhpAdhDAVIhNAYgAkf2PIEGg8IBVgUIAIATIlVBRgEAQFhDlIAGgCIAAABIgFACIgBgBg");
	this.shape_36.setTransform(372.6,899.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#444444").s().p("EAVUAg7QicinkMiwQkBiqlyiyIjOheQhrgviUhHQkRiCjjiBQj5iNjgiaQjxini9irQhfhVhhhnQhhhphJhhQhQhqg/hwQg/hygqh3QgohzgNhyQgMhiAAi7QAKCdA3CcQAqB3A/ByQA/BwBQBqQBMBkBeBnQBeBjBiBYQDACsDuCmQDaCWD/CRQDrCFEJB+QCUBHBrAvIDOBeQFyCyEBCqQEMCwCcCnQCSCdAnCKQAcBngeBeQgniJiQiagAh31QQAPhKBBhPQAegmAygsIAzgpQAkgcAWgOIA/goIBHgoQAvgbBtgyICxhKQBHgbCCgtQCmg4EYhVIHbiMQEShSCqg1QAXBJAVBKIgDABQi2A6kvBaInbCMQj+BMjABBQiCAthHAbIixBJQhtAzgvAbIhHAoIg/ApIg6AoIgzAqQgyArgeAmQg1BBgUA8QgUhAANhEg");
	this.shape_37.setTransform(232.9,1014.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("EA0CBDoIANgdQBLi9AcjCQAejPgajLQgbjRhYjQQhZjNiRjDQkOlsnVlHQmSkZojj7QjshtkXhsQkBhikUhdIj5hPQhRgZh2gmQjchLijhCQi7hLiihPQimhTiJhWQiLhWhnhaQhphbg8hVQg8hTgWhTQgUhPAXhQQAVhQBMhVQAjgoA4gtIA3grQAngcAXgNIBEgqQAvgcAbgNQA6gfBpgvQAegMA7gZIBdgjQBXghB3gnQC2g8ENhPIHbiJQEehTCpg1IADAKQixA3kTBQInbCKQkPBQiyA8QiMAvhAAYIhdAlIhYAlQhwAzgxAaIhJApQgvAcgTANIg+ApIg1AqQg1AtgiAnQhIBVgUBNQgTBPAWBLQAYBSA7BOQA+BUBoBXQBoBXCJBVQCPBXCgBOQCmBQC2BGQCvBFDOBDQBXAdBwAhID7BPQENBYEOBmQElBxDlBnQIrD8GbEbQHeFKEaFyQCXDJBcDQQBdDSAfDYQAeDPgdDVQgZDAhMDJIgEAKgEAYRBDoIgEgBQA9hJAvhMIAig3IA0hiICGAWIg1BmIgQAdIgSAdQgfAzg0BGgEgKBBDoQCZhOB/hKQCxhsB1hbIAggaIAggaQAmgiASgSQA8g6AlgsQBVhpAehjQAihygph7QgyiSieiiQiliskWixQkIiql7izIjPhdQh0gyiLhBQkQiAjhh/Qj7iNjaiVQjtiii/iqQhlhchahdQhehmhLhhQhThwg6hmQhAhzgohyQhaj2Acj2QAbj/CijvQCWjgENjFQB5hZCQhQQAmgWBlg1QBqgzAmgQQAkgSBugtICVg5QB0grC3g4ICWgpICVgnQBXgWDIgsQDcguFDg7IH/haQD4gsCsggIASALQirAhkBAvIn+BcQk/A6jdAwQinAkh2AeIiTAmQgyAOhjAdQisA0h8AuIiSA5QhwAughAPQgqAUhjAwQhhAygpAYQiQBRhzBXQkHDAiTDfQhNBzgvB6QgvB8gMB8QgaDwBZD0QApBwBABxQA6BkBTBtQBJBfBfBlQBhBkBdBSQC9CnDsCgQDSCNEBCQQDoCAEHB6QCNBBBxAwIDSBdQGGC0EMCoQEgC0CxCtQCpCmA+CbQA0CEgbB/QgXBshXB2QhRBtiMB0QiCBtioBpQhPAxhYAxgEAcsA6dIADgNQAEgWABgPIAHhuQgChIgFgnIgFglIgDgNIB/gIIADAOIAFAmQAIAtACBHIgFB0QgBAQgEAWIgDAOgEAa0AwPQgNgZgQgYIgjg3QgggvgHgIIgkgvIgcgiIgKgMIBogfIAKANIAdAhIAnAyIApA4QAPATAXAnQAPAWAQAdIAbAyIh1AUgEAT3AoNQgKgKgagVIhzhZIhAguIg5goIg5gmIBOgqIA7AnIA8AoIBCAvIB3BbIAmAfIAOAMIhbAlgEAIOAglIiRhJIjYhnIA7gtIDdBnQA3AaBdAxIBCAjIhFArgAnZZuIijg+IhJgcIAwgrIBJAcQA2AVBsAnQB4AsB1AuIgzAtQhzgvh2grgA04T4QhDghhNgrIhAgkIA2ghIBAAkQBMApBDAhQBpA1BuAzIgzAlQhvgzhqg3gEghKAL2IhfhZIA7gUICaCHICrCBIg5AcgEgnfADxQgVgugThDIgMgzIA9gEIAMAxQASA8AWAyQAiBPA0BMIg9ANQg0hOgihRgEgoKgDfIAEgPQADgKAJgbQAOgqAkhFQAlhBAhgqIAbgjIALgMIAwANIgKAOQgIAIgSAZQgcAkgoBEQgiBEgMAoQgKAfgBAFIgEAOgEgg+gMVQAWgQAlgWQAVgOAqgYIBMgqQA9giBXgpIAygXIAUgJIAbAXIgSAIIgyAXQhOAkhDAlQguAZgbARIg+AlQgjAXgWAQgAzxyVIBPgXQAvgPB+gjQCAgiCCggIAPAVQiBAgh+AjQhpAdhDAVIhNAYgAkf2PIEGg8IEDg+IANATIoIB7gEAQFhDlIAGgCIAAABIgFACIgBgBg");
	this.shape_38.setTransform(372.6,899.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("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");
	this.shape_39.setTransform(376.4,899.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#444444").s().p("EAP6Ai7QicinkMixQkBiplwizIjOhdQhrgwiWhGQkRiDjiiAQj6iNjfiaQjxioi9iqQhfhWhihnQhhhphJhhQhPhqg/hvQg/hzgqh3QgphygNhzQgLhhAAi7QAJCcA4CcQAqB3A/BzQA/BvBPBrQBMBkBeBlQBfBkBiBYQC/CtDvCmQDZCWEACRQDqCEEJB/QCWBGBrAwIDOBdQFwCzEBCpQEMCxCcCnQCTCcAmCLQAcBmgdBeQgoiIiQiagAnQzRQAOhKBBhPQAegmAzgsIAzgpQAlgbAVgOIBAgoIBGgpQAwgaBrgzICxhJQBHgbCCgtQCng5EXhUIHbiNQE1hbCwg4QENhWDZhRQBkgmBaglIAAAIQAAA+AEAWIANAzIABAKQhiAphuApQjZBSkNBVQi1A6kwBaInbCNQj+BMjABAQiCAuhHAbIixBJQhrAygwAbIhGAoIhAApIg6ApIgzApQgzAsgeAmQg1BBgTA8QgUhAANhFg");
	this.shape_40.setTransform(267.4,1001.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("EA1SBDpIAEgKQBMjJAZi/QAdjVgejQQgfjXhdjTQhcjPiXjJQkalznelKQmbkborj7QjlhoklhxQkOhmkNhXIj7hPQhvgihYgdQjOhDivhFQi2hGimhQQighOiPhXQiJhUhohYQhohXg+hUQg7hOgYhRQgWhMAThOQAUhOBIhUQAignA1gtIA1gqIA+gqQATgNAvgcIBJgpQAxgaBwgzIBYglIBdglQBAgYCMgvQCyg7EPhQIHbiLQEthXC4g6QEMhUDZhRQBtgoBhgpIAAAXQhaAlhkAmQjZBRkNBWQiwA4k1BcInaCMQkXBVinA4QiCAthHAbIixBKQhsAygwAbIhGAoIhAAoQgVAOglAcIgzApQgzAsgeAmQhBBPgOBKQgNBEAUBAIADAKQAbBLA6BJQA+BPBmBSQBnBUCHBQQCHBRCkBNQCkBNC0BFQClA/DVBEQBkAgBhAcID9BNQEVBZEOBlQEjBuDxBsQI2D9GlEgQHtFQEjF7QCfDOBeDWQBhDXAhDgQAgDWgcDbQgYDDhJDFgEAaFBDpQA0hGAfgyIASgeIAQgdIA1hmIiGgWIg0BiIgiA4QgvBLg9BJIAEABI+oAAQBYgxBPgxQCohpCChsQCMh0BRhtQBXh3AXhsQAbh/g0iEQg+iaipimQixiukgi0QkMiomGi0IjShcQhxgxiNhBQkHh6joiAQkBiPjSiOQjsigi9inQhdhShhhkQhfhlhJheQhThug6hkQhAhwgphxQhZj0AajwQAMh8Avh7QAvh7BNhzQCTjeEHjBQBzhWCQhSQApgXBhgzQBjgwAqgTQAhgPBwgvICSg5QB8guCsg0QBjgdAygOICTgmQB2geCngkQDdgvE/g7IH+hcQEog1C2glQD7gxC8gvQBlgZBYgZIAJAFQChBTBZBKQBgBPBdB+QAsA7BCBpIgCAVIAAADQhkAqhxAqQjXBPkNBUQitA2k5BbInbCJQkNBPi2A8Qh3AnhXAhIhdAjQg7AageALQhpAvg6AfQgbANgvAcIhEAqQgXANgnAcIg3ArQg4AtgjAoQhMBVgVBQQgXBQAUBPQAWBUA8BSQA8BWBpBaQBnBaCLBXQCJBVCmBTQCiBPC7BLQCjBDDcBKQB3AnBQAYID5BPQEUBdEBBiQEXBsDsBtQIjD8GSEYQHVFIEOFrQCRDDBZDOQBYDQAbDRQAaDKgeDQQgcDBhLC9IgNAdgEAcGA1dIADAOIAFAkQAFAnACBIIgHBuQgBAPgEAWIgDANICEAIIADgPQAEgWABgQIAFh0QgChHgIgtIgFgmIgDgOgEAXdAsUIAKANIAcAhIAkAvQAHAJAgAuIAjA4QAQAYANAYIAZAwIB1gUIgbgyQgQgdgPgWQgXgmgPgTIgpg5IgngxIgdgiIgKgNgEAOIAkaIA5AmIA5AoIBAAvIBzBZQAaAUAKAKIAOAMIBbgmIgOgMIgmgeIh3hbIhCgwIg8goIg7gngAB/d2IDYBnICRBKIBAAiIBFgrIhCgjQhdgwg3gbIjdhngArrYVIBJAcICjA+QB2AsBzAuIAzgtQh1guh4gsQhsgng2gVIhJgcgA4uSJIBAAkQBNArBDAiQBqA2BvA0IAzgmQhugzhpg1QhDghhMgpIhAgkgEgjPAKfIBfBZIDoC2IA5gcIiriAIiaiIgEgo5ABOIAMA0QATBCAVAuQAiBRA0BPIA9gOQg0hMgihPQgWgxgSg8IgMgygEgmNgIOIgbAiQghAqglBBQgkBFgOArQgJAagDALIgEAPIA5AEIAEgNQABgGAKgfQAMgnAihEQAohFAcgkQASgYAIgJIAKgNIgwgOgA7YvrIgyAWQhXAqg9AhIhMAqQgqAYgVAOQglAXgWAQIAmATQAWgQAjgWIA+gmQAbgQAugZQBDglBOglIAygXIASgIIgbgWgAwbzcQh+AjgvAOIhPAYIAVAWIBNgYQBDgUBpgeQB+gjCBggIgPgVQiCAgiAAjgAg/3KIkGA8IAOAUIIIh7IgNgSIkDA9gAOQ7CQhNAYhgAaIhPAVIANARIBPgXQBggaBNgYQAjgKA5gSIBOgaIBMgaIgNgOgEgOWBDpQDghmC0hnQCthkByhWIA/gvQAnggAQgQQAzgrAtgxQBVhgAhhUIAHgTQAehegdhnQgmiKiSidQicinkMiwQkBiqlxiyIjOheQhrgviWhHQkJh+jqiFQkAiRjZiWQjvimi/isQhihYhfhkQhehnhMhkQhPhqg/hwQg/hygqh3Qg3idgKicQgGhfALheQAPiBAyiAQAxiABSh4QCajjEUjJQB1hWCZhVQAugbBggxQBngxArgTICVg/ICWg4QB5gtC2g3ICZgqICWgmQCHghCaggQDaguFIg6IIAhYQEmgzC4gkQD6gwC8gsQBegXBSgXIAVANQhUAXhkAZQi8Auj6AxQi7AkkjA0In/BaQlDA6jcAvQjIAshXAVIiVAnIiWAqQi3A4h0ArIiVA4QhuAugkARQgmAQhqAzQhlA1gmAWQiQBRh5BYQkNDGiWDfQiiDvgbD/QgcD3BaD1QAoBzBAByQA6BnBTBvQBLBhBeBmQBaBeBlBbQC/CqDtCiQDaCVD7CNQDhB/EQCAQCLBBB0AyIDPBeQF7CzEICpQEWCyClCrQCeCiAyCSQApB7giBzQgeBihVBpQglAtg8A5QgRASgnAiIggAaIggAaQh1BcixBrQh/BLiZBNgEAdDgvsIAAAAIgBAAgEAPghDjIAFgCIACAGIgHgEgEAPdhDmIAHgCIABACIgGACIgCgCg");
	this.shape_41.setTransform(376.4,899.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("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");
	this.shape_42.setTransform(372.6,899.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#444444").s().p("EALJAlLQicinkMiwQkBiqlwiyIjOheQhrgviWhHQkRiCjiiBQj6iNjfiaQjxini9irQhfhVhihnQhhhphJhiQhPhqg/hvQg/hygqh3QgphzgNhyQgLhiAAi7QAJCcA4CdQAqB3A/ByQA/BwBPBqQBMBjBeBnQBfBkBiBYQC/CsDvCmQDZCWEACRQDqCFEJB+QCWBHBrAvIDOBeQFwCyEBCqQEMCwCcCnQCTCdAmCKQAcBngdBeQgniJiRiagAsBxAQAOhKBBhPQAegmAzgsIAzgpQAlgcAVgOIBAgoIBGgoQAwgbBsgyICxhKQBGgbCCgtQCng4EXhVIHbiMQE1hcCwg4QENhWDZhRQEXhpDHhlQBug4B1hKIAogcIAKAOQAfAoAPAWQAKAQAHAQIgHAFIgaAUIgaASQgfAXgXAPQh8BOhnA0QjHBlkXBpQjZBRkNBWQi1A6kwBaInbCMQj+BMjABBQiCAthGAbIixBJQhsAzgwAbIhGAoIhAApIg6AoIgzAqQgzArgeAmQg0BBgUA8QgUhAANhEg");
	this.shape_43.setTransform(297.9,987.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("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");
	this.shape_44.setTransform(372.6,899.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("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");
	this.shape_45.setTransform(376.4,899.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#444444").s().p("EAImAo5QicinkMiwQkAiqlxiyIjOheQhrgviWhHQkRiCjiiBQj6iNjfiaQjxini9irQhfhVhihnQhhhphJhiQhPhqg/hwQg/hygqh2QgphzgNhyQgLhiAAi7QAJCdA4CcQAqB3A/BxQA/BwBPBqQBMBkBeBnQBfBkBiBYQC/CsDvCmQDZCWEACRQDqCFEJB+QCWBHBrAvIDOBeQFxCyEACqQEMCwCcCnQCTCdAmCKQAcBngdBeQgniJiRiagAuktSQAOhKBBhPQAegmAzgsIAzgpQAlgcAVgOIBAgoIBGgoQAwgbBsgyICxhKQBHgbCBgtQCng4EXhVIHbiMQE1hcCwg4QENhWDZhRQEXhpDHhlQBug4B1hKIA2glIA0gnIAzgoQAcgXAUgUQAjghALgLIApgvIAUgZIAzhLIAvhoQALghADgRIAPAGQABA7gGAqIgJA1QgEARgLAiIgvBoIgzBLQgGAJgOAPIgpAvQgJAKglAjQgcAbhHA4IgaAUIgaASQgfAXgXAPQh8BOhnA0QjHBlkXBpQjZBRkNBWQi1A6kwBaInbCMQj+BMjABBQiBAthHAbIixBJQhsAzgwAbIhGAoIhAApIg6AoIgzAqQgzArgeAmQg0BBgUA8QgUhAANhEg");
	this.shape_46.setTransform(314.2,963.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("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");
	this.shape_47.setTransform(376.4,899.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("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");
	this.shape_48.setTransform(372.6,899.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#444444").s().p("EAImAsJQicinkMiwQkAiqlxiyIjOheQhrgviWhHQkRiCjiiBQj6iNjfiaQjxini9irQhfhVhihnQhhhphJhiQhPhqg/hwQg/hygqh3QgphzgNhxQgLhiAAi7QAJCdA4CcQAqB2A/ByQA/BwBPBqQBMBkBeBnQBfBkBiBYQC/CsDvCmQDZCWEACRQDqCFEJB+QCWBHBrAvIDOBeQFxCyEACqQEMCwCcCnQCTCdAmCKQAcBngdBeQgniJiRiagAukqCQAOhKBBhPQAegmAzgsIAzgpQAlgcAVgOIBAgoIBGgoQAwgbBsgyICxhKQBHgbCBgtQCng4EXhVIHbiMQE1hcCwg4QENhWDZhRQEXhpDHhlQBug4B1hKIA2glIA0gnIAzgoQAcgXAUgUQAjghALgLIApgvIAUgZIAzhLIAvhoQALgiAEgRIAJg1QADgYABgYIABBpQABA9gGArIgJA1QgEARgLAiIgvBoIgzBLQgGAJgOAPIgpAvQgJAKglAjQgcAbhHA4IgaAUIgaASQgfAXgXAPQh8BOhnA0QjHBlkXBpQjZBRkNBWQi1A6kwBaInbCMQj+BMjABBQiBAthHAbIixBJQhsAzgwAbIhGAoIhAApIg6AoIgzAqQgzArgeAmQg0BBgUA8QgUhAANhEgEAgVgsaIgcgpQgigsgwgrQgpglgwgkIABgBIBCgrIAngcIABABQAkAiAcAkQAHAIAVAhQAQAfADAJQAOAogDAfQgFAfgRAgIgBABg");
	this.shape_49.setTransform(314.2,942.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("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");
	this.shape_50.setTransform(372.6,899.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("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");
	this.shape_51.setTransform(376.4,899.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#444444").s().p("EAImAt7QicinkMiwQkAiqlxiyIjOheQhrgviWhHQkRiCjiiBQj6iNjfiaQjxini9irQhfhVhihnQhhhphJhiQhPhqg/hwQg/hygqh3QgphzgNhyQgLhhAAi7QAJCdA4CbQAqB3A/ByQA/BwBPBqQBMBkBeBnQBfBkBiBYQC/CsDvCmQDZCWEACRQDqCFEJB+QCWBHBrAvIDOBeQFxCyEACqQEMCwCcCnQCTCdAmCKQAcBngdBeQgniJiRiagAukoQQAOhKBBhPQAegmAzgsIAzgpQAlgcAVgOIBAgoIBGgoQAwgbBsgyICxhKQBHgbCBgtQCng4EXhVIHbiMQE1hcCwg4QENhWDZhRQEXhpDHhlQBug4B1hKIA2glIA0gnIAzgoQAcgXAUgUQAjghALgLIApgvIAUgZIAzhLIAvhoQALgiAEgRIAJg1QADgYABgYIABBpQABA9gGArIgJA1QgEARgLAiIgvBoIgzBLQgGAJgOAPIgpAvQgJAKglAjQgcAbhHA4IgaAUIgaASQgfAXgXAPQh8BOhnA0QjHBlkXBpQjZBRkNBWQi1A6kwBaInbCMQj+BMjABBQiBAthHAbIixBJQhsAzgwAbIhGAoIhAApIg6AoIgzAqQgzArgeAmQg0BBgUA8QgUhAANhEgEAgVgqoIgcgpQgigsgwgrQgxgsg6gqQgsgihQgzQg8gnhPguIALgZQATgsAQgUQAKgNASgPIBBApQBLAwAxAlQA6AqAxAtQAvApAjAtQAHAIAVAhQAQAfADAJQAOAogDAfQgFAfgRAgIgBABg");
	this.shape_52.setTransform(314.2,931.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("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");
	this.shape_53.setTransform(376.4,899.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("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");
	this.shape_54.setTransform(372.6,899.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#444444").s().p("EAImAwgQicinkMiwQkAiqlxiyIjOheQhrgviWhHQkRiCjiiBQj6iNjfiaQjxini9irQhfhVhihnQhhhphJhiQhPhqg/hwQg/hygqh3QgphzgNhyQgLhiAAi6QAJCcA4CcQAqB3A/ByQA/BwBPBqQBMBkBeBnQBfBkBiBYQC/CsDvCmQDZCWEACRQDqCFEJB+QCWBHBrAvIDOBeQFxCyEACqQEMCwCcCnQCTCdAmCKQAcBngdBeQgniJiRiagAuklrQAOhKBBhPQAegmAzgsIAzgpQAlgcAVgOIBAgoIBGgoQAwgbBsgyICxhKQBHgbCBgtQCng4EXhVIHbiMQE1hcCwg4QENhWDZhRQEXhpDHhlQBug4B1hKIA2glIA0gnIAzgoQAcgXAUgUQAjghALgLIApgvIAUgZIAzhLIAvhoQALgiAEgRIAJg1QADgYABgYIABBpQABA9gGArIgJA1QgEARgLAiIgvBoIgzBLQgGAJgOAPIgpAvQgJAKglAjQgcAbhHA4IgaAUIgaASQgfAXgXAPQh8BOhnA0QjHBlkXBpQjZBRkNBWQi1A6kwBaInbCMQj+BMjABBQiBAthHAbIixBJQhsAzgwAbIhGAoIhAApIg6AoIgzAqQgzArgeAmQg0BBgUA8QgUhAANhEgEAgVgoDIgcgpQgigsgwgrQgxgsg6gqQgsgihQgzQhrhFiqhgQjBhrhgg4Qhcg2g3gkIgzglIAFgDIB5hKIBIArQBgA3DBBsQCoBfBtBGQBLAwAxAlQA6AqAxAtQAvApAjAtQAHAIAVAhQAQAfADAJQAOAogDAfQgFAfgRAgIgBABg");
	this.shape_55.setTransform(314.2,915);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("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");
	this.shape_56.setTransform(372.6,899.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("EA1SBDpIAEgKQBMjJAZi/QAdjVgejQQgfjXhdjTQhcjPiXjJQkalznelKQmbkborj7QjlhoklhxQkOhmkNhXIj7hPQhvgihYgdQjOhDivhFQi2hGimhQQighOiPhXQiJhUhohYQhohXg+hUQg7hOgYhRQgWhMAThOQAUhOBIhUQAignA1gtIA1gqIA+gqQATgNAvgcIBJgpQAxgaBwgzIBYglIBdglQBAgYCMgvQCyg7EPhQIHbiLQEthXC4g6QEMhUDZhRQEQhlDLhmQBrg1B3hLIA1glQAkgYARgNIAygoQAcgYATgSQAjggAKgMIBOheIAhgyIAagzIAMgaIARgyIAHgZIAJg0QAOhpgghkQgchchKheQgVgdgyg0QgygwgfgYQhPhBhfg7QhWg1hggxQhPgphnguQiHg9jahWIlDh/IgBgBIAWAAIE3B5QDHBNCcBGQBoAuBQApQBjAyBUA0QBhA7BQBCQAdAWA2AyQAyA1AXAdQBLBhAdBcQAZBPgCBSQgBAYgDAYIgJA1QgEARgLAiIgvBoIgzBLIgUAZIgpAvQgLALgjAhQgUAUgcAXIgzAoIg0AnIg2AlQh1BKhuA4QjHBlkXBpQjZBRkNBWQiwA4k1BcInaCMQkXBVinA4QiCAthHAbIixBKQhsAygwAbIhGAoIhAAoQgVAOglAcIgzApQgzAsgeAmQhBBPgOBKQgNBEAUBAIADAKQAbBLA6BJQA+BPBmBSQBnBUCHBQQCHBRCkBNQCkBNC0BFQClA/DVBEQBkAgBhAcID9BNQEVBZEOBlQEjBuDxBsQI2D9GlEgQHtFQEjF7QCfDOBeDWQBhDXAhDgQAgDWgcDbQgYDDhJDFgEAaFBDpQA0hGAfgyIASgeIAQgdIA1hmIiGgWIg0BiIgiA4QgvBLg9BJIAEABI+oAAQBYgxBPgxQCohpCChsQCMh0BRhtQBXh3AXhsQAbh/g0iEQg+iaipimQixiukgi0QkMiomGi0IjShcQhxgxiNhBQkHh6joiAQkBiPjSiOQjsigi9inQhdhShhhkQhfhlhJheQhThug6hkQhAhwgphxQhZj0AajwQAMh8Avh7QAvh7BNhzQCTjeEHjBQBzhWCQhSQApgXBhgzQBjgwAqgTQAhgPBwgvICSg5QB8guCsg0QBjgdAygOICTgmQB2geCngkQDdgvE/g7IH+hcQEog1C2glQD7gxC8gvQDcg3Cbg3QA8gTBcgoIAfgPIAfgPIAcgPQARgJAIgGIAZgPIAUgPQAIgFACgCIAvgtIAGgJIAMgRIAKgRQARgiACgjQADgfgRgsQgDgIgSghQgXghgJgKQghgpg0guQgtgphBguQg0gmhKgvQhxhHinhdQjDhrhgg3IhHgqIDwiSQAkgWATgKQAggQAcgGQAWgFAegBIAEAAIAHADQAsASEXBuQDOBRCSBCQBhArBVAsQBdAwBYA2QBeA7BPBAQAcAXA0AxQA0A2ATAaQBIBeAdBbQAfBkgNBpIgKAzQgEAQgLAiIgVAyIgaAzIghAxIgRAZIgTAXIgpAuIgsArQgUATgcAXIgyAnQgJAIgrAeIg1AkQh4BLhpA0QjEBikWBoQjXBPkNBUQitA2k5BbInbCJQkNBPi2A8Qh3AnhXAhIhdAjQg7AageALQhpAvg6AfQgbANgvAcIhEAqQgXANgnAcIg3ArQg4AtgjAoQhMBVgVBQQgXBQAUBPQAWBUA8BSQA8BWBpBaQBnBaCLBXQCJBVCmBTQCiBPC7BLQCjBDDcBKQB3AnBQAYID5BPQEUBdEBBiQEXBsDsBtQIjD8GSEYQHVFIEOFrQCRDDBZDOQBYDQAbDRQAaDKgeDQQgcDBhLC9IgNAdgEAcGA1dIADAOIAFAkQAFAnACBIIgHBuQgBAPgEAWIgDANICEAIIADgPQAEgWABgQIAFh0QgChHgIgtIgFgmIgDgOgEAXdAsUIAKANIAcAhIAkAvQAHAJAgAuIAjA4QAQAYANAYIAZAwIB1gUIgbgyQgQgdgPgWQgXgmgPgTIgpg5IgngxIgdgiIgKgNgEAOIAkaIA5AmIA5AoIBAAvIBzBZQAaAUAKAKIAOAMIBbgmIgOgMIgmgeIh3hbIhCgwIg8goIg7gngAB/d2IDYBnICRBKIBAAiIBFgrIhCgjQhdgwg3gbIjdhngArrYVIBJAcICjA+QB2AsBzAuIAzgtQh1guh4gsQhsgng2gVIhJgcgA4uSJIBAAkQBNArBDAiQBqA2BvA0IAzgmQhugzhpg1QhDghhMgpIhAgkgEgjPAKfIBfBZIDoC2IA5gcIiriAIiaiIgEgo5ABOIAMA0QATBCAVAuQAiBRA0BPIA9gOQg0hMgihPQgWgxgSg8IgMgygEgmNgIOIgbAiQghAqglBBQgkBFgOArQgJAagDALIgEAPIA5AEIAEgNQABgGAKgfQAMgnAihEQAohFAcgkQASgYAIgJIAKgNIgwgOgA7YvrIgyAWQhXAqg9AhIhMAqQgqAYgVAOQglAXgWAQIAmATQAWgQAjgWIA+gmQAbgQAugZQBDglBOglIAygXIASgIIgbgWgAwbzcQh+AjgvAOIhPAYIAVAWIBNgYQBDgUBpgeQB+gjCBggIgPgVQiCAgiAAjgAg/3KIkGA8IAOAUIIIh7IgNgSIkDA9gAOQ7CQhNAYhgAaIhPAVIANARIBPgXQBggaBNgYQAjgKA5gSIBOgaIBMgaIgNgOgEAdOgi5QgDAHgWAaIgSAXIgxAxIgeAZIgeAYIghAXQgUAOgoAYIgsAbIgTAJIARALIBAgkIAdgTQASgLANgKIBehKIBEhJQAWgcAEgHIAHgNIgUgEgEAZ/gsJIA1ApQBDA5AhAnQA1A8AVArIAWAyIATgDIgXgyQgYgug0g7QggglhHg8Ig1gpgEANwgyvIDcBoQBbArA4AdIBCAiIAKgHIgSgJIgwgYQg6gdhcgrIjbhngEgOWBDpQDghmC0hnQCthkByhWIA/gvQAnggAQgQQAzgrAtgxQBVhgAhhUIAHgTQAehegdhnQgmiKiSidQicinkMiwQkBiqlxiyIjOheQhrgviWhHQkJh+jqiFQkAiRjZiWQjvimi/isQhihYhfhkQhehnhMhkQhPhqg/hwQg/hygqh3Qg3idgKicQgGhfALheQAPiBAyiAQAxiABSh4QCajjEUjJQB1hWCZhVQAugbBggxQBngxArgTICVg/ICWg4QB5gtC2g3ICZgqICWgmQCHghCaggQDaguFIg6IIAhYQEmgzC4gkQD6gwC8gsQDbg1CZg0QA1gRBggnIAfgOQAWgJAIgFQAmgTAOgJIAXgOIATgNIA3gvIAGgIQAKgLACgFIAKgPIAAgBQARggAFgfQADgfgOgoQgDgJgQgfQgVghgHgIQgjgtgvgpQgxgtg6gqQgxglhLgwQhthGiohfQjBhshgg3IhIgrIAJgFIBHArICRBSICRBQQCvBiBnBCQBVA3ApAeQA6AqAzAtQAtAoAnAvQAKANAUAdQARAhACAIQAQAqgCAfQgEAhgRAiIgKAQQgDAGgJALIgGAJIgHAHQgHAGgHAIIgZAVIg2AkQgJAGgQAIIgcAPQgIAGgWAJIggAPQhTAjhEAXQiUAzjiA4Qi8Auj6AxQi7AkkjA0In/BaQlDA6jcAvQjIAshXAVIiVAnIiWAqQi3A4h0ArIiVA4QhuAugkARQgmAQhqAzQhlA1gmAWQiQBRh5BYQkNDGiWDfQiiDvgbD/QgcD3BaD1QAoBzBAByQA6BnBTBvQBLBhBeBmQBaBeBlBbQC/CqDtCiQDaCVD7CNQDhB/EQCAQCLBBB0AyIDPBeQF7CzEICpQEWCyClCrQCeCiAyCSQApB7giBzQgeBihVBpQglAtg8A5QgRASgnAiIggAaIggAaQh1BcixBrQh/BLiZBNgEAPghDjIAFgCIACAGIgHgEgEAPdhDmIAHgCIABACIgGACIgCgCg");
	this.shape_57.setTransform(376.4,899.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#444444").s().p("EAImA1JQicinkMixQkAiplxizIjOhdQhrgwiWhGQkRiDjiiAQj6iNjfiaQjxioi9iqQhfhWhihnQhhhphJhhQhPhrg/hvQg/hzgqh3QgphygNhzQgLhhAAi7QAJCcA4CcQAqB3A/BzQA/BvBPBrQBMBkBeBmQBfBkBiBYQC/CtDvCmQDZCWEACRQDqCEEJB/QCWBGBrAwIDOBdQFxCzEACpQEMCxCcCnQCTCcAmCLQAcBmgdBeQgniIiRiagAukhDQAOhKBBhPQAegmAzgsIAzgpQAlgbAVgOIBAgoIBGgpQAwgaBsgzICxhJQBHgbCBgtQCng5EXhUIHbiNQE1hbCwg4QENhWDZhRQEXhpDHhmQBug4B1hKIA2glIA0gmIAzgpQAcgXAUgUQAjggALgMIApgvIAUgYIAzhLIAvhoQALgjAEgRIAJg0QADgYABgYIABBpQABA8gGAsIgJA0QgEARgLAiIgvBoIgzBMQgGAIgOAQIgpAvQgJAJglAjQgcAchHA4IgaATIgaATQgfAXgXAOQh8BOhnA0QjHBlkXBpQjZBSkNBVQi1A6kwBaInbCNQj+BMjABAQiBAuhHAbIixBJQhsAygwAbIhGAoIhAApIg6ApIgzApQgzAsgeAmQg0BAgUA8QgUhAANhEgEAgVgjaIgcgqQgigsgwgqQgxgtg6gqQgsghhQg0QhrhFiqhgQjBhrhgg4Qhcg2g3gkQhOg1g4gxQiNh7glh5QgIgegDgtQgCgYAAgzIABhSQACAjAKAkQAlB5CNB7QA4AwBOA2QA2AkBdA2QBgA4DBBsQCoBfBtBFQBLAxAxAlQA6ApAxAtQAvAqAjAsQAHAJAVAhQAQAeADAJQAOApgDAeQgFAfgRAgIgBACgEARgg5dIAFgNIAcAEIAWAEIgQATQgcAjgKAeIgCAGQgOgqAPgrg");
	this.shape_58.setTransform(314.2,885.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("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");
	this.shape_59.setTransform(376.4,899.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("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");
	this.shape_60.setTransform(372.6,899.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#444444").s().p("EAImA34QicinkMiwQkAiqlxizIjOhdQhrgwiWhGQkRiCjiiBQj6iNjfiaQjxioi9iqQhfhWhihmQhhhphJhiQhPhqg/hwQg/hygqh4QgphygNhyQgLhiAAi7QAJCcA4CdQAqB2A/BzQA/BvBPBrQBMBkBeBmQBfBlBiBXQC/CtDvCmQDZCWEACRQDqCEEJB/QCWBGBrAwIDOBeQFxCyEACpQEMCxCcCnQCTCdAmCKQAcBngdBdQgniIiRiagAukBsQAOhLBBhNQAegmAzgsIAzgpQAlgcAVgOIBAgoIBGgpQAwgaBsgyICxhKQBHgbCBgtQCng4EXhVIHbiNQE1hbCwg4QENhWDZhRQEXhpDHhlQBug5B1hKIA2glIA0gmIAzgpQAcgWAUgVQAjggALgLIApgwIAUgYIAzhLIAvhoQALgiAEgRIAJg1QADgYABgYIABBpQABA8gGAsIgJA1QgEAQgLAjIgvBnIgzBMQgGAIgOAQIgpAvQgJAKglAiQgcAchHA4IgaAUIgaASQgfAXgXAOQh8BPhnAzQjHBmkXBoQjZBSkNBWQi1A6kwBZInbCNQj+BMjABBQiBAthHAbIixBJQhsAygwAbIhGApIhAAoIg6ApIgzAoQgzAsgeAmQg0BBgUA8QgUhAANhEgEAgVggrIgcgpQgigtgwgqQgxgsg6grQgsghhQg0QhrhEiqhgQjBhrhgg4Qhcg3g3gjQhOg2g4gxQiNh6glh6QgIgegDgsQgCgZAAgzIABhSQACAjAKAkQAlB5CNB7QA4AxBOA2QA2AjBdA3QBgA3DBBsQCoBfBtBFQBLAxAxAlQA6ApAxAtQAvAqAjAtQAHAIAVAhQAQAeADAKQAOAogDAfQgFAegRAhIgBABgEARgg2uQAVg+BOhEQBDg5Big6QBTgwBkgxIAugWIAgArQiVBKhlA/QhjA+hMBIQgnAmgWAaQgcAkgKAdIgCAGQgOgqAPgrg");
	this.shape_61.setTransform(314.2,867.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("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");
	this.shape_62.setTransform(372.6,899.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-468.1,0,433.7).s().p("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");
	this.shape_63.setTransform(376.4,899.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#444444").s().p("EAImA6SQicinkMiwQkAiqlxiyIjOheQhrgviWhHQkRiCjiiBQj6iNjfiaQjxini9irQhfhVhihnQhhhphJhiQhPhqg/hwQg/hygqh3QgphzgNhyQgLhiAAi7QAJCdA4CcQAqB3A/ByQA/BwBPBqQBMBkBeBnQBfBkBiBYQC/CsDvCmQDZCWEACRQDqCFEJB+QCWBHBrAvIDOBeQFxCyEACqQEMCwCcCnQCTCdAmCKQAcBngdBeQgniJiRiagAukEGQAOhKBBhPQAegmAzgsIAzgoQAlgcAVgOIBAgoIBGgoQAwgbBsgyICxhKQBHgbCBgtQCng4EXhVIHbiMQE1hcCwg4QENhWDZhRQEXhpDHhlQBug4B1hKIA2glIA0gnIAzgoQAcgXAUgUQAjghALgLIApgvIAUgZIAzhLIAvhoQALgiAEgRIAJg1QADgYABgYIABBpQABA9gGArIgJA1QgEARgLAiIgvBoIgzBLQgGAJgOAPIgpAvQgJAKglAjQgcAbhHA4IgaAUIgaASQgfAXgXAPQh8BOhnA0QjHBlkXBpQjZBRkNBWQi1A6kwBaInbCMQj+BMjABBQiBAthHAbIixBJQhsAzgwAaIhGAoIhAApIg6AoIgzAqQgzArgeAmQg0BBgUA8QgUhAANhEgEAgVgeRIgcgpQgigsgwgrQgxgsg6gqQgsgihQgzQhrhFiqhgQjBhrhgg4Qhcg2g3gkQhOg2g4gwQiNh7glh6QgIgdgDgtQgCgYAAgzIABhTQACAkAKAjQAlB5CNB8QA4AwBOA2QA2AjBdA3QBgA3DBBsQCoBfBtBGQBLAwAxAlQA6AqAxAtQAvApAjAtQAHAIAVAhQAQAfADAJQAOAogDAfQgFAfgRAgIgBABgEARgg0UQAVg9BOhEQBDg6Big6QBTgwBkgxQCYhIDDhLQBmgoCrg9IDnhSIAAAUQiqBAjVBaQmqC1jWCFQhjA+hMBIQgnAmgWAbQgcAjgKAdIgCAGQgOgpAPgsg");
	this.shape_64.setTransform(314.2,852.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("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");
	this.shape_65.setTransform(372.6,892.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#4B4B4B","#535353","#6B6B6B"],[0,0.235,1],0,-458.8,0,443).s().p("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");
	this.shape_66.setTransform(376.4,890);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_23}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).wait(12));

	// grass
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B8D759").s().p("Eg99BGvMAAAh5VQSSlXUbkHQcflvfKi+QMshOM5gvMAAACNdg");
	this.shape_67.setTransform(372.6,889.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(48));

	// mountain2
	this.instance_7 = new lib.mountainai("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(219,622.3,2.682,2.682,-9.4,0,0,119.6,40.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(38).to({_off:false},0).to({y:438.3},4).to({regY:40.6,y:462.6,mode:"independent"},2).wait(4));

	// mountain1
	this.instance_8 = new lib.mountainai("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(645.4,510.6,1.728,1.728,-1.7,0,0,119.7,40.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(33).to({_off:false},0).to({y:392.6},4).to({regX:119.8,x:645.6,y:408.6,mode:"independent"},2).wait(9));

	// logo2
	this.instance_9 = new lib.logo2ai("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(513.6,315.4,2.095,2.095,-4.4,0,0,85.5,73.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(41).to({_off:false},0).to({y:283.4},4).to({regX:85.6,regY:73.2,x:513.9,y:299.6,mode:"independent"},2).wait(1));

	// cloud
	this.instance_10 = new lib.ClipGroup_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(377,379.4,6.615,5.513,0,180,0,58.7,70.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(351,654.9,794,1354.1);
// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;