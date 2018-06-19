/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/outbreak.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/game.js":
/*!****************************!*\
  !*** ./javascript/game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _survival__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./survival */ \"./javascript/survival.js\");\n\n\nclass Game {\n  constructor(grid,ctx){\n    this.grid = grid;\n    this.ctx = ctx;\n  }\n\n  move() {\n    const tempGrid = JSON.parse(JSON.stringify( this.grid.grid ));\n    tempGrid.forEach((arr, i) =>{\n      arr.forEach((space, j) => {\n        if (space !== 'b'){\n          let moves = this.grid.getMoves(tempGrid,i,j);\n          if(moves.length > 0){\n            let direction = Math.floor(Math.random() * moves.length);\n            let move = moves[direction];\n              if(this.grid.grid[i + move[0]][j + move[1]] === 'b'){\n                let oldSpot = tempGrid[i][j];\n                let newSpot = tempGrid[i + move[0]][j + move[1]];\n                this.grid.grid[i][j] = newSpot;\n                this.grid.grid[i + move[0]][j + move[1]] = oldSpot;\n              }\n            }\n          }\n\n      });\n    });\n\n  }\n\n  encounter() {\n    const tempGrid = JSON.parse(JSON.stringify( this.grid.grid ));\n    this.grid.grid.forEach((arr, i) =>{\n      arr.forEach((space, j) => {\n        if (space !== 'b'){\n          if(this.grid.grid[i][j] === 'z') {this.zombieMove(i,j);}\n          if(this.grid.grid[i][j] === 'h') {this.humanMove(i,j);}\n        }\n    });\n  });\n  }\n\n  humanMove(y,x){\n    let zombies = _survival__WEBPACK_IMPORTED_MODULE_0__[\"getZombies\"](this.grid.grid,y,x);\n    let moves = this.grid.getMoves(this.grid.grid,y,x);\n    if (zombies.length === 0 && moves.length > 0){\n      let move = moves[Math.floor(Math.random() * moves.length)];\n      let chance = Math.random()*100;\n      if(chance <= .5 ){this.grid.grid[y + move[0]][x + move[1]] = 'h';}\n    }\n  }\n\n  zombieMove(y,x){\n    let humans = _survival__WEBPACK_IMPORTED_MODULE_0__[\"getHumans\"](this.grid.grid,y,x);\n    if (humans.length > 0){\n      let human = humans[Math.floor(Math.random()* humans.length)];\n      let chance = Math.random()*100;\n      let zombies = _survival__WEBPACK_IMPORTED_MODULE_0__[\"getZombies\"](this.grid.grid,y,x);\n      if (humans.length > zombies.length){\n        if(chance < 30) {this.grid.grid[human[0]][human[1]] = 'z';}\n        if (chance >= 30 && chance < 65) {this.grid.grid[y][x] = 'b';}\n      }\n      if (humans.length === zombies.length){\n        if(chance < 50) {this.grid.grid[human[0]][human[1]] = 'z';}\n        if (chance >= 50 && chance < 75) {this.grid.grid[y][x] = 'b';}\n      }\n      if (humans.length < zombies.length){\n        if(chance < 70) {this.grid.grid[human[0]][human[1]] = 'z';}\n        if (chance >= 70 && chance < 85) {this.grid.grid[y][x] = 'b';}\n      }\n    }\n  }\n\n  startSimulation(){\n    setInterval(this.process.bind(this),100);\n    // this.process();\n  }\n\n  process() {\n    this.grid.draw(this.ctx);\n    this.move();\n    this.encounter();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0L2dhbWUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2dhbWUuanM/OGVlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTdXJ2aXZhbCBmcm9tICcuL3N1cnZpdmFsJztcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGdyaWQsY3R4KXtcbiAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBjb25zdCB0ZW1wR3JpZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoIHRoaXMuZ3JpZC5ncmlkICkpO1xuICAgIHRlbXBHcmlkLmZvckVhY2goKGFyciwgaSkgPT57XG4gICAgICBhcnIuZm9yRWFjaCgoc3BhY2UsIGopID0+IHtcbiAgICAgICAgaWYgKHNwYWNlICE9PSAnYicpe1xuICAgICAgICAgIGxldCBtb3ZlcyA9IHRoaXMuZ3JpZC5nZXRNb3Zlcyh0ZW1wR3JpZCxpLGopO1xuICAgICAgICAgIGlmKG1vdmVzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1vdmVzLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgbW92ZSA9IG1vdmVzW2RpcmVjdGlvbl07XG4gICAgICAgICAgICAgIGlmKHRoaXMuZ3JpZC5ncmlkW2kgKyBtb3ZlWzBdXVtqICsgbW92ZVsxXV0gPT09ICdiJyl7XG4gICAgICAgICAgICAgICAgbGV0IG9sZFNwb3QgPSB0ZW1wR3JpZFtpXVtqXTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U3BvdCA9IHRlbXBHcmlkW2kgKyBtb3ZlWzBdXVtqICsgbW92ZVsxXV07XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmdyaWRbaV1bal0gPSBuZXdTcG90O1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5ncmlkW2kgKyBtb3ZlWzBdXVtqICsgbW92ZVsxXV0gPSBvbGRTcG90O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG5cbiAgZW5jb3VudGVyKCkge1xuICAgIGNvbnN0IHRlbXBHcmlkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSggdGhpcy5ncmlkLmdyaWQgKSk7XG4gICAgdGhpcy5ncmlkLmdyaWQuZm9yRWFjaCgoYXJyLCBpKSA9PntcbiAgICAgIGFyci5mb3JFYWNoKChzcGFjZSwgaikgPT4ge1xuICAgICAgICBpZiAoc3BhY2UgIT09ICdiJyl7XG4gICAgICAgICAgaWYodGhpcy5ncmlkLmdyaWRbaV1bal0gPT09ICd6Jykge3RoaXMuem9tYmllTW92ZShpLGopO31cbiAgICAgICAgICBpZih0aGlzLmdyaWQuZ3JpZFtpXVtqXSA9PT0gJ2gnKSB7dGhpcy5odW1hbk1vdmUoaSxqKTt9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIH1cblxuICBodW1hbk1vdmUoeSx4KXtcbiAgICBsZXQgem9tYmllcyA9IFN1cnZpdmFsLmdldFpvbWJpZXModGhpcy5ncmlkLmdyaWQseSx4KTtcbiAgICBsZXQgbW92ZXMgPSB0aGlzLmdyaWQuZ2V0TW92ZXModGhpcy5ncmlkLmdyaWQseSx4KTtcbiAgICBpZiAoem9tYmllcy5sZW5ndGggPT09IDAgJiYgbW92ZXMubGVuZ3RoID4gMCl7XG4gICAgICBsZXQgbW92ZSA9IG1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1vdmVzLmxlbmd0aCldO1xuICAgICAgbGV0IGNoYW5jZSA9IE1hdGgucmFuZG9tKCkqMTAwO1xuICAgICAgaWYoY2hhbmNlIDw9IC41ICl7dGhpcy5ncmlkLmdyaWRbeSArIG1vdmVbMF1dW3ggKyBtb3ZlWzFdXSA9ICdoJzt9XG4gICAgfVxuICB9XG5cbiAgem9tYmllTW92ZSh5LHgpe1xuICAgIGxldCBodW1hbnMgPSBTdXJ2aXZhbC5nZXRIdW1hbnModGhpcy5ncmlkLmdyaWQseSx4KTtcbiAgICBpZiAoaHVtYW5zLmxlbmd0aCA+IDApe1xuICAgICAgbGV0IGh1bWFuID0gaHVtYW5zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSogaHVtYW5zLmxlbmd0aCldO1xuICAgICAgbGV0IGNoYW5jZSA9IE1hdGgucmFuZG9tKCkqMTAwO1xuICAgICAgbGV0IHpvbWJpZXMgPSBTdXJ2aXZhbC5nZXRab21iaWVzKHRoaXMuZ3JpZC5ncmlkLHkseCk7XG4gICAgICBpZiAoaHVtYW5zLmxlbmd0aCA+IHpvbWJpZXMubGVuZ3RoKXtcbiAgICAgICAgaWYoY2hhbmNlIDwgMzApIHt0aGlzLmdyaWQuZ3JpZFtodW1hblswXV1baHVtYW5bMV1dID0gJ3onO31cbiAgICAgICAgaWYgKGNoYW5jZSA+PSAzMCAmJiBjaGFuY2UgPCA2NSkge3RoaXMuZ3JpZC5ncmlkW3ldW3hdID0gJ2InO31cbiAgICAgIH1cbiAgICAgIGlmIChodW1hbnMubGVuZ3RoID09PSB6b21iaWVzLmxlbmd0aCl7XG4gICAgICAgIGlmKGNoYW5jZSA8IDUwKSB7dGhpcy5ncmlkLmdyaWRbaHVtYW5bMF1dW2h1bWFuWzFdXSA9ICd6Jzt9XG4gICAgICAgIGlmIChjaGFuY2UgPj0gNTAgJiYgY2hhbmNlIDwgNzUpIHt0aGlzLmdyaWQuZ3JpZFt5XVt4XSA9ICdiJzt9XG4gICAgICB9XG4gICAgICBpZiAoaHVtYW5zLmxlbmd0aCA8IHpvbWJpZXMubGVuZ3RoKXtcbiAgICAgICAgaWYoY2hhbmNlIDwgNzApIHt0aGlzLmdyaWQuZ3JpZFtodW1hblswXV1baHVtYW5bMV1dID0gJ3onO31cbiAgICAgICAgaWYgKGNoYW5jZSA+PSA3MCAmJiBjaGFuY2UgPCA4NSkge3RoaXMuZ3JpZC5ncmlkW3ldW3hdID0gJ2InO31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGFydFNpbXVsYXRpb24oKXtcbiAgICBzZXRJbnRlcnZhbCh0aGlzLnByb2Nlc3MuYmluZCh0aGlzKSwxMDApO1xuICAgIC8vIHRoaXMucHJvY2VzcygpO1xuICB9XG5cbiAgcHJvY2VzcygpIHtcbiAgICB0aGlzLmdyaWQuZHJhdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5tb3ZlKCk7XG4gICAgdGhpcy5lbmNvdW50ZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./javascript/game.js\n");

