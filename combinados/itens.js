 const items = [
      {
        id: 0, category: "Novidades",
        title: "Combinado Kaiseki 20 und",
        description: " Composição do combinado: 5 Uramakis Skin Especial Roasted (com lâmina de salmão por cima), 5 Hots Filadélfia Crocante Especial (com salmão batido por cima), 5 Uramakis Filadélfia, 5 Hossomakis Filadélfia",
        price: "R$ 0",
        color: "#5a3a2a",
        image: "img/kaiseki-20und.jpg?w=1200&q=80",
        thumb: "img/kaiseki-20und.jpg?w=600&q=80"
      },
      {
        id: 1, category: "Novidades",
        title: "Combinado Hikari 28 und",
        description: "Composição do combinado: 10 Hots Filadélfia, 10 Uramakis Terrine Especial Roasted, 3 Niguiris Salmão, 3 Niguiris Skin Especial, 1 Gunkan Shimeji, 1 Gunkan Salmão",
        price: "R$ 0",
        color: "#2a3a2a",
        image: "img/hikari-28und.jpg?w=1200&q=80",
        thumb: "img/hikari-28und.jpg?w=600&q=80"
      },
      {
        id: 3, category: "Novidades",
        title: "Combinado Shiro 28 und",
        description: "Composição do combinado: 10 Hots Filadélfia Crocantes, 10 Uramakis Terrine Especial Roasted, 4 Hossomakis Filadélfia, 4 Uramakis Filadélfia",
        price: "R$ 0",
        color: "#5a3a2a",
        image: "img/shiro-28und.jpg?w=1200&q=80",
        thumb: "img/shiro-28und.jpg?w=600&q=80"
      },
      {
        id: 4, category: "Novidades",
        title: "Combinado Taizen 49 und",
        description: "Composição do combinado: 12 Hots Filadélfia Crocantes, 6 Hossomakis Filadélfia, 6 Uramakis Filadélfia, 4 Gunkans Salmão Maracujá, 3 Gunkans Salmão, 4 Niguiris Salmão Especial Roasted, 4 Niguiris Salmão, 5 Sashimis Peixe Branco com Tougarashi, 5 Sashimis Salmão",
        price: "R$ 0",
        color: "#2a3a2a",
        image: "img/taizen-49und.jpg?w=1200&q=80",
        thumb: "img/taizen-49und.jpg?w=600&q=80"
      },      {
        id: 5, category: "Novidades",
        title: "Temaki Hot",
        description: "Um cone irresistível recheado com arroz de sushi temperado, cream cheese cremoso e cubos de salmão fresco. Empanado em farinha panko e frito na hora. Com teriyaki por cima.",
        price: "R$ 0",
        color: "#5a3a2a",
        image: "img/temaki-hot.jpg?w=1200&q=80",
        thumb: "img/temaki-hot.jpg?w=600&q=80"
      },
      
      {
        id: 6, category: "Promoções",
        title: "Combinado Ishigaki 9 und",
        description: "Composição: - 2 Hots Crocantes com Crisps de Batata-Doce, - 2 Hots Crocantes com Crisps de Couve, - 2 Hossomakis com Terrine Skin e Cream Cheese, - 2 Hots com Cream Cheese e Salmão, - 1 Niguiri Skin Especial",
        price: "R$ 0",
        color: "#3a2020",
        image: "img/ishigaki-9und.jpg?w=1200&q=80",
        thumb: "img/ishigaki-9und.jpg?w=600&q=80"
      },
            {
        id: 7, category: "Promoções",
        title: "Compre 1 e leve 2! Temaki Salmão Grande + Temaki Skin Grande",
        description: "Composição: Temaki de Salmão com cream cheese, cebolinha e gergelim, e o irresistível Temaki Skin com cream cheese e gergelim ",
        price: "R$ 0",
        color: "#3a2020",
        image: "img/temaki-salmao-temaki-skin.jpg?w=1200&q=80",
        thumb: "img/temaki-salmao-temaki-skin.jpg?w=600&q=80"
      },
      {
        id: 8, category: "Promoções",
        title: "Hot Filadélfia Crocante 12 und",
        description: "Alga por fora, recheado com salmão, arroz japonês e cream cheese. Empanado e frito na hora, ficando super crocante",
        price: "R$ 0",
        color: "#2a3040",
        image: "img/hot-12und.jpg?w=1200&q=80",
        thumb: "img/hot-12und.jpg?w=600&q=80"
      },
      {
        id: 9, category: "Pokes",
        title: "Poke Domó Salmão com Ceviche",
        description: "*POKE 500g* - 200g Arroz Japonês, - 100g  Cubos de Salmão Fresco, - 30g   Ceviche de Peixe Branco,- 40g   Manga Doce, - 40g   Abacate Cremoso, - 40g   Tomatinhos, - 40g   Sunomono, - 10g   Milho Desidratado. Com toque de mel, gergelim e cebolinha.",
        description2: "*POKE 350g* - 140g Arroz Japonês, - 70g   Cubos de Salmão Fresco, - 21g   Ceviche de Peixe Branco, - 28g  Manga Doce, - 28g  Abacate Cremoso, - 28g  Tomatinhos, - 28g  Sunomono, - 7g  Milho Desidratado. Com toque de mel, gergelim e cebolinha.",
        price: "R$ 0",
        color: "#3a3020",
        image: "img/poke-salmao.jpg?w=1200&q=80",
        thumb: "img/poke-salmao.jpg?w=600&q=80"
      },
      {
        id: 10, category: "Pokes",
        title: "Poke Domó Camarão",
        description: "*Poke 500g* -200g Arroz Japonês, - 100g Camarão Crocante, - 30g Ceviche de Peixe Branco, - 40g Manga Doce, - 40g Abacate Cremoso, - 40g Tomate Cereja, - 40g Sunomono, - 10g Milho Desidratado. Com toque de mel, gergelim e cebolinha.",
        description2: "*Poke 350g* -140g Arroz Japonês, - 70g  Camarão Crocante, - 21g  Ceviche de Peixe Branco, - 28g  Tomatinhos, - 28g  Sunomono, - 28g  Manga Doce, - 28g  Abacate Cremoso, - 7g  Milho Desidratado. Com toque de mel, gergelim e cebolinha.",
        price: "R$ 0",
        color: "#2a2a1a",
        image: "img/poke-camarao.jpg?w=1200&q=80",
        thumb: "img/poke-camarao.jpg?w=600&q=80"
      },
      {
        id: 11, category: "Pokes",
        title: "Poke Shimeji",
        description:  "*Poke 500g* - 200g Arroz Japonês, - 100g Frango Grelhado com Lemon Pepper, - 30g Shimeji Puxado na Manteiga, - 40g Manga Doce, - 40g Abacate Cremoso, - 40g Tomatinhos, - 40g Sunomono, - 10g Milho Desidratado. Com toque de mel, gergelim e cebolinha",
        description2: "*Poke 350g* - 140g Arroz Japonês, - 70g  Frango Grelhado com Lemon Pepper, - 21g  Shimeji Puxado na Manteiga, - 28g  Tomate Cereja, - 28g  Sunomono, - 28g  Manga, - 28g  Abacate, - 7g   Milho Desidratado Com toque de mel, gergelim e cebolinha.",
        price: "R$ 0",
        color: "#2a1a10",
        image: "img/poke-shimeji.jpg?w=1200&q=80",
        thumb: "img/poke-shimeji.jpg?w=600&q=80"
      },
            {
        id: 12, category: "Pokes",
        title: "Poke Domó Frango com Shimeji",
        description:  "*Poke 500g* - 200g Arroz Japonês, - 130g Shimeji Puxado na Manteiga, - 40g Manga Doce, - 40g Abacate Cremoso, - 40g Tomatinhos, - 40g Sunomono, - 10g Milho Desidratado. Com toque de mel, gergelim e cebolinha",
        description2: "*Poke 350g* - 140g Arroz Japonês, - 91g  Shimeji Puxado na Manteiga, - 28g  Manga Doce, - 28g  Abacate Cremoso,- 28g  Tomatinhos, - 28g  Sunomono, - 7g  Milho Desidratado. Com toque de mel, gergelim e cebolinha.",
        price: "R$ 0",
        color: "#2a1a10",
        image: "img/poke-frago-com-shimeji.jpg?w=1200&q=80",
        thumb: "img/poke-frago-com-shimeji.jpg?w=600&q=80"
      },
      {
        id: 13, category: "Temakis",
        title: "Combo Temaki Skin Grande + Coca + 4 Gunkan Goiabada",
        description: "• 1 Temaki com Pele de Salmão Frita, Cream Cheese, Cebolinha e Gergelim. • 1 Coca Lata 350ml. • 4 Gunkan Romeu e Julieta (Goiabada e Cream Cheese com Raspas de Limão).",
        description2: "00",
        price: "R$ 0",
        color: "#1a2030",
        image: "img/temaki-skin-coca-romeu-julieta-4und.jpg?w=1200&q=80",
        thumb: "img/temaki-skin-coca-romeu-julieta-4und.jpg?w=600&q=80"
      }
    ];