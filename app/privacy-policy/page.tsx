import { genPageMetadata } from 'app/seo';
import { PageTitle, SectionContainer } from '@/components/ui';

export const metadata = genPageMetadata({ title: 'Privacy Policy' });

export default function Page() {
  return (
    <SectionContainer>
      <div className="mt-10">
        <PageTitle>Privacy Policy</PageTitle>
        <div className="prose max-w-none dark:prose-invert mt-8">
          <p>
            Billy’s Blog is a simple Android application that provides access to content from
            <code> https://blog.andreasbilly.com </code> through a WebView.
          </p>

          <h2>Information Collection and Use</h2>
          <p>Billy’s Blog does not collect, store, or share any personal user data directly.</p>
          <p>
            The application does not require users to create an account, log in, or provide any personal
            information.
          </p>

          <h2>Web Content</h2>
          <p>
            All content displayed in the app is loaded directly from <code>blog.andreasbilly.com</code>.
            Any data collected through the website is subject to the privacy policy of that website.
          </p>

          <h2>Third-Party Services</h2>
          <p>Billy’s Blog does not use third-party services that collect user data within the app.</p>

          <h2>Children’s Privacy</h2>
          <p>
            This application is not specifically directed at children under the age of 13, and it does not
            knowingly collect any personal information from children.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time. Any changes will be reflected on this
            page.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, you may contact the developer at:
            <code> andreasbilly.com</code>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}