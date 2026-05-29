import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ForgeTheSaga from "./pages/ForgeTheSaga";
import FieldNotes from "./pages/FieldNotes";
import Arsenal from "./pages/Arsenal";
import MapPage from "./pages/MapPage";
import Connect from "./pages/Connect";
import Portfolio from "./pages/Portfolio";
import Layout from "./components/Layout";

// Strip the trailing slash from Vite's BASE_URL so wouter treats the
// GitHub Pages sub-path (e.g. "/adventure-storytelling-media") as the root.
// On a custom domain (base "/") this resolves to "" and routing is unaffected.
const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "");

function AppRouter() {
  return (
    <Router base={routerBase}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/forge-the-saga" component={ForgeTheSaga} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/field-notes" component={FieldNotes} />
        <Route path="/insights" component={FieldNotes} />
        <Route path="/contact" component={Connect} />
        <Route path="/arsenal" component={Arsenal} />
        <Route path="/map" component={MapPage} />
        <Route path="/connect" component={Connect} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Layout>
            <AppRouter />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
