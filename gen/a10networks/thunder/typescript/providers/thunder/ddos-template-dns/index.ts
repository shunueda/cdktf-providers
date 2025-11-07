// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'drop': Drop packets (Default action); 'reset': Send Client RST for TCP connections;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#action DdosTemplateDns#action}
  */
  readonly action?: string;
  /**
  * Drop DNS queries of Type ANY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_any_check DdosTemplateDns#dns_any_check}
  */
  readonly dnsAnyCheck?: number;
  /**
  * Apply a domain-group to the DNS template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#domain_group_name DdosTemplateDns#domain_group_name}
  */
  readonly domainGroupName?: string;
  /**
  * 'drop': Drop the query (default); 'tunnel-encap-packet': Encapsulate the query and send on a tunnel;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#domain_group_rate_exceed_action DdosTemplateDns#domain_group_rate_exceed_action}
  */
  readonly domainGroupRateExceedAction?: string;
  /**
  * Enable per service domain rate checking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#domain_group_rate_per_service DdosTemplateDns#domain_group_rate_per_service}
  */
  readonly domainGroupRatePerService?: number;
  /**
  * DDOS encap template to sepcify the tunnel endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#encap_template DdosTemplateDns#encap_template}
  */
  readonly encapTemplate?: string;
  /**
  * Maximum number of length of FQDN labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#fqdn_label_count DdosTemplateDns#fqdn_label_count}
  */
  readonly fqdnLabelCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#id DdosTemplateDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#name DdosTemplateDns#name}
  */
  readonly name: string;
  /**
  * 'permit': permit; 'deny': deny (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#on_no_match DdosTemplateDns#on_no_match}
  */
  readonly onNoMatch?: string;
  /**
  * This is for DNS cache mode only, it sets a DNS query rate threshold such that queries under the rate threshold would be forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#query_rate_threshold_for_cache_serving DdosTemplateDns#query_rate_threshold_for_cache_serving}
  */
  readonly queryRateThresholdForCacheServing?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#user_tag DdosTemplateDns#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#uuid DdosTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * allow_query_class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_query_class DdosTemplateDns#allow_query_class}
  */
  readonly allowQueryClass?: DdosTemplateDnsAllowQueryClass;
  /**
  * allow_record_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_record_type DdosTemplateDns#allow_record_type}
  */
  readonly allowRecordType?: DdosTemplateDnsAllowRecordType;
  /**
  * dns_auth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_auth_cfg DdosTemplateDns#dns_auth_cfg}
  */
  readonly dnsAuthCfg?: DdosTemplateDnsDnsAuthCfg;
  /**
  * dns_request_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_request_rate_limit DdosTemplateDns#dns_request_rate_limit}
  */
  readonly dnsRequestRateLimit?: DdosTemplateDnsDnsRequestRateLimit;
  /**
  * fqdn_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#fqdn_cfg DdosTemplateDns#fqdn_cfg}
  */
  readonly fqdnCfg?: DdosTemplateDnsFqdnCfg[] | cdktf.IResolvable;
  /**
  * fqdn_label_len_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#fqdn_label_len_cfg DdosTemplateDns#fqdn_label_len_cfg}
  */
  readonly fqdnLabelLenCfg?: DdosTemplateDnsFqdnLabelLenCfg[] | cdktf.IResolvable;
  /**
  * malformed_query_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#malformed_query_check DdosTemplateDns#malformed_query_check}
  */
  readonly malformedQueryCheck?: DdosTemplateDnsMalformedQueryCheck;
  /**
  * multi_pu_threshold_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#multi_pu_threshold_distribution DdosTemplateDns#multi_pu_threshold_distribution}
  */
  readonly multiPuThresholdDistribution?: DdosTemplateDnsMultiPuThresholdDistribution;
  /**
  * nxdomain_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#nxdomain_cfg DdosTemplateDns#nxdomain_cfg}
  */
  readonly nxdomainCfg?: DdosTemplateDnsNxdomainCfg;
  /**
  * symtimeout_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#symtimeout_cfg DdosTemplateDns#symtimeout_cfg}
  */
  readonly symtimeoutCfg?: DdosTemplateDnsSymtimeoutCfg;
}
export interface DdosTemplateDnsAllowQueryClass {
  /**
  * ANY query class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_any_query_class DdosTemplateDns#allow_any_query_class}
  */
  readonly allowAnyQueryClass?: number;
  /**
  * CHAOS query class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_chaos_query_class DdosTemplateDns#allow_chaos_query_class}
  */
  readonly allowChaosQueryClass?: number;
  /**
  * CSNET query class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_csnet_query_class DdosTemplateDns#allow_csnet_query_class}
  */
  readonly allowCsnetQueryClass?: number;
  /**
  * HESIOD query class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_hesiod_query_class DdosTemplateDns#allow_hesiod_query_class}
  */
  readonly allowHesiodQueryClass?: number;
  /**
  * INTERNET query class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_internet_query_class DdosTemplateDns#allow_internet_query_class}
  */
  readonly allowInternetQueryClass?: number;
  /**
  * NONE query class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_none_query_class DdosTemplateDns#allow_none_query_class}
  */
  readonly allowNoneQueryClass?: number;
}

export function ddosTemplateDnsAllowQueryClassToTerraform(struct?: DdosTemplateDnsAllowQueryClassOutputReference | DdosTemplateDnsAllowQueryClass): any {
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
  }
}


export function ddosTemplateDnsAllowQueryClassToHclTerraform(struct?: DdosTemplateDnsAllowQueryClassOutputReference | DdosTemplateDnsAllowQueryClass): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateDnsAllowQueryClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsAllowQueryClass | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateDnsAllowQueryClass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAnyQueryClass = undefined;
      this._allowChaosQueryClass = undefined;
      this._allowCsnetQueryClass = undefined;
      this._allowHesiodQueryClass = undefined;
      this._allowInternetQueryClass = undefined;
      this._allowNoneQueryClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAnyQueryClass = value.allowAnyQueryClass;
      this._allowChaosQueryClass = value.allowChaosQueryClass;
      this._allowCsnetQueryClass = value.allowCsnetQueryClass;
      this._allowHesiodQueryClass = value.allowHesiodQueryClass;
      this._allowInternetQueryClass = value.allowInternetQueryClass;
      this._allowNoneQueryClass = value.allowNoneQueryClass;
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
}
export interface DdosTemplateDnsAllowRecordTypeRecordNumCfg {
  /**
  * Other record type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_num_type DdosTemplateDns#allow_num_type}
  */
  readonly allowNumType?: number;
}

export function ddosTemplateDnsAllowRecordTypeRecordNumCfgToTerraform(struct?: DdosTemplateDnsAllowRecordTypeRecordNumCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_num_type: cdktf.numberToTerraform(struct!.allowNumType),
  }
}


