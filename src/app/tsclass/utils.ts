export class Utils{
    
    ConvertDay(day: string): string{
        switch(day){
            case "Monday" : return "Thứ 2";
            case "Tuesday" : return "Thứ 3";
            case "Wednesday" : return "Thứ 4";
            case "Thursday" : return "Thứ 5";
            case "Friday" : return "Thứ 6";
            case "Saturday" : return "Thứ 7";
            case "Sunday" : return "Chủ nhật";
        }
    }
}