import { differenceInDays, format, endOfDay, startOfDay } from "date-fns";
import "./_calendar.scss";

export const Calendar = () => {
  const targetDate = endOfDay(new Date(2024, 1, 24)); // 2월 24일
  const today = startOfDay(new Date());
  const days = differenceInDays(targetDate, today);

  const d_day_count = () => {
    if (days > 0) {
      console.log(
        `향후 ${days}일 후에 ${format(targetDate, "yyyy년 MM월 dd일")}입니다.`
      );

      return (
        <>
          정주 <span className="heart">&nbsp;♥&nbsp;</span> 유리의 결혼식까지{" "}
          {days}일 남았습니다.
        </>
      );
    } else if (days < 0) {
      console.log(
        `${format(targetDate, "yyyy년 MM월 dd일")}로부터 ${Math.abs(
          days
        )}일이 지났습니다.`
      );
      return (
        <>
          정주 <span className="heart">&nbsp;♥&nbsp;</span> 유리의 결혼식이{" "}
          {Math.abs(days)}일 지났습니다.
        </>
      );
    } else {
      return (
        <>
          오늘은 정주 <span className="heart">&nbsp;♥&nbsp;</span> 유리의
          결혼식날 입니다!
        </>
      );
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <strong>2024.02</strong>
        <span>sat. pm 1:00</span>
      </div>
      <div className="calendar-body">
        <div className="row days">
          <span>Sun</span>
          <span>Mon</span>
          <span>The</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div className="row">
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className="row">
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <div className="row">
          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span>16</span>
          <span>17</span>
        </div>
        <div className="row">
          <span>18</span>
          <span>19</span>
          <span>20</span>
          <span>21</span>
          <span>22</span>
          <span>23</span>
          <span className="d-day">24</span>
        </div>
        <div className="row">
          <span>25</span>
          <span>26</span>
          <span>27</span>
          <span>28</span>
          <span>29</span>
          <span> </span>
          <span> </span>
        </div>
      </div>

      <div className="calendar-count-down">{d_day_count()}</div>
    </div>
  );
};
