import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeService, setActiveService] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: "CreditCard",
      title: "Пластиковые карты",
      description: "Визитки, дисконтные, VIP-карты с любым дизайном и отделкой",
      features: ["Голографическая печать", "Тиснение", "Магнитная полоса"]
    },
    {
      icon: "BookOpen",
      title: "Полиграфия",
      description: "Визитки, буклеты, каталоги любой сложности",
      features: ["Офсетная печать", "Цифровая печать", "Постпечатная обработка"]
    },
    {
      icon: "Package",
      title: "Упаковка",
      description: "Коробки, этикетки, брендированная упаковка",
      features: ["Дизайн-макет", "Вырубка", "Ламинация"]
    },
    {
      icon: "Sparkles",
      title: "Эксклюзив",
      description: "Нестандартные решения и спецэффекты",
      features: ["3D-эффект", "UV-лак", "Металлизация"]
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/fb734a15-1104-41f4-831c-9c5b09e48cd6/files/4209dde9-c1cd-4f82-bfe8-2c5ab3d30df0.jpg",
      title: "Премиум визитки",
      category: "Пластиковые карты"
    },
    {
      image: "https://cdn.poehali.dev/projects/fb734a15-1104-41f4-831c-9c5b09e48cd6/files/94d110bc-6d7f-42d7-963a-98ff24f10017.jpg",
      title: "VIP-карты",
      category: "Эксклюзив"
    },
    {
      image: "https://cdn.poehali.dev/projects/fb734a15-1104-41f4-831c-9c5b09e48cd6/files/85ee17a0-07dd-4e52-b972-d01cfe198b35.jpg",
      title: "Подарочные карты",
      category: "Дизайн"
    }
  ];

  const testimonials = [
    {
      name: "Александр Петров",
      company: "Tech Solutions",
      text: "Заказывали пластиковые визитки с голографией — результат превзошёл ожидания! Клиенты в восторге.",
      rating: 5
    },
    {
      name: "Мария Соколова",
      company: "Beauty Studio",
      text: "Сделали дисконтные карты для салона красоты. Качество печати на высоте, сроки соблюдены.",
      rating: 5
    },
    {
      name: "Дмитрий Иванов",
      company: "Retail Group",
      text: "Работаем с этой типографией постоянно. Всегда креативный подход и отличный результат.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b border-border/40">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={20} />
            </div>
            <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ПринтМастер
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-2">
            <Button className="hidden sm:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Заказать
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-primary transition-colors">Услуги</a>
                  <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-primary transition-colors">Портфолио</a>
                  <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-primary transition-colors">Отзывы</a>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-primary transition-colors">Контакты</a>
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full mt-4">
                    Заказать
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs md:text-sm">
                Полиграфия нового поколения
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                Пластиковые карты{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  с вашим дизайном
                </span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground">
                Создаём визитки, дисконтные и VIP-карты с креативными эффектами: 
                голография, тиснение, металлизация
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base md:text-lg w-full sm:w-auto">
                  <Icon name="Send" className="mr-2" size={18} />
                  Получить расчёт
                </Button>
                <Button size="lg" variant="outline" className="text-base md:text-lg w-full sm:w-auto">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть примеры
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 md:gap-8 pt-4">
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-secondary">24ч</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Срок печати</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-accent">100%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Качество</div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-float"></div>
              <div className="relative grid grid-cols-2 gap-3 md:gap-4">
                <Card className="overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-scale-in">
                  <img 
                    src="https://cdn.poehali.dev/projects/fb734a15-1104-41f4-831c-9c5b09e48cd6/files/4209dde9-c1cd-4f82-bfe8-2c5ab3d30df0.jpg"
                    alt="Пластиковая карта"
                    className="w-full h-32 sm:h-40 md:h-48 object-cover"
                  />
                </Card>
                <Card className="overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-scale-in mt-6 md:mt-8">
                  <img 
                    src="https://cdn.poehali.dev/projects/fb734a15-1104-41f4-831c-9c5b09e48cd6/files/94d110bc-6d7f-42d7-963a-98ff24f10017.jpg"
                    alt="VIP карта"
                    className="w-full h-32 sm:h-40 md:h-48 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <Badge className="mb-3 md:mb-4 text-xs md:text-sm">Что мы делаем</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Наши <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">услуги</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              От классической полиграфии до эксклюзивных решений с спецэффектами
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  activeService === index ? 'ring-2 ring-primary shadow-xl' : ''
                }`}
                onClick={() => setActiveService(index)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <Badge className="mb-3 md:mb-4 text-xs md:text-sm">Наши работы</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Портфолио</span> проектов
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Примеры выполненных пластиковых карт и других материалов
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {portfolio.map((item, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button variant="secondary" size="sm">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4 md:p-6">
                  <Badge className="mb-2 text-xs">{item.category}</Badge>
                  <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Смотреть все работы
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <Badge className="mb-3 md:mb-4 text-xs md:text-sm">Отзывы клиентов</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Что говорят <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">о нас</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 md:p-12 bg-gradient-to-br from-primary to-secondary text-white space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold">Готовы начать?</h2>
                <p className="text-base md:text-lg opacity-90">
                  Свяжитесь с нами для бесплатного расчёта и консультации по вашему проекту
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <Icon name="Phone" size={24} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs md:text-sm opacity-80">Телефон</div>
                      <div className="font-bold text-base md:text-lg">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <Icon name="Mail" size={24} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs md:text-sm opacity-80">Email</div>
                      <div className="font-bold text-base md:text-lg break-all">info@printmaster.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <Icon name="MapPin" size={24} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs md:text-sm opacity-80">Адрес</div>
                      <div className="font-bold text-base md:text-lg">Москва, ул. Примерная, 123</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-12 space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold">Отправьте заявку</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Что нужно изготовить?</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all min-h-[120px]"
                      placeholder="Опишите ваш проект..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 md:py-12 px-4 border-t bg-muted/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={20} />
              </div>
              <span className="text-lg md:text-xl font-bold">ПринтМастер</span>
            </div>
            <div className="text-sm md:text-base text-muted-foreground text-center">
              © 2024 ПринтМастер. Полиграфия с душой.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;