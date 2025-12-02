// =======================
// 1) KMS de tramos
// =======================
const tramos = [
    { ciudad1: "ARIAS", ciudad2: "ISLA VERDE", kms: 59 },
    { ciudad1: "ARIAS", ciudad2: "CASILDA", kms: 155 },
    { ciudad1: "ARIAS", ciudad2: "VENADO TUERTO", kms: 46 },
    { ciudad1: "ARIAS", ciudad2: "SANTA TERESA", kms: 172 },
    { ciudad1: "ARIAS", ciudad2: "ROSARIO", kms: 200 },
    { ciudad1: "ARIAS", ciudad2: "VILLA CAÑAS", kms: 94 },
    { ciudad1: "ARIAS", ciudad2: "FIRMAT", kms: 81 },
    { ciudad1: "ARIAS", ciudad2: "RAFAELA", kms: 365 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "MERCEDES", kms: 648 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "VICTORIA", kms: 139 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "PARANA", kms: 211 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "CASILDA", kms: 55 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "ROSARIO", kms: 73 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "RAFAELA", kms: 204 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "FIRMAT", kms: 104 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "VENADO TUERTO", kms: 163 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "SANTA TERESA", kms: 126 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "TOTORAS", kms: 43 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "SANTO TOME", kms: 173 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "FRANCK", kms: 212 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "VILLA GOBERNADOR GALVEZ", kms: 82 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "GALVEZ", kms: 113 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "CARLOS PELLEGRINI", kms: 107 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "SAN MARTIN DE LAS ESCOBAS", kms: 134 },
    { ciudad1: "CAÑADA DE GOMEZ", ciudad2: "ISLA VERDE", kms: 147 },
    { ciudad1: "CARLOS PELLEGRINI", ciudad2: "RAFAELA", kms: 115 },
    { ciudad1: "CARLOS PELLEGRINI", ciudad2: "CAÑADA DE GOMEZ", kms: 107 },
    { ciudad1: "CARLOS PELLEGRINI", ciudad2: "ROSARIO", kms: 180 },
    { ciudad1: "CARLOS PELLEGRINI", ciudad2: "SANTA TERESA", kms: 220 },
    { ciudad1: "CARLOS PELLEGRINI", ciudad2: "SANTO TOME", kms: 161 },
    { ciudad1: "CARLOS PELLEGRINI", ciudad2: "TOTORAS", kms: 95 },
    { ciudad1: "CARLOS PELLEGRINI", ciudad2: "FRANCK", kms: 152 },
    { ciudad1: "CARLOS PELLEGRINI", ciudad2: "GALVEZ", kms: 88 },
    { ciudad1: "CARLOS PELLEGRINI", ciudad2: "SAN MARTIN DE LAS ESCOBAS", kms: 46 },
    { ciudad1: "CASILDA", ciudad2: "MERCEDES", kms: 643 },
    { ciudad1: "CASILDA", ciudad2: "ARIAS", kms: 155 },
    { ciudad1: "CASILDA", ciudad2: "ISLA VERDE", kms: 146 },
    { ciudad1: "CASILDA", ciudad2: "ROSARIO", kms: 67 },
    { ciudad1: "CASILDA", ciudad2: "CORRIENTES", kms: 780 },
    { ciudad1: "CASILDA", ciudad2: "PARANA", kms: 249 },
    { ciudad1: "CASILDA", ciudad2: "RAFAELA", kms: 247 },
    { ciudad1: "CASILDA", ciudad2: "SANTA TERESA", kms: 72 },
    { ciudad1: "CASILDA", ciudad2: "FIRMAT", kms: 58 },
    { ciudad1: "CASILDA", ciudad2: "VENADO TUERTO", kms: 116 },
    { ciudad1: "CASILDA", ciudad2: "VILLA CAÑAS", kms: 145 },
    { ciudad1: "CASILDA", ciudad2: "RECONQUISTA", kms: 541 },
    { ciudad1: "CASILDA", ciudad2: "CAÑADA DE GOMEZ", kms: 55 },
    { ciudad1: "CASILDA", ciudad2: "SANTO TOME", kms: 221 },
    { ciudad1: "CASILDA", ciudad2: "VILLA GOBERNADOR GALVEZ", kms: 68 },
    { ciudad1: "CASILDA", ciudad2: "GALVEZ", kms: 183 },
    { ciudad1: "CASILDA", ciudad2: "RESISTENCIA", kms: 760 },
    { ciudad1: "CASILDA", ciudad2: "CHARATA", kms: 769 },
    { ciudad1: "CHAJARI", ciudad2: "MERCEDES", kms: 190 },
    { ciudad1: "CHAJARI", ciudad2: "ROSARIO", kms: 427 },
    { ciudad1: "CHAJARI", ciudad2: "LA PAZ", kms: 187 },
    { ciudad1: "CHAJARI", ciudad2: "CONCORDIA", kms: 81 },
    { ciudad1: "CONCORDIA", ciudad2: "PARANA", kms: 270 },
    { ciudad1: "CONCORDIA", ciudad2: "CHAJARI", kms: 81 },
    { ciudad1: "CONCORDIA", ciudad2: "ROSARIO", kms: 362 },
    { ciudad1: "CONCORDIA", ciudad2: "MERCEDES", kms: 266 },
    { ciudad1: "CRESPO", ciudad2: "PARANA", kms: 41 },
    { ciudad1: "CRESPO", ciudad2: "LA PAZ", kms: 187 },
    { ciudad1: "CRESPO", ciudad2: "ROSARIO", kms: 175 },
    { ciudad1: "CRESPO", ciudad2: "SANTA FE", kms: 70 },
    { ciudad1: "FRANCK", ciudad2: "RAFAELA", kms: 98 },
    { ciudad1: "FRANCK", ciudad2: "CAÑADA DE GOMEZ", kms: 212 },
    { ciudad1: "FRANCK", ciudad2: "SANTO TOME", kms: 25 },
    { ciudad1: "FRANCK", ciudad2: "ROSARIO", kms: 179 },
    { ciudad1: "FRANCK", ciudad2: "SANTA TERESA", kms: 235 },
    { ciudad1: "FRANCK", ciudad2: "CASILDA", kms: 238 },
    { ciudad1: "FRANCK", ciudad2: "VENADO TUERTO", kms: 341 },
    { ciudad1: "FRANCK", ciudad2: "ISLA VERDE", kms: 344 },
    { ciudad1: "FRANCK", ciudad2: "VILLA CAÑAS", kms: 357 },
    { ciudad1: "FRANCK", ciudad2: "ARIAS", kms: 387 },
    { ciudad1: "FRANCK", ciudad2: "TOTORAS", kms: 151 },
    { ciudad1: "FRANCK", ciudad2: "GALVEZ", kms: 68 },
    { ciudad1: "FRANCK", ciudad2: "CARLOS PELLEGRINI", kms: 152 },
    { ciudad1: "FRANCK", ciudad2: "SAN MARTIN DE LAS ESCOBAS", kms: 101 },
    { ciudad1: "GALVEZ", ciudad2: "MERCEDES", kms: 550 },
    { ciudad1: "GALVEZ", ciudad2: "CORRIENTES", kms: 645 },
    { ciudad1: "GALVEZ", ciudad2: "PARANA", kms: 114 },
    { ciudad1: "GALVEZ", ciudad2: "CASILDA", kms: 183 },
    { ciudad1: "GALVEZ", ciudad2: "RAFAELA", kms: 111 },
    { ciudad1: "GALVEZ", ciudad2: "VENADO TUERTO", kms: 257 },
    { ciudad1: "GALVEZ", ciudad2: "SANTO TOME", kms: 77 },
    { ciudad1: "GALVEZ", ciudad2: "ROSARIO", kms: 133 },
    { ciudad1: "GALVEZ", ciudad2: "SANTA TERESA", kms: 189 },
    { ciudad1: "GALVEZ", ciudad2: "ISLA VERDE", kms: 245 },
    { ciudad1: "GALVEZ", ciudad2: "ARIAS", kms: 288 },
    { ciudad1: "GALVEZ", ciudad2: "VILLA CAÑAS", kms: 310 },
    { ciudad1: "GALVEZ", ciudad2: "CAÑADA DE GOMEZ", kms: 114 },
    { ciudad1: "GALVEZ", ciudad2: "TOTORAS", kms: 77 },
    { ciudad1: "GALVEZ", ciudad2: "FRANCK", kms: 68 },
    { ciudad1: "GALVEZ", ciudad2: "VILLA GOBERNADOR GALVEZ", kms: 143 },
    { ciudad1: "GALVEZ", ciudad2: "CARLOS PELLEGRINI", kms: 88 },
    { ciudad1: "GALVEZ", ciudad2: "SAN MARTIN DE LAS ESCOBAS", kms: 45 },
    { ciudad1: "GENERAL PICO", ciudad2: "SANTA ROSA", kms: 141 },
    { ciudad1: "GENERAL PICO", ciudad2: "ROSARIO", kms: 485 },
    { ciudad1: "GENERAL PICO", ciudad2: "GENERAL VILLEGAS", kms: 128 },
    { ciudad1: "GENERAL PICO", ciudad2: "REALICO", kms: 94 },
    { ciudad1: "GENERAL VILLEGAS", ciudad2: "SANTA ROSA", kms: 268 },
    { ciudad1: "GENERAL VILLEGAS", ciudad2: "ROSARIO", kms: 356 },
    { ciudad1: "GENERAL VILLEGAS", ciudad2: "GENERAL PICO", kms: 128 },
    { ciudad1: "GENERAL VILLEGAS", ciudad2: "REALICO", kms: 118 },
    { ciudad1: "ISLA VERDE", ciudad2: "ARIAS", kms: 59 },
    { ciudad1: "ISLA VERDE", ciudad2: "CASILDA", kms: 146 },
    { ciudad1: "ISLA VERDE", ciudad2: "SANTA TERESA", kms: 180 },
    { ciudad1: "ISLA VERDE", ciudad2: "VENADO TUERTO", kms: 97 },
    { ciudad1: "ISLA VERDE", ciudad2: "VILLA CAÑAS", kms: 145 },
    { ciudad1: "ISLA VERDE", ciudad2: "ROSARIO", kms: 212 },
    { ciudad1: "LA PAZ", ciudad2: "MERCEDES", kms: 286 },
    { ciudad1: "LA PAZ", ciudad2: "ROSARIO", kms: 367 },
    { ciudad1: "LA PAZ", ciudad2: "CRESPO", kms: 187 },
    { ciudad1: "LA PAZ", ciudad2: "CONCORDIA", kms: 266 },
    { ciudad1: "LA PAZ", ciudad2: "CHAJARI", kms: 187 },
    { ciudad1: "LA PAZ", ciudad2: "PARANA", kms: 164 },
    { ciudad1: "LA PAZ", ciudad2: "SANTA TERESA", kms: 420 },
    { ciudad1: "MERCEDES", ciudad2: "VICTORIA", kms: 510 },
    { ciudad1: "MERCEDES", ciudad2: "LA PAZ", kms: 319 },
    { ciudad1: "MERCEDES", ciudad2: "CORRIENTES", kms: 246 },
    { ciudad1: "MERCEDES", ciudad2: "CHAJARI", kms: 190 },
    { ciudad1: "MERCEDES", ciudad2: "PARANA", kms: 435 },
    { ciudad1: "MERCEDES", ciudad2: "CASILDA", kms: 643 },
    { ciudad1: "MERCEDES", ciudad2: "RAFAELA", kms: 560 },
    { ciudad1: "MERCEDES", ciudad2: "CONCORDIA", kms: 266 },
    { ciudad1: "MERCEDES", ciudad2: "FIRMAT", kms: 689 },
    { ciudad1: "MERCEDES", ciudad2: "VENADO TUERTO", kms: 749 },
    { ciudad1: "MERCEDES", ciudad2: "RECONQUISTA", kms: 485 },
    { ciudad1: "MERCEDES", ciudad2: "CAÑADA DE GOMEZ", kms: 648 },
    { ciudad1: "MERCEDES", ciudad2: "SANTO TOME", kms: 466 },
    { ciudad1: "MERCEDES", ciudad2: "VILLA GOBERNADOR GALVEZ", kms: 594 },
    { ciudad1: "MERCEDES", ciudad2: "GALVEZ", kms: 550 },
    { ciudad1: "MERCEDES", ciudad2: "ROSARIO", kms: 585 },
    { ciudad1: "PARANA", ciudad2: "MERCEDES", kms: 435 },
    { ciudad1: "PARANA", ciudad2: "VICTORIA", kms: 117 },
    { ciudad1: "PARANA", ciudad2: "CORRIENTES", kms: 580 },
    { ciudad1: "PARANA", ciudad2: "CASILDA", kms: 249 },
    { ciudad1: "PARANA", ciudad2: "LA PAZ", kms: 167 },
    { ciudad1: "PARANA", ciudad2: "RAFAELA", kms: 147 },
    { ciudad1: "PARANA", ciudad2: "FIRMAT", kms: 304 },
    { ciudad1: "PARANA", ciudad2: "CRESPO", kms: 43 },
    { ciudad1: "PARANA", ciudad2: "CONCORDIA", kms: 269 },
    { ciudad1: "PARANA", ciudad2: "CHAJARI", kms: 303 },
    { ciudad1: "PARANA", ciudad2: "VENADO TUERTO", kms: 362 },
    { ciudad1: "PARANA", ciudad2: "CAÑADA DE GOMEZ", kms: 211 },
    { ciudad1: "PARANA", ciudad2: "SANTO TOME", kms: 38 },
    { ciudad1: "PARANA", ciudad2: "VILLA GOBERNADOR GALVEZ", kms: 209 },
    { ciudad1: "PARANA", ciudad2: "GALVEZ", kms: 114 },
    { ciudad1: "PARANA", ciudad2: "SANTA FE", kms: 31 },
    { ciudad1: "PARANA", ciudad2: "ROSARIO", kms: 187 },
    { ciudad1: "RAFAELA", ciudad2: "MERCEDES", kms: 560 },
    { ciudad1: "RAFAELA", ciudad2: "CORRIENTES", kms: 613 },
    { ciudad1: "RAFAELA", ciudad2: "PARANA", kms: 147 },
    { ciudad1: "RAFAELA", ciudad2: "CASILDA", kms: 247 },
    { ciudad1: "RAFAELA", ciudad2: "FIRMAT", kms: 289 },
    { ciudad1: "RAFAELA", ciudad2: "VENADO TUERTO", kms: 347 },
    { ciudad1: "RAFAELA", ciudad2: "CAÑADA DE GOMEZ", kms: 204 },
    { ciudad1: "RAFAELA", ciudad2: "CARLOS PELLEGRINI", kms: 115 },
    { ciudad1: "RAFAELA", ciudad2: "SANTO TOME", kms: 109 },
    { ciudad1: "RAFAELA", ciudad2: "ROSARIO", kms: 245 },
    { ciudad1: "RAFAELA", ciudad2: "SANTA TERESA", kms: 301 },
    { ciudad1: "RAFAELA", ciudad2: "ISLA VERDE", kms: 310 },
    { ciudad1: "RAFAELA", ciudad2: "ARIAS", kms: 353 },
    { ciudad1: "RAFAELA", ciudad2: "VILLA CAÑAS", kms: 395 },
    { ciudad1: "RAFAELA", ciudad2: "TOTORAS", kms: 168 },
    { ciudad1: "RAFAELA", ciudad2: "FRANCK", kms: 98 },
    { ciudad1: "RAFAELA", ciudad2: "VILLA GOBERNADOR GALVEZ", kms: 255 },
    { ciudad1: "RAFAELA", ciudad2: "GALVEZ", kms: 111 },
    { ciudad1: "RAFAELA", ciudad2: "SAN MARTIN DE LAS ESCOBAS", kms: 72 },
    { ciudad1: "REALICO", ciudad2: "SANTA ROSA", kms: 179 },
    { ciudad1: "REALICO", ciudad2: "GENERAL VILLEGAS", kms: 118 },
    { ciudad1: "REALICO", ciudad2: "GENERAL PICO", kms: 94 },
    { ciudad1: "RECONQUISTA", ciudad2: "AVELLANEDA", kms: 5 },
    { ciudad1: "RECONQUISTA", ciudad2: "SAN JUSTO", kms: 225 },
    { ciudad1: "RECONQUISTA", ciudad2: "MERCEDES", kms: 485 },
    { ciudad1: "RECONQUISTA", ciudad2: "VICTORIA", kms: 453 },
    { ciudad1: "RECONQUISTA", ciudad2: "CORRIENTES", kms: 241 },
    { ciudad1: "RECONQUISTA", ciudad2: "PARANA", kms: 338 },
    { ciudad1: "RECONQUISTA", ciudad2: "CASILDA", kms: 541 },
    { ciudad1: "RECONQUISTA", ciudad2: "RAFAELA", kms: 374 },
    { ciudad1: "RECONQUISTA", ciudad2: "FIRMAT", kms: 597 },
    { ciudad1: "RECONQUISTA", ciudad2: "VENADO TUERTO", kms: 658 },
    { ciudad1: "RECONQUISTA", ciudad2: "CAÑADA DE GOMEZ", kms: 504 },
    { ciudad1: "RECONQUIISTA", ciudad2: "SANTO TOME", kms: 333 },
    { ciudad1: "RECONQUISTA", ciudad2: "VILLA GOBERNADOR GALVEZ", kms: 501 },
    { ciudad1: "RECONQUISTA", ciudad2: "GALVEZ", kms: 408 },
    { ciudad1: "RECONQUISTA", ciudad2: "RESISTENCIA", kms: 222 },
    { ciudad1: "RECONQUISTA", ciudad2: "CHARATA", kms: 375 },
    { ciudad1: "ROSARIO", ciudad2: "SANTA TERESA", kms: 59 },
    { ciudad1: "ROSARIO", ciudad2: "PARANA", kms: 187 },
    { ciudad1: "ROSARIO", ciudad2: "CASILDA", kms: 48 },
    { ciudad1: "ROSARIO", ciudad2: "SANTA ROSA", kms: 619 },
    { ciudad1: "ROSARIO", ciudad2: "CONCORDIA", kms: 360 },
    { ciudad1: "ROSARIO", ciudad2: "TOTORAS", kms: 67 },
    { ciudad1: "ROSARIO", ciudad2: "CARLOS PELLEGRINI", kms: 180 },
    { ciudad1: "ROSARIO", ciudad2: "CAÑADA DE GOMEZ", kms: 80 },
    { ciudad1: "ROSARIO", ciudad2: "CRESPO", kms: 174 },
    { ciudad1: "ROSARIO", ciudad2: "MERCEDES", kms: 583 },
    { ciudad1: "ROSARIO", ciudad2: "RAFAELA", kms: 245 },
    { ciudad1: "ROSARIO", ciudad2: "FRANCK", kms: 182 },
    { ciudad1: "ROSARIO", ciudad2: "SAN MARTIN DE LAS ESCOBAS", kms: 179 },
    { ciudad1: "ROSARIO", ciudad2: "GALVEZ", kms: 134 },
    { ciudad1: "ROSARIO", ciudad2: "VICTORIA", kms: 75 },
    { ciudad1: "ROSARIO", ciudad2: "GENERAL VILLEGAS", kms: 357 },
    { ciudad1: "ROSARIO", ciudad2: "REALICO", kms: 477 },
    { ciudad1: "ROSARIO", ciudad2: "ROQUE SAENZ PEÑA", kms: 822 },
    { ciudad1: "ROSARIO", ciudad2: "RESISTENCIA", kms: 712 },
    { ciudad1: "ROSARIO", ciudad2: "FIRMAT", kms: 110 },
    { ciudad1: "ROSARIO", ciudad2: "SAN JUSTO", kms: 269 },
    { ciudad1: "ROSARIO", ciudad2: "RECONQUISTA", kms: 493 },
    { ciudad1: "ROSARIO", ciudad2: "LA PAZ", kms: 364 },
    { ciudad1: "ROSARIO", ciudad2: "CHAJARI", kms: 427 },
    { ciudad1: "ROSARIO", ciudad2: "VILLA ANGELA", kms: 730 },
    { ciudad1: "ROSARIO", ciudad2: "GRANADERO BAIGORRIA", kms: 15 },
    { ciudad1: "ROSARIO", ciudad2: "ARIAS", kms: 223 },
    { ciudad1: "ROSARIO", ciudad2: "SANTO TOME", kms: 165 },
    { ciudad1: "ROSARIO", ciudad2: "VILLA ADELINA", kms: 298 },
    { ciudad1: "ROSARIO", ciudad2: "VILLA GOBERNADOR GALVEZ", kms: 15 },
    { ciudad1: "ROSARIO", ciudad2: "SALTO", kms: 185 },
    { ciudad1: "ROSARIO", ciudad2: "MARCOS JUAREZ", kms: 145 },
    { ciudad1: "ROSARIO", ciudad2: "BANDERA", kms: 575 },
    { ciudad1: "ROSARIO", ciudad2: "CONCEPCION", kms: 915 },
    { ciudad1: "ROSARIO", ciudad2: "ELDORADO", kms: 1085 },
    { ciudad1: "ROSARIO", ciudad2: "ARRECIFES", kms: 155 },
    { ciudad1: "SAN MARTIN DE LAS ESCOBAS", ciudad2: "RAFAELA", kms: 72 },
    { ciudad1: "SAN MARTIN DE LAS ESCOBAS", ciudad2: "CAÑADA DE GOMEZ", kms: 134 },
    { ciudad1: "SAN MARTIN DE LAS ESCOBAS", ciudad2: "TOTORAS", kms: 99 },
    { ciudad1: "SAN MARTIN DE LAS ESCOBAS", ciudad2: "FRANCK", kms: 101 },
    { ciudad1: "SAN MARTIN DE LAS ESCOBAS", ciudad2: "GALVEZ", kms: 45 },
    { ciudad1: "SAN MARTIN DE LAS ESCOBAS", ciudad2: "SANTO TOME", kms: 112 },
    { ciudad1: "SAN MARTIN DE LAS ESCOBAS", ciudad2: "ROSARIO", kms: 178 },
    { ciudad1: "SAN MARTIN DE LAS ESCOBAS", ciudad2: "SANTA TERESA", kms: 234 },
    { ciudad1: "SAN MARTIN DE LAS ESCOBAS", ciudad2: "VENADO TUERTO", kms: 267 },
    { ciudad1: "SAN MARTIN DE LAS ESCOBAS", ciudad2: "ISLA VERDE", kms: 236 },
    { ciudad1: "SAN MARTIN DE LAS ESCOBAS", ciudad2: "ARIAS", kms: 279 },
    { ciudad1: "SAN MARTIN DE LAS ESCOBAS", ciudad2: "VILLA CAÑAS", kms: 299 },
    { ciudad1: "SAN MARTIN DE LAS ESCOBAS", ciudad2: "CARLOS PELLEGRINI", kms: 46 },
    { ciudad1: "SANTA ROSA", ciudad2: "GENERAL PICO", kms: 141 },
    { ciudad1: "SANTA ROSA", ciudad2: "REALICO", kms: 179 },
    { ciudad1: "SANTA ROSA", ciudad2: "GENERAL VILLEGAS", kms: 268 },
    { ciudad1: "SANTA ROSA", ciudad2: "ROSARIO", kms: 657 },
    { ciudad1: "SANTA TERESA", ciudad2: "VICTORIA", kms: 130 },
    { ciudad1: "SANTA TERESA", ciudad2: "ISLA VERDE", kms: 180 },
    { ciudad1: "SANTA TERESA", ciudad2: "ROSARIO", kms: 59 },
    { ciudad1: "SANTA TERESA", ciudad2: "CAÑADA DE GOMEZ", kms: 126 },
    { ciudad1: "SANTA TERESA", ciudad2: "CARLOS PELLEGRINI", kms: 220 },
    { ciudad1: "SANTA TERESA", ciudad2: "TOTORAS", kms: 122 },
    { ciudad1: "SANTA TERESA", ciudad2: "SANTO TOME", kms: 217 },
    { ciudad1: "SANTA TERESA", ciudad2: "RAFAELA", kms: 300 },
    { ciudad1: "SANTA TERESA", ciudad2: "FRANCK", kms: 236 },
    { ciudad1: "SANTA TERESA", ciudad2: "GALVEZ", kms: 189 },
    { ciudad1: "SANTA TERESA", ciudad2: "SAN MARTIN DE LAS ESCOBAS", kms: 234 },
    { ciudad1: "SANTA TERESA", ciudad2: "FIRMAT", kms: 89 },
    { ciudad1: "SANTA TERESA", ciudad2: "VENADO TUERTO", kms: 129 },
    { ciudad1: "SANTA TERESA", ciudad2: "CASILDA", kms: 72 },
    { ciudad1: "SANTA TERESA", ciudad2: "PARANA", kms: 254 },
    { ciudad1: "SANTA TERESA", ciudad2: "VILLA CAÑAS", kms: 130 },
    { ciudad1: "SANTO TOME", ciudad2: "MERCEDES", kms: 466 },
    { ciudad1: "SANTO TOME", ciudad2: "VICTORIA", kms: 312 },
    { ciudad1: "SANTO TOME", ciudad2: "CORRIENTES", kms: 571 },
    { ciudad1: "SANTO TOME", ciudad2: "PARANA", kms: 38 },
    { ciudad1: "SANTO TOME", ciudad2: "VILLA CAÑAS", kms: 339 },
    { ciudad1: "SANTO TOME", ciudad2: "ARIAS", kms: 370 },
    { ciudad1: "SANTO TOME", ciudad2: "CARLOS PELLEGRINI", kms: 149 },
    { ciudad1: "SANTO TOME", ciudad2: "ISLA VERDE", kms: 327 },
    { ciudad1: "SANTO TOME", ciudad2: "TOTORAS", kms: 132 },
    { ciudad1: "SANTO TOME", ciudad2: "FRANCK", kms: 25 },
    { ciudad1: "SANTO TOME", ciudad2: "ROSARIO", kms: 162 },
    { ciudad1: "SANTO TOME", ciudad2: "SANTA TERESA", kms: 218 },
    { ciudad1: "SANTO TOME", ciudad2: "CASILDA", kms: 221 },
    { ciudad1: "SANTO TOME", ciudad2: "RAFAELA", kms: 109 },
    { ciudad1: "SANTO TOME", ciudad2: "FIRMAT", kms: 267 },
    { ciudad1: "SANTO TOME", ciudad2: "VENADO TUERTO", kms: 327 },
    { ciudad1: "SANTO TOME", ciudad2: "RECONQUISTA", kms: 333 },
    { ciudad1: "SANTO TOME", ciudad2: "CAÑADA DE GOMEZ", kms: 173 },
    { ciudad1: "SANTO TOME", ciudad2: "VILLA GOBERNADOR GALVEZ", kms: 171 },
    { ciudad1: "SANTO TOME", ciudad2: "GALVEZ", kms: 76 },
    { ciudad1: "SANTO TOME", ciudad2: "RESISTENCIA", kms: 552 },
    { ciudad1: "SANTO TOME", ciudad2: "CHARATA", kms: 601 },
    { ciudad1: "SANTA ROSA", ciudad2: "ROSARIO", kms: 619 },
    { ciudad1: "SANTA ROSA", ciudad2: "GENERAL PICO", kms: 141 },
    { ciudad1: "SANTA ROSA", ciudad2: "GENERAL VILLEGAS", kms: 218 },
    { ciudad1: "SANTA ROSA", ciudad2: "REALICO", kms: 179 },
    { ciudad1: "TOTORAS", ciudad2: "RAFAELA", kms: 168 },
    { ciudad1: "TOTORAS", ciudad2: "CAÑADA DE GOMEZ", kms: 43 },
    { ciudad1: "TOTORAS", ciudad2: "VILLA CAÑAS", kms: 248 },
    { ciudad1: "TOTORAS", ciudad2: "ARIAS", kms: 220 },
    { ciudad1: "TOTORAS", ciudad2: "ISLA VERDE", kms: 202 },
    { ciudad1: "TOTORAS", ciudad2: "VENADO TUERTO", kms: 202 },
    { ciudad1: "TOTORAS", ciudad2: "SANTA TERESA", kms: 122 },
    { ciudad1: "TOTORAS", ciudad2: "ROSARIO", kms: 67 },
    { ciudad1: "TOTORAS", ciudad2: "SANTO TOME", kms: 131 },
    { ciudad1: "TOTORAS", ciudad2: "FRANCK", kms: 151 },
    { ciudad1: "TOTORAS", ciudad2: "GALVEZ", kms: 77 },
    { ciudad1: "TOTORAS", ciudad2: "CARLOS PELLEGRINI", kms: 95 },
    { ciudad1: "TOTORAS", ciudad2: "SAN MARTIN DE LAS ESCOBAS", kms: 99 },
    { ciudad1: "TOTORAS", ciudad2: "CASILDA", kms: 84 },
    { ciudad1: "TOTORAS", ciudad2: "GRANADERO BAIGORRIA", kms: 60 },
    { ciudad1: "VENADO TUERTO", ciudad2: "MERCEDES", kms: 749 },
    { ciudad1: "VENADO TUERTO", ciudad2: "VICTORIA", kms: 240 },
    { ciudad1: "VENADO TUERTO", ciudad2: "ARIAS", kms: 46 },
    { ciudad1: "VENADO TUERTO", ciudad2: "ISLA VERDE", kms: 97 },
    { ciudad1: "VENADO TUERTO", ciudad2: "ROSARIO", kms: 164 },
    { ciudad1: "VENADO TUERTO", ciudad2: "SANTA TERESA", kms: 128 },
    { ciudad1: "VENADO TUERTO", ciudad2: "PARANA", kms: 362 },
    { ciudad1: "VENADO TUERTO", ciudad2: "CASILDA", kms: 116 },
    { ciudad1: "VENADO TUERTO", ciudad2: "RAFAELA", kms: 347 },
    { ciudad1: "VENADO TUERTO", ciudad2: "FIRMAT", kms: 61 },
    { ciudad1: "VENADO TUERTO", ciudad2: "VILLA CAÑAS", kms: 50 },
    { ciudad1: "VENADO TUERTO", ciudad2: "RECONQUISTA", kms: 658 },
    { ciudad1: "VENADO TUERTO", ciudad2: "CAÑADA DE GOMEZ", kms: 163 },
    { ciudad1: "VENADO TUERTO", ciudad2: "SANTO TOME", kms: 327 },
    { ciudad1: "VENADO TUERTO", ciudad2: "VILLA GOBERNADOR GALVEZ", kms: 174 },
    { ciudad1: "VENADO TUERTO", ciudad2: "GALVEZ", kms: 257 },
    { ciudad1: "VENADO TUERTO", ciudad2: "TOTORAS", kms: 202 },
    { ciudad1: "VILLA ANGELA", ciudad2: "RESISTENCIA", kms: 253 },
    { ciudad1: "VILLA ANGELA", ciudad2: "CHARATA", kms: 87 },
    { ciudad1: "VILLA CAÑAS", ciudad2: "ARIAS", kms: 94 },
    { ciudad1: "VILLA CAÑAS", ciudad2: "ISLA VERDE", kms: 145 },
    { ciudad1: "VILLA CAÑAS", ciudad2: "VENADO TUERTO", kms: 50 },
    { ciudad1: "VILLA CAÑAS", ciudad2: "SANTO TOME", kms: 339 },
    { ciudad1: "VILLA CAÑAS", ciudad2: "SANTA TERESA", kms: 130 },
    { ciudad1: "VILLA CAÑAS", ciudad2: "TOTORAS", kms: 248 },
    { ciudad1: "VILLA GOBERNADOR GALVEZ", ciudad2: "CASILDA", kms: 68 },
    { ciudad1: "VILLA GOBERNADOR GALVEZ", ciudad2: "CAÑADA DE GOMEZ", kms: 82 },
    { ciudad1: "VILLA GOBERNADOR GALVEZ", ciudad2: "GALVEZ", kms: 143 },
    { ciudad1: "VILLA GOBERNADOR GALVEZ", ciudad2: "SANTO TOME", kms: 171 },
    { ciudad1: "VILLA GOBERNADOR GALVEZ", ciudad2: "ROSARIO", kms: 15 },
    { ciudad1: "VILLA GOBERNADOR GALVEZ", ciudad2: "RAFAELA", kms: 255 },
    { ciudad1: "VILLA GOBERNADOR GALVEZ", ciudad2: "VENADO TUERTO", kms: 174 }
];

