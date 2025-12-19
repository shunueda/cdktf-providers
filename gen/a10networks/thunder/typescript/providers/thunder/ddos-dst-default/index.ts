// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Idle age for ip entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#age DdosDstDefault#age}
  */
  readonly age?: number;
  /**
  * Enable this flag to apply overflow policy when dynamic entry count overflows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#apply_policy_on_overflow DdosDstDefault#apply_policy_on_overflow}
  */
  readonly applyPolicyOnOverflow?: number;
  /**
  * 'ip': ip; 'ipv6': ipv6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#default_address_type DdosDstDefault#default_address_type}
  */
  readonly defaultAddressType: string;
  /**
  * Blacklist and Drop all incoming packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#deny DdosDstDefault#deny}
  */
  readonly deny?: number;
  /**
  * Disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#disable DdosDstDefault#disable}
  */
  readonly disable?: number;
  /**
  * Disable certain drops during packet processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#drop_disable DdosDstDefault#drop_disable}
  */
  readonly dropDisable?: number;
  /**
  * Immediately forward L4 drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#drop_disable_fwd_immediate DdosDstDefault#drop_disable_fwd_immediate}
  */
  readonly dropDisableFwdImmediate?: number;
  /**
  * Drop fragmented packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#drop_frag_pkt DdosDstDefault#drop_frag_pkt}
  */
  readonly dropFragPkt?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#glid DdosDstDefault#glid}
  */
  readonly glid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#id DdosDstDefault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * To set dscp value for inbound packets (DSCP Value for the clear traffic marking)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#inbound_forward_dscp DdosDstDefault#inbound_forward_dscp}
  */
  readonly inboundForwardDscp?: number;
  /**
  * Enable periodic log while event is continuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#log_periodic DdosDstDefault#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Maximum count for dynamic dst entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#max_dynamic_entry_count DdosDstDefault#max_dynamic_entry_count}
  */
  readonly maxDynamicEntryCount?: number;
  /**
  * To set dscp value for outbound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#outbound_forward_dscp DdosDstDefault#outbound_forward_dscp}
  */
  readonly outboundForwardDscp?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#user_tag DdosDstDefault#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#uuid DdosDstDefault#uuid}
  */
  readonly uuid?: string;
  /**
  * exceed_log_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#exceed_log_cfg DdosDstDefault#exceed_log_cfg}
  */
  readonly exceedLogCfg?: DdosDstDefaultExceedLogCfg;
  /**
  * exceed_log_dep_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#exceed_log_dep_cfg DdosDstDefault#exceed_log_dep_cfg}
  */
  readonly exceedLogDepCfg?: DdosDstDefaultExceedLogDepCfg;
  /**
  * ip_proto_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#ip_proto_list DdosDstDefault#ip_proto_list}
  */
  readonly ipProtoList?: DdosDstDefaultIpProtoListStruct[] | cdktf.IResolvable;
  /**
  * l4_type_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#l4_type_list DdosDstDefault#l4_type_list}
  */
  readonly l4TypeList?: DdosDstDefaultL4TypeListStruct[] | cdktf.IResolvable;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#port_list DdosDstDefault#port_list}
  */
  readonly portList?: DdosDstDefaultPortListStruct[] | cdktf.IResolvable;
  /**
  * src_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#src_port_list DdosDstDefault#src_port_list}
  */
  readonly srcPortList?: DdosDstDefaultSrcPortListStruct[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#template DdosDstDefault#template}
  */
  readonly template?: DdosDstDefaultTemplate;
}
export interface DdosDstDefaultExceedLogCfg {
  /**
  * Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#log_enable DdosDstDefault#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Turn on sflow sample with log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#with_sflow_sample DdosDstDefault#with_sflow_sample}
  */
  readonly withSflowSample?: number;
}

export function ddosDstDefaultExceedLogCfgToTerraform(struct?: DdosDstDefaultExceedLogCfgOutputReference | DdosDstDefaultExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
    with_sflow_sample: cdktf.numberToTerraform(struct!.withSflowSample),
  }
}


