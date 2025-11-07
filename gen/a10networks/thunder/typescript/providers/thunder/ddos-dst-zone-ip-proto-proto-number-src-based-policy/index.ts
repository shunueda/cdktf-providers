// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneIpProtoProtoNumberSrcBasedPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#id DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ProtocolNum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#protocol_num DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#protocol_num}
  */
  readonly protocolNum: string;
  /**
  * Specify name of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#src_based_policy_name DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#src_based_policy_name}
  */
  readonly srcBasedPolicyName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#user_tag DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#uuid DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#zone_name DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#zone_name}
  */
  readonly zoneName: string;
  /**
  * policy_class_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#policy_class_list_list DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#policy_class_list_list}
  */
  readonly policyClassListList?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStruct[] | cdktf.IResolvable;
}
export interface DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplate {
  /**
  * DDOS ip-proto template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#ip_proto DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#ip_proto}
  */
  readonly ipProto?: string;
}

export function ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplateToTerraform(struct?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplateOutputReference | DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_proto: cdktf.stringToTerraform(struct!.ipProto),
  }
}


export function ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplateToHclTerraform(struct?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplateOutputReference | DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_proto: {
      value: cdktf.stringToHclTerraform(struct!.ipProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProto = this._ipProto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipProto = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipProto = value.ipProto;
    }
  }

  // ip_proto - computed: false, optional: true, required: false
  private _ipProto?: string; 
  public get ipProto() {
    return this.getStringAttribute('ip_proto');
  }
  public set ipProto(value: string) {
    this._ipProto = value;
  }
  public resetIpProto() {
    this._ipProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoInput() {
    return this._ipProto;
  }
}
export interface DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStruct {
  /**
  * 'bypass': Always permit for the Source to bypass all feature & limit checks; 'deny': Blacklist incoming packets for service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#action DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#action}
  */
  readonly action?: string;
  /**
  * 'configuration': Configure overflow policy for class-list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#dummy_name DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#dummy_name}
  */
  readonly dummyName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#glid DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#glid}
  */
  readonly glid?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#log_enable DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Enable log periodic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#log_periodic DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#user_tag DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#uuid DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#zone_template DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#zone_template}
  */
  readonly zoneTemplate?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplate;
}

export function ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStructToTerraform(struct?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dummy_name: cdktf.stringToTerraform(struct!.dummyName),
    glid: cdktf.stringToTerraform(struct!.glid),
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_template: ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStructToHclTerraform(struct?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dummy_name: {
      value: cdktf.stringToHclTerraform(struct!.dummyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_enable: {
      value: cdktf.numberToHclTerraform(struct!.logEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_periodic: {
      value: cdktf.numberToHclTerraform(struct!.logPeriodic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    zone_template: {
      value: ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dummyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummyName = this._dummyName;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    if (this._logPeriodic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPeriodic = this._logPeriodic;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dummyName = undefined;
      this._glid = undefined;
      this._logEnable = undefined;
      this._logPeriodic = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dummyName = value.dummyName;
      this._glid = value.glid;
      this._logEnable = value.logEnable;
      this._logPeriodic = value.logPeriodic;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneTemplate.internalValue = value.zoneTemplate;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // dummy_name - computed: false, optional: false, required: true
  private _dummyName?: string; 
  public get dummyName() {
    return this.getStringAttribute('dummy_name');
  }
  public set dummyName(value: string) {
    this._dummyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyNameInput() {
    return this._dummyName;
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

  // log_enable - computed: false, optional: true, required: false
  private _logEnable?: number; 
  public get logEnable() {
    return this.getNumberAttribute('log_enable');
  }
  public set logEnable(value: number) {
    this._logEnable = value;
  }
  public resetLogEnable() {
    this._logEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnableInput() {
    return this._logEnable;
  }

  // log_periodic - computed: false, optional: true, required: false
  private _logPeriodic?: number; 
  public get logPeriodic() {
    return this.getNumberAttribute('log_periodic');
  }
  public set logPeriodic(value: number) {
    this._logPeriodic = value;
  }
  public resetLogPeriodic() {
    this._logPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPeriodicInput() {
    return this._logPeriodic;
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

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStructOutputReference {
    return new DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnable {
  /**
  * 'all': all; 'packet_received': Packets Received; 'packet_dropped': Packets Dropped; 'entry_learned': Entry Learned; 'entry_count_overflow': Entry Count Overflow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#counters1 DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnableToTerraform(struct?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnableToHclTerraform(struct?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnableOutputReference {
    return new DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplate {
  /**
  * DDOS ip-proto template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#ip_proto DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#ip_proto}
  */
  readonly ipProto?: string;
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#logging DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#logging}
  */
  readonly logging?: string;
}

export function ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplateToTerraform(struct?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplateOutputReference | DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_proto: cdktf.stringToTerraform(struct!.ipProto),
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplateToHclTerraform(struct?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplateOutputReference | DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_proto: {
      value: cdktf.stringToHclTerraform(struct!.ipProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProto = this._ipProto;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipProto = undefined;
      this._logging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipProto = value.ipProto;
      this._logging = value.logging;
    }
  }

  // ip_proto - computed: false, optional: true, required: false
  private _ipProto?: string; 
  public get ipProto() {
    return this.getStringAttribute('ip_proto');
  }
  public set ipProto(value: string) {
    this._ipProto = value;
  }
  public resetIpProto() {
    this._ipProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoInput() {
    return this._ipProto;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }
}
export interface DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStruct {
  /**
  * 'bypass': Always permit for the Source to bypass all feature & limit checks; 'deny': Blacklist incoming packets for service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#action DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#action}
  */
  readonly action?: string;
  /**
  * Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#class_list_name DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#class_list_name}
  */
  readonly classListName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#glid DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#glid}
  */
  readonly glid?: string;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'blacklist-src': Blacklist-src for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#glid_action DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#glid_action}
  */
  readonly glidAction?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#log_enable DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Enable log periodic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#log_periodic DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Maximum count for dynamic source zone service entry allowed for this class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#max_dynamic_entry_count DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#max_dynamic_entry_count}
  */
  readonly maxDynamicEntryCount?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#user_tag DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#uuid DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list_overflow_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#class_list_overflow_policy_list DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#class_list_overflow_policy_list}
  */
  readonly classListOverflowPolicyList?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#sampling_enable DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#sampling_enable}
  */
  readonly samplingEnable?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnable[] | cdktf.IResolvable;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#zone_template DdosDstZoneIpProtoProtoNumberSrcBasedPolicy#zone_template}
  */
  readonly zoneTemplate?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplate;
}

export function ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStructToTerraform(struct?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    class_list_name: cdktf.stringToTerraform(struct!.classListName),
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    max_dynamic_entry_count: cdktf.numberToTerraform(struct!.maxDynamicEntryCount),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    class_list_overflow_policy_list: cdktf.listMapper(ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStructToTerraform, true)(struct!.classListOverflowPolicyList),
    sampling_enable: cdktf.listMapper(ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnableToTerraform, true)(struct!.samplingEnable),
    zone_template: ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStructToHclTerraform(struct?: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_name: {
      value: cdktf.stringToHclTerraform(struct!.classListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    log_enable: {
      value: cdktf.numberToHclTerraform(struct!.logEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_periodic: {
      value: cdktf.numberToHclTerraform(struct!.logPeriodic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_dynamic_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.maxDynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    class_list_overflow_policy_list: {
      value: cdktf.listMapperHcl(ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStructToHclTerraform, true)(struct!.classListOverflowPolicyList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStructList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnableList",
    },
    zone_template: {
      value: ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._classListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListName = this._classListName;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    if (this._logPeriodic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPeriodic = this._logPeriodic;
    }
    if (this._maxDynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDynamicEntryCount = this._maxDynamicEntryCount;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._classListOverflowPolicyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListOverflowPolicyList = this._classListOverflowPolicyList?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._classListName = undefined;
      this._glid = undefined;
      this._glidAction = undefined;
      this._logEnable = undefined;
      this._logPeriodic = undefined;
      this._maxDynamicEntryCount = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._classListOverflowPolicyList.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._classListName = value.classListName;
      this._glid = value.glid;
      this._glidAction = value.glidAction;
      this._logEnable = value.logEnable;
      this._logPeriodic = value.logPeriodic;
      this._maxDynamicEntryCount = value.maxDynamicEntryCount;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._classListOverflowPolicyList.internalValue = value.classListOverflowPolicyList;
      this._samplingEnable.internalValue = value.samplingEnable;
      this._zoneTemplate.internalValue = value.zoneTemplate;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // class_list_name - computed: false, optional: false, required: true
  private _classListName?: string; 
  public get classListName() {
    return this.getStringAttribute('class_list_name');
  }
  public set classListName(value: string) {
    this._classListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classListNameInput() {
    return this._classListName;
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

  // log_enable - computed: false, optional: true, required: false
  private _logEnable?: number; 
  public get logEnable() {
    return this.getNumberAttribute('log_enable');
  }
  public set logEnable(value: number) {
    this._logEnable = value;
  }
  public resetLogEnable() {
    this._logEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnableInput() {
    return this._logEnable;
  }

  // log_periodic - computed: false, optional: true, required: false
  private _logPeriodic?: number; 
  public get logPeriodic() {
    return this.getNumberAttribute('log_periodic');
  }
  public set logPeriodic(value: number) {
    this._logPeriodic = value;
  }
  public resetLogPeriodic() {
    this._logPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPeriodicInput() {
    return this._logPeriodic;
  }

  // max_dynamic_entry_count - computed: false, optional: true, required: false
  private _maxDynamicEntryCount?: number; 
  public get maxDynamicEntryCount() {
    return this.getNumberAttribute('max_dynamic_entry_count');
  }
  public set maxDynamicEntryCount(value: number) {
    this._maxDynamicEntryCount = value;
  }
  public resetMaxDynamicEntryCount() {
    this._maxDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDynamicEntryCountInput() {
    return this._maxDynamicEntryCount;
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

  // class_list_overflow_policy_list - computed: false, optional: true, required: false
  private _classListOverflowPolicyList = new DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStructList(this, "class_list_overflow_policy_list", false);
  public get classListOverflowPolicyList() {
    return this._classListOverflowPolicyList;
  }
  public putClassListOverflowPolicyList(value: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListClassListOverflowPolicyListStruct[] | cdktf.IResolvable) {
    this._classListOverflowPolicyList.internalValue = value;
  }
  public resetClassListOverflowPolicyList() {
    this._classListOverflowPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListOverflowPolicyListInput() {
    return this._classListOverflowPolicyList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStructOutputReference {
    return new DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy thunder_ddos_dst_zone_ip_proto_proto_number_src_based_policy}
*/
export class DdosDstZoneIpProtoProtoNumberSrcBasedPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_ip_proto_proto_number_src_based_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneIpProtoProtoNumberSrcBasedPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneIpProtoProtoNumberSrcBasedPolicy to import
  * @param importFromId The id of the existing DdosDstZoneIpProtoProtoNumberSrcBasedPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneIpProtoProtoNumberSrcBasedPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_ip_proto_proto_number_src_based_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_src_based_policy thunder_ddos_dst_zone_ip_proto_proto_number_src_based_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneIpProtoProtoNumberSrcBasedPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_ip_proto_proto_number_src_based_policy',
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
    this._id = config.id;
    this._protocolNum = config.protocolNum;
    this._srcBasedPolicyName = config.srcBasedPolicyName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
    this._policyClassListList.internalValue = config.policyClassListList;
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

  // protocol_num - computed: false, optional: false, required: true
  private _protocolNum?: string; 
  public get protocolNum() {
    return this.getStringAttribute('protocol_num');
  }
  public set protocolNum(value: string) {
    this._protocolNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNumInput() {
    return this._protocolNum;
  }

  // src_based_policy_name - computed: false, optional: false, required: true
  private _srcBasedPolicyName?: string; 
  public get srcBasedPolicyName() {
    return this.getStringAttribute('src_based_policy_name');
  }
  public set srcBasedPolicyName(value: string) {
    this._srcBasedPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBasedPolicyNameInput() {
    return this._srcBasedPolicyName;
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

  // policy_class_list_list - computed: false, optional: true, required: false
  private _policyClassListList = new DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStructList(this, "policy_class_list_list", false);
  public get policyClassListList() {
    return this._policyClassListList;
  }
  public putPolicyClassListList(value: DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStruct[] | cdktf.IResolvable) {
    this._policyClassListList.internalValue = value;
  }
  public resetPolicyClassListList() {
    this._policyClassListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyClassListListInput() {
    return this._policyClassListList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      protocol_num: cdktf.stringToTerraform(this._protocolNum),
      src_based_policy_name: cdktf.stringToTerraform(this._srcBasedPolicyName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      policy_class_list_list: cdktf.listMapper(ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStructToTerraform, true)(this._policyClassListList.internalValue),
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
      protocol_num: {
        value: cdktf.stringToHclTerraform(this._protocolNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_based_policy_name: {
        value: cdktf.stringToHclTerraform(this._srcBasedPolicyName),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_class_list_list: {
        value: cdktf.listMapperHcl(ddosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStructToHclTerraform, true)(this._policyClassListList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