// =======================
// 2) Estado global
// =======================
let currentRoute = [];
let originCity = null;
let isRoundTrip = false;

// =======================
// 3) Utilidades
// =======================
function getAllCities() {
    const cities = new Set();
    tramos.forEach(t => {
        cities.add(t.ciudad1);
        cities.add(t.ciudad2);
    });
    return Array.from(cities).sort();
}

function getDestinyCities(origin) {
    if (!origin) return [];
    return tramos
        .filter(t => t.ciudad1 === origin)
        .map(t => t.ciudad2)
        .sort();
}

function findKms(city1, city2) {
    const forward = tramos.find(t => t.ciudad1 === city1 && t.ciudad2 === city2);
    if (forward) return forward.kms;
    const backward = tramos.find(t => t.ciudad1 === city2 && t.ciudad2 === city1);
    if (backward) return backward.kms;
    return null;
}

// =======================
// 4) LocalStorage
// =======================
function loadFromLocalStorage() {
    const saved = localStorage.getItem('tramoState');
    if (!saved) return;

    const state = JSON.parse(saved);
    currentRoute = state.route || [];
    originCity = state.origin || null;
    isRoundTrip = state.roundTrip || false;

    const originSelect = document.getElementById('originCity');
    const roundTripCheck = document.getElementById('roundTrip');

    if (originSelect) originSelect.value = originCity || '';
    if (roundTripCheck) roundTripCheck.checked = isRoundTrip;

    updateDestinyCities();
    renderRoute();
}

