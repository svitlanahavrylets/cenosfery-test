// ==============================================================================================================//
// tato funkce vezme "array of objects" a číslo bigbegu, vrátí počet hodin, které trvalo naplnění tohoto begu
// ==============================================================================================================//

const sumHours = (cenosfery, numb) => {
    return cenosfery.filter(el => el.numberBag === numb).reduce((acc, hours) => {
       return acc + hours.hours;
   }, 0);
   }
// ==============================================================================================================//

const cenosfery = [
    {
        name: 'Svitlana Havrylets',
        day: '30.04.2024',
        hours: 6,
        place: 'lod',
        numberBag: 32,
        done: false,
        weight: 0,
        newBag: false,
    },
    {
        name: 'Svitlana Havrylets',
        day: '02.05.2024',
        hours: 6,
        place: 'lod',
        numberBag: 32,
        done: true,
        weight: 0,
        newBag: false,
    },
    {
        name: 'Mira',
        day: '02.05.2024',
        hours: 4,
        place: 'c.6',
        numberBag: 0,
        done: true,
        weight: 0,
        newBag: true,
    },
    {
        name: 'Svitlana Havrylets',
        day: '06.05.2024',
        hours: 6,
        place: 'lod',
        numberBag: 36,
        done: false,
        weight: 0,
        newBag: true,
    },
    {
        name: 'Misa Liskova',
        day: '06.05.2024',
        hours: 6,
        place: 'c.6',
        numberBag: 29,
        done: true,
        weight: 0,
        newBag: true,
    },
    {
        name: 'Svitlana Havrylets',
        day: '07.05.2024',
        hours: 4,
        place: 'c.6',
        numberBag: 31,
        done: false,
        weight: 0,
        newBag: false,
    },
]
// ==============================================================================================================//
console.log(sumHours(cenosfery, 32));