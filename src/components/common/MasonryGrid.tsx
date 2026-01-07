import { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

interface MasonryGridProps {
  children: React.ReactNode;
  className?: string;
  itemSelector?: string;
  columnWidth?: string | number;
  gutter?: string | number;
}

export default function MasonryGrid({
  children,
  className = '',
  itemSelector = '.masonry-item',
  columnWidth = '.masonry-sizer',
  gutter = 32,
  sizerItemClassName = 'w-full md:w-[calc(50%-16px)]',
}: MasonryGridProps & { sizerItemClassName?: string }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const masonryInstance = useRef<Masonry | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    masonryInstance.current = new Masonry(gridRef.current, {
      itemSelector: itemSelector,
      columnWidth: columnWidth,
      gutter: gutter,
      percentPosition: true,
      transitionDuration: '0.2s',
    });

    const imgLoad = imagesLoaded(gridRef.current);

    let timeoutId: ReturnType<typeof setTimeout>;
    const onProgress = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        masonryInstance.current?.layout?.();
      }, 100);
    };

    if (imgLoad) {
      imgLoad.on('progress', onProgress);
    }

    return () => {
      clearTimeout(timeoutId);
      masonryInstance.current?.destroy?.();
      if (imgLoad) {
        imgLoad.off('progress', onProgress);
      }
    };
  }, [children, itemSelector, columnWidth, gutter]);

  return (
    <div ref={gridRef} className={className}>
      <div className={`masonry-sizer ${sizerItemClassName} hidden`} />
      {children}
    </div>
  );
}