function saveToLocalStorage() {
    const state = {
        route: currentRoute,
        origin: originCity,
        roundTrip: isRoundTrip
    };
    localStorage.setItem('tramoState', JSON.stringify(state));
}

// =======================
// 5) Inicialización
// =======================
function initApp() {
    const cities = getAllCities();
    const originSelect = document.getElementById('originCity');
    const destinySelect = document.getElementById('destinyCity');
    const modifySelect = document.getElementById('modifyNewCity');

    cities.forEach(city => {
        const opt1 = document.createElement('option');
        opt1.value = city;
        opt1.text = city;
        originSelect.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = city;
        opt2.text = city;
        destinySelect.appendChild(opt2);

        const opt3 = document.createElement('option');
        opt3.value = city;
        opt3.text = city;
        modifySelect.appendChild(opt3);
    });

    loadFromLocalStorage();
}

// =======================
// 6) Navegación entre páginas
// =======================
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    const page = document.getElementById(pageId);
    if (page) page.classList.add('active');

    const buttons = document.querySelectorAll('.menu-btn');
    buttons.forEach(b => b.classList.remove('active'));
    // event.target existe solo cuando se llama desde onclick en HTML
    if (typeof event !== 'undefined' && event.target.classList.contains('menu-btn')) {
        event.target.classList.add('active');
    }

    if (pageId === 'calculate') {
        updateCalculatePage();
    } else if (pageId === 'modify') {
        updateModifyPage();
    } else if (pageId === 'clear') {
        updateClearPage();
    }
}

