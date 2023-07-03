import '@styles/globals.css'

export const metadata = {
  title: "Promptobia",
  description: "Discove & Share AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div class="main">
          <div className="gradient"></div>

          <main className="app">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
