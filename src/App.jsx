import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import { ContextProvider } from "./libs/context/context";
import Auth from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "./ui/shadcn/components/ui/sonner";
import { Suspense, lazy, useEffect } from "react";
import { supabase } from "./libs/supabase/config";
import { setLogin } from "./libs/redux/reducers/authReducer";
import { TooltipProvider } from "./ui/shadcn/components/ui/tooltip";

const Home = lazy(() => import("./pages/Home/Home"));
const Editor = lazy(() => import("./pages/Editor/Editor"));

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
  console.log(window.location.origin)
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    supabase.auth.getUser().then((result) => {
      console.log(result.data);
      dispatch(
        setLogin({
          user: result.data.user,
          userName: result.data.user?.user_metadata?.name,
          userImage: result.data.user?.user_metadata?.picture,
          userEmail: result.data.user?.user_metadata?.email,
        })
      );
    });
  }, []);

  return (
    <ContextProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={"Loading..."}>
                  <Home />
                </Suspense>
              }
            />
            {/* <Route path="/auth" element={<Auth />} /> */}
            <Route
              path="/editor"
              element={
                <Suspense fallback={"Loading..."}>
                  {user ? <Editor /> : <Auth />}
                </Suspense>
              }
            />
            {/* <Route path="/editor" element={<Editor />} /> */}
          </Routes>
        </BrowserRouter>
        <Toaster closeButton />
      </TooltipProvider>
    </ContextProvider>
  );
}

export default App;
