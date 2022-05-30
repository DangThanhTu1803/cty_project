import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export const Calendar = () => {
  return (
    <div className='calendar-container'>
      <div className='calendar_header'>
        <div className='pre'>
          <BsChevronLeft />
        </div>
        <div className="d_m_y">
          <div className='d'>
            <p>28</p>
          </div>
          <div className='m'>
            <p>May</p>
          </div>
          <div className='y'>
            <p>2022</p>
          </div>
        </div>
        <div className="next">
          <BsChevronRight />
        </div>
      </div>
      <hr />
      <div className='calendar_body'>
        <div className="weekdays">
          <p>Mo</p>
          <p>Tu</p>
          <p>We</p>
          <p>Th</p>
          <p>Fr</p>
          <p>Sa</p>
          <p>Su</p>
        </div>
        <div className="days">
          <div>
            <p>27</p><p>28</p><p>29</p><p>30</p><p>1</p><p>2</p><p>3</p>
          </div>
          <div>
            <p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p><p>10</p>
          </div>
          <div>
            <p>11</p><p>12</p><p>13</p><p>14</p><p>15</p><p>16</p><p>17</p>
          </div>
          <div>
            <p>18</p><p>19</p><p>20</p><p>21</p><p>22</p><p>23</p><p>24</p>
          </div>
          <div>
            <p>25</p><p>26</p><p>27</p><p>28</p><p>29</p><p>30</p><p>31</p>
          </div>
        </div>
      </div>
    </div>
  )
}
