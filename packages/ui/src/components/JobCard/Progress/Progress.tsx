import React from 'react';
import s from './Progress.module.css';
import cn from 'clsx';
import { Status } from '@bull-board/api/typings/app';
import { STATUSES } from '@bull-board/api/src/constants/statuses';

export const Progress = ({
  percentage,
  status,
  className,
}: {
  percentage: number;
  status: Status;
  className?: string;
}) => (
  <svg className={cn(s.progress, className)} viewBox="0 0 148 148">
    <circle
      cx="70"
      cy="70"
      r="70"
      fill="none"
      stroke="#E5E7EB"
      strokeWidth="8"
      strokeLinecap="round"
      style={{ transform: 'translate(4px, 4px)' }}
    ></circle>
    <circle
      cx="70"
      cy="70"
      r="70"
      fill="none"
      stroke={status === STATUSES.failed ? '#F56565' : '#48BB78'}
      strokeWidth="8"
      strokeLinecap="round"
      strokeDasharray="600"
      strokeDashoffset={600 - ((600 - 160) * percentage) / 100}
      style={{ transform: 'translate(4px, -4px) rotate(-90deg)' }}
    ></circle>
    <text textAnchor="middle" x="74" y="88">
      {percentage}%
    </text>
  </svg>
);
