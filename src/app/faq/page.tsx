import Link from 'next/link';

export default function FAQ() {
  return (
    <div className="w-full">
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-primary-light via-purple-50 to-indigo-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="heading-hero md:heading-hero font-light text-neutral-900 mb-8 tracking-tight">
            Questions fréquentes
          </h1>
          <p className="heading-sub text-neutral-700 max-w-4xl mx-auto font-light leading-relaxed">
            Tout ce que vous devez savoir sur le répertoire collaboratif
          </p>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Types de controverses */}
          <div className="bg-white rounded-lg shadow-sm border border-neutral p-8">
            <div className="flex items-start mb-4">
              <div className="bg-info-light rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="heading-main font-bold text-neutral-900 mb-4">🎯 Types de controverses à signaler</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <span className="text-error mr-2">⚖️</span>
                    <span className="text-neutral-700">Violations des droits humains</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-success mr-2">🌱</span>
                    <span className="text-neutral-700">Dommages environnementaux</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-info mr-2">👥</span>
                    <span className="text-neutral-700">Conditions de travail inacceptables</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2">🔬</span>
                    <span className="text-neutral-700">Tests sur animaux non nécessaires</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2">💰</span>
                    <span className="text-neutral-700">Évasion fiscale et corruption</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-error mr-2">🚫</span>
                    <span className="text-neutral-700">Dirigeants ou actionnaires d&apos;extrême droite</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-neutral-600 mr-2">📊</span>
                    <span className="text-neutral-700">Autres controverses documentées</span>
                  </div>
                </div>
                
                <div className="bg-info-light border border-info rounded-lg p-4">
                  <Link href="/signaler">
                    👉 <strong className="text-info hover:text-info font-medium underline">Signaler une controverse</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>



          {/* Critères de validation */}
          <div className="bg-white rounded-lg shadow-sm border border-neutral p-8 mb-8">
            <div className="flex items-start mb-4">
              <div className="bg-success-light rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="heading-main font-bold text-neutral-900 mb-4">Critères de validation</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border-l-4 border-success pl-4">
                    <h3 className="font-semibold body-large text-neutral-900 mb-2">✅ Accepté si :</h3>
                    <ul className="text-neutral-700 space-y-2">
                      <li>• Source vérifiable</li>
                      <li>• Information factuelle et datée</li>
                      <li>• Pertinence pour les consommateurs</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-error pl-4">
                    <h3 className="font-semibold body-large text-neutral-900 mb-2">❌ Refusé si :</h3>
                    <ul className="text-neutral-700 space-y-2">
                      <li>• Source douteuse ou inexistante</li>
                      <li>• Information non vérifiée</li>
                      <li>• Hors sujet ou non pertinent</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-info-light border border-info rounded-lg p-4">
                  <Link href="/moderation">
                    👉 <strong className="text-info hover:text-info font-medium underline">En savoir plus sur notre processus de modération</strong>
                  </Link>
                </div>
              </div>
             </div>
            </div>
          </div>

      </section>
    </div>
  );
}