// =======================
// 7) Crear tramo
// =======================
function updateDestinyCities() {
    originCity = document.getElementById('originCity').value;
    const destinySelect = document.getElementById('destinyCity');

    while (destinySelect.options.length > 1) {
        destinySelect.remove(1);
    }

    if (originCity) {
        const destinations = getDestinyCities(originCity);
        destinations.forEach(city => {
            const opt = document.createElement('option');
            opt.value = city;
            opt.text = city;
            destinySelect.appendChild(opt);
        });
    }

    destinySelect.value = '';
}

function addCityToRoute() {
    const destiny = document.getElementById('destinyCity').value;

    if (!originCity) {
        alert('Por favor selecciona una localidad de origen');
        return;
    }

    if (!destiny) {
        alert('Por favor selecciona una localidad');
        return;
    }

    if (!currentRoute.length) {
        currentRoute.push(originCity);
    }

    if (currentRoute.includes(destiny)) {
        alert('Esta localidad ya está en la ruta');
        return;
    }

    const lastCity = currentRoute[currentRoute.length - 1];
    const kms = findKms(lastCity, destiny);

    if (kms === null) {
        alert('No hay conexión directa entre estas ciudades');
        return;
    }

    currentRoute.push(destiny);
    renderRoute();
    saveToLocalStorage();

    document.getElementById('destinyCity').value = '';
}

