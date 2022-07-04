var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(600, 600); 
       
        frameRate(60);
       
        var scene;

        var Dragon = function() {
            this.x = 200;
            this.y = 200;
            this.w = 150;
            this.h = 100;
            this.vx = 0;
            this.vy = 0;
            this.segments = [];
            this.timer = 0;
            this.speed = 4;
            this.lift = 3;
            this.showLegs = true;
            this.wing = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                x3: 0,
                y3: 0,
                x4: 0,
                y4: 0,
                spines: {
                    a: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    },
                    b: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    },
                    c: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    },
                    d: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    }
                }
            };
            this.nodes = [
                10,
                14,
                12,
                18,
                23,
                28,
                37,
                42,
                50,
                50,
                46,
                42,
                35,
                28,
                22,
                18,
                15,
                14,
                11,
                9,
                8,
                7,
                5,
                3,
                2,
                1,
                1,
                1
            ];
            this.m = 0;
            this.m2 = 0;
            this.diff = 0;
            this.colorThemes = {
                red: {
                    spikes: color(71, 14, 7),
                    black: color(56, 55, 46),
                    body: color(128, 14, 14),
                    wingArm: color(107, 8, 8),
                    wingArmSpike: color(76, 77, 76),
                    wingUpper: color(122, 32, 16),
                    wingLower: color(148, 46, 33),
                    wingSpines: color(71, 70, 71, 150),
                    legsBehind: color(110, 13, 13)
                },
                green: {
                    spikes: color(18, 46, 4),
                    black: color(120, 110, 20),
                    body: color(33, 82, 16),
                    wingArm: color(39, 77, 10),
                    wingArmSpike: color(76, 77, 76),
                    wingUpper: color(44, 82, 15),
                    wingLower: color(49, 110, 25),
                    wingSpines: color(71, 70, 71, 150),
                    legsBehind: color(30, 77, 14)
                },
                black: {
                    spikes: color(55, 56, 55),
                    black: color(99, 96, 67),
                    body: color(31, 29, 31),
                    wingArm: color(60, 71, 51),
                    wingArmSpike: color(76, 77, 76),
                    wingUpper: color(22, 23, 21),
                    wingLower: color(38, 46, 35),
                    wingSpines: color(64, 64, 64, 150),
                    legsBehind: color(3, 3, 3)
                }
            };
            this.colors = this.colorThemes.red;

            this.setup = function() {
                for(var i = 0; i <= 27; i++) {
                    this.segments.push({
                       x: this.x + this.w * i / 27,
                       y: this.y
                    });
                }
            };
            this.setup();
            this.update = function() {
                this.diff = this.segments[0].y - this.segments[1].y;

                this.timer+=0.018;
                this.m = sin(this.timer * this.speed) * this.lift;
                this.m2 = cos(this.timer * this.speed) * this.lift;

                //update each of the segments
                for(var i = 0; i < this.segments.length; i++) {
                    var segment = this.segments[i];

                    if(i === 0) {
                        segment.y += this.m;
                        segment.x = this.x;
                    }
                    else {
                        segment.y = lerp(segment.y, this.segments[i-1].y, 0.20);
                        segment.x = lerp(segment.x, this.segments[i-1].x, 0.20);
                    }
                }

                //move the wing
                this.wing.x1 = this.segments[7].x;
                this.wing.y1 = this.segments[7].y + 10;
                this.wing.x2 = this.segments[7].x + 20;
                this.wing.y2 = this.segments[7].y + 10 + this.m * 15;
                this.wing.x3 = this.segments[7].x - 20;
                this.wing.y3 = this.segments[7].y + 10 + this.m * 30;
                this.wing.x4 = this.segments[7].x - 27;
                this.wing.y4 = this.segments[7].y + 10 + this.m * 35;

                //1st (top) spine
                this.wing.spines.a.x1 = this.wing.x1;
                this.wing.spines.a.y1 = this.segments[7].y + 40 + this.m * 47 - this.m2 * 6;
                this.wing.spines.a.x2 = this.segments[7].x + 90;
                this.wing.spines.a.y2 = this.segments[7].y + 40 + this.m * 55 - this.m2 * 6;

                //2nd spine
                this.wing.spines.b.x1 = this.wing.x1 + 20;
                this.wing.spines.b.y1 = this.segments[7].y + 40 + this.m * 42;
                this.wing.spines.b.x2 = this.segments[7].x + 95;
                this.wing.spines.b.y2 = this.segments[7].y + 40 + this.m * 45;

                //3rd spine
                this.wing.spines.c.x1 = this.wing.x1 + 25;
                this.wing.spines.c.y1 = this.segments[7].y + 40 + this.m * 35;
                this.wing.spines.c.x2 = this.segments[7].x + 100;
                this.wing.spines.c.y2 = this.segments[7].y + 40 + this.m * 32;

                //4th spine
                this.wing.spines.d.x1 = this.wing.x1 + 35;
                this.wing.spines.d.y1 = this.segments[7].y + 40 + this.m * 17;
                this.wing.spines.d.x2 = this.segments[7].x + 80;
                this.wing.spines.d.y2 = this.segments[7].y + 30 + this.m * 15;

                this.x-= this.speed;
            };
            this.drawFrontLeg = function(back) {
                var segment = this.segments[8];
                var node = this.nodes[8];

                pushMatrix();
                    translate(this.segments[8].x, this.segments[8].y);
                    translate(-225, -340);

                    if(back) {
                        translate(-10, 0);
                        fill(this.colors.legsBehind);
                    }
                    else {
                        fill(this.colors.body);
                    }

                    translate(224 + 11, 355);
                    rotate(radians(this.diff));
                    translate(-224 - 11, -355);

                    noStroke();
                    beginShape();
                        vertex(224, 355);
                        bezierVertex(226, 355, 230, 357, 233, 363);
                        bezierVertex(238, 368, 239, 374, 235, 380);
                        bezierVertex(229, 388, 222, 393, 220, 398);
                        bezierVertex(221, 402, 223, 404, 228, 408);
                        bezierVertex(223, 409, 218, 410, 213, 404);
                        bezierVertex(212, 398, 216, 389, 221, 376);
                        bezierVertex(209, 364, 204, 355 + this.diff * 0.5, 202, 355 + this.diff * 0.5);
                    endShape(CLOSE);
                popMatrix();
            };
            this.drawBackLeg = function(back) {
                var segment = this.segments[11];
                var node = this.nodes[11];

                pushMatrix();
                    translate(this.segments[11].x, this.segments[11].y);
                    translate(-278, -342);

                    if(back) {
                        translate(-10, 0);
                        fill(this.colors.legsBehind);
                    }
                    else {
                        fill(this.colors.body);
                    }

                    translate(286 + 17, 354);
                    rotate(radians(this.diff));
                    translate(-286 -17, -354);

                    noStroke();
                    beginShape();
                        vertex(286, 352);
                        bezierVertex(289, 356, 291, 365, 290, 376);
                        bezierVertex(296, 380, 300, 382, 307, 386);
                        bezierVertex(308, 394, 308, 409, 308, 416);
                        bezierVertex(309, 418, 312, 419, 316, 416);
                        bezierVertex(315, 421, 310, 425, 302, 423);
                        bezierVertex(300, 412, 300, 404, 299, 400);
                        bezierVertex(294, 395, 286, 394, 276, 391);
                        bezierVertex(268, 383, 261, 371, 252, 357);
                    endShape(CLOSE);
                popMatrix();
            };
            this.drawRightWing = function() {
                //wing covering
                noStroke();
                if(this.wing.y2 < this.wing.y1) {
                    fill(this.colors.wingUpper);
                }
                else {
                    fill(this.colors.wingLower);
                }

                noStroke();
                beginShape();
                    vertex(this.wing.x1, this.wing.y1);

                    bezierVertex(
                        this.wing.x2 - 10, this.wing.y2,
                        this.wing.x2 - 10, this.wing.y2, 
                        this.wing.x3, this.wing.y3);

                    bezierVertex(
                        this.wing.x3 - 5, this.wing.y3 - this.m2 * 3,
                        this.wing.spines.a.x1 - 5, this.wing.spines.a.y1 + this.diff * 0.5 - this.m2 * 3,
                        this.wing.spines.a.x1, this.wing.spines.a.y1 - this.m2 * 3);

                    bezierVertex(
                        this.wing.spines.a.x1 + 10, this.wing.spines.a.y1 - this.diff * 0.5,
                        this.wing.spines.a.x2 - 10, this.wing.spines.a.y2 + this.diff * 0.5,
                        this.wing.spines.a.x2, this.wing.spines.a.y2);

                    vertex(this.wing.spines.a.x2, this.wing.spines.a.y2);

                    bezierVertex(
                        this.wing.spines.a.x2 - 10, this.wing.spines.a.y2,
                        this.wing.spines.b.x2 - 15, this.wing.spines.b.y2 - this.diff * 0.5,
                        this.wing.spines.b.x2, this.wing.spines.b.y2);

                    bezierVertex(
                        this.wing.spines.b.x2 - 10, this.wing.spines.b.y2,
                        this.wing.spines.c.x2 - 15, this.wing.spines.c.y2,
                        this.wing.spines.c.x2, this.wing.spines.c.y2);

                    bezierVertex(
                        this.wing.spines.c.x2 - 10, this.wing.spines.c.y2,
                        this.wing.spines.d.x2 - 15, this.wing.spines.d.y2,
                        this.wing.spines.d.x2, this.wing.spines.d.y2);

                    bezierVertex(
                        this.wing.spines.d.x2 - 10, this.wing.spines.d.y2,
                        this.wing.x1 + 40 - 15, this.segments[9].y + this.nodes[9] * 0.2,
                        this.wing.x1 + 40, this.segments[9].y + this.nodes[9] * 0.2);
                endShape(CLOSE);

                //wing arm
                noFill();
                stroke(this.colors.wingArm);
                strokeWeight(5);
                line(this.wing.x1, this.wing.y1, this.wing.x2, this.wing.y2);
                line(this.wing.x2, this.wing.y2, this.wing.x3, this.wing.y3);

                //top of wing arm with small spike
                strokeWeight(4);
                bezier( 
                        this.wing.x3, this.wing.y3, 
                        this.wing.x3 - 3, this.wing.y3 + ((this.wing.y4 - this.wing.y3) * 0.3), 
                        this.wing.x4 - 2, this.wing.y4 - ((this.wing.y4 - this.wing.y3) * 0.5),
                        this.wing.x4, this.wing.y4);

                //spike on main arm
                noStroke();
                fill(this.colors.wingArmSpike);
                triangle(
                    this.wing.x4 - 2, this.wing.y4,
                    this.wing.x4 + 2, this.wing.y4,
                    this.wing.x4, this.wing.y4 + (this.wing.y4 - this.wing.y3));

                noFill();
                stroke(this.colors.wingSpines);
                strokeWeight(1);
                //1st (top) spine
                bezier(
                    this.wing.x3, this.wing.y3,
                    this.wing.x3 - 5, this.wing.y3,
                    this.wing.spines.a.x1 - 5, this.wing.spines.a.y1 + this.diff * 0.5 - this.m2 * 3,
                    this.wing.spines.a.x1, this.wing.spines.a.y1 - this.m2 * 3);
                bezier(
                    this.wing.spines.a.x1, this.wing.spines.a.y1 - this.m2 * 3,
                    this.wing.spines.a.x1 + 10, this.wing.spines.a.y1 - this.diff,
                    this.wing.spines.a.x2 - 10, this.wing.spines.a.y2 + this.diff * 0.5,
                    this.wing.spines.a.x2, this.wing.spines.a.y2);

                //2nd spine
                line(   this.wing.x3, this.wing.y3,
                        this.wing.spines.b.x1, this.wing.spines.b.y1);
                line(   this.wing.spines.b.x1, this.wing.spines.b.y1,
                        this.wing.spines.b.x2, this.wing.spines.b.y2);

                //3rd spine
                line(   this.wing.x3, this.wing.y3,
                        this.wing.spines.c.x1, this.wing.spines.c.y1);
                line(   this.wing.spines.c.x1, this.wing.spines.c.y1,
                        this.wing.spines.c.x2, this.wing.spines.c.y2);

                //4th spine
                line(   this.wing.x2, this.wing.y2,
                        this.wing.spines.d.x2, this.wing.spines.d.y2);
            };
            this.drawLeftWing = function() {
                //wing covering
                noStroke();
                if(this.wing.y2 >= this.wing.y1) {
                    fill(this.colors.wingUpper);
                    //line where wing joins to the body
                    stroke(40, 50);
                    line(this.wing.x1, this.wing.y1, this.wing.x1 + 40, this.segments[9].y + this.nodes[9] * 0.2);
                }
                else {
                    fill(this.colors.wingLower);
                }

                noStroke();
                beginShape();
                    vertex(this.wing.x1, this.wing.y1);

                    bezierVertex(
                        this.wing.x2 - 10, this.wing.y2,
                        this.wing.x2 - 10, this.wing.y2, 
                        this.wing.x3, this.wing.y3);

                    bezierVertex(
                        this.wing.x3 - 5, this.wing.y3 - this.m2 * 3,
                        this.wing.spines.a.x1 - 5, this.wing.spines.a.y1 + this.diff * 0.5 - this.m2 * 3,
                        this.wing.spines.a.x1, this.wing.spines.a.y1 - this.m2 * 3);

                    bezierVertex(
                        this.wing.spines.a.x1 + 10, this.wing.spines.a.y1 - this.diff * 0.5,
                        this.wing.spines.a.x2 - 10, this.wing.spines.a.y2 + this.diff * 0.5,
                        this.wing.spines.a.x2, this.wing.spines.a.y2);

                    vertex(this.wing.spines.a.x2, this.wing.spines.a.y2);

                    bezierVertex(
                        this.wing.spines.a.x2 - 10, this.wing.spines.a.y2,
                        this.wing.spines.b.x2 - 15, this.wing.spines.b.y2 - this.diff * 0.5,
                        this.wing.spines.b.x2, this.wing.spines.b.y2);

                    bezierVertex(
                        this.wing.spines.b.x2 - 10, this.wing.spines.b.y2,
                        this.wing.spines.c.x2 - 15, this.wing.spines.c.y2,
                        this.wing.spines.c.x2, this.wing.spines.c.y2);

                    bezierVertex(
                        this.wing.spines.c.x2 - 10, this.wing.spines.c.y2,
                        this.wing.spines.d.x2 - 15, this.wing.spines.d.y2,
                        this.wing.spines.d.x2, this.wing.spines.d.y2);

                    bezierVertex(
                        this.wing.spines.d.x2 - 10, this.wing.spines.d.y2,
                        this.wing.x1 + 40 - 15, this.segments[9].y + this.nodes[9] * 0.2,
                        this.wing.x1 + 40, this.segments[9].y + this.nodes[9] * 0.2);
                endShape(CLOSE);

                //wing arm
                noFill();
                stroke(this.colors.wingArm);
                strokeWeight(5);
                line(this.wing.x1, this.wing.y1, this.wing.x2, this.wing.y2);
                line(this.wing.x2, this.wing.y2, this.wing.x3, this.wing.y3);

                //top of wing arm with small spike
                strokeWeight(4);
                bezier( 
                        this.wing.x3, this.wing.y3, 
                        this.wing.x3 - 3, this.wing.y3 + ((this.wing.y4 - this.wing.y3) * 0.3), 
                        this.wing.x4 - 2, this.wing.y4 - ((this.wing.y4 - this.wing.y3) * 0.5),
                        this.wing.x4, this.wing.y4);

                //spike on main arm
                noStroke();
                fill(this.colors.wingArmSpike);
                triangle(
                    this.wing.x4 - 2, this.wing.y4,
                    this.wing.x4 + 2, this.wing.y4,
                    this.wing.x4, this.wing.y4 + (this.wing.y4 - this.wing.y3));

                noFill();
                stroke(this.colors.wingSpines);
                strokeWeight(1);
                //1st (top) spine
                bezier(
                    this.wing.x3, this.wing.y3,
                    this.wing.x3 - 5, this.wing.y3,
                    this.wing.spines.a.x1 - 5, this.wing.spines.a.y1 + this.diff * 0.5 - this.m2 * 3,
                    this.wing.spines.a.x1, this.wing.spines.a.y1 - this.m2 * 3);
                bezier(
                    this.wing.spines.a.x1, this.wing.spines.a.y1 - this.m2 * 3,
                    this.wing.spines.a.x1 + 10, this.wing.spines.a.y1 - this.diff,
                    this.wing.spines.a.x2 - 10, this.wing.spines.a.y2 + this.diff * 0.5,
                    this.wing.spines.a.x2, this.wing.spines.a.y2);

                //2nd spine
                line(   this.wing.x3, this.wing.y3,
                        this.wing.spines.b.x1, this.wing.spines.b.y1);
                line(   this.wing.spines.b.x1, this.wing.spines.b.y1,
                        this.wing.spines.b.x2, this.wing.spines.b.y2);

                //3rd spine
                line(   this.wing.x3, this.wing.y3,
                        this.wing.spines.c.x1, this.wing.spines.c.y1);
                line(   this.wing.spines.c.x1, this.wing.spines.c.y1,
                        this.wing.spines.c.x2, this.wing.spines.c.y2);

                //4th spine
                line(   this.wing.x2, this.wing.y2,
                        this.wing.spines.d.x2, this.wing.spines.d.y2);
            };
            this.drawHead = function() {
                pushMatrix();
                    translate(this.segments[0].x, this.segments[0].y);
                    rotate(radians(-this.m * 8));
                    translate(-65, -125);
                    scale(0.6);

                    noStroke();
                    fill(this.colors.body);
                    beginShape();
                        vertex(135, 200);
                        bezierVertex(141, 197, 149, 194, 156, 190);
                        bezierVertex(153, 196, 153, 204, 156, 208);
                        bezierVertex(150, 214, 148, 218, 150, 226);
                        bezierVertex(144, 227, 141, 235, 144, 243);
                        bezierVertex(142, 244, 136, 246, 135, 252);
                        vertex(130, 245);
                    endShape(CLOSE);

                    fill(this.colors.body);
                    beginShape();
                        vertex(72, 235);
                        vertex(73, 232);
                        bezierVertex(76, 228, 80, 224, 84, 222);
                        bezierVertex(90, 220, 94, 218, 98, 215);
                        bezierVertex(105, 209, 114, 203, 122, 200);
                        bezierVertex(130, 199, 136, 200, 138, 203);
                        bezierVertex(138, 206, 140, 209, 140, 211);
                        bezierVertex(137, 214, 136, 216, 138, 219);
                        bezierVertex(137, 221, 137, 223, 138, 225);
                        bezierVertex(136, 226, 134, 228, 136, 232);
                        bezierVertex(137, 234, 136, 236, 134, 237);
                        vertex(136, 240);
                        bezierVertex(132, 244, 125, 245, 113, 243);
                        bezierVertex(106, 240, 98, 241, 88, 243);
                        bezierVertex(80, 244, 74, 238, 72, 235);
                    endShape(CLOSE);

                    //horns
                    fill(this.colors.black);
                    beginShape();
                        vertex(138, 204);
                        bezierVertex(157, 196, 176, 182, 184, 174);
                        bezierVertex(172, 194, 155, 205, 138, 211);
                    endShape(CLOSE);
                    beginShape();
                        vertex(137, 221);
                        bezierVertex(145, 221, 154, 218, 159, 215);
                        bezierVertex(153, 222, 145, 225, 138, 226);
                    endShape(CLOSE);
                    beginShape();
                        vertex(135, 232);
                        bezierVertex(138, 234, 142, 234, 149, 236);
                        vertex(145, 238);
                        vertex(140, 238);
                        vertex(134, 237);
                    endShape(CLOSE);

                    //mouth
                    fill(this.colors.black);
                    bezier(73, 236, 85, 236, 97, 229, 106, 228);

                    //eye
                    fill(255, 255, 255);
                    beginShape();
                        vertex(104, 217);
                        vertex(107, 214);
                        vertex(118, 209);
                        bezierVertex(116, 214, 111, 217, 104, 217);
                    endShape(CLOSE);
                    fill(this.colors.black);
                    ellipse(111, 214, 3, 3);

                    //nose
                    fill(this.colors.black);
                    beginShape();
                        vertex(77, 232);
                        bezierVertex(78, 230, 79, 228, 81, 228);
                        bezierVertex(81, 230, 79, 232, 76, 232);
                    endShape(CLOSE);

                    //lines across top of head
                    stroke(this.colors.black);
                    strokeWeight(1);
                    line(86, 223, 89, 226);
                    line(92, 220, 94, 222);
                    line(98, 217, 100, 220);

                    //sockets
                    stroke(this.colors.black, 50);
                    bezier(123, 205, 128, 204, 134, 203, 138, 203);
                    bezier(128, 214, 132, 213, 136, 213, 139, 213);

                    bezier(130, 219, 132, 218, 136, 220, 138, 220);
                    bezier(130, 225, 132, 226, 134, 226, 137, 226);

                    bezier(126, 228, 129, 229, 132, 230, 134, 232);
                    bezier(124, 232, 128, 234, 130, 235, 134, 236);
                popMatrix();
            };
            this.draw = function() {
                pushMatrix();
                    translate(130 - this.x, 0);

                    pushMatrix();
                        translate(-20, 10);
                        this.drawRightWing();
                    popMatrix();

                    if(this.showLegs) {
                        this.drawBackLeg(true);
                        this.drawFrontLeg(true);
                    }

                    pushStyle();
                        //spikes on top of body
                        noStroke();
                        fill(this.colors.spikes);
                        for(var i = 2; i < this.segments.length - 5; i++) {
                            var segment = this.segments[i];

                            var tx = bezierTangent(segment.x, segment.x, this.segments[i+1].x, this.segments[i+1].x, 0.5);
                            var ty = bezierTangent(segment.y, segment.y, this.segments[i+1].y, this.segments[i+1].y, 0.5);
                            var a = atan2(ty, tx);
                            a -= 90;

                            triangle(
                                this.segments[i-1].x, this.segments[i-1].y + this.nodes[i] * 0.1,
                                segment.x, segment.y + this.nodes[i] * 0.1,
                                segment.x - 8 + cos(a) * 12, segment.y - this.nodes[i] * 0.4);
                        }

                        //lower part of the body
                        noStroke();
                        fill(this.colors.black);
                        beginShape();
                            vertex(this.segments[0].x, this.segments[0].y);
                            for(var i = 1; i < this.segments.length; i+=3) {
                                bezierVertex(
                                    this.segments[i].x, this.segments[i].y,
                                    this.segments[i+1].x, this.segments[i+1].y,
                                    this.segments[i+2].x, this.segments[i+2].y);
                            }
                            for(var i = this.segments.length - 1; i >= 1; i-=3) {
                                bezierVertex(
                                    this.segments[i].x, this.segments[i].y + this.nodes[i],
                                    this.segments[i-1].x, this.segments[i-1].y + this.nodes[i-1],
                                    this.segments[i-2].x, this.segments[i-2].y + this.nodes[i-2]);
                            }
                            vertex(this.segments[0].x, this.segments[0].y + this.nodes[1]);
                        endShape(CLOSE);

                        //scales on the lower body
                        noFill();
                        stroke(40, 150);
                        strokeWeight(0.5);
                        for(var i = 1; i < this.segments.length - 10; i++) {
                            var segment = this.segments[i];
                            bezier(
                                segment.x, segment.y,
                                segment.x - 10, segment.y + this.nodes[i] * 0.3,
                                segment.x - 10, segment.y + this.nodes[i] * 0.7,
                                segment.x, segment.y + this.nodes[i] * 0.95
                            );
                        }

                        //upper body
                        noStroke();
                        fill(this.colors.body);
                        beginShape();
                            vertex(this.segments[0].x, this.segments[0].y);
                            for(var i = 1; i < this.segments.length; i+=3) {
                                bezierVertex(
                                    this.segments[i].x, this.segments[i].y,
                                    this.segments[i+1].x, this.segments[i+1].y,
                                    this.segments[i+2].x, this.segments[i+2].y);
                            }
                            for(var i = this.segments.length - 1; i >= 1; i-=3) {
                                bezierVertex(
                                    this.segments[i].x, this.segments[i].y + this.nodes[i] * 0.6,
                                    this.segments[i-1].x, this.segments[i-1].y + this.nodes[i-1] * 0.6,
                                    this.segments[i-2].x, this.segments[i-2].y + this.nodes[i-2] * 0.6);
                            }
                        endShape(CLOSE);

                        if(this.showLegs) {
                            this.drawFrontLeg();
                            this.drawBackLeg();
                        }

                        this.drawLeftWing();

                        //triangle tail
                        noStroke();
                        fill(this.colors.body);
                        beginShape();
                            vertex(this.segments[this.segments.length-2].x - this.diff * 0.1, this.segments[this.segments.length-2].y - 5);
                            vertex(this.segments[this.segments.length-1].x, this.segments[this.segments.length-1].y);
                            vertex(this.segments[this.segments.length-2].x + this.diff * 0.1, this.segments[this.segments.length-2].y + 5);
                            bezierVertex(
                                this.segments[this.segments.length-2].x + this.diff * 0.1 + 3, this.segments[this.segments.length-2].y + 2,
                                this.segments[this.segments.length-2].x - this.diff * 0.1 + 3, this.segments[this.segments.length-2].y - 2,
                                this.segments[this.segments.length-2].x - this.diff * 0.1, this.segments[this.segments.length-2].y - 5);
                        endShape();

                        this.drawHead();
                    popStyle();
                popMatrix();
            };
            this.fly = function() {
                this.draw();
                this.update();
            };
        };

        var Scene = function() {
            this.page = "load";
            this.images = undefined;
            this.imageIndex = 0;
            this.loaded = false;
            this.speed = 4;
            this.showClouds = true;
            this.dragon = new Dragon();
            this.cloudsBack = [];
            this.cloudsFront = [];
            this.grounds = [
                {
                    x: 0
                },
                {
                    x: -width
                }
            ];
            this.hillsFront = [
                {
                    x: 0
                },
                {
                    x: -599
                }
            ];
            this.hillsBack = [
                {
                    x: 0
                },
                {
                    x: -599
                }
            ];
            this.theme = 0; //red
            this.showClick = true;
            this.skyImage = undefined;
            this.groundImage = undefined;

            this.cloud = function(tx, ty) {
                var x = 100;
                var y = 100;
                var xPos = x;
                var yPos = y;
                var w = random(80, 100);
                var h = random(80, 100);

                var count = map(w + h, 50, 160, 50, 300);

                noStroke();
                fill(247, 247, 242, 25);

                for(var i = 0; i < count; i++) {
                    x = map(noise(tx++), 0, 1, xPos - w, xPos + w);
                    y = map(noise(ty++), 0, 1, yPos - h, yPos + h);

                    tx+= 0.01;
                    ty+= 0.01;

                    ellipse(x, y, random(5, 15), random(5, 15));
                }
            };
            this.setup = function() {
                this.images = {
                    backTan: function() {
                        background(0, 0);

                        noStroke();
                        for(var i = 0; i <= 450; i++) { 
                            fill(lerpColor(color(180, 98, 42), color(182, 121, 93), i/450));
                            rect(0, i, width, i);
                        }

                        return get(0, 0, width, 450);
                    },
                    backBlue: function() {
                        background(0, 0);

                        noStroke();
                        for(var i = 0; i <= 450; i++) { 
                            fill(lerpColor(color(5, 107, 130), color(93, 136, 148), i/500));
                            rect(0, i, width, i);
                        }

                        return get(0, 0, width, 450);
                    },
                    backRed: function() {
                        background(0, 0);

                        noStroke();
                        for(var i = 0; i <= 450; i++) { 
                            fill(lerpColor(color(102, 54, 52), color(161, 85, 82), i/500));
                            rect(0, i, width, i);
                        }

                        return get(0, 0, width, 450);
                    },
                    groundTan: function() {
                        noStroke();

                        for(var i = 0; i <= 150; i++) { 
                            fill(lerpColor(color(117, 63, 38), color(92, 47, 26), i/150));
                            rect(0, 450 + i, width, 450 + i);
                        }

                        for(var i = 0; i < 200; i++) {
                            fill(random(50, 60), random(15, 30), random(10, 20), random(50, 150));
                            var radius = random(2, 5);
                            ellipse(random(width), random(470, 600), radius, radius * 0.5);
                        }

                        return get(0, 450, width, 150);
                    },
                    groundGreen: function() {
                        noStroke();

                        for(var i = 0; i <= 150; i++) { 
                            fill(lerpColor(color(62, 79, 43), color(79, 102, 54), i/150));
                            rect(0, 450 + i, width, 450 + i);
                        }

                        for(var i = 0; i < 200; i++) {
                            fill(random(50, 60), random(15, 30), random(10, 20), random(50, 150));
                            var radius = random(2, 5);
                            ellipse(random(width), random(470, 600), radius, radius * 0.5);
                        }

                        return get(0, 450, width, 150);
                    },
                    groundDark: function() {
                        noStroke();

                        for(var i = 0; i <= 150; i++) { 
                            fill(lerpColor(color(49, 51, 46), color(71, 74, 66), i/150));
                            rect(0, 450 + i, width, 450 + i);
                        }

                        for(var i = 0; i < 200; i++) {
                            fill(random(30, 40), random(15, 30), random(10, 20), random(50, 150));
                            var radius = random(2, 5);
                            ellipse(random(width), random(470, 600), radius, radius * 0.5);
                        }

                        return get(0, 450, width, 150);
                    },
                    hillsFront: function() {
                        background(0, 0);

                        fill(255, 255, 255);
                        stroke(0);
                        beginShape();
                            vertex(0, 600);
                            vertex(0, 560);
                            bezierVertex(12, 546, 27, 531, 43, 528);
                            bezierVertex(64, 528, 77, 542, 84, 552);
                            bezierVertex(95, 540, 119, 502, 135, 500);
                            bezierVertex(162, 504, 175, 529, 184, 546);
                            bezierVertex(198, 537, 212, 526, 229, 526);
                            bezierVertex(242, 526, 253, 538, 260, 548);
                            bezierVertex(278, 530, 290, 515, 302, 512);
                            bezierVertex(324, 513, 345, 532, 357, 550);
                            bezierVertex(363, 541, 379, 527, 396, 525);
                            bezierVertex(410, 525, 420, 540, 437, 552);
                            bezierVertex(450, 526, 461, 502, 474, 498);
                            bezierVertex(494, 496, 512, 521, 526, 540);
                            bezierVertex(538, 531, 550, 523, 562, 524);
                            bezierVertex(576, 525, 591, 549, 600, 560);
                            vertex(600, 600);
                        endShape(CLOSE);

                        var hillsFrontShape = get(0, 495, width, 105);

                        background(0, 0);

                        noStroke();
                        fill(56, 35, 30);

                        for(var i = 0; i <= 105; i++) { 
                            fill(lerpColor(color(46, 29, 25), color(81, 53, 47), i/105));
                            rect(0, 495 + i, width, 495 + i);
                        }

                        for(var i = 0; i < 500; i++) {
                            fill(random(110, 130), random(70, 90), random(50, 70), random(50, 150));
                            var radius = random(2, 4);
                            ellipse(random(width), random(495, 600), radius, radius * 0.5);
                        }

                        var hillsFrontImage = get(0, 495, width, 105);

                        hillsFrontImage.mask(hillsFrontShape);

                        return hillsFrontImage;
                    },
                    hillsBack: function() {
                        background(0, 0);

                        fill(255, 255, 255);
                        stroke(0);
                        beginShape();
                            vertex(0, 470);
                            bezierVertex(27, 475, 43, 490, 57, 501);
                            bezierVertex(89, 482, 102, 462, 126, 440);
                            bezierVertex(150, 423, 180, 400, 200, 398);
                            bezierVertex(228, 402, 245, 420, 262, 438);
                            bezierVertex(280, 433, 286, 422, 298, 419);
                            bezierVertex(322, 423, 333, 441, 352, 474);
                            bezierVertex(366, 481, 384, 492, 402, 505);
                            bezierVertex(436, 485, 457, 454, 477, 445);
                            bezierVertex(508, 448, 524, 476, 554, 496);
                            bezierVertex(570, 490, 588, 470, 600, 470);
                            vertex(600, 600);
                            vertex(0, 600);
                        endShape(CLOSE);

                        var hillsBackShape = get(0, 395, width, 205);

                        background(0, 0);

                        noStroke();

                        for(var i = 0; i <= 205; i++) { 
                            fill(lerpColor(color(80, 58, 45), color(138, 104, 90), i/205));
                            rect(0, 395 + i, width, 395 + i);
                        }

                        for(var i = 0; i < 1000; i++) {
                            fill(random(50, 60), random(30, 40), random(20, 40), random(100, 150));
                            var radius = random(2, 4);
                            ellipse(random(width), random(395, 600), radius, radius * 0.5);
                        }

                        var hillsBackImage = get(0, 395, width, 205);

                        hillsBackImage.mask(hillsBackShape);

                        return hillsBackImage;
                    }
                };

                //clouds
                var cloudImage;
                for(var i = 0; i < 15; i++) {
                    background(0, 0, 0, 0);
                    this.cloud(~~random(10, 1000), ~~random(10, 1000));
                    cloudImage = get(50, 50, 110, 110);

                    this.cloudsFront.push({
                        x: random(width),
                        y: random(-30, 270),
                        scale: random(0.5, 2),
                        img: cloudImage,
                        speed: random(3, 4)
                    });

                    this.cloudsBack.push({
                        x: random(width),
                        y: random(-30, 270),
                        scale: random(0.5, 2),
                        img: cloudImage,
                        speed: random(3, 4)
                    });
                }
            };
            this.setup();
            this.load = function (s) {
                var obj = Object.keys(this.images);
                this.images[obj[this.imageIndex]] = this.images[obj[this.imageIndex]]();
                this.imageIndex++;

                background(186, 146, 106);
                pushStyle();
                    fill(60);
                    textAlign(CENTER, CENTER);
                    textSize(40);
                    text('LOADING', 300, 300);
                    noFill();
                    stroke(60);
                    strokeWeight(10);
                    arc(300, 300, 300, 300, 0, map(this.imageIndex / obj.length, 0, 1, 0, 360));
                popStyle();

                if(this.imageIndex < obj.length){
                    this.loaded = false;
                }
                else {
                    this.skyImage = this.images.backTan;
                    this.groundImage = this.images.groundTan;
                    this.loaded = true;
                    this.page = s;
                }
            };
            this.runClouds = function(clouds) {
                for(var i = 0; i < clouds.length; i++) {
                    var cloud = clouds[i];

                    image(cloud.img, cloud.x, cloud.y, cloud.img.width * cloud.scale, cloud.img.height * cloud.scale * 0.8);

                    cloud.x+= cloud.speed;

                    if(cloud.x > width) {
                        cloud.x = -200;
                        cloud.y = random(-30, 270);
                        cloud.speed = random(3, 4);
                        cloud.scale = random(0.5, 2);
                    }
                }
            };
            this.draw = function() {
                background(186, 146, 106);

                //sky
                image(this.skyImage, 0, 0);

                //hills in back
                for(var i = 0; i < this.hillsBack.length; i++) {
                    image(
                        this.images.hillsBack, 
                        this.hillsBack[i].x, 305, 
                        this.images.hillsBack.width + 14, this.images.hillsBack.height);

                    this.hillsBack[i].x+= this.speed * 1.1;

                    if(this.hillsBack[i].x >= width) {
                        this.hillsBack[i].x = -600;
                    }
                }

                //hills in front
                for(var i = 0; i < this.hillsFront.length; i++) {
                    image(
                        this.images.hillsFront, 
                        this.hillsFront[i].x, 385, 
                        this.images.hillsFront.width + 2, this.images.hillsFront.height);

                    this.hillsFront[i].x+= this.speed * 1.2;

                    if(this.hillsFront[i].x >= width) {
                        this.hillsFront[i].x = -600;
                    }
                }

                //ground
                for(var i = 0; i < this.grounds.length; i++) {
                    image(
                        this.groundImage, 
                        this.grounds[i].x, 450,
                        this.groundImage.width + 2, this.groundImage.height);

                    this.grounds[i].x+= this.speed * 1.5;

                    if(this.grounds[i].x >= width) {
                        this.grounds[i].x = -width;
                    }
                }
            };
            this.setTheme = function() {
                this.theme = (this.theme + 1) % 3;

                switch(this.theme) {
                    case 0:
                        this.skyImage = this.images.backTan;
                        this.groundImage = this.images.groundTan;
                        this.dragon.colors = this.dragon.colorThemes.red;
                        break;
                    case 1:
                        this.skyImage = this.images.backBlue;
                        this.groundImage = this.images.groundGreen;
                        this.dragon.colors = this.dragon.colorThemes.green;
                        break;
                    case 2:
                        this.skyImage = this.images.backRed;
                        this.groundImage = this.images.groundDark;
                        this.dragon.colors = this.dragon.colorThemes.black;
                        break;
                }

                this.showClick = false;
            };
            this.go = function() {
                this.draw();

                if(this.showClouds) {
                    this.runClouds(this.cloudsBack);
                }

                this.dragon.fly();

                if(this.showClouds) {
                    this.runClouds(this.cloudsFront);
                }

                if(this.showClick) {
                    pushStyle();
                        textAlign(CENTER);
                        textSize(20);
                        fill(0, 70);
                        text("Click the screen\nfor a different color", 300, 520);
                    popStyle();
                }
            };
        };

        scene = new Scene();

        draw = function() {
            background(186, 146, 106);

            switch(scene.page) {
                case "load":
                    scene.load("go");
                    break;
                case "go":
                    scene.go();
                    break;
            }
        };

        mouseClicked = function() {
            scene.setTheme();
        };
     }
}

var canvas = document.getElementById("canvas"); 
var processingInstance = new Processing(canvas, sketchProc);