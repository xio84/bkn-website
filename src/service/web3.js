const { ThirdwebSDK } = require("@thirdweb-dev/sdk")
const sdk = new ThirdwebSDK("mumbai", {
  clientId: "8317d98ec5583fc97675484fd1c12807",
});

export function getNFT(id, setNFTdata) {
  sdk.getContract("0xE3E8119bA6131d16D34E72f4024Fd96120858cCd")
  .then((res) => {
    console.log("Get contract success");
    res.erc1155.getOwned("0xC53290Ba22A8E800cCC43B66e517a30B921Ad9D6")
    .then((dat) => {
      console.log("Get data success");
      let val = dat
      .find((val) => val.metadata.id == id)

        let xdata = {
          id: val.metadata.id,
          description: val.metadata.description,
          pic: val.metadata.image,
          name: val.metadata.name,
          lot: val.quantityOwned ?? 0,
        }
        if (val.metadata.attributes != undefined) {
          val.metadata.attributes.map((val) => {
            if (val.trait_type != undefined) {
              xdata[val.trait_type] = val.value
            }
          })
        }

      console.log(xdata)
      setNFTdata(xdata)
    })
    .catch((err) => console.error(err))
  })
  .catch((err) => console.error(err))
}

export function getAllNFT(id, setNFTdata) {
  sdk.getContract("0xE3E8119bA6131d16D34E72f4024Fd96120858cCd")
  .then((res) => {
    console.log("Get contract success");
    res.erc1155.getAll()
    .then((dat) => {
      console.log("Get data success");
      let val = dat
      .find((val) => val.metadata.id == id)

        let xdata = {
          id: val.metadata.id,
          description: val.metadata.description,
          pic: val.metadata.image,
          name: val.metadata.name,
          lot: val.quantityOwned ?? 0,
        }
        if (val.metadata.attributes != undefined) {
          val.metadata.attributes.map((val) => {
            if (val.trait_type != undefined) {
              xdata[val.trait_type] = val.value
            }
          })
        }

      console.log(xdata)
      setNFTdata(xdata)
    })
    .catch((err) => console.error(err))
  })
  .catch((err) => console.error(err))
}

export function getData(setNFTdata) {
    sdk.getContract("0xE3E8119bA6131d16D34E72f4024Fd96120858cCd")
    .then((res) => {
      console.log("Get contract success");
      res.erc1155.getOwned("0xC53290Ba22A8E800cCC43B66e517a30B921Ad9D6")
      .then((dat) => {
        console.log("Get data success");
        let newData = []
        dat.map((val) => {
          let xdata = {
            id: val.metadata.id,
            pic: val.metadata.image,
            name: val.metadata.name,
            slot: val.quantityOwned ?? 0,
          }
          if (val.metadata.attributes != undefined) {
            val.metadata.attributes.map((val) => {
              if (val.trait_type != undefined) {
                xdata[val.trait_type] = val.value
              }
            })
          }
          newData.push(xdata)
        })
        console.log(newData)
        setNFTdata(newData)
      })
      .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
  }

export function getTx(setTXdata) {
sdk.getContract("0xE3E8119bA6131d16D34E72f4024Fd96120858cCd")
.then((contract) => {
    contract
    .erc1155
    // .events
    // .getAllEvents()
    // .getOwned("0xC53290Ba22A8E800cCC43B66e517a30B921Ad9D6")
    .getAll()
    .then((res) => {
    contract
    .events
    .getEvents("TransferSingle")
    .then((result) => {
        let xx = []
        result.map((events) => {
        if (events.data.from != '0x0000000000000000000000000000000000000000') {
            let x = events.data
            x.id = events.data.id != undefined ? events.data.id.toNumber() : events.data.id
            x.lot = events.data.value != undefined ? events.data.value.toNumber() : events.data.value
            x.metadata = res.find((nft) => {
                return nft.metadata.id == x.id
            }).metadata
            x.name = x.metadata.name
            xx.push(x)
        };
        })
        console.log(xx);
    })
    })
})
}