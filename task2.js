while(true){

    const userInput = prompt('日本の首都は？');

    if(userInput === null)
    {
        break;
    }
    else if(userInput === '東京')
    {
        alert('正解です！');
    }
    else
    {
        alert('不正解です！');
    }

}