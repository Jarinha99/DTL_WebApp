var count = 0;
var total = 20;
var j;

var caminhoMusica;
var caminhoCapa;
var titulo;
var tempo = 0;

function ColetaValores() {

    total = localStorage.getItem("total");
    titulo = localStorage.getItem("titulo");
    caminhoCapa = localStorage.getItem("caminhoCapa");
    caminhoMusica = localStorage.getItem("caminhoMusica");
    estilo = localStorage.getItem("estilo");
}

function SetValores() {
    $("#CapaMusica h1").html(titulo);
    $("#CapaMusica img").attr('src', caminhoCapa);
    $(".progress-bar").css("animation", "progress-animation " + total + "s");
    $("#playAudio").attr('src', caminhoMusica);
}

function start() {
    ColetaValores();
    SetValores();
    Contagem();
    SetTempoFim();
    setTimeout('ProximaPagina();', total * 1000);
}
function ProximaPagina() {
    window.location.replace("Feedback.html");
}
function SetTempoFim() {
    if (total < 60) {
        if (total < 10) {
            j = "0" + total;
        } else {
            j = total
        }
        $("#TempoFim p").html("00:" + j);
    } else if (total < 70) {
        j = total;
        j = j - 60;
        j = "0" + j;
        $("#TempoFim p").html("01:" + j);
    } else {
        j = total;
        j = j - 60;
        $("#TempoFim p").html("01:" + j);
    }
}

function Contagem() {
    if (count <= total) {
        if (count < 10) {
            j = "0" + count;
        } else {
            j = count
        }
        if (count < 60) {
            $("#TempoInicio p").html("00:" + j);
        } else if (count < 70) {
            j = count;
            j = j - 60;
            j = "0" + j;
            $("#TempoInicio p").html("01:" + j);
        } else {
            j = count;
            j = j - 60;
            $("#TempoInicio p").html("01:" + j);
        }
        count++;
        setTimeout('Contagem();', 1000);
    }
}

/*Funções de Música*/

/* POP */
function MusicSugar() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/Maroon5-Sugar.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/Capa_de_Sugar_(Maroon_5).png");
    localStorage.setItem("titulo", "Maroon 5 - Sugar");
    localStorage.setItem("total", 48);
    localStorage.setItem("estilo", "POP");
}
function MusicJustin() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/Justin Bieber - Sorry.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/Capa_Sorry_Justin.jpg");
    localStorage.setItem("titulo", "Justin Bieber - Sorry");
    localStorage.setItem("total", 42);
    localStorage.setItem("estilo", "POP");
}
function MusicNewRules() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/Dua Lipa - New Rules.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/Capa_New_Rules.jpg");
    window.localStorage.setItem("titulo", "Dua Lipa - New Rules");
    localStorage.setItem("total", 36);
    localStorage.setItem("estilo", "POP");
}
function MusicNotSorry() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/Demi Lovato - Sorry Not Sorry.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/Capa_de_Sorry_Not_Sorry.jpeg");
    localStorage.setItem("titulo", "Demi Lovato - Sorry Not Sorry");
    localStorage.setItem("total", 39);
    localStorage.setItem("estilo", "POP");
}

function MusicSingle() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/Beyonce - Single ladies.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/Capa_Single_Ladies.jpg");
    localStorage.setItem("titulo", "Beyonce - Single ladies");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "POP");
}

function MusicBrunoMars() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/Bruno Mars - Thats What I Like.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/BrunoMars_MarryYou.jpeg");
    localStorage.setItem("titulo", "Bruno Mars - Thats What I Like");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "POP");
}

function MusicShape() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/Ed Sheeran - Shape of You.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/ed-sheeran-divide-capa.jpg");
    localStorage.setItem("titulo", "Ed Sheeran - Shape of You");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "POP");
}

function MusicTimberlake() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/Justin Timberlake - Can't Stop The Feeling.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/Timberlake.jfif");
    localStorage.setItem("titulo", "Justin Timberlake - Can't Stop The Feeling");
    localStorage.setItem("total", 35);
    localStorage.setItem("estilo", "POP");
}

function MusicUpTown() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/Mark Ronson ft. Bruno Mars - Uptown Funk.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/Mark Ronson ft. Bruno Mars - Uptown Funk.jpg");
    localStorage.setItem("titulo", "Mark Ronson - Uptown Funk");
    localStorage.setItem("total", 33);
    localStorage.setItem("estilo", "POP");
}

function MusicThriller() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/Michael Jackson - Thriller.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/Michael Jackson - Thriller.jpg");
    localStorage.setItem("titulo", "Michael Jackson - Thriller");
    localStorage.setItem("total", 34);
    localStorage.setItem("estilo", "POP");
}

