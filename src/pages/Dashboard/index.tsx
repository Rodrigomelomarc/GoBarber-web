import React, { useState, useCallback } from 'react';
import DayPicker, {DayModifiers} from 'react-day-picker';
import 'react-day-picker/lib/style.css'

import logoImg from '../../assets/logo.svg'

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
  Section,
  Appointment
  } from './styles';
import { FiPower, FiClock } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

const Dashboard: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());

  const {signOut, user} = useAuth()

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDay(day);
    }
  }, [])

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Gobarber"/>

          <Profile>
            <img 
            src={user.avatar_url} 
            alt={user.name}/>

            <div>
              <span>Bem vindo (a),</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower/>
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img 
              src="https://avatars0.githubusercontent.com/u/45365615?s=460&u=37c77136c745fce1e8d7118ead74a1a103bcbc2b&v=4" 
              alt="Rodrigo"/>

              <strong>Diego Fernandes</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
              <img 
              src="https://avatars0.githubusercontent.com/u/45365615?s=460&u=37c77136c745fce1e8d7118ead74a1a103bcbc2b&v=4" 
              alt="Rodrigo"/>

              <strong>Diego Fernandes</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
              <img 
              src="https://avatars0.githubusercontent.com/u/45365615?s=460&u=37c77136c745fce1e8d7118ead74a1a103bcbc2b&v=4" 
              alt="Rodrigo"/>

              <strong>Diego Fernandes</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
          <strong>Tarde</strong>

          <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
              <img 
              src="https://avatars0.githubusercontent.com/u/45365615?s=460&u=37c77136c745fce1e8d7118ead74a1a103bcbc2b&v=4" 
              alt="Rodrigo"/>

              <strong>Diego Fernandes</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>

        <Calendar>
          <DayPicker 
            weekdaysShort={['D', 'S', 'T','Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{daysOfWeek: [0, 6]}]}
            modifiers={{
              available: {daysOfWeek: [1, 2, 3, 4, 5]}
            }}
            selectedDays={selectedDay}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  )
}

export default Dashboard;
