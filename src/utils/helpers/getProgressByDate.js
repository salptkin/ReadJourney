const getProgressByDate = ({ progress, totalPages }) =>
  (progress || [])
    .filter(({ status }) => status === "inactive")
    .reduce((acc, {
      startReading,
      finishReading,
      finishPage,
      startPage,
      status,
      speed,
      _id,
    }) => {
      const date = new Date(finishReading).toDateString();
      const existingEntry = acc.find((entry) => entry.date === date);

      const pagesRead =
        status === "inactive" && Number.isFinite(finishPage) && Number.isFinite(startPage)
          ? finishPage - startPage + 1
          : 0;

      const percentageRead = totalPages > 0
        ? parseFloat(((pagesRead / totalPages) * 100).toFixed(2))
        : 0;

      const detailItem = {
        percent: percentageRead,
        startReading,
        finishReading,
        readingSpeed: speed,
        _id,
      };

      if (existingEntry) {
        existingEntry.totalPagesRead = (existingEntry.totalPagesRead || 0) + pagesRead;
        (existingEntry.detail ||= []).push(detailItem);
      } else {
        acc.push({
          date,
          totalPagesRead: pagesRead,
          detail: [detailItem],
        });
      }

      return acc;
    }, [])
    .sort((a, b) => new Date(b.date) - new Date(a.date));

export default getProgressByDate;
