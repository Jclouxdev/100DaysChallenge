export const convertDateDayToWritedDay = (date: Date): string => {
    switch (date.getDay()) {
        case 1: return 'Monday'
        case 2: return 'Tuesday'
        case 3: return 'Wednesday'
        case 4: return 'Thurday'
        case 5: return 'Friday'
        case 6: return 'Saturday'
        case 7: return 'Sunday'
        default: return 'Non défini'
    }
}