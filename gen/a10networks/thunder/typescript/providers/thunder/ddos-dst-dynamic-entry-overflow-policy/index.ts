// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstDynamicEntryOverflowPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'ip': ip; 'ipv6': ipv6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#default_address_type DdosDstDynamicEntryOverflowPolicy#default_address_type}
  */
  readonly defaultAddressType: string;
  /**
  * Disable certain drops during packet processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#drop_disable DdosDstDynamicEntryOverflowPolicy#drop_disable}
  */
  readonly dropDisable?: number;
  /**
  * Immediately forward L4 drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#drop_disable_fwd_immediate DdosDstDynamicEntryOverflowPolicy#drop_disable_fwd_immediate}
  */
  readonly dropDisableFwdImmediate?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#glid DdosDstDynamicEntryOverflowPolicy#glid}
  */
  readonly glid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#id DdosDstDynamicEntryOverflowPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * To set dscp value for inbound packets (DSCP Value for the clear traffic marking)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#inbound_forward_dscp DdosDstDynamicEntryOverflowPolicy#inbound_forward_dscp}
  */
  readonly inboundForwardDscp?: number;
  /**
  * Enable periodic log while event is continuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#log_periodic DdosDstDynamicEntryOverflowPolicy#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * To set dscp value for outbound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#outbound_forward_dscp DdosDstDynamicEntryOverflowPolicy#outbound_forward_dscp}
  */
  readonly outboundForwardDscp?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#user_tag DdosDstDynamicEntryOverflowPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#uuid DdosDstDynamicEntryOverflowPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * exceed_log_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#exceed_log_cfg DdosDstDynamicEntryOverflowPolicy#exceed_log_cfg}
  */
  readonly exceedLogCfg?: DdosDstDynamicEntryOverflowPolicyExceedLogCfg;
  /**
  * exceed_log_dep_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#exceed_log_dep_cfg DdosDstDynamicEntryOverflowPolicy#exceed_log_dep_cfg}
  */
  readonly exceedLogDepCfg?: DdosDstDynamicEntryOverflowPolicyExceedLogDepCfg;
  /**
  * ip_proto_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#ip_proto_list DdosDstDynamicEntryOverflowPolicy#ip_proto_list}
  */
  readonly ipProtoList?: DdosDstDynamicEntryOverflowPolicyIpProtoListStruct[] | cdktf.IResolvable;
  /**
  * l4_type_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#l4_type_list DdosDstDynamicEntryOverflowPolicy#l4_type_list}
  */
  readonly l4TypeList?: DdosDstDynamicEntryOverflowPolicyL4TypeListStruct[] | cdktf.IResolvable;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#port_list DdosDstDynamicEntryOverflowPolicy#port_list}
  */
  readonly portList?: DdosDstDynamicEntryOverflowPolicyPortListStruct[] | cdktf.IResolvable;
  /**
  * src_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#src_port_list DdosDstDynamicEntryOverflowPolicy#src_port_list}
  */
  readonly srcPortList?: DdosDstDynamicEntryOverflowPolicySrcPortListStruct[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#template DdosDstDynamicEntryOverflowPolicy#template}
  */
  readonly template?: DdosDstDynamicEntryOverflowPolicyTemplate;
}
export interface DdosDstDynamicEntryOverflowPolicyExceedLogCfg {
  /**
  * Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#log_enable DdosDstDynamicEntryOverflowPolicy#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Turn on sflow sample with log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#with_sflow_sample DdosDstDynamicEntryOverflowPolicy#with_sflow_sample}
  */
  readonly withSflowSample?: number;
}

export function ddosDstDynamicEntryOverflowPolicyExceedLogCfgToTerraform(struct?: DdosDstDynamicEntryOverflowPolicyExceedLogCfgOutputReference | DdosDstDynamicEntryOverflowPolicyExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
    with_sflow_sample: cdktf.numberToTerraform(struct!.withSflowSample),
  }
}


