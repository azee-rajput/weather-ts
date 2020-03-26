const API_KEY = "585205b943a316d3502569db71a3fca9";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

let api = { 
    today: function(callback:(res:any)=>void ,lat:number, long:number){
            fetch(BASE_URL+"weather?lat="+lat+"&lon="+long+"&appid="+API_KEY).then(response => response.json()).then(res=>{
                callback(res);
            });
    },
    forecast: function(callback:(res:any)=>void ,lat:number, long:number){
        fetch(BASE_URL+"forecast?lat="+lat+"&lon="+long+"&appid="+API_KEY).then(response => response.json()).then(response => {
            callback(response);
        });
    },
    find: function(callback:(res:any)=>void ,search:string){
        fetch(BASE_URL+"find?q="+search+"&appid="+API_KEY).then(response => response.json()).then(response => {
            callback(response);
        });
    }
}

export default api;




