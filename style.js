
        const images = document.querySelectorAll('.zoomable');

        images.forEach(image => {
            image.addEventListener('click', () => {
                image.classList.toggle('zoomed');
            });
        });

        function startCountdown(endDate) {
            const timer = document.getElementById('timer');

            function updateTimer() {
                const now = new Date();
                const timeLeft = new Date(endDate) - now;

                if (timeLeft > 0) {
                    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
                    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
                    const seconds = Math.floor((timeLeft / 1000) % 60);

                    timer.innerHTML = `
                        <div><span>${days}</span><small>Days</small></div>
                        <div><span>${hours}</span><small>Hours</small></div>
                        <div><span>${minutes}</span><small>Minutes</small></div>
                        <div><span>${seconds}</span><small>Seconds</small></div>
                    `;
                } else {
                    timer.innerHTML = "<h2>Congratulations! Your Diploma has ended!</h2>";
                    clearInterval(interval);
                }
            }

            updateTimer();
            const interval = setInterval(updateTimer, 1000);
        }

        window.onload = function() {
            const countdownEndDate = "2025-02-23T23:59:59"; 
            startCountdown(countdownEndDate);
        };