using System;
using System.IO;
using Npgsql;
using System.Data;
using System.Net;
using System.Threading;

namespace backbone
{
    class Program
    {
        public static string getBetween(string stringSource, string stringStart, string stringEnd)
        {

            int Start, End;
            if (stringSource != null && stringSource.Contains(stringStart) && stringSource.Contains(stringEnd))
            {
                Start = stringSource.IndexOf(stringStart, 0) + stringStart.Length;
                End = stringSource.IndexOf(stringEnd, Start);
                if (End - Start > 0)
                {
                    return stringSource.Substring(Start, End - Start);
                }
                else
                {
                    return "NULL";
                }

            }
            else
            {
                return "NULL";
            }
        }

        private static string getBetweenReverse(string stringSource, string stringStart, string stringEnd)
        {
            int Start, End;
            if (stringSource.Contains(stringStart) && stringSource.Contains(stringEnd))
            {
                End = stringSource.LastIndexOf(stringEnd, stringSource.Length);
                Start = stringSource.LastIndexOf(stringStart, End) + stringStart.Length;

                if (End - Start > 0)
                {
                    return stringSource.Substring(Start, End - Start);
                }
                else
                {
                    return "NULL";
                }

            }
            else
            {
                return "NULL";
            }
        }
        private static string splitStrings(string stringSource, string stringStart)
        {
            int Start;
            if (stringSource.Contains(stringStart))
            {
                Start = stringSource.IndexOf(stringStart, 0) + stringStart.Length;
                return stringSource.Substring(Start);
            }
            else
            {
                return "NULL";
            }
        }
        private static string drzavaPrevodEurolift(string drzava)
        {
            if (drzava == "Belarus")
            {
                drzava = "Belorusija";
            }
            else if (drzava == "BELGIUM")
            {
                drzava = "Belgija";
            }
            else if (drzava == "China")
            {
                drzava = "Kina";
            }
            else if (drzava == "CZECH REPUBLIC")
            {
                drzava = "Češka";
            }
            else if (drzava == "FRANCE")
            {
                drzava = "Francuska";
            }
            else if (drzava == "NETHERLANDS")
            {
                drzava = "Holandija";
            }
            else if (drzava == "ITALY")
            {
                drzava = "Italija";
            }
            else if (drzava == "LITHUANIA")
            {
                drzava = "Litvanija";
            }
            else if (drzava == "GERMANY")
            {
                drzava = "Nemačka";
            }
            else if (drzava == "POLAND")
            {
                drzava = "Poljska";
            }
            else if (drzava == "PORTUGAL")
            {
                drzava = "Portugalija";
            }
            else if (drzava == "ROMANIA")
            {
                drzava = "Rumunija";
            }
            else if (drzava == "RUSSIA")
            {
                drzava = "Rusija";
            }
            else if (drzava == "SPAIN")
            {
                drzava = "Španija";
            }
            else if (drzava == "UNITED ARAB EMIRATES")
            {
                drzava = "Ujedinjeni Arapski Emirati";
            }
            else if (drzava == "UNITED KINGDOM")
            {
                drzava = "Ujedinjeno Kraljevstvo";
            }
            return drzava;

        }
        private static string drzavaPrevodMobileDe(string drzava)
        {
            if (drzava == "Albania")
            {
                drzava = "Albanija";
            }
            //else if (drzava == "BELGIUM")
            //{
            //    drzava = "Belgija";
            //}
            //else if (drzava == "China")
            //{
            //    drzava = "Kina";
            //}
            else if (drzava == "Czech Republic")
            {
                drzava = "Češka";
            }
            else if (drzava == "France")
            {
                drzava = "Francuska";
            }
            else if (drzava == "Hungary")
            {
                drzava = "Mađarska";
            }
            else if (drzava == "Netherlands")
            {
                drzava = "Holandija";
            }
            //else if (drzava == "ITALY")
            //{
            //    drzava = "Italija";
            //}
            //else if (drzava == "LITHUANIA")
            //{
            //    drzava = "Litvanija";
            //}
            else if (drzava == "Germany")
            {
                drzava = "Nemačka";
            }
            else if (drzava == "Poland")
            {
                drzava = "Poljska";
            }
            else if (drzava == "Switzerland")
            {
                drzava = "Švajcarska";
            }
            //else if (drzava == "PORTUGAL")
            //{
            //    drzava = "Portugalija";
            //}
            else if (drzava == "Romania")
            {
                drzava = "Rumunija";
            }
            //else if (drzava == "RUSSIA")
            //{
            //    drzava = "Rusija";
            //}
            //else if (drzava == "SPAIN")
            //{
            //    drzava = "Španija";
            //}
            //else if (drzava == "UNITED ARAB EMIRATES")
            //{
            //    drzava = "Ujedinjeni Arapski Emirati";
            //}
            //else if (drzava == "UNITED KINGDOM")
            //{
            //    drzava = "Ujedinjeno Kraljevstvo";
            //}
            return drzava;

        }
        private static string drzavaPrevodMascus(string drzava)
        {
            if (drzava.Contains("Slova"))
            {
                drzava = "Slovačka";
            }
            else if (drzava.Contains("Gr"))
            {
                drzava = "Grčka";
            }
            else if (drzava.Contains("na Afrika"))
            {
                drzava = "Južna Afrika";
            }
            else if (drzava.Contains("na Koreja"))
            {
                drzava = "Južna Koreja";
            }
            else if (drzava.Contains("panija"))
            {
                drzava = "Španija";
            }
            else if (drzava.Contains("vedska"))
            {
                drzava = "Švedska";
            }
            else if (drzava.Contains("Nema"))
            {
                drzava = "Nemačka";
            }
            else if (drzava.Contains("Norve"))
            {
                drzava = "Norveška";
            }
            else if (drzava == "Ruska Federacija")
            {
                drzava = "Rusija";
            }
            else if (drzava.Contains("Sjedinjene Ameri"))
            {
                drzava = "SAD";
            }
            else if (drzava.Contains("ka Republika"))
            {
                drzava = "Češka";
            }
            else if (drzava == "Madjarska")
            {
                drzava = "Mađarska";
            }
            return drzava;
        }
        private static string drzavaPrevodForkliftInt(string drzava)
        {
            if (drzava == "Germany")
            {
                drzava = "Nemačka";
            }
            else if (drzava == "Belgium")
            {
                drzava = "Belgija";
            }
            else if (drzava == "Bulgaria")
            {
                drzava = "Bugarska";
            }
            else if (drzava == "Denmark")
            {
                drzava = "Danska";
            }
            else if (drzava == "France")
            {
                drzava = "Francuska";
            }
            else if (drzava == "Greece")
            {
                drzava = "Grčka";
            }
            else if (drzava == "Italy")
            {
                drzava = "Italija";
            }
            else if (drzava == "Macedonia")
            {
                drzava = "Makedonija";
            }
            else if (drzava == "The Netherlands")
            {
                drzava = "Holandija";
            }
            else if (drzava == "Poland")
            {
                drzava = "Poljska";
            }
            else if (drzava == "Hungary")
            {
                drzava = "Mađarska";
            }
            else if (drzava == "Sweden")
            {
                drzava = "Švedska";
            }
            else if (drzava == "Spain")
            {
                drzava = "Španija";
            }
            else if (drzava == "Switzerland")
            {
                drzava = "Švajcarska";
            }
            else if (drzava == "Ireland")
            {
                drzava = "Irska";
            }
            else if (drzava == "Czech Republic")
            {
                drzava = "Češka";
            }
            else if (drzava == "Great Britain")
            {
                drzava = "Ujedinjeno Kraljevstvo";
            }
            else if (drzava == "Slovenia")
            {
                drzava = "Slovenija";
            }
            return drzava;
        }
        private static void puniBazuMascusRs(string marka)
        {
            string htmlCode, htmlCodeTarget, model, cena, godina, motor,
            radnihSati, kapacitetKG, visinaPodizanja, visina, nacinPodizanja, drzava, duzinaVilica, url;
            htmlCode = null;
            //string urlTemp = "";
            string urlHome = "http://www.mascus.rs";
            for (int k = 1; k < 40; k++)
            {
                using (WebClient client = new WebClient()) // WebClient class inherits IDisposable
                {
                    try
                    {
                        htmlCode = client.DownloadString
                            ("http://www.mascus.rs/+/categorypath%3dmaterialhandling%252fforklifttrucks%26isauction%3d0/+/"
                             + k.ToString() + ",20,createdate_desc,search.html?ar=brand%3D" + marka.ToLower());
                    }
                    catch (Exception xcp)
                    {

                        /*StreamWriter sw = new StreamWriter ("./var/www/html/testing/errors.txt", true);
						sw.WriteLine (DateTime.Now.ToShortDateString () + " /// " + DateTime.Now.ToShortTimeString ());
						sw.WriteLine ("Error 102201");
						sw.WriteLine (xcp.ToString ());
						sw.WriteLine (" ____________________________________________________________");
						sw.Close ();
						sw.Dispose ();*/
                        Console.Write(xcp.ToString());
                    }

                }
                for (int i = 0; i < 100; i++)
                {
                    url = getBetween(htmlCode, "title\"><a class=\"title-font\" href=\"", "\"");
                    if (url == "NULL")
                    {
                        i = 100;
                    }
                    else
                    {
                        //urlTemp = url;
                        url = urlHome + url;
                        int urlCount = urlSkalar(url);
                        if (urlCount == 0)
                        {
                            htmlCodeTarget = null;
                            try
                            {
                                using (WebClient client = new WebClient()) // WebClient class inherits IDisposable
                                {
                                    htmlCodeTarget = client.DownloadString
                                        (url);
                                }
                            }
                            catch (Exception xcp)
                            {
                                StreamWriter sw = new StreamWriter("/var/www/html/testing/errors.txt", true);
                                sw.WriteLine(DateTime.Now.ToShortDateString() + " /// " + DateTime.Now.ToShortTimeString());
                                sw.WriteLine("Error 102202");
                                sw.WriteLine(url);
                                sw.WriteLine(xcp.ToString());
                                sw.WriteLine(" ____________________________________________________________");
                                sw.Close();
                                sw.Dispose();
                            }
                            if (htmlCodeTarget != null && getBetween(htmlCodeTarget, "Cena:", "€") != "NULL")
                            {
                                cena = getBetween(htmlCodeTarget, "Cena:", "€").Trim().Replace(".", "");
                                /*if (cena == "-" || cena == "NULL" || cena.Contains("vatAmount"))
								{
									cena = getBetween (htmlCodeTarget, "\"priceOriginal\":", ".").Trim ();
								}*/

                                model = getBetween(htmlCodeTarget, "<title>" + marka, ",").Trim();
                                model = model.Replace(" ", "");
                                model = model.Replace("-", "");
                                model = model.Replace("/", "");
                                if (model != null && model != "" && model.Length > 6)
                                {
                                    model = model.Substring(0, 6);
                                }

                                godina = getBetween(htmlCodeTarget, "Godina proizvodnje<td", "/tr");
                                godina = getBetween(godina, "\">", "<").Trim();

                                radnihSati = getBetween(htmlCodeTarget, "\"name\">Sati kori", "/tr");
                                radnihSati = getBetween(radnihSati, "\">", "h").Trim().Replace(".", "");

                                kapacitetKG = getBetween(htmlCodeTarget, "kapacitet dizanja<td", "/tr");
                                kapacitetKG = getBetween(kapacitetKG, "\">", "kg").Trim().Replace(".", "");

                                motor = getBetween(htmlCodeTarget, "category\">", " ").Trim();
                                if (motor.Contains("Vilju"))
                                {
                                    motor = getBetween(htmlCode, ">Tip motora<", "/tr");
                                    motor = getBetween(motor, "<div>", "<");
                                }
                                else if (motor.Contains("Elektri"))
                                {
                                    motor = "Električni";
                                }
                                else if (motor == "Dizelski")
                                {
                                    motor = "Dizel";
                                }
                                else if (motor == "Plinski")
                                {
                                    motor = "LPG";
                                }
                                //motor = getBetween(motor, "\">", "f").Trim();

                                visinaPodizanja = getBetween(htmlCodeTarget, ">Maksimalna visina podizanja<", "/tr");
                                visinaPodizanja = getBetween(visinaPodizanja, "\">", "mm").Trim().Replace(".", "");

                                visina = getBetween(htmlCodeTarget, ">Visina pogona<", "/tr");
                                visina = getBetween(visina, "\">", "mm").Trim().Replace(".", "");

                                drzava = getBetween(htmlCodeTarget, "<div countryIdentifier", "/div");
                                drzava = getBetween(drzava, ">", "<").Trim();
                                drzava = drzavaPrevodMascus(drzava);

                                duzinaVilica = getBetween(htmlCodeTarget, "kara<td", "/tr");
                                duzinaVilica = getBetween(duzinaVilica, "\">", "mm").Trim().Replace(".", "");

                                nacinPodizanja = getBetween(htmlCodeTarget, ">Stub za podizanje<", "/tr");
                                nacinPodizanja = getBetween(nacinPodizanja, "\">", "<").Trim();

                                if (nacinPodizanja == "Jednostrani")
                                {
                                    nacinPodizanja = "simplex";
                                }
                                else if (nacinPodizanja.Contains("Duplex"))
                                {
                                    nacinPodizanja = "duplex";
                                }
                                else if (nacinPodizanja.Contains("Triplex"))
                                {
                                    nacinPodizanja = "triplex";
                                }
                                else if (nacinPodizanja == "Trojni")
                                {
                                    nacinPodizanja = "triplex";
                                }
                                else if (nacinPodizanja.Contains("etvorostruki"))
                                {
                                    nacinPodizanja = "quadruplex";
                                }
                                else if (nacinPodizanja == "Ostalo")
                                {
                                    nacinPodizanja = "NULL";
                                }

                                /*StreamWriter sw = new StreamWriter ("/var/www/html/testing/test.txt", true);
								sw.WriteLine (i.ToString()+". "+url);*/
                                /*Console.WriteLine(i.ToString() + ". " + url);
                                Console.WriteLine(DateTime.Now.ToShortDateString() + " /// " + DateTime.Now.ToShortTimeString());
                                Console.WriteLine(model + "\n" + cena + "\n" + godina + "\n" + motor + "\n" +
                                              radnihSati + "\n" + kapacitetKG + "\n" + visinaPodizanja + "\n" + visina + "\n" + nacinPodizanja +
                                              "\n" + drzava + "\n" + duzinaVilica + "\n" + url);
                                Console.WriteLine(" ____________________________________________________________");*/
                                /*sw.Close ();
								sw.Dispose ();*/

                                puniBazu(marka, model, cena, godina, motor,
                                          radnihSati, kapacitetKG, visinaPodizanja, visina, nacinPodizanja, drzava, duzinaVilica, url);


                            }
                        }
                        htmlCode = splitStrings(htmlCode, "title\"><a class=\"title-font\" href=\"");
                        if (htmlCode == "NULL")
                        {
                            k = 40;
                        }
                    }
                }
            }
        }
        private static void puniBazuMobileDe(string marka, string markaId)
        {
            string htmlCode, htmlCodeTarget, model, cena, godina, motor,
            radnihSati, kapacitetKG, visinaPodizanja, drzava, url, visina;
            for (int k = 1; k < 40; k++)
            {
                /*StreamWriter sw1 = new StreamWriter ("/var/www/html/testing/test.txt", true);
				sw1.WriteLine ("Page "+k.ToString()+":");
				sw1.Close ();
				sw1.Dispose ();*/


                using (WebClient client = new WebClient()) // WebClient class inherits IDisposable
                {
                    htmlCode = client.DownloadString
                        ("http://suchen.mobile.de/lkw/search.html?useCase=SearchResult&isSearchRequest=true&pageNumber="
                         + k.ToString()
                         + "&__lp=28&scopeId=FT&sortOption.sortBy=creationTime&sortOption.sortOrder=DESCENDING"
                         + "&makeModelVariant1.makeId=" + markaId + "&makeModelVariant1.searchInFreetext=false"
                         + "&makeModelVariant2.searchInFreetext=false&makeModelVariant3.searchInFreetext=false"
                         + "&vehicleCategory=ForkliftTruck&segment=Truck&negativeFeatures=EXPORT&grossPrice=true&lang=en");
                    // = getBetween(htmlCode, " ", "Latest entity-items");
                    //StringBuilder sb = new StringBuilder();
                    /*StreamWriter sw = new StreamWriter ("/var/www/html/testing/test.txt", true);
					sw.WriteLine (htmlCode);
					sw.Close ();
					sw.Dispose ();*/
                    for (int i = 0; i < 20; i++)
                    {
                        url = getBetween(htmlCode, "cBox-body--resultitem", "<div");
                        url = getBetween(url, "href=\"", "&");
                        if (url == "NULL")
                        {
                            i = 21;
                        }
                        else
                        {
                            int urlCount = urlSkalar(url);
                            if (urlCount == 0)
                            {
                                htmlCodeTarget = client.DownloadString(url + "&lang=en");

                                //marka = getBetween(htmlCodeTarget, ">Marke:", "<").Trim();
                                //marka = getBetween(marka, "d>", "<");
                                //marka = "Jungheinrich";
                                cena = getBetween(htmlCodeTarget, "rbt-sec-price\">€", "(").Trim().Replace(",", "");

                                if (cena == "NULL")
                                {
                                    cena = getBetween(htmlCodeTarget, "rbt-prime-price\">€", "(").Trim().Replace(",", "");
                                }
                                //cena = getBetween(cena, "\">", "<").Trim();

                                model = getBetween(htmlCodeTarget, ">Typ:", "<");
                                if (model == "NULL" || model.Contains("&nbsp;"))
                                {
                                    model = getBetween(htmlCodeTarget, "<title>" + marka, "<");
                                }
                                model = model.Replace(" ", "");
                                model = model.Replace("-", "");
                                model = model.Replace("/", "");
                                if (model != null && model != "" && model.Length > 6)
                                {
                                    model = model.Substring(0, 6);
                                }
                                //tip = getBetween(htmlCodeTarget, strStartTip, strEndTr);
                                //tip = getBetween(tip, "d>", "<");

                                godina = getBetween(htmlCodeTarget, "rbt-constructionYear-v", "</div");
                                godina = getBetween(godina, "strong>", "<");
                                //godina = getBetween(godina, "\">", "<").Trim();

                                radnihSati = getBetween(htmlCodeTarget, "rbt-operatingHours-v", "</div");
                                radnihSati = getBetween(radnihSati, "strong>", "Hrs").Replace("&nbsp;", "").Replace(",", "").Trim();

                                kapacitetKG = getBetween(htmlCodeTarget, "rbt-liftingCapacity-v", "</div");
                                kapacitetKG = getBetween(kapacitetKG, "strong>", "kg").Replace("&nbsp;", "").Replace(",", "").Trim();

                                motor = getBetween(htmlCodeTarget, "rbt-fuel-v", "</div");
                                motor = getBetween(motor, "strong>", "<");
                                if (motor == "Electric")
                                {
                                    motor = "Električni";
                                }
                                else if (motor == "Diesel")
                                {
                                    motor = "Dizel";
                                }
                                else if (motor == "CNG")
                                {
                                    motor = "LPG";
                                }
                                else if (motor == "OTHER")
                                {
                                    motor = "NULL";
                                }

                                visinaPodizanja = getBetween(htmlCodeTarget, ">rbt-liftingHeight-v<", "/div");
                                visinaPodizanja = getBetween(visinaPodizanja, "strong>", "mm").Replace("&nbsp;", "").Replace(",", "").Trim();

                                visina = getBetween(htmlCodeTarget, ">rbt-installationHeight-v", "/div");
                                visina = getBetween(visina, "strong>", "mm").Replace("&nbsp;", "").Replace(",", "").Trim();

                                drzava = getBetween(htmlCodeTarget, "mainVendorDetailsAddress\">", "</p>") + "</p>";
                                drzava = getBetweenReverse(drzava, ",", "</p>").Trim();
                                drzava = drzavaPrevodMobileDe(drzava);


                                string nacinPodizanja = "NULL";
                                string duzinaVilica = "NULL";

                                StreamWriter sw = new StreamWriter("/var/www/html/testing/test.txt", true);
                                sw.WriteLine(i.ToString() + ". " + url);
                                sw.WriteLine(DateTime.Now.ToShortDateString() + " /// " + DateTime.Now.ToShortTimeString());
                                sw.WriteLine(model + "\n" + cena + "\n" + godina + "\n" + motor + "\n" +
                                              radnihSati + "\n" + kapacitetKG + "\n" + visinaPodizanja + "\n" + visina + "\n" + nacinPodizanja +
                                              "\n" + drzava + "\n" + duzinaVilica + "\n" + url);
                                sw.WriteLine(" ____________________________________________________________");
                                sw.Close();
                                sw.Dispose();

                                //puniBazu (marka, model, cena, godina, motor,
                                //  radnihSati, kapacitetKG, visinaPodizanja, visina, nacinPodizanja, drzava, duzinaVilica, url);


                            }
                            htmlCode = splitStrings(htmlCode, "class=\"cBox-body");
                            if (htmlCode == "NULL")
                            {
                                k = 41;
                            }
                        }
                    }
                }
            }
        }

