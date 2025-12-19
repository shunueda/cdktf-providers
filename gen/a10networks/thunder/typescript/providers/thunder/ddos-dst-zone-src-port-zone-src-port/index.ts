// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneSrcPortZoneSrcPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure default-action-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#default_action_list DdosDstZoneSrcPortZoneSrcPort#default_action_list}
  */
  readonly defaultActionList?: string;
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#deny DdosDstZoneSrcPortZoneSrcPort#deny}
  */
  readonly deny?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#id DdosDstZoneSrcPortZoneSrcPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#outbound_src_tracking DdosDstZoneSrcPortZoneSrcPort#outbound_src_tracking}
  */
  readonly outboundSrcTracking?: string;
  /**
  * Source Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#port_num DdosDstZoneSrcPortZoneSrcPort#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-udp': DNS-UDP Port; 'dns-tcp': DNS-TCP Port; 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#protocol DdosDstZoneSrcPortZoneSrcPort#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#set_counter_base_val DdosDstZoneSrcPortZoneSrcPort#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#uuid DdosDstZoneSrcPortZoneSrcPort#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#zone_name DdosDstZoneSrcPortZoneSrcPort#zone_name}
  */
  readonly zoneName: string;
  /**
  * glid_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#glid_cfg DdosDstZoneSrcPortZoneSrcPort#glid_cfg}
  */
  readonly glidCfg?: DdosDstZoneSrcPortZoneSrcPortGlidCfg;
  /**
  * level_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#level_list DdosDstZoneSrcPortZoneSrcPort#level_list}
  */
  readonly levelList?: DdosDstZoneSrcPortZoneSrcPortLevelListStruct[] | cdktf.IResolvable;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#port_ind DdosDstZoneSrcPortZoneSrcPort#port_ind}
  */
  readonly portInd?: DdosDstZoneSrcPortZoneSrcPortPortInd;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#zone_template DdosDstZoneSrcPortZoneSrcPort#zone_template}
  */
  readonly zoneTemplate?: DdosDstZoneSrcPortZoneSrcPortZoneTemplate;
}
export interface DdosDstZoneSrcPortZoneSrcPortGlidCfg {
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#glid DdosDstZoneSrcPortZoneSrcPort#glid}
  */
  readonly glid?: string;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#glid_action DdosDstZoneSrcPortZoneSrcPort#glid_action}
  */
  readonly glidAction?: string;
}

export function ddosDstZoneSrcPortZoneSrcPortGlidCfgToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortGlidCfgOutputReference | DdosDstZoneSrcPortZoneSrcPortGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortGlidCfgToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortGlidCfgOutputReference | DdosDstZoneSrcPortZoneSrcPortGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortGlidCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortGlidCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortGlidCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._glid = undefined;
      this._glidAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._glid = value.glid;
      this._glidAction = value.glidAction;
    }
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStruct {
  /**
  * 'pkt-rate': rate of incoming packets; 'bit-rate': rate of incoming bits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#type DdosDstZoneSrcPortZoneSrcPort#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#user_tag DdosDstZoneSrcPortZoneSrcPort#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#uuid DdosDstZoneSrcPortZoneSrcPort#uuid}
  */
  readonly uuid?: string;
  /**
  * Threshold of the entire zone for the src-port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#zone_threshold_large_num DdosDstZoneSrcPortZoneSrcPort#zone_threshold_large_num}
  */
  readonly zoneThresholdLargeNum?: number;
  /**
  * Threshold of the entire zone for the src-port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#zone_threshold_num DdosDstZoneSrcPortZoneSrcPort#zone_threshold_num}
  */
  readonly zoneThresholdNum?: number;
}