function renderRoute() {
    const routeList = document.getElementById('routeList');
    const emptyRoute = document.getElementById('emptyRoute');

    if (!currentRoute.length) {
        routeList.innerHTML = '';
        emptyRoute.style.display = 'block';
        return;
    }

    emptyRoute.style.display = 'none';
    routeList.innerHTML = '';

    currentRoute.forEach((city, index) => {
                const li = document.createElement('li');
                li.className = 'route-item';

                let kmsText = '';
                if (index < currentRoute.length - 1) {
                    const kms = findKms(currentRoute[index], currentRoute[index + 1]);
                    kmsText = ` → ${kms} km`;
                }

                li.innerHTML = `
            <div class="route-item-info">
                <div class="route-item-city">${index + 1}. ${city}</div>
                <div class="route-item-kms">${kmsText}</div>
            </div>
            <div class="route-controls">
                ${index > 0 ? `<button class="btn btn-sm btn-secondary" onclick="moveCity(${index}, -1)">↑</button>` : ''}
                ${index < currentRoute.length - 1 ? `<button class="btn btn-sm btn-secondary" onclick="moveCity(${index}, 1)">↓</button>` : ''}
                ${index > 0 ? `<button class="btn btn-sm btn-danger" onclick="removeCity(${index})">✕</button>` : ''}
            </div>
        `;
        routeList.appendChild(li);
    });
}

