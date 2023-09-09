import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// register global ui components
import vButton from "./ui/button/v-button.vue";
import vError from "./ui/error/v-error.vue";
import vLoader from "./ui/loader/v-loader.vue";
import vInput from "./ui/input/v-input.vue";
import vFileUploader from "./ui/file-uploader/v-file-uploader.vue";

const app = createApp(App);

app.component("v-button", vButton);
app.component("v-error", vError);
app.component("v-loader", vLoader);
app.component("v-input", vInput);
app.component("v-file-uploader", vFileUploader);

app.mount("#app");
