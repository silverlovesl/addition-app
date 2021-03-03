// UIの関連Importはここでやる
import { App } from 'vue';
import 'ant-design-style-sumamry/dist/ant-design-style-summary.min.css';
import 'vant/lib/index.css';
import './assets/scss/index.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import {
  Button,
  Col,
  Field,
  Form,
  Image,
  Row,
  Tabbar,
  TabbarItem,
  Sticky,
  Grid,
  GridItem,
  Icon,
  IndexBar,
  IndexAnchor,
  Cell,
  CheckboxGroup,
  Checkbox,
  List,
  Tabs,
  Tab,
  SwipeCell,
  Popup,
  Radio,
  RadioGroup,
} from 'vant';

const uiBootstrap = (app: App<Element>) => {
  // Vant UI関連のComponentはここでImport、使用する分のみ追加
  app
    .use(Button)
    .use(Popup)
    .use(SwipeCell)
    .use(Tab)
    .use(Tabs)
    .use(List)
    .use(Row)
    .use(Image)
    .use(Col)
    .use(Form)
    .use(Field)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Sticky)
    .use(Grid)
    .use(GridItem)
    .use(Icon)
    .use(Cell)
    .use(IndexBar)
    .use(IndexAnchor)
    .use(CheckboxGroup)
    .use(Checkbox)
    .use(RadioGroup)
    .use(Radio);

  //dayjs設定
  dayjs.locale('ja');
};

export default uiBootstrap;
