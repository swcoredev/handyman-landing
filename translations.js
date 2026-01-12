// Language translations for the handyman website
const translations = {
    en: {
        // Navigation
        nav: {
            services: "Services",
            benefits: "Benefits",
            about: "About",
            reviews: "Reviews",
            contact: "Contact",
            ctaButton: "Get Started"
        },
        // Hero Section
        hero: {
            title: "Professional Handyman",
            subtitle: "at Your Service",
            description: "We solve all your household problems quickly and professionally. From minor repairs to complex projects. Quality guaranteed.",
            ctaButton: "Get a Quote",
            servicesButton: "Our Services",
            stats: {
                clients: "Happy Clients",
                experience: "Years Experience",
                satisfaction: "Satisfaction Rate"
            },
            cards: {
                sameDay: "Same Day Service",
                quality: "Quality Guarantee",
                pricing: "Fair Pricing"
            }
        },
        // Services Section
        services: {
            title: "Our Services",
            description: "Professional handyman services for all your home needs - no job too small",
            furniture: {
                title: "Furniture Assembly",
                description: "Professional assembly of all types of furniture. IKEA, Wayfair, Amazon purchases - we build it all.",
                items: ["IKEA & flat-pack furniture", "Office furniture setup", "Bed frames & dressers"]
            },
            painting: {
                title: "Painting Services",
                description: "Interior and exterior painting to refresh your home's look with professional results.",
                items: ["Interior wall painting", "Trim & baseboard painting", "Deck & fence staining"]
            },
            repairs: {
                title: "Minor Repairs",
                description: "Fix small household issues quickly without the need for specialized contractors.",
                items: ["Drywall patching & repair", "Door & cabinet adjustments", "Squeaky floor fixes"]
            },
            installation: {
                title: "Installation Services",
                description: "Professional installation of shelves, curtains, TVs, and home accessories.",
                items: ["TV wall mounting", "Shelving & storage systems", "Curtain rods & blinds"]
            },
            yard: {
                title: "Yard Maintenance",
                description: "Keep your outdoor spaces clean and well-maintained year-round.",
                items: ["Lawn mowing & edging", "Gutter cleaning", "Pressure washing"]
            },
            general: {
                title: "General Handyman",
                description: "All-around home help for those odd jobs and daily maintenance tasks.",
                items: ["Light bulb replacement", "Picture & mirror hanging", "Caulking & weatherstripping"]
            }
        },
        // Benefits Section
        benefits: {
            title: "Why Choose Us",
            items: {
                sameDay: {
                    title: "Same-Day Service",
                    description: "We arrive the same day or at a time that's convenient for you"
                },
                professionals: {
                    title: "Experienced Professionals",
                    description: "All our specialists have proper training and extensive work experience"
                },
                pricing: {
                    title: "Fair Pricing",
                    description: "We provide quotes upfront. No hidden fees or surprises"
                },
                tools: {
                    title: "Professional Tools",
                    description: "We use professional equipment and quality materials"
                },
                guarantee: {
                    title: "Quality Guarantee",
                    description: "We provide a minimum 6-month warranty on all completed work"
                },
                customer: {
                    title: "Customer-Focused",
                    description: "We consider all your preferences and work until you're fully satisfied"
                }
            }
        },
        // About Section
        about: {
            title: "About Me",
            name: "Your Name", // Replace with actual name
            experience: "25+ Years of Experience",
            description: "With over 25 years of experience in home repair and maintenance, I'm dedicated to providing quality handyman services to homeowners. I take pride in my work and treat every home as if it were my own. Committed to excellence and customer satisfaction.",
            certifications: "Professional Skills",
            certList: ["Expert Problem Solver", "Quality Workmanship", "Reliable & Trustworthy"]
        },
        // Reviews Section
        reviews: {
            title: "Customer Reviews",
            items: [
                {
                    text: "Excellent work! They assembled my new IKEA furniture quickly and professionally. The price was fair and the quality was outstanding. Will definitely use again!",
                    author: "Sarah Martinez",
                    date: "2 weeks ago"
                },
                {
                    text: "Called them for TV mounting and shelf installation. Arrived on time, worked quickly and efficiently. Everything looks perfect. Highly recommend!",
                    author: "John Davis",
                    date: "1 month ago"
                },
                {
                    text: "Very satisfied with the work! They painted my living room beautifully. Clean, professional, and reasonably priced. Thank you!",
                    author: "Emily Williams",
                    date: "3 weeks ago"
                }
            ]
        },
        // Contact Section
        contact: {
            title: "Request Service",
            description: "Submit a request and we'll call you back within 10 minutes to discuss details and schedule a convenient time",
            details: {
                phone: "Phone",
                phoneValue: "+1 (555) 123-4567",
                email: "Email",
                emailValue: "info@handyman-services.com",
                hours: "Hours",
                hoursValue: "Daily: 8:00 AM - 10:00 PM"
            },
            form: {
                name: "Your Name",
                namePlaceholder: "John Smith",
                phone: "Phone",
                phonePlaceholder: "(555) 123-4567",
                service: "Service Type",
                servicePlaceholder: "Select a service",
                serviceOptions: {
                    furniture: "Furniture Assembly",
                    painting: "Painting",
                    repairs: "Minor Repairs",
                    installation: "Installation Services",
                    yard: "Yard Maintenance",
                    other: "Other"
                },
                message: "Job Description",
                messagePlaceholder: "Describe what you need done",
                submit: "Submit Request",
                privacy: "By submitting, you agree to our privacy policy"
            }
        },
        // Footer
        footer: {
            description: "Professional home repair and maintenance services. Serving the community since 2009.",
            services: "Services",
            contact: "Contact",
            hours: "Hours",
            hoursValue: ["Monday - Sunday", "8:00 AM - 10:00 PM", "7 Days a Week"],
            copyright: "© 2024 Handyman Services. All rights reserved."
        },
        // Notifications
        notifications: {
            success: "Thank you! We'll contact you shortly.",
            error: "Something went wrong. Please try again."
        }
    },
    ru: {
        // Navigation
        nav: {
            services: "Услуги",
            benefits: "Преимущества",
            about: "Обо мне",
            reviews: "Отзывы",
            contact: "Контакты",
            ctaButton: "Начать"
        },
        // Hero Section
        hero: {
            title: "Профессиональный мастер",
            subtitle: "у вас дома",
            description: "Решаем любые бытовые проблемы быстро и качественно. От мелкого ремонта до сложных работ. Гарантия на все услуги.",
            ctaButton: "Заказать звонок",
            servicesButton: "Наши услуги",
            stats: {
                clients: "Довольных клиентов",
                experience: "Лет опыта",
                satisfaction: "Довольны работой"
            },
            cards: {
                sameDay: "Выезд в день обращения",
                quality: "Гарантия качества",
                pricing: "Честные цены"
            }
        },
        // Services Section
        services: {
            title: "Наши услуги",
            description: "Профессиональные услуги мастера для всех ваших домашних нужд - нет слишком маленьких работ",
            furniture: {
                title: "Сборка мебели",
                description: "Профессиональная сборка всех типов мебели. IKEA, Wayfair, покупки на Amazon - мы соберём всё.",
                items: ["Мебель IKEA и плоские упаковки", "Сборка офисной мебели", "Кровати и комоды"]
            },
            painting: {
                title: "Малярные работы",
                description: "Внутренняя и внешняя покраска для обновления вашего дома с профессиональным результатом.",
                items: ["Покраска внутренних стен", "Покраска плинтусов", "Окраска террас и заборов"]
            },
            repairs: {
                title: "Мелкий ремонт",
                description: "Быстрое решение мелких бытовых проблем без необходимости вызова специализированных подрядчиков.",
                items: ["Ремонт гипсокартона", "Регулировка дверей и шкафов", "Устранение скрипа полов"]
            },
            installation: {
                title: "Услуги монтажа",
                description: "Профессиональная установка полок, штор, телевизоров и домашних аксессуаров.",
                items: ["Монтаж ТВ на стену", "Полки и системы хранения", "Карнизы и жалюзи"]
            },
            yard: {
                title: "Уход за двором",
                description: "Поддержание ваших открытых пространств в чистоте и порядке круглый год.",
                items: ["Стрижка газона", "Чистка водостоков", "Мойка под давлением"]
            },
            general: {
                title: "Общие работы",
                description: "Комплексная помощь по дому для разных работ и повседневного обслуживания.",
                items: ["Замена лампочек", "Навес картин и зеркал", "Герметизация и уплотнение"]
            }
        },
        // Benefits Section
        benefits: {
            title: "Почему выбирают нас",
            items: {
                sameDay: {
                    title: "Выезд в день обращения",
                    description: "Приезжаем в день обращения или в удобное для вас время"
                },
                professionals: {
                    title: "Опытные специалисты",
                    description: "Все наши специалисты имеют профильное образование и большой опыт работы"
                },
                pricing: {
                    title: "Честные цены",
                    description: "Озвучиваем стоимость заранее. Никаких скрытых платежей"
                },
                tools: {
                    title: "Профессиональный инструмент",
                    description: "Используем профессиональное оборудование и качественные материалы"
                },
                guarantee: {
                    title: "Гарантия качества",
                    description: "Даём гарантию на все выполненные работы минимум 6 месяцев"
                },
                customer: {
                    title: "Клиентоориентированность",
                    description: "Учитываем все ваши пожелания и работаем до полного удовлетворения"
                }
            }
        },
        // About Section
        about: {
            title: "Обо мне",
            name: "Ваше имя", // Replace with actual name
            experience: "Более 25 лет опыта",
            description: "С более чем 25-летним опытом в ремонте и обслуживании домов, я предан качественному предоставлению услуг домовладельцам. Я горжусь своей работой и отношусь к каждому дому как к своему собственному. Предан качеству и удовлетворению клиентов.",
            certifications: "Профессиональные навыки",
            certList: ["Эксперт в решении проблем", "Качественная работа", "Надёжный и ответственный"]
        },
        // Reviews Section
        reviews: {
            title: "Отзывы наших клиентов",
            items: [
                {
                    text: "Отличная работа! Быстро собрали мою новую мебель IKEA профессионально. Цена была справедливой, а качество отличным. Обязательно обращусь снова!",
                    author: "Мария Александрова",
                    date: "2 недели назад"
                },
                {
                    text: "Вызвал для монтажа ТВ и установки полок. Приехали вовремя, работали быстро и эффективно. Всё выглядит идеально. Очень рекомендую!",
                    author: "Дмитрий Петров",
                    date: "1 месяц назад"
                },
                {
                    text: "Очень доволен работой! Покрасили мою гостиную красиво. Чисто, профессионально и по разумной цене. Спасибо!",
                    author: "Елена Иванова",
                    date: "3 недели назад"
                }
            ]
        },
        // Contact Section
        contact: {
            title: "Заказать услугу",
            description: "Оставьте заявку, и мы перезвоним вам в течение 10 минут, чтобы обсудить детали и согласовать удобное время",
            details: {
                phone: "Телефон",
                phoneValue: "+7 (999) 123-45-67",
                email: "Email",
                emailValue: "info@handyman-services.ru",
                hours: "Режим работы",
                hoursValue: "Ежедневно: 8:00 - 22:00"
            },
            form: {
                name: "Ваше имя",
                namePlaceholder: "Иван Иванов",
                phone: "Телефон",
                phonePlaceholder: "+7 (999) 123-45-67",
                service: "Тип услуги",
                servicePlaceholder: "Выберите услугу",
                serviceOptions: {
                    furniture: "Сборка мебели",
                    painting: "Малярные работы",
                    repairs: "Мелкий ремонт",
                    installation: "Услуги монтажа",
                    yard: "Уход за двором",
                    other: "Другое"
                },
                message: "Описание работы",
                messagePlaceholder: "Опишите, что нужно сделать",
                submit: "Отправить заявку",
                privacy: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности"
            }
        },
        // Footer
        footer: {
            description: "Профессиональный ремонт и обслуживание вашего дома. Обслуживаем с 2009 года.",
            services: "Услуги",
            contact: "Контакты",
            hours: "Время работы",
            hoursValue: ["Понедельник - Воскресенье", "8:00 - 22:00", "Без выходных"],
            copyright: "© 2024 Handyman Services. Все права защищены."
        },
        // Notifications
        notifications: {
            success: "Спасибо! Мы свяжемся с вами в ближайшее время.",
            error: "Что-то пошло не так. Пожалуйста, попробуйте снова."
        }
    }
};
