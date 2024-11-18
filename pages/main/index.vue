<template>
  <div class="main">

    <div class="top-title">
      <div class="title">
        <img class="thunder-icon" src="../../public/menu/menu-releases.svg" />
        <span class='title-name'>Releases</span>
        <span class="title-addition-info">126 релизов</span>
      </div>
    </div>

    <div class="navigation-bar">
      <div class="frame1">
        <el-input class="navigation-title-search"
                  v-model="titleNavigationSearch"
                  clearable
                  @input="searchFilter"
                  placeholder="Поиск"
                  :prefix-icon="Search" />
      </div>

      <div class="frame2">
        <div class="navigation-filter-select-genre">
          <el-config-provider :locale="ru">
            <el-select
              v-model="titleNavigationSelectGenre"
              placeholder="Жанр"
              popper-class="blueBack"
              clearable
              filterable>
              <el-option
                v-for="item in genres"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-config-provider>
        </div>
      </div>

      <div class="frame3">
        <div class="navigation-filter-select-sort-order">
          <el-config-provider :locale="ru">
            <el-select
              :prefix-icon="Search"
              v-model="titleNavigationSelectSortOrder"
              popper-class="blueBack"
              filterable>
              <template #prefix>
                <img src="../../public/navigation/navigation-sort-icon.svg" />
              </template>
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-config-provider>
        </div>
      </div>

      <div class="frame4">
        <div>
          <span class="navigation-pages-text">Страница </span>
        </div>

        <div class="navigation-pages-switch">
          <img src="../../public/navigation/navigation-pages-left.svg" /><span
          class="navigation-pages-amount">1</span><img
          src="../../public/navigation/navigation-pages-right.svg" />
        </div>

      </div>

      <div class="frame5">
        <div class="navigation-show-tiles-area-selected">
          <img src="../../public/navigation/navigation-show-tiles.svg" />
        </div>

        <div class="navigation-show-rows-area">
          <img src="../../public/navigation/navigation-show-rows.svg" />
        </div>
      </div>
    </div>

    <div class="tiles">
          <div class="card" v-for="st in styleMain">
            <div class="image-frame">
              <div class="favorites" v-if="!st.favorite" @click="addToFavoriteStyle(st)"><img src="../../public/navigation/navigation-heart-empty.svg" class="heartFullPic"/></div>
              <div class="favorites" v-else @click="removeFromFavoriteStyle(st)"><img src="../../public/navigation/navigation-heart-full.svg" class="heartEmptyPic" /></div>
              <div class="popular"><img src="../../public/navigation/navigation-popular.svg" /><span
                class="popular-number">24</span></div>
              <img class="pic" :src='st.imageURL' />
            </div>
            <div class="card-footer">
              <div class="date">{{ st.date }}</div>
              <div class="title">{{ st.name }}</div>
            </div>
          </div>
    </div>

  </div>
</template>

<script setup>
import { useMainStore } from '@/store/main.ts'
import { Search } from '@element-plus/icons-vue'
import moment from 'moment'
import ru from 'element-plus/dist/locale/ru.mjs'

const main = useMainStore()

definePageMeta({
  layout: 'main',
  title: ''
  /*middleware: 'main-auth'*/
})

const titleNavigationSearch = ref('')
const titleNavigationSelectGenre = ref('')
const titleNavigationSelectSortOrder = ref('0')

let styleMain = ref([])

