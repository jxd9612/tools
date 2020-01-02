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

// 寻找差异，空集（并返回第一个数组独有的）
// difference([1, 2, 3], [1, 2, 4]) >>> [3]
export const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
};

// 先执行再寻找差异，空集
// differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) >>> [1.2]
// differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x) >>> [ { x: 2 } ]
export const differenceBy = (a, b, fn) => {
    const s = new Set(b.map(fn));
    return a.filter(x => !s.has(fn(x)));
};

// 删除不符合条件的值
// dropWhile([1, 2, 3, 4], n => n >= 3) >>> [3,4]
export const dropWhile = (arr, func) => {
    while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
    return arr;
};

// 递归扁平化数组(一次性全部处理)
// deepFlatten([1, [2], [[3], 4], 5]) >>> [1,2,3,4,5]
export const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

// 指定深度扁平化数组(可选择处理几层)
// flatten([1, [2], 3, 4]) >>> [1, 2, 3, 4]
// flatten([1, [2, [3, [4, 5], 6], 7], 8], 2) >>> [1, 2, 3, [4, 5], 6, 7, 8]
export const flatten = (arr, depth = 1) => arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

// 返回数组中某值的所有索引
// indexOfAll([1, 2, 3, 1, 2, 3], 1) >>> [0,3]
// indexOfAll([1, 2, 3], 4) >>> []
export const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

// 两数组的交集
// intersection([1, 2, 3], [4, 3, 2]) >>> [2, 3]
export const intersection = (a, b) => {
    const s = new Set(b);
    return a.filter(x => s.has(x));
};

// 两数组都符合条件的交集
// intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor) >>> [2.1]
export const intersectionBy = (a, b, fn) => {
    const s = new Set(b.map(fn));
    return a.filter(x => s.has(fn(x)));
};

// 先比较后返回交集
// intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)) >>> [1.5, 3, 0]
export const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

// 返回指定长度的升序数组
// minN([1, 2, 3]) >>> [1]
// minN([1, 2, 3], 2) >>> [1,2]
export const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

// 根据条件反向筛选
// [1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)) >>> [ 1, 3, 5 ]
export const negate = func => (...args) => !func(...args);

// 生成两数之间指定长度的随机数组
// randomIntArrayInRange(12, 35, 10) >>> [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
export const randomIntArrayInRange = (min, max, n = 1) => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);

// 在指定数组中获取随机数
// sample([3, 7, 9, 11]) >>> 9
export const sample = arr => arr[Math.floor(Math.random() * arr.length)];

// 在指定数组中获取指定长度的随机数(随机化数组)
// sampleSize([1, 2, 3], 2) >>> [3,1]
// sampleSize([1, 2, 3], 4) >>> [2,3,1]
export const sampleSize = ([...arr], n = 1) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr.slice(0, n);
};

/**
 * 根据 parent_id 生成树结构
 * let comments = [
 *      { id: 1, parent_id: null },
 *      { id: 2, parent_id: 1 },
 *      { id: 3, parent_id: 1 },
 *      { id: 4, parent_id: 2 },
 *      { id: 5, parent_id: 4 }
 *  ];
 * nest(comments);
 * [{"id":1,"parent_id":null,"children":[{"id":2,"parent_id":1,"children":[{"id":4,"parent_id":2,"children":[{"id":5,"parent_id":4,"children":[]}]}]},{"id":3,"parent_id":1,"children":[]}]}]
 */
export const nest = (items, id = null, link = 'parent_id') =>
    items.filter(item => item[link] === id).map(item => ({ ...item, children: nest(items, item.id) }));
