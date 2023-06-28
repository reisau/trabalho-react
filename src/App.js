import "./style.css"
import Header from "./componentes/Header/Header.js";
import Footer from "./componentes/Footer/Footer.js";
import Nav from "./componentes/Nav/Nav.js";
import Home from "./Pagina/Home/Home";


function App() {

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
    }

    return (
        <>
            <body>
                <div class="tela-inteira">
                    <Header/>
                    <main>
                        <Nav/>
                        <Home reproduz={reproduzVideo}/>
                    </main>
                </div>
            </body>
            <Footer/>
        </>
    );
}
export default App;
