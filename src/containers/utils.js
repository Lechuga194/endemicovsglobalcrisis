const texto = "Proident aliquip nulla aute cillum et deserunt veniam. Dolore irure elit adipisicing amet nulla ut deserunt cillum. Tempor proident irure consequat excepteur eu consectetur do cillum. Lorem voluptate adipisicing veniam id eu. Culpa incididunt excepteur aliqua consequat labore pariatur culpa do id. Incididunt id exercitation elit dolor velit aliqua magna sunt excepteur do irure velit officia dolor. Incididunt consequat magna tempor sunt veniam nisi occaecat laborum ut nisi pariatur. Reprehenderit cillum incididunt elit voluptate. Consectetur reprehenderit velit pariatur veniam magna culpa. Irure occaecat non tempor et cupidatat commodo duis nulla magna nostrud sunt ea in. Culpa sunt do culpa do minim sit pariatur.";
const texto_investigacion = 'Veniam do esse eiusmod veniam deserunt ut voluptate ex cupidatat. Consequat tempor culpa sunt quis aliquip laboris ex tempor elit. Aliquip elit occaecat cillum dolor labore est commodo magna excepteur laborum anim fugiat nisi ad. Eiusmod anim culpa duis mollit culpa labore. Incididunt tempor tempor proident do minim aute cupidatat sint eu ullamco consequat Lorem id eu. Occaecat sint esse ipsum pariatur exercitation minim sunt aute officia. Tempor veniam mollit officia amet duis laboris. Ea incididunt ea sunt officia laboris commodo laboris. Reprehenderit ex quis velit ullamco ullamco sunt elit dolore consequat. Tempor amet velit commodo reprehenderit reprehenderit non nisi incididunt Lorem eu dolor ipsum. Aute nostrud fugiat proident eu elit ad nostrud irure excepteur est cupidatat adipisicing ea in. Eu esse elit ex laborum eiusmod voluptate sint est. Culpa fugiat ex enim irure proident in sit cupidatat.'
const textoExtremo = texto + texto + texto + texto + texto + texto + texto;
const creadores = [
    {
        id: 0,
        rol: 'Artista',
        nombre: 'Sebastian',
        pais: 'Mexico',
        biografia: 'Nacido en Mexico ' + texto,
    },
    {
        id: 1,
        rol: 'Investigador',
        nombre: 'Isaac',
        pais: 'Mexico',
        biografia: texto

    },
    {
        id: 2,
        rol: 'Artista',
        nombre: 'Nick',
        pais: 'USA',
        biografia: texto
    },
    {
        id: 3,
        rol: 'Investigador',
        nombre: 'Eduardo',
        pais: 'Mexico',
        biografia: texto

    },
    {
        id: 4,
        rol: 'Artista',
        nombre: 'Legosi',
        pais: 'Japón',
        biografia: texto
    },
    {
        id: 5,
        rol: 'Investigador',
        nombre: 'Leon',
        pais: 'España',
        biografia: texto

    },
    {
        id: 6,
        rol: 'Artista',
        nombre: 'Chicobo',
        pais: 'Canada',
        biografia: texto
    },
    {
        id: 7,
        rol: 'Investigador',
        nombre: 'Sam',
        pais: 'USA',
        biografia: texto

    },
]

//POR SI RESULTA QUE TODOS LAS OBRAS TIENEN UN SOLO TEXTO
// {
//     id_obra : 2,
//     id_creador: 1,
//     tipo : 'imagen',
//     titulo : 'Titulo1',
//     texto: '',
//     imagen: {
//         src: 'https://images.unsplash.com/photo-1612040955893-6a995513b6a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=938&q=80',
//         tecnica: 'Tecnica1',
//     },
// },

