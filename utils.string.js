// 返回字符串的字节长度
// byteSize('😀') >>> 4
// byteSize('Hello World') >>> 11
export const byteSize = str => new Blob([str]).size;

// 首字母大写
// capitalize('fooBar') >>> 'FooBar'
export const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

// 首字母小写
// decapitalize('FooBar') >>> 'fooBar'
export const decapitalize = ([first, ...rest]) => first.toLowerCase() + rest.join('');

// 每个单词首字母大写
// capitalizeEveryWord('hello world!') >>> 'Hello World!'
export const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

// 将多行字符串拆分为行数组
// splitLines('This\nis a\nmultiline\nstring.\n') >>> ['This', 'is a', 'multiline', 'string.' , '']
export const splitLines = str => str.split(/\r?\n/);

// 删除字符串中的HTMl标签
// stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>') >>> 'lorem ipsum'
export const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
