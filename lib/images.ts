/**
 * Central image registry — update URLs here to reflect changes across the entire site.
 */

const CLOUDINARY = "https://res.cloudinary.com/dytr7tpmt/image/upload"
const CLOUDINARY_VIDEO = "https://res.cloudinary.com/dytr7tpmt/video/upload"

export const IMAGES = {
  // ── Branding ──────────────────────────────────────────────────────────────
  logo: `${CLOUDINARY}/v1769268145/white_logo_lettering_wc9ti7.png`,
  favicon: `${CLOUDINARY}/v1769268290/Logo_a7lxow.png`,

  // ── Hero & Page Banners ───────────────────────────────────────────────────
  heroArchitecture: "/images/hero-architecture.jpg",
  heroSlides: [
    `${CLOUDINARY_VIDEO}/v1789051493/ANIMATION_gu7o38.mp4`,
    // `${CLOUDINARY}/v1757692536/10_1_-_Photo_zo09ut.jpg`,
    // `${CLOUDINARY}/v1757693036/02-6_rje7ml.jpg`,
    // `${CLOUDINARY}/v1757692671/MA_FISH_3_h2dexk.jpg`,
  ],
  aboutHero: "/images/modern-building.jpg",
  contactHero: "/images/architectural-drawing.jpg",

  // ── About Page ────────────────────────────────────────────────────────────
  studio: "/images/interior-design.jpg",
  teamMember: "/images/team-member.jpg",

  // ── Service Icons ─────────────────────────────────────────────────────────
  serviceIcons: {
    architecture: `${CLOUDINARY}/v1756997151/architecture-icon_o3sj6q.png`,
    interior: `${CLOUDINARY}/v1756997151/interior-design_sf70jw.png`,
    construction: `${CLOUDINARY}/v1756997151/contruction_ojpgny.png`,
    furniture: `${CLOUDINARY}/v1756997151/chair_phertq.png`,
  },

  // ── Section Backgrounds ─────────────────────────────────────────────────
  buildCtaBackground:
    "https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1401941633.jpg",
  processDrawing:
    "https://minnaro.vamtam.com/wp-content/uploads/2025/06/2985394.svg",
  collinCollege: `${CLOUDINARY}/v1757005989/4_wucrx0.jpg`,

  // ── Portfolio (Selected Work & Gallery by category) ───────────────────────
  // Update cover + gallery URLs per category — used across Selected Work & Gallery
  portfolio: {
    architecturalDesign: {
      cover: `${CLOUDINARY}/v1781028596/namakal_1_l3zaij.jpg`,
      gallery: [
        `${CLOUDINARY}/v1781028596/namakal_1_l3zaij.jpg`,
        `${CLOUDINARY}/v1781028589/palanisamy_1_h1dtc9.jpg`,
        `${CLOUDINARY}/v1781028585/jayaraman_1_jkzeva.jpg`,
        `${CLOUDINARY}/v1781028581/palanisamy_2_glwzaj.jpg`,
        `${CLOUDINARY}/v1781028580/jayaraman_2_ame24w.jpg`,
        `${CLOUDINARY}/v1781028580/namakal_farmhouse_2_l6fwvf.jpg`,
      ],
    },
    commercialArchitecture: {
      cover: `${CLOUDINARY}/v1781028591/hyflyers_elevation_wk0wop.jpg`,
      gallery: [
        `${CLOUDINARY}/v1781028591/hyflyers_elevation_wk0wop.jpg`,
        `${CLOUDINARY}/v1781028591/hyflyers_elevation_2_j0qsaw.jpg`,
      ],
    },
    commercialSpace: {
      cover: `${CLOUDINARY}/v1781028593/gounderplaza_roof_top_2_fznkkq.jpg`,
      gallery: [
        `${CLOUDINARY}/v1781028593/gounderplaza_roof_top_2_fznkkq.jpg`,
        `${CLOUDINARY}/v1781028590/gounderplaza_roof_top_1_yhmkdl.jpg`,
        `${CLOUDINARY}/v1781028590/bathroom_gounderplaza_vpacx7.jpg`,
        `${CLOUDINARY}/v1781028589/tealth_health_care_2_ruosrc.jpg`,
        `${CLOUDINARY}/v1781028588/tealth_health_care_1_tweknq.jpg`,
        `${CLOUDINARY}/v1781028588/vijay_rmc_2_xrpl6n.jpg`,
        `${CLOUDINARY}/v1781028587/vijay_rmc_1_kgrp0q.jpg`,
        `${CLOUDINARY}/v1781028585/gounderplaza_room_qwjsi7.jpg`,
      ],
    },
    luxuryInterior: {
      cover: `${CLOUDINARY}/v1781028593/powder_room_yvhve2.jpg`,
      gallery: [
        `${CLOUDINARY}/v1781028593/powder_room_yvhve2.jpg`,
        `${CLOUDINARY}/v1781028586/jalagandapuram_4_mcak2c.jpg`,
        `${CLOUDINARY}/v1781028586/jalagandapuram_1_kfknoz.jpg`,
        `${CLOUDINARY}/v1781028583/jalagandapuram_3_ohgwcs.jpg`,
        `${CLOUDINARY}/v1781028582/jalagandapuram_2_zyhrxc.jpg`,
      ],
    },
    modernInterior: {
      cover: `${CLOUDINARY}/v1781028590/shekinta_3_azcsn7.jpg`,
      gallery: [
        `${CLOUDINARY}/v1781028590/shekinta_3_azcsn7.jpg`,
        `${CLOUDINARY}/v1781028583/pozhilagam_1_mrcwet.jpg`,
        `${CLOUDINARY}/v1781028582/pozhilagam_2_wdedne.jpg`,
        `${CLOUDINARY}/v1781028580/hari_1_bsgd56.jpg`,
        `${CLOUDINARY}/v1781028580/shekinta_1_zi9bec.jpg`,
      ],
    },
  },

  // ── Project Images ────────────────────────────────────────────────────────
  projects: {
    maFish3: `${CLOUDINARY}/v1757692671/MA_FISH_3_h2dexk.jpg`,
    fishV4: `${CLOUDINARY}/v1757692671/fish_v4_pn9hg1.png`,
    maFish: `${CLOUDINARY}/v1757692669/MA_FISH_msi6kf.jpg`,
    maFish4: `${CLOUDINARY}/v1757692669/MA_FISH_4_jdbwug.jpg`,
    photo29_19: `${CLOUDINARY}/v1757692664/29_19_-_Photo_adprge.jpg`,
    photo11_5: `${CLOUDINARY}/v1757692662/11_5_-_Photo_le1raa.jpg`,
    commercialDev: `${CLOUDINARY}/v1757692619/48793eb6-dee6-407a-95f3-7a0ea311c4e9_hwvdna.jpg`,
    photo10_1: `${CLOUDINARY}/v1757692536/10_1_-_Photo_zo09ut.jpg`,
    photo10_2: `${CLOUDINARY}/v1757692526/10_2_-_Photo_jnta93.jpg`,
    img1743: `${CLOUDINARY}/v1757692522/IMG_1743_dpafzx.png`,
    img1744: `${CLOUDINARY}/v1757692522/IMG_1744_qxnmok.png`,
    img0172: `${CLOUDINARY}/v1757692520/IMG_0172_kxzjb5.jpg`,
    interior02_6: `${CLOUDINARY}/v1757693036/02-6_rje7ml.jpg`,
    interior09_2: `${CLOUDINARY}/v1757693032/09-2_aq4oq5.jpg`,
    photo01_6: `${CLOUDINARY}/v1757693021/01_6_-_Photo_zocpd0.jpg`,
    luxury4: `${CLOUDINARY}/v1757693017/4_uaf35x.jpg`,
    photo2_10: `${CLOUDINARY}/v1757693006/2_10_-_Photo_dokgyt.jpg`,
    img0879: `${CLOUDINARY}/v1757693004/IMG_0879_mpfgqj.jpg`,
    photo01_10: `${CLOUDINARY}/v1757692999/01_10_-_Photo_awygxp.jpg`,
    photo2_7: `${CLOUDINARY}/v1757692997/2_7_-_Photo_myzmda.jpg`,
    contemporaryLiving: `${CLOUDINARY}/v1757692984/d868f1a2-eea6-4b6e-b040-2acef318137c_mzppxo.jpg`,
  },

  // ── Project Detail (slug page) ────────────────────────────────────────────
  projectDetail: {
    hero: "/images/project-1.jpg",
    gallery: [
      "/images/project-1.jpg",
      "/images/project-2.jpg",
      "/images/project-3.jpg",
      "/images/interior-design.jpg",
      "/images/modern-building.jpg",
      "/images/construction-site.jpg",
    ],
  },
} as const
