import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to Scout ("we," "our," or "us"). Scout is a comprehensive sports team management 
            application that helps coaches, players, and parents stay connected and organized. This 
            Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you use our mobile application and related services.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          
          <h3>Personal Information</h3>
          <p>We may collect the following types of personal information:</p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, phone number, profile picture</li>
            <li><strong>Team Information:</strong> Team name, sport, league, season details</li>
            <li><strong>Player Information:</strong> Player names, positions, jersey numbers, performance statistics</li>
            <li><strong>Parent/Guardian Information:</strong> Contact details for communication purposes</li>
            <li><strong>Communication Data:</strong> Messages, posts, and content shared within team groups</li>
            <li><strong>Event Information:</strong> Game schedules, practice times, team events</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <ul>
            <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
            <li><strong>Usage Data:</strong> App usage patterns, features accessed, time spent in app</li>
            <li><strong>Location Data:</strong> General location information (with your permission) for local team discovery</li>
            <li><strong>Technical Data:</strong> IP address, crash reports, performance metrics</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li><strong>Team Management:</strong> Facilitate team organization, scheduling, and communication</li>
            <li><strong>Communication:</strong> Enable messaging between coaches, players, and parents</li>
            <li><strong>Social Features:</strong> Power community groups and social feed functionality</li>
            <li><strong>Notifications:</strong> Send important team updates, game reminders, and announcements</li>
            <li><strong>App Improvement:</strong> Analyze usage patterns to enhance user experience</li>
            <li><strong>Customer Support:</strong> Provide technical support and respond to inquiries</li>
            <li><strong>Safety and Security:</strong> Protect against fraud, abuse, and unauthorized access</li>
          </ul>
        </section>

        <section>
          <h2>Information Sharing and Disclosure</h2>
          <p>We may share your information in the following circumstances:</p>
          
          <h3>Within Your Team</h3>
          <p>
            Information you share within your team (such as messages, schedules, and player information) 
            is visible to other team members, including coaches, players, and parents who have been 
            granted access to your team.
          </p>

          <h3>Service Providers</h3>
          <p>
            We may share information with trusted third-party service providers who help us operate 
            the app, such as cloud hosting, analytics, and customer support services.
          </p>

          <h3>Legal Requirements</h3>
          <p>
            We may disclose information if required by law, court order, or government regulation, 
            or to protect the safety of our users and the public.
          </p>

          <h3>Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, or sale of assets, user information may be 
            transferred as part of the business transaction.
          </p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction. 
            These measures include:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication requirements</li>
            <li>Secure cloud infrastructure with reputable providers</li>
          </ul>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            Scout is designed to be used by sports teams that may include minors. We are committed 
            to protecting children's privacy and comply with applicable laws regarding children's 
            personal information. Parents and guardians have the right to:
          </p>
          <ul>
            <li>Review their child's personal information</li>
            <li>Request deletion of their child's information</li>
            <li>Refuse to allow further collection of their child's information</li>
          </ul>
          <p>
            If you are a parent or guardian and have questions about your child's information, 
            please contact us using the information provided below.
          </p>
        </section>

        <section>
          <h2>Your Rights and Choices</h2>
          <p>You have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request transfer of your information to another service</li>
            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            <li><strong>Account Deactivation:</strong> Delete your Scout account at any time</li>
          </ul>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services 
            and fulfill the purposes outlined in this Privacy Policy. When you delete your account, 
            we will delete your personal information, though some information may be retained for 
            legal or legitimate business purposes.
          </p>
        </section>

        <section>
          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. 
            We ensure appropriate safeguards are in place to protect your information in accordance 
            with this Privacy Policy and applicable laws.
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any material 
            changes by posting the new Privacy Policy in the app and updating the "Last updated" 
            date. Your continued use of Scout after such changes constitutes acceptance of the 
            updated Privacy Policy.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, 
            please contact us at:
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> privacy@teamscout.co</p>
            <p><strong>Support:</strong> support@teamscout.co</p>
            <p><strong>Address:</strong> Scout Privacy Team<br />
            Team Scout LLC<br />
            14101 Southern Road<br />
            Grandview, MO 64030</p>
          </div>
        </section>

        <section>
          <h2>Additional Information for Specific Regions</h2>
          
          <h3>California Residents (CCPA)</h3>
          <p>
            California residents have additional rights under the California Consumer Privacy Act (CCPA), 
            including the right to know what personal information is collected, the right to delete 
            personal information, and the right to opt-out of the sale of personal information. 
            We do not sell personal information.
          </p>

          <h3>European Union Residents (GDPR)</h3>
          <p>
            If you are in the European Union, you have rights under the General Data Protection 
            Regulation (GDPR), including the right to access, rectify, erase, restrict processing, 
            object to processing, and data portability. You also have the right to lodge a complaint 
            with a supervisory authority.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
