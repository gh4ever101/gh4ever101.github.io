/*
    Gene info!
    Known gene information that needs to be transcribed: https://docs.google.com/spreadsheets/d/1p8S4Yhsp648KNkII-emR4-9WE0zWgIGAWMc-kl-bFe4/
    For MHST2, name upgraded genes with a trailing +
    What to put for values:
    c: 'gene'
    key: whatever you chose for the identifier for the gene
    id: previous id + 1
    name: the name of the gene
    type: '' if there is no type, otherwise 'power', 'technical', or 'speed'
    element: '' if there is no element, otherwise 'dragon', 'fire', 'ice', 'thunder', 'water'
    statMods: modifiers to various stats
    eAttkMods: modifiers to elemental attacks
    eResMods: modifiers to elemental resistances
    skills: name of skills the gene enables, input as ['observe', 'fireball'], etc.
*/
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
    health_boost_s: {
      c: 'gene',
      key: 'health_boost_s',
      id: '0',
      name: 'Health Boost (S)',
      type: 'power',
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
    health_boost_sp: {
      c: 'gene',
      key: 'health_boost_sp',
      id: '1',
      name: 'Health Boost (S)+',
      type: 'power',
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
    health_boost_spp: {
      c: 'gene',
      key: 'health_boost_spp',
      id: '2',
      name: 'Health Boost (S)++',
      type: 'power',
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
   health_boost_m: {
      c: 'gene',
      key: 'health_boost_m',
      id: '3',
      name: 'Health Boost (M)',
      type: 'power',
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
     health_boost_mp: {
      c: 'gene',
      key: 'health_boost_mp',
      id: '4',
      name: 'Health Boost (M)+',
      type: 'power',
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
       health_boost_mpp: {
      c: 'gene',
      key: 'health_boost_mpp',
      id: '5',
      name: 'Health Boost (M)++',
      type: 'power',
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
       health_boost_l: {
      c: 'gene',
      key: 'health_boost_l',
      id: '6',
      name: 'Health Boost (L)',
      type: 'power',
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
       health_boost_lp: {
      c: 'gene',
      key: 'health_boost_lp',
      id: '7',
      name: 'Health Boost (L)+',
      type: 'power',
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
       health_boost_lpp: {
      c: 'gene',
      key: 'health_boost_lpp',
      id: '8',
      name: 'Health Boost (L)++',
      type: 'power',
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
       health_boost_xl: {
      c: 'gene',
      key: 'health_boost_xl',
      id: '9',
      name: 'Health Boost (XL)',
      type: 'power',
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
       health_boost_xlpp: {
      c: 'gene',
      key: 'health_boost_xlpp',
      id: '10',
      name: 'Health Boost (XL)++',
      type: 'power',
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
       critical_s: {
      c: 'gene',
      key: 'critical_s',
      id: '11',
      name: 'Critical (S)',
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
          dragon: '0',
          fire: '0',
          ice: '0',
          thunder: '0',
          water: '0'
      },
      skills: []
    }
};
