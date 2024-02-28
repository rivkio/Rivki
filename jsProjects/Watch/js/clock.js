const divDateTime = document.getElementById('clock-israel');
const divDateTime2 = document.getElementById('clock-america');
const divDateTime3 = document.getElementById('clock-chaina');
const divDateTime4 = document.getElementById('clock-france');

function showDateTime(divElement, locale = 'he-IL', timeZone = 'Asia/Jerusalem') {
    let date = new Date();
    let clocks = {
        timeZone: timeZone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const timeString = date.toLocaleTimeString(locale, clocks);
    divElement.innerHTML = timeString;
}

function updateClocks() {
    showDateTime(divDateTime, 'he-IL', 'Asia/Jerusalem');
    showDateTime(divDateTime2, 'en-US', 'America/New_York');
    showDateTime(divDateTime3, 'zh-CN', 'Asia/Shanghai');
    showDateTime(divDateTime4, 'fr-FR', 'Europe/Paris');
}

// עדכון השעון כל 1 שניות
setInterval(updateClocks, 1000);