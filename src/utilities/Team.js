class Team{
    constructor(name){
        this.name = name;
        this.pj = 0;
        this.g = 0;
        this.e = 0;
        this.p = 0;
        this.gf = 0;
        this.gc = 0;
        this.dg = 0;
        this.pts = 0;
        this.data = null;
    }

    addMatchInfo(data){
      this.data = data;
    }

    getName(){
      return this.name;
    }

    get_pj(){
        return this.pj;
    }

    get_g(){
      return this.g;
    }

    get_e(){
        return this.e;
    }

    get_p(){
      return this.p;
    }

    get_gf(){
      return this.gf;
    }

    get_gc(){
      return this.gc;
    }

    get_dg(){
      return this.dg;
    }

    get_pts(){
      return this.pts;
    }

    get_dg(){
      return this.gf - this.gc;
    }

    calculateHome(data){
      this.pj += 1
      this.gf += parseInt(data.goals1,10);
      this.gc += parseInt(data.goals2,10);
      if(parseInt(data.goals1,10) > parseInt(data.goals2,10)){
        this.pts += 3;
        this.g += 1
      }else if (parseInt(data.goals1,10) < parseInt(data.goals2,10)) {
        this.p += 1
      }else{
        this.pts += 1;
        this.e += 1;
      }
    }

    calculateAway(data){
      this.pj += 1
      this.gf += parseInt(data.goals2,10);
      this.gc += parseInt(data.goals1,10);
      if(parseInt(data.goals2,10) > parseInt(data.goals1,10)){
        this.pts += 3;
        this.g += 1
      }else if (parseInt(data.goals2,10) < parseInt(data.goals1,10)) {
        this.p += 1
      }else{
        this.pts += 1;
        this.e += 1;
      }
    }
}

export default Team;
