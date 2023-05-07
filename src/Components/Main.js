import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Impressum from './Impressum';
import Reiseangebote from './Reiseangebote';
import Login from './Login';
import Reise from './Reise';
import Kategorie from './Kategorie';
import About from './About';
import Contact from './Contact';
import Reisearten from './Reisearten';

function Main() {
    return (
        <div className="bg-bgColor-100">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/reisearten" element={<Reisearten/>} />
                <Route path="/reiseangebote" element={<Reiseangebote />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/reise/paris"
                    element={
                        <Reise
                            title="Paris: Stadt der Liebe"
                            location="Paris, Frankreich"
                            duration="4 Tage"
                            price="499€"
                            imageUrl="/paris.png"
                            description="Erleben Sie die romantischste Stadt der Welt und lassen Sie sich verzaubern von den malerischen Gassen, den prachtvollen Sehenswürdigkeiten und der einzigartigen Atmosphäre. Buchen Sie jetzt und verbringen Sie unvergessliche Tage in Paris!"
                        />
                    }
                />

                <Route
                    path="/reise/london"
                    element={
                        <Reise
                            title="London: Royales Abenteuer"
                            location="London, England"
                            duration="5 Tage"
                            price="599€"
                            imageUrl="/london.png"
                            description="Erleben Sie die britische Metropole und lassen Sie sich von der königlichen Pracht, der lebendigen Kultur und den zahlreichen Sehenswürdigkeiten verzaubern. Buchen Sie jetzt und entdecken Sie die Highlights Londons!"
                        />
                    }
                />

                <Route
                    path="/reise/rom"
                    element={
                        <Reise
                            title="Rom: Ewige Stadt"
                            location="Rom, Italien"
                            duration="6 Tage"
                            price="799€"
                            imageUrl="/rom.png"
                            description="Erleben Sie die Stadt der Antike und lassen Sie sich von der reichen Geschichte, den prachtvollen Bauwerken und der leckeren Küche verzaubern. Buchen Sie jetzt und tauchen Sie ein in die Ewige Stadt!"
                        />
                    }
                />

                <Route
                    path="/reise/barcelona"
                    element={
                        <Reise
                            title="Barcelona: Mediterrane Lebenslust"
                            location="Barcelona, Spanien"
                            duration="7 Tage"
                            price="899€"
                            imageUrl="/barcelona.png"
                            description="Erleben Sie die Stadt am Mittelmeer und lassen Sie sich von der einzigartigen Atmosphäre, der faszinierenden Kunst und der leckeren Küche verzaubern. Buchen Sie jetzt und genießen Sie das mediterrane Lebensgefühl in Barcelona!"
                        />
                    }
                />
                <Route
                    path="/staedtereisen"
                    element={
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
                    }
                />





                <Route
                    path="/reise/harz"
                    element={
                        <Reise
                            title="Harz: Natur erleben"
                            location="Harz, Deutschland"
                            duration="3 Tage"
                            price="299€"
                            imageUrl="/harz.png"
                            description="Erleben Sie die wunderschöne Natur des Harzes und lassen Sie sich von den malerischen Landschaften und der frischen Luft verzaubern. Buchen Sie jetzt und verbringen Sie unvergessliche Tage im Harz!"
                            link="/reise/harz"
                        />
                    }
                />

                <Route
                    path="/reise/thueringer-wald"
                    element={
                        <Reise
                            title="Thüringer Wald: Wandern und Entspannen"
                            location="Thüringer Wald, Deutschland"
                            duration="4 Tage"
                            price="399€"
                            imageUrl="/thüringer.png"
                            description="Entdecken Sie den Thüringer Wald und genießen Sie traumhafte Wandertouren und erholsame Stunden in der Natur. Buchen Sie jetzt und tanken Sie neue Energie im Thüringer Wald!"
                            link="/reise/thueringer-wald"
                        />
                    }
                />

                <Route
                    path="/reise/spreewald"
                    element={
                        <Reise
                            title="Spreewald: Kanufahren und Genießen"
                            location="Spreewald, Deutschland"
                            duration="5 Tage"
                            price="499€"
                            imageUrl="/spreewald.png"
                            description="Erkunden Sie den Spreewald mit dem Kanu und lassen Sie sich von der einzigartigen Natur und der leckeren regionalen Küche verzaubern. Buchen Sie jetzt und erleben Sie unvergessliche Tage im Spreewald!"
                            link="/reise/spreewald"
                        />
                    }
                />

                <Route
                    path="/reise/mecklenburgische-seenplatte"
                    element={
                        <Reise
                            title="Mecklenburgische Seenplatte: Bootstour und Entspannung"
                            location="Mecklenburgische Seenplatte, Deutschland"
                            duration="6 Tage"
                            price="599€"
                            imageUrl="/seenplatte.png"
                            description="Erkunden Sie die Mecklenburgische Seenplatte mit dem Boot und genießen Sie erholsame Stunden in der Natur. Buchen Sie jetzt und erleben Sie unvergessliche Tage an einem der schönsten Orte Deutschlands!"
                            link="/reise/mecklenburgische-seenplatte"
                        />
                    }
                />

                <Route
                    path="/regionaltouren"
                    element={
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
                    }
                />









                <Route
                    path="/reise/zermatt"
                    element={
                        <Reise
                            title="Zermatt: Skivergnügen pur"
                            location="Zermatt, Schweiz"
                            duration="5 Tage"
                            price="699€"
                            imageUrl="/zermatt.png"
                            description="Erleben Sie die Schweizer Alpen und genießen Sie das Skivergnügen in Zermatt. Buchen Sie jetzt und erleben Sie unvergessliche Tage in der atemberaubenden Winterlandschaft!"
                            link="/reise/zermatt"
                        />
                    }
                />

                <Route
                    path="/reise/kitzbuehel"
                    element={
                        <Reise
                            title="Kitzbühel: Winterzauber in den Alpen"
                            location="Kitzbühel, Österreich"
                            duration="6 Tage"
                            price="799€"
                            imageUrl="/kitzbühel.png"
                            description="Entdecken Sie das charmante Kitzbühel und erleben Sie den Winterzauber in den österreichischen Alpen. Buchen Sie jetzt und verbringen Sie erholsame Tage in einer der schönsten Regionen Europas!"
                            link="/reise/kitzbuehel"
                        />
                    }
                />

                <Route
                    path="/reise/lappland"
                    element={
                        <Reise
                            title="Lappland: Abenteuer im hohen Norden"
                            location="Lappland, Finnland"
                            duration="7 Tage"
                            price="999€"
                            imageUrl="/lappland.png"
                            description="Erleben Sie das Abenteuer des Nordens und entdecken Sie die faszinierende Natur Lapplands. Buchen Sie jetzt und erleben Sie unvergessliche Tage im hohen Norden!"
                            link="/reise/lappland"
                        />
                    }
                />

                <Route
                    path="/reise/banff"
                    element={
                        <Reise
                            title="Banff: Skifahren in Kanada"
                            location="Banff, Kanada"
                            duration="8 Tage"
                            price="1299€"
                            imageUrl="/banff.png"
                            description="Erleben Sie das Skifahren in Kanada und genießen Sie die traumhafte Landschaft der Rocky Mountains. Buchen Sie jetzt und verbringen Sie unvergessliche Tage in Banff!"
                            link="/reise/banff"
                        />
                    }
                />

                <Route
                    path="/winterreisen"
                    element={
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
                    }
                />


                <Route
                    path="/reise/oktoberfest"
                    element={
                        <Reise
                            title="Oktoberfest: Bier, Brezn und Blasmusik"
                            location="München, Deutschland"
                            duration="3 Tage"
                            price="399€"
                            imageUrl="/oktoberfest.png"
                            description="Feiern Sie das berühmte Oktoberfest in München und erleben Sie bayerische Gemütlichkeit, Tradition und natürlich das beste Bier der Welt. Buchen Sie jetzt und erleben Sie unvergessliche Tage auf der Wiesn!"
                            link="/reise/oktoberfest"
                        />
                    }
                />

                <Route
                    path="/reise/carnival"
                    element={
                        <Reise
                            title="Karneval in Rio: Samba, Sonne und Strand"
                            location="Rio de Janeiro, Brasilien"
                            duration="5 Tage"
                            price="799€"
                            imageUrl="/rio.png"
                            description="Feiern Sie den berühmten Karneval in Rio de Janeiro und erleben Sie die brasilianische Lebensfreude, Musik und Tanz. Buchen Sie jetzt und genießen Sie unvergessliche Tage in der Stadt am Zuckerhut!"
                            link="/reise/carnival"
                        />
                    }
                />

                <Route
                    path="/reise/new-years-eve"
                    element={
                        <Reise
                            title="Silvester in New York: Times Square und Feuerwerk"
                            location="New York City, USA"
                            duration="7 Tage"
                            price="1499€"
                            imageUrl="/newyork.png"
                            description="Feiern Sie den Jahreswechsel in der Stadt, die niemals schläft und erleben Sie das berühmte Silvester-Spektakel am Times Square. Buchen Sie jetzt und verbringen Sie unvergessliche Tage in der Metropole der Welt!"
                            link="/reise/new-years-eve"
                        />
                    }
                />

                <Route
                    path="/reise/tomorrowland"
                    element={
                        <Reise
                            title="Tomorrowland: Elektronische Musik und Party"
                            location="Boom, Belgien"
                            duration="4 Tage"
                            price="599€"
                            imageUrl="/tomorrowland.png"
                            description="Feiern Sie die größte elektronische Musik-Party der Welt im belgischen Boom und erleben Sie die besten DJs, Visuals und Pyrotechnik-Show. Buchen Sie jetzt und tauchen Sie ein in die Welt von Tomorrowland!"
                            link="/reise/tomorrowland"
                        />
                    }
                />

                <Route
                    path="/eventreisen"
                    element={
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
                    }
                />

                <Route
                    path="/reise/lissabon"
                    element={
                        <Reise
                            title="Städtetrip nach Lissabon"
                            location="Lissabon, Portugal"
                            duration="4 Tage"
                            price="299,99€"
                            imageUrl="/lissabon.png"
                            description="Entdecken Sie die wunderschöne Hauptstadt Portugals und lassen Sie sich von der Kultur und dem Charme Lissabons verzaubern. Buchen Sie jetzt und erleben Sie unvergessliche Tage in der Stadt am Tejo!"
                            link="/reise/lissabon"
                        />
                    }
                />

                <Route
                    path="/reise/seychellen"
                    element={
                        <Reise
                            title="Traumurlaub auf den Seychellen"
                            location="Seychellen, Afrika"
                            duration="10 Tage"
                            price="2499,99€"
                            imageUrl="/seychellen.png"
                            description="Erleben Sie den perfekten Strandurlaub auf den traumhaften Inseln der Seychellen und lassen Sie sich von der atemberaubenden Natur und dem türkisblauen Meer verzaubern. Buchen Sie jetzt und erleben Sie unvergessliche Tage im Paradies!"
                            link="/reise/seychellen"
                        />
                    }
                />

                <Route
                    path="/reise/kanada"
                    element={
                        <Reise
                            title="Naturwunder in Kanada"
                            location="Kanada"
                            duration="14 Tage"
                            price="1799,99€"
                            imageUrl="/kanada.png"
                            description="Erleben Sie die unberührte Natur Kanadas und entdecken Sie die faszinierende Landschaft mit ihren Wäldern, Seen und Bergen. Buchen Sie jetzt und tauchen Sie ein in die unendliche Weite Kanadas!"
                            link="/reise/kanada"
                        />
                    }
                />

                <Route
                    path="/reise/island"
                    element={
                        <Reise
                            title="Abenteuer in Island"
                            location="Island"
                            duration="7 Tage"
                            price="1499,99€"
                            imageUrl="/island.png"
                            description="Erleben Sie das Abenteuer Islands und entdecken Sie die faszinierende Natur mit ihren Geysiren, Gletschern und Wasserfällen. Buchen Sie jetzt und erleben Sie unvergessliche Tage auf der Insel aus Feuer und Eis!"
                            link="/reise/island"
                        />
                    }
                />

            </Routes>
        </div>
    );
}

export default Main;