const releaseStyles = [
  {
    value: '661c1604be24e2407507b102',
    label: 'Soulful-Funk-Disco'
  },
  {
    value: '661c1604be24e2407507b104',
    label: 'Afro House'
  },
  {
    value: '661c1605be24e2407507b11a',
    label: 'Bass House'
  },
  {
    value: '661c1605be24e2407507b132',
    label: 'Bassline House'
  },
  {
    value: '661c1605be24e2407507b114',
    label: 'Breaks'
  },
  {
    value: 'Chill Out',
    label: 'Chill Out'
  },
  {
    value: '661c1605be24e2407507b128',
    label: '140 Deep Dubstep'
  },
  {
    value: '661c1605be24e2407507b10e',
    label: 'Deep House'
  },
  {
    value: '661c1605be24e2407507b120',
    label: 'Drum & Bass'
  },
  {
    value: '661c1605be24e2407507b116',
    label: 'Dubstep'
  },
  {
    value: 'Grime',
    label: 'Grime'
  },
  {
    value: '661c1605be24e2407507b148',
    label: 'Electronica'
  },
  {
    value: '661c1605be24e2407507b144',
    label: 'Funky House'
  },
  {
    value: '661c1605be24e2407507b15e',
    label: 'Hard Dance-hardcore'
  },
  {
    value: '661c1605be24e2407507b166',
    label: 'Hard Techno'
  },
  {
    value: '661c1605be24e2407507b124',
    label: 'House'
  },
  {
    value: '661c1604be24e2407507b106',
    label: 'Indie Dance'
  },
  {
    value: '661c1606be24e2407507b1ae',
    label: 'Melodic Techno'
  },
  {
    value: '661c1606be24e2407507b180',
    label: 'Minimal House'
  },
  {
    value: '661c1604be24e2407507b100',
    label: 'Nu-Disco-Disco'
  },
  {
    value: '661c1605be24e2407507b114',
    label: 'Breaks'
  },
  {
    value: 'Organic House',
    label: 'Organic House'
  },
  {
    value: '661c1605be24e2407507b14a',
    label: 'Progressive House'
  },
  {
    value: '661c1605be24e2407507b168',
    label: 'Psy-Trance'
  },
  {
    value: 'Trap',
    label: 'Trap'
  },
  {
    value: '661c1605be24e2407507b13c',
    label: 'Soulful House'
  },
  {
    value: '661c1605be24e2407507b122',
    label: 'Tech House'
  },
  {
    value: '66200623970a7f793acd2869',
    label: 'Techno (Peak Time, Driving)'
  },
  {
    value: '66211a17970a7f793ae1cdf0',
    label: 'Techno (Raw, Deep, Hypnotic)'
  },
  {
    value: '661c1604be24e2407507b0fe',
    label: 'Trance'
  }
]

let genres = releaseStyles

const options2 = [
  {
    value: '0',
    label: 'По дате добавления'
  },
  {
    value: '1',
    label: 'По жанру'
  },
  {
    value: '2',
    label: 'По алфавиту'
  },
  {
    value: '3',
    label: 'По популярности'
  }
]

const getLabel = (item) => {
  return item.label
}

const searchFilter = (data) => {


}

const fetchStyles = async (styleDir) => {
  const styles = await main.fetchStylesByStyleDir(styleDir)

  if (styles['success']) {

    styles.data.map(s => {
      s.date = moment(s.updatedAt).format('DD.MM.YY')
    })

    styleMain.value = styles.data
  }
}

const addToFavoriteStyle = async (st) => {

  const formData = {
    style: st.name,
    styleID: st["_id"],
    category: st["styleDir"]
  }
  const added = await main.addToFavoriteStyle(formData)
  if (added) {
      st.favorite = true;
  }
}

const removeFromFavoriteStyle = async (st) => {
  const removed = await main.removeFavoriteStyle(st["_id"])
  if (removed && removed.success) {
    st.favorite = false;
  }
}

onMounted(async () => {
  await fetchStyles('Releases')
})

</script>

<style lang="scss" scoped>

.main {
  gap: 32px;
}

.top-title {
  position: absolute;
  width: 350px;
  height: 51px;
  left: 372px;
  top: 60px;
}

.thunder-icon {
  width: 40px;
  height: 40px;
  filter: brightness(0) saturate(100%) invert(16%) sepia(100%) saturate(3568%) hue-rotate(338deg) brightness(93%) contrast(95%);
  /*fill: #E81944;*/
}

.title {
  display: flex;
  align-items: center;
}

.title-name {
  /* Releases */

  width: 169px;
  height: 51px;

  font-family: 'Onest';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 51px;
  /* identical to box height */
  color: #FFFFFF;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  padding-left: 15px;
}

.title-addition-info {
  /* 126 релизов */

  width: 105px;
  height: 23px;
  left: 617px;
  top: 82px;

  font-family: 'Onest';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  /* white-40 */
  color: rgba(255, 255, 255, 0.4);
  flex: none;
  flex-grow: 0;
  order: 1;

  padding-top: 12px;
}

.navigation-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;

  width: max-content;
  position: absolute;
  height: 52px;
  left: 372px;
  top: 143px;

  background: #292626;
  border-radius: 24px;
}


