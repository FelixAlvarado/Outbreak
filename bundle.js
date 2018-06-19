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
eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor(grid,ctx){\n    this.grid = grid;\n    this.ctx = ctx;\n  }\n\n  move() {\n    const tempGrid = JSON.parse(JSON.stringify( this.grid.grid ));\n    tempGrid.forEach((arr, i) =>{\n      arr.forEach((space, j) => {\n        if (space !== 'b'){\n          let moves = this.grid.getMoves(tempGrid,j,i);\n          if(moves.length > 0){\n            let direction = Math.floor(Math.random() * moves.length);\n            let move = moves[direction];\n              if(this.grid.grid[i + move[0]][j + move[1]] === 'b'){\n                let oldSpot = tempGrid[i][j];\n                let newSpot = tempGrid[i + move[0]][j + move[1]];\n                this.grid.grid[i][j] = newSpot;\n                this.grid.grid[i + move[0]][j + move[1]] = oldSpot;\n              }\n            }\n          }\n\n      });\n    });\n\n  }\n\n\n  startSimulation(){\n    setInterval(this.process.bind(this),100);\n  }\n\n  process() {\n    this.grid.draw(this.ctx);\n    this.move();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0L2dhbWUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2dhbWUuanM/OGVlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoZ3JpZCxjdHgpe1xuICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGNvbnN0IHRlbXBHcmlkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSggdGhpcy5ncmlkLmdyaWQgKSk7XG4gICAgdGVtcEdyaWQuZm9yRWFjaCgoYXJyLCBpKSA9PntcbiAgICAgIGFyci5mb3JFYWNoKChzcGFjZSwgaikgPT4ge1xuICAgICAgICBpZiAoc3BhY2UgIT09ICdiJyl7XG4gICAgICAgICAgbGV0IG1vdmVzID0gdGhpcy5ncmlkLmdldE1vdmVzKHRlbXBHcmlkLGosaSk7XG4gICAgICAgICAgaWYobW92ZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW92ZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBtb3ZlID0gbW92ZXNbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgICAgaWYodGhpcy5ncmlkLmdyaWRbaSArIG1vdmVbMF1dW2ogKyBtb3ZlWzFdXSA9PT0gJ2InKXtcbiAgICAgICAgICAgICAgICBsZXQgb2xkU3BvdCA9IHRlbXBHcmlkW2ldW2pdO1xuICAgICAgICAgICAgICAgIGxldCBuZXdTcG90ID0gdGVtcEdyaWRbaSArIG1vdmVbMF1dW2ogKyBtb3ZlWzFdXTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZ3JpZFtpXVtqXSA9IG5ld1Nwb3Q7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmdyaWRbaSArIG1vdmVbMF1dW2ogKyBtb3ZlWzFdXSA9IG9sZFNwb3Q7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuXG4gIHN0YXJ0U2ltdWxhdGlvbigpe1xuICAgIHNldEludGVydmFsKHRoaXMucHJvY2Vzcy5iaW5kKHRoaXMpLDEwMCk7XG4gIH1cblxuICBwcm9jZXNzKCkge1xuICAgIHRoaXMuZ3JpZC5kcmF3KHRoaXMuY3R4KTtcbiAgICB0aGlzLm1vdmUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./javascript/game.js\n");

/***/ }),

