import { CameraIcon } from '@/assets/icons';
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@/libs/material-tailwind';
import type { IScheduleItem } from '@/types/dashboard';
import { formatDate } from '@/utils/common';

interface ScheduleBlockProps {
  scheduleData: IScheduleItem[];
}

const ScheduleBlock = ({ scheduleData }: ScheduleBlockProps) => {
  const headers = scheduleData.map(item => formatDate(item?.date));

  return (
    <div className=" mt-10 rounded-lg bg-white p-4 shadow-lg">
      <Tabs value={`${headers?.[2]}`}>
        <TabsHeader
          className="flex w-[318px] items-center justify-center rounded-lg border border-[#0000000F]"
          indicatorProps={{
            className: 'bg-primary px-1 w-[60px]',
          }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {headers.map(date => (
            <Tab
              activeClassName="text-white"
              value={`${date}`}
              key={date}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <p className="text-body-bold">{date.split(' ')?.[0]}</p>
              <p className="text-body-bold">{date.split(' ')?.[1]}</p>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 500 },
            mount: { y: 0 },
            unmount: { y: 500 },
          }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {headers.map((date, index) => (
            <TabPanel className="px-0 py-6" value={`${date}`} key={date}>
              {scheduleData?.[index]?.activities.map(item => (
                <div
                  key={`item-${item?.time}`}
                  className="mb-4 flex items-center pr-2"
                >
                  <div className="mr-3 w-16 text-gray-500">{item?.time}</div>
                  <div
                    className={`flex-1 rounded-lg ${item.backgroundColor} p-4 text-white`}
                    style={{ background: item.backgroundColor }}
                  >
                    <div className="flex items-center">
                      <div className="mr-2 flex size-8 items-center justify-center rounded-full bg-white">
                        <CameraIcon />
                      </div>

                      <div className="mb-2 flex flex-col">
                        <div>{item?.subject}</div>
                        <div className="text-sm">{item?.tutor}</div>
                        <div className="text-sm">{item?.student}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default ScheduleBlock;
