function App() {
  return (
    <div>
      <main className="main">
        <h1 className="titulo">Floresta Perdida</h1>
        <p className="descricao">
          Site em construção. Enquanto isso, assista o trailer magnifico do
          remake de The Legend Of Zelda: Ocarina Of Time Para O Nintendo Switch
          2
        </p>
        <p align="center">
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/12gmGZxfiqM?si=17hglyLOVY7TgUwZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </p>
      </main>
    </div>
  );
}

export default App;
