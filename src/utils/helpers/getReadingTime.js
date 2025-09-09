const getReadingTime = (startReading, finishReading) => {
  const startDate = new Date(startReading);
  const finishDate = new Date(finishReading);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(finishDate.getTime())) return "";

  const diffInMs = Math.abs(finishDate - startDate);
  const diffInMinutes = Math.floor(diffInMs / 60000);
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;

  return hours === 0
    ? `${minutes} minutes`
    : `${hours} hours and ${minutes} minutes`;
};

export default getReadingTime;