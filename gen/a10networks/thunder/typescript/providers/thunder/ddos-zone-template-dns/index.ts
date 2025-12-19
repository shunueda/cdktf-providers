// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Drop DNS queries of Type ANY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_any_check DdosZoneTemplateDns#dns_any_check}
  */
  readonly dnsAnyCheck?: number;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_any_check_action DdosZoneTemplateDns#dns_any_check_action}
  */
  readonly dnsAnyCheckAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_any_check_action_list_name DdosZoneTemplateDns#dns_any_check_action_list_name}
  */
  readonly dnsAnyCheckActionListName?: string;
  /**
  * Apply a domain-group to the DNS template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#domain_group_name DdosZoneTemplateDns#domain_group_name}
  */
  readonly domainGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#id DdosZoneTemplateDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DDOS DNS Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#name DdosZoneTemplateDns#name}
  */
  readonly name: string;
  /**
  * 'permit': permit; 'deny': deny (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#on_no_match DdosZoneTemplateDns#on_no_match}
  */
  readonly onNoMatch?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#user_tag DdosZoneTemplateDns#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#uuid DdosZoneTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * allow_query_class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_query_class DdosZoneTemplateDns#allow_query_class}
  */
  readonly allowQueryClass?: DdosZoneTemplateDnsAllowQueryClass;
  /**
  * allow_record_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_record_type DdosZoneTemplateDns#allow_record_type}
  */
  readonly allowRecordType?: DdosZoneTemplateDnsAllowRecordType;
  /**
  * dns_udp_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_udp_authentication DdosZoneTemplateDns#dns_udp_authentication}
  */
  readonly dnsUdpAuthentication?: DdosZoneTemplateDnsDnsUdpAuthentication;
  /**
  * dst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dst DdosZoneTemplateDns#dst}
  */
  readonly dst?: DdosZoneTemplateDnsDst;
  /**
  * fqdn_label_count_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#fqdn_label_count_cfg DdosZoneTemplateDns#fqdn_label_count_cfg}
  */
  readonly fqdnLabelCountCfg?: DdosZoneTemplateDnsFqdnLabelCountCfg;
  /**
  * fqdn_label_len_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#fqdn_label_len_cfg DdosZoneTemplateDns#fqdn_label_len_cfg}
  */
  readonly fqdnLabelLenCfg?: DdosZoneTemplateDnsFqdnLabelLenCfg[] | cdktf.IResolvable;
  /**
  * malformed_query_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#malformed_query_check DdosZoneTemplateDns#malformed_query_check}
  */
  readonly malformedQueryCheck?: DdosZoneTemplateDnsMalformedQueryCheck;
  /**
  * multi_pu_threshold_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#multi_pu_threshold_distribution DdosZoneTemplateDns#multi_pu_threshold_distribution}
  */
  readonly multiPuThresholdDistribution?: DdosZoneTemplateDnsMultiPuThresholdDistribution;
  /**
  * src block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#src DdosZoneTemplateDns#src}
  */
  readonly src?: DdosZoneTemplateDnsSrc;
  /**
  * symtimeout_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#symtimeout_cfg DdosZoneTemplateDns#symtimeout_cfg}
  */
  readonly symtimeoutCfg?: DdosZoneTemplateDnsSymtimeoutCfg;
}
export interface DdosZoneTemplateDnsAllowQueryClass {
  /**
  * ANY query class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_any_query_class DdosZoneTemplateDns#allow_any_query_class}
  */
  readonly allowAnyQueryClass?: number;
  /**
  * CHAOS query class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_chaos_query_class DdosZoneTemplateDns#allow_chaos_query_class}
  */
  readonly allowChaosQueryClass?: number;
  /**
  * CSNET query class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_csnet_query_class DdosZoneTemplateDns#allow_csnet_query_class}
  */
  readonly allowCsnetQueryClass?: number;
  /**
  * HESIOD query class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_hesiod_query_class DdosZoneTemplateDns#allow_hesiod_query_class}
  */
  readonly allowHesiodQueryClass?: number;
  /**
  * INTERNET query class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_internet_query_class DdosZoneTemplateDns#allow_internet_query_class}
  */
  readonly allowInternetQueryClass?: number;
  /**
  * NONE query class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_none_query_class DdosZoneTemplateDns#allow_none_query_class}
  */
  readonly allowNoneQueryClass?: number;
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_query_class_action DdosZoneTemplateDns#allow_query_class_action}
  */
  readonly allowQueryClassAction?: string;
  /**
  * Configure action-list to take when query class doesn't match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_query_class_action_list_name DdosZoneTemplateDns#allow_query_class_action_list_name}
  */
  readonly allowQueryClassActionListName?: string;
}

export function ddosZoneTemplateDnsAllowQueryClassToTerraform(struct?: DdosZoneTemplateDnsAllowQueryClassOutputReference | DdosZoneTemplateDnsAllowQueryClass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_any_query_class: cdktf.numberToTerraform(struct!.allowAnyQueryClass),
    allow_chaos_query_class: cdktf.numberToTerraform(struct!.allowChaosQueryClass),
    allow_csnet_query_class: cdktf.numberToTerraform(struct!.allowCsnetQueryClass),
    allow_hesiod_query_class: cdktf.numberToTerraform(struct!.allowHesiodQueryClass),
    allow_internet_query_class: cdktf.numberToTerraform(struct!.allowInternetQueryClass),
    allow_none_query_class: cdktf.numberToTerraform(struct!.allowNoneQueryClass),
    allow_query_class_action: cdktf.stringToTerraform(struct!.allowQueryClassAction),
    allow_query_class_action_list_name: cdktf.stringToTerraform(struct!.allowQueryClassActionListName),
  }
}


