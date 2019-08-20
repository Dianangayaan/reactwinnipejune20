function revert(text){
    if (typeof text === "string"){
    let reverText ='';
    for (let index = text.length-1; index >= 0; index--){
        reverText = reverText + text.charAt(index);
    }
    return reverText;
}else{
    return ('Input Word');
    }
}
console.log(revert('ecitcarp'));
console.log(revert('nrecnoc'));
console.log(revert('timmoc'));
console.log(revert('ycnaf'));
console.log(revert('ytreporp'));





