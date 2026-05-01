import { useState, useEffect } from "react";

const colors = {
  orange: "#FF4D1C",
  beige: "#F5F0E8",
  white: "#FFFFFF",
  black: "#000000",
};

const bioText =
  "Brand Designer passionné par la création d'identités visuelles authentiques et stratégiques. Avec plus de 3 ans d'expérience, je transforme des visions en branding mémorables qui incarnent l'essence de chaque marque.";

export default function WilfriedPortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [animIn, setAnimIn] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setTimeout(() => setAnimIn(true), 100);
  }, []);

  // Ferme la lightbox quand on appuie sur Échap
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const navItems = ["home", "about", "work", "skills", "contact"];
  const navLabels = {
    home: "Accueil",
    about: "À propos",
    work: "Projets",
    skills: "Compétences",
    contact: "Contact",
  };

  const competences = [
    { name: "Branding & Logo Design", level: 98 },
    { name: "Identité Visuelle", level: 97 },
    { name: "Adobe Photoshop", level: 95 },
    { name: "Adobe Illustrator", level: 93 },
    { name: "Design Systems", level: 92 },
    { name: "Figma", level: 90 },
  ];

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        background: colors.white,
        minHeight: "100vh",
        color: colors.black,
      }}
    >
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .nav-btn { transition: all 0.3s ease; }
        .nav-btn:hover { color: ${colors.orange} !important; }
        .cta { transition: all 0.3s ease; }
        .cta:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255, 77, 28, 0.2); }
        .project-card { transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1); }
        .project-card:hover { transform: translateY(-8px); }
      `}</style>

      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 32px",
          background: colors.white,
          borderBottom: `1px solid ${colors.beige}`,
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 900,
            color: colors.orange,
            letterSpacing: -1,
          }}
        >
          Will'Art
        </div>
        <div style={{ display: "flex", gap: 2 }}>
          {navItems.map((key) => (
            <button
              key={key}
              className="nav-btn"
              onClick={() => setActiveSection(key)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 14px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                color:
                  activeSection === key ? colors.orange : colors.black,
                transition: "all 0.2s",
              }}
            >
              {navLabels[key]}
            </button>
          ))}
        </div>
      </nav>

      {/* MAIN */}
      <main
        style={{
          paddingTop: 80,
          minHeight: "100vh",
          opacity: animIn ? 1 : 0,
          transition: "all 0.7s ease",
        }}
      >
        {/* HOME */}
        {activeSection === "home" && (
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "calc(100vh - 80px)",
              textAlign: "center",
              padding: "60px 24px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -200,
                right: -200,
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: colors.beige,
                opacity: 0.5,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -150,
                left: -150,
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: colors.orange,
                opacity: 0.08,
                zIndex: 0,
              }}
            />

            <div style={{ position: "relative", zIndex: 1, animation: "fadeUp 0.8s ease both" }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: colors.orange,
                  marginBottom: 20,
                  textTransform: "uppercase",
                }}
              >
                Brand Designer
              </div>

              <h1
                style={{
                  fontSize: "clamp(42px, 8vw, 72px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  margin: "0 0 24px",
                  letterSpacing: -2,
                }}
              >
                Créer l'identité
                <br />
                <span style={{ color: colors.orange }}>de votre marque</span>
              </h1>

              <p
                style={{
                  fontSize: 17,
                  color: "#666",
                  maxWidth: 550,
                  lineHeight: 1.7,
                  margin: "0 0 40px",
                }}
              >
                Je transforme vos visions en identités visuelles mémorables qui
                incarnent l'essence de votre marque.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 16,
                  justifyContent: "center",
                  marginBottom: 60,
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="cta"
                  onClick={() => setActiveSection("work")}
                  style={{
                    padding: "14px 32px",
                    borderRadius: 8,
                    background: colors.orange,
                    color: colors.white,
                    border: "none",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  Voir mes projets →
                </button>
                <button
                  className="cta"
                  onClick={() => setActiveSection("contact")}
                  style={{
                    padding: "14px 32px",
                    borderRadius: 8,
                    background: colors.beige,
                    color: colors.black,
                    border: "none",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  Me contacter
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 48,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { n: "4+", l: "Projets" },
                  { n: "3+", l: "Ans d'exp" },
                  { n: "100%", l: "Qualité" },
                ].map(({ n, l }) => (
                  <div key={l} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: 32,
                        fontWeight: 900,
                        color: colors.orange,
                      }}
                    >
                      {n}
                    </div>
                    <div style={{ fontSize: 12, color: "#999", marginTop: 4 }}>
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ABOUT */}
        {activeSection === "about" && (
          <section
            style={{
              maxWidth: 900,
              margin: "0 auto",
              padding: "80px 24px",
              animation: "fadeUp 0.6s ease both",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                color: colors.orange,
                marginBottom: 8,
                textTransform: "uppercase",
              }}
            >
              À propos
            </div>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 48 }}>
              Qui suis-je
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <p
                  style={{
                    fontSize: 16,
                    color: "#555",
                    lineHeight: 1.8,
                    marginBottom: 24,
                  }}
                >
                  {bioText}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    color: "#777",
                    lineHeight: 1.8,
                  }}
                >
                  Basé à Abidjan, je travaille avec des startups et PME pour
                  créer des identités visuelles qui se démarquent. Mon approche
                  combine rigueur design et stratégie commerciale.
                </p>
              </div>

              <div
                style={{
                  width: "100%",
                  maxWidth: 280,
                  aspectRatio: "1/1",
                  borderRadius: 20,
                  overflow: "hidden",
                  background: colors.beige,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dvzr8kngp/image/upload/v1777635009/1777301177387_cpha4g.png"
                  alt="Wilfried Dossou"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                marginTop: 60,
                padding: "32px",
                background: colors.beige,
                borderRadius: 12,
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>
                Contact
              </h3>
              <p style={{ fontSize: 14, color: "#555", marginBottom: 12 }}>
                📧 dossouwilfried22@gmail.com
              </p>
              <p style={{ fontSize: 14, color: "#555", marginBottom: 12 }}>
                📞 +225 07 12 76 39 06
              </p>
              <p style={{ fontSize: 14, color: "#555" }}>
                📍 Abidjan, Côte d'Ivoire
              </p>
            </div>
          </section>
        )}

        {/* WORK */}
        {activeSection === "work" && (
          <section
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "80px 24px",
              animation: "fadeUp 0.6s ease both",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                color: colors.orange,
                marginBottom: 8,
                textTransform: "uppercase",
              }}
            >
              Mes travaux
            </div>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 48 }}>
              Projets <span style={{ color: colors.orange }}>sélectionnés</span>
            </h2>

            {/* PROJECT 1 - HK */}
            <div style={{ marginBottom: 80 }}>
              <div style={{ marginBottom: 32 }}>
                <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
                  HK by Harmonie
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#555",
                    lineHeight: 1.7,
                    maxWidth: 700,
                    marginBottom: 16,
                  }}
                >
                  Marque de prêt-à-porter féminine incarnant l'élégance africaine.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 20,
                }}
              >
                {[
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777631385/HK_-_1_Plan_de_travail_1_livf8c.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777631384/HK_-_2_Plan_de_travail_1_copie_wkicrn.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777631385/HK-_1_Plan_de_travail_1_copie_2_gsnmlr.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777631385/HK_-_4_Plan_de_travail_1_copie_3_vmjmpj.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777631393/HK_-_5_Plan_de_travail_1_copie_4_oiyjut.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777631438/HK_-_6_Plan_de_travail_1_copie_5_qw1y04.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777631503/HK_-_7_Plan_de_travail_1_copie_36_qilagb.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777631467/HK_-_8_Plan_de_travail_1_copie_37_seutm6.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777631436/HK_-_9_Plan_de_travail_1_copie_38_latta9.png",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="project-card"
                    onClick={() => setSelectedImage(img)}
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      background: colors.beige,
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={img}
                      alt="Projet HK"
                      style={{
                        width: "100%",
                        height: 240,
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* PROJECT 2 - MOVEA */}
            <div style={{ marginBottom: 80 }}>
              <div style={{ marginBottom: 32 }}>
                <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
                  MOVEA Abidjan
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#555",
                    lineHeight: 1.7,
                    maxWidth: 700,
                  }}
                >
                  Service de mobilité urbaine moderne et accessible.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 20,
                }}
              >
                {[
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777632574/MOVEA_-_1_Plan_de_travail_1_copie_6_esnl85.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777632491/MOVEA_-_2_Plan_de_travail_1_copie_7_jfbw4r.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777632635/MOVEA-_3_Plan_de_travail_1_copie_8_pn78u4.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777632555/MOVEA_-_4_Plan_de_travail_1_copie_9_wmv8fo.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777632546/MOVEA_-_5_Plan_de_travail_1_copie_10_ochd3s.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777632702/MOVEA_-_6png_Plan_de_travail_1_copie_11_xpu3m9.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777632740/MOVEA_-_7_Plan_de_travail_1_copie_33_saagzx.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777632696/MOVEA_-_8_Plan_de_travail_1_copie_34_ej50g2.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777632722/MOVEA_-_9_Plan_de_travail_1_copie_35_azbkuy.png",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="project-card"
                    onClick={() => setSelectedImage(img)}
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      background: colors.beige,
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={img}
                      alt="Projet MOVEA"
                      style={{
                        width: "100%",
                        height: 240,
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* PROJECT 3 - RACINE */}
            <div style={{ marginBottom: 80 }}>
              <div style={{ marginBottom: 32 }}>
                <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
                  RACINE
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#555",
                    lineHeight: 1.7,
                    maxWidth: 700,
                  }}
                >
                  Cabinet de médecine naturelle avec approche minimaliste.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 20,
                }}
              >
                {[
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777632986/RACINE_2_twv2wa.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777632992/RACINE1_ld2tz3.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777632992/RACINE4_uytx8e.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777632993/RACINE5_ipcjtv.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633115/RACINE_7_qofyqy.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633027/RACINE6_gyfebn.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633121/RACINE9_oaqpcc.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633122/RACINE10_zl6nrq.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633126/RACINE8_od41kh.png",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="project-card"
                    onClick={() => setSelectedImage(img)}
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      background: colors.beige,
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={img}
                      alt="Projet RACINE"
                      style={{
                        width: "100%",
                        height: 240,
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* PROJECT 4 - ECO */}
            <div>
              <div style={{ marginBottom: 32 }}>
                <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
                  Département Sciences Économiques
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#555",
                    lineHeight: 1.7,
                    maxWidth: 700,
                  }}
                >
                  Identité universitaire moderne et académique.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 20,
                }}
              >
                {[
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633402/ECO_-_1_Plan_de_travail_1_copie_12_lezomw.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633511/ECO_-_2_Plan_de_travail_1_copie_13_f5grwp.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633526/ECO_-_3_Plan_de_travail_1_copie_14_ldzalz.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633434/ECO_-_4_Plan_de_travail_1_copie_15_jfovom.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633459/ECO_-5_Plan_de_travail_1_copie_16_xokbqx.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633534/ECO_-_6_Plan_de_travail_1_copie_17_qzaca4.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633537/ECO_-_7_Plan_de_travail_1_copie_39_lsxaj7.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633541/ECO_-_8_Plan_de_travail_1_copie_40_zb7h27.png",
                  "https://res.cloudinary.com/dvzr8kngp/image/upload/v1777633550/ECO_-9_Plan_de_travail_1_copie_41_ecazdt.png",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="project-card"
                    onClick={() => setSelectedImage(img)}
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      background: colors.beige,
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={img}
                      alt="Projet ECO"
                      style={{
                        width: "100%",
                        height: 240,
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SKILLS */}
        {activeSection === "skills" && (
          <section
            style={{
              maxWidth: 700,
              margin: "0 auto",
              padding: "80px 24px",
              animation: "fadeUp 0.6s ease both",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                color: colors.orange,
                marginBottom: 8,
                textTransform: "uppercase",
              }}
            >
              Compétences
            </div>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 48 }}>
              Mes expertises
            </h2>

            {competences.map((skill) => (
              <div key={skill.name} style={{ marginBottom: 32 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600 }}>
                    {skill.name}
                  </span>
                  <span style={{ fontSize: 14, color: colors.orange, fontWeight: 700 }}>
                    {skill.level}%
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 8,
                    background: colors.beige,
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: "100%",
                      background: colors.orange,
                      borderRadius: 4,
                      transition: "width 0.6s ease",
                    }}
                  />
                </div>
              </div>
            ))}
          </section>
        )}

        {/* CONTACT */}
        {activeSection === "contact" && (
          <section
            style={{
              maxWidth: 600,
              margin: "0 auto",
              padding: "80px 24px",
              animation: "fadeUp 0.6s ease both",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                color: colors.orange,
                marginBottom: 8,
                textTransform: "uppercase",
              }}
            >
              Contact
            </div>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 32 }}>
              Parlons de votre projet
            </h2>

            <p
              style={{
                fontSize: 16,
                color: "#666",
                lineHeight: 1.8,
                marginBottom: 48,
              }}
            >
              Vous avez une idée ? Une marque à créer ? Une identité à refondre
              ? Je suis là pour vous aider !
            </p>

            <div style={{ display: "grid", gap: 24 }}>
              <div
                style={{
                  padding: 24,
                  background: colors.beige,
                  borderRadius: 12,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
                  📧 Email
                </div>
                <a
                  href="mailto:dossouwilfried22@gmail.com"
                  style={{
                    color: colors.orange,
                    textDecoration: "none",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  dossouwilfried22@gmail.com
                </a>
              </div>

              <div
                style={{
                  padding: 24,
                  background: colors.beige,
                  borderRadius: 12,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
                  📞 Téléphone
                </div>
                <a
                  href="tel:+22507127639 06"
                  style={{
                    color: colors.orange,
                    textDecoration: "none",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  +225 07 12 76 39 06
                </a>
              </div>

              <div
                style={{
                  padding: 24,
                  background: colors.beige,
                  borderRadius: 12,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
                  📍 Localisation
                </div>
                <div style={{ fontSize: 16, color: colors.black }}>
                  Abidjan, Côte d'Ivoire
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.95)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeUp 0.3s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <img
              src={selectedImage}
              alt="Agrandissement"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: 8,
                boxShadow: "0 10px 50px rgba(255, 77, 28, 0.3)",
              }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "-50px",
                right: 0,
                background: "none",
                border: "none",
                color: colors.white,
                fontSize: 28,
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