export function ddosTemplateDnsAllowRecordTypeRecordNumCfgToHclTerraform(struct?: DdosTemplateDnsAllowRecordTypeRecordNumCfg | cdktf.IResolvable): any {
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

export class DdosTemplateDnsAllowRecordTypeRecordNumCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateDnsAllowRecordTypeRecordNumCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosTemplateDnsAllowRecordTypeRecordNumCfg | cdktf.IResolvable | undefined) {
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

export class DdosTemplateDnsAllowRecordTypeRecordNumCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateDnsAllowRecordTypeRecordNumCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateDnsAllowRecordTypeRecordNumCfgOutputReference {
    return new DdosTemplateDnsAllowRecordTypeRecordNumCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateDnsAllowRecordType {
  /**
  * Address record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_a_type DdosTemplateDns#allow_a_type}
  */
  readonly allowAType?: number;
  /**
  * IPv6 address record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_aaaa_type DdosTemplateDns#allow_aaaa_type}
  */
  readonly allowAaaaType?: number;
  /**
  * Canonical name record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_cname_type DdosTemplateDns#allow_cname_type}
  */
  readonly allowCnameType?: number;
  /**
  * Mail exchange record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_mx_type DdosTemplateDns#allow_mx_type}
  */
  readonly allowMxType?: number;
  /**
  * Name server record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_ns_type DdosTemplateDns#allow_ns_type}
  */
  readonly allowNsType?: number;
  /**
  * Service locator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#allow_srv_type DdosTemplateDns#allow_srv_type}
  */
  readonly allowSrvType?: number;
  /**
  * record_num_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#record_num_cfg DdosTemplateDns#record_num_cfg}
  */
  readonly recordNumCfg?: DdosTemplateDnsAllowRecordTypeRecordNumCfg[] | cdktf.IResolvable;
}

export function ddosTemplateDnsAllowRecordTypeToTerraform(struct?: DdosTemplateDnsAllowRecordTypeOutputReference | DdosTemplateDnsAllowRecordType): any {
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
    allow_srv_type: cdktf.numberToTerraform(struct!.allowSrvType),
    record_num_cfg: cdktf.listMapper(ddosTemplateDnsAllowRecordTypeRecordNumCfgToTerraform, true)(struct!.recordNumCfg),
  }
}


export function ddosTemplateDnsAllowRecordTypeToHclTerraform(struct?: DdosTemplateDnsAllowRecordTypeOutputReference | DdosTemplateDnsAllowRecordType): any {
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
    allow_srv_type: {
      value: cdktf.numberToHclTerraform(struct!.allowSrvType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_num_cfg: {
      value: cdktf.listMapperHcl(ddosTemplateDnsAllowRecordTypeRecordNumCfgToHclTerraform, true)(struct!.recordNumCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateDnsAllowRecordTypeRecordNumCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateDnsAllowRecordTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsAllowRecordType | undefined {
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

  public set internalValue(value: DdosTemplateDnsAllowRecordType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAType = undefined;
      this._allowAaaaType = undefined;
      this._allowCnameType = undefined;
      this._allowMxType = undefined;
      this._allowNsType = undefined;
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
  private _recordNumCfg = new DdosTemplateDnsAllowRecordTypeRecordNumCfgList(this, "record_num_cfg", false);
  public get recordNumCfg() {
    return this._recordNumCfg;
  }
  public putRecordNumCfg(value: DdosTemplateDnsAllowRecordTypeRecordNumCfg[] | cdktf.IResolvable) {
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
export interface DdosTemplateDnsDnsAuthCfg {
  /**
  * DNS authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_auth DdosTemplateDns#dns_auth}
  */
  readonly dnsAuth?: number;
  /**
  * 'udp': Drop DNS request and monitor client retry; 'force-tcp': Force DNS request over TCP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_auth_type DdosTemplateDns#dns_auth_type}
  */
  readonly dnsAuthType?: string;
  /**
  * Allow client to retransmit DNS request using different source port during udp-auth (supported in asymmetric mode only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#force_tcp_ignore_client_source_port DdosTemplateDns#force_tcp_ignore_client_source_port}
  */
  readonly forceTcpIgnoreClientSourcePort?: number;
  /**
  * Minimum sec gap in between 2 dns-udp packets for auth to pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#force_tcp_min_retry_gap DdosTemplateDns#force_tcp_min_retry_gap}
  */
  readonly forceTcpMinRetryGap?: number;
  /**
  * TCP authentication timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#force_tcp_timeout DdosTemplateDns#force_tcp_timeout}
  */
  readonly forceTcpTimeout?: number;
  /**
  * Optional minimum sec gap in between 2 dns-udp packets for auth to pass, unit is specified by min-retry-gap-interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#min_retry_gap DdosTemplateDns#min_retry_gap}
  */
  readonly minRetryGap?: number;
  /**
  * '100ms': 100ms; '1sec': 1sec;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#min_retry_gap_interval DdosTemplateDns#min_retry_gap_interval}
  */
  readonly minRetryGapInterval?: string;
  /**
  * UDP authentication timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#udp_timeout DdosTemplateDns#udp_timeout}
  */
  readonly udpTimeout?: number;
  /**
  * UDP authentication timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#udp_timeout_val_only DdosTemplateDns#udp_timeout_val_only}
  */
  readonly udpTimeoutValOnly?: number;
  /**
  * Monitor client retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#with_udp_auth DdosTemplateDns#with_udp_auth}
  */
  readonly withUdpAuth?: number;
}

export function ddosTemplateDnsDnsAuthCfgToTerraform(struct?: DdosTemplateDnsDnsAuthCfgOutputReference | DdosTemplateDnsDnsAuthCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_auth: cdktf.numberToTerraform(struct!.dnsAuth),
    dns_auth_type: cdktf.stringToTerraform(struct!.dnsAuthType),
    force_tcp_ignore_client_source_port: cdktf.numberToTerraform(struct!.forceTcpIgnoreClientSourcePort),
    force_tcp_min_retry_gap: cdktf.numberToTerraform(struct!.forceTcpMinRetryGap),
    force_tcp_timeout: cdktf.numberToTerraform(struct!.forceTcpTimeout),
    min_retry_gap: cdktf.numberToTerraform(struct!.minRetryGap),
    min_retry_gap_interval: cdktf.stringToTerraform(struct!.minRetryGapInterval),
    udp_timeout: cdktf.numberToTerraform(struct!.udpTimeout),
    udp_timeout_val_only: cdktf.numberToTerraform(struct!.udpTimeoutValOnly),
    with_udp_auth: cdktf.numberToTerraform(struct!.withUdpAuth),
  }
}


export function ddosTemplateDnsDnsAuthCfgToHclTerraform(struct?: DdosTemplateDnsDnsAuthCfgOutputReference | DdosTemplateDnsDnsAuthCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_auth: {
      value: cdktf.numberToHclTerraform(struct!.dnsAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.dnsAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_tcp_ignore_client_source_port: {
      value: cdktf.numberToHclTerraform(struct!.forceTcpIgnoreClientSourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_tcp_min_retry_gap: {
      value: cdktf.numberToHclTerraform(struct!.forceTcpMinRetryGap),
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
    min_retry_gap: {
      value: cdktf.numberToHclTerraform(struct!.minRetryGap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_retry_gap_interval: {
      value: cdktf.stringToHclTerraform(struct!.minRetryGapInterval),
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
    udp_timeout_val_only: {
      value: cdktf.numberToHclTerraform(struct!.udpTimeoutValOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    with_udp_auth: {
      value: cdktf.numberToHclTerraform(struct!.withUdpAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateDnsDnsAuthCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsDnsAuthCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAuth = this._dnsAuth;
    }
    if (this._dnsAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAuthType = this._dnsAuthType;
    }
    if (this._forceTcpIgnoreClientSourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcpIgnoreClientSourcePort = this._forceTcpIgnoreClientSourcePort;
    }
    if (this._forceTcpMinRetryGap !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcpMinRetryGap = this._forceTcpMinRetryGap;
    }
    if (this._forceTcpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcpTimeout = this._forceTcpTimeout;
    }
    if (this._minRetryGap !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRetryGap = this._minRetryGap;
    }
    if (this._minRetryGapInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRetryGapInterval = this._minRetryGapInterval;
    }
    if (this._udpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTimeout = this._udpTimeout;
    }
    if (this._udpTimeoutValOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTimeoutValOnly = this._udpTimeoutValOnly;
    }
    if (this._withUdpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.withUdpAuth = this._withUdpAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateDnsDnsAuthCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsAuth = undefined;
      this._dnsAuthType = undefined;
      this._forceTcpIgnoreClientSourcePort = undefined;
      this._forceTcpMinRetryGap = undefined;
      this._forceTcpTimeout = undefined;
      this._minRetryGap = undefined;
      this._minRetryGapInterval = undefined;
      this._udpTimeout = undefined;
      this._udpTimeoutValOnly = undefined;
      this._withUdpAuth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsAuth = value.dnsAuth;
      this._dnsAuthType = value.dnsAuthType;
      this._forceTcpIgnoreClientSourcePort = value.forceTcpIgnoreClientSourcePort;
      this._forceTcpMinRetryGap = value.forceTcpMinRetryGap;
      this._forceTcpTimeout = value.forceTcpTimeout;
      this._minRetryGap = value.minRetryGap;
      this._minRetryGapInterval = value.minRetryGapInterval;
      this._udpTimeout = value.udpTimeout;
      this._udpTimeoutValOnly = value.udpTimeoutValOnly;
      this._withUdpAuth = value.withUdpAuth;
    }
  }

  // dns_auth - computed: false, optional: true, required: false
  private _dnsAuth?: number; 
  public get dnsAuth() {
    return this.getNumberAttribute('dns_auth');
  }
  public set dnsAuth(value: number) {
    this._dnsAuth = value;
  }
  public resetDnsAuth() {
    this._dnsAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthInput() {
    return this._dnsAuth;
  }

  // dns_auth_type - computed: false, optional: true, required: false
  private _dnsAuthType?: string; 
  public get dnsAuthType() {
    return this.getStringAttribute('dns_auth_type');
  }
  public set dnsAuthType(value: string) {
    this._dnsAuthType = value;
  }
  public resetDnsAuthType() {
    this._dnsAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthTypeInput() {
    return this._dnsAuthType;
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

  // force_tcp_min_retry_gap - computed: false, optional: true, required: false
  private _forceTcpMinRetryGap?: number; 
  public get forceTcpMinRetryGap() {
    return this.getNumberAttribute('force_tcp_min_retry_gap');
  }
  public set forceTcpMinRetryGap(value: number) {
    this._forceTcpMinRetryGap = value;
  }
  public resetForceTcpMinRetryGap() {
    this._forceTcpMinRetryGap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTcpMinRetryGapInput() {
    return this._forceTcpMinRetryGap;
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

  // min_retry_gap - computed: false, optional: true, required: false
  private _minRetryGap?: number; 
  public get minRetryGap() {
    return this.getNumberAttribute('min_retry_gap');
  }
  public set minRetryGap(value: number) {
    this._minRetryGap = value;
  }
  public resetMinRetryGap() {
    this._minRetryGap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRetryGapInput() {
    return this._minRetryGap;
  }

  // min_retry_gap_interval - computed: false, optional: true, required: false
  private _minRetryGapInterval?: string; 
  public get minRetryGapInterval() {
    return this.getStringAttribute('min_retry_gap_interval');
  }
  public set minRetryGapInterval(value: string) {
    this._minRetryGapInterval = value;
  }
  public resetMinRetryGapInterval() {
    this._minRetryGapInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRetryGapIntervalInput() {
    return this._minRetryGapInterval;
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

  // udp_timeout_val_only - computed: false, optional: true, required: false
  private _udpTimeoutValOnly?: number; 
  public get udpTimeoutValOnly() {
    return this.getNumberAttribute('udp_timeout_val_only');
  }
  public set udpTimeoutValOnly(value: number) {
    this._udpTimeoutValOnly = value;
  }
  public resetUdpTimeoutValOnly() {
    this._udpTimeoutValOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutValOnlyInput() {
    return this._udpTimeoutValOnly;
  }

  // with_udp_auth - computed: false, optional: true, required: false
  private _withUdpAuth?: number; 
  public get withUdpAuth() {
    return this.getNumberAttribute('with_udp_auth');
  }
  public set withUdpAuth(value: number) {
    this._withUdpAuth = value;
  }
  public resetWithUdpAuth() {
    this._withUdpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withUdpAuthInput() {
    return this._withUdpAuth;
  }
}
export interface DdosTemplateDnsDnsRequestRateLimitTypeACfg {
  /**
  * Address record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#a DdosTemplateDns#a}
  */
  readonly a?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_a_rate DdosTemplateDns#dns_a_rate}
  */
  readonly dnsARate?: number;
}

export function ddosTemplateDnsDnsRequestRateLimitTypeACfgToTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeACfgOutputReference | DdosTemplateDnsDnsRequestRateLimitTypeACfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a: cdktf.numberToTerraform(struct!.a),
    dns_a_rate: cdktf.numberToTerraform(struct!.dnsARate),
  }
}


export function ddosTemplateDnsDnsRequestRateLimitTypeACfgToHclTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeACfgOutputReference | DdosTemplateDnsDnsRequestRateLimitTypeACfg): any {
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

export class DdosTemplateDnsDnsRequestRateLimitTypeACfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsDnsRequestRateLimitTypeACfg | undefined {
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

  public set internalValue(value: DdosTemplateDnsDnsRequestRateLimitTypeACfg | undefined) {
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
export interface DdosTemplateDnsDnsRequestRateLimitTypeAaaaCfg {
  /**
  * IPv6 address record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#aaaa DdosTemplateDns#aaaa}
  */
  readonly aaaa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_aaaa_rate DdosTemplateDns#dns_aaaa_rate}
  */
  readonly dnsAaaaRate?: number;
}

export function ddosTemplateDnsDnsRequestRateLimitTypeAaaaCfgToTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeAaaaCfgOutputReference | DdosTemplateDnsDnsRequestRateLimitTypeAaaaCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aaaa: cdktf.numberToTerraform(struct!.aaaa),
    dns_aaaa_rate: cdktf.numberToTerraform(struct!.dnsAaaaRate),
  }
}


export function ddosTemplateDnsDnsRequestRateLimitTypeAaaaCfgToHclTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeAaaaCfgOutputReference | DdosTemplateDnsDnsRequestRateLimitTypeAaaaCfg): any {
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

export class DdosTemplateDnsDnsRequestRateLimitTypeAaaaCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsDnsRequestRateLimitTypeAaaaCfg | undefined {
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

  public set internalValue(value: DdosTemplateDnsDnsRequestRateLimitTypeAaaaCfg | undefined) {
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
export interface DdosTemplateDnsDnsRequestRateLimitTypeCnameCfg {
  /**
  * Canonical name record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#cname DdosTemplateDns#cname}
  */
  readonly cname?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_cname_rate DdosTemplateDns#dns_cname_rate}
  */
  readonly dnsCnameRate?: number;
}

export function ddosTemplateDnsDnsRequestRateLimitTypeCnameCfgToTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeCnameCfgOutputReference | DdosTemplateDnsDnsRequestRateLimitTypeCnameCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cname: cdktf.numberToTerraform(struct!.cname),
    dns_cname_rate: cdktf.numberToTerraform(struct!.dnsCnameRate),
  }
}


export function ddosTemplateDnsDnsRequestRateLimitTypeCnameCfgToHclTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeCnameCfgOutputReference | DdosTemplateDnsDnsRequestRateLimitTypeCnameCfg): any {
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

export class DdosTemplateDnsDnsRequestRateLimitTypeCnameCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsDnsRequestRateLimitTypeCnameCfg | undefined {
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

  public set internalValue(value: DdosTemplateDnsDnsRequestRateLimitTypeCnameCfg | undefined) {
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
export interface DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfg {
  /**
  * Other type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_request_type DdosTemplateDns#dns_request_type}
  */
  readonly dnsRequestType?: number;
  /**
  * request rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_request_type_rate DdosTemplateDns#dns_request_type_rate}
  */
  readonly dnsRequestTypeRate?: number;
}

export function ddosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfgToTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_request_type: cdktf.numberToTerraform(struct!.dnsRequestType),
    dns_request_type_rate: cdktf.numberToTerraform(struct!.dnsRequestTypeRate),
  }
}


export function ddosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfgToHclTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfg | cdktf.IResolvable): any {
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

export class DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfg | cdktf.IResolvable | undefined) {
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

export class DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfgOutputReference {
    return new DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateDnsDnsRequestRateLimitTypeMxCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_mx_rate DdosTemplateDns#dns_mx_rate}
  */
  readonly dnsMxRate?: number;
  /**
  * Mail exchange record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#mx DdosTemplateDns#mx}
  */
  readonly mx?: number;
}

export function ddosTemplateDnsDnsRequestRateLimitTypeMxCfgToTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeMxCfgOutputReference | DdosTemplateDnsDnsRequestRateLimitTypeMxCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_mx_rate: cdktf.numberToTerraform(struct!.dnsMxRate),
    mx: cdktf.numberToTerraform(struct!.mx),
  }
}


export function ddosTemplateDnsDnsRequestRateLimitTypeMxCfgToHclTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeMxCfgOutputReference | DdosTemplateDnsDnsRequestRateLimitTypeMxCfg): any {
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

export class DdosTemplateDnsDnsRequestRateLimitTypeMxCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsDnsRequestRateLimitTypeMxCfg | undefined {
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

  public set internalValue(value: DdosTemplateDnsDnsRequestRateLimitTypeMxCfg | undefined) {
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
export interface DdosTemplateDnsDnsRequestRateLimitTypeNsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_ns_rate DdosTemplateDns#dns_ns_rate}
  */
  readonly dnsNsRate?: number;
  /**
  * Name server record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#ns DdosTemplateDns#ns}
  */
  readonly ns?: number;
}

export function ddosTemplateDnsDnsRequestRateLimitTypeNsCfgToTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeNsCfgOutputReference | DdosTemplateDnsDnsRequestRateLimitTypeNsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ns_rate: cdktf.numberToTerraform(struct!.dnsNsRate),
    ns: cdktf.numberToTerraform(struct!.ns),
  }
}


export function ddosTemplateDnsDnsRequestRateLimitTypeNsCfgToHclTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeNsCfgOutputReference | DdosTemplateDnsDnsRequestRateLimitTypeNsCfg): any {
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

export class DdosTemplateDnsDnsRequestRateLimitTypeNsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsDnsRequestRateLimitTypeNsCfg | undefined {
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

  public set internalValue(value: DdosTemplateDnsDnsRequestRateLimitTypeNsCfg | undefined) {
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
export interface DdosTemplateDnsDnsRequestRateLimitTypeSrvCfg {
  /**
  * DNS request rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_srv_rate DdosTemplateDns#dns_srv_rate}
  */
  readonly dnsSrvRate?: number;
  /**
  * Service locator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#srv DdosTemplateDns#srv}
  */
  readonly srv?: number;
}

export function ddosTemplateDnsDnsRequestRateLimitTypeSrvCfgToTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeSrvCfgOutputReference | DdosTemplateDnsDnsRequestRateLimitTypeSrvCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_srv_rate: cdktf.numberToTerraform(struct!.dnsSrvRate),
    srv: cdktf.numberToTerraform(struct!.srv),
  }
}


export function ddosTemplateDnsDnsRequestRateLimitTypeSrvCfgToHclTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeSrvCfgOutputReference | DdosTemplateDnsDnsRequestRateLimitTypeSrvCfg): any {
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

export class DdosTemplateDnsDnsRequestRateLimitTypeSrvCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsDnsRequestRateLimitTypeSrvCfg | undefined {
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

  public set internalValue(value: DdosTemplateDnsDnsRequestRateLimitTypeSrvCfg | undefined) {
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
export interface DdosTemplateDnsDnsRequestRateLimitType {
  /**
  * a_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#a_cfg DdosTemplateDns#a_cfg}
  */
  readonly aCfg?: DdosTemplateDnsDnsRequestRateLimitTypeACfg;
  /**
  * aaaa_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#aaaa_cfg DdosTemplateDns#aaaa_cfg}
  */
  readonly aaaaCfg?: DdosTemplateDnsDnsRequestRateLimitTypeAaaaCfg;
  /**
  * cname_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#cname_cfg DdosTemplateDns#cname_cfg}
  */
  readonly cnameCfg?: DdosTemplateDnsDnsRequestRateLimitTypeCnameCfg;
  /**
  * dns_type_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_type_cfg DdosTemplateDns#dns_type_cfg}
  */
  readonly dnsTypeCfg?: DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfg[] | cdktf.IResolvable;
  /**
  * mx_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#mx_cfg DdosTemplateDns#mx_cfg}
  */
  readonly mxCfg?: DdosTemplateDnsDnsRequestRateLimitTypeMxCfg;
  /**
  * ns_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#ns_cfg DdosTemplateDns#ns_cfg}
  */
  readonly nsCfg?: DdosTemplateDnsDnsRequestRateLimitTypeNsCfg;
  /**
  * srv_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#srv_cfg DdosTemplateDns#srv_cfg}
  */
  readonly srvCfg?: DdosTemplateDnsDnsRequestRateLimitTypeSrvCfg;
}

export function ddosTemplateDnsDnsRequestRateLimitTypeToTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeOutputReference | DdosTemplateDnsDnsRequestRateLimitType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a_cfg: ddosTemplateDnsDnsRequestRateLimitTypeACfgToTerraform(struct!.aCfg),
    aaaa_cfg: ddosTemplateDnsDnsRequestRateLimitTypeAaaaCfgToTerraform(struct!.aaaaCfg),
    cname_cfg: ddosTemplateDnsDnsRequestRateLimitTypeCnameCfgToTerraform(struct!.cnameCfg),
    dns_type_cfg: cdktf.listMapper(ddosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfgToTerraform, true)(struct!.dnsTypeCfg),
    mx_cfg: ddosTemplateDnsDnsRequestRateLimitTypeMxCfgToTerraform(struct!.mxCfg),
    ns_cfg: ddosTemplateDnsDnsRequestRateLimitTypeNsCfgToTerraform(struct!.nsCfg),
    srv_cfg: ddosTemplateDnsDnsRequestRateLimitTypeSrvCfgToTerraform(struct!.srvCfg),
  }
}


export function ddosTemplateDnsDnsRequestRateLimitTypeToHclTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitTypeOutputReference | DdosTemplateDnsDnsRequestRateLimitType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a_cfg: {
      value: ddosTemplateDnsDnsRequestRateLimitTypeACfgToHclTerraform(struct!.aCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateDnsDnsRequestRateLimitTypeACfgList",
    },
    aaaa_cfg: {
      value: ddosTemplateDnsDnsRequestRateLimitTypeAaaaCfgToHclTerraform(struct!.aaaaCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateDnsDnsRequestRateLimitTypeAaaaCfgList",
    },
    cname_cfg: {
      value: ddosTemplateDnsDnsRequestRateLimitTypeCnameCfgToHclTerraform(struct!.cnameCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateDnsDnsRequestRateLimitTypeCnameCfgList",
    },
    dns_type_cfg: {
      value: cdktf.listMapperHcl(ddosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfgToHclTerraform, true)(struct!.dnsTypeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfgList",
    },
    mx_cfg: {
      value: ddosTemplateDnsDnsRequestRateLimitTypeMxCfgToHclTerraform(struct!.mxCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateDnsDnsRequestRateLimitTypeMxCfgList",
    },
    ns_cfg: {
      value: ddosTemplateDnsDnsRequestRateLimitTypeNsCfgToHclTerraform(struct!.nsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateDnsDnsRequestRateLimitTypeNsCfgList",
    },
    srv_cfg: {
      value: ddosTemplateDnsDnsRequestRateLimitTypeSrvCfgToHclTerraform(struct!.srvCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateDnsDnsRequestRateLimitTypeSrvCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateDnsDnsRequestRateLimitTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsDnsRequestRateLimitType | undefined {
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

  public set internalValue(value: DdosTemplateDnsDnsRequestRateLimitType | undefined) {
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
  private _aCfg = new DdosTemplateDnsDnsRequestRateLimitTypeACfgOutputReference(this, "a_cfg");
  public get aCfg() {
    return this._aCfg;
  }
  public putACfg(value: DdosTemplateDnsDnsRequestRateLimitTypeACfg) {
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
  private _aaaaCfg = new DdosTemplateDnsDnsRequestRateLimitTypeAaaaCfgOutputReference(this, "aaaa_cfg");
  public get aaaaCfg() {
    return this._aaaaCfg;
  }
  public putAaaaCfg(value: DdosTemplateDnsDnsRequestRateLimitTypeAaaaCfg) {
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
  private _cnameCfg = new DdosTemplateDnsDnsRequestRateLimitTypeCnameCfgOutputReference(this, "cname_cfg");
  public get cnameCfg() {
    return this._cnameCfg;
  }
  public putCnameCfg(value: DdosTemplateDnsDnsRequestRateLimitTypeCnameCfg) {
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
  private _dnsTypeCfg = new DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfgList(this, "dns_type_cfg", false);
  public get dnsTypeCfg() {
    return this._dnsTypeCfg;
  }
  public putDnsTypeCfg(value: DdosTemplateDnsDnsRequestRateLimitTypeDnsTypeCfg[] | cdktf.IResolvable) {
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
  private _mxCfg = new DdosTemplateDnsDnsRequestRateLimitTypeMxCfgOutputReference(this, "mx_cfg");
  public get mxCfg() {
    return this._mxCfg;
  }
  public putMxCfg(value: DdosTemplateDnsDnsRequestRateLimitTypeMxCfg) {
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
  private _nsCfg = new DdosTemplateDnsDnsRequestRateLimitTypeNsCfgOutputReference(this, "ns_cfg");
  public get nsCfg() {
    return this._nsCfg;
  }
  public putNsCfg(value: DdosTemplateDnsDnsRequestRateLimitTypeNsCfg) {
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
  private _srvCfg = new DdosTemplateDnsDnsRequestRateLimitTypeSrvCfgOutputReference(this, "srv_cfg");
  public get srvCfg() {
    return this._srvCfg;
  }
  public putSrvCfg(value: DdosTemplateDnsDnsRequestRateLimitTypeSrvCfg) {
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
export interface DdosTemplateDnsDnsRequestRateLimit {
  /**
  * type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#type DdosTemplateDns#type}
  */
  readonly type?: DdosTemplateDnsDnsRequestRateLimitType;
}

export function ddosTemplateDnsDnsRequestRateLimitToTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitOutputReference | DdosTemplateDnsDnsRequestRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: ddosTemplateDnsDnsRequestRateLimitTypeToTerraform(struct!.type),
  }
}


export function ddosTemplateDnsDnsRequestRateLimitToHclTerraform(struct?: DdosTemplateDnsDnsRequestRateLimitOutputReference | DdosTemplateDnsDnsRequestRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: ddosTemplateDnsDnsRequestRateLimitTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateDnsDnsRequestRateLimitTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateDnsDnsRequestRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsDnsRequestRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateDnsDnsRequestRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type.internalValue = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type = new DdosTemplateDnsDnsRequestRateLimitTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DdosTemplateDnsDnsRequestRateLimitType) {
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
export interface DdosTemplateDnsFqdnCfg {
  /**
  * 'domain-name': Domain Name; 'src-ip': Source IP address; 'both': Use both Domain Name and Source IP address for rate-limiting;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#by DdosTemplateDns#by}
  */
  readonly by?: string;
  /**
  * Limiting rate (Range: 5-8000 for FQDN domain based rate limiting, 5-16000000 for FQDN label count based rate limiting)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_fqdn_rate DdosTemplateDns#dns_fqdn_rate}
  */
  readonly dnsFqdnRate?: number;
  /**
  * DNS Rate limiting on the basis of FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_fqdn_rate_limit DdosTemplateDns#dns_fqdn_rate_limit}
  */
  readonly dnsFqdnRateLimit?: number;
  /**
  * FQDN label count (Range: 1-8)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#fqdn_rate_label_count DdosTemplateDns#fqdn_rate_label_count}
  */
  readonly fqdnRateLabelCount?: number;
  /**
  * Suffix count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#fqdn_rate_suffix DdosTemplateDns#fqdn_rate_suffix}
  */
  readonly fqdnRateSuffix?: number;
  /**
  * Number of suffixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#fqdn_rate_suffix_by DdosTemplateDns#fqdn_rate_suffix_by}
  */
  readonly fqdnRateSuffixBy?: number;
  /**
  * 'domain-name': Domain Name; 'src-ip': Source IP address; 'label-count': FQDN label count;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#per DdosTemplateDns#per}
  */
  readonly per?: string;
  /**
  * Use both Domain Name and Source IP address for rate-limiting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#per_domain_per_src_ip DdosTemplateDns#per_domain_per_src_ip}
  */
  readonly perDomainPerSrcIp?: number;
}

export function ddosTemplateDnsFqdnCfgToTerraform(struct?: DdosTemplateDnsFqdnCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    by: cdktf.stringToTerraform(struct!.by),
    dns_fqdn_rate: cdktf.numberToTerraform(struct!.dnsFqdnRate),
    dns_fqdn_rate_limit: cdktf.numberToTerraform(struct!.dnsFqdnRateLimit),
    fqdn_rate_label_count: cdktf.numberToTerraform(struct!.fqdnRateLabelCount),
    fqdn_rate_suffix: cdktf.numberToTerraform(struct!.fqdnRateSuffix),
    fqdn_rate_suffix_by: cdktf.numberToTerraform(struct!.fqdnRateSuffixBy),
    per: cdktf.stringToTerraform(struct!.per),
    per_domain_per_src_ip: cdktf.numberToTerraform(struct!.perDomainPerSrcIp),
  }
}


export function ddosTemplateDnsFqdnCfgToHclTerraform(struct?: DdosTemplateDnsFqdnCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    by: {
      value: cdktf.stringToHclTerraform(struct!.by),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_fqdn_rate: {
      value: cdktf.numberToHclTerraform(struct!.dnsFqdnRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_fqdn_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.dnsFqdnRateLimit),
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
    fqdn_rate_suffix_by: {
      value: cdktf.numberToHclTerraform(struct!.fqdnRateSuffixBy),
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

export class DdosTemplateDnsFqdnCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateDnsFqdnCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._by !== undefined) {
      hasAnyValues = true;
      internalValueResult.by = this._by;
    }
    if (this._dnsFqdnRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFqdnRate = this._dnsFqdnRate;
    }
    if (this._dnsFqdnRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFqdnRateLimit = this._dnsFqdnRateLimit;
    }
    if (this._fqdnRateLabelCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnRateLabelCount = this._fqdnRateLabelCount;
    }
    if (this._fqdnRateSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnRateSuffix = this._fqdnRateSuffix;
    }
    if (this._fqdnRateSuffixBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnRateSuffixBy = this._fqdnRateSuffixBy;
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

  public set internalValue(value: DdosTemplateDnsFqdnCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._by = undefined;
      this._dnsFqdnRate = undefined;
      this._dnsFqdnRateLimit = undefined;
      this._fqdnRateLabelCount = undefined;
      this._fqdnRateSuffix = undefined;
      this._fqdnRateSuffixBy = undefined;
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
      this._by = value.by;
      this._dnsFqdnRate = value.dnsFqdnRate;
      this._dnsFqdnRateLimit = value.dnsFqdnRateLimit;
      this._fqdnRateLabelCount = value.fqdnRateLabelCount;
      this._fqdnRateSuffix = value.fqdnRateSuffix;
      this._fqdnRateSuffixBy = value.fqdnRateSuffixBy;
      this._per = value.per;
      this._perDomainPerSrcIp = value.perDomainPerSrcIp;
    }
  }

  // by - computed: false, optional: true, required: false
  private _by?: string; 
  public get by() {
    return this.getStringAttribute('by');
  }
  public set by(value: string) {
    this._by = value;
  }
  public resetBy() {
    this._by = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byInput() {
    return this._by;
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

  // dns_fqdn_rate_limit - computed: false, optional: true, required: false
  private _dnsFqdnRateLimit?: number; 
  public get dnsFqdnRateLimit() {
    return this.getNumberAttribute('dns_fqdn_rate_limit');
  }
  public set dnsFqdnRateLimit(value: number) {
    this._dnsFqdnRateLimit = value;
  }
  public resetDnsFqdnRateLimit() {
    this._dnsFqdnRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFqdnRateLimitInput() {
    return this._dnsFqdnRateLimit;
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

  // fqdn_rate_suffix_by - computed: false, optional: true, required: false
  private _fqdnRateSuffixBy?: number; 
  public get fqdnRateSuffixBy() {
    return this.getNumberAttribute('fqdn_rate_suffix_by');
  }
  public set fqdnRateSuffixBy(value: number) {
    this._fqdnRateSuffixBy = value;
  }
  public resetFqdnRateSuffixBy() {
    this._fqdnRateSuffixBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnRateSuffixByInput() {
    return this._fqdnRateSuffixBy;
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

export class DdosTemplateDnsFqdnCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateDnsFqdnCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateDnsFqdnCfgOutputReference {
    return new DdosTemplateDnsFqdnCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateDnsFqdnLabelLenCfg {
  /**
  * Maximum FQDN label length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#fqdn_label_length DdosTemplateDns#fqdn_label_length}
  */
  readonly fqdnLabelLength?: number;
  /**
  * Number of suffixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#fqdn_label_suffix DdosTemplateDns#fqdn_label_suffix}
  */
  readonly fqdnLabelSuffix?: number;
  /**
  * Maximum length of FQDN label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#label_length DdosTemplateDns#label_length}
  */
  readonly labelLength?: number;
}

export function ddosTemplateDnsFqdnLabelLenCfgToTerraform(struct?: DdosTemplateDnsFqdnLabelLenCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn_label_length: cdktf.numberToTerraform(struct!.fqdnLabelLength),
    fqdn_label_suffix: cdktf.numberToTerraform(struct!.fqdnLabelSuffix),
    label_length: cdktf.numberToTerraform(struct!.labelLength),
  }
}


export function ddosTemplateDnsFqdnLabelLenCfgToHclTerraform(struct?: DdosTemplateDnsFqdnLabelLenCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn_label_length: {
      value: cdktf.numberToHclTerraform(struct!.fqdnLabelLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DdosTemplateDnsFqdnLabelLenCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateDnsFqdnLabelLenCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdnLabelLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnLabelLength = this._fqdnLabelLength;
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

  public set internalValue(value: DdosTemplateDnsFqdnLabelLenCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdnLabelLength = undefined;
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
      this._fqdnLabelLength = value.fqdnLabelLength;
      this._fqdnLabelSuffix = value.fqdnLabelSuffix;
      this._labelLength = value.labelLength;
    }
  }

  // fqdn_label_length - computed: false, optional: true, required: false
  private _fqdnLabelLength?: number; 
  public get fqdnLabelLength() {
    return this.getNumberAttribute('fqdn_label_length');
  }
  public set fqdnLabelLength(value: number) {
    this._fqdnLabelLength = value;
  }
  public resetFqdnLabelLength() {
    this._fqdnLabelLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLabelLengthInput() {
    return this._fqdnLabelLength;
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

export class DdosTemplateDnsFqdnLabelLenCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateDnsFqdnLabelLenCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateDnsFqdnLabelLenCfgOutputReference {
    return new DdosTemplateDnsFqdnLabelLenCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateDnsMalformedQueryCheck {
  /**
  * 'disable': When malform check is enabled, TPS always drops DNS query with non query opcode, this option disables this opcode check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#non_query_opcode_check DdosTemplateDns#non_query_opcode_check}
  */
  readonly nonQueryOpcodeCheck?: string;
  /**
  * Bypass DNS fragmented and TCP segmented Queries(Default: dropped)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#skip_multi_packet_check DdosTemplateDns#skip_multi_packet_check}
  */
  readonly skipMultiPacketCheck?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#uuid DdosTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * 'basic-header-check': Basic header validation for DNS TCP/UDP queries; 'extended-header-check': Extended header/query validation for DNS TCP/UDP queries; 'disable': Disable Malform query validation for DNS TCP/UDP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#validation_type DdosTemplateDns#validation_type}
  */
  readonly validationType?: string;
}

export function ddosTemplateDnsMalformedQueryCheckToTerraform(struct?: DdosTemplateDnsMalformedQueryCheckOutputReference | DdosTemplateDnsMalformedQueryCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_query_opcode_check: cdktf.stringToTerraform(struct!.nonQueryOpcodeCheck),
    skip_multi_packet_check: cdktf.numberToTerraform(struct!.skipMultiPacketCheck),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    validation_type: cdktf.stringToTerraform(struct!.validationType),
  }
}


export function ddosTemplateDnsMalformedQueryCheckToHclTerraform(struct?: DdosTemplateDnsMalformedQueryCheckOutputReference | DdosTemplateDnsMalformedQueryCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosTemplateDnsMalformedQueryCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsMalformedQueryCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DdosTemplateDnsMalformedQueryCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nonQueryOpcodeCheck = undefined;
      this._skipMultiPacketCheck = undefined;
      this._uuid = undefined;
      this._validationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nonQueryOpcodeCheck = value.nonQueryOpcodeCheck;
      this._skipMultiPacketCheck = value.skipMultiPacketCheck;
      this._uuid = value.uuid;
      this._validationType = value.validationType;
    }
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
export interface DdosTemplateDnsMultiPuThresholdDistribution {
  /**
  * 'disable': Destination side rate limit only. Default: Enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#multi_pu_threshold_distribution_disable DdosTemplateDns#multi_pu_threshold_distribution_disable}
  */
  readonly multiPuThresholdDistributionDisable?: string;
  /**
  * Destination side rate limit only. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#multi_pu_threshold_distribution_value DdosTemplateDns#multi_pu_threshold_distribution_value}
  */
  readonly multiPuThresholdDistributionValue?: number;
}

export function ddosTemplateDnsMultiPuThresholdDistributionToTerraform(struct?: DdosTemplateDnsMultiPuThresholdDistributionOutputReference | DdosTemplateDnsMultiPuThresholdDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multi_pu_threshold_distribution_disable: cdktf.stringToTerraform(struct!.multiPuThresholdDistributionDisable),
    multi_pu_threshold_distribution_value: cdktf.numberToTerraform(struct!.multiPuThresholdDistributionValue),
  }
}


export function ddosTemplateDnsMultiPuThresholdDistributionToHclTerraform(struct?: DdosTemplateDnsMultiPuThresholdDistributionOutputReference | DdosTemplateDnsMultiPuThresholdDistribution): any {
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

export class DdosTemplateDnsMultiPuThresholdDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsMultiPuThresholdDistribution | undefined {
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

  public set internalValue(value: DdosTemplateDnsMultiPuThresholdDistribution | undefined) {
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
export interface DdosTemplateDnsNxdomainCfg {
  /**
  * Limiting rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_nxdomain_rate DdosTemplateDns#dns_nxdomain_rate}
  */
  readonly dnsNxdomainRate?: number;
  /**
  * DNS NXDOMAIN Rate Limiting (SRC support only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_nxdomain_rate_limit DdosTemplateDns#dns_nxdomain_rate_limit}
  */
  readonly dnsNxdomainRateLimit?: number;
  /**
  * 'drop': Drop queries if rate is exceeded; 'black-list': Black-List source if rate is exceeded;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#dns_nxdomain_rate_limit_action DdosTemplateDns#dns_nxdomain_rate_limit_action}
  */
  readonly dnsNxdomainRateLimitAction?: string;
}

export function ddosTemplateDnsNxdomainCfgToTerraform(struct?: DdosTemplateDnsNxdomainCfgOutputReference | DdosTemplateDnsNxdomainCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_nxdomain_rate: cdktf.numberToTerraform(struct!.dnsNxdomainRate),
    dns_nxdomain_rate_limit: cdktf.numberToTerraform(struct!.dnsNxdomainRateLimit),
    dns_nxdomain_rate_limit_action: cdktf.stringToTerraform(struct!.dnsNxdomainRateLimitAction),
  }
}


export function ddosTemplateDnsNxdomainCfgToHclTerraform(struct?: DdosTemplateDnsNxdomainCfgOutputReference | DdosTemplateDnsNxdomainCfg): any {
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
    dns_nxdomain_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.dnsNxdomainRateLimit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateDnsNxdomainCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsNxdomainCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsNxdomainRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNxdomainRate = this._dnsNxdomainRate;
    }
    if (this._dnsNxdomainRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNxdomainRateLimit = this._dnsNxdomainRateLimit;
    }
    if (this._dnsNxdomainRateLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNxdomainRateLimitAction = this._dnsNxdomainRateLimitAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateDnsNxdomainCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsNxdomainRate = undefined;
      this._dnsNxdomainRateLimit = undefined;
      this._dnsNxdomainRateLimitAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsNxdomainRate = value.dnsNxdomainRate;
      this._dnsNxdomainRateLimit = value.dnsNxdomainRateLimit;
      this._dnsNxdomainRateLimitAction = value.dnsNxdomainRateLimitAction;
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

  // dns_nxdomain_rate_limit - computed: false, optional: true, required: false
  private _dnsNxdomainRateLimit?: number; 
  public get dnsNxdomainRateLimit() {
    return this.getNumberAttribute('dns_nxdomain_rate_limit');
  }
  public set dnsNxdomainRateLimit(value: number) {
    this._dnsNxdomainRateLimit = value;
  }
  public resetDnsNxdomainRateLimit() {
    this._dnsNxdomainRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNxdomainRateLimitInput() {
    return this._dnsNxdomainRateLimit;
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
}
export interface DdosTemplateDnsSymtimeoutCfg {
  /**
  * Timeout for DNS Symmetric session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#sym_timeout DdosTemplateDns#sym_timeout}
  */
  readonly symTimeout?: number;
  /**
  * Session timeout value in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#sym_timeout_value DdosTemplateDns#sym_timeout_value}
  */
  readonly symTimeoutValue?: number;
}

export function ddosTemplateDnsSymtimeoutCfgToTerraform(struct?: DdosTemplateDnsSymtimeoutCfgOutputReference | DdosTemplateDnsSymtimeoutCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sym_timeout: cdktf.numberToTerraform(struct!.symTimeout),
    sym_timeout_value: cdktf.numberToTerraform(struct!.symTimeoutValue),
  }
}


export function ddosTemplateDnsSymtimeoutCfgToHclTerraform(struct?: DdosTemplateDnsSymtimeoutCfgOutputReference | DdosTemplateDnsSymtimeoutCfg): any {
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

export class DdosTemplateDnsSymtimeoutCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateDnsSymtimeoutCfg | undefined {
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

  public set internalValue(value: DdosTemplateDnsSymtimeoutCfg | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns thunder_ddos_template_dns}
*/
export class DdosTemplateDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateDns to import
  * @param importFromId The id of the existing DdosTemplateDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_dns thunder_ddos_template_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateDnsConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_dns',
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
    this._action = config.action;
    this._dnsAnyCheck = config.dnsAnyCheck;
    this._domainGroupName = config.domainGroupName;
    this._domainGroupRateExceedAction = config.domainGroupRateExceedAction;
    this._domainGroupRatePerService = config.domainGroupRatePerService;
    this._encapTemplate = config.encapTemplate;
    this._fqdnLabelCount = config.fqdnLabelCount;
    this._id = config.id;
    this._name = config.name;
    this._onNoMatch = config.onNoMatch;
    this._queryRateThresholdForCacheServing = config.queryRateThresholdForCacheServing;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._allowQueryClass.internalValue = config.allowQueryClass;
    this._allowRecordType.internalValue = config.allowRecordType;
    this._dnsAuthCfg.internalValue = config.dnsAuthCfg;
    this._dnsRequestRateLimit.internalValue = config.dnsRequestRateLimit;
    this._fqdnCfg.internalValue = config.fqdnCfg;
    this._fqdnLabelLenCfg.internalValue = config.fqdnLabelLenCfg;
    this._malformedQueryCheck.internalValue = config.malformedQueryCheck;
    this._multiPuThresholdDistribution.internalValue = config.multiPuThresholdDistribution;
    this._nxdomainCfg.internalValue = config.nxdomainCfg;
    this._symtimeoutCfg.internalValue = config.symtimeoutCfg;
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

  // fqdn_label_count - computed: false, optional: true, required: false
  private _fqdnLabelCount?: number; 
  public get fqdnLabelCount() {
    return this.getNumberAttribute('fqdn_label_count');
  }
  public set fqdnLabelCount(value: number) {
    this._fqdnLabelCount = value;
  }
  public resetFqdnLabelCount() {
    this._fqdnLabelCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLabelCountInput() {
    return this._fqdnLabelCount;
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

  // query_rate_threshold_for_cache_serving - computed: false, optional: true, required: false
  private _queryRateThresholdForCacheServing?: number; 
  public get queryRateThresholdForCacheServing() {
    return this.getNumberAttribute('query_rate_threshold_for_cache_serving');
  }
  public set queryRateThresholdForCacheServing(value: number) {
    this._queryRateThresholdForCacheServing = value;
  }
  public resetQueryRateThresholdForCacheServing() {
    this._queryRateThresholdForCacheServing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryRateThresholdForCacheServingInput() {
    return this._queryRateThresholdForCacheServing;
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
  private _allowQueryClass = new DdosTemplateDnsAllowQueryClassOutputReference(this, "allow_query_class");
  public get allowQueryClass() {
    return this._allowQueryClass;
  }
  public putAllowQueryClass(value: DdosTemplateDnsAllowQueryClass) {
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
  private _allowRecordType = new DdosTemplateDnsAllowRecordTypeOutputReference(this, "allow_record_type");
  public get allowRecordType() {
    return this._allowRecordType;
  }
  public putAllowRecordType(value: DdosTemplateDnsAllowRecordType) {
    this._allowRecordType.internalValue = value;
  }
  public resetAllowRecordType() {
    this._allowRecordType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRecordTypeInput() {
    return this._allowRecordType.internalValue;
  }

  // dns_auth_cfg - computed: false, optional: true, required: false
  private _dnsAuthCfg = new DdosTemplateDnsDnsAuthCfgOutputReference(this, "dns_auth_cfg");
  public get dnsAuthCfg() {
    return this._dnsAuthCfg;
  }
  public putDnsAuthCfg(value: DdosTemplateDnsDnsAuthCfg) {
    this._dnsAuthCfg.internalValue = value;
  }
  public resetDnsAuthCfg() {
    this._dnsAuthCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthCfgInput() {
    return this._dnsAuthCfg.internalValue;
  }

  // dns_request_rate_limit - computed: false, optional: true, required: false
  private _dnsRequestRateLimit = new DdosTemplateDnsDnsRequestRateLimitOutputReference(this, "dns_request_rate_limit");
  public get dnsRequestRateLimit() {
    return this._dnsRequestRateLimit;
  }
  public putDnsRequestRateLimit(value: DdosTemplateDnsDnsRequestRateLimit) {
    this._dnsRequestRateLimit.internalValue = value;
  }
  public resetDnsRequestRateLimit() {
    this._dnsRequestRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRequestRateLimitInput() {
    return this._dnsRequestRateLimit.internalValue;
  }

  // fqdn_cfg - computed: false, optional: true, required: false
  private _fqdnCfg = new DdosTemplateDnsFqdnCfgList(this, "fqdn_cfg", false);
  public get fqdnCfg() {
    return this._fqdnCfg;
  }
  public putFqdnCfg(value: DdosTemplateDnsFqdnCfg[] | cdktf.IResolvable) {
    this._fqdnCfg.internalValue = value;
  }
  public resetFqdnCfg() {
    this._fqdnCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnCfgInput() {
    return this._fqdnCfg.internalValue;
  }

  // fqdn_label_len_cfg - computed: false, optional: true, required: false
  private _fqdnLabelLenCfg = new DdosTemplateDnsFqdnLabelLenCfgList(this, "fqdn_label_len_cfg", false);
  public get fqdnLabelLenCfg() {
    return this._fqdnLabelLenCfg;
  }
  public putFqdnLabelLenCfg(value: DdosTemplateDnsFqdnLabelLenCfg[] | cdktf.IResolvable) {
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
  private _malformedQueryCheck = new DdosTemplateDnsMalformedQueryCheckOutputReference(this, "malformed_query_check");
  public get malformedQueryCheck() {
    return this._malformedQueryCheck;
  }
  public putMalformedQueryCheck(value: DdosTemplateDnsMalformedQueryCheck) {
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
  private _multiPuThresholdDistribution = new DdosTemplateDnsMultiPuThresholdDistributionOutputReference(this, "multi_pu_threshold_distribution");
  public get multiPuThresholdDistribution() {
    return this._multiPuThresholdDistribution;
  }
  public putMultiPuThresholdDistribution(value: DdosTemplateDnsMultiPuThresholdDistribution) {
    this._multiPuThresholdDistribution.internalValue = value;
  }
  public resetMultiPuThresholdDistribution() {
    this._multiPuThresholdDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionInput() {
    return this._multiPuThresholdDistribution.internalValue;
  }

  // nxdomain_cfg - computed: false, optional: true, required: false
  private _nxdomainCfg = new DdosTemplateDnsNxdomainCfgOutputReference(this, "nxdomain_cfg");
  public get nxdomainCfg() {
    return this._nxdomainCfg;
  }
  public putNxdomainCfg(value: DdosTemplateDnsNxdomainCfg) {
    this._nxdomainCfg.internalValue = value;
  }
  public resetNxdomainCfg() {
    this._nxdomainCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainCfgInput() {
    return this._nxdomainCfg.internalValue;
  }

  // symtimeout_cfg - computed: false, optional: true, required: false
  private _symtimeoutCfg = new DdosTemplateDnsSymtimeoutCfgOutputReference(this, "symtimeout_cfg");
  public get symtimeoutCfg() {
    return this._symtimeoutCfg;
  }
  public putSymtimeoutCfg(value: DdosTemplateDnsSymtimeoutCfg) {
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
      action: cdktf.stringToTerraform(this._action),
      dns_any_check: cdktf.numberToTerraform(this._dnsAnyCheck),
      domain_group_name: cdktf.stringToTerraform(this._domainGroupName),
      domain_group_rate_exceed_action: cdktf.stringToTerraform(this._domainGroupRateExceedAction),
      domain_group_rate_per_service: cdktf.numberToTerraform(this._domainGroupRatePerService),
      encap_template: cdktf.stringToTerraform(this._encapTemplate),
      fqdn_label_count: cdktf.numberToTerraform(this._fqdnLabelCount),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      on_no_match: cdktf.stringToTerraform(this._onNoMatch),
      query_rate_threshold_for_cache_serving: cdktf.numberToTerraform(this._queryRateThresholdForCacheServing),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      allow_query_class: ddosTemplateDnsAllowQueryClassToTerraform(this._allowQueryClass.internalValue),
      allow_record_type: ddosTemplateDnsAllowRecordTypeToTerraform(this._allowRecordType.internalValue),
      dns_auth_cfg: ddosTemplateDnsDnsAuthCfgToTerraform(this._dnsAuthCfg.internalValue),
      dns_request_rate_limit: ddosTemplateDnsDnsRequestRateLimitToTerraform(this._dnsRequestRateLimit.internalValue),
      fqdn_cfg: cdktf.listMapper(ddosTemplateDnsFqdnCfgToTerraform, true)(this._fqdnCfg.internalValue),
      fqdn_label_len_cfg: cdktf.listMapper(ddosTemplateDnsFqdnLabelLenCfgToTerraform, true)(this._fqdnLabelLenCfg.internalValue),
      malformed_query_check: ddosTemplateDnsMalformedQueryCheckToTerraform(this._malformedQueryCheck.internalValue),
      multi_pu_threshold_distribution: ddosTemplateDnsMultiPuThresholdDistributionToTerraform(this._multiPuThresholdDistribution.internalValue),
      nxdomain_cfg: ddosTemplateDnsNxdomainCfgToTerraform(this._nxdomainCfg.internalValue),
      symtimeout_cfg: ddosTemplateDnsSymtimeoutCfgToTerraform(this._symtimeoutCfg.internalValue),
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
      dns_any_check: {
        value: cdktf.numberToHclTerraform(this._dnsAnyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_group_name: {
        value: cdktf.stringToHclTerraform(this._domainGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group_rate_exceed_action: {
        value: cdktf.stringToHclTerraform(this._domainGroupRateExceedAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group_rate_per_service: {
        value: cdktf.numberToHclTerraform(this._domainGroupRatePerService),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encap_template: {
        value: cdktf.stringToHclTerraform(this._encapTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn_label_count: {
        value: cdktf.numberToHclTerraform(this._fqdnLabelCount),
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
      query_rate_threshold_for_cache_serving: {
        value: cdktf.numberToHclTerraform(this._queryRateThresholdForCacheServing),
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
      allow_query_class: {
        value: ddosTemplateDnsAllowQueryClassToHclTerraform(this._allowQueryClass.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateDnsAllowQueryClassList",
      },
      allow_record_type: {
        value: ddosTemplateDnsAllowRecordTypeToHclTerraform(this._allowRecordType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateDnsAllowRecordTypeList",
      },
      dns_auth_cfg: {
        value: ddosTemplateDnsDnsAuthCfgToHclTerraform(this._dnsAuthCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateDnsDnsAuthCfgList",
      },
      dns_request_rate_limit: {
        value: ddosTemplateDnsDnsRequestRateLimitToHclTerraform(this._dnsRequestRateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateDnsDnsRequestRateLimitList",
      },
      fqdn_cfg: {
        value: cdktf.listMapperHcl(ddosTemplateDnsFqdnCfgToHclTerraform, true)(this._fqdnCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateDnsFqdnCfgList",
      },
      fqdn_label_len_cfg: {
        value: cdktf.listMapperHcl(ddosTemplateDnsFqdnLabelLenCfgToHclTerraform, true)(this._fqdnLabelLenCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateDnsFqdnLabelLenCfgList",
      },
      malformed_query_check: {
        value: ddosTemplateDnsMalformedQueryCheckToHclTerraform(this._malformedQueryCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateDnsMalformedQueryCheckList",
      },
      multi_pu_threshold_distribution: {
        value: ddosTemplateDnsMultiPuThresholdDistributionToHclTerraform(this._multiPuThresholdDistribution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateDnsMultiPuThresholdDistributionList",
      },
      nxdomain_cfg: {
        value: ddosTemplateDnsNxdomainCfgToHclTerraform(this._nxdomainCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateDnsNxdomainCfgList",
      },
      symtimeout_cfg: {
        value: ddosTemplateDnsSymtimeoutCfgToHclTerraform(this._symtimeoutCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateDnsSymtimeoutCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