function moveCity(index, direction) {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= currentRoute.length) return;

    [currentRoute[index], currentRoute[newIndex]] = [currentRoute[newIndex], currentRoute[index]];
    renderRoute();
    saveToLocalStorage();
}

function removeCity(index) {
    currentRoute.splice(index, 1);
    renderRoute();
    saveToLocalStorage();
}

function updateRoundTrip() {
    isRoundTrip = document.getElementById('roundTrip').checked;
    saveToLocalStorage();
}

// =======================
// 8) Calcular tramo
// =======================
function calculateTotals() {
    if (!currentRoute.length) return { total: 0, segments: [] };

    let total = 0;
    const segments = [];

    for (let i = 0; i < currentRoute.length - 1; i++) {
        const kms = findKms(currentRoute[i], currentRoute[i + 1]);
        segments.push({
            from: currentRoute[i],
            to: currentRoute[i + 1],
            kms: kms
        });
        total += kms;
    }

    if (isRoundTrip && currentRoute.length > 1) {
        const returnKms = findKms(currentRoute[currentRoute.length - 1], originCity);
        if (returnKms) {
            segments.push({
                from: currentRoute[currentRoute.length - 1],
                to: originCity,
                kms: returnKms,
                isReturn: true
            });
            total += returnKms;
        }
    }

    return { total, segments };
}

