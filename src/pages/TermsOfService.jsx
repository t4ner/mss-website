import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const TermsOfService = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto pt-12 ">
        <h1 className="text-base lg:text-4xl font-bold mb-8 text-gray-900">
          Impressum
        </h1>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-base lg:text-xl font-semibold mb-4 text-gray-900">
            Angaben gemäß § 5 TMG
          </h2>
          <div className="space-y-2 text-gray-700">
            <p className="font-semibold">MSS Cable Machinery GmbH</p>
            <p>Vertreten durch: Mustafa Dündar (Managing Director)</p>
            <div className="mt-4">
              <p>
                <span className="font-medium">Adresse:</span> Krügerstraße 8-10,
                68219 Mannheim, Deutschland
              </p>
              <p>
                <span className="font-medium">Telefon:</span> +49 621 862 77411
              </p>
              <p>
                <span className="font-medium">E-Mail:</span>{" "}
                manufacturing@mssmachinery.de
              </p>
              <p>
                <span className="font-medium">Website:</span>{" "}
                www.mssmachinery.de
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-base lg:text-xl font-semibold mb-4 text-gray-900">
            Registrierung & Umsatzsteuer
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-medium">Registergericht:</span> Amtsgericht
              Mannheim
            </p>
            <p>
              <span className="font-medium">Registernummer:</span> HRB 729253
            </p>
            <p>
              <span className="font-medium">Umsatzsteuer-ID:</span> DE 147033361
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-base lg:text-xl font-semibold mb-4 text-gray-900">
            Verantwortlich für den Inhalt
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>Nach § 55 Abs. 2 RStV:</p>
            <p>Mustafa Dündar</p>
            <p>Krügerstraße 8-10</p>
            <p>68219 Mannheim, Deutschland</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-base lg:text-xl font-semibold mb-4 text-gray-900">
            Haftungsausschluss
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-sm lg:text-lg font-medium mb-2">
                1. Inhalt des Onlineangebotes
              </h3>
              <p className="text-sm lg:text-base leading-relaxed">
                Der Autor übernimmt keinerlei Gewähr für die Aktualität,
                Korrektheit, Vollständigkeit oder Qualität der bereitgestellten
                Informationen. Haftungsansprüche gegen den Autor, welche sich
                auf Schäden materieller oder ideeller Art beziehen, die durch
                die Nutzung oder Nichtnutzung der dargebotenen Informationen
                bzw. durch die Nutzung fehlerhafter und unvollständiger
                Informationen verursacht wurden, sind grundsätzlich
                ausgeschlossen, sofern seitens des Autors kein nachweislich
                vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
              </p>
            </div>

            <div>
              <h3 className="text-sm lg:text-lg font-medium mb-2">
                2. Verweise und Links
              </h3>
              <p className="text-sm lg:text-base leading-relaxed">
                Bei direkten oder indirekten Verweisen auf fremde Webseiten
                („Hyperlinks"), die außerhalb des Verantwortungsbereiches des
                Autors liegen, würde eine Haftungsverpflichtung ausschließlich
                in dem Fall in Kraft treten, in dem der Autor von den Inhalten
                Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die
                Nutzung im Falle rechtswidriger Inhalte zu verhindern.
              </p>
            </div>

            <div>
              <h3 className="text-sm lg:text-lg font-medium mb-2">
                3. Urheber- und Kennzeichenrecht
              </h3>
              <p className="text-sm lg:text-base leading-relaxed">
                Der Autor ist bestrebt, in allen Publikationen die Urheberrechte
                der verwendeten Inhalte zu beachten. Das Copyright für
                veröffentlichte, vom Autor selbst erstellte Objekte bleibt
                allein beim Autor der Seiten. Eine Vervielfältigung oder
                Verwendung ohne ausdrückliche Zustimmung des Autors ist nicht
                gestattet.
              </p>
            </div>

            <div>
              <h3 className="text-sm lg:text-lg font-medium mb-2">
                4. Datenschutz
              </h3>
              <p className="text-sm lg:text-base leading-relaxed">
                Sofern innerhalb des Internetangebotes die Möglichkeit zur
                Eingabe persönlicher oder geschäftlicher Daten besteht, so
                erfolgt die Preisgabe dieser Daten seitens des Nutzers auf
                ausdrücklich freiwilliger Basis. Die Nutzung der im Rahmen des
                Impressums veröffentlichten Kontaktdaten durch Dritte zur
                Übersendung von nicht ausdrücklich angeforderten Informationen
                ist nicht gestattet.
              </p>
            </div>

            <div>
              <h3 className="text-sm lg:text-lg font-medium mb-2">
                5. Rechtswirksamkeit
              </h3>
              <p className="text-sm lg:text-base leading-relaxed">
                Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
                betrachten. Sofern Teile oder einzelne Formulierungen dieses
                Textes der geltenden Rechtslage nicht, nicht mehr oder nicht
                vollständig entsprechen sollten, bleiben die übrigen Teile des
                Dokuments in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
