function getTimeOfDay() {
  const hour = new Date().getHours();

  switch (hour) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return "Morning";
    case 11:
    case 12:
    case 13:
      return "Lunch";
    case 14:
    case 15:
    case 16:
      return "Afternoon";
    case 17:
    case 18:
    case 19:
    case 20:
      return "Evening";
    default:
      return "Night";
  }
}

export default getTimeOfDay;
