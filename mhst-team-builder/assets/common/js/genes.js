const Genes = {
    empty: {
	c: 'gene',
	key: 'empty',
	id: '1000',
	name: 'Blocked',
	type: '',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: []
    },
    aptonoth_gene: {
	c: 'gene',
	key: 'aptonoth_gene',
	id: '0',
	name: 'Aptonoth Gene',
	type: '',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '3'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['observe']
    },
    popo_gene: {
	c: 'gene',
	key: 'popo_gene',
	id: '1',
	name: 'Popo Gene',
	type: '',
	element: '',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['soothing_bellow']
    },
    apceros_gene: {
	c: 'gene',
	key: 'apceros_gene',
	id: '2',
	name: 'Apceros Gene',
	type: '',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	skills: ['defensive_stance']
    },
    yian_kut_ku_gene: {
	c: 'gene',
	key: 'yian_kut_ku_gene',
	id: '3',
	name: 'Yian Kut-Ku Gene',
	type: 'technical',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '1',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['fireball']
    },
    b_yian_kut_ku_gene: {
	c: 'gene',
	key: 'b_yian_kut_ku_gene',
	id: '4',
	name: 'B. Yian Kut-Ku Gene',
	type: 'technical',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '1',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['blazeball']
    },
    gypceros_gene: {
	c: 'gene',
	key: 'gypceros_gene',
	id: '5',
	name: 'Gypercos Gene',
	type: 'power',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['flash']
    },
    p_gypceros_gene: {
	c: 'gene',
	key: 'p_gypceros_gene',
	id: '6',
	name: 'P. Gypercos Gene',
	type: 'power',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['noxious_venom']
    },
    yian_garuga_gene: {
	c: 'gene',
	key: 'yian_garuga_gene',
	id: '7',
	name: 'Yian Garuga Gene',
	type: 'power',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '2'
	},
	eAttkMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['finishing_blow']
    },
    arzuros_gene: {
	c: 'gene',
	key: 'arzuros_gene',
	id: '8',
	name: 'Arzuros Gene',
	type: '',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['honey_power']
    },
    lagombi_gene: {
	c: 'gene',
	key: 'lagombi_gene',
	id: '9',
	name: 'Lagombi Gene',
	type: 'speed',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '1',
	    thunder: '0',
	    water: '0'
	},
	skills: ['ice_toss']
    },
    velocidrome_gene: {
	c: 'gene',
	key: 'velocidrome_gene',
	id: '10',
	name: 'Velocidrome Gene',
	type: 'speed',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['intimidate']
    },
    iodrome_gene: {
	c: 'gene',
	key: 'iodrome_gene',
	id: '11',
	name: 'Iodrome Gene',
	type: 'speed',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['venom']
    },
    gendrome_gene: {
	c: 'gene',
	key: 'gendrome_gene',
	id: '12',
	name: 'Gendrome Gene',
	type: 'speed',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['paralysis_fang']
    },
    bulldrome_gene: {
	c: 'gene',
	key: 'bulldrome_gene',
	id: '13',
	name: 'Bulldrome Gene',
	type: 'speed',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['lethal_tackle']
    },
    zamtrios_gene: {
	c: 'gene',
	key: 'zamtrios_gene',
	id: '14',
	name: 'Zamtrios Gene',
	type: 'technical',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '1',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	skills: ['spread_frost_breath']
    },
    khezu_gene: {
	c: 'gene',
	key: 'khezu_gene',
	id: '15',
	name: 'Khezu Gene',
	type: '',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['roar']
    },
    red_khezu_gene: {
	c: 'gene',
	key: 'red_khezu_gene',
	id: '16',
	name: 'Red Khezu Gene',
	type: '',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['sav_thunder_breath']
    },
    tigrex_gene: {
	c: 'gene',
	key: 'tigrex_gene',
	id: '17',
	name: 'Tigrex Gene',
	type: 'power',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '3',
	    def: '0',
	    crit: '-2',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['stampede']
    },
    brute_tigrex_gene: {
	c: 'gene',
	key: 'brute_tigrex_gene',
	id: '18',
	name: 'Brute Tigrex Gene',
	type: 'power',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '3',
	    def: '0',
	    crit: '-2',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['savage_roar']
    },
    nargacuga_gene: {
	c: 'gene',
	key: 'nargacuga_gene',
	id: '19',
	name: 'Nargacuga Gene',
	type: 'speed',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '2',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['sharpen_blades']
    },
    g_nargacuga_gene: {
	c: 'gene',
	key: 'g_nargacuga_gene',
	id: '20',
	name: 'G. Nargacuga Gene',
	type: 'speed',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '2',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['evasion_m']
    },
    rathian_gene: {
	c: 'gene',
	key: 'rathian_gene',
	id: '21',
	name: 'Rathian Gene',
	type: 'speed',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['poison_spike']
    },
    pink_rathian_gene: {
	c: 'gene',
	key: 'pink_rathian_gene',
	id: '22',
	name: 'Pink Rathian Gene',
	type: 'speed',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['flame_fang']
    },
    gold_rathian_gene: {
	c: 'gene',
	key: 'gold_rathian_gene',
	id: '23',
	name: 'Gold Rathian Gene',
	type: 'speed',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '3',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['spread_fire_breath']
    },
    rathalos_gene: {
	c: 'gene',
	key: 'rathalos_gene',
	id: '24',
	name: 'Rathalos Gene',
	type: 'power',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['savage_fireball']
    },
    azure_rathalos_gene: {
	c: 'gene',
	key: 'azure_rathalos_gene',
	id: '25',
	name: 'Azure Rathalos Gene',
	type: 'power',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['gather_breath']
    },
    silver_rathalos_gene: {
	c: 'gene',
	key: 'silver_rathalos_gene',
	id: '26',
	name: 'Silver Rathalos Gene',
	type: 'power',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '3',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['infernal_breath']
    },
    rathas_gene: {
	c: 'gene',
	key: 'rathas_gene',
	id: '27',
	name: 'Ratha\'s Gene',
	type: 'power',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['savage_fireball']
    },
    diablos_gene: {
	c: 'gene',
	key: 'diablos_gene',
	id: '28',
	name: 'Diablos Gene',
	type: 'power',
	element: '',
	statMods: {
	    hp: '1',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['power_charge']
    },
    black_diablos_gene: {
	c: 'gene',
	key: 'black_diablos_gene',
	id: '29',
	name: 'Black Diablos Gene',
	type: 'power',
	element: '',
	statMods: {
	    hp: '1',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['merciless_horn']
    },
    monoblos_gene: {
	c: 'gene',
	key: 'monoblos_gene',
	id: '30',
	name: 'Monoblos Gene',
	type: 'speed',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['vicious_m']
    },
    w_monoblos_gene: {
	c: 'gene',
	key: 'w_monoblos_gene',
	id: '31',
	name: 'W. Monoblos Gene',
	type: 'speed',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['lock_on']
    },
    basarios_gene: {
	c: 'gene',
	key: 'basarios_gene',
	id: '33',
	name: 'Basarios Gene',
	type: 'technical',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '1',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['rock_shield']
    },
    ruby_basarios_gene: {
	c: 'gene',
	key: 'ruby_basarios_gene',
	id: '34',
	name: 'Ruby Basarios Gene',
	type: 'technical',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '1',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['ore_shield']
    },
    gravios_gene: {
	c: 'gene',
	key: 'gravios_gene',
	id: '35',
	name: 'Gravios Gene',
	type: '',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['spreading_beam']
    },
    black_gravios_gene: {
	c: 'gene',
	key: 'black_gravios_gene',
	id: '36',
	name: 'Black Gravios Gene',
	type: '',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['chrg_spread_beam']
    },
    qurupeco_gene: {
	c: 'gene',
	key: 'qurupeco_gene',
	id: '37',
	name: 'Qurupeco Gene',
	type: 'technical',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '3'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '1',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['soothing_song']
    },
    c_qurupeco_gene: {
	c: 'gene',
	key: 'c_qurupeco_gene',
	id: '38',
	name: 'C. Qurupeco Gene',
	type: 'technical',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '1',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	skills: ['weakening_song']
    },
    royal_ludroth_gene: {
	c: 'gene',
	key: 'royal_ludroth_gene',
	id: '39',
	name: 'Royal Ludroth Gene',
	type: 'power',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	skills: ['water_soak']
    },
    purple_ludroth_gene: {
	c: 'gene',
	key: 'purple_ludroth_gene',
	id: '40',
	name: 'Purple Ludroth Gene',
	type: 'power',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	skills: ['poison_spit']
    },
    congalala_gene: {
	c: 'gene',
	key: 'congalala_gene',
	id: '41',
	name: 'Congalala Gene',
	type: 'technical',
	element: '',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['foul_gas']
    },
    e_congalala_gene: {
	c: 'gene',
	key: 'e_congalala_gene',
	id: '42',
	name: 'Congalala Gene',
	type: 'technical',
	element: '',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['explosive_gas']
    },
    nerscylla_gene: {
	c: 'gene',
	key: 'nerscylla_gene',
	id: '43',
	name: 'Nerscylla Gene',
	type: 'power',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '1',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['sleep_needle']
    },
    s_nerscylla_gene: {
	c: 'gene',
	key: 's_nerscylla_gene',
	id: '44',
	name: 'S. Nerscylla Gene',
	type: 'technical',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['all_status_rate_m']
    },
    cephadrome_gene: {
	c: 'gene',
	key: 'cephadrome_gene',
	id: '45',
	name: 'Cephadrome Gene',
	type: 'speed',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	skills: ['sand_breath']
    },
    plesioth_gene: {
	c: 'gene',
	key: 'plesioth_gene',
	id: '46',
	name: 'Plesioth Gene',
	type: '',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	skills: []
    },
    green_plesioth_gene: {
	c: 'gene',
	key: 'green_plesioth_gene',
	id: '47',
	name: 'Green Plesioth Gene',
	type: '',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '3',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '3'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: []
    },
    barioth_gene: {
	c: 'gene',
	key: 'barioth_gene',
	id: '48',
	name: 'Barioth Gene',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '3'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['ice_cyclone']
    },
    sand_barioth_gene: {
	c: 'gene',
	key: 'sand_barioth_gene',
	id: '49',
	name: 'Sand Barioth Gene',
	type: '',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '3'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['trap_cyclone']
    },
    barroth_gene: {
	c: 'gene',
	key: 'barroth_gene',
	id: '50',
	name: 'Barroth Gene',
	type: '',
	element: 'water',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['mud_throw']
    },
    jade_barroth_gene: {
	c: 'gene',
	key: 'jade_barroth_gene',
	id: '51',
	name: 'Jade Barroth Gene',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['snowball']
    },
    uragaan_gene: {
	c: 'gene',
	key: 'uragaan_gene',
	id: '52',
	name: 'Uragaan Gene',
	type: 'power',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['bombardier']
    },
    duramboros_gene: {
	c: 'gene',
	key: 'duramboros_gene',
	id: '53',
	name: 'Duramboros Gene',
	type: 'power',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '-3',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '3'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: []
    },
    deviljho_gene: {
	c: 'gene',
	key: 'deviljho_gene',
	id: '54',
	name: 'Deviljho Gene',
	type: 'power',
	element: 'dragon',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '3',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['spread_drgn_breath']
    },
    great_jaggi_gene: {
	c: 'gene',
	key: 'great_jaggi_gene',
	id: '55',
	name: 'Great Jaggi Gene',
	type: 'speed',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	skills: ['breaking_blow']
    },
    great_baggi_gene: {
	c: 'gene',
	key: 'great_baggi_gene',
	id: '56',
	name: 'Great Baggi Gene',
	type: 'power',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['sleep_serum']
    },
    kecha_wacha_gene: {
	c: 'gene',
	key: 'kecha_wacha_gene',
	id: '57',
	name: 'Kecha Wacha Gene',
	type: 'technical',
	element: 'water',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['spitball']
    },
    a_kecha_gene: {
	c: 'gene',
	key: 'a_kecha_gene',
	id: '58',
	name: 'A. Kecha Gene',
	type: 'technical',
	element: 'fire',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['firespit']
    },
    zinogre_gene: {
	c: 'gene',
	key: 'zinogre_gene',
	id: '59',
	name: 'Zinogre Gene',
	type: 'power',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	skills: ['thnder_supercharge']
    },
    s_zinogre_gene: {
	c: 'gene',
	key: 's_zinogre_gene',
	id: '60',
	name: 'S. Zinogre Gene',
	type: '',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['dragon_shroud']
    },
    lagiacrus_gene: {
	c: 'gene',
	key: 'lagiacrus_gene',
	id: '61',
	name: 'Lagiacrus Gene',
	type: 'speed',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['thunder_breath']
    },
    ivory_lagiacrus_gene: {
	c: 'gene',
	key: 'ivory_lagiacrus_gene',
	id: '62',
	name: 'Ivory Lagiacrus Gene',
	type: 'technical',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['spread_shock_brth']
    },
    brachydios_gene: {
	c: 'gene',
	key: 'brachydios_gene',
	id: '63',
	name: 'Brachydios Gene',
	type: 'power',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '3',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['slime_stomp']
    },
    kirin_gene: {
	c: 'gene',
	key: 'kirin_gene',
	id: '64',
	name: 'Kirin Gene',
	type: 'speed',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '3'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '3',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['thundercall']
    },
    oroshi_kirin_gene: {
	c: 'gene',
	key: 'oroshi_kirin_gene',
	id: '65',
	name: 'Oroshi Kirin Gene',
	type: 'speed',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '3'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '3',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['glacial_pillar']
    },
    seregios_gene: {
	c: 'gene',
	key: 'seregios_gene',
	id: '66',
	name: 'Seregios Gene',
	type: 'technical',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '1',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['thousand_blades']
    },
    warming_gene: {
	c: 'gene',
	key: 'warming_gene',
	id: '67',
	name: 'Warming Gene',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '3',
	    thunder: '0',
	    water: '0'
	},
	skills: ['cold_res']
    },
    cooling_gene: {
	c: 'gene',
	key: 'cooling_gene',
	id: '68',
	name: 'Cooling Gene',
	type: '',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '3',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['heat_res']
    },
    sturdy_gene: {
	c: 'gene',
	key: 'sturdy_gene',
	id: '69',
	name: 'Sturdy Gene',
	type: 'speed',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['negate_1_hit_ko']
    },
    antivenom_gene: {
	c: 'gene',
	key: 'antivenom_gene',
	id: '70',
	name: 'Antivenom Gene',
	type: 'technical',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['negate_poison']
    },
    antiburn_gene: {
	c: 'gene',
	key: 'antiburn_gene',
	id: '71',
	name: 'Antiburn Gene',
	type: 'speed',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['negate_burn']
    },
    antishock_gene: {
	c: 'gene',
	key: 'antishock_gene',
	id: '72',
	name: 'Antishock Gene',
	type: 'speed',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	skills: ['negate_paralysis']
    },
    antisleep_gene: {
	c: 'gene',
	key: 'antisleep_gene',
	id: '73',
	name: 'Antisleep Gene',
	type: 'power',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	skills: ['negate_sleep']
    },
    antistench_gene: {
	c: 'gene',
	key: 'antistench_gene',
	id: '74',
	name: 'Antistench Gene',
	type: 'speed',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['negate_stench']
    },
    antiseal_gene: {
	c: 'gene',
	key: 'antiseal_gene',
	id: '75',
	name: 'Antiseal Gene',
	type: 'technical',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['negate_skillseal']
    },
    dampening_gene: {
	c: 'gene',
	key: 'dampening_gene',
	id: '76',
	name: 'Dampening Gene',
	type: 'power',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['negate_blastblight']
    },
    antibleed_gene: {
	c: 'gene',
	key: 'antibleed_gene',
	id: '77',
	name: 'Antibleed Gene',
	type: 'speed',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['negate_bleeding']
    },
    antiblind_gene: {
	c: 'gene',
	key: 'antiblind_gene',
	id: '78',
	name: 'Antiblind Gene',
	type: 'power',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	skills: ['negate_blind']
    },
    painkiller_gene: {
	c: 'gene',
	key: 'painkiller_gene',
	id: '79',
	name: 'Painkiller Gene',
	type: '',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['negate_cont_dmg']
    },
    poison_gene_s: {
	c: 'gene',
	key: 'poison_gene_s',
	id: '80',
	name: 'Poison Gene (S)',
	type: 'technical',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '1'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_poison_s']
    },
    poison_gene_m: {
	c: 'gene',
	key: 'poison_gene_m',
	id: '81',
	name: 'Poison Gene (M)',
	type: 'technical',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_poison_m']
    },
    poison_gene_l: {
	c: 'gene',
	key: 'poison_gene_l',
	id: '82',
	name: 'Poison Gene (L)',
	type: 'technical',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '3'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_poison_l']
    },
    burning_gene_s: {
	c: 'gene',
	key: 'burning_gene_s',
	id: '83',
	name: 'Burning Gene (S)',
	type: 'technical',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '1',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_burn_s']
    },
    burning_gene_m: {
	c: 'gene',
	key: 'burning_gene_m',
	id: '84',
	name: 'Burning Gene (M)',
	type: 'technical',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_burn_m']
    },
    burning_gene_l: {
	c: 'gene',
	key: 'burning_gene_l',
	id: '85',
	name: 'Burning Gene (L)',
	type: 'technical',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '3',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_burn_l']
    },
    paralyze_gene_s: {
	c: 'gene',
	key: 'paralyze_gene_s',
	id: '86',
	name: 'Paralyze Gene (S)',
	type: 'speed',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '1',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_paralysis_s']
    },
    paralyze_gene_m: {
	c: 'gene',
	key: 'paralyze_gene_m',
	id: '87',
	name: 'Paralyze Gene (M)',
	type: 'speed',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_para_m']
    },
    paralyze_gene_l: {
	c: 'gene',
	key: 'paralyze_gene_l',
	id: '88',
	name: 'Paralyze Gene (L)',
	type: 'speed',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '3',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_paralysis_l']
    },
    sealing_gene_s: {
	c: 'gene',
	key: 'sealing_gene_s',
	id: '89',
	name: 'Sealing Gene (S)',
	type: 'power',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '1',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_skillseal_s']
    },
    sealing_gene_m: {
	c: 'gene',
	key: 'sealing_gene_m',
	id: '90',
	name: 'Sealing Gene (M)',
	type: 'power',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_skillseal_m']
    },
    sealing_gene_l: {
	c: 'gene',
	key: 'sealing_gene_l',
	id: '91',
	name: 'Sealing Gene (L)',
	type: 'power',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '3',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_skillseal_l']
    },
    blinding_gene_s: {
	c: 'gene',
	key: 'blinding_gene_s',
	id: '92',
	name: 'Blinding Gene (S)',
	type: 'power',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '1'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_blind_s']
    },
    blinding_gene_m: {
	c: 'gene',
	key: 'blinding_gene_m',
	id: '93',
	name: 'Blinding Gene (M)',
	type: 'power',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_blind_m']
    },
    blinding_gene_l: {
	c: 'gene',
	key: 'blinding_gene_l',
	id: '94',
	name: 'Blinding Gene (L)',
	type: 'power',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '3'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['extend_blind_l']
    },
    abnormal_gene: {
	c: 'gene',
	key: 'abnormal_gene',
	id: '95',
	name: 'Abnormal Gene',
	type: 'speed',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '1',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['ext_abnormal_status']
    },
    abnormal_gene_m: {
	c: 'gene',
	key: 'abnormal_gene_m',
	id: '96',
	name: 'Abnormal Gene (M)',
	type: 'speed',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: []
    },
    abnormal_gene_l: {
	c: 'gene',
	key: 'abnormal_gene_l',
	id: '97',
	name: 'Abnormal Gene (L)',
	type: 'speed',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '3',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: []
    },
    noxious_gene_s: {
	c: 'gene',
	key: 'noxious_gene_s',
	id: '98',
	name: 'Noxious Gene (S)',
	type: 'technical',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '1'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['poison_rate_s']
    },
    noxious_gene_m: {
	c: 'gene',
	key: 'noxious_gene_m',
	id: '99',
	name: 'Noxious Gene (M)',
	type: 'technical',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['poison_rate_m']
    },
    noxious_gene_l: {
	c: 'gene',
	key: 'noxious_gene_l',
	id: '100',
	name: 'Noxious Gene (L)',
	type: 'technical',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '3'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['poison_rate_l']
    },
    searing_gene_s: {
	c: 'gene',
	key: 'searing_gene_s',
	id: '101',
	name: 'Searing Gene (S)',
	type: 'technical',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '1',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['burn_rate_s']
    },
    searing_gene_m: {
	c: 'gene',
	key: 'searing_gene_m',
	id: '102',
	name: 'Searing Gene (M)',
	type: 'technical',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['burn_rate_m']
    },
    searing_gene_l: {
	c: 'gene',
	key: 'searing_gene_l',
	id: '103',
	name: 'Searing Gene (L)',
	type: 'technical',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '3',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['burn_rate_l']
    },
    shocking_gene_s: {
	c: 'gene',
	key: 'shocking_gene_s',
	id: '104',
	name: 'Shocking Gene (S)',
	type: 'power',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '1',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['paralysis_rate_s']
    },
    shocking_gene_m: {
	c: 'gene',
	key: 'shocking_gene_m',
	id: '105',
	name: 'Shocking Gene (M)',
	type: 'power',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['paralysis_rate_m']
    },
    shocking_gene_l: {
	c: 'gene',
	key: 'shocking_gene_l',
	id: '106',
	name: 'Shocking Gene (L)',
	type: 'power',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '3',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['paralysis_rate_l']
    },
    hypnotic_gene_s: {
	c: 'gene',
	key: 'hypnotic_gene_s',
	id: '107',
	name: 'Hypnotic Gene (S)',
	type: 'technical',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '1',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['sleep_rate_s']
    },
    hypnotic_gene_m: {
	c: 'gene',
	key: 'hypnotic_gene_m',
	id: '108',
	name: 'Hypnotic Gene (M)',
	type: 'technical',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['sleep_rate_m']
    },
    hypnotic_gene_l: {
	c: 'gene',
	key: 'hypnotic_gene_l',
	id: '109',
	name: 'Hypnotic Gene (L)',
	type: 'technical',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '3',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['sleep_rate_l']
    },
    stinking_gene_s: {
	c: 'gene',
	key: 'stinking_gene_s',
	id: '110',
	name: 'Stinking Gene (S)',
	type: 'power',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['stench_rate_s']
    },
    stinking_gene_m: {
	c: 'gene',
	key: 'stinking_gene_m',
	id: '111',
	name: 'Stinking Gene (M)',
	type: 'power',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['stench_rate_m']
    },
    stinking_gene_l: {
	c: 'gene',
	key: 'stinking_gene_l',
	id: '112',
	name: 'Stinking Gene (L)',
	type: 'power',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '3',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['stench_rate_l']
    },
    cocoon_gene_s: {
	c: 'gene',
	key: 'cocoon_gene_s',
	id: '113',
	name: 'Cocoon Gene (S)',
	type: 'speed',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '1',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['skillseal_rate_s']
    },
    cocoon_gene_m: {
	c: 'gene',
	key: 'cocoon_gene_m',
	id: '114',
	name: 'Cocoon Gene (M)',
	type: 'speed',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['skillseal_rate_m']
    },
    cocoon_gene_l: {
	c: 'gene',
	key: 'cocoon_gene_l',
	id: '115',
	name: 'Cocoon Gene (L)',
	type: 'speed',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '3',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['skillseal_rate_l']
    },
    volatile_gene_s: {
	c: 'gene',
	key: 'volatile_gene_s',
	id: '116',
	name: 'Volatile Gene (S)',
	type: 'speed',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '1',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['blstblight_rate_s']
    },
    volatile_gene_m: {
	c: 'gene',
	key: 'volatile_gene_m',
	id: '117',
	name: 'Volatile Gene (M)',
	type: 'speed',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['blstblight_rate_m']
    },
    volatile_gene_l: {
	c: 'gene',
	key: 'volatile_gene_l',
	id: '118',
	name: 'Volatile Gene (L)',
	type: 'speed',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '3',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['blstblight_rate_l']
    },
    bleeding_gene_s: {
	c: 'gene',
	key: 'bleeding_gene_s',
	id: '119',
	name: 'Bleeding Gene (S)',
	type: 'technical',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '1',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['bleed_rate_s']
    },
    bleeding_gene_m: {
	c: 'gene',
	key: 'bleeding_gene_m',
	id: '120',
	name: 'Bleeding Gene (M)',
	type: 'technical',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['bleed_rate_m']
    },
    bleeding_gene_l: {
	c: 'gene',
	key: 'bleeding_gene_l',
	id: '121',
	name: 'Bleeding Gene (L)',
	type: 'technical',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '3',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['bleed_rate_l']
    },
    dazzling_gene_s: {
	c: 'gene',
	key: 'dazzling_gene_s',
	id: '122',
	name: 'Dazzling Gene (S)',
	type: 'power',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '1'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['blind_rate_s']
    },
    dazzling_gene_m: {
	c: 'gene',
	key: 'dazzling_gene_m',
	id: '123',
	name: 'Dazzling Gene (M)',
	type: 'power',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['blind_rate_m']
    },
    dazzling_gene_l: {
	c: 'gene',
	key: 'dazzling_gene_l',
	id: '124',
	name: 'Dazzling Gene (L)',
	type: 'power',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '3'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['blind_rate_l']
    },
    potent_gene_s: {
	c: 'gene',
	key: 'potent_gene_s',
	id: '125',
	name: 'Potent Gene (S)',
	type: 'power',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '1',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['all_status_rate_s']
    },
    potent_gene_m: {
	c: 'gene',
	key: 'potent_gene_m',
	id: '126',
	name: 'Potent Gene (M)',
	type: 'power',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['all_status_rate_m']
    },
    potent_gene_l: {
	c: 'gene',
	key: 'potent_gene_l',
	id: '127',
	name: 'Potent Gene (L)',
	type: 'power',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '3',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['all_status_rate_l']
    },
    hounding_gene: {
	c: 'gene',
	key: 'hounding_gene',
	id: '128',
	name: 'Hounding Gene',
	type: 'technical',
	element: '',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['salt_in_the_wound']
    },
    fire_res_gene_s: {
	c: 'gene',
	key: 'fire_res_gene_s',
	id: '129',
	name: 'Fire Res Gene (S)',
	type: '',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '1',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['fire_res_s']
    },
    fire_res_gene_m: {
	c: 'gene',
	key: 'fire_res_gene_m',
	id: '130',
	name: 'Fire Res Gene (M)',
	type: '',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['fire_res_m']
    },
    fire_res_gene_l: {
	c: 'gene',
	key: 'fire_res_gene_l',
	id: '131',
	name: 'Fire Res Gene (L)',
	type: '',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '3',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['fire_res_l']
    },
    water_res_gene_s: {
	c: 'gene',
	key: 'water_res_gene_s',
	id: '132',
	name: 'Water Res Gene (S)',
	type: '',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '1'
	},
	skills: ['water_res_s']
    },
    water_res_gene_m: {
	c: 'gene',
	key: 'water_res_gene_m',
	id: '133',
	name: 'Water Res Gene (M)',
	type: '',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	skills: ['water_res_m']
    },
    water_res_gene_l: {
	c: 'gene',
	key: 'water_res_gene_l',
	id: '134',
	name: 'Water Res Gene (L)',
	type: '',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '3'
	},
	skills: ['water_res_l']
    },
    ice_res_gene_s: {
	c: 'gene',
	key: 'ice_res_gene_s',
	id: '135',
	name: 'Ice Res Gene (S)',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '1',
	    thunder: '0',
	    water: '0'
	},
	skills: ['ice_res_s']
    },
    ice_res_gene_m: {
	c: 'gene',
	key: 'ice_res_gene_m',
	id: '136',
	name: 'Ice Res Gene (M)',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	skills: ['ice_res_m']
    },
    ice_res_gene_l: {
	c: 'gene',
	key: 'ice_res_gene_l',
	id: '137',
	name: 'Ice Res Gene (L)',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '3',
	    thunder: '0',
	    water: '0'
	},
	skills: ['ice_res_l']
    },
    thndr_res_gene_s: {
	c: 'gene',
	key: 'thndr_res_gene_s',
	id: '138',
	name: 'Thndr Res Gene (S)',
	type: '',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '1',
	    water: '0'
	},
	skills: ['thunder_res_s']
    },
    thndr_res_gene_m: {
	c: 'gene',
	key: 'thndr_res_gene_m',
	id: '139',
	name: 'Thndr Res Gene (M)',
	type: '',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	skills: ['thunder_res_m']
    },
    thndr_res_gene_l: {
	c: 'gene',
	key: 'thndr_res_gene_l',
	id: '140',
	name: 'Thndr Res Gene (L)',
	type: '',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '3',
	    water: '0'
	},
	skills: ['thunder_res_l']
    },
    drgn_res_gene_s: {
	c: 'gene',
	key: 'drgn_res_gene_s',
	id: '141',
	name: 'Drgn Res Gene (S)',
	type: '',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '1',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['dragon_res_s']
    },
    drgn_res_gene_m: {
	c: 'gene',
	key: 'drgn_res_gene_m',
	id: '142',
	name: 'Drgn Res Gene (M)',
	type: '',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['dragon_res_m']
    },
    drgn_res_gene_l: {
	c: 'gene',
	key: 'drgn_res_gene_l',
	id: '143',
	name: 'Drgn Res Gene (L)',
	type: '',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '3',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['dragon_res_l']
    },
    all_res_gene_s: {
	c: 'gene',
	key: 'all_res_gene_s',
	id: '144',
	name: 'All-Res Gene (S)',
	type: 'speed',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['all_res_s']
    },
    all_res_gene_m: {
	c: 'gene',
	key: 'all_res_gene_m',
	id: '145',
	name: 'All-Res Gene (M)',
	type: 'speed',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['all_res_m']
    },
    all_res_gene_l: {
	c: 'gene',
	key: 'all_res_gene_l',
	id: '146',
	name: 'All-Res Gene (L)',
	type: 'speed',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['all_res_l']
    },
    flaming_gene_s: {
	c: 'gene',
	key: 'flaming_gene_s',
	id: '147',
	name: 'Flaming Gene (S)',
	type: '',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '1',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['fire_boost_s']
    },
    flaming_gene_m: {
	c: 'gene',
	key: 'flaming_gene_m',
	id: '148',
	name: 'Flaming Gene (M)',
	type: '',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['fire_boost_m']
    },
    flaming_gene_l: {
	c: 'gene',
	key: 'flaming_gene_l',
	id: '149',
	name: 'Flaming Gene (L)',
	type: '',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '3',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['fire_boost_l']
    },
    torrential_gene_s: {
	c: 'gene',
	key: 'torrential_gene_s',
	id: '150',
	name: 'Torrential Gene (S)',
	type: '',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '1'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['water_boost_s']
    },
    torrential_gene_m: {
	c: 'gene',
	key: 'torrential_gene_m',
	id: '151',
	name: 'Torrential Gene (M)',
	type: '',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['water_boost_m']
    },
    torrential_gene_l: {
	c: 'gene',
	key: 'torrential_gene_l',
	id: '152',
	name: 'Torrential Gene (L)',
	type: '',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '3'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['water_boost_l']
    },
    frigid_gene_s: {
	c: 'gene',
	key: 'frigid_gene_s',
	id: '153',
	name: 'Frigid Gene (S)',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '1',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['ice_boost_s']
    },
    frigid_gene_m: {
	c: 'gene',
	key: 'frigid_gene_m',
	id: '154',
	name: 'Frigid Gene (M)',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['ice_boost_m']
    },
    frigid_gene_l: {
	c: 'gene',
	key: 'frigid_gene_l',
	id: '155',
	name: 'Frigid Gene (L)',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '3',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['ice_boost_l']
    },
    flashing_gene_s: {
	c: 'gene',
	key: 'flashing_gene_s',
	id: '156',
	name: 'Flashing Gene (S)',
	type: '',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '1',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['thunder_boost_s']
    },
    flashing_gene_m: {
	c: 'gene',
	key: 'flashing_gene_m',
	id: '157',
	name: 'Flashing Gene (M)',
	type: '',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['thunder_boost_m']
    },
    flashing_gene_l: {
	c: 'gene',
	key: 'flashing_gene_l',
	id: '158',
	name: 'Flashing Gene (L)',
	type: '',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '3',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['thunder_boost_l']
    },
    draconic_gene_s: {
	c: 'gene',
	key: 'draconic_gene_s',
	id: '159',
	name: 'Draconic Gene (S)',
	type: '',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '1',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['dragon_boost_s']
    },
    draconic_gene_m: {
	c: 'gene',
	key: 'draconic_gene_m',
	id: '160',
	name: 'Draconic Gene (M)',
	type: '',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['dragon_boost_m']
    },
    draconic_gene_l: {
	c: 'gene',
	key: 'draconic_gene_l',
	id: '161',
	name: 'Draconic Gene (L)',
	type: '',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '3',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['dragon_boost_l']
    },
    all_elem_gene_s: {
	c: 'gene',
	key: 'all_elem_gene_s',
	id: '162',
	name: 'All-Elem Gene (S)',
	type: 'power',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['all_elem_boost_s']
    },
    all_elem_gene_m: {
	c: 'gene',
	key: 'all_elem_gene_m',
	id: '163',
	name: 'All-Elem Gene (M)',
	type: 'power',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['all_elem_boost_m']
    },
    all_elem_gene_l: {
	c: 'gene',
	key: 'all_elem_gene_l',
	id: '164',
	name: 'All-Elem Gene (L)',
	type: 'power',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['all_elem_boost_l']
    },
    power_gene_s: {
	c: 'gene',
	key: 'power_gene_s',
	id: '165',
	name: 'Power Gene (S)',
	type: 'power',
	element: 'fire',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '1',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['power_boost_s']
    },
    power_gene_m: {
	c: 'gene',
	key: 'power_gene_m',
	id: '166',
	name: 'Power Gene (M)',
	type: 'power',
	element: 'fire',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['power_boost_m']
    },
    power_gene_l: {
	c: 'gene',
	key: 'power_gene_l',
	id: '167',
	name: 'Power Gene (L)',
	type: 'power',
	element: 'fire',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['power_boost_l']
    },
    speed_gene_s: {
	c: 'gene',
	key: 'speed_gene_s',
	id: '168',
	name: 'Speed Gene (S)',
	type: 'speed',
	element: 'water',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '1'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['speed_boost_s']
    },
    speed_gene_m: {
	c: 'gene',
	key: 'speed_gene_m',
	id: '169',
	name: 'Speed Gene (M)',
	type: 'speed',
	element: 'water',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['speed_boost_m']
    },
    speed_gene_l: {
	c: 'gene',
	key: 'speed_gene_l',
	id: '170',
	name: 'Speed Gene (L)',
	type: 'speed',
	element: 'water',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['speed_boost_l']
    },
    tech_gene_s: {
	c: 'gene',
	key: 'tech_gene_s',
	id: '171',
	name: 'Tech Gene (S)',
	type: 'technical',
	element: 'thunder',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '1',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['tech_boost_s']
    },
    tech_gene_m: {
	c: 'gene',
	key: 'tech_gene_m',
	id: '172',
	name: 'Tech Gene (M)',
	type: 'technical',
	element: 'thunder',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['tech_boost_m']
    },
    tech_gene_l: {
	c: 'gene',
	key: 'tech_gene_l',
	id: '173',
	name: 'Tech Gene (L)',
	type: 'technical',
	element: 'thunder',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['tech_boost_l']
    },
    power_res_gene_s: {
	c: 'gene',
	key: 'power_res_gene_s',
	id: '174',
	name: 'Power Res Gene (S)',
	type: 'power',
	element: 'ice',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['power_res_s']
    },
    power_res_gene_m: {
	c: 'gene',
	key: 'power_res_gene_m',
	id: '175',
	name: 'Power Res Gene (M)',
	type: 'power',
	element: 'ice',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['power_res_m']
    },
    power_res_gene_l: {
	c: 'gene',
	key: 'power_res_gene_l',
	id: '176',
	name: 'Power Res Gene (L)',
	type: 'power',
	element: 'ice',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['power_res_l']
    },
    speed_res_gene_s: {
	c: 'gene',
	key: 'speed_res_gene_s',
	id: '177',
	name: 'Speed Res Gene (S)',
	type: 'speed',
	element: 'water',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['speed_res_s']
    },
    speed_res_gene_m: {
	c: 'gene',
	key: 'speed_res_gene_m',
	id: '178',
	name: 'Speed Res Gene (M)',
	type: 'speed',
	element: 'water',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['speed_res_m']
    },
    speed_res_gene_l: {
	c: 'gene',
	key: 'speed_res_gene_l',
	id: '179',
	name: 'Speed Res Gene (L)',
	type: 'speed',
	element: 'water',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['speed_res_l']
    },
    tech_res_gene_s: {
	c: 'gene',
	key: 'tech_res_gene_s',
	id: '180',
	name: 'Tech Res Gene (S)',
	type: 'technical',
	element: '',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['tech_res_s']
    },
    tech_res_gene_m: {
	c: 'gene',
	key: 'tech_res_gene_m',
	id: '181',
	name: 'Tech Res Gene (M)',
	type: 'technical',
	element: '',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['tech_res_m']
    },
    tech_res_gene_l: {
	c: 'gene',
	key: 'tech_res_gene_l',
	id: '182',
	name: 'Tech Res Gene (L)',
	type: 'technical',
	element: '',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['tech_res_l']
    },
    evasion_gene_s: {
	c: 'gene',
	key: 'evasion_gene_s',
	id: '183',
	name: 'Evasion Gene (S)',
	type: 'speed',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '1',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['evasion_s']
    },
    evasion_gene_m: {
	c: 'gene',
	key: 'evasion_gene_m',
	id: '184',
	name: 'Evasion Gene (M)',
	type: 'speed',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '1',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['evasion_m']
    },
    evasion_gene_l: {
	c: 'gene',
	key: 'evasion_gene_l',
	id: '185',
	name: 'Evasion Gene (L)',
	type: 'speed',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '2',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['evasion_l']
    },
    cyclone_gene: {
	c: 'gene',
	key: 'cyclone_gene',
	id: '186',
	name: 'Cyclone Gene',
	type: 'speed',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '2',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['dodge_cyclone']
    },
    escape_gene: {
	c: 'gene',
	key: 'escape_gene',
	id: '187',
	name: 'Escape Gene',
	type: 'speed',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '2',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['evasion_instincts']
    },
    tenacity_gene: {
	c: 'gene',
	key: 'tenacity_gene',
	id: '188',
	name: 'Tenacity Gene',
	type: 'power',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['tenacity']
    },
    survivor_gene: {
	c: 'gene',
	key: 'survivor_gene',
	id: '189',
	name: 'Survivor Gene',
	type: 'speed',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['fortify']
    },
    potential_gene: {
	c: 'gene',
	key: 'potential_gene',
	id: '190',
	name: 'Potential Gene',
	type: 'technical',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['potential']
    },
    head_to_head_gene: {
	c: 'gene',
	key: 'head_to_head_gene',
	id: '191',
	name: 'Head-to-Head Gene',
	type: '',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['head_to_head_ace']
    },
    predatory_gene_s: {
	c: 'gene',
	key: 'predatory_gene_s',
	id: '192',
	name: 'Predatory Gene (S)',
	type: 'power',
	element: 'dragon',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '1',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['predatory_s']
    },
    predatory_gene_m: {
	c: 'gene',
	key: 'predatory_gene_m',
	id: '193',
	name: 'Predatory Gene (M)',
	type: 'power',
	element: 'dragon',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['predatory_m']
    },
    predatory_gene_l: {
	c: 'gene',
	key: 'predatory_gene_l',
	id: '194',
	name: 'Predatory Gene (L)',
	type: 'power',
	element: 'dragon',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['predatory_l']
    },
    nesting_gene: {
	c: 'gene',
	key: 'nesting_gene',
	id: '195',
	name: 'Nesting Gene',
	type: '',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '4'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['den_protector']
    },
    kinship_gene_s: {
	c: 'gene',
	key: 'kinship_gene_s',
	id: '196',
	name: 'Kinship Gene (S)',
	type: '',
	element: '',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '2'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['soul_kinship_s']
    },
    kinship_gene_m: {
	c: 'gene',
	key: 'kinship_gene_m',
	id: '197',
	name: 'Kinship Gene (M)',
	type: '',
	element: '',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '3'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['soul_kinship_m']
    },
    kinship_gene_l: {
	c: 'gene',
	key: 'kinship_gene_l',
	id: '198',
	name: 'Kinship Gene (L)',
	type: '',
	element: '',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '4'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['soul_kinship_l']
    },
    quickfire_gene: {
	c: 'gene',
	key: 'quickfire_gene',
	id: '199',
	name: 'Quickfire Gene',
	type: '',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['quickfire']
    },
    quickwater_gene: {
	c: 'gene',
	key: 'quickwater_gene',
	id: '200',
	name: 'Quickwater Gene',
	type: '',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['quickwater']
    },
    quickthunder_gene: {
	c: 'gene',
	key: 'quickthunder_gene',
	id: '201',
	name: 'Quickthunder Gene',
	type: '',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['quickthunder']
    },
    quickice_gene: {
	c: 'gene',
	key: 'quickice_gene',
	id: '202',
	name: 'Quickice Gene',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['quickice']
    },
    quickdragon_gene: {
	c: 'gene',
	key: 'quickdragon_gene',
	id: '203',
	name: 'Quickdragon Gene',
	type: '',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['quickdragon']
    },
    latent_fire_gene: {
	c: 'gene',
	key: 'latent_fire_gene',
	id: '204',
	name: 'Latent Fire Gene',
	type: '',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['latent_fire']
    },
    latent_water_gene: {
	c: 'gene',
	key: 'latent_water_gene',
	id: '205',
	name: 'Latent Water Gene',
	type: '',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['latent_water']
    },
    latent_thunder_gene: {
	c: 'gene',
	key: 'latent_thunder_gene',
	id: '206',
	name: 'Latent Thunder Gene',
	type: '',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['latent_thunder']
    },
    latent_ice_gene: {
	c: 'gene',
	key: 'latent_ice_gene',
	id: '207',
	name: 'Latent Ice Gene',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['latent_ice']
    },
    latent_dragon_gene: {
	c: 'gene',
	key: 'latent_dragon_gene',
	id: '208',
	name: 'Latent Dragon Gene',
	type: '',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['latent_dragon']
    },
    bombardier_gene: {
	c: 'gene',
	key: 'bombardier_gene',
	id: '209',
	name: 'Bombardier Gene',
	type: '',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['bombardier']
    },
    soothing_gene: {
	c: 'gene',
	key: 'soothing_gene',
	id: '210',
	name: 'Soothing Gene',
	type: '',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '3'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['self_heal']
    },
    hungry_gene: {
	c: 'gene',
	key: 'hungry_gene',
	id: '211',
	name: 'Hungry Gene',
	type: '',
	element: '',
	statMods: {
	    hp: '3',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: []
    },
    order_gene_s: {
	c: 'gene',
	key: 'order_gene_s',
	id: '212',
	name: 'Order Gene (S)',
	type: 'technical',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '2'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['order_cost_dwn_s']
    },
    order_gene_m: {
	c: 'gene',
	key: 'order_gene_m',
	id: '213',
	name: 'Order Gene (M)',
	type: 'technical',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '3'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['order_cost_dwn_m']
    },
    order_gene_l: {
	c: 'gene',
	key: 'order_gene_l',
	id: '214',
	name: 'Order Gene (L)',
	type: 'technical',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '4'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['order_cost_dwn_l']
    },
    unscathed_gene: {
	c: 'gene',
	key: 'unscathed_gene',
	id: '215',
	name: 'Unscathed Gene',
	type: 'technical',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '4'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['dancer']
    },
    quick_gene_s: {
	c: 'gene',
	key: 'quick_gene_s',
	id: '216',
	name: 'Quick Gene (S)',
	type: 'speed',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '1',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['quick_s']
    },
    quick_gene_m: {
	c: 'gene',
	key: 'quick_gene_m',
	id: '217',
	name: 'Quick Gene (M)',
	type: 'speed',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '1',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['quick_m']
    },
    quick_gene_l: {
	c: 'gene',
	key: 'quick_gene_l',
	id: '218',
	name: 'Quick Gene (L)',
	type: 'speed',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '2',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['quick_l']
    },
    critical_gene_s: {
	c: 'gene',
	key: 'critical_gene_s',
	id: '219',
	name: 'Critical Gene (S)',
	type: 'speed',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '1',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['critical_eye_s']
    },
    critical_gene_m: {
	c: 'gene',
	key: 'critical_gene_m',
	id: '220',
	name: 'Critical Gene (M)',
	type: 'speed',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '1',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['critical_eye_m']
    },
    critical_gene_l: {
	c: 'gene',
	key: 'critical_gene_l',
	id: '221',
	name: 'Critical Gene (L)',
	type: 'speed',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '2',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['critical_eye_l']
    },
    attack_gene_s: {
	c: 'gene',
	key: 'attack_gene_s',
	id: '222',
	name: 'Attack Gene (S)',
	type: 'power',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['might_s']
    },
    attack_gene_m: {
	c: 'gene',
	key: 'attack_gene_m',
	id: '223',
	name: 'Attack Gene (M)',
	type: 'power',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['might_m']
    },
    attack_gene_l: {
	c: 'gene',
	key: 'attack_gene_l',
	id: '224',
	name: 'Attack Gene (L)',
	type: 'power',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['might_l']
    },
    defense_gene_s: {
	c: 'gene',
	key: 'defense_gene_s',
	id: '225',
	name: 'Defense Gene (S)',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '1',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['iron_wall_s']
    },
    defense_gene_m: {
	c: 'gene',
	key: 'defense_gene_m',
	id: '226',
	name: 'Defense Gene (M)',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['iron_wall_m']
    },
    defense_gene_l: {
	c: 'gene',
	key: 'defense_gene_l',
	id: '227',
	name: 'Defense Gene (L)',
	type: '',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['iron_wall_l']
    },
    health_gene_s: {
	c: 'gene',
	key: 'health_gene_s',
	id: '228',
	name: 'Health Gene (S)',
	type: '',
	element: '',
	statMods: {
	    hp: '1',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['health_s']
    },
    health_gene_m: {
	c: 'gene',
	key: 'health_gene_m',
	id: '229',
	name: 'Health Gene (M)',
	type: '',
	element: '',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['health_m']
    },
    health_gene_l: {
	c: 'gene',
	key: 'health_gene_l',
	id: '230',
	name: 'Health Gene (L)',
	type: '',
	element: '',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['health_l']
    },
    warlike_gene_s: {
	c: 'gene',
	key: 'warlike_gene_s',
	id: '231',
	name: 'Warlike Gene (S)',
	type: 'technical',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '1',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['vicious_s']
    },
    warlike_gene_m: {
	c: 'gene',
	key: 'warlike_gene_m',
	id: '232',
	name: 'Warlike Gene (M)',
	type: 'technical',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['vicious_m']
    },
    warlike_gene_l: {
	c: 'gene',
	key: 'warlike_gene_l',
	id: '233',
	name: 'Warlike Gene (L)',
	type: 'technical',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['vicious_l']
    },
    fire_scale_gene: {
	c: 'gene',
	key: 'fire_scale_gene',
	id: '234',
	name: 'Fire Scale Gene',
	type: 'technical',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['fire_scale']
    },
    water_scale_gene: {
	c: 'gene',
	key: 'water_scale_gene',
	id: '235',
	name: 'Water Scale Gene',
	type: 'technical',
	element: 'water',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '2'
	},
	skills: ['water_scale']
    },
    thunder_scale_gene: {
	c: 'gene',
	key: 'thunder_scale_gene',
	id: '236',
	name: 'Thunder Scale Gene',
	type: 'technical',
	element: 'thunder',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '2',
	    water: '0'
	},
	skills: ['thunder_scale']
    },
    ice_scale_gene: {
	c: 'gene',
	key: 'ice_scale_gene',
	id: '237',
	name: 'Ice Scale Gene',
	type: 'technical',
	element: 'ice',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '2',
	    thunder: '0',
	    water: '0'
	},
	skills: ['ice_scale']
    },
    draconic_scale_gene: {
	c: 'gene',
	key: 'draconic_scale_gene',
	id: '238',
	name: 'Draconic Scale Gene',
	type: 'technical',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['draconic_scale']
    },
    dragon_aura_gene: {
	c: 'gene',
	key: 'dragon_aura_gene',
	id: '239',
	name: 'Dragon Aura Gene',
	type: '',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '2',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['dragon_aura']
    },
    molten_tigrex_gene: {
	c: 'gene',
	key: 'molten_tigrex_gene',
	id: '240',
	name: 'Molten Tigrex Gene',
	type: '',
	element: 'dragon',
	statMods: {
	    hp: '0',
	    atk: '3',
	    def: '0',
	    crit: '-1',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['explosive_dust']
    },
    great_poogie_gene: {
	c: 'gene',
	key: 'great_poogie_gene',
	id: '241',
	name: 'Great Poogie Gene',
	type: '',
	element: '',
	statMods: {
	    hp: '2',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '4'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['predatory_l']
    },
    goukami_gene: {
	c: 'gene',
	key: 'goukami_gene',
	id: '242',
	name: 'Goukami Gene',
	type: 'speed',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '3',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '2',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['fire_boost_l']
    },
    epona_gene: {
	c: 'gene',
	key: 'epona_gene',
	id: '243',
	name: 'Epona Gene',
	type: 'speed',
	element: '',
	statMods: {
	    hp: '0',
	    atk: '0',
	    def: '2',
	    crit: '1',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['speed_boost_l']
    },
    glavenus_gene: {
	c: 'gene',
	key: 'glavenus_gene',
	id: '244',
	name: 'Glavenus Gene',
	type: 'technical',
	element: 'fire',
	statMods: {
	    hp: '0',
	    atk: '2',
	    def: '0',
	    crit: '0',
	    heal: '0'
	},
	eAttkMods: {
	    dragon: '0',
	    fire: '3',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	eResMods: {
	    dragon: '0',
	    fire: '0',
	    ice: '0',
	    thunder: '0',
	    water: '0'
	},
	skills: ['burn_rate_l']
    },
};
