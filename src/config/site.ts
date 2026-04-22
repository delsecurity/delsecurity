export const SITE = {
  name: 'Del Security',
  tagline: 'Nothing to Hide.',
  description:
    'From our expertise to our process: full transparency, precise execution, trusted partnership.',
};

export const CONTACT = {
  infoEmail: 'contact@del-sec.com',
  securityEmail: 'contact@del-sec.com',
  pgpPath: '/pgp.txt',
  xUrl: 'https://x.com/del_security',
};

export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;

export const LEGAL_ITEMS = [] as const;

export const SERVICE_CARDS = [
  {
    name: '0-day Research',
    summary: 'Discover and validate high-confidence vulnerabilities with reproducible evidence.',
  },
  {
    name: 'Security Framework',
    summary: 'Build practical security frameworks and tooling for your environment.',
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: 'Intake',
    icon: '01',
    description: 'Initial contact, context capture, and secure channel setup.',
  },
  {
    title: 'Scoping & legal check',
    icon: '02',
    description: 'Authorized scope review, legal alignment, and engagement terms.',
  },
  {
    title: 'Execution',
    icon: '03',
    description: 'Research and technical analysis within agreed constraints.',
  },
  {
    title: 'Validation',
    icon: '04',
    description: 'Impact, stability, and reproducibility checks in controlled conditions.',
  },
  {
    title: 'Delivery',
    icon: '05',
    description: 'Partner-ready report delivery, briefings, and remediation guidance.',
  },
  {
    title: 'Retest & close',
    icon: '06',
    description: 'Fix verification, residual risk notes, and engagement closure.',
  },
] as const;

export function withBase(path: string): string {
  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  const clean = path.replace(/^\/+/, '');
  return clean ? `${base}${clean}` : base;
}

export function absoluteUrl(path: string): string {
  const site = import.meta.env.SITE;
  return site ? new URL(path, site).toString() : path;
}
