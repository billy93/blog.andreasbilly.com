import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/ui/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });

    return () => typed.current?.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">Billy</b> at work.
        </li>
        <li>
          I live in <b className="font-medium">Jakarta, Indonesia</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">Java</b>.
        </li>
        <li>I love web development.</li>
        <li>
          I work mostly with <b className="font-medium">Java/Javascript/Typescript</b> technologies.
        </li>
        <li>
          I love listening <Twemoji emoji="musical-keyboard" />.
        </li>
        <li>
          I love playing RPG video games <Twemoji emoji="video-game" />
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
