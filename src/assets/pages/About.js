import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h4>關於此網站</h4>
      <br />
      <h5>
        此網站以 React 寫成。使用框架的好處在於：可重複使用的組件，便於建立 SPA
        頁面。 <br />
        <br />
      </h5>
      <h5>
        1. 組件的部分，可先將組件設計完成，再於頁面需要的地方引入。
        <br />
        如果遇到需要大量印出、大量修改時相當方便。
        <br />
        以此網站為例，首頁的每張圖片都是一個 Picture Component。
        <br />
        當按下「更多」按鈕時，程式會將回傳的資料帶入，引出已帶入樣式的圖片。
        <br />
        <br />
        此網頁的節點綁在HTML的Root上，以App.js引入。
        <br />
        共同元件寫在 Layout.js，包含 Navbar、Footer 等。
        <br />
        內容引入三個頁面（Homepage.js、About.js、Page404.js），用前端路由切換網址。
        <br />
        <br />
      </h5>
      <h5>
        2. SPA（單頁應用程式），動態渲染當前畫面，不會有重新跳轉的感覺。
        <br />
        以此網站為例，首頁與關於是不同網址，但是是以前端更換顯示資料。
        <br />
        因此僅更換要刷新的資料，不會有畫面重新載入的空白畫面閃爍出現。
        <br />
        <br />
      </h5>
      <h5>
        另外，搜尋圖片的API是免費且有次數限制，如果畫面空白就是API次數達上限了QQ。
      </h5>
    </div>
  );
};

export default About;