        private static void puniBazuForkliftInternational(string marka)
        {
            string htmlCode, htmlCodeTarget, model, cena, godina, motor,
            radnihSati, kapacitetKG, visinaPodizanja, nacinPodizanja, drzava, duzinaVilica,
            url, visina;
            int test;
            string urlHome = @"http://www.forklift-international.com/eu/e/";
            for (int k = 1; k < 40; k++)
            {
                /*StreamWriter sw1 = new StreamWriter ("/var/www/html/testing/test.txt", true);
				sw1.WriteLine ("Page "+k.ToString()+":");
				sw1.Close ();
				sw1.Dispose ();*/

                using (WebClient client = new WebClient()) // WebClient class inherits IDisposable
                {
                    htmlCode = client.DownloadString
                        (@"http://www.forklift-international.com/eu/e/staplersuche.php?bhvon=0&hhvon=0&fhvon=0&bhbis=9000&hhbis=30000&fhbis=4000&baujahr=0&hatbild=0&tkvon=0&tkbis=100000&preisvon=0&preisbis=1000000&antriebsart=*&plz=&entfernung=0&Bauart=alle&reifen=*&Fabrikat=" + marka + "&masttypid=alle&landid=10001&bjbis=2014&sonderbit=0&numbers=100&sortorder=2&page=" + k.ToString());
                    //Console.WriteLine("http://www.forklift-international.com/eu/e/staplersuche.php?bhvon=0&hhvon=0&fhvon=0&bhbis=9000&hhbis=30000&fhbis=4000&baujahr=0&hatbild=0&tkvon=0&tkbis=100000&preisvon=0&preisbis=1000000&antriebsart=*&plz=&entfernung=0&Bauart=alle&reifen=*&Fabrikat=" + marka + "&masttypid=alle&landid=10001&bjbis=2014&sonderbit=0&numbers=100&sortorder=2&page=" + k.ToString());
                    // = getBetween(htmlCode, " ", "Latest entity-items");
                    //StringBuilder sb = new StringBuilder();
                    htmlCode = getBetween(htmlCode, "results\"", "<nav ");
                    for (int i = 1; i <= 100; i++)
                    {
                        url = getBetween(htmlCode, "href=\"", "\"");
                        if (url == "NULL")
                        {
                            i = 101;
                        }
                        else
                        {
                            url = urlHome + url;
                            int urlCount = urlSkalar(url);
                            if (urlCount == 0)
                            {
                                htmlCodeTarget = client.DownloadString
                                    (url);

                                cena = getBetween(htmlCodeTarget, "Price excl. VAT", "</td>").Trim();
                                cena = getBetween(cena, "<td>", "EUR").Trim().Replace(".", "");

                                if (cena != "NULL" && cena != "on request")
                                {
                                    model = getBetween(htmlCodeTarget, ">Model:<", "/td>");
                                    model = getBetween(model, "<td>", "<").Trim().Replace(",", "");
                                    model = model.Replace(" ", "");
                                    model = model.Replace("-", "");
                                    model = model.Replace("/", "");
                                    model = model.Replace("+", "");
                                    model = model.Replace("(", "");

                                    if (model != null && model != "" && model.Length > 6)
                                    {
                                        model = model.Substring(0, 6);
                                    }

                                    //tip = getBetween(htmlCodeTarget, strStartTip, strEndTr);
                                    //tip = getBetween(tip, "d>", "<");

                                    godina = getBetween(htmlCodeTarget, ">YOM:<", "/td>");
                                    godina = getBetween(godina, "<td>", "<").Trim();

                                    radnihSati = getBetween(htmlCodeTarget, ">Running hours:<", "/td");
                                    radnihSati = getBetween(radnihSati, "<td>", "<").Trim().Replace(".", "");

                                    kapacitetKG = getBetween(htmlCodeTarget, ">Capacity:<", "/td");
                                    kapacitetKG = getBetween(kapacitetKG, "<td>", "kg").Trim().Replace(".", "");

                                    motor = getBetween(htmlCodeTarget, ">Engine type:<", "/td");
                                    motor = getBetween(motor, "<td>", "<").Trim();
                                    if (motor == "Diesel")
                                    {
                                        motor = "Dizel";
                                    }
                                    else if (motor == "LP Gas" || motor == "Natural Gas")
                                    {
                                        motor = "LPG";
                                    }
                                    else if (motor == "Electric")
                                    {
                                        motor = "Električni";
                                    }

                                    visinaPodizanja = getBetween(htmlCodeTarget, "Lift. Height:", "/td");
                                    visinaPodizanja = getBetween(visinaPodizanja, "<td>", "mm").Trim().Replace(".", "");

                                    visina = getBetween(htmlCodeTarget, ">Closed height:<", "/td");
                                    visina = getBetween(visina, "<td>", "mm").Trim().Replace(".", "");

                                    drzava = getBetween(htmlCodeTarget, "col-lg-12 col-sm-8\"", "<hr>");
                                    drzava = getBetween(drzava, "<br>", "/p>");
                                    drzava = getBetween(drzava, "<br>", "<").Trim();
                                    drzava = drzavaPrevodForkliftInt(drzava);

                                    duzinaVilica = getBetween(htmlCodeTarget, ">Fork length:<", "/td");
                                    if (duzinaVilica.Contains("mm"))
                                    {
                                        duzinaVilica = getBetween(duzinaVilica, "<td>", "mm").Trim().Replace(".", "");
                                    }
                                    else
                                    {
                                        duzinaVilica = getBetween(duzinaVilica, "\">", "<").Trim().Replace(".", "");
                                    }
                                    duzinaVilica = duzinaVilica.Replace("LxBxD:", "").Trim();
                                    if (duzinaVilica.Contains("x"))
                                    {
                                        duzinaVilica = getBetween("y" + duzinaVilica, "y", "x");
                                    }
                                    if (!Int32.TryParse(duzinaVilica, out test))
                                    {
                                        duzinaVilica = "NULL";
                                    }

                                    nacinPodizanja = getBetween(htmlCodeTarget, ">Mast type:<", "/td");
                                    nacinPodizanja = getBetween(nacinPodizanja, "<td>", "<").Trim();
                                    if (nacinPodizanja.Contains("Duplex"))
                                    {
                                        nacinPodizanja = "Duplex";
                                    }
                                    else if (nacinPodizanja == "none")
                                    {
                                        nacinPodizanja = "-";
                                    }
                                    else if (nacinPodizanja == "Telescopic")
                                    {
                                        nacinPodizanja = "Teleskopski";
                                    }
                                    else if (nacinPodizanja == "Quadro")
                                    {
                                        nacinPodizanja = "Quadruplex";
                                    }

                                    /*StreamWriter sw = new StreamWriter ("/var/www/html/testing/test.txt", true);
									sw.WriteLine (i.ToString()+". "+url);
									sw.WriteLine (DateTime.Now.ToShortDateString () + " /// " + DateTime.Now.ToShortTimeString ());*/
									/*Console.WriteLine (" Model: " +model + "\nCena: " + cena + "\nGodina: " +  godina + "\n"  + motor + "\n" +
									              radnihSati + "\n" + kapacitetKG + "\n" + visinaPodizanja + "\n" + visina + "\n" +  nacinPodizanja + 
									              "\n" + drzava + "\n" + duzinaVilica + "\n" + url);
									Console.WriteLine (" ____________________________________________________________");
									*/
                                    //sw.Close ();
									//sw.Dispose ();


                                    puniBazu(marka, model, cena, godina, motor,
                                          radnihSati, kapacitetKG, visinaPodizanja, visina, nacinPodizanja, drzava, duzinaVilica, url);


                                    if (htmlCode == "NULL")
                                    {
                                        i = 151;
                                    }
                                }
                            }
                            htmlCode = splitStrings(htmlCode, "href=\"");
                        }
                    }
                }
            }

        }

