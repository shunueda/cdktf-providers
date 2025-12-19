// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVrrpADetailOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#id DataThunderVrrpADetailOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#oper DataThunderVrrpADetailOper#oper}
  */
  readonly oper?: DataThunderVrrpADetailOperOper;
}
export interface DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#eth_pkt_send DataThunderVrrpADetailOper#eth_pkt_send}
  */
  readonly ethPktSend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#eth_port DataThunderVrrpADetailOper#eth_port}
  */
  readonly ethPort?: number;
}

export function dataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStructToTerraform(struct?: DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eth_pkt_send: cdktf.numberToTerraform(struct!.ethPktSend),
    eth_port: cdktf.numberToTerraform(struct!.ethPort),
  }
}


export function dataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStructToHclTerraform(struct?: DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eth_pkt_send: {
      value: cdktf.numberToHclTerraform(struct!.ethPktSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth_port: {
      value: cdktf.numberToHclTerraform(struct!.ethPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethPktSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethPktSend = this._ethPktSend;
    }
    if (this._ethPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethPort = this._ethPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethPktSend = undefined;
      this._ethPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethPktSend = value.ethPktSend;
      this._ethPort = value.ethPort;
    }
  }

  // eth_pkt_send - computed: false, optional: true, required: false
  private _ethPktSend?: number; 
  public get ethPktSend() {
    return this.getNumberAttribute('eth_pkt_send');
  }
  public set ethPktSend(value: number) {
    this._ethPktSend = value;
  }
  public resetEthPktSend() {
    this._ethPktSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethPktSendInput() {
    return this._ethPktSend;
  }

  // eth_port - computed: false, optional: true, required: false
  private _ethPort?: number; 
  public get ethPort() {
    return this.getNumberAttribute('eth_port');
  }
  public set ethPort(value: number) {
    this._ethPort = value;
  }
  public resetEthPort() {
    this._ethPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethPortInput() {
    return this._ethPort;
  }
}

export class DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStructOutputReference {
    return new DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVrrpADetailOperOperLocalInfoListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#switch_to_active DataThunderVrrpADetailOper#switch_to_active}
  */
  readonly switchToActive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#switch_to_standby DataThunderVrrpADetailOper#switch_to_standby}
  */
  readonly switchToStandby?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#vrid DataThunderVrrpADetailOper#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#vrrp_pkt_send DataThunderVrrpADetailOper#vrrp_pkt_send}
  */
  readonly vrrpPktSend?: number;
  /**
  * local_eth_send_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#local_eth_send_list DataThunderVrrpADetailOper#local_eth_send_list}
  */
  readonly localEthSendList?: DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStruct[] | cdktf.IResolvable;
}

export function dataThunderVrrpADetailOperOperLocalInfoListStructToTerraform(struct?: DataThunderVrrpADetailOperOperLocalInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch_to_active: cdktf.numberToTerraform(struct!.switchToActive),
    switch_to_standby: cdktf.numberToTerraform(struct!.switchToStandby),
    vrid: cdktf.numberToTerraform(struct!.vrid),
    vrrp_pkt_send: cdktf.numberToTerraform(struct!.vrrpPktSend),
    local_eth_send_list: cdktf.listMapper(dataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStructToTerraform, true)(struct!.localEthSendList),
  }
}


export function dataThunderVrrpADetailOperOperLocalInfoListStructToHclTerraform(struct?: DataThunderVrrpADetailOperOperLocalInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch_to_active: {
      value: cdktf.numberToHclTerraform(struct!.switchToActive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch_to_standby: {
      value: cdktf.numberToHclTerraform(struct!.switchToStandby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrrp_pkt_send: {
      value: cdktf.numberToHclTerraform(struct!.vrrpPktSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_eth_send_list: {
      value: cdktf.listMapperHcl(dataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStructToHclTerraform, true)(struct!.localEthSendList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpADetailOperOperLocalInfoListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderVrrpADetailOperOperLocalInfoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switchToActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchToActive = this._switchToActive;
    }
    if (this._switchToStandby !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchToStandby = this._switchToStandby;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    if (this._vrrpPktSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpPktSend = this._vrrpPktSend;
    }
    if (this._localEthSendList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localEthSendList = this._localEthSendList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpADetailOperOperLocalInfoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._switchToActive = undefined;
      this._switchToStandby = undefined;
      this._vrid = undefined;
      this._vrrpPktSend = undefined;
      this._localEthSendList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._switchToActive = value.switchToActive;
      this._switchToStandby = value.switchToStandby;
      this._vrid = value.vrid;
      this._vrrpPktSend = value.vrrpPktSend;
      this._localEthSendList.internalValue = value.localEthSendList;
    }
  }

  // switch_to_active - computed: false, optional: true, required: false
  private _switchToActive?: number; 
  public get switchToActive() {
    return this.getNumberAttribute('switch_to_active');
  }
  public set switchToActive(value: number) {
    this._switchToActive = value;
  }
  public resetSwitchToActive() {
    this._switchToActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchToActiveInput() {
    return this._switchToActive;
  }

  // switch_to_standby - computed: false, optional: true, required: false
  private _switchToStandby?: number; 
  public get switchToStandby() {
    return this.getNumberAttribute('switch_to_standby');
  }
  public set switchToStandby(value: number) {
    this._switchToStandby = value;
  }
  public resetSwitchToStandby() {
    this._switchToStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchToStandbyInput() {
    return this._switchToStandby;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // vrrp_pkt_send - computed: false, optional: true, required: false
  private _vrrpPktSend?: number; 
  public get vrrpPktSend() {
    return this.getNumberAttribute('vrrp_pkt_send');
  }
  public set vrrpPktSend(value: number) {
    this._vrrpPktSend = value;
  }
  public resetVrrpPktSend() {
    this._vrrpPktSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpPktSendInput() {
    return this._vrrpPktSend;
  }

  // local_eth_send_list - computed: false, optional: true, required: false
  private _localEthSendList = new DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStructList(this, "local_eth_send_list", false);
  public get localEthSendList() {
    return this._localEthSendList;
  }
  public putLocalEthSendList(value: DataThunderVrrpADetailOperOperLocalInfoListLocalEthSendListStruct[] | cdktf.IResolvable) {
    this._localEthSendList.internalValue = value;
  }
  public resetLocalEthSendList() {
    this._localEthSendList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localEthSendListInput() {
    return this._localEthSendList.internalValue;
  }
}

export class DataThunderVrrpADetailOperOperLocalInfoListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVrrpADetailOperOperLocalInfoListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderVrrpADetailOperOperLocalInfoListStructOutputReference {
    return new DataThunderVrrpADetailOperOperLocalInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#eth DataThunderVrrpADetailOper#eth}
  */
  readonly eth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#eth_miss DataThunderVrrpADetailOper#eth_miss}
  */
  readonly ethMiss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#vrrp_pkt_recv DataThunderVrrpADetailOper#vrrp_pkt_recv}
  */
  readonly vrrpPktRecv?: number;
}

export function dataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStructToTerraform(struct?: DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eth: cdktf.numberToTerraform(struct!.eth),
    eth_miss: cdktf.numberToTerraform(struct!.ethMiss),
    vrrp_pkt_recv: cdktf.numberToTerraform(struct!.vrrpPktRecv),
  }
}


export function dataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStructToHclTerraform(struct?: DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eth: {
      value: cdktf.numberToHclTerraform(struct!.eth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth_miss: {
      value: cdktf.numberToHclTerraform(struct!.ethMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrrp_pkt_recv: {
      value: cdktf.numberToHclTerraform(struct!.vrrpPktRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eth !== undefined) {
      hasAnyValues = true;
      internalValueResult.eth = this._eth;
    }
    if (this._ethMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethMiss = this._ethMiss;
    }
    if (this._vrrpPktRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpPktRecv = this._vrrpPktRecv;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eth = undefined;
      this._ethMiss = undefined;
      this._vrrpPktRecv = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eth = value.eth;
      this._ethMiss = value.ethMiss;
      this._vrrpPktRecv = value.vrrpPktRecv;
    }
  }

  // eth - computed: false, optional: true, required: false
  private _eth?: number; 
  public get eth() {
    return this.getNumberAttribute('eth');
  }
  public set eth(value: number) {
    this._eth = value;
  }
  public resetEth() {
    this._eth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethInput() {
    return this._eth;
  }

  // eth_miss - computed: false, optional: true, required: false
  private _ethMiss?: number; 
  public get ethMiss() {
    return this.getNumberAttribute('eth_miss');
  }
  public set ethMiss(value: number) {
    this._ethMiss = value;
  }
  public resetEthMiss() {
    this._ethMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethMissInput() {
    return this._ethMiss;
  }

  // vrrp_pkt_recv - computed: false, optional: true, required: false
  private _vrrpPktRecv?: number; 
  public get vrrpPktRecv() {
    return this.getNumberAttribute('vrrp_pkt_recv');
  }
  public set vrrpPktRecv(value: number) {
    this._vrrpPktRecv = value;
  }
  public resetVrrpPktRecv() {
    this._vrrpPktRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpPktRecvInput() {
    return this._vrrpPktRecv;
  }
}

export class DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStructOutputReference {
    return new DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVrrpADetailOperOperPeerInfoListPeerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#missing_heartbeat DataThunderVrrpADetailOper#missing_heartbeat}
  */
  readonly missingHeartbeat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#peer_id DataThunderVrrpADetailOper#peer_id}
  */
  readonly peerId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#vrid DataThunderVrrpADetailOper#vrid}
  */
  readonly vrid?: number;
  /**
  * peer_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#peer_port_list DataThunderVrrpADetailOper#peer_port_list}
  */
  readonly peerPortList?: DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStruct[] | cdktf.IResolvable;
}

export function dataThunderVrrpADetailOperOperPeerInfoListPeerListStructToTerraform(struct?: DataThunderVrrpADetailOperOperPeerInfoListPeerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    missing_heartbeat: cdktf.numberToTerraform(struct!.missingHeartbeat),
    peer_id: cdktf.numberToTerraform(struct!.peerId),
    vrid: cdktf.numberToTerraform(struct!.vrid),
    peer_port_list: cdktf.listMapper(dataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStructToTerraform, true)(struct!.peerPortList),
  }
}


export function dataThunderVrrpADetailOperOperPeerInfoListPeerListStructToHclTerraform(struct?: DataThunderVrrpADetailOperOperPeerInfoListPeerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    missing_heartbeat: {
      value: cdktf.numberToHclTerraform(struct!.missingHeartbeat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_id: {
      value: cdktf.numberToHclTerraform(struct!.peerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_port_list: {
      value: cdktf.listMapperHcl(dataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStructToHclTerraform, true)(struct!.peerPortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpADetailOperOperPeerInfoListPeerListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderVrrpADetailOperOperPeerInfoListPeerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._missingHeartbeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingHeartbeat = this._missingHeartbeat;
    }
    if (this._peerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerId = this._peerId;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    if (this._peerPortList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerPortList = this._peerPortList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpADetailOperOperPeerInfoListPeerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._missingHeartbeat = undefined;
      this._peerId = undefined;
      this._vrid = undefined;
      this._peerPortList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._missingHeartbeat = value.missingHeartbeat;
      this._peerId = value.peerId;
      this._vrid = value.vrid;
      this._peerPortList.internalValue = value.peerPortList;
    }
  }

  // missing_heartbeat - computed: false, optional: true, required: false
  private _missingHeartbeat?: number; 
  public get missingHeartbeat() {
    return this.getNumberAttribute('missing_heartbeat');
  }
  public set missingHeartbeat(value: number) {
    this._missingHeartbeat = value;
  }
  public resetMissingHeartbeat() {
    this._missingHeartbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingHeartbeatInput() {
    return this._missingHeartbeat;
  }

  // peer_id - computed: false, optional: true, required: false
  private _peerId?: number; 
  public get peerId() {
    return this.getNumberAttribute('peer_id');
  }
  public set peerId(value: number) {
    this._peerId = value;
  }
  public resetPeerId() {
    this._peerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // peer_port_list - computed: false, optional: true, required: false
  private _peerPortList = new DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStructList(this, "peer_port_list", false);
  public get peerPortList() {
    return this._peerPortList;
  }
  public putPeerPortList(value: DataThunderVrrpADetailOperOperPeerInfoListPeerListPeerPortListStruct[] | cdktf.IResolvable) {
    this._peerPortList.internalValue = value;
  }
  public resetPeerPortList() {
    this._peerPortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPortListInput() {
    return this._peerPortList.internalValue;
  }
}

export class DataThunderVrrpADetailOperOperPeerInfoListPeerListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVrrpADetailOperOperPeerInfoListPeerListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderVrrpADetailOperOperPeerInfoListPeerListStructOutputReference {
    return new DataThunderVrrpADetailOperOperPeerInfoListPeerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVrrpADetailOperOperPeerInfoListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#peer_ip DataThunderVrrpADetailOper#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#peer_pkt_recv DataThunderVrrpADetailOper#peer_pkt_recv}
  */
  readonly peerPktRecv?: number;
  /**
  * peer_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#peer_list DataThunderVrrpADetailOper#peer_list}
  */
  readonly peerList?: DataThunderVrrpADetailOperOperPeerInfoListPeerListStruct[] | cdktf.IResolvable;
}

export function dataThunderVrrpADetailOperOperPeerInfoListStructToTerraform(struct?: DataThunderVrrpADetailOperOperPeerInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_ip: cdktf.stringToTerraform(struct!.peerIp),
    peer_pkt_recv: cdktf.numberToTerraform(struct!.peerPktRecv),
    peer_list: cdktf.listMapper(dataThunderVrrpADetailOperOperPeerInfoListPeerListStructToTerraform, true)(struct!.peerList),
  }
}


export function dataThunderVrrpADetailOperOperPeerInfoListStructToHclTerraform(struct?: DataThunderVrrpADetailOperOperPeerInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.peerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_pkt_recv: {
      value: cdktf.numberToHclTerraform(struct!.peerPktRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_list: {
      value: cdktf.listMapperHcl(dataThunderVrrpADetailOperOperPeerInfoListPeerListStructToHclTerraform, true)(struct!.peerList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVrrpADetailOperOperPeerInfoListPeerListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpADetailOperOperPeerInfoListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderVrrpADetailOperOperPeerInfoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIp = this._peerIp;
    }
    if (this._peerPktRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerPktRecv = this._peerPktRecv;
    }
    if (this._peerList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerList = this._peerList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpADetailOperOperPeerInfoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerIp = undefined;
      this._peerPktRecv = undefined;
      this._peerList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerIp = value.peerIp;
      this._peerPktRecv = value.peerPktRecv;
      this._peerList.internalValue = value.peerList;
    }
  }

  // peer_ip - computed: false, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }

  // peer_pkt_recv - computed: false, optional: true, required: false
  private _peerPktRecv?: number; 
  public get peerPktRecv() {
    return this.getNumberAttribute('peer_pkt_recv');
  }
  public set peerPktRecv(value: number) {
    this._peerPktRecv = value;
  }
  public resetPeerPktRecv() {
    this._peerPktRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPktRecvInput() {
    return this._peerPktRecv;
  }

  // peer_list - computed: false, optional: true, required: false
  private _peerList = new DataThunderVrrpADetailOperOperPeerInfoListPeerListStructList(this, "peer_list", false);
  public get peerList() {
    return this._peerList;
  }
  public putPeerList(value: DataThunderVrrpADetailOperOperPeerInfoListPeerListStruct[] | cdktf.IResolvable) {
    this._peerList.internalValue = value;
  }
  public resetPeerList() {
    this._peerList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerListInput() {
    return this._peerList.internalValue;
  }
}

export class DataThunderVrrpADetailOperOperPeerInfoListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVrrpADetailOperOperPeerInfoListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderVrrpADetailOperOperPeerInfoListStructOutputReference {
    return new DataThunderVrrpADetailOperOperPeerInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVrrpADetailOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#bad_group_rcv DataThunderVrrpADetailOper#bad_group_rcv}
  */
  readonly badGroupRcv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#dup_id_rcv DataThunderVrrpADetailOper#dup_id_rcv}
  */
  readonly dupIdRcv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#err_devid DataThunderVrrpADetailOper#err_devid}
  */
  readonly errDevid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#err_parid DataThunderVrrpADetailOper#err_parid}
  */
  readonly errParid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#err_port DataThunderVrrpADetailOper#err_port}
  */
  readonly errPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#ip6_pools_exceeded DataThunderVrrpADetailOper#ip6_pools_exceeded}
  */
  readonly ip6PoolsExceeded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#ip_pools_exceeded DataThunderVrrpADetailOper#ip_pools_exceeded}
  */
  readonly ipPoolsExceeded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#l2_no_route DataThunderVrrpADetailOper#l2_no_route}
  */
  readonly l2NoRoute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#lock_try DataThunderVrrpADetailOper#lock_try}
  */
  readonly lockTry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#set_id_mismatch DataThunderVrrpADetailOper#set_id_mismatch}
  */
  readonly setIdMismatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#time_inaccurate_count DataThunderVrrpADetailOper#time_inaccurate_count}
  */
  readonly timeInaccurateCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#vrrp_version_mismatch DataThunderVrrpADetailOper#vrrp_version_mismatch}
  */
  readonly vrrpVersionMismatch?: number;
  /**
  * local_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#local_info_list DataThunderVrrpADetailOper#local_info_list}
  */
  readonly localInfoList?: DataThunderVrrpADetailOperOperLocalInfoListStruct[] | cdktf.IResolvable;
  /**
  * peer_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#peer_info_list DataThunderVrrpADetailOper#peer_info_list}
  */
  readonly peerInfoList?: DataThunderVrrpADetailOperOperPeerInfoListStruct[] | cdktf.IResolvable;
}

export function dataThunderVrrpADetailOperOperToTerraform(struct?: DataThunderVrrpADetailOperOperOutputReference | DataThunderVrrpADetailOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_group_rcv: cdktf.numberToTerraform(struct!.badGroupRcv),
    dup_id_rcv: cdktf.numberToTerraform(struct!.dupIdRcv),
    err_devid: cdktf.numberToTerraform(struct!.errDevid),
    err_parid: cdktf.numberToTerraform(struct!.errParid),
    err_port: cdktf.numberToTerraform(struct!.errPort),
    ip6_pools_exceeded: cdktf.numberToTerraform(struct!.ip6PoolsExceeded),
    ip_pools_exceeded: cdktf.numberToTerraform(struct!.ipPoolsExceeded),
    l2_no_route: cdktf.numberToTerraform(struct!.l2NoRoute),
    lock_try: cdktf.numberToTerraform(struct!.lockTry),
    set_id_mismatch: cdktf.numberToTerraform(struct!.setIdMismatch),
    time_inaccurate_count: cdktf.numberToTerraform(struct!.timeInaccurateCount),
    vrrp_version_mismatch: cdktf.numberToTerraform(struct!.vrrpVersionMismatch),
    local_info_list: cdktf.listMapper(dataThunderVrrpADetailOperOperLocalInfoListStructToTerraform, true)(struct!.localInfoList),
    peer_info_list: cdktf.listMapper(dataThunderVrrpADetailOperOperPeerInfoListStructToTerraform, true)(struct!.peerInfoList),
  }
}


export function dataThunderVrrpADetailOperOperToHclTerraform(struct?: DataThunderVrrpADetailOperOperOutputReference | DataThunderVrrpADetailOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_group_rcv: {
      value: cdktf.numberToHclTerraform(struct!.badGroupRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dup_id_rcv: {
      value: cdktf.numberToHclTerraform(struct!.dupIdRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_devid: {
      value: cdktf.numberToHclTerraform(struct!.errDevid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_parid: {
      value: cdktf.numberToHclTerraform(struct!.errParid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_port: {
      value: cdktf.numberToHclTerraform(struct!.errPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_pools_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.ip6PoolsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_pools_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.ipPoolsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2_no_route: {
      value: cdktf.numberToHclTerraform(struct!.l2NoRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lock_try: {
      value: cdktf.numberToHclTerraform(struct!.lockTry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_id_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.setIdMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_inaccurate_count: {
      value: cdktf.numberToHclTerraform(struct!.timeInaccurateCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrrp_version_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.vrrpVersionMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_info_list: {
      value: cdktf.listMapperHcl(dataThunderVrrpADetailOperOperLocalInfoListStructToHclTerraform, true)(struct!.localInfoList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVrrpADetailOperOperLocalInfoListStructList",
    },
    peer_info_list: {
      value: cdktf.listMapperHcl(dataThunderVrrpADetailOperOperPeerInfoListStructToHclTerraform, true)(struct!.peerInfoList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVrrpADetailOperOperPeerInfoListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpADetailOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVrrpADetailOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badGroupRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.badGroupRcv = this._badGroupRcv;
    }
    if (this._dupIdRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.dupIdRcv = this._dupIdRcv;
    }
    if (this._errDevid !== undefined) {
      hasAnyValues = true;
      internalValueResult.errDevid = this._errDevid;
    }
    if (this._errParid !== undefined) {
      hasAnyValues = true;
      internalValueResult.errParid = this._errParid;
    }
    if (this._errPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.errPort = this._errPort;
    }
    if (this._ip6PoolsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6PoolsExceeded = this._ip6PoolsExceeded;
    }
    if (this._ipPoolsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPoolsExceeded = this._ipPoolsExceeded;
    }
    if (this._l2NoRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2NoRoute = this._l2NoRoute;
    }
    if (this._lockTry !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockTry = this._lockTry;
    }
    if (this._setIdMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIdMismatch = this._setIdMismatch;
    }
    if (this._timeInaccurateCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInaccurateCount = this._timeInaccurateCount;
    }
    if (this._vrrpVersionMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpVersionMismatch = this._vrrpVersionMismatch;
    }
    if (this._localInfoList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localInfoList = this._localInfoList?.internalValue;
    }
    if (this._peerInfoList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerInfoList = this._peerInfoList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpADetailOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badGroupRcv = undefined;
      this._dupIdRcv = undefined;
      this._errDevid = undefined;
      this._errParid = undefined;
      this._errPort = undefined;
      this._ip6PoolsExceeded = undefined;
      this._ipPoolsExceeded = undefined;
      this._l2NoRoute = undefined;
      this._lockTry = undefined;
      this._setIdMismatch = undefined;
      this._timeInaccurateCount = undefined;
      this._vrrpVersionMismatch = undefined;
      this._localInfoList.internalValue = undefined;
      this._peerInfoList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badGroupRcv = value.badGroupRcv;
      this._dupIdRcv = value.dupIdRcv;
      this._errDevid = value.errDevid;
      this._errParid = value.errParid;
      this._errPort = value.errPort;
      this._ip6PoolsExceeded = value.ip6PoolsExceeded;
      this._ipPoolsExceeded = value.ipPoolsExceeded;
      this._l2NoRoute = value.l2NoRoute;
      this._lockTry = value.lockTry;
      this._setIdMismatch = value.setIdMismatch;
      this._timeInaccurateCount = value.timeInaccurateCount;
      this._vrrpVersionMismatch = value.vrrpVersionMismatch;
      this._localInfoList.internalValue = value.localInfoList;
      this._peerInfoList.internalValue = value.peerInfoList;
    }
  }

  // bad_group_rcv - computed: false, optional: true, required: false
  private _badGroupRcv?: number; 
  public get badGroupRcv() {
    return this.getNumberAttribute('bad_group_rcv');
  }
  public set badGroupRcv(value: number) {
    this._badGroupRcv = value;
  }
  public resetBadGroupRcv() {
    this._badGroupRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badGroupRcvInput() {
    return this._badGroupRcv;
  }

  // dup_id_rcv - computed: false, optional: true, required: false
  private _dupIdRcv?: number; 
  public get dupIdRcv() {
    return this.getNumberAttribute('dup_id_rcv');
  }
  public set dupIdRcv(value: number) {
    this._dupIdRcv = value;
  }
  public resetDupIdRcv() {
    this._dupIdRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dupIdRcvInput() {
    return this._dupIdRcv;
  }

  // err_devid - computed: false, optional: true, required: false
  private _errDevid?: number; 
  public get errDevid() {
    return this.getNumberAttribute('err_devid');
  }
  public set errDevid(value: number) {
    this._errDevid = value;
  }
  public resetErrDevid() {
    this._errDevid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errDevidInput() {
    return this._errDevid;
  }

  // err_parid - computed: false, optional: true, required: false
  private _errParid?: number; 
  public get errParid() {
    return this.getNumberAttribute('err_parid');
  }
  public set errParid(value: number) {
    this._errParid = value;
  }
  public resetErrParid() {
    this._errParid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errParidInput() {
    return this._errParid;
  }

  // err_port - computed: false, optional: true, required: false
  private _errPort?: number; 
  public get errPort() {
    return this.getNumberAttribute('err_port');
  }
  public set errPort(value: number) {
    this._errPort = value;
  }
  public resetErrPort() {
    this._errPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errPortInput() {
    return this._errPort;
  }

  // ip6_pools_exceeded - computed: false, optional: true, required: false
  private _ip6PoolsExceeded?: number; 
  public get ip6PoolsExceeded() {
    return this.getNumberAttribute('ip6_pools_exceeded');
  }
  public set ip6PoolsExceeded(value: number) {
    this._ip6PoolsExceeded = value;
  }
  public resetIp6PoolsExceeded() {
    this._ip6PoolsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6PoolsExceededInput() {
    return this._ip6PoolsExceeded;
  }

  // ip_pools_exceeded - computed: false, optional: true, required: false
  private _ipPoolsExceeded?: number; 
  public get ipPoolsExceeded() {
    return this.getNumberAttribute('ip_pools_exceeded');
  }
  public set ipPoolsExceeded(value: number) {
    this._ipPoolsExceeded = value;
  }
  public resetIpPoolsExceeded() {
    this._ipPoolsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolsExceededInput() {
    return this._ipPoolsExceeded;
  }

  // l2_no_route - computed: false, optional: true, required: false
  private _l2NoRoute?: number; 
  public get l2NoRoute() {
    return this.getNumberAttribute('l2_no_route');
  }
  public set l2NoRoute(value: number) {
    this._l2NoRoute = value;
  }
  public resetL2NoRoute() {
    this._l2NoRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2NoRouteInput() {
    return this._l2NoRoute;
  }

  // lock_try - computed: false, optional: true, required: false
  private _lockTry?: number; 
  public get lockTry() {
    return this.getNumberAttribute('lock_try');
  }
  public set lockTry(value: number) {
    this._lockTry = value;
  }
  public resetLockTry() {
    this._lockTry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockTryInput() {
    return this._lockTry;
  }

  // set_id_mismatch - computed: false, optional: true, required: false
  private _setIdMismatch?: number; 
  public get setIdMismatch() {
    return this.getNumberAttribute('set_id_mismatch');
  }
  public set setIdMismatch(value: number) {
    this._setIdMismatch = value;
  }
  public resetSetIdMismatch() {
    this._setIdMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdMismatchInput() {
    return this._setIdMismatch;
  }

  // time_inaccurate_count - computed: false, optional: true, required: false
  private _timeInaccurateCount?: number; 
  public get timeInaccurateCount() {
    return this.getNumberAttribute('time_inaccurate_count');
  }
  public set timeInaccurateCount(value: number) {
    this._timeInaccurateCount = value;
  }
  public resetTimeInaccurateCount() {
    this._timeInaccurateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInaccurateCountInput() {
    return this._timeInaccurateCount;
  }

  // vrrp_version_mismatch - computed: false, optional: true, required: false
  private _vrrpVersionMismatch?: number; 
  public get vrrpVersionMismatch() {
    return this.getNumberAttribute('vrrp_version_mismatch');
  }
  public set vrrpVersionMismatch(value: number) {
    this._vrrpVersionMismatch = value;
  }
  public resetVrrpVersionMismatch() {
    this._vrrpVersionMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpVersionMismatchInput() {
    return this._vrrpVersionMismatch;
  }

  // local_info_list - computed: false, optional: true, required: false
  private _localInfoList = new DataThunderVrrpADetailOperOperLocalInfoListStructList(this, "local_info_list", false);
  public get localInfoList() {
    return this._localInfoList;
  }
  public putLocalInfoList(value: DataThunderVrrpADetailOperOperLocalInfoListStruct[] | cdktf.IResolvable) {
    this._localInfoList.internalValue = value;
  }
  public resetLocalInfoList() {
    this._localInfoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInfoListInput() {
    return this._localInfoList.internalValue;
  }

  // peer_info_list - computed: false, optional: true, required: false
  private _peerInfoList = new DataThunderVrrpADetailOperOperPeerInfoListStructList(this, "peer_info_list", false);
  public get peerInfoList() {
    return this._peerInfoList;
  }
  public putPeerInfoList(value: DataThunderVrrpADetailOperOperPeerInfoListStruct[] | cdktf.IResolvable) {
    this._peerInfoList.internalValue = value;
  }
  public resetPeerInfoList() {
    this._peerInfoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInfoListInput() {
    return this._peerInfoList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper thunder_vrrp_a_detail_oper}
*/
export class DataThunderVrrpADetailOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_detail_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVrrpADetailOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVrrpADetailOper to import
  * @param importFromId The id of the existing DataThunderVrrpADetailOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVrrpADetailOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_detail_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_detail_oper thunder_vrrp_a_detail_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVrrpADetailOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVrrpADetailOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_detail_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVrrpADetailOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVrrpADetailOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderVrrpADetailOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderVrrpADetailOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVrrpADetailOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
