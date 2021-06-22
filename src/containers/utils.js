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

const obras = [
    {
        id_obra : 0,
        id_creador: 0,
        tipo : 'imagen',
        contenido: {
            titulo: 'Titulo1',
            tecnica: 'Tecnica1',
            textos : [
                {
                    tipo: 'Semblanza',
                    cuerpo: texto
                },
                {
                    tipo: 'Descripcion',
                    cuerpo: texto,
                },
                {
                    tipo: 'random',
                    cuerpo: 'OWO',
                }
            ],
            src: 'https://images.unsplash.com/photo-1533591917057-a0b77b40de75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJpZGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
    },
    {
        id_obra : 1,
        id_creador: 2,
        tipo : 'imagen',
        contenido: {
            titulo: 'Titulo1',
            tecnica: 'Tecnica1',
            textos : [
                {
                    tipo: 'Semblanza',
                    cuerpo: texto
                },
                {
                    tipo: 'Descripcion',
                    cuerpo: texto,
                },
                {
                    tipo: 'random',
                    cuerpo: 'OWO',
                }
            ],
            src: 'https://i0.wp.com/porticomx.net/wp-content/uploads/2020/03/beastars.jpg?resize=850%2C560&ssl=1'
        },
    },
    {
        id_obra : 2,
        id_creador: 6,
        tipo : 'imagen',
        contenido: {
            titulo: 'Titulo1',
            tecnica: 'Tecnica1',
            textos : [
                {
                    tipo: 'Semblanza',
                    cuerpo: texto
                },
                {
                    tipo: 'Descripcion',
                    cuerpo: texto,
                },
                {
                    tipo: 'Prueba',
                    cuerpo: 'OWO22222',
                }
            ],
            src: 'https://i.pinimg.com/originals/09/4e/8e/094e8eb6fc8103553b7fd1ef3d474b8f.jpg'
        },
    },
    {
        id_obra : 1,
        id_creador: 1,
        tipo : 'texto',
        contenido: {
            titulo: 'TITULO',
            texto: texto_investigacion
        }
    },{
        id_obra : 4,
        id_creador: 5,
        tipo : 'texto',
        contenido: {
            titulo: 'TITULO',
            texto: textoExtremo
        }
    },
    {
        id_obra : 6,
        id_creador: 7,
        tipo : 'texto',
        contenido: {
            titulo: 'TITULO',
            texto: texto_investigacion
        }
    },
]

const salas = [
    {
        id: 1,
        texto: 'ANALISIS SEMÁNTICO DE "CRISIS" EXPLORACIÓN DEL CONCEPTO DESDE DISTINTAS DISCIPLINAS. MENCIONAN (DE MANERA MÁS EXPLÍCITA) EL POTENCIAL DE CAMBIO EN LAS CRISIS'
    },{
        id: 2,
        texto: 'LA CRISIS COMO UNA PROPIEDAD DE LA FÍSICA. SE ANALIZA A PARTIR DEL DETERIORO, LAS TRANSICIONES Y SU EFECTO EN LOS SISTEMAS'
    },{
        id: 3,
        texto: 'ANÁLISIS SOCIOLÓGICO DE LA CRISIS. CRITICAS HACIA EL SISTEMA CAPITALISTA NEOLIBERAL (EL ORIGEN DE LAS CRISIS QUE SE VIVEN EN LA ACTUALIDAD)'
    },{
        id: 4,
        texto: 'ANALISIS DEL CONCEPTO DE CRISIS A PARTIR DE SU INESTABILIDAD Y RELACIÓN CON FENOMENOS ANTROPOLÓGICOS (RELACIÓN SERES HUMANOS Y EL ENTORNO)'
    },{
        id: 5,
        texto: 'TRABAJOS CURATORIALES PRESENTADOS COMO OBRAS'
    },
]

const recorrido_completo = [
    {
        id_creador: 0,
        id_obra: 1 
    },
    {
        id_creador: 7,
        id_obra: 6 
    },
    {
        id_creador: 5,
        id_obra: 4 
    },
    {
        id_creador: 2,
        id_obra: 1 
    },
    {
        id_creador: 7,
        id_obra: 6 
    },
]


export {creadores, obras, salas, recorrido_completo}