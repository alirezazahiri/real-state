import React from "react";

function Dashboard({ createdAt }: { createdAt: string }) {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <h3 className="font-bold text-lg">سلام 👋 </h3>
        <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را ببینند</p>
      </div>
      <div className="flex gap-2 bg-blue-100 w-fit p-1 rounded-md [&>*]:font-semibold">
        <p>تاریخ عضویت:</p>
        <span className="text-blue-600">{createdAt}</span>
      </div>
    </div>
  );
}

export default Dashboard;