export function ddosDstDefaultExceedLogCfgToHclTerraform(struct?: DdosDstDefaultExceedLogCfgOutputReference | DdosDstDefaultExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_enable: {
      value: cdktf.numberToHclTerraform(struct!.logEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    with_sflow_sample: {
      value: cdktf.numberToHclTerraform(struct!.withSflowSample),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDefaultExceedLogCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDefaultExceedLogCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    if (this._withSflowSample !== undefined) {
      hasAnyValues = true;
      internalValueResult.withSflowSample = this._withSflowSample;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDefaultExceedLogCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logEnable = undefined;
      this._withSflowSample = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logEnable = value.logEnable;
      this._withSflowSample = value.withSflowSample;
    }
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

  // with_sflow_sample - computed: false, optional: true, required: false
  private _withSflowSample?: number; 
  public get withSflowSample() {
    return this.getNumberAttribute('with_sflow_sample');
  }
  public set withSflowSample(value: number) {
    this._withSflowSample = value;
  }
  public resetWithSflowSample() {
    this._withSflowSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSflowSampleInput() {
    return this._withSflowSample;
  }
}
export interface DdosDstDefaultExceedLogDepCfg {
  /**
  * (Deprecated)Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#exceed_log_enable DdosDstDefault#exceed_log_enable}
  */
  readonly exceedLogEnable?: number;
  /**
  * Turn on sflow sample with log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#log_with_sflow_dep DdosDstDefault#log_with_sflow_dep}
  */
  readonly logWithSflowDep?: number;
}

export function ddosDstDefaultExceedLogDepCfgToTerraform(struct?: DdosDstDefaultExceedLogDepCfgOutputReference | DdosDstDefaultExceedLogDepCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exceed_log_enable: cdktf.numberToTerraform(struct!.exceedLogEnable),
    log_with_sflow_dep: cdktf.numberToTerraform(struct!.logWithSflowDep),
  }
}


export function ddosDstDefaultExceedLogDepCfgToHclTerraform(struct?: DdosDstDefaultExceedLogDepCfgOutputReference | DdosDstDefaultExceedLogDepCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exceed_log_enable: {
      value: cdktf.numberToHclTerraform(struct!.exceedLogEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_with_sflow_dep: {
      value: cdktf.numberToHclTerraform(struct!.logWithSflowDep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDefaultExceedLogDepCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDefaultExceedLogDepCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceedLogEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedLogEnable = this._exceedLogEnable;
    }
    if (this._logWithSflowDep !== undefined) {
      hasAnyValues = true;
      internalValueResult.logWithSflowDep = this._logWithSflowDep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDefaultExceedLogDepCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exceedLogEnable = undefined;
      this._logWithSflowDep = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exceedLogEnable = value.exceedLogEnable;
      this._logWithSflowDep = value.logWithSflowDep;
    }
  }

  // exceed_log_enable - computed: false, optional: true, required: false
  private _exceedLogEnable?: number; 
  public get exceedLogEnable() {
    return this.getNumberAttribute('exceed_log_enable');
  }
  public set exceedLogEnable(value: number) {
    this._exceedLogEnable = value;
  }
  public resetExceedLogEnable() {
    this._exceedLogEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLogEnableInput() {
    return this._exceedLogEnable;
  }

  // log_with_sflow_dep - computed: false, optional: true, required: false
  private _logWithSflowDep?: number; 
  public get logWithSflowDep() {
    return this.getNumberAttribute('log_with_sflow_dep');
  }
  public set logWithSflowDep(value: number) {
    this._logWithSflowDep = value;
  }
  public resetLogWithSflowDep() {
    this._logWithSflowDep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logWithSflowDepInput() {
    return this._logWithSflowDep;
  }
}
export interface DdosDstDefaultIpProtoListTemplate {
  /**
  * DDOS other template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#other DdosDstDefault#other}
  */
  readonly other?: string;
}

export function ddosDstDefaultIpProtoListTemplateToTerraform(struct?: DdosDstDefaultIpProtoListTemplateOutputReference | DdosDstDefaultIpProtoListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
  }
}


export function ddosDstDefaultIpProtoListTemplateToHclTerraform(struct?: DdosDstDefaultIpProtoListTemplateOutputReference | DdosDstDefaultIpProtoListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    other: {
      value: cdktf.stringToHclTerraform(struct!.other),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDefaultIpProtoListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDefaultIpProtoListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDefaultIpProtoListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._other = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._other = value.other;
    }
  }

  // other - computed: false, optional: true, required: false
  private _other?: string; 
  public get other() {
    return this.getStringAttribute('other');
  }
  public set other(value: string) {
    this._other = value;
  }
  public resetOther() {
    this._other = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInput() {
    return this._other;
  }
}
export interface DdosDstDefaultIpProtoListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#deny DdosDstDefault#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#glid DdosDstDefault#glid}
  */
  readonly glid?: string;
  /**
  * Protocol Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#port_num DdosDstDefault#port_num}
  */
  readonly portNum: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#user_tag DdosDstDefault#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#uuid DdosDstDefault#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#template DdosDstDefault#template}
  */
  readonly template?: DdosDstDefaultIpProtoListTemplate;
}

export function ddosDstDefaultIpProtoListStructToTerraform(struct?: DdosDstDefaultIpProtoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstDefaultIpProtoListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstDefaultIpProtoListStructToHclTerraform(struct?: DdosDstDefaultIpProtoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
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
    template: {
      value: ddosDstDefaultIpProtoListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstDefaultIpProtoListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDefaultIpProtoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstDefaultIpProtoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDefaultIpProtoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
      this._portNum = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._glid = value.glid;
      this._portNum = value.portNum;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
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

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstDefaultIpProtoListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstDefaultIpProtoListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DdosDstDefaultIpProtoListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstDefaultIpProtoListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstDefaultIpProtoListStructOutputReference {
    return new DdosDstDefaultIpProtoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstDefaultL4TypeListTunnelDecapKeyCfg {
  /**
  * Only decapsulate GRE packet with this key (Hexadecimal 0x0-0xFFFFFFFF,decimal 0-4294967295)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#key DdosDstDefault#key}
  */
  readonly key?: string;
}

export function ddosDstDefaultL4TypeListTunnelDecapKeyCfgToTerraform(struct?: DdosDstDefaultL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ddosDstDefaultL4TypeListTunnelDecapKeyCfgToHclTerraform(struct?: DdosDstDefaultL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDefaultL4TypeListTunnelDecapKeyCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstDefaultL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDefaultL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class DdosDstDefaultL4TypeListTunnelDecapKeyCfgList extends cdktf.ComplexList {
  public internalValue? : DdosDstDefaultL4TypeListTunnelDecapKeyCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosDstDefaultL4TypeListTunnelDecapKeyCfgOutputReference {
    return new DdosDstDefaultL4TypeListTunnelDecapKeyCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstDefaultL4TypeListTunnelDecap {
  /**
  * Enable GRE Tunnel decapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#gre_decap DdosDstDefault#gre_decap}
  */
  readonly greDecap?: number;
  /**
  * Enable IP Tunnel decapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#ip_decap DdosDstDefault#ip_decap}
  */
  readonly ipDecap?: number;
  /**
  * key_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#key_cfg DdosDstDefault#key_cfg}
  */
  readonly keyCfg?: DdosDstDefaultL4TypeListTunnelDecapKeyCfg[] | cdktf.IResolvable;
}

export function ddosDstDefaultL4TypeListTunnelDecapToTerraform(struct?: DdosDstDefaultL4TypeListTunnelDecapOutputReference | DdosDstDefaultL4TypeListTunnelDecap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_decap: cdktf.numberToTerraform(struct!.greDecap),
    ip_decap: cdktf.numberToTerraform(struct!.ipDecap),
    key_cfg: cdktf.listMapper(ddosDstDefaultL4TypeListTunnelDecapKeyCfgToTerraform, true)(struct!.keyCfg),
  }
}


export function ddosDstDefaultL4TypeListTunnelDecapToHclTerraform(struct?: DdosDstDefaultL4TypeListTunnelDecapOutputReference | DdosDstDefaultL4TypeListTunnelDecap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_decap: {
      value: cdktf.numberToHclTerraform(struct!.greDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_decap: {
      value: cdktf.numberToHclTerraform(struct!.ipDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_cfg: {
      value: cdktf.listMapperHcl(ddosDstDefaultL4TypeListTunnelDecapKeyCfgToHclTerraform, true)(struct!.keyCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstDefaultL4TypeListTunnelDecapKeyCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDefaultL4TypeListTunnelDecapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDefaultL4TypeListTunnelDecap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.greDecap = this._greDecap;
    }
    if (this._ipDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDecap = this._ipDecap;
    }
    if (this._keyCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyCfg = this._keyCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDefaultL4TypeListTunnelDecap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greDecap = undefined;
      this._ipDecap = undefined;
      this._keyCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greDecap = value.greDecap;
      this._ipDecap = value.ipDecap;
      this._keyCfg.internalValue = value.keyCfg;
    }
  }

  // gre_decap - computed: false, optional: true, required: false
  private _greDecap?: number; 
  public get greDecap() {
    return this.getNumberAttribute('gre_decap');
  }
  public set greDecap(value: number) {
    this._greDecap = value;
  }
  public resetGreDecap() {
    this._greDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greDecapInput() {
    return this._greDecap;
  }

  // ip_decap - computed: false, optional: true, required: false
  private _ipDecap?: number; 
  public get ipDecap() {
    return this.getNumberAttribute('ip_decap');
  }
  public set ipDecap(value: number) {
    this._ipDecap = value;
  }
  public resetIpDecap() {
    this._ipDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDecapInput() {
    return this._ipDecap;
  }

  // key_cfg - computed: false, optional: true, required: false
  private _keyCfg = new DdosDstDefaultL4TypeListTunnelDecapKeyCfgList(this, "key_cfg", false);
  public get keyCfg() {
    return this._keyCfg;
  }
  public putKeyCfg(value: DdosDstDefaultL4TypeListTunnelDecapKeyCfg[] | cdktf.IResolvable) {
    this._keyCfg.internalValue = value;
  }
  public resetKeyCfg() {
    this._keyCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCfgInput() {
    return this._keyCfg.internalValue;
  }
}
export interface DdosDstDefaultL4TypeListTunnelRateLimit {
  /**
  * Enable inner IP rate limiting on GRE traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#gre_rate_limit DdosDstDefault#gre_rate_limit}
  */
  readonly greRateLimit?: number;
  /**
  * Enable inner IP rate limiting on IPinIP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#ip_rate_limit DdosDstDefault#ip_rate_limit}
  */
  readonly ipRateLimit?: number;
}

export function ddosDstDefaultL4TypeListTunnelRateLimitToTerraform(struct?: DdosDstDefaultL4TypeListTunnelRateLimitOutputReference | DdosDstDefaultL4TypeListTunnelRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_rate_limit: cdktf.numberToTerraform(struct!.greRateLimit),
    ip_rate_limit: cdktf.numberToTerraform(struct!.ipRateLimit),
  }
}


export function ddosDstDefaultL4TypeListTunnelRateLimitToHclTerraform(struct?: DdosDstDefaultL4TypeListTunnelRateLimitOutputReference | DdosDstDefaultL4TypeListTunnelRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.greRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.ipRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDefaultL4TypeListTunnelRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDefaultL4TypeListTunnelRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.greRateLimit = this._greRateLimit;
    }
    if (this._ipRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRateLimit = this._ipRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDefaultL4TypeListTunnelRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greRateLimit = undefined;
      this._ipRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greRateLimit = value.greRateLimit;
      this._ipRateLimit = value.ipRateLimit;
    }
  }

  // gre_rate_limit - computed: false, optional: true, required: false
  private _greRateLimit?: number; 
  public get greRateLimit() {
    return this.getNumberAttribute('gre_rate_limit');
  }
  public set greRateLimit(value: number) {
    this._greRateLimit = value;
  }
  public resetGreRateLimit() {
    this._greRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greRateLimitInput() {
    return this._greRateLimit;
  }

  // ip_rate_limit - computed: false, optional: true, required: false
  private _ipRateLimit?: number; 
  public get ipRateLimit() {
    return this.getNumberAttribute('ip_rate_limit');
  }
  public set ipRateLimit(value: number) {
    this._ipRateLimit = value;
  }
  public resetIpRateLimit() {
    this._ipRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRateLimitInput() {
    return this._ipRateLimit;
  }
}
export interface DdosDstDefaultL4TypeListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#deny DdosDstDefault#deny}
  */
  readonly deny?: number;
  /**
  * Disable TCP SYN Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#disable_syn_auth DdosDstDefault#disable_syn_auth}
  */
  readonly disableSynAuth?: number;
  /**
  * Drop fragmented packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#drop_frag_pkt DdosDstDefault#drop_frag_pkt}
  */
  readonly dropFragPkt?: number;
  /**
  * 'disable': disable; 'enable': enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#drop_on_no_port_match DdosDstDefault#drop_on_no_port_match}
  */
  readonly dropOnNoPortMatch?: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#glid DdosDstDefault#glid}
  */
  readonly glid?: string;
  /**
  * Maximum number of re-transmit SYN per flow. Exceed action set to Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#max_rexmit_syn_per_flow DdosDstDefault#max_rexmit_syn_per_flow}
  */
  readonly maxRexmitSynPerFlow?: number;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#protocol DdosDstDefault#protocol}
  */
  readonly protocol: string;
  /**
  * Enable stateful tracking of sessions (Default is stateless)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#stateful DdosDstDefault#stateful}
  */
  readonly stateful?: number;
  /**
  * 'send-rst': Send RST to client upon client ACK; 'force-rst-by-ack': Force client RST via the use of ACK; 'force-rst-by-synack': Force client RST via the use of bad SYN|ACK; 'disable': Disable TCP SYN Authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#syn_auth DdosDstDefault#syn_auth}
  */
  readonly synAuth?: string;
  /**
  * Enable SYN Cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#syn_cookie DdosDstDefault#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * Send reset to client when rate exceeds or session ages out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#tcp_reset_client DdosDstDefault#tcp_reset_client}
  */
  readonly tcpResetClient?: number;
  /**
  * Send reset to server when rate exceeds or session ages out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#tcp_reset_server DdosDstDefault#tcp_reset_server}
  */
  readonly tcpResetServer?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#user_tag DdosDstDefault#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#uuid DdosDstDefault#uuid}
  */
  readonly uuid?: string;
  /**
  * tunnel_decap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#tunnel_decap DdosDstDefault#tunnel_decap}
  */
  readonly tunnelDecap?: DdosDstDefaultL4TypeListTunnelDecap;
  /**
  * tunnel_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#tunnel_rate_limit DdosDstDefault#tunnel_rate_limit}
  */
  readonly tunnelRateLimit?: DdosDstDefaultL4TypeListTunnelRateLimit;
}

export function ddosDstDefaultL4TypeListStructToTerraform(struct?: DdosDstDefaultL4TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    disable_syn_auth: cdktf.numberToTerraform(struct!.disableSynAuth),
    drop_frag_pkt: cdktf.numberToTerraform(struct!.dropFragPkt),
    drop_on_no_port_match: cdktf.stringToTerraform(struct!.dropOnNoPortMatch),
    glid: cdktf.stringToTerraform(struct!.glid),
    max_rexmit_syn_per_flow: cdktf.numberToTerraform(struct!.maxRexmitSynPerFlow),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    stateful: cdktf.numberToTerraform(struct!.stateful),
    syn_auth: cdktf.stringToTerraform(struct!.synAuth),
    syn_cookie: cdktf.numberToTerraform(struct!.synCookie),
    tcp_reset_client: cdktf.numberToTerraform(struct!.tcpResetClient),
    tcp_reset_server: cdktf.numberToTerraform(struct!.tcpResetServer),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tunnel_decap: ddosDstDefaultL4TypeListTunnelDecapToTerraform(struct!.tunnelDecap),
    tunnel_rate_limit: ddosDstDefaultL4TypeListTunnelRateLimitToTerraform(struct!.tunnelRateLimit),
  }
}


export function ddosDstDefaultL4TypeListStructToHclTerraform(struct?: DdosDstDefaultL4TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_syn_auth: {
      value: cdktf.numberToHclTerraform(struct!.disableSynAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_frag_pkt: {
      value: cdktf.numberToHclTerraform(struct!.dropFragPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_on_no_port_match: {
      value: cdktf.stringToHclTerraform(struct!.dropOnNoPortMatch),
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
    max_rexmit_syn_per_flow: {
      value: cdktf.numberToHclTerraform(struct!.maxRexmitSynPerFlow),
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
    stateful: {
      value: cdktf.numberToHclTerraform(struct!.stateful),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_auth: {
      value: cdktf.stringToHclTerraform(struct!.synAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syn_cookie: {
      value: cdktf.numberToHclTerraform(struct!.synCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_reset_client: {
      value: cdktf.numberToHclTerraform(struct!.tcpResetClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_reset_server: {
      value: cdktf.numberToHclTerraform(struct!.tcpResetServer),
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
    tunnel_decap: {
      value: ddosDstDefaultL4TypeListTunnelDecapToHclTerraform(struct!.tunnelDecap),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstDefaultL4TypeListTunnelDecapList",
    },
    tunnel_rate_limit: {
      value: ddosDstDefaultL4TypeListTunnelRateLimitToHclTerraform(struct!.tunnelRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstDefaultL4TypeListTunnelRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDefaultL4TypeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstDefaultL4TypeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._disableSynAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSynAuth = this._disableSynAuth;
    }
    if (this._dropFragPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFragPkt = this._dropFragPkt;
    }
    if (this._dropOnNoPortMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropOnNoPortMatch = this._dropOnNoPortMatch;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._maxRexmitSynPerFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRexmitSynPerFlow = this._maxRexmitSynPerFlow;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._stateful !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateful = this._stateful;
    }
    if (this._synAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuth = this._synAuth;
    }
    if (this._synCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookie = this._synCookie;
    }
    if (this._tcpResetClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpResetClient = this._tcpResetClient;
    }
    if (this._tcpResetServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpResetServer = this._tcpResetServer;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._tunnelDecap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelDecap = this._tunnelDecap?.internalValue;
    }
    if (this._tunnelRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelRateLimit = this._tunnelRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDefaultL4TypeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._disableSynAuth = undefined;
      this._dropFragPkt = undefined;
      this._dropOnNoPortMatch = undefined;
      this._glid = undefined;
      this._maxRexmitSynPerFlow = undefined;
      this._protocol = undefined;
      this._stateful = undefined;
      this._synAuth = undefined;
      this._synCookie = undefined;
      this._tcpResetClient = undefined;
      this._tcpResetServer = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._tunnelDecap.internalValue = undefined;
      this._tunnelRateLimit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._disableSynAuth = value.disableSynAuth;
      this._dropFragPkt = value.dropFragPkt;
      this._dropOnNoPortMatch = value.dropOnNoPortMatch;
      this._glid = value.glid;
      this._maxRexmitSynPerFlow = value.maxRexmitSynPerFlow;
      this._protocol = value.protocol;
      this._stateful = value.stateful;
      this._synAuth = value.synAuth;
      this._synCookie = value.synCookie;
      this._tcpResetClient = value.tcpResetClient;
      this._tcpResetServer = value.tcpResetServer;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._tunnelDecap.internalValue = value.tunnelDecap;
      this._tunnelRateLimit.internalValue = value.tunnelRateLimit;
    }
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

  // disable_syn_auth - computed: false, optional: true, required: false
  private _disableSynAuth?: number; 
  public get disableSynAuth() {
    return this.getNumberAttribute('disable_syn_auth');
  }
  public set disableSynAuth(value: number) {
    this._disableSynAuth = value;
  }
  public resetDisableSynAuth() {
    this._disableSynAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSynAuthInput() {
    return this._disableSynAuth;
  }

  // drop_frag_pkt - computed: false, optional: true, required: false
  private _dropFragPkt?: number; 
  public get dropFragPkt() {
    return this.getNumberAttribute('drop_frag_pkt');
  }
  public set dropFragPkt(value: number) {
    this._dropFragPkt = value;
  }
  public resetDropFragPkt() {
    this._dropFragPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFragPktInput() {
    return this._dropFragPkt;
  }

  // drop_on_no_port_match - computed: false, optional: true, required: false
  private _dropOnNoPortMatch?: string; 
  public get dropOnNoPortMatch() {
    return this.getStringAttribute('drop_on_no_port_match');
  }
  public set dropOnNoPortMatch(value: string) {
    this._dropOnNoPortMatch = value;
  }
  public resetDropOnNoPortMatch() {
    this._dropOnNoPortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropOnNoPortMatchInput() {
    return this._dropOnNoPortMatch;
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

  // max_rexmit_syn_per_flow - computed: false, optional: true, required: false
  private _maxRexmitSynPerFlow?: number; 
  public get maxRexmitSynPerFlow() {
    return this.getNumberAttribute('max_rexmit_syn_per_flow');
  }
  public set maxRexmitSynPerFlow(value: number) {
    this._maxRexmitSynPerFlow = value;
  }
  public resetMaxRexmitSynPerFlow() {
    this._maxRexmitSynPerFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRexmitSynPerFlowInput() {
    return this._maxRexmitSynPerFlow;
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

  // stateful - computed: false, optional: true, required: false
  private _stateful?: number; 
  public get stateful() {
    return this.getNumberAttribute('stateful');
  }
  public set stateful(value: number) {
    this._stateful = value;
  }
  public resetStateful() {
    this._stateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful;
  }

  // syn_auth - computed: false, optional: true, required: false
  private _synAuth?: string; 
  public get synAuth() {
    return this.getStringAttribute('syn_auth');
  }
  public set synAuth(value: string) {
    this._synAuth = value;
  }
  public resetSynAuth() {
    this._synAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthInput() {
    return this._synAuth;
  }

  // syn_cookie - computed: false, optional: true, required: false
  private _synCookie?: number; 
  public get synCookie() {
    return this.getNumberAttribute('syn_cookie');
  }
  public set synCookie(value: number) {
    this._synCookie = value;
  }
  public resetSynCookie() {
    this._synCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieInput() {
    return this._synCookie;
  }

  // tcp_reset_client - computed: false, optional: true, required: false
  private _tcpResetClient?: number; 
  public get tcpResetClient() {
    return this.getNumberAttribute('tcp_reset_client');
  }
  public set tcpResetClient(value: number) {
    this._tcpResetClient = value;
  }
  public resetTcpResetClient() {
    this._tcpResetClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpResetClientInput() {
    return this._tcpResetClient;
  }

  // tcp_reset_server - computed: false, optional: true, required: false
  private _tcpResetServer?: number; 
  public get tcpResetServer() {
    return this.getNumberAttribute('tcp_reset_server');
  }
  public set tcpResetServer(value: number) {
    this._tcpResetServer = value;
  }
  public resetTcpResetServer() {
    this._tcpResetServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpResetServerInput() {
    return this._tcpResetServer;
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

  // tunnel_decap - computed: false, optional: true, required: false
  private _tunnelDecap = new DdosDstDefaultL4TypeListTunnelDecapOutputReference(this, "tunnel_decap");
  public get tunnelDecap() {
    return this._tunnelDecap;
  }
  public putTunnelDecap(value: DdosDstDefaultL4TypeListTunnelDecap) {
    this._tunnelDecap.internalValue = value;
  }
  public resetTunnelDecap() {
    this._tunnelDecap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDecapInput() {
    return this._tunnelDecap.internalValue;
  }

  // tunnel_rate_limit - computed: false, optional: true, required: false
  private _tunnelRateLimit = new DdosDstDefaultL4TypeListTunnelRateLimitOutputReference(this, "tunnel_rate_limit");
  public get tunnelRateLimit() {
    return this._tunnelRateLimit;
  }
  public putTunnelRateLimit(value: DdosDstDefaultL4TypeListTunnelRateLimit) {
    this._tunnelRateLimit.internalValue = value;
  }
  public resetTunnelRateLimit() {
    this._tunnelRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRateLimitInput() {
    return this._tunnelRateLimit.internalValue;
  }
}

export class DdosDstDefaultL4TypeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstDefaultL4TypeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstDefaultL4TypeListStructOutputReference {
    return new DdosDstDefaultL4TypeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstDefaultPortListTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#dns DdosDstDefault#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#http DdosDstDefault#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#sip DdosDstDefault#sip}
  */
  readonly sip?: string;
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#ssl_l4 DdosDstDefault#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#tcp DdosDstDefault#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#udp DdosDstDefault#udp}
  */
  readonly udp?: string;
}

export function ddosDstDefaultPortListTemplateToTerraform(struct?: DdosDstDefaultPortListTemplateOutputReference | DdosDstDefaultPortListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    http: cdktf.stringToTerraform(struct!.http),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstDefaultPortListTemplateToHclTerraform(struct?: DdosDstDefaultPortListTemplateOutputReference | DdosDstDefaultPortListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDefaultPortListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDefaultPortListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDefaultPortListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._http = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._http = value.http;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstDefaultPortListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#deny DdosDstDefault#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#glid DdosDstDefault#glid}
  */
  readonly glid?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#port_num DdosDstDefault#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-tcp': dns-tcp; 'dns-udp': dns-udp; 'http': http; 'tcp': tcp; 'udp': udp; 'ssl-l4': ssl-l4; 'sip-udp': sip-udp; 'sip-tcp': sip-tcp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#protocol DdosDstDefault#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#user_tag DdosDstDefault#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#uuid DdosDstDefault#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#template DdosDstDefault#template}
  */
  readonly template?: DdosDstDefaultPortListTemplate;
}

export function ddosDstDefaultPortListStructToTerraform(struct?: DdosDstDefaultPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstDefaultPortListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstDefaultPortListStructToHclTerraform(struct?: DdosDstDefaultPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
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
    template: {
      value: ddosDstDefaultPortListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstDefaultPortListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDefaultPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstDefaultPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
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
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDefaultPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
      this._portNum = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._glid = value.glid;
      this._portNum = value.portNum;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
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

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstDefaultPortListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstDefaultPortListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DdosDstDefaultPortListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstDefaultPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstDefaultPortListStructOutputReference {
    return new DdosDstDefaultPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstDefaultSrcPortListTemplate {
  /**
  * DDOS tcp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#src_tcp DdosDstDefault#src_tcp}
  */
  readonly srcTcp?: string;
  /**
  * DDOS udp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#src_udp DdosDstDefault#src_udp}
  */
  readonly srcUdp?: string;
}

export function ddosDstDefaultSrcPortListTemplateToTerraform(struct?: DdosDstDefaultSrcPortListTemplateOutputReference | DdosDstDefaultSrcPortListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_tcp: cdktf.stringToTerraform(struct!.srcTcp),
    src_udp: cdktf.stringToTerraform(struct!.srcUdp),
  }
}


export function ddosDstDefaultSrcPortListTemplateToHclTerraform(struct?: DdosDstDefaultSrcPortListTemplateOutputReference | DdosDstDefaultSrcPortListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDstDefaultSrcPortListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDefaultSrcPortListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DdosDstDefaultSrcPortListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcTcp = undefined;
      this._srcUdp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcTcp = value.srcTcp;
      this._srcUdp = value.srcUdp;
    }
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
export interface DdosDstDefaultSrcPortListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#deny DdosDstDefault#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#glid DdosDstDefault#glid}
  */
  readonly glid?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#port_num DdosDstDefault#port_num}
  */
  readonly portNum: number;
  /**
  * 'udp': udp; 'tcp': tcp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#protocol DdosDstDefault#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#user_tag DdosDstDefault#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#uuid DdosDstDefault#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#template DdosDstDefault#template}
  */
  readonly template?: DdosDstDefaultSrcPortListTemplate;
}

export function ddosDstDefaultSrcPortListStructToTerraform(struct?: DdosDstDefaultSrcPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstDefaultSrcPortListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstDefaultSrcPortListStructToHclTerraform(struct?: DdosDstDefaultSrcPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
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
    template: {
      value: ddosDstDefaultSrcPortListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstDefaultSrcPortListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDefaultSrcPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstDefaultSrcPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
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
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDefaultSrcPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
      this._portNum = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._glid = value.glid;
      this._portNum = value.portNum;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
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

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstDefaultSrcPortListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstDefaultSrcPortListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DdosDstDefaultSrcPortListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstDefaultSrcPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstDefaultSrcPortListStructOutputReference {
    return new DdosDstDefaultSrcPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstDefaultTemplate {
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#logging DdosDstDefault#logging}
  */
  readonly logging?: string;
}

export function ddosDstDefaultTemplateToTerraform(struct?: DdosDstDefaultTemplateOutputReference | DdosDstDefaultTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function ddosDstDefaultTemplateToHclTerraform(struct?: DdosDstDefaultTemplateOutputReference | DdosDstDefaultTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDstDefaultTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDefaultTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDefaultTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logging = value.logging;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default thunder_ddos_dst_default}
*/
export class DdosDstDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_default";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstDefault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstDefault to import
  * @param importFromId The id of the existing DdosDstDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstDefault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_default", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_default thunder_ddos_dst_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstDefaultConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstDefaultConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_default',
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
    this._age = config.age;
    this._applyPolicyOnOverflow = config.applyPolicyOnOverflow;
    this._defaultAddressType = config.defaultAddressType;
    this._deny = config.deny;
    this._disable = config.disable;
    this._dropDisable = config.dropDisable;
    this._dropDisableFwdImmediate = config.dropDisableFwdImmediate;
    this._dropFragPkt = config.dropFragPkt;
    this._glid = config.glid;
    this._id = config.id;
    this._inboundForwardDscp = config.inboundForwardDscp;
    this._logPeriodic = config.logPeriodic;
    this._maxDynamicEntryCount = config.maxDynamicEntryCount;
    this._outboundForwardDscp = config.outboundForwardDscp;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._exceedLogCfg.internalValue = config.exceedLogCfg;
    this._exceedLogDepCfg.internalValue = config.exceedLogDepCfg;
    this._ipProtoList.internalValue = config.ipProtoList;
    this._l4TypeList.internalValue = config.l4TypeList;
    this._portList.internalValue = config.portList;
    this._srcPortList.internalValue = config.srcPortList;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // apply_policy_on_overflow - computed: false, optional: true, required: false
  private _applyPolicyOnOverflow?: number; 
  public get applyPolicyOnOverflow() {
    return this.getNumberAttribute('apply_policy_on_overflow');
  }
  public set applyPolicyOnOverflow(value: number) {
    this._applyPolicyOnOverflow = value;
  }
  public resetApplyPolicyOnOverflow() {
    this._applyPolicyOnOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyOnOverflowInput() {
    return this._applyPolicyOnOverflow;
  }

  // default_address_type - computed: false, optional: false, required: true
  private _defaultAddressType?: string; 
  public get defaultAddressType() {
    return this.getStringAttribute('default_address_type');
  }
  public set defaultAddressType(value: string) {
    this._defaultAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAddressTypeInput() {
    return this._defaultAddressType;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // drop_disable - computed: false, optional: true, required: false
  private _dropDisable?: number; 
  public get dropDisable() {
    return this.getNumberAttribute('drop_disable');
  }
  public set dropDisable(value: number) {
    this._dropDisable = value;
  }
  public resetDropDisable() {
    this._dropDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropDisableInput() {
    return this._dropDisable;
  }

  // drop_disable_fwd_immediate - computed: false, optional: true, required: false
  private _dropDisableFwdImmediate?: number; 
  public get dropDisableFwdImmediate() {
    return this.getNumberAttribute('drop_disable_fwd_immediate');
  }
  public set dropDisableFwdImmediate(value: number) {
    this._dropDisableFwdImmediate = value;
  }
  public resetDropDisableFwdImmediate() {
    this._dropDisableFwdImmediate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropDisableFwdImmediateInput() {
    return this._dropDisableFwdImmediate;
  }

  // drop_frag_pkt - computed: false, optional: true, required: false
  private _dropFragPkt?: number; 
  public get dropFragPkt() {
    return this.getNumberAttribute('drop_frag_pkt');
  }
  public set dropFragPkt(value: number) {
    this._dropFragPkt = value;
  }
  public resetDropFragPkt() {
    this._dropFragPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFragPktInput() {
    return this._dropFragPkt;
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

  // inbound_forward_dscp - computed: false, optional: true, required: false
  private _inboundForwardDscp?: number; 
  public get inboundForwardDscp() {
    return this.getNumberAttribute('inbound_forward_dscp');
  }
  public set inboundForwardDscp(value: number) {
    this._inboundForwardDscp = value;
  }
  public resetInboundForwardDscp() {
    this._inboundForwardDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundForwardDscpInput() {
    return this._inboundForwardDscp;
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

  // outbound_forward_dscp - computed: false, optional: true, required: false
  private _outboundForwardDscp?: number; 
  public get outboundForwardDscp() {
    return this.getNumberAttribute('outbound_forward_dscp');
  }
  public set outboundForwardDscp(value: number) {
    this._outboundForwardDscp = value;
  }
  public resetOutboundForwardDscp() {
    this._outboundForwardDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundForwardDscpInput() {
    return this._outboundForwardDscp;
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

  // exceed_log_cfg - computed: false, optional: true, required: false
  private _exceedLogCfg = new DdosDstDefaultExceedLogCfgOutputReference(this, "exceed_log_cfg");
  public get exceedLogCfg() {
    return this._exceedLogCfg;
  }
  public putExceedLogCfg(value: DdosDstDefaultExceedLogCfg) {
    this._exceedLogCfg.internalValue = value;
  }
  public resetExceedLogCfg() {
    this._exceedLogCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLogCfgInput() {
    return this._exceedLogCfg.internalValue;
  }

  // exceed_log_dep_cfg - computed: false, optional: true, required: false
  private _exceedLogDepCfg = new DdosDstDefaultExceedLogDepCfgOutputReference(this, "exceed_log_dep_cfg");
  public get exceedLogDepCfg() {
    return this._exceedLogDepCfg;
  }
  public putExceedLogDepCfg(value: DdosDstDefaultExceedLogDepCfg) {
    this._exceedLogDepCfg.internalValue = value;
  }
  public resetExceedLogDepCfg() {
    this._exceedLogDepCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLogDepCfgInput() {
    return this._exceedLogDepCfg.internalValue;
  }

  // ip_proto_list - computed: false, optional: true, required: false
  private _ipProtoList = new DdosDstDefaultIpProtoListStructList(this, "ip_proto_list", false);
  public get ipProtoList() {
    return this._ipProtoList;
  }
  public putIpProtoList(value: DdosDstDefaultIpProtoListStruct[] | cdktf.IResolvable) {
    this._ipProtoList.internalValue = value;
  }
  public resetIpProtoList() {
    this._ipProtoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoListInput() {
    return this._ipProtoList.internalValue;
  }

  // l4_type_list - computed: false, optional: true, required: false
  private _l4TypeList = new DdosDstDefaultL4TypeListStructList(this, "l4_type_list", false);
  public get l4TypeList() {
    return this._l4TypeList;
  }
  public putL4TypeList(value: DdosDstDefaultL4TypeListStruct[] | cdktf.IResolvable) {
    this._l4TypeList.internalValue = value;
  }
  public resetL4TypeList() {
    this._l4TypeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeListInput() {
    return this._l4TypeList.internalValue;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList = new DdosDstDefaultPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: DdosDstDefaultPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }

  // src_port_list - computed: false, optional: true, required: false
  private _srcPortList = new DdosDstDefaultSrcPortListStructList(this, "src_port_list", false);
  public get srcPortList() {
    return this._srcPortList;
  }
  public putSrcPortList(value: DdosDstDefaultSrcPortListStruct[] | cdktf.IResolvable) {
    this._srcPortList.internalValue = value;
  }
  public resetSrcPortList() {
    this._srcPortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortListInput() {
    return this._srcPortList.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstDefaultTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstDefaultTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      age: cdktf.numberToTerraform(this._age),
      apply_policy_on_overflow: cdktf.numberToTerraform(this._applyPolicyOnOverflow),
      default_address_type: cdktf.stringToTerraform(this._defaultAddressType),
      deny: cdktf.numberToTerraform(this._deny),
      disable: cdktf.numberToTerraform(this._disable),
      drop_disable: cdktf.numberToTerraform(this._dropDisable),
      drop_disable_fwd_immediate: cdktf.numberToTerraform(this._dropDisableFwdImmediate),
      drop_frag_pkt: cdktf.numberToTerraform(this._dropFragPkt),
      glid: cdktf.stringToTerraform(this._glid),
      id: cdktf.stringToTerraform(this._id),
      inbound_forward_dscp: cdktf.numberToTerraform(this._inboundForwardDscp),
      log_periodic: cdktf.numberToTerraform(this._logPeriodic),
      max_dynamic_entry_count: cdktf.numberToTerraform(this._maxDynamicEntryCount),
      outbound_forward_dscp: cdktf.numberToTerraform(this._outboundForwardDscp),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      exceed_log_cfg: ddosDstDefaultExceedLogCfgToTerraform(this._exceedLogCfg.internalValue),
      exceed_log_dep_cfg: ddosDstDefaultExceedLogDepCfgToTerraform(this._exceedLogDepCfg.internalValue),
      ip_proto_list: cdktf.listMapper(ddosDstDefaultIpProtoListStructToTerraform, true)(this._ipProtoList.internalValue),
      l4_type_list: cdktf.listMapper(ddosDstDefaultL4TypeListStructToTerraform, true)(this._l4TypeList.internalValue),
      port_list: cdktf.listMapper(ddosDstDefaultPortListStructToTerraform, true)(this._portList.internalValue),
      src_port_list: cdktf.listMapper(ddosDstDefaultSrcPortListStructToTerraform, true)(this._srcPortList.internalValue),
      template: ddosDstDefaultTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      age: {
        value: cdktf.numberToHclTerraform(this._age),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apply_policy_on_overflow: {
        value: cdktf.numberToHclTerraform(this._applyPolicyOnOverflow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_address_type: {
        value: cdktf.stringToHclTerraform(this._defaultAddressType),
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
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_disable: {
        value: cdktf.numberToHclTerraform(this._dropDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_disable_fwd_immediate: {
        value: cdktf.numberToHclTerraform(this._dropDisableFwdImmediate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_frag_pkt: {
        value: cdktf.numberToHclTerraform(this._dropFragPkt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      glid: {
        value: cdktf.stringToHclTerraform(this._glid),
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
      inbound_forward_dscp: {
        value: cdktf.numberToHclTerraform(this._inboundForwardDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_periodic: {
        value: cdktf.numberToHclTerraform(this._logPeriodic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_dynamic_entry_count: {
        value: cdktf.numberToHclTerraform(this._maxDynamicEntryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outbound_forward_dscp: {
        value: cdktf.numberToHclTerraform(this._outboundForwardDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      exceed_log_cfg: {
        value: ddosDstDefaultExceedLogCfgToHclTerraform(this._exceedLogCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDefaultExceedLogCfgList",
      },
      exceed_log_dep_cfg: {
        value: ddosDstDefaultExceedLogDepCfgToHclTerraform(this._exceedLogDepCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDefaultExceedLogDepCfgList",
      },
      ip_proto_list: {
        value: cdktf.listMapperHcl(ddosDstDefaultIpProtoListStructToHclTerraform, true)(this._ipProtoList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDefaultIpProtoListStructList",
      },
      l4_type_list: {
        value: cdktf.listMapperHcl(ddosDstDefaultL4TypeListStructToHclTerraform, true)(this._l4TypeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDefaultL4TypeListStructList",
      },
      port_list: {
        value: cdktf.listMapperHcl(ddosDstDefaultPortListStructToHclTerraform, true)(this._portList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDefaultPortListStructList",
      },
      src_port_list: {
        value: cdktf.listMapperHcl(ddosDstDefaultSrcPortListStructToHclTerraform, true)(this._srcPortList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDefaultSrcPortListStructList",
      },
      template: {
        value: ddosDstDefaultTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDefaultTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
