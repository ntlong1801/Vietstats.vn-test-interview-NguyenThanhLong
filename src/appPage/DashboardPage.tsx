'use client';

import Image from 'next/image';
import { useMemo } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons';
import dashboardTop from '@/assets/images/dashboard_top.png';
import {
  CalendarCustom,
  LineChart,
  MixedBarLineChart,
  RevenueChart,
  RightInfoBlock,
  ScheduleBlock,
  TopInfoBlock,
} from '@/components/dashboard';
import { useGetAllData } from '@/hooks/api/dashboard';

const Dashboard = () => {
  const {
    summaryData,
    classData,
    revenueData,
    newClassData,
    learnActivityData,
    scheduleData,
    isClassDataSuccess,
    isLearnActivityDataSuccess,
    isSummaryDataSuccess,
    isRevenueDataSuccess,
    isScheduleDataSuccess,
  } = useGetAllData();

  const formattedNewClassData = useMemo(() => {
    if (!newClassData) return [];
    const maxDate = newClassData.reduce(
      (max, data) => (new Date(data?.date) > max ? new Date(data?.date) : max),
      new Date(0),
    );
    return newClassData.filter(
      data => new Date(data?.date).getTime() === maxDate.getTime(),
    );
  }, [newClassData]);

  return (
    <div>
      <div className="flex h-auto w-full justify-between gap-10">
        <div className="flex w-[calc(100%-350px)] flex-col gap-6">
          <div className="mt-8 h-[120px] bg-[#EAECF0]">
            <div className="relative z-10 flex h-full flex-col items-center justify-center bg-gradient-to-r from-yellow-200 via-yellow-100 to-gray-200 pr-[2%]">
              <div className="absolute left-[3%] top-[-40px]">
                <Image
                  height={205}
                  width={308}
                  src={dashboardTop}
                  alt="dashboardTop"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h2 className="text-h2-bold">Hello, ntlongcbl</h2>
              <p className="text-body-regular">
                Manage your activities in this dashboard.
              </p>
            </div>
          </div>
          <div className="mt-[60px]">
            {isSummaryDataSuccess && (
              <TopInfoBlock summaryData={summaryData || []} />
            )}
          </div>
          <div className="flex grow gap-4">
            <div className="w-2/3">
              <div className="flex h-full flex-col gap-10 rounded-2xl bg-white p-4">
                <div className="flex justify-between">
                  <h3 className="text-h3-bold">New Classes</h3>
                  <select name="cars" id="cars" className="bg-[#D3D3D3] p-1">
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                  </select>
                </div>
                <div className="flex justify-center">
                  <MixedBarLineChart newClass={formattedNewClassData?.[0]} />
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex h-full flex-col gap-9 rounded-2xl bg-white p-4">
                <div className="flex justify-between">
                  <h3 className="text-h3-bold">Revenue</h3>
                  <select name="cars" id="cars" className="bg-[#D3D3D3] p-1">
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                  </select>
                </div>
                <div className="mt-9 flex gap-6 px-[5%]">
                  <div className="h-[200px] w-2/3">
                    {isRevenueDataSuccess && (
                      <RevenueChart data={revenueData || []} />
                    )}
                  </div>
                  <div className="flex flex-col items-center">
                    <p
                      className="text-blueGray"
                      style={{
                        fontSize: '20px',
                        lineHeight: '20px',
                        fontWeight: 400,
                      }}
                    >
                      Today
                    </p>
                    <h1 className="text-h1-bold text-second">
                      <span className="text-h3-bold">$</span>
                      {revenueData?.[1]?.quantity}
                    </h1>
                    <p className="mt-4 bg-[#E7FFE9] p-2 text-body-regular text-[#43C378]">
                      +25%
                    </p>
                    <p className="text-body-regular text-blueGray">
                      vs yesterday
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] flex-col">
          <CalendarCustom />
          {isScheduleDataSuccess && (
            <ScheduleBlock scheduleData={scheduleData || []} />
          )}
        </div>
      </div>
      <div className="mt-8 flex gap-12 ">
        <div className="w-[70%] rounded-2xl bg-white px-8 pb-8 pt-5">
          <div className="mb-12 flex justify-between">
            <h3 className="text-h3-bold">Learn Activity</h3>
            <div className="flex gap-2 px-7">
              <ArrowLeftIcon className="cursor-pointer" />
              <p className="text-body-regular">
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                })}
              </p>
              <ArrowRightIcon className="cursor-pointer" />
            </div>
            <select
              name="cars"
              id="cars"
              className="border border-black bg-white px-8 py-1"
            >
              <option value={0}>This month</option>
              <option value={1}>1 month ago</option>
            </select>
          </div>
          {isLearnActivityDataSuccess && (
            <LineChart learnActivity={learnActivityData || []} />
          )}
        </div>
        <div className="grow">
          {isClassDataSuccess && <RightInfoBlock classData={classData || []} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