function MusicBestSong() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/One Direction - Best Song Ever.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/One Direction - Best Song Ever.png");
    localStorage.setItem("titulo", "One Direction - Best Song Ever");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "POP");
}

function MusicHappy() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/Pharrell Williams - Happy.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/Pharrell Williams - Happy.jpg");
    localStorage.setItem("titulo", "Pharrell Williams - Happy");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "POP");
}

function MusicSpice() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/Spice Girls - Wannabe.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/Wannabe.png");
    localStorage.setItem("titulo", "Spice Girls - Wannabe");
    localStorage.setItem("total", 27);
    localStorage.setItem("estilo", "POP");
}

function MusicShekItOff() {
    localStorage.setItem("caminhoMusica", "Musics/Pop/Taylor Swift - Shake It Off.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Pop/Taylor Swift - Shake It Off.jpg");
    localStorage.setItem("titulo", "Taylor Swift - Shake It Off");
    localStorage.setItem("total", 29);
    localStorage.setItem("estilo", "POP");
}

/* Hip Hop */

function MusicGodsPlan() {
    localStorage.setItem("caminhoMusica", "Musics/HipHop/Drake - God’s Plan.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/HipHop/Drake.jpg");
    localStorage.setItem("titulo", "Drake - God's Plan");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Hip-Hop");
}

function MusicDrakeHot() {
    localStorage.setItem("caminhoMusica", "Musics/Hip Hop/Drake - Hotline Bling.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/HipHop/DrakeHot.jpg");
    localStorage.setItem("titulo", "Drake - Hotline bling.mp3");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Hip-Hop");
}

function MusicOneTime() {
    localStorage.setItem("caminhoMusica", "Musics/HipHop/Kid Ink - One Time.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/HipHop/kind-ink.jpg");
    localStorage.setItem("titulo", "Kid Ink - One Time");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Hip-Hop");
}

function MusicJump() {
    localStorage.setItem("caminhoMusica", "Musics/HipHop/Kris Kross - Jump.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/HipHop/KrisKross.jpg");
    localStorage.setItem("titulo", "Kris Kross - Jump");
    localStorage.setItem("total", 47);
    localStorage.setItem("estilo", "Hip-Hop");
}

function MusicBetterNow() {
    localStorage.setItem("caminhoMusica", "Musics/HipHop/Post Malone - Better Now.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/HipHop/post_malone.jpg");
    localStorage.setItem("titulo", "Post Malone - Better Now");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Hip-Hop");
}
/* Rock */

function MusicBackinBlack() {
    localStorage.setItem("caminhoMusica", "Musics/Rock/ACDC - Back In Black.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Rock/ACDC-Back-in-Black.jpg");
    localStorage.setItem("titulo", "ACDC - Back in Black");
    localStorage.setItem("total", 62);
    localStorage.setItem("estilo", "Rock");
}

localStorage.setItem("fb_note", "5");
localStorage.setItem("fb_genero", "Rock");

function MusicCocaCola() {
    localStorage.setItem("caminhoMusica", "Musics/Rock/Legião Urbana - Geração Coca-Cola.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Rock/GeracaoCocaCola.jpg");
    localStorage.setItem("titulo", "Legião Urbana - Geração Coca Cola");
    localStorage.setItem("total", 39);
    localStorage.setItem("estilo", "Rock");
}

function MusicGuns() {
    localStorage.setItem("caminhoMusica", "Musics/Rock/Guns N Roses - Sweet Child O Mine.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Rock/Guns.jpg");
    localStorage.setItem("titulo", "Guns - Sweet Child O Mine");
    localStorage.setItem("total", 29);
    localStorage.setItem("estilo", "Rock");
}

function MusicQueen() {
    localStorage.setItem("caminhoMusica", "Musics/Rock/Queen - We Will Rock You.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Rock/Queen.jpg");
    localStorage.setItem("titulo", "Queen - We Will Rock You");
    localStorage.setItem("total", 60);
    localStorage.setItem("estilo", "Rock");
}

/* Sertanejo */

function MusicArCondicionado() {
    localStorage.setItem("caminhoMusica", "Musics/Sertanejo/Wesley Safadão - Ar condicionado no 15.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Sertanejo/Ar_Condicionado.jpg");
    localStorage.setItem("titulo", "Wesley Safadao - Ar Condicionado no 15");
    localStorage.setItem("total", 47);
    localStorage.setItem("estilo", "Sertanejo");
}

