import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 pt-12">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <section className="mb-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">1. Einleitung</h2>
          <p className="text-gray-700 mb-4">
            Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
            Anliegen. Mit dieser Datenschutzerklärung informieren wir Sie
            darüber, wie wir Ihre personenbezogenen Daten erheben, verarbeiten
            und nutzen, wenn Sie unsere Website besuchen oder unsere
            Dienstleistungen in Anspruch nehmen.
          </p>
        </section>

        <section className="mb-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">2. Verantwortlicher</h2>
          <p className="text-gray-700 mb-4">
            Verantwortlich für die Datenverarbeitung ist:
            <br />
            MSS Cable Machinery GmbH
            <br />
            Mustafa Dündar (Managing Director)
            <br />
            Krügerstraße 8-10
            <br />
            68219 Mannheim, Deutschland
            <br />
            Telefon: +49 621 862 77411
            <br />
            E-Mail: manufacturing@mssmachinery.de
          </p>
        </section>

        <section className="mb-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Erhebung und Verarbeitung personenbezogener Daten
          </h2>

          <h3 className="text-xl font-semibold mb-3">3.1 Besuch der Website</h3>
          <p className="text-gray-700 mb-4">
            Beim Besuch unserer Website erheben wir automatisch bestimmte Daten,
            die Ihr Browser an unseren Server übermittelt. Diese Daten umfassen:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>
              Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners
              sowie der Name Ihres Access-Providers
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Diese Daten werden temporär in einem sogenannten Logfile gespeichert
            und nach spätestens sieben Tagen gelöscht. Die vorübergehende
            Speicherung erfolgt aus Sicherheitsgründen, um z.B. Angriffsversuche
            nachvollziehen zu können. Eine Speicherung dieser Daten zusammen mit
            anderen personenbezogenen Daten von Ihnen findet nicht statt.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            3.2 Kontaktformular und E-Mail-Kontakt
          </h3>
          <p className="text-gray-700 mb-4">
            Wenn Sie uns über unser Kontaktformular oder per E-Mail
            kontaktieren, werden die von Ihnen mitgeteilten Daten (Ihre
            E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns
            gespeichert, um Ihre Fragen zu beantworten oder Ihnen die
            gewünschten Informationen zu übermitteln. Diese Daten werden
            gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung
            nicht mehr erforderlich sind.
          </p>
        </section>

        <section className="mb-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Weitergabe von Daten
          </h2>
          <p className="text-gray-700 mb-4">
            Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur,
            wenn:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>
              Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche
              Einwilligung dazu erteilt haben
            </li>
            <li>
              die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
              erforderlich ist
            </li>
            <li>
              für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine
              gesetzliche Verpflichtung besteht
            </li>
            <li>
              dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO
              für die Abwicklung von Vertragsverhältnissen mit Ihnen
              erforderlich ist
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
          <p className="text-gray-700 mb-4">
            Wir setzen auf unserer Website Cookies ein. Cookies sind kleine
            Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem
            Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn
            Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen
            Schaden an, enthalten keine Viren, Trojaner oder sonstige
            Schadsoftware. In dem Cookie werden Informationen abgelegt, die sich
            jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät
            ergeben. Dies bedeutet jedoch nicht, dass wir dadurch unmittelbar
            Kenntnis von Ihrer Identität erhalten. Der Einsatz von Cookies dient
            einerseits dazu, die Nutzung unseres Angebots für Sie angenehmer zu
            gestalten. So setzen wir sogenannte Session-Cookies ein, um zu
            erkennen, dass Sie einzelne Seiten unserer Website bereits besucht
            haben. Diese werden nach Verlassen unserer Seite automatisch
            gelöscht. Darüber hinaus setzen wir ebenfalls zur Optimierung der
            Benutzerfreundlichkeit temporäre Cookies ein, die für einen
            bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert
            werden. Besuchen Sie unsere Seite erneut, um automatisch zu
            erkennen, dass Sie bereits bei uns waren und welche Eingaben und
            Einstellungen sie getätigt haben, damit Sie diese nicht noch einmal
            eingeben müssen. Zum anderen setzen wir Cookies ein, um die Nutzung
            unserer Website statistisch zu erfassen und zum Zwecke der
            Optimierung unseres Angebotes für Sie auszuwerten. Diese Cookies
            ermöglichen es uns, bei einem erneuten Besuch unserer Seite
            automatisch zu erkennen, dass Sie bereits bei uns waren. Diese
            Cookies werden nach einer jeweils definierten Zeit automatisch
            gelöscht. Die durch Cookies verarbeiteten Daten sind für die
            genannten Zwecke zur Wahrung unserer berechtigten Interessen sowie
            der Dritter nach Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich. Die
            meisten Browser akzeptieren Cookies automatisch. Sie können Ihren
            Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem
            Computer gespeichert werden oder stets ein Hinweis erscheint, bevor
            ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von
            Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen
            unserer Website nutzen können.
          </p>
        </section>

        <section className="mb-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">6. Analyse-Tools</h2>
          <h3 className="text-xl font-semibold mb-3">6.1 Google Analytics</h3>
          <p className="text-gray-700 mb-4">
            Zum Zwecke der bedarfsgerechten Gestaltung und fortlaufenden
            Optimierung unserer Seiten nutzen wir Google Analytics, ein
            Webanalysedienst der Google Inc.
            (https://www.google.de/intl/de/about/) (1600 Amphitheatre Parkway,
            Mountain View, CA 94043, USA; im Folgenden "Google"). In diesem
            Zusammenhang werden pseudonymisierte Nutzungsprofile erstellt und
            Cookies (siehe unter Ziff. 5) verwendet. Die durch den Cookie
            erzeugten Informationen über Ihre Benutzung dieser Website wie:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>Browser-Typ/-Version</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer-URL (die zuvor besuchte Seite)</li>
            <li>Hostname des zugreifenden Rechners (IP-Adresse)</li>
            <li>Uhrzeit der Serveranfrage</li>
          </ul>
          <p className="text-gray-700 mb-4">
            werden an einen Server von Google in den USA übertragen und dort
            gespeichert. Die Informationen werden verwendet, um die Nutzung der
            Website auszuwerten, um Reports über die Websiteaktivitäten
            zusammenzustellen und um weitere mit der Websitenutzung und der
            Internetnutzung verbundene Dienstleistungen zu Zwecken der
            Marktforschung und bedarfsgerechten Gestaltung dieser Internetseiten
            zu erbringen. Diese Informationen werden gegebenenfalls auch an
            Dritte übertragen, sofern dies gesetzlich vorgeschrieben ist oder
            soweit Dritte diese Daten im Auftrag verarbeiten. Es wird in keinem
            Fall Ihre IP-Adresse mit anderen Daten von Google zusammengeführt.
            Die IP-Adressen werden anonymisiert, so dass eine Zuordnung nicht
            möglich ist (IP-Masking).
          </p>
          <p className="text-gray-700 mb-4">
            Sie können die Installation der Cookies durch eine entsprechende
            Einstellung der Browser-Software verhindern; wir weisen jedoch
            darauf hin, dass in diesem Fall gegebenenfalls nicht sämtliche
            Funktionen dieser Website vollumfänglich genutzt werden können.
          </p>
          <p className="text-gray-700 mb-4">
            Sie können darüber hinaus die Erfassung der durch das Cookie
            erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl.
            Ihrer IP-Adresse) sowie die Verarbeitung dieser Daten durch Google
            verhindern, indem Sie ein Browser- Add-on herunterladen und
            installieren (https://tools.google.com/dlpage/ gaoptout?hl=de).
          </p>
          <p className="text-gray-700 mb-4">
            Alternativ zum Browser-Add-on, insbesondere bei Browsern auf mobilen
            Endgeräten, können Sie die Erfassung durch Google Analytics zudem
            verhindern, indem Sie auf diesen Link klicken. Es wird ein
            Opt-out-Cookie gesetzt, das die zukünftige Erfassung Ihrer Daten
            beim Besuch dieser Website verhindert. Der Opt-out-Cookie gilt nur
            in diesem Browser und nur für unsere Website und wird auf Ihrem
            Gerät abgelegt. Löschen Sie die Cookies in diesem Browser, müssen
            Sie das Opt-out-Cookie erneut setzen.
          </p>
          <p className="text-gray-700 mb-4">
            Weitere Informationen zum Datenschutz im Zusammenhang mit Google
            Analytics finden Sie etwa in der Google Analytics-Hilfe (https://
            support.google.com/analytics/answer/6004245?hl=de).
          </p>
        </section>

        <section className="mb-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">7. Betroffenenrechte</h2>
          <p className="text-gray-700 mb-4">Sie haben das Recht:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-4">
            <li className="ml-4">
              gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten
              personenbezogenen Daten zu verlangen. Insbesondere können Sie
              Auskunft über die Verarbeitungszwecke, die Kategorie der
              personenbezogenen Daten, die Kategorien von Empfängern, gegenüber
              denen Ihre Daten offengelegt wurden oder werden, die geplante
              Speicherdauer, das Bestehen eines Rechts auf Berichtigung,
              Löschung, Einschränkung der Verarbeitung oder Widerspruch, das
              Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern
              diese nicht bei uns erhoben wurden, sowie über das Bestehen einer
              automatisierten Entscheidungsfindung einschließlich Profiling und
              ggf. aussagekräftigen Informationen zu deren Einzelheiten
              verlangen
            </li>
            <li className="ml-4">
              gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder
              Vervollständigung Ihrer bei uns gespeicherten personenbezogenen
              Daten zu verlangen
            </li>
            <li className="ml-4">
              gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten
              personenbezogenen Daten zu verlangen, soweit nicht die
              Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung
              und Information, zur Erfüllung einer rechtlichen Verpflichtung,
              aus Gründen des öffentlichen Interesses oder zur Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist
            </li>
            <li className="ml-4">
              gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen, soweit die Richtigkeit der
              Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig
              ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr
              benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21
              DSGVO Widerspruch gegen die Verarbeitung eingelegt haben
            </li>
            <li className="ml-4">
              gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns
              bereitgestellt haben, in einem strukturierten, gängigen und
              maschinenlesbaren Format zu erhalten oder die Übermittlung an
              einen anderen Verantwortlichen zu verlangen
            </li>
            <li className="ml-4">
              gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung
              jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass
              wir die Datenverarbeitung, die auf dieser Einwilligung beruhte,
              für die Zukunft nicht mehr fortführen dürfen
            </li>
            <li className="ml-4">
              gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.
              In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres
              üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres
              Unternehmenssitzes wenden
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">8. Widerspruchsrecht</h2>
          <p className="text-gray-700 mb-4">
            Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten
            Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden,
            haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die
            Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür
            Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben
            oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren
            Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe
            einer besonderen Situation von uns umgesetzt wird. Möchten Sie von
            Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine
            E-Mail an manufacturing@mssmachinery.de.
          </p>
        </section>

        <section className="mb-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">9. Datensicherheit</h2>
          <p className="text-gray-700 mb-4">
            Wir verwenden innerhalb des Website-Besuchs das verbreitete
            SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils
            höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt
            wird. In der Regel handelt es sich dabei um eine 256 Bit
            Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung
            unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie
            zurück. Ob eine einzelne Seite unseres Internetauftrittes
            verschlüsselt übertragen wird, erkennen Sie an der geschlossenen
            Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der
            unteren Statusleiste Ihres Browsers. Wir bedienen uns im Übrigen
            geeigneter technischer und organisatorischer Sicherheitsmaßnahmen,
            um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen,
            teilweisen oder vollständigen Verlust, Zerstörung oder gegen den
            unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen
            werden entsprechend der technologischen Entwicklung fortlaufend
            verbessert.
          </p>
        </section>

        <section className="mb-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">
            10. Aktualität und Änderung dieser Datenschutzerklärung
          </h2>
          <p className="text-gray-700 mb-4">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
            Februar 2025. Durch die Weiterentwicklung unserer Website und
            Angebote darüber oder aufgrund geänderter gesetzlicher
            beziehungsweise behördlicher Vorgaben kann es notwendig werden,
            diese Datenschutzerklärung zu ändern. Die jeweils aktuelle
            Datenschutzerklärung kann jederzeit auf der Website unter
            Datenschutz von Ihnen abgerufen und ausgedruckt werden.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
