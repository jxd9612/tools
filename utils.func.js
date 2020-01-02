// 捕获函数运行异常
export const attempt = (fn, ...args) => {
    try {
        return fn(...args);
    } catch (e) {
        return e instanceof Error ? e : new Error(e);
    }
};

// 推迟执行
// defer(console.log, 'a'), console.log('b') >>> logs 'b' then 'a'
export const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

// 计算函数执行时间
// timeTaken(() => Math.pow(2, 10)) >>> 1024, (logged): timeTaken: 0.02099609375ms
export const timeTaken = callback => {
    console.time('timeTaken');
    const r = callback();
    console.timeEnd('timeTaken');
    return r;
};

/**
 * 只调用一次的函数
 * const startApp = function(event) {
 *   console.log(this, event); // document.body, MouseEvent
 * };
 * document.body.addEventListener('click', once(startApp)); // 只执行一次startApp
 */
export const once = fn => {
    let called = false;
    return function() {
        if (!called) {
            called = true;
            fn.apply(this, arguments);
        }
    };
};
