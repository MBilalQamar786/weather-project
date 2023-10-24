
const subbtn=document.getElementById('Submitbtn')
const inpbtn=document.getElementById('cityname')
const text=document.getElementById('city')
const day =document.getElementById('day')
const date=document.getElementById('today_date')
const temp=document.getElementById('temp_rel_val')

const temp_sta=document.getElementById('temp_status')
const datahide=document.querySelector('.middle_layer');
const btnclik=async(event)=>{
    event.preventDefault();
    
    const inpval=inpbtn.value;
    if(inpval===""){
        text.innerText='Please! write the Name Before Search';
        temp_sta.innerHTML='<i class="fa-regular fa-bomb fa-spin" style="color: #0b62f9;"></i>'
        datahide.classList.add('data_hide');

    }else{
        try {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${inpval}&units=matrics&appid=93258f273388f826e0f302b9b5b2a620`;
            const res= await fetch(url);
            const jsodta=await res.json();
            const arrdata=[jsodta]
        // for date and months
        currentday();
        const currenttime=()=>{
            var months=[
                'JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'
            ];
            let now=new Date();
            var month=months[now.getMonth()] ;
            var dates=now.getDate();
            date.innerText= dates | month;
        };
        currenttime();
    //    for days
    
        const currentday=()=>{
            var weekday=new Array(7);
            weekday[0]='SUN';
            weekday[1]='MON';
            weekday[2]='TUE';
            weekday[3]='WED';
            weekday[4]='THU';
            weekday[5]='FRI';
            weekday[6]='SAT';
            let currenttime=new Date();
            days=weekday[currenttime.getDay()];
            // console.log(days);
            //const day=document.getElementById('day');
            day.innerText=days;
            };
            currentday();
            // console.log(arrdata[0].main);
            text.innerText=`${arrdata[0].name}  | ${arrdata[0].sys.country}`;
            temp.innerText=Math.floor((arrdata[0].main.temp)-273);
            temp_mood=arrdata[0].weather[0].main;
           

            if(temp_mood==='clear'){
                temp_sta.innerHTML='<i class="fa-solid fa-sun fa-spin" style="color: #eeff00;"></i>';
            }else if(temp_mood==='clouds'){
                temp_sta.innerHTML='<i class="fa-solid fa-cloud fa-shake" style="color: #d6d6d6;"></i>';
            }else if(temp_mood==='rain'){
                temp_sta.innerHTML='<i class="fa-solid fa-cloud-showers-heavy fa-fade" style="color: #a8a8a8;"></i>';
            }else{
                temp_sta.innerHTML='<i class="fa-regular fa-temperature-half fa-shake" style="color: #db0000;"></i>'
            }
            datahide.classList.remove('data_hide');
        } catch {
            text.innerText='Please! Enter the write City Name';
            datahide.classList.add('data_hide');
        }
        


    }




}
subbtn.addEventListener('click',btnclik)