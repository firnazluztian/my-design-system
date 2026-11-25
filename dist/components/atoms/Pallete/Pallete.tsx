import React from 'react';
import { Card } from '../Card/Card';

interface ColorSwatchProps {
  name: string;
  value: string;
  colorClass: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, value, colorClass }) => (
  <Card variant="outline" padding="sm" rounded="lg">
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-full h-20 rounded-lg border border-neutral-200 ${colorClass}`}
      />
      <div className="text-sm font-medium text-neutral-700">{name}</div>
      <div className="text-xs text-neutral">{value}</div>
    </div>
  </Card>
);

interface Swatch {
  name: string;
  value: string;
  colorClass: string;
}

const groups: { title: string; swatches: Swatch[] }[] = [
  {
    title: 'Primary',
    swatches: [
      { name: 'Primary 50', value: '#F7F3FF', colorClass: 'bg-primary-50' },
      { name: 'Primary 75', value: '#ECE3FF', colorClass: 'bg-primary-75' },
      { name: 'Primary 100', value: '#E1D3FF', colorClass: 'bg-primary-100' },
      { name: 'Primary 200', value: '#C7ADFF', colorClass: 'bg-primary-200' },
      { name: 'Primary 300', value: '#976DF3', colorClass: 'bg-primary-300' },
      { name: 'Primary 400', value: '#6F3FD7', colorClass: 'bg-primary-400' },
      { name: 'Primary 500', value: '#582DB5', colorClass: 'bg-primary-500' },
      { name: 'Primary 600', value: '#3D1690', colorClass: 'bg-primary-600' },
      { name: 'Primary 700', value: '#311275', colorClass: 'bg-primary-700' },
      { name: 'Primary 800', value: '#250A5D', colorClass: 'bg-primary-800' },
      { name: 'Primary 900', value: '#200D48', colorClass: 'bg-primary-900' },
      { name: 'Primary foreground', value: '#FFFFFF', colorClass: 'bg-primary-foreground' },
    ],
  },
  {
    title: 'Secondary',
    swatches: [
      { name: 'Secondary 50', value: '#FEF8F0', colorClass: 'bg-secondary-50' },
      { name: 'Secondary 100', value: '#FDEEDC', colorClass: 'bg-secondary-100' },
      { name: 'Secondary 200', value: '#FBE2C4', colorClass: 'bg-secondary-200' },
      { name: 'Secondary 300', value: '#F8D6AE', colorClass: 'bg-secondary-300' },
      { name: 'Secondary 400', value: '#F6CC9C', colorClass: 'bg-secondary-400' },
      { name: 'Secondary 500', value: '#E4B47E', colorClass: 'bg-secondary-500' },
      { name: 'Secondary 600', value: '#C99A63', colorClass: 'bg-secondary-600' },
      { name: 'Secondary 700', value: '#967852', colorClass: 'bg-secondary-700' },
      { name: 'Secondary 800', value: '#6E5739', colorClass: 'bg-secondary-800' },
      { name: 'Secondary 900', value: '#4A3A26', colorClass: 'bg-secondary-900' },
    ],
  },
  {
    title: 'Success',
    swatches: [
      { name: 'Success 50', value: '#F0FDF4', colorClass: 'bg-success-50' },
      { name: 'Success 75', value: '#E6FDEE', colorClass: 'bg-success-75' },
      { name: 'Success 100', value: '#DCFCE7', colorClass: 'bg-success-100' },
      { name: 'Success 200', value: '#B9F8CF', colorClass: 'bg-success-200' },
      { name: 'Success 300', value: '#86EFAC', colorClass: 'bg-success-300' },
      { name: 'Success 400', value: '#05DF72', colorClass: 'bg-success-400' },
      { name: 'Success 500', value: '#00C950', colorClass: 'bg-success-500' },
      { name: 'Success 600', value: '#00A63E', colorClass: 'bg-success-600' },
      { name: 'Success 700', value: '#15803D', colorClass: 'bg-success-700' },
      { name: 'Success 800', value: '#016630', colorClass: 'bg-success-800' },
      { name: 'Success 900', value: '#0D542B', colorClass: 'bg-success-900' },
    ],
  },
  {
    title: 'Warning',
    swatches: [
      { name: 'Warning 50', value: '#FFFBEB', colorClass: 'bg-warning-50' },
      { name: 'Warning 75', value: '#FFF7D9', colorClass: 'bg-warning-75' },
      { name: 'Warning 100', value: '#FEF3C7', colorClass: 'bg-warning-100' },
      { name: 'Warning 200', value: '#FDE68A', colorClass: 'bg-warning-200' },
      { name: 'Warning 300', value: '#FCD34D', colorClass: 'bg-warning-300' },
      { name: 'Warning 400', value: '#FBBF24', colorClass: 'bg-warning-400' },
      { name: 'Warning 500', value: '#F59E0B', colorClass: 'bg-warning-500' },
      { name: 'Warning 600', value: '#D97706', colorClass: 'bg-warning-600' },
      { name: 'Warning 700', value: '#B45309', colorClass: 'bg-warning-700' },
      { name: 'Warning 800', value: '#92400E', colorClass: 'bg-warning-800' },
      { name: 'Warning 900', value: '#78350F', colorClass: 'bg-warning-900' },
    ],
  },
  {
    title: 'Danger',
    swatches: [
      { name: 'Danger 50', value: '#FEF2F2', colorClass: 'bg-danger-50' },
      { name: 'Danger 75', value: '#FEEAEA', colorClass: 'bg-danger-75' },
      { name: 'Danger 100', value: '#FEE2E2', colorClass: 'bg-danger-100' },
      { name: 'Danger 200', value: '#FFC9C9', colorClass: 'bg-danger-200' },
      { name: 'Danger 300', value: '#FFA2A3', colorClass: 'bg-danger-300' },
      { name: 'Danger 400', value: '#FF6467', colorClass: 'bg-danger-400' },
      { name: 'Danger 500', value: '#FA2C37', colorClass: 'bg-danger-500' },
      { name: 'Danger 600', value: '#E7000B', colorClass: 'bg-danger-600' },
      { name: 'Danger 700', value: '#C10008', colorClass: 'bg-danger-700' },
      { name: 'Danger 800', value: '#9F0812', colorClass: 'bg-danger-800' },
      { name: 'Danger 900', value: '#82181A', colorClass: 'bg-danger-900' },
    ],
  },
  {
    title: 'Info',
    swatches: [
      { name: 'Info 50', value: '#EFF6FF', colorClass: 'bg-info-50' },
      { name: 'Info 100', value: '#DBEAFE', colorClass: 'bg-info-100' },
      { name: 'Info 200', value: '#BEDBFF', colorClass: 'bg-info-200' },
      { name: 'Info 300', value: '#8EC5FF', colorClass: 'bg-info-300' },
      { name: 'Info 400', value: '#51A2FF', colorClass: 'bg-info-400' },
      { name: 'Info 500', value: '#2B7FFF', colorClass: 'bg-info-500' },
      { name: 'Info 600', value: '#155DFC', colorClass: 'bg-info-600' },
      { name: 'Info 700', value: '#1447E6', colorClass: 'bg-info-700' },
      { name: 'Info 800', value: '#193CB8', colorClass: 'bg-info-800' },
      { name: 'Info 900', value: '#1C398E', colorClass: 'bg-info-900' },
    ],
  },
  {
    title: 'Neutral',
    swatches: [
      { name: 'Neutral 50', value: '#F7F7F9', colorClass: 'bg-neutral-50' },
      { name: 'Neutral 75', value: '#E8E8EB', colorClass: 'bg-neutral-75' },
      { name: 'Neutral 100', value: '#D9D9DC', colorClass: 'bg-neutral-100' },
      { name: 'Neutral 200', value: '#BBBABE', colorClass: 'bg-neutral-200' },
      { name: 'Neutral 300', value: '#9D9BA1', colorClass: 'bg-neutral-300' },
      { name: 'Neutral 400', value: '#7E7C83', colorClass: 'bg-neutral-400' },
      { name: 'Neutral 500', value: '#605D66', colorClass: 'bg-neutral-500' },
      { name: 'Neutral 600', value: '#413E48', colorClass: 'bg-neutral-600' },
      { name: 'Neutral 700', value: '#231F2A', colorClass: 'bg-neutral-700' },
      { name: 'Neutral 800', value: '#14101B', colorClass: 'bg-neutral-800' },
      { name: 'Neutral 900', value: '#04000C', colorClass: 'bg-neutral-900' },
    ],
  },
  {
    title: 'Disabled',
    swatches: [
      { name: 'Disabled', value: '#9D9BA1', colorClass: 'bg-disabled' },
      { name: 'Disabled bg', value: '#E8E8EB', colorClass: 'bg-disabled-bg' },
      { name: 'Disabled border', value: '#D9D9DC', colorClass: 'bg-disabled-border' },
      { name: 'Disabled text', value: '#9D9BA1', colorClass: 'bg-disabled-text' },
    ],
  },
  {
    title: 'Light',
    swatches: [
      { name: 'Light', value: '#FFFFFF', colorClass: 'bg-light' },
      { name: 'Light muted', value: '#F7F7F9', colorClass: 'bg-light-muted' },
      { name: 'Light border', value: '#D9D9DC', colorClass: 'bg-light-border' },
      { name: 'Light foreground', value: '#04000C', colorClass: 'bg-light-foreground' },
    ],
  },
  {
    title: 'Dark',
    swatches: [
      { name: 'Dark', value: '#04000C', colorClass: 'bg-dark' },
      { name: 'Dark muted', value: '#14101B', colorClass: 'bg-dark-muted' },
      { name: 'Dark border', value: '#231F2A', colorClass: 'bg-dark-border' },
      { name: 'Dark foreground', value: '#F7F7F9', colorClass: 'bg-dark-foreground' },
    ],
  },
];

interface PalleteProps {
  className?: string;
}

export const Pallete: React.FC<PalleteProps> = ({ className }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ${className}`}>
      {groups.map((group) => (
        <div key={group.title} className="col-span-full">
          <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {group.swatches.map((swatch) => (
              <ColorSwatch
                key={swatch.name}
                name={swatch.name}
                value={swatch.value}
                colorClass={swatch.colorClass}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
