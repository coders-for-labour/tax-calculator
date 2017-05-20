import { Injectable } from '@angular/core';

import { WCIPF_DATA } from "./configuration";

export interface WcipfItem {
  name: string;
  plural?: string;
  icon?: string;
  cost: number;
}

export interface WcipfResultItem extends WcipfItem {
  total: number;
}

@Injectable()
export class WcipfService {

  public get(funds: number): WcipfResultItem[] {
    return WCIPF_DATA.filter(item => Math.floor(funds / item.cost) > 0).map(item => <WcipfResultItem>{
      name: item.name,
      plural: item.plural,
      cost: item.cost,
      icon: item.icon,
      total: Math.floor(funds / item.cost)
    });
  } 
}
