import styledComponents from 'styled-components';

export const FooterContainer = styledComponents.footer`
    
    color: #fff;
    padding: 20px;
    padding-top: 40px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
      
    a {
        color:rgb(174, 174, 174);
        margin-right: 10px;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
          }
    }
    
    `;
export const FooterTop = styledComponents.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #1F1F1F;
    `;
export const FooterTopSection = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    line-height: 1.5;
    margin-bottom: 40px;
    p{
        color: white;
        font-weight: 1000;
    }
    `;
    export const FooterTopSocials = styledComponents.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    
    div {
        height: 30px;
        width: 30px;
        margin: 10px;
        background-color: #1F1F1F;
        padding: 8px;
        border-radius: 50%;
        
        &:hover {
            background-color: #3f3f3f;
        }
      a {
        text-align: center;
        color: white;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }  
    }
`;
export const FooterBottom = styledComponents.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
 
    `;
export const FooterBottomLeft = styledComponents.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
  
    `;
export const FooterBottomRight = styledComponents.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
    `;
