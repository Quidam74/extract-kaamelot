import {getBrowser} from './utils/environment'
import GestionGraphique from "./components/GestionGraphique";
import Waves from "./components/Waves";
import PopUp from "./components/PopUp";
import Ariane from "./components/Ariane";
import Arborescence from "./components/Arborescence";
import DropdownPLVL from "./components/DropdownPLVL";
import Tof from "./components/Tof"

const App = {

    init() {
        document.addEventListener('DOMContentLoaded', this.ready.bind(this), false);
    },

    ready() {
        this.initComponents();
        this.bindEvent();


        console.log(getBrowser());

    },

    bindEvent() {

    },

    initComponents() {

        new Arborescence()

        new GestionGraphique();

        new PopUp();

        new Waves();

        new DropdownPLVL();

        new Tof();

    }

};


App.init();