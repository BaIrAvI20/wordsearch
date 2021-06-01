function setup(){
    createCanvas(1536, 864);
    
    Aletter = new Block(width/2, height/2, A);
    A1letter = new Block(568, 482, A);
    A2letter = new Block(668, 532, A);
    A3letter = new Block(818, 632, A);
    A4letter = new Block(918, 682, A);
    Bletter = new Block(Aletter.x + 50, Aletter.y, B);
    B1letter = new Block(668, 732, B)
    Cletter = new Block(Bletter.x + 50, Bletter.y, C);
    C2letter = new Block(968, 732, C)
    C1letter = new Block(718, 532, C);
    Dletter = new Block(Cletter.x + 50, Cletter.y, D);
    D1letter = new Block(718, 632, D);
    D2letter = new Block(718, 632, D);
    Eletter = new Block(Dletter.x + 50, Dletter.y, E);
    E1letter = new Block(618, 532, E);
    E2letter = new Block(768, 532, E);
    E3letter = new Block(568, 582, E);
    E4letter = new Block(768, 632, E);
    E5letter = new Block(868, 682, E);
    E6letter = new Block(618, 732, E);
    E7letter = new Block(718, 732, E);
    Fletter = new Block(Aletter.x, Aletter.y + 50, F);
    F1letter = new Block(818, 532, F);
    F2letter = new Block(818, 582, F);
    F3letter = new Block(968, 682, F);
    Gletter = new Block(Cletter.x, Cletter.y + 50, G);
    G1letter =  new Block(868, 632, G);
    Hletter = new Block(Dletter.x, Dletter.y + 50, H);
    H1letter = new Block(768, 732, H)
    Iletter = new Block(Eletter.x, Eletter.y + 50, I);
    I1letter = new Block(868, 582, I);
    I2letter = new Block(668, 632, I);
    I3letter = new Block(618, 682, I);
    Jletter = new Block(Aletter.x, Aletter.y - 50, J);
    Kletter = new Block(Bletter.x, Bletter.y - 50, K);
    Lletter = new Block(Cletter.x, Cletter.y - 50, L);
    L1letter = new Block(918, 532, L);
    L2letter = new Block(818, 682, L);
    L3letter = new Block(618, 632, L);
    L4letter = new Block(968, 632, L);
    L5letter = new Block(668, 682, L);
    Mletter = new Block(Dletter.x, Dletter.y - 50, M);
    Nletter = new Block(Aletter.x - 50, Aletter.y, N);
    N1letter = new Block(718, 582, N);
    Oletter = new Block(Nletter.x - 50, Aletter.y, O);
    O1letter = new Block(818, 732, O);
    Pletter = new Block(Oletter.x - 50, Aletter.y, P);
    P1letter = new Block(568, 532, P);
    Qletter = new Block(Pletter.x - 50, Aletter.y, Q);
    Q1letter = new Block(568, 732, Q)
    Rletter = new Block(Nletter.x, Aletter.y - 50, R);
    R1letter = new Block(918, 632, R);
    R2letter = new Block(918, 732, R)
    Sletter = new Block(Oletter.x, Aletter.y - 50, S);
    S1letter = new Block(568, 632, S);
    Tletter = new Block(Pletter.x, Aletter.y - 50, T);
    T1letter = new Block(768, 582, T);
    T2letter = new Block(868, 732, T); 
    Uletter = new Block(Bletter.x, Bletter.y + 50, U);
    U1letter = new Block(868, 532, U);
    Vletter = new Block(Eletter.x, Eletter.y - 50, V);
    V1letter = new Block(668, 582, V);
    Wletter = new Block(Qletter.x, Qletter.y - 50, W);
    W1letter = new Block(768, 682, W);
    Xletter = new Block(Nletter.x, Nletter.y + 50, X);
    X1letter = new Block(568, 682, X);
    Yletter = new Block(Oletter.x, Oletter.y + 50, Y);
    Y1letter = new Block(718, 682, Y);
    Zletter = new Block(Pletter.x, Pletter.y + 50, Z);
    Z1letter = new Block(968, 532, Z);
    Z2letter = new Block(618, 582, Z);
    Z3letter = new Block(918, 582, Z);
    Z4letter = new Block(968, 582, Z);
  
    Pgreenletter = new Block(568, 532, Pgreen);
    Egreenletter = new Block(618, 532, Egreen);
    Agreenletter = new Block(668, 532, Agreen);
    Cgreenletter = new Block(718, 532, Cgreen);
    E2greenletter = new Block(768, 532, Egreen);
    Fgreenletter = new Block(818, 532, Fgreen);
    Ugreenletter = new Block(868, 532, Ugreen);
    Lgreenletter = new Block(918, 532, Lgreen);
    
    Bgreenletter = new Block(Aletter.x + 50, Aletter.y, Bgreen);
    U2greenletter = new Block(Bletter.x, Bletter.y + 50, Ugreen);
    F2greenletter = new Block(818, 582, Fgreen);
    A2greenletter = new Block(818, 632, Agreen);
    L2greenletter = new Block(818, 682, Lgreen);
    Ogreenletter = new Block(818, 732, Ogreen);
    
    Sgreenletter = new Block(568, 632, Sgreen);
    L3greenletter = new Block(618, 632, Lgreen);
    Igreenletter = new Block(668, 632, Igreen);
    Dgreenletter = new Block(718, 632, Dgreen);
    E3greenletter = new Block(768, 632, Egreen);

    I2greenletter = new Block(618, 682, Igreen);
    E4greenletter = new Block(618, 732, Egreen);

    Ygreenletter = new Block(718, 682, Ygreen);
    E5greenletter = new Block(718, 732, Egreen);

    Hgreenletter = new Block(768, 732, Hgreen);
    T1greenletter = new Block(868, 732, Tgreen);

    I3greenletter = new Block(868, 582, Igreen);
    Zgreenletter = new Block(918, 582, Zgreen);
    Z2greenletter = new Block(968, 582, Zgreen);
}

