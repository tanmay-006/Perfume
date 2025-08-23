'use client';

import Link from 'next/link';

interface PromoCardProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  variant: 'cream' | 'goldgreen' | 'navy';
  circlePosition: 'right-large' | 'right-small' | 'left-medium';
}

interface PromoSectionProps {
  cards: PromoCardProps[];
}

export default function PromoSection({ cards }: PromoSectionProps) {
  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className={`promo-card promo-card--${card.variant}`}>
              <div className="relative z-10">
                <h3 className={`promo-card-title ${card.variant !== 'cream' ? 'light' : ''}`}>
                  {card.title.split('<br />').map((part, i) => (
                    <span key={i}>
                      {part}
                      {i < card.title.split('<br />').length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                {card.subtitle && (
                  <p className={`promo-card-text ${card.variant !== 'cream' ? 'light' : ''}`}>{card.subtitle}</p>
                )}
                <button className="promo-card-btn promo-card-btn dark-text">
                  <Link href={card.buttonLink}>{card.buttonText}</Link>
                </button>
              </div>
              <div className={`promo-card-circle ${card.circlePosition} ${card.variant === 'cream' ? 'bg-gold-medium' : card.variant === 'goldgreen' ? 'bg-gold-light' : 'bg-gold-medium'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