function MusicDonaMaria() {
    localStorage.setItem("caminhoMusica", "Musics/Sertanejo/Thiago Brava Ft. Jorge - Dona Maria.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Sertanejo/DonaMaria.jpg");
    localStorage.setItem("titulo", "Thiago Brava - Dona Maria");
    localStorage.setItem("total", 44);
    localStorage.setItem("estilo", "Sertanejo");
}

function MusicRomance() {
    localStorage.setItem("caminhoMusica", "Musics/Sertanejo/Wesley Safadão e Anitta - Romance Com Safadeza.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Sertanejo/RomanceComSafadeza.jpg");
    localStorage.setItem("titulo", "Wesley Safadao - Romance com Safadeza");
    localStorage.setItem("total", 43);
    localStorage.setItem("estilo", "Sertanejo");
}

function MusicTaTumTum() {
    localStorage.setItem("caminhoMusica", "Musics/Sertanejo/Kevinho e Simone  Simaria - Ta Tum Tum (KondZilla).mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Sertanejo/Ta-Tum-Tum.jpg");
    localStorage.setItem("titulo", "Simone e Simaria - Ta Tum Tum");
    localStorage.setItem("total", 36);
    localStorage.setItem("estilo", "Sertanejo");
}

/* Latina */

function MusicCorazon() {
    localStorage.setItem("caminhoMusica", "Musics/Latina/Maluma - Corazón.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Latina/Corazon.jpg");
    localStorage.setItem("titulo", "Maluma - Corazón");
    localStorage.setItem("total", 20);
    localStorage.setItem("estilo", "Latino");
}

function MusicDespacito() {
    localStorage.setItem("caminhoMusica", "Musics/Latina/Luis Fonsi - Despacito.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Latina/Despacito.jpg");
    localStorage.setItem("titulo", "Luis Fonsi - Despacito");
    localStorage.setItem("total", 45);
    localStorage.setItem("estilo", "Latino");
}

function MusicKuduro() {
    localStorage.setItem("caminhoMusica", "Musics/Latina/Don Omar - Danza Kuduro.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Latina/Kuduro.jpg");
    localStorage.setItem("titulo", "Don Omar - Danza Kuduro");
    localStorage.setItem("total", 29);
    localStorage.setItem("estilo", "Latino");
}

function MusicMeRehuso() {
    localStorage.setItem("caminhoMusica", "Musics/Latina/Danny Ocean - Me Rehuso.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Latina/MeRehuso.jpg");
    localStorage.setItem("titulo", "Danny Ocean - Me Rehuso");
    localStorage.setItem("total", 45);
    localStorage.setItem("estilo", "Latino");
}

/* Indie */

function MusicSweaterWeather() {
    localStorage.setItem("caminhoMusica", "Musics/Indie/The Neighbourhood - Sweater Weather.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Indie/Neighbourhood.jpg");
    localStorage.setItem("titulo", "The Neighbourhood - Sweater Weather");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Indie");
}

function MusicRandomLights() {
    localStorage.setItem("caminhoMusica", "Musics/Indie/Ottawa - Random Lights.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Indie/Ottawa.jpg");
    localStorage.setItem("titulo", "Ottawa - Random Lights");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Indie");
}

function MusicWildHeart() {
    localStorage.setItem("caminhoMusica", "Musics/Indie/The Vamps - Wild Heart.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Indie/TheVamp.jpg");
    localStorage.setItem("titulo", "The Vamps - Wild Heart");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Indie");
}

function MusicYoung() {
    localStorage.setItem("caminhoMusica", "Musics/Indie/Cosmos & Creature - Young.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Indie/Young.jpg");
    localStorage.setItem("titulo", "Cosmos & Creature - Young");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Indie");
}

/* Jogos */

function MusicDota() {
    localStorage.setItem("caminhoMusica", "Musics/Jogos/Dota - Basshunter.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Jogos/Dota.jpg");
    localStorage.setItem("titulo", "Basshunter - Dota");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Jogos");
}

function MusicLIS() {
    localStorage.setItem("caminhoMusica", "Musics/Jogos/Life is strange OST - To All of You.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Jogos/LIS.jpg");
    localStorage.setItem("titulo", "Life is strange - To All of You");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Jogos");
}

function MusicSkyrim() {
    localStorage.setItem("caminhoMusica", "Musics/Jogos/Skyrim - The Song of the Dragonborn.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Jogos/Skyrim.jpg");
    localStorage.setItem("titulo", "Skyrim - The Song of the Dragonborn");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Jogos");
}