        public static void truncateTable()
        {
            IDbConnection conn = new NpgsqlConnection(db.connectionString);
            IDbCommand cmd = conn.CreateCommand();
            cmd.CommandTimeout = 100;
            cmd.CommandText = "TRUNCATE TABLE viljuskari;";
            try
            {
                if (conn.State != ConnectionState.Open)
                {
                    conn.Open();
                }
                cmd.ExecuteNonQuery();
                conn.Close();
            }
            catch (Exception xcp)
            {
                StreamWriter sw = new StreamWriter("/var/www/html/testing/errors.txt", true);
                sw.WriteLine(DateTime.Now.ToShortDateString() + " /// " + DateTime.Now.ToShortTimeString());
                sw.WriteLine("Error 102203");
                sw.WriteLine(xcp.ToString());
                sw.WriteLine(cmd.CommandText.ToString());
                sw.WriteLine(" ____________________________________________________________");
                sw.Close();
                sw.Dispose();
            }
            cmd.Dispose();
            cmd = null;

        }


        public static void puniBazu(string marka, string model, string cena, string godina, string motor,
                                    string radnihSati, string kapacitetKG, string visinaPodizanja, string visina, string nacinPodizanja,
                                    string drzava, string duzinaVilica, string url)
        {
            if (cena != "0" && cena != "NULL" && model != "NULL" && godina != "NULL" && url != "NULL")
            {
                duzinaVilica = duzinaVilica.Replace(",", "");
                duzinaVilica = duzinaVilica.Replace(".", "");
                visina = visina.Replace(",", "");
                visina = visina.Replace(".", "");
                visinaPodizanja = visinaPodizanja.Replace(",", "");
                visinaPodizanja = visinaPodizanja.Replace(".", "");
                IDbConnection conn = new NpgsqlConnection(db.connectionString);
                IDbCommand cmd = conn.CreateCommand();
                cmd.CommandTimeout = 100;
                string cmd1 = "INSERT INTO viljuskari(marka, model, godina, cena, url";
                string cmd2 = " VALUES('" + marka + "', '" + model + "', " + godina + ", " + cena
                + ", '" + url + "'";

                if (radnihSati != "-" && radnihSati != "NULL")
                {
                    cmd1 += ", radnihsati";
                    cmd2 += ", " + radnihSati;
                }
                if (motor != "NULL")
                {
                    cmd1 += ", motor";
                    cmd2 += ", '" + motor + "'";
                }

                if (visinaPodizanja != "-" && visinaPodizanja != "NULL")
                {
                    cmd1 += ", visinapodizanja";
                    cmd2 += ", " + visinaPodizanja;
                }
                if (visina != "NULL")
                {
                    cmd1 += ", visina";
                    cmd2 += ", " + visina;
                }
                if (nacinPodizanja != "NULL")
                {
                    cmd1 += ", nacinpodizanja";
                    cmd2 += ", '" + nacinPodizanja + "'";
                }

                if (drzava != "NULL")
                {
                    cmd1 += ", drzava";
                    cmd2 += ", '" + drzava + "'";
                }
                if (duzinaVilica != "-" && duzinaVilica != "NULL")
                {
                    cmd1 += ", duzinavilica";
                    cmd2 += ", " + duzinaVilica;
                }
                if (kapacitetKG != "NULL")
                {
                    cmd1 += ", kapacitetkg";
                    cmd2 += ", " + kapacitetKG;
                }
                cmd1 += ")";
                cmd2 += "); ";
                cmd.CommandText += cmd1 + cmd2;
                //Console.WriteLine(cmd.CommandText);
                try
                {
                    if (conn.State != ConnectionState.Open)
                    {
                        conn.Open();
                    }
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
                catch (Exception xcp)
                {
                    StreamWriter sw = new StreamWriter("/var/www/html/testing/errors.txt", true);
                    sw.WriteLine(DateTime.Now.ToShortDateString() + " /// " + DateTime.Now.ToShortTimeString());
                    sw.WriteLine("Error 102203");
                    sw.WriteLine(xcp.ToString());
                    sw.WriteLine(cmd.CommandText.ToString());
                    sw.WriteLine(" ____________________________________________________________");
                    sw.Close();
                    sw.Dispose();
                }
                cmd.Dispose();
                cmd = null;
            }
        }
        public static void Main(string[] args)
        {								
            TimeSpan interval = new TimeSpan (12, 0, 0);
			while (true) {					
				truncateTable ();					
				puniBazuForkliftInternational ("Jungheinrich");	
				puniBazuForkliftInternational ("Linde");				
				puniBazuMascusRs ("Jungheinrich");						
				puniBazuMascusRs ("Linde");								
				//puniBazuMobileDe ("Jungheinrich", "12800");	
				//puniBazuMobileDe ("Linde", "15600");
				Thread.Sleep (interval);
			}

        }
        private static int urlSkalar(string url)
        {
            string sql = "SELECT COUNT(*) FROM viljuskari WHERE url = '"
                + url + "';";
            IDbConnection conn = new NpgsqlConnection(db.connectionString);

            IDbCommand cmd = conn.CreateCommand();
            cmd.CommandText = sql;
            cmd.CommandTimeout = 60;
            try
            {
                if (conn.State != ConnectionState.Open)
                {
                    conn.Open();
                }
                Int32 count = Convert.ToInt32(cmd.ExecuteScalar());
                conn.Close();
                cmd.Dispose();
                return count;
            }
            catch (Exception)
            {
                return 0;
            }
        }

    }
}

