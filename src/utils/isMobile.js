export const isMobile = {
  Android: function () {
    return Boolean(this.userAgent.match(/Android/i));
  },
  BlackBerry: function () {
    return Boolean(this.userAgent.match(/BlackBerry/i));
  },
  iOS: function () {
    return Boolean(this.userAgent.match(/iPhone|iPad|iPod/i));
  },
  Opera: function () {
    return this.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return (
      Boolean(this.userAgent.match(/IEMobile/i)) ||
      Boolean(this.userAgent.match(/WPDesktop/i))
    );
  },
  any: function (userAgent = navigator.userAgent || "") {
    return (
      isMobile.Android.apply({ userAgent }) ||
      isMobile.BlackBerry.apply({ userAgent }) ||
      isMobile.iOS.apply({ userAgent }) ||
      isMobile.Opera.apply({ userAgent }) ||
      isMobile.Windows.apply({ userAgent })
    );
  },
};

export const deviceName = (userAgent = navigator.userAgent || "") => {
  const devices = [/Android/i, /BlackBerry/i, /iOS/i, /Windows/i];
  for (let device of devices) {
    if (userAgent.match(device)) return userAgent.match(device)[0];
  } 
};

// console.log(this.userAgent);
// console.log(navigator.userAgent);
// console.log(typeof navigator.userAgentData);
// console.log(navigator.userAgentData);
// console.log(navigator.userAgentData.mobile);
