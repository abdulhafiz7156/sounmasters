<template>
  <div>

    <div id="aside-div">

      <div><img class="menu-logo" src="../../public/menu/menu-logo.svg" /></div>

      <div style="margin-bottom: 20px;">
        <el-input class="menu-search"
                  v-model="menuSearch"
                  placeholder="Поиск"
                  :prefix-icon="Search" />
      </div>

      <div class="menu">
        <div class="menu-element-div" id="release-menu"><img src="../../public/menu/menu-releases.svg" /><span
          style="vertical-align: middle">Releases</span>

          <div class="released-side-menu">
            <!--        <span class="ellipse"/>-->
            <div class="releases-menu-title">Releases</div>
            <div class="released-side-menu-row">
              <el-row class="release-row">
                <el-col :span="12">Soulful-Funk-Disco</el-col>
                <el-col :span="12">Indie Dance</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">Afro House</el-col>
                <el-col :span="12">Melodic Techno</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">Bass House</el-col>
                <el-col :span="12">Minimal House</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">Bassline House</el-col>
                <el-col :span="12">Nu-Disco-Disco</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">Breaks</el-col>
                <el-col :span="12">Organic House</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">Chill Out</el-col>
                <el-col :span="12">Progressive House</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">140 Deep Dubstep</el-col>
                <el-col :span="12">Psy-Trance</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">Drum & Bass</el-col>
                <el-col :span="12">Trap</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">Dubstep</el-col>
                <el-col :span="12">Soulful House</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">Grime</el-col>
                <el-col :span="12">Tech House</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">Electronica</el-col>
                <el-col :span="12">Techno (Peak Time, Driving)</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">Funky House</el-col>
                <el-col :span="12">Techno (Raw, Deep, Hypnotic)</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">Hard Dance-hardcore</el-col>
                <el-col :span="12">Trance</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">Hard Techno</el-col>
                <el-col :span="12">Deep House</el-col>
              </el-row>
              <el-row class="release-row">
                <el-col :span="12">House</el-col>
                <el-col :span="12"></el-col>
              </el-row>
              <el-row></el-row>
            </div>
          </div>
        </div>
        <div class="menu-element-div"><img src="../../public/menu/menu-djcharts.svg" /><span>DJ Charts & Albums</span>
        </div>
        <div class="menu-element-div"><img src="../../public/menu/menu-mash-up.svg" /><span>Mash-Up</span></div>
        <div class="menu-element-div"><img src="../../public/menu/menu-top100.svg" /><span>Топ 100</span></div>
        <div class="menu-element-div" id="russian-menu"><img src="../../public/menu/menu-russian-charts.svg" /><span>Russian Charts</span>

          <div class="russian-side-menu">
            <!--        <span class="ellipse"/>-->
            <div class="russian-menu-title">Russian Charts</div>
            <div class="russian-side-menu-row">
              <el-row class="russian-row">
                <el-col :span="12">Bootleg Pack</el-col>
                <el-col :span="12">Main Stage</el-col>
              </el-row>
              <el-row class="russian-row">
                <el-col :span="12">Club House</el-col>
                <el-col :span="12">Only Hits Music</el-col>
              </el-row>
              <el-row class="russian-row">
                <el-col :span="12">Crooklyn Clan Pack</el-col>
                <el-col :span="12">Open Format</el-col>
              </el-row>
              <el-row class="russian-row">
                <el-col :span="12">Deep – Funky House – Tech House</el-col>
                <el-col :span="12">Rap - RnB</el-col>
              </el-row>
              <el-row class="russian-row">
                <el-col :span="12">Edit Pack</el-col>
                <el-col :span="12">Remix Pack</el-col>
              </el-row>
              <el-row class="russian-row">
                <el-col :span="12">Electro – Bigroom – Prohouse</el-col>
                <el-col :span="12">Retro Remix</el-col>
              </el-row>
              <el-row class="russian-row">
                <el-col :span="12">G – House – Brazilian Bass</el-col>
                <el-col :span="12">Russian</el-col>
              </el-row>
              <el-row class="russian-row">
                <el-col :span="12">Hardstyle</el-col>
                <el-col :span="12">Trance – PSY Trance</el-col>
              </el-row>
              <el-row class="russian-row">
                <el-col :span="12">Hiphop – Moombahton – Twerk</el-col>
                <el-col :span="12">Trap – Future Bass</el-col>
              </el-row>
              <el-row class="russian-row">
                <el-col :span="12">Hyperz Pack</el-col>
                <el-col :span="12">Vocal House – Future House</el-col>
              </el-row>
              <el-row class="russian-row">
                <el-col :span="12">K-Pop</el-col>
                <el-col :span="12">WAV</el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="menu-element-div"><img src="../../public/menu/menu-dj-russian.svg" /><span>DJ Russian Playlist</span></div>
        <div class="menu-element-div" id="lossless-menu"><img src="../../public/menu/menu-lossless.svg" /><span>Lossless</span>

          <div class="lossless-side-menu">
            <div class="lossless-menu-title">Lossless</div>
            <div class="lossless-side-menu-row">
              <el-row class="lossless-row">
                <el-col :span="12">140 - Deep Dubstep - Grime</el-col>
                <el-col :span="12">Indie Dance</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Afro House</el-col>
                <el-col :span="12">Jackin House</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Amapiano</el-col>
                <el-col :span="12">MainStage</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Bass Club</el-col>
                <el-col :span="12">Melodic House & Techno</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Bass House</el-col>
                <el-col :span="12">Minimal Deep Tech</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Breaks Breakbeat UK Bass</el-col>
                <el-col :span="12">Nu-Disco - Disco</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Dance Electro Pop</el-col>
                <el-col :span="12">Organic House - Downtempo</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Deep House</el-col>
                <el-col :span="12">Progressive House</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">DJ Tools</el-col>
                <el-col :span="12">Psy-Trance</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Drum & Bass</el-col>
                <el-col :span="12">Tech House</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Dubstep</el-col>
                <el-col :span="12">Techno (Peak Time, Driving)</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Electro (Classic Detroit Modern)</el-col>
                <el-col :span="12">Techno (Raw, Deep, Hypnotic)</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Electronica</el-col>
                <el-col :span="12">Trance (Main Floor)</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Funky House</el-col>
                <el-col :span="12">Trance (Raw Deep Hypnotic)</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Hard Dance - Hardcore</el-col>
                <el-col :span="12">Trap Wave</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">Hard Techno</el-col>
                <el-col :span="12">UK Garage Bassline</el-col>
              </el-row>
              <el-row class="lossless-row">
                <el-col :span="12">House</el-col>
                <el-col :span="12"></el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="menu-element-div"><img
          src="../../public/menu/menu-bandcamps-vynil.svg" /><span>Bandcamp & Vinyl</span></div>
        <div class="menu-element-div"><img src="../../public/menu/menu-divider.svg" /></div>
        <div class="menu-element-div"><img src="../../public/menu/menu-events.svg" /><span>Мероприятия</span></div>
        <div class="menu-element-div"><img src="../../public/menu/menu-download.svg" /><span>Скачать сборку</span></div>
      </div>


      <div class="menu-footer">
        <div class="menu-footer-div">
          <img src="../../public/menu/menu-user-avatar.svg" /><span><div>Dmitry_MDA</div><div
          class="menu-crown-premium"><img src="../../public/menu/menu-crown.svg" /><span style="padding-left: 5px;">Premium</span></div></span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { io } from 'socket.io-client'
