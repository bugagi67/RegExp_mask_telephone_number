export default class Number {
  static maskNumber(numb) {
    let updateNumber = numb.replaceAll(/[^0-9]/g, '');
    if (updateNumber[0] === '8' && updateNumber.length < 12) {
      updateNumber = `7${updateNumber.slice(1)}`;
    }
    return `+${updateNumber}`;
  }
}
