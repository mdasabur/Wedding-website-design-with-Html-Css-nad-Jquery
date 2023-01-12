const color =[
    {
    name: 'pink',
    code: '#fb839e',
    url: 'assets/resources/css/skins/pink.css'
},

{
    name: 'light blue',
    code: '#3e99f4',
    url: 'assets/resources/css/skins/light-blue.css'
},

{
    name: 'light green',
    code: '#0dcdbd',
    url: 'assets/resources/css/skins/light-green.css'
},

{
    name: 'red',
    code: '#cc3b3b',
    url: 'assets/resources/css/skins/red.css'
},

{
    name: 'yellow',
    code: '#ff9800',
    url: 'assets/resources/css/skins/yellow.css'
}
]
$(document).ready(function(){
    setColors();
    function setColors(){
        //console.log("hi");
        for(let i=0; i<color.length; i++){
            //console.log(color[i].name);
            const span = document.createElement("span");
            span.style.backgroundColor = (color[i].code);
            $(".colors").append(span);
        }
    }
    $(".colors span").click(function(){
       const index = $(this).index();
        //console.log(index);
        //console.log(color[index].name);
        //console.log(color[index].url);
        $(".alternate-style").attr("href", color[index].url);

    });
    $(".theme-mode").change(function(){
        if($(this).val()=="light"){
            $("body").removeClass("dark");
        }
        else{
            $("body").addClass("dark"); 
        }
    })
// Toggle setting box
$(".s-toggle-btn").click(function(){
    $(".colors-setting").toggleClass("open");
})
})