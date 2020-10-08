<template>
  <div class="taiji">
    <div class="wrapper">
      <div class="angle">
        <div class="spin">
          <div class="side side-one">
            <div class="mask"></div>
            <div class="mask"></div>
          </div>
        </div>
      </div>

      <div class="angle">
        <div class="spin">
          <div class="side side-two">
            <div class="mask"></div>
            <div class="mask"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(-360deg);
  }
}
.taiji {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #999;
  .wrapper {
    @include square(60vh);
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-15deg);
    .angle {
      position: absolute;
      @include cube();
      .spin {
        @include cube();
        animation: spin 5s linear infinite;
      }
      &:nth-child(1) {
        transform: rotateY(-65deg);
      }
      &:nth-child(2) {
        transform: rotateY(25deg);
        .spin {
          animation-direction: reverse;
        }
      }
    }
    .side {
      @include cube();
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 100%;
      overflow: hidden;
      &::before {
        content: '';
        display: block;
        @include square(6vh);
        position: absolute;
        bottom: 12vh;
        background: black;
        border-radius: 100%;
      }
      .mask {
        width: 75%;
        height: 50%;
        position: relative;
        overflow: hidden;
        &::before,
        &::after {
          content: '';
          display: block;
          border-radius: 100%;
          box-sizing: border-box;
        }
        &:nth-child(1) {
          align-self: flex-end;
          border-radius: 50% 0 0 50% / 75% 0% 0 75%;
          &::before {
            width: 30vh;
            height: 30vh;
            box-shadow: 0 0 0 60vh black;
            border: 12vh solid black;
          }
        }
        &:nth-child(2) {
          align-self: flex-end;
          width: 50%;
          &::before {
            position: absolute;
            @include cube();
            transform: translate(-50%, 0);
            box-shadow: 0 0 0 60vh black;
          }
        }
      }
    }
    .side-two {
      transform: scaleY(-1);
      &:before {
        background: #ffffff;
      }
      .mask:nth-child(1)::before {
        box-shadow: 0 0 0 60vh white;
        border-color: white;
      }
      .mask:nth-child(2)::before {
        box-shadow: 0 0 0 60vh white;
        border-color: white;
      }
    }
  }
}
</style>
