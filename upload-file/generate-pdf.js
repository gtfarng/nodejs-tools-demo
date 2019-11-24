const pdf = require('pdfkit')
const fs = require('fs')

let reportDoc = new pdf({ margin: 40 })

let data={}
data.cc="อาการปกติดีฟังผล Lab"

reportDoc.pipe(fs.createWriteStream('report-demo.pdf'))

reportDoc.image('./img/logos.png', 30, 30, { width: 60 });
reportDoc.image('./img/qrs.png', 500, 30, { width: 60, align: "right" });

reportDoc.font('./fonts/THSarabunNew Bold.ttf')
    .fontSize(22)
    .text('โรงพยาบาลพุทธชินราช พิษณุโลก', 100, 25)

reportDoc.font('./fonts/THSarabunNew Bold.ttf')
    .fontSize(16)
    .text('HN:', 100, 55)
    .text('ชื่อ:', 170, 55)
    .text('อายุ:', 290, 55)
    .text('ID:', 390, 55)

    .text('VN:', 100, 75)
    .text('วันที่:', 175, 75)
    .text('เวลา:', 265, 75)
    .text('(รพศ.พุทธชินราช)', 330, 75)

    .text('คิว:', 450, 80)
    .text('xxxxx', 440, 95)

reportDoc.font('./fonts/THSarabunNew.ttf')
    .fontSize(16)
    .text('00-00000', 120, 55)
    .text('นายจตุภัทร์ ปานน้อย', 190, 55)
    .text('24ปี 4เดือน 25วัน ', 310, 55)
    .text('1-6501-00089-59-6 ', 405, 55)

    .text('00-000000', 120, 75)
    .text('11 พ.ย. 2562', 200, 75)
    .text('09.00 น.', 290, 75)

    .text('ไม่ได้รักษาจากที่ใด ', 460, 155, { align: "left" })

reportDoc.rect(430, 80, 60, 40).stroke();

reportDoc.font('./fonts/THSarabunNew Bold.ttf')
    .fontSize(16)
    .text('________________________________________________________________________________________', 40, 120, { align: "left" })

reportDoc.lineJoin('bevel').rect(440, 160, 10, 10).stroke();

reportDoc.font('./fonts/THSarabunNew Bold.ttf')
    .fontSize(16)

    .text('CC:', 40, 140, { align: "left" })
    .text(data.cc, 80, 140)

    .text('HPI:', 40, 160, { align: "left" })



    .text('PMI:', 40, 180, { align: "left" })

    .text('Smoking:', 40, 200, { align: "left" })
    .text('Alcohol:', 180, 200, { align: "left" })

    .text('พยาบาล:', 40, 220, { align: "left" })
    .text('แพทย์:', 180, 220, { align: "left" })

    .text('Temp:', 40, 240, { align: "left" })
    .text('BP:', 130, 240, { align: "left" })
    .text('PR:', 180, 240, { align: "left" })
    .text('RR:', 230, 240, { align: "left" })
    .text('BW:', 280, 240, { align: "left" })
    .text('HT:', 330, 240, { align: "left" })
    .text('BMI:', 380, 240, { align: "left" })
    .text('รอบเอว:', 430, 240, { align: "left" })
    .text('O2Sat:', 480, 240, { align: "left" })

    .text('BSA:', 40, 260, { align: "left" })
    .text('ADR:', 40, 280, { align: "left" })
    .text('การตรวจร่างกาย:', 40, 300, { align: "left" })

reportDoc.font('./fonts/THSarabunNew Bold.ttf')
    .fontSize(16)

    .text('PDx:', 40, 400, { align: "left" })
    .text('...............................................................................', 70, 400, { align: "left" })
    .text('Follow up LAB:', 300, 400, { align: "left" })
    .text('.....................................................................', 380, 400, { align: "left" })

    .text('SDx:', 40, 420, { align: "left" })
    .text('...............................................................................', 70, 420, { align: "left" })
    .text('การวางแผนจําหน่าย:', 300, 420, { align: "left" })
    .text('..............................................................', 400, 420, { align: "left" })

    .text('หัตถภาระ:', 40, 440, { align: "left" })
    .text('.......................................................................', 90, 440, { align: "left" })
    .text('นัดตรวจวันที่:', 300, 440, { align: "left" })
    .text('.........................................................................', 370, 440, { align: "left" })

    .text('แพทย์:', 40, 460, { align: "left" })
    .text('...............................................................................', 70, 460, { align: "left" })
    .text('ลงชื่อผู้นัด:', 300, 460, { align: "left" })
    .text('.............................................................................', 360, 460, { align: "left" })

reportDoc.font('./fonts/THSarabunNew Bold.ttf')
    .fontSize(16)
    .text('---------------------------------------------------------------------------------------------------------------------------------------------------', 40, 475, { align: "left" })

reportDoc.font('./fonts/THSarabunNew Bold.ttf')
    .fontSize(16)
    .text('RX:', 40, 490, { align: "left" })


    .text('HN:', 150, 490)


    .text('ID:', 230, 490)


    .text('ชื่อ:', 40, 510, { align: "left" })

    .text('อายุ:', 170, 510)

    .text('ตรวจโรคทั่วไป', 290, 510)

reportDoc.font('./fonts/THSarabunNew.ttf')
    .fontSize(16)

    .text('วันที่:11 พ.ย. 2562', 60, 490)


    .text('00-00000', 170, 490)


    .text('1-6501-00089-59-6', 245, 490)


    .text('นายจตุภัทร์ ปานน้อย', 60, 510)

    .text('24ปี 4เดือน 25วัน ', 195, 510)




reportDoc.rect(40, 530, 540, 40).stroke();


reportDoc.font('./fonts/THSarabunNew Bold.ttf')
    .fontSize(16)
    .text('แพทย์:', 40, 700, { align: "left" })
    .text('พยาบาล Screen:', 270, 700, { align: "left" })
    .text('โรงพยาบาลพุทธชินราช พิษณุโลก ', 40, 720, { align: "left" })


console.log("complete!!!")

reportDoc.end()