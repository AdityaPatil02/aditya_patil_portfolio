import { createElement, type ComponentType } from 'react';
import { Github, Instagram, Linkedin, type LucideProps } from 'lucide-react';
import BrandIcon from '@/components/common/BrandIcon';
import { brandIcons } from '@/data/brandIcons';

type SocialIcon = ComponentType<LucideProps>;

const XIcon: SocialIcon = ({ size, className }) =>
  createElement(BrandIcon, { icon: brandIcons.X, size, className });

export const socialIcons: Record<string, SocialIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram,
  X: XIcon,
};
