
export interface Plan {
  id: string;
  name: string;
  price: string;
  isElite?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹14,999',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹29,999',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹74,999',
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '₹99,999',
    isElite: true,
  },
];

export interface FeatureRow {
  label: string;
  values: {
    [planId: string]: string | boolean;
  };
}

export interface FeatureBlock {
  category: string;
  icon?: string;
  rows: FeatureRow[];
}

export const FEATURE_BLOCKS: FeatureBlock[] = [
  {
    category: 'Platforms Covered',
    icon: '📲',
    rows: [
      {
        label: 'Instagram',
        values: { starter: true, growth: true, premium: true, elite: true },
      },
      {
        label: 'Facebook',
        values: { starter: true, growth: true, premium: true, elite: true },
      },
      {
        label: 'Google Business',
        values: { starter: false, growth: true, premium: true, elite: true },
      },
      {
        label: 'LinkedIn',
        values: { starter: false, growth: false, premium: true, elite: true },
      },
      {
        label: 'YouTube',
        values: { starter: false, growth: false, premium: false, elite: true },
      },
    ],
  },
  {
    category: 'Content Deliverables',
    icon: '🎨',
    rows: [
      {
        label: 'Posts / Month',
        values: { starter: '12', growth: '16', premium: '20', elite: '25' },
      },
      {
        label: 'Reels / Month',
        values: { starter: '6', growth: '10', premium: '15', elite: '15' },
      },
      {
        label: 'Stories / Month',
        values: { starter: '12', growth: '20', premium: '30', elite: '30' },
      },
      {
        label: 'Professional Shoot',
        values: { starter: false, growth: '1 Shoots', premium: '2 Shoots', elite: 'Drone / Pro' },
      },
      {
        label: 'Script Writing',
        values: { starter: false, growth: false, premium: true, elite: true },
      },
      {
        label: 'Advanced Editing',
        values: { starter: false, growth: 'Basic', premium: true, elite: 'Premium' },
      },
    ],
  },
  {
    category: 'Advanced Lead & Sales System',
    icon: '🎯',
    rows: [
      {
        label: 'Meta Ads Setup',
        values: { starter: 'Basic', growth: true, premium: true, elite: true },
      },
      {
        label: 'Google Ads',
        values: { starter: false, growth: false, premium: false, elite: true },
      },
      {
        label: 'Lead Funnel',
        values: { starter: false, growth: 'Basic', premium: true, elite: 'Advanced' },
      },
      {
        label: 'Retargeting',
        values: { starter: false, growth: 'Basic', premium: true, elite: 'Advanced' },
      },
      {
        label: 'WhatsApp Integration',
        values: { starter: 'Basic', growth: true, premium: true, elite: true },
      },
      {
        label: 'CRM Support',
        values: { starter: false, growth: false, premium: 'Basic', elite: true },
      },
      {
        label: 'Conversion Tracking',
        values: { starter: false, growth: false, premium: true, elite: true },
      },
    ],
  },
  {
    category: 'Reporting & Dedicated Support',
    icon: '📊',
    rows: [
      {
        label: 'Weekly Report',
        values: { starter: false, growth: false, premium: false, elite: true },
      },
      {
        label: 'Monthly Report',
        values: { starter: true, growth: true, premium: true, elite: true },
      },
      {
        label: 'Dedicated Manager',
        values: { starter: false, growth: false, premium: false, elite: true },
      },
    ],
  },
];

export const COMMON_FEATURES = [
  "Advertising Budget Separate",
  "Rates are valid for 45 days from the date of this estimate.",
  "50% Advance upon confirmed work order.",
  "50% Before Final Delivery.",
  "If the project is canceled, completed work will be charged as per actual."
];