export function ddosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStructToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_threshold_large_num: cdktf.numberToTerraform(struct!.zoneThresholdLargeNum),
    zone_threshold_num: cdktf.numberToTerraform(struct!.zoneThresholdNum),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStructToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    zone_threshold_large_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdLargeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneThresholdLargeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdLargeNum = this._zoneThresholdLargeNum;
    }
    if (this._zoneThresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdNum = this._zoneThresholdNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneThresholdLargeNum = undefined;
      this._zoneThresholdNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneThresholdLargeNum = value.zoneThresholdLargeNum;
      this._zoneThresholdNum = value.zoneThresholdNum;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // zone_threshold_large_num - computed: false, optional: true, required: false
  private _zoneThresholdLargeNum?: number; 
  public get zoneThresholdLargeNum() {
    return this.getNumberAttribute('zone_threshold_large_num');
  }
  public set zoneThresholdLargeNum(value: number) {
    this._zoneThresholdLargeNum = value;
  }
  public resetZoneThresholdLargeNum() {
    this._zoneThresholdLargeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdLargeNumInput() {
    return this._zoneThresholdLargeNum;
  }

  // zone_threshold_num - computed: false, optional: true, required: false
  private _zoneThresholdNum?: number; 
  public get zoneThresholdNum() {
    return this.getNumberAttribute('zone_threshold_num');
  }
  public set zoneThresholdNum(value: number) {
    this._zoneThresholdNum = value;
  }
  public resetZoneThresholdNum() {
    this._zoneThresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdNumInput() {
    return this._zoneThresholdNum;
  }
}

export class DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStructOutputReference {
    return new DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortLevelListStruct {
  /**
  * '0': Default policy level; '1': Policy level 1;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#level_num DdosDstZoneSrcPortZoneSrcPort#level_num}
  */
  readonly levelNum: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#user_tag DdosDstZoneSrcPortZoneSrcPort#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#uuid DdosDstZoneSrcPortZoneSrcPort#uuid}
  */
  readonly uuid?: string;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#indicator_list DdosDstZoneSrcPortZoneSrcPort#indicator_list}
  */
  readonly indicatorList?: DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStruct[] | cdktf.IResolvable;
}

export function ddosDstZoneSrcPortZoneSrcPortLevelListStructToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortLevelListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_num: cdktf.stringToTerraform(struct!.levelNum),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    indicator_list: cdktf.listMapper(ddosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStructToTerraform, true)(struct!.indicatorList),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortLevelListStructToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortLevelListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_num: {
      value: cdktf.stringToHclTerraform(struct!.levelNum),
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
    indicator_list: {
      value: cdktf.listMapperHcl(ddosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStructToHclTerraform, true)(struct!.indicatorList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortLevelListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortLevelListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNum = this._levelNum;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._indicatorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorList = this._indicatorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortLevelListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNum = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._indicatorList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNum = value.levelNum;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._indicatorList.internalValue = value.indicatorList;
    }
  }

  // level_num - computed: false, optional: false, required: true
  private _levelNum?: string; 
  public get levelNum() {
    return this.getStringAttribute('level_num');
  }
  public set levelNum(value: string) {
    this._levelNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumInput() {
    return this._levelNum;
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

  // indicator_list - computed: false, optional: true, required: false
  private _indicatorList = new DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStructList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DdosDstZoneSrcPortZoneSrcPortLevelListIndicatorListStruct[] | cdktf.IResolvable) {
    this._indicatorList.internalValue = value;
  }
  public resetIndicatorList() {
    this._indicatorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorListInput() {
    return this._indicatorList.internalValue;
  }
}

export class DdosDstZoneSrcPortZoneSrcPortLevelListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneSrcPortZoneSrcPortLevelListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneSrcPortZoneSrcPortLevelListStructOutputReference {
    return new DdosDstZoneSrcPortZoneSrcPortLevelListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortPortInd {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#uuid DdosDstZoneSrcPortZoneSrcPort#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneSrcPortZoneSrcPortPortIndToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortPortIndOutputReference | DdosDstZoneSrcPortZoneSrcPortPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortPortIndToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortPortIndOutputReference | DdosDstZoneSrcPortZoneSrcPortPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortPortInd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface DdosDstZoneSrcPortZoneSrcPortZoneTemplate {
  /**
  * DDOS dns src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#src_dns DdosDstZoneSrcPortZoneSrcPort#src_dns}
  */
  readonly srcDns?: string;
  /**
  * DDOS tcp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#src_tcp DdosDstZoneSrcPortZoneSrcPort#src_tcp}
  */
  readonly srcTcp?: string;
  /**
  * DDOS udp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#src_udp DdosDstZoneSrcPortZoneSrcPort#src_udp}
  */
  readonly srcUdp?: string;
}

export function ddosDstZoneSrcPortZoneSrcPortZoneTemplateToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortZoneTemplateOutputReference | DdosDstZoneSrcPortZoneSrcPortZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_dns: cdktf.stringToTerraform(struct!.srcDns),
    src_tcp: cdktf.stringToTerraform(struct!.srcTcp),
    src_udp: cdktf.stringToTerraform(struct!.srcUdp),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortZoneTemplateToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortZoneTemplateOutputReference | DdosDstZoneSrcPortZoneSrcPortZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_dns: {
      value: cdktf.stringToHclTerraform(struct!.srcDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_tcp: {
      value: cdktf.stringToHclTerraform(struct!.srcTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_udp: {
      value: cdktf.stringToHclTerraform(struct!.srcUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDns = this._srcDns;
    }
    if (this._srcTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcp = this._srcTcp;
    }
    if (this._srcUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdp = this._srcUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcDns = undefined;
      this._srcTcp = undefined;
      this._srcUdp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcDns = value.srcDns;
      this._srcTcp = value.srcTcp;
      this._srcUdp = value.srcUdp;
    }
  }

  // src_dns - computed: false, optional: true, required: false
  private _srcDns?: string; 
  public get srcDns() {
    return this.getStringAttribute('src_dns');
  }
  public set srcDns(value: string) {
    this._srcDns = value;
  }
  public resetSrcDns() {
    this._srcDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsInput() {
    return this._srcDns;
  }

  // src_tcp - computed: false, optional: true, required: false
  private _srcTcp?: string; 
  public get srcTcp() {
    return this.getStringAttribute('src_tcp');
  }
  public set srcTcp(value: string) {
    this._srcTcp = value;
  }
  public resetSrcTcp() {
    this._srcTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpInput() {
    return this._srcTcp;
  }

  // src_udp - computed: false, optional: true, required: false
  private _srcUdp?: string; 
  public get srcUdp() {
    return this.getStringAttribute('src_udp');
  }
  public set srcUdp(value: string) {
    this._srcUdp = value;
  }
  public resetSrcUdp() {
    this._srcUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpInput() {
    return this._srcUdp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port thunder_ddos_dst_zone_src_port_zone_src_port}
*/
export class DdosDstZoneSrcPortZoneSrcPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_src_port_zone_src_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneSrcPortZoneSrcPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneSrcPortZoneSrcPort to import
  * @param importFromId The id of the existing DdosDstZoneSrcPortZoneSrcPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneSrcPortZoneSrcPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_src_port_zone_src_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port thunder_ddos_dst_zone_src_port_zone_src_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneSrcPortZoneSrcPortConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneSrcPortZoneSrcPortConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_src_port_zone_src_port',
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
    this._defaultActionList = config.defaultActionList;
    this._deny = config.deny;
    this._id = config.id;
    this._outboundSrcTracking = config.outboundSrcTracking;
    this._portNum = config.portNum;
    this._protocol = config.protocol;
    this._setCounterBaseVal = config.setCounterBaseVal;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
    this._glidCfg.internalValue = config.glidCfg;
    this._levelList.internalValue = config.levelList;
    this._portInd.internalValue = config.portInd;
    this._zoneTemplate.internalValue = config.zoneTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action_list - computed: false, optional: true, required: false
  private _defaultActionList?: string; 
  public get defaultActionList() {
    return this.getStringAttribute('default_action_list');
  }
  public set defaultActionList(value: string) {
    this._defaultActionList = value;
  }
  public resetDefaultActionList() {
    this._defaultActionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionListInput() {
    return this._defaultActionList;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
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

  // outbound_src_tracking - computed: false, optional: true, required: false
  private _outboundSrcTracking?: string; 
  public get outboundSrcTracking() {
    return this.getStringAttribute('outbound_src_tracking');
  }
  public set outboundSrcTracking(value: string) {
    this._outboundSrcTracking = value;
  }
  public resetOutboundSrcTracking() {
    this._outboundSrcTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundSrcTrackingInput() {
    return this._outboundSrcTracking;
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
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

  // set_counter_base_val - computed: false, optional: true, required: false
  private _setCounterBaseVal?: number; 
  public get setCounterBaseVal() {
    return this.getNumberAttribute('set_counter_base_val');
  }
  public set setCounterBaseVal(value: number) {
    this._setCounterBaseVal = value;
  }
  public resetSetCounterBaseVal() {
    this._setCounterBaseVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCounterBaseValInput() {
    return this._setCounterBaseVal;
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

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // glid_cfg - computed: false, optional: true, required: false
  private _glidCfg = new DdosDstZoneSrcPortZoneSrcPortGlidCfgOutputReference(this, "glid_cfg");
  public get glidCfg() {
    return this._glidCfg;
  }
  public putGlidCfg(value: DdosDstZoneSrcPortZoneSrcPortGlidCfg) {
    this._glidCfg.internalValue = value;
  }
  public resetGlidCfg() {
    this._glidCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidCfgInput() {
    return this._glidCfg.internalValue;
  }

  // level_list - computed: false, optional: true, required: false
  private _levelList = new DdosDstZoneSrcPortZoneSrcPortLevelListStructList(this, "level_list", false);
  public get levelList() {
    return this._levelList;
  }
  public putLevelList(value: DdosDstZoneSrcPortZoneSrcPortLevelListStruct[] | cdktf.IResolvable) {
    this._levelList.internalValue = value;
  }
  public resetLevelList() {
    this._levelList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelListInput() {
    return this._levelList.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DdosDstZoneSrcPortZoneSrcPortPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DdosDstZoneSrcPortZoneSrcPortPortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZoneSrcPortZoneSrcPortZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZoneSrcPortZoneSrcPortZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_action_list: cdktf.stringToTerraform(this._defaultActionList),
      deny: cdktf.numberToTerraform(this._deny),
      id: cdktf.stringToTerraform(this._id),
      outbound_src_tracking: cdktf.stringToTerraform(this._outboundSrcTracking),
      port_num: cdktf.numberToTerraform(this._portNum),
      protocol: cdktf.stringToTerraform(this._protocol),
      set_counter_base_val: cdktf.numberToTerraform(this._setCounterBaseVal),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      glid_cfg: ddosDstZoneSrcPortZoneSrcPortGlidCfgToTerraform(this._glidCfg.internalValue),
      level_list: cdktf.listMapper(ddosDstZoneSrcPortZoneSrcPortLevelListStructToTerraform, true)(this._levelList.internalValue),
      port_ind: ddosDstZoneSrcPortZoneSrcPortPortIndToTerraform(this._portInd.internalValue),
      zone_template: ddosDstZoneSrcPortZoneSrcPortZoneTemplateToTerraform(this._zoneTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action_list: {
        value: cdktf.stringToHclTerraform(this._defaultActionList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny: {
        value: cdktf.numberToHclTerraform(this._deny),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_src_tracking: {
        value: cdktf.stringToHclTerraform(this._outboundSrcTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_num: {
        value: cdktf.numberToHclTerraform(this._portNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_counter_base_val: {
        value: cdktf.numberToHclTerraform(this._setCounterBaseVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glid_cfg: {
        value: ddosDstZoneSrcPortZoneSrcPortGlidCfgToHclTerraform(this._glidCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneSrcPortZoneSrcPortGlidCfgList",
      },
      level_list: {
        value: cdktf.listMapperHcl(ddosDstZoneSrcPortZoneSrcPortLevelListStructToHclTerraform, true)(this._levelList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneSrcPortZoneSrcPortLevelListStructList",
      },
      port_ind: {
        value: ddosDstZoneSrcPortZoneSrcPortPortIndToHclTerraform(this._portInd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneSrcPortZoneSrcPortPortIndList",
      },
      zone_template: {
        value: ddosDstZoneSrcPortZoneSrcPortZoneTemplateToHclTerraform(this._zoneTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneSrcPortZoneSrcPortZoneTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
