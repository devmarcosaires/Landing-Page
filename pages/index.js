import { useEffect, useState } from 'react';
import { FaRocket, FaUsers, FaCode, FaChartLine } from 'react-icons/fa';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <header style={isMobile ? styles.navbarMobile : styles.navbar}>
        <div style={isMobile ? styles.logoMobile : styles.logo}>
          <span style={styles.logoText}>
            <span style={styles.symbol}>{"<"}</span>HenCode
            <span style={styles.symbol}>{"/>"}</span>
          </span>
        </div>
        <div style={styles.ctaWrapper}>
          <a
            style={styles.ctaButton}
            href="https://wa.me/5563992778646"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale conosco
          </a>
        </div>
      </header>

      <section style={styles.welcomeSection}>
        <p style={isMobile ? styles.mainTextLargeMobile : styles.mainTextLarge}>
          Conectando criatividade e tecnologia
        </p>
        <p style={isMobile ? styles.mainTextMediumMobile : styles.mainTextMedium}>
          Oferecendo soluções digitais eficientes
        </p>
        <p style={isMobile ? styles.mainTextSmallMobile : styles.mainTextSmall}>
          Sua empresa enfrenta desafios com falta de capacidade interna ou a insegurança de depender de freelancers? Conte com um time remoto dedicado, para resultados consistentes e de alta qualidade.
        </p>

        <div style={styles.contactButtonWrapper}>
          <a
            style={styles.contactButton}
            href="https://wa.me/5563992778646"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaRocket size={20} style={{ marginRight: '8px', zIndex: 10 }} />
            Entre em contato agora
          </a>
        </div>
      </section>

      <section style={styles.aboutSection}>
        <h2 style={styles.aboutTitle}>Sobre Nós</h2>

        {/* ✅ Frase centralizada horizontalmente */}
        <div style={styles.centeredBox}>
          <p style={isMobile ? styles.mainTextMediumMobile : styles.mainTextMedium}>
            Da ideia ao lançamento e suporte contínuo por um preço fixo por mês.
          </p>
        </div>

        <p style={styles.aboutText}>
          Somos uma empresa de design e desenvolvimento de software que ajuda empresas a lançar ou melhorar sistemas, aplicativos, sites e portais. Nossa equipe dedicada de designers de UX/UI, engenheiros de software e gerentes de produto cobre todo o ciclo de desenvolvimento.
        </p>

        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <FaUsers size={40} color="#1E88E5" />
            <h3 style={styles.cardTitle}>Equipe confiável</h3>
            <p style={styles.cardText}>
              Oferecemos uma equipe dedicada que garante comunicação diária, cronogramas claros e código especializado, permitindo que você foque no crescimento.
            </p>
          </div>
          <div style={styles.card}>
            <FaCode size={40} color="#1E88E5" />
            <h3 style={styles.cardTitle}>Desenvolvimento completo</h3>
            <p style={styles.cardText}>
              Assumimos seu projeto em qualquer estágio, garantindo planejamento, implantação e escalabilidade para um sucesso duradouro.
            </p>
          </div>
          <div style={styles.card}>
            <FaChartLine size={40} color="#1E88E5" />
            <h3 style={styles.cardTitle}>Crescimento contínuo</h3>
            <p style={styles.cardText}>
              Somos seu parceiro estratégico, oferecendo suporte contínuo para inovação, crescimento e escalabilidade do seu produto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 150px',
    color: 'white',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1000,
    gap: '40px',
    backgroundColor: 'transparent',
  },
  navbarMobile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    color: 'white',
    gap: '20px',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: 'transparent',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '36px',
    whiteSpace: 'nowrap',
  },
  logoMobile: {
    fontWeight: 'bold',
    fontSize: '28px',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 'inherit',
  },
  symbol: {
    color: '#1E88E5',
  },
  ctaWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  ctaButton: {
    backgroundColor: 'transparent',
    color: '#1E88E5',
    padding: '10px 16px',
    border: '2px solid #1E88E5',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  welcomeSection: {
    backgroundImage: 'url("/fundo.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '100px',
    paddingBottom: '40px',
    paddingLeft: '20px',
    paddingRight: '20px',
    color: 'white',
  },
  mainTextLarge: {
    fontSize: '45px',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.5',
    maxWidth: '800px',
    color: '#1E88E5',
  },
  mainTextLargeMobile: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.4',
    maxWidth: '90%',
    color: '#1E88E5',
  },
  mainTextMedium: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.5',
    maxWidth: '800px',
  },
  mainTextMediumMobile: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.4',
    maxWidth: '90%',
  },
  mainTextSmall: {
    fontSize: '18px',
    fontWeight: 'normal',
    marginBottom: '20px',
    lineHeight: '1.5',
    maxWidth: '800px',
  },
  mainTextSmallMobile: {
    fontSize: '16px',
    fontWeight: 'normal',
    marginBottom: '20px',
    lineHeight: '1.4',
    maxWidth: '90%',
  },
  contactButtonWrapper: {
    marginTop: '30px',
  },
  contactButton: {
    backgroundColor: '#1E88E5',
    color: 'white',
    padding: '12px 25px',
    borderRadius: '6px',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  },
  aboutSection: {
    backgroundColor: '#04080C',
    padding: '60px 20px',
    textAlign: 'center',
    color: 'white',
  },
  aboutTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#1E88E5',
  },
  aboutText: {
    fontSize: '18px',
    maxWidth: '900px',
    margin: '0 auto 20px',
    lineHeight: '1.6',
  },
  centeredBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20px',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginTop: '40px',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
    maxWidth: '340px',
    minHeight: '280px',
    textAlign: 'center',
    fontSize: '16px',
    color: '#333',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#1E88E5',
  },
  cardText: {
    fontSize: '16px',
    color: '#333',
  },
};