/***/ }),

/***/ "./javascript/grid.js":
/*!****************************!*\
  !*** ./javascript/grid.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// var canvas = document.getElementById('canvas');\n// var c = canvas.getContext('2d');\n// c.fillStyle = \"red\";\n// c.fillRect(0,0,40,40);\n\n\nclass Grid {\n  constructor() {\n    this.grid = this.generateGrid();\n  }\n\ngenerateGrid () {\n  let placement = ['z','h','h','h','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b'];\n  let grid = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];\n  for (let i = 0; i < 30; i++) {\n      while (grid[i].length < 40) {\n        let random = placement[Math.floor(Math.random() * 40)];\n            grid[i].push(random);\n    }\n  }\n  return grid;\n}\n\n  getMoves(grid,y,x) {\n    let result = [];\n    if (y > 0 && grid[y-1][x] === 'b') {result.push([-1,0]);}\n    if (y < 29 && grid[y+1][x] === 'b') {result.push([1,0]);}\n    if (x > 0 && grid[y][x-1] === 'b') {result.push([0,-1]);}\n    if (x < 39 && grid[y][x+1] === 'b') {result.push([0,1]);}\n    return result;\n  }\n\n  draw(ctx) {\n    this.grid.forEach((arr, i) => {\n      arr.forEach((space, j) => {\n        switch (space){\n          case 'z':\n          ctx.fillStyle = \"red\";\n          // ctx.drawImage(zombie,j*20,i*20,20,20);\n          ctx.fillRect(j*20,i*20,20,20);\n          break;\n          case 'h':\n          ctx.fillStyle = \"black\";\n          ctx.fillRect(j*20,i*20,20,20);\n          break;\n          case 'b':\n          ctx.fillStyle = \"white\";\n          ctx.fillRect(j*20,i*20,20,20);\n          break;\n        }\n      });\n  });\n}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0L2dyaWQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2dyaWQuanM/ZjVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuLy8gdmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vIGMuZmlsbFN0eWxlID0gXCJyZWRcIjtcbi8vIGMuZmlsbFJlY3QoMCwwLDQwLDQwKTtcblxuXG5jbGFzcyBHcmlkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ncmlkID0gdGhpcy5nZW5lcmF0ZUdyaWQoKTtcbiAgfVxuXG5nZW5lcmF0ZUdyaWQgKCkge1xuICBsZXQgcGxhY2VtZW50ID0gWyd6JywnaCcsJ2gnLCdoJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJ107XG4gIGxldCBncmlkID0gW1tdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICB3aGlsZSAoZ3JpZFtpXS5sZW5ndGggPCA0MCkge1xuICAgICAgICBsZXQgcmFuZG9tID0gcGxhY2VtZW50W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwKV07XG4gICAgICAgICAgICBncmlkW2ldLnB1c2gocmFuZG9tKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59XG5cbiAgZ2V0TW92ZXMoZ3JpZCx5LHgpIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgaWYgKHkgPiAwICYmIGdyaWRbeS0xXVt4XSA9PT0gJ2InKSB7cmVzdWx0LnB1c2goWy0xLDBdKTt9XG4gICAgaWYgKHkgPCAyOSAmJiBncmlkW3krMV1beF0gPT09ICdiJykge3Jlc3VsdC5wdXNoKFsxLDBdKTt9XG4gICAgaWYgKHggPiAwICYmIGdyaWRbeV1beC0xXSA9PT0gJ2InKSB7cmVzdWx0LnB1c2goWzAsLTFdKTt9XG4gICAgaWYgKHggPCAzOSAmJiBncmlkW3ldW3grMV0gPT09ICdiJykge3Jlc3VsdC5wdXNoKFswLDFdKTt9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgdGhpcy5ncmlkLmZvckVhY2goKGFyciwgaSkgPT4ge1xuICAgICAgYXJyLmZvckVhY2goKHNwYWNlLCBqKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoc3BhY2Upe1xuICAgICAgICAgIGNhc2UgJ3onOlxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgIC8vIGN0eC5kcmF3SW1hZ2Uoem9tYmllLGoqMjAsaSoyMCwyMCwyMCk7XG4gICAgICAgICAgY3R4LmZpbGxSZWN0KGoqMjAsaSoyMCwyMCwyMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICBjdHguZmlsbFJlY3QoaioyMCxpKjIwLDIwLDIwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgIGN0eC5maWxsUmVjdChqKjIwLGkqMjAsMjAsMjApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSk7XG59XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./javascript/grid.js\n");

/***/ }),

