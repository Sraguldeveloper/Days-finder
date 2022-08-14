const  date=document.getElementById('date')
const year=document.getElementById('year')
const month=document.getElementById('month')
const  find=document.getElementById('find')
const clear=document.getElementById('clear')
find.addEventListener(('click'),()=>{
    const dateObj=new Date(`${month.value} ${date.value} ${year.value}`)
    var dayvalue=dateObj.toString().slice(0,4)
    document.getElementById('result').innerHTML=dayvalue;
})



