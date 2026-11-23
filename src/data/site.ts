// Single source of truth for the whole site. Every hub, service, product,
// area and service+area page renders from this file.

export const SITE = {
  name: 'Postal Systems',
  tagline: 'Supply | Installation | Repair',
  phone: '(619) 461-4787',
  phoneHref: 'tel:+16194614787',
  email: 'info@postalsystemspro.com',
  license: '904106',
  base: 'San Diego, California',
  url: 'https://postalsystemspro.com',
  designer: { name: 'Lilos Growth', url: 'https://lilosgrowth.com' },
};

export const STATS = [
  { value: '20+', label: 'Years of experience' },
  { value: '500+', label: 'Projects completed' },
  { value: '100%', label: 'USPS sign-off' },
  { value: '30+', label: 'Cities served' },
];

export const IMAGES = {
  hero: '/images/commercial-mailboxes-san-diego-hero-1200.webp',
  oceanside: '/images/commercial-mailbox-installation-oceanside.webp',
  vista: '/images/ada-compliant-mailbox-installation-vista-ca.webp',
  sanMarcos: '/images/ada-compliant-mailbox-installation-san-marcos-ca.webp',
};

export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  h1: string;
  kicker: string;
  intro: string;
  includes: string[];
  bestFor: string;
  image: string;
  imageAlt: string;
  faqs: FAQ[];
  productSlugs: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'commercial-mailbox-installation',
    name: 'Commercial Mailbox Installation',
    short: 'USPS-approved mailbox systems installed, anchored and registered with the postal service.',
    h1: 'Commercial Mailbox Installation',
    kicker: 'Turnkey, USPS-approved installs',
    intro:
      'We supply and install USPS-approved mailbox systems for apartments, HOAs, offices and commercial properties, then coordinate with USPS so delivery starts without delays. One vendor handles the right hardware, the pad and anchors, tenant notice and the postal handoff.',
    includes: [
      'Site visit and layout planning',
      'USPS-approved mailbox hardware supplied',
      'Concrete pads, anchors and mounting',
      'Tenant notice and key delivery',
      'USPS coordination and inspection',
    ],
    bestFor: 'New construction, property upgrades and any site where the existing mailboxes are not USPS-compliant.',
    image: IMAGES.oceanside,
    imageAlt: 'Commercial cluster mailbox installation by Postal Systems',
    productSlugs: ['cluster-box-units', '4c-mailboxes', 'parcel-lockers'],
    faqs: [
      { q: 'Do you handle USPS approval?', a: 'Yes. We are a USPS-approved vendor and we coordinate with the postal service so the installation is inspected and delivery can begin.' },
      { q: 'How long does an installation take?', a: 'A standard CBU or 4C install is typically completed in one to two days once materials are on site. Larger projects typically take two to three days.' },
      { q: 'Do you supply the mailboxes as well as install them?', a: 'Yes. We supply the hardware, install it and handle USPS coordination, so you deal with a single vendor from quote to handover.' },
    ],
  },
  {
    slug: 'cbu-installation',
    name: 'CBU Installation',
    short: 'Cluster Box Unit (CBU) supply and installation on properly poured pads.',
    h1: 'Cluster Box Unit (CBU) Installation',
    kicker: 'Cluster box units, done right',
    intro:
      'Cluster Box Units are the standard for many residential communities and multi-family properties. We supply USPS-approved CBUs to the required site specs, set them on concrete pads with the correct anchors, and take the project through USPS approval and sign-off.',
    includes: [
      'USPS-approved CBU models matched to your unit count',
      'Concrete pad and anchor installation',
      'Parcel compartments sized to your property',
      'USPS approval and sign-off',
      'Numbering, keys and handover',
    ],
    bestFor: 'Apartment communities, HOAs, townhome developments and new residential construction.',
    image: IMAGES.hero,
    imageAlt: 'Row of cluster box units installed on concrete pads',
    productSlugs: ['cluster-box-units', 'parcel-lockers'],
    faqs: [
      { q: 'What is a CBU?', a: 'A Cluster Box Unit is a freestanding USPS-approved mailbox that groups many tenant mail compartments and parcel compartments into one weather-resistant unit.' },
      { q: 'Can you replace damaged or vandalized CBUs?', a: 'Yes. We replace damaged units and can change locks so tenant access is secure again.' },
      { q: 'Can you match the number of doors to my property?', a: 'Yes. We size the CBU layout to your number of addresses and plan parcel compartments alongside the mail doors.' },
    ],
  },
  {
    slug: '4c-wall-mounted-mailboxes',
    name: '4C Wall-Mounted Mailboxes',
    short: '4C horizontal mailboxes for lobbies, mailrooms and recessed installations.',
    h1: '4C Wall-Mounted Mailbox Installation',
    kicker: 'Indoor and recessed mailrooms',
    intro:
      'For apartment lobbies, mailrooms and multi-unit buildings, 4C wall-mounted mailboxes keep mail secure and organized. We install surface-mounted and recessed 4C systems that meet USPS requirements, including height and clearance for accessible reach.',
    includes: [
      'Surface-mount and recessed 4C installs',
      'Accessible height and clearance planning',
      'Lobby and package room layouts',
      'Retrofits for existing walls',
      'USPS approval and handover',
    ],
    bestFor: 'Multi-unit buildings with a lobby or mailroom, and retrofits replacing outdated wall units.',
    image: IMAGES.sanMarcos,
    imageAlt: 'Mailbox installation by Postal Systems',
    productSlugs: ['4c-mailboxes', 'letter-lockers'],
    faqs: [
      { q: 'What is a 4C mailbox?', a: 'A 4C mailbox is a USPS-approved horizontal multi-unit mailbox designed for indoor and wall-mounted use in apartment and commercial buildings.' },
      { q: 'Can 4C mailboxes be recessed into the wall?', a: 'Yes. We install both surface-mounted and recessed 4C systems depending on your wall and layout.' },
      { q: 'Can you retrofit an older mailroom?', a: 'Yes. We remove outdated units and install compliant replacements, coordinating with USPS where required.' },
    ],
  },
  {
    slug: 'parcel-lockers',
    name: 'Parcel Locker Installation',
    short: 'USPS-approved parcel lockers and package rooms for multi-unit properties.',
    h1: 'Parcel Locker Installation',
    kicker: 'Package security for residents',
    intro:
      'Package theft and overflow are a daily problem for multi-unit properties. We install USPS-approved parcel lockers and package room systems so carriers can deliver securely and residents can pick up on their own schedule.',
    includes: [
      'USPS-approved parcel locker systems',
      'Package room and lobby layouts',
      'Indoor and outdoor configurations',
      'Anchoring and mounting',
      'USPS coordination included',
    ],
    bestFor: 'Apartment communities, mixed-use buildings and any property seeing more parcels than its mailboxes can hold.',
    image: IMAGES.vista,
    imageAlt: 'Parcel and mailbox installation by Postal Systems',
    productSlugs: ['parcel-lockers', 'cluster-box-units'],
    faqs: [
      { q: 'Are parcel lockers USPS-approved?', a: 'We supply USPS-approved parcel lockers and coordinate approval with the postal service as part of the project.' },
      { q: 'Can parcel lockers be added to an existing mailbox setup?', a: 'In many cases yes. We assess the site during the visit and recommend the right configuration.' },
      { q: 'Indoor or outdoor?', a: 'We install both. The right choice depends on your building layout and how carriers access the property.' },
    ],
  },
  {
    slug: 'repairs-lock-changes',
    name: 'Repairs & Lock Changes',
    short: 'Mailbox repair, replacement, re-keying and vandalism recovery.',
    h1: 'Mailbox Repair & Lock Changes',
    kicker: 'Fast fixes, secure again',
    intro:
      'Broken doors, damaged locks, vandalism and lost keys all put tenants’ mail at risk. We repair and replace components, re-key and change locks, and restore secure access to existing mailbox systems at commercial and residential properties.',
    includes: [
      'Lock changes and re-keying',
      'Key support for properties with 8+ doors',
      'Vandalism and damage replacement',
      'Door, hinge and component repair',
      'Tenant access restored',
    ],
    bestFor: 'Properties with damaged, vandalized or compromised mailboxes, or after a tenant turnover or key loss.',
    image: IMAGES.oceanside,
    imageAlt: 'Repaired and secured cluster mailboxes',
    productSlugs: ['cluster-box-units', '4c-mailboxes'],
    faqs: [
      { q: 'Can you re-key an entire mailbox system?', a: 'Yes. We change and re-key locks across your mailbox system and deliver new keys.' },
      { q: 'What if the mailboxes were vandalized?', a: 'We replace damaged units or components and change the locks so access is secure again.' },
      { q: 'Do you repair or replace?', a: 'We assess both. If a repair will not hold up, we will tell you and quote a replacement.' },
    ],
  },
  {
    slug: 'ada-compliant-installs',
    name: 'ADA-Compliant Installs',
    short: 'Accessible mailbox layouts with documented height, reach and clearance compliance.',
    h1: 'ADA-Compliant Mailbox Installation',
    kicker: 'Accessible by design',
    intro:
      'Accessible mailbox layouts have to get height, reach, approach and clearance right. We plan and install ADA-compliant mailbox and parcel locker systems for new construction and retrofits, with documented compliance for your records.',
    includes: [
      'ADA height, reach and approach planning',
      'Clearance verification at install',
      'Documented compliance',
      'Retrofits and new construction',
      'USPS coordination included',
    ],
    bestFor: 'New construction, remodels and any property that needs accessible mail and package access.',
    image: IMAGES.vista,
    imageAlt: 'ADA-compliant mailbox installation',
    productSlugs: ['cluster-box-units', '4c-mailboxes', 'parcel-lockers'],
    faqs: [
      { q: 'Do you document ADA compliance?', a: 'Yes. We provide documented compliance covering height, reach, approach and clearance.' },
      { q: 'Can existing mailboxes be made accessible?', a: 'Often yes. We evaluate your site and recommend a retrofit layout that meets the requirements.' },
      { q: 'Is this included in new installations?', a: 'We plan accessible layouts as part of the install when your project requires them.' },
    ],
  },
];

