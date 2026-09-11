import { Blog } from '../models/blog.model.js';

export const seedInitialBlogs = async () => {
  try {
    const count = await Blog.countDocuments();
    if (count > 0) {
      return;
    }

    console.log('🌱 [Database Seed]: Seeding default Chambers Legal Insights into MongoDB...');

    const defaultBlogs = [
      {
        title: 'Article 32 & 226: The Strategic Anatomy of Extraordinary Writ Jurisdiction Before the Supreme Court of India',
        slug: 'supreme-court-article-32-writ-jurisdiction-fundamental-rights',
        category: 'Constitutional Law',
        excerpt:
          'A comprehensive doctrinal analysis on invoking prerogative writs (Habeas Corpus, Mandamus, Quo Warranto, and Certiorari) when fundamental liberties, arbitrary executive action, or statutory ultra vires demand emergent judicial intervention.',
        banner: {
          url: '/court-supreme-facade.jpg',
          publicId: 'court-supreme-facade',
        },
        author: 'Advocate Shashi Shekhar — Chambers Research Cell',
        tags: ['Supreme Court', 'Article 32', 'Writ Jurisdiction', 'Fundamental Rights', 'High Court of Delhi'],
        views: 1420,
        status: 'published',
        content: `## The Sovereign Bastion of Fundamental Rights

Dr. B.R. Ambedkar famously designated Article 32 as the *"heart and soul of the Constitution"*. In high-stakes appellate jurisprudence, writ petitions under Article 32 before the Supreme Court of India and Article 226 before the High Courts constitute the most potent defensive shields against state arbitrariness, regulatory overreach, and statutory transgressions.

While High Courts under Article 226 exercise an even wider jurisdictional scope—encompassing fundamental rights as well as "any other purpose"—the Supreme Court's mandate under Article 32 is in itself a guaranteed fundamental right.

---

### The Five Prerogative Writs and Modern Practice

1. **Writ of Habeas Corpus**: Immediate safeguard against illegal detentions, preventive custody without lawful mandate, and procedural non-compliance under special criminal statutes.
2. **Writ of Mandamus**: Compelling a public authority, statutory tribunal, or regulator to perform a statutory duty owed to the petitioner that has been unlawfully abdicated.
3. **Writ of Certiorari**: Quashing orders of inferior tribunals or quasi-judicial bodies passed in excess of jurisdiction, violation of natural justice (*audi alteram partem*), or error apparent on the face of the record.
4. **Writ of Prohibition**: Preventive intervention restraining lower forums from continuing proceedings without competent jurisdiction.
5. **Writ of Quo Warranto**: Challenging the unlawful usurpation of a public constitutional office by an ineligible appointee.

---

### Key Takeaways for Senior Counsel Briefings

> **The Threshold of Alternative Remedy**: The doctrine of alternative statutory remedy is a rule of judicial discretion, not a jurisdictional bar. Where there is a flagrant breach of natural justice, complete lack of jurisdiction, or imminent threat to life and liberty under Article 21, writ maintainability remains unimpeachable.`,
      },
      {
        title: 'Section 9 of the Arbitration Act: Securing Immediate Pre-Tribunal Protective Injunctions',
        slug: 'commercial-courts-act-urgent-interim-relief-arbitration',
        category: 'Commercial Arbitration',
        excerpt:
          'How senior commercial litigators navigate Section 9 of the Arbitration and Conciliation Act 1996 alongside the Commercial Courts Act 2015 to protect subject matter, secure bank guarantees, and freeze assets prior to tribunal constitution.',
        banner: {
          url: '/blog-dispute.jpg',
          publicId: 'blog-dispute',
        },
        author: 'Commercial Litigation Division',
        tags: ['Arbitration', 'Section 9', 'Commercial Courts', 'Injunctions', 'Interim Relief'],
        views: 980,
        status: 'published',
        content: `## Securing the Res: The Pre-Tribunal Window

Commercial disputes rarely afford parties the luxury of time. Between the genesis of an arbitrable dispute and the formal constitution of an arbitral tribunal, assets can be dissipated, performance bank guarantees encashed, and multi-crore infrastructure works terminated unilaterally.

Under Section 9 of the Arbitration and Conciliation Act 1996, the commercial court exercises broad supervisory powers to grant interim measures of protection:

- Preservation, interim custody, or sale of goods subject to dispute.
- Securing the amount in dispute through deposit or bank guarantees.
- Injunctions restraining wrongful termination or encashment of unconditional guarantees on grounds of established fraud or special equities.

---

### The Commercial Courts Act 2015 Strictures

With strict timelines under the Commercial Courts Act, pleadings must be razor-sharp. Pre-institution mediation requirements under Section 12A do not apply when urgent interim relief is bona fide contemplated.`,
      },
      {
        title: 'PMLA Jurisprudence 2026: Constitutional Boundaries of Section 50 Summons & Preventive Quashing',
        slug: 'pmla-enforcement-directorate-summons-quashing-high-court',
        category: 'White Collar & Criminal Defense',
        excerpt:
          'Strategic insights into the Prevention of Money Laundering Act (PMLA), exploring Section 50 summons protections, ECIR disclosure rights, twin conditions of bail under Section 45, and High Court quashing mechanisms under Section 482 CrPC.',
        banner: {
          url: '/blog-policy.jpg',
          publicId: 'blog-policy',
        },
        author: 'Specialist Appellate Counsel',
        tags: ['PMLA', 'Enforcement Directorate', 'Section 482', 'White Collar Defense', 'Supreme Court'],
        views: 2150,
        status: 'published',
        content: `## The Expansion of Special Financial Offence Statutes

The Prevention of Money Laundering Act, 2002 (PMLA) has emerged as one of the most rigorously contested statutes in the Supreme Court of India. With stringency around Section 45 bail conditions and the evidentiary admissibility of Section 50 statements, immediate legal counsel at the inception stage is pivotal.

### Strategic Protocol When Summons Arrive

1. **Document Verification**: Verifying whether a predicate scheduled offence FIR has been registered and whether the predicate proceedings have been stayed or quashed.
2. **Right against Self-Incrimination**: Balancing statutory obligations with constitutional protections enshrined under Article 20(3).
3. **Approaching High Court under Article 226 / Section 482**: Invoking judicial oversight where investigations transgress the legitimate scope of proceeds of crime.`,
      },
      {
        title: 'Section 7 & 9 IBC Tactics: Preserving Creditor Seniority and Navigating Resolution Delays',
        slug: 'insolvency-bankruptcy-code-nclat-resolution-plan-litigation',
        category: 'Corporate Insolvency',
        excerpt:
          'Critical litigation protocols before the NCLT and NCLAT in corporate insolvency resolution processes, examining commercial wisdom of the CoC, debt threshold requirements, and resolution applicant litigation.',
        banner: {
          url: '/court-supreme-steps.jpg',
          publicId: 'court-supreme-steps',
        },
        author: 'Insolvency & Corporate Practice Cell',
        tags: ['IBC', 'NCLT', 'NCLAT', 'Corporate Insolvency', 'Debt Resolution'],
        views: 840,
        status: 'published',
        content: `## Time-Bound Resolution vs. Prolonged Litigation

The Insolvency and Bankruptcy Code (IBC) was enacted to ensure prompt revival of distressed corporate debtors while prioritizing creditor recoveries. However, appellate interventions before the National Company Law Appellate Tribunal (NCLAT) and the Supreme Court frequently hinge upon:

- Admissibility of pre-existing disputes under Section 9 petitions by operational creditors.
- Non-adherence to the Model Timeline and statutory moratorium protections under Section 14.
- Priority treatment of financial creditors vis-à-vis statutory dues under Section 53 waterfall mechanisms.`,
      },
      {
        title: 'The Doctrine of Legitimate Expectation in Public Service & Tender Disputes',
        slug: 'administrative-tribunals-senior-civil-service-disputes',
        category: 'Administrative Law',
        excerpt:
          'Examining how administrative jurisprudence balances executive prerogative with the legitimate expectations of citizens and corporate tenderers under the scanner of Wednesbury unreasonableness.',
        banner: {
          url: '/court-delhi-high.jpg',
          publicId: 'court-delhi-high',
        },
        author: 'Administrative Law Division',
        tags: ['Administrative Law', 'Tender Disputes', 'CAT', 'Natural Justice'],
        views: 620,
        status: 'published',
        content: `## Judicial Review of Executive Discretion

Administrative law does not permit courts to sit as appellate authorities over executive decisions; rather, it governs the decision-making process itself.

When state agencies alter tender conditions retrospectively or disregard settled seniority policies, affected parties may invoke the Doctrine of Legitimate Expectation and the test of Proportionality to secure judicial relief.`,
      },
      {
        title: 'Cross-Border Mergers & Antitrust Scrutiny: Preparing for CCI Regulatory Filings in India',
        slug: 'competition-commission-antitrust-investigations-delhi-high-court',
        category: 'Antitrust & Regulatory',
        excerpt:
          'Evaluating the Competition Act amendment regulations, deal-value thresholds, and green channel approvals for global corporate reorganizations.',
        banner: {
          url: '/chambers-constitution-depth.jpg',
          publicId: 'chambers-constitution-depth',
        },
        author: 'Corporate Advisory Group',
        tags: ['CCI', 'Antitrust', 'Mergers & Acquisitions', 'Regulatory Compliance'],
        views: 750,
        status: 'published',
        content: `## The New Deal-Value Threshold Regime

With recent amendments to the Competition Act, cross-border acquisitions where the target has substantial business operations in India now require prior notification to the Competition Commission of India (CCI), even if traditional asset or turnover thresholds are not triggered.`,
      },
    ];

    await Blog.insertMany(defaultBlogs);
    console.log('✅ [Database Seed]: 6 default legal insights seeded successfully into MongoDB!');
  } catch (err) {
    console.warn('⚠️ [Database Seed Notice]:', err.message);
  }
};