/***/ "./javascript/outbreak.js":
/*!********************************!*\
  !*** ./javascript/outbreak.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ \"./javascript/grid.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./javascript/game.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  let canvas = document.getElementById('canvas');\n  let ctx = canvas.getContext('2d');\n  // ctx.fillStyle = \"red\";\n  // ctx.fillRect(100,100,100,100);\n  // let zombie = document.getElementById('zombie');\n  const grid = new _grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](grid,ctx);\n  const start = document.getElementById('start');\n  const stop = document.getElementById('stop');\n  start.addEventListener('click',() => {\n    game.startSimulation();\n  });\n  // working on clearing interval\n  // stop.addEventListener('click',() => {\n  //   clearInterval(game.StartSimulation());\n  //   game.StopInterval\n  // });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0L291dGJyZWFrLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9vdXRicmVhay5qcz84MTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHcmlkIGZyb20gJy4vZ3JpZCc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgLy8gY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gIC8vIGN0eC5maWxsUmVjdCgxMDAsMTAwLDEwMCwxMDApO1xuICAvLyBsZXQgem9tYmllID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3pvbWJpZScpO1xuICBjb25zdCBncmlkID0gbmV3IEdyaWQoKTtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGdyaWQsY3R4KTtcbiAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcbiAgY29uc3Qgc3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wJyk7XG4gIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgZ2FtZS5zdGFydFNpbXVsYXRpb24oKTtcbiAgfSk7XG4gIC8vIHdvcmtpbmcgb24gY2xlYXJpbmcgaW50ZXJ2YWxcbiAgLy8gc3RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAvLyAgIGNsZWFySW50ZXJ2YWwoZ2FtZS5TdGFydFNpbXVsYXRpb24oKSk7XG4gIC8vICAgZ2FtZS5TdG9wSW50ZXJ2YWxcbiAgLy8gfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./javascript/outbreak.js\n");

/***/ }),

