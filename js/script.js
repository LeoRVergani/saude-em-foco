document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DA CALCULADORA DE IMC ---
    const btnCalcular = document.getElementById('btnCalcular');
    
    if (btnCalcular) {
        btnCalcular.addEventListener('click', () => {
            const pesoInput = document.getElementById('peso');
            const alturaInput = document.getElementById('altura');
            const resultadoDiv = document.getElementById('resultadoIMC');

            // Substitui vírgula por ponto para garantir o cálculo correto
            const peso = parseFloat(pesoInput.value.replace(',', '.'));
            const altura = parseFloat(alturaInput.value.replace(',', '.'));

            // Validação dos dados
            if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
                resultadoDiv.innerHTML = 'Por favor, insira valores válidos para peso e altura.';
                resultadoDiv.style.backgroundColor = '#ffcccb';
                return;
            }

            const imc = peso / (altura * altura);
            let classificacao = '';
            
            if (imc < 18.5) {
                classificacao = 'Abaixo do peso';
            } else if (imc < 24.9) {
                classificacao = 'Peso ideal (Parabéns!)';
            } else if (imc < 29.9) {
                classificacao = 'Levemente acima do peso';
            } else if (imc < 34.9) {
                classificacao = 'Obesidade grau I';
            } else if (imc < 39.9) {
                classificacao = 'Obesidade grau II (severa)';
            } else {
                classificacao = 'Obesidade grau III (mórbida)';
            }

            resultadoDiv.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong>. Classificação: <strong>${classificacao}</strong>`;
            resultadoDiv.style.backgroundColor = '#d4edda';
        });
    }

    // --- EFEITO: FADE-IN AO ROLAR A PÁGINA ---
    const fadeElements = document.querySelectorAll('.fade-in-element');
    const handleScrollAnimation = () => {
        fadeElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const isVisible = elementTop <= (window.innerHeight || document.documentElement.clientHeight);
            if (isVisible) {
                el.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();

    // --- EFEITO: SOMBRA NO MENU AO ROLAR ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

    // --- LÓGICA DO MENU MOBILE (HAMBURGER) ---
    const btnMobile = document.getElementById('btn-mobile');
    const navMenu = document.getElementById('nav-menu');

    if (btnMobile && navMenu) {
        btnMobile.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um dos links
        navMenu.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                navMenu.classList.remove('active');
            }
        });
    }
});