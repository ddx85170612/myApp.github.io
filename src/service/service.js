exports.install = function (Vue, options) {

  Vue.prototype.h = function () {
    let rem = document.getElementsByTagName('html')[0].style.fontSize.replace('px','');
    let _h = document.body.offsetHeight - 140;
    console.log(_h);
    return ((_h / rem) - 1)
  };
};
