
import React from 'react';
function Privacy() {
    return(
        <>
        <div className="overflow-hidden flex justify-center items-center
        bg-white w-full h-auto text-white gap-4 ">

        <div  id="container" className="my-8 mx-48 px-8 py-4 flex flex-col w-full rounded-xl gap-4 shadow-2xl bg-white text-black">
                
            
        <span className='px-4'>
            <h1 className='text-4xl font-bold pt-4'>Privacy Policy</h1>
            <span>Welcome to CricketExplore. Your privacy is important to us.</span>    
        </span>
                
        <span className='px-4' >
            <h2 className='text-xl font-bold pt-4'>Information We Collect</h2>
            <ul className='list-disc list-inside'>
            <li>Personal Information: Name, email address, phone number.</li>
            <li>Usage Data: Device info, IP address, browser type, interactions.</li>
            <li>Cookies and Tracking Technologies.</li>
            </ul>
        </span>
                
        <span className='px-4'>
            <h2 className='text-xl font-bold pt-4'>How We Use Your Information</h2>
            <ul className='list-disc list-inside'>
            <li>Managing your account and profile.</li>
            <li>Improving and personalizing your experience.</li>
            <li>Sending updates, notifications, and promotions.</li>
            <li>Ensuring security and smooth functionality.</li>
            <li>Complying with legal obligations.</li>
            </ul>
        </span>
                
        <span className='px-4'>
            <h2 className='text-xl font-bold pt-4'>Sharing of Information</h2>
            <span className=''>We do not share your personal data except:
                <ul className='list-disc list-inside '>
                <li>With service providers for customer support or transactions.</li>
                <li>To comply with legal requirements.</li>
                </ul>
            </span>
        </span>
        
        <span className='px-4'>
            <h2 className='text-xl font-bold pt-4'>Data Security</h2>
            <span className=''>We take appropriate security measures but recommend using strong passwords.</span>
        </span>
        
        <span className='px-4'>
            <h2 className='text-xl font-bold pt-4'>Your Rights</h2>
            <ul className='list-disc list-inside'>
            <li>Access and review your personal data.</li>
            <li>Request corrections or deletions where applicable.</li>
            <li>Opt out of promotional communications.</li>
            </ul>
        </span>
            
        <span className='px-4'>
            <h2 className='text-xl font-bold pt-4'>Third-Party Links</h2>    
            <span>We are not responsible for external sites linked on CricketExplore.</span>    
        </span>
            
        <span className='px-4'>
            <h2 className='text-xl font-bold pt-4'>Children&rsquo;s Privacy</h2>    
            <span>CricketExplore is not for users under 18. Any minor&rsquo;s data will be deleted.</span>    
        </span>

        <span className='px-4'>
            <h2 className='text-xl font-bold pt-4'>Changes to This Policy</h2>    
            <span>We may update this policy and notify users via this page.</span>    
        </span>
        
        <span className='px-4'>
            <h2 className='text-xl font-bold pt-4'>Contact Us</h2>    
            <span>For questions, contact us via WhatsApp.</span>    
        </span>
        
        <span className='px-4'>
            <h2 className='text-xl font-bold pt-4'>Disclaimer</h2>
            <span>CricketExplore is for users 18+.</span>
        </span>
        
    </div>
</div>
        </>
    )
};
export default Privacy;