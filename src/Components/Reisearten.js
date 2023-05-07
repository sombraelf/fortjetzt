import React from 'react'
import ThemenKacheln from './ThemenKacheln'
import Kategorie from './Kategorie'

function Reisearten() {
    return (
        <div>
            <ThemenKacheln />
            <Kategorie
                            kategorie="Städtereisen"
                            reisen={[
                                {
                                    title: "Paris: Stadt der Liebe",
                                    imageUrl: "paris.png",
                                    price: "499€",
                                    link: "/reise/paris",
                                },
                                {
                                    title: "London: Royales Abenteuer",
                                    imageUrl: "london.png",
                                    price: "599€",
                                    link: "/reise/london",
                                },
                                {
                                    title: "Rom: Ewige Stadt",
                                    imageUrl: "rom.png",
                                    price: "799€",
                                    link: "/reise/rom",
                                },
                                {
                                    title: "Barcelona: Mediterrane Lebenslust",
                                    imageUrl: "barcelona.png",
                                    price: "899€",
                                    link: "/reise/barcelona",
                                },
                            ]}
                        />
                        <Kategorie
                            kategorie="Regionaltouren"
                            reisen={[
                                {
                                    title: "Harz: Natur erleben",
                                    imageUrl: "harz.png",
                                    price: "299€",
                                    link: "/reise/harz",
                                },
                                {
                                    title: "Thüringer Wald: Wandern und Entspannen",
                                    imageUrl: "thüringer.png",
                                    price: "399€",
                                    link: "/reise/thueringer-wald",
                                },
                                {
                                    title: "Spreewald: Kanufahren und Genießen",
                                    imageUrl: "spreewald.png",
                                    price: "499€",
                                    link: "/reise/spreewald",
                                },
                                {
                                    title: "Mecklenburgische Seenplatte: Bootstour und Entspannung",
                                    imageUrl: "seenplatte.png",
                                    price: "599€",
                                    link: "/reise/mecklenburgische-seenplatte",
                                },
                            ]}
                        />
                        <Kategorie
                            kategorie="Winterreisen"
                            reisen={[
                                {
                                    title: "Zermatt: Skivergnügen pur",
                                    imageUrl: "zermatt.png",
                                    price: "699€",
                                    link: "/reise/zermatt",
                                },
                                {
                                    title: "Kitzbühel: Winterzauber in den Alpen",
                                    imageUrl: "kitzbühel.png",
                                    price: "799€",
                                    link: "/reise/kitzbuehel",
                                },
                                {
                                    title: "Lappland: Abenteuer im hohen Norden",
                                    imageUrl: "lappland.png",
                                    price: "999€",
                                    link: "/reise/lappland",
                                },
                                {
                                    title: "Banff: Skifahren in Kanada",
                                    imageUrl: "banff.png",
                                    price: "1299€",
                                    link: "/reise/banff",
                                },
                            ]}
                        />
                        <Kategorie
                            kategorie="Eventreisen"
                            reisen={[
                                {
                                    title: "Oktoberfest: Bier, Brezn und Blasmusik",
                                    imageUrl: "oktoberfest.png",
                                    price: "399€",
                                    link: "/reise/oktoberfest",
                                },
                                {
                                    title: "Karneval in Rio: Samba, Sonne und Strand",
                                    imageUrl: "rio.png",
                                    price: "799€",
                                    link: "/reise/carnival",
                                },
                                {
                                    title: "Silvester in New York: Times Square und Feuerwerk",
                                    imageUrl: "newyork.png",
                                    price: "1499€",
                                    link: "/reise/new-years-eve",
                                },
                                {
                                    title: "Tomorrowland: Elektronische Musik und Party",
                                    imageUrl: "tomorrowland.png",
                                    price: "599€",
                                    link: "/reise/tomorrowland",
                                },
                            ]}
                        />
        </div>
    )
}

export default Reisearten
