import React from "react";
import styles from "./Contact.module.css"


const Contact = ({ lang = 'es' }) => {
    const copy = {
        es: {
            title: 'Contacto',
            email: 'Email',
            phone: 'Teléfono',
            location: 'Ubicación',
            linkedin: 'LinkedIn',
            github: 'GitHub',
            portfolio: 'Portfolio',
            locationValue: 'Rosario, Santa Fe, Argentina',
        },
        en: {
            title: 'Contact',
            email: 'Email',
            phone: 'Phone',
            location: 'Location',
            linkedin: 'LinkedIn',
            github: 'GitHub',
            portfolio: 'Portfolio',
            locationValue: 'Rosario, Santa Fe, Argentina',
        },
    };

    const contactItems = [
        {
            label: copy[lang].email,
            value: 'ivanjunoy@gmail.com',
            href: 'mailto:ivanjunoy@gmail.com',
        },
        {
            label: copy[lang].phone,
            value: '+54 341 6752-684',
            href: 'tel:+543416752684',
        },
        {
            label: copy[lang].location,
            value: copy[lang].locationValue,
        },
        {
            label: copy[lang].linkedin,
            value: 'linkedin.com/in/ivanjunoy',
            href: 'https://www.linkedin.com/in/ivanjunoy/',
        },
        {
            label: copy[lang].github,
            value: 'github.com/ivanjunoy',
            href: 'https://github.com/ivanjunoy',
        },
        {
            label: copy[lang].portfolio,
            value: 'ivanjunoy.site',
            href: 'http://www.ivanjunoy.site/',
        },
    ];

    return (
        <div>
            <h2>{copy[lang].title}</h2>
            <div className={styles.contactContainer}>
                {contactItems.map(({ label, value, href }) => {
                    const isExternalLink = href?.startsWith('http');
                    const isPhonePlaceholder = href === 'tel:+543416752684';

                    return (
                        <div className={styles.contactItem} key={label}>
                            <span className={styles.contactLabel}>{label}</span>
                            {href && !isPhonePlaceholder ? (
                                <a
                                    href={href}
                                    target={isExternalLink ? '_blank' : undefined}
                                    rel={isExternalLink ? 'noopener noreferrer' : undefined}
                                >
                                    {value}
                                </a>
                            ) : (
                                <span>{value}</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Contact;