export function ddosDstDynamicEntryOverflowPolicyExceedLogCfgToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicyExceedLogCfgOutputReference | DdosDstDynamicEntryOverflowPolicyExceedLogCfg): any {
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

export class DdosDstDynamicEntryOverflowPolicyExceedLogCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDynamicEntryOverflowPolicyExceedLogCfg | undefined {
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

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicyExceedLogCfg | undefined) {
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
export interface DdosDstDynamicEntryOverflowPolicyExceedLogDepCfg {
  /**
  * (Deprecated)Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#exceed_log_enable DdosDstDynamicEntryOverflowPolicy#exceed_log_enable}
  */
  readonly exceedLogEnable?: number;
  /**
  * Turn on sflow sample with log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#log_with_sflow_dep DdosDstDynamicEntryOverflowPolicy#log_with_sflow_dep}
  */
  readonly logWithSflowDep?: number;
}

export function ddosDstDynamicEntryOverflowPolicyExceedLogDepCfgToTerraform(struct?: DdosDstDynamicEntryOverflowPolicyExceedLogDepCfgOutputReference | DdosDstDynamicEntryOverflowPolicyExceedLogDepCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exceed_log_enable: cdktf.numberToTerraform(struct!.exceedLogEnable),
    log_with_sflow_dep: cdktf.numberToTerraform(struct!.logWithSflowDep),
  }
}


export function ddosDstDynamicEntryOverflowPolicyExceedLogDepCfgToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicyExceedLogDepCfgOutputReference | DdosDstDynamicEntryOverflowPolicyExceedLogDepCfg): any {
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

export class DdosDstDynamicEntryOverflowPolicyExceedLogDepCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDynamicEntryOverflowPolicyExceedLogDepCfg | undefined {
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

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicyExceedLogDepCfg | undefined) {
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
export interface DdosDstDynamicEntryOverflowPolicyIpProtoListTemplate {
  /**
  * DDOS other template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#other DdosDstDynamicEntryOverflowPolicy#other}
  */
  readonly other?: string;
}

export function ddosDstDynamicEntryOverflowPolicyIpProtoListTemplateToTerraform(struct?: DdosDstDynamicEntryOverflowPolicyIpProtoListTemplateOutputReference | DdosDstDynamicEntryOverflowPolicyIpProtoListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
  }
}


export function ddosDstDynamicEntryOverflowPolicyIpProtoListTemplateToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicyIpProtoListTemplateOutputReference | DdosDstDynamicEntryOverflowPolicyIpProtoListTemplate): any {
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

export class DdosDstDynamicEntryOverflowPolicyIpProtoListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDynamicEntryOverflowPolicyIpProtoListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicyIpProtoListTemplate | undefined) {
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
export interface DdosDstDynamicEntryOverflowPolicyIpProtoListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#deny DdosDstDynamicEntryOverflowPolicy#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#glid DdosDstDynamicEntryOverflowPolicy#glid}
  */
  readonly glid?: string;
  /**
  * Protocol Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#port_num DdosDstDynamicEntryOverflowPolicy#port_num}
  */
  readonly portNum: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#user_tag DdosDstDynamicEntryOverflowPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#uuid DdosDstDynamicEntryOverflowPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#template DdosDstDynamicEntryOverflowPolicy#template}
  */
  readonly template?: DdosDstDynamicEntryOverflowPolicyIpProtoListTemplate;
}

