//Bonett & Wright (2015) Function 3: Sample size to estimate a Cronbach’s alpha reliability with desired precision
function sizeCIrel() {
    //arguments
    alpha = document.ss_alpha_dp.alpha.value;
    q = document.ss_alpha_dp.q.value;
    w = document.ss_alpha_dp.w.value;   
    r = document.ss_alpha_dp.r.value;
    //returns
    z = jStat.normal.inv(1 - alpha/2, 0, 1);
    n0 = Math.ceil((8*q/ (q - 1))* Math.pow(1 - r, 2)* Math.pow(z/w, 2) + 2);
    b = Math.log(n0/ (n0 - 1));
    LL = 1 - Math.exp(Math.log(1 - r) - b + z* Math.sqrt(2*q/ ((q - 1)*(n0 - 2))));
    UL = 1 - Math.exp(Math.log(1 - r) - b - z* Math.sqrt(2*q/ ((q - 1)*(n0 - 2))));
    w0 = UL - LL;
    n = Math.ceil((n0 - 2)* Math.pow(w0/w, 2) + 2);
    //return
    document.ss_alpha_dp.n.value = n;
    return;
}