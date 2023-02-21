import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
 

function App() {
  const client = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false
      }
    }
  })
 

  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <Router>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