export function ddosDstDynamicEntryOverflowPolicyIpProtoListStructToTerraform(struct?: DdosDstDynamicEntryOverflowPolicyIpProtoListStruct | cdktf.IResolvable): any {
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
    template: ddosDstDynamicEntryOverflowPolicyIpProtoListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstDynamicEntryOverflowPolicyIpProtoListStructToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicyIpProtoListStruct | cdktf.IResolvable): any {
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
      value: ddosDstDynamicEntryOverflowPolicyIpProtoListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstDynamicEntryOverflowPolicyIpProtoListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDynamicEntryOverflowPolicyIpProtoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstDynamicEntryOverflowPolicyIpProtoListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicyIpProtoListStruct | cdktf.IResolvable | undefined) {
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
  private _template = new DdosDstDynamicEntryOverflowPolicyIpProtoListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstDynamicEntryOverflowPolicyIpProtoListTemplate) {
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

export class DdosDstDynamicEntryOverflowPolicyIpProtoListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstDynamicEntryOverflowPolicyIpProtoListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstDynamicEntryOverflowPolicyIpProtoListStructOutputReference {
    return new DdosDstDynamicEntryOverflowPolicyIpProtoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfg {
  /**
  * Only decapsulate GRE packet with this key (Hexadecimal 0x0-0xFFFFFFFF,decimal 0-4294967295)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#key DdosDstDynamicEntryOverflowPolicy#key}
  */
  readonly key?: string;
}

export function ddosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfgToTerraform(struct?: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ddosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfgToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable): any {
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

export class DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable | undefined) {
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

export class DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfgList extends cdktf.ComplexList {
  public internalValue? : DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfgOutputReference {
    return new DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecap {
  /**
  * Enable GRE Tunnel decapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#gre_decap DdosDstDynamicEntryOverflowPolicy#gre_decap}
  */
  readonly greDecap?: number;
  /**
  * Enable IP Tunnel decapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#ip_decap DdosDstDynamicEntryOverflowPolicy#ip_decap}
  */
  readonly ipDecap?: number;
  /**
  * key_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#key_cfg DdosDstDynamicEntryOverflowPolicy#key_cfg}
  */
  readonly keyCfg?: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfg[] | cdktf.IResolvable;
}

export function ddosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapToTerraform(struct?: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapOutputReference | DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_decap: cdktf.numberToTerraform(struct!.greDecap),
    ip_decap: cdktf.numberToTerraform(struct!.ipDecap),
    key_cfg: cdktf.listMapper(ddosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfgToTerraform, true)(struct!.keyCfg),
  }
}


export function ddosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapOutputReference | DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecap): any {
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
      value: cdktf.listMapperHcl(ddosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfgToHclTerraform, true)(struct!.keyCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecap | undefined {
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

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecap | undefined) {
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
  private _keyCfg = new DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfgList(this, "key_cfg", false);
  public get keyCfg() {
    return this._keyCfg;
  }
  public putKeyCfg(value: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapKeyCfg[] | cdktf.IResolvable) {
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
export interface DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimit {
  /**
  * Enable inner IP rate limiting on GRE traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#gre_rate_limit DdosDstDynamicEntryOverflowPolicy#gre_rate_limit}
  */
  readonly greRateLimit?: number;
  /**
  * Enable inner IP rate limiting on IPinIP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#ip_rate_limit DdosDstDynamicEntryOverflowPolicy#ip_rate_limit}
  */
  readonly ipRateLimit?: number;
}

export function ddosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimitToTerraform(struct?: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimitOutputReference | DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_rate_limit: cdktf.numberToTerraform(struct!.greRateLimit),
    ip_rate_limit: cdktf.numberToTerraform(struct!.ipRateLimit),
  }
}


export function ddosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimitToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimitOutputReference | DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimit): any {
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

export class DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimit | undefined {
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

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimit | undefined) {
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
export interface DdosDstDynamicEntryOverflowPolicyL4TypeListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#deny DdosDstDynamicEntryOverflowPolicy#deny}
  */
  readonly deny?: number;
  /**
  * Drop fragmented packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#drop_frag_pkt DdosDstDynamicEntryOverflowPolicy#drop_frag_pkt}
  */
  readonly dropFragPkt?: number;
  /**
  * 'disable': disable; 'enable': enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#drop_on_no_port_match DdosDstDynamicEntryOverflowPolicy#drop_on_no_port_match}
  */
  readonly dropOnNoPortMatch?: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#glid DdosDstDynamicEntryOverflowPolicy#glid}
  */
  readonly glid?: string;
  /**
  * Maximum number of re-transmit SYN per flow. Exceed action set to Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#max_rexmit_syn_per_flow DdosDstDynamicEntryOverflowPolicy#max_rexmit_syn_per_flow}
  */
  readonly maxRexmitSynPerFlow?: number;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#protocol DdosDstDynamicEntryOverflowPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Enable stateful tracking of sessions (Default is stateless)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#stateful DdosDstDynamicEntryOverflowPolicy#stateful}
  */
  readonly stateful?: number;
  /**
  * 'send-rst': Send RST to client upon client ACK; 'force-rst-by-ack': Force client RST via the use of ACK; 'force-rst-by-synack': Force client RST via the use of bad SYN|ACK; 'disable': Disable TCP SYN Authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#syn_auth DdosDstDynamicEntryOverflowPolicy#syn_auth}
  */
  readonly synAuth?: string;
  /**
  * Enable SYN Cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#syn_cookie DdosDstDynamicEntryOverflowPolicy#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * Send reset to client when rate exceeds or session ages out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#tcp_reset_client DdosDstDynamicEntryOverflowPolicy#tcp_reset_client}
  */
  readonly tcpResetClient?: number;
  /**
  * Send reset to server when rate exceeds or session ages out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#tcp_reset_server DdosDstDynamicEntryOverflowPolicy#tcp_reset_server}
  */
  readonly tcpResetServer?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#user_tag DdosDstDynamicEntryOverflowPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#uuid DdosDstDynamicEntryOverflowPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * tunnel_decap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#tunnel_decap DdosDstDynamicEntryOverflowPolicy#tunnel_decap}
  */
  readonly tunnelDecap?: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecap;
  /**
  * tunnel_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#tunnel_rate_limit DdosDstDynamicEntryOverflowPolicy#tunnel_rate_limit}
  */
  readonly tunnelRateLimit?: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimit;
}

export function ddosDstDynamicEntryOverflowPolicyL4TypeListStructToTerraform(struct?: DdosDstDynamicEntryOverflowPolicyL4TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
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
    tunnel_decap: ddosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapToTerraform(struct!.tunnelDecap),
    tunnel_rate_limit: ddosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimitToTerraform(struct!.tunnelRateLimit),
  }
}


export function ddosDstDynamicEntryOverflowPolicyL4TypeListStructToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicyL4TypeListStruct | cdktf.IResolvable): any {
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
      value: ddosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapToHclTerraform(struct!.tunnelDecap),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapList",
    },
    tunnel_rate_limit: {
      value: ddosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimitToHclTerraform(struct!.tunnelRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDynamicEntryOverflowPolicyL4TypeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstDynamicEntryOverflowPolicyL4TypeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
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

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicyL4TypeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
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
  private _tunnelDecap = new DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecapOutputReference(this, "tunnel_decap");
  public get tunnelDecap() {
    return this._tunnelDecap;
  }
  public putTunnelDecap(value: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelDecap) {
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
  private _tunnelRateLimit = new DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimitOutputReference(this, "tunnel_rate_limit");
  public get tunnelRateLimit() {
    return this._tunnelRateLimit;
  }
  public putTunnelRateLimit(value: DdosDstDynamicEntryOverflowPolicyL4TypeListTunnelRateLimit) {
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

export class DdosDstDynamicEntryOverflowPolicyL4TypeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstDynamicEntryOverflowPolicyL4TypeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstDynamicEntryOverflowPolicyL4TypeListStructOutputReference {
    return new DdosDstDynamicEntryOverflowPolicyL4TypeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstDynamicEntryOverflowPolicyPortListTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#dns DdosDstDynamicEntryOverflowPolicy#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#http DdosDstDynamicEntryOverflowPolicy#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#sip DdosDstDynamicEntryOverflowPolicy#sip}
  */
  readonly sip?: string;
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#ssl_l4 DdosDstDynamicEntryOverflowPolicy#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#tcp DdosDstDynamicEntryOverflowPolicy#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#udp DdosDstDynamicEntryOverflowPolicy#udp}
  */
  readonly udp?: string;
}

export function ddosDstDynamicEntryOverflowPolicyPortListTemplateToTerraform(struct?: DdosDstDynamicEntryOverflowPolicyPortListTemplateOutputReference | DdosDstDynamicEntryOverflowPolicyPortListTemplate): any {
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


export function ddosDstDynamicEntryOverflowPolicyPortListTemplateToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicyPortListTemplateOutputReference | DdosDstDynamicEntryOverflowPolicyPortListTemplate): any {
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

export class DdosDstDynamicEntryOverflowPolicyPortListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDynamicEntryOverflowPolicyPortListTemplate | undefined {
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

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicyPortListTemplate | undefined) {
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
export interface DdosDstDynamicEntryOverflowPolicyPortListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#deny DdosDstDynamicEntryOverflowPolicy#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#glid DdosDstDynamicEntryOverflowPolicy#glid}
  */
  readonly glid?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#port_num DdosDstDynamicEntryOverflowPolicy#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-tcp': dns-tcp; 'dns-udp': dns-udp; 'http': http; 'tcp': tcp; 'udp': udp; 'ssl-l4': ssl-l4; 'sip-udp': sip-udp; 'sip-tcp': sip-tcp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#protocol DdosDstDynamicEntryOverflowPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#user_tag DdosDstDynamicEntryOverflowPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#uuid DdosDstDynamicEntryOverflowPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#template DdosDstDynamicEntryOverflowPolicy#template}
  */
  readonly template?: DdosDstDynamicEntryOverflowPolicyPortListTemplate;
}

export function ddosDstDynamicEntryOverflowPolicyPortListStructToTerraform(struct?: DdosDstDynamicEntryOverflowPolicyPortListStruct | cdktf.IResolvable): any {
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
    template: ddosDstDynamicEntryOverflowPolicyPortListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstDynamicEntryOverflowPolicyPortListStructToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicyPortListStruct | cdktf.IResolvable): any {
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
      value: ddosDstDynamicEntryOverflowPolicyPortListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstDynamicEntryOverflowPolicyPortListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDynamicEntryOverflowPolicyPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstDynamicEntryOverflowPolicyPortListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicyPortListStruct | cdktf.IResolvable | undefined) {
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
  private _template = new DdosDstDynamicEntryOverflowPolicyPortListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstDynamicEntryOverflowPolicyPortListTemplate) {
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

export class DdosDstDynamicEntryOverflowPolicyPortListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstDynamicEntryOverflowPolicyPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstDynamicEntryOverflowPolicyPortListStructOutputReference {
    return new DdosDstDynamicEntryOverflowPolicyPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstDynamicEntryOverflowPolicySrcPortListTemplate {
  /**
  * DDOS tcp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#src_tcp DdosDstDynamicEntryOverflowPolicy#src_tcp}
  */
  readonly srcTcp?: string;
  /**
  * DDOS udp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#src_udp DdosDstDynamicEntryOverflowPolicy#src_udp}
  */
  readonly srcUdp?: string;
}

export function ddosDstDynamicEntryOverflowPolicySrcPortListTemplateToTerraform(struct?: DdosDstDynamicEntryOverflowPolicySrcPortListTemplateOutputReference | DdosDstDynamicEntryOverflowPolicySrcPortListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_tcp: cdktf.stringToTerraform(struct!.srcTcp),
    src_udp: cdktf.stringToTerraform(struct!.srcUdp),
  }
}


export function ddosDstDynamicEntryOverflowPolicySrcPortListTemplateToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicySrcPortListTemplateOutputReference | DdosDstDynamicEntryOverflowPolicySrcPortListTemplate): any {
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

export class DdosDstDynamicEntryOverflowPolicySrcPortListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDynamicEntryOverflowPolicySrcPortListTemplate | undefined {
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

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicySrcPortListTemplate | undefined) {
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
export interface DdosDstDynamicEntryOverflowPolicySrcPortListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#deny DdosDstDynamicEntryOverflowPolicy#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#glid DdosDstDynamicEntryOverflowPolicy#glid}
  */
  readonly glid?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#port_num DdosDstDynamicEntryOverflowPolicy#port_num}
  */
  readonly portNum: number;
  /**
  * 'udp': udp; 'tcp': tcp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#protocol DdosDstDynamicEntryOverflowPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#user_tag DdosDstDynamicEntryOverflowPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#uuid DdosDstDynamicEntryOverflowPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#template DdosDstDynamicEntryOverflowPolicy#template}
  */
  readonly template?: DdosDstDynamicEntryOverflowPolicySrcPortListTemplate;
}

export function ddosDstDynamicEntryOverflowPolicySrcPortListStructToTerraform(struct?: DdosDstDynamicEntryOverflowPolicySrcPortListStruct | cdktf.IResolvable): any {
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
    template: ddosDstDynamicEntryOverflowPolicySrcPortListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstDynamicEntryOverflowPolicySrcPortListStructToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicySrcPortListStruct | cdktf.IResolvable): any {
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
      value: ddosDstDynamicEntryOverflowPolicySrcPortListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstDynamicEntryOverflowPolicySrcPortListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDynamicEntryOverflowPolicySrcPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstDynamicEntryOverflowPolicySrcPortListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicySrcPortListStruct | cdktf.IResolvable | undefined) {
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
  private _template = new DdosDstDynamicEntryOverflowPolicySrcPortListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstDynamicEntryOverflowPolicySrcPortListTemplate) {
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

export class DdosDstDynamicEntryOverflowPolicySrcPortListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstDynamicEntryOverflowPolicySrcPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstDynamicEntryOverflowPolicySrcPortListStructOutputReference {
    return new DdosDstDynamicEntryOverflowPolicySrcPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstDynamicEntryOverflowPolicyTemplate {
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#logging DdosDstDynamicEntryOverflowPolicy#logging}
  */
  readonly logging?: string;
}

export function ddosDstDynamicEntryOverflowPolicyTemplateToTerraform(struct?: DdosDstDynamicEntryOverflowPolicyTemplateOutputReference | DdosDstDynamicEntryOverflowPolicyTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function ddosDstDynamicEntryOverflowPolicyTemplateToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicyTemplateOutputReference | DdosDstDynamicEntryOverflowPolicyTemplate): any {
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

export class DdosDstDynamicEntryOverflowPolicyTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDynamicEntryOverflowPolicyTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicyTemplate | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy thunder_ddos_dst_dynamic_entry_overflow_policy}
*/
export class DdosDstDynamicEntryOverflowPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_dynamic_entry_overflow_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstDynamicEntryOverflowPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstDynamicEntryOverflowPolicy to import
  * @param importFromId The id of the existing DdosDstDynamicEntryOverflowPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstDynamicEntryOverflowPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_dynamic_entry_overflow_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_dynamic_entry_overflow_policy thunder_ddos_dst_dynamic_entry_overflow_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstDynamicEntryOverflowPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstDynamicEntryOverflowPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_dynamic_entry_overflow_policy',
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
    this._defaultAddressType = config.defaultAddressType;
    this._dropDisable = config.dropDisable;
    this._dropDisableFwdImmediate = config.dropDisableFwdImmediate;
    this._glid = config.glid;
    this._id = config.id;
    this._inboundForwardDscp = config.inboundForwardDscp;
    this._logPeriodic = config.logPeriodic;
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
  private _exceedLogCfg = new DdosDstDynamicEntryOverflowPolicyExceedLogCfgOutputReference(this, "exceed_log_cfg");
  public get exceedLogCfg() {
    return this._exceedLogCfg;
  }
  public putExceedLogCfg(value: DdosDstDynamicEntryOverflowPolicyExceedLogCfg) {
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
  private _exceedLogDepCfg = new DdosDstDynamicEntryOverflowPolicyExceedLogDepCfgOutputReference(this, "exceed_log_dep_cfg");
  public get exceedLogDepCfg() {
    return this._exceedLogDepCfg;
  }
  public putExceedLogDepCfg(value: DdosDstDynamicEntryOverflowPolicyExceedLogDepCfg) {
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
  private _ipProtoList = new DdosDstDynamicEntryOverflowPolicyIpProtoListStructList(this, "ip_proto_list", false);
  public get ipProtoList() {
    return this._ipProtoList;
  }
  public putIpProtoList(value: DdosDstDynamicEntryOverflowPolicyIpProtoListStruct[] | cdktf.IResolvable) {
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
  private _l4TypeList = new DdosDstDynamicEntryOverflowPolicyL4TypeListStructList(this, "l4_type_list", false);
  public get l4TypeList() {
    return this._l4TypeList;
  }
  public putL4TypeList(value: DdosDstDynamicEntryOverflowPolicyL4TypeListStruct[] | cdktf.IResolvable) {
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
  private _portList = new DdosDstDynamicEntryOverflowPolicyPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: DdosDstDynamicEntryOverflowPolicyPortListStruct[] | cdktf.IResolvable) {
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
  private _srcPortList = new DdosDstDynamicEntryOverflowPolicySrcPortListStructList(this, "src_port_list", false);
  public get srcPortList() {
    return this._srcPortList;
  }
  public putSrcPortList(value: DdosDstDynamicEntryOverflowPolicySrcPortListStruct[] | cdktf.IResolvable) {
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
  private _template = new DdosDstDynamicEntryOverflowPolicyTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstDynamicEntryOverflowPolicyTemplate) {
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
      default_address_type: cdktf.stringToTerraform(this._defaultAddressType),
      drop_disable: cdktf.numberToTerraform(this._dropDisable),
      drop_disable_fwd_immediate: cdktf.numberToTerraform(this._dropDisableFwdImmediate),
      glid: cdktf.stringToTerraform(this._glid),
      id: cdktf.stringToTerraform(this._id),
      inbound_forward_dscp: cdktf.numberToTerraform(this._inboundForwardDscp),
      log_periodic: cdktf.numberToTerraform(this._logPeriodic),
      outbound_forward_dscp: cdktf.numberToTerraform(this._outboundForwardDscp),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      exceed_log_cfg: ddosDstDynamicEntryOverflowPolicyExceedLogCfgToTerraform(this._exceedLogCfg.internalValue),
      exceed_log_dep_cfg: ddosDstDynamicEntryOverflowPolicyExceedLogDepCfgToTerraform(this._exceedLogDepCfg.internalValue),
      ip_proto_list: cdktf.listMapper(ddosDstDynamicEntryOverflowPolicyIpProtoListStructToTerraform, true)(this._ipProtoList.internalValue),
      l4_type_list: cdktf.listMapper(ddosDstDynamicEntryOverflowPolicyL4TypeListStructToTerraform, true)(this._l4TypeList.internalValue),
      port_list: cdktf.listMapper(ddosDstDynamicEntryOverflowPolicyPortListStructToTerraform, true)(this._portList.internalValue),
      src_port_list: cdktf.listMapper(ddosDstDynamicEntryOverflowPolicySrcPortListStructToTerraform, true)(this._srcPortList.internalValue),
      template: ddosDstDynamicEntryOverflowPolicyTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_address_type: {
        value: cdktf.stringToHclTerraform(this._defaultAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: ddosDstDynamicEntryOverflowPolicyExceedLogCfgToHclTerraform(this._exceedLogCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDynamicEntryOverflowPolicyExceedLogCfgList",
      },
      exceed_log_dep_cfg: {
        value: ddosDstDynamicEntryOverflowPolicyExceedLogDepCfgToHclTerraform(this._exceedLogDepCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDynamicEntryOverflowPolicyExceedLogDepCfgList",
      },
      ip_proto_list: {
        value: cdktf.listMapperHcl(ddosDstDynamicEntryOverflowPolicyIpProtoListStructToHclTerraform, true)(this._ipProtoList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDynamicEntryOverflowPolicyIpProtoListStructList",
      },
      l4_type_list: {
        value: cdktf.listMapperHcl(ddosDstDynamicEntryOverflowPolicyL4TypeListStructToHclTerraform, true)(this._l4TypeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDynamicEntryOverflowPolicyL4TypeListStructList",
      },
      port_list: {
        value: cdktf.listMapperHcl(ddosDstDynamicEntryOverflowPolicyPortListStructToHclTerraform, true)(this._portList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDynamicEntryOverflowPolicyPortListStructList",
      },
      src_port_list: {
        value: cdktf.listMapperHcl(ddosDstDynamicEntryOverflowPolicySrcPortListStructToHclTerraform, true)(this._srcPortList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDynamicEntryOverflowPolicySrcPortListStructList",
      },
      template: {
        value: ddosDstDynamicEntryOverflowPolicyTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDynamicEntryOverflowPolicyTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
