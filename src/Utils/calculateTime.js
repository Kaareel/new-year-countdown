 export default function calculateTime(){
    const now = new Date();
    const endDate = new Date('1 jan 2025');

    const totalSeconds = Math.floor((endDate - now) / 1000);
    
    return {
        seconds : Math.floor(totalSeconds % 60),
        minutes : Math.floor(totalSeconds / 60) % 60,
        hours : Math.floor(totalSeconds / 3600) % 24,
        days : (Math.floor(totalSeconds / 3600 / 24)),
        isNewYear : totalSeconds === -1
    }
}