function draw() {   
    background("green");

    Aletter.display();
    A1letter.display();
    A2letter.display();
    A3letter.display();
    A4letter.display();

    Bletter.display();
    B1letter.display(); 

    Cletter.display();
    C1letter.display();
    C2letter.display(); 

    Dletter.display();
    D1letter.display();
    D2letter.display();
  
  
    Eletter.display();
    E1letter.display();
    E3letter.display();
    E2letter.display();
    E4letter.display();
    E5letter.display();
    E6letter.display();
    E7letter.display();
  
  Fletter.display();
    F1letter.display();
    F2letter.display();
    F3letter.display();
    
    Gletter.display();
    G1letter.display();

    Hletter.display();
    H1letter.display();
  
  Iletter.display();
    I1letter.display();
    I2letter.display();
    I3letter.display();

    Jletter.display();

    Kletter.display();

    Lletter.display();
    L1letter.display();
    L2letter.display();
    L3letter.display();
    L4letter.display();
    L5letter.display();

    Mletter.display();

    Nletter.display();
    N1letter.display();

    Oletter.display();
    O1letter.display();

    Pletter.display();
    P1letter.display();

    Qletter.display();
    Q1letter.display();

    Rletter.display();
    R1letter.display();
    R2letter.display(); 

    Sletter.display();
    S1letter.display();

    Tletter.display();
    T1letter.display();
    T2letter.display();

    Uletter.display();
    U1letter.display();

    Vletter.display();
    V1letter.display();

    Wletter.display();
    W1letter.display();
    Xletter.display();
    X1letter.display();
    Yletter.display();
    Y1letter.display();
    Zletter.display();
    Z1letter.display();
    Z2letter.display();
    Z3letter.display();
    Z4letter.display();
    
    if(mousePressedOver(P1letter.block)){
    Pgreenletter.display();
      word++;
      console.log(word);
    }else if(mousePressedOver(E1letter.block)){
      Egreenletter.display();
    }else if(mousePressedOver(A2letter.block)){
      Agreenletter.display();
    }else if(mousePressedOver(C1letter.block)){
      Cgreenletter.display();
    }else if(mousePressedOver(E2letter.block)){
      E2greenletter.display();
    }else if(mousePressedOver(F1letter.block)){
      Fgreenletter.display();
    }else if(mousePressedOver(U1letter.block)){
      Ugreenletter.display();
    }else if(mousePressedOver(L1letter.block)){
      Lgreenletter.display();
    }

    textSize(20);
    fill("blue");
    text("Peaceful", displayWidth/2, 100);

    drawSprites();
}