.frame1 {
  /* Frame 2 */
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px 20px 13px 14px;
  gap: 12px;

  height: 50px;

  background: #1F1D1D;
  border-radius: 12px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.frame2 {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 5px 13px;
  gap: 12px;

  width: 300px;
  height: 50px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.frame3 {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  /*padding: 10px 20px 16px;*/
  gap: 16px;

  width: 256px;
  height: 50px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  flex: none;
  order: 2;
  flex-grow: 0;
}

.frame4 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 8px;

  width: 212px;
  height: 40px;

  flex: none;
  order: 3;
  flex-grow: 0;
}

.frame5 {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  height: 50px;

  flex: none;
  order: 4;
  flex-grow: 0;
}

.el-input :deep(.el-input__inner) {
  background: #1F1D1D;
  font-family: Onest;
  font-size: 18px;
  font-weight: 300;
  line-height: 22.95px;
  text-align: left;
  border-radius: 12px;
  color: #828282;
  /*  width: 210px;*/
}

.el-input :deep(.el-input__wrapper) {
  align-items: center;
  border-radius: 12px;
  background: #1F1D1D;
  box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
}

.navigation-title-search {
  width: 100%;
}

.el-select :deep(.el-select__inner) {
  background: #1F1D1D;
  font-family: Onest;
  font-size: 18px;
  font-weight: 300;
  line-height: 22.95px;
  text-align: left;
  border-radius: 12px;
  color: #828282;
}


.el-select :deep(.el-select__placeholder) {
  font-family: Onest;
  font-size: 18px;
  font-weight: 300;
  line-height: 22.95px;
  /*color: #828282;*/
  color: white;
}

.el-select :deep(.el-select__wrapper) {
  background: transparent;
  box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;

  font-family: Onest;
  font-size: 18px;
  font-weight: 300;
  line-height: 22.95px;
  text-align: left;
  border-radius: 12px;
  color: #828282;
}

.navigation-filter-select-genre {
  width: 100%;
}

.navigation-filter-select-sort-order {
  width: 100%;
}

.navigation-pages-text {
  width: 84px;
  height: 23px;
  gap: 0px;
  color: #828282;

  font-family: Onest;
  font-size: 18px;
  font-weight: 400;
  line-height: 22.95px;
  text-align: left;
}

.navigation-pages-switch {
  /* Frame 18 */

  box-sizing: border-box;
  justify-content: center;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  gap: 8px;

  width: 120px;
  height: 40px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.navigation-pages-amount {
  width: 40px;
  height: 23px;
  gap: 0px;

  font-family: Onest;
  font-size: 18px;
  font-weight: 400;
  line-height: 22.95px;
  text-align: center;

  color: #FFFFFF;
}

.navigation-show-tiles-area {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;

  width: 30px;
  height: 30px;

  border-radius: 12px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

}

.navigation-show-tiles-area-selected {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;

  width: 30px;
  height: 30px;

  border-radius: 12px;
  background: #1F1D1D;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

}

.navigation-show-rows-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 30px;
  height: 30px;

  border-radius: 12px;

  flex: none;
  order: 1;
  flex-grow: 0;
}

.navigation-show-rows-area-selected {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 30px;
  height: 30px;

  background: #1F1D1D;
  border-radius: 12px;

  flex: none;
  order: 1;
  flex-grow: 0;
}

.tiles {
  position: absolute;
  width: 1516px;
  height: 974px;

  left: 372px;
  top: 260px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 0px;
}

.card {
  padding: 0px;
  gap: 8px;
  width: 250px;
  height: 322px;
  background: transparent;
  border: 1px solid transparent;
}

.card:hover {
  padding: 0px;
  background: #1F1D1D;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 0;
  width: 250px;
  height: 322px;
  box-sizing: border-box;
}

.card:hover .image-frame .popular {
  visibility: visible;
}

.card:hover .image-frame .favorites {
  visibility: visible;
}

.pic {
  width: 226px;
  height: 226px;
  border: 4px solid #292626;
  border-radius: 24px;
}

.card-footer {
  padding: 0px;
  width: 210px;
  height: 64px;
}

.date {
  width: 210px;
  height: 18px;
  gap: 0px;
  font-family: Onest;
  font-size: 14px;
  font-weight: 300;
  line-height: 17.85px;
  text-align: left;
  color: #828282;
  padding-left: 10px;
}

.title {
  width: 210px;
  height: 46px;
  font-family: 'Onest';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #FFFFFF;
  padding-left: 10px;
}

.image-frame {
  position: relative;
  padding-left: 6px;
  padding-top: 5px;
}

.favorites {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  visibility: hidden;
  padding: 4px 10px;
  gap: 10px;
  width: 24px;
  height: 32px;
  left: 24px;
  top: 182px;
  justify-content: center;
  background: #292626;
  border-radius: 8px;
}

.popular {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  visibility: hidden;
  padding: 4px 8px;
  gap: 8px;
  width: 70px;
  height: 32px;
  left: 155px;
  top: 182px;
  box-sizing: border-box;
  background: #292626;
  border-radius: 8px;
}

.popular-number {
  width: 19px;
  height: 20px;
  gap: 0px;

  font-family: Onest;
  font-size: 16px;
  font-weight: 300;
  line-height: 20.4px;

  text-align: left;
  color: #FFFFFF;
}

.heartEmptyPic {
  padding-left: 4px;
}

.heartFullPic {
  padding-left: 1px;
}
</style>