export type Product = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  features: string[];
  useCases: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: 'cluster-box-units',
    name: 'Cluster Box Units (CBU)',
    short: 'Freestanding USPS-approved units for communities and multi-family sites.',
    intro: 'Cluster Box Units group tenant mail doors and parcel compartments into one weather-resistant, pedestal-mounted unit. We supply USPS-approved CBUs sized to your unit count and install them on concrete pads with anchors.',
    features: ['USPS-approved', 'Pedestal and pad mounting', 'Mail and parcel compartments', 'High-security locking hardware', 'Custom door counts'],
    useCases: 'Apartment communities, HOAs, townhomes and new residential developments.',
    image: IMAGES.hero,
  },
  {
    slug: '4c-mailboxes',
    name: '4C Multi-Unit Mailboxes',
    short: 'Horizontal wall-mount and recessed mailboxes for lobbies and mailrooms.',
    intro: '4C horizontal mailboxes are the standard for indoor and wall-mounted multi-unit mail. We supply and install surface-mount and recessed 4C systems that meet USPS requirements.',
    features: ['USPS-approved 4C design', 'Surface-mount and recessed', 'Accessible reach options', 'Secure tenant doors', 'Lobby and mailroom layouts'],
    useCases: 'Apartment lobbies, mailrooms, office buildings and mixed-use properties.',
    image: IMAGES.sanMarcos,
  },
  {
    slug: 'parcel-lockers',
    name: 'Parcel Lockers',
    short: 'Secure package delivery for residents, indoors or outdoors.',
    intro: 'Parcel lockers give carriers a secure place to deliver packages and residents a way to collect them on their schedule. We supply USPS-approved parcel locker systems and install them to your layout.',
    features: ['USPS-approved', 'Indoor and outdoor options', 'Package room systems', 'Reduces package theft and overflow', 'Scalable to your property'],
    useCases: 'Apartment communities, mixed-use buildings and high-parcel properties.',
    image: IMAGES.vista,
  },
  {
    slug: 'letter-lockers',
    name: 'Letter Lockers',
    short: 'Compact secure letter lockers for commercial and multi-unit use.',
    intro: 'Letter lockers provide secure, compact mail storage for commercial and multi-unit properties. We supply and install letter locker systems and coordinate the postal registration.',
    features: ['Secure locking doors', 'Compact footprint', 'Commercial and residential use', 'Custom configurations', 'Professional installation'],
    useCases: 'Office buildings, small multi-unit properties and shared mail areas.',
    image: IMAGES.oceanside,
  },
  {
    slug: 'tub-lockers',
    name: 'Tub Lockers',
    short: 'Lockers sized for larger mail and package volume.',
    intro: 'Tub lockers handle larger mail volumes and oversized items where standard mail doors fall short. We supply and install tub locker systems for commercial and residential sites.',
    features: ['Higher capacity compartments', 'Secure locking hardware', 'Suited to commercial mail volume', 'Professional installation', 'USPS coordination'],
    useCases: 'Commercial buildings, shared offices and properties with high mail volume.',
    image: IMAGES.oceanside,
  },
  {
    slug: 'residential-locking-mailboxes',
    name: 'Residential Locking Mailboxes',
    short: 'Secure locking mailboxes for homes and small residential properties.',
    intro: 'For single-family homes and small residential properties, we supply and install locking mailboxes that protect against tampering and unauthorized access.',
    features: ['Locking, tamper-resistant design', 'Single-family and small multi-unit', 'Professional installation', 'Replacements and upgrades', 'USPS-compliant setup'],
    useCases: 'Single-family homes, small residential properties and replacements.',
    image: IMAGES.sanMarcos,
  },
];

