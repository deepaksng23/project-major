import React from 'react'

const Consult = () => {

    const [sessionId, setSessionId] = useState('');
    const [terms, acceptTerms] = useState(false);
    const [diagnosis, setDiagnosis] = useState('');
    
    // Start Session API
    const startSession = async () => {
        try {
        const response = await fetch('https://api.endlessmedical.com/v1/dx/InitSession', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setSessionId(data.SessionID);
        } catch (error) {
        console.error('Error starting session:', error);
    }

    const AcceptTermsAndConditions = async () => {
        try {
            const response = await fetch('https://endlessmedicalapi1.p.rapidapi.com/?rapidapi-key=b9d0d6e816msh4fd6a12905c8c8dp17777djsn82b622dae8ba/AcceptTermsOfUse', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            acceptTerms(true);
        } catch (error) {
            console.log('Please accept Terms And Conditions to use the Free Consultation', error);
        }
    }


  return (
    <div>
        <p>Free Doctor Consultation</p>
        <button onClick={startSession}>
            Start Session
        </button>

        <p>You need to accept the Terms & Conditions</p>
        <button onClick={AcceptTermsAndConditions}>
            Accept T&Cs
        </button>
    </div>
  )
}
}
export default Consult