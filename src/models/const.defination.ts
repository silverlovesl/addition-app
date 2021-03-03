import morningIcon from '../assets/images/morning.png';
import noonIcon from '../assets/images/noon.png';
import eveningIcon from '../assets/images/evening.png';
import nightIcon from '../assets/images/night.png';
import anyTimeIcon from '../assets/images/any-time.svg';
import bathIcon from '../assets/images/bath.svg';
import bentoIcon from '../assets/images/bento.svg';
import housekeepingIcon from '../assets/images/housekeeping.svg';
import kidsIcon from '../assets/images/kids.svg';
import laundryIcon from '../assets/images/laundry.svg';
import otherIcon from '../assets/images/other.svg';
import petIcon from '../assets/images/pet.svg';
import throwTrashIcon from '../assets/images/throws.svg';

export namespace Consts {
  export const taskTimeSpans = [
    { key: 1, title: '朝', icon: morningIcon },
    { key: 2, title: '昼', icon: noonIcon },
    { key: 3, title: '夕', icon: eveningIcon },
    { key: 4, title: '夜', icon: nightIcon },
    // { key: 9, title: '常時', icon: anyTimeIcon },
  ];

  export const taskCategories = [
    {
      categoryID: 1,
      name: 'ゴミ出し',
      icon: throwTrashIcon,
      items: [
        { itemID: 1, name: '準備' },
        { itemID: 2, name: 'ゴミ出し' },
        { itemID: 3, name: 'その他' },
      ],
    },
    {
      categoryID: 2,
      name: '子供',
      icon: kidsIcon,
      items: [
        { itemID: 1, name: '準備' },
        { itemID: 2, name: '通園・通学準備' },
        { itemID: 3, name: '入浴準備' },
        { itemID: 4, name: '入浴' },
        { itemID: 5, name: '入浴後' },
        { itemID: 6, name: '就寝準備' },
        { itemID: 7, name: '寝かしつけ' },
        { itemID: 8, name: '着替え' },
        { itemID: 9, name: '食事' },
        { itemID: 10, name: '送迎' },
        { itemID: 11, name: 'トイレ・おむつ' },
        { itemID: 12, name: '服薬' },
        { itemID: 13, name: '洗浄(育児用品、子供の道具など)' },
        { itemID: 14, name: '宿題' },
        { itemID: 15, name: '買い物' },
        { itemID: 17, name: 'その他' },
      ],
    },
    {
      categoryID: 3,
      name: '掃除',
      icon: housekeepingIcon,
      items: [
        { itemID: 1, name: '掃除機' },
        { itemID: 2, name: '整理整頓' },
        { itemID: 3, name: '片付け' },
        { itemID: 4, name: 'キッチン' },
        { itemID: 5, name: '風呂' },
        { itemID: 6, name: 'トイレ' },
        { itemID: 7, name: '庭・ベランダ' },
        { itemID: 8, name: '拭き掃除' },
        { itemID: 9, name: '加湿器' },
        { itemID: 10, name: '空気清浄機' },
        { itemID: 11, name: '洗濯槽' },
        { itemID: 12, name: 'その他' },
      ],
    },
    { categoryID: 4, name: '入浴', icon: bathIcon, items: [] },
    { categoryID: 5, name: '洗濯', icon: laundryIcon, items: [] },
    { categoryID: 6, name: 'ペット', icon: petIcon, items: [] },
    { categoryID: 7, name: '弁当', icon: bentoIcon, items: [] },
    { categoryID: 8, name: 'その他', icon: otherIcon, items: [] },
  ];
}