export type Area = {
  slug: string;
  name: string;
  type: 'city' | 'county';
  region: string;
  nearby: string[]; // slugs
  project?: { title: string; note: string };
  deep?: boolean; // gets service+area pages
};

export const AREAS: Area[] = [
  { slug: 'san-diego', name: 'San Diego', type: 'city', region: 'San Diego County', nearby: ['chula-vista', 'el-cajon', 'poway'], deep: true },
  { slug: 'chula-vista', name: 'Chula Vista', type: 'city', region: 'San Diego County', nearby: ['san-diego', 'el-cajon'], project: { title: '4C Upgrade, Chula Vista', note: 'New wall-mounted 4C units installed for a Chula Vista property.' }, deep: true },
  { slug: 'oceanside', name: 'Oceanside', type: 'city', region: 'San Diego County', nearby: ['carlsbad', 'vista', 'san-marcos'], deep: true },
  { slug: 'carlsbad', name: 'Carlsbad', type: 'city', region: 'San Diego County', nearby: ['oceanside', 'encinitas', 'vista'] },
  { slug: 'encinitas', name: 'Encinitas', type: 'city', region: 'San Diego County', nearby: ['carlsbad', 'san-marcos', 'san-diego'] },
  { slug: 'escondido', name: 'Escondido', type: 'city', region: 'San Diego County', nearby: ['san-marcos', 'poway', 'vista'] },
  { slug: 'vista', name: 'Vista', type: 'city', region: 'San Diego County', nearby: ['oceanside', 'san-marcos', 'carlsbad'], project: { title: 'ADA-Compliant Install, Vista', note: 'Accessible mailbox installation completed in Vista, CA.' } },
  { slug: 'san-marcos', name: 'San Marcos', type: 'city', region: 'San Diego County', nearby: ['vista', 'escondido', 'carlsbad'], project: { title: 'CBU Installation, San Marcos', note: 'Turnkey CBU replacement completed in San Marcos, CA.' } },
  { slug: 'el-cajon', name: 'El Cajon', type: 'city', region: 'San Diego County', nearby: ['san-diego', 'poway', 'chula-vista'] },
  { slug: 'poway', name: 'Poway', type: 'city', region: 'San Diego County', nearby: ['escondido', 'san-diego', 'el-cajon'] },
  { slug: 'temecula', name: 'Temecula', type: 'city', region: 'Riverside County', nearby: ['riverside-county', 'escondido'], project: { title: 'Vandalism Replacement, Temecula', note: 'Secure replacement units and lock changes in Temecula, CA.' } },
  { slug: 'riverside-county', name: 'Riverside County', type: 'county', region: 'Southern California', nearby: ['temecula', 'orange-county'] },
  { slug: 'orange-county', name: 'Orange County', type: 'county', region: 'Southern California', nearby: ['riverside-county', 'oceanside'] },
];

