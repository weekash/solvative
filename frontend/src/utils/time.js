export function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
  
    const optionsDate = { day: '2-digit', month: 'long', year: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: true };
  
    const formattedDate = new Intl.DateTimeFormat('en-GB', optionsDate).format(date);
    const formattedTime = new Intl.DateTimeFormat('en-GB', optionsTime).format(date).toUpperCase();
  
    return `${formattedDate}, ${formattedTime}`;
  }
  