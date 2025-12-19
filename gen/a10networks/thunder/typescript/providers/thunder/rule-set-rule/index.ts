// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleSetRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'permit': permit; 'deny': deny; 'reset': reset;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#action RuleSetRule#action}
  */
  readonly action?: string;
  /**
  * 'any': any;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#application_any RuleSetRule#application_any}
  */
  readonly applicationAny?: string;
  /**
  * 'lsn-lid': Apply specified CGNv6 LSN LID;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#cgnv6_ds_lite RuleSetRule#cgnv6_ds_lite}
  */
  readonly cgnv6DsLite?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#cgnv6_ds_lite_log RuleSetRule#cgnv6_ds_lite_log}
  */
  readonly cgnv6DsLiteLog?: number;
  /**
  * LSN LID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#cgnv6_ds_lite_lsn_lid RuleSetRule#cgnv6_ds_lite_lsn_lid}
  */
  readonly cgnv6DsLiteLsnLid?: number;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#cgnv6_fixed_nat_log RuleSetRule#cgnv6_fixed_nat_log}
  */
  readonly cgnv6FixedNatLog?: number;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#cgnv6_log RuleSetRule#cgnv6_log}
  */
  readonly cgnv6Log?: number;
  /**
  * LSN LID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#cgnv6_lsn_lid RuleSetRule#cgnv6_lsn_lid}
  */
  readonly cgnv6LsnLid?: number;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#cgnv6_lsn_log RuleSetRule#cgnv6_lsn_log}
  */
  readonly cgnv6LsnLog?: number;
  /**
  * 'lsn-lid': Apply specified CGNv6 LSN LID; 'fixed-nat': Apply CGNv6 Fixed NAT; 'ds-lite': Apply CGNv6 DS-Lite;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#cgnv6_policy RuleSetRule#cgnv6_policy}
  */
  readonly cgnv6Policy?: string;
  /**
  * Match destination IP against class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_class_list RuleSetRule#dst_class_list}
  */
  readonly dstClassList?: string;
  /**
  * Match destination IP against domain-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_domain_list RuleSetRule#dst_domain_list}
  */
  readonly dstDomainList?: string;
  /**
  * Geolocation name list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_geoloc_list RuleSetRule#dst_geoloc_list}
  */
  readonly dstGeolocList?: string;
  /**
  * Use Geolocation list from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_geoloc_list_shared RuleSetRule#dst_geoloc_list_shared}
  */
  readonly dstGeolocListShared?: number;
  /**
  * Single geolocation name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_geoloc_name RuleSetRule#dst_geoloc_name}
  */
  readonly dstGeolocName?: string;
  /**
  * 'any': Any IPv4 address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_ipv4_any RuleSetRule#dst_ipv4_any}
  */
  readonly dstIpv4Any?: string;
  /**
  * 'any': Any IPv6 address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_ipv6_any RuleSetRule#dst_ipv6_any}
  */
  readonly dstIpv6Any?: string;
  /**
  * Bind threat-list for destination IP based filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_threat_list RuleSetRule#dst_threat_list}
  */
  readonly dstThreatList?: string;
  /**
  * Zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_zone RuleSetRule#dst_zone}
  */
  readonly dstZone?: string;
  /**
  * 'any': any;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_zone_any RuleSetRule#dst_zone_any}
  */
  readonly dstZoneAny?: string;
  /**
  * Listen on port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#forward_listen_on_port RuleSetRule#forward_listen_on_port}
  */
  readonly forwardListenOnPort?: number;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#forward_log RuleSetRule#forward_log}
  */
  readonly forwardLog?: number;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#fw_log RuleSetRule#fw_log}
  */
  readonly fwLog?: number;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#fwlog RuleSetRule#fwlog}
  */
  readonly fwlog?: number;
  /**
  * Configure GTP Policy Template (GTP Template Policy Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#gtp_template RuleSetRule#gtp_template}
  */
  readonly gtpTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#id RuleSetRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * TCP/UDP idle-timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#idle_timeout RuleSetRule#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Enable DS-Lite tunnel inspection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#inspect_payload RuleSetRule#inspect_payload}
  */
  readonly inspectPayload?: number;
  /**
  * 'v4': IPv4 rule; 'v6': IPv6 rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#ip_version RuleSetRule#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Apply a Template LID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#lid RuleSetRule#lid}
  */
  readonly lid?: number;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#lidlog RuleSetRule#lidlog}
  */
  readonly lidlog?: number;
  /**
  * Listen on port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#listen_on_port RuleSetRule#listen_on_port}
  */
  readonly listenOnPort?: number;
  /**
  * Apply a Template LID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#listen_on_port_lid RuleSetRule#listen_on_port_lid}
  */
  readonly listenOnPortLid?: number;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#listen_on_port_lidlog RuleSetRule#listen_on_port_lidlog}
  */
  readonly listenOnPortLidlog?: number;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#log RuleSetRule#log}
  */
  readonly log?: number;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#name RuleSetRule#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#packet_capture_template RuleSetRule#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * 'cgnv6': Apply CGNv6 policy; 'forward': Forward packet; 'ipsec': Apply IPsec encapsulation; 'ipsec-group': Apply IPsec encapsulation from a group;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#policy RuleSetRule#policy}
  */
  readonly policy?: string;
  /**
  * Rule entry comment (Notes for this rule)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#remark RuleSetRule#remark}
  */
  readonly remark?: string;
  /**
  * Apply a Template LID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#reset_lid RuleSetRule#reset_lid}
  */
  readonly resetLid?: number;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#reset_lidlog RuleSetRule#reset_lidlog}
  */
  readonly resetLidlog?: number;
  /**
  * Rule_set_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#rule_set_name RuleSetRule#rule_set_name}
  */
  readonly ruleSetName: string;
  /**
  * 'any': any;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#service_any RuleSetRule#service_any}
  */
  readonly serviceAny?: string;
  /**
  * Match source IP against class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_class_list RuleSetRule#src_class_list}
  */
  readonly srcClassList?: string;
  /**
  * Geolocation name list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_geoloc_list RuleSetRule#src_geoloc_list}
  */
  readonly srcGeolocList?: string;
  /**
  * Use Geolocation list from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_geoloc_list_shared RuleSetRule#src_geoloc_list_shared}
  */
  readonly srcGeolocListShared?: number;
  /**
  * Single geolocation name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_geoloc_name RuleSetRule#src_geoloc_name}
  */
  readonly srcGeolocName?: string;
  /**
  * 'any': Any IPv4 address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_ipv4_any RuleSetRule#src_ipv4_any}
  */
  readonly srcIpv4Any?: string;
  /**
  * 'any': Any IPv6 address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_ipv6_any RuleSetRule#src_ipv6_any}
  */
  readonly srcIpv6Any?: string;
  /**
  * Bind threat-list for source IP based filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_threat_list RuleSetRule#src_threat_list}
  */
  readonly srcThreatList?: string;
  /**
  * Zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_zone RuleSetRule#src_zone}
  */
  readonly srcZone?: string;
  /**
  * 'any': any;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_zone_any RuleSetRule#src_zone_any}
  */
  readonly srcZoneAny?: string;
  /**
  * 'enable': Enable rule; 'disable': Disable rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#status RuleSetRule#status}
  */
  readonly status?: string;
  /**
  * Enable application statistic (functional only in action permit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#track_application RuleSetRule#track_application}
  */
  readonly trackApplication?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#user_tag RuleSetRule#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#uuid RuleSetRule#uuid}
  */
  readonly uuid?: string;
  /**
  * VPN IPsec Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#vpn_ipsec_group_name RuleSetRule#vpn_ipsec_group_name}
  */
  readonly vpnIpsecGroupName?: string;
  /**
  * VPN IPsec name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#vpn_ipsec_name RuleSetRule#vpn_ipsec_name}
  */
  readonly vpnIpsecName?: string;
  /**
  * action_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#action_group RuleSetRule#action_group}
  */
  readonly actionGroup?: RuleSetRuleActionGroup;
  /**
  * app_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#app_list RuleSetRule#app_list}
  */
  readonly appList?: RuleSetRuleAppListStruct[] | cdktf.IResolvable;
  /**
  * dest_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dest_list RuleSetRule#dest_list}
  */
  readonly destList?: RuleSetRuleDestListStruct[] | cdktf.IResolvable;
  /**
  * dscp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dscp_list RuleSetRule#dscp_list}
  */
  readonly dscpList?: RuleSetRuleDscpListStruct[] | cdktf.IResolvable;
  /**
  * move_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#move_rule RuleSetRule#move_rule}
  */
  readonly moveRule?: RuleSetRuleMoveRule;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#sampling_enable RuleSetRule#sampling_enable}
  */
  readonly samplingEnable?: RuleSetRuleSamplingEnable[] | cdktf.IResolvable;
  /**
  * service_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#service_list RuleSetRule#service_list}
  */
  readonly serviceList?: RuleSetRuleServiceListStruct[] | cdktf.IResolvable;
  /**
  * source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#source_list RuleSetRule#source_list}
  */
  readonly sourceList?: RuleSetRuleSourceListStruct[] | cdktf.IResolvable;
}
export interface RuleSetRuleActionGroupLoggingTemplateListStruct {
  /**
  * Logging template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#permit_cgnv6_log RuleSetRule#permit_cgnv6_log}
  */
  readonly permitCgnv6Log?: string;
  /**
  * Logging template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#permit_fw_log RuleSetRule#permit_fw_log}
  */
  readonly permitFwLog?: string;
  /**
  * 'fw-logging-template': Logging with specified fw template; 'cgnv6-logging-template': Logging with specified cgnv6 template; 'netflow-monitor': Logging with specified netflow/ipfix monitor;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#permit_log_template_type RuleSetRule#permit_log_template_type}
  */
  readonly permitLogTemplateType?: string;
  /**
  * Name of netflow monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#permit_netflow_log RuleSetRule#permit_netflow_log}
  */
  readonly permitNetflowLog?: string;
}

export function ruleSetRuleActionGroupLoggingTemplateListStructToTerraform(struct?: RuleSetRuleActionGroupLoggingTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permit_cgnv6_log: cdktf.stringToTerraform(struct!.permitCgnv6Log),
    permit_fw_log: cdktf.stringToTerraform(struct!.permitFwLog),
    permit_log_template_type: cdktf.stringToTerraform(struct!.permitLogTemplateType),
    permit_netflow_log: cdktf.stringToTerraform(struct!.permitNetflowLog),
  }
}