function updateCalculatePage() {
    const noData = document.getElementById('noDataCalc');
    const results = document.getElementById('calcResults');
    const calc = calculateTotals();

    if (!currentRoute.length) {
        noData.style.display = 'block';
        results.style.display = 'none';
        return;
    }

    noData.style.display = 'none';
    results.style.display = 'block';

    document.getElementById('totalKms').textContent = `${calc.total} km`;

    const detailsGrid = document.getElementById('detailsGrid');
    detailsGrid.innerHTML = '';

    calc.segments.forEach((seg, index) => {
        const card = document.createElement('div');
        card.className = 'result-card';
        const returnLabel = seg.isReturn ? ' (RETORNO)' : '';
        card.innerHTML = `
            <div class="result-label">Tramo ${index + 1}${returnLabel}</div>
            <div>${seg.from} → ${seg.to}</div>
            <div class="result-value">${seg.kms} km</div>
        `;
        detailsGrid.appendChild(card);
    });

    const fullRoute = document.getElementById('fullRouteDetails');
    const routeText = calc.segments.length
        ? calc.segments.map(s => s.from).join(' → ') + ' → ' + calc.segments[calc.segments.length - 1].to
        : '';
    fullRoute.innerHTML = `
        <div class="alert alert-info">
            <strong>Ruta completa:</strong><br>${routeText}
        </div>
    `;
}