function MusicMario() {
    localStorage.setItem("caminhoMusica", "Musics/Jogos/Super Mario Bros. Theme Song.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Jogos/Mario.jpg");
    localStorage.setItem("titulo", "Super Mario Bros. Theme Song");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Jogos");
}

/* Funk */

function MusicCerol() {
    localStorage.setItem("caminhoMusica", "Musics/Funk/Bonde do Tigrao - Cerol na Mao.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Funk/CerolNaMao.jpg");
    localStorage.setItem("titulo", "Bonde do Tigrão - Cerol na Mão");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Funk");
}

function MusicExplosao() {
    localStorage.setItem("caminhoMusica", "Musics/Funk/MC Kevinho - Olha a Explosão.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Funk/Explosao.jpg");
    localStorage.setItem("titulo", "MC Kevinho - Olha a Explosão");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Funk");
}

function MusicFuleragem() {
    localStorage.setItem("caminhoMusica", "Musics/Funk/MC WM - Fuleragem.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Funk/Fuleragem.jpg");
    localStorage.setItem("titulo", "MC WM - Fuleragem");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Funk");
}

function MusicVaiMalandra() {
    localStorage.setItem("caminhoMusica", "Musics/Funk/Anitta, Mc Zaac, Maejor ft. Tropkillaz  DJ Yuri Martins - Vai Malandra.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Funk/VaiMalandra.jpg");
    localStorage.setItem("titulo", "Anitta - Vai Malandra");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Funk");
}

function MusicSoQuerVrau() {
    localStorage.setItem("caminhoMusica", "Musics/Funk/MC MM - Só Quer Vrau.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/Funk/SoQuerVrau.jpg");
    localStorage.setItem("titulo", "MC MM - Só Quer Vrau");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Funk");
}

/* Séries */

function MusicFriends() {
    localStorage.setItem("caminhoMusica", "Musics/Séries/F.R.I.E.N.D.S - Opening Season 1.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/series/Friends.jpg");
    localStorage.setItem("titulo", "Friends -I'll be there for you");
    localStorage.setItem("total", 47);
    localStorage.setItem("estilo", "Series");
}


function MusicGOT() {
    localStorage.setItem("caminhoMusica", "Musics/Séries/GOT - opening.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/series/GOT.jpg");
    localStorage.setItem("titulo", "Game Of Thrones - Opening");
    localStorage.setItem("total", 101);
    localStorage.setItem("estilo", "Series");
}


function MusicSOA() {
    localStorage.setItem("caminhoMusica", "Musics/Séries/Sons of Anarchy  Opening Scene.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/series/sons-of-anarchy.jpg");
    localStorage.setItem("titulo", "Sons Of Anarchy - This Life");
    localStorage.setItem("total", 35);
    localStorage.setItem("estilo", "Series");
}

function MusicMaluco() {
    localStorage.setItem("caminhoMusica", "Musics/Séries/Um maluco no pedaço - opening.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/series/maluco.jpg");
    localStorage.setItem("titulo", "Um maluco no pedaço - Abertura");
    localStorage.setItem("total", 110);
    localStorage.setItem("estilo", "Series");
}


/* Brega */

function MusicMacarena() {
    localStorage.setItem("caminhoMusica", "Musics/Clássicos para dançar/Los Del Rio - La Macarena.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/classicos/los del rio - macarena.jpg");
    localStorage.setItem("titulo", "Los Del Rio - La Macarena");
    localStorage.setItem("total", 48);
    localStorage.setItem("estilo", "Brega");
}

function MusicIWant() {
    localStorage.setItem("caminhoMusica", "Musics/Clássicos para dançar/Queen - I Want To Break Free.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/classicos/Queen - I want.jpg");
    localStorage.setItem("titulo", "Queen - I Want Break Free");
    localStorage.setItem("total", 86);
    localStorage.setItem("estilo", "Brega");
}

function MusicVidaLoca() {
    localStorage.setItem("caminhoMusica", "Musics/Clássicos para dançar/Ricky Martin - Livin La Vida Loca.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/classicos/Ricky Martin - Livin la Vida Loca.jpg");
    localStorage.setItem("titulo", "Ricky Martin - Livin La Vida Loca");
    localStorage.setItem("total", 56);
    localStorage.setItem("estilo", "Brega");
}

function MusicYMCA() {
    localStorage.setItem("caminhoMusica", "Musics/Clássicos para dançar/Village People - YMCA.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/classicos/Village People - YMCA.jpg");
    localStorage.setItem("titulo", "Village People - YMCA");
    localStorage.setItem("total", 33);
    localStorage.setItem("estilo", "Brega");
}