import { useAuthStore } from '~/store/auth'
import { useMainStore } from '~/store/main'
import ru from 'element-plus/dist/locale/ru.mjs'

import {
  Search
} from '@element-plus/icons-vue'

const auth = useAuthStore()
const main = useMainStore()

const { $bus } = useNuxtApp()

const menuSearch = ref()

const color = '#4b4d4d'

let socket: any = null

/*const connectToWebsocketServer = async () => {
  socket = io(`${useRuntimeConfig().public.websocketServerURL}`, {
    reconnectionDelayMax: 10000,
    extraHeaders: {
      Authorization: `Bearer ${auth.token}`
    }
  })

  socket.on('connect', () => {
    if (!!socket) socket.emit('joinRoom', {})
  })

  socket.on('courierPositionChanged', (socket: any) => {
    $bus.emit('courierPositionChanged', { data: socket })
  })

  socket.on('settingsUpdated', async (socket: any) => {
    await checkSettings(true)
    $bus.emit('settingsUpdated', {})
  })

  socket.on('orderUpdated', (data) => {
    $bus.emit('orderUpdated', data)
  })

  socket.on('routeUpdated', (data) => {
    //console.log('routeUpdated from socket')
    $bus.emit('routeUpdated', data)
  })
}*/

</script>


<style lang="scss" scoped>

