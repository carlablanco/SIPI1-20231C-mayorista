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