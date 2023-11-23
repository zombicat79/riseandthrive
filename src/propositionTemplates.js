const dialogContainer = document.querySelector(".introContainer__textbox");

function loadProposition(id) {
    const idNumber = id.charAt(id.length-1);
    switch(idNumber) {
        case "1":
            dialogContainer.innerHTML = `
                <p>In the canvas of Rise and Thrive, you're not just a professional; you're the hero of your own story. Each one of us possesses unique superpowers, waiting to be unleashed. Your journey with Rise and Thrive is an invitation to embrace your full potential and discover the extraordinary capabilities that set you apart.</p>
                <p>It's time to redefine success on your terms.</p>
            `;
            break;
        case "2":
            dialogContainer.innerHTML = `
                <p>With my guidance, let's navigate the path of self-discovery and empowerment. Together, we'll uncover your superpowers, illuminate your path, and inspire a life that goes beyond the ordinary.</p>
                <p>Your extraordinary story is waiting to be written. Are you ready to rise, thrive, and conquer? Your journey begins now.</p>
            `;
            break;
        case "3":
            dialogContainer.innerHTML = `
                <p>Welcome, corporate trailblazers! Rise and Thrive is more than a consultancy; it's a catalyst for transformation. Companies are not just structures and strategies; they are formed by the collective brilliance of individuals. Let's harness that brilliance.</p>
                <p>I am here to inspire your team, build trust, and empower every individual to contribute to the company's success story.</p>
            `;
            break;
        case "4":
            dialogContainer.innerHTML = `
                <p>Benefit from my real-world experience in creating top-performing teams. Collaboration is the heartbeat of success, and I am here to guide your team toward a harmonious symphony of strengths.</p>
                <p>It's time to redefine what's possible and unleash the power of collaboration that will elevate your company to new heights.</p>
            `;
            break;
        default:
            dialogContainer.innerHTML = `
                <p>Beyond profit margins and quarterly reports, let's shape a legacy. Rise and Thrive is committed to making a positive impact on the world through your success. By empowering your team, we're not just shaping careers; we're contributing to a better, more fulfilling world.</p>
                <p>Your company's extraordinary story is ready to unfold. Are you ready to rise, thrive, and conquer the future? The journey begins now.</p>
            `;
    }
}