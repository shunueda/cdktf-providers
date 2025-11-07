// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * BGP advertised
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#advertised_enable DdosDstEntry#advertised_enable}
  */
  readonly advertisedEnable?: number;
  /**
  * Blackhole destination entry for X minutes upon glid limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#blackhole_on_glid_exceed DdosDstEntry#blackhole_on_glid_exceed}
  */
  readonly blackholeOnGlidExceed?: number;
  /**
  * Description for this Destination Entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#description DdosDstEntry#description}
  */
  readonly description?: string;
  /**
  * Destination NAT IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dest_nat_ip DdosDstEntry#dest_nat_ip}
  */
  readonly destNatIp?: string;
  /**
  * Destination NAT IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dest_nat_ipv6 DdosDstEntry#dest_nat_ipv6}
  */
  readonly destNatIpv6?: string;
  /**
  * Disable certain drops during packet processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#drop_disable DdosDstEntry#drop_disable}
  */
  readonly dropDisable?: number;
  /**
  * Immediately forward L4 drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#drop_disable_fwd_immediate DdosDstEntry#drop_disable_fwd_immediate}
  */
  readonly dropDisableFwdImmediate?: number;
  /**
  * Drop fragmented packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#drop_frag_pkt DdosDstEntry#drop_frag_pkt}
  */
  readonly dropFragPkt?: number;
  /**
  * Drop if no match with src-based-policy class-list, and default is not configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#drop_on_no_src_dst_default DdosDstEntry#drop_on_no_src_dst_default}
  */
  readonly dropOnNoSrcDstDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dst_entry_name DdosDstEntry#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#id DdosDstEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * To set dscp value for inbound packets (DSCP Value for the clear traffic marking)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#inbound_forward_dscp DdosDstEntry#inbound_forward_dscp}
  */
  readonly inboundForwardDscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ip_addr DdosDstEntry#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ipv6_addr DdosDstEntry#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Enable periodic log while event is continuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_periodic DdosDstEntry#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * 'protection': Protection mode; 'bypass': Bypass mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#operational_mode DdosDstEntry#operational_mode}
  */
  readonly operationalMode?: string;
  /**
  * To set dscp value for outbound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#outbound_forward_dscp DdosDstEntry#outbound_forward_dscp}
  */
  readonly outboundForwardDscp?: number;
  /**
  * to enable pattern recognition hardware filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#pattern_recognition_hw_filter_enable DdosDstEntry#pattern_recognition_hw_filter_enable}
  */
  readonly patternRecognitionHwFilterEnable?: number;
  /**
  * 'high': High sensitive pattern recognition; 'medium': Medium sensitive pattern recognition; 'low': Low sensitive pattern recognition;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#pattern_recognition_sensitivity DdosDstEntry#pattern_recognition_sensitivity}
  */
  readonly patternRecognitionSensitivity?: string;
  /**
  * Disable Reporting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#reporting_disabled DdosDstEntry#reporting_disabled}
  */
  readonly reportingDisabled?: number;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#set_counter_base_val DdosDstEntry#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Configure source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#source_nat_pool DdosDstEntry#source_nat_pool}
  */
  readonly sourceNatPool?: string;
  /**
  * IP Subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#subnet_ip_addr DdosDstEntry#subnet_ip_addr}
  */
  readonly subnetIpAddr?: string;
  /**
  * IPV6 Subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#subnet_ipv6_addr DdosDstEntry#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr?: string;
  /**
  * 'default': Distribute traffic to one slot using default distribution mechanism; 'source-ip-based': Distribute traffic between slots, based on source ip;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#traffic_distribution_mode DdosDstEntry#traffic_distribution_mode}
  */
  readonly trafficDistributionMode?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * capture_config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#capture_config_list DdosDstEntry#capture_config_list}
  */
  readonly captureConfigList?: DdosDstEntryCaptureConfigListStruct[] | cdktf.IResolvable;
  /**
  * dynamic_entry_overflow_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dynamic_entry_overflow_policy_list DdosDstEntry#dynamic_entry_overflow_policy_list}
  */
  readonly dynamicEntryOverflowPolicyList?: DdosDstEntryDynamicEntryOverflowPolicyListStruct[] | cdktf.IResolvable;
  /**
  * enable_top_k block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#enable_top_k DdosDstEntry#enable_top_k}
  */
  readonly enableTopK?: DdosDstEntryEnableTopK[] | cdktf.IResolvable;
  /**
  * exceed_log_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#exceed_log_cfg DdosDstEntry#exceed_log_cfg}
  */
  readonly exceedLogCfg?: DdosDstEntryExceedLogCfg;
  /**
  * exceed_log_dep_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#exceed_log_dep_cfg DdosDstEntry#exceed_log_dep_cfg}
  */
  readonly exceedLogDepCfg?: DdosDstEntryExceedLogDepCfg;
  /**
  * glid_exceed_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid_exceed_action DdosDstEntry#glid_exceed_action}
  */
  readonly glidExceedAction?: DdosDstEntryGlidExceedAction;
  /**
  * hw_blacklist_blocking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#hw_blacklist_blocking DdosDstEntry#hw_blacklist_blocking}
  */
  readonly hwBlacklistBlocking?: DdosDstEntryHwBlacklistBlocking;
  /**
  * ip_proto_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ip_proto_list DdosDstEntry#ip_proto_list}
  */
  readonly ipProtoList?: DdosDstEntryIpProtoListStruct[] | cdktf.IResolvable;
  /**
  * l4_type_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#l4_type_list DdosDstEntry#l4_type_list}
  */
  readonly l4TypeList?: DdosDstEntryL4TypeListStruct[] | cdktf.IResolvable;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#port_list DdosDstEntry#port_list}
  */
  readonly portList?: DdosDstEntryPortListStruct[] | cdktf.IResolvable;
  /**
  * port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#port_range_list DdosDstEntry#port_range_list}
  */
  readonly portRangeList?: DdosDstEntryPortRangeListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sampling_enable DdosDstEntry#sampling_enable}
  */
  readonly samplingEnable?: DdosDstEntrySamplingEnable[] | cdktf.IResolvable;
  /**
  * sflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow DdosDstEntry#sflow}
  */
  readonly sflow?: DdosDstEntrySflow;
  /**
  * src_dst_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_dst_pair DdosDstEntry#src_dst_pair}
  */
  readonly srcDstPair?: DdosDstEntrySrcDstPair;
  /**
  * src_dst_pair_class_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_dst_pair_class_list_list DdosDstEntry#src_dst_pair_class_list_list}
  */
  readonly srcDstPairClassListList?: DdosDstEntrySrcDstPairClassListListStruct[] | cdktf.IResolvable;
  /**
  * src_dst_pair_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_dst_pair_policy_list DdosDstEntry#src_dst_pair_policy_list}
  */
  readonly srcDstPairPolicyList?: DdosDstEntrySrcDstPairPolicyListStruct[] | cdktf.IResolvable;
  /**
  * src_dst_pair_settings_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_dst_pair_settings_list DdosDstEntry#src_dst_pair_settings_list}
  */
  readonly srcDstPairSettingsList?: DdosDstEntrySrcDstPairSettingsListStruct[] | cdktf.IResolvable;
  /**
  * src_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_port_list DdosDstEntry#src_port_list}
  */
  readonly srcPortList?: DdosDstEntrySrcPortListStruct[] | cdktf.IResolvable;
  /**
  * src_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_port_range_list DdosDstEntry#src_port_range_list}
  */
  readonly srcPortRangeList?: DdosDstEntrySrcPortRangeListStruct[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntryTemplate;
  /**
  * topk_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#topk_destinations DdosDstEntry#topk_destinations}
  */
  readonly topkDestinations?: DdosDstEntryTopkDestinations;
}
export interface DdosDstEntryCaptureConfigListStruct {
  /**
  * 'drop': Apply capture-config to dropped packets; 'forward': Apply capture-config to forwarded packets; 'all': Apply capture-config to both dropped and forwarded packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#mode DdosDstEntry#mode}
  */
  readonly mode?: string;
  /**
  * Capture-config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#name DdosDstEntry#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryCaptureConfigListStructToTerraform(struct?: DdosDstEntryCaptureConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryCaptureConfigListStructToHclTerraform(struct?: DdosDstEntryCaptureConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryCaptureConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryCaptureConfigListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryCaptureConfigListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

export class DdosDstEntryCaptureConfigListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryCaptureConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryCaptureConfigListStructOutputReference {
    return new DdosDstEntryCaptureConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dns DdosDstEntry#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#http DdosDstEntry#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sip DdosDstEntry#sip}
  */
  readonly sip?: string;
  /**
  * DDOS SSL-L4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ssl_l4 DdosDstEntry#ssl_l4}
  */
  readonly sslL4?: string;
}

export function ddosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplateToTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplateOutputReference | DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    http: cdktf.stringToTerraform(struct!.http),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
  }
}


export function ddosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplateToHclTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplateOutputReference | DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplate): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplate | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._http = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._http = value.http;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
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
}
export interface DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStruct {
  /**
  * 'dns': dns; 'http': http; 'ssl-l4': ssl-l4; 'sip': sip;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplate;
}

export function ddosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStructToTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStructToHclTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: ddosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
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
  private _template = new DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListTemplate) {
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

export class DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStructOutputReference {
    return new DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryDynamicEntryOverflowPolicyListExceedLogCfg {
  /**
  * Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_enable DdosDstEntry#log_enable}
  */
  readonly logEnable?: number;
}

export function ddosDstEntryDynamicEntryOverflowPolicyListExceedLogCfgToTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListExceedLogCfgOutputReference | DdosDstEntryDynamicEntryOverflowPolicyListExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
  }
}


export function ddosDstEntryDynamicEntryOverflowPolicyListExceedLogCfgToHclTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListExceedLogCfgOutputReference | DdosDstEntryDynamicEntryOverflowPolicyListExceedLogCfg): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryDynamicEntryOverflowPolicyListExceedLogCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryDynamicEntryOverflowPolicyListExceedLogCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryDynamicEntryOverflowPolicyListExceedLogCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logEnable = value.logEnable;
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
}
export interface DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplate {
  /**
  * DDOS OTHER template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#other DdosDstEntry#other}
  */
  readonly other?: string;
  /**
  * DDOS TCP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#tcp DdosDstEntry#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS icmp-v4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v4 DdosDstEntry#template_icmp_v4}
  */
  readonly templateIcmpV4?: string;
  /**
  * DDOS icmp-v6 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v6 DdosDstEntry#template_icmp_v6}
  */
  readonly templateIcmpV6?: string;
  /**
  * DDOS UDP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#udp DdosDstEntry#udp}
  */
  readonly udp?: string;
}

export function ddosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplateToTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplateOutputReference | DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    template_icmp_v4: cdktf.stringToTerraform(struct!.templateIcmpV4),
    template_icmp_v6: cdktf.stringToTerraform(struct!.templateIcmpV6),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplateToHclTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplateOutputReference | DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplate): any {
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
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v4: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v6: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV6),
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

