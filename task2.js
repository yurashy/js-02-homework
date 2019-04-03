// Training JS #11: loop statement --break,continue
// https://www.codewars.com/kata/training-js-number-11-loop-statement-break-continue/train/javascript

function grabDoll(dolls) {
    var bag = [];
    //coding here
    for (i = 0; i <= (dolls.length - 1); i++) {
        if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
            bag.push(dolls[i]);
        }
        else {
            continue;
        }
        if (bag.length == 3) {
            break;
        }
    }
    return bag;
}
