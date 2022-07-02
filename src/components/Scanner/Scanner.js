import React, { useEffect } from 'react';
import { Video } from './styles';

const Scanner = ({ onSuccess }) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const codeReader = new ZXing.BrowserBarcodeReader();

    codeReader.getVideoInputDevices().then((videoInputDevices) => {
      const selectedDeviceId = videoInputDevices[0].deviceId;

      codeReader
        .decodeOnceFromVideoDevice(selectedDeviceId, 'video')
        .then((result) => {
          console.log('RESULT_', result);
          onSuccess(result.text);
        })
        .catch((err) => {
          console.error(err);
        });
    });

    return () => {
      codeReader.reset();
    };
  }, []);

  return (
    <div>
      <Video id="video" />
    </div>
  );
};

export default Scanner;
