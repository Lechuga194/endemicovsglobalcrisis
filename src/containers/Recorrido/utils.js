const texto = "Proident aliquip nulla aute cillum et deserunt veniam. Dolore irure elit adipisicing amet nulla ut deserunt cillum. Tempor proident irure consequat excepteur eu consectetur do cillum. Lorem voluptate adipisicing veniam id eu. Culpa incididunt excepteur aliqua consequat labore pariatur culpa do id. Incididunt id exercitation elit dolor velit aliqua magna sunt excepteur do irure velit officia dolor. Incididunt consequat magna tempor sunt veniam nisi occaecat laborum ut nisi pariatur. Reprehenderit cillum incididunt elit voluptate. Consectetur reprehenderit velit pariatur veniam magna culpa. Irure occaecat non tempor et cupidatat commodo duis nulla magna nostrud sunt ea in. Culpa sunt do culpa do minim sit pariatur.";
const texto_investigacion = 'Veniam do esse eiusmod veniam deserunt ut voluptate ex cupidatat. Consequat tempor culpa sunt quis aliquip laboris ex tempor elit. Aliquip elit occaecat cillum dolor labore est commodo magna excepteur laborum anim fugiat nisi ad. Eiusmod anim culpa duis mollit culpa labore. Incididunt tempor tempor proident do minim aute cupidatat sint eu ullamco consequat Lorem id eu. Occaecat sint esse ipsum pariatur exercitation minim sunt aute officia. Tempor veniam mollit officia amet duis laboris. Ea incididunt ea sunt officia laboris commodo laboris. Reprehenderit ex quis velit ullamco ullamco sunt elit dolore consequat. Tempor amet velit commodo reprehenderit reprehenderit non nisi incididunt Lorem eu dolor ipsum. Aute nostrud fugiat proident eu elit ad nostrud irure excepteur est cupidatat adipisicing ea in. Eu esse elit ex laborum eiusmod voluptate sint est. Culpa fugiat ex enim irure proident in sit cupidatat.'

const obras = [
    {
        id_obra : 0,
        id_creador: 3,
        tipo : 'imagen',
        contenido: {
            titulo: 'Titulo1',
            tecnica: 'Tecnica1',
            textos : [
                {
                    tipo: 'semblanza',
                    cuerpo: texto
                },
                {
                    tipo: 'descripcion',
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
        id_creador: 4,
        tipo : 'texto',
        contenido: {
            titulo: 'TITULO',
            texto: texto_investigacion
        }
    },
    {
        id_obra : 2,
        id_creador: 0,
        tipo : 'imagen',
        contenido: {
            titulo: 'Titulo2',
            tecnica: 'Tecnica2',
            textos : [
                {
                    tipo: 'semblanza',
                    cuerpo: texto
                },
                {
                    tipo: 'descripcion',
                    cuerpo: texto,
                }
            ],
            tipo: 'imagen',
            src: 'https://images.unsplash.com/photo-1564694457547-6ea79902e0be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByaWRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
    },
    {
        id_obra : 3,
        id_creador: 1,
        tipo : 'texto',
        contenido: {
            titulo: 'TITULO',
            texto: texto_investigacion
        }
    },
]

export default obras;