// =======================
// 9) Modificar tramo
// =======================
function updateModifyPage() {
    const noData = document.getElementById('noDataModify');
    const content = document.getElementById('modifyContent');

    if (!currentRoute.length) {
        noData.style.display = 'block';
        content.style.display = 'none';
        return;
    }

    noData.style.display = 'none';
    content.style.display = 'block';

    const modifyList = document.getElementById('modifyList');
    modifyList.innerHTML = '';

    currentRoute.forEach((city, index) => {
        const li = document.createElement('li');
        li.className = 'route-item';

        li.innerHTML = `
            <div class="route-item-info">
                <div class="route-item-city">${index + 1}. ${city}</div>
            </div>
            <div class="route-controls">
                ${index > 0 ? `<button class="btn btn-sm btn-secondary" onclick="moveCity(${index}, -1)">↑</button>` : ''}
                ${index < currentRoute.length - 1 ? `<button class="btn btn-sm btn-secondary" onclick="moveCity(${index}, 1)">↓</button>` : ''}
                ${index > 0 ? `<button class="btn btn-sm btn-danger" onclick="removeCity(${index})">✕</button>` : ''}
            </div>
        `;
        modifyList.appendChild(li);
    });
}

function addNewCityToModify() {
    const newCity = document.getElementById('modifyNewCity').value;

    if (!newCity) {
        alert('Por favor selecciona una localidad');
        return;
    }

    if (currentRoute.includes(newCity)) {
        alert('Esta localidad ya está en la ruta');
        return;
    }

    currentRoute.push(newCity);
    updateModifyPage();
    renderRoute();
    saveToLocalStorage();

    document.getElementById('modifyNewCity').value = '';
}

// =======================
// 10) Limpiar tramo
// =======================
function updateClearPage() {
    const noData = document.getElementById('noDataClear');
    const content = document.getElementById('clearContent');

    if (!currentRoute.length) {
        noData.style.display = 'block';
        content.style.display = 'none';
    } else {
        noData.style.display = 'none';
        content.style.display = 'block';
    }
}

function confirmClear() {
    if (confirm('¿Estás seguro? Se eliminarán todos los datos del tramo actual.')) {
        currentRoute = [];
        originCity = null;
        isRoundTrip = false;
        document.getElementById('originCity').value = '';
        document.getElementById('roundTrip').checked = false;
        localStorage.removeItem('tramoState');
        renderRoute();
        updateClearPage();
        alert('Tramo limpiado correctamente');
        showPage('create');
    }
}

// =======================
// 11) Salir
// =======================
function exitApp() {
    if (confirm('¿Deseas guardar los cambios antes de salir?\n\nSi seleccionas "Aceptar", tu tramo se guardará y podrás continuar más tarde.')) {
        saveToLocalStorage();
        alert('Cambios guardados. ¡Hasta luego!');
    } else {
        alert('Tramo no guardado. ¡Hasta luego!');
    }
}

// =======================
// 12) Service Worker PWA
// =======================
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
}

// =======================
// 13) Arranque
// =======================

document.addEventListener('DOMContentLoaded', initApp);
