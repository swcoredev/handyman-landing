// Language translations for the solo handyman website
const translations = {
    en: {
        // Navigation
        nav: {
            services: "Services",
            benefits: "Why Me",
            about: "About Me",
            reviews: "Reviews",
            contact: "Contact",
            ctaButton: "Get Started"
        },
        // Hero Section
        hero: {
            title: "Reliable Handyman for Your Home Projects",
            description: "I'll handle your furniture assembly, TV mounting, and home repairs so you can relax.",
            bullets: [
                "I show up on time and work alone (no strangers)",
                "Clean, professional tools and neat results",
                "Clear prices with no hidden surprises"
            ],
            ctaButton: "Get a Free Quote",
            servicesButton: "View My Services"
        },
        // Services Section
        services: {
            title: "How I Can Help",
            description: "No job is too small. I focus on doing things right the first time.",
            furniture: {
                title: "Furniture Assembly",
                description: "Professional assembly of IKEA, Wayfair, and Amazon purchases. Neatly built and ready to use.",
                items: ["IKEA & flat-pack specialist", "Office & home furniture", "Bed frames and dressers"]
            },
            mounting: {
                title: "TV Mounting",
                description: "Secure mounting on any wall type. Hidden cables and perfect leveling for your viewing experience.",
                items: ["Wall mounting up to 85\"", "Wire management", "Soundbar installation"]
            },
            lighting: {
                title: "Lighting & Fans",
                description: "Installation of new fixtures, dimmers, or ceiling fans. Safe and professional setup.",
                items: ["Ceiling fan installation", "Light fixture replacement", "Smart home switches"]
            },
            repairs: {
                title: "Minor Home Repairs",
                description: "Fixing small household issues quickly without the hassle of a big contractor.",
                items: ["Drywall patching", "Door & cabinet adjustments", "Leaky faucet fixes"]
            }
        },
        // Why Choose Me Section
        benefits: {
            title: "Why You Can Trust Me",
            items: {
                direct: {
                    title: "Direct Communication",
                    description: "You talk to me, and I do the work. No managers or middlemen involved."
                },
                transparent: {
                    title: "Fair & Transparent",
                    description: "I provide clear estimates before I start. You'll know exactly what you're paying for."
                },
                respect: {
                    title: "Respect for Your Home",
                    description: "I treat your space like my own. I work cleanly and always tidy up before I leave."
                },
                punctual: {
                    title: "Reliable Scheduling",
                    description: "I value your time. If I say I'll be there at 9 AM, I'll be there at 9 AM."
                }
            }
        },
        // About Section
        about: {
            title: "About Me",
            name: "I'm Gene",
            description: "Hi, I'm Gene, your local handyman. I realized that many homeowners just need someone reliable they can trust with small home tasks. I decided to work as a solo master because I take pride in doing a job correctly from start to finish. When you hire me, you aren't getting a random crew—you're getting my personal dedication to your home. I focus on being punctual, honest, and leaving every job site cleaner than I found it. My goal is to make your life easier by taking care of the small things that matter.",
            skills: "My Commitment",
            skillList: ["Personal Accountability", "Quality Workmanship", "Honest Pricing"]
        },
        // Reviews Section
        reviews: {
            title: "What My Clients Say",
            items: [
                {
                    text: "He arrived exactly on time to mount my 65-inch TV. The work was clean, and he even helped me figure out where to hide the cords. Very professional!",
                    author: "Mark R.",
                    date: "Recent Customer"
                },
                {
                    text: "Assembled a huge IKEA cabinet in less than two hours. It's solid as a rock. It's so hard to find someone this reliable lately.",
                    author: "Sarah T.",
                    date: "Recent Customer"
                },
                {
                    text: "Fixed a leaky faucet and three squeaky doors in one visit. No drama, just good work. Definitely my go-to person now.",
                    author: "James L.",
                    date: "Recent Customer"
                }
            ]
        },
        // Contact Section
        contact: {
            title: "Let's fix it today",
            description: "Tell me what needs to be done, and I'll get back to you with a personal estimate within 30 minutes.",
            details: {
                phone: "Call or Text",
                phoneValue: "+1 (555) 123-4567",
                email: "Email",
                emailValue: "me@yourhandyman.com",
                hours: "Availability",
                hoursValue: "Daily: 8:00 AM - 8:00 PM"
            },
            form: {
                name: "Your Name",
                namePlaceholder: "John Smith",
                phone: "Your Phone",
                phonePlaceholder: "(555) 123-4567",
                service: "What do you need help with?",
                servicePlaceholder: "Select a task",
                serviceOptions: {
                    furniture: "Furniture Assembly",
                    mounting: "TV Mounting",
                    lighting: "Lighting & Fans",
                    repairs: "Minor Repairs",
                    other: "Other"
                },
                message: "A few details",
                messagePlaceholder: "Describe what you need done",
                submit: "Send me a message",
                privacy: "I value your privacy and only use your phone to contact you about the job."
            }
        },
        // Footer
        footer: {
            description: "Your local personal handyman. Quality work, honest talk.",
            services: "Quick Links",
            contact: "Contact",
            hours: "Hours",
            hoursValue: ["Daily: 8:00 AM - 8:00 PM"],
            copyright: "© 2026 Your Handyman. All rights reserved."
        },
        // Notifications
        notifications: {
            success: "Got it! I'll call or text you shortly.",
            error: "Something went wrong. Please try again or text me directly."
        }
    },
    ru: {
        // Navigation
        nav: {
            services: "Услуги",
            benefits: "Почему я",
            about: "Обо мне",
            reviews: "Отзывы",
            contact: "Контакты",
            ctaButton: "Начать"
        },
        // Hero Section
        hero: {
            title: "Надёжный мастер для вашего дома",
            description: "Соберу мебель, повешу телевизор или починю то, что сломалось, пока вы отдыхаете.",
            bullets: [
                "Приезжаю лично и вовремя (никаких посредников)",
                "Свой профессиональный инструмент и порядок после работы",
                "Честные цены без скрытых наценок"
            ],
            ctaButton: "Узнать стоимость",
            servicesButton: "Мои услуги"
        },
        // Services Section
        services: {
            title: "Чем я могу помочь",
            description: "Любая мелкая задача важна. Я делаю работу качественно с первого раза.",
            furniture: {
                title: "Сборка мебели",
                description: "Качественная сборка любой мебели: IKEA, Amazon и другие. Всё будет собрано ровно и аккуратно.",
                items: ["Мебель IKEA и аналоги", "Офисная и домашняя мебель", "Кровати и комоды"]
            },
            mounting: {
                title: "Монтаж ТВ",
                description: "Надёжное крепление телевизора на любую стену. Скрою провода и выставлю идеальный уровень.",
                items: ["Монтаж ТВ до 85\"", "Кабель-менеджмент", "Установка саундбаров"]
            },
            lighting: {
                title: "Свет и вентиляторы",
                description: "Установка светильников, люстр и вентиляторов. Безопасное подключение в любой комнате.",
                items: ["Потолочные вентиляторы", "Замена люстр", "Умные выключатели"]
            },
            repairs: {
                title: "Мелкий ремонт",
                description: "Устранение мелких бытовых проблем без лишней суеты и крупных подрядчиков.",
                items: ["Ремонт стен (гипсокартон)", "Регулировка дверей", "Устранение протечек"]
            }
        },
        // Why Choose Me Section
        benefits: {
            title: "Почему мне доверяют",
            items: {
                direct: {
                    title: "Прямое общение",
                    description: "Вы общаетесь со мной и я же выполняю работу. Никаких менеджеров или посредников."
                },
                transparent: {
                    title: "Честность и прозрачность",
                    description: "Называю стоимость до начала работы. Вы точно знаете, за что платите."
                },
                respect: {
                    title: "Уважение к дому",
                    description: "Отношусь к вашему дому как к своему. Работаю чисто и всегда убираю за собой."
                },
                punctual: {
                    title: "Пунктуальность",
                    description: "Ценю ваше время. Если договорились на 9:00 — я буду у двери ровно в 9:00."
                }
            }
        },
        // About Section
        about: {
            title: "Обо мне",
            name: "Я — Джин",
            description: "Здравствуйте, меня зовут Джин. Я заметил, что многим владельцам домов просто нужен надёжный человек, которому можно доверить мелкие дела по дому. Я работаю один, потому что мне важно лично отвечать за качество каждой закрученной детали. Нанимая меня, вы не получаете случайную бригаду — вы получаете мой личный подход и ответственность. Я всегда прихожу вовремя, работаю честно и оставляю после себя чистоту. Моя задача — упростить вашу жизнь, взяв на себя те мелочи, до которых не доходят руки.",
            skills: "Мой подход",
            skillList: ["Личная ответственность", "Качественная работа", "Честные цены"]
        },
        // Reviews Section
        reviews: {
            title: "Что говорят клиенты",
            items: [
                {
                    text: "Приехал точно в срок, чтобы повесить мой 65-дюймовый ТВ. Всё сделал аккуратно, помог спрятать провода. Очень профессионально!",
                    author: "Марк Р.",
                    date: "Недавний клиент"
                },
                {
                    text: "Собрал огромный шкаф из IKEA меньше чем за два часа. Стоит как влитой. Сейчас трудно найти такого надёжного мастера.",
                    author: "Сара Т.",
                    date: "Недавний клиент"
                },
                {
                    text: "Починил кран и три скрипучие двери за один визит. Никаких лишних слов, просто хорошая работа. Теперь только к нему.",
                    author: "Джеймс Л.",
                    date: "Недавний клиент"
                }
            ]
        },
        // Contact Section
        contact: {
            title: "Помочь с ремонтом?",
            description: "Напишите, что нужно сделать, и я отвечу вам с расчетом цены в течение 30 минут.",
            details: {
                phone: "Звонок или СМС",
                phoneValue: "+1 (555) 123-4567",
                email: "Email",
                emailValue: "me@yourhandyman.com",
                hours: "Доступность",
                hoursValue: "Ежедневно: 8:00 - 20:00"
            },
            form: {
                name: "Ваше имя",
                namePlaceholder: "Иван Иванов",
                phone: "Ваш телефон",
                phonePlaceholder: "(555) 123-4567",
                service: "С чем нужна помощь?",
                servicePlaceholder: "Выберите услугу",
                serviceOptions: {
                    furniture: "Сборка мебели",
                    mounting: "Монтаж ТВ",
                    lighting: "Свет и вентиляторы",
                    repairs: "Мелкий ремонт",
                    other: "Другое"
                },
                message: "Детали задачи",
                messagePlaceholder: "Опишите кратко, что нужно сделать",
                submit: "Отправить сообщение",
                privacy: "Я уважаю вашу конфиденциальность и использую номер только для связи по работе."
            }
        },
        // Footer
        footer: {
            description: "Ваш персональный мастер. Качественная работа, честное общение.",
            services: "Услуги",
            contact: "Контакт",
            hours: "Часы работы",
            hoursValue: ["Ежедневно: 8:00 - 20:00"],
            copyright: "© 2026 Ваш Мастер. Все права защищены."
        },
        // Notifications
        notifications: {
            success: "Получено! Я свяжусь с вами в ближайшее время.",
            error: "Произошла ошибка. Пожалуйста, попробуйте еще раз или напишите мне СМС."
        }
    }
};