/* Axé */

function MusicSorte() {
    localStorage.setItem("caminhoMusica", "Musics/Axé/Ivete Sangalo - Sorte Grande.mp3");
    localStorage.setItem("caminhoCapa", "Images/Capas/axe/Ivete - Sorte Grande.jpg");
    localStorage.setItem("titulo", "Ivete Sangalo - Sorte Grande");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Axe");
}

function MusicLargadinho() {
    localStorage.setItem("caminhoMusica", "Musics/Axé/Claudia Leitte - Largadinho.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/axe/Claudia Leite - Largadinho.jpg");
    localStorage.setItem("titulo", "Claudia Leite - Largadinho");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Axe");
}

function MusicMaozinha() {
    localStorage.setItem("caminhoMusica", "Musics/Axé/Tchakabum - Dança da maozinha.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/axe/Tchakabum - Maozinha.jpg");
    localStorage.setItem("titulo", "Tchakabum - Dança da Mãozinha");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Axe");
}

function MusicOnda() {
    localStorage.setItem("caminhoMusica", "Musics/Axé/Tchakabum - Onda Onda.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/axe/Tchakabum - Onda.jpg");
    localStorage.setItem("titulo", "Tchakabum - Onda Onda");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Axe");
}

function MusicBabado() {
    localStorage.setItem("caminhoMusica", "Musics/Axé/Babado Novo - Bola De Sabão.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/axe/Babado Novo - Bola De Sabão.jfif");
    localStorage.setItem("titulo", "Babado Novo - Bola De Sabão");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Axe");
}

function MusicBomba() {
    localStorage.setItem("caminhoMusica", "Musics/Axé/BragaBoys - Bomba.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/axe/BragaBoys - Bomba.jfif");
    localStorage.setItem("titulo", "BragaBoys - Bomba");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Axe");
}

function MusicLiga() {
    localStorage.setItem("caminhoMusica", "Musics/Axé/LevaNóiz - Liga da Justiça.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/axe/LevaNóiz - Liga da Justiça.jpg");
    localStorage.setItem("titulo", "LevaNóiz - Liga da Justiça");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Axe");
}

/* Eletrônica */

function MusicLeanOn() {
    localStorage.setItem("caminhoMusica", "Musics/Eletrônica/Lean On - Major Lazer  DJ Snake - (feat. MØ).mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/eletronico/Major Lazer ft. DJ Snake - Lean On.mp3");
    localStorage.setItem("titulo", "Major - Lean On");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Eletronica");
}

function MusicSummer() {
    localStorage.setItem("caminhoMusica", "Musics/Eletrônica/Calvin Harris - Summer");
    localStorage.setItem("caminhoCapa", "Images/capas/eletronico/Calvin Harris - Summer.jpg");
    localStorage.setItem("titulo", "Calvin Harris - Summer");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Eletronica");
}

function MusicBoom() {
    localStorage.setItem("caminhoMusica", "Musics/Eletrônica/Tiësto, Sevenn - BOOM.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/eletronico/Tiesto Sevenn - Boom.jpg");
    localStorage.setItem("titulo", "Tiesto Sevenn - Boom");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Eletronica");
}

function MusicWake() {
    localStorage.setItem("caminhoMusica", "Musics/Eletrônica/Avicii - Wake Me Up.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/eletronico/wake me up - avicii.jpg");
    localStorage.setItem("titulo", "Avicci - Wake me up");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Eletronica");
}

function MusicJustDance() {
    localStorage.setItem("caminhoMusica", "Musics/Eletrônica/Lady Gaga - Just Dance.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/eletronico/Lady Gaga - Just Dance.jfif");
    localStorage.setItem("titulo", "Lady Gaga - Just Dance");
    localStorage.setItem("total", 21);
    localStorage.setItem("estilo", "Eletronica");
}

function MusicGangam() {
    localStorage.setItem("caminhoMusica", "Musics/Eletrônica/PSY - Gangnam Style.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/eletronico/PSY - Gangnam Style.jfif");
    localStorage.setItem("titulo", "PSY - Gangnam Style");
    localStorage.setItem("total", 31);
    localStorage.setItem("estilo", "Eletronica");
}

function MusicGangam() {
    localStorage.setItem("caminhoMusica", "Musics/Eletrônica/PSY - Gentleman.mp3");
    localStorage.setItem("caminhoCapa", "Images/capas/eletronico/PSY - Gentleman.jpg");
    localStorage.setItem("titulo", "PSY - Gentleman");
    localStorage.setItem("total", 30);
    localStorage.setItem("estilo", "Eletronica");
}

