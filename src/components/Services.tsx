import React, { useRef, useEffect } from 'react';
import { Calculator, Cpu, Database, BarChart3, Cloud, Zap, Server, Code, Bot, Shield, Smartphone, Workflow } from 'lucide-react';
const serviceItems = [{
  icon: <Database className="w-6 h-6" />,
  title: "Bookkeeping",
  description: "Real-time financial data with secure cloud storage and 24/7 access from any device.",
  color: "bg-purple-50 text-purple-600"
}, {
  icon: <Bot className="w-6 h-6" />,
  title: "Financial Operations",
  description: "Machine learning algorithms that automatically categorize and code transactions with 99.5% accuracy.",
  color: "bg-indigo-50 text-indigo-600"
}, {
  icon: <Calculator className="w-6 h-6" />,
  title: "Accounting",
  description: "Advanced algorithms forecast tax liabilities and identify optimization opportunities year-round.",
  color: "bg-amber-50 text-amber-600"
}, {
  icon: <BarChart3 className="w-6 h-6" />,
  title: "Fractional Finance",
  description: "Interactive dashboards with customizable KPIs and metrics updated in real-time.",
  color: "bg-emerald-50 text-emerald-600"
}, {
  icon: <Workflow className="w-6 h-6" />,
  title: "Advisory",
  description: "Custom automation for accounts payable, receivable, and payroll with digital approval systems.",
  color: "bg-blue-50 text-blue-600"
}, {
  icon: <Smartphone className="w-6 h-6" />,
  title: "Mobile Financial Suite",
  description: "Manage your finances on-the-go with our native mobile apps and instant notifications.",
  color: "bg-cyan-50 text-cyan-600"
}];
const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);
  return <section id="services" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-b from-white to-purple-50/30"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16 opacity-0" ref={el => itemsRef.current[0] = el}>
          <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 font-medium mb-4 flex items-center gap-2 justify-center">
            <Cpu size={14} className="text-purple-600" />
            <span>Tech-Driven Solutions</span>
          </div>
          <h2 className="heading-lg mb-6">Next-Generation Financial Services</h2>
          <p className="text-foreground/80">Our service approach combines human expertise with cutting-edge technology to deliver flexible, cost-effective solutions tailored precisely for your organization.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => <div key={service.title} className="tech-glass rounded-xl p-6 border border-white/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 tech-hover" ref={el => itemsRef.current[index + 1] = el} style={{
          animationDelay: `${(index + 1) * 100}ms`
        }}>
              <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;