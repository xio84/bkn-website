import React from "react";
import "./style.css";

export const TknAbout = () => {
  return (
    <div className="TKN-about">
      <div className="div-2">
        <div className="overlap-2">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="text-wrapper-5">Manfaat Token Komoditi Nusantara</div>
          <p className="p">MEMBANTU PETANI DALAM BENTUK PEMBIAYAAN</p>
          <div className="text-wrapper-6">MEMPERKOKOH KETAHANAN PANGAN INDONESIA</div>
          <p className="text-wrapper-7">ASET INVESTASI DENGAN YIELD 6% PER TAHUN</p>
          <img className="analytics" alt="Analytics" src={require("../../assets/about/img/d224-x2c-analytics-x2c-career-x2c-growth.png")} />
          <img className="screenshot" alt="Screenshot" src={require("../../assets/about/img/screenshot-2023-10-12-at-12-01-1.png")} />
          <img className="screenshot-2" alt="Screenshot" src={require("../../assets/about/img/screenshot-2023-10-12-at-12-03-1.png")} />
        </div>
        <div className="overlap-3">
          <p className="text-wrapper-8">Apa itu Token Komoditi Nusantara?</p>
          <p className="text-wrapper-9">
            Token Komoditi Nusantara merupakan tokenisasi Sistem Resi Gudang dalam harga pecahan yang terjangkau bagi
            investor masyarakat Indonesia yang ingin berpartisipasi aktif membantu petani majukan Indonesia.
          </p>
        </div>
        <p className="sekilas-tentang">
          <span className="text-wrapper-10">
            Sekilas tentang Sistem Resi Gudang
            <br />
          </span>
          <span className="text-wrapper-11">
            Resi gudang adalah dokumen atau surat bukti kepemilikan barang yang disimpan di gudang dan yang diterbitkan
            oleh pengelola gudang. Sistem ini biasa dimanfaatkan para petani dan kelompok tani sebagai instrumen tunda
            jual dan pembiayaan perdagangan. <br />
            Melalui Sistem Resi Gudang, para petani dapat menyimpan komoditas hasil panen ketika harga rendah untuk
            kemudian dijual di hari kemudian dengan harga tinggi sehingga petani dapat memiliki daya tawar yang kuat.
            Hingga saat ini sudah ada 123 gudang komoditas yang mendapat persetujuan dari Bappebti yang tersebar di 106
            Kabupaten/Kota.
          </span>
        </p>
        <img className="group-2" alt="Group" src={require("../../assets/about/img/group-34219.png")} />
        <div className="group-wrapper">
          <div className="overlap-wrapper">
            <div className="overlap-4">
              <div className="overlap-5">
                <div className="text-wrapper-12">Bantu Petani, Majukan Indonesia!</div>
                <p className="token-komoditi">
                  Token Komoditi Nusantara dihadirkan oleh Kliring Berjangka Indonesia (KBI) bersama Kliring Perdagangan
                  Berjangka Indonesia (KPBI)—sebagai salah satu Badan Usaha Milik Negara (BUMN) di Indonesia—sebagai
                  inovasi baru pembiayaan Sistem Resi Gudang melalui Token Komoditi Nusantara (TKN). <br />
                  <br />
                  Kini bantu petani dan majukan Indonesia dapat dilakukan dengan mudah, kapan saja dan dari mana saja!
                </p>
              </div>
              <div className="overlap-group-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper-13">Beli Sekarang</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
