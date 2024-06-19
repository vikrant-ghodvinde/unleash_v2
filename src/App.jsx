import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Editor from "./pages/Editor/Editor";
import WebFont from "webfontloader";
import { ContextProvider } from "./libs/context/context";
import Auth from "./pages/Auth/Auth";
import { useSelector } from "react-redux";
import { Toaster } from "./ui/shadcn/components/ui/sonner";
import AppHeader from "./components/Header/AppHeader";

WebFont.load({
  google: {
    families: [
      "Playfair Display:300,400,500,600,700,800",
      "Lora:300,400,500,600,700,800",
      "PT Serif:300,400,500,600,700,800",
      "Bitter:300,400,500,600,700,800",
      "Arvo:300,400,500,600,700,800",
      "Rokkitt:300,400,500,600,700,800",
      "Roboto Slab:300,400,500,600,700,800",
      "Glegoo:300,400,500,600,700,800",
      "Slabo 27px",
      "Roboto Condensed:300,400,500,600,700,800",
      "Proza Libre:300,400,500,600,700,800",
      "Work Sans:300,400,500,600,700,800",
      "Oswald:300,400,500,600,700,800",
      "Roboto Flex:300,400,500,600,700,800",
      "Abel:400",
      "Quicksand:300,400,500,600,700",
      "Karla:300,400,500,600,700,800",
    ],
  },
});

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <ContextProvider>
      <BrowserRouter>
        {user && <AppHeader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/editor" element={user ? <Editor /> : <Auth />} />
        </Routes>
      </BrowserRouter>
      <Toaster closeButton />
    </ContextProvider>
  );
}

export default App;
