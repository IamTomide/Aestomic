import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom"
import { Suspense, lazy, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <div  className="min-h-screen flex flex-col">
      <Navigation />
      <ScrollToTop />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={
          <div className="p-10 text-center text-2xl font-bold">
            Page Not Found
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
