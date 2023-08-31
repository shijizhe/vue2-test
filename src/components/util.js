var util = {};
/**
 * 保留小数位数
 * @type {AxiosInstance}
 */
util.toFixed = function (n, s) {
    if (s > 6) {
        s = 6;
    }
    var changenum;
    if (n > 0) {
        changenum = (parseInt(n * Math.pow(10, s) + 0.5) / Math.pow(10, s)).toString();
    } else {
        changenum = (parseInt(n * Math.pow(10, s) - 0.5) / Math.pow(10, s)).toString();
    }

    var index = changenum.indexOf(".");
    if (index < 0 && s > 0) {
        changenum = changenum + ".";
        for (var i = 0; i < s; i++) {
            changenum = changenum + "0";
        }
    } else {
        index = changenum.length - index;
        for (var i = 0; i < (s - index) + 1; i++) {
            changenum = changenum + "0";
        }
    }
    return changenum;
};
//乘法
util.Mul = function Mul(arg1, arg2) {
  arg1 = parseFloat(arg1);
  arg2 = parseFloat(arg2);
  var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
  try {
    m += s1.split('.')[1].length
  } catch (e) {
  }
  try {
    m += s2.split('.')[1].length
  } catch (e) {
  }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}

/**
 * 浮点数加法
 * @param num1
 * @param num2
 * @returns {number}
 * @constructor
 */
util.Add = function (num1, num2) {
  let r1, r2, m, c
  try {
    r1 = num1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = num2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  c = Math.abs(r1 - r2)
  m = Math.pow(10, Math.max(r1, r2))
  if (c > 0) {
    let cm = Math.pow(10, c)
    if (r1 > r2) {
      num1 = Number(num1.toString().replace('.', ''))
      num2 = Number(num2.toString().replace('.', '')) * cm
    } else {
      num1 = Number(num1.toString().replace('.', '')) * cm
      num2 = Number(num2.toString().replace('.', ''))
    }
  } else {
    num1 = Number(num1.toString().replace('.', ''))
    num2 = Number(num2.toString().replace('.', ''))
  }
  return (num1 + num2) / m
}

/**
 * 浮点数减法
 * @param num1
 * @param num2
 * @returns {number}
 * @constructor
 */
util.Sub = function (num1, num2) {
  let r1, r2, m, n
  try {
    r1 = num1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = num2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2)) //动态控制精度长度
  n = (r1 >= r2) ? r1 : r2
  return parseFloat(((num1 * m - num2 * m) / m).toFixed(n))
}

/**
 * 浮点数除法
 * @param num1
 * @param num2
 * @returns {number}
 * @constructor
 */
util.Div = function (num1, num2) {
  let t1 = 0, t2 = 0, r1, r2
  try {
    t1 = num1.toString().split('.')[1].length
  } catch (e) {
  }
  try {
    t2 = num2.toString().split('.')[1].length
  } catch (e) {
  }
  r1 = Number(num1.toString().replace('.', ''))
  r2 = Number(num2.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}

/**
 * 判断str是否blank
 * @param str
 */
util.isBlank = function (str){
  return !!str.match(/^[ ]*$/);
}


export default util;
