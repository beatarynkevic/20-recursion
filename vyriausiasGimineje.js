// https://www.youtube.com/watch?v=1oNfcUtFV7Q&list=PLcLHBZr0jPAAvGmEpLIH5yN4w3NPI08du&index=100

const gimine = [
    {
        name: 'Petras', age: 90,
        children: [
            {
                name: 'Kaziukas', age: 84,
            },
            {
                name: 'Marytute', age: 71,
                children: [
                    {
                        name: 'Jonukas', age: 69,
                        children: [
                            {
                                name: 'Martynas', age: 94,
                            },
                            {
                                name: 'Aloizas', age: 100,
                            },

                        ]
                    },
                    {
                        name: 'Laimute', age: 50,
                    },

                ]
            },

        ]
    },
    {
        name: 'Onute', age: 89,
        children: [
            {
                name: 'Kazys', age: 91,
            },
            {
                name: 'Maryte', age: 10,
            },

        ]
    }
];

function kasVyriausias(list) {
    let amzius = -Infinity;
    let vardas = '';

    for (let asmuo of list) {
        if (asmuo.age > amzius) {
            amzius = asmuo.age;
            vardas = asmuo.name;
        }
        if (asmuo.children) {
            const vyriausiasVaikas = kasVyriausias(asmuo.children);
            if (vyriausiasVaikas.age > amzius) {
                amzius = vyriausiasVaikas.age;
                vardas = vyriausiasVaikas.name;
            }
        }
    }
    return { name: vardas, age: amzius };
}

const vyriausias = kasVyriausias(gimine);
console.log(vyriausias);

function kasJauniausias(list) {
    let amzius = Infinity;
    let vardas = '';

    for (let asmuo of list) {
        if (asmuo.age < amzius) {
            amzius = asmuo.age;
            vardas = asmuo.name;
        }
        if (asmuo.children) {
            const jauniausiasVaikas = kasJauniausias(asmuo.children);
            if (jauniausiasVaikas.age < amzius) {
                amzius = jauniausiasVaikas.age;
                vardas = jauniausiasVaikas.name;
            }
        }
    }
    return { name: vardas, age: amzius };
}

const jauniausias = kasJauniausias(gimine);
console.log(jauniausias);