export const AUDIENCES = [
  { name: 'HOAs & Property Managers', text: 'Turnkey installs with USPS coordination, tenant notice and key handover so boards and managers get one point of contact.', services: ['commercial-mailbox-installation', 'repairs-lock-changes'] },
  { name: 'Apartments & Multi-Family', text: 'New and replacement mailbox systems, parcel lockers and lock changes for apartment communities of any size.', services: ['cbu-installation', 'parcel-lockers'] },
  { name: 'Builders & General Contractors', text: 'Mailbox layouts and installs coordinated with your construction schedule and USPS requirements.', services: ['cbu-installation', '4c-wall-mounted-mailboxes'] },
  { name: 'Commercial & Industrial Parks', text: 'Secure, compliant mailbox systems for offices, warehouses and business parks.', services: ['commercial-mailbox-installation', 'repairs-lock-changes'] },
  { name: 'Campus & Municipal', text: 'ADA-conscious layouts with documented compliance for campuses and public agencies.', services: ['ada-compliant-installs', 'commercial-mailbox-installation'] },
];

export const PROCESS = [
  { title: 'Site Visit & Layout', text: 'We review your property, count of addresses and USPS requirements, then plan the layout.' },
  { title: 'Detailed Quote', text: 'One clear price covering hardware, installation and USPS coordination.' },
  { title: 'Schedule & Tenant Notice', text: 'We schedule the work and prepare tenant notice so residents know what to expect.' },
  { title: 'Installation', text: 'Pads, anchors and mailboxes installed. Standard CBU or 4C installs typically take one to two days once materials are on site.' },
  { title: 'USPS Inspection & Handover', text: 'We coordinate the USPS inspection, then hand over keys and documentation.' },
];

