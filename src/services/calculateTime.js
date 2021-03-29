const calculateTime = (dateCreated) => {
  const createdAtDate = new Date(dateCreated);
  const nowDate = new Date();
  const difference = nowDate - createdAtDate;

  const hours = Math.floor(difference / (1000 * 3600));
  if (hours < 24) {
    return `${hours}h`;
  }
  const days = Math.floor(difference / (1000 * 3600 * 24));
  if (days < 7) {
    return `${days}d`;
  }
  const weeks = Math.floor(difference / (1000 * 3600 * 24 * 7));
  if (weeks <= 4) {
    return `${weeks}w`;
  }
  const months = Math.floor(difference / (1000 * 3600 * 24 * 30));
  return `${months}m`;
};

export default calculateTime;