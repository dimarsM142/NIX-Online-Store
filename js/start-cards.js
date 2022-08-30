class Cards{
    arrOfTshirts = [];
    arrOfPolo = [];
    arrOfSinglet = [];
    arrOfSweatshirts = [];
    arrOfHoodey = [];
    length = 5;
    setTshirts(){
        this.arrOfTshirts[0] = {
            type: "Футболка",
            name: '"ФК Ліверпуль"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 40,
            actionPrice: 35,
            mark: 4.8,
            image: '../public/assets/Футболки/Футболка/ФК Ліверпуль/blue.png'
        };
        this.arrOfTshirts[1] = {
            type: "Футболка",
            name: '"ФК Ліверпуль"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 40,
            actionPrice: 35,
            mark: 4.8,
            image: '../public/assets/Футболки/Футболка/ФК Ліверпуль/red.png'
        };
        this.arrOfTshirts[2] = {
            type: "Футболка",
            name: '"ФК Ліверпуль"',
            size: "L(104'94'108)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 40,
            actionPrice: 35,
            mark: 4.9,
            image: '../public/assets/Футболки/Футболка/ФК Ліверпуль/black.png'
        };
        this.arrOfTshirts[3] = {
            type: "Футболка",
            name: '"ФК Ліверпуль"',
            size: "XL(108'100'112)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 40,
            actionPrice: 35,
            mark: 5,
            image: '../public/assets/Футболки/Футболка/ФК Ліверпуль/green.png'
        };
        this.arrOfTshirts[4] = {
            type: "Футболка",
            name: '"Cation"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 35,
            actionPrice: 35,
            mark: 4.2,
            image: '../public/assets/Футболки/Футболка/Cation/blue.png'
        };
        this.arrOfTshirts[5] = {
            type: "Футболка",
            name: '"Cation"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 35,
            actionPrice: 35,
            mark: 4.1,
            image: '../public/assets/Футболки/Футболка/Cation/red.png'
        };
        this.arrOfTshirts[6] = {
            type: "Футболка",
            name: '"Cation"',
            size: "L(104'94'108)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 35,
            actionPrice: 35,
            mark: 4.3,
            image: '../public/assets/Футболки/Футболка/Cation/black.png'
        };
        this.arrOfTshirts[7] = {
            type: "Футболка",
            name: '"Cation"',
            size: "XL(108'100'112)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 35,
            actionPrice: 35,
            mark: 4.2,
            image: '../public/assets/Футболки/Футболка/Cation/green.png'
        };
        this.arrOfTshirts[8] = {
            type: "Футболка",
            name: '"І.С. Бах"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 30,
            actionPrice: 30,
            mark: 3.5,
            image: '../public/assets/Футболки/Футболка/ІС Бах/blue.png'
        };
        this.arrOfTshirts[9] = {
            type: "Футболка",
            name: '"І.С. Бах"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 30,
            actionPrice: 30,
            mark: 3.6,
            image: '../public/assets/Футболки/Футболка/ІС Бах/red.png'
        };
        this.arrOfTshirts[10] = {
            type: "Футболка",
            name: '"І.С. Бах"',
            size: "L(104'94'108)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 30,
            actionPrice: 30,
            mark: 3.6,
            image: '../public/assets/Футболки/Футболка/ІС Бах/black.png'
        };
        this.arrOfTshirts[11] = {
            type: "Футболка",
            name: '"І.С. Бах"',
            size: "XL(108'100'112)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 30,
            actionPrice: 30,
            mark: 3.7,
            image: '../public/assets/Футболки/Футболка/ІС Бах/green.png'
        };
        this.arrOfTshirts[12] = {
            type: "Футболка",
            name: '"Доброзичлива"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 25,
            actionPrice: 20,
            mark: 4.9,
            image: '../public/assets/Футболки/Футболка/Доброзичлива/blue.png'
        };
        this.arrOfTshirts[13] = {
            type: "Футболка",
            name: '"Доброзичлива"',
            size: "XL(108'100'112)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 28,
            actionPrice: 23,
            mark: 5.0,
            image: '../public/assets/Футболки/Футболка/Доброзичлива/red.png'
        };
        this.arrOfTshirts[14] = {
            type: "Футболка",
            name: '"Доброзичлива"',
            size: "L(104'94'108)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 25,
            actionPrice: 20,
            mark: 5,
            image: '../public/assets/Футболки/Футболка/Доброзичлива/black.png'
        };
        this.arrOfTshirts[15] = {
            type: "Футболка",
            name: '"Доброзичлива"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 25,
            actionPrice: 20,
            mark: 5,
            image: '../public/assets/Футболки/Футболка/Доброзичлива/green.png'
        };
        this.arrOfTshirts[16] = {
            type: "Футболка",
            name: '"Рокстар"',
            size: "L(104'94'108)",
            blueDisplay: 'display: none',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SLX',
            price: 30,
            actionPrice: 30,
            mark: 3.2,
            image: '../public/assets/Футболки/Футболка/Рокстар/black.png'
        };
        this.arrOfTshirts[17] = {
            type: "Футболка",
            name: '"Рокстар"',
            size: "XL(108'100'112)",
            blueDisplay: 'display: none',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SLX',
            price: 30,
            actionPrice: 30,
            mark: 3.3,
            image: '../public/assets/Футболки/Футболка/Рокстар/green.png'
        };
        this.arrOfTshirts[18] = {
            type: "Футболка",
            name: '"Рокстар"',
            size: "S(96'82'100)",
            blueDisplay: 'display: none',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SLX',
            price: 30,
            actionPrice: 30,
            mark: 3.1,
            image: '../public/assets/Футболки/Футболка/Рокстар/red.png'
        };
        this.arrOfTshirts[19] = {
            type: "Футболка",
            name: '"Лінукс"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display: none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'MLX',
            price: 35,
            actionPrice: 28,
            mark: 4.5,
            image: '../public/assets/Футболки/Футболка/Лінукс/blue.png'
        };
        this.arrOfTshirts[20] = {
            type: "Футболка",
            name: '"Лінукс"',
            size: "L(104'94'108)",
            blueDisplay: '',
            greenDisplay: 'display: none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'MLX',
            price: 35,
            actionPrice: 30,
            mark: 4.7,
            image: '../public/assets/Футболки/Футболка/Лінукс/black.png'
        };
        this.arrOfTshirts[21] = {
            type: "Футболка",
            name: '"Лінукс"',
            size: "XL(108'100'112)",
            blueDisplay: '',
            greenDisplay: 'display: none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'MLX',
            price: 35,
            actionPrice: 30,
            mark: 4.6,
            image: '../public/assets/Футболки/Футболка/Лінукс/red.png'
        };
        this.arrOfTshirts[22] = {
            type: "Футболка",
            name: '"Великобританія"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SM',
            price: 30,
            actionPrice: 30,
            mark: 4.7,
            image: '../public/assets/Футболки/Футболка/Великобританія/blue.png'
        };
        this.arrOfTshirts[23] = {
            type: "Футболка",
            name: '"Великобританія"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SM',
            price: 30,
            actionPrice: 30,
            mark: 4.8,
            image: '../public/assets/Футболки/Футболка/Великобританія/red.png'
        };
        this.arrOfTshirts[24] = {
            type: "Футболка",
            name: '"США"',
            size: "L(104'94'108)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: 'display:none',
            whiteDisplay: 'display:none',
            sizeAvailable: 'LX',
            price: 45,
            actionPrice: 40,
            mark: 4.7,
            image: '../public/assets/Футболки/Футболка/США/black.png'
        };
        this.arrOfTshirts[25] = {
            type: "Футболка",
            name: '"США"',
            size: "XL(108'100'112)",
            blueDisplay: '',
            greenDisplay: 'display: none',
            blackDisplay: '',
            redDisplay: 'display: none',
            whiteDisplay: 'display:none',
            sizeAvailable: 'LX',
            price: 45,
            actionPrice: 40,
            mark: 4.6,
            image: '../public/assets/Футболки/Футболка/США/blue.png'
        };
        this.arrOfTshirts[26] = {
            type: "Футболка",
            name: '"Баскетбол"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 33,
            actionPrice: 30,
            mark: 4.2,
            image: '../public/assets/Футболки/Футболка/Баскетбол/blue.png'
        };
        this.arrOfTshirts[27] = {
            type: "Футболка",
            name: '"Баскетбол"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 33,
            actionPrice: 30,
            mark: 4.3,
            image: '../public/assets/Футболки/Футболка/Баскетбол/red.png'
        };
        this.arrOfTshirts[28] = {
            type: "Футболка",
            name: '"Баскетбол"',
            size: "L(104'94'108)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 33,
            actionPrice: 30,
            mark: 4.1,
            image: '../public/assets/Футболки/Футболка/Баскетбол/green.png'
        };
        this.arrOfTshirts[29] = {
            type: "Футболка",
            name: '"Динамо Київ"',
            size: "L(104'96'108)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 10,
            actionPrice: 1,
            mark: 1.2,
            image: '../public/assets/Футболки/Футболка/Динамо Київ/black.png'
        };
        this.arrOfTshirts[30] = {
            type: "Футболка",
            name: '"Динамо Київ"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 10,
            actionPrice: 1,
            mark: 1.5,
            image: '../public/assets/Футболки/Футболка/Динамо Київ/blue.png'
        };
        this.arrOfTshirts[31] = {
            type: "Футболка",
            name: '"Динамо Київ"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 10,
            actionPrice: 1,
            mark: 1.2,
            image: '../public/assets/Футболки/Футболка/Динамо Київ/red.png'
        };
    }
    setPolo(){
        this.arrOfPolo[0] = {
            type: "Поло",
            name: '"Металіст Харків"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 35,
            actionPrice: 30,
            mark: 4.9,
            image: '../public/assets/Футболки/Поло/Металіст Харків/blue.png'
        };
        this.arrOfPolo[1] = {
            type: "Поло",
            name: '"Металіст Харків"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 35,
            actionPrice: 32,
            mark: 4.9,
            image: '../public/assets/Футболки/Поло/Металіст Харків/black.png'
        };
        this.arrOfPolo[2] = {
            type: "Поло",
            name: '"Металіст Харків"',
            size: "L(104'96'108)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 35,
            actionPrice: 32,
            mark: 5,
            image: '../public/assets/Футболки/Поло/Металіст Харків/green.png'
        };
        this.arrOfPolo[3] = {
            type: "Поло",
            name: '"Металіст Харків"',
            size: "XL(108'100'112)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMLX',
            price: 35,
            actionPrice: 32,
            mark: 4.8,
            image: '../public/assets/Футболки/Поло/Металіст Харків/red.png'
        };    
        this.arrOfPolo[4] = {
            type: "Поло",
            name: '"Нікс"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 40,
            actionPrice: 32,
            mark: 4.2,
            image: '../public/assets/Футболки/Поло/Нікс/blue.png'
        };
        this.arrOfPolo[5] = {
            type: "Поло",
            name: '"Нікс"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 40,
            actionPrice: 32,
            mark: 4.3,
            image: '../public/assets/Футболки/Поло/Нікс/green.png'
        };
        this.arrOfPolo[6] = {
            type: "Поло",
            name: '"Нікс"',
            size: "L(104'96'108)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 40,
            actionPrice: 35,
            mark: 4.3,
            image: '../public/assets/Футболки/Поло/Нікс/red.png'
        };
        this.arrOfPolo[7] = {
            type: "Поло",
            name: '"Епл"',
            size: "XL(108'100'112)",
            blueDisplay: 'display:none',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMX',
            price: 38,
            actionPrice: 35,
            mark: 3.3,
            image: '../public/assets/Футболки/Поло/Епл/red.png'
        }; 
        this.arrOfPolo[8] = {
            type: "Поло",
            name: '"Епл"',
            size: "M(100'88'104)",
            blueDisplay: 'display:none',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMX',
            price: 40,
            actionPrice: 35,
            mark: 3.4,
            image: '../public/assets/Футболки/Поло/Епл/black.png'
        };
        this.arrOfPolo[9] = {
            type: "Поло",
            name: '"Епл"',
            size: "S(96'82'100)",
            blueDisplay: 'display:none',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMX',
            price: 38,
            actionPrice: 35,
            mark: 3.2,
            image: '../public/assets/Футболки/Поло/Епл/green.png'
        };
        this.arrOfPolo[10] = {
            type: "Поло",
            name: '"Джордан"',
            size: "L(104'96'108)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: 'display:none',
            whiteDisplay: 'display:none',
            sizeAvailable: 'MLX',
            price: 45,
            actionPrice: 45,
            mark: 4.5,
            image: '../public/assets/Футболки/Поло/Джордан/green.png'
        };
        this.arrOfPolo[11] = {
            type: "Поло",
            name: '"Джордан"',
            size: "XL(108'100'112)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: 'display:none',
            whiteDisplay: 'display:none',
            sizeAvailable: 'MLX',
            price: 45,
            actionPrice: 42,
            mark: 4.6,
            image: '../public/assets/Футболки/Поло/Джордан/black.png'
        }; 
        this.arrOfPolo[12] = {
            type: "Поло",
            name: '"Джордан"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: 'display:none',
            whiteDisplay: 'display:none',
            sizeAvailable: 'MLX',
            price: 45,
            actionPrice: 40,
            mark: 4.7,
            image: '../public/assets/Футболки/Поло/Джордан/blue.png'
        };
        this.arrOfPolo[13] = {
            type: "Поло",
            name: '"Леброн"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SL',
            price: 50,
            actionPrice: 45,
            mark: 4.1,
            image: '../public/assets/Футболки/Поло/Леброн/blue.png'
        };
        this.arrOfPolo[14] = {
            type: "Поло",
            name: '"Леброн"',
            size: "L(104'96'108)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SL',
            price: 50,
            actionPrice: 45,
            mark: 4.0,
            image: '../public/assets/Футболки/Поло/Леброн/red.png'
        };
        this.arrOfPolo[15] = {
            type: "Поло",
            name: '"НБА"',
            size: "XL(108'100'112)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMX',
            price: 52,
            actionPrice: 45,
            mark: 3.5,
            image: '../public/assets/Футболки/Поло/НБА/red.png'
        };  
        this.arrOfPolo[16] = {
            type: "Поло",
            name: '"НБА"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMX',
            price: 52,
            actionPrice: 50,
            mark: 3.6,
            image: '../public/assets/Футболки/Поло/НБА/blue.png'
        };
        this.arrOfPolo[17] = {
            type: "Поло",
            name: '"НБА"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMX',
            price: 50,
            actionPrice: 50,
            mark: 3.2,
            image: '../public/assets/Футболки/Поло/НБА/black.png'
        };
        this.arrOfPolo[18] = {
            type: "Поло",
            name: '"Маямі"',
            size: "L(104'96'108)",
            blueDisplay: 'display:none',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: 'display:none',
            whiteDisplay: 'display:none',
            sizeAvailable: 'LX',
            price: 48,
            actionPrice: 45,
            mark: 1.6,
            image: '../public/assets/Футболки/Поло/Маямі/green.png'
        };
        this.arrOfPolo[19] = {
            type: "Поло",
            name: '"Маямі"',
            size: "XL(108'100'112)",
            blueDisplay: 'display:none',
            greenDisplay: '',
            blackDisplay: '',
            redDisplay: 'display:none',
            whiteDisplay: 'display:none',
            sizeAvailable: 'LX',
            price: 50,
            actionPrice: 45,
            mark: 1.5,
            image: '../public/assets/Футболки/Поло/Маямі/black.png'
        };   
    }    
    setSinglet(){
        this.arrOfSinglet[0] = {
            type: "Майка",
            name: '"Бакс"',
            size: "XL(108'100'112)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'SX',
            price: 20,
            actionPrice: 20,
            mark: 4.5,
            image: '../public/assets/Футболки/Майка/Бакс/white.png'
        };     
        this.arrOfSinglet[1] = {
            type: "Майка",
            name: '"Бакс"',
            size: "S(96'82'100)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'SX',
            price: 20,
            actionPrice: 20,
            mark: 4.6,
            image: '../public/assets/Футболки/Майка/Бакс/black.png'
        };
        this.arrOfSinglet[2] = {
            type: "Майка",
            name: '"Кавальєрс"',
            size: "M(100'88'104)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'ML',
            price: 15,
            actionPrice: 12,
            mark: 4.0,
            image: '../public/assets/Футболки/Майка/Кавальєрс/white.png'
        };
        this.arrOfSinglet[3] = {
            type: "Майка",
            name: '"Кавальєрс"',
            size: "L(104'94'108)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'ML',
            price: 15,
            actionPrice: 12,
            mark: 3.8,
            image: '../public/assets/Футболки/Майка/Кавальєрс/black.png'
        };
        this.arrOfSinglet[4] = {
            type: "Майка",
            name: '"Сіксерс"',
            size: "XL(108'100'112)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'MX',
            price: 25,
            actionPrice: 20,
            mark: 3.9,
            image: '../public/assets/Футболки/Майка/Сіксерс/white.png'
        };
        this.arrOfSinglet[5] = {
            type: "Майка",
            name: '"Сіксерс"',
            size: "M(100'88'104)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'MX',
            price: 25,
            actionPrice: 20,
            mark: 4.1,
            image: '../public/assets/Футболки/Майка/Сіксерс/black.png'
        };
        this.arrOfSinglet[6] = {
            type: "Майка",
            name: '"Булс"',
            size: "XL(108'100'112)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'LX',
            price: 30,
            actionPrice: 25,
            mark: 4.9,
            image: '../public/assets/Футболки/Майка/Булс/white.png'
        };
        this.arrOfSinglet[7] = {
            type: "Майка",
            name: '"Булс"',
            size: "L(104'94'108)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'LX',
            price: 30,
            actionPrice: 30,
            mark: 5.0,
            image: '../public/assets/Футболки/Майка/Булс/black.png'
        };
        this.arrOfSinglet[8] = {
            type: "Майка",
            name: '"Лейкерс"',
            size: "L(104'94'108)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'ML',
            price: 10,
            actionPrice: 1,
            mark: 2.0,
            image: '../public/assets/Футболки/Майка/Лейкерс/white.png'
        };
        this.arrOfSinglet[9] = {
            type: "Майка",
            name: '"Лейкерс"',
            size: "M(100'88'104)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'ML',
            price: 5,
            actionPrice: 1,
            mark: 1.5,
            image: '../public/assets/Футболки/Майка/Лейкерс/black.png'
        };
        this.arrOfSinglet[10] = {
            type: "Майка",
            name: '"Санс"',
            size: "L(104'94'108)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'LX',
            price: 15,
            actionPrice: 15,
            mark: 3.6,
            image: '../public/assets/Футболки/Майка/Санс/black.png'
        };
        this.arrOfSinglet[11] = {
            type: "Майка",
            name: '"Санс"',
            size: "XL(108'100'112)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'LX',
            price: 15,
            actionPrice: 15,
            mark: 3.3,
            image: '../public/assets/Футболки/Майка/Санс/white.png'
        };
        this.arrOfSinglet[12] = {
            type: "Майка",
            name: '"Нетс"',
            size: "M(100'88'104)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'ML',
            price: 4,
            actionPrice: 1,
            mark: 1.2,
            image: '../public/assets/Футболки/Майка/Нетс/black.png'
        };
        this.arrOfSinglet[13] = {
            type: "Майка",
            name: '"Нетс"',
            size: "L(104'94'108)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'ML',
            price: 5,
            actionPrice: 1,
            mark: 1.2,
            image: '../public/assets/Футболки/Майка/Нетс/white.png'
        };
        this.arrOfSinglet[14] = {
            type: "Майка",
            name: '"Селтікс"',
            size: "M(100'88'104)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'SM',
            price: 25,
            actionPrice: 20,
            mark: 4.5,
            image: '../public/assets/Футболки/Майка/Селтікс/black.png'
        };
        this.arrOfSinglet[15] = {
            type: "Майка",
            name: '"Санс"',
            size: "S(96'82'100)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            redDisplay: 'display:none',
            whiteDisplay: '',
            blackDisplay: '',
            sizeAvailable: 'SM',
            price: 25,
            actionPrice: 20,
            mark: 4.5,
            image: '../public/assets/Футболки/Майка/Селтікс/white.png'
        };
    }
    setSweathsirts(){
        this.arrOfSweatshirts[0] = {
            type: "Світшот",
            name: '"Тризуб"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            blackDisplay: '',
            sizeAvailable: 'MLX',
            price: 50,
            actionPrice: 45,
            mark: 4.6,
            image: '../public/assets/Толстовки/Світшот/Тризуб/blue.png'
        };     
        this.arrOfSweatshirts[1] = {
            type: "Світшот",
            name: '"Тризуб"',
            size: "L(104'96'108)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'MLX',
            price: 50,
            actionPrice: 45,
            mark: 4.8,
            image: '../public/assets/Толстовки/Світшот/Тризуб/black.png'
        };
        this.arrOfSweatshirts[2] = {
            type: "Світшот",
            name: '"Тризуб"',
            size: "XL(108'100'112)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'MLX',
            price: 50,
            actionPrice: 45,
            mark: 4.7,
            image: '../public/assets/Толстовки/Світшот/Тризуб/red.png'
        };  
        this.arrOfSweatshirts[3] = {
            type: "Світшот",
            name: '"Прапор"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 55,
            actionPrice: 50,
            mark: 4.5,
            image: '../public/assets/Толстовки/Світшот/Прапор/blue.png'
        };
        this.arrOfSweatshirts[4] = {
            type: "Світшот",
            name: '"Прапор"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 55,
            actionPrice: 50,
            mark: 4.6,
            image: '../public/assets/Толстовки/Світшот/Прапор/black.png'
        };
        this.arrOfSweatshirts[5] = {
            type: "Світшот",
            name: '"Прапор"',
            size: "L(104'96'108)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 55,
            actionPrice: 50,
            mark: 4.8,
            image: '../public/assets/Толстовки/Світшот/Прапор/red.png'
        };
        this.arrOfSweatshirts[6] = {
            type: "Світшот",
            name: '"Любов"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 60,
            actionPrice: 50,
            mark: 4.2,
            image: '../public/assets/Толстовки/Світшот/Любов/blue.png'
        };
        this.arrOfSweatshirts[7] = {
            type: "Світшот",
            name: '"Любов"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 60,
            actionPrice: 50,
            mark: 4.1,
            image: '../public/assets/Толстовки/Світшот/Любов/black.png'
        };
        this.arrOfSweatshirts[8] = {
            type: "Світшот",
            name: '"Любов"',
            size: "L(104'96'108)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 60,
            actionPrice: 50,
            mark: 4.3,
            image: '../public/assets/Толстовки/Світшот/Любов/red.png'
        };
        this.arrOfSweatshirts[9] = {
            type: "Світшот",
            name: '"Доброго вечора"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: 'display:none',
            whiteDisplay: 'display:none',
            sizeAvailable: 'MX',
            price: 45,
            actionPrice: 45,
            mark: 4.9,
            image: '../public/assets/Толстовки/Світшот/Доброго вечора/blue.png'
        };
        this.arrOfSweatshirts[10] = {
            type: "Світшот",
            name: '"Доброго вечора"',
            size: "XL(108'100'112)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: 'display:none',
            whiteDisplay: 'display:none',
            sizeAvailable: 'MX',
            price: 45,
            actionPrice: 45,
            mark: 4.8,
            image: '../public/assets/Толстовки/Світшот/Доброго вечора/black.png'
        };
        this.arrOfSweatshirts[11] = {
            type: "Світшот",
            name: '"Марка"',
            size: "L(104'96'108)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 60,
            actionPrice: 55,
            mark: 4.9,
            image: '../public/assets/Толстовки/Світшот/Марка/red.png'
        };
        this.arrOfSweatshirts[12] = {
            type: "Світшот",
            name: '"Марка"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 55,
            actionPrice: 55,
            mark: 4.9,
            image: '../public/assets/Толстовки/Світшот/Марка/blue.png'
        };
        this.arrOfSweatshirts[13] = {
            type: "Світшот",
            name: '"Марка"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 60,
            actionPrice: 55,
            mark: 5.0,
            image: '../public/assets/Толстовки/Світшот/Марка/black.png'
        };
        this.arrOfSweatshirts[14] = {
            type: "Світшот",
            name: '"Шевченко"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: 'display:none',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SL',
            price: 55,
            actionPrice: 55,
            mark: 4.3,
            image: '../public/assets/Толстовки/Світшот/Шевченко/blue.png'
        };
        this.arrOfSweatshirts[15] = {
            type: "Світшот",
            name: '"Шевченко"',
            size: "L(104'96'108)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: 'display:none',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SL',
            price: 55,
            actionPrice: 55,
            mark: 4.4,
            image: '../public/assets/Толстовки/Світшот/Шевченко/black.png'
        };
    }
    setHoodey(){
        this.arrOfHoodey[0] = {
            type: "Худі",
            name: '"Ауді"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            blackDisplay: '',
            sizeAvailable: 'MLX',
            price: 60,
            actionPrice: 55,
            mark: 4.0,
            image: '../public/assets/Толстовки/Худі/Ауді/blue.png'
        };     
        this.arrOfHoodey[1] = {
            type: "Худі",
            name: '"Ауді"',
            size: "L(104'96'108)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'MLX',
            price: 60,
            actionPrice: 60,
            mark: 4.1,
            image: '../public/assets/Толстовки/Худі/Ауді/black.png'
        };
        this.arrOfHoodey[2] = {
            type: "Худі",
            name: '"Ауді"',
            size: "XL(108'100'112)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'MLX',
            price: 60,
            actionPrice: 55,
            mark: 3.9,
            image: '../public/assets/Толстовки/Худі/Ауді/red.png'
        };  
        this.arrOfHoodey[3] = {
            type: "Худі",
            name: '"БМВ"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 65,
            actionPrice: 55,
            mark: 4.4,
            image: '../public/assets/Толстовки/Худі/БМВ/black.png'
        };
        this.arrOfHoodey[4] = {
            type: "Худі",
            name: '"БМВ"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 65,
            actionPrice: 55,
            mark: 4.4,
            image: '../public/assets/Толстовки/Худі/БМВ/red.png'
        };
        this.arrOfHoodey[5] = {
            type: "Худі",
            name: '"БМВ"',
            size: "L(104'96'108)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 65,
            actionPrice: 55,
            mark: 4.4,
            image: '../public/assets/Толстовки/Худі/БМВ/blue.png'
        };
        this.arrOfHoodey[6] = {
            type: "Худі",
            name: '"Мерседес"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'ML',
            price: 45,
            actionPrice: 45,
            mark: 4.7,
            image: '../public/assets/Толстовки/Худі/Мерседес/red.png'
        };
        this.arrOfHoodey[7] = {
            type: "Худі",
            name: '"Мерседес"',
            blueDisplay: '',
            size: "L(104'96'108)",
            greenDisplay: 'display:none',
            redDisplay: '',
            whiteDisplay: 'display:none',
            blackDisplay: 'display:none',
            sizeAvailable: 'ML',
            price: 45,
            actionPrice: 45,
            mark: 4.9,
            image: '../public/assets/Толстовки/Худі/Мерседес/blue.png'
        };     
        this.arrOfHoodey[8] = {
            type: "Худі",
            name: '"Сітроен"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMX',
            price: 45,
            actionPrice: 40,
            mark: 4.8,
            image: '../public/assets/Толстовки/Худі/Сітроен/blue.png'
        };
        this.arrOfHoodey[9] = {
            type: "Худі",
            name: '"Сітроен"',
            size: "XL(108'100'112)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMX',
            price: 45,
            actionPrice: 40,
            mark: 4.8,
            image: '../public/assets/Толстовки/Худі/Сітроен/red.png'
        };  
        this.arrOfHoodey[10] = {
            type: "Худі",
            name: '"Сітроен"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SMX',
            price: 45,
            actionPrice: 40,
            mark: 4.6,
            image: '../public/assets/Толстовки/Худі/Сітроен/black.png'
        };
        this.arrOfHoodey[11] = {
            type: "Худі",
            name: '"Феррарі"',
            size: "S(96'82'100)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 65,
            actionPrice: 55,
            mark: 3.6,
            image: '../public/assets/Толстовки/Худі/Ферарі/red.png'
        };
        this.arrOfHoodey[12] = {
            type: "Худі",
            name: '"Феррарі"',
            size: "L(104'96'108)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 65,
            actionPrice: 55,
            mark: 3.7,
            image: '../public/assets/Толстовки/Худі/Ферарі/black.png'
        };
        this.arrOfHoodey[13] = {
            type: "Худі",
            name: '"Феррарі"',
            size: "M(100'88'104)",
            blueDisplay: '',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SML',
            price: 65,
            actionPrice: 55,
            mark: 3.9,
            image: '../public/assets/Толстовки/Худі/Ферарі/blue.png'
        };
        this.arrOfHoodey[14] = {
            type: "Худі",
            name: '"Форд"',
            size: "S(96'82'100)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SX',
            price: 65,
            actionPrice: 60,
            mark: 4.0,
            image: '../public/assets/Толстовки/Худі/Форд/black.png'
        };
        this.arrOfHoodey[15] = {
            type: "Худі",
            name: '"Форд"',
            size: "XL(108'100'112)",
            blueDisplay: 'display:none',
            greenDisplay: 'display:none',
            blackDisplay: '',
            redDisplay: '',
            whiteDisplay: 'display:none',
            sizeAvailable: 'SX',
            price: 65,
            actionPrice: 60,
            mark: 3.9,
            image: '../public/assets/Толстовки/Худі/Форд/red.png'
        };
    }
}


