import { formatDuration } from '../utils/formatDuration.ts';

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const VideoGridItem = ({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <a href={`/watch?v=${id}`} className='relative aspect-video'>
        <img
          src={thumbnailUrl}
          className='block w-full h-full object-cover rounded-xl'
        />
        <span className='absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded'>
          {formatDuration(duration)}
        </span>
      </a>
      <div className='flex gap-2'>
        <a href={`/@${channel.id}`} className='flex-shrink-0'>
          <img className='w-12 h-12 rounded-full' src={channel.profileUrl} />
        </a>
        <div className='flex flex-col'>
          <a href={`/watch?v=${id}`} className='font-bold'>
            {title}
          </a>
          <a href={`/@${channel.id}`} className='text-secondary-text text-sm'>
            {channel.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
