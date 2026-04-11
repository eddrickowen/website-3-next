"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "id";

interface TranslationDictionary {
  [key: string]: any;
}

const translations: Record<Language, TranslationDictionary> = {
  en: {
    common: {
      learnMore: "Learn More",
      contactUs: "Contact Us",
      getQuote: "Get a Quote",
      scroll: "Scroll",
      services: "Services",
      aboutUs: "About Us",
      projects: "Projects",
      contact: "Contact",
      email: "Email Address",
      address: "Address",
      phone: "Phone Number",
    },
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      hero: {
        badge: "Industrial Excellence Since 1993",
        titleTop: "Advanced",
        titleItalic: "Engineering",
        titleBottom: "Solutions.",
        description: "Sumatra's leading partner for Palm Oil Mill support, industrial maintenance, and premium technical supplies. Over 30 years of proven reliability and global partnerships.",
        ctaWork: "View Our Work",
        ctaContact: "Get in Touch",
      },
      stats: [
        { label: "Years Experience", sub: "Since 1993, Medan" },
        { label: "Corporate Clients", sub: "Across Sumatra & Kalimantan" },
        { label: "Global Partner Regions", sub: "Europe, USA, Japan & more" },
        { label: "Industries Served", sub: "Palm Oil, F&B, Healthcare..." }
      ],
      services: {
        badge: "02",
        title: "Core Capabilities",
        subtitle: "Advanced Infrastructure",
        desc: "Systematic approach to industrial maintenance and installation with zero-downtime philosophy.",
        allServices: "All Services",
        items: [
          {
            title: "Palm Oil Industrial Support (PKS)",
            category: "Core Specialization",
            desc: "Complete spare parts supply and installation for Palm Mill (PKS) operations — from sterilizers to kernel transport systems.",
            features: ["Auger Sterilizer Installation", "Screw Conveyor Fabrication", "Sterilizer Door Installation", "Screw Press & Digester Installation"]
          },
          {
            title: "Plate Heat Exchanger (PHE) Service",
            category: "Heat Exchange",
            desc: "Trained service personnel for PHE unit performance checks, plate cleaning, regasketing, and hydro testing.",
            features: ["Unit Performance Check", "Troubleshooting & Inspection", "Chemical Soaking & Hydro Blasting", "Re-Gasketing", "Hydro Testing", "Ultraviolet Inspection Test"]
          },
          {
            title: "ABS & Electric Chiller Service",
            category: "Thermal Management",
            desc: "Full chiller repair, overhaul, and maintenance — ABS absorption chillers, electric chillers, and AHU systems.",
            features: ["System Design", "On-Site Visual Inspection", "Supply & Installation", "Contract Maintenance", "Overhauling Chillers", "Retubing (ABS & Electric)"]
          },
          {
            title: "Cooling Tower — Supply & Service",
            category: "Cooling Systems",
            desc: "Cleaning and servicing of clean and dirty cooling towers, plus complete parts supply.",
            features: ["Clean Cooling Tower Service", "Dirty Cooling Tower Cleaning", "Cooling Tower Parts Supply", "Inspection & Reporting"]
          },
          {
            title: "Boiler Cleaning & Service",
            category: "Steam Systems",
            desc: "Boiler cleaning, servicing, and spare parts supply to keep your steam systems safe and efficient.",
            features: ["Boiler Cleaning & Service", "Boiler Parts Supply", "Safety Inspection", "Performance Optimization"]
          },
          {
            title: "Machining Workshop",
            category: "In-House Workshop",
            desc: "In-house lathe machining workshop for custom part fabrication and precision machining work.",
            features: ["Lathe Machine Operations", "Custom Stainless Steel Equipment", "Industrial Furniture Fabrication", "Custom Part Fabrication"]
          },
          {
            title: "Mechanical, Electrical & Civil Works",
            category: "Engineering Works",
            desc: "General M&E and civil engineering — HVAC, fire protection, plumbing, and water piping installation.",
            features: ["Fire Protection Systems", "HVAC & Ducting Installation", "Industrial Piping Works", "Plumbing & Water Systems"]
          },
          {
            title: "Chemical Distribution",
            category: "Industrial Consumables",
            desc: "Authorized distributor of specialty industrial chemicals — water treatment, coolants, and process chemicals.",
            features: ["Boiler Water Treatment", "Cooling Water Treatment", "Reverse Osmosis Chemicals", "Waste Water Treatment"]
          },
          {
            title: "Spare Parts & Product Supply",
            category: "Authorized Supply",
            desc: "Direct supply of genuine parts from premium global brands — Bearings, Pumps, Belts, and Automation components.",
            features: ["Bearings & O-Rings", "Hydraulic & Pneumatic Control", "Pumps & Rotary Equipment", "Belting & Power Transmission"]
          }
        ]
      },
      partners: {
        badge: "03",
        title: "Official Distribution",
        subtitle: "Premium Brands We Supply",
        desc: "Representing the world's most trusted industrial manufacturers. Explore our full supply catalog in the services gallery.",
        catalog: "View Full Supply Catalog",
        expertiseBadge: "04",
        expertiseTitle: "Fields of Expertise",
        expertiseSubtitle: "Specialized Knowledge for Leading Industries",
        industries: {
          palm_oil: "Palm Oil Industry",
          electronic: "Electronic & Manufacturing",
          healthcare: "Healthcare & Pharma",
          pulp_paper: "Pulp & Paper",
          railway: "Railway (PT. Railink)",
          energy: "Energy Sector",
        },
        clients: "Corporate Clients",
        trustedBy: "Trusted by Industry Leaders",
        clientDesc: "Proven through long-term partnerships with the largest industrial players in Sumatra and Kalimantan.",
        values: [
          { icon: "verified", title: "30+ Years Experience", desc: "Since 1993 in Palm Oil Industrial Support — one of Sumatra's most experienced industrial partners." },
          { icon: "hub", title: "One-Stop Solution", desc: "From spare parts supply to full installation and maintenance — all under one roof." },
          { icon: "public", title: "Global Partnerships", desc: "Representing top manufacturers from Europe, USA, Japan, China, and Singapore." },
          { icon: "build", title: "In-House Workshop", desc: "Our machining workshop enables custom fabrication and reduces critical lead times." },
        ]
      },
      lead: {
        badge: "05",
        label: "Let's Work Together",
        title: "Ready to Optimize Your",
        titleAccent: "Operations?",
        desc: "Whether you need spare parts, scheduled maintenance, or a complete industrial solution — our team is ready. Contact us today for a consultation.",
        phonePrimary: "Mobile (Primary)",
        phoneSecondary: "Mobile (Secondary)",
        emailLabel: "Email Enquiries",
        addressLabel: "Headquarters",
        fullContact: "Full contact page",
        formTitle: "Send an Enquiry",
        formSub: "We respond within 1 business day",
        formName: "Full Name",
        formCompany: "Company Name",
        formCity: "Company Address (City)",
        formEmail: "Email Address",
        formService: "Service Interest",
        formMessage: "Message",
        formSubmit: "Send Enquiry",
        formSending: "Sending Enquiry...",
        formSuccessTitle: "Message Sent",
        formSuccessDesc: "Thank you for reaching out. Our team will get back to you within 1–2 business days.",
        formSuccessCta: "Send another message",
        formOther: "Other (Specify Below)",
        formSpecify: "Please Specify Service",
        formPlaceholderName: "John Smith",
        formPlaceholderCompany: "PT. Your Company",
        formPlaceholderCity: "City, Province",
        formPlaceholderEmail: "you@company.com",
        formPlaceholderService: "Select a service...",
        formPlaceholderMessage: "Describe your project requirements or inquiry details...",
        formPlaceholderSpecify: "Tell us what industrial support you need...",
      },
    },
    about: {
      hero: {
        badge: "About Our Company",
        titleTop: "Technical",
        titleItalic: "Heritage.",
        description: "Three decades of engineering precision. From a local spare parts provider in Medan to an Indonesia-wide industrial partner.",
      },
      vision: {
        title: "Mission & Vision",
        subtitle: "Driving Industrial Growth",
        visionLabel: "Our Vision",
        missionLabel: "Our Mission",
        vision: "To become the most reliable and trusted one-stop solution partner for industrial needs across Indonesia.",
        mission: [
          "Delivering premium quality industrial components and spare parts.",
          "Providing expert technical service with highly trained personnel.",
          "Ensuring zero-downtime for our clients through systematic maintenance.",
          "Building long-term global partnerships with world-class manufacturers."
        ],
        values: [
          { num: "01", label: "Quality", desc: "Committed to product quality and service excellence in every engagement." },
          { num: "02", label: "Efficiency", desc: "Optimizing client production efficiency through integrated solutions." },
          { num: "03", label: "Innovation", desc: "Continuous R&D to stay ahead of industrial technology developments." },
          { num: "04", label: "Integrity", desc: "Transparent partnerships built on trust and long-term relationships." },
        ]
      },
      timeline: {
        badge: "02",
        label: "Company History",
        title: "30+ Years of",
        titleAccent: "Engineering Excellence",
        items: [
          { year: "1993", title: "Company Founded", desc: "PT. Agri Prima Indotama established in Medan, Sumatera Utara, focused on Palm Oil Mill (PKS) industrial support and spare parts supply." },
          { year: "Late 1990s", title: "Global Partnerships", desc: "Began representing well-known manufacturers from Europe, USA, Japan, and Singapore — expanding our product catalog and technical capabilities." },
          { year: "2000s", title: "Service Portfolio Expansion", desc: "Extended capabilities to include PHE servicing, chiller maintenance, cooling tower works, and chemical distribution." },
          { year: "2010s", title: "Sister Company in Batam", desc: "PT. Agri Prima Indonesia established in Batam to extend our industrial service reach across the Riau Archipelago and wider Indonesian market." },
          { year: "2015", title: "In-House Workshop Launch", desc: "Launched our machining workshop with lathe machines, enabling custom part fabrication and reducing client dependence on imported parts." },
          { year: "2020+", title: "Expanded Across Kalimantan", desc: "Extended service reach to Kalimantan with clients such as PT. Energi Unggul Persada, solidifying our position as an Indonesia-wide industrial partner." },
        ]
      }
    },
    services_page: {
      hero: {
        badge: "Industrial Solutions",
        titleTop: "Integrated",
        titleItalic: "Services",
        description: "A dual-category catalog of technical industrial support and premium item supply. Serving the Palm Oil, Energy, and Manufacturing sectors for over 30 years.",
      },
      section1: {
        label: "General Engineering",
        title: "Industrial Support Services",
        desc: "Full-scale engineering support — from precision machining to complex HVAC and Palm Oil Mill installations.",
        viewAll: "View All Industrial Support Services",
        moreTasks: "more specialized tasks",
      },
      section2: {
        label: "Product Catalog",
        title: "Premium Product & Item Supply",
        desc: "Authorized distribution and genuine spare parts catalog. We represent the industry's leading manufacturers.",
        brands: "Authorized Brands",
        footerNote: "Need a brand not listed? Contact our sourcing team for custom industrial procurement.",
      }
    },
    projects_page: {
      hero: {
        badge: "Industrial Journey",
        titleTop: "Proven",
        titleItalic: "Performance.",
        description: "A comprehensive look into our track record. From large-scale HVAC installations to critical Palm Oil Mill support.",
      },
      filters: {
        all: "All Projects",
        hvac: "HVAC & Cooling",
        phe: "PHE & Thermal",
        pks: "Palm Oil (PKS)",
        others: "Others",
      }
    },
    contact_page: {
      hero: {
        badge: "Get in Touch",
        titleTop: "Let's Solve",
        titleItalic: "Challenges.",
        description: "Connect with our experts in Medan or Jakarta. We're ready to provide the technical support your operations demand.",
      },
      details: {
        headquarters: "Headquarters",
        title: "Connect with Our Technical Experts",
        monFri: "Mon–Fri: 08:30 – 17:00",
        sat: "Sat: 08:30 – 13:00",
        hours: "Operating Hours",
      },
      map: {
        label: "Location",
        title: "Find Us in Medan",
        desc: "Strategic industrial hub serving the North Sumatra region.",
      }
    },
    footer: {
      tagline: "Your Trusted Industrial Partner Since 1993",
      services: "Services",
      exploreAll: "Explore All Services",
      phoneInquiry: "Phone Inquiry",
      emailSupport: "Email Support",
      about: "Since 1993, PT. Agri Prima Indotama has been a reliable partner for industrial support and premium spare parts distribution in Indonesia.",
      navigation: "Navigation",
      contact: "Contact Information",
      legal: "Legal & Professional",
      allRights: "All Rights Reserved",
      rights: "All Rights Reserved",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      sumatra: "Sumatra",
      kalimantan: "Kalimantan",
      java: "Java",
    }
  },
  id: {
    common: {
      learnMore: "Pelajari Lebih Lanjut",
      contactUs: "Hubungi Kami",
      getQuote: "Dapatkan Penawaran",
      scroll: "Gulir",
      services: "Layanan",
      aboutUs: "Tentang Kami",
      projects: "Proyek",
      contact: "Kontak",
      email: "Alamat Email",
      address: "Alamat",
      phone: "Nomor Telepon",
    },
    nav: {
      home: "Beranda",
      services: "Layanan",
      about: "Tentang Kami",
      projects: "Proyek",
      contact: "Kontak",
    },
    home: {
      hero: {
        badge: "Keunggulan Industri Sejak 1993",
        titleTop: "Solusi",
        titleItalic: "Teknik",
        titleBottom: "Tingkat Lanjut.",
        description: "Mitra terkemuka di Sumatera untuk dukungan Pabrik Kelapa Sawit, pemeliharaan industri, dan pasokan teknis premium. Lebih dari 30 tahun keandalan terbukti dan kemitraan global.",
        ctaWork: "Lihat Pekerjaan Kami",
        ctaContact: "Hubungi Kami",
      },
      stats: [
        { label: "Tahun Pengalaman", sub: "Sejak 1993, Medan" },
        { label: "Klien Korporat", sub: "Di Seluruh Sumatera & Kalimantan" },
        { label: "Wilayah Mitra Global", sub: "Eropa, AS, Jepang & lainnya" },
        { label: "Industri yang Dilayani", sub: "Sawit, F&B, Kesehatan..." }
      ],
      services: {
        badge: "02",
        title: "Kemampuan Inti",
        subtitle: "Infrastruktur Canggih",
        desc: "Pendekatan sistematis untuk pemeliharaan dan instalasi industri dengan filosofi 'zero-downtime'.",
        allServices: "Semua Layanan",
        items: [
          {
            title: "Dukungan Industri Sawit (PKS)",
            category: "Spesialisasi Inti",
            desc: "Penyediaan suku cadang lengkap dan pemasangan untuk operasional Pabrik Kelapa Sawit (PKS).",
            features: ["Pemasangan Auger Sterilizer", "Fabrikasi Screw Conveyor", "Pemasangan Pintu Sterilizer", "Pemasangan Screw Press & Digester"]
          },
          {
            title: "Layanan Heat Exchanger (PHE)",
            category: "Pertukaran Panas",
            desc: "Pemeriksaan kinerja unit PHE, pembersihan pelat, penggantian gasket, dan pengujian hidro.",
            features: ["Pengecekan Kinerja Unit", "Inspeksi & Troubleshooting", "Chemical Soaking", "Ganti Gasket", "Uji Hidrostatis", "Inspeksi Ultraviolet"]
          },
          {
            title: "Layanan Chiller ABS & Elektrik",
            category: "Manajemen Termal",
            desc: "Perbaikan, perbaikan menyeluruh, dan pemeliharaan chiller — sistem ABS dan elektrik.",
            features: ["Desain Sistem", "Inspeksi Visual Lokasi", "Suplai & Instalasi", "Kontrak Pemeliharaan", "Overhaul Chiller", "Retubing (ABS & Elektrik)"]
          },
          {
            title: "Menara Pendingin — Suplai & Layanan",
            category: "Sistem Pendingin",
            desc: "Pembersihan dan servis menara pendingin bersih dan kotor, ditambah suplai suku cadang lengkap.",
            features: ["Servis Menara Pendingin Bersih", "Pembersihan Menara Pendingin Kotor", "Suplai Suku Cadang", "Inspeksi & Pelaporan"]
          },
          {
            title: "Pembersihan & Servis Boiler",
            category: "Sistem Uap",
            desc: "Pembersihan, servis, dan suplai suku cadang boiler untuk menjaga sistem uap Anda tetap aman dan efisien.",
            features: ["Pembersihan & Servis Boiler", "Suplai Suku Cadang Boiler", "Inspeksi Keselamatan", "Optimasi Kinerja"]
          },
          {
            title: "Bengkel Permesinan",
            category: "Workshop Internal",
            desc: "Bengkel bubut internal untuk fabrikasi bagian khusus dan pekerjaan permesinan presisi.",
            features: ["Operasi Mesin Bubut", "Peralatan Stainless Steel Kustom", "Fabrikasi Furnitur Industri", "Fabrikasi Bagian Kustom"]
          },
          {
            title: "Pekerjaan Mekanikal, Elektrikal & Sipil",
            category: "Pekerjaan Teknik",
            desc: "Teknik M&E dan sipil umum — HVAC, perlindungan kebakaran, pemipaan, dan instalasi pipa air.",
            features: ["Sistem Proteksi Kebakaran", "Instalasi HVAC & Ducting", "Pekerjaan Pipa Industri", "Sistem Plambing & Air"]
          },
          {
            title: "Distribusi Kimia Industri",
            category: "Konsumsi Industri",
            desc: "Distributor resmi bahan kimia industri khusus — pengolahan air, pendingin, dan bahan kimia proses.",
            features: ["Pengolahan Air Boiler", "Pengolahan Air Pendingin", "Kimia Reverse Osmosis", "Pengolahan Air Limbah"]
          },
          {
            title: "Suku Cadang & Pasokan Produk",
            category: "Pasokan Resmi",
            desc: "Pasokan langsung suku cadang asli dari merek global premium — Bearing, Pompa, Belt, dan komponen Otomasi.",
            features: ["Bearing & O-Ring", "Kontrol Hidrolik & Pneumatik", "Pompa & Peralatan Rotasi", "Belting & Transmisi Daya"]
          }
        ]
      },
      partners: {
        badge: "03",
        title: "Distribusi Resmi",
        subtitle: "Merek Premium yang Kami Pasok",
        desc: "Mewakili produsen industri paling terpercaya di dunia. Jelajahi katalog pasokan lengkap kami di galeri layanan.",
        catalog: "Lihat Katalog Pasokan Lengkap",
        expertiseBadge: "04",
        expertiseTitle: "Bidang Keahlian",
        expertiseSubtitle: "Keahlian Dipercaya oleh Industri Terkemuka",
        industries: {
          palm_oil: "Industri Kelapa Sawit",
          electronic: "Industri Elektronik",
          healthcare: "Kesehatan & Farmasi",
          pulp_paper: "Pulp & Kertas",
          railway: "Kereta Api (PT. Railink)",
          energy: "Sektor Energi",
        },
        clients: "Klien Korporat",
        trustedBy: "Dipercaya oleh Pemimpin Industri",
        clientDesc: "Bukti nyata melalui kemitraan jangka panjang dengan pemain industri terbesar di Sumatera dan Kalimantan.",
        values: [
          { icon: "verified", title: "30+ Tahun Pengalaman", desc: "Sejak 1993 dalam Dukungan Industri Sawit — salah satu mitra industri paling berpengalaman di Sumatera." },
          { icon: "hub", title: "Solusi Satu Atap", desc: "Dari pasokan suku cadang hingga instalasi dan pemeliharaan penuh — semua di bawah satu atap." },
          { icon: "public", title: "Kemitraan Global", desc: "Mewakili produsen papan atas dari Eropa, AS, Jepang, China, dan Singapura." },
          { icon: "build", title: "Workshop Internal", desc: "Workshop permesinan kami memungkinkan fabrikasi kustom dan mengurangi waktu tunggu kritis." },
        ]
      },
      lead: {
        badge: "05",
        label: "Mari Bekerja Sama",
        title: "Siap Mengoptimalkan",
        titleAccent: "Operasional Anda?",
        desc: "Butuh suku cadang, pemeliharaan terjadwal, atau solusi industri lengkap — tim kami siap. Hubungi kami hari ini untuk konsultasi.",
        phonePrimary: "Ponsel (Utama)",
        phoneSecondary: "Ponsel (Kedua)",
        emailLabel: "Pertanyaan Email",
        addressLabel: "Kantor Pusat",
        fullContact: "Halaman kontak penuh",
        formTitle: "Kirim Pertanyaan",
        formSub: "Kami merespons dalam 1 hari kerja",
        formName: "Nama Lengkap",
        formCompany: "Nama Perusahaan",
        formCity: "Alamat Perusahaan (Kota)",
        formEmail: "Alamat Email",
        formService: "Layanan yang Diminati",
        formMessage: "Pesan",
        formSubmit: "Kirim Pertanyaan",
        formSending: "Mengirim Pertanyaan...",
        formSuccessTitle: "Pesan Terkirim",
        formSuccessDesc: "Terima kasih telah menghubungi kami. Tim kami akan menghubungi Anda kembali dalam 1-2 hari kerja.",
        formSuccessCta: "Kirim pesan lain",
        formOther: "Lainnya (Tentukan di Bawah)",
        formSpecify: "Mohon Tentukan Layanan",
        formPlaceholderName: "Nama Anda",
        formPlaceholderCompany: "PT. Perusahaan Anda",
        formPlaceholderCity: "Kota, Provinsi",
        formPlaceholderEmail: "anda@perusahaan.com",
        formPlaceholderService: "Pilih layanan...",
        formPlaceholderMessage: "Jelaskan persyaratan proyek atau detail pertanyaan Anda...",
        formPlaceholderSpecify: "Beri tahu kami dukungan industri apa yang Anda butuhkan...",
      },
    },
    about: {
      hero: {
        badge: "Tentang Perusahaan Kami",
        titleTop: "Warisan",
        titleItalic: "Teknis.",
        description: "Tiga dekade presisi teknik. Dari penyedia suku cadang lokal di Medan hingga menjadi mitra industri di seluruh Indonesia.",
      },
      vision: {
        title: "Misi & Visi",
        subtitle: "Mendorong Pertumbuhan Industri",
        visionLabel: "Visi Kami",
        missionLabel: "Misi Kami",
        vision: "Menjadi mitra solusi satu atap yang paling andal dan terpercaya untuk kebutuhan industri di seluruh Indonesia.",
        mission: [
          "Memberikan komponen dan suku cadang industri berkualitas premium.",
          "Menyediakan layanan teknis ahli dengan personel yang sangat terlatih.",
          "Memastikan 'zero-downtime' bagi klien melalui pemeliharaan sistematis.",
          "Membangun kemitraan global jangka panjang dengan produsen kelas dunia."
        ],
        values: [
          { num: "01", label: "Kualitas", desc: "Berkomitmen pada kualitas produk dan layanan yang unggul dalam setiap keterlibatan." },
          { num: "02", label: "Efisiensi", desc: "Mengoptimalkan efisiensi produksi klien melalui solusi terintegrasi." },
          { num: "03", label: "Inovasi", desc: "Penelitian dan pengembangan berkelanjutan untuk tetap di depan perkembangan teknologi industri." },
          { num: "04", label: "Integritas", desc: "Kemitraan transparan yang dibangun di atas kepercayaan dan hubungan jangka panjang." },
        ]
      },
      timeline: {
        badge: "02",
        label: "Sejarah Perusahaan",
        title: "30+ Tahun",
        titleAccent: "Keunggulan Teknik",
        items: [
          { year: "1993", title: "Perusahaan Didirikan", desc: "PT. Agri Prima Indotama didirikan di Medan, Sumatera Utara, berfokus pada dukungan Pabrik Kelapa Sawit (PKS) dan pasokan suku cadang." },
          { year: "Akhir 1990an", title: "Kemitraan Global Terbentuk", desc: "Mulai mewakili produsen terkenal dari Eropa, AS, Jepang, dan Singapura — memperluas katalog produk dan kemampuan teknis kami." },
          { year: "2000an", title: "Ekspansi Portofolio Layanan", desc: "Memperluas kemampuan mencakup servis PHE, perawatan chiller, pekerjaan menara pendingin, dan distribusi kimia." },
          { year: "2010an", title: "Perusahaan Saudara di Batam", desc: "PT. Agri Prima Indonesia didirikan di Batam untuk memperluas jangkauan layanan industri kami ke seluruh Kepulauan Riau dan pasar Indonesia yang lebih luas." },
          { year: "2015", title: "Peluncuran Workshop Internal", desc: "Meluncurkan bengkel permesinan kami dengan mesin bubut, memungkinkan fabrikasi suku cadang kustom dan mengurangi ketergantungan klien pada suku cadang impor." },
          { year: "2020+", title: "Ekspansi ke Seluruh Kalimantan", desc: "Memperluas jangkauan layanan ke Kalimantan dengan klien seperti PT. Energi Unggul Persada, memperkuat posisi kami sebagai mitra industri di seluruh Indonesia." },
        ]
      }
    },
    services_page: {
      hero: {
        badge: "Solusi Industri",
        titleTop: "Layanan",
        titleItalic: "Terintegrasi",
        description: "Katalog ganda dukungan teknis industri dan pasokan barang premium. Melayani sektor Kelapa Sawit, Energi, dan Manufaktur selama lebih dari 30 tahun.",
      },
      section1: {
        label: "Teknik Umum",
        title: "Layanan Dukungan Industri",
        desc: "Dukungan teknik skala penuh — dari permesinan presisi hingga instalasi HVAC dan Pabrik Kelapa Sawit yang kompleks.",
        viewAll: "Lihat Semua Layanan Dukungan Industri",
        moreTasks: "tugas khusus lainnya",
      },
      section2: {
        label: "Katalog Produk",
        title: "Produk Premium & Pasokan Barang",
        desc: "Distribusi resmi dan katalog suku cadang asli. Kami mewakili produsen terkemuka di industri.",
        brands: "Merek Resmi",
        footerNote: "Butuh merek yang tidak terdaftar? Hubungi tim sourcing kami untuk pengadaan industri kustom.",
      }
    },
    projects_page: {
      hero: {
        badge: "Perjalanan Industri",
        titleTop: "Performa",
        titleItalic: "Terbukti.",
        description: "Tampilan komprehensif dari rekam jejak kami. Dari instalasi HVAC skala besar hingga dukungan kritis Pabrik Kelapa Sawit.",
      },
      filters: {
        all: "Semua Proyek",
        hvac: "HVAC & Pendingin",
        phe: "PHE & Termal",
        pks: "Kelapa Sawit (PKS)",
        others: "Lainnya",
      }
    },
    contact_page: {
      hero: {
        badge: "Hubungi Kami",
        titleTop: "Mari Selesaikan",
        titleItalic: "Tantangan.",
        description: "Terhubung dengan ahli kami di Medan atau Jakarta. Kami siap memberikan dukungan teknis yang dibutuhkan operasional Anda.",
      },
      details: {
        headquarters: "Kantor Pusat",
        title: "Terhubung dengan Ahli Teknis Kami",
        monFri: "Sen–Jum: 08:30 – 17:00",
        sat: "Sab: 08:30 – 13:00",
        hours: "Jam Operasional",
      },
      map: {
        label: "Lokasi",
        title: "Temukan Kami di Medan",
        desc: "Pusat industri strategis yang melayani wilayah Sumatera Utara.",
      }
    },
    footer: {
      tagline: "Mitra Industri Terpercaya Anda Sejak 1993",
      services: "Layanan",
      exploreAll: "Jelajahi Semua Layanan",
      phoneInquiry: "Pertanyaan Telepon",
      emailSupport: "Dukungan Email",
      about: "Sejak 1993, PT. Agri Prima Indotama telah menjadi mitra tepercaya untuk dukungan industri dan distribusi suku cadang premium di Indonesia.",
      navigation: "Navigasi",
      contact: "Informasi Kontak",
      legal: "Legal & Profesional",
      allRights: "Hak Cipta Dilindungi",
      rights: "Hak Cipta Dilindungi",
      terms: "Syarat Ketentuan",
      privacy: "Kebijakan Privasi",
      sumatra: "Sumatera",
      kalimantan: "Kalimantan",
      java: "Jawa",
    }
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load preference from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("preferred-language") as Language;
    if (saved && (saved === "en" || saved === "id")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("preferred-language", lang);
  };

  const t = (key: string): any => {
    const keys = key.split(".");
    let value = translations[language];

    // Debug tracking (removable later)
    let path = "";

    for (const k of keys) {
      path += (path ? "." : "") + k;
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        // Fallback to English if key missing in current language (Indonesian)
        // Only if we're not ALREADY in English to avoid infinite loop or duplicate logs
        if (language !== "en") {
          let fallbackValue = translations["en"];
          for (const fk of keys) {
            if (fallbackValue && fallbackValue[fk] !== undefined) {
              fallbackValue = fallbackValue[fk];
            } else {
              console.warn(`[LanguageContext] Key not found in ID/EN: ${key}`);
              return key;
            }
          }
          return fallbackValue;
        }
        
        console.warn(`[LanguageContext] Key not found: ${key}`);
        return key;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
