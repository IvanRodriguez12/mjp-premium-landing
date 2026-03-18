import { Link } from "react-router-dom";
import logo from "@/assets/logo-mjp.png";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    {/* Header */}
    <div className="bg-navy py-8">
      <div className="container mx-auto text-center">
        <Link to="/">
          <img src={logo} alt="MJP Logo" className="h-16 mx-auto brightness-0 invert mb-4" />
        </Link>
        <h1 className="font-display text-3xl md:text-4xl text-primary-foreground">
          Política de Privacidad
        </h1>
        <p className="font-body text-primary-foreground/70 mt-2">
          Estudio Contable M.J. Paletto &amp; Asociados
        </p>
      </div>
    </div>

    {/* Content */}
    <div className="container mx-auto max-w-3xl py-12 md:py-16 px-6">
      <div className="space-y-8">
        <section>
          <h2 className="font-display text-xl text-navy mb-3">Información que recopilamos</h2>
          <p className="font-body text-foreground/80 leading-relaxed">
            A través de nuestro formulario de contacto, recopilamos los siguientes datos personales:
            nombre completo, dirección de correo electrónico y número de teléfono. Estos datos son
            proporcionados voluntariamente por el usuario al completar el formulario.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-navy mb-3">Uso de la información</h2>
          <p className="font-body text-foreground/80 leading-relaxed">
            La información recopilada se utiliza únicamente para responder a las consultas realizadas
            por los usuarios. No utilizamos estos datos con fines comerciales, publicitarios ni de
            marketing sin el consentimiento previo del usuario.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-navy mb-3">Compartición de datos</h2>
          <p className="font-body text-foreground/80 leading-relaxed">
            No compartimos, vendemos ni cedemos datos personales a terceros bajo ninguna
            circunstancia. La información proporcionada es tratada de forma confidencial y se
            almacena de manera segura.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-navy mb-3">Eliminación de datos</h2>
          <p className="font-body text-foreground/80 leading-relaxed">
            Podés solicitar la eliminación de tus datos personales en cualquier momento
            contactándonos a través de los medios indicados a continuación. Procesaremos tu
            solicitud en el menor tiempo posible.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-navy mb-3">Contacto</h2>
          <p className="font-body text-foreground/80 leading-relaxed">
            Si tenés preguntas sobre esta política o querés ejercer tus derechos sobre tus datos
            personales, podés contactarnos:
          </p>
          <ul className="font-body text-foreground/80 mt-3 space-y-1">
            <li>📞 Teléfono: 0362 438-5300</li>
            <li>📍 Dirección: Saavedra 519, Resistencia, Chaco</li>
          </ul>
        </section>
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/"
          className="font-body text-gold hover:underline font-semibold"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