export class DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._templateIcmpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV4 = this._templateIcmpV4;
    }
    if (this._templateIcmpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV6 = this._templateIcmpV6;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._other = undefined;
      this._tcp = undefined;
      this._templateIcmpV4 = undefined;
      this._templateIcmpV6 = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._other = value.other;
      this._tcp = value.tcp;
      this._templateIcmpV4 = value.templateIcmpV4;
      this._templateIcmpV6 = value.templateIcmpV6;
      this._udp = value.udp;
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

  // template_icmp_v4 - computed: false, optional: true, required: false
  private _templateIcmpV4?: string; 
  public get templateIcmpV4() {
    return this.getStringAttribute('template_icmp_v4');
  }
  public set templateIcmpV4(value: string) {
    this._templateIcmpV4 = value;
  }
  public resetTemplateIcmpV4() {
    this._templateIcmpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV4Input() {
    return this._templateIcmpV4;
  }

  // template_icmp_v6 - computed: false, optional: true, required: false
  private _templateIcmpV6?: string; 
  public get templateIcmpV6() {
    return this.getStringAttribute('template_icmp_v6');
  }
  public set templateIcmpV6(value: string) {
    this._templateIcmpV6 = value;
  }
  public resetTemplateIcmpV6() {
    this._templateIcmpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV6Input() {
    return this._templateIcmpV6;
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
export interface DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#deny DdosDstEntry#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplate;
}

export function ddosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStructToTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStructToHclTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStruct | cdktf.IResolvable): any {
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
      value: ddosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
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
  private _template = new DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListTemplate) {
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

export class DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStructOutputReference {
    return new DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryDynamicEntryOverflowPolicyListTemplate {
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#logging DdosDstEntry#logging}
  */
  readonly logging?: string;
}

export function ddosDstEntryDynamicEntryOverflowPolicyListTemplateToTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListTemplateOutputReference | DdosDstEntryDynamicEntryOverflowPolicyListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function ddosDstEntryDynamicEntryOverflowPolicyListTemplateToHclTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListTemplateOutputReference | DdosDstEntryDynamicEntryOverflowPolicyListTemplate): any {
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

export class DdosDstEntryDynamicEntryOverflowPolicyListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryDynamicEntryOverflowPolicyListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryDynamicEntryOverflowPolicyListTemplate | undefined) {
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
export interface DdosDstEntryDynamicEntryOverflowPolicyListStruct {
  /**
  * Always permit for the Source to bypass all feature & limit checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#bypass DdosDstEntry#bypass}
  */
  readonly bypass?: number;
  /**
  * 'configuration': Configure src dst dynamic entry count overflow policy;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dummy_name DdosDstEntry#dummy_name}
  */
  readonly dummyName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * Enable periodic log while event is continuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_periodic DdosDstEntry#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * app_type_src_dst_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#app_type_src_dst_list DdosDstEntry#app_type_src_dst_list}
  */
  readonly appTypeSrcDstList?: DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStruct[] | cdktf.IResolvable;
  /**
  * exceed_log_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#exceed_log_cfg DdosDstEntry#exceed_log_cfg}
  */
  readonly exceedLogCfg?: DdosDstEntryDynamicEntryOverflowPolicyListExceedLogCfg;
  /**
  * l4_type_src_dst_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#l4_type_src_dst_list DdosDstEntry#l4_type_src_dst_list}
  */
  readonly l4TypeSrcDstList?: DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStruct[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntryDynamicEntryOverflowPolicyListTemplate;
}

export function ddosDstEntryDynamicEntryOverflowPolicyListStructToTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass: cdktf.numberToTerraform(struct!.bypass),
    dummy_name: cdktf.stringToTerraform(struct!.dummyName),
    glid: cdktf.stringToTerraform(struct!.glid),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    app_type_src_dst_list: cdktf.listMapper(ddosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStructToTerraform, true)(struct!.appTypeSrcDstList),
    exceed_log_cfg: ddosDstEntryDynamicEntryOverflowPolicyListExceedLogCfgToTerraform(struct!.exceedLogCfg),
    l4_type_src_dst_list: cdktf.listMapper(ddosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStructToTerraform, true)(struct!.l4TypeSrcDstList),
    template: ddosDstEntryDynamicEntryOverflowPolicyListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntryDynamicEntryOverflowPolicyListStructToHclTerraform(struct?: DdosDstEntryDynamicEntryOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass: {
      value: cdktf.numberToHclTerraform(struct!.bypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    app_type_src_dst_list: {
      value: cdktf.listMapperHcl(ddosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStructToHclTerraform, true)(struct!.appTypeSrcDstList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStructList",
    },
    exceed_log_cfg: {
      value: ddosDstEntryDynamicEntryOverflowPolicyListExceedLogCfgToHclTerraform(struct!.exceedLogCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryDynamicEntryOverflowPolicyListExceedLogCfgList",
    },
    l4_type_src_dst_list: {
      value: cdktf.listMapperHcl(ddosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStructToHclTerraform, true)(struct!.l4TypeSrcDstList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStructList",
    },
    template: {
      value: ddosDstEntryDynamicEntryOverflowPolicyListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryDynamicEntryOverflowPolicyListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryDynamicEntryOverflowPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryDynamicEntryOverflowPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    if (this._dummyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummyName = this._dummyName;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
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
    if (this._appTypeSrcDstList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appTypeSrcDstList = this._appTypeSrcDstList?.internalValue;
    }
    if (this._exceedLogCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedLogCfg = this._exceedLogCfg?.internalValue;
    }
    if (this._l4TypeSrcDstList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4TypeSrcDstList = this._l4TypeSrcDstList?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryDynamicEntryOverflowPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypass = undefined;
      this._dummyName = undefined;
      this._glid = undefined;
      this._logPeriodic = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._appTypeSrcDstList.internalValue = undefined;
      this._exceedLogCfg.internalValue = undefined;
      this._l4TypeSrcDstList.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypass = value.bypass;
      this._dummyName = value.dummyName;
      this._glid = value.glid;
      this._logPeriodic = value.logPeriodic;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._appTypeSrcDstList.internalValue = value.appTypeSrcDstList;
      this._exceedLogCfg.internalValue = value.exceedLogCfg;
      this._l4TypeSrcDstList.internalValue = value.l4TypeSrcDstList;
      this._template.internalValue = value.template;
    }
  }

  // bypass - computed: false, optional: true, required: false
  private _bypass?: number; 
  public get bypass() {
    return this.getNumberAttribute('bypass');
  }
  public set bypass(value: number) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
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

  // app_type_src_dst_list - computed: false, optional: true, required: false
  private _appTypeSrcDstList = new DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStructList(this, "app_type_src_dst_list", false);
  public get appTypeSrcDstList() {
    return this._appTypeSrcDstList;
  }
  public putAppTypeSrcDstList(value: DdosDstEntryDynamicEntryOverflowPolicyListAppTypeSrcDstListStruct[] | cdktf.IResolvable) {
    this._appTypeSrcDstList.internalValue = value;
  }
  public resetAppTypeSrcDstList() {
    this._appTypeSrcDstList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeSrcDstListInput() {
    return this._appTypeSrcDstList.internalValue;
  }

  // exceed_log_cfg - computed: false, optional: true, required: false
  private _exceedLogCfg = new DdosDstEntryDynamicEntryOverflowPolicyListExceedLogCfgOutputReference(this, "exceed_log_cfg");
  public get exceedLogCfg() {
    return this._exceedLogCfg;
  }
  public putExceedLogCfg(value: DdosDstEntryDynamicEntryOverflowPolicyListExceedLogCfg) {
    this._exceedLogCfg.internalValue = value;
  }
  public resetExceedLogCfg() {
    this._exceedLogCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLogCfgInput() {
    return this._exceedLogCfg.internalValue;
  }

  // l4_type_src_dst_list - computed: false, optional: true, required: false
  private _l4TypeSrcDstList = new DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStructList(this, "l4_type_src_dst_list", false);
  public get l4TypeSrcDstList() {
    return this._l4TypeSrcDstList;
  }
  public putL4TypeSrcDstList(value: DdosDstEntryDynamicEntryOverflowPolicyListL4TypeSrcDstListStruct[] | cdktf.IResolvable) {
    this._l4TypeSrcDstList.internalValue = value;
  }
  public resetL4TypeSrcDstList() {
    this._l4TypeSrcDstList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeSrcDstListInput() {
    return this._l4TypeSrcDstList.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntryDynamicEntryOverflowPolicyListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntryDynamicEntryOverflowPolicyListTemplate) {
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

export class DdosDstEntryDynamicEntryOverflowPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryDynamicEntryOverflowPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryDynamicEntryOverflowPolicyListStructOutputReference {
    return new DdosDstEntryDynamicEntryOverflowPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryEnableTopK {
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#topk_num_records DdosDstEntry#topk_num_records}
  */
  readonly topkNumRecords?: number;
  /**
  * 'destination': Topk destination IP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#topk_type DdosDstEntry#topk_type}
  */
  readonly topkType?: string;
}

export function ddosDstEntryEnableTopKToTerraform(struct?: DdosDstEntryEnableTopK | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topk_num_records: cdktf.numberToTerraform(struct!.topkNumRecords),
    topk_type: cdktf.stringToTerraform(struct!.topkType),
  }
}


export function ddosDstEntryEnableTopKToHclTerraform(struct?: DdosDstEntryEnableTopK | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topk_num_records: {
      value: cdktf.numberToHclTerraform(struct!.topkNumRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_type: {
      value: cdktf.stringToHclTerraform(struct!.topkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryEnableTopKOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryEnableTopK | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topkNumRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkNumRecords = this._topkNumRecords;
    }
    if (this._topkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkType = this._topkType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryEnableTopK | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topkNumRecords = undefined;
      this._topkType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topkNumRecords = value.topkNumRecords;
      this._topkType = value.topkType;
    }
  }

  // topk_num_records - computed: false, optional: true, required: false
  private _topkNumRecords?: number; 
  public get topkNumRecords() {
    return this.getNumberAttribute('topk_num_records');
  }
  public set topkNumRecords(value: number) {
    this._topkNumRecords = value;
  }
  public resetTopkNumRecords() {
    this._topkNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkNumRecordsInput() {
    return this._topkNumRecords;
  }

  // topk_type - computed: false, optional: true, required: false
  private _topkType?: string; 
  public get topkType() {
    return this.getStringAttribute('topk_type');
  }
  public set topkType(value: string) {
    this._topkType = value;
  }
  public resetTopkType() {
    this._topkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkTypeInput() {
    return this._topkType;
  }
}

export class DdosDstEntryEnableTopKList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryEnableTopK[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryEnableTopKOutputReference {
    return new DdosDstEntryEnableTopKOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryExceedLogCfg {
  /**
  * Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_enable DdosDstEntry#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Enable High frequency logging for non-event logs per entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_high_frequency DdosDstEntry#log_high_frequency}
  */
  readonly logHighFrequency?: number;
  /**
  * Turn on sflow sample with log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_with_sflow DdosDstEntry#log_with_sflow}
  */
  readonly logWithSflow?: number;
  /**
  * Rate limit per second per entry(Default : 1 per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#rate_limit DdosDstEntry#rate_limit}
  */
  readonly rateLimit?: number;
}

export function ddosDstEntryExceedLogCfgToTerraform(struct?: DdosDstEntryExceedLogCfgOutputReference | DdosDstEntryExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
    log_high_frequency: cdktf.numberToTerraform(struct!.logHighFrequency),
    log_with_sflow: cdktf.numberToTerraform(struct!.logWithSflow),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
  }
}


export function ddosDstEntryExceedLogCfgToHclTerraform(struct?: DdosDstEntryExceedLogCfgOutputReference | DdosDstEntryExceedLogCfg): any {
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
    log_high_frequency: {
      value: cdktf.numberToHclTerraform(struct!.logHighFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_with_sflow: {
      value: cdktf.numberToHclTerraform(struct!.logWithSflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryExceedLogCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryExceedLogCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    if (this._logHighFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.logHighFrequency = this._logHighFrequency;
    }
    if (this._logWithSflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.logWithSflow = this._logWithSflow;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryExceedLogCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logEnable = undefined;
      this._logHighFrequency = undefined;
      this._logWithSflow = undefined;
      this._rateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logEnable = value.logEnable;
      this._logHighFrequency = value.logHighFrequency;
      this._logWithSflow = value.logWithSflow;
      this._rateLimit = value.rateLimit;
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

  // log_high_frequency - computed: false, optional: true, required: false
  private _logHighFrequency?: number; 
  public get logHighFrequency() {
    return this.getNumberAttribute('log_high_frequency');
  }
  public set logHighFrequency(value: number) {
    this._logHighFrequency = value;
  }
  public resetLogHighFrequency() {
    this._logHighFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logHighFrequencyInput() {
    return this._logHighFrequency;
  }

  // log_with_sflow - computed: false, optional: true, required: false
  private _logWithSflow?: number; 
  public get logWithSflow() {
    return this.getNumberAttribute('log_with_sflow');
  }
  public set logWithSflow(value: number) {
    this._logWithSflow = value;
  }
  public resetLogWithSflow() {
    this._logWithSflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logWithSflowInput() {
    return this._logWithSflow;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }
}
export interface DdosDstEntryExceedLogDepCfg {
  /**
  * (Deprecated)Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#exceed_log_enable DdosDstEntry#exceed_log_enable}
  */
  readonly exceedLogEnable?: number;
  /**
  * Turn on sflow sample with log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_with_sflow_dep DdosDstEntry#log_with_sflow_dep}
  */
  readonly logWithSflowDep?: number;
}

export function ddosDstEntryExceedLogDepCfgToTerraform(struct?: DdosDstEntryExceedLogDepCfgOutputReference | DdosDstEntryExceedLogDepCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exceed_log_enable: cdktf.numberToTerraform(struct!.exceedLogEnable),
    log_with_sflow_dep: cdktf.numberToTerraform(struct!.logWithSflowDep),
  }
}


export function ddosDstEntryExceedLogDepCfgToHclTerraform(struct?: DdosDstEntryExceedLogDepCfgOutputReference | DdosDstEntryExceedLogDepCfg): any {
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

export class DdosDstEntryExceedLogDepCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryExceedLogDepCfg | undefined {
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

  public set internalValue(value: DdosDstEntryExceedLogDepCfg | undefined) {
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
export interface DdosDstEntryGlidExceedActionStatelessEncapActionCfg {
  /**
  * Apply legacy encap template for encap action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#encap_template DdosDstEntry#encap_template}
  */
  readonly encapTemplate?: string;
  /**
  * 'stateless-tunnel-encap': Encapsulate all packets; 'stateless-tunnel-encap-scrubbed': Encapsulate all packets and allow packets to go through other DDoS checks before sent (conn-limit exceeded packet can not be scrubbed, it will default to stateless-tunnel-encap);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#stateless_encap_action DdosDstEntry#stateless_encap_action}
  */
  readonly statelessEncapAction?: string;
}

export function ddosDstEntryGlidExceedActionStatelessEncapActionCfgToTerraform(struct?: DdosDstEntryGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap_template: cdktf.stringToTerraform(struct!.encapTemplate),
    stateless_encap_action: cdktf.stringToTerraform(struct!.statelessEncapAction),
  }
}


export function ddosDstEntryGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct?: DdosDstEntryGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap_template: {
      value: cdktf.stringToHclTerraform(struct!.encapTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stateless_encap_action: {
      value: cdktf.stringToHclTerraform(struct!.statelessEncapAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryGlidExceedActionStatelessEncapActionCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryGlidExceedActionStatelessEncapActionCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encapTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapTemplate = this._encapTemplate;
    }
    if (this._statelessEncapAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapAction = this._statelessEncapAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryGlidExceedActionStatelessEncapActionCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encapTemplate = undefined;
      this._statelessEncapAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encapTemplate = value.encapTemplate;
      this._statelessEncapAction = value.statelessEncapAction;
    }
  }

  // encap_template - computed: false, optional: true, required: false
  private _encapTemplate?: string; 
  public get encapTemplate() {
    return this.getStringAttribute('encap_template');
  }
  public set encapTemplate(value: string) {
    this._encapTemplate = value;
  }
  public resetEncapTemplate() {
    this._encapTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapTemplateInput() {
    return this._encapTemplate;
  }

  // stateless_encap_action - computed: false, optional: true, required: false
  private _statelessEncapAction?: string; 
  public get statelessEncapAction() {
    return this.getStringAttribute('stateless_encap_action');
  }
  public set statelessEncapAction(value: string) {
    this._statelessEncapAction = value;
  }
  public resetStatelessEncapAction() {
    this._statelessEncapAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionInput() {
    return this._statelessEncapAction;
  }
}
export interface DdosDstEntryGlidExceedAction {
  /**
  * stateless_encap_action_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#stateless_encap_action_cfg DdosDstEntry#stateless_encap_action_cfg}
  */
  readonly statelessEncapActionCfg?: DdosDstEntryGlidExceedActionStatelessEncapActionCfg;
}

export function ddosDstEntryGlidExceedActionToTerraform(struct?: DdosDstEntryGlidExceedActionOutputReference | DdosDstEntryGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stateless_encap_action_cfg: ddosDstEntryGlidExceedActionStatelessEncapActionCfgToTerraform(struct!.statelessEncapActionCfg),
  }
}


export function ddosDstEntryGlidExceedActionToHclTerraform(struct?: DdosDstEntryGlidExceedActionOutputReference | DdosDstEntryGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stateless_encap_action_cfg: {
      value: ddosDstEntryGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct!.statelessEncapActionCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryGlidExceedActionStatelessEncapActionCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryGlidExceedActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryGlidExceedAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statelessEncapActionCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapActionCfg = this._statelessEncapActionCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryGlidExceedAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statelessEncapActionCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statelessEncapActionCfg.internalValue = value.statelessEncapActionCfg;
    }
  }

  // stateless_encap_action_cfg - computed: false, optional: true, required: false
  private _statelessEncapActionCfg = new DdosDstEntryGlidExceedActionStatelessEncapActionCfgOutputReference(this, "stateless_encap_action_cfg");
  public get statelessEncapActionCfg() {
    return this._statelessEncapActionCfg;
  }
  public putStatelessEncapActionCfg(value: DdosDstEntryGlidExceedActionStatelessEncapActionCfg) {
    this._statelessEncapActionCfg.internalValue = value;
  }
  public resetStatelessEncapActionCfg() {
    this._statelessEncapActionCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionCfgInput() {
    return this._statelessEncapActionCfg.internalValue;
  }
}
export interface DdosDstEntryHwBlacklistBlocking {
  /**
  * Enable Dst side hardware blocking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dst_enable DdosDstEntry#dst_enable}
  */
  readonly dstEnable?: number;
  /**
  * Enable Src side hardware blocking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_enable DdosDstEntry#src_enable}
  */
  readonly srcEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryHwBlacklistBlockingToTerraform(struct?: DdosDstEntryHwBlacklistBlockingOutputReference | DdosDstEntryHwBlacklistBlocking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_enable: cdktf.numberToTerraform(struct!.dstEnable),
    src_enable: cdktf.numberToTerraform(struct!.srcEnable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryHwBlacklistBlockingToHclTerraform(struct?: DdosDstEntryHwBlacklistBlockingOutputReference | DdosDstEntryHwBlacklistBlocking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_enable: {
      value: cdktf.numberToHclTerraform(struct!.dstEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_enable: {
      value: cdktf.numberToHclTerraform(struct!.srcEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class DdosDstEntryHwBlacklistBlockingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryHwBlacklistBlocking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEnable = this._dstEnable;
    }
    if (this._srcEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEnable = this._srcEnable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryHwBlacklistBlocking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstEnable = undefined;
      this._srcEnable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstEnable = value.dstEnable;
      this._srcEnable = value.srcEnable;
      this._uuid = value.uuid;
    }
  }

  // dst_enable - computed: false, optional: true, required: false
  private _dstEnable?: number; 
  public get dstEnable() {
    return this.getNumberAttribute('dst_enable');
  }
  public set dstEnable(value: number) {
    this._dstEnable = value;
  }
  public resetDstEnable() {
    this._dstEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEnableInput() {
    return this._dstEnable;
  }

  // src_enable - computed: false, optional: true, required: false
  private _srcEnable?: number; 
  public get srcEnable() {
    return this.getNumberAttribute('src_enable');
  }
  public set srcEnable(value: number) {
    this._srcEnable = value;
  }
  public resetSrcEnable() {
    this._srcEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEnableInput() {
    return this._srcEnable;
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
export interface DdosDstEntryIpProtoListEspInspect {
  /**
  * 'AUTH_NULL': No Integrity Check Value; 'HMAC-SHA-1-96': 96 bit Auth Algo; 'HMAC-SHA-256-96': 96 bit Auth Algo; 'HMAC-SHA-256-128': 128 bit Auth Algo; 'HMAC-SHA-384-192': 192 bit Auth Algo; 'HMAC-SHA-512-256': 256 bit Auth Algo; 'HMAC-MD5-96': 96 bit Auth Algo; 'MAC-RIPEMD-160-96': 96 bit Auth Algo;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#auth_algorithm DdosDstEntry#auth_algorithm}
  */
  readonly authAlgorithm?: string;
  /**
  * 'NULL': Null Encryption Algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#encrypt_algorithm DdosDstEntry#encrypt_algorithm}
  */
  readonly encryptAlgorithm?: string;
  /**
  * 'transport': Transport mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#mode DdosDstEntry#mode}
  */
  readonly mode?: string;
}

export function ddosDstEntryIpProtoListEspInspectToTerraform(struct?: DdosDstEntryIpProtoListEspInspectOutputReference | DdosDstEntryIpProtoListEspInspect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_algorithm: cdktf.stringToTerraform(struct!.authAlgorithm),
    encrypt_algorithm: cdktf.stringToTerraform(struct!.encryptAlgorithm),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function ddosDstEntryIpProtoListEspInspectToHclTerraform(struct?: DdosDstEntryIpProtoListEspInspectOutputReference | DdosDstEntryIpProtoListEspInspect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.authAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryIpProtoListEspInspectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryIpProtoListEspInspect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAlgorithm = this._authAlgorithm;
    }
    if (this._encryptAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptAlgorithm = this._encryptAlgorithm;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryIpProtoListEspInspect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authAlgorithm = undefined;
      this._encryptAlgorithm = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authAlgorithm = value.authAlgorithm;
      this._encryptAlgorithm = value.encryptAlgorithm;
      this._mode = value.mode;
    }
  }

  // auth_algorithm - computed: false, optional: true, required: false
  private _authAlgorithm?: string; 
  public get authAlgorithm() {
    return this.getStringAttribute('auth_algorithm');
  }
  public set authAlgorithm(value: string) {
    this._authAlgorithm = value;
  }
  public resetAuthAlgorithm() {
    this._authAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgorithmInput() {
    return this._authAlgorithm;
  }

  // encrypt_algorithm - computed: false, optional: true, required: false
  private _encryptAlgorithm?: string; 
  public get encryptAlgorithm() {
    return this.getStringAttribute('encrypt_algorithm');
  }
  public set encryptAlgorithm(value: string) {
    this._encryptAlgorithm = value;
  }
  public resetEncryptAlgorithm() {
    this._encryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAlgorithmInput() {
    return this._encryptAlgorithm;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DdosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfg {
  /**
  * Apply legacy encap template for encap action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#encap_template DdosDstEntry#encap_template}
  */
  readonly encapTemplate?: string;
  /**
  * 'stateless-tunnel-encap': Encapsulate all packets; 'stateless-tunnel-encap-scrubbed': Encapsulate all packets and allow packets to go through other DDoS checks before sent (conn-limit exceeded packet can not be scrubbed, it will default to stateless-tunnel-encap);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#stateless_encap_action DdosDstEntry#stateless_encap_action}
  */
  readonly statelessEncapAction?: string;
}

export function ddosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfgToTerraform(struct?: DdosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap_template: cdktf.stringToTerraform(struct!.encapTemplate),
    stateless_encap_action: cdktf.stringToTerraform(struct!.statelessEncapAction),
  }
}


export function ddosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct?: DdosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap_template: {
      value: cdktf.stringToHclTerraform(struct!.encapTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stateless_encap_action: {
      value: cdktf.stringToHclTerraform(struct!.statelessEncapAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encapTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapTemplate = this._encapTemplate;
    }
    if (this._statelessEncapAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapAction = this._statelessEncapAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encapTemplate = undefined;
      this._statelessEncapAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encapTemplate = value.encapTemplate;
      this._statelessEncapAction = value.statelessEncapAction;
    }
  }

  // encap_template - computed: false, optional: true, required: false
  private _encapTemplate?: string; 
  public get encapTemplate() {
    return this.getStringAttribute('encap_template');
  }
  public set encapTemplate(value: string) {
    this._encapTemplate = value;
  }
  public resetEncapTemplate() {
    this._encapTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapTemplateInput() {
    return this._encapTemplate;
  }

  // stateless_encap_action - computed: false, optional: true, required: false
  private _statelessEncapAction?: string; 
  public get statelessEncapAction() {
    return this.getStringAttribute('stateless_encap_action');
  }
  public set statelessEncapAction(value: string) {
    this._statelessEncapAction = value;
  }
  public resetStatelessEncapAction() {
    this._statelessEncapAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionInput() {
    return this._statelessEncapAction;
  }
}
export interface DdosDstEntryIpProtoListGlidExceedAction {
  /**
  * stateless_encap_action_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#stateless_encap_action_cfg DdosDstEntry#stateless_encap_action_cfg}
  */
  readonly statelessEncapActionCfg?: DdosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfg;
}

export function ddosDstEntryIpProtoListGlidExceedActionToTerraform(struct?: DdosDstEntryIpProtoListGlidExceedActionOutputReference | DdosDstEntryIpProtoListGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stateless_encap_action_cfg: ddosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfgToTerraform(struct!.statelessEncapActionCfg),
  }
}


export function ddosDstEntryIpProtoListGlidExceedActionToHclTerraform(struct?: DdosDstEntryIpProtoListGlidExceedActionOutputReference | DdosDstEntryIpProtoListGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stateless_encap_action_cfg: {
      value: ddosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct!.statelessEncapActionCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryIpProtoListGlidExceedActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryIpProtoListGlidExceedAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statelessEncapActionCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapActionCfg = this._statelessEncapActionCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryIpProtoListGlidExceedAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statelessEncapActionCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statelessEncapActionCfg.internalValue = value.statelessEncapActionCfg;
    }
  }

  // stateless_encap_action_cfg - computed: false, optional: true, required: false
  private _statelessEncapActionCfg = new DdosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfgOutputReference(this, "stateless_encap_action_cfg");
  public get statelessEncapActionCfg() {
    return this._statelessEncapActionCfg;
  }
  public putStatelessEncapActionCfg(value: DdosDstEntryIpProtoListGlidExceedActionStatelessEncapActionCfg) {
    this._statelessEncapActionCfg.internalValue = value;
  }
  public resetStatelessEncapActionCfg() {
    this._statelessEncapActionCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionCfgInput() {
    return this._statelessEncapActionCfg.internalValue;
  }
}
export interface DdosDstEntryIpProtoListIpFilteringPolicyOper {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryIpProtoListIpFilteringPolicyOperToTerraform(struct?: DdosDstEntryIpProtoListIpFilteringPolicyOperOutputReference | DdosDstEntryIpProtoListIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryIpProtoListIpFilteringPolicyOperToHclTerraform(struct?: DdosDstEntryIpProtoListIpFilteringPolicyOperOutputReference | DdosDstEntryIpProtoListIpFilteringPolicyOper): any {
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

export class DdosDstEntryIpProtoListIpFilteringPolicyOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryIpProtoListIpFilteringPolicyOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryIpProtoListIpFilteringPolicyOper | undefined) {
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
export interface DdosDstEntryIpProtoListTemplate {
  /**
  * DDOS other template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#other DdosDstEntry#other}
  */
  readonly other?: string;
}

export function ddosDstEntryIpProtoListTemplateToTerraform(struct?: DdosDstEntryIpProtoListTemplateOutputReference | DdosDstEntryIpProtoListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
  }
}


export function ddosDstEntryIpProtoListTemplateToHclTerraform(struct?: DdosDstEntryIpProtoListTemplateOutputReference | DdosDstEntryIpProtoListTemplate): any {
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

export class DdosDstEntryIpProtoListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryIpProtoListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryIpProtoListTemplate | undefined) {
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
export interface DdosDstEntryIpProtoListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#deny DdosDstEntry#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * Configure IP Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ip_filtering_policy DdosDstEntry#ip_filtering_policy}
  */
  readonly ipFilteringPolicy?: string;
  /**
  * Protocol Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#port_num DdosDstEntry#port_num}
  */
  readonly portNum: number;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#set_counter_base_val DdosDstEntry#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * esp_inspect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#esp_inspect DdosDstEntry#esp_inspect}
  */
  readonly espInspect?: DdosDstEntryIpProtoListEspInspect;
  /**
  * glid_exceed_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid_exceed_action DdosDstEntry#glid_exceed_action}
  */
  readonly glidExceedAction?: DdosDstEntryIpProtoListGlidExceedAction;
  /**
  * ip_filtering_policy_oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ip_filtering_policy_oper DdosDstEntry#ip_filtering_policy_oper}
  */
  readonly ipFilteringPolicyOper?: DdosDstEntryIpProtoListIpFilteringPolicyOper;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntryIpProtoListTemplate;
}

export function ddosDstEntryIpProtoListStructToTerraform(struct?: DdosDstEntryIpProtoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    ip_filtering_policy: cdktf.stringToTerraform(struct!.ipFilteringPolicy),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    set_counter_base_val: cdktf.numberToTerraform(struct!.setCounterBaseVal),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    esp_inspect: ddosDstEntryIpProtoListEspInspectToTerraform(struct!.espInspect),
    glid_exceed_action: ddosDstEntryIpProtoListGlidExceedActionToTerraform(struct!.glidExceedAction),
    ip_filtering_policy_oper: ddosDstEntryIpProtoListIpFilteringPolicyOperToTerraform(struct!.ipFilteringPolicyOper),
    template: ddosDstEntryIpProtoListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntryIpProtoListStructToHclTerraform(struct?: DdosDstEntryIpProtoListStruct | cdktf.IResolvable): any {
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
    ip_filtering_policy: {
      value: cdktf.stringToHclTerraform(struct!.ipFilteringPolicy),
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
    set_counter_base_val: {
      value: cdktf.numberToHclTerraform(struct!.setCounterBaseVal),
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
    esp_inspect: {
      value: ddosDstEntryIpProtoListEspInspectToHclTerraform(struct!.espInspect),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryIpProtoListEspInspectList",
    },
    glid_exceed_action: {
      value: ddosDstEntryIpProtoListGlidExceedActionToHclTerraform(struct!.glidExceedAction),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryIpProtoListGlidExceedActionList",
    },
    ip_filtering_policy_oper: {
      value: ddosDstEntryIpProtoListIpFilteringPolicyOperToHclTerraform(struct!.ipFilteringPolicyOper),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryIpProtoListIpFilteringPolicyOperList",
    },
    template: {
      value: ddosDstEntryIpProtoListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryIpProtoListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryIpProtoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryIpProtoListStruct | cdktf.IResolvable | undefined {
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
    if (this._ipFilteringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringPolicy = this._ipFilteringPolicy;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._setCounterBaseVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCounterBaseVal = this._setCounterBaseVal;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._espInspect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.espInspect = this._espInspect?.internalValue;
    }
    if (this._glidExceedAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidExceedAction = this._glidExceedAction?.internalValue;
    }
    if (this._ipFilteringPolicyOper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringPolicyOper = this._ipFilteringPolicyOper?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryIpProtoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
      this._ipFilteringPolicy = undefined;
      this._portNum = undefined;
      this._setCounterBaseVal = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._espInspect.internalValue = undefined;
      this._glidExceedAction.internalValue = undefined;
      this._ipFilteringPolicyOper.internalValue = undefined;
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
      this._ipFilteringPolicy = value.ipFilteringPolicy;
      this._portNum = value.portNum;
      this._setCounterBaseVal = value.setCounterBaseVal;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._espInspect.internalValue = value.espInspect;
      this._glidExceedAction.internalValue = value.glidExceedAction;
      this._ipFilteringPolicyOper.internalValue = value.ipFilteringPolicyOper;
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

  // ip_filtering_policy - computed: false, optional: true, required: false
  private _ipFilteringPolicy?: string; 
  public get ipFilteringPolicy() {
    return this.getStringAttribute('ip_filtering_policy');
  }
  public set ipFilteringPolicy(value: string) {
    this._ipFilteringPolicy = value;
  }
  public resetIpFilteringPolicy() {
    this._ipFilteringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyInput() {
    return this._ipFilteringPolicy;
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

  // esp_inspect - computed: false, optional: true, required: false
  private _espInspect = new DdosDstEntryIpProtoListEspInspectOutputReference(this, "esp_inspect");
  public get espInspect() {
    return this._espInspect;
  }
  public putEspInspect(value: DdosDstEntryIpProtoListEspInspect) {
    this._espInspect.internalValue = value;
  }
  public resetEspInspect() {
    this._espInspect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espInspectInput() {
    return this._espInspect.internalValue;
  }

  // glid_exceed_action - computed: false, optional: true, required: false
  private _glidExceedAction = new DdosDstEntryIpProtoListGlidExceedActionOutputReference(this, "glid_exceed_action");
  public get glidExceedAction() {
    return this._glidExceedAction;
  }
  public putGlidExceedAction(value: DdosDstEntryIpProtoListGlidExceedAction) {
    this._glidExceedAction.internalValue = value;
  }
  public resetGlidExceedAction() {
    this._glidExceedAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidExceedActionInput() {
    return this._glidExceedAction.internalValue;
  }

  // ip_filtering_policy_oper - computed: false, optional: true, required: false
  private _ipFilteringPolicyOper = new DdosDstEntryIpProtoListIpFilteringPolicyOperOutputReference(this, "ip_filtering_policy_oper");
  public get ipFilteringPolicyOper() {
    return this._ipFilteringPolicyOper;
  }
  public putIpFilteringPolicyOper(value: DdosDstEntryIpProtoListIpFilteringPolicyOper) {
    this._ipFilteringPolicyOper.internalValue = value;
  }
  public resetIpFilteringPolicyOper() {
    this._ipFilteringPolicyOper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyOperInput() {
    return this._ipFilteringPolicyOper.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntryIpProtoListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntryIpProtoListTemplate) {
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

export class DdosDstEntryIpProtoListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryIpProtoListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryIpProtoListStructOutputReference {
    return new DdosDstEntryIpProtoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfg {
  /**
  * Apply legacy encap template for encap action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#encap_template DdosDstEntry#encap_template}
  */
  readonly encapTemplate?: string;
  /**
  * 'stateless-tunnel-encap': Encapsulate all packets; 'stateless-tunnel-encap-scrubbed': Encapsulate all packets and allow packets to go through other DDoS checks before sent (conn-limit exceeded packet can not be scrubbed, it will default to stateless-tunnel-encap);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#stateless_encap_action DdosDstEntry#stateless_encap_action}
  */
  readonly statelessEncapAction?: string;
}

export function ddosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfgToTerraform(struct?: DdosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap_template: cdktf.stringToTerraform(struct!.encapTemplate),
    stateless_encap_action: cdktf.stringToTerraform(struct!.statelessEncapAction),
  }
}


export function ddosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct?: DdosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap_template: {
      value: cdktf.stringToHclTerraform(struct!.encapTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stateless_encap_action: {
      value: cdktf.stringToHclTerraform(struct!.statelessEncapAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encapTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapTemplate = this._encapTemplate;
    }
    if (this._statelessEncapAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapAction = this._statelessEncapAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encapTemplate = undefined;
      this._statelessEncapAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encapTemplate = value.encapTemplate;
      this._statelessEncapAction = value.statelessEncapAction;
    }
  }

  // encap_template - computed: false, optional: true, required: false
  private _encapTemplate?: string; 
  public get encapTemplate() {
    return this.getStringAttribute('encap_template');
  }
  public set encapTemplate(value: string) {
    this._encapTemplate = value;
  }
  public resetEncapTemplate() {
    this._encapTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapTemplateInput() {
    return this._encapTemplate;
  }

  // stateless_encap_action - computed: false, optional: true, required: false
  private _statelessEncapAction?: string; 
  public get statelessEncapAction() {
    return this.getStringAttribute('stateless_encap_action');
  }
  public set statelessEncapAction(value: string) {
    this._statelessEncapAction = value;
  }
  public resetStatelessEncapAction() {
    this._statelessEncapAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionInput() {
    return this._statelessEncapAction;
  }
}
export interface DdosDstEntryL4TypeListGlidExceedAction {
  /**
  * stateless_encap_action_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#stateless_encap_action_cfg DdosDstEntry#stateless_encap_action_cfg}
  */
  readonly statelessEncapActionCfg?: DdosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfg;
}

export function ddosDstEntryL4TypeListGlidExceedActionToTerraform(struct?: DdosDstEntryL4TypeListGlidExceedActionOutputReference | DdosDstEntryL4TypeListGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stateless_encap_action_cfg: ddosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfgToTerraform(struct!.statelessEncapActionCfg),
  }
}


export function ddosDstEntryL4TypeListGlidExceedActionToHclTerraform(struct?: DdosDstEntryL4TypeListGlidExceedActionOutputReference | DdosDstEntryL4TypeListGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stateless_encap_action_cfg: {
      value: ddosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct!.statelessEncapActionCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeListGlidExceedActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeListGlidExceedAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statelessEncapActionCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapActionCfg = this._statelessEncapActionCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeListGlidExceedAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statelessEncapActionCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statelessEncapActionCfg.internalValue = value.statelessEncapActionCfg;
    }
  }

  // stateless_encap_action_cfg - computed: false, optional: true, required: false
  private _statelessEncapActionCfg = new DdosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfgOutputReference(this, "stateless_encap_action_cfg");
  public get statelessEncapActionCfg() {
    return this._statelessEncapActionCfg;
  }
  public putStatelessEncapActionCfg(value: DdosDstEntryL4TypeListGlidExceedActionStatelessEncapActionCfg) {
    this._statelessEncapActionCfg.internalValue = value;
  }
  public resetStatelessEncapActionCfg() {
    this._statelessEncapActionCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionCfgInput() {
    return this._statelessEncapActionCfg.internalValue;
  }
}
export interface DdosDstEntryL4TypeListIpFilteringPolicyOper {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryL4TypeListIpFilteringPolicyOperToTerraform(struct?: DdosDstEntryL4TypeListIpFilteringPolicyOperOutputReference | DdosDstEntryL4TypeListIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryL4TypeListIpFilteringPolicyOperToHclTerraform(struct?: DdosDstEntryL4TypeListIpFilteringPolicyOperOutputReference | DdosDstEntryL4TypeListIpFilteringPolicyOper): any {
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

export class DdosDstEntryL4TypeListIpFilteringPolicyOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeListIpFilteringPolicyOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeListIpFilteringPolicyOper | undefined) {
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
export interface DdosDstEntryL4TypeListPortIndSamplingEnable {
  /**
  * 'all': all; 'ip-proto-type': IP Protocol Type; 'ddet_ind_pkt_rate_current': Pkt Rate Current; 'ddet_ind_pkt_rate_min': Pkt Rate Min; 'ddet_ind_pkt_rate_max': Pkt Rate Max; 'ddet_ind_pkt_drop_rate_current': Pkt Drop Rate Current; 'ddet_ind_pkt_drop_rate_min': Pkt Drop Rate Min; 'ddet_ind_pkt_drop_rate_max': Pkt Drop Rate Max; 'ddet_ind_syn_rate_current': TCP SYN Rate Current; 'ddet_ind_syn_rate_min': TCP SYN Rate Min; 'ddet_ind_syn_rate_max': TCP SYN Rate Max; 'ddet_ind_fin_rate_current': TCP FIN Rate Current; 'ddet_ind_fin_rate_min': TCP FIN Rate Min; 'ddet_ind_fin_rate_max': TCP FIN Rate Max; 'ddet_ind_rst_rate_current': TCP RST Rate Current; 'ddet_ind_rst_rate_min': TCP RST Rate Min; 'ddet_ind_rst_rate_max': TCP RST Rate Max; 'ddet_ind_small_window_ack_rate_current': TCP Small Window ACK Rate Current; 'ddet_ind_small_window_ack_rate_min': TCP Small Window ACK Rate Min; 'ddet_ind_small_window_ack_rate_max': TCP Small Window ACK Rate Max; 'ddet_ind_empty_ack_rate_current': TCP Empty ACK Rate Current; 'ddet_ind_empty_ack_rate_min': TCP Empty ACK Rate Min; 'ddet_ind_empty_ack_rate_max': TCP Empty ACK Rate Max; 'ddet_ind_small_payload_rate_current': TCP Small Payload Rate Current; 'ddet_ind_small_payload_rate_min': TCP Small Payload Rate Min; 'ddet_ind_small_payload_rate_max': TCP Small Payload Rate Max; 'ddet_ind_pkt_drop_ratio_current': Pkt Drop / Pkt Rcvd Current; 'ddet_ind_pkt_drop_ratio_min': Pkt Drop / Pkt Rcvd Min; 'ddet_ind_pkt_drop_ratio_max': Pkt Drop / Pkt Rcvd Max; 'ddet_ind_inb_per_outb_current': Bytes-to / Bytes-from Current; 'ddet_ind_inb_per_outb_min': Bytes-to / Bytes-from Min; 'ddet_ind_inb_per_outb_max': Bytes-to / Bytes-from Max; 'ddet_ind_syn_per_fin_rate_current': TCP SYN Rate / FIN Rate Current; 'ddet_ind_syn_per_fin_rate_min': TCP SYN Rate / FIN Rate Min; 'ddet_ind_syn_per_fin_rate_max': TCP SYN Rate / FIN Rate Max; 'ddet_ind_conn_miss_rate_current': TCP Session Miss Rate Current; 'ddet_ind_conn_miss_rate_min': TCP Session Miss Rate Min; 'ddet_ind_conn_miss_rate_max': TCP Session Miss Rate Max; 'ddet_ind_concurrent_conns_current': TCP/UDP Concurrent Sessions Current; 'ddet_ind_concurrent_conns_min': TCP/UDP Concurrent Sessions Min; 'ddet_ind_concurrent_conns_max': TCP/UDP Concurrent Sessions Max; 'ddet_ind_data_cpu_util_current': Data CPU Utilization Current; 'ddet_ind_data_cpu_util_min': Data CPU Utilization Min; 'ddet_ind_data_cpu_util_max': Data CPU Utilization Max; 'ddet_ind_outside_intf_util_current': Outside Interface Utilization Current; 'ddet_ind_outside_intf_util_min': Outside Interface Utilization Min; 'ddet_ind_outside_intf_util_max': Outside Interface Utilization Max; 'ddet_ind_frag_rate_current': Frag Pkt Rate Current; 'ddet_ind_frag_rate_min': Frag Pkt Rate Min; 'ddet_ind_frag_rate_max': Frag Pkt Rate Max; 'ddet_ind_bit_rate_current': Bit Rate Current; 'ddet_ind_bit_rate_min': Bit Rate Min; 'ddet_ind_bit_rate_max': Bit Rate Max;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#counters1 DdosDstEntry#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstEntryL4TypeListPortIndSamplingEnableToTerraform(struct?: DdosDstEntryL4TypeListPortIndSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstEntryL4TypeListPortIndSamplingEnableToHclTerraform(struct?: DdosDstEntryL4TypeListPortIndSamplingEnable | cdktf.IResolvable): any {
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

export class DdosDstEntryL4TypeListPortIndSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryL4TypeListPortIndSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstEntryL4TypeListPortIndSamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosDstEntryL4TypeListPortIndSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryL4TypeListPortIndSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryL4TypeListPortIndSamplingEnableOutputReference {
    return new DdosDstEntryL4TypeListPortIndSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryL4TypeListPortInd {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sampling_enable DdosDstEntry#sampling_enable}
  */
  readonly samplingEnable?: DdosDstEntryL4TypeListPortIndSamplingEnable[] | cdktf.IResolvable;
}

export function ddosDstEntryL4TypeListPortIndToTerraform(struct?: DdosDstEntryL4TypeListPortIndOutputReference | DdosDstEntryL4TypeListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(ddosDstEntryL4TypeListPortIndSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function ddosDstEntryL4TypeListPortIndToHclTerraform(struct?: DdosDstEntryL4TypeListPortIndOutputReference | DdosDstEntryL4TypeListPortInd): any {
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
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstEntryL4TypeListPortIndSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeListPortIndSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeListPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeListPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeListPortInd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstEntryL4TypeListPortIndSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstEntryL4TypeListPortIndSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface DdosDstEntryL4TypeListProgressionTracking {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryL4TypeListProgressionTrackingToTerraform(struct?: DdosDstEntryL4TypeListProgressionTrackingOutputReference | DdosDstEntryL4TypeListProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryL4TypeListProgressionTrackingToHclTerraform(struct?: DdosDstEntryL4TypeListProgressionTrackingOutputReference | DdosDstEntryL4TypeListProgressionTracking): any {
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

export class DdosDstEntryL4TypeListProgressionTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeListProgressionTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeListProgressionTracking | undefined) {
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
export interface DdosDstEntryL4TypeListTemplate {
  /**
  * DDOS icmp-v4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v4 DdosDstEntry#template_icmp_v4}
  */
  readonly templateIcmpV4?: string;
  /**
  * DDOS icmp-v6 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v6 DdosDstEntry#template_icmp_v6}
  */
  readonly templateIcmpV6?: string;
}

export function ddosDstEntryL4TypeListTemplateToTerraform(struct?: DdosDstEntryL4TypeListTemplateOutputReference | DdosDstEntryL4TypeListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_icmp_v4: cdktf.stringToTerraform(struct!.templateIcmpV4),
    template_icmp_v6: cdktf.stringToTerraform(struct!.templateIcmpV6),
  }
}


export function ddosDstEntryL4TypeListTemplateToHclTerraform(struct?: DdosDstEntryL4TypeListTemplateOutputReference | DdosDstEntryL4TypeListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_icmp_v4: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v6: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateIcmpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV4 = this._templateIcmpV4;
    }
    if (this._templateIcmpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV6 = this._templateIcmpV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateIcmpV4 = undefined;
      this._templateIcmpV6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateIcmpV4 = value.templateIcmpV4;
      this._templateIcmpV6 = value.templateIcmpV6;
    }
  }

  // template_icmp_v4 - computed: false, optional: true, required: false
  private _templateIcmpV4?: string; 
  public get templateIcmpV4() {
    return this.getStringAttribute('template_icmp_v4');
  }
  public set templateIcmpV4(value: string) {
    this._templateIcmpV4 = value;
  }
  public resetTemplateIcmpV4() {
    this._templateIcmpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV4Input() {
    return this._templateIcmpV4;
  }

  // template_icmp_v6 - computed: false, optional: true, required: false
  private _templateIcmpV6?: string; 
  public get templateIcmpV6() {
    return this.getStringAttribute('template_icmp_v6');
  }
  public set templateIcmpV6(value: string) {
    this._templateIcmpV6 = value;
  }
  public resetTemplateIcmpV6() {
    this._templateIcmpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV6Input() {
    return this._templateIcmpV6;
  }
}
export interface DdosDstEntryL4TypeListTopkSources {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryL4TypeListTopkSourcesToTerraform(struct?: DdosDstEntryL4TypeListTopkSourcesOutputReference | DdosDstEntryL4TypeListTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryL4TypeListTopkSourcesToHclTerraform(struct?: DdosDstEntryL4TypeListTopkSourcesOutputReference | DdosDstEntryL4TypeListTopkSources): any {
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

export class DdosDstEntryL4TypeListTopkSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeListTopkSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeListTopkSources | undefined) {
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
export interface DdosDstEntryL4TypeListTunnelDecapKeyCfg {
  /**
  * Only decapsulate GRE packet with this key (Hexadecimal 0x0-0xFFFFFFFF,decimal 0-4294967295)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#key DdosDstEntry#key}
  */
  readonly key?: string;
}

export function ddosDstEntryL4TypeListTunnelDecapKeyCfgToTerraform(struct?: DdosDstEntryL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ddosDstEntryL4TypeListTunnelDecapKeyCfgToHclTerraform(struct?: DdosDstEntryL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable): any {
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

export class DdosDstEntryL4TypeListTunnelDecapKeyCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstEntryL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable | undefined) {
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

export class DdosDstEntryL4TypeListTunnelDecapKeyCfgList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryL4TypeListTunnelDecapKeyCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryL4TypeListTunnelDecapKeyCfgOutputReference {
    return new DdosDstEntryL4TypeListTunnelDecapKeyCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryL4TypeListTunnelDecap {
  /**
  * Enable GRE Tunnel decapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#gre_decap DdosDstEntry#gre_decap}
  */
  readonly greDecap?: number;
  /**
  * Enable IP Tunnel decapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ip_decap DdosDstEntry#ip_decap}
  */
  readonly ipDecap?: number;
  /**
  * key_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#key_cfg DdosDstEntry#key_cfg}
  */
  readonly keyCfg?: DdosDstEntryL4TypeListTunnelDecapKeyCfg[] | cdktf.IResolvable;
}

export function ddosDstEntryL4TypeListTunnelDecapToTerraform(struct?: DdosDstEntryL4TypeListTunnelDecapOutputReference | DdosDstEntryL4TypeListTunnelDecap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_decap: cdktf.numberToTerraform(struct!.greDecap),
    ip_decap: cdktf.numberToTerraform(struct!.ipDecap),
    key_cfg: cdktf.listMapper(ddosDstEntryL4TypeListTunnelDecapKeyCfgToTerraform, true)(struct!.keyCfg),
  }
}


export function ddosDstEntryL4TypeListTunnelDecapToHclTerraform(struct?: DdosDstEntryL4TypeListTunnelDecapOutputReference | DdosDstEntryL4TypeListTunnelDecap): any {
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
      value: cdktf.listMapperHcl(ddosDstEntryL4TypeListTunnelDecapKeyCfgToHclTerraform, true)(struct!.keyCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeListTunnelDecapKeyCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeListTunnelDecapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeListTunnelDecap | undefined {
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

  public set internalValue(value: DdosDstEntryL4TypeListTunnelDecap | undefined) {
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
  private _keyCfg = new DdosDstEntryL4TypeListTunnelDecapKeyCfgList(this, "key_cfg", false);
  public get keyCfg() {
    return this._keyCfg;
  }
  public putKeyCfg(value: DdosDstEntryL4TypeListTunnelDecapKeyCfg[] | cdktf.IResolvable) {
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
export interface DdosDstEntryL4TypeListTunnelRateLimit {
  /**
  * Enable inner IP rate limiting on GRE traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#gre_rate_limit DdosDstEntry#gre_rate_limit}
  */
  readonly greRateLimit?: number;
  /**
  * Enable inner IP rate limiting on IPinIP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ip_rate_limit DdosDstEntry#ip_rate_limit}
  */
  readonly ipRateLimit?: number;
}

export function ddosDstEntryL4TypeListTunnelRateLimitToTerraform(struct?: DdosDstEntryL4TypeListTunnelRateLimitOutputReference | DdosDstEntryL4TypeListTunnelRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_rate_limit: cdktf.numberToTerraform(struct!.greRateLimit),
    ip_rate_limit: cdktf.numberToTerraform(struct!.ipRateLimit),
  }
}


export function ddosDstEntryL4TypeListTunnelRateLimitToHclTerraform(struct?: DdosDstEntryL4TypeListTunnelRateLimitOutputReference | DdosDstEntryL4TypeListTunnelRateLimit): any {
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

export class DdosDstEntryL4TypeListTunnelRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeListTunnelRateLimit | undefined {
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

  public set internalValue(value: DdosDstEntryL4TypeListTunnelRateLimit | undefined) {
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
export interface DdosDstEntryL4TypeListUndefinedPortHitStatistics {
  /**
  * Configure port scanning counter reset interval (minutes), Default 60 mins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#reset_interval DdosDstEntry#reset_interval}
  */
  readonly resetInterval?: number;
  /**
  * Enable port scanning statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#undefined_port_hit_statistics DdosDstEntry#undefined_port_hit_statistics}
  */
  readonly undefinedPortHitStatistics?: number;
}

export function ddosDstEntryL4TypeListUndefinedPortHitStatisticsToTerraform(struct?: DdosDstEntryL4TypeListUndefinedPortHitStatisticsOutputReference | DdosDstEntryL4TypeListUndefinedPortHitStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reset_interval: cdktf.numberToTerraform(struct!.resetInterval),
    undefined_port_hit_statistics: cdktf.numberToTerraform(struct!.undefinedPortHitStatistics),
  }
}


export function ddosDstEntryL4TypeListUndefinedPortHitStatisticsToHclTerraform(struct?: DdosDstEntryL4TypeListUndefinedPortHitStatisticsOutputReference | DdosDstEntryL4TypeListUndefinedPortHitStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reset_interval: {
      value: cdktf.numberToHclTerraform(struct!.resetInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    undefined_port_hit_statistics: {
      value: cdktf.numberToHclTerraform(struct!.undefinedPortHitStatistics),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeListUndefinedPortHitStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeListUndefinedPortHitStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resetInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetInterval = this._resetInterval;
    }
    if (this._undefinedPortHitStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.undefinedPortHitStatistics = this._undefinedPortHitStatistics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeListUndefinedPortHitStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resetInterval = undefined;
      this._undefinedPortHitStatistics = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resetInterval = value.resetInterval;
      this._undefinedPortHitStatistics = value.undefinedPortHitStatistics;
    }
  }

  // reset_interval - computed: false, optional: true, required: false
  private _resetInterval?: number; 
  public get resetInterval() {
    return this.getNumberAttribute('reset_interval');
  }
  public set resetInterval(value: number) {
    this._resetInterval = value;
  }
  public resetResetInterval() {
    this._resetInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetIntervalInput() {
    return this._resetInterval;
  }

  // undefined_port_hit_statistics - computed: false, optional: true, required: false
  private _undefinedPortHitStatistics?: number; 
  public get undefinedPortHitStatistics() {
    return this.getNumberAttribute('undefined_port_hit_statistics');
  }
  public set undefinedPortHitStatistics(value: number) {
    this._undefinedPortHitStatistics = value;
  }
  public resetUndefinedPortHitStatistics() {
    this._undefinedPortHitStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedPortHitStatisticsInput() {
    return this._undefinedPortHitStatistics;
  }
}
export interface DdosDstEntryL4TypeListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#deny DdosDstEntry#deny}
  */
  readonly deny?: number;
  /**
  * Enable ddos detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#detection_enable DdosDstEntry#detection_enable}
  */
  readonly detectionEnable?: number;
  /**
  * Disable TCP SYN Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#disable_syn_auth DdosDstEntry#disable_syn_auth}
  */
  readonly disableSynAuth?: number;
  /**
  * Drop fragmented packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#drop_frag_pkt DdosDstEntry#drop_frag_pkt}
  */
  readonly dropFragPkt?: number;
  /**
  * 'disable': disable; 'enable': enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#drop_on_no_port_match DdosDstEntry#drop_on_no_port_match}
  */
  readonly dropOnNoPortMatch?: string;
  /**
  * Enable ddos top-k entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#enable_top_k DdosDstEntry#enable_top_k}
  */
  readonly enableTopK?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * Configure IP Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ip_filtering_policy DdosDstEntry#ip_filtering_policy}
  */
  readonly ipFilteringPolicy?: string;
  /**
  * Maximum number of re-transmit SYN per flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#max_rexmit_syn_per_flow DdosDstEntry#max_rexmit_syn_per_flow}
  */
  readonly maxRexmitSynPerFlow?: number;
  /**
  * 'drop': Drop the packet; 'black-list': Add the source IP into black list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#max_rexmit_syn_per_flow_exceed_action DdosDstEntry#max_rexmit_syn_per_flow_exceed_action}
  */
  readonly maxRexmitSynPerFlowExceedAction?: string;
  /**
  * 'tcp': L4-Type TCP; 'udp': L4-Type UDP; 'icmp': L4-Type ICMP; 'other': L4-Type OTHER;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#set_counter_base_val DdosDstEntry#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Enable stateful tracking of sessions (Default is stateless)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#stateful DdosDstEntry#stateful}
  */
  readonly stateful?: number;
  /**
  * 'send-rst': Send RST to client upon client ACK; 'force-rst-by-ack': Force client RST via the use of ACK; 'force-rst-by-synack': Force client RST via the use of bad SYN|ACK; 'disable': Disable TCP SYN Authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#syn_auth DdosDstEntry#syn_auth}
  */
  readonly synAuth?: string;
  /**
  * Enable SYN Cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#syn_cookie DdosDstEntry#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * Send reset to client when rate exceeds or session ages out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#tcp_reset_client DdosDstEntry#tcp_reset_client}
  */
  readonly tcpResetClient?: number;
  /**
  * Send reset to server when rate exceeds or session ages out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#tcp_reset_server DdosDstEntry#tcp_reset_server}
  */
  readonly tcpResetServer?: number;
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#topk_num_records DdosDstEntry#topk_num_records}
  */
  readonly topkNumRecords?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * glid_exceed_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid_exceed_action DdosDstEntry#glid_exceed_action}
  */
  readonly glidExceedAction?: DdosDstEntryL4TypeListGlidExceedAction;
  /**
  * ip_filtering_policy_oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ip_filtering_policy_oper DdosDstEntry#ip_filtering_policy_oper}
  */
  readonly ipFilteringPolicyOper?: DdosDstEntryL4TypeListIpFilteringPolicyOper;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#port_ind DdosDstEntry#port_ind}
  */
  readonly portInd?: DdosDstEntryL4TypeListPortInd;
  /**
  * progression_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#progression_tracking DdosDstEntry#progression_tracking}
  */
  readonly progressionTracking?: DdosDstEntryL4TypeListProgressionTracking;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntryL4TypeListTemplate;
  /**
  * topk_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#topk_sources DdosDstEntry#topk_sources}
  */
  readonly topkSources?: DdosDstEntryL4TypeListTopkSources;
  /**
  * tunnel_decap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#tunnel_decap DdosDstEntry#tunnel_decap}
  */
  readonly tunnelDecap?: DdosDstEntryL4TypeListTunnelDecap;
  /**
  * tunnel_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#tunnel_rate_limit DdosDstEntry#tunnel_rate_limit}
  */
  readonly tunnelRateLimit?: DdosDstEntryL4TypeListTunnelRateLimit;
  /**
  * undefined_port_hit_statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#undefined_port_hit_statistics DdosDstEntry#undefined_port_hit_statistics}
  */
  readonly undefinedPortHitStatistics?: DdosDstEntryL4TypeListUndefinedPortHitStatistics;
}

export function ddosDstEntryL4TypeListStructToTerraform(struct?: DdosDstEntryL4TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    detection_enable: cdktf.numberToTerraform(struct!.detectionEnable),
    disable_syn_auth: cdktf.numberToTerraform(struct!.disableSynAuth),
    drop_frag_pkt: cdktf.numberToTerraform(struct!.dropFragPkt),
    drop_on_no_port_match: cdktf.stringToTerraform(struct!.dropOnNoPortMatch),
    enable_top_k: cdktf.numberToTerraform(struct!.enableTopK),
    glid: cdktf.stringToTerraform(struct!.glid),
    ip_filtering_policy: cdktf.stringToTerraform(struct!.ipFilteringPolicy),
    max_rexmit_syn_per_flow: cdktf.numberToTerraform(struct!.maxRexmitSynPerFlow),
    max_rexmit_syn_per_flow_exceed_action: cdktf.stringToTerraform(struct!.maxRexmitSynPerFlowExceedAction),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    set_counter_base_val: cdktf.numberToTerraform(struct!.setCounterBaseVal),
    stateful: cdktf.numberToTerraform(struct!.stateful),
    syn_auth: cdktf.stringToTerraform(struct!.synAuth),
    syn_cookie: cdktf.numberToTerraform(struct!.synCookie),
    tcp_reset_client: cdktf.numberToTerraform(struct!.tcpResetClient),
    tcp_reset_server: cdktf.numberToTerraform(struct!.tcpResetServer),
    topk_num_records: cdktf.numberToTerraform(struct!.topkNumRecords),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    glid_exceed_action: ddosDstEntryL4TypeListGlidExceedActionToTerraform(struct!.glidExceedAction),
    ip_filtering_policy_oper: ddosDstEntryL4TypeListIpFilteringPolicyOperToTerraform(struct!.ipFilteringPolicyOper),
    port_ind: ddosDstEntryL4TypeListPortIndToTerraform(struct!.portInd),
    progression_tracking: ddosDstEntryL4TypeListProgressionTrackingToTerraform(struct!.progressionTracking),
    template: ddosDstEntryL4TypeListTemplateToTerraform(struct!.template),
    topk_sources: ddosDstEntryL4TypeListTopkSourcesToTerraform(struct!.topkSources),
    tunnel_decap: ddosDstEntryL4TypeListTunnelDecapToTerraform(struct!.tunnelDecap),
    tunnel_rate_limit: ddosDstEntryL4TypeListTunnelRateLimitToTerraform(struct!.tunnelRateLimit),
    undefined_port_hit_statistics: ddosDstEntryL4TypeListUndefinedPortHitStatisticsToTerraform(struct!.undefinedPortHitStatistics),
  }
}


export function ddosDstEntryL4TypeListStructToHclTerraform(struct?: DdosDstEntryL4TypeListStruct | cdktf.IResolvable): any {
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
    detection_enable: {
      value: cdktf.numberToHclTerraform(struct!.detectionEnable),
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
    enable_top_k: {
      value: cdktf.numberToHclTerraform(struct!.enableTopK),
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
    ip_filtering_policy: {
      value: cdktf.stringToHclTerraform(struct!.ipFilteringPolicy),
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
    max_rexmit_syn_per_flow_exceed_action: {
      value: cdktf.stringToHclTerraform(struct!.maxRexmitSynPerFlowExceedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_counter_base_val: {
      value: cdktf.numberToHclTerraform(struct!.setCounterBaseVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    topk_num_records: {
      value: cdktf.numberToHclTerraform(struct!.topkNumRecords),
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
    glid_exceed_action: {
      value: ddosDstEntryL4TypeListGlidExceedActionToHclTerraform(struct!.glidExceedAction),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeListGlidExceedActionList",
    },
    ip_filtering_policy_oper: {
      value: ddosDstEntryL4TypeListIpFilteringPolicyOperToHclTerraform(struct!.ipFilteringPolicyOper),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeListIpFilteringPolicyOperList",
    },
    port_ind: {
      value: ddosDstEntryL4TypeListPortIndToHclTerraform(struct!.portInd),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeListPortIndList",
    },
    progression_tracking: {
      value: ddosDstEntryL4TypeListProgressionTrackingToHclTerraform(struct!.progressionTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeListProgressionTrackingList",
    },
    template: {
      value: ddosDstEntryL4TypeListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeListTemplateList",
    },
    topk_sources: {
      value: ddosDstEntryL4TypeListTopkSourcesToHclTerraform(struct!.topkSources),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeListTopkSourcesList",
    },
    tunnel_decap: {
      value: ddosDstEntryL4TypeListTunnelDecapToHclTerraform(struct!.tunnelDecap),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeListTunnelDecapList",
    },
    tunnel_rate_limit: {
      value: ddosDstEntryL4TypeListTunnelRateLimitToHclTerraform(struct!.tunnelRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeListTunnelRateLimitList",
    },
    undefined_port_hit_statistics: {
      value: ddosDstEntryL4TypeListUndefinedPortHitStatisticsToHclTerraform(struct!.undefinedPortHitStatistics),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeListUndefinedPortHitStatisticsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryL4TypeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._detectionEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionEnable = this._detectionEnable;
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
    if (this._enableTopK !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTopK = this._enableTopK;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._ipFilteringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringPolicy = this._ipFilteringPolicy;
    }
    if (this._maxRexmitSynPerFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRexmitSynPerFlow = this._maxRexmitSynPerFlow;
    }
    if (this._maxRexmitSynPerFlowExceedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRexmitSynPerFlowExceedAction = this._maxRexmitSynPerFlowExceedAction;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._setCounterBaseVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCounterBaseVal = this._setCounterBaseVal;
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
    if (this._topkNumRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkNumRecords = this._topkNumRecords;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._glidExceedAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidExceedAction = this._glidExceedAction?.internalValue;
    }
    if (this._ipFilteringPolicyOper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringPolicyOper = this._ipFilteringPolicyOper?.internalValue;
    }
    if (this._portInd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portInd = this._portInd?.internalValue;
    }
    if (this._progressionTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTracking = this._progressionTracking?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._topkSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkSources = this._topkSources?.internalValue;
    }
    if (this._tunnelDecap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelDecap = this._tunnelDecap?.internalValue;
    }
    if (this._tunnelRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelRateLimit = this._tunnelRateLimit?.internalValue;
    }
    if (this._undefinedPortHitStatistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.undefinedPortHitStatistics = this._undefinedPortHitStatistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._detectionEnable = undefined;
      this._disableSynAuth = undefined;
      this._dropFragPkt = undefined;
      this._dropOnNoPortMatch = undefined;
      this._enableTopK = undefined;
      this._glid = undefined;
      this._ipFilteringPolicy = undefined;
      this._maxRexmitSynPerFlow = undefined;
      this._maxRexmitSynPerFlowExceedAction = undefined;
      this._protocol = undefined;
      this._setCounterBaseVal = undefined;
      this._stateful = undefined;
      this._synAuth = undefined;
      this._synCookie = undefined;
      this._tcpResetClient = undefined;
      this._tcpResetServer = undefined;
      this._topkNumRecords = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._glidExceedAction.internalValue = undefined;
      this._ipFilteringPolicyOper.internalValue = undefined;
      this._portInd.internalValue = undefined;
      this._progressionTracking.internalValue = undefined;
      this._template.internalValue = undefined;
      this._topkSources.internalValue = undefined;
      this._tunnelDecap.internalValue = undefined;
      this._tunnelRateLimit.internalValue = undefined;
      this._undefinedPortHitStatistics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._detectionEnable = value.detectionEnable;
      this._disableSynAuth = value.disableSynAuth;
      this._dropFragPkt = value.dropFragPkt;
      this._dropOnNoPortMatch = value.dropOnNoPortMatch;
      this._enableTopK = value.enableTopK;
      this._glid = value.glid;
      this._ipFilteringPolicy = value.ipFilteringPolicy;
      this._maxRexmitSynPerFlow = value.maxRexmitSynPerFlow;
      this._maxRexmitSynPerFlowExceedAction = value.maxRexmitSynPerFlowExceedAction;
      this._protocol = value.protocol;
      this._setCounterBaseVal = value.setCounterBaseVal;
      this._stateful = value.stateful;
      this._synAuth = value.synAuth;
      this._synCookie = value.synCookie;
      this._tcpResetClient = value.tcpResetClient;
      this._tcpResetServer = value.tcpResetServer;
      this._topkNumRecords = value.topkNumRecords;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._glidExceedAction.internalValue = value.glidExceedAction;
      this._ipFilteringPolicyOper.internalValue = value.ipFilteringPolicyOper;
      this._portInd.internalValue = value.portInd;
      this._progressionTracking.internalValue = value.progressionTracking;
      this._template.internalValue = value.template;
      this._topkSources.internalValue = value.topkSources;
      this._tunnelDecap.internalValue = value.tunnelDecap;
      this._tunnelRateLimit.internalValue = value.tunnelRateLimit;
      this._undefinedPortHitStatistics.internalValue = value.undefinedPortHitStatistics;
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

  // detection_enable - computed: false, optional: true, required: false
  private _detectionEnable?: number; 
  public get detectionEnable() {
    return this.getNumberAttribute('detection_enable');
  }
  public set detectionEnable(value: number) {
    this._detectionEnable = value;
  }
  public resetDetectionEnable() {
    this._detectionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionEnableInput() {
    return this._detectionEnable;
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

  // enable_top_k - computed: false, optional: true, required: false
  private _enableTopK?: number; 
  public get enableTopK() {
    return this.getNumberAttribute('enable_top_k');
  }
  public set enableTopK(value: number) {
    this._enableTopK = value;
  }
  public resetEnableTopK() {
    this._enableTopK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKInput() {
    return this._enableTopK;
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

  // ip_filtering_policy - computed: false, optional: true, required: false
  private _ipFilteringPolicy?: string; 
  public get ipFilteringPolicy() {
    return this.getStringAttribute('ip_filtering_policy');
  }
  public set ipFilteringPolicy(value: string) {
    this._ipFilteringPolicy = value;
  }
  public resetIpFilteringPolicy() {
    this._ipFilteringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyInput() {
    return this._ipFilteringPolicy;
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

  // max_rexmit_syn_per_flow_exceed_action - computed: false, optional: true, required: false
  private _maxRexmitSynPerFlowExceedAction?: string; 
  public get maxRexmitSynPerFlowExceedAction() {
    return this.getStringAttribute('max_rexmit_syn_per_flow_exceed_action');
  }
  public set maxRexmitSynPerFlowExceedAction(value: string) {
    this._maxRexmitSynPerFlowExceedAction = value;
  }
  public resetMaxRexmitSynPerFlowExceedAction() {
    this._maxRexmitSynPerFlowExceedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRexmitSynPerFlowExceedActionInput() {
    return this._maxRexmitSynPerFlowExceedAction;
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

  // topk_num_records - computed: false, optional: true, required: false
  private _topkNumRecords?: number; 
  public get topkNumRecords() {
    return this.getNumberAttribute('topk_num_records');
  }
  public set topkNumRecords(value: number) {
    this._topkNumRecords = value;
  }
  public resetTopkNumRecords() {
    this._topkNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkNumRecordsInput() {
    return this._topkNumRecords;
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

  // glid_exceed_action - computed: false, optional: true, required: false
  private _glidExceedAction = new DdosDstEntryL4TypeListGlidExceedActionOutputReference(this, "glid_exceed_action");
  public get glidExceedAction() {
    return this._glidExceedAction;
  }
  public putGlidExceedAction(value: DdosDstEntryL4TypeListGlidExceedAction) {
    this._glidExceedAction.internalValue = value;
  }
  public resetGlidExceedAction() {
    this._glidExceedAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidExceedActionInput() {
    return this._glidExceedAction.internalValue;
  }

  // ip_filtering_policy_oper - computed: false, optional: true, required: false
  private _ipFilteringPolicyOper = new DdosDstEntryL4TypeListIpFilteringPolicyOperOutputReference(this, "ip_filtering_policy_oper");
  public get ipFilteringPolicyOper() {
    return this._ipFilteringPolicyOper;
  }
  public putIpFilteringPolicyOper(value: DdosDstEntryL4TypeListIpFilteringPolicyOper) {
    this._ipFilteringPolicyOper.internalValue = value;
  }
  public resetIpFilteringPolicyOper() {
    this._ipFilteringPolicyOper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyOperInput() {
    return this._ipFilteringPolicyOper.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DdosDstEntryL4TypeListPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DdosDstEntryL4TypeListPortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // progression_tracking - computed: false, optional: true, required: false
  private _progressionTracking = new DdosDstEntryL4TypeListProgressionTrackingOutputReference(this, "progression_tracking");
  public get progressionTracking() {
    return this._progressionTracking;
  }
  public putProgressionTracking(value: DdosDstEntryL4TypeListProgressionTracking) {
    this._progressionTracking.internalValue = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntryL4TypeListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntryL4TypeListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // topk_sources - computed: false, optional: true, required: false
  private _topkSources = new DdosDstEntryL4TypeListTopkSourcesOutputReference(this, "topk_sources");
  public get topkSources() {
    return this._topkSources;
  }
  public putTopkSources(value: DdosDstEntryL4TypeListTopkSources) {
    this._topkSources.internalValue = value;
  }
  public resetTopkSources() {
    this._topkSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSourcesInput() {
    return this._topkSources.internalValue;
  }

  // tunnel_decap - computed: false, optional: true, required: false
  private _tunnelDecap = new DdosDstEntryL4TypeListTunnelDecapOutputReference(this, "tunnel_decap");
  public get tunnelDecap() {
    return this._tunnelDecap;
  }
  public putTunnelDecap(value: DdosDstEntryL4TypeListTunnelDecap) {
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
  private _tunnelRateLimit = new DdosDstEntryL4TypeListTunnelRateLimitOutputReference(this, "tunnel_rate_limit");
  public get tunnelRateLimit() {
    return this._tunnelRateLimit;
  }
  public putTunnelRateLimit(value: DdosDstEntryL4TypeListTunnelRateLimit) {
    this._tunnelRateLimit.internalValue = value;
  }
  public resetTunnelRateLimit() {
    this._tunnelRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRateLimitInput() {
    return this._tunnelRateLimit.internalValue;
  }

  // undefined_port_hit_statistics - computed: false, optional: true, required: false
  private _undefinedPortHitStatistics = new DdosDstEntryL4TypeListUndefinedPortHitStatisticsOutputReference(this, "undefined_port_hit_statistics");
  public get undefinedPortHitStatistics() {
    return this._undefinedPortHitStatistics;
  }
  public putUndefinedPortHitStatistics(value: DdosDstEntryL4TypeListUndefinedPortHitStatistics) {
    this._undefinedPortHitStatistics.internalValue = value;
  }
  public resetUndefinedPortHitStatistics() {
    this._undefinedPortHitStatistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedPortHitStatisticsInput() {
    return this._undefinedPortHitStatistics.internalValue;
  }
}

export class DdosDstEntryL4TypeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryL4TypeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryL4TypeListStructOutputReference {
    return new DdosDstEntryL4TypeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryPortListCaptureConfig {
  /**
  * 'drop': Apply capture-config to dropped packets; 'forward': Apply capture-config to forwarded packets; 'all': Apply capture-config to both dropped and forwarded packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#capture_config_mode DdosDstEntry#capture_config_mode}
  */
  readonly captureConfigMode?: string;
  /**
  * Capture-config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#capture_config_name DdosDstEntry#capture_config_name}
  */
  readonly captureConfigName?: string;
}

export function ddosDstEntryPortListCaptureConfigToTerraform(struct?: DdosDstEntryPortListCaptureConfigOutputReference | DdosDstEntryPortListCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config_mode: cdktf.stringToTerraform(struct!.captureConfigMode),
    capture_config_name: cdktf.stringToTerraform(struct!.captureConfigName),
  }
}


export function ddosDstEntryPortListCaptureConfigToHclTerraform(struct?: DdosDstEntryPortListCaptureConfigOutputReference | DdosDstEntryPortListCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config_mode: {
      value: cdktf.stringToHclTerraform(struct!.captureConfigMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_config_name: {
      value: cdktf.stringToHclTerraform(struct!.captureConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortListCaptureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListCaptureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfigMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfigMode = this._captureConfigMode;
    }
    if (this._captureConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfigName = this._captureConfigName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListCaptureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._captureConfigMode = undefined;
      this._captureConfigName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._captureConfigMode = value.captureConfigMode;
      this._captureConfigName = value.captureConfigName;
    }
  }

  // capture_config_mode - computed: false, optional: true, required: false
  private _captureConfigMode?: string; 
  public get captureConfigMode() {
    return this.getStringAttribute('capture_config_mode');
  }
  public set captureConfigMode(value: string) {
    this._captureConfigMode = value;
  }
  public resetCaptureConfigMode() {
    this._captureConfigMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigModeInput() {
    return this._captureConfigMode;
  }

  // capture_config_name - computed: false, optional: true, required: false
  private _captureConfigName?: string; 
  public get captureConfigName() {
    return this.getStringAttribute('capture_config_name');
  }
  public set captureConfigName(value: string) {
    this._captureConfigName = value;
  }
  public resetCaptureConfigName() {
    this._captureConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigNameInput() {
    return this._captureConfigName;
  }
}
export interface DdosDstEntryPortListGlidExceedActionStatelessEncapActionCfg {
  /**
  * Apply legacy encap template for encap action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#encap_template DdosDstEntry#encap_template}
  */
  readonly encapTemplate?: string;
  /**
  * 'stateless-tunnel-encap': Encapsulate all packets; 'stateless-tunnel-encap-scrubbed': Encapsulate all packets and allow packets to go through other DDoS checks before sent (conn-limit exceeded packet can not be scrubbed, it will default to stateless-tunnel-encap);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#stateless_encap_action DdosDstEntry#stateless_encap_action}
  */
  readonly statelessEncapAction?: string;
}

export function ddosDstEntryPortListGlidExceedActionStatelessEncapActionCfgToTerraform(struct?: DdosDstEntryPortListGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryPortListGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap_template: cdktf.stringToTerraform(struct!.encapTemplate),
    stateless_encap_action: cdktf.stringToTerraform(struct!.statelessEncapAction),
  }
}


export function ddosDstEntryPortListGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct?: DdosDstEntryPortListGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryPortListGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap_template: {
      value: cdktf.stringToHclTerraform(struct!.encapTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stateless_encap_action: {
      value: cdktf.stringToHclTerraform(struct!.statelessEncapAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortListGlidExceedActionStatelessEncapActionCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListGlidExceedActionStatelessEncapActionCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encapTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapTemplate = this._encapTemplate;
    }
    if (this._statelessEncapAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapAction = this._statelessEncapAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListGlidExceedActionStatelessEncapActionCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encapTemplate = undefined;
      this._statelessEncapAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encapTemplate = value.encapTemplate;
      this._statelessEncapAction = value.statelessEncapAction;
    }
  }

  // encap_template - computed: false, optional: true, required: false
  private _encapTemplate?: string; 
  public get encapTemplate() {
    return this.getStringAttribute('encap_template');
  }
  public set encapTemplate(value: string) {
    this._encapTemplate = value;
  }
  public resetEncapTemplate() {
    this._encapTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapTemplateInput() {
    return this._encapTemplate;
  }

  // stateless_encap_action - computed: false, optional: true, required: false
  private _statelessEncapAction?: string; 
  public get statelessEncapAction() {
    return this.getStringAttribute('stateless_encap_action');
  }
  public set statelessEncapAction(value: string) {
    this._statelessEncapAction = value;
  }
  public resetStatelessEncapAction() {
    this._statelessEncapAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionInput() {
    return this._statelessEncapAction;
  }
}
export interface DdosDstEntryPortListGlidExceedAction {
  /**
  * stateless_encap_action_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#stateless_encap_action_cfg DdosDstEntry#stateless_encap_action_cfg}
  */
  readonly statelessEncapActionCfg?: DdosDstEntryPortListGlidExceedActionStatelessEncapActionCfg;
}

export function ddosDstEntryPortListGlidExceedActionToTerraform(struct?: DdosDstEntryPortListGlidExceedActionOutputReference | DdosDstEntryPortListGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stateless_encap_action_cfg: ddosDstEntryPortListGlidExceedActionStatelessEncapActionCfgToTerraform(struct!.statelessEncapActionCfg),
  }
}


export function ddosDstEntryPortListGlidExceedActionToHclTerraform(struct?: DdosDstEntryPortListGlidExceedActionOutputReference | DdosDstEntryPortListGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stateless_encap_action_cfg: {
      value: ddosDstEntryPortListGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct!.statelessEncapActionCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListGlidExceedActionStatelessEncapActionCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortListGlidExceedActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListGlidExceedAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statelessEncapActionCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapActionCfg = this._statelessEncapActionCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListGlidExceedAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statelessEncapActionCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statelessEncapActionCfg.internalValue = value.statelessEncapActionCfg;
    }
  }

  // stateless_encap_action_cfg - computed: false, optional: true, required: false
  private _statelessEncapActionCfg = new DdosDstEntryPortListGlidExceedActionStatelessEncapActionCfgOutputReference(this, "stateless_encap_action_cfg");
  public get statelessEncapActionCfg() {
    return this._statelessEncapActionCfg;
  }
  public putStatelessEncapActionCfg(value: DdosDstEntryPortListGlidExceedActionStatelessEncapActionCfg) {
    this._statelessEncapActionCfg.internalValue = value;
  }
  public resetStatelessEncapActionCfg() {
    this._statelessEncapActionCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionCfgInput() {
    return this._statelessEncapActionCfg.internalValue;
  }
}
export interface DdosDstEntryPortListIpFilteringPolicyOper {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortListIpFilteringPolicyOperToTerraform(struct?: DdosDstEntryPortListIpFilteringPolicyOperOutputReference | DdosDstEntryPortListIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortListIpFilteringPolicyOperToHclTerraform(struct?: DdosDstEntryPortListIpFilteringPolicyOperOutputReference | DdosDstEntryPortListIpFilteringPolicyOper): any {
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

export class DdosDstEntryPortListIpFilteringPolicyOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListIpFilteringPolicyOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListIpFilteringPolicyOper | undefined) {
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
export interface DdosDstEntryPortListPatternRecognition {
  /**
  * 'heuristic': heuristic algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#algorithm DdosDstEntry#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Extracted filter inactive threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#filter_inactive_threshold DdosDstEntry#filter_inactive_threshold}
  */
  readonly filterInactiveThreshold?: number;
  /**
  * Extracted filter threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#filter_threshold DdosDstEntry#filter_threshold}
  */
  readonly filterThreshold?: number;
  /**
  * 'capture-never-expire': War-time capture without rate exceeding and never expires; 'manual': Manual mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#mode DdosDstEntry#mode}
  */
  readonly mode?: string;
  /**
  * 'high': High Sensitivity; 'medium': Medium Sensitivity; 'low': Low Sensitivity;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sensitivity DdosDstEntry#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortListPatternRecognitionToTerraform(struct?: DdosDstEntryPortListPatternRecognitionOutputReference | DdosDstEntryPortListPatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    filter_inactive_threshold: cdktf.numberToTerraform(struct!.filterInactiveThreshold),
    filter_threshold: cdktf.numberToTerraform(struct!.filterThreshold),
    mode: cdktf.stringToTerraform(struct!.mode),
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortListPatternRecognitionToHclTerraform(struct?: DdosDstEntryPortListPatternRecognitionOutputReference | DdosDstEntryPortListPatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_inactive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filterInactiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.sensitivity),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortListPatternRecognitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListPatternRecognition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._filterInactiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterInactiveThreshold = this._filterInactiveThreshold;
    }
    if (this._filterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterThreshold = this._filterThreshold;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListPatternRecognition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._filterInactiveThreshold = undefined;
      this._filterThreshold = undefined;
      this._mode = undefined;
      this._sensitivity = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._filterInactiveThreshold = value.filterInactiveThreshold;
      this._filterThreshold = value.filterThreshold;
      this._mode = value.mode;
      this._sensitivity = value.sensitivity;
      this._uuid = value.uuid;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // filter_inactive_threshold - computed: false, optional: true, required: false
  private _filterInactiveThreshold?: number; 
  public get filterInactiveThreshold() {
    return this.getNumberAttribute('filter_inactive_threshold');
  }
  public set filterInactiveThreshold(value: number) {
    this._filterInactiveThreshold = value;
  }
  public resetFilterInactiveThreshold() {
    this._filterInactiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInactiveThresholdInput() {
    return this._filterInactiveThreshold;
  }

  // filter_threshold - computed: false, optional: true, required: false
  private _filterThreshold?: number; 
  public get filterThreshold() {
    return this.getNumberAttribute('filter_threshold');
  }
  public set filterThreshold(value: number) {
    this._filterThreshold = value;
  }
  public resetFilterThreshold() {
    this._filterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterThresholdInput() {
    return this._filterThreshold;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
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
export interface DdosDstEntryPortListPatternRecognitionPuDetails {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortListPatternRecognitionPuDetailsToTerraform(struct?: DdosDstEntryPortListPatternRecognitionPuDetailsOutputReference | DdosDstEntryPortListPatternRecognitionPuDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortListPatternRecognitionPuDetailsToHclTerraform(struct?: DdosDstEntryPortListPatternRecognitionPuDetailsOutputReference | DdosDstEntryPortListPatternRecognitionPuDetails): any {
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

export class DdosDstEntryPortListPatternRecognitionPuDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListPatternRecognitionPuDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListPatternRecognitionPuDetails | undefined) {
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
export interface DdosDstEntryPortListPortIndSamplingEnable {
  /**
  * 'all': all; 'ip-proto-type': IP Protocol Type; 'ddet_ind_pkt_rate_current': Pkt Rate Current; 'ddet_ind_pkt_rate_min': Pkt Rate Min; 'ddet_ind_pkt_rate_max': Pkt Rate Max; 'ddet_ind_pkt_drop_rate_current': Pkt Drop Rate Current; 'ddet_ind_pkt_drop_rate_min': Pkt Drop Rate Min; 'ddet_ind_pkt_drop_rate_max': Pkt Drop Rate Max; 'ddet_ind_syn_rate_current': TCP SYN Rate Current; 'ddet_ind_syn_rate_min': TCP SYN Rate Min; 'ddet_ind_syn_rate_max': TCP SYN Rate Max; 'ddet_ind_fin_rate_current': TCP FIN Rate Current; 'ddet_ind_fin_rate_min': TCP FIN Rate Min; 'ddet_ind_fin_rate_max': TCP FIN Rate Max; 'ddet_ind_rst_rate_current': TCP RST Rate Current; 'ddet_ind_rst_rate_min': TCP RST Rate Min; 'ddet_ind_rst_rate_max': TCP RST Rate Max; 'ddet_ind_small_window_ack_rate_current': TCP Small Window ACK Rate Current; 'ddet_ind_small_window_ack_rate_min': TCP Small Window ACK Rate Min; 'ddet_ind_small_window_ack_rate_max': TCP Small Window ACK Rate Max; 'ddet_ind_empty_ack_rate_current': TCP Empty ACK Rate Current; 'ddet_ind_empty_ack_rate_min': TCP Empty ACK Rate Min; 'ddet_ind_empty_ack_rate_max': TCP Empty ACK Rate Max; 'ddet_ind_small_payload_rate_current': TCP Small Payload Rate Current; 'ddet_ind_small_payload_rate_min': TCP Small Payload Rate Min; 'ddet_ind_small_payload_rate_max': TCP Small Payload Rate Max; 'ddet_ind_pkt_drop_ratio_current': Pkt Drop / Pkt Rcvd Current; 'ddet_ind_pkt_drop_ratio_min': Pkt Drop / Pkt Rcvd Min; 'ddet_ind_pkt_drop_ratio_max': Pkt Drop / Pkt Rcvd Max; 'ddet_ind_inb_per_outb_current': Bytes-to / Bytes-from Current; 'ddet_ind_inb_per_outb_min': Bytes-to / Bytes-from Min; 'ddet_ind_inb_per_outb_max': Bytes-to / Bytes-from Max; 'ddet_ind_syn_per_fin_rate_current': TCP SYN Rate / FIN Rate Current; 'ddet_ind_syn_per_fin_rate_min': TCP SYN Rate / FIN Rate Min; 'ddet_ind_syn_per_fin_rate_max': TCP SYN Rate / FIN Rate Max; 'ddet_ind_conn_miss_rate_current': TCP Session Miss Rate Current; 'ddet_ind_conn_miss_rate_min': TCP Session Miss Rate Min; 'ddet_ind_conn_miss_rate_max': TCP Session Miss Rate Max; 'ddet_ind_concurrent_conns_current': TCP/UDP Concurrent Sessions Current; 'ddet_ind_concurrent_conns_min': TCP/UDP Concurrent Sessions Min; 'ddet_ind_concurrent_conns_max': TCP/UDP Concurrent Sessions Max; 'ddet_ind_data_cpu_util_current': Data CPU Utilization Current; 'ddet_ind_data_cpu_util_min': Data CPU Utilization Min; 'ddet_ind_data_cpu_util_max': Data CPU Utilization Max; 'ddet_ind_outside_intf_util_current': Outside Interface Utilization Current; 'ddet_ind_outside_intf_util_min': Outside Interface Utilization Min; 'ddet_ind_outside_intf_util_max': Outside Interface Utilization Max; 'ddet_ind_frag_rate_current': Frag Pkt Rate Current; 'ddet_ind_frag_rate_min': Frag Pkt Rate Min; 'ddet_ind_frag_rate_max': Frag Pkt Rate Max; 'ddet_ind_bit_rate_current': Bit Rate Current; 'ddet_ind_bit_rate_min': Bit Rate Min; 'ddet_ind_bit_rate_max': Bit Rate Max;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#counters1 DdosDstEntry#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstEntryPortListPortIndSamplingEnableToTerraform(struct?: DdosDstEntryPortListPortIndSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstEntryPortListPortIndSamplingEnableToHclTerraform(struct?: DdosDstEntryPortListPortIndSamplingEnable | cdktf.IResolvable): any {
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

export class DdosDstEntryPortListPortIndSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryPortListPortIndSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstEntryPortListPortIndSamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosDstEntryPortListPortIndSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryPortListPortIndSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryPortListPortIndSamplingEnableOutputReference {
    return new DdosDstEntryPortListPortIndSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryPortListPortInd {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sampling_enable DdosDstEntry#sampling_enable}
  */
  readonly samplingEnable?: DdosDstEntryPortListPortIndSamplingEnable[] | cdktf.IResolvable;
}

export function ddosDstEntryPortListPortIndToTerraform(struct?: DdosDstEntryPortListPortIndOutputReference | DdosDstEntryPortListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(ddosDstEntryPortListPortIndSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function ddosDstEntryPortListPortIndToHclTerraform(struct?: DdosDstEntryPortListPortIndOutputReference | DdosDstEntryPortListPortInd): any {
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
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstEntryPortListPortIndSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListPortIndSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortListPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListPortInd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstEntryPortListPortIndSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstEntryPortListPortIndSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface DdosDstEntryPortListProgressionTracking {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortListProgressionTrackingToTerraform(struct?: DdosDstEntryPortListProgressionTrackingOutputReference | DdosDstEntryPortListProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortListProgressionTrackingToHclTerraform(struct?: DdosDstEntryPortListProgressionTrackingOutputReference | DdosDstEntryPortListProgressionTracking): any {
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

export class DdosDstEntryPortListProgressionTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListProgressionTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListProgressionTracking | undefined) {
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
export interface DdosDstEntryPortListSflowPollingSflowTcp {
  /**
  * Enable sFlow basic TCP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_tcp_basic DdosDstEntry#sflow_tcp_basic}
  */
  readonly sflowTcpBasic?: number;
  /**
  * Enable sFlow stateful TCP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_tcp_stateful DdosDstEntry#sflow_tcp_stateful}
  */
  readonly sflowTcpStateful?: number;
}

export function ddosDstEntryPortListSflowPollingSflowTcpToTerraform(struct?: DdosDstEntryPortListSflowPollingSflowTcpOutputReference | DdosDstEntryPortListSflowPollingSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_tcp_basic: cdktf.numberToTerraform(struct!.sflowTcpBasic),
    sflow_tcp_stateful: cdktf.numberToTerraform(struct!.sflowTcpStateful),
  }
}


export function ddosDstEntryPortListSflowPollingSflowTcpToHclTerraform(struct?: DdosDstEntryPortListSflowPollingSflowTcpOutputReference | DdosDstEntryPortListSflowPollingSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sflow_tcp_basic: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpBasic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_tcp_stateful: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpStateful),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortListSflowPollingSflowTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListSflowPollingSflowTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sflowTcpBasic !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpBasic = this._sflowTcpBasic;
    }
    if (this._sflowTcpStateful !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpStateful = this._sflowTcpStateful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListSflowPollingSflowTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sflowTcpBasic = undefined;
      this._sflowTcpStateful = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sflowTcpBasic = value.sflowTcpBasic;
      this._sflowTcpStateful = value.sflowTcpStateful;
    }
  }

  // sflow_tcp_basic - computed: false, optional: true, required: false
  private _sflowTcpBasic?: number; 
  public get sflowTcpBasic() {
    return this.getNumberAttribute('sflow_tcp_basic');
  }
  public set sflowTcpBasic(value: number) {
    this._sflowTcpBasic = value;
  }
  public resetSflowTcpBasic() {
    this._sflowTcpBasic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpBasicInput() {
    return this._sflowTcpBasic;
  }

  // sflow_tcp_stateful - computed: false, optional: true, required: false
  private _sflowTcpStateful?: number; 
  public get sflowTcpStateful() {
    return this.getNumberAttribute('sflow_tcp_stateful');
  }
  public set sflowTcpStateful(value: number) {
    this._sflowTcpStateful = value;
  }
  public resetSflowTcpStateful() {
    this._sflowTcpStateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpStatefulInput() {
    return this._sflowTcpStateful;
  }
}
export interface DdosDstEntryPortListSflowPolling {
  /**
  * Enable sFlow HTTP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_http DdosDstEntry#sflow_http}
  */
  readonly sflowHttp?: number;
  /**
  * Enable sFlow packet-level counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_packets DdosDstEntry#sflow_packets}
  */
  readonly sflowPackets?: number;
  /**
  * sflow_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_tcp DdosDstEntry#sflow_tcp}
  */
  readonly sflowTcp?: DdosDstEntryPortListSflowPollingSflowTcp;
}

export function ddosDstEntryPortListSflowPollingToTerraform(struct?: DdosDstEntryPortListSflowPollingOutputReference | DdosDstEntryPortListSflowPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_http: cdktf.numberToTerraform(struct!.sflowHttp),
    sflow_packets: cdktf.numberToTerraform(struct!.sflowPackets),
    sflow_tcp: ddosDstEntryPortListSflowPollingSflowTcpToTerraform(struct!.sflowTcp),
  }
}


export function ddosDstEntryPortListSflowPollingToHclTerraform(struct?: DdosDstEntryPortListSflowPollingOutputReference | DdosDstEntryPortListSflowPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sflow_http: {
      value: cdktf.numberToHclTerraform(struct!.sflowHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_packets: {
      value: cdktf.numberToHclTerraform(struct!.sflowPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_tcp: {
      value: ddosDstEntryPortListSflowPollingSflowTcpToHclTerraform(struct!.sflowTcp),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListSflowPollingSflowTcpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortListSflowPollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListSflowPolling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sflowHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowHttp = this._sflowHttp;
    }
    if (this._sflowPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowPackets = this._sflowPackets;
    }
    if (this._sflowTcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcp = this._sflowTcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListSflowPolling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sflowHttp = undefined;
      this._sflowPackets = undefined;
      this._sflowTcp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sflowHttp = value.sflowHttp;
      this._sflowPackets = value.sflowPackets;
      this._sflowTcp.internalValue = value.sflowTcp;
    }
  }

  // sflow_http - computed: false, optional: true, required: false
  private _sflowHttp?: number; 
  public get sflowHttp() {
    return this.getNumberAttribute('sflow_http');
  }
  public set sflowHttp(value: number) {
    this._sflowHttp = value;
  }
  public resetSflowHttp() {
    this._sflowHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowHttpInput() {
    return this._sflowHttp;
  }

  // sflow_packets - computed: false, optional: true, required: false
  private _sflowPackets?: number; 
  public get sflowPackets() {
    return this.getNumberAttribute('sflow_packets');
  }
  public set sflowPackets(value: number) {
    this._sflowPackets = value;
  }
  public resetSflowPackets() {
    this._sflowPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowPacketsInput() {
    return this._sflowPackets;
  }

  // sflow_tcp - computed: false, optional: true, required: false
  private _sflowTcp = new DdosDstEntryPortListSflowPollingSflowTcpOutputReference(this, "sflow_tcp");
  public get sflowTcp() {
    return this._sflowTcp;
  }
  public putSflowTcp(value: DdosDstEntryPortListSflowPollingSflowTcp) {
    this._sflowTcp.internalValue = value;
  }
  public resetSflowTcp() {
    this._sflowTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpInput() {
    return this._sflowTcp.internalValue;
  }
}
export interface DdosDstEntryPortListSflow {
  /**
  * polling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#polling DdosDstEntry#polling}
  */
  readonly polling?: DdosDstEntryPortListSflowPolling;
}

export function ddosDstEntryPortListSflowToTerraform(struct?: DdosDstEntryPortListSflowOutputReference | DdosDstEntryPortListSflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    polling: ddosDstEntryPortListSflowPollingToTerraform(struct!.polling),
  }
}


export function ddosDstEntryPortListSflowToHclTerraform(struct?: DdosDstEntryPortListSflowOutputReference | DdosDstEntryPortListSflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    polling: {
      value: ddosDstEntryPortListSflowPollingToHclTerraform(struct!.polling),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListSflowPollingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortListSflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListSflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._polling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.polling = this._polling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListSflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._polling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._polling.internalValue = value.polling;
    }
  }

  // polling - computed: false, optional: true, required: false
  private _polling = new DdosDstEntryPortListSflowPollingOutputReference(this, "polling");
  public get polling() {
    return this._polling;
  }
  public putPolling(value: DdosDstEntryPortListSflowPolling) {
    this._polling.internalValue = value;
  }
  public resetPolling() {
    this._polling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingInput() {
    return this._polling.internalValue;
  }
}
export interface DdosDstEntryPortListSignatureExtraction {
  /**
  * 'heuristic': heuristic algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#algorithm DdosDstEntry#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Enable manual mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#manual_mode DdosDstEntry#manual_mode}
  */
  readonly manualMode?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortListSignatureExtractionToTerraform(struct?: DdosDstEntryPortListSignatureExtractionOutputReference | DdosDstEntryPortListSignatureExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    manual_mode: cdktf.numberToTerraform(struct!.manualMode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortListSignatureExtractionToHclTerraform(struct?: DdosDstEntryPortListSignatureExtractionOutputReference | DdosDstEntryPortListSignatureExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manual_mode: {
      value: cdktf.numberToHclTerraform(struct!.manualMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class DdosDstEntryPortListSignatureExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListSignatureExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._manualMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualMode = this._manualMode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListSignatureExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._manualMode = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._manualMode = value.manualMode;
      this._uuid = value.uuid;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // manual_mode - computed: false, optional: true, required: false
  private _manualMode?: number; 
  public get manualMode() {
    return this.getNumberAttribute('manual_mode');
  }
  public set manualMode(value: number) {
    this._manualMode = value;
  }
  public resetManualMode() {
    this._manualMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualModeInput() {
    return this._manualMode;
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
export interface DdosDstEntryPortListTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dns DdosDstEntry#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#http DdosDstEntry#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sip DdosDstEntry#sip}
  */
  readonly sip?: string;
  /**
  * DDOS SSL-L4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ssl_l4 DdosDstEntry#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#tcp DdosDstEntry#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#udp DdosDstEntry#udp}
  */
  readonly udp?: string;
}

export function ddosDstEntryPortListTemplateToTerraform(struct?: DdosDstEntryPortListTemplateOutputReference | DdosDstEntryPortListTemplate): any {
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


export function ddosDstEntryPortListTemplateToHclTerraform(struct?: DdosDstEntryPortListTemplateOutputReference | DdosDstEntryPortListTemplate): any {
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

export class DdosDstEntryPortListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListTemplate | undefined {
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

  public set internalValue(value: DdosDstEntryPortListTemplate | undefined) {
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
export interface DdosDstEntryPortListTopkSources {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortListTopkSourcesToTerraform(struct?: DdosDstEntryPortListTopkSourcesOutputReference | DdosDstEntryPortListTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortListTopkSourcesToHclTerraform(struct?: DdosDstEntryPortListTopkSourcesOutputReference | DdosDstEntryPortListTopkSources): any {
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

export class DdosDstEntryPortListTopkSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortListTopkSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListTopkSources | undefined) {
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
export interface DdosDstEntryPortListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#deny DdosDstEntry#deny}
  */
  readonly deny?: number;
  /**
  * Enable ddos detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#detection_enable DdosDstEntry#detection_enable}
  */
  readonly detectionEnable?: number;
  /**
  * DNS Cache Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dns_cache DdosDstEntry#dns_cache}
  */
  readonly dnsCache?: string;
  /**
  * Enable ddos top-k entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#enable_top_k DdosDstEntry#enable_top_k}
  */
  readonly enableTopK?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * Configure IP Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ip_filtering_policy DdosDstEntry#ip_filtering_policy}
  */
  readonly ipFilteringPolicy?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#port_num DdosDstEntry#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port; 'sip-udp': SIP-UDP Port; 'sip-tcp': SIP-TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#set_counter_base_val DdosDstEntry#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#topk_num_records DdosDstEntry#topk_num_records}
  */
  readonly topkNumRecords?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * capture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#capture_config DdosDstEntry#capture_config}
  */
  readonly captureConfig?: DdosDstEntryPortListCaptureConfig;
  /**
  * glid_exceed_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid_exceed_action DdosDstEntry#glid_exceed_action}
  */
  readonly glidExceedAction?: DdosDstEntryPortListGlidExceedAction;
  /**
  * ip_filtering_policy_oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ip_filtering_policy_oper DdosDstEntry#ip_filtering_policy_oper}
  */
  readonly ipFilteringPolicyOper?: DdosDstEntryPortListIpFilteringPolicyOper;
  /**
  * pattern_recognition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#pattern_recognition DdosDstEntry#pattern_recognition}
  */
  readonly patternRecognition?: DdosDstEntryPortListPatternRecognition;
  /**
  * pattern_recognition_pu_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#pattern_recognition_pu_details DdosDstEntry#pattern_recognition_pu_details}
  */
  readonly patternRecognitionPuDetails?: DdosDstEntryPortListPatternRecognitionPuDetails;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#port_ind DdosDstEntry#port_ind}
  */
  readonly portInd?: DdosDstEntryPortListPortInd;
  /**
  * progression_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#progression_tracking DdosDstEntry#progression_tracking}
  */
  readonly progressionTracking?: DdosDstEntryPortListProgressionTracking;
  /**
  * sflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow DdosDstEntry#sflow}
  */
  readonly sflow?: DdosDstEntryPortListSflow;
  /**
  * signature_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#signature_extraction DdosDstEntry#signature_extraction}
  */
  readonly signatureExtraction?: DdosDstEntryPortListSignatureExtraction;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntryPortListTemplate;
  /**
  * topk_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#topk_sources DdosDstEntry#topk_sources}
  */
  readonly topkSources?: DdosDstEntryPortListTopkSources;
}

export function ddosDstEntryPortListStructToTerraform(struct?: DdosDstEntryPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    detection_enable: cdktf.numberToTerraform(struct!.detectionEnable),
    dns_cache: cdktf.stringToTerraform(struct!.dnsCache),
    enable_top_k: cdktf.numberToTerraform(struct!.enableTopK),
    glid: cdktf.stringToTerraform(struct!.glid),
    ip_filtering_policy: cdktf.stringToTerraform(struct!.ipFilteringPolicy),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    set_counter_base_val: cdktf.numberToTerraform(struct!.setCounterBaseVal),
    topk_num_records: cdktf.numberToTerraform(struct!.topkNumRecords),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    capture_config: ddosDstEntryPortListCaptureConfigToTerraform(struct!.captureConfig),
    glid_exceed_action: ddosDstEntryPortListGlidExceedActionToTerraform(struct!.glidExceedAction),
    ip_filtering_policy_oper: ddosDstEntryPortListIpFilteringPolicyOperToTerraform(struct!.ipFilteringPolicyOper),
    pattern_recognition: ddosDstEntryPortListPatternRecognitionToTerraform(struct!.patternRecognition),
    pattern_recognition_pu_details: ddosDstEntryPortListPatternRecognitionPuDetailsToTerraform(struct!.patternRecognitionPuDetails),
    port_ind: ddosDstEntryPortListPortIndToTerraform(struct!.portInd),
    progression_tracking: ddosDstEntryPortListProgressionTrackingToTerraform(struct!.progressionTracking),
    sflow: ddosDstEntryPortListSflowToTerraform(struct!.sflow),
    signature_extraction: ddosDstEntryPortListSignatureExtractionToTerraform(struct!.signatureExtraction),
    template: ddosDstEntryPortListTemplateToTerraform(struct!.template),
    topk_sources: ddosDstEntryPortListTopkSourcesToTerraform(struct!.topkSources),
  }
}


export function ddosDstEntryPortListStructToHclTerraform(struct?: DdosDstEntryPortListStruct | cdktf.IResolvable): any {
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
    detection_enable: {
      value: cdktf.numberToHclTerraform(struct!.detectionEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_cache: {
      value: cdktf.stringToHclTerraform(struct!.dnsCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_top_k: {
      value: cdktf.numberToHclTerraform(struct!.enableTopK),
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
    ip_filtering_policy: {
      value: cdktf.stringToHclTerraform(struct!.ipFilteringPolicy),
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
    set_counter_base_val: {
      value: cdktf.numberToHclTerraform(struct!.setCounterBaseVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_num_records: {
      value: cdktf.numberToHclTerraform(struct!.topkNumRecords),
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
    capture_config: {
      value: ddosDstEntryPortListCaptureConfigToHclTerraform(struct!.captureConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListCaptureConfigList",
    },
    glid_exceed_action: {
      value: ddosDstEntryPortListGlidExceedActionToHclTerraform(struct!.glidExceedAction),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListGlidExceedActionList",
    },
    ip_filtering_policy_oper: {
      value: ddosDstEntryPortListIpFilteringPolicyOperToHclTerraform(struct!.ipFilteringPolicyOper),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListIpFilteringPolicyOperList",
    },
    pattern_recognition: {
      value: ddosDstEntryPortListPatternRecognitionToHclTerraform(struct!.patternRecognition),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListPatternRecognitionList",
    },
    pattern_recognition_pu_details: {
      value: ddosDstEntryPortListPatternRecognitionPuDetailsToHclTerraform(struct!.patternRecognitionPuDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListPatternRecognitionPuDetailsList",
    },
    port_ind: {
      value: ddosDstEntryPortListPortIndToHclTerraform(struct!.portInd),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListPortIndList",
    },
    progression_tracking: {
      value: ddosDstEntryPortListProgressionTrackingToHclTerraform(struct!.progressionTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListProgressionTrackingList",
    },
    sflow: {
      value: ddosDstEntryPortListSflowToHclTerraform(struct!.sflow),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListSflowList",
    },
    signature_extraction: {
      value: ddosDstEntryPortListSignatureExtractionToHclTerraform(struct!.signatureExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListSignatureExtractionList",
    },
    template: {
      value: ddosDstEntryPortListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListTemplateList",
    },
    topk_sources: {
      value: ddosDstEntryPortListTopkSourcesToHclTerraform(struct!.topkSources),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortListTopkSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._detectionEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionEnable = this._detectionEnable;
    }
    if (this._dnsCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCache = this._dnsCache;
    }
    if (this._enableTopK !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTopK = this._enableTopK;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._ipFilteringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringPolicy = this._ipFilteringPolicy;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._setCounterBaseVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCounterBaseVal = this._setCounterBaseVal;
    }
    if (this._topkNumRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkNumRecords = this._topkNumRecords;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._captureConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfig = this._captureConfig?.internalValue;
    }
    if (this._glidExceedAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidExceedAction = this._glidExceedAction?.internalValue;
    }
    if (this._ipFilteringPolicyOper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringPolicyOper = this._ipFilteringPolicyOper?.internalValue;
    }
    if (this._patternRecognition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognition = this._patternRecognition?.internalValue;
    }
    if (this._patternRecognitionPuDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionPuDetails = this._patternRecognitionPuDetails?.internalValue;
    }
    if (this._portInd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portInd = this._portInd?.internalValue;
    }
    if (this._progressionTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTracking = this._progressionTracking?.internalValue;
    }
    if (this._sflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflow = this._sflow?.internalValue;
    }
    if (this._signatureExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureExtraction = this._signatureExtraction?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._topkSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkSources = this._topkSources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._detectionEnable = undefined;
      this._dnsCache = undefined;
      this._enableTopK = undefined;
      this._glid = undefined;
      this._ipFilteringPolicy = undefined;
      this._portNum = undefined;
      this._protocol = undefined;
      this._setCounterBaseVal = undefined;
      this._topkNumRecords = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._captureConfig.internalValue = undefined;
      this._glidExceedAction.internalValue = undefined;
      this._ipFilteringPolicyOper.internalValue = undefined;
      this._patternRecognition.internalValue = undefined;
      this._patternRecognitionPuDetails.internalValue = undefined;
      this._portInd.internalValue = undefined;
      this._progressionTracking.internalValue = undefined;
      this._sflow.internalValue = undefined;
      this._signatureExtraction.internalValue = undefined;
      this._template.internalValue = undefined;
      this._topkSources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._detectionEnable = value.detectionEnable;
      this._dnsCache = value.dnsCache;
      this._enableTopK = value.enableTopK;
      this._glid = value.glid;
      this._ipFilteringPolicy = value.ipFilteringPolicy;
      this._portNum = value.portNum;
      this._protocol = value.protocol;
      this._setCounterBaseVal = value.setCounterBaseVal;
      this._topkNumRecords = value.topkNumRecords;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._captureConfig.internalValue = value.captureConfig;
      this._glidExceedAction.internalValue = value.glidExceedAction;
      this._ipFilteringPolicyOper.internalValue = value.ipFilteringPolicyOper;
      this._patternRecognition.internalValue = value.patternRecognition;
      this._patternRecognitionPuDetails.internalValue = value.patternRecognitionPuDetails;
      this._portInd.internalValue = value.portInd;
      this._progressionTracking.internalValue = value.progressionTracking;
      this._sflow.internalValue = value.sflow;
      this._signatureExtraction.internalValue = value.signatureExtraction;
      this._template.internalValue = value.template;
      this._topkSources.internalValue = value.topkSources;
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

  // detection_enable - computed: false, optional: true, required: false
  private _detectionEnable?: number; 
  public get detectionEnable() {
    return this.getNumberAttribute('detection_enable');
  }
  public set detectionEnable(value: number) {
    this._detectionEnable = value;
  }
  public resetDetectionEnable() {
    this._detectionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionEnableInput() {
    return this._detectionEnable;
  }

  // dns_cache - computed: false, optional: true, required: false
  private _dnsCache?: string; 
  public get dnsCache() {
    return this.getStringAttribute('dns_cache');
  }
  public set dnsCache(value: string) {
    this._dnsCache = value;
  }
  public resetDnsCache() {
    this._dnsCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheInput() {
    return this._dnsCache;
  }

  // enable_top_k - computed: false, optional: true, required: false
  private _enableTopK?: number; 
  public get enableTopK() {
    return this.getNumberAttribute('enable_top_k');
  }
  public set enableTopK(value: number) {
    this._enableTopK = value;
  }
  public resetEnableTopK() {
    this._enableTopK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKInput() {
    return this._enableTopK;
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

  // ip_filtering_policy - computed: false, optional: true, required: false
  private _ipFilteringPolicy?: string; 
  public get ipFilteringPolicy() {
    return this.getStringAttribute('ip_filtering_policy');
  }
  public set ipFilteringPolicy(value: string) {
    this._ipFilteringPolicy = value;
  }
  public resetIpFilteringPolicy() {
    this._ipFilteringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyInput() {
    return this._ipFilteringPolicy;
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

  // topk_num_records - computed: false, optional: true, required: false
  private _topkNumRecords?: number; 
  public get topkNumRecords() {
    return this.getNumberAttribute('topk_num_records');
  }
  public set topkNumRecords(value: number) {
    this._topkNumRecords = value;
  }
  public resetTopkNumRecords() {
    this._topkNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkNumRecordsInput() {
    return this._topkNumRecords;
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

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig = new DdosDstEntryPortListCaptureConfigOutputReference(this, "capture_config");
  public get captureConfig() {
    return this._captureConfig;
  }
  public putCaptureConfig(value: DdosDstEntryPortListCaptureConfig) {
    this._captureConfig.internalValue = value;
  }
  public resetCaptureConfig() {
    this._captureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig.internalValue;
  }

  // glid_exceed_action - computed: false, optional: true, required: false
  private _glidExceedAction = new DdosDstEntryPortListGlidExceedActionOutputReference(this, "glid_exceed_action");
  public get glidExceedAction() {
    return this._glidExceedAction;
  }
  public putGlidExceedAction(value: DdosDstEntryPortListGlidExceedAction) {
    this._glidExceedAction.internalValue = value;
  }
  public resetGlidExceedAction() {
    this._glidExceedAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidExceedActionInput() {
    return this._glidExceedAction.internalValue;
  }

  // ip_filtering_policy_oper - computed: false, optional: true, required: false
  private _ipFilteringPolicyOper = new DdosDstEntryPortListIpFilteringPolicyOperOutputReference(this, "ip_filtering_policy_oper");
  public get ipFilteringPolicyOper() {
    return this._ipFilteringPolicyOper;
  }
  public putIpFilteringPolicyOper(value: DdosDstEntryPortListIpFilteringPolicyOper) {
    this._ipFilteringPolicyOper.internalValue = value;
  }
  public resetIpFilteringPolicyOper() {
    this._ipFilteringPolicyOper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyOperInput() {
    return this._ipFilteringPolicyOper.internalValue;
  }

  // pattern_recognition - computed: false, optional: true, required: false
  private _patternRecognition = new DdosDstEntryPortListPatternRecognitionOutputReference(this, "pattern_recognition");
  public get patternRecognition() {
    return this._patternRecognition;
  }
  public putPatternRecognition(value: DdosDstEntryPortListPatternRecognition) {
    this._patternRecognition.internalValue = value;
  }
  public resetPatternRecognition() {
    this._patternRecognition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionInput() {
    return this._patternRecognition.internalValue;
  }

  // pattern_recognition_pu_details - computed: false, optional: true, required: false
  private _patternRecognitionPuDetails = new DdosDstEntryPortListPatternRecognitionPuDetailsOutputReference(this, "pattern_recognition_pu_details");
  public get patternRecognitionPuDetails() {
    return this._patternRecognitionPuDetails;
  }
  public putPatternRecognitionPuDetails(value: DdosDstEntryPortListPatternRecognitionPuDetails) {
    this._patternRecognitionPuDetails.internalValue = value;
  }
  public resetPatternRecognitionPuDetails() {
    this._patternRecognitionPuDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionPuDetailsInput() {
    return this._patternRecognitionPuDetails.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DdosDstEntryPortListPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DdosDstEntryPortListPortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // progression_tracking - computed: false, optional: true, required: false
  private _progressionTracking = new DdosDstEntryPortListProgressionTrackingOutputReference(this, "progression_tracking");
  public get progressionTracking() {
    return this._progressionTracking;
  }
  public putProgressionTracking(value: DdosDstEntryPortListProgressionTracking) {
    this._progressionTracking.internalValue = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking.internalValue;
  }

  // sflow - computed: false, optional: true, required: false
  private _sflow = new DdosDstEntryPortListSflowOutputReference(this, "sflow");
  public get sflow() {
    return this._sflow;
  }
  public putSflow(value: DdosDstEntryPortListSflow) {
    this._sflow.internalValue = value;
  }
  public resetSflow() {
    this._sflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInput() {
    return this._sflow.internalValue;
  }

  // signature_extraction - computed: false, optional: true, required: false
  private _signatureExtraction = new DdosDstEntryPortListSignatureExtractionOutputReference(this, "signature_extraction");
  public get signatureExtraction() {
    return this._signatureExtraction;
  }
  public putSignatureExtraction(value: DdosDstEntryPortListSignatureExtraction) {
    this._signatureExtraction.internalValue = value;
  }
  public resetSignatureExtraction() {
    this._signatureExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureExtractionInput() {
    return this._signatureExtraction.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntryPortListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntryPortListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // topk_sources - computed: false, optional: true, required: false
  private _topkSources = new DdosDstEntryPortListTopkSourcesOutputReference(this, "topk_sources");
  public get topkSources() {
    return this._topkSources;
  }
  public putTopkSources(value: DdosDstEntryPortListTopkSources) {
    this._topkSources.internalValue = value;
  }
  public resetTopkSources() {
    this._topkSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSourcesInput() {
    return this._topkSources.internalValue;
  }
}

export class DdosDstEntryPortListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryPortListStructOutputReference {
    return new DdosDstEntryPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryPortRangeListCaptureConfig {
  /**
  * 'drop': Apply capture-config to dropped packets; 'forward': Apply capture-config to forwarded packets; 'all': Apply capture-config to both dropped and forwarded packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#capture_config_mode DdosDstEntry#capture_config_mode}
  */
  readonly captureConfigMode?: string;
  /**
  * Capture-config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#capture_config_name DdosDstEntry#capture_config_name}
  */
  readonly captureConfigName?: string;
}

export function ddosDstEntryPortRangeListCaptureConfigToTerraform(struct?: DdosDstEntryPortRangeListCaptureConfigOutputReference | DdosDstEntryPortRangeListCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config_mode: cdktf.stringToTerraform(struct!.captureConfigMode),
    capture_config_name: cdktf.stringToTerraform(struct!.captureConfigName),
  }
}


export function ddosDstEntryPortRangeListCaptureConfigToHclTerraform(struct?: DdosDstEntryPortRangeListCaptureConfigOutputReference | DdosDstEntryPortRangeListCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config_mode: {
      value: cdktf.stringToHclTerraform(struct!.captureConfigMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_config_name: {
      value: cdktf.stringToHclTerraform(struct!.captureConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortRangeListCaptureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortRangeListCaptureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfigMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfigMode = this._captureConfigMode;
    }
    if (this._captureConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfigName = this._captureConfigName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortRangeListCaptureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._captureConfigMode = undefined;
      this._captureConfigName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._captureConfigMode = value.captureConfigMode;
      this._captureConfigName = value.captureConfigName;
    }
  }

  // capture_config_mode - computed: false, optional: true, required: false
  private _captureConfigMode?: string; 
  public get captureConfigMode() {
    return this.getStringAttribute('capture_config_mode');
  }
  public set captureConfigMode(value: string) {
    this._captureConfigMode = value;
  }
  public resetCaptureConfigMode() {
    this._captureConfigMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigModeInput() {
    return this._captureConfigMode;
  }

  // capture_config_name - computed: false, optional: true, required: false
  private _captureConfigName?: string; 
  public get captureConfigName() {
    return this.getStringAttribute('capture_config_name');
  }
  public set captureConfigName(value: string) {
    this._captureConfigName = value;
  }
  public resetCaptureConfigName() {
    this._captureConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigNameInput() {
    return this._captureConfigName;
  }
}
export interface DdosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfg {
  /**
  * Apply legacy encap template for encap action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#encap_template DdosDstEntry#encap_template}
  */
  readonly encapTemplate?: string;
  /**
  * 'stateless-tunnel-encap': Encapsulate all packets; 'stateless-tunnel-encap-scrubbed': Encapsulate all packets and allow packets to go through other DDoS checks before sent (conn-limit exceeded packet can not be scrubbed, it will default to stateless-tunnel-encap);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#stateless_encap_action DdosDstEntry#stateless_encap_action}
  */
  readonly statelessEncapAction?: string;
}

export function ddosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfgToTerraform(struct?: DdosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap_template: cdktf.stringToTerraform(struct!.encapTemplate),
    stateless_encap_action: cdktf.stringToTerraform(struct!.statelessEncapAction),
  }
}


export function ddosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct?: DdosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap_template: {
      value: cdktf.stringToHclTerraform(struct!.encapTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stateless_encap_action: {
      value: cdktf.stringToHclTerraform(struct!.statelessEncapAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encapTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapTemplate = this._encapTemplate;
    }
    if (this._statelessEncapAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapAction = this._statelessEncapAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encapTemplate = undefined;
      this._statelessEncapAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encapTemplate = value.encapTemplate;
      this._statelessEncapAction = value.statelessEncapAction;
    }
  }

  // encap_template - computed: false, optional: true, required: false
  private _encapTemplate?: string; 
  public get encapTemplate() {
    return this.getStringAttribute('encap_template');
  }
  public set encapTemplate(value: string) {
    this._encapTemplate = value;
  }
  public resetEncapTemplate() {
    this._encapTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapTemplateInput() {
    return this._encapTemplate;
  }

  // stateless_encap_action - computed: false, optional: true, required: false
  private _statelessEncapAction?: string; 
  public get statelessEncapAction() {
    return this.getStringAttribute('stateless_encap_action');
  }
  public set statelessEncapAction(value: string) {
    this._statelessEncapAction = value;
  }
  public resetStatelessEncapAction() {
    this._statelessEncapAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionInput() {
    return this._statelessEncapAction;
  }
}
export interface DdosDstEntryPortRangeListGlidExceedAction {
  /**
  * stateless_encap_action_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#stateless_encap_action_cfg DdosDstEntry#stateless_encap_action_cfg}
  */
  readonly statelessEncapActionCfg?: DdosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfg;
}

export function ddosDstEntryPortRangeListGlidExceedActionToTerraform(struct?: DdosDstEntryPortRangeListGlidExceedActionOutputReference | DdosDstEntryPortRangeListGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stateless_encap_action_cfg: ddosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfgToTerraform(struct!.statelessEncapActionCfg),
  }
}


export function ddosDstEntryPortRangeListGlidExceedActionToHclTerraform(struct?: DdosDstEntryPortRangeListGlidExceedActionOutputReference | DdosDstEntryPortRangeListGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stateless_encap_action_cfg: {
      value: ddosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct!.statelessEncapActionCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortRangeListGlidExceedActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortRangeListGlidExceedAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statelessEncapActionCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapActionCfg = this._statelessEncapActionCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortRangeListGlidExceedAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statelessEncapActionCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statelessEncapActionCfg.internalValue = value.statelessEncapActionCfg;
    }
  }

  // stateless_encap_action_cfg - computed: false, optional: true, required: false
  private _statelessEncapActionCfg = new DdosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfgOutputReference(this, "stateless_encap_action_cfg");
  public get statelessEncapActionCfg() {
    return this._statelessEncapActionCfg;
  }
  public putStatelessEncapActionCfg(value: DdosDstEntryPortRangeListGlidExceedActionStatelessEncapActionCfg) {
    this._statelessEncapActionCfg.internalValue = value;
  }
  public resetStatelessEncapActionCfg() {
    this._statelessEncapActionCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionCfgInput() {
    return this._statelessEncapActionCfg.internalValue;
  }
}
export interface DdosDstEntryPortRangeListIpFilteringPolicyOper {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortRangeListIpFilteringPolicyOperToTerraform(struct?: DdosDstEntryPortRangeListIpFilteringPolicyOperOutputReference | DdosDstEntryPortRangeListIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortRangeListIpFilteringPolicyOperToHclTerraform(struct?: DdosDstEntryPortRangeListIpFilteringPolicyOperOutputReference | DdosDstEntryPortRangeListIpFilteringPolicyOper): any {
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

export class DdosDstEntryPortRangeListIpFilteringPolicyOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortRangeListIpFilteringPolicyOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortRangeListIpFilteringPolicyOper | undefined) {
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
export interface DdosDstEntryPortRangeListPatternRecognition {
  /**
  * 'heuristic': heuristic algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#algorithm DdosDstEntry#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Extracted filter inactive threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#filter_inactive_threshold DdosDstEntry#filter_inactive_threshold}
  */
  readonly filterInactiveThreshold?: number;
  /**
  * Extracted filter threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#filter_threshold DdosDstEntry#filter_threshold}
  */
  readonly filterThreshold?: number;
  /**
  * 'capture-never-expire': War-time capture without rate exceeding and never expires; 'manual': Manual mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#mode DdosDstEntry#mode}
  */
  readonly mode?: string;
  /**
  * 'high': High Sensitivity; 'medium': Medium Sensitivity; 'low': Low Sensitivity;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sensitivity DdosDstEntry#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortRangeListPatternRecognitionToTerraform(struct?: DdosDstEntryPortRangeListPatternRecognitionOutputReference | DdosDstEntryPortRangeListPatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    filter_inactive_threshold: cdktf.numberToTerraform(struct!.filterInactiveThreshold),
    filter_threshold: cdktf.numberToTerraform(struct!.filterThreshold),
    mode: cdktf.stringToTerraform(struct!.mode),
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortRangeListPatternRecognitionToHclTerraform(struct?: DdosDstEntryPortRangeListPatternRecognitionOutputReference | DdosDstEntryPortRangeListPatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_inactive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filterInactiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.sensitivity),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortRangeListPatternRecognitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortRangeListPatternRecognition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._filterInactiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterInactiveThreshold = this._filterInactiveThreshold;
    }
    if (this._filterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterThreshold = this._filterThreshold;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortRangeListPatternRecognition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._filterInactiveThreshold = undefined;
      this._filterThreshold = undefined;
      this._mode = undefined;
      this._sensitivity = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._filterInactiveThreshold = value.filterInactiveThreshold;
      this._filterThreshold = value.filterThreshold;
      this._mode = value.mode;
      this._sensitivity = value.sensitivity;
      this._uuid = value.uuid;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // filter_inactive_threshold - computed: false, optional: true, required: false
  private _filterInactiveThreshold?: number; 
  public get filterInactiveThreshold() {
    return this.getNumberAttribute('filter_inactive_threshold');
  }
  public set filterInactiveThreshold(value: number) {
    this._filterInactiveThreshold = value;
  }
  public resetFilterInactiveThreshold() {
    this._filterInactiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInactiveThresholdInput() {
    return this._filterInactiveThreshold;
  }

  // filter_threshold - computed: false, optional: true, required: false
  private _filterThreshold?: number; 
  public get filterThreshold() {
    return this.getNumberAttribute('filter_threshold');
  }
  public set filterThreshold(value: number) {
    this._filterThreshold = value;
  }
  public resetFilterThreshold() {
    this._filterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterThresholdInput() {
    return this._filterThreshold;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
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
export interface DdosDstEntryPortRangeListPatternRecognitionPuDetails {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortRangeListPatternRecognitionPuDetailsToTerraform(struct?: DdosDstEntryPortRangeListPatternRecognitionPuDetailsOutputReference | DdosDstEntryPortRangeListPatternRecognitionPuDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortRangeListPatternRecognitionPuDetailsToHclTerraform(struct?: DdosDstEntryPortRangeListPatternRecognitionPuDetailsOutputReference | DdosDstEntryPortRangeListPatternRecognitionPuDetails): any {
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

export class DdosDstEntryPortRangeListPatternRecognitionPuDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortRangeListPatternRecognitionPuDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortRangeListPatternRecognitionPuDetails | undefined) {
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
export interface DdosDstEntryPortRangeListPortIndSamplingEnable {
  /**
  * 'all': all; 'ip-proto-type': IP Protocol Type; 'ddet_ind_pkt_rate_current': Pkt Rate Current; 'ddet_ind_pkt_rate_min': Pkt Rate Min; 'ddet_ind_pkt_rate_max': Pkt Rate Max; 'ddet_ind_pkt_drop_rate_current': Pkt Drop Rate Current; 'ddet_ind_pkt_drop_rate_min': Pkt Drop Rate Min; 'ddet_ind_pkt_drop_rate_max': Pkt Drop Rate Max; 'ddet_ind_syn_rate_current': TCP SYN Rate Current; 'ddet_ind_syn_rate_min': TCP SYN Rate Min; 'ddet_ind_syn_rate_max': TCP SYN Rate Max; 'ddet_ind_fin_rate_current': TCP FIN Rate Current; 'ddet_ind_fin_rate_min': TCP FIN Rate Min; 'ddet_ind_fin_rate_max': TCP FIN Rate Max; 'ddet_ind_rst_rate_current': TCP RST Rate Current; 'ddet_ind_rst_rate_min': TCP RST Rate Min; 'ddet_ind_rst_rate_max': TCP RST Rate Max; 'ddet_ind_small_window_ack_rate_current': TCP Small Window ACK Rate Current; 'ddet_ind_small_window_ack_rate_min': TCP Small Window ACK Rate Min; 'ddet_ind_small_window_ack_rate_max': TCP Small Window ACK Rate Max; 'ddet_ind_empty_ack_rate_current': TCP Empty ACK Rate Current; 'ddet_ind_empty_ack_rate_min': TCP Empty ACK Rate Min; 'ddet_ind_empty_ack_rate_max': TCP Empty ACK Rate Max; 'ddet_ind_small_payload_rate_current': TCP Small Payload Rate Current; 'ddet_ind_small_payload_rate_min': TCP Small Payload Rate Min; 'ddet_ind_small_payload_rate_max': TCP Small Payload Rate Max; 'ddet_ind_pkt_drop_ratio_current': Pkt Drop / Pkt Rcvd Current; 'ddet_ind_pkt_drop_ratio_min': Pkt Drop / Pkt Rcvd Min; 'ddet_ind_pkt_drop_ratio_max': Pkt Drop / Pkt Rcvd Max; 'ddet_ind_inb_per_outb_current': Bytes-to / Bytes-from Current; 'ddet_ind_inb_per_outb_min': Bytes-to / Bytes-from Min; 'ddet_ind_inb_per_outb_max': Bytes-to / Bytes-from Max; 'ddet_ind_syn_per_fin_rate_current': TCP SYN Rate / FIN Rate Current; 'ddet_ind_syn_per_fin_rate_min': TCP SYN Rate / FIN Rate Min; 'ddet_ind_syn_per_fin_rate_max': TCP SYN Rate / FIN Rate Max; 'ddet_ind_conn_miss_rate_current': TCP Session Miss Rate Current; 'ddet_ind_conn_miss_rate_min': TCP Session Miss Rate Min; 'ddet_ind_conn_miss_rate_max': TCP Session Miss Rate Max; 'ddet_ind_concurrent_conns_current': TCP/UDP Concurrent Sessions Current; 'ddet_ind_concurrent_conns_min': TCP/UDP Concurrent Sessions Min; 'ddet_ind_concurrent_conns_max': TCP/UDP Concurrent Sessions Max; 'ddet_ind_data_cpu_util_current': Data CPU Utilization Current; 'ddet_ind_data_cpu_util_min': Data CPU Utilization Min; 'ddet_ind_data_cpu_util_max': Data CPU Utilization Max; 'ddet_ind_outside_intf_util_current': Outside Interface Utilization Current; 'ddet_ind_outside_intf_util_min': Outside Interface Utilization Min; 'ddet_ind_outside_intf_util_max': Outside Interface Utilization Max; 'ddet_ind_frag_rate_current': Frag Pkt Rate Current; 'ddet_ind_frag_rate_min': Frag Pkt Rate Min; 'ddet_ind_frag_rate_max': Frag Pkt Rate Max; 'ddet_ind_bit_rate_current': Bit Rate Current; 'ddet_ind_bit_rate_min': Bit Rate Min; 'ddet_ind_bit_rate_max': Bit Rate Max;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#counters1 DdosDstEntry#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstEntryPortRangeListPortIndSamplingEnableToTerraform(struct?: DdosDstEntryPortRangeListPortIndSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstEntryPortRangeListPortIndSamplingEnableToHclTerraform(struct?: DdosDstEntryPortRangeListPortIndSamplingEnable | cdktf.IResolvable): any {
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

export class DdosDstEntryPortRangeListPortIndSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryPortRangeListPortIndSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstEntryPortRangeListPortIndSamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosDstEntryPortRangeListPortIndSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryPortRangeListPortIndSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryPortRangeListPortIndSamplingEnableOutputReference {
    return new DdosDstEntryPortRangeListPortIndSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryPortRangeListPortInd {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sampling_enable DdosDstEntry#sampling_enable}
  */
  readonly samplingEnable?: DdosDstEntryPortRangeListPortIndSamplingEnable[] | cdktf.IResolvable;
}

export function ddosDstEntryPortRangeListPortIndToTerraform(struct?: DdosDstEntryPortRangeListPortIndOutputReference | DdosDstEntryPortRangeListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(ddosDstEntryPortRangeListPortIndSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function ddosDstEntryPortRangeListPortIndToHclTerraform(struct?: DdosDstEntryPortRangeListPortIndOutputReference | DdosDstEntryPortRangeListPortInd): any {
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
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstEntryPortRangeListPortIndSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListPortIndSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortRangeListPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortRangeListPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortRangeListPortInd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstEntryPortRangeListPortIndSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstEntryPortRangeListPortIndSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface DdosDstEntryPortRangeListProgressionTracking {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortRangeListProgressionTrackingToTerraform(struct?: DdosDstEntryPortRangeListProgressionTrackingOutputReference | DdosDstEntryPortRangeListProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortRangeListProgressionTrackingToHclTerraform(struct?: DdosDstEntryPortRangeListProgressionTrackingOutputReference | DdosDstEntryPortRangeListProgressionTracking): any {
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

export class DdosDstEntryPortRangeListProgressionTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortRangeListProgressionTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortRangeListProgressionTracking | undefined) {
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
export interface DdosDstEntryPortRangeListSflowPollingSflowTcp {
  /**
  * Enable sFlow basic TCP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_tcp_basic DdosDstEntry#sflow_tcp_basic}
  */
  readonly sflowTcpBasic?: number;
  /**
  * Enable sFlow stateful TCP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_tcp_stateful DdosDstEntry#sflow_tcp_stateful}
  */
  readonly sflowTcpStateful?: number;
}

export function ddosDstEntryPortRangeListSflowPollingSflowTcpToTerraform(struct?: DdosDstEntryPortRangeListSflowPollingSflowTcpOutputReference | DdosDstEntryPortRangeListSflowPollingSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_tcp_basic: cdktf.numberToTerraform(struct!.sflowTcpBasic),
    sflow_tcp_stateful: cdktf.numberToTerraform(struct!.sflowTcpStateful),
  }
}


export function ddosDstEntryPortRangeListSflowPollingSflowTcpToHclTerraform(struct?: DdosDstEntryPortRangeListSflowPollingSflowTcpOutputReference | DdosDstEntryPortRangeListSflowPollingSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sflow_tcp_basic: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpBasic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_tcp_stateful: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpStateful),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortRangeListSflowPollingSflowTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortRangeListSflowPollingSflowTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sflowTcpBasic !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpBasic = this._sflowTcpBasic;
    }
    if (this._sflowTcpStateful !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpStateful = this._sflowTcpStateful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortRangeListSflowPollingSflowTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sflowTcpBasic = undefined;
      this._sflowTcpStateful = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sflowTcpBasic = value.sflowTcpBasic;
      this._sflowTcpStateful = value.sflowTcpStateful;
    }
  }

  // sflow_tcp_basic - computed: false, optional: true, required: false
  private _sflowTcpBasic?: number; 
  public get sflowTcpBasic() {
    return this.getNumberAttribute('sflow_tcp_basic');
  }
  public set sflowTcpBasic(value: number) {
    this._sflowTcpBasic = value;
  }
  public resetSflowTcpBasic() {
    this._sflowTcpBasic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpBasicInput() {
    return this._sflowTcpBasic;
  }

  // sflow_tcp_stateful - computed: false, optional: true, required: false
  private _sflowTcpStateful?: number; 
  public get sflowTcpStateful() {
    return this.getNumberAttribute('sflow_tcp_stateful');
  }
  public set sflowTcpStateful(value: number) {
    this._sflowTcpStateful = value;
  }
  public resetSflowTcpStateful() {
    this._sflowTcpStateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpStatefulInput() {
    return this._sflowTcpStateful;
  }
}
export interface DdosDstEntryPortRangeListSflowPolling {
  /**
  * Enable sFlow HTTP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_http DdosDstEntry#sflow_http}
  */
  readonly sflowHttp?: number;
  /**
  * Enable sFlow packet-level counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_packets DdosDstEntry#sflow_packets}
  */
  readonly sflowPackets?: number;
  /**
  * sflow_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_tcp DdosDstEntry#sflow_tcp}
  */
  readonly sflowTcp?: DdosDstEntryPortRangeListSflowPollingSflowTcp;
}

export function ddosDstEntryPortRangeListSflowPollingToTerraform(struct?: DdosDstEntryPortRangeListSflowPollingOutputReference | DdosDstEntryPortRangeListSflowPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_http: cdktf.numberToTerraform(struct!.sflowHttp),
    sflow_packets: cdktf.numberToTerraform(struct!.sflowPackets),
    sflow_tcp: ddosDstEntryPortRangeListSflowPollingSflowTcpToTerraform(struct!.sflowTcp),
  }
}


export function ddosDstEntryPortRangeListSflowPollingToHclTerraform(struct?: DdosDstEntryPortRangeListSflowPollingOutputReference | DdosDstEntryPortRangeListSflowPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sflow_http: {
      value: cdktf.numberToHclTerraform(struct!.sflowHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_packets: {
      value: cdktf.numberToHclTerraform(struct!.sflowPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_tcp: {
      value: ddosDstEntryPortRangeListSflowPollingSflowTcpToHclTerraform(struct!.sflowTcp),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListSflowPollingSflowTcpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortRangeListSflowPollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortRangeListSflowPolling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sflowHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowHttp = this._sflowHttp;
    }
    if (this._sflowPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowPackets = this._sflowPackets;
    }
    if (this._sflowTcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcp = this._sflowTcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortRangeListSflowPolling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sflowHttp = undefined;
      this._sflowPackets = undefined;
      this._sflowTcp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sflowHttp = value.sflowHttp;
      this._sflowPackets = value.sflowPackets;
      this._sflowTcp.internalValue = value.sflowTcp;
    }
  }

  // sflow_http - computed: false, optional: true, required: false
  private _sflowHttp?: number; 
  public get sflowHttp() {
    return this.getNumberAttribute('sflow_http');
  }
  public set sflowHttp(value: number) {
    this._sflowHttp = value;
  }
  public resetSflowHttp() {
    this._sflowHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowHttpInput() {
    return this._sflowHttp;
  }

  // sflow_packets - computed: false, optional: true, required: false
  private _sflowPackets?: number; 
  public get sflowPackets() {
    return this.getNumberAttribute('sflow_packets');
  }
  public set sflowPackets(value: number) {
    this._sflowPackets = value;
  }
  public resetSflowPackets() {
    this._sflowPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowPacketsInput() {
    return this._sflowPackets;
  }

  // sflow_tcp - computed: false, optional: true, required: false
  private _sflowTcp = new DdosDstEntryPortRangeListSflowPollingSflowTcpOutputReference(this, "sflow_tcp");
  public get sflowTcp() {
    return this._sflowTcp;
  }
  public putSflowTcp(value: DdosDstEntryPortRangeListSflowPollingSflowTcp) {
    this._sflowTcp.internalValue = value;
  }
  public resetSflowTcp() {
    this._sflowTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpInput() {
    return this._sflowTcp.internalValue;
  }
}
export interface DdosDstEntryPortRangeListSflow {
  /**
  * polling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#polling DdosDstEntry#polling}
  */
  readonly polling?: DdosDstEntryPortRangeListSflowPolling;
}

export function ddosDstEntryPortRangeListSflowToTerraform(struct?: DdosDstEntryPortRangeListSflowOutputReference | DdosDstEntryPortRangeListSflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    polling: ddosDstEntryPortRangeListSflowPollingToTerraform(struct!.polling),
  }
}


export function ddosDstEntryPortRangeListSflowToHclTerraform(struct?: DdosDstEntryPortRangeListSflowOutputReference | DdosDstEntryPortRangeListSflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    polling: {
      value: ddosDstEntryPortRangeListSflowPollingToHclTerraform(struct!.polling),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListSflowPollingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortRangeListSflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortRangeListSflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._polling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.polling = this._polling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortRangeListSflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._polling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._polling.internalValue = value.polling;
    }
  }

  // polling - computed: false, optional: true, required: false
  private _polling = new DdosDstEntryPortRangeListSflowPollingOutputReference(this, "polling");
  public get polling() {
    return this._polling;
  }
  public putPolling(value: DdosDstEntryPortRangeListSflowPolling) {
    this._polling.internalValue = value;
  }
  public resetPolling() {
    this._polling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingInput() {
    return this._polling.internalValue;
  }
}
export interface DdosDstEntryPortRangeListTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dns DdosDstEntry#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#http DdosDstEntry#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sip DdosDstEntry#sip}
  */
  readonly sip?: string;
  /**
  * DDOS SSL-L4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ssl_l4 DdosDstEntry#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#tcp DdosDstEntry#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#udp DdosDstEntry#udp}
  */
  readonly udp?: string;
}

export function ddosDstEntryPortRangeListTemplateToTerraform(struct?: DdosDstEntryPortRangeListTemplateOutputReference | DdosDstEntryPortRangeListTemplate): any {
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


export function ddosDstEntryPortRangeListTemplateToHclTerraform(struct?: DdosDstEntryPortRangeListTemplateOutputReference | DdosDstEntryPortRangeListTemplate): any {
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

export class DdosDstEntryPortRangeListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortRangeListTemplate | undefined {
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

  public set internalValue(value: DdosDstEntryPortRangeListTemplate | undefined) {
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
export interface DdosDstEntryPortRangeListTopkSources {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortRangeListTopkSourcesToTerraform(struct?: DdosDstEntryPortRangeListTopkSourcesOutputReference | DdosDstEntryPortRangeListTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortRangeListTopkSourcesToHclTerraform(struct?: DdosDstEntryPortRangeListTopkSourcesOutputReference | DdosDstEntryPortRangeListTopkSources): any {
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

export class DdosDstEntryPortRangeListTopkSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortRangeListTopkSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortRangeListTopkSources | undefined) {
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
export interface DdosDstEntryPortRangeListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#deny DdosDstEntry#deny}
  */
  readonly deny?: number;
  /**
  * Enable ddos detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#detection_enable DdosDstEntry#detection_enable}
  */
  readonly detectionEnable?: number;
  /**
  * Enable ddos top-k entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#enable_top_k DdosDstEntry#enable_top_k}
  */
  readonly enableTopK?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * Configure IP Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ip_filtering_policy DdosDstEntry#ip_filtering_policy}
  */
  readonly ipFilteringPolicy?: string;
  /**
  * Port-Range End Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#port_range_end DdosDstEntry#port_range_end}
  */
  readonly portRangeEnd: number;
  /**
  * Port-Range Start Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#port_range_start DdosDstEntry#port_range_start}
  */
  readonly portRangeStart: number;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port; 'sip-udp': SIP-UDP Port; 'sip-tcp': SIP-TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#set_counter_base_val DdosDstEntry#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#topk_num_records DdosDstEntry#topk_num_records}
  */
  readonly topkNumRecords?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * capture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#capture_config DdosDstEntry#capture_config}
  */
  readonly captureConfig?: DdosDstEntryPortRangeListCaptureConfig;
  /**
  * glid_exceed_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid_exceed_action DdosDstEntry#glid_exceed_action}
  */
  readonly glidExceedAction?: DdosDstEntryPortRangeListGlidExceedAction;
  /**
  * ip_filtering_policy_oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ip_filtering_policy_oper DdosDstEntry#ip_filtering_policy_oper}
  */
  readonly ipFilteringPolicyOper?: DdosDstEntryPortRangeListIpFilteringPolicyOper;
  /**
  * pattern_recognition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#pattern_recognition DdosDstEntry#pattern_recognition}
  */
  readonly patternRecognition?: DdosDstEntryPortRangeListPatternRecognition;
  /**
  * pattern_recognition_pu_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#pattern_recognition_pu_details DdosDstEntry#pattern_recognition_pu_details}
  */
  readonly patternRecognitionPuDetails?: DdosDstEntryPortRangeListPatternRecognitionPuDetails;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#port_ind DdosDstEntry#port_ind}
  */
  readonly portInd?: DdosDstEntryPortRangeListPortInd;
  /**
  * progression_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#progression_tracking DdosDstEntry#progression_tracking}
  */
  readonly progressionTracking?: DdosDstEntryPortRangeListProgressionTracking;
  /**
  * sflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow DdosDstEntry#sflow}
  */
  readonly sflow?: DdosDstEntryPortRangeListSflow;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntryPortRangeListTemplate;
  /**
  * topk_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#topk_sources DdosDstEntry#topk_sources}
  */
  readonly topkSources?: DdosDstEntryPortRangeListTopkSources;
}

export function ddosDstEntryPortRangeListStructToTerraform(struct?: DdosDstEntryPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    detection_enable: cdktf.numberToTerraform(struct!.detectionEnable),
    enable_top_k: cdktf.numberToTerraform(struct!.enableTopK),
    glid: cdktf.stringToTerraform(struct!.glid),
    ip_filtering_policy: cdktf.stringToTerraform(struct!.ipFilteringPolicy),
    port_range_end: cdktf.numberToTerraform(struct!.portRangeEnd),
    port_range_start: cdktf.numberToTerraform(struct!.portRangeStart),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    set_counter_base_val: cdktf.numberToTerraform(struct!.setCounterBaseVal),
    topk_num_records: cdktf.numberToTerraform(struct!.topkNumRecords),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    capture_config: ddosDstEntryPortRangeListCaptureConfigToTerraform(struct!.captureConfig),
    glid_exceed_action: ddosDstEntryPortRangeListGlidExceedActionToTerraform(struct!.glidExceedAction),
    ip_filtering_policy_oper: ddosDstEntryPortRangeListIpFilteringPolicyOperToTerraform(struct!.ipFilteringPolicyOper),
    pattern_recognition: ddosDstEntryPortRangeListPatternRecognitionToTerraform(struct!.patternRecognition),
    pattern_recognition_pu_details: ddosDstEntryPortRangeListPatternRecognitionPuDetailsToTerraform(struct!.patternRecognitionPuDetails),
    port_ind: ddosDstEntryPortRangeListPortIndToTerraform(struct!.portInd),
    progression_tracking: ddosDstEntryPortRangeListProgressionTrackingToTerraform(struct!.progressionTracking),
    sflow: ddosDstEntryPortRangeListSflowToTerraform(struct!.sflow),
    template: ddosDstEntryPortRangeListTemplateToTerraform(struct!.template),
    topk_sources: ddosDstEntryPortRangeListTopkSourcesToTerraform(struct!.topkSources),
  }
}


export function ddosDstEntryPortRangeListStructToHclTerraform(struct?: DdosDstEntryPortRangeListStruct | cdktf.IResolvable): any {
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
    detection_enable: {
      value: cdktf.numberToHclTerraform(struct!.detectionEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_top_k: {
      value: cdktf.numberToHclTerraform(struct!.enableTopK),
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
    ip_filtering_policy: {
      value: cdktf.stringToHclTerraform(struct!.ipFilteringPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.portRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_start: {
      value: cdktf.numberToHclTerraform(struct!.portRangeStart),
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
    set_counter_base_val: {
      value: cdktf.numberToHclTerraform(struct!.setCounterBaseVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_num_records: {
      value: cdktf.numberToHclTerraform(struct!.topkNumRecords),
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
    capture_config: {
      value: ddosDstEntryPortRangeListCaptureConfigToHclTerraform(struct!.captureConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListCaptureConfigList",
    },
    glid_exceed_action: {
      value: ddosDstEntryPortRangeListGlidExceedActionToHclTerraform(struct!.glidExceedAction),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListGlidExceedActionList",
    },
    ip_filtering_policy_oper: {
      value: ddosDstEntryPortRangeListIpFilteringPolicyOperToHclTerraform(struct!.ipFilteringPolicyOper),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListIpFilteringPolicyOperList",
    },
    pattern_recognition: {
      value: ddosDstEntryPortRangeListPatternRecognitionToHclTerraform(struct!.patternRecognition),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListPatternRecognitionList",
    },
    pattern_recognition_pu_details: {
      value: ddosDstEntryPortRangeListPatternRecognitionPuDetailsToHclTerraform(struct!.patternRecognitionPuDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListPatternRecognitionPuDetailsList",
    },
    port_ind: {
      value: ddosDstEntryPortRangeListPortIndToHclTerraform(struct!.portInd),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListPortIndList",
    },
    progression_tracking: {
      value: ddosDstEntryPortRangeListProgressionTrackingToHclTerraform(struct!.progressionTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListProgressionTrackingList",
    },
    sflow: {
      value: ddosDstEntryPortRangeListSflowToHclTerraform(struct!.sflow),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListSflowList",
    },
    template: {
      value: ddosDstEntryPortRangeListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListTemplateList",
    },
    topk_sources: {
      value: ddosDstEntryPortRangeListTopkSourcesToHclTerraform(struct!.topkSources),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortRangeListTopkSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._detectionEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionEnable = this._detectionEnable;
    }
    if (this._enableTopK !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTopK = this._enableTopK;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._ipFilteringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringPolicy = this._ipFilteringPolicy;
    }
    if (this._portRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeEnd = this._portRangeEnd;
    }
    if (this._portRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeStart = this._portRangeStart;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._setCounterBaseVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCounterBaseVal = this._setCounterBaseVal;
    }
    if (this._topkNumRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkNumRecords = this._topkNumRecords;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._captureConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfig = this._captureConfig?.internalValue;
    }
    if (this._glidExceedAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidExceedAction = this._glidExceedAction?.internalValue;
    }
    if (this._ipFilteringPolicyOper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringPolicyOper = this._ipFilteringPolicyOper?.internalValue;
    }
    if (this._patternRecognition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognition = this._patternRecognition?.internalValue;
    }
    if (this._patternRecognitionPuDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionPuDetails = this._patternRecognitionPuDetails?.internalValue;
    }
    if (this._portInd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portInd = this._portInd?.internalValue;
    }
    if (this._progressionTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTracking = this._progressionTracking?.internalValue;
    }
    if (this._sflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflow = this._sflow?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._topkSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkSources = this._topkSources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._detectionEnable = undefined;
      this._enableTopK = undefined;
      this._glid = undefined;
      this._ipFilteringPolicy = undefined;
      this._portRangeEnd = undefined;
      this._portRangeStart = undefined;
      this._protocol = undefined;
      this._setCounterBaseVal = undefined;
      this._topkNumRecords = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._captureConfig.internalValue = undefined;
      this._glidExceedAction.internalValue = undefined;
      this._ipFilteringPolicyOper.internalValue = undefined;
      this._patternRecognition.internalValue = undefined;
      this._patternRecognitionPuDetails.internalValue = undefined;
      this._portInd.internalValue = undefined;
      this._progressionTracking.internalValue = undefined;
      this._sflow.internalValue = undefined;
      this._template.internalValue = undefined;
      this._topkSources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._detectionEnable = value.detectionEnable;
      this._enableTopK = value.enableTopK;
      this._glid = value.glid;
      this._ipFilteringPolicy = value.ipFilteringPolicy;
      this._portRangeEnd = value.portRangeEnd;
      this._portRangeStart = value.portRangeStart;
      this._protocol = value.protocol;
      this._setCounterBaseVal = value.setCounterBaseVal;
      this._topkNumRecords = value.topkNumRecords;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._captureConfig.internalValue = value.captureConfig;
      this._glidExceedAction.internalValue = value.glidExceedAction;
      this._ipFilteringPolicyOper.internalValue = value.ipFilteringPolicyOper;
      this._patternRecognition.internalValue = value.patternRecognition;
      this._patternRecognitionPuDetails.internalValue = value.patternRecognitionPuDetails;
      this._portInd.internalValue = value.portInd;
      this._progressionTracking.internalValue = value.progressionTracking;
      this._sflow.internalValue = value.sflow;
      this._template.internalValue = value.template;
      this._topkSources.internalValue = value.topkSources;
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

  // detection_enable - computed: false, optional: true, required: false
  private _detectionEnable?: number; 
  public get detectionEnable() {
    return this.getNumberAttribute('detection_enable');
  }
  public set detectionEnable(value: number) {
    this._detectionEnable = value;
  }
  public resetDetectionEnable() {
    this._detectionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionEnableInput() {
    return this._detectionEnable;
  }

  // enable_top_k - computed: false, optional: true, required: false
  private _enableTopK?: number; 
  public get enableTopK() {
    return this.getNumberAttribute('enable_top_k');
  }
  public set enableTopK(value: number) {
    this._enableTopK = value;
  }
  public resetEnableTopK() {
    this._enableTopK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKInput() {
    return this._enableTopK;
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

  // ip_filtering_policy - computed: false, optional: true, required: false
  private _ipFilteringPolicy?: string; 
  public get ipFilteringPolicy() {
    return this.getStringAttribute('ip_filtering_policy');
  }
  public set ipFilteringPolicy(value: string) {
    this._ipFilteringPolicy = value;
  }
  public resetIpFilteringPolicy() {
    this._ipFilteringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyInput() {
    return this._ipFilteringPolicy;
  }

  // port_range_end - computed: false, optional: false, required: true
  private _portRangeEnd?: number; 
  public get portRangeEnd() {
    return this.getNumberAttribute('port_range_end');
  }
  public set portRangeEnd(value: number) {
    this._portRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: false, required: true
  private _portRangeStart?: number; 
  public get portRangeStart() {
    return this.getNumberAttribute('port_range_start');
  }
  public set portRangeStart(value: number) {
    this._portRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
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

  // topk_num_records - computed: false, optional: true, required: false
  private _topkNumRecords?: number; 
  public get topkNumRecords() {
    return this.getNumberAttribute('topk_num_records');
  }
  public set topkNumRecords(value: number) {
    this._topkNumRecords = value;
  }
  public resetTopkNumRecords() {
    this._topkNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkNumRecordsInput() {
    return this._topkNumRecords;
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

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig = new DdosDstEntryPortRangeListCaptureConfigOutputReference(this, "capture_config");
  public get captureConfig() {
    return this._captureConfig;
  }
  public putCaptureConfig(value: DdosDstEntryPortRangeListCaptureConfig) {
    this._captureConfig.internalValue = value;
  }
  public resetCaptureConfig() {
    this._captureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig.internalValue;
  }

  // glid_exceed_action - computed: false, optional: true, required: false
  private _glidExceedAction = new DdosDstEntryPortRangeListGlidExceedActionOutputReference(this, "glid_exceed_action");
  public get glidExceedAction() {
    return this._glidExceedAction;
  }
  public putGlidExceedAction(value: DdosDstEntryPortRangeListGlidExceedAction) {
    this._glidExceedAction.internalValue = value;
  }
  public resetGlidExceedAction() {
    this._glidExceedAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidExceedActionInput() {
    return this._glidExceedAction.internalValue;
  }

  // ip_filtering_policy_oper - computed: false, optional: true, required: false
  private _ipFilteringPolicyOper = new DdosDstEntryPortRangeListIpFilteringPolicyOperOutputReference(this, "ip_filtering_policy_oper");
  public get ipFilteringPolicyOper() {
    return this._ipFilteringPolicyOper;
  }
  public putIpFilteringPolicyOper(value: DdosDstEntryPortRangeListIpFilteringPolicyOper) {
    this._ipFilteringPolicyOper.internalValue = value;
  }
  public resetIpFilteringPolicyOper() {
    this._ipFilteringPolicyOper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyOperInput() {
    return this._ipFilteringPolicyOper.internalValue;
  }

  // pattern_recognition - computed: false, optional: true, required: false
  private _patternRecognition = new DdosDstEntryPortRangeListPatternRecognitionOutputReference(this, "pattern_recognition");
  public get patternRecognition() {
    return this._patternRecognition;
  }
  public putPatternRecognition(value: DdosDstEntryPortRangeListPatternRecognition) {
    this._patternRecognition.internalValue = value;
  }
  public resetPatternRecognition() {
    this._patternRecognition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionInput() {
    return this._patternRecognition.internalValue;
  }

  // pattern_recognition_pu_details - computed: false, optional: true, required: false
  private _patternRecognitionPuDetails = new DdosDstEntryPortRangeListPatternRecognitionPuDetailsOutputReference(this, "pattern_recognition_pu_details");
  public get patternRecognitionPuDetails() {
    return this._patternRecognitionPuDetails;
  }
  public putPatternRecognitionPuDetails(value: DdosDstEntryPortRangeListPatternRecognitionPuDetails) {
    this._patternRecognitionPuDetails.internalValue = value;
  }
  public resetPatternRecognitionPuDetails() {
    this._patternRecognitionPuDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionPuDetailsInput() {
    return this._patternRecognitionPuDetails.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DdosDstEntryPortRangeListPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DdosDstEntryPortRangeListPortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // progression_tracking - computed: false, optional: true, required: false
  private _progressionTracking = new DdosDstEntryPortRangeListProgressionTrackingOutputReference(this, "progression_tracking");
  public get progressionTracking() {
    return this._progressionTracking;
  }
  public putProgressionTracking(value: DdosDstEntryPortRangeListProgressionTracking) {
    this._progressionTracking.internalValue = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking.internalValue;
  }

  // sflow - computed: false, optional: true, required: false
  private _sflow = new DdosDstEntryPortRangeListSflowOutputReference(this, "sflow");
  public get sflow() {
    return this._sflow;
  }
  public putSflow(value: DdosDstEntryPortRangeListSflow) {
    this._sflow.internalValue = value;
  }
  public resetSflow() {
    this._sflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInput() {
    return this._sflow.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntryPortRangeListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntryPortRangeListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // topk_sources - computed: false, optional: true, required: false
  private _topkSources = new DdosDstEntryPortRangeListTopkSourcesOutputReference(this, "topk_sources");
  public get topkSources() {
    return this._topkSources;
  }
  public putTopkSources(value: DdosDstEntryPortRangeListTopkSources) {
    this._topkSources.internalValue = value;
  }
  public resetTopkSources() {
    this._topkSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSourcesInput() {
    return this._topkSources.internalValue;
  }
}

export class DdosDstEntryPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryPortRangeListStructOutputReference {
    return new DdosDstEntryPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySamplingEnable {
  /**
  * 'all': all; 'dst_tcp_any_exceed': TCP Dst L4-Type Rate: Total Exceeded; 'dst_tcp_pkt_rate_exceed': TCP Dst L4-Type Rate: Packet Exceeded; 'dst_tcp_conn_rate_exceed': TCP Dst L4-Type Rate: Conn Exceeded; 'dst_udp_any_exceed': UDP Dst L4-Type Rate: Total Exceeded; 'dst_udp_pkt_rate_exceed': UDP Dst L4-Type Rate: Packet Exceeded; 'dst_udp_conn_limit_exceed': UDP Dst L4-Type Limit: Conn Exceeded; 'dst_udp_conn_rate_exceed': UDP Dst L4-Type Rate: Conn Exceeded; 'dst_icmp_pkt_rate_exceed': ICMP Dst Rate: Packet Exceeded; 'dst_other_pkt_rate_exceed': OTHER Dst L4-Type Rate: Packet Exceeded; 'dst_other_frag_pkt_rate_exceed': OTHER Dst L4-Type Rate: Frag Exceeded; 'dst_port_pkt_rate_exceed': Port Rate: Packet Exceeded; 'dst_port_conn_limit_exceed': Port Limit: Conn Exceeded; 'dst_port_conn_rate_exceed': Port Rate: Conn Exceeded; 'dst_pkt_sent': Inbound: Packets Forwarded; 'dst_udp_pkt_sent': UDP Total Packets Forwarded; 'dst_tcp_pkt_sent': TCP Total Packets Forwarded; 'dst_icmp_pkt_sent': ICMP Total Packets Forwarded; 'dst_other_pkt_sent': OTHER Total Packets Forwarded; 'dst_tcp_conn_limit_exceed': TCP Dst L4-Type Limit: Conn Exceeded; 'dst_tcp_pkt_rcvd': TCP Total Packets Received; 'dst_udp_pkt_rcvd': UDP Total Packets Received; 'dst_icmp_pkt_rcvd': ICMP Total Packets Received; 'dst_other_pkt_rcvd': OTHER Total Packets Received; 'dst_udp_filter_match': UDP Filter Match; 'dst_udp_filter_not_match': UDP Filter Not Matched on Pkt; 'dst_udp_filter_action_blacklist': UDP Filter Action Blacklist; 'dst_udp_filter_action_drop': UDP Filter Action Drop; 'dst_tcp_syn': TCP Total SYN Received; 'dst_tcp_syn_drop': TCP SYN Packets Dropped; 'dst_tcp_src_rate_drop': TCP Src Rate: Total Exceeded; 'dst_udp_src_rate_drop': UDP Src Rate: Total Exceeded; 'dst_icmp_src_rate_drop': ICMP Src Rate: Total Exceeded; 'dst_other_frag_src_rate_drop': OTHER Src Rate: Frag Exceeded; 'dst_other_src_rate_drop': OTHER Src Rate: Total Exceeded; 'dst_tcp_drop': TCP Total Packets Dropped; 'dst_udp_drop': UDP Total Packets Dropped; 'dst_icmp_drop': ICMP Total Packets Dropped; 'dst_frag_drop': Fragmented Packets Dropped; 'dst_other_drop': OTHER Total Packets Dropped; 'dst_tcp_auth': TCP Auth: SYN Cookie Sent; 'dst_udp_filter_action_default_pass': UDP Filter Action Default Pass; 'dst_tcp_filter_match': TCP Filter Match; 'dst_tcp_filter_not_match': TCP Filter Not Matched on Pkt; 'dst_tcp_filter_action_blacklist': TCP Filter Action Blacklist; 'dst_tcp_filter_action_drop': TCP Filter Action Drop; 'dst_tcp_filter_action_default_pass': TCP Filter Action Default Pass; 'dst_udp_filter_action_whitelist': UDP Filter Action WL; 'dst_over_limit_on': DST overlimit Trigger ON; 'dst_over_limit_off': DST overlimit Trigger OFF; 'dst_port_over_limit_on': DST port overlimit Trigger ON; 'dst_port_over_limit_off': DST port overlimit Trigger OFF; 'dst_over_limit_action': DST overlimit action; 'dst_port_over_limit_action': DST port overlimit action; 'scanning_detected_drop': Scanning Detected drop (deprecated); 'scanning_detected_blacklist': Scanning Detected blacklist (deprecated); 'dst_udp_kibit_rate_drop': UDP Dst L4-Type Rate: KiBit Exceeded; 'dst_tcp_kibit_rate_drop': TCP Dst L4-Type Rate: KiBit Exceeded; 'dst_icmp_kibit_rate_drop': ICMP Dst Rate: KiBit Exceeded; 'dst_other_kibit_rate_drop': OTHER Dst L4-Type Rate: KiBit Exceeded; 'dst_port_undef_drop': Dst Port Undefined Dropped; 'dst_port_bl': Dst Port Blacklist Packets Dropped; 'dst_src_port_bl': Dst SrcPort Blacklist Packets Dropped; 'dst_port_kbit_rate_exceed': Port Rate: KiBit Exceeded; 'dst_tcp_src_drop': TCP Src Packets Dropped; 'dst_udp_src_drop': UDP Src Packets Dropped; 'dst_icmp_src_drop': ICMP Src Packets Dropped; 'dst_other_src_drop': OTHER Src Packets Dropped; 'tcp_syn_rcvd': TCP Inbound SYN Received; 'tcp_syn_ack_rcvd': TCP SYN ACK Received; 'tcp_ack_rcvd': TCP ACK Received; 'tcp_fin_rcvd': TCP FIN Received; 'tcp_rst_rcvd': TCP RST Received; 'ingress_bytes': Inbound: Bytes Received; 'egress_bytes': Outbound: Bytes Received; 'ingress_packets': Inbound: Packets Received; 'egress_packets': Outbound: Packets Received; 'tcp_fwd_recv': TCP Inbound Packets Received; 'udp_fwd_recv': UDP Inbound Packets Received; 'icmp_fwd_recv': ICMP Inbound Packets Received; 'tcp_syn_cookie_fail': TCP Auth: SYN Cookie Failed; 'dst_tcp_session_created': TCP Sessions Created; 'dst_udp_session_created': UDP Sessions Created; 'dst_tcp_filter_action_whitelist': TCP Filter Action WL; 'dst_other_filter_match': OTHER Filter Match; 'dst_other_filter_not_match': OTHER Filter Not Matched on Pkt; 'dst_other_filter_action_blacklist': OTHER Filter Action Blacklist; 'dst_other_filter_action_drop': OTHER Filter Action Drop; 'dst_other_filter_action_whitelist': OTHER Filter Action WL; 'dst_other_filter_action_default_pass': OTHER Filter Action Default Pass; 'dst_blackhole_inject': Dst Blackhole Inject; 'dst_blackhole_withdraw': Dst Blackhole Withdraw; 'dst_tcp_out_of_seq_excd': TCP Out-Of-Seq Exceeded; 'dst_tcp_retransmit_excd': TCP Retransmit Exceeded; 'dst_tcp_zero_window_excd': TCP Zero-Window Exceeded; 'dst_tcp_conn_prate_excd': TCP Rate: Conn Pkt Exceeded; 'dst_tcp_action_on_ack_init': TCP Auth: ACK Retry Init; 'dst_tcp_action_on_ack_gap_drop': TCP Auth: ACK Retry Retry-Gap Dropped; 'dst_tcp_action_on_ack_fail': TCP Auth: ACK Retry Dropped; 'dst_tcp_action_on_ack_pass': TCP Auth: ACK Retry Passed; 'dst_tcp_action_on_syn_init': TCP Auth: SYN Retry Init; 'dst_tcp_action_on_syn_gap_drop': TCP Auth: SYN Retry-Gap Dropped; 'dst_tcp_action_on_syn_fail': TCP Auth: SYN Retry Dropped; 'dst_tcp_action_on_syn_pass': TCP Auth: SYN Retry Passed; 'udp_payload_too_small': UDP Payload Too Small; 'udp_payload_too_big': UDP Payload Too Large; 'dst_udp_conn_prate_excd': UDP Rate: Conn Pkt Exceeded; 'dst_udp_ntp_monlist_req': UDP NTP Monlist Request; 'dst_udp_ntp_monlist_resp': UDP NTP Monlist Response; 'dst_udp_wellknown_sport_drop': UDP SrcPort Wellknown; 'dst_udp_retry_init': UDP Auth: Retry Init; 'dst_udp_retry_pass': UDP Auth: Retry Passed; 'dst_tcp_bytes_drop': TCP Total Bytes Dropped; 'dst_udp_bytes_drop': UDP Total Bytes Dropped; 'dst_icmp_bytes_drop': ICMP Total Bytes Dropped; 'dst_other_bytes_drop': OTHER Total Bytes Dropped; 'dst_out_no_route': Dst IPv4/v6 Out No Route; 'outbound_bytes_sent': Outbound: Bytes Forwarded; 'outbound_pkt_drop': Outbound: Packets Dropped; 'outbound_bytes_drop': Outbound: Bytes Dropped; 'outbound_pkt_sent': Outbound: Packets Forwarded; 'inbound_bytes_sent': Inbound: Bytes Forwarded; 'inbound_bytes_drop': Inbound: Bytes Dropped; 'dst_src_port_pkt_rate_exceed': SrcPort Rate: Packet Exceeded; 'dst_src_port_kbit_rate_exceed': SrcPort Rate: KiBit Exceeded; 'dst_src_port_conn_limit_exceed': SrcPort Limit: Conn Exceeded; 'dst_src_port_conn_rate_exceed': SrcPort Rate: Conn Exceeded; 'dst_ip_proto_pkt_rate_exceed': IP-Proto Rate: Packet Exceeded; 'dst_ip_proto_kbit_rate_exceed': IP-Proto Rate: KiBit Exceeded; 'dst_tcp_port_any_exceed': TCP Port Rate: Total Exceed; 'dst_udp_port_any_exceed': UDP Port Rate: Total Exceed; 'dst_tcp_auth_pass': TCP Auth: SYN Auth Passed; 'dst_tcp_rst_cookie_fail': TCP Auth: RST Cookie Failed; 'dst_tcp_unauth_drop': TCP Auth: Unauth Dropped; 'src_tcp_syn_auth_fail': Src TCP Auth: SYN Auth Failed; 'src_tcp_syn_cookie_sent': Src TCP Auth: SYN Cookie Sent; 'src_tcp_syn_cookie_fail': Src TCP Auth: SYN Cookie Failed; 'src_tcp_rst_cookie_fail': Src TCP Auth: RST Cookie Failed; 'src_tcp_unauth_drop': Src TCP Auth: Unauth Dropped; 'src_tcp_action_on_syn_init': Src TCP Auth: SYN Retry Init;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#counters1 DdosDstEntry#counters1}
  */
  readonly counters1?: string;
  /**
  * 'src_tcp_action_on_syn_gap_drop': Src TCP Auth: SYN Retry-Gap Dropped; 'src_tcp_action_on_syn_fail': Src TCP Auth: SYN Retry Dropped; 'src_tcp_action_on_ack_init': Src TCP Auth: ACK Retry Init; 'src_tcp_action_on_ack_gap_drop': Src TCP Auth: ACK Retry Retry-Gap Dropped; 'src_tcp_action_on_ack_fail': Src TCP Auth: ACK Retry Dropped; 'src_tcp_out_of_seq_excd': Src TCP Out-Of-Seq Exceeded; 'src_tcp_retransmit_excd': Src TCP Retransmit Exceeded; 'src_tcp_zero_window_excd': Src TCP Zero-Window Exceeded; 'src_tcp_conn_prate_excd': Src TCP Rate: Conn Pkt Exceeded; 'src_udp_min_payload': Src UDP Payload Too Small; 'src_udp_max_payload': Src UDP Payload Too Large; 'src_udp_conn_prate_excd': Src UDP Rate: Conn Pkt Exceeded; 'src_udp_ntp_monlist_req': Src UDP NTP Monlist Request; 'src_udp_ntp_monlist_resp': Src UDP NTP Monlist Response; 'src_udp_wellknown_sport_drop': Src UDP SrcPort Wellknown; 'src_udp_retry_init': Src UDP Auth: Retry Init; 'dst_udp_retry_gap_drop': UDP Auth: Retry-Gap Dropped; 'dst_udp_retry_fail': UDP Auth: Retry Timeout; 'dst_tcp_session_aged': TCP Sessions Aged; 'dst_udp_session_aged': UDP Sessions Aged; 'dst_tcp_conn_close': TCP Connections Closed; 'dst_tcp_conn_close_half_open': TCP Half Open Connections Closed; 'dst_l4_tcp_auth': TCP Dst L4-Type Auth: SYN Cookie Sent; 'tcp_l4_syn_cookie_fail': TCP Dst L4-Type Auth: SYN Cookie Failed; 'tcp_l4_rst_cookie_fail': TCP Dst L4-Type Auth: RST Cookie Failed; 'tcp_l4_unauth_drop': TCP Dst L4-Type Auth: Unauth Dropped; 'dst_drop_frag_pkt': Dst Fragmented Packets Dropped; 'src_tcp_filter_action_blacklist': Src TCP Filter Action Blacklist; 'src_tcp_filter_action_whitelist': Src TCP Filter Action WL; 'src_tcp_filter_action_drop': Src TCP Filter Action Drop; 'src_tcp_filter_action_default_pass': Src TCP Filter Action Default Pass; 'src_udp_filter_action_blacklist': Src UDP Filter Action Blacklist; 'src_udp_filter_action_whitelist': Src UDP Filter Action WL; 'src_udp_filter_action_drop': Src UDP Filter Action Drop; 'src_udp_filter_action_default_pass': Src UDP Filter Action Default Pass; 'src_other_filter_action_blacklist': Src OTHER Filter Action Blacklist; 'src_other_filter_action_whitelist': Src OTHER Filter Action WL; 'src_other_filter_action_drop': Src OTHER Filter Action Drop; 'src_other_filter_action_default_pass': Src OTHER Filter Action Default Pass; 'tcp_invalid_syn': TCP Invalid SYN Received; 'dst_tcp_conn_close_w_rst': TCP RST Connections Closed; 'dst_tcp_conn_close_w_fin': TCP FIN Connections Closed; 'dst_tcp_conn_close_w_idle': TCP Idle Connections Closed; 'dst_tcp_conn_create_from_syn': TCP Connections Created From SYN; 'dst_tcp_conn_create_from_ack': TCP Connections Created From ACK; 'src_frag_drop': Src Fragmented Packets Dropped; 'dst_l4_tcp_blacklist_drop': Dst L4-type TCP Blacklist Dropped; 'dst_l4_udp_blacklist_drop': Dst L4-type UDP Blacklist Dropped; 'dst_l4_icmp_blacklist_drop': Dst L4-type ICMP Blacklist Dropped; 'dst_l4_other_blacklist_drop': Dst L4-type OTHER Blacklist Dropped; 'src_l4_tcp_blacklist_drop': Src L4-type TCP Blacklist Dropped; 'src_l4_udp_blacklist_drop': Src L4-type UDP Blacklist Dropped; 'src_l4_icmp_blacklist_drop': Src L4-type ICMP Blacklist Dropped; 'src_l4_other_blacklist_drop': Src L4-type OTHER Blacklist Dropped; 'drop_frag_timeout_drop': Fragment Reassemble Timeout Drop; 'dst_port_kbit_rate_exceed_pkt': Port Rate: KiBit Pkt Exceeded; 'dst_tcp_bytes_rcv': TCP Total Bytes Received; 'dst_udp_bytes_rcv': UDP Total Bytes Received; 'dst_icmp_bytes_rcv': ICMP Total Bytes Received; 'dst_other_bytes_rcv': OTHER Total Bytes Received; 'dst_tcp_bytes_sent': TCP Total Bytes Forwarded; 'dst_udp_bytes_sent': UDP Total Bytes Forwarded; 'dst_icmp_bytes_sent': ICMP Total Bytes Forwarded; 'dst_other_bytes_sent': OTHER Total Bytes Forwarded; 'dst_udp_auth_drop': UDP Auth: Dropped; 'dst_tcp_auth_drop': TCP Auth: Dropped; 'dst_tcp_auth_resp': TCP Auth: Responded; 'inbound_pkt_drop': Inbound: Packets Dropped; 'dst_entry_pkt_rate_exceed': Entry Rate: Packet Exceeded; 'dst_entry_kbit_rate_exceed': Entry Rate: KiBit Exceeded; 'dst_entry_conn_limit_exceed': Entry Limit: Conn Exceeded; 'dst_entry_conn_rate_exceed': Entry Rate: Conn Exceeded; 'dst_entry_frag_pkt_rate_exceed': Entry Rate: Frag Packet Exceeded; 'dst_icmp_any_exceed': ICMP Rate: Total Exceed; 'dst_other_any_exceed': OTHER Rate: Total Exceed; 'src_dst_pair_entry_total': Src-Dst Pair Entry Total Count; 'src_dst_pair_entry_udp': Src-Dst Pair Entry UDP Count; 'src_dst_pair_entry_tcp': Src-Dst Pair Entry TCP Count; 'src_dst_pair_entry_icmp': Src-Dst Pair Entry ICMP Count; 'src_dst_pair_entry_other': Src-Dst Pair Entry OTHER Count; 'dst_clist_overflow_policy_at_learning': Dst Src-Based Overflow Policy Hit; 'tcp_rexmit_syn_limit_drop': TCP SYN Retransmit Exceeded Drop; 'tcp_rexmit_syn_limit_bl': TCP SYN Retransmit Exceeded Blacklist; 'dst_tcp_wellknown_sport_drop': TCP SrcPort Wellknown; 'src_tcp_wellknown_sport_drop': Src TCP SrcPort Wellknown; 'dst_frag_rcvd': Fragmented Packets Received; 'no_policy_class_list_match': No Policy Class-list Match; 'src_udp_retry_gap_drop': Src UDP Auth: Retry-Gap Dropped; 'dst_entry_kbit_rate_exceed_count': Entry Rate: KiBit Exceeded Count; 'dst_port_undef_hit': Dst Port Undefined Hit; 'dst_tcp_action_on_ack_timeout': TCP Auth: ACK Retry Timeout; 'dst_tcp_action_on_ack_reset': TCP Auth: ACK Retry Timeout Reset; 'dst_tcp_action_on_ack_blacklist': TCP Auth: ACK Retry Timeout Blacklisted; 'src_tcp_action_on_ack_timeout': Src TCP Auth: ACK Retry Timeout; 'src_tcp_action_on_ack_reset': Src TCP Auth: ACK Retry Timeout Reset; 'src_tcp_action_on_ack_blacklist': Src TCP Auth: ACK Retry Timeout Blacklisted; 'dst_tcp_action_on_syn_timeout': TCP Auth: SYN Retry Timeout; 'dst_tcp_action_on_syn_reset': TCP Auth: SYN Retry Timeout Reset; 'dst_tcp_action_on_syn_blacklist': TCP Auth: SYN Retry Timeout Blacklisted; 'src_tcp_action_on_syn_timeout': Src TCP Auth: SYN Retry Timeout; 'src_tcp_action_on_syn_reset': Src TCP Auth: SYN Retry Timeout Reset; 'src_tcp_action_on_syn_blacklist': Src TCP Auth: SYN Retry Timeout Blacklisted; 'dst_udp_frag_pkt_rate_exceed': UDP Dst L4-Type Rate: Frag Exceeded; 'dst_udp_frag_src_rate_drop': UDP Src Rate: Frag Exceeded; 'dst_tcp_frag_pkt_rate_exceed': TCP Dst L4-Type Rate: Frag Exceeded; 'dst_tcp_frag_src_rate_drop': TCP Src Rate: Frag Exceeded; 'dst_icmp_frag_pkt_rate_exceed': ICMP Dst L4-Type Rate: Frag Exceeded; 'dst_icmp_frag_src_rate_drop': ICMP Src Rate: Frag Exceeded; 'sflow_internal_samples_packed': Sflow Internal Samples Packed; 'sflow_external_samples_packed': Sflow External Samples Packed; 'sflow_internal_packets_sent': Sflow Internal Packets Sent; 'sflow_external_packets_sent': Sflow External Packets Sent; 'dns_outbound_total_query': DNS Outbound Total Query; 'dns_outbound_query_malformed': DNS Outbound Query Malformed; 'dns_outbound_query_resp_chk_failed': DNS Outbound Query Resp Check Failed; 'dns_outbound_query_resp_chk_blacklisted': DNS Outbound Query Resp Check Blacklisted; 'dns_outbound_query_resp_chk_refused_sent': DNS Outbound Query Resp Check REFUSED Sent; 'dns_outbound_query_resp_chk_reset_sent': DNS Outbound Query Resp Check RESET Sent; 'dns_outbound_query_resp_chk_no_resp_sent': DNS Outbound Query Resp Check No Response Sent; 'dns_outbound_query_resp_size_exceed': DNS Outbound Query Response Size Exceed; 'dns_outbound_query_sess_timed_out': DNS Outbound Query Session Timed Out; 'dst_exceed_action_tunnel': Entry Exceed Action: Tunnel; 'src_udp_auth_timeout': Src UDP Auth: Retry Timeout; 'src_udp_retry_pass': Src UDP Retry Passed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#counters2 DdosDstEntry#counters2}
  */
  readonly counters2?: string;
  /**
  * 'dst_hw_drop_rule_insert': Dst Hardware Drop Rules Inserted; 'dst_hw_drop_rule_remove': Dst Hardware Drop Rules Removed; 'src_hw_drop_rule_insert': Src Hardware Drop Rules Inserted; 'src_hw_drop_rule_remove': Src Hardware Drop Rules Removed; 'prog_first_req_time_exceed': Req-Resp: First Request Time Exceed; 'prog_req_resp_time_exceed': Req-Resp: Request to Response Time Exceed; 'prog_request_len_exceed': Req-Resp: Request Length Exceed; 'prog_response_len_exceed': Req-Resp: Response Length Exceed; 'prog_resp_req_ratio_exceed': Req-Resp: Response to Request Ratio Exceed; 'prog_resp_req_time_exceed': Req-Resp: Response to Request Time Exceed; 'entry_sync_message_received': Entry Sync Message Received; 'entry_sync_message_sent': Entry Sync Message Sent; 'prog_conn_sent_exceed': Connection: Sent Exceed; 'prog_conn_rcvd_exceed': Connection: Received Exceed; 'prog_conn_time_exceed': Connection: Time Exceed; 'prog_conn_rcvd_sent_ratio_exceed': Connection: Received to Sent Ratio Exceed; 'prog_win_sent_exceed': Time Window: Sent Exceed; 'prog_win_rcvd_exceed': Time Window: Received Exceed; 'prog_win_rcvd_sent_ratio_exceed': Time Window: Received to Sent Exceed; 'prog_exceed_drop': Req-Resp: Violation Exceed Dropped; 'prog_exceed_bl': Req-Resp: Violation Exceed Blacklisted; 'prog_conn_exceed_drop': Connection: Violation Exceed Dropped; 'prog_conn_exceed_bl': Connection: Violation Exceed Blacklisted; 'prog_win_exceed_drop': Time Window: Violation Exceed Dropped; 'prog_win_exceed_bl': Time Window: Violation Exceed Blacklisted; 'dst_exceed_action_drop': Entry Exceed Action: Dropped; 'prog_conn_samples': Sample Collected: Connection; 'prog_req_samples': Sample Collected: Req-Resp; 'prog_win_samples': Sample Collected: Time Window; 'prog_conn_samples_processed': Sample Processed: Connnection; 'prog_req_samples_processed': Sample Processed: Req-Resp; 'prog_win_samples_processed': Sample Processed: Time Window; 'src_hw_drop': Src Hardware Packets Dropped; 'dst_tcp_auth_rst': TCP Auth: Reset; 'dst_src_learn_overflow': Src Dynamic Entry Count Overflow; 'tcp_fwd_sent': TCP Inbound Packets Forwarded; 'udp_fwd_sent': UDP Inbound Packets Forwarded;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#counters3 DdosDstEntry#counters3}
  */
  readonly counters3?: string;
}

export function ddosDstEntrySamplingEnableToTerraform(struct?: DdosDstEntrySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
    counters3: cdktf.stringToTerraform(struct!.counters3),
  }
}


export function ddosDstEntrySamplingEnableToHclTerraform(struct?: DdosDstEntrySamplingEnable | cdktf.IResolvable): any {
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
    counters2: {
      value: cdktf.stringToHclTerraform(struct!.counters2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters3: {
      value: cdktf.stringToHclTerraform(struct!.counters3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    if (this._counters2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters2 = this._counters2;
    }
    if (this._counters3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters3 = this._counters3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
      this._counters2 = undefined;
      this._counters3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
      this._counters2 = value.counters2;
      this._counters3 = value.counters3;
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

  // counters2 - computed: false, optional: true, required: false
  private _counters2?: string; 
  public get counters2() {
    return this.getStringAttribute('counters2');
  }
  public set counters2(value: string) {
    this._counters2 = value;
  }
  public resetCounters2() {
    this._counters2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters2Input() {
    return this._counters2;
  }

  // counters3 - computed: false, optional: true, required: false
  private _counters3?: string; 
  public get counters3() {
    return this.getStringAttribute('counters3');
  }
  public set counters3(value: string) {
    this._counters3 = value;
  }
  public resetCounters3() {
    this._counters3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters3Input() {
    return this._counters3;
  }
}

export class DdosDstEntrySamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySamplingEnableOutputReference {
    return new DdosDstEntrySamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySflowCollector {
  /**
  * Name of configured custom sFlow collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_name DdosDstEntry#sflow_name}
  */
  readonly sflowName?: string;
}

export function ddosDstEntrySflowCollectorToTerraform(struct?: DdosDstEntrySflowCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_name: cdktf.stringToTerraform(struct!.sflowName),
  }
}


export function ddosDstEntrySflowCollectorToHclTerraform(struct?: DdosDstEntrySflowCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sflow_name: {
      value: cdktf.stringToHclTerraform(struct!.sflowName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySflowCollectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySflowCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sflowName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowName = this._sflowName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySflowCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sflowName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sflowName = value.sflowName;
    }
  }

  // sflow_name - computed: false, optional: true, required: false
  private _sflowName?: string; 
  public get sflowName() {
    return this.getStringAttribute('sflow_name');
  }
  public set sflowName(value: string) {
    this._sflowName = value;
  }
  public resetSflowName() {
    this._sflowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowNameInput() {
    return this._sflowName;
  }
}

export class DdosDstEntrySflowCollectorList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySflowCollector[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySflowCollectorOutputReference {
    return new DdosDstEntrySflowCollectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySflowPollingSflowTcp {
  /**
  * Enable sFlow basic TCP counter polling. WARNING: Entry level Sflow polling might induce heavy CPU load depending on the total n
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_tcp_basic DdosDstEntry#sflow_tcp_basic}
  */
  readonly sflowTcpBasic?: number;
  /**
  * Enable sFlow stateful TCP counter polling. WARNING: Entry level Sflow polling might induce heavy CPU load depending on the tota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_tcp_stateful DdosDstEntry#sflow_tcp_stateful}
  */
  readonly sflowTcpStateful?: number;
}

export function ddosDstEntrySflowPollingSflowTcpToTerraform(struct?: DdosDstEntrySflowPollingSflowTcpOutputReference | DdosDstEntrySflowPollingSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_tcp_basic: cdktf.numberToTerraform(struct!.sflowTcpBasic),
    sflow_tcp_stateful: cdktf.numberToTerraform(struct!.sflowTcpStateful),
  }
}


export function ddosDstEntrySflowPollingSflowTcpToHclTerraform(struct?: DdosDstEntrySflowPollingSflowTcpOutputReference | DdosDstEntrySflowPollingSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sflow_tcp_basic: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpBasic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_tcp_stateful: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpStateful),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySflowPollingSflowTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySflowPollingSflowTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sflowTcpBasic !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpBasic = this._sflowTcpBasic;
    }
    if (this._sflowTcpStateful !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpStateful = this._sflowTcpStateful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySflowPollingSflowTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sflowTcpBasic = undefined;
      this._sflowTcpStateful = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sflowTcpBasic = value.sflowTcpBasic;
      this._sflowTcpStateful = value.sflowTcpStateful;
    }
  }

  // sflow_tcp_basic - computed: false, optional: true, required: false
  private _sflowTcpBasic?: number; 
  public get sflowTcpBasic() {
    return this.getNumberAttribute('sflow_tcp_basic');
  }
  public set sflowTcpBasic(value: number) {
    this._sflowTcpBasic = value;
  }
  public resetSflowTcpBasic() {
    this._sflowTcpBasic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpBasicInput() {
    return this._sflowTcpBasic;
  }

  // sflow_tcp_stateful - computed: false, optional: true, required: false
  private _sflowTcpStateful?: number; 
  public get sflowTcpStateful() {
    return this.getNumberAttribute('sflow_tcp_stateful');
  }
  public set sflowTcpStateful(value: number) {
    this._sflowTcpStateful = value;
  }
  public resetSflowTcpStateful() {
    this._sflowTcpStateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpStatefulInput() {
    return this._sflowTcpStateful;
  }
}
export interface DdosDstEntrySflowPolling {
  /**
  * Enable sFlow HTTP counter polling. WARNING: Entry level Sflow polling might induce heavy CPU load depending on the total number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_http DdosDstEntry#sflow_http}
  */
  readonly sflowHttp?: number;
  /**
  * Enable sFlow Layer 4 counter polling. WARNING: Entry level Sflow polling might induce heavy CPU load depending on the total num
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_layer_4 DdosDstEntry#sflow_layer_4}
  */
  readonly sflowLayer4?: number;
  /**
  * Enable sFlow packet-level counter polling. WARNING: Entry level Sflow polling might induce heavy CPU load depending on the tota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_packets DdosDstEntry#sflow_packets}
  */
  readonly sflowPackets?: number;
  /**
  * Enable sFlow undefined-port-hit-statistics polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_undef_port_hit_stats DdosDstEntry#sflow_undef_port_hit_stats}
  */
  readonly sflowUndefPortHitStats?: number;
  /**
  * Enable sFlow undefined-port-hit-statistics polling in brief mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_undef_port_hit_stats_brief DdosDstEntry#sflow_undef_port_hit_stats_brief}
  */
  readonly sflowUndefPortHitStatsBrief?: number;
  /**
  * sflow_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sflow_tcp DdosDstEntry#sflow_tcp}
  */
  readonly sflowTcp?: DdosDstEntrySflowPollingSflowTcp;
}

export function ddosDstEntrySflowPollingToTerraform(struct?: DdosDstEntrySflowPollingOutputReference | DdosDstEntrySflowPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_http: cdktf.numberToTerraform(struct!.sflowHttp),
    sflow_layer_4: cdktf.numberToTerraform(struct!.sflowLayer4),
    sflow_packets: cdktf.numberToTerraform(struct!.sflowPackets),
    sflow_undef_port_hit_stats: cdktf.numberToTerraform(struct!.sflowUndefPortHitStats),
    sflow_undef_port_hit_stats_brief: cdktf.numberToTerraform(struct!.sflowUndefPortHitStatsBrief),
    sflow_tcp: ddosDstEntrySflowPollingSflowTcpToTerraform(struct!.sflowTcp),
  }
}


export function ddosDstEntrySflowPollingToHclTerraform(struct?: DdosDstEntrySflowPollingOutputReference | DdosDstEntrySflowPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sflow_http: {
      value: cdktf.numberToHclTerraform(struct!.sflowHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_layer_4: {
      value: cdktf.numberToHclTerraform(struct!.sflowLayer4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_packets: {
      value: cdktf.numberToHclTerraform(struct!.sflowPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_undef_port_hit_stats: {
      value: cdktf.numberToHclTerraform(struct!.sflowUndefPortHitStats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_undef_port_hit_stats_brief: {
      value: cdktf.numberToHclTerraform(struct!.sflowUndefPortHitStatsBrief),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_tcp: {
      value: ddosDstEntrySflowPollingSflowTcpToHclTerraform(struct!.sflowTcp),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySflowPollingSflowTcpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySflowPollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySflowPolling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sflowHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowHttp = this._sflowHttp;
    }
    if (this._sflowLayer4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowLayer4 = this._sflowLayer4;
    }
    if (this._sflowPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowPackets = this._sflowPackets;
    }
    if (this._sflowUndefPortHitStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowUndefPortHitStats = this._sflowUndefPortHitStats;
    }
    if (this._sflowUndefPortHitStatsBrief !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowUndefPortHitStatsBrief = this._sflowUndefPortHitStatsBrief;
    }
    if (this._sflowTcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcp = this._sflowTcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySflowPolling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sflowHttp = undefined;
      this._sflowLayer4 = undefined;
      this._sflowPackets = undefined;
      this._sflowUndefPortHitStats = undefined;
      this._sflowUndefPortHitStatsBrief = undefined;
      this._sflowTcp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sflowHttp = value.sflowHttp;
      this._sflowLayer4 = value.sflowLayer4;
      this._sflowPackets = value.sflowPackets;
      this._sflowUndefPortHitStats = value.sflowUndefPortHitStats;
      this._sflowUndefPortHitStatsBrief = value.sflowUndefPortHitStatsBrief;
      this._sflowTcp.internalValue = value.sflowTcp;
    }
  }

  // sflow_http - computed: false, optional: true, required: false
  private _sflowHttp?: number; 
  public get sflowHttp() {
    return this.getNumberAttribute('sflow_http');
  }
  public set sflowHttp(value: number) {
    this._sflowHttp = value;
  }
  public resetSflowHttp() {
    this._sflowHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowHttpInput() {
    return this._sflowHttp;
  }

  // sflow_layer_4 - computed: false, optional: true, required: false
  private _sflowLayer4?: number; 
  public get sflowLayer4() {
    return this.getNumberAttribute('sflow_layer_4');
  }
  public set sflowLayer4(value: number) {
    this._sflowLayer4 = value;
  }
  public resetSflowLayer4() {
    this._sflowLayer4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowLayer4Input() {
    return this._sflowLayer4;
  }

  // sflow_packets - computed: false, optional: true, required: false
  private _sflowPackets?: number; 
  public get sflowPackets() {
    return this.getNumberAttribute('sflow_packets');
  }
  public set sflowPackets(value: number) {
    this._sflowPackets = value;
  }
  public resetSflowPackets() {
    this._sflowPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowPacketsInput() {
    return this._sflowPackets;
  }

  // sflow_undef_port_hit_stats - computed: false, optional: true, required: false
  private _sflowUndefPortHitStats?: number; 
  public get sflowUndefPortHitStats() {
    return this.getNumberAttribute('sflow_undef_port_hit_stats');
  }
  public set sflowUndefPortHitStats(value: number) {
    this._sflowUndefPortHitStats = value;
  }
  public resetSflowUndefPortHitStats() {
    this._sflowUndefPortHitStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowUndefPortHitStatsInput() {
    return this._sflowUndefPortHitStats;
  }

  // sflow_undef_port_hit_stats_brief - computed: false, optional: true, required: false
  private _sflowUndefPortHitStatsBrief?: number; 
  public get sflowUndefPortHitStatsBrief() {
    return this.getNumberAttribute('sflow_undef_port_hit_stats_brief');
  }
  public set sflowUndefPortHitStatsBrief(value: number) {
    this._sflowUndefPortHitStatsBrief = value;
  }
  public resetSflowUndefPortHitStatsBrief() {
    this._sflowUndefPortHitStatsBrief = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowUndefPortHitStatsBriefInput() {
    return this._sflowUndefPortHitStatsBrief;
  }

  // sflow_tcp - computed: false, optional: true, required: false
  private _sflowTcp = new DdosDstEntrySflowPollingSflowTcpOutputReference(this, "sflow_tcp");
  public get sflowTcp() {
    return this._sflowTcp;
  }
  public putSflowTcp(value: DdosDstEntrySflowPollingSflowTcp) {
    this._sflowTcp.internalValue = value;
  }
  public resetSflowTcp() {
    this._sflowTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpInput() {
    return this._sflowTcp.internalValue;
  }
}
export interface DdosDstEntrySflow {
  /**
  * collector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#collector DdosDstEntry#collector}
  */
  readonly collector?: DdosDstEntrySflowCollector[] | cdktf.IResolvable;
  /**
  * polling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#polling DdosDstEntry#polling}
  */
  readonly polling?: DdosDstEntrySflowPolling;
}

export function ddosDstEntrySflowToTerraform(struct?: DdosDstEntrySflowOutputReference | DdosDstEntrySflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector: cdktf.listMapper(ddosDstEntrySflowCollectorToTerraform, true)(struct!.collector),
    polling: ddosDstEntrySflowPollingToTerraform(struct!.polling),
  }
}


export function ddosDstEntrySflowToHclTerraform(struct?: DdosDstEntrySflowOutputReference | DdosDstEntrySflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector: {
      value: cdktf.listMapperHcl(ddosDstEntrySflowCollectorToHclTerraform, true)(struct!.collector),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySflowCollectorList",
    },
    polling: {
      value: ddosDstEntrySflowPollingToHclTerraform(struct!.polling),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySflowPollingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collector = this._collector?.internalValue;
    }
    if (this._polling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.polling = this._polling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collector.internalValue = undefined;
      this._polling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collector.internalValue = value.collector;
      this._polling.internalValue = value.polling;
    }
  }

  // collector - computed: false, optional: true, required: false
  private _collector = new DdosDstEntrySflowCollectorList(this, "collector", false);
  public get collector() {
    return this._collector;
  }
  public putCollector(value: DdosDstEntrySflowCollector[] | cdktf.IResolvable) {
    this._collector.internalValue = value;
  }
  public resetCollector() {
    this._collector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector.internalValue;
  }

  // polling - computed: false, optional: true, required: false
  private _polling = new DdosDstEntrySflowPollingOutputReference(this, "polling");
  public get polling() {
    return this._polling;
  }
  public putPolling(value: DdosDstEntrySflowPolling) {
    this._polling.internalValue = value;
  }
  public resetPolling() {
    this._polling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingInput() {
    return this._polling.internalValue;
  }
}
export interface DdosDstEntrySrcDstPairAppTypeSrcDstListTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dns DdosDstEntry#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#http DdosDstEntry#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sip DdosDstEntry#sip}
  */
  readonly sip?: string;
  /**
  * DDOS SSL-L4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ssl_l4 DdosDstEntry#ssl_l4}
  */
  readonly sslL4?: string;
}

export function ddosDstEntrySrcDstPairAppTypeSrcDstListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairAppTypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairAppTypeSrcDstListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    http: cdktf.stringToTerraform(struct!.http),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
  }
}


export function ddosDstEntrySrcDstPairAppTypeSrcDstListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairAppTypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairAppTypeSrcDstListTemplate): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairAppTypeSrcDstListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairAppTypeSrcDstListTemplate | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairAppTypeSrcDstListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._http = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._http = value.http;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
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
}
export interface DdosDstEntrySrcDstPairAppTypeSrcDstListStruct {
  /**
  * 'dns': dns; 'http': http; 'ssl-l4': ssl-l4; 'sip': sip;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcDstPairAppTypeSrcDstListTemplate;
}

export function ddosDstEntrySrcDstPairAppTypeSrcDstListStructToTerraform(struct?: DdosDstEntrySrcDstPairAppTypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairAppTypeSrcDstListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairAppTypeSrcDstListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairAppTypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: ddosDstEntrySrcDstPairAppTypeSrcDstListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairAppTypeSrcDstListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairAppTypeSrcDstListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairAppTypeSrcDstListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DdosDstEntrySrcDstPairAppTypeSrcDstListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
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
  private _template = new DdosDstEntrySrcDstPairAppTypeSrcDstListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairAppTypeSrcDstListTemplate) {
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

export class DdosDstEntrySrcDstPairAppTypeSrcDstListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairAppTypeSrcDstListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairAppTypeSrcDstListStructOutputReference {
    return new DdosDstEntrySrcDstPairAppTypeSrcDstListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairExceedLogCfg {
  /**
  * Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_enable DdosDstEntry#log_enable}
  */
  readonly logEnable?: number;
}

export function ddosDstEntrySrcDstPairExceedLogCfgToTerraform(struct?: DdosDstEntrySrcDstPairExceedLogCfgOutputReference | DdosDstEntrySrcDstPairExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
  }
}


export function ddosDstEntrySrcDstPairExceedLogCfgToHclTerraform(struct?: DdosDstEntrySrcDstPairExceedLogCfgOutputReference | DdosDstEntrySrcDstPairExceedLogCfg): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairExceedLogCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairExceedLogCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairExceedLogCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logEnable = value.logEnable;
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
}
export interface DdosDstEntrySrcDstPairL4TypeSrcDstListTemplate {
  /**
  * DDOS OTHER template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#other DdosDstEntry#other}
  */
  readonly other?: string;
  /**
  * DDOS TCP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#tcp DdosDstEntry#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS icmp-v4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v4 DdosDstEntry#template_icmp_v4}
  */
  readonly templateIcmpV4?: string;
  /**
  * DDOS icmp-v6 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v6 DdosDstEntry#template_icmp_v6}
  */
  readonly templateIcmpV6?: string;
  /**
  * DDOS UDP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#udp DdosDstEntry#udp}
  */
  readonly udp?: string;
}

export function ddosDstEntrySrcDstPairL4TypeSrcDstListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairL4TypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairL4TypeSrcDstListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    template_icmp_v4: cdktf.stringToTerraform(struct!.templateIcmpV4),
    template_icmp_v6: cdktf.stringToTerraform(struct!.templateIcmpV6),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstEntrySrcDstPairL4TypeSrcDstListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairL4TypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairL4TypeSrcDstListTemplate): any {
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
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v4: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v6: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV6),
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

export class DdosDstEntrySrcDstPairL4TypeSrcDstListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairL4TypeSrcDstListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._templateIcmpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV4 = this._templateIcmpV4;
    }
    if (this._templateIcmpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV6 = this._templateIcmpV6;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairL4TypeSrcDstListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._other = undefined;
      this._tcp = undefined;
      this._templateIcmpV4 = undefined;
      this._templateIcmpV6 = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._other = value.other;
      this._tcp = value.tcp;
      this._templateIcmpV4 = value.templateIcmpV4;
      this._templateIcmpV6 = value.templateIcmpV6;
      this._udp = value.udp;
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

  // template_icmp_v4 - computed: false, optional: true, required: false
  private _templateIcmpV4?: string; 
  public get templateIcmpV4() {
    return this.getStringAttribute('template_icmp_v4');
  }
  public set templateIcmpV4(value: string) {
    this._templateIcmpV4 = value;
  }
  public resetTemplateIcmpV4() {
    this._templateIcmpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV4Input() {
    return this._templateIcmpV4;
  }

  // template_icmp_v6 - computed: false, optional: true, required: false
  private _templateIcmpV6?: string; 
  public get templateIcmpV6() {
    return this.getStringAttribute('template_icmp_v6');
  }
  public set templateIcmpV6(value: string) {
    this._templateIcmpV6 = value;
  }
  public resetTemplateIcmpV6() {
    this._templateIcmpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV6Input() {
    return this._templateIcmpV6;
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
export interface DdosDstEntrySrcDstPairL4TypeSrcDstListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#deny DdosDstEntry#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcDstPairL4TypeSrcDstListTemplate;
}

export function ddosDstEntrySrcDstPairL4TypeSrcDstListStructToTerraform(struct?: DdosDstEntrySrcDstPairL4TypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairL4TypeSrcDstListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairL4TypeSrcDstListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairL4TypeSrcDstListStruct | cdktf.IResolvable): any {
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
      value: ddosDstEntrySrcDstPairL4TypeSrcDstListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairL4TypeSrcDstListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairL4TypeSrcDstListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairL4TypeSrcDstListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstEntrySrcDstPairL4TypeSrcDstListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
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
  private _template = new DdosDstEntrySrcDstPairL4TypeSrcDstListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairL4TypeSrcDstListTemplate) {
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

export class DdosDstEntrySrcDstPairL4TypeSrcDstListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairL4TypeSrcDstListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairL4TypeSrcDstListStructOutputReference {
    return new DdosDstEntrySrcDstPairL4TypeSrcDstListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairTemplate {
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#logging DdosDstEntry#logging}
  */
  readonly logging?: string;
}

export function ddosDstEntrySrcDstPairTemplateToTerraform(struct?: DdosDstEntrySrcDstPairTemplateOutputReference | DdosDstEntrySrcDstPairTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function ddosDstEntrySrcDstPairTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairTemplateOutputReference | DdosDstEntrySrcDstPairTemplate): any {
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

export class DdosDstEntrySrcDstPairTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairTemplate | undefined) {
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
export interface DdosDstEntrySrcDstPair {
  /**
  * Always permit for the Source to bypass all feature & limit checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#bypass DdosDstEntry#bypass}
  */
  readonly bypass?: number;
  /**
  * Configure default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#default DdosDstEntry#default}
  */
  readonly default?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * Enable periodic log while event is continuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_periodic DdosDstEntry#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * app_type_src_dst_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#app_type_src_dst_list DdosDstEntry#app_type_src_dst_list}
  */
  readonly appTypeSrcDstList?: DdosDstEntrySrcDstPairAppTypeSrcDstListStruct[] | cdktf.IResolvable;
  /**
  * exceed_log_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#exceed_log_cfg DdosDstEntry#exceed_log_cfg}
  */
  readonly exceedLogCfg?: DdosDstEntrySrcDstPairExceedLogCfg;
  /**
  * l4_type_src_dst_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#l4_type_src_dst_list DdosDstEntry#l4_type_src_dst_list}
  */
  readonly l4TypeSrcDstList?: DdosDstEntrySrcDstPairL4TypeSrcDstListStruct[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcDstPairTemplate;
}

export function ddosDstEntrySrcDstPairToTerraform(struct?: DdosDstEntrySrcDstPairOutputReference | DdosDstEntrySrcDstPair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass: cdktf.numberToTerraform(struct!.bypass),
    default: cdktf.numberToTerraform(struct!.default),
    glid: cdktf.stringToTerraform(struct!.glid),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    app_type_src_dst_list: cdktf.listMapper(ddosDstEntrySrcDstPairAppTypeSrcDstListStructToTerraform, true)(struct!.appTypeSrcDstList),
    exceed_log_cfg: ddosDstEntrySrcDstPairExceedLogCfgToTerraform(struct!.exceedLogCfg),
    l4_type_src_dst_list: cdktf.listMapper(ddosDstEntrySrcDstPairL4TypeSrcDstListStructToTerraform, true)(struct!.l4TypeSrcDstList),
    template: ddosDstEntrySrcDstPairTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairToHclTerraform(struct?: DdosDstEntrySrcDstPairOutputReference | DdosDstEntrySrcDstPair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass: {
      value: cdktf.numberToHclTerraform(struct!.bypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default: {
      value: cdktf.numberToHclTerraform(struct!.default),
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
    log_periodic: {
      value: cdktf.numberToHclTerraform(struct!.logPeriodic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_type_src_dst_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairAppTypeSrcDstListStructToHclTerraform, true)(struct!.appTypeSrcDstList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairAppTypeSrcDstListStructList",
    },
    exceed_log_cfg: {
      value: ddosDstEntrySrcDstPairExceedLogCfgToHclTerraform(struct!.exceedLogCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairExceedLogCfgList",
    },
    l4_type_src_dst_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairL4TypeSrcDstListStructToHclTerraform, true)(struct!.l4TypeSrcDstList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairL4TypeSrcDstListStructList",
    },
    template: {
      value: ddosDstEntrySrcDstPairTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPair | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._logPeriodic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPeriodic = this._logPeriodic;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._appTypeSrcDstList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appTypeSrcDstList = this._appTypeSrcDstList?.internalValue;
    }
    if (this._exceedLogCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedLogCfg = this._exceedLogCfg?.internalValue;
    }
    if (this._l4TypeSrcDstList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4TypeSrcDstList = this._l4TypeSrcDstList?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPair | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypass = undefined;
      this._default = undefined;
      this._glid = undefined;
      this._logPeriodic = undefined;
      this._uuid = undefined;
      this._appTypeSrcDstList.internalValue = undefined;
      this._exceedLogCfg.internalValue = undefined;
      this._l4TypeSrcDstList.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypass = value.bypass;
      this._default = value.default;
      this._glid = value.glid;
      this._logPeriodic = value.logPeriodic;
      this._uuid = value.uuid;
      this._appTypeSrcDstList.internalValue = value.appTypeSrcDstList;
      this._exceedLogCfg.internalValue = value.exceedLogCfg;
      this._l4TypeSrcDstList.internalValue = value.l4TypeSrcDstList;
      this._template.internalValue = value.template;
    }
  }

  // bypass - computed: false, optional: true, required: false
  private _bypass?: number; 
  public get bypass() {
    return this.getNumberAttribute('bypass');
  }
  public set bypass(value: number) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
  }

  // default - computed: false, optional: true, required: false
  private _default?: number; 
  public get default() {
    return this.getNumberAttribute('default');
  }
  public set default(value: number) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // app_type_src_dst_list - computed: false, optional: true, required: false
  private _appTypeSrcDstList = new DdosDstEntrySrcDstPairAppTypeSrcDstListStructList(this, "app_type_src_dst_list", false);
  public get appTypeSrcDstList() {
    return this._appTypeSrcDstList;
  }
  public putAppTypeSrcDstList(value: DdosDstEntrySrcDstPairAppTypeSrcDstListStruct[] | cdktf.IResolvable) {
    this._appTypeSrcDstList.internalValue = value;
  }
  public resetAppTypeSrcDstList() {
    this._appTypeSrcDstList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeSrcDstListInput() {
    return this._appTypeSrcDstList.internalValue;
  }

  // exceed_log_cfg - computed: false, optional: true, required: false
  private _exceedLogCfg = new DdosDstEntrySrcDstPairExceedLogCfgOutputReference(this, "exceed_log_cfg");
  public get exceedLogCfg() {
    return this._exceedLogCfg;
  }
  public putExceedLogCfg(value: DdosDstEntrySrcDstPairExceedLogCfg) {
    this._exceedLogCfg.internalValue = value;
  }
  public resetExceedLogCfg() {
    this._exceedLogCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLogCfgInput() {
    return this._exceedLogCfg.internalValue;
  }

  // l4_type_src_dst_list - computed: false, optional: true, required: false
  private _l4TypeSrcDstList = new DdosDstEntrySrcDstPairL4TypeSrcDstListStructList(this, "l4_type_src_dst_list", false);
  public get l4TypeSrcDstList() {
    return this._l4TypeSrcDstList;
  }
  public putL4TypeSrcDstList(value: DdosDstEntrySrcDstPairL4TypeSrcDstListStruct[] | cdktf.IResolvable) {
    this._l4TypeSrcDstList.internalValue = value;
  }
  public resetL4TypeSrcDstList() {
    this._l4TypeSrcDstList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeSrcDstListInput() {
    return this._l4TypeSrcDstList.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntrySrcDstPairTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairTemplate) {
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
export interface DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dns DdosDstEntry#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#http DdosDstEntry#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sip DdosDstEntry#sip}
  */
  readonly sip?: string;
  /**
  * DDOS SSL-L4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ssl_l4 DdosDstEntry#ssl_l4}
  */
  readonly sslL4?: string;
}

export function ddosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    http: cdktf.stringToTerraform(struct!.http),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
  }
}


export function ddosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplate): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplate | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._http = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._http = value.http;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
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
}
export interface DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStruct {
  /**
  * 'dns': dns; 'http': http; 'ssl-l4': ssl-l4; 'sip': sip;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplate;
}

export function ddosDstEntrySrcDstPairClassListListAppTypeSrcDstListStructToTerraform(struct?: DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairClassListListAppTypeSrcDstListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: ddosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
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
  private _template = new DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListTemplate) {
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

export class DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStructOutputReference {
    return new DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dns DdosDstEntry#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#http DdosDstEntry#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sip DdosDstEntry#sip}
  */
  readonly sip?: string;
  /**
  * DDOS SSL-L4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ssl_l4 DdosDstEntry#ssl_l4}
  */
  readonly sslL4?: string;
}

export function ddosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplateOutputReference | DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    http: cdktf.stringToTerraform(struct!.http),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
  }
}


export function ddosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplateOutputReference | DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplate): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplate | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._http = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._http = value.http;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
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
}
export interface DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStruct {
  /**
  * 'dns': dns; 'http': http; 'ssl-l4': ssl-l4; 'sip': sip;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplate;
}

export function ddosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStructToTerraform(struct?: DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: ddosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
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
  private _template = new DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListTemplate) {
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

export class DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStructOutputReference {
    return new DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairClassListListCidListExceedLogCfg {
  /**
  * Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_enable DdosDstEntry#log_enable}
  */
  readonly logEnable?: number;
}

export function ddosDstEntrySrcDstPairClassListListCidListExceedLogCfgToTerraform(struct?: DdosDstEntrySrcDstPairClassListListCidListExceedLogCfgOutputReference | DdosDstEntrySrcDstPairClassListListCidListExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
  }
}


export function ddosDstEntrySrcDstPairClassListListCidListExceedLogCfgToHclTerraform(struct?: DdosDstEntrySrcDstPairClassListListCidListExceedLogCfgOutputReference | DdosDstEntrySrcDstPairClassListListCidListExceedLogCfg): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairClassListListCidListExceedLogCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairClassListListCidListExceedLogCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairClassListListCidListExceedLogCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logEnable = value.logEnable;
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
}
export interface DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplate {
  /**
  * DDOS OTHER template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#other DdosDstEntry#other}
  */
  readonly other?: string;
  /**
  * DDOS TCP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#tcp DdosDstEntry#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS icmp-v4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v4 DdosDstEntry#template_icmp_v4}
  */
  readonly templateIcmpV4?: string;
  /**
  * DDOS icmp-v6 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v6 DdosDstEntry#template_icmp_v6}
  */
  readonly templateIcmpV6?: string;
  /**
  * DDOS UDP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#udp DdosDstEntry#udp}
  */
  readonly udp?: string;
}

export function ddosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplateOutputReference | DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    template_icmp_v4: cdktf.stringToTerraform(struct!.templateIcmpV4),
    template_icmp_v6: cdktf.stringToTerraform(struct!.templateIcmpV6),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplateOutputReference | DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplate): any {
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
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v4: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v6: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV6),
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

export class DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._templateIcmpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV4 = this._templateIcmpV4;
    }
    if (this._templateIcmpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV6 = this._templateIcmpV6;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._other = undefined;
      this._tcp = undefined;
      this._templateIcmpV4 = undefined;
      this._templateIcmpV6 = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._other = value.other;
      this._tcp = value.tcp;
      this._templateIcmpV4 = value.templateIcmpV4;
      this._templateIcmpV6 = value.templateIcmpV6;
      this._udp = value.udp;
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

  // template_icmp_v4 - computed: false, optional: true, required: false
  private _templateIcmpV4?: string; 
  public get templateIcmpV4() {
    return this.getStringAttribute('template_icmp_v4');
  }
  public set templateIcmpV4(value: string) {
    this._templateIcmpV4 = value;
  }
  public resetTemplateIcmpV4() {
    this._templateIcmpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV4Input() {
    return this._templateIcmpV4;
  }

  // template_icmp_v6 - computed: false, optional: true, required: false
  private _templateIcmpV6?: string; 
  public get templateIcmpV6() {
    return this.getStringAttribute('template_icmp_v6');
  }
  public set templateIcmpV6(value: string) {
    this._templateIcmpV6 = value;
  }
  public resetTemplateIcmpV6() {
    this._templateIcmpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV6Input() {
    return this._templateIcmpV6;
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
export interface DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#deny DdosDstEntry#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplate;
}

export function ddosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStructToTerraform(struct?: DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStruct | cdktf.IResolvable): any {
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
      value: ddosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
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
  private _template = new DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListTemplate) {
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

export class DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStructOutputReference {
    return new DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairClassListListCidListStruct {
  /**
  * Class-list id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#cid_num DdosDstEntry#cid_num}
  */
  readonly cidNum: number;
  /**
  * Enable periodic log while event is continuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_periodic DdosDstEntry#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * app_type_src_dst_cid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#app_type_src_dst_cid_list DdosDstEntry#app_type_src_dst_cid_list}
  */
  readonly appTypeSrcDstCidList?: DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStruct[] | cdktf.IResolvable;
  /**
  * exceed_log_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#exceed_log_cfg DdosDstEntry#exceed_log_cfg}
  */
  readonly exceedLogCfg?: DdosDstEntrySrcDstPairClassListListCidListExceedLogCfg;
  /**
  * l4_type_src_dst_cid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#l4_type_src_dst_cid_list DdosDstEntry#l4_type_src_dst_cid_list}
  */
  readonly l4TypeSrcDstCidList?: DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStruct[] | cdktf.IResolvable;
}

export function ddosDstEntrySrcDstPairClassListListCidListStructToTerraform(struct?: DdosDstEntrySrcDstPairClassListListCidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cid_num: cdktf.numberToTerraform(struct!.cidNum),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    app_type_src_dst_cid_list: cdktf.listMapper(ddosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStructToTerraform, true)(struct!.appTypeSrcDstCidList),
    exceed_log_cfg: ddosDstEntrySrcDstPairClassListListCidListExceedLogCfgToTerraform(struct!.exceedLogCfg),
    l4_type_src_dst_cid_list: cdktf.listMapper(ddosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStructToTerraform, true)(struct!.l4TypeSrcDstCidList),
  }
}


export function ddosDstEntrySrcDstPairClassListListCidListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairClassListListCidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cid_num: {
      value: cdktf.numberToHclTerraform(struct!.cidNum),
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
    app_type_src_dst_cid_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStructToHclTerraform, true)(struct!.appTypeSrcDstCidList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStructList",
    },
    exceed_log_cfg: {
      value: ddosDstEntrySrcDstPairClassListListCidListExceedLogCfgToHclTerraform(struct!.exceedLogCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairClassListListCidListExceedLogCfgList",
    },
    l4_type_src_dst_cid_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStructToHclTerraform, true)(struct!.l4TypeSrcDstCidList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairClassListListCidListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairClassListListCidListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidNum = this._cidNum;
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
    if (this._appTypeSrcDstCidList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appTypeSrcDstCidList = this._appTypeSrcDstCidList?.internalValue;
    }
    if (this._exceedLogCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedLogCfg = this._exceedLogCfg?.internalValue;
    }
    if (this._l4TypeSrcDstCidList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4TypeSrcDstCidList = this._l4TypeSrcDstCidList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairClassListListCidListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidNum = undefined;
      this._logPeriodic = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._appTypeSrcDstCidList.internalValue = undefined;
      this._exceedLogCfg.internalValue = undefined;
      this._l4TypeSrcDstCidList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidNum = value.cidNum;
      this._logPeriodic = value.logPeriodic;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._appTypeSrcDstCidList.internalValue = value.appTypeSrcDstCidList;
      this._exceedLogCfg.internalValue = value.exceedLogCfg;
      this._l4TypeSrcDstCidList.internalValue = value.l4TypeSrcDstCidList;
    }
  }

  // cid_num - computed: false, optional: false, required: true
  private _cidNum?: number; 
  public get cidNum() {
    return this.getNumberAttribute('cid_num');
  }
  public set cidNum(value: number) {
    this._cidNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidNumInput() {
    return this._cidNum;
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

  // app_type_src_dst_cid_list - computed: false, optional: true, required: false
  private _appTypeSrcDstCidList = new DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStructList(this, "app_type_src_dst_cid_list", false);
  public get appTypeSrcDstCidList() {
    return this._appTypeSrcDstCidList;
  }
  public putAppTypeSrcDstCidList(value: DdosDstEntrySrcDstPairClassListListCidListAppTypeSrcDstCidListStruct[] | cdktf.IResolvable) {
    this._appTypeSrcDstCidList.internalValue = value;
  }
  public resetAppTypeSrcDstCidList() {
    this._appTypeSrcDstCidList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeSrcDstCidListInput() {
    return this._appTypeSrcDstCidList.internalValue;
  }

  // exceed_log_cfg - computed: false, optional: true, required: false
  private _exceedLogCfg = new DdosDstEntrySrcDstPairClassListListCidListExceedLogCfgOutputReference(this, "exceed_log_cfg");
  public get exceedLogCfg() {
    return this._exceedLogCfg;
  }
  public putExceedLogCfg(value: DdosDstEntrySrcDstPairClassListListCidListExceedLogCfg) {
    this._exceedLogCfg.internalValue = value;
  }
  public resetExceedLogCfg() {
    this._exceedLogCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLogCfgInput() {
    return this._exceedLogCfg.internalValue;
  }

  // l4_type_src_dst_cid_list - computed: false, optional: true, required: false
  private _l4TypeSrcDstCidList = new DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStructList(this, "l4_type_src_dst_cid_list", false);
  public get l4TypeSrcDstCidList() {
    return this._l4TypeSrcDstCidList;
  }
  public putL4TypeSrcDstCidList(value: DdosDstEntrySrcDstPairClassListListCidListL4TypeSrcDstCidListStruct[] | cdktf.IResolvable) {
    this._l4TypeSrcDstCidList.internalValue = value;
  }
  public resetL4TypeSrcDstCidList() {
    this._l4TypeSrcDstCidList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeSrcDstCidListInput() {
    return this._l4TypeSrcDstCidList.internalValue;
  }
}

export class DdosDstEntrySrcDstPairClassListListCidListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairClassListListCidListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairClassListListCidListStructOutputReference {
    return new DdosDstEntrySrcDstPairClassListListCidListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairClassListListExceedLogCfg {
  /**
  * Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_enable DdosDstEntry#log_enable}
  */
  readonly logEnable?: number;
}

export function ddosDstEntrySrcDstPairClassListListExceedLogCfgToTerraform(struct?: DdosDstEntrySrcDstPairClassListListExceedLogCfgOutputReference | DdosDstEntrySrcDstPairClassListListExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
  }
}


export function ddosDstEntrySrcDstPairClassListListExceedLogCfgToHclTerraform(struct?: DdosDstEntrySrcDstPairClassListListExceedLogCfgOutputReference | DdosDstEntrySrcDstPairClassListListExceedLogCfg): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairClassListListExceedLogCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairClassListListExceedLogCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairClassListListExceedLogCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logEnable = value.logEnable;
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
}
export interface DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplate {
  /**
  * DDOS OTHER template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#other DdosDstEntry#other}
  */
  readonly other?: string;
  /**
  * DDOS TCP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#tcp DdosDstEntry#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS icmp-v4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v4 DdosDstEntry#template_icmp_v4}
  */
  readonly templateIcmpV4?: string;
  /**
  * DDOS icmp-v6 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v6 DdosDstEntry#template_icmp_v6}
  */
  readonly templateIcmpV6?: string;
  /**
  * DDOS UDP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#udp DdosDstEntry#udp}
  */
  readonly udp?: string;
}

export function ddosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    template_icmp_v4: cdktf.stringToTerraform(struct!.templateIcmpV4),
    template_icmp_v6: cdktf.stringToTerraform(struct!.templateIcmpV6),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplate): any {
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
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v4: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v6: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV6),
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

export class DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._templateIcmpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV4 = this._templateIcmpV4;
    }
    if (this._templateIcmpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV6 = this._templateIcmpV6;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._other = undefined;
      this._tcp = undefined;
      this._templateIcmpV4 = undefined;
      this._templateIcmpV6 = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._other = value.other;
      this._tcp = value.tcp;
      this._templateIcmpV4 = value.templateIcmpV4;
      this._templateIcmpV6 = value.templateIcmpV6;
      this._udp = value.udp;
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

  // template_icmp_v4 - computed: false, optional: true, required: false
  private _templateIcmpV4?: string; 
  public get templateIcmpV4() {
    return this.getStringAttribute('template_icmp_v4');
  }
  public set templateIcmpV4(value: string) {
    this._templateIcmpV4 = value;
  }
  public resetTemplateIcmpV4() {
    this._templateIcmpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV4Input() {
    return this._templateIcmpV4;
  }

  // template_icmp_v6 - computed: false, optional: true, required: false
  private _templateIcmpV6?: string; 
  public get templateIcmpV6() {
    return this.getStringAttribute('template_icmp_v6');
  }
  public set templateIcmpV6(value: string) {
    this._templateIcmpV6 = value;
  }
  public resetTemplateIcmpV6() {
    this._templateIcmpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV6Input() {
    return this._templateIcmpV6;
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
export interface DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#deny DdosDstEntry#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplate;
}

export function ddosDstEntrySrcDstPairClassListListL4TypeSrcDstListStructToTerraform(struct?: DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairClassListListL4TypeSrcDstListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStruct | cdktf.IResolvable): any {
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
      value: ddosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
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
  private _template = new DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListTemplate) {
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

export class DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStructOutputReference {
    return new DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairClassListListStruct {
  /**
  * Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#class_list_name DdosDstEntry#class_list_name}
  */
  readonly classListName: string;
  /**
  * Enable periodic log while event is continuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_periodic DdosDstEntry#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * app_type_src_dst_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#app_type_src_dst_list DdosDstEntry#app_type_src_dst_list}
  */
  readonly appTypeSrcDstList?: DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStruct[] | cdktf.IResolvable;
  /**
  * cid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#cid_list DdosDstEntry#cid_list}
  */
  readonly cidList?: DdosDstEntrySrcDstPairClassListListCidListStruct[] | cdktf.IResolvable;
  /**
  * exceed_log_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#exceed_log_cfg DdosDstEntry#exceed_log_cfg}
  */
  readonly exceedLogCfg?: DdosDstEntrySrcDstPairClassListListExceedLogCfg;
  /**
  * l4_type_src_dst_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#l4_type_src_dst_list DdosDstEntry#l4_type_src_dst_list}
  */
  readonly l4TypeSrcDstList?: DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStruct[] | cdktf.IResolvable;
}

export function ddosDstEntrySrcDstPairClassListListStructToTerraform(struct?: DdosDstEntrySrcDstPairClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list_name: cdktf.stringToTerraform(struct!.classListName),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    app_type_src_dst_list: cdktf.listMapper(ddosDstEntrySrcDstPairClassListListAppTypeSrcDstListStructToTerraform, true)(struct!.appTypeSrcDstList),
    cid_list: cdktf.listMapper(ddosDstEntrySrcDstPairClassListListCidListStructToTerraform, true)(struct!.cidList),
    exceed_log_cfg: ddosDstEntrySrcDstPairClassListListExceedLogCfgToTerraform(struct!.exceedLogCfg),
    l4_type_src_dst_list: cdktf.listMapper(ddosDstEntrySrcDstPairClassListListL4TypeSrcDstListStructToTerraform, true)(struct!.l4TypeSrcDstList),
  }
}


export function ddosDstEntrySrcDstPairClassListListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list_name: {
      value: cdktf.stringToHclTerraform(struct!.classListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    app_type_src_dst_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairClassListListAppTypeSrcDstListStructToHclTerraform, true)(struct!.appTypeSrcDstList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStructList",
    },
    cid_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairClassListListCidListStructToHclTerraform, true)(struct!.cidList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairClassListListCidListStructList",
    },
    exceed_log_cfg: {
      value: ddosDstEntrySrcDstPairClassListListExceedLogCfgToHclTerraform(struct!.exceedLogCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairClassListListExceedLogCfgList",
    },
    l4_type_src_dst_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairClassListListL4TypeSrcDstListStructToHclTerraform, true)(struct!.l4TypeSrcDstList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairClassListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairClassListListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListName = this._classListName;
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
    if (this._appTypeSrcDstList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appTypeSrcDstList = this._appTypeSrcDstList?.internalValue;
    }
    if (this._cidList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidList = this._cidList?.internalValue;
    }
    if (this._exceedLogCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedLogCfg = this._exceedLogCfg?.internalValue;
    }
    if (this._l4TypeSrcDstList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4TypeSrcDstList = this._l4TypeSrcDstList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairClassListListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classListName = undefined;
      this._logPeriodic = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._appTypeSrcDstList.internalValue = undefined;
      this._cidList.internalValue = undefined;
      this._exceedLogCfg.internalValue = undefined;
      this._l4TypeSrcDstList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classListName = value.classListName;
      this._logPeriodic = value.logPeriodic;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._appTypeSrcDstList.internalValue = value.appTypeSrcDstList;
      this._cidList.internalValue = value.cidList;
      this._exceedLogCfg.internalValue = value.exceedLogCfg;
      this._l4TypeSrcDstList.internalValue = value.l4TypeSrcDstList;
    }
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

  // app_type_src_dst_list - computed: false, optional: true, required: false
  private _appTypeSrcDstList = new DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStructList(this, "app_type_src_dst_list", false);
  public get appTypeSrcDstList() {
    return this._appTypeSrcDstList;
  }
  public putAppTypeSrcDstList(value: DdosDstEntrySrcDstPairClassListListAppTypeSrcDstListStruct[] | cdktf.IResolvable) {
    this._appTypeSrcDstList.internalValue = value;
  }
  public resetAppTypeSrcDstList() {
    this._appTypeSrcDstList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeSrcDstListInput() {
    return this._appTypeSrcDstList.internalValue;
  }

  // cid_list - computed: false, optional: true, required: false
  private _cidList = new DdosDstEntrySrcDstPairClassListListCidListStructList(this, "cid_list", false);
  public get cidList() {
    return this._cidList;
  }
  public putCidList(value: DdosDstEntrySrcDstPairClassListListCidListStruct[] | cdktf.IResolvable) {
    this._cidList.internalValue = value;
  }
  public resetCidList() {
    this._cidList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidListInput() {
    return this._cidList.internalValue;
  }

  // exceed_log_cfg - computed: false, optional: true, required: false
  private _exceedLogCfg = new DdosDstEntrySrcDstPairClassListListExceedLogCfgOutputReference(this, "exceed_log_cfg");
  public get exceedLogCfg() {
    return this._exceedLogCfg;
  }
  public putExceedLogCfg(value: DdosDstEntrySrcDstPairClassListListExceedLogCfg) {
    this._exceedLogCfg.internalValue = value;
  }
  public resetExceedLogCfg() {
    this._exceedLogCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLogCfgInput() {
    return this._exceedLogCfg.internalValue;
  }

  // l4_type_src_dst_list - computed: false, optional: true, required: false
  private _l4TypeSrcDstList = new DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStructList(this, "l4_type_src_dst_list", false);
  public get l4TypeSrcDstList() {
    return this._l4TypeSrcDstList;
  }
  public putL4TypeSrcDstList(value: DdosDstEntrySrcDstPairClassListListL4TypeSrcDstListStruct[] | cdktf.IResolvable) {
    this._l4TypeSrcDstList.internalValue = value;
  }
  public resetL4TypeSrcDstList() {
    this._l4TypeSrcDstList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeSrcDstListInput() {
    return this._l4TypeSrcDstList.internalValue;
  }
}

export class DdosDstEntrySrcDstPairClassListListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairClassListListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairClassListListStructOutputReference {
    return new DdosDstEntrySrcDstPairClassListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dns DdosDstEntry#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#http DdosDstEntry#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sip DdosDstEntry#sip}
  */
  readonly sip?: string;
  /**
  * DDOS SSL-L4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ssl_l4 DdosDstEntry#ssl_l4}
  */
  readonly sslL4?: string;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    http: cdktf.stringToTerraform(struct!.http),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplate): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplate | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._http = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._http = value.http;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
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
}
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStruct {
  /**
  * 'dns': dns; 'http': http; 'ssl-l4': ssl-l4; 'sip': sip;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplate;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStructToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: ddosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
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
  private _template = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListTemplate) {
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

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStructOutputReference {
    return new DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dns DdosDstEntry#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#http DdosDstEntry#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sip DdosDstEntry#sip}
  */
  readonly sip?: string;
  /**
  * DDOS SSL-L4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#ssl_l4 DdosDstEntry#ssl_l4}
  */
  readonly sslL4?: string;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    http: cdktf.stringToTerraform(struct!.http),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._http = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._http = value.http;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
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
}
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct {
  /**
  * 'dns': dns; 'http': http; 'ssl-l4': ssl-l4; 'sip': sip;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
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
  private _template = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate) {
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

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructOutputReference {
    return new DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfg {
  /**
  * Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_enable DdosDstEntry#log_enable}
  */
  readonly logEnable?: number;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfgToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfgOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfgToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfgOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfg): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logEnable = value.logEnable;
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
}
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate {
  /**
  * DDOS OTHER template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#other DdosDstEntry#other}
  */
  readonly other?: string;
  /**
  * DDOS TCP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#tcp DdosDstEntry#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS icmp-v4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v4 DdosDstEntry#template_icmp_v4}
  */
  readonly templateIcmpV4?: string;
  /**
  * DDOS icmp-v6 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v6 DdosDstEntry#template_icmp_v6}
  */
  readonly templateIcmpV6?: string;
  /**
  * DDOS UDP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#udp DdosDstEntry#udp}
  */
  readonly udp?: string;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    template_icmp_v4: cdktf.stringToTerraform(struct!.templateIcmpV4),
    template_icmp_v6: cdktf.stringToTerraform(struct!.templateIcmpV6),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate): any {
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
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v4: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v6: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV6),
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

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._templateIcmpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV4 = this._templateIcmpV4;
    }
    if (this._templateIcmpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV6 = this._templateIcmpV6;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._other = undefined;
      this._tcp = undefined;
      this._templateIcmpV4 = undefined;
      this._templateIcmpV6 = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._other = value.other;
      this._tcp = value.tcp;
      this._templateIcmpV4 = value.templateIcmpV4;
      this._templateIcmpV6 = value.templateIcmpV6;
      this._udp = value.udp;
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

  // template_icmp_v4 - computed: false, optional: true, required: false
  private _templateIcmpV4?: string; 
  public get templateIcmpV4() {
    return this.getStringAttribute('template_icmp_v4');
  }
  public set templateIcmpV4(value: string) {
    this._templateIcmpV4 = value;
  }
  public resetTemplateIcmpV4() {
    this._templateIcmpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV4Input() {
    return this._templateIcmpV4;
  }

  // template_icmp_v6 - computed: false, optional: true, required: false
  private _templateIcmpV6?: string; 
  public get templateIcmpV6() {
    return this.getStringAttribute('template_icmp_v6');
  }
  public set templateIcmpV6(value: string) {
    this._templateIcmpV6 = value;
  }
  public resetTemplateIcmpV6() {
    this._templateIcmpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV6Input() {
    return this._templateIcmpV6;
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
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#deny DdosDstEntry#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct | cdktf.IResolvable): any {
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
      value: ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
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
  private _template = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate) {
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

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructOutputReference {
    return new DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplate {
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#logging DdosDstEntry#logging}
  */
  readonly logging?: string;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplate): any {
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

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplate | undefined) {
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
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStruct {
  /**
  * Always permit for the Source to bypass all feature & limit checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#bypass DdosDstEntry#bypass}
  */
  readonly bypass?: number;
  /**
  * 'configuration': Configure src dst dynamic entry count overflow policy for class-list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#dummy_name DdosDstEntry#dummy_name}
  */
  readonly dummyName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * Enable periodic log while event is continuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_periodic DdosDstEntry#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * app_type_src_dst_overflow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#app_type_src_dst_overflow_list DdosDstEntry#app_type_src_dst_overflow_list}
  */
  readonly appTypeSrcDstOverflowList?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct[] | cdktf.IResolvable;
  /**
  * exceed_log_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#exceed_log_cfg DdosDstEntry#exceed_log_cfg}
  */
  readonly exceedLogCfg?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfg;
  /**
  * l4_type_src_dst_overflow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#l4_type_src_dst_overflow_list DdosDstEntry#l4_type_src_dst_overflow_list}
  */
  readonly l4TypeSrcDstOverflowList?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplate;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStructToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass: cdktf.numberToTerraform(struct!.bypass),
    dummy_name: cdktf.stringToTerraform(struct!.dummyName),
    glid: cdktf.stringToTerraform(struct!.glid),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    app_type_src_dst_overflow_list: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructToTerraform, true)(struct!.appTypeSrcDstOverflowList),
    exceed_log_cfg: ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfgToTerraform(struct!.exceedLogCfg),
    l4_type_src_dst_overflow_list: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructToTerraform, true)(struct!.l4TypeSrcDstOverflowList),
    template: ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass: {
      value: cdktf.numberToHclTerraform(struct!.bypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    app_type_src_dst_overflow_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructToHclTerraform, true)(struct!.appTypeSrcDstOverflowList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructList",
    },
    exceed_log_cfg: {
      value: ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfgToHclTerraform(struct!.exceedLogCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfgList",
    },
    l4_type_src_dst_overflow_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructToHclTerraform, true)(struct!.l4TypeSrcDstOverflowList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructList",
    },
    template: {
      value: ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    if (this._dummyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummyName = this._dummyName;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
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
    if (this._appTypeSrcDstOverflowList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appTypeSrcDstOverflowList = this._appTypeSrcDstOverflowList?.internalValue;
    }
    if (this._exceedLogCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedLogCfg = this._exceedLogCfg?.internalValue;
    }
    if (this._l4TypeSrcDstOverflowList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4TypeSrcDstOverflowList = this._l4TypeSrcDstOverflowList?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypass = undefined;
      this._dummyName = undefined;
      this._glid = undefined;
      this._logPeriodic = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._appTypeSrcDstOverflowList.internalValue = undefined;
      this._exceedLogCfg.internalValue = undefined;
      this._l4TypeSrcDstOverflowList.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypass = value.bypass;
      this._dummyName = value.dummyName;
      this._glid = value.glid;
      this._logPeriodic = value.logPeriodic;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._appTypeSrcDstOverflowList.internalValue = value.appTypeSrcDstOverflowList;
      this._exceedLogCfg.internalValue = value.exceedLogCfg;
      this._l4TypeSrcDstOverflowList.internalValue = value.l4TypeSrcDstOverflowList;
      this._template.internalValue = value.template;
    }
  }

  // bypass - computed: false, optional: true, required: false
  private _bypass?: number; 
  public get bypass() {
    return this.getNumberAttribute('bypass');
  }
  public set bypass(value: number) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
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

  // app_type_src_dst_overflow_list - computed: false, optional: true, required: false
  private _appTypeSrcDstOverflowList = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructList(this, "app_type_src_dst_overflow_list", false);
  public get appTypeSrcDstOverflowList() {
    return this._appTypeSrcDstOverflowList;
  }
  public putAppTypeSrcDstOverflowList(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct[] | cdktf.IResolvable) {
    this._appTypeSrcDstOverflowList.internalValue = value;
  }
  public resetAppTypeSrcDstOverflowList() {
    this._appTypeSrcDstOverflowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeSrcDstOverflowListInput() {
    return this._appTypeSrcDstOverflowList.internalValue;
  }

  // exceed_log_cfg - computed: false, optional: true, required: false
  private _exceedLogCfg = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfgOutputReference(this, "exceed_log_cfg");
  public get exceedLogCfg() {
    return this._exceedLogCfg;
  }
  public putExceedLogCfg(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListExceedLogCfg) {
    this._exceedLogCfg.internalValue = value;
  }
  public resetExceedLogCfg() {
    this._exceedLogCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLogCfgInput() {
    return this._exceedLogCfg.internalValue;
  }

  // l4_type_src_dst_overflow_list - computed: false, optional: true, required: false
  private _l4TypeSrcDstOverflowList = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructList(this, "l4_type_src_dst_overflow_list", false);
  public get l4TypeSrcDstOverflowList() {
    return this._l4TypeSrcDstOverflowList;
  }
  public putL4TypeSrcDstOverflowList(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct[] | cdktf.IResolvable) {
    this._l4TypeSrcDstOverflowList.internalValue = value;
  }
  public resetL4TypeSrcDstOverflowList() {
    this._l4TypeSrcDstOverflowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeSrcDstOverflowListInput() {
    return this._l4TypeSrcDstOverflowList.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListTemplate) {
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

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStructOutputReference {
    return new DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfg {
  /**
  * Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_enable DdosDstEntry#log_enable}
  */
  readonly logEnable?: number;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfgToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfgOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfgToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfgOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfg): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logEnable = value.logEnable;
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
}
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplate {
  /**
  * DDOS OTHER template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#other DdosDstEntry#other}
  */
  readonly other?: string;
  /**
  * DDOS TCP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#tcp DdosDstEntry#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS icmp-v4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v4 DdosDstEntry#template_icmp_v4}
  */
  readonly templateIcmpV4?: string;
  /**
  * DDOS icmp-v6 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template_icmp_v6 DdosDstEntry#template_icmp_v6}
  */
  readonly templateIcmpV6?: string;
  /**
  * DDOS UDP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#udp DdosDstEntry#udp}
  */
  readonly udp?: string;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    template_icmp_v4: cdktf.stringToTerraform(struct!.templateIcmpV4),
    template_icmp_v6: cdktf.stringToTerraform(struct!.templateIcmpV6),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplate): any {
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
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v4: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v6: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV6),
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

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._templateIcmpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV4 = this._templateIcmpV4;
    }
    if (this._templateIcmpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV6 = this._templateIcmpV6;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._other = undefined;
      this._tcp = undefined;
      this._templateIcmpV4 = undefined;
      this._templateIcmpV6 = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._other = value.other;
      this._tcp = value.tcp;
      this._templateIcmpV4 = value.templateIcmpV4;
      this._templateIcmpV6 = value.templateIcmpV6;
      this._udp = value.udp;
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

  // template_icmp_v4 - computed: false, optional: true, required: false
  private _templateIcmpV4?: string; 
  public get templateIcmpV4() {
    return this.getStringAttribute('template_icmp_v4');
  }
  public set templateIcmpV4(value: string) {
    this._templateIcmpV4 = value;
  }
  public resetTemplateIcmpV4() {
    this._templateIcmpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV4Input() {
    return this._templateIcmpV4;
  }

  // template_icmp_v6 - computed: false, optional: true, required: false
  private _templateIcmpV6?: string; 
  public get templateIcmpV6() {
    return this.getStringAttribute('template_icmp_v6');
  }
  public set templateIcmpV6(value: string) {
    this._templateIcmpV6 = value;
  }
  public resetTemplateIcmpV6() {
    this._templateIcmpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV6Input() {
    return this._templateIcmpV6;
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
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#deny DdosDstEntry#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplate;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStructToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStruct | cdktf.IResolvable): any {
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
      value: ddosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
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
  private _template = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListTemplate) {
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

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStructOutputReference {
    return new DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnable {
  /**
  * 'all': all; 'packet_received': Packets Received; 'packet_dropped': Packets Dropped; 'entry_learned': Entry Learned; 'entry_count_overflow': Entry Count Overflow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#counters1 DdosDstEntry#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnableToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnableToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnable | cdktf.IResolvable): any {
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

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnableOutputReference {
    return new DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListTemplate {
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#logging DdosDstEntry#logging}
  */
  readonly logging?: string;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyListPolicyClassListListTemplate): any {
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

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListTemplate | undefined) {
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
export interface DdosDstEntrySrcDstPairPolicyListPolicyClassListListStruct {
  /**
  * Always permit for the Source to bypass all feature & limit checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#bypass DdosDstEntry#bypass}
  */
  readonly bypass?: number;
  /**
  * Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#class_list_name DdosDstEntry#class_list_name}
  */
  readonly classListName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * Enable periodic log while event is continuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#log_periodic DdosDstEntry#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Maximum count for dynamic src-dst entry under class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#max_dynamic_entry_count DdosDstEntry#max_dynamic_entry_count}
  */
  readonly maxDynamicEntryCount?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * app_type_src_dst_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#app_type_src_dst_list DdosDstEntry#app_type_src_dst_list}
  */
  readonly appTypeSrcDstList?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStruct[] | cdktf.IResolvable;
  /**
  * class_list_overflow_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#class_list_overflow_policy_list DdosDstEntry#class_list_overflow_policy_list}
  */
  readonly classListOverflowPolicyList?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStruct[] | cdktf.IResolvable;
  /**
  * exceed_log_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#exceed_log_cfg DdosDstEntry#exceed_log_cfg}
  */
  readonly exceedLogCfg?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfg;
  /**
  * l4_type_src_dst_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#l4_type_src_dst_list DdosDstEntry#l4_type_src_dst_list}
  */
  readonly l4TypeSrcDstList?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#sampling_enable DdosDstEntry#sampling_enable}
  */
  readonly samplingEnable?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnable[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListTemplate;
}

export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListStructToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass: cdktf.numberToTerraform(struct!.bypass),
    class_list_name: cdktf.stringToTerraform(struct!.classListName),
    glid: cdktf.stringToTerraform(struct!.glid),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    max_dynamic_entry_count: cdktf.numberToTerraform(struct!.maxDynamicEntryCount),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    app_type_src_dst_list: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStructToTerraform, true)(struct!.appTypeSrcDstList),
    class_list_overflow_policy_list: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStructToTerraform, true)(struct!.classListOverflowPolicyList),
    exceed_log_cfg: ddosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfgToTerraform(struct!.exceedLogCfg),
    l4_type_src_dst_list: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStructToTerraform, true)(struct!.l4TypeSrcDstList),
    sampling_enable: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnableToTerraform, true)(struct!.samplingEnable),
    template: ddosDstEntrySrcDstPairPolicyListPolicyClassListListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairPolicyListPolicyClassListListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass: {
      value: cdktf.numberToHclTerraform(struct!.bypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    app_type_src_dst_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStructToHclTerraform, true)(struct!.appTypeSrcDstList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStructList",
    },
    class_list_overflow_policy_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStructToHclTerraform, true)(struct!.classListOverflowPolicyList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStructList",
    },
    exceed_log_cfg: {
      value: ddosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfgToHclTerraform(struct!.exceedLogCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfgList",
    },
    l4_type_src_dst_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStructToHclTerraform, true)(struct!.l4TypeSrcDstList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStructList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnableList",
    },
    template: {
      value: ddosDstEntrySrcDstPairPolicyListPolicyClassListListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListPolicyClassListListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    if (this._classListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListName = this._classListName;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
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
    if (this._appTypeSrcDstList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appTypeSrcDstList = this._appTypeSrcDstList?.internalValue;
    }
    if (this._classListOverflowPolicyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListOverflowPolicyList = this._classListOverflowPolicyList?.internalValue;
    }
    if (this._exceedLogCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedLogCfg = this._exceedLogCfg?.internalValue;
    }
    if (this._l4TypeSrcDstList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4TypeSrcDstList = this._l4TypeSrcDstList?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypass = undefined;
      this._classListName = undefined;
      this._glid = undefined;
      this._logPeriodic = undefined;
      this._maxDynamicEntryCount = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._appTypeSrcDstList.internalValue = undefined;
      this._classListOverflowPolicyList.internalValue = undefined;
      this._exceedLogCfg.internalValue = undefined;
      this._l4TypeSrcDstList.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypass = value.bypass;
      this._classListName = value.classListName;
      this._glid = value.glid;
      this._logPeriodic = value.logPeriodic;
      this._maxDynamicEntryCount = value.maxDynamicEntryCount;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._appTypeSrcDstList.internalValue = value.appTypeSrcDstList;
      this._classListOverflowPolicyList.internalValue = value.classListOverflowPolicyList;
      this._exceedLogCfg.internalValue = value.exceedLogCfg;
      this._l4TypeSrcDstList.internalValue = value.l4TypeSrcDstList;
      this._samplingEnable.internalValue = value.samplingEnable;
      this._template.internalValue = value.template;
    }
  }

  // bypass - computed: false, optional: true, required: false
  private _bypass?: number; 
  public get bypass() {
    return this.getNumberAttribute('bypass');
  }
  public set bypass(value: number) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
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

  // app_type_src_dst_list - computed: false, optional: true, required: false
  private _appTypeSrcDstList = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStructList(this, "app_type_src_dst_list", false);
  public get appTypeSrcDstList() {
    return this._appTypeSrcDstList;
  }
  public putAppTypeSrcDstList(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListAppTypeSrcDstListStruct[] | cdktf.IResolvable) {
    this._appTypeSrcDstList.internalValue = value;
  }
  public resetAppTypeSrcDstList() {
    this._appTypeSrcDstList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeSrcDstListInput() {
    return this._appTypeSrcDstList.internalValue;
  }

  // class_list_overflow_policy_list - computed: false, optional: true, required: false
  private _classListOverflowPolicyList = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStructList(this, "class_list_overflow_policy_list", false);
  public get classListOverflowPolicyList() {
    return this._classListOverflowPolicyList;
  }
  public putClassListOverflowPolicyList(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListClassListOverflowPolicyListStruct[] | cdktf.IResolvable) {
    this._classListOverflowPolicyList.internalValue = value;
  }
  public resetClassListOverflowPolicyList() {
    this._classListOverflowPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListOverflowPolicyListInput() {
    return this._classListOverflowPolicyList.internalValue;
  }

  // exceed_log_cfg - computed: false, optional: true, required: false
  private _exceedLogCfg = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfgOutputReference(this, "exceed_log_cfg");
  public get exceedLogCfg() {
    return this._exceedLogCfg;
  }
  public putExceedLogCfg(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListExceedLogCfg) {
    this._exceedLogCfg.internalValue = value;
  }
  public resetExceedLogCfg() {
    this._exceedLogCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLogCfgInput() {
    return this._exceedLogCfg.internalValue;
  }

  // l4_type_src_dst_list - computed: false, optional: true, required: false
  private _l4TypeSrcDstList = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStructList(this, "l4_type_src_dst_list", false);
  public get l4TypeSrcDstList() {
    return this._l4TypeSrcDstList;
  }
  public putL4TypeSrcDstList(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListL4TypeSrcDstListStruct[] | cdktf.IResolvable) {
    this._l4TypeSrcDstList.internalValue = value;
  }
  public resetL4TypeSrcDstList() {
    this._l4TypeSrcDstList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeSrcDstListInput() {
    return this._l4TypeSrcDstList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListTemplate) {
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

export class DdosDstEntrySrcDstPairPolicyListPolicyClassListListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyListPolicyClassListListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyListPolicyClassListListStructOutputReference {
    return new DdosDstEntrySrcDstPairPolicyListPolicyClassListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyListStruct {
  /**
  * Src-based-policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_based_policy_name DdosDstEntry#src_based_policy_name}
  */
  readonly srcBasedPolicyName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * policy_class_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#policy_class_list_list DdosDstEntry#policy_class_list_list}
  */
  readonly policyClassListList?: DdosDstEntrySrcDstPairPolicyListPolicyClassListListStruct[] | cdktf.IResolvable;
}

export function ddosDstEntrySrcDstPairPolicyListStructToTerraform(struct?: DdosDstEntrySrcDstPairPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_based_policy_name: cdktf.stringToTerraform(struct!.srcBasedPolicyName),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    policy_class_list_list: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyListPolicyClassListListStructToTerraform, true)(struct!.policyClassListList),
  }
}


export function ddosDstEntrySrcDstPairPolicyListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_based_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.srcBasedPolicyName),
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
    policy_class_list_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyListPolicyClassListListStructToHclTerraform, true)(struct!.policyClassListList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyListPolicyClassListListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcBasedPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBasedPolicyName = this._srcBasedPolicyName;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._policyClassListList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyClassListList = this._policyClassListList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._srcBasedPolicyName = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._policyClassListList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._srcBasedPolicyName = value.srcBasedPolicyName;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._policyClassListList.internalValue = value.policyClassListList;
    }
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

  // policy_class_list_list - computed: false, optional: true, required: false
  private _policyClassListList = new DdosDstEntrySrcDstPairPolicyListPolicyClassListListStructList(this, "policy_class_list_list", false);
  public get policyClassListList() {
    return this._policyClassListList;
  }
  public putPolicyClassListList(value: DdosDstEntrySrcDstPairPolicyListPolicyClassListListStruct[] | cdktf.IResolvable) {
    this._policyClassListList.internalValue = value;
  }
  public resetPolicyClassListList() {
    this._policyClassListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyClassListListInput() {
    return this._policyClassListList.internalValue;
  }
}

export class DdosDstEntrySrcDstPairPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyListStructOutputReference {
    return new DdosDstEntrySrcDstPairPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStruct {
  /**
  * Enable this flag to apply overflow policy when dynamic entry count overflows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#apply_policy_on_overflow DdosDstEntry#apply_policy_on_overflow}
  */
  readonly applyPolicyOnOverflow?: number;
  /**
  * Maximum count for dynamic src-dst entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#max_dynamic_entry_count DdosDstEntry#max_dynamic_entry_count}
  */
  readonly maxDynamicEntryCount?: number;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStructToTerraform(struct?: DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_policy_on_overflow: cdktf.numberToTerraform(struct!.applyPolicyOnOverflow),
    max_dynamic_entry_count: cdktf.numberToTerraform(struct!.maxDynamicEntryCount),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_policy_on_overflow: {
      value: cdktf.numberToHclTerraform(struct!.applyPolicyOnOverflow),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyPolicyOnOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyOnOverflow = this._applyPolicyOnOverflow;
    }
    if (this._maxDynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDynamicEntryCount = this._maxDynamicEntryCount;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyPolicyOnOverflow = undefined;
      this._maxDynamicEntryCount = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyPolicyOnOverflow = value.applyPolicyOnOverflow;
      this._maxDynamicEntryCount = value.maxDynamicEntryCount;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
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
}

export class DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStructOutputReference {
    return new DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairSettingsListStruct {
  /**
  * Idle age for ip entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#age DdosDstEntry#age}
  */
  readonly age?: number;
  /**
  * 'all-types': Settings for all types (default or class-list);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#all_types DdosDstEntry#all_types}
  */
  readonly allTypes: string;
  /**
  * Enable this flag to apply overflow policy when dynamic entry count overflows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#apply_policy_on_overflow DdosDstEntry#apply_policy_on_overflow}
  */
  readonly applyPolicyOnOverflow?: number;
  /**
  * Apply class-list overflow policy upon exceeding dynamic entry count specified for DST entry or each class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#enable_class_list_overflow DdosDstEntry#enable_class_list_overflow}
  */
  readonly enableClassListOverflow?: number;
  /**
  * Maximum count for dynamic src-dst entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#max_dynamic_entry_count DdosDstEntry#max_dynamic_entry_count}
  */
  readonly maxDynamicEntryCount?: number;
  /**
  * Specify src prefix length for IPv6 (default: not set)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_prefix_len DdosDstEntry#src_prefix_len}
  */
  readonly srcPrefixLen?: number;
  /**
  * No limit for maximum dynamic src entry count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#unlimited_dynamic_entry_count DdosDstEntry#unlimited_dynamic_entry_count}
  */
  readonly unlimitedDynamicEntryCount?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * l4_type_src_dst_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#l4_type_src_dst_list DdosDstEntry#l4_type_src_dst_list}
  */
  readonly l4TypeSrcDstList?: DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStruct[] | cdktf.IResolvable;
}

export function ddosDstEntrySrcDstPairSettingsListStructToTerraform(struct?: DdosDstEntrySrcDstPairSettingsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    all_types: cdktf.stringToTerraform(struct!.allTypes),
    apply_policy_on_overflow: cdktf.numberToTerraform(struct!.applyPolicyOnOverflow),
    enable_class_list_overflow: cdktf.numberToTerraform(struct!.enableClassListOverflow),
    max_dynamic_entry_count: cdktf.numberToTerraform(struct!.maxDynamicEntryCount),
    src_prefix_len: cdktf.numberToTerraform(struct!.srcPrefixLen),
    unlimited_dynamic_entry_count: cdktf.numberToTerraform(struct!.unlimitedDynamicEntryCount),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    l4_type_src_dst_list: cdktf.listMapper(ddosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStructToTerraform, true)(struct!.l4TypeSrcDstList),
  }
}


export function ddosDstEntrySrcDstPairSettingsListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairSettingsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    all_types: {
      value: cdktf.stringToHclTerraform(struct!.allTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apply_policy_on_overflow: {
      value: cdktf.numberToHclTerraform(struct!.applyPolicyOnOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_class_list_overflow: {
      value: cdktf.numberToHclTerraform(struct!.enableClassListOverflow),
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
    src_prefix_len: {
      value: cdktf.numberToHclTerraform(struct!.srcPrefixLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unlimited_dynamic_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.unlimitedDynamicEntryCount),
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
    l4_type_src_dst_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStructToHclTerraform, true)(struct!.l4TypeSrcDstList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairSettingsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairSettingsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._allTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allTypes = this._allTypes;
    }
    if (this._applyPolicyOnOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyOnOverflow = this._applyPolicyOnOverflow;
    }
    if (this._enableClassListOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableClassListOverflow = this._enableClassListOverflow;
    }
    if (this._maxDynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDynamicEntryCount = this._maxDynamicEntryCount;
    }
    if (this._srcPrefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPrefixLen = this._srcPrefixLen;
    }
    if (this._unlimitedDynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlimitedDynamicEntryCount = this._unlimitedDynamicEntryCount;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._l4TypeSrcDstList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4TypeSrcDstList = this._l4TypeSrcDstList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairSettingsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._allTypes = undefined;
      this._applyPolicyOnOverflow = undefined;
      this._enableClassListOverflow = undefined;
      this._maxDynamicEntryCount = undefined;
      this._srcPrefixLen = undefined;
      this._unlimitedDynamicEntryCount = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._l4TypeSrcDstList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._allTypes = value.allTypes;
      this._applyPolicyOnOverflow = value.applyPolicyOnOverflow;
      this._enableClassListOverflow = value.enableClassListOverflow;
      this._maxDynamicEntryCount = value.maxDynamicEntryCount;
      this._srcPrefixLen = value.srcPrefixLen;
      this._unlimitedDynamicEntryCount = value.unlimitedDynamicEntryCount;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._l4TypeSrcDstList.internalValue = value.l4TypeSrcDstList;
    }
  }

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

  // all_types - computed: false, optional: false, required: true
  private _allTypes?: string; 
  public get allTypes() {
    return this.getStringAttribute('all_types');
  }
  public set allTypes(value: string) {
    this._allTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allTypesInput() {
    return this._allTypes;
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

  // enable_class_list_overflow - computed: false, optional: true, required: false
  private _enableClassListOverflow?: number; 
  public get enableClassListOverflow() {
    return this.getNumberAttribute('enable_class_list_overflow');
  }
  public set enableClassListOverflow(value: number) {
    this._enableClassListOverflow = value;
  }
  public resetEnableClassListOverflow() {
    this._enableClassListOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClassListOverflowInput() {
    return this._enableClassListOverflow;
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

  // src_prefix_len - computed: false, optional: true, required: false
  private _srcPrefixLen?: number; 
  public get srcPrefixLen() {
    return this.getNumberAttribute('src_prefix_len');
  }
  public set srcPrefixLen(value: number) {
    this._srcPrefixLen = value;
  }
  public resetSrcPrefixLen() {
    this._srcPrefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPrefixLenInput() {
    return this._srcPrefixLen;
  }

  // unlimited_dynamic_entry_count - computed: false, optional: true, required: false
  private _unlimitedDynamicEntryCount?: number; 
  public get unlimitedDynamicEntryCount() {
    return this.getNumberAttribute('unlimited_dynamic_entry_count');
  }
  public set unlimitedDynamicEntryCount(value: number) {
    this._unlimitedDynamicEntryCount = value;
  }
  public resetUnlimitedDynamicEntryCount() {
    this._unlimitedDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlimitedDynamicEntryCountInput() {
    return this._unlimitedDynamicEntryCount;
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

  // l4_type_src_dst_list - computed: false, optional: true, required: false
  private _l4TypeSrcDstList = new DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStructList(this, "l4_type_src_dst_list", false);
  public get l4TypeSrcDstList() {
    return this._l4TypeSrcDstList;
  }
  public putL4TypeSrcDstList(value: DdosDstEntrySrcDstPairSettingsListL4TypeSrcDstListStruct[] | cdktf.IResolvable) {
    this._l4TypeSrcDstList.internalValue = value;
  }
  public resetL4TypeSrcDstList() {
    this._l4TypeSrcDstList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeSrcDstListInput() {
    return this._l4TypeSrcDstList.internalValue;
  }
}

export class DdosDstEntrySrcDstPairSettingsListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairSettingsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairSettingsListStructOutputReference {
    return new DdosDstEntrySrcDstPairSettingsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcPortListTemplate {
  /**
  * DDOS dns src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_dns DdosDstEntry#src_dns}
  */
  readonly srcDns?: string;
  /**
  * DDOS tcp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_tcp DdosDstEntry#src_tcp}
  */
  readonly srcTcp?: string;
  /**
  * DDOS udp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_udp DdosDstEntry#src_udp}
  */
  readonly srcUdp?: string;
}

export function ddosDstEntrySrcPortListTemplateToTerraform(struct?: DdosDstEntrySrcPortListTemplateOutputReference | DdosDstEntrySrcPortListTemplate): any {
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


export function ddosDstEntrySrcPortListTemplateToHclTerraform(struct?: DdosDstEntrySrcPortListTemplateOutputReference | DdosDstEntrySrcPortListTemplate): any {
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

export class DdosDstEntrySrcPortListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcPortListTemplate | undefined {
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

  public set internalValue(value: DdosDstEntrySrcPortListTemplate | undefined) {
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
export interface DdosDstEntrySrcPortListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#deny DdosDstEntry#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#outbound_src_tracking DdosDstEntry#outbound_src_tracking}
  */
  readonly outboundSrcTracking?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#port_num DdosDstEntry#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-udp': DNS-UDP Port; 'dns-tcp': DNS-TCP Port; 'udp': UDP Port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#set_counter_base_val DdosDstEntry#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcPortListTemplate;
}

export function ddosDstEntrySrcPortListStructToTerraform(struct?: DdosDstEntrySrcPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    outbound_src_tracking: cdktf.stringToTerraform(struct!.outboundSrcTracking),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    set_counter_base_val: cdktf.numberToTerraform(struct!.setCounterBaseVal),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcPortListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcPortListStructToHclTerraform(struct?: DdosDstEntrySrcPortListStruct | cdktf.IResolvable): any {
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
    outbound_src_tracking: {
      value: cdktf.stringToHclTerraform(struct!.outboundSrcTracking),
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
    set_counter_base_val: {
      value: cdktf.numberToHclTerraform(struct!.setCounterBaseVal),
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
      value: ddosDstEntrySrcPortListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcPortListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcPortListStruct | cdktf.IResolvable | undefined {
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
    if (this._outboundSrcTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundSrcTracking = this._outboundSrcTracking;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._setCounterBaseVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCounterBaseVal = this._setCounterBaseVal;
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

  public set internalValue(value: DdosDstEntrySrcPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
      this._outboundSrcTracking = undefined;
      this._portNum = undefined;
      this._protocol = undefined;
      this._setCounterBaseVal = undefined;
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
      this._outboundSrcTracking = value.outboundSrcTracking;
      this._portNum = value.portNum;
      this._protocol = value.protocol;
      this._setCounterBaseVal = value.setCounterBaseVal;
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
  private _template = new DdosDstEntrySrcPortListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcPortListTemplate) {
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

export class DdosDstEntrySrcPortListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcPortListStructOutputReference {
    return new DdosDstEntrySrcPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcPortRangeListTemplate {
  /**
  * DDOS tcp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_tcp DdosDstEntry#src_tcp}
  */
  readonly srcTcp?: string;
  /**
  * DDOS udp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_udp DdosDstEntry#src_udp}
  */
  readonly srcUdp?: string;
}

export function ddosDstEntrySrcPortRangeListTemplateToTerraform(struct?: DdosDstEntrySrcPortRangeListTemplateOutputReference | DdosDstEntrySrcPortRangeListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_tcp: cdktf.stringToTerraform(struct!.srcTcp),
    src_udp: cdktf.stringToTerraform(struct!.srcUdp),
  }
}


export function ddosDstEntrySrcPortRangeListTemplateToHclTerraform(struct?: DdosDstEntrySrcPortRangeListTemplateOutputReference | DdosDstEntrySrcPortRangeListTemplate): any {
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

export class DdosDstEntrySrcPortRangeListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcPortRangeListTemplate | undefined {
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

  public set internalValue(value: DdosDstEntrySrcPortRangeListTemplate | undefined) {
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
export interface DdosDstEntrySrcPortRangeListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#deny DdosDstEntry#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#glid DdosDstEntry#glid}
  */
  readonly glid?: string;
  /**
  * 'udp': UDP Port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#protocol DdosDstEntry#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#set_counter_base_val DdosDstEntry#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Src Port-Range End Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_port_range_end DdosDstEntry#src_port_range_end}
  */
  readonly srcPortRangeEnd: number;
  /**
  * Src Port-Range Start Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#src_port_range_start DdosDstEntry#src_port_range_start}
  */
  readonly srcPortRangeStart: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#user_tag DdosDstEntry#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#template DdosDstEntry#template}
  */
  readonly template?: DdosDstEntrySrcPortRangeListTemplate;
}

export function ddosDstEntrySrcPortRangeListStructToTerraform(struct?: DdosDstEntrySrcPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    set_counter_base_val: cdktf.numberToTerraform(struct!.setCounterBaseVal),
    src_port_range_end: cdktf.numberToTerraform(struct!.srcPortRangeEnd),
    src_port_range_start: cdktf.numberToTerraform(struct!.srcPortRangeStart),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcPortRangeListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcPortRangeListStructToHclTerraform(struct?: DdosDstEntrySrcPortRangeListStruct | cdktf.IResolvable): any {
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_counter_base_val: {
      value: cdktf.numberToHclTerraform(struct!.setCounterBaseVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.srcPortRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_range_start: {
      value: cdktf.numberToHclTerraform(struct!.srcPortRangeStart),
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
      value: ddosDstEntrySrcPortRangeListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcPortRangeListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcPortRangeListStruct | cdktf.IResolvable | undefined {
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
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._setCounterBaseVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCounterBaseVal = this._setCounterBaseVal;
    }
    if (this._srcPortRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortRangeEnd = this._srcPortRangeEnd;
    }
    if (this._srcPortRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortRangeStart = this._srcPortRangeStart;
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

  public set internalValue(value: DdosDstEntrySrcPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
      this._protocol = undefined;
      this._setCounterBaseVal = undefined;
      this._srcPortRangeEnd = undefined;
      this._srcPortRangeStart = undefined;
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
      this._protocol = value.protocol;
      this._setCounterBaseVal = value.setCounterBaseVal;
      this._srcPortRangeEnd = value.srcPortRangeEnd;
      this._srcPortRangeStart = value.srcPortRangeStart;
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

  // src_port_range_end - computed: false, optional: false, required: true
  private _srcPortRangeEnd?: number; 
  public get srcPortRangeEnd() {
    return this.getNumberAttribute('src_port_range_end');
  }
  public set srcPortRangeEnd(value: number) {
    this._srcPortRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeEndInput() {
    return this._srcPortRangeEnd;
  }

  // src_port_range_start - computed: false, optional: false, required: true
  private _srcPortRangeStart?: number; 
  public get srcPortRangeStart() {
    return this.getNumberAttribute('src_port_range_start');
  }
  public set srcPortRangeStart(value: number) {
    this._srcPortRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeStartInput() {
    return this._srcPortRangeStart;
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
  private _template = new DdosDstEntrySrcPortRangeListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcPortRangeListTemplate) {
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

export class DdosDstEntrySrcPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcPortRangeListStructOutputReference {
    return new DdosDstEntrySrcPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryTemplate {
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#logging DdosDstEntry#logging}
  */
  readonly logging?: string;
}

export function ddosDstEntryTemplateToTerraform(struct?: DdosDstEntryTemplateOutputReference | DdosDstEntryTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function ddosDstEntryTemplateToHclTerraform(struct?: DdosDstEntryTemplateOutputReference | DdosDstEntryTemplate): any {
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

export class DdosDstEntryTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryTemplate | undefined) {
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
export interface DdosDstEntryTopkDestinations {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#uuid DdosDstEntry#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryTopkDestinationsToTerraform(struct?: DdosDstEntryTopkDestinationsOutputReference | DdosDstEntryTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryTopkDestinationsToHclTerraform(struct?: DdosDstEntryTopkDestinationsOutputReference | DdosDstEntryTopkDestinations): any {
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

export class DdosDstEntryTopkDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryTopkDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryTopkDestinations | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry thunder_ddos_dst_entry}
*/
export class DdosDstEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstEntry to import
  * @param importFromId The id of the existing DdosDstEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry thunder_ddos_dst_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry',
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
    this._advertisedEnable = config.advertisedEnable;
    this._blackholeOnGlidExceed = config.blackholeOnGlidExceed;
    this._description = config.description;
    this._destNatIp = config.destNatIp;
    this._destNatIpv6 = config.destNatIpv6;
    this._dropDisable = config.dropDisable;
    this._dropDisableFwdImmediate = config.dropDisableFwdImmediate;
    this._dropFragPkt = config.dropFragPkt;
    this._dropOnNoSrcDstDefault = config.dropOnNoSrcDstDefault;
    this._dstEntryName = config.dstEntryName;
    this._glid = config.glid;
    this._id = config.id;
    this._inboundForwardDscp = config.inboundForwardDscp;
    this._ipAddr = config.ipAddr;
    this._ipv6Addr = config.ipv6Addr;
    this._logPeriodic = config.logPeriodic;
    this._operationalMode = config.operationalMode;
    this._outboundForwardDscp = config.outboundForwardDscp;
    this._patternRecognitionHwFilterEnable = config.patternRecognitionHwFilterEnable;
    this._patternRecognitionSensitivity = config.patternRecognitionSensitivity;
    this._reportingDisabled = config.reportingDisabled;
    this._setCounterBaseVal = config.setCounterBaseVal;
    this._sourceNatPool = config.sourceNatPool;
    this._subnetIpAddr = config.subnetIpAddr;
    this._subnetIpv6Addr = config.subnetIpv6Addr;
    this._trafficDistributionMode = config.trafficDistributionMode;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._captureConfigList.internalValue = config.captureConfigList;
    this._dynamicEntryOverflowPolicyList.internalValue = config.dynamicEntryOverflowPolicyList;
    this._enableTopK.internalValue = config.enableTopK;
    this._exceedLogCfg.internalValue = config.exceedLogCfg;
    this._exceedLogDepCfg.internalValue = config.exceedLogDepCfg;
    this._glidExceedAction.internalValue = config.glidExceedAction;
    this._hwBlacklistBlocking.internalValue = config.hwBlacklistBlocking;
    this._ipProtoList.internalValue = config.ipProtoList;
    this._l4TypeList.internalValue = config.l4TypeList;
    this._portList.internalValue = config.portList;
    this._portRangeList.internalValue = config.portRangeList;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._sflow.internalValue = config.sflow;
    this._srcDstPair.internalValue = config.srcDstPair;
    this._srcDstPairClassListList.internalValue = config.srcDstPairClassListList;
    this._srcDstPairPolicyList.internalValue = config.srcDstPairPolicyList;
    this._srcDstPairSettingsList.internalValue = config.srcDstPairSettingsList;
    this._srcPortList.internalValue = config.srcPortList;
    this._srcPortRangeList.internalValue = config.srcPortRangeList;
    this._template.internalValue = config.template;
    this._topkDestinations.internalValue = config.topkDestinations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertised_enable - computed: false, optional: true, required: false
  private _advertisedEnable?: number; 
  public get advertisedEnable() {
    return this.getNumberAttribute('advertised_enable');
  }
  public set advertisedEnable(value: number) {
    this._advertisedEnable = value;
  }
  public resetAdvertisedEnable() {
    this._advertisedEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedEnableInput() {
    return this._advertisedEnable;
  }

  // blackhole_on_glid_exceed - computed: false, optional: true, required: false
  private _blackholeOnGlidExceed?: number; 
  public get blackholeOnGlidExceed() {
    return this.getNumberAttribute('blackhole_on_glid_exceed');
  }
  public set blackholeOnGlidExceed(value: number) {
    this._blackholeOnGlidExceed = value;
  }
  public resetBlackholeOnGlidExceed() {
    this._blackholeOnGlidExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackholeOnGlidExceedInput() {
    return this._blackholeOnGlidExceed;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dest_nat_ip - computed: false, optional: true, required: false
  private _destNatIp?: string; 
  public get destNatIp() {
    return this.getStringAttribute('dest_nat_ip');
  }
  public set destNatIp(value: string) {
    this._destNatIp = value;
  }
  public resetDestNatIp() {
    this._destNatIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destNatIpInput() {
    return this._destNatIp;
  }

  // dest_nat_ipv6 - computed: false, optional: true, required: false
  private _destNatIpv6?: string; 
  public get destNatIpv6() {
    return this.getStringAttribute('dest_nat_ipv6');
  }
  public set destNatIpv6(value: string) {
    this._destNatIpv6 = value;
  }
  public resetDestNatIpv6() {
    this._destNatIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destNatIpv6Input() {
    return this._destNatIpv6;
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

  // drop_on_no_src_dst_default - computed: false, optional: true, required: false
  private _dropOnNoSrcDstDefault?: number; 
  public get dropOnNoSrcDstDefault() {
    return this.getNumberAttribute('drop_on_no_src_dst_default');
  }
  public set dropOnNoSrcDstDefault(value: number) {
    this._dropOnNoSrcDstDefault = value;
  }
  public resetDropOnNoSrcDstDefault() {
    this._dropOnNoSrcDstDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropOnNoSrcDstDefaultInput() {
    return this._dropOnNoSrcDstDefault;
  }

  // dst_entry_name - computed: false, optional: false, required: true
  private _dstEntryName?: string; 
  public get dstEntryName() {
    return this.getStringAttribute('dst_entry_name');
  }
  public set dstEntryName(value: string) {
    this._dstEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryNameInput() {
    return this._dstEntryName;
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

  // ip_addr - computed: false, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
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

  // operational_mode - computed: false, optional: true, required: false
  private _operationalMode?: string; 
  public get operationalMode() {
    return this.getStringAttribute('operational_mode');
  }
  public set operationalMode(value: string) {
    this._operationalMode = value;
  }
  public resetOperationalMode() {
    this._operationalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalModeInput() {
    return this._operationalMode;
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

  // pattern_recognition_hw_filter_enable - computed: false, optional: true, required: false
  private _patternRecognitionHwFilterEnable?: number; 
  public get patternRecognitionHwFilterEnable() {
    return this.getNumberAttribute('pattern_recognition_hw_filter_enable');
  }
  public set patternRecognitionHwFilterEnable(value: number) {
    this._patternRecognitionHwFilterEnable = value;
  }
  public resetPatternRecognitionHwFilterEnable() {
    this._patternRecognitionHwFilterEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionHwFilterEnableInput() {
    return this._patternRecognitionHwFilterEnable;
  }

  // pattern_recognition_sensitivity - computed: false, optional: true, required: false
  private _patternRecognitionSensitivity?: string; 
  public get patternRecognitionSensitivity() {
    return this.getStringAttribute('pattern_recognition_sensitivity');
  }
  public set patternRecognitionSensitivity(value: string) {
    this._patternRecognitionSensitivity = value;
  }
  public resetPatternRecognitionSensitivity() {
    this._patternRecognitionSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionSensitivityInput() {
    return this._patternRecognitionSensitivity;
  }

  // reporting_disabled - computed: false, optional: true, required: false
  private _reportingDisabled?: number; 
  public get reportingDisabled() {
    return this.getNumberAttribute('reporting_disabled');
  }
  public set reportingDisabled(value: number) {
    this._reportingDisabled = value;
  }
  public resetReportingDisabled() {
    this._reportingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingDisabledInput() {
    return this._reportingDisabled;
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

  // source_nat_pool - computed: false, optional: true, required: false
  private _sourceNatPool?: string; 
  public get sourceNatPool() {
    return this.getStringAttribute('source_nat_pool');
  }
  public set sourceNatPool(value: string) {
    this._sourceNatPool = value;
  }
  public resetSourceNatPool() {
    this._sourceNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatPoolInput() {
    return this._sourceNatPool;
  }

  // subnet_ip_addr - computed: false, optional: true, required: false
  private _subnetIpAddr?: string; 
  public get subnetIpAddr() {
    return this.getStringAttribute('subnet_ip_addr');
  }
  public set subnetIpAddr(value: string) {
    this._subnetIpAddr = value;
  }
  public resetSubnetIpAddr() {
    this._subnetIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpAddrInput() {
    return this._subnetIpAddr;
  }

  // subnet_ipv6_addr - computed: false, optional: true, required: false
  private _subnetIpv6Addr?: string; 
  public get subnetIpv6Addr() {
    return this.getStringAttribute('subnet_ipv6_addr');
  }
  public set subnetIpv6Addr(value: string) {
    this._subnetIpv6Addr = value;
  }
  public resetSubnetIpv6Addr() {
    this._subnetIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6AddrInput() {
    return this._subnetIpv6Addr;
  }

  // traffic_distribution_mode - computed: false, optional: true, required: false
  private _trafficDistributionMode?: string; 
  public get trafficDistributionMode() {
    return this.getStringAttribute('traffic_distribution_mode');
  }
  public set trafficDistributionMode(value: string) {
    this._trafficDistributionMode = value;
  }
  public resetTrafficDistributionMode() {
    this._trafficDistributionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDistributionModeInput() {
    return this._trafficDistributionMode;
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

  // capture_config_list - computed: false, optional: true, required: false
  private _captureConfigList = new DdosDstEntryCaptureConfigListStructList(this, "capture_config_list", false);
  public get captureConfigList() {
    return this._captureConfigList;
  }
  public putCaptureConfigList(value: DdosDstEntryCaptureConfigListStruct[] | cdktf.IResolvable) {
    this._captureConfigList.internalValue = value;
  }
  public resetCaptureConfigList() {
    this._captureConfigList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigListInput() {
    return this._captureConfigList.internalValue;
  }

  // dynamic_entry_overflow_policy_list - computed: false, optional: true, required: false
  private _dynamicEntryOverflowPolicyList = new DdosDstEntryDynamicEntryOverflowPolicyListStructList(this, "dynamic_entry_overflow_policy_list", false);
  public get dynamicEntryOverflowPolicyList() {
    return this._dynamicEntryOverflowPolicyList;
  }
  public putDynamicEntryOverflowPolicyList(value: DdosDstEntryDynamicEntryOverflowPolicyListStruct[] | cdktf.IResolvable) {
    this._dynamicEntryOverflowPolicyList.internalValue = value;
  }
  public resetDynamicEntryOverflowPolicyList() {
    this._dynamicEntryOverflowPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryOverflowPolicyListInput() {
    return this._dynamicEntryOverflowPolicyList.internalValue;
  }

  // enable_top_k - computed: false, optional: true, required: false
  private _enableTopK = new DdosDstEntryEnableTopKList(this, "enable_top_k", false);
  public get enableTopK() {
    return this._enableTopK;
  }
  public putEnableTopK(value: DdosDstEntryEnableTopK[] | cdktf.IResolvable) {
    this._enableTopK.internalValue = value;
  }
  public resetEnableTopK() {
    this._enableTopK.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKInput() {
    return this._enableTopK.internalValue;
  }

  // exceed_log_cfg - computed: false, optional: true, required: false
  private _exceedLogCfg = new DdosDstEntryExceedLogCfgOutputReference(this, "exceed_log_cfg");
  public get exceedLogCfg() {
    return this._exceedLogCfg;
  }
  public putExceedLogCfg(value: DdosDstEntryExceedLogCfg) {
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
  private _exceedLogDepCfg = new DdosDstEntryExceedLogDepCfgOutputReference(this, "exceed_log_dep_cfg");
  public get exceedLogDepCfg() {
    return this._exceedLogDepCfg;
  }
  public putExceedLogDepCfg(value: DdosDstEntryExceedLogDepCfg) {
    this._exceedLogDepCfg.internalValue = value;
  }
  public resetExceedLogDepCfg() {
    this._exceedLogDepCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLogDepCfgInput() {
    return this._exceedLogDepCfg.internalValue;
  }

  // glid_exceed_action - computed: false, optional: true, required: false
  private _glidExceedAction = new DdosDstEntryGlidExceedActionOutputReference(this, "glid_exceed_action");
  public get glidExceedAction() {
    return this._glidExceedAction;
  }
  public putGlidExceedAction(value: DdosDstEntryGlidExceedAction) {
    this._glidExceedAction.internalValue = value;
  }
  public resetGlidExceedAction() {
    this._glidExceedAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidExceedActionInput() {
    return this._glidExceedAction.internalValue;
  }

  // hw_blacklist_blocking - computed: false, optional: true, required: false
  private _hwBlacklistBlocking = new DdosDstEntryHwBlacklistBlockingOutputReference(this, "hw_blacklist_blocking");
  public get hwBlacklistBlocking() {
    return this._hwBlacklistBlocking;
  }
  public putHwBlacklistBlocking(value: DdosDstEntryHwBlacklistBlocking) {
    this._hwBlacklistBlocking.internalValue = value;
  }
  public resetHwBlacklistBlocking() {
    this._hwBlacklistBlocking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlacklistBlockingInput() {
    return this._hwBlacklistBlocking.internalValue;
  }

  // ip_proto_list - computed: false, optional: true, required: false
  private _ipProtoList = new DdosDstEntryIpProtoListStructList(this, "ip_proto_list", false);
  public get ipProtoList() {
    return this._ipProtoList;
  }
  public putIpProtoList(value: DdosDstEntryIpProtoListStruct[] | cdktf.IResolvable) {
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
  private _l4TypeList = new DdosDstEntryL4TypeListStructList(this, "l4_type_list", false);
  public get l4TypeList() {
    return this._l4TypeList;
  }
  public putL4TypeList(value: DdosDstEntryL4TypeListStruct[] | cdktf.IResolvable) {
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
  private _portList = new DdosDstEntryPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: DdosDstEntryPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }

  // port_range_list - computed: false, optional: true, required: false
  private _portRangeList = new DdosDstEntryPortRangeListStructList(this, "port_range_list", false);
  public get portRangeList() {
    return this._portRangeList;
  }
  public putPortRangeList(value: DdosDstEntryPortRangeListStruct[] | cdktf.IResolvable) {
    this._portRangeList.internalValue = value;
  }
  public resetPortRangeList() {
    this._portRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeListInput() {
    return this._portRangeList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstEntrySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstEntrySamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // sflow - computed: false, optional: true, required: false
  private _sflow = new DdosDstEntrySflowOutputReference(this, "sflow");
  public get sflow() {
    return this._sflow;
  }
  public putSflow(value: DdosDstEntrySflow) {
    this._sflow.internalValue = value;
  }
  public resetSflow() {
    this._sflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInput() {
    return this._sflow.internalValue;
  }

  // src_dst_pair - computed: false, optional: true, required: false
  private _srcDstPair = new DdosDstEntrySrcDstPairOutputReference(this, "src_dst_pair");
  public get srcDstPair() {
    return this._srcDstPair;
  }
  public putSrcDstPair(value: DdosDstEntrySrcDstPair) {
    this._srcDstPair.internalValue = value;
  }
  public resetSrcDstPair() {
    this._srcDstPair.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstPairInput() {
    return this._srcDstPair.internalValue;
  }

  // src_dst_pair_class_list_list - computed: false, optional: true, required: false
  private _srcDstPairClassListList = new DdosDstEntrySrcDstPairClassListListStructList(this, "src_dst_pair_class_list_list", false);
  public get srcDstPairClassListList() {
    return this._srcDstPairClassListList;
  }
  public putSrcDstPairClassListList(value: DdosDstEntrySrcDstPairClassListListStruct[] | cdktf.IResolvable) {
    this._srcDstPairClassListList.internalValue = value;
  }
  public resetSrcDstPairClassListList() {
    this._srcDstPairClassListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstPairClassListListInput() {
    return this._srcDstPairClassListList.internalValue;
  }

  // src_dst_pair_policy_list - computed: false, optional: true, required: false
  private _srcDstPairPolicyList = new DdosDstEntrySrcDstPairPolicyListStructList(this, "src_dst_pair_policy_list", false);
  public get srcDstPairPolicyList() {
    return this._srcDstPairPolicyList;
  }
  public putSrcDstPairPolicyList(value: DdosDstEntrySrcDstPairPolicyListStruct[] | cdktf.IResolvable) {
    this._srcDstPairPolicyList.internalValue = value;
  }
  public resetSrcDstPairPolicyList() {
    this._srcDstPairPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstPairPolicyListInput() {
    return this._srcDstPairPolicyList.internalValue;
  }

  // src_dst_pair_settings_list - computed: false, optional: true, required: false
  private _srcDstPairSettingsList = new DdosDstEntrySrcDstPairSettingsListStructList(this, "src_dst_pair_settings_list", false);
  public get srcDstPairSettingsList() {
    return this._srcDstPairSettingsList;
  }
  public putSrcDstPairSettingsList(value: DdosDstEntrySrcDstPairSettingsListStruct[] | cdktf.IResolvable) {
    this._srcDstPairSettingsList.internalValue = value;
  }
  public resetSrcDstPairSettingsList() {
    this._srcDstPairSettingsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstPairSettingsListInput() {
    return this._srcDstPairSettingsList.internalValue;
  }

  // src_port_list - computed: false, optional: true, required: false
  private _srcPortList = new DdosDstEntrySrcPortListStructList(this, "src_port_list", false);
  public get srcPortList() {
    return this._srcPortList;
  }
  public putSrcPortList(value: DdosDstEntrySrcPortListStruct[] | cdktf.IResolvable) {
    this._srcPortList.internalValue = value;
  }
  public resetSrcPortList() {
    this._srcPortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortListInput() {
    return this._srcPortList.internalValue;
  }

  // src_port_range_list - computed: false, optional: true, required: false
  private _srcPortRangeList = new DdosDstEntrySrcPortRangeListStructList(this, "src_port_range_list", false);
  public get srcPortRangeList() {
    return this._srcPortRangeList;
  }
  public putSrcPortRangeList(value: DdosDstEntrySrcPortRangeListStruct[] | cdktf.IResolvable) {
    this._srcPortRangeList.internalValue = value;
  }
  public resetSrcPortRangeList() {
    this._srcPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeListInput() {
    return this._srcPortRangeList.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntryTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntryTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // topk_destinations - computed: false, optional: true, required: false
  private _topkDestinations = new DdosDstEntryTopkDestinationsOutputReference(this, "topk_destinations");
  public get topkDestinations() {
    return this._topkDestinations;
  }
  public putTopkDestinations(value: DdosDstEntryTopkDestinations) {
    this._topkDestinations.internalValue = value;
  }
  public resetTopkDestinations() {
    this._topkDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDestinationsInput() {
    return this._topkDestinations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertised_enable: cdktf.numberToTerraform(this._advertisedEnable),
      blackhole_on_glid_exceed: cdktf.numberToTerraform(this._blackholeOnGlidExceed),
      description: cdktf.stringToTerraform(this._description),
      dest_nat_ip: cdktf.stringToTerraform(this._destNatIp),
      dest_nat_ipv6: cdktf.stringToTerraform(this._destNatIpv6),
      drop_disable: cdktf.numberToTerraform(this._dropDisable),
      drop_disable_fwd_immediate: cdktf.numberToTerraform(this._dropDisableFwdImmediate),
      drop_frag_pkt: cdktf.numberToTerraform(this._dropFragPkt),
      drop_on_no_src_dst_default: cdktf.numberToTerraform(this._dropOnNoSrcDstDefault),
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      glid: cdktf.stringToTerraform(this._glid),
      id: cdktf.stringToTerraform(this._id),
      inbound_forward_dscp: cdktf.numberToTerraform(this._inboundForwardDscp),
      ip_addr: cdktf.stringToTerraform(this._ipAddr),
      ipv6_addr: cdktf.stringToTerraform(this._ipv6Addr),
      log_periodic: cdktf.numberToTerraform(this._logPeriodic),
      operational_mode: cdktf.stringToTerraform(this._operationalMode),
      outbound_forward_dscp: cdktf.numberToTerraform(this._outboundForwardDscp),
      pattern_recognition_hw_filter_enable: cdktf.numberToTerraform(this._patternRecognitionHwFilterEnable),
      pattern_recognition_sensitivity: cdktf.stringToTerraform(this._patternRecognitionSensitivity),
      reporting_disabled: cdktf.numberToTerraform(this._reportingDisabled),
      set_counter_base_val: cdktf.numberToTerraform(this._setCounterBaseVal),
      source_nat_pool: cdktf.stringToTerraform(this._sourceNatPool),
      subnet_ip_addr: cdktf.stringToTerraform(this._subnetIpAddr),
      subnet_ipv6_addr: cdktf.stringToTerraform(this._subnetIpv6Addr),
      traffic_distribution_mode: cdktf.stringToTerraform(this._trafficDistributionMode),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      capture_config_list: cdktf.listMapper(ddosDstEntryCaptureConfigListStructToTerraform, true)(this._captureConfigList.internalValue),
      dynamic_entry_overflow_policy_list: cdktf.listMapper(ddosDstEntryDynamicEntryOverflowPolicyListStructToTerraform, true)(this._dynamicEntryOverflowPolicyList.internalValue),
      enable_top_k: cdktf.listMapper(ddosDstEntryEnableTopKToTerraform, true)(this._enableTopK.internalValue),
      exceed_log_cfg: ddosDstEntryExceedLogCfgToTerraform(this._exceedLogCfg.internalValue),
      exceed_log_dep_cfg: ddosDstEntryExceedLogDepCfgToTerraform(this._exceedLogDepCfg.internalValue),
      glid_exceed_action: ddosDstEntryGlidExceedActionToTerraform(this._glidExceedAction.internalValue),
      hw_blacklist_blocking: ddosDstEntryHwBlacklistBlockingToTerraform(this._hwBlacklistBlocking.internalValue),
      ip_proto_list: cdktf.listMapper(ddosDstEntryIpProtoListStructToTerraform, true)(this._ipProtoList.internalValue),
      l4_type_list: cdktf.listMapper(ddosDstEntryL4TypeListStructToTerraform, true)(this._l4TypeList.internalValue),
      port_list: cdktf.listMapper(ddosDstEntryPortListStructToTerraform, true)(this._portList.internalValue),
      port_range_list: cdktf.listMapper(ddosDstEntryPortRangeListStructToTerraform, true)(this._portRangeList.internalValue),
      sampling_enable: cdktf.listMapper(ddosDstEntrySamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      sflow: ddosDstEntrySflowToTerraform(this._sflow.internalValue),
      src_dst_pair: ddosDstEntrySrcDstPairToTerraform(this._srcDstPair.internalValue),
      src_dst_pair_class_list_list: cdktf.listMapper(ddosDstEntrySrcDstPairClassListListStructToTerraform, true)(this._srcDstPairClassListList.internalValue),
      src_dst_pair_policy_list: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyListStructToTerraform, true)(this._srcDstPairPolicyList.internalValue),
      src_dst_pair_settings_list: cdktf.listMapper(ddosDstEntrySrcDstPairSettingsListStructToTerraform, true)(this._srcDstPairSettingsList.internalValue),
      src_port_list: cdktf.listMapper(ddosDstEntrySrcPortListStructToTerraform, true)(this._srcPortList.internalValue),
      src_port_range_list: cdktf.listMapper(ddosDstEntrySrcPortRangeListStructToTerraform, true)(this._srcPortRangeList.internalValue),
      template: ddosDstEntryTemplateToTerraform(this._template.internalValue),
      topk_destinations: ddosDstEntryTopkDestinationsToTerraform(this._topkDestinations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertised_enable: {
        value: cdktf.numberToHclTerraform(this._advertisedEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blackhole_on_glid_exceed: {
        value: cdktf.numberToHclTerraform(this._blackholeOnGlidExceed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_nat_ip: {
        value: cdktf.stringToHclTerraform(this._destNatIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_nat_ipv6: {
        value: cdktf.stringToHclTerraform(this._destNatIpv6),
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
      drop_frag_pkt: {
        value: cdktf.numberToHclTerraform(this._dropFragPkt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_on_no_src_dst_default: {
        value: cdktf.numberToHclTerraform(this._dropOnNoSrcDstDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      ip_addr: {
        value: cdktf.stringToHclTerraform(this._ipAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._ipv6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_periodic: {
        value: cdktf.numberToHclTerraform(this._logPeriodic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      operational_mode: {
        value: cdktf.stringToHclTerraform(this._operationalMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_forward_dscp: {
        value: cdktf.numberToHclTerraform(this._outboundForwardDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pattern_recognition_hw_filter_enable: {
        value: cdktf.numberToHclTerraform(this._patternRecognitionHwFilterEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pattern_recognition_sensitivity: {
        value: cdktf.stringToHclTerraform(this._patternRecognitionSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reporting_disabled: {
        value: cdktf.numberToHclTerraform(this._reportingDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set_counter_base_val: {
        value: cdktf.numberToHclTerraform(this._setCounterBaseVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_nat_pool: {
        value: cdktf.stringToHclTerraform(this._sourceNatPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ip_addr: {
        value: cdktf.stringToHclTerraform(this._subnetIpAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._subnetIpv6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_distribution_mode: {
        value: cdktf.stringToHclTerraform(this._trafficDistributionMode),
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
      capture_config_list: {
        value: cdktf.listMapperHcl(ddosDstEntryCaptureConfigListStructToHclTerraform, true)(this._captureConfigList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryCaptureConfigListStructList",
      },
      dynamic_entry_overflow_policy_list: {
        value: cdktf.listMapperHcl(ddosDstEntryDynamicEntryOverflowPolicyListStructToHclTerraform, true)(this._dynamicEntryOverflowPolicyList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryDynamicEntryOverflowPolicyListStructList",
      },
      enable_top_k: {
        value: cdktf.listMapperHcl(ddosDstEntryEnableTopKToHclTerraform, true)(this._enableTopK.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryEnableTopKList",
      },
      exceed_log_cfg: {
        value: ddosDstEntryExceedLogCfgToHclTerraform(this._exceedLogCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryExceedLogCfgList",
      },
      exceed_log_dep_cfg: {
        value: ddosDstEntryExceedLogDepCfgToHclTerraform(this._exceedLogDepCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryExceedLogDepCfgList",
      },
      glid_exceed_action: {
        value: ddosDstEntryGlidExceedActionToHclTerraform(this._glidExceedAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryGlidExceedActionList",
      },
      hw_blacklist_blocking: {
        value: ddosDstEntryHwBlacklistBlockingToHclTerraform(this._hwBlacklistBlocking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryHwBlacklistBlockingList",
      },
      ip_proto_list: {
        value: cdktf.listMapperHcl(ddosDstEntryIpProtoListStructToHclTerraform, true)(this._ipProtoList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryIpProtoListStructList",
      },
      l4_type_list: {
        value: cdktf.listMapperHcl(ddosDstEntryL4TypeListStructToHclTerraform, true)(this._l4TypeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryL4TypeListStructList",
      },
      port_list: {
        value: cdktf.listMapperHcl(ddosDstEntryPortListStructToHclTerraform, true)(this._portList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryPortListStructList",
      },
      port_range_list: {
        value: cdktf.listMapperHcl(ddosDstEntryPortRangeListStructToHclTerraform, true)(this._portRangeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryPortRangeListStructList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(ddosDstEntrySamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySamplingEnableList",
      },
      sflow: {
        value: ddosDstEntrySflowToHclTerraform(this._sflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySflowList",
      },
      src_dst_pair: {
        value: ddosDstEntrySrcDstPairToHclTerraform(this._srcDstPair.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcDstPairList",
      },
      src_dst_pair_class_list_list: {
        value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairClassListListStructToHclTerraform, true)(this._srcDstPairClassListList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcDstPairClassListListStructList",
      },
      src_dst_pair_policy_list: {
        value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyListStructToHclTerraform, true)(this._srcDstPairPolicyList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcDstPairPolicyListStructList",
      },
      src_dst_pair_settings_list: {
        value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairSettingsListStructToHclTerraform, true)(this._srcDstPairSettingsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcDstPairSettingsListStructList",
      },
      src_port_list: {
        value: cdktf.listMapperHcl(ddosDstEntrySrcPortListStructToHclTerraform, true)(this._srcPortList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcPortListStructList",
      },
      src_port_range_list: {
        value: cdktf.listMapperHcl(ddosDstEntrySrcPortRangeListStructToHclTerraform, true)(this._srcPortRangeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcPortRangeListStructList",
      },
      template: {
        value: ddosDstEntryTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryTemplateList",
      },
      topk_destinations: {
        value: ddosDstEntryTopkDestinationsToHclTerraform(this._topkDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryTopkDestinationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
