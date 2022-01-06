<template>
  <div>
    <div class="text-center">
      <h1>Selfie With the proof</h1>
      <h2>
        Please take a selfie so that it is clearly visible and does not cover
        your face
      </h2>
      <p>
        Our algorithm will compare your face in the selfie to the document
        photo. Make sure to uplaod a bright photo
      </p>

      <div>
        <v-btn
          class="background me-8 my-4"
          v-on:click="startCam"
          id="start-camera"
          >Start Camera</v-btn
        >
        <v-btn class="background ms-8 my-4" id="click-photo"
          >Capture Image</v-btn
        >
      </div>

      <div>
        <video
          class="mx-2"
          id="video"
          width="320"
          height="240"
          autoplay
        ></video>
        <canvas id="canvas" class="mx-2" width="320" height="240"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IdentityDocument",
  methods: {
    startCam() {
      let camera_button = document.querySelector("#start-camera");
      let video = document.querySelector("#video");
      let click_button = document.querySelector("#click-photo");
      let canvas = document.querySelector("#canvas");

      camera_button.addEventListener("click", async function () {
        let stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        video.srcObject = stream;
      });

      click_button.addEventListener("click", function () {
        canvas
          .getContext("2d")
          .drawImage(video, 0, 0, canvas.width, canvas.height);
        let image_data_url = canvas.toDataURL("image/jpeg");

        // data url of the image
        console.log(image_data_url);
        localStorage.setItem("image_url", JSON.stringify(image_data_url));
        
      });
    },
  },
};
</script>