const obras = [
    {
        id_obra : 1,
        id_creador: 1,
        tipo : 'imagen',
        titulo : 'Titulo1',
        textos : [
            {
                tipo: 'Descripción',
                cuerpo: texto
            },
            {
                tipo: 'Semblanza',
                cuerpo: 'Semblanza...' + texto
            },
            {
                tipo: 'Otro',
                cuerpo: 'Hola! ' + texto
            }
        ],
        imagen: {
            src: 'https://images.unsplash.com/photo-1533591917057-a0b77b40de75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJpZGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            tecnica: 'Tecnica1',
        },
    },
    {
        id_obra : 2,
        id_creador: 1,
        tipo : 'imagen',
        titulo : 'Titulo1',
        textos : [
            {
                tipo: 'Descripción',
                cuerpo: texto
            }
        ],
        imagen: {
            src: 'https://images.unsplash.com/photo-1612040955893-6a995513b6a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=938&q=80',
            tecnica: 'Tecnica1',
        },
    },
    {
        id_obra : 3,
        id_creador: 1,
        tipo : 'imagen',
        titulo : 'Titulo1',
        textos : [
            {
                tipo: 'Descripción',
                cuerpo: texto
            }
        ],
        imagen: {
            src: 'https://images-na.ssl-images-amazon.com/images/I/81KWYrlOt7L._AC_SL1254_.jpg',
            tecnica: 'Tecnica1',
        },
    },
    {
        id_obra : 4,
        id_creador: 1,
        tipo : 'imagen',
        titulo : 'Titulo1',
        textos : [
            {
                tipo: 'Descripción',
                cuerpo: texto
            }
        ],
        imagen: {
            src: 'https://images.alphacoders.com/588/thumb-1920-588042.jpg',
            tecnica: 'Tecnica1',
        },
    },
    {
        id_obra : 50,
        id_creador: 54,
        tipo : 'investigacion',
        titulo : 'Titulo de investigacion #1',
        investigacion: {
            texto: "Este texto de investigacion... " + texto_investigacion + textoExtremo
        },
    },
    {
        id_obra : 51,
        id_creador: 2,
        tipo : 'video',
        titulo : 'Titulo1',
        textos : [
            {
                tipo: 'Descripción',
                cuerpo: texto
            }
        ],
        video: {
            src: 'https://www.youtube.com/embed/tIOBLlehkpA',
            tecnica: 'Tecnica1',
        },
    },
    {
        id_obra : 52,
        id_creador: 2,
        tipo : 'video',
        titulo : 'Titulo1',
        textos : [
            {
                tipo: 'Descripción',
                cuerpo: texto
            }
        ],
        video: {
            src: 'https://www.youtube.com/embed/hcZuvvtkN9k',
            tecnica: 'Tecnica1',
        },
    },
    
]

const salas = [
    {
        id: 1,
        texto: 'ANALISIS SEMÁNTICO DE "CRISIS" EXPLORACIÓN DEL CONCEPTO DESDE DISTINTAS DISCIPLINAS. MENCIONAN EL POTENCIAL DE CAMBIO EN LAS CRISIS',
        creadores: [
            1,2
        ]
    },{
        id: 2,
        texto: 'LA CRISIS COMO UNA PROPIEDAD DE LA FÍSICA. SE ANALIZA A PARTIR DEL DETERIORO, LAS TRANSICIONES Y SU EFECTO EN LOS SISTEMAS',
        creadores: [
            1,2
        ]
    },{
        id: 3,
        texto: 'ANÁLISIS SOCIOLÓGICO DE LA CRISIS. CRITICAS HACIA EL SISTEMA CAPITALISTA NEOLIBERAL (EL ORIGEN DE LAS CRISIS QUE SE VIVEN EN LA ACTUALIDAD)',
        creadores: [
            1,2
        ]
    },{
        id: 4,
        texto: 'ANALISIS DEL CONCEPTO DE CRISIS A PARTIR DE SU INESTABILIDAD Y RELACIÓN CON FENOMENOS ANTROPOLÓGICOS (RELACIÓN SERES HUMANOS Y EL ENTORNO)',
        creadores: [
            1,2
        ]
    },{
        id: 5,
        texto: 'TRABAJOS CURATORIALES PRESENTADOS COMO OBRAS',
        creadores: [
            1,2
        ]
    },{
        id: 6,
        texto: 'RECORRIDO COMPLETO',
        creadores: [
            1,2,54
        ]
    },
]




export {creadores, obras, salas}