export function ruleSetRuleActionGroupLoggingTemplateListStructToHclTerraform(struct?: RuleSetRuleActionGroupLoggingTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permit_cgnv6_log: {
      value: cdktf.stringToHclTerraform(struct!.permitCgnv6Log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_fw_log: {
      value: cdktf.stringToHclTerraform(struct!.permitFwLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_log_template_type: {
      value: cdktf.stringToHclTerraform(struct!.permitLogTemplateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_netflow_log: {
      value: cdktf.stringToHclTerraform(struct!.permitNetflowLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetRuleActionGroupLoggingTemplateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleSetRuleActionGroupLoggingTemplateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permitCgnv6Log !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitCgnv6Log = this._permitCgnv6Log;
    }
    if (this._permitFwLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitFwLog = this._permitFwLog;
    }
    if (this._permitLogTemplateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitLogTemplateType = this._permitLogTemplateType;
    }
    if (this._permitNetflowLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitNetflowLog = this._permitNetflowLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetRuleActionGroupLoggingTemplateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permitCgnv6Log = undefined;
      this._permitFwLog = undefined;
      this._permitLogTemplateType = undefined;
      this._permitNetflowLog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permitCgnv6Log = value.permitCgnv6Log;
      this._permitFwLog = value.permitFwLog;
      this._permitLogTemplateType = value.permitLogTemplateType;
      this._permitNetflowLog = value.permitNetflowLog;
    }
  }

  // permit_cgnv6_log - computed: false, optional: true, required: false
  private _permitCgnv6Log?: string; 
  public get permitCgnv6Log() {
    return this.getStringAttribute('permit_cgnv6_log');
  }
  public set permitCgnv6Log(value: string) {
    this._permitCgnv6Log = value;
  }
  public resetPermitCgnv6Log() {
    this._permitCgnv6Log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitCgnv6LogInput() {
    return this._permitCgnv6Log;
  }

  // permit_fw_log - computed: false, optional: true, required: false
  private _permitFwLog?: string; 
  public get permitFwLog() {
    return this.getStringAttribute('permit_fw_log');
  }
  public set permitFwLog(value: string) {
    this._permitFwLog = value;
  }
  public resetPermitFwLog() {
    this._permitFwLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitFwLogInput() {
    return this._permitFwLog;
  }

  // permit_log_template_type - computed: false, optional: true, required: false
  private _permitLogTemplateType?: string; 
  public get permitLogTemplateType() {
    return this.getStringAttribute('permit_log_template_type');
  }
  public set permitLogTemplateType(value: string) {
    this._permitLogTemplateType = value;
  }
  public resetPermitLogTemplateType() {
    this._permitLogTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitLogTemplateTypeInput() {
    return this._permitLogTemplateType;
  }

  // permit_netflow_log - computed: false, optional: true, required: false
  private _permitNetflowLog?: string; 
  public get permitNetflowLog() {
    return this.getStringAttribute('permit_netflow_log');
  }
  public set permitNetflowLog(value: string) {
    this._permitNetflowLog = value;
  }
  public resetPermitNetflowLog() {
    this._permitNetflowLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitNetflowLogInput() {
    return this._permitNetflowLog;
  }
}

export class RuleSetRuleActionGroupLoggingTemplateListStructList extends cdktf.ComplexList {
  public internalValue? : RuleSetRuleActionGroupLoggingTemplateListStruct[] | cdktf.IResolvable

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
  public get(index: number): RuleSetRuleActionGroupLoggingTemplateListStructOutputReference {
    return new RuleSetRuleActionGroupLoggingTemplateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleSetRuleActionGroup {
  /**
  * Apply CGNv6 policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#cgnv6 RuleSetRule#cgnv6}
  */
  readonly cgnv6?: number;
  /**
  * 'lsn-lid': Apply specified CGNv6 LSN LID;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#cgnv6_ds_lite RuleSetRule#cgnv6_ds_lite}
  */
  readonly cgnv6DsLite?: string;
  /**
  * LSN LID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#cgnv6_ds_lite_lsn_lid RuleSetRule#cgnv6_ds_lite_lsn_lid}
  */
  readonly cgnv6DsLiteLsnLid?: number;
  /**
  * LSN LID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#cgnv6_lsn_lid RuleSetRule#cgnv6_lsn_lid}
  */
  readonly cgnv6LsnLid?: number;
  /**
  * 'lsn-lid': Apply specified CGNv6 LSN LID; 'fixed-nat': Apply CGNv6 Fixed NAT; 'ds-lite': Apply CGNv6 DS-Lite;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#cgnv6_policy RuleSetRule#cgnv6_policy}
  */
  readonly cgnv6Policy?: string;
  /**
  * Logging template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#deny_fw_log RuleSetRule#deny_fw_log}
  */
  readonly denyFwLog?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#deny_log RuleSetRule#deny_log}
  */
  readonly denyLog?: number;
  /**
  * 'fw-logging-template': Logging with specified fw template;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#deny_log_template_type RuleSetRule#deny_log_template_type}
  */
  readonly denyLogTemplateType?: string;
  /**
  * Limit policy Template (only works for inbound rule)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#deny_reset_limit_policy RuleSetRule#deny_reset_limit_policy}
  */
  readonly denyResetLimitPolicy?: number;
  /**
  * DSCP Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dscp_number RuleSetRule#dscp_number}
  */
  readonly dscpNumber?: number;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dscp_value RuleSetRule#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * Forward packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#forward RuleSetRule#forward}
  */
  readonly forward?: number;
  /**
  * Enable DS-Lite tunnel inspection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#inspect_payload RuleSetRule#inspect_payload}
  */
  readonly inspectPayload?: number;
  /**
  * Apply IPsec encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#ipsec RuleSetRule#ipsec}
  */
  readonly ipsec?: number;
  /**
  * Apply IPsec Group encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#ipsec_group RuleSetRule#ipsec_group}
  */
  readonly ipsecGroup?: number;
  /**
  * Listen on port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#listen_on_port RuleSetRule#listen_on_port}
  */
  readonly listenOnPort?: number;
  /**
  * on-timeout for Syn-cookie (Timeout in seconds, default is 120 seconds (2 minutes))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#on_timeout RuleSetRule#on_timeout}
  */
  readonly onTimeout?: number;
  /**
  * Limit policy Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#permit_limit_policy RuleSetRule#permit_limit_policy}
  */
  readonly permitLimitPolicy?: number;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#permit_log RuleSetRule#permit_log}
  */
  readonly permitLog?: number;
  /**
  * Use the user's source MAC for the next hop rather than the routing table (default:off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#permit_respond_to_user_mac RuleSetRule#permit_respond_to_user_mac}
  */
  readonly permitRespondToUserMac?: number;
  /**
  * Logging template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#reset_fw_log RuleSetRule#reset_fw_log}
  */
  readonly resetFwLog?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#reset_log RuleSetRule#reset_log}
  */
  readonly resetLog?: number;
  /**
  * 'fw-logging-template': Logging with specified fw template;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#reset_log_template_type RuleSetRule#reset_log_template_type}
  */
  readonly resetLogTemplateType?: string;
  /**
  * Use the user's source MAC for the next hop rather than the routing table (default:off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#reset_respond_to_user_mac RuleSetRule#reset_respond_to_user_mac}
  */
  readonly resetRespondToUserMac?: number;
  /**
  * DSCP setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#set_dscp RuleSetRule#set_dscp}
  */
  readonly setDscp?: number;
  /**
  * Skip Unicast Reverse Path Forwarding check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#skip_urpf_check RuleSetRule#skip_urpf_check}
  */
  readonly skipUrpfCheck?: number;
  /**
  * Configure Firewall rule Syn-Cookie Protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#syn_cookie RuleSetRule#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#syn_cookie_enable RuleSetRule#syn_cookie_enable}
  */
  readonly synCookieEnable?: string;
  /**
  * Firewall rule TCP parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#tcp RuleSetRule#tcp}
  */
  readonly tcp?: number;
  /**
  * Decimal number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#threshold_val RuleSetRule#threshold_val}
  */
  readonly thresholdVal?: number;
  /**
  * 'permit': permit; 'deny': deny; 'reset': reset;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#type RuleSetRule#type}
  */
  readonly type?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#uuid RuleSetRule#uuid}
  */
  readonly uuid?: string;
  /**
  * VPN IPsec Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#vpn_ipsec_group_name RuleSetRule#vpn_ipsec_group_name}
  */
  readonly vpnIpsecGroupName?: string;
  /**
  * VPN IPsec name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#vpn_ipsec_name RuleSetRule#vpn_ipsec_name}
  */
  readonly vpnIpsecName?: string;
  /**
  * logging_template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#logging_template_list RuleSetRule#logging_template_list}
  */
  readonly loggingTemplateList?: RuleSetRuleActionGroupLoggingTemplateListStruct[] | cdktf.IResolvable;
}

export function ruleSetRuleActionGroupToTerraform(struct?: RuleSetRuleActionGroupOutputReference | RuleSetRuleActionGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cgnv6: cdktf.numberToTerraform(struct!.cgnv6),
    cgnv6_ds_lite: cdktf.stringToTerraform(struct!.cgnv6DsLite),
    cgnv6_ds_lite_lsn_lid: cdktf.numberToTerraform(struct!.cgnv6DsLiteLsnLid),
    cgnv6_lsn_lid: cdktf.numberToTerraform(struct!.cgnv6LsnLid),
    cgnv6_policy: cdktf.stringToTerraform(struct!.cgnv6Policy),
    deny_fw_log: cdktf.stringToTerraform(struct!.denyFwLog),
    deny_log: cdktf.numberToTerraform(struct!.denyLog),
    deny_log_template_type: cdktf.stringToTerraform(struct!.denyLogTemplateType),
    deny_reset_limit_policy: cdktf.numberToTerraform(struct!.denyResetLimitPolicy),
    dscp_number: cdktf.numberToTerraform(struct!.dscpNumber),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    forward: cdktf.numberToTerraform(struct!.forward),
    inspect_payload: cdktf.numberToTerraform(struct!.inspectPayload),
    ipsec: cdktf.numberToTerraform(struct!.ipsec),
    ipsec_group: cdktf.numberToTerraform(struct!.ipsecGroup),
    listen_on_port: cdktf.numberToTerraform(struct!.listenOnPort),
    on_timeout: cdktf.numberToTerraform(struct!.onTimeout),
    permit_limit_policy: cdktf.numberToTerraform(struct!.permitLimitPolicy),
    permit_log: cdktf.numberToTerraform(struct!.permitLog),
    permit_respond_to_user_mac: cdktf.numberToTerraform(struct!.permitRespondToUserMac),
    reset_fw_log: cdktf.stringToTerraform(struct!.resetFwLog),
    reset_log: cdktf.numberToTerraform(struct!.resetLog),
    reset_log_template_type: cdktf.stringToTerraform(struct!.resetLogTemplateType),
    reset_respond_to_user_mac: cdktf.numberToTerraform(struct!.resetRespondToUserMac),
    set_dscp: cdktf.numberToTerraform(struct!.setDscp),
    skip_urpf_check: cdktf.numberToTerraform(struct!.skipUrpfCheck),
    syn_cookie: cdktf.numberToTerraform(struct!.synCookie),
    syn_cookie_enable: cdktf.stringToTerraform(struct!.synCookieEnable),
    tcp: cdktf.numberToTerraform(struct!.tcp),
    threshold_val: cdktf.numberToTerraform(struct!.thresholdVal),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vpn_ipsec_group_name: cdktf.stringToTerraform(struct!.vpnIpsecGroupName),
    vpn_ipsec_name: cdktf.stringToTerraform(struct!.vpnIpsecName),
    logging_template_list: cdktf.listMapper(ruleSetRuleActionGroupLoggingTemplateListStructToTerraform, true)(struct!.loggingTemplateList),
  }
}


export function ruleSetRuleActionGroupToHclTerraform(struct?: RuleSetRuleActionGroupOutputReference | RuleSetRuleActionGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cgnv6: {
      value: cdktf.numberToHclTerraform(struct!.cgnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cgnv6_ds_lite: {
      value: cdktf.stringToHclTerraform(struct!.cgnv6DsLite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cgnv6_ds_lite_lsn_lid: {
      value: cdktf.numberToHclTerraform(struct!.cgnv6DsLiteLsnLid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cgnv6_lsn_lid: {
      value: cdktf.numberToHclTerraform(struct!.cgnv6LsnLid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cgnv6_policy: {
      value: cdktf.stringToHclTerraform(struct!.cgnv6Policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_fw_log: {
      value: cdktf.stringToHclTerraform(struct!.denyFwLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_log: {
      value: cdktf.numberToHclTerraform(struct!.denyLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_log_template_type: {
      value: cdktf.stringToHclTerraform(struct!.denyLogTemplateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_reset_limit_policy: {
      value: cdktf.numberToHclTerraform(struct!.denyResetLimitPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp_number: {
      value: cdktf.numberToHclTerraform(struct!.dscpNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward: {
      value: cdktf.numberToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inspect_payload: {
      value: cdktf.numberToHclTerraform(struct!.inspectPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec: {
      value: cdktf.numberToHclTerraform(struct!.ipsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_group: {
      value: cdktf.numberToHclTerraform(struct!.ipsecGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    listen_on_port: {
      value: cdktf.numberToHclTerraform(struct!.listenOnPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_timeout: {
      value: cdktf.numberToHclTerraform(struct!.onTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_limit_policy: {
      value: cdktf.numberToHclTerraform(struct!.permitLimitPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_log: {
      value: cdktf.numberToHclTerraform(struct!.permitLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_respond_to_user_mac: {
      value: cdktf.numberToHclTerraform(struct!.permitRespondToUserMac),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset_fw_log: {
      value: cdktf.stringToHclTerraform(struct!.resetFwLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_log: {
      value: cdktf.numberToHclTerraform(struct!.resetLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset_log_template_type: {
      value: cdktf.stringToHclTerraform(struct!.resetLogTemplateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_respond_to_user_mac: {
      value: cdktf.numberToHclTerraform(struct!.resetRespondToUserMac),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_dscp: {
      value: cdktf.numberToHclTerraform(struct!.setDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_urpf_check: {
      value: cdktf.numberToHclTerraform(struct!.skipUrpfCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie: {
      value: cdktf.numberToHclTerraform(struct!.synCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie_enable: {
      value: cdktf.stringToHclTerraform(struct!.synCookieEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.numberToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_val: {
      value: cdktf.numberToHclTerraform(struct!.thresholdVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    vpn_ipsec_group_name: {
      value: cdktf.stringToHclTerraform(struct!.vpnIpsecGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_ipsec_name: {
      value: cdktf.stringToHclTerraform(struct!.vpnIpsecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_template_list: {
      value: cdktf.listMapperHcl(ruleSetRuleActionGroupLoggingTemplateListStructToHclTerraform, true)(struct!.loggingTemplateList),
      isBlock: true,
      type: "list",
      storageClassType: "RuleSetRuleActionGroupLoggingTemplateListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetRuleActionGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleSetRuleActionGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnv6 = this._cgnv6;
    }
    if (this._cgnv6DsLite !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnv6DsLite = this._cgnv6DsLite;
    }
    if (this._cgnv6DsLiteLsnLid !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnv6DsLiteLsnLid = this._cgnv6DsLiteLsnLid;
    }
    if (this._cgnv6LsnLid !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnv6LsnLid = this._cgnv6LsnLid;
    }
    if (this._cgnv6Policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnv6Policy = this._cgnv6Policy;
    }
    if (this._denyFwLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyFwLog = this._denyFwLog;
    }
    if (this._denyLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyLog = this._denyLog;
    }
    if (this._denyLogTemplateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyLogTemplateType = this._denyLogTemplateType;
    }
    if (this._denyResetLimitPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyResetLimitPolicy = this._denyResetLimitPolicy;
    }
    if (this._dscpNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpNumber = this._dscpNumber;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    if (this._inspectPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectPayload = this._inspectPayload;
    }
    if (this._ipsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsec = this._ipsec;
    }
    if (this._ipsecGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecGroup = this._ipsecGroup;
    }
    if (this._listenOnPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenOnPort = this._listenOnPort;
    }
    if (this._onTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.onTimeout = this._onTimeout;
    }
    if (this._permitLimitPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitLimitPolicy = this._permitLimitPolicy;
    }
    if (this._permitLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitLog = this._permitLog;
    }
    if (this._permitRespondToUserMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitRespondToUserMac = this._permitRespondToUserMac;
    }
    if (this._resetFwLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetFwLog = this._resetFwLog;
    }
    if (this._resetLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetLog = this._resetLog;
    }
    if (this._resetLogTemplateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetLogTemplateType = this._resetLogTemplateType;
    }
    if (this._resetRespondToUserMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetRespondToUserMac = this._resetRespondToUserMac;
    }
    if (this._setDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDscp = this._setDscp;
    }
    if (this._skipUrpfCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUrpfCheck = this._skipUrpfCheck;
    }
    if (this._synCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookie = this._synCookie;
    }
    if (this._synCookieEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookieEnable = this._synCookieEnable;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._thresholdVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdVal = this._thresholdVal;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vpnIpsecGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIpsecGroupName = this._vpnIpsecGroupName;
    }
    if (this._vpnIpsecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIpsecName = this._vpnIpsecName;
    }
    if (this._loggingTemplateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingTemplateList = this._loggingTemplateList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetRuleActionGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cgnv6 = undefined;
      this._cgnv6DsLite = undefined;
      this._cgnv6DsLiteLsnLid = undefined;
      this._cgnv6LsnLid = undefined;
      this._cgnv6Policy = undefined;
      this._denyFwLog = undefined;
      this._denyLog = undefined;
      this._denyLogTemplateType = undefined;
      this._denyResetLimitPolicy = undefined;
      this._dscpNumber = undefined;
      this._dscpValue = undefined;
      this._forward = undefined;
      this._inspectPayload = undefined;
      this._ipsec = undefined;
      this._ipsecGroup = undefined;
      this._listenOnPort = undefined;
      this._onTimeout = undefined;
      this._permitLimitPolicy = undefined;
      this._permitLog = undefined;
      this._permitRespondToUserMac = undefined;
      this._resetFwLog = undefined;
      this._resetLog = undefined;
      this._resetLogTemplateType = undefined;
      this._resetRespondToUserMac = undefined;
      this._setDscp = undefined;
      this._skipUrpfCheck = undefined;
      this._synCookie = undefined;
      this._synCookieEnable = undefined;
      this._tcp = undefined;
      this._thresholdVal = undefined;
      this._type = undefined;
      this._uuid = undefined;
      this._vpnIpsecGroupName = undefined;
      this._vpnIpsecName = undefined;
      this._loggingTemplateList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cgnv6 = value.cgnv6;
      this._cgnv6DsLite = value.cgnv6DsLite;
      this._cgnv6DsLiteLsnLid = value.cgnv6DsLiteLsnLid;
      this._cgnv6LsnLid = value.cgnv6LsnLid;
      this._cgnv6Policy = value.cgnv6Policy;
      this._denyFwLog = value.denyFwLog;
      this._denyLog = value.denyLog;
      this._denyLogTemplateType = value.denyLogTemplateType;
      this._denyResetLimitPolicy = value.denyResetLimitPolicy;
      this._dscpNumber = value.dscpNumber;
      this._dscpValue = value.dscpValue;
      this._forward = value.forward;
      this._inspectPayload = value.inspectPayload;
      this._ipsec = value.ipsec;
      this._ipsecGroup = value.ipsecGroup;
      this._listenOnPort = value.listenOnPort;
      this._onTimeout = value.onTimeout;
      this._permitLimitPolicy = value.permitLimitPolicy;
      this._permitLog = value.permitLog;
      this._permitRespondToUserMac = value.permitRespondToUserMac;
      this._resetFwLog = value.resetFwLog;
      this._resetLog = value.resetLog;
      this._resetLogTemplateType = value.resetLogTemplateType;
      this._resetRespondToUserMac = value.resetRespondToUserMac;
      this._setDscp = value.setDscp;
      this._skipUrpfCheck = value.skipUrpfCheck;
      this._synCookie = value.synCookie;
      this._synCookieEnable = value.synCookieEnable;
      this._tcp = value.tcp;
      this._thresholdVal = value.thresholdVal;
      this._type = value.type;
      this._uuid = value.uuid;
      this._vpnIpsecGroupName = value.vpnIpsecGroupName;
      this._vpnIpsecName = value.vpnIpsecName;
      this._loggingTemplateList.internalValue = value.loggingTemplateList;
    }
  }

  // cgnv6 - computed: false, optional: true, required: false
  private _cgnv6?: number; 
  public get cgnv6() {
    return this.getNumberAttribute('cgnv6');
  }
  public set cgnv6(value: number) {
    this._cgnv6 = value;
  }
  public resetCgnv6() {
    this._cgnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6Input() {
    return this._cgnv6;
  }

  // cgnv6_ds_lite - computed: false, optional: true, required: false
  private _cgnv6DsLite?: string; 
  public get cgnv6DsLite() {
    return this.getStringAttribute('cgnv6_ds_lite');
  }
  public set cgnv6DsLite(value: string) {
    this._cgnv6DsLite = value;
  }
  public resetCgnv6DsLite() {
    this._cgnv6DsLite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6DsLiteInput() {
    return this._cgnv6DsLite;
  }

  // cgnv6_ds_lite_lsn_lid - computed: false, optional: true, required: false
  private _cgnv6DsLiteLsnLid?: number; 
  public get cgnv6DsLiteLsnLid() {
    return this.getNumberAttribute('cgnv6_ds_lite_lsn_lid');
  }
  public set cgnv6DsLiteLsnLid(value: number) {
    this._cgnv6DsLiteLsnLid = value;
  }
  public resetCgnv6DsLiteLsnLid() {
    this._cgnv6DsLiteLsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6DsLiteLsnLidInput() {
    return this._cgnv6DsLiteLsnLid;
  }

  // cgnv6_lsn_lid - computed: false, optional: true, required: false
  private _cgnv6LsnLid?: number; 
  public get cgnv6LsnLid() {
    return this.getNumberAttribute('cgnv6_lsn_lid');
  }
  public set cgnv6LsnLid(value: number) {
    this._cgnv6LsnLid = value;
  }
  public resetCgnv6LsnLid() {
    this._cgnv6LsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6LsnLidInput() {
    return this._cgnv6LsnLid;
  }

  // cgnv6_policy - computed: false, optional: true, required: false
  private _cgnv6Policy?: string; 
  public get cgnv6Policy() {
    return this.getStringAttribute('cgnv6_policy');
  }
  public set cgnv6Policy(value: string) {
    this._cgnv6Policy = value;
  }
  public resetCgnv6Policy() {
    this._cgnv6Policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6PolicyInput() {
    return this._cgnv6Policy;
  }

  // deny_fw_log - computed: false, optional: true, required: false
  private _denyFwLog?: string; 
  public get denyFwLog() {
    return this.getStringAttribute('deny_fw_log');
  }
  public set denyFwLog(value: string) {
    this._denyFwLog = value;
  }
  public resetDenyFwLog() {
    this._denyFwLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyFwLogInput() {
    return this._denyFwLog;
  }

  // deny_log - computed: false, optional: true, required: false
  private _denyLog?: number; 
  public get denyLog() {
    return this.getNumberAttribute('deny_log');
  }
  public set denyLog(value: number) {
    this._denyLog = value;
  }
  public resetDenyLog() {
    this._denyLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyLogInput() {
    return this._denyLog;
  }

  // deny_log_template_type - computed: false, optional: true, required: false
  private _denyLogTemplateType?: string; 
  public get denyLogTemplateType() {
    return this.getStringAttribute('deny_log_template_type');
  }
  public set denyLogTemplateType(value: string) {
    this._denyLogTemplateType = value;
  }
  public resetDenyLogTemplateType() {
    this._denyLogTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyLogTemplateTypeInput() {
    return this._denyLogTemplateType;
  }

  // deny_reset_limit_policy - computed: false, optional: true, required: false
  private _denyResetLimitPolicy?: number; 
  public get denyResetLimitPolicy() {
    return this.getNumberAttribute('deny_reset_limit_policy');
  }
  public set denyResetLimitPolicy(value: number) {
    this._denyResetLimitPolicy = value;
  }
  public resetDenyResetLimitPolicy() {
    this._denyResetLimitPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyResetLimitPolicyInput() {
    return this._denyResetLimitPolicy;
  }

  // dscp_number - computed: false, optional: true, required: false
  private _dscpNumber?: number; 
  public get dscpNumber() {
    return this.getNumberAttribute('dscp_number');
  }
  public set dscpNumber(value: number) {
    this._dscpNumber = value;
  }
  public resetDscpNumber() {
    this._dscpNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpNumberInput() {
    return this._dscpNumber;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward?: number; 
  public get forward() {
    return this.getNumberAttribute('forward');
  }
  public set forward(value: number) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // inspect_payload - computed: false, optional: true, required: false
  private _inspectPayload?: number; 
  public get inspectPayload() {
    return this.getNumberAttribute('inspect_payload');
  }
  public set inspectPayload(value: number) {
    this._inspectPayload = value;
  }
  public resetInspectPayload() {
    this._inspectPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectPayloadInput() {
    return this._inspectPayload;
  }

  // ipsec - computed: false, optional: true, required: false
  private _ipsec?: number; 
  public get ipsec() {
    return this.getNumberAttribute('ipsec');
  }
  public set ipsec(value: number) {
    this._ipsec = value;
  }
  public resetIpsec() {
    this._ipsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecInput() {
    return this._ipsec;
  }

  // ipsec_group - computed: false, optional: true, required: false
  private _ipsecGroup?: number; 
  public get ipsecGroup() {
    return this.getNumberAttribute('ipsec_group');
  }
  public set ipsecGroup(value: number) {
    this._ipsecGroup = value;
  }
  public resetIpsecGroup() {
    this._ipsecGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecGroupInput() {
    return this._ipsecGroup;
  }

  // listen_on_port - computed: false, optional: true, required: false
  private _listenOnPort?: number; 
  public get listenOnPort() {
    return this.getNumberAttribute('listen_on_port');
  }
  public set listenOnPort(value: number) {
    this._listenOnPort = value;
  }
  public resetListenOnPort() {
    this._listenOnPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenOnPortInput() {
    return this._listenOnPort;
  }

  // on_timeout - computed: false, optional: true, required: false
  private _onTimeout?: number; 
  public get onTimeout() {
    return this.getNumberAttribute('on_timeout');
  }
  public set onTimeout(value: number) {
    this._onTimeout = value;
  }
  public resetOnTimeout() {
    this._onTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTimeoutInput() {
    return this._onTimeout;
  }

  // permit_limit_policy - computed: false, optional: true, required: false
  private _permitLimitPolicy?: number; 
  public get permitLimitPolicy() {
    return this.getNumberAttribute('permit_limit_policy');
  }
  public set permitLimitPolicy(value: number) {
    this._permitLimitPolicy = value;
  }
  public resetPermitLimitPolicy() {
    this._permitLimitPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitLimitPolicyInput() {
    return this._permitLimitPolicy;
  }

  // permit_log - computed: false, optional: true, required: false
  private _permitLog?: number; 
  public get permitLog() {
    return this.getNumberAttribute('permit_log');
  }
  public set permitLog(value: number) {
    this._permitLog = value;
  }
  public resetPermitLog() {
    this._permitLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitLogInput() {
    return this._permitLog;
  }

  // permit_respond_to_user_mac - computed: false, optional: true, required: false
  private _permitRespondToUserMac?: number; 
  public get permitRespondToUserMac() {
    return this.getNumberAttribute('permit_respond_to_user_mac');
  }
  public set permitRespondToUserMac(value: number) {
    this._permitRespondToUserMac = value;
  }
  public resetPermitRespondToUserMac() {
    this._permitRespondToUserMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitRespondToUserMacInput() {
    return this._permitRespondToUserMac;
  }

  // reset_fw_log - computed: false, optional: true, required: false
  private _resetFwLog?: string; 
  public get resetFwLog() {
    return this.getStringAttribute('reset_fw_log');
  }
  public set resetFwLog(value: string) {
    this._resetFwLog = value;
  }
  public resetResetFwLog() {
    this._resetFwLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetFwLogInput() {
    return this._resetFwLog;
  }

  // reset_log - computed: false, optional: true, required: false
  private _resetLog?: number; 
  public get resetLog() {
    return this.getNumberAttribute('reset_log');
  }
  public set resetLog(value: number) {
    this._resetLog = value;
  }
  public resetResetLog() {
    this._resetLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetLogInput() {
    return this._resetLog;
  }

  // reset_log_template_type - computed: false, optional: true, required: false
  private _resetLogTemplateType?: string; 
  public get resetLogTemplateType() {
    return this.getStringAttribute('reset_log_template_type');
  }
  public set resetLogTemplateType(value: string) {
    this._resetLogTemplateType = value;
  }
  public resetResetLogTemplateType() {
    this._resetLogTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetLogTemplateTypeInput() {
    return this._resetLogTemplateType;
  }

  // reset_respond_to_user_mac - computed: false, optional: true, required: false
  private _resetRespondToUserMac?: number; 
  public get resetRespondToUserMac() {
    return this.getNumberAttribute('reset_respond_to_user_mac');
  }
  public set resetRespondToUserMac(value: number) {
    this._resetRespondToUserMac = value;
  }
  public resetResetRespondToUserMac() {
    this._resetRespondToUserMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetRespondToUserMacInput() {
    return this._resetRespondToUserMac;
  }

  // set_dscp - computed: false, optional: true, required: false
  private _setDscp?: number; 
  public get setDscp() {
    return this.getNumberAttribute('set_dscp');
  }
  public set setDscp(value: number) {
    this._setDscp = value;
  }
  public resetSetDscp() {
    this._setDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDscpInput() {
    return this._setDscp;
  }

  // skip_urpf_check - computed: false, optional: true, required: false
  private _skipUrpfCheck?: number; 
  public get skipUrpfCheck() {
    return this.getNumberAttribute('skip_urpf_check');
  }
  public set skipUrpfCheck(value: number) {
    this._skipUrpfCheck = value;
  }
  public resetSkipUrpfCheck() {
    this._skipUrpfCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUrpfCheckInput() {
    return this._skipUrpfCheck;
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

  // syn_cookie_enable - computed: false, optional: true, required: false
  private _synCookieEnable?: string; 
  public get synCookieEnable() {
    return this.getStringAttribute('syn_cookie_enable');
  }
  public set synCookieEnable(value: string) {
    this._synCookieEnable = value;
  }
  public resetSynCookieEnable() {
    this._synCookieEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieEnableInput() {
    return this._synCookieEnable;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: number; 
  public get tcp() {
    return this.getNumberAttribute('tcp');
  }
  public set tcp(value: number) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // threshold_val - computed: false, optional: true, required: false
  private _thresholdVal?: number; 
  public get thresholdVal() {
    return this.getNumberAttribute('threshold_val');
  }
  public set thresholdVal(value: number) {
    this._thresholdVal = value;
  }
  public resetThresholdVal() {
    this._thresholdVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValInput() {
    return this._thresholdVal;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // vpn_ipsec_group_name - computed: false, optional: true, required: false
  private _vpnIpsecGroupName?: string; 
  public get vpnIpsecGroupName() {
    return this.getStringAttribute('vpn_ipsec_group_name');
  }
  public set vpnIpsecGroupName(value: string) {
    this._vpnIpsecGroupName = value;
  }
  public resetVpnIpsecGroupName() {
    this._vpnIpsecGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIpsecGroupNameInput() {
    return this._vpnIpsecGroupName;
  }

  // vpn_ipsec_name - computed: false, optional: true, required: false
  private _vpnIpsecName?: string; 
  public get vpnIpsecName() {
    return this.getStringAttribute('vpn_ipsec_name');
  }
  public set vpnIpsecName(value: string) {
    this._vpnIpsecName = value;
  }
  public resetVpnIpsecName() {
    this._vpnIpsecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIpsecNameInput() {
    return this._vpnIpsecName;
  }

  // logging_template_list - computed: false, optional: true, required: false
  private _loggingTemplateList = new RuleSetRuleActionGroupLoggingTemplateListStructList(this, "logging_template_list", false);
  public get loggingTemplateList() {
    return this._loggingTemplateList;
  }
  public putLoggingTemplateList(value: RuleSetRuleActionGroupLoggingTemplateListStruct[] | cdktf.IResolvable) {
    this._loggingTemplateList.internalValue = value;
  }
  public resetLoggingTemplateList() {
    this._loggingTemplateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTemplateListInput() {
    return this._loggingTemplateList.internalValue;
  }
}
export interface RuleSetRuleAppListStruct {
  /**
  * Application object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#obj_grp_application RuleSetRule#obj_grp_application}
  */
  readonly objGrpApplication?: string;
  /**
  * Specify application(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#protocol RuleSetRule#protocol}
  */
  readonly protocol?: string;
  /**
  * 'aaa': Protocol/application used for AAA (Authentification, Authorization and Accounting) purposes.; 'adult-content': Adult content protocol/application.; 'advertising': Advertising networks and applications.; 'application-enforcing-tls': Application known to enforce HSTS and thus use of TLS.; 'analytics-and-statistics': User analytics and statistics protocol/application.; 'anonymizers-and-proxies': Traffic-anonymization protocol/application.; 'audio-chat': Protocol/application used for Audio Chat.; 'basic': Covers all protocols required for basic classification, including most networking protocols as well as standard protocols like HTTP.; 'blog': Blogging platform protocol/application.; 'cdn': Protocol/application used for Content-Delivery Networks.; 'certification-authority': Certification Authority for SSL/TLS certificate.; 'chat': Protocol/application used for Text Chat.; 'classified-ads': Protocol/application used for Classified Advertisements.; 'cloud-based-services': SaaS and/or PaaS cloud based services.; 'crowdfunding': Service for funding a project or venture by raising small amounts of money from a large number of people, typically via the Internet.; 'cryptocurrency': Services for mining cryptocurrencies, for example a Crypto Web Browser (an application that mines crypto currency in the background while its user browses the web).; 'database': Database-specific protocols.; 'disposable-email': Service offering Disposable Email Accounts (DEA). DEA is a technique to share temporary email address between many users.; 'ebook-reader': Services for e-book readers, i.e. connected devices that display electronic books (typically using e-ink displays to reduce glare and eye strain).; 'education': Protocols offering education services and online courses.; 'email': Native email protocol.; 'enterprise': Protocol/application used in an enterprise network.; 'file-management': Protocol/application designed specifically for file management and exchange. This can include bona fide network protocols (like SMB) as well as web/cloud services (like Dropbox).; 'file-transfer': Protocol that offers file transferring as a secondary feature. This typically includes IM, WebMail, and other protocols that allow file transfers in addition to their principal function.; 'forum': Online forum protocol/application.; 'gaming': Protocol/application used by games.; 'healthcare': Protocols offering medical services, i.e protocols used in medical environment.; 'instant-messaging-and-multimedia-conferencing': Protocol/application used for Instant Messaging or Multi-Conferencing.; 'internet-of-things': Internet Of Things protocol/application.; 'map-service': Digital Maps service (web site and their related API).; 'mobile': Mobile-specific protocol/application.; 'multimedia-streaming': Protocol/application used for multimedia streaming.; 'networking': Protocol used for (inter) networking purpose.; 'news-portal': Protocol/application used for News Portals.; 'payment-service': Application offering online services for accepting electronic payments by a variety of payment methods (credit card, bank-based payments such as direct debit, bank transfer, etc).; 'peer-to-peer': Protocol/application used for Peer-to-peer purposes.; 'remote-access': Protocol/application used for remote access.; 'scada': SCADA (Supervisory control and data acquisition) protocols, all generations.; 'social-networks': Social networking application.; 'software-update': Auto-update protocol.; 'speedtest': Speedtest application allowing to access quality of Internet connection (upload, download, latency, etc).; 'standards-based': Protocol issued from standardized bodies such as IETF, ITU, IEEE, ETSI, OIF.; 'transportation': Transportation services, for example smartphone applications that allow users to hail a taxi.; 'video-chat': Protocol/application used for Video Chat.; 'voip': Application used for Voice-Over-IP.; 'vpn-tunnels': Protocol/application used for VPN or tunneling purposes.; 'web': Application based on HTTP/HTTPS.; 'web-e-commerce': Protocol/application used for E-commerce websites.; 'web-search-engines': Protocol/application used for Web search portals.; 'web-websites': Protocol/application used for Company Websites.; 'webmails': Web-based e-mail application.; 'web-ext-adult': Web Extension Adult; 'web-ext-auctions': Web Extension Auctions; 'web-ext-blogs': Web Extension Blogs; 'web-ext-business-and-economy': Web Extension Business and Economy; 'web-ext-cdns': Web Extension CDNs; 'web-ext-collaboration': Web Extension Collaboration; 'web-ext-computer-and-internet-info': Web Extension Computer and Internet Info; 'web-ext-computer-and-internet-security': Web Extension Computer and Internet Security; 'web-ext-dating': Web Extension Dating; 'web-ext-educational-institutions': Web Extension Educational Institutions; 'web-ext-entertainment-and-arts': Web Extension Entertainment and Arts; 'web-ext-fashion-and-beauty': Web Extension Fashion and Beauty; 'web-ext-file-share': Web Extension File Share; 'web-ext-financial-services': Web Extension Financial Services; 'web-ext-gambling': Web Extension Gambling; 'web-ext-games': Web Extension Games; 'web-ext-government': Web Extension Government; 'web-ext-health-and-medicine': Web Extension Health and Medicine; 'web-ext-individual-stock-advice-and-tools': Web Extension Individual Stock Advice and Tools; 'web-ext-internet-portals': Web Extension Internet Portals; 'web-ext-job-search': Web Extension Job Search; 'web-ext-local-information': Web Extension Local Information; 'web-ext-malware': Web Extension Malware; 'web-ext-motor-vehicles': Web Extension Motor Vehicles; 'web-ext-music': Web Extension Music; 'web-ext-news': Web Extension News; 'web-ext-p2p': Web Extension P2P; 'web-ext-parked-sites': Web Extension Parked Sites; 'web-ext-proxy-avoid-and-anonymizers': Web Extension Proxy Avoid and Anonymizers; 'web-ext-real-estate': Web Extension Real Estate; 'web-ext-reference-and-research': Web Extension Reference and Research; 'web-ext-search-engines': Web Extension Search Engines; 'web-ext-shopping': Web Extension Shopping; 'web-ext-social-network': Web Extension Social Network; 'web-ext-society': Web Extension Society; 'web-ext-software': Web Extension Software; 'web-ext-sports': Web Extension Sports; 'web-ext-streaming-media': Web Extension Streaming Media; 'web-ext-training-and-tools': Web Extension Training and Tools; 'web-ext-translation': Web Extension Translation; 'web-ext-travel': Web Extension Travel; 'web-ext-web-advertisements': Web Extension Web Advertisements; 'web-ext-web-based-email': Web Extension Web based Email; 'web-ext-web-hosting': Web Extension Web Hosting; 'web-ext-web-service': Web Extension Web Service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#protocol_tag RuleSetRule#protocol_tag}
  */
  readonly protocolTag?: string;
}

export function ruleSetRuleAppListStructToTerraform(struct?: RuleSetRuleAppListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    obj_grp_application: cdktf.stringToTerraform(struct!.objGrpApplication),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_tag: cdktf.stringToTerraform(struct!.protocolTag),
  }
}


export function ruleSetRuleAppListStructToHclTerraform(struct?: RuleSetRuleAppListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    obj_grp_application: {
      value: cdktf.stringToHclTerraform(struct!.objGrpApplication),
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
    protocol_tag: {
      value: cdktf.stringToHclTerraform(struct!.protocolTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetRuleAppListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleSetRuleAppListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objGrpApplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.objGrpApplication = this._objGrpApplication;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolTag = this._protocolTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetRuleAppListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objGrpApplication = undefined;
      this._protocol = undefined;
      this._protocolTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objGrpApplication = value.objGrpApplication;
      this._protocol = value.protocol;
      this._protocolTag = value.protocolTag;
    }
  }

  // obj_grp_application - computed: false, optional: true, required: false
  private _objGrpApplication?: string; 
  public get objGrpApplication() {
    return this.getStringAttribute('obj_grp_application');
  }
  public set objGrpApplication(value: string) {
    this._objGrpApplication = value;
  }
  public resetObjGrpApplication() {
    this._objGrpApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objGrpApplicationInput() {
    return this._objGrpApplication;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_tag - computed: false, optional: true, required: false
  private _protocolTag?: string; 
  public get protocolTag() {
    return this.getStringAttribute('protocol_tag');
  }
  public set protocolTag(value: string) {
    this._protocolTag = value;
  }
  public resetProtocolTag() {
    this._protocolTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTagInput() {
    return this._protocolTag;
  }
}

export class RuleSetRuleAppListStructList extends cdktf.ComplexList {
  public internalValue? : RuleSetRuleAppListStruct[] | cdktf.IResolvable

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
  public get(index: number): RuleSetRuleAppListStructOutputReference {
    return new RuleSetRuleAppListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleSetRuleDestListStruct {
  /**
  * IPv4 IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_ip_subnet RuleSetRule#dst_ip_subnet}
  */
  readonly dstIpSubnet?: string;
  /**
  * IPv6 IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_ipv6_subnet RuleSetRule#dst_ipv6_subnet}
  */
  readonly dstIpv6Subnet?: string;
  /**
  * Network object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_obj_grp_network RuleSetRule#dst_obj_grp_network}
  */
  readonly dstObjGrpNetwork?: string;
  /**
  * Network object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_obj_network RuleSetRule#dst_obj_network}
  */
  readonly dstObjNetwork?: string;
  /**
  * SLB Real server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_slb_server RuleSetRule#dst_slb_server}
  */
  readonly dstSlbServer?: string;
  /**
  * SLB Virtual server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dst_slb_vserver RuleSetRule#dst_slb_vserver}
  */
  readonly dstSlbVserver?: string;
}

export function ruleSetRuleDestListStructToTerraform(struct?: RuleSetRuleDestListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_ip_subnet: cdktf.stringToTerraform(struct!.dstIpSubnet),
    dst_ipv6_subnet: cdktf.stringToTerraform(struct!.dstIpv6Subnet),
    dst_obj_grp_network: cdktf.stringToTerraform(struct!.dstObjGrpNetwork),
    dst_obj_network: cdktf.stringToTerraform(struct!.dstObjNetwork),
    dst_slb_server: cdktf.stringToTerraform(struct!.dstSlbServer),
    dst_slb_vserver: cdktf.stringToTerraform(struct!.dstSlbVserver),
  }
}


export function ruleSetRuleDestListStructToHclTerraform(struct?: RuleSetRuleDestListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_ip_subnet: {
      value: cdktf.stringToHclTerraform(struct!.dstIpSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_ipv6_subnet: {
      value: cdktf.stringToHclTerraform(struct!.dstIpv6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_obj_grp_network: {
      value: cdktf.stringToHclTerraform(struct!.dstObjGrpNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_obj_network: {
      value: cdktf.stringToHclTerraform(struct!.dstObjNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_slb_server: {
      value: cdktf.stringToHclTerraform(struct!.dstSlbServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_slb_vserver: {
      value: cdktf.stringToHclTerraform(struct!.dstSlbVserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetRuleDestListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleSetRuleDestListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstIpSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpSubnet = this._dstIpSubnet;
    }
    if (this._dstIpv6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpv6Subnet = this._dstIpv6Subnet;
    }
    if (this._dstObjGrpNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstObjGrpNetwork = this._dstObjGrpNetwork;
    }
    if (this._dstObjNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstObjNetwork = this._dstObjNetwork;
    }
    if (this._dstSlbServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSlbServer = this._dstSlbServer;
    }
    if (this._dstSlbVserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSlbVserver = this._dstSlbVserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetRuleDestListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstIpSubnet = undefined;
      this._dstIpv6Subnet = undefined;
      this._dstObjGrpNetwork = undefined;
      this._dstObjNetwork = undefined;
      this._dstSlbServer = undefined;
      this._dstSlbVserver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstIpSubnet = value.dstIpSubnet;
      this._dstIpv6Subnet = value.dstIpv6Subnet;
      this._dstObjGrpNetwork = value.dstObjGrpNetwork;
      this._dstObjNetwork = value.dstObjNetwork;
      this._dstSlbServer = value.dstSlbServer;
      this._dstSlbVserver = value.dstSlbVserver;
    }
  }

  // dst_ip_subnet - computed: false, optional: true, required: false
  private _dstIpSubnet?: string; 
  public get dstIpSubnet() {
    return this.getStringAttribute('dst_ip_subnet');
  }
  public set dstIpSubnet(value: string) {
    this._dstIpSubnet = value;
  }
  public resetDstIpSubnet() {
    this._dstIpSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpSubnetInput() {
    return this._dstIpSubnet;
  }

  // dst_ipv6_subnet - computed: false, optional: true, required: false
  private _dstIpv6Subnet?: string; 
  public get dstIpv6Subnet() {
    return this.getStringAttribute('dst_ipv6_subnet');
  }
  public set dstIpv6Subnet(value: string) {
    this._dstIpv6Subnet = value;
  }
  public resetDstIpv6Subnet() {
    this._dstIpv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv6SubnetInput() {
    return this._dstIpv6Subnet;
  }

  // dst_obj_grp_network - computed: false, optional: true, required: false
  private _dstObjGrpNetwork?: string; 
  public get dstObjGrpNetwork() {
    return this.getStringAttribute('dst_obj_grp_network');
  }
  public set dstObjGrpNetwork(value: string) {
    this._dstObjGrpNetwork = value;
  }
  public resetDstObjGrpNetwork() {
    this._dstObjGrpNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstObjGrpNetworkInput() {
    return this._dstObjGrpNetwork;
  }

  // dst_obj_network - computed: false, optional: true, required: false
  private _dstObjNetwork?: string; 
  public get dstObjNetwork() {
    return this.getStringAttribute('dst_obj_network');
  }
  public set dstObjNetwork(value: string) {
    this._dstObjNetwork = value;
  }
  public resetDstObjNetwork() {
    this._dstObjNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstObjNetworkInput() {
    return this._dstObjNetwork;
  }

  // dst_slb_server - computed: false, optional: true, required: false
  private _dstSlbServer?: string; 
  public get dstSlbServer() {
    return this.getStringAttribute('dst_slb_server');
  }
  public set dstSlbServer(value: string) {
    this._dstSlbServer = value;
  }
  public resetDstSlbServer() {
    this._dstSlbServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSlbServerInput() {
    return this._dstSlbServer;
  }

  // dst_slb_vserver - computed: false, optional: true, required: false
  private _dstSlbVserver?: string; 
  public get dstSlbVserver() {
    return this.getStringAttribute('dst_slb_vserver');
  }
  public set dstSlbVserver(value: string) {
    this._dstSlbVserver = value;
  }
  public resetDstSlbVserver() {
    this._dstSlbVserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSlbVserverInput() {
    return this._dstSlbVserver;
  }
}

export class RuleSetRuleDestListStructList extends cdktf.ComplexList {
  public internalValue? : RuleSetRuleDestListStruct[] | cdktf.IResolvable

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
  public get(index: number): RuleSetRuleDestListStructOutputReference {
    return new RuleSetRuleDestListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleSetRuleDscpListStruct {
  /**
  * Ending DSCP Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dscp_range_end RuleSetRule#dscp_range_end}
  */
  readonly dscpRangeEnd?: number;
  /**
  * Start DSCP Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dscp_range_start RuleSetRule#dscp_range_start}
  */
  readonly dscpRangeStart?: number;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#dscp_value RuleSetRule#dscp_value}
  */
  readonly dscpValue?: string;
}

export function ruleSetRuleDscpListStructToTerraform(struct?: RuleSetRuleDscpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp_range_end: cdktf.numberToTerraform(struct!.dscpRangeEnd),
    dscp_range_start: cdktf.numberToTerraform(struct!.dscpRangeStart),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
  }
}


export function ruleSetRuleDscpListStructToHclTerraform(struct?: RuleSetRuleDscpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp_range_end: {
      value: cdktf.numberToHclTerraform(struct!.dscpRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp_range_start: {
      value: cdktf.numberToHclTerraform(struct!.dscpRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetRuleDscpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleSetRuleDscpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscpRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpRangeEnd = this._dscpRangeEnd;
    }
    if (this._dscpRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpRangeStart = this._dscpRangeStart;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetRuleDscpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dscpRangeEnd = undefined;
      this._dscpRangeStart = undefined;
      this._dscpValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dscpRangeEnd = value.dscpRangeEnd;
      this._dscpRangeStart = value.dscpRangeStart;
      this._dscpValue = value.dscpValue;
    }
  }

  // dscp_range_end - computed: false, optional: true, required: false
  private _dscpRangeEnd?: number; 
  public get dscpRangeEnd() {
    return this.getNumberAttribute('dscp_range_end');
  }
  public set dscpRangeEnd(value: number) {
    this._dscpRangeEnd = value;
  }
  public resetDscpRangeEnd() {
    this._dscpRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpRangeEndInput() {
    return this._dscpRangeEnd;
  }

  // dscp_range_start - computed: false, optional: true, required: false
  private _dscpRangeStart?: number; 
  public get dscpRangeStart() {
    return this.getNumberAttribute('dscp_range_start');
  }
  public set dscpRangeStart(value: number) {
    this._dscpRangeStart = value;
  }
  public resetDscpRangeStart() {
    this._dscpRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpRangeStartInput() {
    return this._dscpRangeStart;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }
}

export class RuleSetRuleDscpListStructList extends cdktf.ComplexList {
  public internalValue? : RuleSetRuleDscpListStruct[] | cdktf.IResolvable

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
  public get(index: number): RuleSetRuleDscpListStructOutputReference {
    return new RuleSetRuleDscpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleSetRuleMoveRule {
  /**
  * 'top': top; 'before': before; 'after': after; 'bottom': bottom;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#location RuleSetRule#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#target_rule RuleSetRule#target_rule}
  */
  readonly targetRule?: string;
}

export function ruleSetRuleMoveRuleToTerraform(struct?: RuleSetRuleMoveRuleOutputReference | RuleSetRuleMoveRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    target_rule: cdktf.stringToTerraform(struct!.targetRule),
  }
}


export function ruleSetRuleMoveRuleToHclTerraform(struct?: RuleSetRuleMoveRuleOutputReference | RuleSetRuleMoveRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_rule: {
      value: cdktf.stringToHclTerraform(struct!.targetRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetRuleMoveRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleSetRuleMoveRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._targetRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRule = this._targetRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetRuleMoveRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._targetRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._targetRule = value.targetRule;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // target_rule - computed: false, optional: true, required: false
  private _targetRule?: string; 
  public get targetRule() {
    return this.getStringAttribute('target_rule');
  }
  public set targetRule(value: string) {
    this._targetRule = value;
  }
  public resetTargetRule() {
    this._targetRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleInput() {
    return this._targetRule;
  }
}
export interface RuleSetRuleSamplingEnable {
  /**
  * 'all': all; 'hit-count': Hit counts; 'permit-bytes': Permitted bytes counter; 'deny-bytes': Denied bytes counter; 'reset-bytes': Reset bytes counter; 'permit-packets': Permitted packets counter; 'deny-packets': Denied packets counter; 'reset-packets': Reset packets counter; 'active-session-tcp': Active TCP session counter; 'active-session-udp': Active UDP session counter; 'active-session-icmp': Active ICMP session counter; 'active-session-other': Active other protocol session counter; 'session-tcp': TCP session counter; 'session-udp': UDP session counter; 'session-icmp': ICMP session counter; 'session-other': Other protocol session counter; 'active-session-sctp': Active SCTP session counter; 'session-sctp': SCTP session counter; 'hitcount-timestamp': Last hit counts timestamp; 'rate-limit-drops': Rate Limit Drops; 'syn-cookie-syn-ack-sent': SYN cookie SYN ACK sent; 'syn-cookie-verification-passed': SYN cookie verification passed; 'syn-cookie-verification-failed': SYN cookie verification failed; 'syn-cookie-conn-setup-failed': SYN cookie connection setup failed; 'tcp-half-open-count': TCP half open sessions matching the rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#counters1 RuleSetRule#counters1}
  */
  readonly counters1?: string;
}

export function ruleSetRuleSamplingEnableToTerraform(struct?: RuleSetRuleSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ruleSetRuleSamplingEnableToHclTerraform(struct?: RuleSetRuleSamplingEnable | cdktf.IResolvable): any {
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

export class RuleSetRuleSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleSetRuleSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RuleSetRuleSamplingEnable | cdktf.IResolvable | undefined) {
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

export class RuleSetRuleSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : RuleSetRuleSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): RuleSetRuleSamplingEnableOutputReference {
    return new RuleSetRuleSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleSetRuleServiceListStruct {
  /**
  * 'FTP': FTP; 'TFTP': TFTP; 'SIP': SIP; 'DNS': DNS; 'PPTP': PPTP; 'RTSP': RTSP; 'ESP': ESP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#alg RuleSetRule#alg}
  */
  readonly alg?: string;
  /**
  * Equal to the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#eq_dst_port RuleSetRule#eq_dst_port}
  */
  readonly eqDstPort?: number;
  /**
  * Equal to the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#eq_src_port RuleSetRule#eq_src_port}
  */
  readonly eqSrcPort?: number;
  /**
  * Greater than the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#gt_dst_port RuleSetRule#gt_dst_port}
  */
  readonly gtDstPort?: number;
  /**
  * Greater than the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#gt_src_port RuleSetRule#gt_src_port}
  */
  readonly gtSrcPort?: number;
  /**
  * ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#icmp RuleSetRule#icmp}
  */
  readonly icmp?: number;
  /**
  * ICMP code number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#icmp_code RuleSetRule#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * ICMP type number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#icmp_type RuleSetRule#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * ICMPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#icmpv6 RuleSetRule#icmpv6}
  */
  readonly icmpv6?: number;
  /**
  * ICMPv6 code number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#icmpv6_code RuleSetRule#icmpv6_code}
  */
  readonly icmpv6Code?: number;
  /**
  * ICMPv6 type number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#icmpv6_type RuleSetRule#icmpv6_type}
  */
  readonly icmpv6Type?: number;
  /**
  * Lower than the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#lt_dst_port RuleSetRule#lt_dst_port}
  */
  readonly ltDstPort?: number;
  /**
  * Lower than the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#lt_src_port RuleSetRule#lt_src_port}
  */
  readonly ltSrcPort?: number;
  /**
  * service object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#obj_grp_service RuleSetRule#obj_grp_service}
  */
  readonly objGrpService?: string;
  /**
  * Ending Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#port_num_end_dst RuleSetRule#port_num_end_dst}
  */
  readonly portNumEndDst?: number;
  /**
  * Ending Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#port_num_end_src RuleSetRule#port_num_end_src}
  */
  readonly portNumEndSrc?: number;
  /**
  * Protocol ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#proto_id RuleSetRule#proto_id}
  */
  readonly protoId?: number;
  /**
  * 'tcp': tcp; 'udp': udp; 'sctp': sctp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#protocols RuleSetRule#protocols}
  */
  readonly protocols?: string;
  /**
  * Port range (Starting Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#range_dst_port RuleSetRule#range_dst_port}
  */
  readonly rangeDstPort?: number;
  /**
  * Port range (Starting Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#range_src_port RuleSetRule#range_src_port}
  */
  readonly rangeSrcPort?: number;
  /**
  * SCTP Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#sctp_template RuleSetRule#sctp_template}
  */
  readonly sctpTemplate?: string;
  /**
  * 'any-code': Any ICMP code; 'frag-required': Code 4, fragmentation required; 'host-unreachable': Code 1, destination host unreachable; 'network-unreachable': Code 0, destination network unreachable; 'port-unreachable': Code 3, destination port unreachable; 'proto-unreachable': Code 2, destination protocol unreachable; 'route-failed': Code 5, source route failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#special_code RuleSetRule#special_code}
  */
  readonly specialCode?: string;
  /**
  * 'any-type': Any ICMP type; 'echo-reply': Type 0, echo reply; 'echo-request': Type 8, echo request; 'info-reply': Type 16, information reply; 'info-request': Type 15, information request; 'mask-reply': Type 18, address mask reply; 'mask-request': Type 17, address mask request; 'parameter-problem': Type 12, parameter problem; 'redirect': Type 5, redirect message; 'source-quench': Type 4, source quench; 'time-exceeded': Type 11, time exceeded; 'timestamp': Type 13, timestamp; 'timestamp-reply': Type 14, timestamp reply; 'dest-unreachable': Type 3, destination unreachable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#special_type RuleSetRule#special_type}
  */
  readonly specialType?: string;
  /**
  * 'any-code': Any ICMPv6 code; 'addr-unreachable': Code 3, address unreachable; 'admin-prohibited': Code 1, admin prohibited; 'no-route': Code 0, no route to destination; 'not-neighbour': Code 2, not neighbor; 'port-unreachable': Code 4, destination port unreachable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#special_v6_code RuleSetRule#special_v6_code}
  */
  readonly specialV6Code?: string;
  /**
  * 'any-type': Any ICMPv6 type; 'dest-unreachable': Type 1, destination unreachable; 'echo-reply': Type 129, echo reply; 'echo-request': Type 128, echo request; 'packet-too-big': Type 2, packet too big; 'param-prob': Type 4, parameter problem; 'time-exceeded': Type 3, time exceeded;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#special_v6_type RuleSetRule#special_v6_type}
  */
  readonly specialV6Type?: string;
}

export function ruleSetRuleServiceListStructToTerraform(struct?: RuleSetRuleServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
    eq_dst_port: cdktf.numberToTerraform(struct!.eqDstPort),
    eq_src_port: cdktf.numberToTerraform(struct!.eqSrcPort),
    gt_dst_port: cdktf.numberToTerraform(struct!.gtDstPort),
    gt_src_port: cdktf.numberToTerraform(struct!.gtSrcPort),
    icmp: cdktf.numberToTerraform(struct!.icmp),
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    icmpv6: cdktf.numberToTerraform(struct!.icmpv6),
    icmpv6_code: cdktf.numberToTerraform(struct!.icmpv6Code),
    icmpv6_type: cdktf.numberToTerraform(struct!.icmpv6Type),
    lt_dst_port: cdktf.numberToTerraform(struct!.ltDstPort),
    lt_src_port: cdktf.numberToTerraform(struct!.ltSrcPort),
    obj_grp_service: cdktf.stringToTerraform(struct!.objGrpService),
    port_num_end_dst: cdktf.numberToTerraform(struct!.portNumEndDst),
    port_num_end_src: cdktf.numberToTerraform(struct!.portNumEndSrc),
    proto_id: cdktf.numberToTerraform(struct!.protoId),
    protocols: cdktf.stringToTerraform(struct!.protocols),
    range_dst_port: cdktf.numberToTerraform(struct!.rangeDstPort),
    range_src_port: cdktf.numberToTerraform(struct!.rangeSrcPort),
    sctp_template: cdktf.stringToTerraform(struct!.sctpTemplate),
    special_code: cdktf.stringToTerraform(struct!.specialCode),
    special_type: cdktf.stringToTerraform(struct!.specialType),
    special_v6_code: cdktf.stringToTerraform(struct!.specialV6Code),
    special_v6_type: cdktf.stringToTerraform(struct!.specialV6Type),
  }
}


export function ruleSetRuleServiceListStructToHclTerraform(struct?: RuleSetRuleServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alg: {
      value: cdktf.stringToHclTerraform(struct!.alg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eq_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.eqDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eq_src_port: {
      value: cdktf.numberToHclTerraform(struct!.eqSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gt_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.gtDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gt_src_port: {
      value: cdktf.numberToHclTerraform(struct!.gtSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6Code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6Type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lt_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.ltDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lt_src_port: {
      value: cdktf.numberToHclTerraform(struct!.ltSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_grp_service: {
      value: cdktf.stringToHclTerraform(struct!.objGrpService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num_end_dst: {
      value: cdktf.numberToHclTerraform(struct!.portNumEndDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_num_end_src: {
      value: cdktf.numberToHclTerraform(struct!.portNumEndSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto_id: {
      value: cdktf.numberToHclTerraform(struct!.protoId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocols: {
      value: cdktf.stringToHclTerraform(struct!.protocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.rangeDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_src_port: {
      value: cdktf.numberToHclTerraform(struct!.rangeSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_template: {
      value: cdktf.stringToHclTerraform(struct!.sctpTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    special_code: {
      value: cdktf.stringToHclTerraform(struct!.specialCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    special_type: {
      value: cdktf.stringToHclTerraform(struct!.specialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    special_v6_code: {
      value: cdktf.stringToHclTerraform(struct!.specialV6Code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    special_v6_type: {
      value: cdktf.stringToHclTerraform(struct!.specialV6Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetRuleServiceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleSetRuleServiceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._eqDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.eqDstPort = this._eqDstPort;
    }
    if (this._eqSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.eqSrcPort = this._eqSrcPort;
    }
    if (this._gtDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtDstPort = this._gtDstPort;
    }
    if (this._gtSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtSrcPort = this._gtSrcPort;
    }
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._icmpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6 = this._icmpv6;
    }
    if (this._icmpv6Code !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6Code = this._icmpv6Code;
    }
    if (this._icmpv6Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6Type = this._icmpv6Type;
    }
    if (this._ltDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltDstPort = this._ltDstPort;
    }
    if (this._ltSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltSrcPort = this._ltSrcPort;
    }
    if (this._objGrpService !== undefined) {
      hasAnyValues = true;
      internalValueResult.objGrpService = this._objGrpService;
    }
    if (this._portNumEndDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumEndDst = this._portNumEndDst;
    }
    if (this._portNumEndSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumEndSrc = this._portNumEndSrc;
    }
    if (this._protoId !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoId = this._protoId;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._rangeDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeDstPort = this._rangeDstPort;
    }
    if (this._rangeSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeSrcPort = this._rangeSrcPort;
    }
    if (this._sctpTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpTemplate = this._sctpTemplate;
    }
    if (this._specialCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialCode = this._specialCode;
    }
    if (this._specialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialType = this._specialType;
    }
    if (this._specialV6Code !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialV6Code = this._specialV6Code;
    }
    if (this._specialV6Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialV6Type = this._specialV6Type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetRuleServiceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
      this._eqDstPort = undefined;
      this._eqSrcPort = undefined;
      this._gtDstPort = undefined;
      this._gtSrcPort = undefined;
      this._icmp = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._icmpv6 = undefined;
      this._icmpv6Code = undefined;
      this._icmpv6Type = undefined;
      this._ltDstPort = undefined;
      this._ltSrcPort = undefined;
      this._objGrpService = undefined;
      this._portNumEndDst = undefined;
      this._portNumEndSrc = undefined;
      this._protoId = undefined;
      this._protocols = undefined;
      this._rangeDstPort = undefined;
      this._rangeSrcPort = undefined;
      this._sctpTemplate = undefined;
      this._specialCode = undefined;
      this._specialType = undefined;
      this._specialV6Code = undefined;
      this._specialV6Type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alg = value.alg;
      this._eqDstPort = value.eqDstPort;
      this._eqSrcPort = value.eqSrcPort;
      this._gtDstPort = value.gtDstPort;
      this._gtSrcPort = value.gtSrcPort;
      this._icmp = value.icmp;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._icmpv6 = value.icmpv6;
      this._icmpv6Code = value.icmpv6Code;
      this._icmpv6Type = value.icmpv6Type;
      this._ltDstPort = value.ltDstPort;
      this._ltSrcPort = value.ltSrcPort;
      this._objGrpService = value.objGrpService;
      this._portNumEndDst = value.portNumEndDst;
      this._portNumEndSrc = value.portNumEndSrc;
      this._protoId = value.protoId;
      this._protocols = value.protocols;
      this._rangeDstPort = value.rangeDstPort;
      this._rangeSrcPort = value.rangeSrcPort;
      this._sctpTemplate = value.sctpTemplate;
      this._specialCode = value.specialCode;
      this._specialType = value.specialType;
      this._specialV6Code = value.specialV6Code;
      this._specialV6Type = value.specialV6Type;
    }
  }

  // alg - computed: false, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // eq_dst_port - computed: false, optional: true, required: false
  private _eqDstPort?: number; 
  public get eqDstPort() {
    return this.getNumberAttribute('eq_dst_port');
  }
  public set eqDstPort(value: number) {
    this._eqDstPort = value;
  }
  public resetEqDstPort() {
    this._eqDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqDstPortInput() {
    return this._eqDstPort;
  }

  // eq_src_port - computed: false, optional: true, required: false
  private _eqSrcPort?: number; 
  public get eqSrcPort() {
    return this.getNumberAttribute('eq_src_port');
  }
  public set eqSrcPort(value: number) {
    this._eqSrcPort = value;
  }
  public resetEqSrcPort() {
    this._eqSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqSrcPortInput() {
    return this._eqSrcPort;
  }

  // gt_dst_port - computed: false, optional: true, required: false
  private _gtDstPort?: number; 
  public get gtDstPort() {
    return this.getNumberAttribute('gt_dst_port');
  }
  public set gtDstPort(value: number) {
    this._gtDstPort = value;
  }
  public resetGtDstPort() {
    this._gtDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtDstPortInput() {
    return this._gtDstPort;
  }

  // gt_src_port - computed: false, optional: true, required: false
  private _gtSrcPort?: number; 
  public get gtSrcPort() {
    return this.getNumberAttribute('gt_src_port');
  }
  public set gtSrcPort(value: number) {
    this._gtSrcPort = value;
  }
  public resetGtSrcPort() {
    this._gtSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtSrcPortInput() {
    return this._gtSrcPort;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // icmpv6 - computed: false, optional: true, required: false
  private _icmpv6?: number; 
  public get icmpv6() {
    return this.getNumberAttribute('icmpv6');
  }
  public set icmpv6(value: number) {
    this._icmpv6 = value;
  }
  public resetIcmpv6() {
    this._icmpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6Input() {
    return this._icmpv6;
  }

  // icmpv6_code - computed: false, optional: true, required: false
  private _icmpv6Code?: number; 
  public get icmpv6Code() {
    return this.getNumberAttribute('icmpv6_code');
  }
  public set icmpv6Code(value: number) {
    this._icmpv6Code = value;
  }
  public resetIcmpv6Code() {
    this._icmpv6Code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6CodeInput() {
    return this._icmpv6Code;
  }

  // icmpv6_type - computed: false, optional: true, required: false
  private _icmpv6Type?: number; 
  public get icmpv6Type() {
    return this.getNumberAttribute('icmpv6_type');
  }
  public set icmpv6Type(value: number) {
    this._icmpv6Type = value;
  }
  public resetIcmpv6Type() {
    this._icmpv6Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6TypeInput() {
    return this._icmpv6Type;
  }

  // lt_dst_port - computed: false, optional: true, required: false
  private _ltDstPort?: number; 
  public get ltDstPort() {
    return this.getNumberAttribute('lt_dst_port');
  }
  public set ltDstPort(value: number) {
    this._ltDstPort = value;
  }
  public resetLtDstPort() {
    this._ltDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltDstPortInput() {
    return this._ltDstPort;
  }

  // lt_src_port - computed: false, optional: true, required: false
  private _ltSrcPort?: number; 
  public get ltSrcPort() {
    return this.getNumberAttribute('lt_src_port');
  }
  public set ltSrcPort(value: number) {
    this._ltSrcPort = value;
  }
  public resetLtSrcPort() {
    this._ltSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltSrcPortInput() {
    return this._ltSrcPort;
  }

  // obj_grp_service - computed: false, optional: true, required: false
  private _objGrpService?: string; 
  public get objGrpService() {
    return this.getStringAttribute('obj_grp_service');
  }
  public set objGrpService(value: string) {
    this._objGrpService = value;
  }
  public resetObjGrpService() {
    this._objGrpService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objGrpServiceInput() {
    return this._objGrpService;
  }

  // port_num_end_dst - computed: false, optional: true, required: false
  private _portNumEndDst?: number; 
  public get portNumEndDst() {
    return this.getNumberAttribute('port_num_end_dst');
  }
  public set portNumEndDst(value: number) {
    this._portNumEndDst = value;
  }
  public resetPortNumEndDst() {
    this._portNumEndDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumEndDstInput() {
    return this._portNumEndDst;
  }

  // port_num_end_src - computed: false, optional: true, required: false
  private _portNumEndSrc?: number; 
  public get portNumEndSrc() {
    return this.getNumberAttribute('port_num_end_src');
  }
  public set portNumEndSrc(value: number) {
    this._portNumEndSrc = value;
  }
  public resetPortNumEndSrc() {
    this._portNumEndSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumEndSrcInput() {
    return this._portNumEndSrc;
  }

  // proto_id - computed: false, optional: true, required: false
  private _protoId?: number; 
  public get protoId() {
    return this.getNumberAttribute('proto_id');
  }
  public set protoId(value: number) {
    this._protoId = value;
  }
  public resetProtoId() {
    this._protoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoIdInput() {
    return this._protoId;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string; 
  public get protocols() {
    return this.getStringAttribute('protocols');
  }
  public set protocols(value: string) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // range_dst_port - computed: false, optional: true, required: false
  private _rangeDstPort?: number; 
  public get rangeDstPort() {
    return this.getNumberAttribute('range_dst_port');
  }
  public set rangeDstPort(value: number) {
    this._rangeDstPort = value;
  }
  public resetRangeDstPort() {
    this._rangeDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeDstPortInput() {
    return this._rangeDstPort;
  }

  // range_src_port - computed: false, optional: true, required: false
  private _rangeSrcPort?: number; 
  public get rangeSrcPort() {
    return this.getNumberAttribute('range_src_port');
  }
  public set rangeSrcPort(value: number) {
    this._rangeSrcPort = value;
  }
  public resetRangeSrcPort() {
    this._rangeSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeSrcPortInput() {
    return this._rangeSrcPort;
  }

  // sctp_template - computed: false, optional: true, required: false
  private _sctpTemplate?: string; 
  public get sctpTemplate() {
    return this.getStringAttribute('sctp_template');
  }
  public set sctpTemplate(value: string) {
    this._sctpTemplate = value;
  }
  public resetSctpTemplate() {
    this._sctpTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpTemplateInput() {
    return this._sctpTemplate;
  }

  // special_code - computed: false, optional: true, required: false
  private _specialCode?: string; 
  public get specialCode() {
    return this.getStringAttribute('special_code');
  }
  public set specialCode(value: string) {
    this._specialCode = value;
  }
  public resetSpecialCode() {
    this._specialCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialCodeInput() {
    return this._specialCode;
  }

  // special_type - computed: false, optional: true, required: false
  private _specialType?: string; 
  public get specialType() {
    return this.getStringAttribute('special_type');
  }
  public set specialType(value: string) {
    this._specialType = value;
  }
  public resetSpecialType() {
    this._specialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialTypeInput() {
    return this._specialType;
  }

  // special_v6_code - computed: false, optional: true, required: false
  private _specialV6Code?: string; 
  public get specialV6Code() {
    return this.getStringAttribute('special_v6_code');
  }
  public set specialV6Code(value: string) {
    this._specialV6Code = value;
  }
  public resetSpecialV6Code() {
    this._specialV6Code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialV6CodeInput() {
    return this._specialV6Code;
  }

  // special_v6_type - computed: false, optional: true, required: false
  private _specialV6Type?: string; 
  public get specialV6Type() {
    return this.getStringAttribute('special_v6_type');
  }
  public set specialV6Type(value: string) {
    this._specialV6Type = value;
  }
  public resetSpecialV6Type() {
    this._specialV6Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialV6TypeInput() {
    return this._specialV6Type;
  }
}

export class RuleSetRuleServiceListStructList extends cdktf.ComplexList {
  public internalValue? : RuleSetRuleServiceListStruct[] | cdktf.IResolvable

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
  public get(index: number): RuleSetRuleServiceListStructOutputReference {
    return new RuleSetRuleServiceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleSetRuleSourceListStruct {
  /**
  * IPv4 IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_ip_subnet RuleSetRule#src_ip_subnet}
  */
  readonly srcIpSubnet?: string;
  /**
  * IPv6 IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_ipv6_subnet RuleSetRule#src_ipv6_subnet}
  */
  readonly srcIpv6Subnet?: string;
  /**
  * Network object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_obj_grp_network RuleSetRule#src_obj_grp_network}
  */
  readonly srcObjGrpNetwork?: string;
  /**
  * Network object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_obj_network RuleSetRule#src_obj_network}
  */
  readonly srcObjNetwork?: string;
  /**
  * SLB Real server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#src_slb_server RuleSetRule#src_slb_server}
  */
  readonly srcSlbServer?: string;
}

export function ruleSetRuleSourceListStructToTerraform(struct?: RuleSetRuleSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_ip_subnet: cdktf.stringToTerraform(struct!.srcIpSubnet),
    src_ipv6_subnet: cdktf.stringToTerraform(struct!.srcIpv6Subnet),
    src_obj_grp_network: cdktf.stringToTerraform(struct!.srcObjGrpNetwork),
    src_obj_network: cdktf.stringToTerraform(struct!.srcObjNetwork),
    src_slb_server: cdktf.stringToTerraform(struct!.srcSlbServer),
  }
}


export function ruleSetRuleSourceListStructToHclTerraform(struct?: RuleSetRuleSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_ip_subnet: {
      value: cdktf.stringToHclTerraform(struct!.srcIpSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv6_subnet: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_obj_grp_network: {
      value: cdktf.stringToHclTerraform(struct!.srcObjGrpNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_obj_network: {
      value: cdktf.stringToHclTerraform(struct!.srcObjNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_slb_server: {
      value: cdktf.stringToHclTerraform(struct!.srcSlbServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetRuleSourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleSetRuleSourceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIpSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpSubnet = this._srcIpSubnet;
    }
    if (this._srcIpv6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv6Subnet = this._srcIpv6Subnet;
    }
    if (this._srcObjGrpNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcObjGrpNetwork = this._srcObjGrpNetwork;
    }
    if (this._srcObjNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcObjNetwork = this._srcObjNetwork;
    }
    if (this._srcSlbServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSlbServer = this._srcSlbServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetRuleSourceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._srcIpSubnet = undefined;
      this._srcIpv6Subnet = undefined;
      this._srcObjGrpNetwork = undefined;
      this._srcObjNetwork = undefined;
      this._srcSlbServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._srcIpSubnet = value.srcIpSubnet;
      this._srcIpv6Subnet = value.srcIpv6Subnet;
      this._srcObjGrpNetwork = value.srcObjGrpNetwork;
      this._srcObjNetwork = value.srcObjNetwork;
      this._srcSlbServer = value.srcSlbServer;
    }
  }

  // src_ip_subnet - computed: false, optional: true, required: false
  private _srcIpSubnet?: string; 
  public get srcIpSubnet() {
    return this.getStringAttribute('src_ip_subnet');
  }
  public set srcIpSubnet(value: string) {
    this._srcIpSubnet = value;
  }
  public resetSrcIpSubnet() {
    this._srcIpSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpSubnetInput() {
    return this._srcIpSubnet;
  }

  // src_ipv6_subnet - computed: false, optional: true, required: false
  private _srcIpv6Subnet?: string; 
  public get srcIpv6Subnet() {
    return this.getStringAttribute('src_ipv6_subnet');
  }
  public set srcIpv6Subnet(value: string) {
    this._srcIpv6Subnet = value;
  }
  public resetSrcIpv6Subnet() {
    this._srcIpv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6SubnetInput() {
    return this._srcIpv6Subnet;
  }

  // src_obj_grp_network - computed: false, optional: true, required: false
  private _srcObjGrpNetwork?: string; 
  public get srcObjGrpNetwork() {
    return this.getStringAttribute('src_obj_grp_network');
  }
  public set srcObjGrpNetwork(value: string) {
    this._srcObjGrpNetwork = value;
  }
  public resetSrcObjGrpNetwork() {
    this._srcObjGrpNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcObjGrpNetworkInput() {
    return this._srcObjGrpNetwork;
  }

  // src_obj_network - computed: false, optional: true, required: false
  private _srcObjNetwork?: string; 
  public get srcObjNetwork() {
    return this.getStringAttribute('src_obj_network');
  }
  public set srcObjNetwork(value: string) {
    this._srcObjNetwork = value;
  }
  public resetSrcObjNetwork() {
    this._srcObjNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcObjNetworkInput() {
    return this._srcObjNetwork;
  }

  // src_slb_server - computed: false, optional: true, required: false
  private _srcSlbServer?: string; 
  public get srcSlbServer() {
    return this.getStringAttribute('src_slb_server');
  }
  public set srcSlbServer(value: string) {
    this._srcSlbServer = value;
  }
  public resetSrcSlbServer() {
    this._srcSlbServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSlbServerInput() {
    return this._srcSlbServer;
  }
}

export class RuleSetRuleSourceListStructList extends cdktf.ComplexList {
  public internalValue? : RuleSetRuleSourceListStruct[] | cdktf.IResolvable

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
  public get(index: number): RuleSetRuleSourceListStructOutputReference {
    return new RuleSetRuleSourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule thunder_rule_set_rule}
*/
export class RuleSetRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rule_set_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RuleSetRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RuleSetRule to import
  * @param importFromId The id of the existing RuleSetRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RuleSetRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rule_set_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule thunder_rule_set_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleSetRuleConfig
  */
  public constructor(scope: Construct, id: string, config: RuleSetRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_rule_set_rule',
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
    this._action = config.action;
    this._applicationAny = config.applicationAny;
    this._cgnv6DsLite = config.cgnv6DsLite;
    this._cgnv6DsLiteLog = config.cgnv6DsLiteLog;
    this._cgnv6DsLiteLsnLid = config.cgnv6DsLiteLsnLid;
    this._cgnv6FixedNatLog = config.cgnv6FixedNatLog;
    this._cgnv6Log = config.cgnv6Log;
    this._cgnv6LsnLid = config.cgnv6LsnLid;
    this._cgnv6LsnLog = config.cgnv6LsnLog;
    this._cgnv6Policy = config.cgnv6Policy;
    this._dstClassList = config.dstClassList;
    this._dstDomainList = config.dstDomainList;
    this._dstGeolocList = config.dstGeolocList;
    this._dstGeolocListShared = config.dstGeolocListShared;
    this._dstGeolocName = config.dstGeolocName;
    this._dstIpv4Any = config.dstIpv4Any;
    this._dstIpv6Any = config.dstIpv6Any;
    this._dstThreatList = config.dstThreatList;
    this._dstZone = config.dstZone;
    this._dstZoneAny = config.dstZoneAny;
    this._forwardListenOnPort = config.forwardListenOnPort;
    this._forwardLog = config.forwardLog;
    this._fwLog = config.fwLog;
    this._fwlog = config.fwlog;
    this._gtpTemplate = config.gtpTemplate;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._inspectPayload = config.inspectPayload;
    this._ipVersion = config.ipVersion;
    this._lid = config.lid;
    this._lidlog = config.lidlog;
    this._listenOnPort = config.listenOnPort;
    this._listenOnPortLid = config.listenOnPortLid;
    this._listenOnPortLidlog = config.listenOnPortLidlog;
    this._log = config.log;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._policy = config.policy;
    this._remark = config.remark;
    this._resetLid = config.resetLid;
    this._resetLidlog = config.resetLidlog;
    this._ruleSetName = config.ruleSetName;
    this._serviceAny = config.serviceAny;
    this._srcClassList = config.srcClassList;
    this._srcGeolocList = config.srcGeolocList;
    this._srcGeolocListShared = config.srcGeolocListShared;
    this._srcGeolocName = config.srcGeolocName;
    this._srcIpv4Any = config.srcIpv4Any;
    this._srcIpv6Any = config.srcIpv6Any;
    this._srcThreatList = config.srcThreatList;
    this._srcZone = config.srcZone;
    this._srcZoneAny = config.srcZoneAny;
    this._status = config.status;
    this._trackApplication = config.trackApplication;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vpnIpsecGroupName = config.vpnIpsecGroupName;
    this._vpnIpsecName = config.vpnIpsecName;
    this._actionGroup.internalValue = config.actionGroup;
    this._appList.internalValue = config.appList;
    this._destList.internalValue = config.destList;
    this._dscpList.internalValue = config.dscpList;
    this._moveRule.internalValue = config.moveRule;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._serviceList.internalValue = config.serviceList;
    this._sourceList.internalValue = config.sourceList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // application_any - computed: false, optional: true, required: false
  private _applicationAny?: string; 
  public get applicationAny() {
    return this.getStringAttribute('application_any');
  }
  public set applicationAny(value: string) {
    this._applicationAny = value;
  }
  public resetApplicationAny() {
    this._applicationAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationAnyInput() {
    return this._applicationAny;
  }

  // cgnv6_ds_lite - computed: false, optional: true, required: false
  private _cgnv6DsLite?: string; 
  public get cgnv6DsLite() {
    return this.getStringAttribute('cgnv6_ds_lite');
  }
  public set cgnv6DsLite(value: string) {
    this._cgnv6DsLite = value;
  }
  public resetCgnv6DsLite() {
    this._cgnv6DsLite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6DsLiteInput() {
    return this._cgnv6DsLite;
  }

  // cgnv6_ds_lite_log - computed: false, optional: true, required: false
  private _cgnv6DsLiteLog?: number; 
  public get cgnv6DsLiteLog() {
    return this.getNumberAttribute('cgnv6_ds_lite_log');
  }
  public set cgnv6DsLiteLog(value: number) {
    this._cgnv6DsLiteLog = value;
  }
  public resetCgnv6DsLiteLog() {
    this._cgnv6DsLiteLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6DsLiteLogInput() {
    return this._cgnv6DsLiteLog;
  }

  // cgnv6_ds_lite_lsn_lid - computed: false, optional: true, required: false
  private _cgnv6DsLiteLsnLid?: number; 
  public get cgnv6DsLiteLsnLid() {
    return this.getNumberAttribute('cgnv6_ds_lite_lsn_lid');
  }
  public set cgnv6DsLiteLsnLid(value: number) {
    this._cgnv6DsLiteLsnLid = value;
  }
  public resetCgnv6DsLiteLsnLid() {
    this._cgnv6DsLiteLsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6DsLiteLsnLidInput() {
    return this._cgnv6DsLiteLsnLid;
  }

  // cgnv6_fixed_nat_log - computed: false, optional: true, required: false
  private _cgnv6FixedNatLog?: number; 
  public get cgnv6FixedNatLog() {
    return this.getNumberAttribute('cgnv6_fixed_nat_log');
  }
  public set cgnv6FixedNatLog(value: number) {
    this._cgnv6FixedNatLog = value;
  }
  public resetCgnv6FixedNatLog() {
    this._cgnv6FixedNatLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6FixedNatLogInput() {
    return this._cgnv6FixedNatLog;
  }

  // cgnv6_log - computed: false, optional: true, required: false
  private _cgnv6Log?: number; 
  public get cgnv6Log() {
    return this.getNumberAttribute('cgnv6_log');
  }
  public set cgnv6Log(value: number) {
    this._cgnv6Log = value;
  }
  public resetCgnv6Log() {
    this._cgnv6Log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6LogInput() {
    return this._cgnv6Log;
  }

  // cgnv6_lsn_lid - computed: false, optional: true, required: false
  private _cgnv6LsnLid?: number; 
  public get cgnv6LsnLid() {
    return this.getNumberAttribute('cgnv6_lsn_lid');
  }
  public set cgnv6LsnLid(value: number) {
    this._cgnv6LsnLid = value;
  }
  public resetCgnv6LsnLid() {
    this._cgnv6LsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6LsnLidInput() {
    return this._cgnv6LsnLid;
  }

  // cgnv6_lsn_log - computed: false, optional: true, required: false
  private _cgnv6LsnLog?: number; 
  public get cgnv6LsnLog() {
    return this.getNumberAttribute('cgnv6_lsn_log');
  }
  public set cgnv6LsnLog(value: number) {
    this._cgnv6LsnLog = value;
  }
  public resetCgnv6LsnLog() {
    this._cgnv6LsnLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6LsnLogInput() {
    return this._cgnv6LsnLog;
  }

  // cgnv6_policy - computed: false, optional: true, required: false
  private _cgnv6Policy?: string; 
  public get cgnv6Policy() {
    return this.getStringAttribute('cgnv6_policy');
  }
  public set cgnv6Policy(value: string) {
    this._cgnv6Policy = value;
  }
  public resetCgnv6Policy() {
    this._cgnv6Policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6PolicyInput() {
    return this._cgnv6Policy;
  }

  // dst_class_list - computed: false, optional: true, required: false
  private _dstClassList?: string; 
  public get dstClassList() {
    return this.getStringAttribute('dst_class_list');
  }
  public set dstClassList(value: string) {
    this._dstClassList = value;
  }
  public resetDstClassList() {
    this._dstClassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstClassListInput() {
    return this._dstClassList;
  }

  // dst_domain_list - computed: false, optional: true, required: false
  private _dstDomainList?: string; 
  public get dstDomainList() {
    return this.getStringAttribute('dst_domain_list');
  }
  public set dstDomainList(value: string) {
    this._dstDomainList = value;
  }
  public resetDstDomainList() {
    this._dstDomainList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstDomainListInput() {
    return this._dstDomainList;
  }

  // dst_geoloc_list - computed: false, optional: true, required: false
  private _dstGeolocList?: string; 
  public get dstGeolocList() {
    return this.getStringAttribute('dst_geoloc_list');
  }
  public set dstGeolocList(value: string) {
    this._dstGeolocList = value;
  }
  public resetDstGeolocList() {
    this._dstGeolocList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstGeolocListInput() {
    return this._dstGeolocList;
  }

  // dst_geoloc_list_shared - computed: false, optional: true, required: false
  private _dstGeolocListShared?: number; 
  public get dstGeolocListShared() {
    return this.getNumberAttribute('dst_geoloc_list_shared');
  }
  public set dstGeolocListShared(value: number) {
    this._dstGeolocListShared = value;
  }
  public resetDstGeolocListShared() {
    this._dstGeolocListShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstGeolocListSharedInput() {
    return this._dstGeolocListShared;
  }

  // dst_geoloc_name - computed: false, optional: true, required: false
  private _dstGeolocName?: string; 
  public get dstGeolocName() {
    return this.getStringAttribute('dst_geoloc_name');
  }
  public set dstGeolocName(value: string) {
    this._dstGeolocName = value;
  }
  public resetDstGeolocName() {
    this._dstGeolocName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstGeolocNameInput() {
    return this._dstGeolocName;
  }

  // dst_ipv4_any - computed: false, optional: true, required: false
  private _dstIpv4Any?: string; 
  public get dstIpv4Any() {
    return this.getStringAttribute('dst_ipv4_any');
  }
  public set dstIpv4Any(value: string) {
    this._dstIpv4Any = value;
  }
  public resetDstIpv4Any() {
    this._dstIpv4Any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv4AnyInput() {
    return this._dstIpv4Any;
  }

  // dst_ipv6_any - computed: false, optional: true, required: false
  private _dstIpv6Any?: string; 
  public get dstIpv6Any() {
    return this.getStringAttribute('dst_ipv6_any');
  }
  public set dstIpv6Any(value: string) {
    this._dstIpv6Any = value;
  }
  public resetDstIpv6Any() {
    this._dstIpv6Any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv6AnyInput() {
    return this._dstIpv6Any;
  }

  // dst_threat_list - computed: false, optional: true, required: false
  private _dstThreatList?: string; 
  public get dstThreatList() {
    return this.getStringAttribute('dst_threat_list');
  }
  public set dstThreatList(value: string) {
    this._dstThreatList = value;
  }
  public resetDstThreatList() {
    this._dstThreatList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstThreatListInput() {
    return this._dstThreatList;
  }

  // dst_zone - computed: false, optional: true, required: false
  private _dstZone?: string; 
  public get dstZone() {
    return this.getStringAttribute('dst_zone');
  }
  public set dstZone(value: string) {
    this._dstZone = value;
  }
  public resetDstZone() {
    this._dstZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstZoneInput() {
    return this._dstZone;
  }

  // dst_zone_any - computed: false, optional: true, required: false
  private _dstZoneAny?: string; 
  public get dstZoneAny() {
    return this.getStringAttribute('dst_zone_any');
  }
  public set dstZoneAny(value: string) {
    this._dstZoneAny = value;
  }
  public resetDstZoneAny() {
    this._dstZoneAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstZoneAnyInput() {
    return this._dstZoneAny;
  }

  // forward_listen_on_port - computed: false, optional: true, required: false
  private _forwardListenOnPort?: number; 
  public get forwardListenOnPort() {
    return this.getNumberAttribute('forward_listen_on_port');
  }
  public set forwardListenOnPort(value: number) {
    this._forwardListenOnPort = value;
  }
  public resetForwardListenOnPort() {
    this._forwardListenOnPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardListenOnPortInput() {
    return this._forwardListenOnPort;
  }

  // forward_log - computed: false, optional: true, required: false
  private _forwardLog?: number; 
  public get forwardLog() {
    return this.getNumberAttribute('forward_log');
  }
  public set forwardLog(value: number) {
    this._forwardLog = value;
  }
  public resetForwardLog() {
    this._forwardLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardLogInput() {
    return this._forwardLog;
  }

  // fw_log - computed: false, optional: true, required: false
  private _fwLog?: number; 
  public get fwLog() {
    return this.getNumberAttribute('fw_log');
  }
  public set fwLog(value: number) {
    this._fwLog = value;
  }
  public resetFwLog() {
    this._fwLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwLogInput() {
    return this._fwLog;
  }

  // fwlog - computed: false, optional: true, required: false
  private _fwlog?: number; 
  public get fwlog() {
    return this.getNumberAttribute('fwlog');
  }
  public set fwlog(value: number) {
    this._fwlog = value;
  }
  public resetFwlog() {
    this._fwlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwlogInput() {
    return this._fwlog;
  }

  // gtp_template - computed: false, optional: true, required: false
  private _gtpTemplate?: string; 
  public get gtpTemplate() {
    return this.getStringAttribute('gtp_template');
  }
  public set gtpTemplate(value: string) {
    this._gtpTemplate = value;
  }
  public resetGtpTemplate() {
    this._gtpTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpTemplateInput() {
    return this._gtpTemplate;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // inspect_payload - computed: false, optional: true, required: false
  private _inspectPayload?: number; 
  public get inspectPayload() {
    return this.getNumberAttribute('inspect_payload');
  }
  public set inspectPayload(value: number) {
    this._inspectPayload = value;
  }
  public resetInspectPayload() {
    this._inspectPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectPayloadInput() {
    return this._inspectPayload;
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // lid - computed: false, optional: true, required: false
  private _lid?: number; 
  public get lid() {
    return this.getNumberAttribute('lid');
  }
  public set lid(value: number) {
    this._lid = value;
  }
  public resetTfLid() {
    this._lid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidInput() {
    return this._lid;
  }

  // lidlog - computed: false, optional: true, required: false
  private _lidlog?: number; 
  public get lidlog() {
    return this.getNumberAttribute('lidlog');
  }
  public set lidlog(value: number) {
    this._lidlog = value;
  }
  public resetTfLidlog() {
    this._lidlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidlogInput() {
    return this._lidlog;
  }

  // listen_on_port - computed: false, optional: true, required: false
  private _listenOnPort?: number; 
  public get listenOnPort() {
    return this.getNumberAttribute('listen_on_port');
  }
  public set listenOnPort(value: number) {
    this._listenOnPort = value;
  }
  public resetListenOnPort() {
    this._listenOnPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenOnPortInput() {
    return this._listenOnPort;
  }

  // listen_on_port_lid - computed: false, optional: true, required: false
  private _listenOnPortLid?: number; 
  public get listenOnPortLid() {
    return this.getNumberAttribute('listen_on_port_lid');
  }
  public set listenOnPortLid(value: number) {
    this._listenOnPortLid = value;
  }
  public resetListenOnPortLid() {
    this._listenOnPortLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenOnPortLidInput() {
    return this._listenOnPortLid;
  }

  // listen_on_port_lidlog - computed: false, optional: true, required: false
  private _listenOnPortLidlog?: number; 
  public get listenOnPortLidlog() {
    return this.getNumberAttribute('listen_on_port_lidlog');
  }
  public set listenOnPortLidlog(value: number) {
    this._listenOnPortLidlog = value;
  }
  public resetListenOnPortLidlog() {
    this._listenOnPortLidlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenOnPortLidlogInput() {
    return this._listenOnPortLidlog;
  }

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // reset_lid - computed: false, optional: true, required: false
  private _resetLid?: number; 
  public get resetLid() {
    return this.getNumberAttribute('reset_lid');
  }
  public set resetLid(value: number) {
    this._resetLid = value;
  }
  public resetResetLid() {
    this._resetLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetLidInput() {
    return this._resetLid;
  }

  // reset_lidlog - computed: false, optional: true, required: false
  private _resetLidlog?: number; 
  public get resetLidlog() {
    return this.getNumberAttribute('reset_lidlog');
  }
  public set resetLidlog(value: number) {
    this._resetLidlog = value;
  }
  public resetResetLidlog() {
    this._resetLidlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetLidlogInput() {
    return this._resetLidlog;
  }

  // rule_set_name - computed: false, optional: false, required: true
  private _ruleSetName?: string; 
  public get ruleSetName() {
    return this.getStringAttribute('rule_set_name');
  }
  public set ruleSetName(value: string) {
    this._ruleSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetNameInput() {
    return this._ruleSetName;
  }

  // service_any - computed: false, optional: true, required: false
  private _serviceAny?: string; 
  public get serviceAny() {
    return this.getStringAttribute('service_any');
  }
  public set serviceAny(value: string) {
    this._serviceAny = value;
  }
  public resetServiceAny() {
    this._serviceAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAnyInput() {
    return this._serviceAny;
  }

  // src_class_list - computed: false, optional: true, required: false
  private _srcClassList?: string; 
  public get srcClassList() {
    return this.getStringAttribute('src_class_list');
  }
  public set srcClassList(value: string) {
    this._srcClassList = value;
  }
  public resetSrcClassList() {
    this._srcClassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcClassListInput() {
    return this._srcClassList;
  }

  // src_geoloc_list - computed: false, optional: true, required: false
  private _srcGeolocList?: string; 
  public get srcGeolocList() {
    return this.getStringAttribute('src_geoloc_list');
  }
  public set srcGeolocList(value: string) {
    this._srcGeolocList = value;
  }
  public resetSrcGeolocList() {
    this._srcGeolocList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcGeolocListInput() {
    return this._srcGeolocList;
  }

  // src_geoloc_list_shared - computed: false, optional: true, required: false
  private _srcGeolocListShared?: number; 
  public get srcGeolocListShared() {
    return this.getNumberAttribute('src_geoloc_list_shared');
  }
  public set srcGeolocListShared(value: number) {
    this._srcGeolocListShared = value;
  }
  public resetSrcGeolocListShared() {
    this._srcGeolocListShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcGeolocListSharedInput() {
    return this._srcGeolocListShared;
  }

  // src_geoloc_name - computed: false, optional: true, required: false
  private _srcGeolocName?: string; 
  public get srcGeolocName() {
    return this.getStringAttribute('src_geoloc_name');
  }
  public set srcGeolocName(value: string) {
    this._srcGeolocName = value;
  }
  public resetSrcGeolocName() {
    this._srcGeolocName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcGeolocNameInput() {
    return this._srcGeolocName;
  }

  // src_ipv4_any - computed: false, optional: true, required: false
  private _srcIpv4Any?: string; 
  public get srcIpv4Any() {
    return this.getStringAttribute('src_ipv4_any');
  }
  public set srcIpv4Any(value: string) {
    this._srcIpv4Any = value;
  }
  public resetSrcIpv4Any() {
    this._srcIpv4Any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv4AnyInput() {
    return this._srcIpv4Any;
  }

  // src_ipv6_any - computed: false, optional: true, required: false
  private _srcIpv6Any?: string; 
  public get srcIpv6Any() {
    return this.getStringAttribute('src_ipv6_any');
  }
  public set srcIpv6Any(value: string) {
    this._srcIpv6Any = value;
  }
  public resetSrcIpv6Any() {
    this._srcIpv6Any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6AnyInput() {
    return this._srcIpv6Any;
  }

  // src_threat_list - computed: false, optional: true, required: false
  private _srcThreatList?: string; 
  public get srcThreatList() {
    return this.getStringAttribute('src_threat_list');
  }
  public set srcThreatList(value: string) {
    this._srcThreatList = value;
  }
  public resetSrcThreatList() {
    this._srcThreatList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcThreatListInput() {
    return this._srcThreatList;
  }

  // src_zone - computed: false, optional: true, required: false
  private _srcZone?: string; 
  public get srcZone() {
    return this.getStringAttribute('src_zone');
  }
  public set srcZone(value: string) {
    this._srcZone = value;
  }
  public resetSrcZone() {
    this._srcZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneInput() {
    return this._srcZone;
  }

  // src_zone_any - computed: false, optional: true, required: false
  private _srcZoneAny?: string; 
  public get srcZoneAny() {
    return this.getStringAttribute('src_zone_any');
  }
  public set srcZoneAny(value: string) {
    this._srcZoneAny = value;
  }
  public resetSrcZoneAny() {
    this._srcZoneAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneAnyInput() {
    return this._srcZoneAny;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // track_application - computed: false, optional: true, required: false
  private _trackApplication?: number; 
  public get trackApplication() {
    return this.getNumberAttribute('track_application');
  }
  public set trackApplication(value: number) {
    this._trackApplication = value;
  }
  public resetTrackApplication() {
    this._trackApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackApplicationInput() {
    return this._trackApplication;
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

  // vpn_ipsec_group_name - computed: false, optional: true, required: false
  private _vpnIpsecGroupName?: string; 
  public get vpnIpsecGroupName() {
    return this.getStringAttribute('vpn_ipsec_group_name');
  }
  public set vpnIpsecGroupName(value: string) {
    this._vpnIpsecGroupName = value;
  }
  public resetVpnIpsecGroupName() {
    this._vpnIpsecGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIpsecGroupNameInput() {
    return this._vpnIpsecGroupName;
  }

  // vpn_ipsec_name - computed: false, optional: true, required: false
  private _vpnIpsecName?: string; 
  public get vpnIpsecName() {
    return this.getStringAttribute('vpn_ipsec_name');
  }
  public set vpnIpsecName(value: string) {
    this._vpnIpsecName = value;
  }
  public resetVpnIpsecName() {
    this._vpnIpsecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIpsecNameInput() {
    return this._vpnIpsecName;
  }

  // action_group - computed: false, optional: true, required: false
  private _actionGroup = new RuleSetRuleActionGroupOutputReference(this, "action_group");
  public get actionGroup() {
    return this._actionGroup;
  }
  public putActionGroup(value: RuleSetRuleActionGroup) {
    this._actionGroup.internalValue = value;
  }
  public resetActionGroup() {
    this._actionGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupInput() {
    return this._actionGroup.internalValue;
  }

  // app_list - computed: false, optional: true, required: false
  private _appList = new RuleSetRuleAppListStructList(this, "app_list", false);
  public get appList() {
    return this._appList;
  }
  public putAppList(value: RuleSetRuleAppListStruct[] | cdktf.IResolvable) {
    this._appList.internalValue = value;
  }
  public resetAppList() {
    this._appList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appListInput() {
    return this._appList.internalValue;
  }

  // dest_list - computed: false, optional: true, required: false
  private _destList = new RuleSetRuleDestListStructList(this, "dest_list", false);
  public get destList() {
    return this._destList;
  }
  public putDestList(value: RuleSetRuleDestListStruct[] | cdktf.IResolvable) {
    this._destList.internalValue = value;
  }
  public resetDestList() {
    this._destList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destListInput() {
    return this._destList.internalValue;
  }

  // dscp_list - computed: false, optional: true, required: false
  private _dscpList = new RuleSetRuleDscpListStructList(this, "dscp_list", false);
  public get dscpList() {
    return this._dscpList;
  }
  public putDscpList(value: RuleSetRuleDscpListStruct[] | cdktf.IResolvable) {
    this._dscpList.internalValue = value;
  }
  public resetDscpList() {
    this._dscpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpListInput() {
    return this._dscpList.internalValue;
  }

  // move_rule - computed: false, optional: true, required: false
  private _moveRule = new RuleSetRuleMoveRuleOutputReference(this, "move_rule");
  public get moveRule() {
    return this._moveRule;
  }
  public putMoveRule(value: RuleSetRuleMoveRule) {
    this._moveRule.internalValue = value;
  }
  public resetMoveRule() {
    this._moveRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveRuleInput() {
    return this._moveRule.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new RuleSetRuleSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: RuleSetRuleSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // service_list - computed: false, optional: true, required: false
  private _serviceList = new RuleSetRuleServiceListStructList(this, "service_list", false);
  public get serviceList() {
    return this._serviceList;
  }
  public putServiceList(value: RuleSetRuleServiceListStruct[] | cdktf.IResolvable) {
    this._serviceList.internalValue = value;
  }
  public resetServiceList() {
    this._serviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceListInput() {
    return this._serviceList.internalValue;
  }

  // source_list - computed: false, optional: true, required: false
  private _sourceList = new RuleSetRuleSourceListStructList(this, "source_list", false);
  public get sourceList() {
    return this._sourceList;
  }
  public putSourceList(value: RuleSetRuleSourceListStruct[] | cdktf.IResolvable) {
    this._sourceList.internalValue = value;
  }
  public resetSourceList() {
    this._sourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListInput() {
    return this._sourceList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      application_any: cdktf.stringToTerraform(this._applicationAny),
      cgnv6_ds_lite: cdktf.stringToTerraform(this._cgnv6DsLite),
      cgnv6_ds_lite_log: cdktf.numberToTerraform(this._cgnv6DsLiteLog),
      cgnv6_ds_lite_lsn_lid: cdktf.numberToTerraform(this._cgnv6DsLiteLsnLid),
      cgnv6_fixed_nat_log: cdktf.numberToTerraform(this._cgnv6FixedNatLog),
      cgnv6_log: cdktf.numberToTerraform(this._cgnv6Log),
      cgnv6_lsn_lid: cdktf.numberToTerraform(this._cgnv6LsnLid),
      cgnv6_lsn_log: cdktf.numberToTerraform(this._cgnv6LsnLog),
      cgnv6_policy: cdktf.stringToTerraform(this._cgnv6Policy),
      dst_class_list: cdktf.stringToTerraform(this._dstClassList),
      dst_domain_list: cdktf.stringToTerraform(this._dstDomainList),
      dst_geoloc_list: cdktf.stringToTerraform(this._dstGeolocList),
      dst_geoloc_list_shared: cdktf.numberToTerraform(this._dstGeolocListShared),
      dst_geoloc_name: cdktf.stringToTerraform(this._dstGeolocName),
      dst_ipv4_any: cdktf.stringToTerraform(this._dstIpv4Any),
      dst_ipv6_any: cdktf.stringToTerraform(this._dstIpv6Any),
      dst_threat_list: cdktf.stringToTerraform(this._dstThreatList),
      dst_zone: cdktf.stringToTerraform(this._dstZone),
      dst_zone_any: cdktf.stringToTerraform(this._dstZoneAny),
      forward_listen_on_port: cdktf.numberToTerraform(this._forwardListenOnPort),
      forward_log: cdktf.numberToTerraform(this._forwardLog),
      fw_log: cdktf.numberToTerraform(this._fwLog),
      fwlog: cdktf.numberToTerraform(this._fwlog),
      gtp_template: cdktf.stringToTerraform(this._gtpTemplate),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      inspect_payload: cdktf.numberToTerraform(this._inspectPayload),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      lid: cdktf.numberToTerraform(this._lid),
      lidlog: cdktf.numberToTerraform(this._lidlog),
      listen_on_port: cdktf.numberToTerraform(this._listenOnPort),
      listen_on_port_lid: cdktf.numberToTerraform(this._listenOnPortLid),
      listen_on_port_lidlog: cdktf.numberToTerraform(this._listenOnPortLidlog),
      log: cdktf.numberToTerraform(this._log),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      policy: cdktf.stringToTerraform(this._policy),
      remark: cdktf.stringToTerraform(this._remark),
      reset_lid: cdktf.numberToTerraform(this._resetLid),
      reset_lidlog: cdktf.numberToTerraform(this._resetLidlog),
      rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
      service_any: cdktf.stringToTerraform(this._serviceAny),
      src_class_list: cdktf.stringToTerraform(this._srcClassList),
      src_geoloc_list: cdktf.stringToTerraform(this._srcGeolocList),
      src_geoloc_list_shared: cdktf.numberToTerraform(this._srcGeolocListShared),
      src_geoloc_name: cdktf.stringToTerraform(this._srcGeolocName),
      src_ipv4_any: cdktf.stringToTerraform(this._srcIpv4Any),
      src_ipv6_any: cdktf.stringToTerraform(this._srcIpv6Any),
      src_threat_list: cdktf.stringToTerraform(this._srcThreatList),
      src_zone: cdktf.stringToTerraform(this._srcZone),
      src_zone_any: cdktf.stringToTerraform(this._srcZoneAny),
      status: cdktf.stringToTerraform(this._status),
      track_application: cdktf.numberToTerraform(this._trackApplication),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vpn_ipsec_group_name: cdktf.stringToTerraform(this._vpnIpsecGroupName),
      vpn_ipsec_name: cdktf.stringToTerraform(this._vpnIpsecName),
      action_group: ruleSetRuleActionGroupToTerraform(this._actionGroup.internalValue),
      app_list: cdktf.listMapper(ruleSetRuleAppListStructToTerraform, true)(this._appList.internalValue),
      dest_list: cdktf.listMapper(ruleSetRuleDestListStructToTerraform, true)(this._destList.internalValue),
      dscp_list: cdktf.listMapper(ruleSetRuleDscpListStructToTerraform, true)(this._dscpList.internalValue),
      move_rule: ruleSetRuleMoveRuleToTerraform(this._moveRule.internalValue),
      sampling_enable: cdktf.listMapper(ruleSetRuleSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      service_list: cdktf.listMapper(ruleSetRuleServiceListStructToTerraform, true)(this._serviceList.internalValue),
      source_list: cdktf.listMapper(ruleSetRuleSourceListStructToTerraform, true)(this._sourceList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_any: {
        value: cdktf.stringToHclTerraform(this._applicationAny),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgnv6_ds_lite: {
        value: cdktf.stringToHclTerraform(this._cgnv6DsLite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgnv6_ds_lite_log: {
        value: cdktf.numberToHclTerraform(this._cgnv6DsLiteLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgnv6_ds_lite_lsn_lid: {
        value: cdktf.numberToHclTerraform(this._cgnv6DsLiteLsnLid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgnv6_fixed_nat_log: {
        value: cdktf.numberToHclTerraform(this._cgnv6FixedNatLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgnv6_log: {
        value: cdktf.numberToHclTerraform(this._cgnv6Log),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgnv6_lsn_lid: {
        value: cdktf.numberToHclTerraform(this._cgnv6LsnLid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgnv6_lsn_log: {
        value: cdktf.numberToHclTerraform(this._cgnv6LsnLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgnv6_policy: {
        value: cdktf.stringToHclTerraform(this._cgnv6Policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_class_list: {
        value: cdktf.stringToHclTerraform(this._dstClassList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_domain_list: {
        value: cdktf.stringToHclTerraform(this._dstDomainList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_geoloc_list: {
        value: cdktf.stringToHclTerraform(this._dstGeolocList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_geoloc_list_shared: {
        value: cdktf.numberToHclTerraform(this._dstGeolocListShared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_geoloc_name: {
        value: cdktf.stringToHclTerraform(this._dstGeolocName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_ipv4_any: {
        value: cdktf.stringToHclTerraform(this._dstIpv4Any),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_ipv6_any: {
        value: cdktf.stringToHclTerraform(this._dstIpv6Any),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_threat_list: {
        value: cdktf.stringToHclTerraform(this._dstThreatList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_zone: {
        value: cdktf.stringToHclTerraform(this._dstZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_zone_any: {
        value: cdktf.stringToHclTerraform(this._dstZoneAny),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_listen_on_port: {
        value: cdktf.numberToHclTerraform(this._forwardListenOnPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_log: {
        value: cdktf.numberToHclTerraform(this._forwardLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fw_log: {
        value: cdktf.numberToHclTerraform(this._fwLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fwlog: {
        value: cdktf.numberToHclTerraform(this._fwlog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_template: {
        value: cdktf.stringToHclTerraform(this._gtpTemplate),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inspect_payload: {
        value: cdktf.numberToHclTerraform(this._inspectPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lid: {
        value: cdktf.numberToHclTerraform(this._lid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lidlog: {
        value: cdktf.numberToHclTerraform(this._lidlog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listen_on_port: {
        value: cdktf.numberToHclTerraform(this._listenOnPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listen_on_port_lid: {
        value: cdktf.numberToHclTerraform(this._listenOnPortLid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listen_on_port_lidlog: {
        value: cdktf.numberToHclTerraform(this._listenOnPortLidlog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log: {
        value: cdktf.numberToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_lid: {
        value: cdktf.numberToHclTerraform(this._resetLid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_lidlog: {
        value: cdktf.numberToHclTerraform(this._resetLidlog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_set_name: {
        value: cdktf.stringToHclTerraform(this._ruleSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_any: {
        value: cdktf.stringToHclTerraform(this._serviceAny),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_class_list: {
        value: cdktf.stringToHclTerraform(this._srcClassList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_geoloc_list: {
        value: cdktf.stringToHclTerraform(this._srcGeolocList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_geoloc_list_shared: {
        value: cdktf.numberToHclTerraform(this._srcGeolocListShared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_geoloc_name: {
        value: cdktf.stringToHclTerraform(this._srcGeolocName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ipv4_any: {
        value: cdktf.stringToHclTerraform(this._srcIpv4Any),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ipv6_any: {
        value: cdktf.stringToHclTerraform(this._srcIpv6Any),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_threat_list: {
        value: cdktf.stringToHclTerraform(this._srcThreatList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_zone: {
        value: cdktf.stringToHclTerraform(this._srcZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_zone_any: {
        value: cdktf.stringToHclTerraform(this._srcZoneAny),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_application: {
        value: cdktf.numberToHclTerraform(this._trackApplication),
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
      vpn_ipsec_group_name: {
        value: cdktf.stringToHclTerraform(this._vpnIpsecGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_ipsec_name: {
        value: cdktf.stringToHclTerraform(this._vpnIpsecName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_group: {
        value: ruleSetRuleActionGroupToHclTerraform(this._actionGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleSetRuleActionGroupList",
      },
      app_list: {
        value: cdktf.listMapperHcl(ruleSetRuleAppListStructToHclTerraform, true)(this._appList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleSetRuleAppListStructList",
      },
      dest_list: {
        value: cdktf.listMapperHcl(ruleSetRuleDestListStructToHclTerraform, true)(this._destList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleSetRuleDestListStructList",
      },
      dscp_list: {
        value: cdktf.listMapperHcl(ruleSetRuleDscpListStructToHclTerraform, true)(this._dscpList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleSetRuleDscpListStructList",
      },
      move_rule: {
        value: ruleSetRuleMoveRuleToHclTerraform(this._moveRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleSetRuleMoveRuleList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(ruleSetRuleSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleSetRuleSamplingEnableList",
      },
      service_list: {
        value: cdktf.listMapperHcl(ruleSetRuleServiceListStructToHclTerraform, true)(this._serviceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleSetRuleServiceListStructList",
      },
      source_list: {
        value: cdktf.listMapperHcl(ruleSetRuleSourceListStructToHclTerraform, true)(this._sourceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleSetRuleSourceListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
