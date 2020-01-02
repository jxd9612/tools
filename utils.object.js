// 当前日期天数
// dayOfYear(new Date()) >>> 285
export const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
