/**
 * Calculates the difference between two dates in days, hours, minutes, and seconds.
 * @param startDate - The start date.
 * @param endDate - The end date.
 * @returns An object representing the difference in days, hours, minutes, and seconds.
 */
export function getDateDifference(endDate: any): { days: number, hours: number, minutes: number, seconds: number } {
    const startDate = new Date();
    endDate = new Date(endDate);
    const diffInMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());
    
    const seconds = Math.floor(diffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    return { days, hours: hours % 24, minutes: minutes % 60, seconds: seconds % 60 };
  }

  export const calculateNextDay = (): Date => {
    const today = new Date();
    const currentDayOfWeek = today.getDay();
  
    let daysToAdd = 0;
    if (currentDayOfWeek === 0 || (currentDayOfWeek === 1 && today.getHours() >= 22)) {
      daysToAdd = 1; // If today is Sunday or Monday after 10 PM, add 1 day to reach Wednesday
    } else if (currentDayOfWeek === 2 || (currentDayOfWeek === 3 && today.getHours() >= 22)) {
      daysToAdd = 2; // If today is Tuesday or Wednesday after 10 PM, add 2 days to reach Friday
    } else if (currentDayOfWeek === 4 && today.getHours() >= 22) {
      daysToAdd = 3; // If today is Thursday after 10 PM, add 3 days to reach Monday
    } else if (currentDayOfWeek === 5 || (currentDayOfWeek === 6 && today.getHours() < 22)) {
      daysToAdd = 3; // If today is Friday or Saturday before 10 PM, add 3 days to reach Monday
    }
  
    const nextDay = new Date();
    nextDay.setDate(today.getDate() + daysToAdd);
    nextDay.setHours(22, 0, 0); // Set the time to 10 PM (22:00:00)
  
    return nextDay;
  };

  export const addDays = (days: any) => {
    var date = new Date();
    date.setDate(date.getDate() + days);
    return new Date(date);
  }