// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosEventFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#filter_name DdosEventFilter#filter_name}
  */
  readonly filterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#id DdosEventFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#user_tag DdosEventFilter#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#uuid DdosEventFilter#uuid}
  */
  readonly uuid?: string;
  /**
  * black_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#black_list DdosEventFilter#black_list}
  */
  readonly blackList?: DdosEventFilterBlackListStruct;
  /**
  * drop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#drop DdosEventFilter#drop}
  */
  readonly drop?: DdosEventFilterDrop;
  /**
  * l4_type_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#l4_type_list DdosEventFilter#l4_type_list}
  */
  readonly l4TypeList?: DdosEventFilterL4TypeListStruct[] | cdktf.IResolvable;
  /**
  * white_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#white_list DdosEventFilter#white_list}
  */
  readonly whiteList?: DdosEventFilterWhiteListStruct;
}
export interface DdosEventFilterBlackListStruct {
  /**
  * Dst entry/port is black-listed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#black_list_dst DdosEventFilter#black_list_dst}
  */
  readonly blackListDst?: number;
  /**
  * Src entry/port is black-listed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#black_list_src DdosEventFilter#black_list_src}
  */
  readonly blackListSrc?: number;
}

export function ddosEventFilterBlackListStructToTerraform(struct?: DdosEventFilterBlackListStructOutputReference | DdosEventFilterBlackListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    black_list_dst: cdktf.numberToTerraform(struct!.blackListDst),
    black_list_src: cdktf.numberToTerraform(struct!.blackListSrc),
  }
}


