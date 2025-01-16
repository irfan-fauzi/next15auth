/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const StartupCards = ({ post }: { post: StartupType }) => {
  const {
    _id,
    _createdAt,
    author: { _id: authorId, name },
    views,
    description,
    image,
    category,
    title,
  } = post;
  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup_card_date'>{formatDate(_createdAt)}</p>
        <div className='flex gap-1.5'>
          <EyeIcon className='size-6 text-primary' />
          <span className='text-16-medium'>{views}</span>
        </div>
      </div>

      <div className='flex-between mt-4 gap-5'>
        <div className='flex-1'>
          <Link href={`/user/${authorId}`}>
            <p className='text-16-medium line-clamp-1'>{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className='text-26-semibold'>{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src='https:/placehold.co/48x48'
            width={48}
            height={48}
            alt='user'
            className='rounded-full'
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className='startup-card_desc'>{description}</p>
        <img src={image} alt='desc' className='startup-card_img' />
      </Link>
      <div className='flex-between gap-2 mt-3'>
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p>{category}</p>
        </Link>
        <Button asChild className='startup-card_btn'>
          <Link href={`/startup/${_id}`}>Detail</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCards;
