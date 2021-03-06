
const usb = require("usb");

(function usbPortInitializer() {
  const devices = usb.getDeviceList();
  const $targetElm = $("#display");
  const $selectElm = $("<select />");

  devices.forEach((option, index) => {
    $selectElm.append(
      `<option value="${encodeURIComponent(
        JSON.stringify(option)
      )}"> Dispositivo ${index} </option>`
    );
  });

  // Sobrescreve elemento na DOM
  $targetElm.html($selectElm.html());

  $targetElm.change(evt => {
    const value = decodeURIComponent(evt.target.value);
    window.alert(value);
  });
})();