#aside-div {
  width: 332px;
  height: 900px;
  top: 28px;
  gap: 0px;
  left: 0px;
  border-radius: 0px 32px 32px 0px;
  background: #292626;
  border: 1px solid #373434;
  /*border-image-source: linear-gradient(186deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);*/
  box-sizing: border-box;
  position: absolute;
  padding-bottom: 28px;
}

.menu-logo {
  width: 268px;
  height: 44px;
  top: 32px;
  left: 32px;
  gap: 0px;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 13px 20px 13px 14px;
}

.menu-search {
  width: 268px;
  height: 50px;
  padding: 13px 20px 13px 14px;
  gap: 12px;
  border-radius: 0px 0px 0px 0px;
  background: #292626;
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
  width: 210px;
}

.el-input :deep(.el-input__wrapper) {
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  background: #1F1D1D;
  box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
}

.menu {
  font-family: Onest;
  font-size: 20px;
  font-weight: 400;
  line-height: 25.5px;
  text-align: left;
  color: white;
  padding-left: 20px;
}

.menu-element-div {
  opacity: 0.6;
  width: 268px;
  height: 52px;
  gap: 16px;
  border-radius: 8px 0px 0px 0px;
  display: flex;
  align-items: center;
}

.menu-element-div:hover {
  opacity: 1;
  position: relative;
}

#release-menu:hover .released-side-menu {
  visibility: visible;
}

#lossless-menu:hover .lossless-side-menu {
  visibility: visible;
}

#russian-menu:hover .russian-side-menu {
  visibility: visible;
}

.menu-element-div:hover:after {
  content: url(../../public/menu/menu-flash.svg);
  display: block;
  position: absolute;
  left: -45px;
  top: -50px;
}

.menu-footer {
  position: absolute;
  bottom: 0;
  width: 310px;

  font-family: Onest;
  font-size: 20px;
  font-weight: 500;
  line-height: 25.5px;
  text-align: left;
  height: 100px;
  color: white;
  top: 798px;
  gap: 0px;
  background: #332F2F;
  padding-left: 20px;
  border-radius: 0px 0px 32px 0px;
  display: flex;
  align-items: center;
}

.menu-footer-div {
  display: flex;
  align-items: center;
  width: 143px;
  height: 60px;
  top: 944px;
  left: 32px;
  gap: 16px;
}

.menu-crown-premium {
  display: flex;
  align-items: center;
  color: #828282;
}

.releases-menu-title {
  font-family: Onest;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.4px;
  text-align: left;
  color: #FFFFFF80;
  padding-bottom: 10px;
}

.released-side-menu {
  visibility: hidden;
  border: 1px solid;
  border-image-source: linear-gradient(186deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
  box-sizing: border-box;
  position: absolute;
  width: 436px;
  height: 720px;
  left: 320px;
  top: -150px;
  color: white;
  background: #1F1D1D80;
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 32px;
  padding: 24px 20px 13px 24px;
  z-index: 2;
}

.release-row {
  padding-top: 11px;
  padding-bottom: 11px;
  display: flex;
  align-items: center;
}

.lossless-menu-title {
  font-family: Onest;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.4px;
  text-align: left;
  color: #FFFFFF80;
  padding-bottom: 10px;
}

.lossless-side-menu {
  visibility: hidden;
  border: 1px solid;
  border-image-source: linear-gradient(186deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
  box-sizing: border-box;
  position: absolute;
  width: 436px;
  height: 770px;
  left: 324px;
  top: -460px;
  color: white;
  background: #1F1D1D80;
  backdrop-filter: blur(30px);
  border-radius: 32px;
  padding: 24px 20px 13px 24px;
  z-index: 2;
}

.lossless-row {
  padding-top: 11px;
  padding-bottom: 11px;
  display: flex;
  align-items: center;
}

.russian-menu-title {
  font-family: Onest;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.4px;
  text-align: left;
  color: #FFFFFF80;
  padding-bottom: 10px;
}

.russian-side-menu {
  visibility: hidden;
  border: 1px solid;
  border-image-source: linear-gradient(186deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
  box-sizing: border-box;
  position: absolute;
  width: 456px;
  height: 550px;
  left: 324px;
  top: -352px;
  color: white;
  background: rgba(35, 31, 31, 0.5);
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 32px;
  padding: 24px 20px 13px 24px;
  z-index: 1;
}

.russian-row {
  padding-top: 11px;
  padding-bottom: 11px;
  display: flex;
  align-items: center;
}

.ellipse {
  position: absolute;
  width: 133px;
  height: 133px;
  left: -42px;
  top: -60px;
  background: #E81944;
  filter: blur(50px);
}

</style>
