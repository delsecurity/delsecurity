export const SITE = {
  name: 'Del Security',
  tagline: 'Vulnerability research with validated outcomes and structured coordination support.',
  description:
    'Del Security delivers vulnerability research as its primary service, supported by discreet submission evaluation and structured coordination.',
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
  { href: '/submissions', label: 'Submissions' },
  { href: '/process', label: 'Process' },
  { href: '/trust', label: 'Trust' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;

export const LEGAL_ITEMS = [
  { href: '/legal/terms', label: 'Terms' },
  { href: '/legal/privacy', label: 'Privacy' },
  { href: '/legal/coordination', label: 'Coordination Policy' },
  { href: '/legal/data-handling', label: 'Data Handling' },
] as const;

export const SERVICE_CARDS = [
  {
    name: 'Vulnerability Research',
    summary:
      'Targeted security research with clear scope boundaries, reproducible findings, and stakeholder-ready reporting.',
  },
  {
    name: 'Exploit Development',
    summary:
      'Validation-focused exploit development in controlled environments to confirm impact and reproducibility.',
  },
  {
    name: 'Vulnerability Submission & Evaluation Program',
    summary:
      'A private channel for submissions, triage, validation, and structured coordination.',
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
    description: 'Stakeholder-ready report delivery, briefings, and remediation guidance.',
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
