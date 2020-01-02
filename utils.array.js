// 布尔全等判断
// all([4, 2, 3], x => x > 1) >>> true
// all([1, 2, 3]) >>> true
export const all = (arr, fn = Boolean) => arr.every(fn);

// 检查数组各项相等
// allEqual([1, 2, 3, 4, 5, 6]) >>> false
// allEqual([1, 1, 1, 1]) >>> true
export const allEqual = arr => arr.every(val => val === arr[0]);

// 约等于
// approximatelyEqual(Math.PI / 2.0, 1.5708) >>> true
export const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

// // 数组转CSV格式（带空格的字符串）
// arrayToCSV([['a', 'b'], ['c', 'd']]) >>> '"a","b"\n"c","d"'
// arrayToCSV([['a', 'b'], ['c', 'd']], ';') >>> '"a";"b"\n"c";"d"'
export const arrayToCSV = (arr, delimiter = ',') => arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

// 数组转li列表
// arrayToHtmlList(['item 1', 'item 2'], 'myListID')
export const arrayToHtmlList = (arr, listID) =>
    (el => ((el = document.querySelector('#' + listID)), (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))))();

// 平均数
// average(...[1, 2, 3]) >>> 2
// average(1, 2, 3) >>> 2
export const average = (...arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;

// 数组对象属性平均数
// averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n) >>> 5 averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n') >>> 5
export const averageBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length;

// 拆分断言后的数组
// bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]) >>> [ ['beep', 'boop', 'bar'], ['foo'] ]
export const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);

// 其它类型转数组
// castArray('foo') >>> ['foo']
// castArray(1) >>> [1]
export const castArray = val => (Array.isArray(val) ? val : [val]);

// 去除数组中的无效/无用值
// compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]) >>> [ 1, 2, 3, 'a', 's', 34 ]
export const compact = arr => arr.filter(Boolean);

// 检测数值出现次数
// countOccurrences([1, 1, 2, 1, 2, 3], 1) >>> 3
export const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// 递归扁平化数组
// deepFlatten([1, [2], [[3], 4], 5]) >>> [1,2,3,4,5]
export const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

// 寻找差异（并返回第一个数组独有的）
// difference([1, 2, 3], [1, 2, 4]) >>> [3]
export const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
};

// 先执行再寻找差异
// differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) >>> [1.2]
// differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x) >>> [ { x: 2 } ]
export const differenceBy = (a, b, fn) => {
    const s = new Set(b.map(fn));
    return a.filter(x => !s.has(fn(x)));
}; 