function getCurrentArr(current = null){
   
    let allCards = new Cards();
    if(allCards.arrOfHoodey.length === 0){
        allCards.setHoodey();
    }
    if(allCards.arrOfPolo.length === 0) {
        allCards.setPolo();
    }
    if(allCards.arrOfSinglet.length === 0){
        allCards.setSinglet();
    }
    if(allCards.arrOfSweatshirts.length === 0){
        allCards.setSweathsirts();
    }
    if(allCards.arrOfTshirts.length === 0){    
        allCards.setTshirts();
    }

    if((typeof current) == 'string'){

        if(allCards.arrOfHoodey[0].type == current){
            return allCards.arrOfHoodey;
        }
        if(allCards.arrOfSweatshirts[0].type == current){
            return allCards.arrOfSweatshirts;
        }
        if(allCards.arrOfPolo[0].type == current){
            return allCards.arrOfPolo;
        }
        if(allCards.arrOfSinglet[0].type == current){
            return allCards.arrOfSinglet;
        }
        if(allCards.arrOfTshirts[0].type == current){
            return allCards.arrOfTshirts;
        }
    }
    if(current !== null) {
        if(allCards.arrOfHoodey[0].type == current.innerHTML){
            return allCards.arrOfHoodey;
        }
        if(allCards.arrOfSweatshirts[0].type == current.innerHTML){
            return allCards.arrOfSweatshirts;
        }
        if(allCards.arrOfPolo[0].type == current.innerHTML){
            return allCards.arrOfPolo;
        }
        if(allCards.arrOfSinglet[0].type == current.innerHTML){
            return allCards.arrOfSinglet;
        }
        if(allCards.arrOfTshirts[0].type == current.innerHTML){
            return allCards.arrOfTshirts;
        }
    }
    else{
        let dropDownButtons = document.getElementsByClassName('available-left');
        for(let i = 0; i < dropDownButtons.length; i++){
            if(dropDownButtons[i].style.opacity === '1'){
                if(allCards.arrOfHoodey[0].type == dropDownButtons[i].innerHTML){
                    return allCards.arrOfHoodey;
                }
                if(allCards.arrOfSweatshirts[0].type == dropDownButtons[i].innerHTML){
                    return allCards.arrOfSweatshirts;
                }
                if(allCards.arrOfPolo[0].type == dropDownButtons[i].innerHTML){
                    return allCards.arrOfPolo;
                }
                if(allCards.arrOfSinglet[0].type == dropDownButtons[i].innerHTML){
                    return allCards.arrOfSinglet;
                }
                if(allCards.arrOfTshirts[0].type == dropDownButtons[i].innerHTML){
                    return allCards.arrOfTshirts;
                }
            }
        }
    }
}


