let index = 0;

function changeColors()
{
    var colors = ["red","green","blue","#6E9ACF","pink","orange"];
    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index > colors.length-1){
        index = 0;
    }
}