export function ddosEventFilterBlackListStructToHclTerraform(struct?: DdosEventFilterBlackListStructOutputReference | DdosEventFilterBlackListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    black_list_dst: {
      value: cdktf.numberToHclTerraform(struct!.blackListDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    black_list_src: {
      value: cdktf.numberToHclTerraform(struct!.blackListSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosEventFilterBlackListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosEventFilterBlackListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackListDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackListDst = this._blackListDst;
    }
    if (this._blackListSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackListSrc = this._blackListSrc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosEventFilterBlackListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blackListDst = undefined;
      this._blackListSrc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blackListDst = value.blackListDst;
      this._blackListSrc = value.blackListSrc;
    }
  }

  // black_list_dst - computed: false, optional: true, required: false
  private _blackListDst?: number; 
  public get blackListDst() {
    return this.getNumberAttribute('black_list_dst');
  }
  public set blackListDst(value: number) {
    this._blackListDst = value;
  }
  public resetBlackListDst() {
    this._blackListDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackListDstInput() {
    return this._blackListDst;
  }

  // black_list_src - computed: false, optional: true, required: false
  private _blackListSrc?: number; 
  public get blackListSrc() {
    return this.getNumberAttribute('black_list_src');
  }
  public set blackListSrc(value: number) {
    this._blackListSrc = value;
  }
  public resetBlackListSrc() {
    this._blackListSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackListSrcInput() {
    return this._blackListSrc;
  }
}
export interface DdosEventFilterDrop {
  /**
  * Packet is dropped because of black-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#drop_black_list DdosEventFilter#drop_black_list}
  */
  readonly dropBlackList?: number;
  /**
  * Packet is dropped because of dst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#drop_dst DdosEventFilter#drop_dst}
  */
  readonly dropDst?: number;
  /**
  * Packet is dropped because of src
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#drop_src DdosEventFilter#drop_src}
  */
  readonly dropSrc?: number;
}

export function ddosEventFilterDropToTerraform(struct?: DdosEventFilterDropOutputReference | DdosEventFilterDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_black_list: cdktf.numberToTerraform(struct!.dropBlackList),
    drop_dst: cdktf.numberToTerraform(struct!.dropDst),
    drop_src: cdktf.numberToTerraform(struct!.dropSrc),
  }
}


export function ddosEventFilterDropToHclTerraform(struct?: DdosEventFilterDropOutputReference | DdosEventFilterDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_black_list: {
      value: cdktf.numberToHclTerraform(struct!.dropBlackList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_dst: {
      value: cdktf.numberToHclTerraform(struct!.dropDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_src: {
      value: cdktf.numberToHclTerraform(struct!.dropSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosEventFilterDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosEventFilterDrop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropBlackList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropBlackList = this._dropBlackList;
    }
    if (this._dropDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropDst = this._dropDst;
    }
    if (this._dropSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropSrc = this._dropSrc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosEventFilterDrop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropBlackList = undefined;
      this._dropDst = undefined;
      this._dropSrc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropBlackList = value.dropBlackList;
      this._dropDst = value.dropDst;
      this._dropSrc = value.dropSrc;
    }
  }

  // drop_black_list - computed: false, optional: true, required: false
  private _dropBlackList?: number; 
  public get dropBlackList() {
    return this.getNumberAttribute('drop_black_list');
  }
  public set dropBlackList(value: number) {
    this._dropBlackList = value;
  }
  public resetDropBlackList() {
    this._dropBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropBlackListInput() {
    return this._dropBlackList;
  }

  // drop_dst - computed: false, optional: true, required: false
  private _dropDst?: number; 
  public get dropDst() {
    return this.getNumberAttribute('drop_dst');
  }
  public set dropDst(value: number) {
    this._dropDst = value;
  }
  public resetDropDst() {
    this._dropDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropDstInput() {
    return this._dropDst;
  }

  // drop_src - computed: false, optional: true, required: false
  private _dropSrc?: number; 
  public get dropSrc() {
    return this.getNumberAttribute('drop_src');
  }
  public set dropSrc(value: number) {
    this._dropSrc = value;
  }
  public resetDropSrc() {
    this._dropSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropSrcInput() {
    return this._dropSrc;
  }
}
export interface DdosEventFilterL4TypeListRetransSynCfg {
  /**
  * TCP SYN retransmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#retrans_syn DdosEventFilter#retrans_syn}
  */
  readonly retransSyn?: number;
  /**
  * TCP SYN retransmission exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#retrans_syn_exceed DdosEventFilter#retrans_syn_exceed}
  */
  readonly retransSynExceed?: number;
}

export function ddosEventFilterL4TypeListRetransSynCfgToTerraform(struct?: DdosEventFilterL4TypeListRetransSynCfgOutputReference | DdosEventFilterL4TypeListRetransSynCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retrans_syn: cdktf.numberToTerraform(struct!.retransSyn),
    retrans_syn_exceed: cdktf.numberToTerraform(struct!.retransSynExceed),
  }
}


export function ddosEventFilterL4TypeListRetransSynCfgToHclTerraform(struct?: DdosEventFilterL4TypeListRetransSynCfgOutputReference | DdosEventFilterL4TypeListRetransSynCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retrans_syn: {
      value: cdktf.numberToHclTerraform(struct!.retransSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retrans_syn_exceed: {
      value: cdktf.numberToHclTerraform(struct!.retransSynExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosEventFilterL4TypeListRetransSynCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosEventFilterL4TypeListRetransSynCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retransSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransSyn = this._retransSyn;
    }
    if (this._retransSynExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransSynExceed = this._retransSynExceed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosEventFilterL4TypeListRetransSynCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retransSyn = undefined;
      this._retransSynExceed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retransSyn = value.retransSyn;
      this._retransSynExceed = value.retransSynExceed;
    }
  }

  // retrans_syn - computed: false, optional: true, required: false
  private _retransSyn?: number; 
  public get retransSyn() {
    return this.getNumberAttribute('retrans_syn');
  }
  public set retransSyn(value: number) {
    this._retransSyn = value;
  }
  public resetRetransSyn() {
    this._retransSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransSynInput() {
    return this._retransSyn;
  }

  // retrans_syn_exceed - computed: false, optional: true, required: false
  private _retransSynExceed?: number; 
  public get retransSynExceed() {
    return this.getNumberAttribute('retrans_syn_exceed');
  }
  public set retransSynExceed(value: number) {
    this._retransSynExceed = value;
  }
  public resetRetransSynExceed() {
    this._retransSynExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransSynExceedInput() {
    return this._retransSynExceed;
  }
}
export interface DdosEventFilterL4TypeListTcpAuth {
  /**
  * Packet that fails syn-auth/action-on-ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#tcp_auth_fail DdosEventFilter#tcp_auth_fail}
  */
  readonly tcpAuthFail?: number;
  /**
  * Packet that inits syn-auth/action-on-ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#tcp_auth_init DdosEventFilter#tcp_auth_init}
  */
  readonly tcpAuthInit?: number;
  /**
  * Packet that passes syn-auth/action-on-ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#tcp_auth_pass DdosEventFilter#tcp_auth_pass}
  */
  readonly tcpAuthPass?: number;
}

export function ddosEventFilterL4TypeListTcpAuthToTerraform(struct?: DdosEventFilterL4TypeListTcpAuthOutputReference | DdosEventFilterL4TypeListTcpAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_auth_fail: cdktf.numberToTerraform(struct!.tcpAuthFail),
    tcp_auth_init: cdktf.numberToTerraform(struct!.tcpAuthInit),
    tcp_auth_pass: cdktf.numberToTerraform(struct!.tcpAuthPass),
  }
}


export function ddosEventFilterL4TypeListTcpAuthToHclTerraform(struct?: DdosEventFilterL4TypeListTcpAuthOutputReference | DdosEventFilterL4TypeListTcpAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_init: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosEventFilterL4TypeListTcpAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosEventFilterL4TypeListTcpAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthFail = this._tcpAuthFail;
    }
    if (this._tcpAuthInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthInit = this._tcpAuthInit;
    }
    if (this._tcpAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthPass = this._tcpAuthPass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosEventFilterL4TypeListTcpAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tcpAuthFail = undefined;
      this._tcpAuthInit = undefined;
      this._tcpAuthPass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tcpAuthFail = value.tcpAuthFail;
      this._tcpAuthInit = value.tcpAuthInit;
      this._tcpAuthPass = value.tcpAuthPass;
    }
  }

  // tcp_auth_fail - computed: false, optional: true, required: false
  private _tcpAuthFail?: number; 
  public get tcpAuthFail() {
    return this.getNumberAttribute('tcp_auth_fail');
  }
  public set tcpAuthFail(value: number) {
    this._tcpAuthFail = value;
  }
  public resetTcpAuthFail() {
    this._tcpAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthFailInput() {
    return this._tcpAuthFail;
  }

  // tcp_auth_init - computed: false, optional: true, required: false
  private _tcpAuthInit?: number; 
  public get tcpAuthInit() {
    return this.getNumberAttribute('tcp_auth_init');
  }
  public set tcpAuthInit(value: number) {
    this._tcpAuthInit = value;
  }
  public resetTcpAuthInit() {
    this._tcpAuthInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthInitInput() {
    return this._tcpAuthInit;
  }

  // tcp_auth_pass - computed: false, optional: true, required: false
  private _tcpAuthPass?: number; 
  public get tcpAuthPass() {
    return this.getNumberAttribute('tcp_auth_pass');
  }
  public set tcpAuthPass(value: number) {
    this._tcpAuthPass = value;
  }
  public resetTcpAuthPass() {
    this._tcpAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthPassInput() {
    return this._tcpAuthPass;
  }
}
export interface DdosEventFilterL4TypeListUdpAuth {
  /**
  * Packet that inits spoof-detect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#udp_auth_init DdosEventFilter#udp_auth_init}
  */
  readonly udpAuthInit?: number;
  /**
  * Packet that passes spoof-detect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#udp_auth_pass DdosEventFilter#udp_auth_pass}
  */
  readonly udpAuthPass?: number;
}

export function ddosEventFilterL4TypeListUdpAuthToTerraform(struct?: DdosEventFilterL4TypeListUdpAuthOutputReference | DdosEventFilterL4TypeListUdpAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_auth_init: cdktf.numberToTerraform(struct!.udpAuthInit),
    udp_auth_pass: cdktf.numberToTerraform(struct!.udpAuthPass),
  }
}


export function ddosEventFilterL4TypeListUdpAuthToHclTerraform(struct?: DdosEventFilterL4TypeListUdpAuthOutputReference | DdosEventFilterL4TypeListUdpAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_auth_init: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosEventFilterL4TypeListUdpAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosEventFilterL4TypeListUdpAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpAuthInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthInit = this._udpAuthInit;
    }
    if (this._udpAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthPass = this._udpAuthPass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosEventFilterL4TypeListUdpAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._udpAuthInit = undefined;
      this._udpAuthPass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._udpAuthInit = value.udpAuthInit;
      this._udpAuthPass = value.udpAuthPass;
    }
  }

  // udp_auth_init - computed: false, optional: true, required: false
  private _udpAuthInit?: number; 
  public get udpAuthInit() {
    return this.getNumberAttribute('udp_auth_init');
  }
  public set udpAuthInit(value: number) {
    this._udpAuthInit = value;
  }
  public resetUdpAuthInit() {
    this._udpAuthInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthInitInput() {
    return this._udpAuthInit;
  }

  // udp_auth_pass - computed: false, optional: true, required: false
  private _udpAuthPass?: number; 
  public get udpAuthPass() {
    return this.getNumberAttribute('udp_auth_pass');
  }
  public set udpAuthPass(value: number) {
    this._udpAuthPass = value;
  }
  public resetUdpAuthPass() {
    this._udpAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthPassInput() {
    return this._udpAuthPass;
  }
}
export interface DdosEventFilterL4TypeListStruct {
  /**
  * TCP out-of-seq pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#out_of_seq DdosEventFilter#out_of_seq}
  */
  readonly outOfSeq?: number;
  /**
  * 'tcp': tcp; 'udp': udp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#protocol DdosEventFilter#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#user_tag DdosEventFilter#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#uuid DdosEventFilter#uuid}
  */
  readonly uuid?: string;
  /**
  * TCP zero window pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#zero_window DdosEventFilter#zero_window}
  */
  readonly zeroWindow?: number;
  /**
  * retrans_syn_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#retrans_syn_cfg DdosEventFilter#retrans_syn_cfg}
  */
  readonly retransSynCfg?: DdosEventFilterL4TypeListRetransSynCfg;
  /**
  * tcp_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#tcp_auth DdosEventFilter#tcp_auth}
  */
  readonly tcpAuth?: DdosEventFilterL4TypeListTcpAuth;
  /**
  * udp_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#udp_auth DdosEventFilter#udp_auth}
  */
  readonly udpAuth?: DdosEventFilterL4TypeListUdpAuth;
}

export function ddosEventFilterL4TypeListStructToTerraform(struct?: DdosEventFilterL4TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    out_of_seq: cdktf.numberToTerraform(struct!.outOfSeq),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zero_window: cdktf.numberToTerraform(struct!.zeroWindow),
    retrans_syn_cfg: ddosEventFilterL4TypeListRetransSynCfgToTerraform(struct!.retransSynCfg),
    tcp_auth: ddosEventFilterL4TypeListTcpAuthToTerraform(struct!.tcpAuth),
    udp_auth: ddosEventFilterL4TypeListUdpAuthToTerraform(struct!.udpAuth),
  }
}


export function ddosEventFilterL4TypeListStructToHclTerraform(struct?: DdosEventFilterL4TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    out_of_seq: {
      value: cdktf.numberToHclTerraform(struct!.outOfSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_window: {
      value: cdktf.numberToHclTerraform(struct!.zeroWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retrans_syn_cfg: {
      value: ddosEventFilterL4TypeListRetransSynCfgToHclTerraform(struct!.retransSynCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosEventFilterL4TypeListRetransSynCfgList",
    },
    tcp_auth: {
      value: ddosEventFilterL4TypeListTcpAuthToHclTerraform(struct!.tcpAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DdosEventFilterL4TypeListTcpAuthList",
    },
    udp_auth: {
      value: ddosEventFilterL4TypeListUdpAuthToHclTerraform(struct!.udpAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DdosEventFilterL4TypeListUdpAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosEventFilterL4TypeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosEventFilterL4TypeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outOfSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfSeq = this._outOfSeq;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zeroWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWindow = this._zeroWindow;
    }
    if (this._retransSynCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransSynCfg = this._retransSynCfg?.internalValue;
    }
    if (this._tcpAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuth = this._tcpAuth?.internalValue;
    }
    if (this._udpAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuth = this._udpAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosEventFilterL4TypeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._outOfSeq = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zeroWindow = undefined;
      this._retransSynCfg.internalValue = undefined;
      this._tcpAuth.internalValue = undefined;
      this._udpAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._outOfSeq = value.outOfSeq;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zeroWindow = value.zeroWindow;
      this._retransSynCfg.internalValue = value.retransSynCfg;
      this._tcpAuth.internalValue = value.tcpAuth;
      this._udpAuth.internalValue = value.udpAuth;
    }
  }

  // out_of_seq - computed: false, optional: true, required: false
  private _outOfSeq?: number; 
  public get outOfSeq() {
    return this.getNumberAttribute('out_of_seq');
  }
  public set outOfSeq(value: number) {
    this._outOfSeq = value;
  }
  public resetOutOfSeq() {
    this._outOfSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSeqInput() {
    return this._outOfSeq;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zero_window - computed: false, optional: true, required: false
  private _zeroWindow?: number; 
  public get zeroWindow() {
    return this.getNumberAttribute('zero_window');
  }
  public set zeroWindow(value: number) {
    this._zeroWindow = value;
  }
  public resetZeroWindow() {
    this._zeroWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWindowInput() {
    return this._zeroWindow;
  }

  // retrans_syn_cfg - computed: false, optional: true, required: false
  private _retransSynCfg = new DdosEventFilterL4TypeListRetransSynCfgOutputReference(this, "retrans_syn_cfg");
  public get retransSynCfg() {
    return this._retransSynCfg;
  }
  public putRetransSynCfg(value: DdosEventFilterL4TypeListRetransSynCfg) {
    this._retransSynCfg.internalValue = value;
  }
  public resetRetransSynCfg() {
    this._retransSynCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransSynCfgInput() {
    return this._retransSynCfg.internalValue;
  }

  // tcp_auth - computed: false, optional: true, required: false
  private _tcpAuth = new DdosEventFilterL4TypeListTcpAuthOutputReference(this, "tcp_auth");
  public get tcpAuth() {
    return this._tcpAuth;
  }
  public putTcpAuth(value: DdosEventFilterL4TypeListTcpAuth) {
    this._tcpAuth.internalValue = value;
  }
  public resetTcpAuth() {
    this._tcpAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthInput() {
    return this._tcpAuth.internalValue;
  }

  // udp_auth - computed: false, optional: true, required: false
  private _udpAuth = new DdosEventFilterL4TypeListUdpAuthOutputReference(this, "udp_auth");
  public get udpAuth() {
    return this._udpAuth;
  }
  public putUdpAuth(value: DdosEventFilterL4TypeListUdpAuth) {
    this._udpAuth.internalValue = value;
  }
  public resetUdpAuth() {
    this._udpAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthInput() {
    return this._udpAuth.internalValue;
  }
}

export class DdosEventFilterL4TypeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosEventFilterL4TypeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosEventFilterL4TypeListStructOutputReference {
    return new DdosEventFilterL4TypeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosEventFilterWhiteListStruct {
  /**
  * Dst entry/port is white-listed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#white_list_dst DdosEventFilter#white_list_dst}
  */
  readonly whiteListDst?: number;
  /**
  * Src entry/port is white-listed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#white_list_src DdosEventFilter#white_list_src}
  */
  readonly whiteListSrc?: number;
}

export function ddosEventFilterWhiteListStructToTerraform(struct?: DdosEventFilterWhiteListStructOutputReference | DdosEventFilterWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    white_list_dst: cdktf.numberToTerraform(struct!.whiteListDst),
    white_list_src: cdktf.numberToTerraform(struct!.whiteListSrc),
  }
}


export function ddosEventFilterWhiteListStructToHclTerraform(struct?: DdosEventFilterWhiteListStructOutputReference | DdosEventFilterWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    white_list_dst: {
      value: cdktf.numberToHclTerraform(struct!.whiteListDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    white_list_src: {
      value: cdktf.numberToHclTerraform(struct!.whiteListSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosEventFilterWhiteListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosEventFilterWhiteListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._whiteListDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListDst = this._whiteListDst;
    }
    if (this._whiteListSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListSrc = this._whiteListSrc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosEventFilterWhiteListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._whiteListDst = undefined;
      this._whiteListSrc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._whiteListDst = value.whiteListDst;
      this._whiteListSrc = value.whiteListSrc;
    }
  }

  // white_list_dst - computed: false, optional: true, required: false
  private _whiteListDst?: number; 
  public get whiteListDst() {
    return this.getNumberAttribute('white_list_dst');
  }
  public set whiteListDst(value: number) {
    this._whiteListDst = value;
  }
  public resetWhiteListDst() {
    this._whiteListDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListDstInput() {
    return this._whiteListDst;
  }

  // white_list_src - computed: false, optional: true, required: false
  private _whiteListSrc?: number; 
  public get whiteListSrc() {
    return this.getNumberAttribute('white_list_src');
  }
  public set whiteListSrc(value: number) {
    this._whiteListSrc = value;
  }
  public resetWhiteListSrc() {
    this._whiteListSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListSrcInput() {
    return this._whiteListSrc;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter thunder_ddos_event_filter}
*/
export class DdosEventFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_event_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosEventFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosEventFilter to import
  * @param importFromId The id of the existing DdosEventFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosEventFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_event_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter thunder_ddos_event_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosEventFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DdosEventFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_event_filter',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterName = config.filterName;
    this._id = config.id;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._blackList.internalValue = config.blackList;
    this._drop.internalValue = config.drop;
    this._l4TypeList.internalValue = config.l4TypeList;
    this._whiteList.internalValue = config.whiteList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_name - computed: false, optional: false, required: true
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
  }

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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // black_list - computed: false, optional: true, required: false
  private _blackList = new DdosEventFilterBlackListStructOutputReference(this, "black_list");
  public get blackList() {
    return this._blackList;
  }
  public putBlackList(value: DdosEventFilterBlackListStruct) {
    this._blackList.internalValue = value;
  }
  public resetBlackList() {
    this._blackList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackListInput() {
    return this._blackList.internalValue;
  }

  // drop - computed: false, optional: true, required: false
  private _drop = new DdosEventFilterDropOutputReference(this, "drop");
  public get drop() {
    return this._drop;
  }
  public putDrop(value: DdosEventFilterDrop) {
    this._drop.internalValue = value;
  }
  public resetDrop() {
    this._drop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop.internalValue;
  }

  // l4_type_list - computed: false, optional: true, required: false
  private _l4TypeList = new DdosEventFilterL4TypeListStructList(this, "l4_type_list", false);
  public get l4TypeList() {
    return this._l4TypeList;
  }
  public putL4TypeList(value: DdosEventFilterL4TypeListStruct[] | cdktf.IResolvable) {
    this._l4TypeList.internalValue = value;
  }
  public resetL4TypeList() {
    this._l4TypeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeListInput() {
    return this._l4TypeList.internalValue;
  }

  // white_list - computed: false, optional: true, required: false
  private _whiteList = new DdosEventFilterWhiteListStructOutputReference(this, "white_list");
  public get whiteList() {
    return this._whiteList;
  }
  public putWhiteList(value: DdosEventFilterWhiteListStruct) {
    this._whiteList.internalValue = value;
  }
  public resetWhiteList() {
    this._whiteList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListInput() {
    return this._whiteList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_name: cdktf.stringToTerraform(this._filterName),
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      black_list: ddosEventFilterBlackListStructToTerraform(this._blackList.internalValue),
      drop: ddosEventFilterDropToTerraform(this._drop.internalValue),
      l4_type_list: cdktf.listMapper(ddosEventFilterL4TypeListStructToTerraform, true)(this._l4TypeList.internalValue),
      white_list: ddosEventFilterWhiteListStructToTerraform(this._whiteList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_name: {
        value: cdktf.stringToHclTerraform(this._filterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      black_list: {
        value: ddosEventFilterBlackListStructToHclTerraform(this._blackList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosEventFilterBlackListStructList",
      },
      drop: {
        value: ddosEventFilterDropToHclTerraform(this._drop.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosEventFilterDropList",
      },
      l4_type_list: {
        value: cdktf.listMapperHcl(ddosEventFilterL4TypeListStructToHclTerraform, true)(this._l4TypeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosEventFilterL4TypeListStructList",
      },
      white_list: {
        value: ddosEventFilterWhiteListStructToHclTerraform(this._whiteList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosEventFilterWhiteListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
