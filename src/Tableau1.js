class Tableau1 extends Phaser.Scene{

    preload() {
        this.load.image('square','assets/carre.png');
        this.load.image('circle','assets/cercle.png');
    }


    create(){


        this.speedX = 0
        while(this.speedX===0){
            this.speedX = 500*Phaser.Math.Between(-1,1)
        }
        this.speedY = Phaser.Math.Between(-500, 500)
        this.maxspeed = 500

        this.balle = this.physics.add.sprite(400, 580, 'circle')
        this.balle.setDisplaySize(20, 20)
        this.balle.body.setBounce(1,1);
        this.balle.setTintFill(0xFFFFFF);
        this.balle.body.setAllowGravity(false)

        this.murgauche = this.physics.add.sprite(0, 0, 'square').setOrigin(0, 0)
        this.murgauche.setDisplaySize(20, 800)
        this.murgauche.body.setAllowGravity(false)
        this.murgauche.setImmovable(true);

        this.murdroite = this.physics.add.sprite(780, 0, 'square').setOrigin(0, 0)
        this.murdroite.setDisplaySize(20, 1000)
        this.murdroite.body.setAllowGravity(false)
        this.murdroite.setImmovable(true);

        this.murhaut = this.physics.add.sprite(0, 0, 'square').setOrigin(0, 0)
        this.murhaut.setDisplaySize(1000, 20)
        this.murhaut.body.setAllowGravity(false)
        this.murhaut.setImmovable(true);

        this.player1 = this.physics.add.sprite(400, 790, 'square')
        this.player1.setDisplaySize(200, 20)
        this.player1.body.setAllowGravity(false)
        this.player1.setTintFill(0xFFFFFF);
        this.player1.setImmovable(true)





/** PREMIRE RANGEE DE BRIQUES */

        this.brique1 = this.physics.add.sprite(155,400,'square')
        this.brique1.setDisplaySize(60,30)
        this.brique1.body.setAllowGravity(false)
        this.brique1.setImmovable(true)

        this.brique2 = this.physics.add.sprite(this.brique1.x+61,400,'square')
        this.brique2.setDisplaySize(60,30)
        this.brique2.body.setAllowGravity(false)
        this.brique2.setImmovable(true)

        this.brique3 = this.physics.add.sprite(this.brique2.x+61,400,'square')
        this.brique3.setDisplaySize(60,30)
        this.brique3.body.setAllowGravity(false)
        this.brique3.setImmovable(true)

        this.brique4 = this.physics.add.sprite(this.brique3.x+61,400,'square')
        this.brique4.setDisplaySize(60,30)
        this.brique4.body.setAllowGravity(false)
        this.brique4.setImmovable(true)

        this.brique5 = this.physics.add.sprite(this.brique4.x+61,400,'square')
        this.brique5.setDisplaySize(60,30)
        this.brique5.body.setAllowGravity(false)
        this.brique5.setImmovable(true)

        this.brique6 = this.physics.add.sprite(this.brique5.x+61,400,'square')
        this.brique6.setDisplaySize(60,30)
        this.brique6.body.setAllowGravity(false)
        this.brique6.setImmovable(true)

        this.brique7 = this.physics.add.sprite(this.brique6.x+61,400,'square')
        this.brique7.setDisplaySize(60,30)
        this.brique7.body.setAllowGravity(false)
        this.brique7.setImmovable(true)

        this.brique8 = this.physics.add.sprite(this.brique7.x+61,400,'square')
        this.brique8.setDisplaySize(60,30)
        this.brique8.body.setAllowGravity(false)
        this.brique8.setImmovable(true)

        this.brique9 = this.physics.add.sprite(this.brique8.x+61,400,'square')
        this.brique9.setDisplaySize(60,30)
        this.brique9.body.setAllowGravity(false)
        this.brique9.setImmovable(true)

/** SECONDE RANGEE DE BRIQUES */

        this.brique10 = this.physics.add.sprite(155,369,'square')
        this.brique10.setDisplaySize(60,30)
        this.brique10.body.setAllowGravity(false)
        this.brique10.setImmovable(true)

        this.brique11 = this.physics.add.sprite(this.brique10.x+61,369,'square')
        this.brique11.setDisplaySize(60,30)
        this.brique11.body.setAllowGravity(false)
        this.brique11.setImmovable(true)

        this.brique12 = this.physics.add.sprite(this.brique11.x+61,369,'square')
        this.brique12.setDisplaySize(60,30)
        this.brique12.body.setAllowGravity(false)
        this.brique12.setImmovable(true)

        this.brique13 = this.physics.add.sprite(this.brique12.x+61,369,'square')
        this.brique13.setDisplaySize(60,30)
        this.brique13.body.setAllowGravity(false)
        this.brique13.setTintFill(0x7CFC00);
        this.brique13.setImmovable(true)

        this.brique14 = this.physics.add.sprite(this.brique13.x+61,369,'square')
        this.brique14.setDisplaySize(60,30)
        this.brique14.body.setAllowGravity(false)
        this.brique14.setTintFill(0xFF0000);
        this.brique14.setImmovable(true)

        this.brique15 = this.physics.add.sprite(this.brique14.x+61,369,'square')
        this.brique15.setDisplaySize(60,30)
        this.brique15.body.setAllowGravity(false)
        this.brique15.setImmovable(true)

        this.brique16 = this.physics.add.sprite(this.brique15.x+61,369,'square')
        this.brique16.setDisplaySize(60,30)
        this.brique16.body.setAllowGravity(false)
        this.brique16.setImmovable(true)

        this.brique17 = this.physics.add.sprite(this.brique16.x+61,369,'square')
        this.brique17.setDisplaySize(60,30)
        this.brique17.body.setAllowGravity(false)
        this.brique17.setImmovable(true)

        this.brique18 = this.physics.add.sprite(this.brique17.x+61,369,'square')
        this.brique18.setDisplaySize(60,30)
        this.brique18.body.setAllowGravity(false)
        this.brique18.setImmovable(true)

/** TROISIEME RANGEE DE BRIQUES */

        this.brique19 = this.physics.add.sprite(155,338,'square')
        this.brique19.setDisplaySize(60,30)
        this.brique19.body.setAllowGravity(false)
        this.brique19.setImmovable(true)

        this.brique20 = this.physics.add.sprite(this.brique19.x+61,338,'square')
        this.brique20.setDisplaySize(60,30)
        this.brique20.body.setAllowGravity(false)
        this.brique20.setImmovable(true)

        this.brique21 = this.physics.add.sprite(this.brique20.x+61,338,'square')
        this.brique21.setDisplaySize(60,30)
        this.brique21.body.setAllowGravity(false)
        this.brique21.setImmovable(true)

        this.brique22 = this.physics.add.sprite(this.brique21.x+61,338,'square')
        this.brique22.setDisplaySize(60,30)
        this.brique22.body.setAllowGravity(false)
        this.brique22.setImmovable(true)

        this.brique23 = this.physics.add.sprite(this.brique22.x+61,338,'square')
        this.brique23.setDisplaySize(60,30)
        this.brique23.body.setAllowGravity(false)
        this.brique23.setImmovable(true)

        this.brique24 = this.physics.add.sprite(this.brique23.x+61,338,'square')
        this.brique24.setDisplaySize(60,30)
        this.brique24.body.setAllowGravity(false)
        this.brique24.setImmovable(true)

        this.brique25 = this.physics.add.sprite(this.brique24.x+61,338,'square')
        this.brique25.setDisplaySize(60,30)
        this.brique25.body.setAllowGravity(false)
        this.brique25.setImmovable(true)

        this.brique26 = this.physics.add.sprite(this.brique25.x+61,338,'square')
        this.brique26.setDisplaySize(60,30)
        this.brique26.body.setAllowGravity(false)
        this.brique26.setImmovable(true)

        this.brique27 = this.physics.add.sprite(this.brique26.x+61,338,'square')
        this.brique27.setDisplaySize(60,30)
        this.brique27.body.setAllowGravity(false)
        this.brique27.setImmovable(true)

/** QUATRIEME RANGEE DE BRIQUES */

        this.brique28 = this.physics.add.sprite(155,307,'square')
        this.brique28.setDisplaySize(60,30)
        this.brique28.body.setAllowGravity(false)
        this.brique28.setImmovable(true)

        this.brique29 = this.physics.add.sprite(this.brique28.x+61,307,'square')
        this.brique29.setDisplaySize(60,30)
        this.brique29.body.setAllowGravity(false)
        this.brique29.setImmovable(true)

        this.brique30 = this.physics.add.sprite(this.brique29.x+61,307,'square')
        this.brique30.setDisplaySize(60,30)
        this.brique30.body.setAllowGravity(false)
        this.brique30.setImmovable(true)

        this.brique31 = this.physics.add.sprite(this.brique30.x+61,307,'square')
        this.brique31.setDisplaySize(60,30)
        this.brique31.body.setAllowGravity(false)
        this.brique31.setImmovable(true)

        this.brique32 = this.physics.add.sprite(this.brique31.x+61,307,'square')
        this.brique32.setDisplaySize(60,30)
        this.brique32.body.setAllowGravity(false)
        this.brique32.setImmovable(true)

        this.brique33 = this.physics.add.sprite(this.brique32.x+61,307,'square')
        this.brique33.setDisplaySize(60,30)
        this.brique33.body.setAllowGravity(false)
        this.brique33.setImmovable(true)

        this.brique34 = this.physics.add.sprite(this.brique33.x+61,307,'square')
        this.brique34.setDisplaySize(60,30)
        this.brique34.body.setAllowGravity(false)
        this.brique34.setImmovable(true)

        this.brique35 = this.physics.add.sprite(this.brique34.x+61,307,'square')
        this.brique35.setDisplaySize(60,30)
        this.brique35.body.setAllowGravity(false)
        this.brique35.setImmovable(true)

        this.brique36 = this.physics.add.sprite(this.brique35.x+61,307,'square')
        this.brique36.setDisplaySize(60,30)
        this.brique36.body.setAllowGravity(false)
        this.brique36.setImmovable(true)

/** CINQUIEME RANGEE DE BRIQUES */

        this.brique37 = this.physics.add.sprite(155,276,'square')
        this.brique37.setDisplaySize(60,30)
        this.brique37.body.setAllowGravity(false)
        this.brique37.setImmovable(true)

        this.brique38 = this.physics.add.sprite(this.brique37.x+61,276,'square')
        this.brique38.setDisplaySize(60,30)
        this.brique38.body.setAllowGravity(false)
        this.brique38.setImmovable(true)

        this.brique39 = this.physics.add.sprite(this.brique38.x+61,276,'square')
        this.brique39.setDisplaySize(60,30)
        this.brique39.body.setAllowGravity(false)
        this.brique39.setImmovable(true)

        this.brique40 = this.physics.add.sprite(this.brique39.x+61,276,'square')
        this.brique40.setDisplaySize(60,30)
        this.brique40.body.setAllowGravity(false)
        this.brique40.setImmovable(true)

        this.brique41 = this.physics.add.sprite(this.brique40.x+61,276,'square')
        this.brique41.setDisplaySize(60,30)
        this.brique41.body.setAllowGravity(false)
        this.brique41.setImmovable(true)

        this.brique42 = this.physics.add.sprite(this.brique41.x+61,276,'square')
        this.brique42.setDisplaySize(60,30)
        this.brique42.body.setAllowGravity(false)
        this.brique42.setImmovable(true)

        this.brique43 = this.physics.add.sprite(this.brique42.x+61,276,'square')
        this.brique43.setDisplaySize(60,30)
        this.brique43.body.setAllowGravity(false)
        this.brique43.setImmovable(true)

        this.brique44 = this.physics.add.sprite(this.brique43.x+61,276,'square')
        this.brique44.setDisplaySize(60,30)
        this.brique44.body.setAllowGravity(false)
        this.brique44.setImmovable(true)

        this.brique45 = this.physics.add.sprite(this.brique44.x+61,276,'square')
        this.brique45.setDisplaySize(60,30)
        this.brique45.body.setAllowGravity(false)
        this.brique45.setImmovable(true)

/** COLLIDERS BRIQUES */
        let me = this;


        this.physics.add.collider(this.brique1, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique1)
            me.brique1.body.setEnable(false);
            me.brique1.setVisible(false);
        })

        this.physics.add.collider(this.brique2, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique2)
            me.brique2.body.setEnable(false);
            me.brique2.setVisible(false);
        })

        this.physics.add.collider(this.brique3, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique3)
            me.brique3.body.setEnable(false);
            me.brique3.setVisible(false);
        })

        this.physics.add.collider(this.brique4, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique4)
            me.brique4.body.setEnable(false);
            me.brique4.setVisible(false);
        })

        this.physics.add.collider(this.brique5, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique5)
            me.brique5.body.setEnable(false);
            me.brique5.setVisible(false);
        })

        this.physics.add.collider(this.brique6, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique6)
            me.brique6.body.setEnable(false);
            me.brique6.setVisible(false);
        })

        this.physics.add.collider(this.brique7, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique7)
            me.brique7.body.setEnable(false);
            me.brique7.setVisible(false);
        })

        this.physics.add.collider(this.brique8, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique8)
            me.brique8.body.setEnable(false);
            me.brique8.setVisible(false);
        })

        this.physics.add.collider(this.brique9, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique9)
            me.brique9.body.setEnable(false);
            me.brique9.setVisible(false);
        })

        this.physics.add.collider(this.brique10, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique10)
            me.brique10.body.setEnable(false);
            me.brique10.setVisible(false);
        })

        this.physics.add.collider(this.brique11, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique11)
            me.brique11.body.setEnable(false);
            me.brique11.setVisible(false);
        })

        this.physics.add.collider(this.brique12, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique12)
            me.brique12.body.setEnable(false);
            me.brique12.setVisible(false);
        })

        this.physics.add.collider(this.brique13, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique13)
            me.brique13.body.setEnable(false);
            me.brique13.setVisible(false);
        })

        this.physics.add.collider(this.brique14, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique14)
            me.brique14.body.setEnable(false);
            me.brique14.setVisible(false);
        })

        this.physics.add.collider(this.brique15, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique15)
            me.brique15.body.setEnable(false);
            me.brique15.setVisible(false);
        })

        this.physics.add.collider(this.brique16, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique16)
            me.brique16.body.setEnable(false);
            me.brique16.setVisible(false);
        })

        this.physics.add.collider(this.brique17, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique17)
            me.brique17.body.setEnable(false);
            me.brique17.setVisible(false);
        })

        this.physics.add.collider(this.brique18, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique18)
            me.brique18.body.setEnable(false);
            me.brique18.setVisible(false);
        })

        this.physics.add.collider(this.brique19, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique19)
            me.brique19.body.setEnable(false);
            me.brique19.setVisible(false);
        })

        this.physics.add.collider(this.brique20, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique20)
            me.brique20.body.setEnable(false);
            me.brique20.setVisible(false);
        })

        this.physics.add.collider(this.brique21, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique21)
            me.brique21.body.setEnable(false);
            me.brique21.setVisible(false);
        })

        this.physics.add.collider(this.brique22, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique22)
            me.brique22.body.setEnable(false);
            me.brique22.setVisible(false);
        })

        this.physics.add.collider(this.brique23, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique23)
            me.brique23.body.setEnable(false);
            me.brique23.setVisible(false);
        })

        this.physics.add.collider(this.brique24, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique24)
            me.brique24.body.setEnable(false);
            me.brique24.setVisible(false);
        })

        this.physics.add.collider(this.brique25, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique25)
            me.brique25.body.setEnable(false);
            me.brique25.setVisible(false);
        })

        this.physics.add.collider(this.brique26, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique26)
            me.brique26.body.setEnable(false);
            me.brique26.setVisible(false);
        })

        this.physics.add.collider(this.brique27, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique27)
            me.brique27.body.setEnable(false);
            me.brique27.setVisible(false);
        })

        this.physics.add.collider(this.brique28, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique28)
            me.brique28.body.setEnable(false);
            me.brique28.setVisible(false);
        })

        this.physics.add.collider(this.brique29, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique29)
            me.brique29.body.setEnable(false);
            me.brique29.setVisible(false);
        })

        this.physics.add.collider(this.brique30, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique30)
            me.brique30.body.setEnable(false);
            me.brique30.setVisible(false);
        })

        this.physics.add.collider(this.brique31, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique31)
            me.brique31.body.setEnable(false);
            me.brique31.setVisible(false);
        })

        this.physics.add.collider(this.brique32, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique32)
            me.brique32.body.setEnable(false);
            me.brique32.setVisible(false);
        })

        this.physics.add.collider(this.brique33, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique33)
            me.brique33.body.setEnable(false);
            me.brique33.setVisible(false);
        })

        this.physics.add.collider(this.brique34, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique34)
            me.brique34.body.setEnable(false);
            me.brique34.setVisible(false);
        })

        this.physics.add.collider(this.brique35, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique35)
            me.brique35.body.setEnable(false);
            me.brique35.setVisible(false);
        })

        this.physics.add.collider(this.brique36, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique36)
            me.brique36.body.setEnable(false);
            me.brique36.setVisible(false);
        })

        this.physics.add.collider(this.brique37, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique37)
            me.brique37.body.setEnable(false);
            me.brique37.setVisible(false);
        })

        this.physics.add.collider(this.brique38, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique38)
            me.brique38.body.setEnable(false);
            me.brique38.setVisible(false);
        })

        this.physics.add.collider(this.brique39, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique39)
            me.brique39.body.setEnable(false);
            me.brique39.setVisible(false);
        })

        this.physics.add.collider(this.brique40, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique40)
            me.brique40.body.setEnable(false);
            me.brique40.setVisible(false);
        })

        this.physics.add.collider(this.brique41, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique41)
            me.brique41.body.setEnable(false);
            me.brique41.setVisible(false);
        })

        this.physics.add.collider(this.brique42, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique42)
            me.brique42.body.setEnable(false);
            me.brique42.setVisible(false);
        })

        this.physics.add.collider(this.brique43, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique43)
            me.brique43.body.setEnable(false);
            me.brique43.setVisible(false);
        })

        this.physics.add.collider(this.brique44, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique44)
            me.brique44.body.setEnable(false);
            me.brique44.setVisible(false);
        })

        this.physics.add.collider(this.brique45, this.balle,function() {
            console.log('touche brique')
            //me.rebond(me.brique45)
            me.brique45.body.setEnable(false);
            me.brique45.setVisible(false);
        })







        this.physics.add.collider(this.player1, this.balle,function(){
            console.log('touche player 1')
            me.rebond(me.player1)
        })

        this.physics.add.collider(this.balle, this.murgauche)
        this.physics.add.collider(this.balle, this.murdroite)
        this.physics.add.collider(this.balle, this.murhaut)

        this.balle.setMaxVelocity(this.maxspeed,this.maxspeed)

        this.physics.add.collider(this.murhaut, this.player1)
        this.physics.add.collider(this.murgauche, this.player1)
        this.physics.add.collider(this.murdroite, this.player1)

        this.player1Speed = 0

        this.joueurGauche = new Joueur('Score','joueurGauche')
        console.log(this.joueurGauche)

        this.balleAucentre();
        this.initKeyboard()
    }

    rebond(players){
        let me = this ;
        console.log(this.player1.x);
        console.log(me.balle.x);
        let longueurPlayers = players.displayWidth;

        let positionRelativePlayers = (this.balle.x - players.x);

        positionRelativePlayers = (positionRelativePlayers / longueurPlayers)
        positionRelativePlayers = positionRelativePlayers*2-1;

        this.balle.setVelocityX(this.balle.body.velocity.x + positionRelativePlayers * 50);

    }

    balleAucentre(){
        this.balle.x = 400
        this.balle.y = 480
        this.speedX = 0

        this.balle.setVelocityX(0)
        this.balle.setVelocityY(Math.random()>0.5?-300:300)
    }

    resetviescore(){
        this.vie = 3
        this._score = 0
    }

    /**
     *
     * @param {Joueur} joueur
     */
    win(joueur){
        //alert('Joueur '+joueur.name+' gagne')
        joueur.score ++;
        //alert('Le score est de '+this.joueurGauche.score+' a '+this.joueurDroite.score)
        this.balleAucentre();
    }


    initKeyboard(){
        let me = this
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.player1Speed = -5
                    break;
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.player1Speed = 5
                    break;
            }
        });
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.player1Speed = 0
                    break;
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.player1Speed = 0
                    break;
            }
        });
    }




    update(){
        if(this.balle.y>810){
            this.balleAucentre()
        }

        this.player1.x += this.player1Speed
    }



}

