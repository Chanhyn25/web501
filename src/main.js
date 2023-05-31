import Navigo from "navigo"; // When using ES modules.
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import { render, router } from "./lib";
import ProductAddPage from "./pages/ProductAdd";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/product", () => render(ProductPage, app));
router.on("/product/add", () => render(ProductAddPage, app));
// router.on("/product/:id", ({ data }) => render(() => ProductDetail(data), app));

router.resolve();