export const TESTIMONIALS = [
  { quote: 'Fast install, USPS sign-off with zero headaches.', who: 'Property Manager, San Diego' },
  { quote: 'Clean work and great communication.', who: 'HOA Board Member, Carlsbad' },
  { quote: 'Handled ADA clearances and inspection for us.', who: 'Facilities Director, Encinitas' },
];

export const PROJECTS = [
  { title: 'CBU Installation', city: 'San Marcos, CA', note: 'Turnkey replacement of cluster box units.', image: IMAGES.sanMarcos },
  { title: '4C Upgrade', city: 'Chula Vista, CA', note: 'New wall-mounted 4C units.', image: IMAGES.oceanside },
  { title: 'Vandalism Replacement', city: 'Temecula, CA', note: 'Secure replacements with lock changes.', image: IMAGES.vista },
];

export const HOME_FAQS: FAQ[] = [
  { q: 'Are you a USPS-approved mailbox vendor?', a: 'Yes. Postal Systems is a USPS-approved vendor and a California licensed contractor (License #904106).' },
  { q: 'What areas do you serve?', a: 'We are based in San Diego and serve San Diego County, with select projects in Riverside and Orange Counties.' },
  { q: 'What types of mailboxes do you install?', a: 'Cluster Box Units (CBU), 4C wall-mounted mailboxes, parcel lockers, letter lockers, tub lockers and residential locking mailboxes.' },
  { q: 'How long does installation take?', a: 'Standard CBU or 4C installs typically take one to two days once materials are on site. Larger projects typically take two to three days.' },
  { q: 'Do you repair existing mailboxes?', a: 'Yes. We repair and replace components, change locks and restore secure access to existing mailbox systems.' },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug)!;
export const getArea = (slug: string) => AREAS.find((a) => a.slug === slug)!;
export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug)!;
export const DEEP_AREAS = AREAS.filter((a) => a.deep);
