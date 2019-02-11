//Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，
// 每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库.

//1、Buffer 与字符编码
//Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据

const buf=Buffer.from('runoob','ascii');
console.log(buf.toString('base64'));//输出为：cnVub29i


//2、创建 Buffer 类
//Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
// 创建一个长度为 10、且用 0 填充的 Buffer
const buf1=Buffer.alloc(10);
console.log(buf1);
// 创建一个长度为 10、且用 0x1 填充的 Buffer
const buf2=Buffer.alloc(10,1);
console.log(buf2);
//创建一个长度为 10、且未初始化的 Buffer。
const buf3=Buffer.allocUnsafe(10);
console.log(buf3);
//创建一个包含 [0x1, 0x2, 0x3] 的 Buffer
const buf4=Buffer.from([1,2,3]);
console.log(buf4);
//创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer
const buf5=Buffer.from('tést');
console.log(buf5);
//创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6=Buffer.from('tést', 'latin1');
console.log(buf6);


//3、写入缓冲区
