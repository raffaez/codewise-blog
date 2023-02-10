import React from "react";
import Title from "../components/Title";

function Home() {
  return (
    <div className="flex items-center">
      <div className="basis-1/3">
        <Title>Hello, welcome to my blog!</Title>
      </div>
      <div className="basis-2/3">
        <p className="text-base text-justify mt-2 mb-1">
          Welcome to my blog! Proin congue ligula id risus posuere, vel eleifend
          ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt
          egestas. Nam consectetur varius turpis, non porta arcu porttitor non.
          In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non
          fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus
          euismod.
        </p>
        <p className="text-base text-justify mt-2 mb-1">
          Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices
          dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu.
          Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas
          viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo
          luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue
          tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam.
          Vivamus accumsan dui in facilisis aliquet.,
        </p>
        <p className="text-base text-justify mt-2 mb-1">
          Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit
          tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan
          nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec
          finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi
          vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac
          vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus
          accumsan dui in facilisis aliquet.,
        </p>
      </div>
    </div>
  );
}

export default Home;
