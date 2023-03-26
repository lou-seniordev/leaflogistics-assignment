import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/search";
import Categories from "./pages/categories";
import News from "./pages/news";
import Post from "./pages/post";
import NotFound from "./components/NotFound";
import AppProvider from "./contexts/AppProvider";

function App() {
	return (
		<AppProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/news" element={<News />} />
					<Route path="/news/:slug" element={<Post />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/search" element={<Search />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</AppProvider>
	);
}

export default App;
