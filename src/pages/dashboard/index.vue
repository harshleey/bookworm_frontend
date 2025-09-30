<script setup lang="ts">
defineOptions({ name: 'DashboardPage' })
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import StatsGroup from '@/components/dashboard/StatsGroup.vue'
import AdminGroup from '@/components/dashboard/AdminGroup.vue'
import BorrowerGroup from '@/components/dashboard/BorrowerGroup.vue'
import BranchGroup from '@/components/dashboard/BranchGroup.vue'

ChartJS.register(ArcElement, Tooltip, Legend)

const pieChartData = {
  labels: ['Returned books', 'Borrowed books'],
  datasets: [
    {
      backgroundColor: ['#151619', '#3D3E3E'],
      data: [35, 65],
    },
  ],
}

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
}

const statsData = [
  {
    icon: '/src/assets/images/total-user-icon.svg',
    count: '0150',
    label: 'Total User Base',
  },
  {
    icon: '/src/assets/images/book-count-icon.svg',
    count: '01500',
    label: 'Total Book Count',
  },
  {
    icon: '/src/assets/images/branch-icon.svg',
    count: '0010',
    label: 'Branch Count',
  },
]

const adminData = [
  {
    adminName: 'John Doe',
    adminId: '1',
    adminLoginStatus: 'Online',
  },
  {
    adminName: 'Jane Smith',
    adminId: '2',
    adminLoginStatus: 'Offline',
  },
  {
    adminName: 'Stephen Curry',
    adminId: '30',
    adminLoginStatus: 'Online',
  },
  {
    adminName: 'Kobe Bryant',
    adminId: '24',
    adminLoginStatus: 'Offline',
  },
]

const borrowersData = [
  {
    borrowerName: 'John Doe',
    borrowerId: '1',
  },
  {
    borrowerName: 'Jane Smith',
    borrowerId: '2',
  },
  {
    borrowerName: 'Stephen Curry',
    borrowerId: '30',
  },
  {
    borrowerName: 'Kobe Bryant',
    borrowerId: '24',
  },
]

const branchData = [
  {
    branchName: 'Bookworm - Dubai',
    branchId: '1',
  },
  {
    branchName: 'Bookworm - Barbados',
    branchId: '2',
  },
  {
    branchName: 'Bookworm - Cabo',
    branchId: '30',
  },
  {
    branchName: 'Bookworm - London',
    branchId: '24',
  },
]
</script>

<template>
  <div class="dashboard__container">
    <div class="dashboard__flex">
      <div class="chart">
        <div class="dashboard__chart">
          <Pie :data="pieChartData" :options="pieChartOptions" />
        </div>
        <div class="chart__data">
          <img src="/src/assets/images/big_black_logo.svg" class="big__black__logo" alt="" />

          <span class="dashboard__border border"></span>

          <div class="chart__data__flex">
            <div class="data__inner__flex">
              <div>
                <div class="data__circle gray__bg"></div>
                <span>Total Borrowed Books </span>
              </div>
              <div>
                <div class="data__circle black__bg"></div>
                <span>Total Returned Books </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="admin__data">
        <div class="admin__flex">
          <StatsGroup :stats="statsData" />

          <AdminGroup :stats="adminData" />
        </div>
      </div>

      <div class="admin__data">
        <div class="admin__flex">
          <BorrowerGroup :stats="borrowersData" />

          <BranchGroup :stats="branchData" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard__container {
  width: 99%;
  margin: auto;
}

.dashboard__flex {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.chart {
  width: 35%;
  /* width: 30%; */
  /* background-color: yellow; */
}
.dashboard__chart {
  width: 100%;
  /* width: 450px; */
  height: 450px;
  margin-bottom: 4rem;
}

.chart__data {
  width: 380px;
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: auto;
}

.dashboard__border {
  height: 90px;
}

.data__inner__flex,
.chart__data__flex .data__inner__flex div {
  display: flex;
  align-items: center;
  gap: 20px;
}

.data__inner__flex {
  flex-direction: column;
}

.data__inner__flex span {
  font-size: 0.9rem;
  font-weight: 500;
}

.data__circle {
  border-radius: 100%;
  width: 15px;
  height: 15px;
}

.admin__data {
  width: 30%;
}

.admin__flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
}
</style>
