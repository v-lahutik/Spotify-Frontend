import { FooterContainer,FooterTopSection, FooterBottom, FooterBottomLeft, FooterBottomRight, FooterTop, FooterTopSocials } from './FooterStyles';
import { FaInstagram, FaTwitter, FaFacebook  } from "react-icons/fa";
function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
      
      <FooterTopSection>
        <p>Company</p>
        <a href="https://www.spotify.com/de/about-us/impressum/" >Impressum/Transparenzinformation</a>
        <a href="https://www.spotify.com/de/about-us/contact/">About</a>
        <a href="https://www.lifeatspotify.com/">Jobs</a>
        <a href="https://newsroom.spotify.com/">For the Record</a>
      </FooterTopSection>
      <FooterTopSection>
        <p>Communities</p>
        <a href="https://artists.spotify.com/home">For Artists</a>
        <a href="https://developer.spotify.com/">Developers</a>
        <a href="https://ads.spotify.com/de-DE/">Advertising</a>
        <a href="https://investors.spotify.com/home/default.aspx">Investors</a>
        <a href="https://spotifyforvendors.com/">Vendors</a>

        </FooterTopSection>
      <FooterTopSection>
        <p>Useful links</p>
        <a href="https://support.spotify.com/de/">Support</a>
        <a href="https://www.spotify.com/de/download/linux/">Free Mobile App</a>
        <a href="https://www.spotify.com/de/account/overview/">Verträge hier kündigen</a>
        
        </FooterTopSection>
      <FooterTopSection>
        <p>Spotify plans</p>
        <a href="https://www.spotify.com/de/premium/?ref=spotifycom_footer_premium_individual">Premium Individual</a>
        <a href="https://www.spotify.com/de/duo/?ref=spotifycom_footer_premium_duo">Premium Duo</a>
        <a href="https://spotify.com/de/family/?ref=spotifycom_footer_premium_family">Premium Family</a>
        <a href="https://www.spotify.com/de/student/?ref=spotifycom_footer_premium_student">Premium Student</a>
        <a href="https://www.spotify.com/de/free/?ref=spotifycom_footer_free">Spotify Free</a>
        </FooterTopSection>

<FooterTopSocials>
<div><a href="https://www.instagram.com/spotify/"><FaInstagram/></a></div>
<div><a href="https://x.com/spotify"><FaTwitter/></a></div>
<div><a href="https://www.facebook.com/Spotify"><FaFacebook/></a></div>
</FooterTopSocials>

      </FooterTop>

      <FooterBottom>
        <FooterBottomLeft>
          <a href="https://www.spotify.com/de/legal/end-user-agreement/">Legal</a>
          <a href="https://www.spotify.com/de/safetyandprivacy">Safety & Privacy Center</a>
          <a href="https://www.spotify.com/de/legal/privacy-policy/">Privacy Policy</a>
          <a href="">Cookie Settings</a>
          <a href="">About Ads</a>
          <a href="https://www.spotify.com/de/accessibility">Accessibility</a>
        </FooterBottomLeft>
        <FooterBottomRight>
          <p>© 2024 Spotify AB</p>
        </FooterBottomRight>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
