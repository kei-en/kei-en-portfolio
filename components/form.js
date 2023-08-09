import React from 'react';

export default function Form() {
  return (
    <div>
      <form
        id="contact-form"
        method="POST"
        name="Contact Form"
        class="sc-jeg4qq-0 gnnUAb"
      >
        <h2
          aria-label="Get in touch"
          role="heading"
          class="sc-194m2dw-0 bUsJIF"
        >
          <span aria-hidden="true" class="sc-194m2dw-1 fBYZbk">
            <span
              aria-hidden="true"
              class="sc-194m2dw-2 hsFpBm"
              style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
            >
              G
            </span>
            <span
              aria-hidden="true"
              class="sc-194m2dw-2 hsFpBm"
              style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
            >
              e
            </span>
            <span
              aria-hidden="true"
              class="sc-194m2dw-2 hsFpBm"
              style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
            >
              t
            </span>
          </span>
          <span aria-hidden="true" class="sc-194m2dw-1 fBYZbk">
            <span
              aria-hidden="true"
              class="sc-194m2dw-2 hsFpBm"
              style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
            >
              i
            </span>
            <span
              aria-hidden="true"
              class="sc-194m2dw-2 hsFpBm"
              style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
            >
              n
            </span>
          </span>
          <span aria-hidden="true" class="sc-194m2dw-1 fBYZbk">
            <span
              aria-hidden="true"
              class="sc-194m2dw-2 hsFpBm"
              style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
            >
              t
            </span>
            <span
              aria-hidden="true"
              class="sc-194m2dw-2 hsFpBm"
              style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
            >
              o
            </span>
            <span
              aria-hidden="true"
              class="sc-194m2dw-2 hsFpBm"
              style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
            >
              u
            </span>
            <span
              aria-hidden="true"
              class="sc-194m2dw-2 hsFpBm"
              style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
            >
              c
            </span>
            <span
              aria-hidden="true"
              class="sc-194m2dw-2 hsFpBm"
              style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
            >
              h
            </span>
          </span>
        </h2>
        <div
          class="sc-gqce9u-0 fveVgy"
          style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
        >
          <input
            type="text"
            id="name"
            name="name"
            required=""
            value=""
            class="sc-gqce9u-2 dzJkxC"
          />
          <label for="name" class="sc-gqce9u-1 egkYSk">
            Name
          </label>
        </div>
        <div
          class="sc-gqce9u-0 fveVgy"
          style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
        >
          <input
            type="email"
            id="email"
            name="email"
            pattern="[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required=""
            value=""
            class="sc-gqce9u-2 dzJkxC"
          />
          <label for="email" class="sc-gqce9u-1 egkYSk">
            Email
          </label>
        </div>
        <div
          class="sc-gqce9u-0 fveVgy"
          style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
        >
          <textarea
            id="message"
            name="message"
            required=""
            class="sc-gqce9u-3 hoEzCj"
            spellcheck="false"
          ></textarea>
          <label for="message" class="sc-gqce9u-1 egkYSk">
            How can I help?
          </label>
        </div>
        <div
          class="sc-gqce9u-0 fveVgy"
          style="opacity: 1; transform: translateY(0rem) translateZ(0px);"
        >
          <input type="submit" value="Submit" class="sc-gqce9u-4 hWtMiF" />
        </div>
      </form>
    </div>
  );
}
