import { êlyr_saulimia_han_ü } from "../fraskinjmo/êlyrmo/saulimia/han_ü.js"
import { êlyr_saulimia_inglish } from "../fraskinjmo/êlyrmo/saulimia/inglish.js"
import { êlyr_naialimia_han_ü } from "../fraskinjmo/êlyrmo/naialimia/han_ü.js"
import { êlyr_naialimia_inglish } from "../fraskinjmo/êlyrmo/naialimia/inglish.js"
import { êlyr_kolulimia_han_ü } from "../fraskinjmo/êlyrmo/kolulimia/han_ü.js"
import { êlyr_kolulimia_inglish } from "../fraskinjmo/êlyrmo/kolulimia/inglish.js"
import { êlyr_tomb_han_ü } from "../fraskinjmo/êlyrmo/tomb/han_ü.js"
import { êlyr_tomb_inglish } from "../fraskinjmo/êlyrmo/tomb/inglish.js"
import { da_han_ü } from "../fraskinjmo/êlyrmo/han_ü.js"
import { da_inglish } from "../fraskinjmo/êlyrmo/inglish.js"

var fras = localStorage.getItem("fras")
var êlyr_miha = localStorage.getItem("êlyr_miha")
if (fras == "han_ü") {
    da_han_ü()
    if (êlyr_miha == "saulimia") {
        êlyr_saulimia_han_ü()
    } else if (êlyr_miha == "naialimia") {
        êlyr_naialimia_han_ü()
    } else if (êlyr_miha == "kolulimia") {
        êlyr_kolulimia_han_ü()
    } else if (êlyr_miha == "tomb") {
        êlyr_tomb_han_ü()
    }
} else if (fras == "inglish") {
    da_inglish()
    if (êlyr_miha == "saulimia") {
        êlyr_saulimia_inglish()
    } else if (êlyr_miha == "naialimia") {
        êlyr_naialimia_inglish()
    } else if (êlyr_miha == "kolulimia") {
        êlyr_kolulimia_inglish()
    } else if (êlyr_miha == "tomb") {
        êlyr_tomb_inglish()
    }
}
