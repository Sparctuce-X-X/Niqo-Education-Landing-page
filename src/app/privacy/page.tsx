import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Niqo",
  description: "Politique de confidentialité de Niqo - Protection des données personnelles",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-lg text-gray-600">
            Niqo s&apos;engage à protéger vos données personnelles
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Dernière mise à jour : {currentDate}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Chez Niqo Education, nous respectons votre vie privée et nous nous engageons à protéger 
              vos données personnelles. Cette politique explique comment nous collectons, utilisons 
              et protégeons vos informations lorsque vous utilisez nos solutions digitales.
            </p>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Quelles données collectons-nous ?
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Données des organisations clientes
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nom et coordonnées de l&apos;organisation</li>
                  <li>Informations administratives</li>
                  <li>Données de facturation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Données des personnes concernées (cas éducation)
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nom, prénom, date de naissance</li>
                  <li>Coordonnées des parents</li>
                  <li>Informations de suivi académique (ex: classe, assiduité)</li>
                  <li>Données de communication WhatsApp</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Données techniques
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Adresse IP et données de navigation</li>
                  <li>Informations sur l&apos;utilisation de la plateforme</li>
                  <li>Cookies et technologies similaires</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Utilisation des données */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Comment utilisons-nous vos données ?
            </h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-gray-800">Gestion opérationnelle</h4>
                  <p className="text-gray-700">Administrer vos activités, vos dossiers et vos communications</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-gray-800">Communication WhatsApp</h4>
                  <p className="text-gray-700">Envoyer des notifications importantes à vos contacts autorisés</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-gray-800">Amélioration du service</h4>
                  <p className="text-gray-700">Analyser l&apos;utilisation pour améliorer nos fonctionnalités</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-gray-800">Support client</h4>
                  <p className="text-gray-700">Vous assister et répondre à vos questions</p>
                </div>
              </div>
            </div>
          </section>

          {/* Protection des données */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Comment protégeons-nous vos données ?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Chiffrement :</strong> Vos données sont chiffrées lors de leur transmission et stockage</li>
              <li><strong>Serveurs sécurisés :</strong> Hébergement sur des infrastructures sécurisées</li>
              <li><strong>Accès limité :</strong> Seul le personnel autorisé peut accéder à vos données</li>
              <li><strong>Sauvegardes régulières :</strong> Vos données sont sauvegardées quotidiennement</li>
              <li><strong>Conformité RGPD :</strong> Nous respectons les réglementations européennes</li>
            </ul>
          </section>

          {/* Durée de conservation */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Combien de temps conservons-nous vos données ?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nous conservons vos données uniquement aussi longtemps que nécessaire pour :
              fournir nos services, respecter nos obligations légales, et résoudre d&apos;éventuels litiges. 
              Lorsque vous fermez votre compte, nous supprimons vos données personnelles dans un délai de 30 jours.
            </p>
          </section>

          {/* Vos droits */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Quels sont vos droits ?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Accès :</strong> Consulter vos données personnelles</li>
              <li><strong>Rectification :</strong> Modifier vos informations inexactes</li>
              <li><strong>Suppression :</strong> Demander la suppression de vos données</li>
              <li><strong>Portabilité :</strong> Recevoir vos données dans un format lisible</li>
              <li><strong>Opposition :</strong> Vous opposer au traitement de vos données</li>
            </ul>
          </section>

          {/* Partage des données */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Partageons-nous vos données ?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Nous ne vendons jamais vos données personnelles. Nous ne les partageons qu&apos;avec :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>WhatsApp :</strong> Uniquement pour envoyer les communications aux contacts autorisés</li>
              <li><strong>Prestataires techniques :</strong> Hébergement, paiement, support (avec garantie de confidentialité)</li>
              <li><strong>Autorités légales :</strong> Uniquement en cas d&apos;obligation légale</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cookies et technologies similaires
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nous utilisons des cookies essentiels pour faire fonctionner notre plateforme et des cookies 
              analytiques pour améliorer nos services. Vous pouvez gérer vos préférences via les paramètres 
              de votre navigateur.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contactez-nous
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Pour toute question concernant cette politique de confidentialité ou l&apos;exercice de vos droits :
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email :</strong> <a href="mailto:contact@niqo.education" className="text-blue-600 hover:text-blue-700">contact@niqo.education</a>
                </p>
                <p className="text-gray-700">
                  <strong>Téléphone :</strong> Disponible sur demande
                </p>
                <p className="text-gray-700">
                  <strong>Adresse :</strong> Siège social indiqué dans vos documents contractuels
                </p>
              </div>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Modifications de cette politique
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nous pouvons mettre à jour cette politique de confidentialité pour refléter les changements 
              dans nos pratiques ou pour des raisons réglementaires. Les modifications seront publiées 
              sur cette page avec une nouvelle date de mise à jour.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <a 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </div>
  );
}