/***/ "./javascript/survival.js":
/*!********************************!*\
  !*** ./javascript/survival.js ***!
  \********************************/
/*! exports provided: getZombies, getHumans */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getZombies\", function() { return getZombies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHumans\", function() { return getHumans; });\nconst getZombies = (grid,y,x) => {\n  let zombies = [];\n  if (y > 0 && grid[y-1][x] === 'z') {zombies.push([y-1,x]);}\n  if (y < 29 && grid[y+1][x] === 'z') {zombies.push([y+1,x]);}\n  if (x > 0 && grid[y][x-1] === 'z') {zombies.push([y,x-1]);}\n  if (x < 39 && grid[y][x+1] === 'z') {zombies.push([y,x+1]);}\n  return zombies;\n};\n\nconst getHumans = (grid,y,x) => {\n  let humans = [];\n  if (y > 0 && grid[y-1][x] === 'h') {humans.push([y-1,x]);}\n  if (y < 29 && grid[y+1][x] === 'h') {humans.push([y+1,x]);}\n  if (x > 0 && grid[y][x-1] === 'h') {humans.push([y,x-1]);}\n  if (x < 39 && grid[y][x+1] === 'h') {humans.push([y,x+1]);}\n  return humans;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0L3N1cnZpdmFsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zdXJ2aXZhbC5qcz9kODkyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRab21iaWVzID0gKGdyaWQseSx4KSA9PiB7XG4gIGxldCB6b21iaWVzID0gW107XG4gIGlmICh5ID4gMCAmJiBncmlkW3ktMV1beF0gPT09ICd6Jykge3pvbWJpZXMucHVzaChbeS0xLHhdKTt9XG4gIGlmICh5IDwgMjkgJiYgZ3JpZFt5KzFdW3hdID09PSAneicpIHt6b21iaWVzLnB1c2goW3krMSx4XSk7fVxuICBpZiAoeCA+IDAgJiYgZ3JpZFt5XVt4LTFdID09PSAneicpIHt6b21iaWVzLnB1c2goW3kseC0xXSk7fVxuICBpZiAoeCA8IDM5ICYmIGdyaWRbeV1beCsxXSA9PT0gJ3onKSB7em9tYmllcy5wdXNoKFt5LHgrMV0pO31cbiAgcmV0dXJuIHpvbWJpZXM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SHVtYW5zID0gKGdyaWQseSx4KSA9PiB7XG4gIGxldCBodW1hbnMgPSBbXTtcbiAgaWYgKHkgPiAwICYmIGdyaWRbeS0xXVt4XSA9PT0gJ2gnKSB7aHVtYW5zLnB1c2goW3ktMSx4XSk7fVxuICBpZiAoeSA8IDI5ICYmIGdyaWRbeSsxXVt4XSA9PT0gJ2gnKSB7aHVtYW5zLnB1c2goW3krMSx4XSk7fVxuICBpZiAoeCA+IDAgJiYgZ3JpZFt5XVt4LTFdID09PSAnaCcpIHtodW1hbnMucHVzaChbeSx4LTFdKTt9XG4gIGlmICh4IDwgMzkgJiYgZ3JpZFt5XVt4KzFdID09PSAnaCcpIHtodW1hbnMucHVzaChbeSx4KzFdKTt9XG4gIHJldHVybiBodW1hbnM7XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./javascript/survival.js\n");

/***/ })

/******/ });