export function ddosZoneTemplateDnsAllowQueryClassToHclTerraform(struct?: DdosZoneTemplateDnsAllowQueryClassOutputReference | DdosZoneTemplateDnsAllowQueryClass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_any_query_class: {
      value: cdktf.numberToHclTerraform(struct!.allowAnyQueryClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_chaos_query_class: {
      value: cdktf.numberToHclTerraform(struct!.allowChaosQueryClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_csnet_query_class: {
      value: cdktf.numberToHclTerraform(struct!.allowCsnetQueryClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_hesiod_query_class: {
      value: cdktf.numberToHclTerraform(struct!.allowHesiodQueryClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_internet_query_class: {
      value: cdktf.numberToHclTerraform(struct!.allowInternetQueryClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_none_query_class: {
      value: cdktf.numberToHclTerraform(struct!.allowNoneQueryClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_query_class_action: {
      value: cdktf.stringToHclTerraform(struct!.allowQueryClassAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_query_class_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.allowQueryClassActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsAllowQueryClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsAllowQueryClass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAnyQueryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAnyQueryClass = this._allowAnyQueryClass;
    }
    if (this._allowChaosQueryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowChaosQueryClass = this._allowChaosQueryClass;
    }
    if (this._allowCsnetQueryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCsnetQueryClass = this._allowCsnetQueryClass;
    }
    if (this._allowHesiodQueryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHesiodQueryClass = this._allowHesiodQueryClass;
    }
    if (this._allowInternetQueryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInternetQueryClass = this._allowInternetQueryClass;
    }
    if (this._allowNoneQueryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNoneQueryClass = this._allowNoneQueryClass;
    }
    if (this._allowQueryClassAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowQueryClassAction = this._allowQueryClassAction;
    }
    if (this._allowQueryClassActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowQueryClassActionListName = this._allowQueryClassActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsAllowQueryClass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAnyQueryClass = undefined;
      this._allowChaosQueryClass = undefined;
      this._allowCsnetQueryClass = undefined;
      this._allowHesiodQueryClass = undefined;
      this._allowInternetQueryClass = undefined;
      this._allowNoneQueryClass = undefined;
      this._allowQueryClassAction = undefined;
      this._allowQueryClassActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAnyQueryClass = value.allowAnyQueryClass;
      this._allowChaosQueryClass = value.allowChaosQueryClass;
      this._allowCsnetQueryClass = value.allowCsnetQueryClass;
      this._allowHesiodQueryClass = value.allowHesiodQueryClass;
      this._allowInternetQueryClass = value.allowInternetQueryClass;
      this._allowNoneQueryClass = value.allowNoneQueryClass;
      this._allowQueryClassAction = value.allowQueryClassAction;
      this._allowQueryClassActionListName = value.allowQueryClassActionListName;
    }
  }

  // allow_any_query_class - computed: false, optional: true, required: false
  private _allowAnyQueryClass?: number; 
  public get allowAnyQueryClass() {
    return this.getNumberAttribute('allow_any_query_class');
  }
  public set allowAnyQueryClass(value: number) {
    this._allowAnyQueryClass = value;
  }
  public resetAllowAnyQueryClass() {
    this._allowAnyQueryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnyQueryClassInput() {
    return this._allowAnyQueryClass;
  }

  // allow_chaos_query_class - computed: false, optional: true, required: false
  private _allowChaosQueryClass?: number; 
  public get allowChaosQueryClass() {
    return this.getNumberAttribute('allow_chaos_query_class');
  }
  public set allowChaosQueryClass(value: number) {
    this._allowChaosQueryClass = value;
  }
  public resetAllowChaosQueryClass() {
    this._allowChaosQueryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowChaosQueryClassInput() {
    return this._allowChaosQueryClass;
  }

  // allow_csnet_query_class - computed: false, optional: true, required: false
  private _allowCsnetQueryClass?: number; 
  public get allowCsnetQueryClass() {
    return this.getNumberAttribute('allow_csnet_query_class');
  }
  public set allowCsnetQueryClass(value: number) {
    this._allowCsnetQueryClass = value;
  }
  public resetAllowCsnetQueryClass() {
    this._allowCsnetQueryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCsnetQueryClassInput() {
    return this._allowCsnetQueryClass;
  }

  // allow_hesiod_query_class - computed: false, optional: true, required: false
  private _allowHesiodQueryClass?: number; 
  public get allowHesiodQueryClass() {
    return this.getNumberAttribute('allow_hesiod_query_class');
  }
  public set allowHesiodQueryClass(value: number) {
    this._allowHesiodQueryClass = value;
  }
  public resetAllowHesiodQueryClass() {
    this._allowHesiodQueryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHesiodQueryClassInput() {
    return this._allowHesiodQueryClass;
  }

  // allow_internet_query_class - computed: false, optional: true, required: false
  private _allowInternetQueryClass?: number; 
  public get allowInternetQueryClass() {
    return this.getNumberAttribute('allow_internet_query_class');
  }
  public set allowInternetQueryClass(value: number) {
    this._allowInternetQueryClass = value;
  }
  public resetAllowInternetQueryClass() {
    this._allowInternetQueryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInternetQueryClassInput() {
    return this._allowInternetQueryClass;
  }

  // allow_none_query_class - computed: false, optional: true, required: false
  private _allowNoneQueryClass?: number; 
  public get allowNoneQueryClass() {
    return this.getNumberAttribute('allow_none_query_class');
  }
  public set allowNoneQueryClass(value: number) {
    this._allowNoneQueryClass = value;
  }
  public resetAllowNoneQueryClass() {
    this._allowNoneQueryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNoneQueryClassInput() {
    return this._allowNoneQueryClass;
  }

  // allow_query_class_action - computed: false, optional: true, required: false
  private _allowQueryClassAction?: string; 
  public get allowQueryClassAction() {
    return this.getStringAttribute('allow_query_class_action');
  }
  public set allowQueryClassAction(value: string) {
    this._allowQueryClassAction = value;
  }
  public resetAllowQueryClassAction() {
    this._allowQueryClassAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQueryClassActionInput() {
    return this._allowQueryClassAction;
  }

  // allow_query_class_action_list_name - computed: false, optional: true, required: false
  private _allowQueryClassActionListName?: string; 
  public get allowQueryClassActionListName() {
    return this.getStringAttribute('allow_query_class_action_list_name');
  }
  public set allowQueryClassActionListName(value: string) {
    this._allowQueryClassActionListName = value;
  }
  public resetAllowQueryClassActionListName() {
    this._allowQueryClassActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQueryClassActionListNameInput() {
    return this._allowQueryClassActionListName;
  }
}
export interface DdosZoneTemplateDnsAllowRecordTypeRecordNumCfg {
  /**
  * Other record type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_num_type DdosZoneTemplateDns#allow_num_type}
  */
  readonly allowNumType?: number;
}

export function ddosZoneTemplateDnsAllowRecordTypeRecordNumCfgToTerraform(struct?: DdosZoneTemplateDnsAllowRecordTypeRecordNumCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_num_type: cdktf.numberToTerraform(struct!.allowNumType),
  }
}


export function ddosZoneTemplateDnsAllowRecordTypeRecordNumCfgToHclTerraform(struct?: DdosZoneTemplateDnsAllowRecordTypeRecordNumCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_num_type: {
      value: cdktf.numberToHclTerraform(struct!.allowNumType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsAllowRecordTypeRecordNumCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateDnsAllowRecordTypeRecordNumCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNumType !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNumType = this._allowNumType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsAllowRecordTypeRecordNumCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNumType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNumType = value.allowNumType;
    }
  }

  // allow_num_type - computed: false, optional: true, required: false
  private _allowNumType?: number; 
  public get allowNumType() {
    return this.getNumberAttribute('allow_num_type');
  }
  public set allowNumType(value: number) {
    this._allowNumType = value;
  }
  public resetAllowNumType() {
    this._allowNumType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNumTypeInput() {
    return this._allowNumType;
  }
}

export class DdosZoneTemplateDnsAllowRecordTypeRecordNumCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateDnsAllowRecordTypeRecordNumCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateDnsAllowRecordTypeRecordNumCfgOutputReference {
    return new DdosZoneTemplateDnsAllowRecordTypeRecordNumCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateDnsAllowRecordType {
  /**
  * Address record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_a_type DdosZoneTemplateDns#allow_a_type}
  */
  readonly allowAType?: number;
  /**
  * IPv6 address record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_aaaa_type DdosZoneTemplateDns#allow_aaaa_type}
  */
  readonly allowAaaaType?: number;
  /**
  * Canonical name record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_cname_type DdosZoneTemplateDns#allow_cname_type}
  */
  readonly allowCnameType?: number;
  /**
  * Mail exchange record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_mx_type DdosZoneTemplateDns#allow_mx_type}
  */
  readonly allowMxType?: number;
  /**
  * Name server record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_ns_type DdosZoneTemplateDns#allow_ns_type}
  */
  readonly allowNsType?: number;
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_record_type_action DdosZoneTemplateDns#allow_record_type_action}
  */
  readonly allowRecordTypeAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_record_type_action_list_name DdosZoneTemplateDns#allow_record_type_action_list_name}
  */
  readonly allowRecordTypeActionListName?: string;
  /**
  * Service locator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#allow_srv_type DdosZoneTemplateDns#allow_srv_type}
  */
  readonly allowSrvType?: number;
  /**
  * record_num_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#record_num_cfg DdosZoneTemplateDns#record_num_cfg}
  */
  readonly recordNumCfg?: DdosZoneTemplateDnsAllowRecordTypeRecordNumCfg[] | cdktf.IResolvable;
}

export function ddosZoneTemplateDnsAllowRecordTypeToTerraform(struct?: DdosZoneTemplateDnsAllowRecordTypeOutputReference | DdosZoneTemplateDnsAllowRecordType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_a_type: cdktf.numberToTerraform(struct!.allowAType),
    allow_aaaa_type: cdktf.numberToTerraform(struct!.allowAaaaType),
    allow_cname_type: cdktf.numberToTerraform(struct!.allowCnameType),
    allow_mx_type: cdktf.numberToTerraform(struct!.allowMxType),
    allow_ns_type: cdktf.numberToTerraform(struct!.allowNsType),
    allow_record_type_action: cdktf.stringToTerraform(struct!.allowRecordTypeAction),
    allow_record_type_action_list_name: cdktf.stringToTerraform(struct!.allowRecordTypeActionListName),
    allow_srv_type: cdktf.numberToTerraform(struct!.allowSrvType),
    record_num_cfg: cdktf.listMapper(ddosZoneTemplateDnsAllowRecordTypeRecordNumCfgToTerraform, true)(struct!.recordNumCfg),
  }
}


export function ddosZoneTemplateDnsAllowRecordTypeToHclTerraform(struct?: DdosZoneTemplateDnsAllowRecordTypeOutputReference | DdosZoneTemplateDnsAllowRecordType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_a_type: {
      value: cdktf.numberToHclTerraform(struct!.allowAType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_aaaa_type: {
      value: cdktf.numberToHclTerraform(struct!.allowAaaaType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_cname_type: {
      value: cdktf.numberToHclTerraform(struct!.allowCnameType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_mx_type: {
      value: cdktf.numberToHclTerraform(struct!.allowMxType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_ns_type: {
      value: cdktf.numberToHclTerraform(struct!.allowNsType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_record_type_action: {
      value: cdktf.stringToHclTerraform(struct!.allowRecordTypeAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_record_type_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.allowRecordTypeActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_srv_type: {
      value: cdktf.numberToHclTerraform(struct!.allowSrvType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_num_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateDnsAllowRecordTypeRecordNumCfgToHclTerraform, true)(struct!.recordNumCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsAllowRecordTypeRecordNumCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsAllowRecordTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsAllowRecordType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAType !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAType = this._allowAType;
    }
    if (this._allowAaaaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAaaaType = this._allowAaaaType;
    }
    if (this._allowCnameType !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCnameType = this._allowCnameType;
    }
    if (this._allowMxType !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMxType = this._allowMxType;
    }
    if (this._allowNsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNsType = this._allowNsType;
    }
    if (this._allowRecordTypeAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRecordTypeAction = this._allowRecordTypeAction;
    }
    if (this._allowRecordTypeActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRecordTypeActionListName = this._allowRecordTypeActionListName;
    }
    if (this._allowSrvType !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSrvType = this._allowSrvType;
    }
    if (this._recordNumCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordNumCfg = this._recordNumCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsAllowRecordType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAType = undefined;
      this._allowAaaaType = undefined;
      this._allowCnameType = undefined;
      this._allowMxType = undefined;
      this._allowNsType = undefined;
      this._allowRecordTypeAction = undefined;
      this._allowRecordTypeActionListName = undefined;
      this._allowSrvType = undefined;
      this._recordNumCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAType = value.allowAType;
      this._allowAaaaType = value.allowAaaaType;
      this._allowCnameType = value.allowCnameType;
      this._allowMxType = value.allowMxType;
      this._allowNsType = value.allowNsType;
      this._allowRecordTypeAction = value.allowRecordTypeAction;
      this._allowRecordTypeActionListName = value.allowRecordTypeActionListName;
      this._allowSrvType = value.allowSrvType;
      this._recordNumCfg.internalValue = value.recordNumCfg;
    }
  }

  // allow_a_type - computed: false, optional: true, required: false
  private _allowAType?: number; 
  public get allowAType() {
    return this.getNumberAttribute('allow_a_type');
  }
  public set allowAType(value: number) {
    this._allowAType = value;
  }
  public resetAllowAType() {
    this._allowAType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowATypeInput() {
    return this._allowAType;
  }

  // allow_aaaa_type - computed: false, optional: true, required: false
  private _allowAaaaType?: number; 
  public get allowAaaaType() {
    return this.getNumberAttribute('allow_aaaa_type');
  }
  public set allowAaaaType(value: number) {
    this._allowAaaaType = value;
  }
  public resetAllowAaaaType() {
    this._allowAaaaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAaaaTypeInput() {
    return this._allowAaaaType;
  }

  // allow_cname_type - computed: false, optional: true, required: false
  private _allowCnameType?: number; 
  public get allowCnameType() {
    return this.getNumberAttribute('allow_cname_type');
  }
  public set allowCnameType(value: number) {
    this._allowCnameType = value;
  }
  public resetAllowCnameType() {
    this._allowCnameType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCnameTypeInput() {
    return this._allowCnameType;
  }

  // allow_mx_type - computed: false, optional: true, required: false
  private _allowMxType?: number; 
  public get allowMxType() {
    return this.getNumberAttribute('allow_mx_type');
  }
  public set allowMxType(value: number) {
    this._allowMxType = value;
  }
  public resetAllowMxType() {
    this._allowMxType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMxTypeInput() {
    return this._allowMxType;
  }

  // allow_ns_type - computed: false, optional: true, required: false
  private _allowNsType?: number; 
  public get allowNsType() {
    return this.getNumberAttribute('allow_ns_type');
  }
  public set allowNsType(value: number) {
    this._allowNsType = value;
  }
  public resetAllowNsType() {
    this._allowNsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNsTypeInput() {
    return this._allowNsType;
  }

  // allow_record_type_action - computed: false, optional: true, required: false
  private _allowRecordTypeAction?: string; 
  public get allowRecordTypeAction() {
    return this.getStringAttribute('allow_record_type_action');
  }
  public set allowRecordTypeAction(value: string) {
    this._allowRecordTypeAction = value;
  }
  public resetAllowRecordTypeAction() {
    this._allowRecordTypeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRecordTypeActionInput() {
    return this._allowRecordTypeAction;
  }

  // allow_record_type_action_list_name - computed: false, optional: true, required: false
  private _allowRecordTypeActionListName?: string; 
  public get allowRecordTypeActionListName() {
    return this.getStringAttribute('allow_record_type_action_list_name');
  }
  public set allowRecordTypeActionListName(value: string) {
    this._allowRecordTypeActionListName = value;
  }
  public resetAllowRecordTypeActionListName() {
    this._allowRecordTypeActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRecordTypeActionListNameInput() {
    return this._allowRecordTypeActionListName;
  }

  // allow_srv_type - computed: false, optional: true, required: false
  private _allowSrvType?: number; 
  public get allowSrvType() {
    return this.getNumberAttribute('allow_srv_type');
  }
  public set allowSrvType(value: number) {
    this._allowSrvType = value;
  }
  public resetAllowSrvType() {
    this._allowSrvType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSrvTypeInput() {
    return this._allowSrvType;
  }

  // record_num_cfg - computed: false, optional: true, required: false
  private _recordNumCfg = new DdosZoneTemplateDnsAllowRecordTypeRecordNumCfgList(this, "record_num_cfg", false);
  public get recordNumCfg() {
    return this._recordNumCfg;
  }
  public putRecordNumCfg(value: DdosZoneTemplateDnsAllowRecordTypeRecordNumCfg[] | cdktf.IResolvable) {
    this._recordNumCfg.internalValue = value;
  }
  public resetRecordNumCfg() {
    this._recordNumCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNumCfgInput() {
    return this._recordNumCfg.internalValue;
  }
}
export interface DdosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfg {
  /**
  * Force DNS request over TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#force_tcp DdosZoneTemplateDns#force_tcp}
  */
  readonly forceTcp?: number;
  /**
  * Allow client to retransmit DNS request using different source port during udp-auth (supported in asymmetric mode only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#force_tcp_ignore_client_source_port DdosZoneTemplateDns#force_tcp_ignore_client_source_port}
  */
  readonly forceTcpIgnoreClientSourcePort?: number;
  /**
  * Optional minimum delay (seconds) between DNS retransmits for authentication to pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#force_tcp_min_delay DdosZoneTemplateDns#force_tcp_min_delay}
  */
  readonly forceTcpMinDelay?: number;
  /**
  * UDP authentication timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#force_tcp_timeout DdosZoneTemplateDns#force_tcp_timeout}
  */
  readonly forceTcpTimeout?: number;
}

export function ddosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfgToTerraform(struct?: DdosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfgOutputReference | DdosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_tcp: cdktf.numberToTerraform(struct!.forceTcp),
    force_tcp_ignore_client_source_port: cdktf.numberToTerraform(struct!.forceTcpIgnoreClientSourcePort),
    force_tcp_min_delay: cdktf.numberToTerraform(struct!.forceTcpMinDelay),
    force_tcp_timeout: cdktf.numberToTerraform(struct!.forceTcpTimeout),
  }
}


export function ddosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfgToHclTerraform(struct?: DdosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfgOutputReference | DdosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_tcp: {
      value: cdktf.numberToHclTerraform(struct!.forceTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_tcp_ignore_client_source_port: {
      value: cdktf.numberToHclTerraform(struct!.forceTcpIgnoreClientSourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_tcp_min_delay: {
      value: cdktf.numberToHclTerraform(struct!.forceTcpMinDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_tcp_timeout: {
      value: cdktf.numberToHclTerraform(struct!.forceTcpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcp = this._forceTcp;
    }
    if (this._forceTcpIgnoreClientSourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcpIgnoreClientSourcePort = this._forceTcpIgnoreClientSourcePort;
    }
    if (this._forceTcpMinDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcpMinDelay = this._forceTcpMinDelay;
    }
    if (this._forceTcpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcpTimeout = this._forceTcpTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceTcp = undefined;
      this._forceTcpIgnoreClientSourcePort = undefined;
      this._forceTcpMinDelay = undefined;
      this._forceTcpTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceTcp = value.forceTcp;
      this._forceTcpIgnoreClientSourcePort = value.forceTcpIgnoreClientSourcePort;
      this._forceTcpMinDelay = value.forceTcpMinDelay;
      this._forceTcpTimeout = value.forceTcpTimeout;
    }
  }

  // force_tcp - computed: false, optional: true, required: false
  private _forceTcp?: number; 
  public get forceTcp() {
    return this.getNumberAttribute('force_tcp');
  }
  public set forceTcp(value: number) {
    this._forceTcp = value;
  }
  public resetForceTcp() {
    this._forceTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTcpInput() {
    return this._forceTcp;
  }

  // force_tcp_ignore_client_source_port - computed: false, optional: true, required: false
  private _forceTcpIgnoreClientSourcePort?: number; 
  public get forceTcpIgnoreClientSourcePort() {
    return this.getNumberAttribute('force_tcp_ignore_client_source_port');
  }
  public set forceTcpIgnoreClientSourcePort(value: number) {
    this._forceTcpIgnoreClientSourcePort = value;
  }
  public resetForceTcpIgnoreClientSourcePort() {
    this._forceTcpIgnoreClientSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTcpIgnoreClientSourcePortInput() {
    return this._forceTcpIgnoreClientSourcePort;
  }

  // force_tcp_min_delay - computed: false, optional: true, required: false
  private _forceTcpMinDelay?: number; 
  public get forceTcpMinDelay() {
    return this.getNumberAttribute('force_tcp_min_delay');
  }
  public set forceTcpMinDelay(value: number) {
    this._forceTcpMinDelay = value;
  }
  public resetForceTcpMinDelay() {
    this._forceTcpMinDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTcpMinDelayInput() {
    return this._forceTcpMinDelay;
  }

  // force_tcp_timeout - computed: false, optional: true, required: false
  private _forceTcpTimeout?: number; 
  public get forceTcpTimeout() {
    return this.getNumberAttribute('force_tcp_timeout');
  }
  public set forceTcpTimeout(value: number) {
    this._forceTcpTimeout = value;
  }
  public resetForceTcpTimeout() {
    this._forceTcpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTcpTimeoutInput() {
    return this._forceTcpTimeout;
  }
}
export interface DdosZoneTemplateDnsDnsUdpAuthentication {
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_udp_auth_fail_action DdosZoneTemplateDns#dns_udp_auth_fail_action}
  */
  readonly dnsUdpAuthFailAction?: string;
  /**
  * Configure action-list to take for failing the authentication. (Applicable to dns-udp retry only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_udp_auth_fail_action_list_name DdosZoneTemplateDns#dns_udp_auth_fail_action_list_name}
  */
  readonly dnsUdpAuthFailActionListName?: string;
  /**
  * 'authenticate-src': authenticate-src (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_udp_auth_pass_action DdosZoneTemplateDns#dns_udp_auth_pass_action}
  */
  readonly dnsUdpAuthPassAction?: string;
  /**
  * Configure action-list to take for passing the authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_udp_auth_pass_action_list_name DdosZoneTemplateDns#dns_udp_auth_pass_action_list_name}
  */
  readonly dnsUdpAuthPassActionListName?: string;
  /**
  * Optional minimum delay between DNS retransmits for authentication to pass, unit is specified by min-delay-interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#min_delay DdosZoneTemplateDns#min_delay}
  */
  readonly minDelay?: number;
  /**
  * '100ms': 100ms; '1sec': 1sec;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#min_delay_interval DdosZoneTemplateDns#min_delay_interval}
  */
  readonly minDelayInterval?: string;
  /**
  * UDP authentication timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#udp_timeout DdosZoneTemplateDns#udp_timeout}
  */
  readonly udpTimeout?: number;
  /**
  * force_tcp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#force_tcp_cfg DdosZoneTemplateDns#force_tcp_cfg}
  */
  readonly forceTcpCfg?: DdosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfg;
}

export function ddosZoneTemplateDnsDnsUdpAuthenticationToTerraform(struct?: DdosZoneTemplateDnsDnsUdpAuthenticationOutputReference | DdosZoneTemplateDnsDnsUdpAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_udp_auth_fail_action: cdktf.stringToTerraform(struct!.dnsUdpAuthFailAction),
    dns_udp_auth_fail_action_list_name: cdktf.stringToTerraform(struct!.dnsUdpAuthFailActionListName),
    dns_udp_auth_pass_action: cdktf.stringToTerraform(struct!.dnsUdpAuthPassAction),
    dns_udp_auth_pass_action_list_name: cdktf.stringToTerraform(struct!.dnsUdpAuthPassActionListName),
    min_delay: cdktf.numberToTerraform(struct!.minDelay),
    min_delay_interval: cdktf.stringToTerraform(struct!.minDelayInterval),
    udp_timeout: cdktf.numberToTerraform(struct!.udpTimeout),
    force_tcp_cfg: ddosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfgToTerraform(struct!.forceTcpCfg),
  }
}


export function ddosZoneTemplateDnsDnsUdpAuthenticationToHclTerraform(struct?: DdosZoneTemplateDnsDnsUdpAuthenticationOutputReference | DdosZoneTemplateDnsDnsUdpAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_udp_auth_fail_action: {
      value: cdktf.stringToHclTerraform(struct!.dnsUdpAuthFailAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_udp_auth_fail_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsUdpAuthFailActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_udp_auth_pass_action: {
      value: cdktf.stringToHclTerraform(struct!.dnsUdpAuthPassAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_udp_auth_pass_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsUdpAuthPassActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_delay: {
      value: cdktf.numberToHclTerraform(struct!.minDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_delay_interval: {
      value: cdktf.stringToHclTerraform(struct!.minDelayInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_timeout: {
      value: cdktf.numberToHclTerraform(struct!.udpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_tcp_cfg: {
      value: ddosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfgToHclTerraform(struct!.forceTcpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDnsUdpAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsDnsUdpAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsUdpAuthFailAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsUdpAuthFailAction = this._dnsUdpAuthFailAction;
    }
    if (this._dnsUdpAuthFailActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsUdpAuthFailActionListName = this._dnsUdpAuthFailActionListName;
    }
    if (this._dnsUdpAuthPassAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsUdpAuthPassAction = this._dnsUdpAuthPassAction;
    }
    if (this._dnsUdpAuthPassActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsUdpAuthPassActionListName = this._dnsUdpAuthPassActionListName;
    }
    if (this._minDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDelay = this._minDelay;
    }
    if (this._minDelayInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDelayInterval = this._minDelayInterval;
    }
    if (this._udpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTimeout = this._udpTimeout;
    }
    if (this._forceTcpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcpCfg = this._forceTcpCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDnsUdpAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsUdpAuthFailAction = undefined;
      this._dnsUdpAuthFailActionListName = undefined;
      this._dnsUdpAuthPassAction = undefined;
      this._dnsUdpAuthPassActionListName = undefined;
      this._minDelay = undefined;
      this._minDelayInterval = undefined;
      this._udpTimeout = undefined;
      this._forceTcpCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsUdpAuthFailAction = value.dnsUdpAuthFailAction;
      this._dnsUdpAuthFailActionListName = value.dnsUdpAuthFailActionListName;
      this._dnsUdpAuthPassAction = value.dnsUdpAuthPassAction;
      this._dnsUdpAuthPassActionListName = value.dnsUdpAuthPassActionListName;
      this._minDelay = value.minDelay;
      this._minDelayInterval = value.minDelayInterval;
      this._udpTimeout = value.udpTimeout;
      this._forceTcpCfg.internalValue = value.forceTcpCfg;
    }
  }

  // dns_udp_auth_fail_action - computed: false, optional: true, required: false
  private _dnsUdpAuthFailAction?: string; 
  public get dnsUdpAuthFailAction() {
    return this.getStringAttribute('dns_udp_auth_fail_action');
  }
  public set dnsUdpAuthFailAction(value: string) {
    this._dnsUdpAuthFailAction = value;
  }
  public resetDnsUdpAuthFailAction() {
    this._dnsUdpAuthFailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsUdpAuthFailActionInput() {
    return this._dnsUdpAuthFailAction;
  }

  // dns_udp_auth_fail_action_list_name - computed: false, optional: true, required: false
  private _dnsUdpAuthFailActionListName?: string; 
  public get dnsUdpAuthFailActionListName() {
    return this.getStringAttribute('dns_udp_auth_fail_action_list_name');
  }
  public set dnsUdpAuthFailActionListName(value: string) {
    this._dnsUdpAuthFailActionListName = value;
  }
  public resetDnsUdpAuthFailActionListName() {
    this._dnsUdpAuthFailActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsUdpAuthFailActionListNameInput() {
    return this._dnsUdpAuthFailActionListName;
  }

  // dns_udp_auth_pass_action - computed: false, optional: true, required: false
  private _dnsUdpAuthPassAction?: string; 
  public get dnsUdpAuthPassAction() {
    return this.getStringAttribute('dns_udp_auth_pass_action');
  }
  public set dnsUdpAuthPassAction(value: string) {
    this._dnsUdpAuthPassAction = value;
  }
  public resetDnsUdpAuthPassAction() {
    this._dnsUdpAuthPassAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsUdpAuthPassActionInput() {
    return this._dnsUdpAuthPassAction;
  }

  // dns_udp_auth_pass_action_list_name - computed: false, optional: true, required: false
  private _dnsUdpAuthPassActionListName?: string; 
  public get dnsUdpAuthPassActionListName() {
    return this.getStringAttribute('dns_udp_auth_pass_action_list_name');
  }
  public set dnsUdpAuthPassActionListName(value: string) {
    this._dnsUdpAuthPassActionListName = value;
  }
  public resetDnsUdpAuthPassActionListName() {
    this._dnsUdpAuthPassActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsUdpAuthPassActionListNameInput() {
    return this._dnsUdpAuthPassActionListName;
  }

  // min_delay - computed: false, optional: true, required: false
  private _minDelay?: number; 
  public get minDelay() {
    return this.getNumberAttribute('min_delay');
  }
  public set minDelay(value: number) {
    this._minDelay = value;
  }
  public resetMinDelay() {
    this._minDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDelayInput() {
    return this._minDelay;
  }

  // min_delay_interval - computed: false, optional: true, required: false
  private _minDelayInterval?: string; 
  public get minDelayInterval() {
    return this.getStringAttribute('min_delay_interval');
  }
  public set minDelayInterval(value: string) {
    this._minDelayInterval = value;
  }
  public resetMinDelayInterval() {
    this._minDelayInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDelayIntervalInput() {
    return this._minDelayInterval;
  }

  // udp_timeout - computed: false, optional: true, required: false
  private _udpTimeout?: number; 
  public get udpTimeout() {
    return this.getNumberAttribute('udp_timeout');
  }
  public set udpTimeout(value: number) {
    this._udpTimeout = value;
  }
  public resetUdpTimeout() {
    this._udpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutInput() {
    return this._udpTimeout;
  }

  // force_tcp_cfg - computed: false, optional: true, required: false
  private _forceTcpCfg = new DdosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfgOutputReference(this, "force_tcp_cfg");
  public get forceTcpCfg() {
    return this._forceTcpCfg;
  }
  public putForceTcpCfg(value: DdosZoneTemplateDnsDnsUdpAuthenticationForceTcpCfg) {
    this._forceTcpCfg.internalValue = value;
  }
  public resetForceTcpCfg() {
    this._forceTcpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTcpCfgInput() {
    return this._forceTcpCfg.internalValue;
  }
}
export interface DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfg {
  /**
  * Limiting rate (Range: 5-8000 for FQDN domain based rate limiting, 5-16000000 for FQDN label count based rate limiting)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_fqdn_rate DdosZoneTemplateDns#dns_fqdn_rate}
  */
  readonly dnsFqdnRate?: number;
  /**
  * FQDN label count (Range: 1-8)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#fqdn_rate_label_count DdosZoneTemplateDns#fqdn_rate_label_count}
  */
  readonly fqdnRateLabelCount?: number;
  /**
  * Suffix count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#fqdn_rate_suffix DdosZoneTemplateDns#fqdn_rate_suffix}
  */
  readonly fqdnRateSuffix?: number;
  /**
  * 'domain-name': Domain Name; 'src-ip': Source IP address; 'label-count': FQDN label count;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#per DdosZoneTemplateDns#per}
  */
  readonly per?: string;
  /**
  * Use both Domain Name and Source IP address for rate-limiting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#per_domain_per_src_ip DdosZoneTemplateDns#per_domain_per_src_ip}
  */
  readonly perDomainPerSrcIp?: number;
}

export function ddosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfgToTerraform(struct?: DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_fqdn_rate: cdktf.numberToTerraform(struct!.dnsFqdnRate),
    fqdn_rate_label_count: cdktf.numberToTerraform(struct!.fqdnRateLabelCount),
    fqdn_rate_suffix: cdktf.numberToTerraform(struct!.fqdnRateSuffix),
    per: cdktf.stringToTerraform(struct!.per),
    per_domain_per_src_ip: cdktf.numberToTerraform(struct!.perDomainPerSrcIp),
  }
}


export function ddosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfgToHclTerraform(struct?: DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_fqdn_rate: {
      value: cdktf.numberToHclTerraform(struct!.dnsFqdnRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_rate_label_count: {
      value: cdktf.numberToHclTerraform(struct!.fqdnRateLabelCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_rate_suffix: {
      value: cdktf.numberToHclTerraform(struct!.fqdnRateSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per: {
      value: cdktf.stringToHclTerraform(struct!.per),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_domain_per_src_ip: {
      value: cdktf.numberToHclTerraform(struct!.perDomainPerSrcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsFqdnRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFqdnRate = this._dnsFqdnRate;
    }
    if (this._fqdnRateLabelCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnRateLabelCount = this._fqdnRateLabelCount;
    }
    if (this._fqdnRateSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnRateSuffix = this._fqdnRateSuffix;
    }
    if (this._per !== undefined) {
      hasAnyValues = true;
      internalValueResult.per = this._per;
    }
    if (this._perDomainPerSrcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.perDomainPerSrcIp = this._perDomainPerSrcIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsFqdnRate = undefined;
      this._fqdnRateLabelCount = undefined;
      this._fqdnRateSuffix = undefined;
      this._per = undefined;
      this._perDomainPerSrcIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsFqdnRate = value.dnsFqdnRate;
      this._fqdnRateLabelCount = value.fqdnRateLabelCount;
      this._fqdnRateSuffix = value.fqdnRateSuffix;
      this._per = value.per;
      this._perDomainPerSrcIp = value.perDomainPerSrcIp;
    }
  }

  // dns_fqdn_rate - computed: false, optional: true, required: false
  private _dnsFqdnRate?: number; 
  public get dnsFqdnRate() {
    return this.getNumberAttribute('dns_fqdn_rate');
  }
  public set dnsFqdnRate(value: number) {
    this._dnsFqdnRate = value;
  }
  public resetDnsFqdnRate() {
    this._dnsFqdnRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFqdnRateInput() {
    return this._dnsFqdnRate;
  }

  // fqdn_rate_label_count - computed: false, optional: true, required: false
  private _fqdnRateLabelCount?: number; 
  public get fqdnRateLabelCount() {
    return this.getNumberAttribute('fqdn_rate_label_count');
  }
  public set fqdnRateLabelCount(value: number) {
    this._fqdnRateLabelCount = value;
  }
  public resetFqdnRateLabelCount() {
    this._fqdnRateLabelCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnRateLabelCountInput() {
    return this._fqdnRateLabelCount;
  }

  // fqdn_rate_suffix - computed: false, optional: true, required: false
  private _fqdnRateSuffix?: number; 
  public get fqdnRateSuffix() {
    return this.getNumberAttribute('fqdn_rate_suffix');
  }
  public set fqdnRateSuffix(value: number) {
    this._fqdnRateSuffix = value;
  }
  public resetFqdnRateSuffix() {
    this._fqdnRateSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnRateSuffixInput() {
    return this._fqdnRateSuffix;
  }

  // per - computed: false, optional: true, required: false
  private _per?: string; 
  public get per() {
    return this.getStringAttribute('per');
  }
  public set per(value: string) {
    this._per = value;
  }
  public resetPer() {
    this._per = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perInput() {
    return this._per;
  }

  // per_domain_per_src_ip - computed: false, optional: true, required: false
  private _perDomainPerSrcIp?: number; 
  public get perDomainPerSrcIp() {
    return this.getNumberAttribute('per_domain_per_src_ip');
  }
  public set perDomainPerSrcIp(value: number) {
    this._perDomainPerSrcIp = value;
  }
  public resetPerDomainPerSrcIp() {
    this._perDomainPerSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perDomainPerSrcIpInput() {
    return this._perDomainPerSrcIp;
  }
}

export class DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfgOutputReference {
    return new DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateDnsDstRateLimitFqdn {
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'reset': Reset client connection; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_fqdn_rate_limit_action DdosZoneTemplateDns#dns_fqdn_rate_limit_action}
  */
  readonly dnsFqdnRateLimitAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_fqdn_rate_limit_action_list_name DdosZoneTemplateDns#dns_fqdn_rate_limit_action_list_name}
  */
  readonly dnsFqdnRateLimitActionListName?: string;
  /**
  * dns_fqdn_rate_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_fqdn_rate_cfg DdosZoneTemplateDns#dns_fqdn_rate_cfg}
  */
  readonly dnsFqdnRateCfg?: DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfg[] | cdktf.IResolvable;
}

export function ddosZoneTemplateDnsDstRateLimitFqdnToTerraform(struct?: DdosZoneTemplateDnsDstRateLimitFqdnOutputReference | DdosZoneTemplateDnsDstRateLimitFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_fqdn_rate_limit_action: cdktf.stringToTerraform(struct!.dnsFqdnRateLimitAction),
    dns_fqdn_rate_limit_action_list_name: cdktf.stringToTerraform(struct!.dnsFqdnRateLimitActionListName),
    dns_fqdn_rate_cfg: cdktf.listMapper(ddosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfgToTerraform, true)(struct!.dnsFqdnRateCfg),
  }
}


export function ddosZoneTemplateDnsDstRateLimitFqdnToHclTerraform(struct?: DdosZoneTemplateDnsDstRateLimitFqdnOutputReference | DdosZoneTemplateDnsDstRateLimitFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_fqdn_rate_limit_action: {
      value: cdktf.stringToHclTerraform(struct!.dnsFqdnRateLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_fqdn_rate_limit_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsFqdnRateLimitActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_fqdn_rate_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfgToHclTerraform, true)(struct!.dnsFqdnRateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDstRateLimitFqdnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsDstRateLimitFqdn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsFqdnRateLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFqdnRateLimitAction = this._dnsFqdnRateLimitAction;
    }
    if (this._dnsFqdnRateLimitActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFqdnRateLimitActionListName = this._dnsFqdnRateLimitActionListName;
    }
    if (this._dnsFqdnRateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFqdnRateCfg = this._dnsFqdnRateCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDstRateLimitFqdn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsFqdnRateLimitAction = undefined;
      this._dnsFqdnRateLimitActionListName = undefined;
      this._dnsFqdnRateCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsFqdnRateLimitAction = value.dnsFqdnRateLimitAction;
      this._dnsFqdnRateLimitActionListName = value.dnsFqdnRateLimitActionListName;
      this._dnsFqdnRateCfg.internalValue = value.dnsFqdnRateCfg;
    }
  }

  // dns_fqdn_rate_limit_action - computed: false, optional: true, required: false
  private _dnsFqdnRateLimitAction?: string; 
  public get dnsFqdnRateLimitAction() {
    return this.getStringAttribute('dns_fqdn_rate_limit_action');
  }
  public set dnsFqdnRateLimitAction(value: string) {
    this._dnsFqdnRateLimitAction = value;
  }
  public resetDnsFqdnRateLimitAction() {
    this._dnsFqdnRateLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFqdnRateLimitActionInput() {
    return this._dnsFqdnRateLimitAction;
  }

  // dns_fqdn_rate_limit_action_list_name - computed: false, optional: true, required: false
  private _dnsFqdnRateLimitActionListName?: string; 
  public get dnsFqdnRateLimitActionListName() {
    return this.getStringAttribute('dns_fqdn_rate_limit_action_list_name');
  }
  public set dnsFqdnRateLimitActionListName(value: string) {
    this._dnsFqdnRateLimitActionListName = value;
  }
  public resetDnsFqdnRateLimitActionListName() {
    this._dnsFqdnRateLimitActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFqdnRateLimitActionListNameInput() {
    return this._dnsFqdnRateLimitActionListName;
  }

  // dns_fqdn_rate_cfg - computed: false, optional: true, required: false
  private _dnsFqdnRateCfg = new DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfgList(this, "dns_fqdn_rate_cfg", false);
  public get dnsFqdnRateCfg() {
    return this._dnsFqdnRateCfg;
  }
  public putDnsFqdnRateCfg(value: DdosZoneTemplateDnsDstRateLimitFqdnDnsFqdnRateCfg[] | cdktf.IResolvable) {
    this._dnsFqdnRateCfg.internalValue = value;
  }
  public resetDnsFqdnRateCfg() {
    this._dnsFqdnRateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFqdnRateCfgInput() {
    return this._dnsFqdnRateCfg.internalValue;
  }
}
export interface DdosZoneTemplateDnsDstRateLimitRequestTypeACfg {
  /**
  * Address record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#a DdosZoneTemplateDns#a}
  */
  readonly a?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_a_rate DdosZoneTemplateDns#dns_a_rate}
  */
  readonly dnsARate?: number;
}

export function ddosZoneTemplateDnsDstRateLimitRequestTypeACfgToTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeACfgOutputReference | DdosZoneTemplateDnsDstRateLimitRequestTypeACfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a: cdktf.numberToTerraform(struct!.a),
    dns_a_rate: cdktf.numberToTerraform(struct!.dnsARate),
  }
}


export function ddosZoneTemplateDnsDstRateLimitRequestTypeACfgToHclTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeACfgOutputReference | DdosZoneTemplateDnsDstRateLimitRequestTypeACfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a: {
      value: cdktf.numberToHclTerraform(struct!.a),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_a_rate: {
      value: cdktf.numberToHclTerraform(struct!.dnsARate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDstRateLimitRequestTypeACfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsDstRateLimitRequestTypeACfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a !== undefined) {
      hasAnyValues = true;
      internalValueResult.a = this._a;
    }
    if (this._dnsARate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARate = this._dnsARate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDstRateLimitRequestTypeACfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._a = undefined;
      this._dnsARate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._a = value.a;
      this._dnsARate = value.dnsARate;
    }
  }

  // a - computed: false, optional: true, required: false
  private _a?: number; 
  public get a() {
    return this.getNumberAttribute('a');
  }
  public set a(value: number) {
    this._a = value;
  }
  public resetA() {
    this._a = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aInput() {
    return this._a;
  }

  // dns_a_rate - computed: false, optional: true, required: false
  private _dnsARate?: number; 
  public get dnsARate() {
    return this.getNumberAttribute('dns_a_rate');
  }
  public set dnsARate(value: number) {
    this._dnsARate = value;
  }
  public resetDnsARate() {
    this._dnsARate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARateInput() {
    return this._dnsARate;
  }
}
export interface DdosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfg {
  /**
  * IPv6 address record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#aaaa DdosZoneTemplateDns#aaaa}
  */
  readonly aaaa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_aaaa_rate DdosZoneTemplateDns#dns_aaaa_rate}
  */
  readonly dnsAaaaRate?: number;
}

export function ddosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfgToTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfgOutputReference | DdosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aaaa: cdktf.numberToTerraform(struct!.aaaa),
    dns_aaaa_rate: cdktf.numberToTerraform(struct!.dnsAaaaRate),
  }
}


export function ddosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfgToHclTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfgOutputReference | DdosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aaaa: {
      value: cdktf.numberToHclTerraform(struct!.aaaa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_aaaa_rate: {
      value: cdktf.numberToHclTerraform(struct!.dnsAaaaRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aaaa !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaa = this._aaaa;
    }
    if (this._dnsAaaaRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAaaaRate = this._dnsAaaaRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aaaa = undefined;
      this._dnsAaaaRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aaaa = value.aaaa;
      this._dnsAaaaRate = value.dnsAaaaRate;
    }
  }

  // aaaa - computed: false, optional: true, required: false
  private _aaaa?: number; 
  public get aaaa() {
    return this.getNumberAttribute('aaaa');
  }
  public set aaaa(value: number) {
    this._aaaa = value;
  }
  public resetAaaa() {
    this._aaaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaaInput() {
    return this._aaaa;
  }

  // dns_aaaa_rate - computed: false, optional: true, required: false
  private _dnsAaaaRate?: number; 
  public get dnsAaaaRate() {
    return this.getNumberAttribute('dns_aaaa_rate');
  }
  public set dnsAaaaRate(value: number) {
    this._dnsAaaaRate = value;
  }
  public resetDnsAaaaRate() {
    this._dnsAaaaRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAaaaRateInput() {
    return this._dnsAaaaRate;
  }
}
export interface DdosZoneTemplateDnsDstRateLimitRequestTypeCnameCfg {
  /**
  * Canonical name record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#cname DdosZoneTemplateDns#cname}
  */
  readonly cname?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_cname_rate DdosZoneTemplateDns#dns_cname_rate}
  */
  readonly dnsCnameRate?: number;
}

export function ddosZoneTemplateDnsDstRateLimitRequestTypeCnameCfgToTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeCnameCfgOutputReference | DdosZoneTemplateDnsDstRateLimitRequestTypeCnameCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cname: cdktf.numberToTerraform(struct!.cname),
    dns_cname_rate: cdktf.numberToTerraform(struct!.dnsCnameRate),
  }
}


export function ddosZoneTemplateDnsDstRateLimitRequestTypeCnameCfgToHclTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeCnameCfgOutputReference | DdosZoneTemplateDnsDstRateLimitRequestTypeCnameCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cname: {
      value: cdktf.numberToHclTerraform(struct!.cname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_cname_rate: {
      value: cdktf.numberToHclTerraform(struct!.dnsCnameRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDstRateLimitRequestTypeCnameCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsDstRateLimitRequestTypeCnameCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cname !== undefined) {
      hasAnyValues = true;
      internalValueResult.cname = this._cname;
    }
    if (this._dnsCnameRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCnameRate = this._dnsCnameRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDstRateLimitRequestTypeCnameCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cname = undefined;
      this._dnsCnameRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cname = value.cname;
      this._dnsCnameRate = value.dnsCnameRate;
    }
  }

  // cname - computed: false, optional: true, required: false
  private _cname?: number; 
  public get cname() {
    return this.getNumberAttribute('cname');
  }
  public set cname(value: number) {
    this._cname = value;
  }
  public resetCname() {
    this._cname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
  }

  // dns_cname_rate - computed: false, optional: true, required: false
  private _dnsCnameRate?: number; 
  public get dnsCnameRate() {
    return this.getNumberAttribute('dns_cname_rate');
  }
  public set dnsCnameRate(value: number) {
    this._dnsCnameRate = value;
  }
  public resetDnsCnameRate() {
    this._dnsCnameRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCnameRateInput() {
    return this._dnsCnameRate;
  }
}
export interface DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfg {
  /**
  * Other type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_request_type DdosZoneTemplateDns#dns_request_type}
  */
  readonly dnsRequestType?: number;
  /**
  * request rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_request_type_rate DdosZoneTemplateDns#dns_request_type_rate}
  */
  readonly dnsRequestTypeRate?: number;
}

export function ddosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfgToTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_request_type: cdktf.numberToTerraform(struct!.dnsRequestType),
    dns_request_type_rate: cdktf.numberToTerraform(struct!.dnsRequestTypeRate),
  }
}


export function ddosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfgToHclTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_request_type: {
      value: cdktf.numberToHclTerraform(struct!.dnsRequestType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_request_type_rate: {
      value: cdktf.numberToHclTerraform(struct!.dnsRequestTypeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsRequestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRequestType = this._dnsRequestType;
    }
    if (this._dnsRequestTypeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRequestTypeRate = this._dnsRequestTypeRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsRequestType = undefined;
      this._dnsRequestTypeRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsRequestType = value.dnsRequestType;
      this._dnsRequestTypeRate = value.dnsRequestTypeRate;
    }
  }

  // dns_request_type - computed: false, optional: true, required: false
  private _dnsRequestType?: number; 
  public get dnsRequestType() {
    return this.getNumberAttribute('dns_request_type');
  }
  public set dnsRequestType(value: number) {
    this._dnsRequestType = value;
  }
  public resetDnsRequestType() {
    this._dnsRequestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRequestTypeInput() {
    return this._dnsRequestType;
  }

  // dns_request_type_rate - computed: false, optional: true, required: false
  private _dnsRequestTypeRate?: number; 
  public get dnsRequestTypeRate() {
    return this.getNumberAttribute('dns_request_type_rate');
  }
  public set dnsRequestTypeRate(value: number) {
    this._dnsRequestTypeRate = value;
  }
  public resetDnsRequestTypeRate() {
    this._dnsRequestTypeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRequestTypeRateInput() {
    return this._dnsRequestTypeRate;
  }
}

export class DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfgOutputReference {
    return new DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateDnsDstRateLimitRequestTypeMxCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_mx_rate DdosZoneTemplateDns#dns_mx_rate}
  */
  readonly dnsMxRate?: number;
  /**
  * Mail exchange record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#mx DdosZoneTemplateDns#mx}
  */
  readonly mx?: number;
}

export function ddosZoneTemplateDnsDstRateLimitRequestTypeMxCfgToTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeMxCfgOutputReference | DdosZoneTemplateDnsDstRateLimitRequestTypeMxCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_mx_rate: cdktf.numberToTerraform(struct!.dnsMxRate),
    mx: cdktf.numberToTerraform(struct!.mx),
  }
}


export function ddosZoneTemplateDnsDstRateLimitRequestTypeMxCfgToHclTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeMxCfgOutputReference | DdosZoneTemplateDnsDstRateLimitRequestTypeMxCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_mx_rate: {
      value: cdktf.numberToHclTerraform(struct!.dnsMxRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mx: {
      value: cdktf.numberToHclTerraform(struct!.mx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDstRateLimitRequestTypeMxCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsDstRateLimitRequestTypeMxCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsMxRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMxRate = this._dnsMxRate;
    }
    if (this._mx !== undefined) {
      hasAnyValues = true;
      internalValueResult.mx = this._mx;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDstRateLimitRequestTypeMxCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsMxRate = undefined;
      this._mx = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsMxRate = value.dnsMxRate;
      this._mx = value.mx;
    }
  }

  // dns_mx_rate - computed: false, optional: true, required: false
  private _dnsMxRate?: number; 
  public get dnsMxRate() {
    return this.getNumberAttribute('dns_mx_rate');
  }
  public set dnsMxRate(value: number) {
    this._dnsMxRate = value;
  }
  public resetDnsMxRate() {
    this._dnsMxRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMxRateInput() {
    return this._dnsMxRate;
  }

  // mx - computed: false, optional: true, required: false
  private _mx?: number; 
  public get mx() {
    return this.getNumberAttribute('mx');
  }
  public set mx(value: number) {
    this._mx = value;
  }
  public resetMx() {
    this._mx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxInput() {
    return this._mx;
  }
}
export interface DdosZoneTemplateDnsDstRateLimitRequestTypeNsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_ns_rate DdosZoneTemplateDns#dns_ns_rate}
  */
  readonly dnsNsRate?: number;
  /**
  * Name server record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#ns DdosZoneTemplateDns#ns}
  */
  readonly ns?: number;
}

export function ddosZoneTemplateDnsDstRateLimitRequestTypeNsCfgToTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeNsCfgOutputReference | DdosZoneTemplateDnsDstRateLimitRequestTypeNsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ns_rate: cdktf.numberToTerraform(struct!.dnsNsRate),
    ns: cdktf.numberToTerraform(struct!.ns),
  }
}


export function ddosZoneTemplateDnsDstRateLimitRequestTypeNsCfgToHclTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeNsCfgOutputReference | DdosZoneTemplateDnsDstRateLimitRequestTypeNsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_ns_rate: {
      value: cdktf.numberToHclTerraform(struct!.dnsNsRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ns: {
      value: cdktf.numberToHclTerraform(struct!.ns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDstRateLimitRequestTypeNsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsDstRateLimitRequestTypeNsCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsNsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNsRate = this._dnsNsRate;
    }
    if (this._ns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ns = this._ns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDstRateLimitRequestTypeNsCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsNsRate = undefined;
      this._ns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsNsRate = value.dnsNsRate;
      this._ns = value.ns;
    }
  }

  // dns_ns_rate - computed: false, optional: true, required: false
  private _dnsNsRate?: number; 
  public get dnsNsRate() {
    return this.getNumberAttribute('dns_ns_rate');
  }
  public set dnsNsRate(value: number) {
    this._dnsNsRate = value;
  }
  public resetDnsNsRate() {
    this._dnsNsRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNsRateInput() {
    return this._dnsNsRate;
  }

  // ns - computed: false, optional: true, required: false
  private _ns?: number; 
  public get ns() {
    return this.getNumberAttribute('ns');
  }
  public set ns(value: number) {
    this._ns = value;
  }
  public resetNs() {
    this._ns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsInput() {
    return this._ns;
  }
}
export interface DdosZoneTemplateDnsDstRateLimitRequestTypeSrvCfg {
  /**
  * DNS request rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_srv_rate DdosZoneTemplateDns#dns_srv_rate}
  */
  readonly dnsSrvRate?: number;
  /**
  * Service locator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#srv DdosZoneTemplateDns#srv}
  */
  readonly srv?: number;
}

export function ddosZoneTemplateDnsDstRateLimitRequestTypeSrvCfgToTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeSrvCfgOutputReference | DdosZoneTemplateDnsDstRateLimitRequestTypeSrvCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_srv_rate: cdktf.numberToTerraform(struct!.dnsSrvRate),
    srv: cdktf.numberToTerraform(struct!.srv),
  }
}


export function ddosZoneTemplateDnsDstRateLimitRequestTypeSrvCfgToHclTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeSrvCfgOutputReference | DdosZoneTemplateDnsDstRateLimitRequestTypeSrvCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_srv_rate: {
      value: cdktf.numberToHclTerraform(struct!.dnsSrvRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    srv: {
      value: cdktf.numberToHclTerraform(struct!.srv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDstRateLimitRequestTypeSrvCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsDstRateLimitRequestTypeSrvCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsSrvRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSrvRate = this._dnsSrvRate;
    }
    if (this._srv !== undefined) {
      hasAnyValues = true;
      internalValueResult.srv = this._srv;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDstRateLimitRequestTypeSrvCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsSrvRate = undefined;
      this._srv = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsSrvRate = value.dnsSrvRate;
      this._srv = value.srv;
    }
  }

  // dns_srv_rate - computed: false, optional: true, required: false
  private _dnsSrvRate?: number; 
  public get dnsSrvRate() {
    return this.getNumberAttribute('dns_srv_rate');
  }
  public set dnsSrvRate(value: number) {
    this._dnsSrvRate = value;
  }
  public resetDnsSrvRate() {
    this._dnsSrvRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSrvRateInput() {
    return this._dnsSrvRate;
  }

  // srv - computed: false, optional: true, required: false
  private _srv?: number; 
  public get srv() {
    return this.getNumberAttribute('srv');
  }
  public set srv(value: number) {
    this._srv = value;
  }
  public resetSrv() {
    this._srv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvInput() {
    return this._srv;
  }
}
export interface DdosZoneTemplateDnsDstRateLimitRequestType {
  /**
  * a_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#a_cfg DdosZoneTemplateDns#a_cfg}
  */
  readonly aCfg?: DdosZoneTemplateDnsDstRateLimitRequestTypeACfg;
  /**
  * aaaa_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#aaaa_cfg DdosZoneTemplateDns#aaaa_cfg}
  */
  readonly aaaaCfg?: DdosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfg;
  /**
  * cname_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#cname_cfg DdosZoneTemplateDns#cname_cfg}
  */
  readonly cnameCfg?: DdosZoneTemplateDnsDstRateLimitRequestTypeCnameCfg;
  /**
  * dns_type_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_type_cfg DdosZoneTemplateDns#dns_type_cfg}
  */
  readonly dnsTypeCfg?: DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfg[] | cdktf.IResolvable;
  /**
  * mx_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#mx_cfg DdosZoneTemplateDns#mx_cfg}
  */
  readonly mxCfg?: DdosZoneTemplateDnsDstRateLimitRequestTypeMxCfg;
  /**
  * ns_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#ns_cfg DdosZoneTemplateDns#ns_cfg}
  */
  readonly nsCfg?: DdosZoneTemplateDnsDstRateLimitRequestTypeNsCfg;
  /**
  * srv_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#srv_cfg DdosZoneTemplateDns#srv_cfg}
  */
  readonly srvCfg?: DdosZoneTemplateDnsDstRateLimitRequestTypeSrvCfg;
}

export function ddosZoneTemplateDnsDstRateLimitRequestTypeToTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeOutputReference | DdosZoneTemplateDnsDstRateLimitRequestType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a_cfg: ddosZoneTemplateDnsDstRateLimitRequestTypeACfgToTerraform(struct!.aCfg),
    aaaa_cfg: ddosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfgToTerraform(struct!.aaaaCfg),
    cname_cfg: ddosZoneTemplateDnsDstRateLimitRequestTypeCnameCfgToTerraform(struct!.cnameCfg),
    dns_type_cfg: cdktf.listMapper(ddosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfgToTerraform, true)(struct!.dnsTypeCfg),
    mx_cfg: ddosZoneTemplateDnsDstRateLimitRequestTypeMxCfgToTerraform(struct!.mxCfg),
    ns_cfg: ddosZoneTemplateDnsDstRateLimitRequestTypeNsCfgToTerraform(struct!.nsCfg),
    srv_cfg: ddosZoneTemplateDnsDstRateLimitRequestTypeSrvCfgToTerraform(struct!.srvCfg),
  }
}


export function ddosZoneTemplateDnsDstRateLimitRequestTypeToHclTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestTypeOutputReference | DdosZoneTemplateDnsDstRateLimitRequestType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a_cfg: {
      value: ddosZoneTemplateDnsDstRateLimitRequestTypeACfgToHclTerraform(struct!.aCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsDstRateLimitRequestTypeACfgList",
    },
    aaaa_cfg: {
      value: ddosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfgToHclTerraform(struct!.aaaaCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfgList",
    },
    cname_cfg: {
      value: ddosZoneTemplateDnsDstRateLimitRequestTypeCnameCfgToHclTerraform(struct!.cnameCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsDstRateLimitRequestTypeCnameCfgList",
    },
    dns_type_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfgToHclTerraform, true)(struct!.dnsTypeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfgList",
    },
    mx_cfg: {
      value: ddosZoneTemplateDnsDstRateLimitRequestTypeMxCfgToHclTerraform(struct!.mxCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsDstRateLimitRequestTypeMxCfgList",
    },
    ns_cfg: {
      value: ddosZoneTemplateDnsDstRateLimitRequestTypeNsCfgToHclTerraform(struct!.nsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsDstRateLimitRequestTypeNsCfgList",
    },
    srv_cfg: {
      value: ddosZoneTemplateDnsDstRateLimitRequestTypeSrvCfgToHclTerraform(struct!.srvCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsDstRateLimitRequestTypeSrvCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDstRateLimitRequestTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsDstRateLimitRequestType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aCfg = this._aCfg?.internalValue;
    }
    if (this._aaaaCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaaCfg = this._aaaaCfg?.internalValue;
    }
    if (this._cnameCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameCfg = this._cnameCfg?.internalValue;
    }
    if (this._dnsTypeCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTypeCfg = this._dnsTypeCfg?.internalValue;
    }
    if (this._mxCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxCfg = this._mxCfg?.internalValue;
    }
    if (this._nsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsCfg = this._nsCfg?.internalValue;
    }
    if (this._srvCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvCfg = this._srvCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDstRateLimitRequestType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aCfg.internalValue = undefined;
      this._aaaaCfg.internalValue = undefined;
      this._cnameCfg.internalValue = undefined;
      this._dnsTypeCfg.internalValue = undefined;
      this._mxCfg.internalValue = undefined;
      this._nsCfg.internalValue = undefined;
      this._srvCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aCfg.internalValue = value.aCfg;
      this._aaaaCfg.internalValue = value.aaaaCfg;
      this._cnameCfg.internalValue = value.cnameCfg;
      this._dnsTypeCfg.internalValue = value.dnsTypeCfg;
      this._mxCfg.internalValue = value.mxCfg;
      this._nsCfg.internalValue = value.nsCfg;
      this._srvCfg.internalValue = value.srvCfg;
    }
  }

  // a_cfg - computed: false, optional: true, required: false
  private _aCfg = new DdosZoneTemplateDnsDstRateLimitRequestTypeACfgOutputReference(this, "a_cfg");
  public get aCfg() {
    return this._aCfg;
  }
  public putACfg(value: DdosZoneTemplateDnsDstRateLimitRequestTypeACfg) {
    this._aCfg.internalValue = value;
  }
  public resetACfg() {
    this._aCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aCfgInput() {
    return this._aCfg.internalValue;
  }

  // aaaa_cfg - computed: false, optional: true, required: false
  private _aaaaCfg = new DdosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfgOutputReference(this, "aaaa_cfg");
  public get aaaaCfg() {
    return this._aaaaCfg;
  }
  public putAaaaCfg(value: DdosZoneTemplateDnsDstRateLimitRequestTypeAaaaCfg) {
    this._aaaaCfg.internalValue = value;
  }
  public resetAaaaCfg() {
    this._aaaaCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaaCfgInput() {
    return this._aaaaCfg.internalValue;
  }

  // cname_cfg - computed: false, optional: true, required: false
  private _cnameCfg = new DdosZoneTemplateDnsDstRateLimitRequestTypeCnameCfgOutputReference(this, "cname_cfg");
  public get cnameCfg() {
    return this._cnameCfg;
  }
  public putCnameCfg(value: DdosZoneTemplateDnsDstRateLimitRequestTypeCnameCfg) {
    this._cnameCfg.internalValue = value;
  }
  public resetCnameCfg() {
    this._cnameCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameCfgInput() {
    return this._cnameCfg.internalValue;
  }

  // dns_type_cfg - computed: false, optional: true, required: false
  private _dnsTypeCfg = new DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfgList(this, "dns_type_cfg", false);
  public get dnsTypeCfg() {
    return this._dnsTypeCfg;
  }
  public putDnsTypeCfg(value: DdosZoneTemplateDnsDstRateLimitRequestTypeDnsTypeCfg[] | cdktf.IResolvable) {
    this._dnsTypeCfg.internalValue = value;
  }
  public resetDnsTypeCfg() {
    this._dnsTypeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTypeCfgInput() {
    return this._dnsTypeCfg.internalValue;
  }

  // mx_cfg - computed: false, optional: true, required: false
  private _mxCfg = new DdosZoneTemplateDnsDstRateLimitRequestTypeMxCfgOutputReference(this, "mx_cfg");
  public get mxCfg() {
    return this._mxCfg;
  }
  public putMxCfg(value: DdosZoneTemplateDnsDstRateLimitRequestTypeMxCfg) {
    this._mxCfg.internalValue = value;
  }
  public resetMxCfg() {
    this._mxCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxCfgInput() {
    return this._mxCfg.internalValue;
  }

  // ns_cfg - computed: false, optional: true, required: false
  private _nsCfg = new DdosZoneTemplateDnsDstRateLimitRequestTypeNsCfgOutputReference(this, "ns_cfg");
  public get nsCfg() {
    return this._nsCfg;
  }
  public putNsCfg(value: DdosZoneTemplateDnsDstRateLimitRequestTypeNsCfg) {
    this._nsCfg.internalValue = value;
  }
  public resetNsCfg() {
    this._nsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsCfgInput() {
    return this._nsCfg.internalValue;
  }

  // srv_cfg - computed: false, optional: true, required: false
  private _srvCfg = new DdosZoneTemplateDnsDstRateLimitRequestTypeSrvCfgOutputReference(this, "srv_cfg");
  public get srvCfg() {
    return this._srvCfg;
  }
  public putSrvCfg(value: DdosZoneTemplateDnsDstRateLimitRequestTypeSrvCfg) {
    this._srvCfg.internalValue = value;
  }
  public resetSrvCfg() {
    this._srvCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvCfgInput() {
    return this._srvCfg.internalValue;
  }
}
export interface DdosZoneTemplateDnsDstRateLimitRequest {
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'reset': Reset client connection; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dst_dns_request_rate_limit_action DdosZoneTemplateDns#dst_dns_request_rate_limit_action}
  */
  readonly dstDnsRequestRateLimitAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dst_dns_request_rate_limit_action_list_name DdosZoneTemplateDns#dst_dns_request_rate_limit_action_list_name}
  */
  readonly dstDnsRequestRateLimitActionListName?: string;
  /**
  * type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#type DdosZoneTemplateDns#type}
  */
  readonly type?: DdosZoneTemplateDnsDstRateLimitRequestType;
}

export function ddosZoneTemplateDnsDstRateLimitRequestToTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestOutputReference | DdosZoneTemplateDnsDstRateLimitRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_dns_request_rate_limit_action: cdktf.stringToTerraform(struct!.dstDnsRequestRateLimitAction),
    dst_dns_request_rate_limit_action_list_name: cdktf.stringToTerraform(struct!.dstDnsRequestRateLimitActionListName),
    type: ddosZoneTemplateDnsDstRateLimitRequestTypeToTerraform(struct!.type),
  }
}


export function ddosZoneTemplateDnsDstRateLimitRequestToHclTerraform(struct?: DdosZoneTemplateDnsDstRateLimitRequestOutputReference | DdosZoneTemplateDnsDstRateLimitRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_dns_request_rate_limit_action: {
      value: cdktf.stringToHclTerraform(struct!.dstDnsRequestRateLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_dns_request_rate_limit_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dstDnsRequestRateLimitActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: ddosZoneTemplateDnsDstRateLimitRequestTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsDstRateLimitRequestTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDstRateLimitRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsDstRateLimitRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstDnsRequestRateLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstDnsRequestRateLimitAction = this._dstDnsRequestRateLimitAction;
    }
    if (this._dstDnsRequestRateLimitActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstDnsRequestRateLimitActionListName = this._dstDnsRequestRateLimitActionListName;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDstRateLimitRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstDnsRequestRateLimitAction = undefined;
      this._dstDnsRequestRateLimitActionListName = undefined;
      this._type.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstDnsRequestRateLimitAction = value.dstDnsRequestRateLimitAction;
      this._dstDnsRequestRateLimitActionListName = value.dstDnsRequestRateLimitActionListName;
      this._type.internalValue = value.type;
    }
  }

  // dst_dns_request_rate_limit_action - computed: false, optional: true, required: false
  private _dstDnsRequestRateLimitAction?: string; 
  public get dstDnsRequestRateLimitAction() {
    return this.getStringAttribute('dst_dns_request_rate_limit_action');
  }
  public set dstDnsRequestRateLimitAction(value: string) {
    this._dstDnsRequestRateLimitAction = value;
  }
  public resetDstDnsRequestRateLimitAction() {
    this._dstDnsRequestRateLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstDnsRequestRateLimitActionInput() {
    return this._dstDnsRequestRateLimitAction;
  }

  // dst_dns_request_rate_limit_action_list_name - computed: false, optional: true, required: false
  private _dstDnsRequestRateLimitActionListName?: string; 
  public get dstDnsRequestRateLimitActionListName() {
    return this.getStringAttribute('dst_dns_request_rate_limit_action_list_name');
  }
  public set dstDnsRequestRateLimitActionListName(value: string) {
    this._dstDnsRequestRateLimitActionListName = value;
  }
  public resetDstDnsRequestRateLimitActionListName() {
    this._dstDnsRequestRateLimitActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstDnsRequestRateLimitActionListNameInput() {
    return this._dstDnsRequestRateLimitActionListName;
  }

  // type - computed: false, optional: true, required: false
  private _type = new DdosZoneTemplateDnsDstRateLimitRequestTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DdosZoneTemplateDnsDstRateLimitRequestType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}
export interface DdosZoneTemplateDnsDstRateLimit {
  /**
  * 'drop': Drop the query (default); 'tunnel-encap-packet': Encapsulate the query and send on a tunnel;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#domain_group_rate_exceed_action DdosZoneTemplateDns#domain_group_rate_exceed_action}
  */
  readonly domainGroupRateExceedAction?: string;
  /**
  * Enable per service domain rate checking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#domain_group_rate_per_service DdosZoneTemplateDns#domain_group_rate_per_service}
  */
  readonly domainGroupRatePerService?: number;
  /**
  * DDOS encap template to sepcify the tunnel endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#encap_template DdosZoneTemplateDns#encap_template}
  */
  readonly encapTemplate?: string;
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#fqdn DdosZoneTemplateDns#fqdn}
  */
  readonly fqdn?: DdosZoneTemplateDnsDstRateLimitFqdn;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#request DdosZoneTemplateDns#request}
  */
  readonly request?: DdosZoneTemplateDnsDstRateLimitRequest;
}

export function ddosZoneTemplateDnsDstRateLimitToTerraform(struct?: DdosZoneTemplateDnsDstRateLimitOutputReference | DdosZoneTemplateDnsDstRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_group_rate_exceed_action: cdktf.stringToTerraform(struct!.domainGroupRateExceedAction),
    domain_group_rate_per_service: cdktf.numberToTerraform(struct!.domainGroupRatePerService),
    encap_template: cdktf.stringToTerraform(struct!.encapTemplate),
    fqdn: ddosZoneTemplateDnsDstRateLimitFqdnToTerraform(struct!.fqdn),
    request: ddosZoneTemplateDnsDstRateLimitRequestToTerraform(struct!.request),
  }
}


export function ddosZoneTemplateDnsDstRateLimitToHclTerraform(struct?: DdosZoneTemplateDnsDstRateLimitOutputReference | DdosZoneTemplateDnsDstRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_group_rate_exceed_action: {
      value: cdktf.stringToHclTerraform(struct!.domainGroupRateExceedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_group_rate_per_service: {
      value: cdktf.numberToHclTerraform(struct!.domainGroupRatePerService),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encap_template: {
      value: cdktf.stringToHclTerraform(struct!.encapTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: ddosZoneTemplateDnsDstRateLimitFqdnToHclTerraform(struct!.fqdn),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsDstRateLimitFqdnList",
    },
    request: {
      value: ddosZoneTemplateDnsDstRateLimitRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsDstRateLimitRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDstRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsDstRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainGroupRateExceedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainGroupRateExceedAction = this._domainGroupRateExceedAction;
    }
    if (this._domainGroupRatePerService !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainGroupRatePerService = this._domainGroupRatePerService;
    }
    if (this._encapTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapTemplate = this._encapTemplate;
    }
    if (this._fqdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn?.internalValue;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDstRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainGroupRateExceedAction = undefined;
      this._domainGroupRatePerService = undefined;
      this._encapTemplate = undefined;
      this._fqdn.internalValue = undefined;
      this._request.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainGroupRateExceedAction = value.domainGroupRateExceedAction;
      this._domainGroupRatePerService = value.domainGroupRatePerService;
      this._encapTemplate = value.encapTemplate;
      this._fqdn.internalValue = value.fqdn;
      this._request.internalValue = value.request;
    }
  }

  // domain_group_rate_exceed_action - computed: false, optional: true, required: false
  private _domainGroupRateExceedAction?: string; 
  public get domainGroupRateExceedAction() {
    return this.getStringAttribute('domain_group_rate_exceed_action');
  }
  public set domainGroupRateExceedAction(value: string) {
    this._domainGroupRateExceedAction = value;
  }
  public resetDomainGroupRateExceedAction() {
    this._domainGroupRateExceedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupRateExceedActionInput() {
    return this._domainGroupRateExceedAction;
  }

  // domain_group_rate_per_service - computed: false, optional: true, required: false
  private _domainGroupRatePerService?: number; 
  public get domainGroupRatePerService() {
    return this.getNumberAttribute('domain_group_rate_per_service');
  }
  public set domainGroupRatePerService(value: number) {
    this._domainGroupRatePerService = value;
  }
  public resetDomainGroupRatePerService() {
    this._domainGroupRatePerService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupRatePerServiceInput() {
    return this._domainGroupRatePerService;
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

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new DdosZoneTemplateDnsDstRateLimitFqdnOutputReference(this, "fqdn");
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: DdosZoneTemplateDnsDstRateLimitFqdn) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // request - computed: false, optional: true, required: false
  private _request = new DdosZoneTemplateDnsDstRateLimitRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DdosZoneTemplateDnsDstRateLimitRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }
}
export interface DdosZoneTemplateDnsDst {
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#rate_limit DdosZoneTemplateDns#rate_limit}
  */
  readonly rateLimit?: DdosZoneTemplateDnsDstRateLimit;
}

export function ddosZoneTemplateDnsDstToTerraform(struct?: DdosZoneTemplateDnsDstOutputReference | DdosZoneTemplateDnsDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limit: ddosZoneTemplateDnsDstRateLimitToTerraform(struct!.rateLimit),
  }
}


export function ddosZoneTemplateDnsDstToHclTerraform(struct?: DdosZoneTemplateDnsDstOutputReference | DdosZoneTemplateDnsDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limit: {
      value: ddosZoneTemplateDnsDstRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsDstRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsDstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsDst | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsDst | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateLimit.internalValue = value.rateLimit;
    }
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new DdosZoneTemplateDnsDstRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DdosZoneTemplateDnsDstRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }
}
export interface DdosZoneTemplateDnsFqdnLabelCountCfg {
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'reset': Send reset to client;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#fqdn_label_count_action DdosZoneTemplateDns#fqdn_label_count_action}
  */
  readonly fqdnLabelCountAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#fqdn_label_count_action_list_name DdosZoneTemplateDns#fqdn_label_count_action_list_name}
  */
  readonly fqdnLabelCountActionListName?: string;
  /**
  * Maximum number of FQDN labels per FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#label_count DdosZoneTemplateDns#label_count}
  */
  readonly labelCount?: number;
}

export function ddosZoneTemplateDnsFqdnLabelCountCfgToTerraform(struct?: DdosZoneTemplateDnsFqdnLabelCountCfgOutputReference | DdosZoneTemplateDnsFqdnLabelCountCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn_label_count_action: cdktf.stringToTerraform(struct!.fqdnLabelCountAction),
    fqdn_label_count_action_list_name: cdktf.stringToTerraform(struct!.fqdnLabelCountActionListName),
    label_count: cdktf.numberToTerraform(struct!.labelCount),
  }
}


export function ddosZoneTemplateDnsFqdnLabelCountCfgToHclTerraform(struct?: DdosZoneTemplateDnsFqdnLabelCountCfgOutputReference | DdosZoneTemplateDnsFqdnLabelCountCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn_label_count_action: {
      value: cdktf.stringToHclTerraform(struct!.fqdnLabelCountAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn_label_count_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.fqdnLabelCountActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_count: {
      value: cdktf.numberToHclTerraform(struct!.labelCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsFqdnLabelCountCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsFqdnLabelCountCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdnLabelCountAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnLabelCountAction = this._fqdnLabelCountAction;
    }
    if (this._fqdnLabelCountActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnLabelCountActionListName = this._fqdnLabelCountActionListName;
    }
    if (this._labelCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelCount = this._labelCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsFqdnLabelCountCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fqdnLabelCountAction = undefined;
      this._fqdnLabelCountActionListName = undefined;
      this._labelCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fqdnLabelCountAction = value.fqdnLabelCountAction;
      this._fqdnLabelCountActionListName = value.fqdnLabelCountActionListName;
      this._labelCount = value.labelCount;
    }
  }

  // fqdn_label_count_action - computed: false, optional: true, required: false
  private _fqdnLabelCountAction?: string; 
  public get fqdnLabelCountAction() {
    return this.getStringAttribute('fqdn_label_count_action');
  }
  public set fqdnLabelCountAction(value: string) {
    this._fqdnLabelCountAction = value;
  }
  public resetFqdnLabelCountAction() {
    this._fqdnLabelCountAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLabelCountActionInput() {
    return this._fqdnLabelCountAction;
  }

  // fqdn_label_count_action_list_name - computed: false, optional: true, required: false
  private _fqdnLabelCountActionListName?: string; 
  public get fqdnLabelCountActionListName() {
    return this.getStringAttribute('fqdn_label_count_action_list_name');
  }
  public set fqdnLabelCountActionListName(value: string) {
    this._fqdnLabelCountActionListName = value;
  }
  public resetFqdnLabelCountActionListName() {
    this._fqdnLabelCountActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLabelCountActionListNameInput() {
    return this._fqdnLabelCountActionListName;
  }

  // label_count - computed: false, optional: true, required: false
  private _labelCount?: number; 
  public get labelCount() {
    return this.getNumberAttribute('label_count');
  }
  public set labelCount(value: number) {
    this._labelCount = value;
  }
  public resetLabelCount() {
    this._labelCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelCountInput() {
    return this._labelCount;
  }
}
export interface DdosZoneTemplateDnsFqdnLabelLenCfg {
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#fqdn_label_length_action DdosZoneTemplateDns#fqdn_label_length_action}
  */
  readonly fqdnLabelLengthAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#fqdn_label_length_action_list_name DdosZoneTemplateDns#fqdn_label_length_action_list_name}
  */
  readonly fqdnLabelLengthActionListName?: string;
  /**
  * Number of suffixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#fqdn_label_suffix DdosZoneTemplateDns#fqdn_label_suffix}
  */
  readonly fqdnLabelSuffix?: number;
  /**
  * Maximum length of FQDN label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#label_length DdosZoneTemplateDns#label_length}
  */
  readonly labelLength?: number;
}

export function ddosZoneTemplateDnsFqdnLabelLenCfgToTerraform(struct?: DdosZoneTemplateDnsFqdnLabelLenCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn_label_length_action: cdktf.stringToTerraform(struct!.fqdnLabelLengthAction),
    fqdn_label_length_action_list_name: cdktf.stringToTerraform(struct!.fqdnLabelLengthActionListName),
    fqdn_label_suffix: cdktf.numberToTerraform(struct!.fqdnLabelSuffix),
    label_length: cdktf.numberToTerraform(struct!.labelLength),
  }
}


export function ddosZoneTemplateDnsFqdnLabelLenCfgToHclTerraform(struct?: DdosZoneTemplateDnsFqdnLabelLenCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn_label_length_action: {
      value: cdktf.stringToHclTerraform(struct!.fqdnLabelLengthAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn_label_length_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.fqdnLabelLengthActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn_label_suffix: {
      value: cdktf.numberToHclTerraform(struct!.fqdnLabelSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_length: {
      value: cdktf.numberToHclTerraform(struct!.labelLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsFqdnLabelLenCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateDnsFqdnLabelLenCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdnLabelLengthAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnLabelLengthAction = this._fqdnLabelLengthAction;
    }
    if (this._fqdnLabelLengthActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnLabelLengthActionListName = this._fqdnLabelLengthActionListName;
    }
    if (this._fqdnLabelSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnLabelSuffix = this._fqdnLabelSuffix;
    }
    if (this._labelLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelLength = this._labelLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsFqdnLabelLenCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdnLabelLengthAction = undefined;
      this._fqdnLabelLengthActionListName = undefined;
      this._fqdnLabelSuffix = undefined;
      this._labelLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdnLabelLengthAction = value.fqdnLabelLengthAction;
      this._fqdnLabelLengthActionListName = value.fqdnLabelLengthActionListName;
      this._fqdnLabelSuffix = value.fqdnLabelSuffix;
      this._labelLength = value.labelLength;
    }
  }

  // fqdn_label_length_action - computed: false, optional: true, required: false
  private _fqdnLabelLengthAction?: string; 
  public get fqdnLabelLengthAction() {
    return this.getStringAttribute('fqdn_label_length_action');
  }
  public set fqdnLabelLengthAction(value: string) {
    this._fqdnLabelLengthAction = value;
  }
  public resetFqdnLabelLengthAction() {
    this._fqdnLabelLengthAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLabelLengthActionInput() {
    return this._fqdnLabelLengthAction;
  }

  // fqdn_label_length_action_list_name - computed: false, optional: true, required: false
  private _fqdnLabelLengthActionListName?: string; 
  public get fqdnLabelLengthActionListName() {
    return this.getStringAttribute('fqdn_label_length_action_list_name');
  }
  public set fqdnLabelLengthActionListName(value: string) {
    this._fqdnLabelLengthActionListName = value;
  }
  public resetFqdnLabelLengthActionListName() {
    this._fqdnLabelLengthActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLabelLengthActionListNameInput() {
    return this._fqdnLabelLengthActionListName;
  }

  // fqdn_label_suffix - computed: false, optional: true, required: false
  private _fqdnLabelSuffix?: number; 
  public get fqdnLabelSuffix() {
    return this.getNumberAttribute('fqdn_label_suffix');
  }
  public set fqdnLabelSuffix(value: number) {
    this._fqdnLabelSuffix = value;
  }
  public resetFqdnLabelSuffix() {
    this._fqdnLabelSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLabelSuffixInput() {
    return this._fqdnLabelSuffix;
  }

  // label_length - computed: false, optional: true, required: false
  private _labelLength?: number; 
  public get labelLength() {
    return this.getNumberAttribute('label_length');
  }
  public set labelLength(value: number) {
    this._labelLength = value;
  }
  public resetLabelLength() {
    this._labelLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelLengthInput() {
    return this._labelLength;
  }
}

export class DdosZoneTemplateDnsFqdnLabelLenCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateDnsFqdnLabelLenCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateDnsFqdnLabelLenCfgOutputReference {
    return new DdosZoneTemplateDnsFqdnLabelLenCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateDnsMalformedQueryCheck {
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_malformed_query_action DdosZoneTemplateDns#dns_malformed_query_action}
  */
  readonly dnsMalformedQueryAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_malformed_query_action_list_name DdosZoneTemplateDns#dns_malformed_query_action_list_name}
  */
  readonly dnsMalformedQueryActionListName?: string;
  /**
  * 'disable': When malform check is enabled, TPS always drops DNS query with non query opcode, this option disables this opcode check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#non_query_opcode_check DdosZoneTemplateDns#non_query_opcode_check}
  */
  readonly nonQueryOpcodeCheck?: string;
  /**
  * Bypass DNS fragmented and TCP segmented Queries(Default: dropped)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#skip_multi_packet_check DdosZoneTemplateDns#skip_multi_packet_check}
  */
  readonly skipMultiPacketCheck?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#uuid DdosZoneTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * 'basic-header-check': Basic header validation for DNS TCP/UDP queries; 'extended-header-check': Extended header/query validation for DNS TCP/UDP queries; 'disable': Disable Malform query validation for DNS TCP/UDP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#validation_type DdosZoneTemplateDns#validation_type}
  */
  readonly validationType?: string;
}

export function ddosZoneTemplateDnsMalformedQueryCheckToTerraform(struct?: DdosZoneTemplateDnsMalformedQueryCheckOutputReference | DdosZoneTemplateDnsMalformedQueryCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_malformed_query_action: cdktf.stringToTerraform(struct!.dnsMalformedQueryAction),
    dns_malformed_query_action_list_name: cdktf.stringToTerraform(struct!.dnsMalformedQueryActionListName),
    non_query_opcode_check: cdktf.stringToTerraform(struct!.nonQueryOpcodeCheck),
    skip_multi_packet_check: cdktf.numberToTerraform(struct!.skipMultiPacketCheck),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    validation_type: cdktf.stringToTerraform(struct!.validationType),
  }
}


export function ddosZoneTemplateDnsMalformedQueryCheckToHclTerraform(struct?: DdosZoneTemplateDnsMalformedQueryCheckOutputReference | DdosZoneTemplateDnsMalformedQueryCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_malformed_query_action: {
      value: cdktf.stringToHclTerraform(struct!.dnsMalformedQueryAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_malformed_query_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsMalformedQueryActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_query_opcode_check: {
      value: cdktf.stringToHclTerraform(struct!.nonQueryOpcodeCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_multi_packet_check: {
      value: cdktf.numberToHclTerraform(struct!.skipMultiPacketCheck),
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
    validation_type: {
      value: cdktf.stringToHclTerraform(struct!.validationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsMalformedQueryCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsMalformedQueryCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsMalformedQueryAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMalformedQueryAction = this._dnsMalformedQueryAction;
    }
    if (this._dnsMalformedQueryActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMalformedQueryActionListName = this._dnsMalformedQueryActionListName;
    }
    if (this._nonQueryOpcodeCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonQueryOpcodeCheck = this._nonQueryOpcodeCheck;
    }
    if (this._skipMultiPacketCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipMultiPacketCheck = this._skipMultiPacketCheck;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._validationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationType = this._validationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsMalformedQueryCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsMalformedQueryAction = undefined;
      this._dnsMalformedQueryActionListName = undefined;
      this._nonQueryOpcodeCheck = undefined;
      this._skipMultiPacketCheck = undefined;
      this._uuid = undefined;
      this._validationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsMalformedQueryAction = value.dnsMalformedQueryAction;
      this._dnsMalformedQueryActionListName = value.dnsMalformedQueryActionListName;
      this._nonQueryOpcodeCheck = value.nonQueryOpcodeCheck;
      this._skipMultiPacketCheck = value.skipMultiPacketCheck;
      this._uuid = value.uuid;
      this._validationType = value.validationType;
    }
  }

  // dns_malformed_query_action - computed: false, optional: true, required: false
  private _dnsMalformedQueryAction?: string; 
  public get dnsMalformedQueryAction() {
    return this.getStringAttribute('dns_malformed_query_action');
  }
  public set dnsMalformedQueryAction(value: string) {
    this._dnsMalformedQueryAction = value;
  }
  public resetDnsMalformedQueryAction() {
    this._dnsMalformedQueryAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMalformedQueryActionInput() {
    return this._dnsMalformedQueryAction;
  }

  // dns_malformed_query_action_list_name - computed: false, optional: true, required: false
  private _dnsMalformedQueryActionListName?: string; 
  public get dnsMalformedQueryActionListName() {
    return this.getStringAttribute('dns_malformed_query_action_list_name');
  }
  public set dnsMalformedQueryActionListName(value: string) {
    this._dnsMalformedQueryActionListName = value;
  }
  public resetDnsMalformedQueryActionListName() {
    this._dnsMalformedQueryActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMalformedQueryActionListNameInput() {
    return this._dnsMalformedQueryActionListName;
  }

  // non_query_opcode_check - computed: false, optional: true, required: false
  private _nonQueryOpcodeCheck?: string; 
  public get nonQueryOpcodeCheck() {
    return this.getStringAttribute('non_query_opcode_check');
  }
  public set nonQueryOpcodeCheck(value: string) {
    this._nonQueryOpcodeCheck = value;
  }
  public resetNonQueryOpcodeCheck() {
    this._nonQueryOpcodeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonQueryOpcodeCheckInput() {
    return this._nonQueryOpcodeCheck;
  }

  // skip_multi_packet_check - computed: false, optional: true, required: false
  private _skipMultiPacketCheck?: number; 
  public get skipMultiPacketCheck() {
    return this.getNumberAttribute('skip_multi_packet_check');
  }
  public set skipMultiPacketCheck(value: number) {
    this._skipMultiPacketCheck = value;
  }
  public resetSkipMultiPacketCheck() {
    this._skipMultiPacketCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMultiPacketCheckInput() {
    return this._skipMultiPacketCheck;
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

  // validation_type - computed: false, optional: true, required: false
  private _validationType?: string; 
  public get validationType() {
    return this.getStringAttribute('validation_type');
  }
  public set validationType(value: string) {
    this._validationType = value;
  }
  public resetValidationType() {
    this._validationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationTypeInput() {
    return this._validationType;
  }
}
export interface DdosZoneTemplateDnsMultiPuThresholdDistribution {
  /**
  * 'disable': Destination side rate limit only. Default: Enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#multi_pu_threshold_distribution_disable DdosZoneTemplateDns#multi_pu_threshold_distribution_disable}
  */
  readonly multiPuThresholdDistributionDisable?: string;
  /**
  * Destination side rate limit only. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#multi_pu_threshold_distribution_value DdosZoneTemplateDns#multi_pu_threshold_distribution_value}
  */
  readonly multiPuThresholdDistributionValue?: number;
}

export function ddosZoneTemplateDnsMultiPuThresholdDistributionToTerraform(struct?: DdosZoneTemplateDnsMultiPuThresholdDistributionOutputReference | DdosZoneTemplateDnsMultiPuThresholdDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multi_pu_threshold_distribution_disable: cdktf.stringToTerraform(struct!.multiPuThresholdDistributionDisable),
    multi_pu_threshold_distribution_value: cdktf.numberToTerraform(struct!.multiPuThresholdDistributionValue),
  }
}


export function ddosZoneTemplateDnsMultiPuThresholdDistributionToHclTerraform(struct?: DdosZoneTemplateDnsMultiPuThresholdDistributionOutputReference | DdosZoneTemplateDnsMultiPuThresholdDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multi_pu_threshold_distribution_disable: {
      value: cdktf.stringToHclTerraform(struct!.multiPuThresholdDistributionDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_pu_threshold_distribution_value: {
      value: cdktf.numberToHclTerraform(struct!.multiPuThresholdDistributionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsMultiPuThresholdDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsMultiPuThresholdDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiPuThresholdDistributionDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiPuThresholdDistributionDisable = this._multiPuThresholdDistributionDisable;
    }
    if (this._multiPuThresholdDistributionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiPuThresholdDistributionValue = this._multiPuThresholdDistributionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsMultiPuThresholdDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multiPuThresholdDistributionDisable = undefined;
      this._multiPuThresholdDistributionValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multiPuThresholdDistributionDisable = value.multiPuThresholdDistributionDisable;
      this._multiPuThresholdDistributionValue = value.multiPuThresholdDistributionValue;
    }
  }

  // multi_pu_threshold_distribution_disable - computed: false, optional: true, required: false
  private _multiPuThresholdDistributionDisable?: string; 
  public get multiPuThresholdDistributionDisable() {
    return this.getStringAttribute('multi_pu_threshold_distribution_disable');
  }
  public set multiPuThresholdDistributionDisable(value: string) {
    this._multiPuThresholdDistributionDisable = value;
  }
  public resetMultiPuThresholdDistributionDisable() {
    this._multiPuThresholdDistributionDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionDisableInput() {
    return this._multiPuThresholdDistributionDisable;
  }

  // multi_pu_threshold_distribution_value - computed: false, optional: true, required: false
  private _multiPuThresholdDistributionValue?: number; 
  public get multiPuThresholdDistributionValue() {
    return this.getNumberAttribute('multi_pu_threshold_distribution_value');
  }
  public set multiPuThresholdDistributionValue(value: number) {
    this._multiPuThresholdDistributionValue = value;
  }
  public resetMultiPuThresholdDistributionValue() {
    this._multiPuThresholdDistributionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionValueInput() {
    return this._multiPuThresholdDistributionValue;
  }
}
export interface DdosZoneTemplateDnsSrcRateLimitNxdomain {
  /**
  * Limiting rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_nxdomain_rate DdosZoneTemplateDns#dns_nxdomain_rate}
  */
  readonly dnsNxdomainRate?: number;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_nxdomain_rate_limit_action DdosZoneTemplateDns#dns_nxdomain_rate_limit_action}
  */
  readonly dnsNxdomainRateLimitAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_nxdomain_rate_limit_action_list_name DdosZoneTemplateDns#dns_nxdomain_rate_limit_action_list_name}
  */
  readonly dnsNxdomainRateLimitActionListName?: string;
}

export function ddosZoneTemplateDnsSrcRateLimitNxdomainToTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitNxdomainOutputReference | DdosZoneTemplateDnsSrcRateLimitNxdomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_nxdomain_rate: cdktf.numberToTerraform(struct!.dnsNxdomainRate),
    dns_nxdomain_rate_limit_action: cdktf.stringToTerraform(struct!.dnsNxdomainRateLimitAction),
    dns_nxdomain_rate_limit_action_list_name: cdktf.stringToTerraform(struct!.dnsNxdomainRateLimitActionListName),
  }
}


export function ddosZoneTemplateDnsSrcRateLimitNxdomainToHclTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitNxdomainOutputReference | DdosZoneTemplateDnsSrcRateLimitNxdomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_nxdomain_rate: {
      value: cdktf.numberToHclTerraform(struct!.dnsNxdomainRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_nxdomain_rate_limit_action: {
      value: cdktf.stringToHclTerraform(struct!.dnsNxdomainRateLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_nxdomain_rate_limit_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsNxdomainRateLimitActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsSrcRateLimitNxdomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsSrcRateLimitNxdomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsNxdomainRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNxdomainRate = this._dnsNxdomainRate;
    }
    if (this._dnsNxdomainRateLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNxdomainRateLimitAction = this._dnsNxdomainRateLimitAction;
    }
    if (this._dnsNxdomainRateLimitActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNxdomainRateLimitActionListName = this._dnsNxdomainRateLimitActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsSrcRateLimitNxdomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsNxdomainRate = undefined;
      this._dnsNxdomainRateLimitAction = undefined;
      this._dnsNxdomainRateLimitActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsNxdomainRate = value.dnsNxdomainRate;
      this._dnsNxdomainRateLimitAction = value.dnsNxdomainRateLimitAction;
      this._dnsNxdomainRateLimitActionListName = value.dnsNxdomainRateLimitActionListName;
    }
  }

  // dns_nxdomain_rate - computed: false, optional: true, required: false
  private _dnsNxdomainRate?: number; 
  public get dnsNxdomainRate() {
    return this.getNumberAttribute('dns_nxdomain_rate');
  }
  public set dnsNxdomainRate(value: number) {
    this._dnsNxdomainRate = value;
  }
  public resetDnsNxdomainRate() {
    this._dnsNxdomainRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNxdomainRateInput() {
    return this._dnsNxdomainRate;
  }

  // dns_nxdomain_rate_limit_action - computed: false, optional: true, required: false
  private _dnsNxdomainRateLimitAction?: string; 
  public get dnsNxdomainRateLimitAction() {
    return this.getStringAttribute('dns_nxdomain_rate_limit_action');
  }
  public set dnsNxdomainRateLimitAction(value: string) {
    this._dnsNxdomainRateLimitAction = value;
  }
  public resetDnsNxdomainRateLimitAction() {
    this._dnsNxdomainRateLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNxdomainRateLimitActionInput() {
    return this._dnsNxdomainRateLimitAction;
  }

  // dns_nxdomain_rate_limit_action_list_name - computed: false, optional: true, required: false
  private _dnsNxdomainRateLimitActionListName?: string; 
  public get dnsNxdomainRateLimitActionListName() {
    return this.getStringAttribute('dns_nxdomain_rate_limit_action_list_name');
  }
  public set dnsNxdomainRateLimitActionListName(value: string) {
    this._dnsNxdomainRateLimitActionListName = value;
  }
  public resetDnsNxdomainRateLimitActionListName() {
    this._dnsNxdomainRateLimitActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNxdomainRateLimitActionListNameInput() {
    return this._dnsNxdomainRateLimitActionListName;
  }
}
export interface DdosZoneTemplateDnsSrcRateLimitRequestTypeACfg {
  /**
  * Address record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#a DdosZoneTemplateDns#a}
  */
  readonly a?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#src_dns_a_rate DdosZoneTemplateDns#src_dns_a_rate}
  */
  readonly srcDnsARate?: number;
}

export function ddosZoneTemplateDnsSrcRateLimitRequestTypeACfgToTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeACfgOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestTypeACfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a: cdktf.numberToTerraform(struct!.a),
    src_dns_a_rate: cdktf.numberToTerraform(struct!.srcDnsARate),
  }
}


export function ddosZoneTemplateDnsSrcRateLimitRequestTypeACfgToHclTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeACfgOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestTypeACfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a: {
      value: cdktf.numberToHclTerraform(struct!.a),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dns_a_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcDnsARate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsSrcRateLimitRequestTypeACfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsSrcRateLimitRequestTypeACfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a !== undefined) {
      hasAnyValues = true;
      internalValueResult.a = this._a;
    }
    if (this._srcDnsARate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsARate = this._srcDnsARate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeACfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._a = undefined;
      this._srcDnsARate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._a = value.a;
      this._srcDnsARate = value.srcDnsARate;
    }
  }

  // a - computed: false, optional: true, required: false
  private _a?: number; 
  public get a() {
    return this.getNumberAttribute('a');
  }
  public set a(value: number) {
    this._a = value;
  }
  public resetA() {
    this._a = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aInput() {
    return this._a;
  }

  // src_dns_a_rate - computed: false, optional: true, required: false
  private _srcDnsARate?: number; 
  public get srcDnsARate() {
    return this.getNumberAttribute('src_dns_a_rate');
  }
  public set srcDnsARate(value: number) {
    this._srcDnsARate = value;
  }
  public resetSrcDnsARate() {
    this._srcDnsARate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsARateInput() {
    return this._srcDnsARate;
  }
}
export interface DdosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfg {
  /**
  * IPv6 address record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#aaaa DdosZoneTemplateDns#aaaa}
  */
  readonly aaaa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#src_dns_aaaa_rate DdosZoneTemplateDns#src_dns_aaaa_rate}
  */
  readonly srcDnsAaaaRate?: number;
}

export function ddosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfgToTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfgOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aaaa: cdktf.numberToTerraform(struct!.aaaa),
    src_dns_aaaa_rate: cdktf.numberToTerraform(struct!.srcDnsAaaaRate),
  }
}


export function ddosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfgToHclTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfgOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aaaa: {
      value: cdktf.numberToHclTerraform(struct!.aaaa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dns_aaaa_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcDnsAaaaRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aaaa !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaa = this._aaaa;
    }
    if (this._srcDnsAaaaRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsAaaaRate = this._srcDnsAaaaRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aaaa = undefined;
      this._srcDnsAaaaRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aaaa = value.aaaa;
      this._srcDnsAaaaRate = value.srcDnsAaaaRate;
    }
  }

  // aaaa - computed: false, optional: true, required: false
  private _aaaa?: number; 
  public get aaaa() {
    return this.getNumberAttribute('aaaa');
  }
  public set aaaa(value: number) {
    this._aaaa = value;
  }
  public resetAaaa() {
    this._aaaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaaInput() {
    return this._aaaa;
  }

  // src_dns_aaaa_rate - computed: false, optional: true, required: false
  private _srcDnsAaaaRate?: number; 
  public get srcDnsAaaaRate() {
    return this.getNumberAttribute('src_dns_aaaa_rate');
  }
  public set srcDnsAaaaRate(value: number) {
    this._srcDnsAaaaRate = value;
  }
  public resetSrcDnsAaaaRate() {
    this._srcDnsAaaaRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsAaaaRateInput() {
    return this._srcDnsAaaaRate;
  }
}
export interface DdosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfg {
  /**
  * Canonical name record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#cname DdosZoneTemplateDns#cname}
  */
  readonly cname?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#src_dns_cname_rate DdosZoneTemplateDns#src_dns_cname_rate}
  */
  readonly srcDnsCnameRate?: number;
}

export function ddosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfgToTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfgOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cname: cdktf.numberToTerraform(struct!.cname),
    src_dns_cname_rate: cdktf.numberToTerraform(struct!.srcDnsCnameRate),
  }
}


export function ddosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfgToHclTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfgOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cname: {
      value: cdktf.numberToHclTerraform(struct!.cname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dns_cname_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcDnsCnameRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cname !== undefined) {
      hasAnyValues = true;
      internalValueResult.cname = this._cname;
    }
    if (this._srcDnsCnameRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsCnameRate = this._srcDnsCnameRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cname = undefined;
      this._srcDnsCnameRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cname = value.cname;
      this._srcDnsCnameRate = value.srcDnsCnameRate;
    }
  }

  // cname - computed: false, optional: true, required: false
  private _cname?: number; 
  public get cname() {
    return this.getNumberAttribute('cname');
  }
  public set cname(value: number) {
    this._cname = value;
  }
  public resetCname() {
    this._cname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
  }

  // src_dns_cname_rate - computed: false, optional: true, required: false
  private _srcDnsCnameRate?: number; 
  public get srcDnsCnameRate() {
    return this.getNumberAttribute('src_dns_cname_rate');
  }
  public set srcDnsCnameRate(value: number) {
    this._srcDnsCnameRate = value;
  }
  public resetSrcDnsCnameRate() {
    this._srcDnsCnameRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsCnameRateInput() {
    return this._srcDnsCnameRate;
  }
}
export interface DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfg {
  /**
  * Other type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#src_dns_request_type DdosZoneTemplateDns#src_dns_request_type}
  */
  readonly srcDnsRequestType?: number;
  /**
  * request rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#src_dns_request_type_rate DdosZoneTemplateDns#src_dns_request_type_rate}
  */
  readonly srcDnsRequestTypeRate?: number;
}

export function ddosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfgToTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_dns_request_type: cdktf.numberToTerraform(struct!.srcDnsRequestType),
    src_dns_request_type_rate: cdktf.numberToTerraform(struct!.srcDnsRequestTypeRate),
  }
}


export function ddosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfgToHclTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_dns_request_type: {
      value: cdktf.numberToHclTerraform(struct!.srcDnsRequestType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dns_request_type_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcDnsRequestTypeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcDnsRequestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsRequestType = this._srcDnsRequestType;
    }
    if (this._srcDnsRequestTypeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsRequestTypeRate = this._srcDnsRequestTypeRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._srcDnsRequestType = undefined;
      this._srcDnsRequestTypeRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._srcDnsRequestType = value.srcDnsRequestType;
      this._srcDnsRequestTypeRate = value.srcDnsRequestTypeRate;
    }
  }

  // src_dns_request_type - computed: false, optional: true, required: false
  private _srcDnsRequestType?: number; 
  public get srcDnsRequestType() {
    return this.getNumberAttribute('src_dns_request_type');
  }
  public set srcDnsRequestType(value: number) {
    this._srcDnsRequestType = value;
  }
  public resetSrcDnsRequestType() {
    this._srcDnsRequestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsRequestTypeInput() {
    return this._srcDnsRequestType;
  }

  // src_dns_request_type_rate - computed: false, optional: true, required: false
  private _srcDnsRequestTypeRate?: number; 
  public get srcDnsRequestTypeRate() {
    return this.getNumberAttribute('src_dns_request_type_rate');
  }
  public set srcDnsRequestTypeRate(value: number) {
    this._srcDnsRequestTypeRate = value;
  }
  public resetSrcDnsRequestTypeRate() {
    this._srcDnsRequestTypeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsRequestTypeRateInput() {
    return this._srcDnsRequestTypeRate;
  }
}

export class DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfgOutputReference {
    return new DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateDnsSrcRateLimitRequestTypeMxCfg {
  /**
  * Mail exchange record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#mx DdosZoneTemplateDns#mx}
  */
  readonly mx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#src_dns_mx_rate DdosZoneTemplateDns#src_dns_mx_rate}
  */
  readonly srcDnsMxRate?: number;
}

export function ddosZoneTemplateDnsSrcRateLimitRequestTypeMxCfgToTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeMxCfgOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestTypeMxCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mx: cdktf.numberToTerraform(struct!.mx),
    src_dns_mx_rate: cdktf.numberToTerraform(struct!.srcDnsMxRate),
  }
}


export function ddosZoneTemplateDnsSrcRateLimitRequestTypeMxCfgToHclTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeMxCfgOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestTypeMxCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mx: {
      value: cdktf.numberToHclTerraform(struct!.mx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dns_mx_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcDnsMxRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsSrcRateLimitRequestTypeMxCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsSrcRateLimitRequestTypeMxCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mx !== undefined) {
      hasAnyValues = true;
      internalValueResult.mx = this._mx;
    }
    if (this._srcDnsMxRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsMxRate = this._srcDnsMxRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeMxCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mx = undefined;
      this._srcDnsMxRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mx = value.mx;
      this._srcDnsMxRate = value.srcDnsMxRate;
    }
  }

  // mx - computed: false, optional: true, required: false
  private _mx?: number; 
  public get mx() {
    return this.getNumberAttribute('mx');
  }
  public set mx(value: number) {
    this._mx = value;
  }
  public resetMx() {
    this._mx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxInput() {
    return this._mx;
  }

  // src_dns_mx_rate - computed: false, optional: true, required: false
  private _srcDnsMxRate?: number; 
  public get srcDnsMxRate() {
    return this.getNumberAttribute('src_dns_mx_rate');
  }
  public set srcDnsMxRate(value: number) {
    this._srcDnsMxRate = value;
  }
  public resetSrcDnsMxRate() {
    this._srcDnsMxRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsMxRateInput() {
    return this._srcDnsMxRate;
  }
}
export interface DdosZoneTemplateDnsSrcRateLimitRequestTypeNsCfg {
  /**
  * Name server record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#ns DdosZoneTemplateDns#ns}
  */
  readonly ns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#src_dns_ns_rate DdosZoneTemplateDns#src_dns_ns_rate}
  */
  readonly srcDnsNsRate?: number;
}

export function ddosZoneTemplateDnsSrcRateLimitRequestTypeNsCfgToTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeNsCfgOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestTypeNsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ns: cdktf.numberToTerraform(struct!.ns),
    src_dns_ns_rate: cdktf.numberToTerraform(struct!.srcDnsNsRate),
  }
}


export function ddosZoneTemplateDnsSrcRateLimitRequestTypeNsCfgToHclTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeNsCfgOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestTypeNsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ns: {
      value: cdktf.numberToHclTerraform(struct!.ns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dns_ns_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcDnsNsRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsSrcRateLimitRequestTypeNsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsSrcRateLimitRequestTypeNsCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ns = this._ns;
    }
    if (this._srcDnsNsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsNsRate = this._srcDnsNsRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeNsCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ns = undefined;
      this._srcDnsNsRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ns = value.ns;
      this._srcDnsNsRate = value.srcDnsNsRate;
    }
  }

  // ns - computed: false, optional: true, required: false
  private _ns?: number; 
  public get ns() {
    return this.getNumberAttribute('ns');
  }
  public set ns(value: number) {
    this._ns = value;
  }
  public resetNs() {
    this._ns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsInput() {
    return this._ns;
  }

  // src_dns_ns_rate - computed: false, optional: true, required: false
  private _srcDnsNsRate?: number; 
  public get srcDnsNsRate() {
    return this.getNumberAttribute('src_dns_ns_rate');
  }
  public set srcDnsNsRate(value: number) {
    this._srcDnsNsRate = value;
  }
  public resetSrcDnsNsRate() {
    this._srcDnsNsRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsNsRateInput() {
    return this._srcDnsNsRate;
  }
}
export interface DdosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfg {
  /**
  * DNS request rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#src_dns_srv_rate DdosZoneTemplateDns#src_dns_srv_rate}
  */
  readonly srcDnsSrvRate?: number;
  /**
  * Service locator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#srv DdosZoneTemplateDns#srv}
  */
  readonly srv?: number;
}

export function ddosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfgToTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfgOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_dns_srv_rate: cdktf.numberToTerraform(struct!.srcDnsSrvRate),
    srv: cdktf.numberToTerraform(struct!.srv),
  }
}


export function ddosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfgToHclTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfgOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_dns_srv_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcDnsSrvRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    srv: {
      value: cdktf.numberToHclTerraform(struct!.srv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcDnsSrvRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsSrvRate = this._srcDnsSrvRate;
    }
    if (this._srv !== undefined) {
      hasAnyValues = true;
      internalValueResult.srv = this._srv;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcDnsSrvRate = undefined;
      this._srv = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcDnsSrvRate = value.srcDnsSrvRate;
      this._srv = value.srv;
    }
  }

  // src_dns_srv_rate - computed: false, optional: true, required: false
  private _srcDnsSrvRate?: number; 
  public get srcDnsSrvRate() {
    return this.getNumberAttribute('src_dns_srv_rate');
  }
  public set srcDnsSrvRate(value: number) {
    this._srcDnsSrvRate = value;
  }
  public resetSrcDnsSrvRate() {
    this._srcDnsSrvRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsSrvRateInput() {
    return this._srcDnsSrvRate;
  }

  // srv - computed: false, optional: true, required: false
  private _srv?: number; 
  public get srv() {
    return this.getNumberAttribute('srv');
  }
  public set srv(value: number) {
    this._srv = value;
  }
  public resetSrv() {
    this._srv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvInput() {
    return this._srv;
  }
}
export interface DdosZoneTemplateDnsSrcRateLimitRequestType {
  /**
  * a_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#a_cfg DdosZoneTemplateDns#a_cfg}
  */
  readonly aCfg?: DdosZoneTemplateDnsSrcRateLimitRequestTypeACfg;
  /**
  * aaaa_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#aaaa_cfg DdosZoneTemplateDns#aaaa_cfg}
  */
  readonly aaaaCfg?: DdosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfg;
  /**
  * cname_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#cname_cfg DdosZoneTemplateDns#cname_cfg}
  */
  readonly cnameCfg?: DdosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfg;
  /**
  * dns_type_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#dns_type_cfg DdosZoneTemplateDns#dns_type_cfg}
  */
  readonly dnsTypeCfg?: DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfg[] | cdktf.IResolvable;
  /**
  * mx_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#mx_cfg DdosZoneTemplateDns#mx_cfg}
  */
  readonly mxCfg?: DdosZoneTemplateDnsSrcRateLimitRequestTypeMxCfg;
  /**
  * ns_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#ns_cfg DdosZoneTemplateDns#ns_cfg}
  */
  readonly nsCfg?: DdosZoneTemplateDnsSrcRateLimitRequestTypeNsCfg;
  /**
  * srv_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#srv_cfg DdosZoneTemplateDns#srv_cfg}
  */
  readonly srvCfg?: DdosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfg;
}

export function ddosZoneTemplateDnsSrcRateLimitRequestTypeToTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a_cfg: ddosZoneTemplateDnsSrcRateLimitRequestTypeACfgToTerraform(struct!.aCfg),
    aaaa_cfg: ddosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfgToTerraform(struct!.aaaaCfg),
    cname_cfg: ddosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfgToTerraform(struct!.cnameCfg),
    dns_type_cfg: cdktf.listMapper(ddosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfgToTerraform, true)(struct!.dnsTypeCfg),
    mx_cfg: ddosZoneTemplateDnsSrcRateLimitRequestTypeMxCfgToTerraform(struct!.mxCfg),
    ns_cfg: ddosZoneTemplateDnsSrcRateLimitRequestTypeNsCfgToTerraform(struct!.nsCfg),
    srv_cfg: ddosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfgToTerraform(struct!.srvCfg),
  }
}


export function ddosZoneTemplateDnsSrcRateLimitRequestTypeToHclTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestTypeOutputReference | DdosZoneTemplateDnsSrcRateLimitRequestType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a_cfg: {
      value: ddosZoneTemplateDnsSrcRateLimitRequestTypeACfgToHclTerraform(struct!.aCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsSrcRateLimitRequestTypeACfgList",
    },
    aaaa_cfg: {
      value: ddosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfgToHclTerraform(struct!.aaaaCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfgList",
    },
    cname_cfg: {
      value: ddosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfgToHclTerraform(struct!.cnameCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfgList",
    },
    dns_type_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfgToHclTerraform, true)(struct!.dnsTypeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfgList",
    },
    mx_cfg: {
      value: ddosZoneTemplateDnsSrcRateLimitRequestTypeMxCfgToHclTerraform(struct!.mxCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsSrcRateLimitRequestTypeMxCfgList",
    },
    ns_cfg: {
      value: ddosZoneTemplateDnsSrcRateLimitRequestTypeNsCfgToHclTerraform(struct!.nsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsSrcRateLimitRequestTypeNsCfgList",
    },
    srv_cfg: {
      value: ddosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfgToHclTerraform(struct!.srvCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsSrcRateLimitRequestTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsSrcRateLimitRequestType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aCfg = this._aCfg?.internalValue;
    }
    if (this._aaaaCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaaCfg = this._aaaaCfg?.internalValue;
    }
    if (this._cnameCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameCfg = this._cnameCfg?.internalValue;
    }
    if (this._dnsTypeCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTypeCfg = this._dnsTypeCfg?.internalValue;
    }
    if (this._mxCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxCfg = this._mxCfg?.internalValue;
    }
    if (this._nsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsCfg = this._nsCfg?.internalValue;
    }
    if (this._srvCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvCfg = this._srvCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsSrcRateLimitRequestType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aCfg.internalValue = undefined;
      this._aaaaCfg.internalValue = undefined;
      this._cnameCfg.internalValue = undefined;
      this._dnsTypeCfg.internalValue = undefined;
      this._mxCfg.internalValue = undefined;
      this._nsCfg.internalValue = undefined;
      this._srvCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aCfg.internalValue = value.aCfg;
      this._aaaaCfg.internalValue = value.aaaaCfg;
      this._cnameCfg.internalValue = value.cnameCfg;
      this._dnsTypeCfg.internalValue = value.dnsTypeCfg;
      this._mxCfg.internalValue = value.mxCfg;
      this._nsCfg.internalValue = value.nsCfg;
      this._srvCfg.internalValue = value.srvCfg;
    }
  }

  // a_cfg - computed: false, optional: true, required: false
  private _aCfg = new DdosZoneTemplateDnsSrcRateLimitRequestTypeACfgOutputReference(this, "a_cfg");
  public get aCfg() {
    return this._aCfg;
  }
  public putACfg(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeACfg) {
    this._aCfg.internalValue = value;
  }
  public resetACfg() {
    this._aCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aCfgInput() {
    return this._aCfg.internalValue;
  }

  // aaaa_cfg - computed: false, optional: true, required: false
  private _aaaaCfg = new DdosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfgOutputReference(this, "aaaa_cfg");
  public get aaaaCfg() {
    return this._aaaaCfg;
  }
  public putAaaaCfg(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeAaaaCfg) {
    this._aaaaCfg.internalValue = value;
  }
  public resetAaaaCfg() {
    this._aaaaCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaaCfgInput() {
    return this._aaaaCfg.internalValue;
  }

  // cname_cfg - computed: false, optional: true, required: false
  private _cnameCfg = new DdosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfgOutputReference(this, "cname_cfg");
  public get cnameCfg() {
    return this._cnameCfg;
  }
  public putCnameCfg(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeCnameCfg) {
    this._cnameCfg.internalValue = value;
  }
  public resetCnameCfg() {
    this._cnameCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameCfgInput() {
    return this._cnameCfg.internalValue;
  }

  // dns_type_cfg - computed: false, optional: true, required: false
  private _dnsTypeCfg = new DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfgList(this, "dns_type_cfg", false);
  public get dnsTypeCfg() {
    return this._dnsTypeCfg;
  }
  public putDnsTypeCfg(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeDnsTypeCfg[] | cdktf.IResolvable) {
    this._dnsTypeCfg.internalValue = value;
  }
  public resetDnsTypeCfg() {
    this._dnsTypeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTypeCfgInput() {
    return this._dnsTypeCfg.internalValue;
  }

  // mx_cfg - computed: false, optional: true, required: false
  private _mxCfg = new DdosZoneTemplateDnsSrcRateLimitRequestTypeMxCfgOutputReference(this, "mx_cfg");
  public get mxCfg() {
    return this._mxCfg;
  }
  public putMxCfg(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeMxCfg) {
    this._mxCfg.internalValue = value;
  }
  public resetMxCfg() {
    this._mxCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxCfgInput() {
    return this._mxCfg.internalValue;
  }

  // ns_cfg - computed: false, optional: true, required: false
  private _nsCfg = new DdosZoneTemplateDnsSrcRateLimitRequestTypeNsCfgOutputReference(this, "ns_cfg");
  public get nsCfg() {
    return this._nsCfg;
  }
  public putNsCfg(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeNsCfg) {
    this._nsCfg.internalValue = value;
  }
  public resetNsCfg() {
    this._nsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsCfgInput() {
    return this._nsCfg.internalValue;
  }

  // srv_cfg - computed: false, optional: true, required: false
  private _srvCfg = new DdosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfgOutputReference(this, "srv_cfg");
  public get srvCfg() {
    return this._srvCfg;
  }
  public putSrvCfg(value: DdosZoneTemplateDnsSrcRateLimitRequestTypeSrvCfg) {
    this._srvCfg.internalValue = value;
  }
  public resetSrvCfg() {
    this._srvCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvCfgInput() {
    return this._srvCfg.internalValue;
  }
}
export interface DdosZoneTemplateDnsSrcRateLimitRequest {
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#src_dns_request_rate_limit_action DdosZoneTemplateDns#src_dns_request_rate_limit_action}
  */
  readonly srcDnsRequestRateLimitAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#src_dns_request_rate_limit_action_list_name DdosZoneTemplateDns#src_dns_request_rate_limit_action_list_name}
  */
  readonly srcDnsRequestRateLimitActionListName?: string;
  /**
  * type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#type DdosZoneTemplateDns#type}
  */
  readonly type?: DdosZoneTemplateDnsSrcRateLimitRequestType;
}

export function ddosZoneTemplateDnsSrcRateLimitRequestToTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestOutputReference | DdosZoneTemplateDnsSrcRateLimitRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_dns_request_rate_limit_action: cdktf.stringToTerraform(struct!.srcDnsRequestRateLimitAction),
    src_dns_request_rate_limit_action_list_name: cdktf.stringToTerraform(struct!.srcDnsRequestRateLimitActionListName),
    type: ddosZoneTemplateDnsSrcRateLimitRequestTypeToTerraform(struct!.type),
  }
}


export function ddosZoneTemplateDnsSrcRateLimitRequestToHclTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitRequestOutputReference | DdosZoneTemplateDnsSrcRateLimitRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_dns_request_rate_limit_action: {
      value: cdktf.stringToHclTerraform(struct!.srcDnsRequestRateLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_dns_request_rate_limit_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.srcDnsRequestRateLimitActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: ddosZoneTemplateDnsSrcRateLimitRequestTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsSrcRateLimitRequestTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsSrcRateLimitRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsSrcRateLimitRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcDnsRequestRateLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsRequestRateLimitAction = this._srcDnsRequestRateLimitAction;
    }
    if (this._srcDnsRequestRateLimitActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsRequestRateLimitActionListName = this._srcDnsRequestRateLimitActionListName;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsSrcRateLimitRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcDnsRequestRateLimitAction = undefined;
      this._srcDnsRequestRateLimitActionListName = undefined;
      this._type.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcDnsRequestRateLimitAction = value.srcDnsRequestRateLimitAction;
      this._srcDnsRequestRateLimitActionListName = value.srcDnsRequestRateLimitActionListName;
      this._type.internalValue = value.type;
    }
  }

  // src_dns_request_rate_limit_action - computed: false, optional: true, required: false
  private _srcDnsRequestRateLimitAction?: string; 
  public get srcDnsRequestRateLimitAction() {
    return this.getStringAttribute('src_dns_request_rate_limit_action');
  }
  public set srcDnsRequestRateLimitAction(value: string) {
    this._srcDnsRequestRateLimitAction = value;
  }
  public resetSrcDnsRequestRateLimitAction() {
    this._srcDnsRequestRateLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsRequestRateLimitActionInput() {
    return this._srcDnsRequestRateLimitAction;
  }

  // src_dns_request_rate_limit_action_list_name - computed: false, optional: true, required: false
  private _srcDnsRequestRateLimitActionListName?: string; 
  public get srcDnsRequestRateLimitActionListName() {
    return this.getStringAttribute('src_dns_request_rate_limit_action_list_name');
  }
  public set srcDnsRequestRateLimitActionListName(value: string) {
    this._srcDnsRequestRateLimitActionListName = value;
  }
  public resetSrcDnsRequestRateLimitActionListName() {
    this._srcDnsRequestRateLimitActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsRequestRateLimitActionListNameInput() {
    return this._srcDnsRequestRateLimitActionListName;
  }

  // type - computed: false, optional: true, required: false
  private _type = new DdosZoneTemplateDnsSrcRateLimitRequestTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DdosZoneTemplateDnsSrcRateLimitRequestType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}
export interface DdosZoneTemplateDnsSrcRateLimit {
  /**
  * nxdomain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#nxdomain DdosZoneTemplateDns#nxdomain}
  */
  readonly nxdomain?: DdosZoneTemplateDnsSrcRateLimitNxdomain;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#request DdosZoneTemplateDns#request}
  */
  readonly request?: DdosZoneTemplateDnsSrcRateLimitRequest;
}

export function ddosZoneTemplateDnsSrcRateLimitToTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitOutputReference | DdosZoneTemplateDnsSrcRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nxdomain: ddosZoneTemplateDnsSrcRateLimitNxdomainToTerraform(struct!.nxdomain),
    request: ddosZoneTemplateDnsSrcRateLimitRequestToTerraform(struct!.request),
  }
}


export function ddosZoneTemplateDnsSrcRateLimitToHclTerraform(struct?: DdosZoneTemplateDnsSrcRateLimitOutputReference | DdosZoneTemplateDnsSrcRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nxdomain: {
      value: ddosZoneTemplateDnsSrcRateLimitNxdomainToHclTerraform(struct!.nxdomain),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsSrcRateLimitNxdomainList",
    },
    request: {
      value: ddosZoneTemplateDnsSrcRateLimitRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsSrcRateLimitRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsSrcRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsSrcRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nxdomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxdomain = this._nxdomain?.internalValue;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsSrcRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nxdomain.internalValue = undefined;
      this._request.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nxdomain.internalValue = value.nxdomain;
      this._request.internalValue = value.request;
    }
  }

  // nxdomain - computed: false, optional: true, required: false
  private _nxdomain = new DdosZoneTemplateDnsSrcRateLimitNxdomainOutputReference(this, "nxdomain");
  public get nxdomain() {
    return this._nxdomain;
  }
  public putNxdomain(value: DdosZoneTemplateDnsSrcRateLimitNxdomain) {
    this._nxdomain.internalValue = value;
  }
  public resetNxdomain() {
    this._nxdomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainInput() {
    return this._nxdomain.internalValue;
  }

  // request - computed: false, optional: true, required: false
  private _request = new DdosZoneTemplateDnsSrcRateLimitRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DdosZoneTemplateDnsSrcRateLimitRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }
}
export interface DdosZoneTemplateDnsSrc {
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#rate_limit DdosZoneTemplateDns#rate_limit}
  */
  readonly rateLimit?: DdosZoneTemplateDnsSrcRateLimit;
}

export function ddosZoneTemplateDnsSrcToTerraform(struct?: DdosZoneTemplateDnsSrcOutputReference | DdosZoneTemplateDnsSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limit: ddosZoneTemplateDnsSrcRateLimitToTerraform(struct!.rateLimit),
  }
}


export function ddosZoneTemplateDnsSrcToHclTerraform(struct?: DdosZoneTemplateDnsSrcOutputReference | DdosZoneTemplateDnsSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limit: {
      value: ddosZoneTemplateDnsSrcRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateDnsSrcRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsSrcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsSrc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsSrc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateLimit.internalValue = value.rateLimit;
    }
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new DdosZoneTemplateDnsSrcRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DdosZoneTemplateDnsSrcRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }
}
export interface DdosZoneTemplateDnsSymtimeoutCfg {
  /**
  * Timeout for DNS Symmetric session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#sym_timeout DdosZoneTemplateDns#sym_timeout}
  */
  readonly symTimeout?: number;
  /**
  * Session timeout value in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#sym_timeout_value DdosZoneTemplateDns#sym_timeout_value}
  */
  readonly symTimeoutValue?: number;
}

export function ddosZoneTemplateDnsSymtimeoutCfgToTerraform(struct?: DdosZoneTemplateDnsSymtimeoutCfgOutputReference | DdosZoneTemplateDnsSymtimeoutCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sym_timeout: cdktf.numberToTerraform(struct!.symTimeout),
    sym_timeout_value: cdktf.numberToTerraform(struct!.symTimeoutValue),
  }
}


export function ddosZoneTemplateDnsSymtimeoutCfgToHclTerraform(struct?: DdosZoneTemplateDnsSymtimeoutCfgOutputReference | DdosZoneTemplateDnsSymtimeoutCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sym_timeout: {
      value: cdktf.numberToHclTerraform(struct!.symTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sym_timeout_value: {
      value: cdktf.numberToHclTerraform(struct!.symTimeoutValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateDnsSymtimeoutCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateDnsSymtimeoutCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._symTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.symTimeout = this._symTimeout;
    }
    if (this._symTimeoutValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.symTimeoutValue = this._symTimeoutValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateDnsSymtimeoutCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._symTimeout = undefined;
      this._symTimeoutValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._symTimeout = value.symTimeout;
      this._symTimeoutValue = value.symTimeoutValue;
    }
  }

  // sym_timeout - computed: false, optional: true, required: false
  private _symTimeout?: number; 
  public get symTimeout() {
    return this.getNumberAttribute('sym_timeout');
  }
  public set symTimeout(value: number) {
    this._symTimeout = value;
  }
  public resetSymTimeout() {
    this._symTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symTimeoutInput() {
    return this._symTimeout;
  }

  // sym_timeout_value - computed: false, optional: true, required: false
  private _symTimeoutValue?: number; 
  public get symTimeoutValue() {
    return this.getNumberAttribute('sym_timeout_value');
  }
  public set symTimeoutValue(value: number) {
    this._symTimeoutValue = value;
  }
  public resetSymTimeoutValue() {
    this._symTimeoutValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symTimeoutValueInput() {
    return this._symTimeoutValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns thunder_ddos_zone_template_dns}
*/
export class DdosZoneTemplateDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateDns to import
  * @param importFromId The id of the existing DdosZoneTemplateDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_dns thunder_ddos_zone_template_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateDnsConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_dns',
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
    this._dnsAnyCheck = config.dnsAnyCheck;
    this._dnsAnyCheckAction = config.dnsAnyCheckAction;
    this._dnsAnyCheckActionListName = config.dnsAnyCheckActionListName;
    this._domainGroupName = config.domainGroupName;
    this._id = config.id;
    this._name = config.name;
    this._onNoMatch = config.onNoMatch;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._allowQueryClass.internalValue = config.allowQueryClass;
    this._allowRecordType.internalValue = config.allowRecordType;
    this._dnsUdpAuthentication.internalValue = config.dnsUdpAuthentication;
    this._dst.internalValue = config.dst;
    this._fqdnLabelCountCfg.internalValue = config.fqdnLabelCountCfg;
    this._fqdnLabelLenCfg.internalValue = config.fqdnLabelLenCfg;
    this._malformedQueryCheck.internalValue = config.malformedQueryCheck;
    this._multiPuThresholdDistribution.internalValue = config.multiPuThresholdDistribution;
    this._src.internalValue = config.src;
    this._symtimeoutCfg.internalValue = config.symtimeoutCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_any_check - computed: false, optional: true, required: false
  private _dnsAnyCheck?: number; 
  public get dnsAnyCheck() {
    return this.getNumberAttribute('dns_any_check');
  }
  public set dnsAnyCheck(value: number) {
    this._dnsAnyCheck = value;
  }
  public resetDnsAnyCheck() {
    this._dnsAnyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAnyCheckInput() {
    return this._dnsAnyCheck;
  }

  // dns_any_check_action - computed: false, optional: true, required: false
  private _dnsAnyCheckAction?: string; 
  public get dnsAnyCheckAction() {
    return this.getStringAttribute('dns_any_check_action');
  }
  public set dnsAnyCheckAction(value: string) {
    this._dnsAnyCheckAction = value;
  }
  public resetDnsAnyCheckAction() {
    this._dnsAnyCheckAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAnyCheckActionInput() {
    return this._dnsAnyCheckAction;
  }

  // dns_any_check_action_list_name - computed: false, optional: true, required: false
  private _dnsAnyCheckActionListName?: string; 
  public get dnsAnyCheckActionListName() {
    return this.getStringAttribute('dns_any_check_action_list_name');
  }
  public set dnsAnyCheckActionListName(value: string) {
    this._dnsAnyCheckActionListName = value;
  }
  public resetDnsAnyCheckActionListName() {
    this._dnsAnyCheckActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAnyCheckActionListNameInput() {
    return this._dnsAnyCheckActionListName;
  }

  // domain_group_name - computed: false, optional: true, required: false
  private _domainGroupName?: string; 
  public get domainGroupName() {
    return this.getStringAttribute('domain_group_name');
  }
  public set domainGroupName(value: string) {
    this._domainGroupName = value;
  }
  public resetDomainGroupName() {
    this._domainGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupNameInput() {
    return this._domainGroupName;
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

  // on_no_match - computed: false, optional: true, required: false
  private _onNoMatch?: string; 
  public get onNoMatch() {
    return this.getStringAttribute('on_no_match');
  }
  public set onNoMatch(value: string) {
    this._onNoMatch = value;
  }
  public resetOnNoMatch() {
    this._onNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onNoMatchInput() {
    return this._onNoMatch;
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

  // allow_query_class - computed: false, optional: true, required: false
  private _allowQueryClass = new DdosZoneTemplateDnsAllowQueryClassOutputReference(this, "allow_query_class");
  public get allowQueryClass() {
    return this._allowQueryClass;
  }
  public putAllowQueryClass(value: DdosZoneTemplateDnsAllowQueryClass) {
    this._allowQueryClass.internalValue = value;
  }
  public resetAllowQueryClass() {
    this._allowQueryClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQueryClassInput() {
    return this._allowQueryClass.internalValue;
  }

  // allow_record_type - computed: false, optional: true, required: false
  private _allowRecordType = new DdosZoneTemplateDnsAllowRecordTypeOutputReference(this, "allow_record_type");
  public get allowRecordType() {
    return this._allowRecordType;
  }
  public putAllowRecordType(value: DdosZoneTemplateDnsAllowRecordType) {
    this._allowRecordType.internalValue = value;
  }
  public resetAllowRecordType() {
    this._allowRecordType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRecordTypeInput() {
    return this._allowRecordType.internalValue;
  }

  // dns_udp_authentication - computed: false, optional: true, required: false
  private _dnsUdpAuthentication = new DdosZoneTemplateDnsDnsUdpAuthenticationOutputReference(this, "dns_udp_authentication");
  public get dnsUdpAuthentication() {
    return this._dnsUdpAuthentication;
  }
  public putDnsUdpAuthentication(value: DdosZoneTemplateDnsDnsUdpAuthentication) {
    this._dnsUdpAuthentication.internalValue = value;
  }
  public resetDnsUdpAuthentication() {
    this._dnsUdpAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsUdpAuthenticationInput() {
    return this._dnsUdpAuthentication.internalValue;
  }

  // dst - computed: false, optional: true, required: false
  private _dst = new DdosZoneTemplateDnsDstOutputReference(this, "dst");
  public get dst() {
    return this._dst;
  }
  public putDst(value: DdosZoneTemplateDnsDst) {
    this._dst.internalValue = value;
  }
  public resetDst() {
    this._dst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst.internalValue;
  }

  // fqdn_label_count_cfg - computed: false, optional: true, required: false
  private _fqdnLabelCountCfg = new DdosZoneTemplateDnsFqdnLabelCountCfgOutputReference(this, "fqdn_label_count_cfg");
  public get fqdnLabelCountCfg() {
    return this._fqdnLabelCountCfg;
  }
  public putFqdnLabelCountCfg(value: DdosZoneTemplateDnsFqdnLabelCountCfg) {
    this._fqdnLabelCountCfg.internalValue = value;
  }
  public resetFqdnLabelCountCfg() {
    this._fqdnLabelCountCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLabelCountCfgInput() {
    return this._fqdnLabelCountCfg.internalValue;
  }

  // fqdn_label_len_cfg - computed: false, optional: true, required: false
  private _fqdnLabelLenCfg = new DdosZoneTemplateDnsFqdnLabelLenCfgList(this, "fqdn_label_len_cfg", false);
  public get fqdnLabelLenCfg() {
    return this._fqdnLabelLenCfg;
  }
  public putFqdnLabelLenCfg(value: DdosZoneTemplateDnsFqdnLabelLenCfg[] | cdktf.IResolvable) {
    this._fqdnLabelLenCfg.internalValue = value;
  }
  public resetFqdnLabelLenCfg() {
    this._fqdnLabelLenCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLabelLenCfgInput() {
    return this._fqdnLabelLenCfg.internalValue;
  }

  // malformed_query_check - computed: false, optional: true, required: false
  private _malformedQueryCheck = new DdosZoneTemplateDnsMalformedQueryCheckOutputReference(this, "malformed_query_check");
  public get malformedQueryCheck() {
    return this._malformedQueryCheck;
  }
  public putMalformedQueryCheck(value: DdosZoneTemplateDnsMalformedQueryCheck) {
    this._malformedQueryCheck.internalValue = value;
  }
  public resetMalformedQueryCheck() {
    this._malformedQueryCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedQueryCheckInput() {
    return this._malformedQueryCheck.internalValue;
  }

  // multi_pu_threshold_distribution - computed: false, optional: true, required: false
  private _multiPuThresholdDistribution = new DdosZoneTemplateDnsMultiPuThresholdDistributionOutputReference(this, "multi_pu_threshold_distribution");
  public get multiPuThresholdDistribution() {
    return this._multiPuThresholdDistribution;
  }
  public putMultiPuThresholdDistribution(value: DdosZoneTemplateDnsMultiPuThresholdDistribution) {
    this._multiPuThresholdDistribution.internalValue = value;
  }
  public resetMultiPuThresholdDistribution() {
    this._multiPuThresholdDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionInput() {
    return this._multiPuThresholdDistribution.internalValue;
  }

  // src - computed: false, optional: true, required: false
  private _src = new DdosZoneTemplateDnsSrcOutputReference(this, "src");
  public get src() {
    return this._src;
  }
  public putSrc(value: DdosZoneTemplateDnsSrc) {
    this._src.internalValue = value;
  }
  public resetSrc() {
    this._src.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src.internalValue;
  }

  // symtimeout_cfg - computed: false, optional: true, required: false
  private _symtimeoutCfg = new DdosZoneTemplateDnsSymtimeoutCfgOutputReference(this, "symtimeout_cfg");
  public get symtimeoutCfg() {
    return this._symtimeoutCfg;
  }
  public putSymtimeoutCfg(value: DdosZoneTemplateDnsSymtimeoutCfg) {
    this._symtimeoutCfg.internalValue = value;
  }
  public resetSymtimeoutCfg() {
    this._symtimeoutCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symtimeoutCfgInput() {
    return this._symtimeoutCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_any_check: cdktf.numberToTerraform(this._dnsAnyCheck),
      dns_any_check_action: cdktf.stringToTerraform(this._dnsAnyCheckAction),
      dns_any_check_action_list_name: cdktf.stringToTerraform(this._dnsAnyCheckActionListName),
      domain_group_name: cdktf.stringToTerraform(this._domainGroupName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      on_no_match: cdktf.stringToTerraform(this._onNoMatch),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      allow_query_class: ddosZoneTemplateDnsAllowQueryClassToTerraform(this._allowQueryClass.internalValue),
      allow_record_type: ddosZoneTemplateDnsAllowRecordTypeToTerraform(this._allowRecordType.internalValue),
      dns_udp_authentication: ddosZoneTemplateDnsDnsUdpAuthenticationToTerraform(this._dnsUdpAuthentication.internalValue),
      dst: ddosZoneTemplateDnsDstToTerraform(this._dst.internalValue),
      fqdn_label_count_cfg: ddosZoneTemplateDnsFqdnLabelCountCfgToTerraform(this._fqdnLabelCountCfg.internalValue),
      fqdn_label_len_cfg: cdktf.listMapper(ddosZoneTemplateDnsFqdnLabelLenCfgToTerraform, true)(this._fqdnLabelLenCfg.internalValue),
      malformed_query_check: ddosZoneTemplateDnsMalformedQueryCheckToTerraform(this._malformedQueryCheck.internalValue),
      multi_pu_threshold_distribution: ddosZoneTemplateDnsMultiPuThresholdDistributionToTerraform(this._multiPuThresholdDistribution.internalValue),
      src: ddosZoneTemplateDnsSrcToTerraform(this._src.internalValue),
      symtimeout_cfg: ddosZoneTemplateDnsSymtimeoutCfgToTerraform(this._symtimeoutCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_any_check: {
        value: cdktf.numberToHclTerraform(this._dnsAnyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_any_check_action: {
        value: cdktf.stringToHclTerraform(this._dnsAnyCheckAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_any_check_action_list_name: {
        value: cdktf.stringToHclTerraform(this._dnsAnyCheckActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group_name: {
        value: cdktf.stringToHclTerraform(this._domainGroupName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_no_match: {
        value: cdktf.stringToHclTerraform(this._onNoMatch),
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
      allow_query_class: {
        value: ddosZoneTemplateDnsAllowQueryClassToHclTerraform(this._allowQueryClass.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateDnsAllowQueryClassList",
      },
      allow_record_type: {
        value: ddosZoneTemplateDnsAllowRecordTypeToHclTerraform(this._allowRecordType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateDnsAllowRecordTypeList",
      },
      dns_udp_authentication: {
        value: ddosZoneTemplateDnsDnsUdpAuthenticationToHclTerraform(this._dnsUdpAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateDnsDnsUdpAuthenticationList",
      },
      dst: {
        value: ddosZoneTemplateDnsDstToHclTerraform(this._dst.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateDnsDstList",
      },
      fqdn_label_count_cfg: {
        value: ddosZoneTemplateDnsFqdnLabelCountCfgToHclTerraform(this._fqdnLabelCountCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateDnsFqdnLabelCountCfgList",
      },
      fqdn_label_len_cfg: {
        value: cdktf.listMapperHcl(ddosZoneTemplateDnsFqdnLabelLenCfgToHclTerraform, true)(this._fqdnLabelLenCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateDnsFqdnLabelLenCfgList",
      },
      malformed_query_check: {
        value: ddosZoneTemplateDnsMalformedQueryCheckToHclTerraform(this._malformedQueryCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateDnsMalformedQueryCheckList",
      },
      multi_pu_threshold_distribution: {
        value: ddosZoneTemplateDnsMultiPuThresholdDistributionToHclTerraform(this._multiPuThresholdDistribution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateDnsMultiPuThresholdDistributionList",
      },
      src: {
        value: ddosZoneTemplateDnsSrcToHclTerraform(this._src.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateDnsSrcList",
      },
      symtimeout_cfg: {
        value: ddosZoneTemplateDnsSymtimeoutCfgToHclTerraform(this._symtimeoutCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateDnsSymtimeoutCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
