import AuthBackgroundLayout from '@/components/layouts/AuthBackgroundLayout';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <AuthBackgroundLayout>{children}</AuthBackgroundLayout>;
}