/***/ "./javascript/grid.js":
/*!****************************!*\
  !*** ./javascript/grid.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// var canvas = document.getElementById('canvas');\n// var c = canvas.getContext('2d');\n// c.fillStyle = \"red\";\n// c.fillRect(0,0,40,40);\n\n\nclass Grid {\n  constructor() {\n    this.grid = this.generateGrid();\n  }\n\ngenerateGrid () {\n  let placement = ['z','h','h','h','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b'];\n  let grid = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];\n  for (let i = 0; i < 30; i++) {\n      while (grid[i].length < 40) {\n        let random = placement[Math.floor(Math.random() * 40)];\n            grid[i].push(random);\n    }\n  }\n  return grid;\n}\n\n  getMoves(grid,x,y) {\n    let result = [];\n    if (y > 0 && grid[y-1][x] === 'b') {result.push([-1,0]);}\n    if (y < 29 && grid[y+1][x] === 'b') {result.push([1,0]);}\n    if (x > 0 && grid[y][x-1] === 'b') {result.push([0,-1]);}\n    if (x < 39 && grid[y][x+1] === 'b') {result.push([0,1]);}\n    return result;\n  }\n\n  draw(ctx) {\n    this.grid.forEach((arr, i) => {\n      arr.forEach((space, j) => {\n        switch (space){\n          case 'z':\n          ctx.fillStyle = \"red\";\n          // ctx.drawImage(zombie,j*20,i*20,20,20);\n          ctx.fillRect(j*20,i*20,20,20);\n          break;\n          case 'h':\n          ctx.fillStyle = \"black\";\n          ctx.fillRect(j*20,i*20,20,20);\n          break;\n          case 'b':\n          ctx.fillStyle = \"white\";\n          ctx.fillRect(j*20,i*20,20,20);\n          break;\n        }\n      });\n  });\n}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0L2dyaWQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2dyaWQuanM/ZjVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuLy8gdmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vIGMuZmlsbFN0eWxlID0gXCJyZWRcIjtcbi8vIGMuZmlsbFJlY3QoMCwwLDQwLDQwKTtcblxuXG5jbGFzcyBHcmlkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ncmlkID0gdGhpcy5nZW5lcmF0ZUdyaWQoKTtcbiAgfVxuXG5nZW5lcmF0ZUdyaWQgKCkge1xuICBsZXQgcGxhY2VtZW50ID0gWyd6JywnaCcsJ2gnLCdoJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJywnYicsJ2InLCdiJ107XG4gIGxldCBncmlkID0gW1tdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICB3aGlsZSAoZ3JpZFtpXS5sZW5ndGggPCA0MCkge1xuICAgICAgICBsZXQgcmFuZG9tID0gcGxhY2VtZW50W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwKV07XG4gICAgICAgICAgICBncmlkW2ldLnB1c2gocmFuZG9tKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59XG5cbiAgZ2V0TW92ZXMoZ3JpZCx4LHkpIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgaWYgKHkgPiAwICYmIGdyaWRbeS0xXVt4XSA9PT0gJ2InKSB7cmVzdWx0LnB1c2goWy0xLDBdKTt9XG4gICAgaWYgKHkgPCAyOSAmJiBncmlkW3krMV1beF0gPT09ICdiJykge3Jlc3VsdC5wdXNoKFsxLDBdKTt9XG4gICAgaWYgKHggPiAwICYmIGdyaWRbeV1beC0xXSA9PT0gJ2InKSB7cmVzdWx0LnB1c2goWzAsLTFdKTt9XG4gICAgaWYgKHggPCAzOSAmJiBncmlkW3ldW3grMV0gPT09ICdiJykge3Jlc3VsdC5wdXNoKFswLDFdKTt9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgdGhpcy5ncmlkLmZvckVhY2goKGFyciwgaSkgPT4ge1xuICAgICAgYXJyLmZvckVhY2goKHNwYWNlLCBqKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoc3BhY2Upe1xuICAgICAgICAgIGNhc2UgJ3onOlxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgIC8vIGN0eC5kcmF3SW1hZ2Uoem9tYmllLGoqMjAsaSoyMCwyMCwyMCk7XG4gICAgICAgICAgY3R4LmZpbGxSZWN0KGoqMjAsaSoyMCwyMCwyMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICBjdHguZmlsbFJlY3QoaioyMCxpKjIwLDIwLDIwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgIGN0eC5maWxsUmVjdChqKjIwLGkqMjAsMjAsMjApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSk7XG59XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./javascript/grid.js\n");

/***/ }),

/***/ "./javascript/outbreak.js":
/*!********************************!*\
  !*** ./javascript/outbreak.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ \"./javascript/grid.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./javascript/game.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  let canvas = document.getElementById('canvas');\n  let ctx = canvas.getContext('2d');\n  // ctx.fillStyle = \"red\";\n  // ctx.fillRect(100,100,100,100);\n  // let zombie = document.getElementById('zombie');\n  const grid = new _grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](grid,ctx);\n  game.startSimulation();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0L291dGJyZWFrLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9vdXRicmVhay5qcz84MTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHcmlkIGZyb20gJy4vZ3JpZCc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgLy8gY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gIC8vIGN0eC5maWxsUmVjdCgxMDAsMTAwLDEwMCwxMDApO1xuICAvLyBsZXQgem9tYmllID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3pvbWJpZScpO1xuICBjb25zdCBncmlkID0gbmV3IEdyaWQoKTtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGdyaWQsY3R4KTtcbiAgZ2FtZS5zdGFydFNpbXVsYXRpb24oKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./javascript/outbreak.js\n");

/***/ })

/******/ });