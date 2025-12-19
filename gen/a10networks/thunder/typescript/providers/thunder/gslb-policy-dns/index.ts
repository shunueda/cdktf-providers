// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbPolicyDnsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply DNS action for service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#action GslbPolicyDnsA#action}
  */
  readonly action?: number;
  /**
  * 'drop': Drop query; 'reject': Send refuse response; 'ignore': Send empty response;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#action_type GslbPolicyDnsA#action_type}
  */
  readonly actionType?: string;
  /**
  * Only keep active servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#active_only GslbPolicyDnsA#active_only}
  */
  readonly activeOnly?: number;
  /**
  * Continue if no candidate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#active_only_fail_safe GslbPolicyDnsA#active_only_fail_safe}
  */
  readonly activeOnlyFailSafe?: number;
  /**
  * Specify aging-time, default is TTL in DNS record, unit: second (Aging time, default 0 means using TTL in DNS record as aging time)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#aging_time GslbPolicyDnsA#aging_time}
  */
  readonly agingTime?: number;
  /**
  * Return alias name when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#backup_alias GslbPolicyDnsA#backup_alias}
  */
  readonly backupAlias?: number;
  /**
  * Return fallback server when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#backup_server GslbPolicyDnsA#backup_server}
  */
  readonly backupServer?: number;
  /**
  * Specify Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#block_action GslbPolicyDnsA#block_action}
  */
  readonly blockAction?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#block_type GslbPolicyDnsA#block_type}
  */
  readonly blockType?: string;
  /**
  * Cache DNS Server response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#cache GslbPolicyDnsA#cache}
  */
  readonly cache?: number;
  /**
  * Apply GSLB for DNS Server response when service is Canonical Name (CNAME)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#cname_detect GslbPolicyDnsA#cname_detect}
  */
  readonly cnameDetect?: number;
  /**
  * Zone Delegation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#delegation GslbPolicyDnsA#delegation}
  */
  readonly delegation?: number;
  /**
  * Append MX Records in Addition Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#dns_addition_mx GslbPolicyDnsA#dns_addition_mx}
  */
  readonly dnsAdditionMx?: number;
  /**
  * Automatically build DNS Infrastructure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#dns_auto_map GslbPolicyDnsA#dns_auto_map}
  */
  readonly dnsAutoMap?: number;
  /**
  * Make dynamically change the preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#dynamic_preference GslbPolicyDnsA#dynamic_preference}
  */
  readonly dynamicPreference?: number;
  /**
  * dynamically change the weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#dynamic_weight GslbPolicyDnsA#dynamic_weight}
  */
  readonly dynamicWeight?: number;
  /**
  * Return DNS response with external IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#external_ip GslbPolicyDnsA#external_ip}
  */
  readonly externalIp?: number;
  /**
  * Return DNS response with external SOA Record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#external_soa GslbPolicyDnsA#external_soa}
  */
  readonly externalSoa?: number;
  /**
  * Apply DNS action by geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#geoloc_action GslbPolicyDnsA#geoloc_action}
  */
  readonly geolocAction?: number;
  /**
  * Return alias name by geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#geoloc_alias GslbPolicyDnsA#geoloc_alias}
  */
  readonly geolocAlias?: number;
  /**
  * Apply different policy by geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#geoloc_policy GslbPolicyDnsA#geoloc_policy}
  */
  readonly geolocPolicy?: number;
  /**
  * 'none': None; 'answer': Append Hint Records in DNS Answer Section; 'addition': Append Hint Records in DNS Addition Section;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#hint GslbPolicyDnsA#hint}
  */
  readonly hint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#id GslbPolicyDnsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Replace DNS Server Response with GSLB Service-IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#ip_replace GslbPolicyDnsA#ip_replace}
  */
  readonly ipReplace?: number;
  /**
  * 'none': None; 'query': DNS Query; 'response': DNS Response; 'both': Both DNS Query and Response;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#logging GslbPolicyDnsA#logging}
  */
  readonly logging?: string;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#policy_name GslbPolicyDnsA#policy_name}
  */
  readonly policyName: string;
  /**
  * Only keep selected servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#selected_only GslbPolicyDnsA#selected_only}
  */
  readonly selectedOnly?: number;
  /**
  * Answer Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#selected_only_value GslbPolicyDnsA#selected_only_value}
  */
  readonly selectedOnlyValue?: number;
  /**
  * Run GSLB as DNS server mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server GslbPolicyDnsA#server}
  */
  readonly server?: number;
  /**
  * Append MX Records in Addition Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_addition_mx GslbPolicyDnsA#server_addition_mx}
  */
  readonly serverAdditionMx?: number;
  /**
  * Provide All Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_any GslbPolicyDnsA#server_any}
  */
  readonly serverAny?: number;
  /**
  * Provide All Records with GSLB Metrics applied to A/AAAA Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_any_with_metric GslbPolicyDnsA#server_any_with_metric}
  */
  readonly serverAnyWithMetric?: number;
  /**
  * As authoritative server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_authoritative GslbPolicyDnsA#server_authoritative}
  */
  readonly serverAuthoritative?: number;
  /**
  * Provide A-Records for NS-Records automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_auto_ns GslbPolicyDnsA#server_auto_ns}
  */
  readonly serverAutoNs?: number;
  /**
  * Provide PTR Records automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_auto_ptr GslbPolicyDnsA#server_auto_ptr}
  */
  readonly serverAutoPtr?: number;
  /**
  * Provide CAA Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_caa GslbPolicyDnsA#server_caa}
  */
  readonly serverCaa?: number;
  /**
  * Provide CNAME Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_cname GslbPolicyDnsA#server_cname}
  */
  readonly serverCname?: number;
  /**
  * Provide Custom Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_custom GslbPolicyDnsA#server_custom}
  */
  readonly serverCustom?: number;
  /**
  * Append All A Records in Authoritative Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_full_list GslbPolicyDnsA#server_full_list}
  */
  readonly serverFullList?: number;
  /**
  * Only run GSLB as DNS server mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_mode_only GslbPolicyDnsA#server_mode_only}
  */
  readonly serverModeOnly?: number;
  /**
  * Provide MX Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_mx GslbPolicyDnsA#server_mx}
  */
  readonly serverMx?: number;
  /**
  * Provide NAPTR Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_naptr GslbPolicyDnsA#server_naptr}
  */
  readonly serverNaptr?: number;
  /**
  * Provide NS Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_ns GslbPolicyDnsA#server_ns}
  */
  readonly serverNs?: number;
  /**
  * Append All NS Records in Authoritative Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_ns_list GslbPolicyDnsA#server_ns_list}
  */
  readonly serverNsList?: number;
  /**
  * Provide PTR Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_ptr GslbPolicyDnsA#server_ptr}
  */
  readonly serverPtr?: number;
  /**
  * Provide DNSSEC support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_sec GslbPolicyDnsA#server_sec}
  */
  readonly serverSec?: number;
  /**
  * Provide SRV Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_srv GslbPolicyDnsA#server_srv}
  */
  readonly serverSrv?: number;
  /**
  * Provide TXT Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#server_txt GslbPolicyDnsA#server_txt}
  */
  readonly serverTxt?: number;
  /**
  * Make DNS Record sticky for certain time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#sticky GslbPolicyDnsA#sticky}
  */
  readonly sticky?: number;
  /**
  * Specify aging-time, unit: min, default is 5 (Aging time)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#sticky_aging_time GslbPolicyDnsA#sticky_aging_time}
  */
  readonly stickyAgingTime?: number;
  /**
  * Specify IPv6 mask length, default is 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#sticky_ipv6_mask GslbPolicyDnsA#sticky_ipv6_mask}
  */
  readonly stickyIpv6Mask?: number;
  /**
  * Specify IP mask, default is /32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#sticky_mask GslbPolicyDnsA#sticky_mask}
  */
  readonly stickyMask?: string;
  /**
  * Logging template (Logging Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#template GslbPolicyDnsA#template}
  */
  readonly template?: string;
  /**
  * Specify the TTL value contained in DNS record (TTL value, unit: second, default is 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#ttl GslbPolicyDnsA#ttl}
  */
  readonly ttl?: number;
  /**
  * Use DNS Server Response TTL value in GSLB Proxy mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#use_server_ttl GslbPolicyDnsA#use_server_ttl}
  */
  readonly useServerTtl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#uuid GslbPolicyDnsA#uuid}
  */
  readonly uuid?: string;
  /**
  * Only run GSLB as DNS server mode with zone ownership
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#zone_owner_mode GslbPolicyDnsA#zone_owner_mode}
  */
  readonly zoneOwnerMode?: number;
  /**
  * block_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#block_value GslbPolicyDnsA#block_value}
  */
  readonly blockValue?: GslbPolicyDnsBlockValueA[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#ipv6 GslbPolicyDnsA#ipv6}
  */
  readonly ipv6?: GslbPolicyDnsIpv6A[] | cdktf.IResolvable;
  /**
  * proxy_block_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#proxy_block_port_range_list GslbPolicyDnsA#proxy_block_port_range_list}
  */
  readonly proxyBlockPortRangeList?: GslbPolicyDnsProxyBlockPortRangeListStructA[] | cdktf.IResolvable;
  /**
  * sticky_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#sticky_options GslbPolicyDnsA#sticky_options}
  */
  readonly stickyOptions?: GslbPolicyDnsStickyOptionsA;
}
export interface GslbPolicyDnsBlockValueA {
  /**
  * Specify Type Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#block_value GslbPolicyDnsA#block_value}
  */
  readonly blockValue?: number;
}

export function gslbPolicyDnsBlockValueAToTerraform(struct?: GslbPolicyDnsBlockValueA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_value: cdktf.numberToTerraform(struct!.blockValue),
  }
}


export function gslbPolicyDnsBlockValueAToHclTerraform(struct?: GslbPolicyDnsBlockValueA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_value: {
      value: cdktf.numberToHclTerraform(struct!.blockValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbPolicyDnsBlockValueAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbPolicyDnsBlockValueA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockValue = this._blockValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyDnsBlockValueA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockValue = value.blockValue;
    }
  }

  // block_value - computed: false, optional: true, required: false
  private _blockValue?: number; 
  public get blockValue() {
    return this.getNumberAttribute('block_value');
  }
  public set blockValue(value: number) {
    this._blockValue = value;
  }
  public resetBlockValue() {
    this._blockValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockValueInput() {
    return this._blockValue;
  }
}

export class GslbPolicyDnsBlockValueAList extends cdktf.ComplexList {
  public internalValue? : GslbPolicyDnsBlockValueA[] | cdktf.IResolvable

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
  public get(index: number): GslbPolicyDnsBlockValueAOutputReference {
    return new GslbPolicyDnsBlockValueAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbPolicyDnsIpv6A {
  /**
  * 'addition': Append Mapped Record in DNS Addition Section; 'answer': Append Mapped Record in DNS Answer Section; 'exclusive': Only return AAAA Record; 'replace': Replace Record with Mapped Record;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#dns_ipv6_mapping_type GslbPolicyDnsA#dns_ipv6_mapping_type}
  */
  readonly dnsIpv6MappingType?: string;
  /**
  * 'mix': Return both AAAA Record and A Record; 'smart': Return AAAA Record by DNS Query Type; 'mapping': Map A Record to AAAA Record;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#dns_ipv6_option GslbPolicyDnsA#dns_ipv6_option}
  */
  readonly dnsIpv6Option?: string;
}

export function gslbPolicyDnsIpv6AToTerraform(struct?: GslbPolicyDnsIpv6A | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ipv6_mapping_type: cdktf.stringToTerraform(struct!.dnsIpv6MappingType),
    dns_ipv6_option: cdktf.stringToTerraform(struct!.dnsIpv6Option),
  }
}


export function gslbPolicyDnsIpv6AToHclTerraform(struct?: GslbPolicyDnsIpv6A | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_ipv6_mapping_type: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv6MappingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ipv6_option: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv6Option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbPolicyDnsIpv6AOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbPolicyDnsIpv6A | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsIpv6MappingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv6MappingType = this._dnsIpv6MappingType;
    }
    if (this._dnsIpv6Option !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv6Option = this._dnsIpv6Option;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyDnsIpv6A | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsIpv6MappingType = undefined;
      this._dnsIpv6Option = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsIpv6MappingType = value.dnsIpv6MappingType;
      this._dnsIpv6Option = value.dnsIpv6Option;
    }
  }

  // dns_ipv6_mapping_type - computed: false, optional: true, required: false
  private _dnsIpv6MappingType?: string; 
  public get dnsIpv6MappingType() {
    return this.getStringAttribute('dns_ipv6_mapping_type');
  }
  public set dnsIpv6MappingType(value: string) {
    this._dnsIpv6MappingType = value;
  }
  public resetDnsIpv6MappingType() {
    this._dnsIpv6MappingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6MappingTypeInput() {
    return this._dnsIpv6MappingType;
  }

  // dns_ipv6_option - computed: false, optional: true, required: false
  private _dnsIpv6Option?: string; 
  public get dnsIpv6Option() {
    return this.getStringAttribute('dns_ipv6_option');
  }
  public set dnsIpv6Option(value: string) {
    this._dnsIpv6Option = value;
  }
  public resetDnsIpv6Option() {
    this._dnsIpv6Option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6OptionInput() {
    return this._dnsIpv6Option;
  }
}

export class GslbPolicyDnsIpv6AList extends cdktf.ComplexList {
  public internalValue? : GslbPolicyDnsIpv6A[] | cdktf.IResolvable

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
  public get(index: number): GslbPolicyDnsIpv6AOutputReference {
    return new GslbPolicyDnsIpv6AOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbPolicyDnsProxyBlockPortRangeListStructA {
  /**
  * Specify Type Range (From)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#proxy_block_range_from GslbPolicyDnsA#proxy_block_range_from}
  */
  readonly proxyBlockRangeFrom?: number;
  /**
  * To
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#proxy_block_range_to GslbPolicyDnsA#proxy_block_range_to}
  */
  readonly proxyBlockRangeTo?: number;
}

export function gslbPolicyDnsProxyBlockPortRangeListStructAToTerraform(struct?: GslbPolicyDnsProxyBlockPortRangeListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_block_range_from: cdktf.numberToTerraform(struct!.proxyBlockRangeFrom),
    proxy_block_range_to: cdktf.numberToTerraform(struct!.proxyBlockRangeTo),
  }
}


export function gslbPolicyDnsProxyBlockPortRangeListStructAToHclTerraform(struct?: GslbPolicyDnsProxyBlockPortRangeListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_block_range_from: {
      value: cdktf.numberToHclTerraform(struct!.proxyBlockRangeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_block_range_to: {
      value: cdktf.numberToHclTerraform(struct!.proxyBlockRangeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbPolicyDnsProxyBlockPortRangeListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbPolicyDnsProxyBlockPortRangeListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyBlockRangeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyBlockRangeFrom = this._proxyBlockRangeFrom;
    }
    if (this._proxyBlockRangeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyBlockRangeTo = this._proxyBlockRangeTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyDnsProxyBlockPortRangeListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxyBlockRangeFrom = undefined;
      this._proxyBlockRangeTo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxyBlockRangeFrom = value.proxyBlockRangeFrom;
      this._proxyBlockRangeTo = value.proxyBlockRangeTo;
    }
  }

  // proxy_block_range_from - computed: false, optional: true, required: false
  private _proxyBlockRangeFrom?: number; 
  public get proxyBlockRangeFrom() {
    return this.getNumberAttribute('proxy_block_range_from');
  }
  public set proxyBlockRangeFrom(value: number) {
    this._proxyBlockRangeFrom = value;
  }
  public resetProxyBlockRangeFrom() {
    this._proxyBlockRangeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyBlockRangeFromInput() {
    return this._proxyBlockRangeFrom;
  }

  // proxy_block_range_to - computed: false, optional: true, required: false
  private _proxyBlockRangeTo?: number; 
  public get proxyBlockRangeTo() {
    return this.getNumberAttribute('proxy_block_range_to');
  }
  public set proxyBlockRangeTo(value: number) {
    this._proxyBlockRangeTo = value;
  }
  public resetProxyBlockRangeTo() {
    this._proxyBlockRangeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyBlockRangeToInput() {
    return this._proxyBlockRangeTo;
  }
}

export class GslbPolicyDnsProxyBlockPortRangeListStructAList extends cdktf.ComplexList {
  public internalValue? : GslbPolicyDnsProxyBlockPortRangeListStructA[] | cdktf.IResolvable

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
  public get(index: number): GslbPolicyDnsProxyBlockPortRangeListStructAOutputReference {
    return new GslbPolicyDnsProxyBlockPortRangeListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbPolicyDnsStickyOptionsA {
  /**
  * Use ECS for sticky creation and lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#edns_client_subnet GslbPolicyDnsA#edns_client_subnet}
  */
  readonly ednsClientSubnet?: number;
  /**
  * Only use ECS for session creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#only_ecs GslbPolicyDnsA#only_ecs}
  */
  readonly onlyEcs?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#uuid GslbPolicyDnsA#uuid}
  */
  readonly uuid?: string;
}

export function gslbPolicyDnsStickyOptionsAToTerraform(struct?: GslbPolicyDnsStickyOptionsAOutputReference | GslbPolicyDnsStickyOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edns_client_subnet: cdktf.numberToTerraform(struct!.ednsClientSubnet),
    only_ecs: cdktf.numberToTerraform(struct!.onlyEcs),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbPolicyDnsStickyOptionsAToHclTerraform(struct?: GslbPolicyDnsStickyOptionsAOutputReference | GslbPolicyDnsStickyOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edns_client_subnet: {
      value: cdktf.numberToHclTerraform(struct!.ednsClientSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    only_ecs: {
      value: cdktf.numberToHclTerraform(struct!.onlyEcs),
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

export class GslbPolicyDnsStickyOptionsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbPolicyDnsStickyOptionsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ednsClientSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ednsClientSubnet = this._ednsClientSubnet;
    }
    if (this._onlyEcs !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyEcs = this._onlyEcs;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyDnsStickyOptionsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ednsClientSubnet = undefined;
      this._onlyEcs = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ednsClientSubnet = value.ednsClientSubnet;
      this._onlyEcs = value.onlyEcs;
      this._uuid = value.uuid;
    }
  }

  // edns_client_subnet - computed: false, optional: true, required: false
  private _ednsClientSubnet?: number; 
  public get ednsClientSubnet() {
    return this.getNumberAttribute('edns_client_subnet');
  }
  public set ednsClientSubnet(value: number) {
    this._ednsClientSubnet = value;
  }
  public resetEdnsClientSubnet() {
    this._ednsClientSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsClientSubnetInput() {
    return this._ednsClientSubnet;
  }

  // only_ecs - computed: false, optional: true, required: false
  private _onlyEcs?: number; 
  public get onlyEcs() {
    return this.getNumberAttribute('only_ecs');
  }
  public set onlyEcs(value: number) {
    this._onlyEcs = value;
  }
  public resetOnlyEcs() {
    this._onlyEcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyEcsInput() {
    return this._onlyEcs;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns thunder_gslb_policy_dns}
*/
export class GslbPolicyDnsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_policy_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbPolicyDnsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbPolicyDnsA to import
  * @param importFromId The id of the existing GslbPolicyDnsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbPolicyDnsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_policy_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns thunder_gslb_policy_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbPolicyDnsAConfig
  */
  public constructor(scope: Construct, id: string, config: GslbPolicyDnsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_policy_dns',
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
    this._actionType = config.actionType;
    this._activeOnly = config.activeOnly;
    this._activeOnlyFailSafe = config.activeOnlyFailSafe;
    this._agingTime = config.agingTime;
    this._backupAlias = config.backupAlias;
    this._backupServer = config.backupServer;
    this._blockAction = config.blockAction;
    this._blockType = config.blockType;
    this._cache = config.cache;
    this._cnameDetect = config.cnameDetect;
    this._delegation = config.delegation;
    this._dnsAdditionMx = config.dnsAdditionMx;
    this._dnsAutoMap = config.dnsAutoMap;
    this._dynamicPreference = config.dynamicPreference;
    this._dynamicWeight = config.dynamicWeight;
    this._externalIp = config.externalIp;
    this._externalSoa = config.externalSoa;
    this._geolocAction = config.geolocAction;
    this._geolocAlias = config.geolocAlias;
    this._geolocPolicy = config.geolocPolicy;
    this._hint = config.hint;
    this._id = config.id;
    this._ipReplace = config.ipReplace;
    this._logging = config.logging;
    this._policyName = config.policyName;
    this._selectedOnly = config.selectedOnly;
    this._selectedOnlyValue = config.selectedOnlyValue;
    this._server = config.server;
    this._serverAdditionMx = config.serverAdditionMx;
    this._serverAny = config.serverAny;
    this._serverAnyWithMetric = config.serverAnyWithMetric;
    this._serverAuthoritative = config.serverAuthoritative;
    this._serverAutoNs = config.serverAutoNs;
    this._serverAutoPtr = config.serverAutoPtr;
    this._serverCaa = config.serverCaa;
    this._serverCname = config.serverCname;
    this._serverCustom = config.serverCustom;
    this._serverFullList = config.serverFullList;
    this._serverModeOnly = config.serverModeOnly;
    this._serverMx = config.serverMx;
    this._serverNaptr = config.serverNaptr;
    this._serverNs = config.serverNs;
    this._serverNsList = config.serverNsList;
    this._serverPtr = config.serverPtr;
    this._serverSec = config.serverSec;
    this._serverSrv = config.serverSrv;
    this._serverTxt = config.serverTxt;
    this._sticky = config.sticky;
    this._stickyAgingTime = config.stickyAgingTime;
    this._stickyIpv6Mask = config.stickyIpv6Mask;
    this._stickyMask = config.stickyMask;
    this._template = config.template;
    this._ttl = config.ttl;
    this._useServerTtl = config.useServerTtl;
    this._uuid = config.uuid;
    this._zoneOwnerMode = config.zoneOwnerMode;
    this._blockValue.internalValue = config.blockValue;
    this._ipv6.internalValue = config.ipv6;
    this._proxyBlockPortRangeList.internalValue = config.proxyBlockPortRangeList;
    this._stickyOptions.internalValue = config.stickyOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: number; 
  public get action() {
    return this.getNumberAttribute('action');
  }
  public set action(value: number) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // active_only - computed: false, optional: true, required: false
  private _activeOnly?: number; 
  public get activeOnly() {
    return this.getNumberAttribute('active_only');
  }
  public set activeOnly(value: number) {
    this._activeOnly = value;
  }
  public resetActiveOnly() {
    this._activeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeOnlyInput() {
    return this._activeOnly;
  }

  // active_only_fail_safe - computed: false, optional: true, required: false
  private _activeOnlyFailSafe?: number; 
  public get activeOnlyFailSafe() {
    return this.getNumberAttribute('active_only_fail_safe');
  }
  public set activeOnlyFailSafe(value: number) {
    this._activeOnlyFailSafe = value;
  }
  public resetActiveOnlyFailSafe() {
    this._activeOnlyFailSafe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeOnlyFailSafeInput() {
    return this._activeOnlyFailSafe;
  }

  // aging_time - computed: false, optional: true, required: false
  private _agingTime?: number; 
  public get agingTime() {
    return this.getNumberAttribute('aging_time');
  }
  public set agingTime(value: number) {
    this._agingTime = value;
  }
  public resetAgingTime() {
    this._agingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingTimeInput() {
    return this._agingTime;
  }

  // backup_alias - computed: false, optional: true, required: false
  private _backupAlias?: number; 
  public get backupAlias() {
    return this.getNumberAttribute('backup_alias');
  }
  public set backupAlias(value: number) {
    this._backupAlias = value;
  }
  public resetBackupAlias() {
    this._backupAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAliasInput() {
    return this._backupAlias;
  }

  // backup_server - computed: false, optional: true, required: false
  private _backupServer?: number; 
  public get backupServer() {
    return this.getNumberAttribute('backup_server');
  }
  public set backupServer(value: number) {
    this._backupServer = value;
  }
  public resetBackupServer() {
    this._backupServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupServerInput() {
    return this._backupServer;
  }

  // block_action - computed: false, optional: true, required: false
  private _blockAction?: number; 
  public get blockAction() {
    return this.getNumberAttribute('block_action');
  }
  public set blockAction(value: number) {
    this._blockAction = value;
  }
  public resetBlockAction() {
    this._blockAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockActionInput() {
    return this._blockAction;
  }

  // block_type - computed: false, optional: true, required: false
  private _blockType?: string; 
  public get blockType() {
    return this.getStringAttribute('block_type');
  }
  public set blockType(value: string) {
    this._blockType = value;
  }
  public resetBlockType() {
    this._blockType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTypeInput() {
    return this._blockType;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: number; 
  public get cache() {
    return this.getNumberAttribute('cache');
  }
  public set cache(value: number) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // cname_detect - computed: false, optional: true, required: false
  private _cnameDetect?: number; 
  public get cnameDetect() {
    return this.getNumberAttribute('cname_detect');
  }
  public set cnameDetect(value: number) {
    this._cnameDetect = value;
  }
  public resetCnameDetect() {
    this._cnameDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameDetectInput() {
    return this._cnameDetect;
  }

  // delegation - computed: false, optional: true, required: false
  private _delegation?: number; 
  public get delegation() {
    return this.getNumberAttribute('delegation');
  }
  public set delegation(value: number) {
    this._delegation = value;
  }
  public resetDelegation() {
    this._delegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationInput() {
    return this._delegation;
  }

  // dns_addition_mx - computed: false, optional: true, required: false
  private _dnsAdditionMx?: number; 
  public get dnsAdditionMx() {
    return this.getNumberAttribute('dns_addition_mx');
  }
  public set dnsAdditionMx(value: number) {
    this._dnsAdditionMx = value;
  }
  public resetDnsAdditionMx() {
    this._dnsAdditionMx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAdditionMxInput() {
    return this._dnsAdditionMx;
  }

  // dns_auto_map - computed: false, optional: true, required: false
  private _dnsAutoMap?: number; 
  public get dnsAutoMap() {
    return this.getNumberAttribute('dns_auto_map');
  }
  public set dnsAutoMap(value: number) {
    this._dnsAutoMap = value;
  }
  public resetDnsAutoMap() {
    this._dnsAutoMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAutoMapInput() {
    return this._dnsAutoMap;
  }

  // dynamic_preference - computed: false, optional: true, required: false
  private _dynamicPreference?: number; 
  public get dynamicPreference() {
    return this.getNumberAttribute('dynamic_preference');
  }
  public set dynamicPreference(value: number) {
    this._dynamicPreference = value;
  }
  public resetDynamicPreference() {
    this._dynamicPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPreferenceInput() {
    return this._dynamicPreference;
  }

  // dynamic_weight - computed: false, optional: true, required: false
  private _dynamicWeight?: number; 
  public get dynamicWeight() {
    return this.getNumberAttribute('dynamic_weight');
  }
  public set dynamicWeight(value: number) {
    this._dynamicWeight = value;
  }
  public resetDynamicWeight() {
    this._dynamicWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicWeightInput() {
    return this._dynamicWeight;
  }

  // external_ip - computed: false, optional: true, required: false
  private _externalIp?: number; 
  public get externalIp() {
    return this.getNumberAttribute('external_ip');
  }
  public set externalIp(value: number) {
    this._externalIp = value;
  }
  public resetExternalIp() {
    this._externalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }

  // external_soa - computed: false, optional: true, required: false
  private _externalSoa?: number; 
  public get externalSoa() {
    return this.getNumberAttribute('external_soa');
  }
  public set externalSoa(value: number) {
    this._externalSoa = value;
  }
  public resetExternalSoa() {
    this._externalSoa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSoaInput() {
    return this._externalSoa;
  }

  // geoloc_action - computed: false, optional: true, required: false
  private _geolocAction?: number; 
  public get geolocAction() {
    return this.getNumberAttribute('geoloc_action');
  }
  public set geolocAction(value: number) {
    this._geolocAction = value;
  }
  public resetGeolocAction() {
    this._geolocAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocActionInput() {
    return this._geolocAction;
  }

  // geoloc_alias - computed: false, optional: true, required: false
  private _geolocAlias?: number; 
  public get geolocAlias() {
    return this.getNumberAttribute('geoloc_alias');
  }
  public set geolocAlias(value: number) {
    this._geolocAlias = value;
  }
  public resetGeolocAlias() {
    this._geolocAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocAliasInput() {
    return this._geolocAlias;
  }

  // geoloc_policy - computed: false, optional: true, required: false
  private _geolocPolicy?: number; 
  public get geolocPolicy() {
    return this.getNumberAttribute('geoloc_policy');
  }
  public set geolocPolicy(value: number) {
    this._geolocPolicy = value;
  }
  public resetGeolocPolicy() {
    this._geolocPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocPolicyInput() {
    return this._geolocPolicy;
  }

  // hint - computed: false, optional: true, required: false
  private _hint?: string; 
  public get hint() {
    return this.getStringAttribute('hint');
  }
  public set hint(value: string) {
    this._hint = value;
  }
  public resetHint() {
    this._hint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hintInput() {
    return this._hint;
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

  // ip_replace - computed: false, optional: true, required: false
  private _ipReplace?: number; 
  public get ipReplace() {
    return this.getNumberAttribute('ip_replace');
  }
  public set ipReplace(value: number) {
    this._ipReplace = value;
  }
  public resetIpReplace() {
    this._ipReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReplaceInput() {
    return this._ipReplace;
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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // selected_only - computed: false, optional: true, required: false
  private _selectedOnly?: number; 
  public get selectedOnly() {
    return this.getNumberAttribute('selected_only');
  }
  public set selectedOnly(value: number) {
    this._selectedOnly = value;
  }
  public resetSelectedOnly() {
    this._selectedOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedOnlyInput() {
    return this._selectedOnly;
  }

  // selected_only_value - computed: false, optional: true, required: false
  private _selectedOnlyValue?: number; 
  public get selectedOnlyValue() {
    return this.getNumberAttribute('selected_only_value');
  }
  public set selectedOnlyValue(value: number) {
    this._selectedOnlyValue = value;
  }
  public resetSelectedOnlyValue() {
    this._selectedOnlyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedOnlyValueInput() {
    return this._selectedOnlyValue;
  }

  // server - computed: false, optional: true, required: false
  private _server?: number; 
  public get server() {
    return this.getNumberAttribute('server');
  }
  public set server(value: number) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_addition_mx - computed: false, optional: true, required: false
  private _serverAdditionMx?: number; 
  public get serverAdditionMx() {
    return this.getNumberAttribute('server_addition_mx');
  }
  public set serverAdditionMx(value: number) {
    this._serverAdditionMx = value;
  }
  public resetServerAdditionMx() {
    this._serverAdditionMx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAdditionMxInput() {
    return this._serverAdditionMx;
  }

  // server_any - computed: false, optional: true, required: false
  private _serverAny?: number; 
  public get serverAny() {
    return this.getNumberAttribute('server_any');
  }
  public set serverAny(value: number) {
    this._serverAny = value;
  }
  public resetServerAny() {
    this._serverAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAnyInput() {
    return this._serverAny;
  }

  // server_any_with_metric - computed: false, optional: true, required: false
  private _serverAnyWithMetric?: number; 
  public get serverAnyWithMetric() {
    return this.getNumberAttribute('server_any_with_metric');
  }
  public set serverAnyWithMetric(value: number) {
    this._serverAnyWithMetric = value;
  }
  public resetServerAnyWithMetric() {
    this._serverAnyWithMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAnyWithMetricInput() {
    return this._serverAnyWithMetric;
  }

  // server_authoritative - computed: false, optional: true, required: false
  private _serverAuthoritative?: number; 
  public get serverAuthoritative() {
    return this.getNumberAttribute('server_authoritative');
  }
  public set serverAuthoritative(value: number) {
    this._serverAuthoritative = value;
  }
  public resetServerAuthoritative() {
    this._serverAuthoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuthoritativeInput() {
    return this._serverAuthoritative;
  }

  // server_auto_ns - computed: false, optional: true, required: false
  private _serverAutoNs?: number; 
  public get serverAutoNs() {
    return this.getNumberAttribute('server_auto_ns');
  }
  public set serverAutoNs(value: number) {
    this._serverAutoNs = value;
  }
  public resetServerAutoNs() {
    this._serverAutoNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAutoNsInput() {
    return this._serverAutoNs;
  }

  // server_auto_ptr - computed: false, optional: true, required: false
  private _serverAutoPtr?: number; 
  public get serverAutoPtr() {
    return this.getNumberAttribute('server_auto_ptr');
  }
  public set serverAutoPtr(value: number) {
    this._serverAutoPtr = value;
  }
  public resetServerAutoPtr() {
    this._serverAutoPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAutoPtrInput() {
    return this._serverAutoPtr;
  }

  // server_caa - computed: false, optional: true, required: false
  private _serverCaa?: number; 
  public get serverCaa() {
    return this.getNumberAttribute('server_caa');
  }
  public set serverCaa(value: number) {
    this._serverCaa = value;
  }
  public resetServerCaa() {
    this._serverCaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCaaInput() {
    return this._serverCaa;
  }

  // server_cname - computed: false, optional: true, required: false
  private _serverCname?: number; 
  public get serverCname() {
    return this.getNumberAttribute('server_cname');
  }
  public set serverCname(value: number) {
    this._serverCname = value;
  }
  public resetServerCname() {
    this._serverCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCnameInput() {
    return this._serverCname;
  }

  // server_custom - computed: false, optional: true, required: false
  private _serverCustom?: number; 
  public get serverCustom() {
    return this.getNumberAttribute('server_custom');
  }
  public set serverCustom(value: number) {
    this._serverCustom = value;
  }
  public resetServerCustom() {
    this._serverCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCustomInput() {
    return this._serverCustom;
  }

  // server_full_list - computed: false, optional: true, required: false
  private _serverFullList?: number; 
  public get serverFullList() {
    return this.getNumberAttribute('server_full_list');
  }
  public set serverFullList(value: number) {
    this._serverFullList = value;
  }
  public resetServerFullList() {
    this._serverFullList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFullListInput() {
    return this._serverFullList;
  }

  // server_mode_only - computed: false, optional: true, required: false
  private _serverModeOnly?: number; 
  public get serverModeOnly() {
    return this.getNumberAttribute('server_mode_only');
  }
  public set serverModeOnly(value: number) {
    this._serverModeOnly = value;
  }
  public resetServerModeOnly() {
    this._serverModeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverModeOnlyInput() {
    return this._serverModeOnly;
  }

  // server_mx - computed: false, optional: true, required: false
  private _serverMx?: number; 
  public get serverMx() {
    return this.getNumberAttribute('server_mx');
  }
  public set serverMx(value: number) {
    this._serverMx = value;
  }
  public resetServerMx() {
    this._serverMx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverMxInput() {
    return this._serverMx;
  }

  // server_naptr - computed: false, optional: true, required: false
  private _serverNaptr?: number; 
  public get serverNaptr() {
    return this.getNumberAttribute('server_naptr');
  }
  public set serverNaptr(value: number) {
    this._serverNaptr = value;
  }
  public resetServerNaptr() {
    this._serverNaptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNaptrInput() {
    return this._serverNaptr;
  }

  // server_ns - computed: false, optional: true, required: false
  private _serverNs?: number; 
  public get serverNs() {
    return this.getNumberAttribute('server_ns');
  }
  public set serverNs(value: number) {
    this._serverNs = value;
  }
  public resetServerNs() {
    this._serverNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNsInput() {
    return this._serverNs;
  }

  // server_ns_list - computed: false, optional: true, required: false
  private _serverNsList?: number; 
  public get serverNsList() {
    return this.getNumberAttribute('server_ns_list');
  }
  public set serverNsList(value: number) {
    this._serverNsList = value;
  }
  public resetServerNsList() {
    this._serverNsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNsListInput() {
    return this._serverNsList;
  }

  // server_ptr - computed: false, optional: true, required: false
  private _serverPtr?: number; 
  public get serverPtr() {
    return this.getNumberAttribute('server_ptr');
  }
  public set serverPtr(value: number) {
    this._serverPtr = value;
  }
  public resetServerPtr() {
    this._serverPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPtrInput() {
    return this._serverPtr;
  }

  // server_sec - computed: false, optional: true, required: false
  private _serverSec?: number; 
  public get serverSec() {
    return this.getNumberAttribute('server_sec');
  }
  public set serverSec(value: number) {
    this._serverSec = value;
  }
  public resetServerSec() {
    this._serverSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSecInput() {
    return this._serverSec;
  }

  // server_srv - computed: false, optional: true, required: false
  private _serverSrv?: number; 
  public get serverSrv() {
    return this.getNumberAttribute('server_srv');
  }
  public set serverSrv(value: number) {
    this._serverSrv = value;
  }
  public resetServerSrv() {
    this._serverSrv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSrvInput() {
    return this._serverSrv;
  }

  // server_txt - computed: false, optional: true, required: false
  private _serverTxt?: number; 
  public get serverTxt() {
    return this.getNumberAttribute('server_txt');
  }
  public set serverTxt(value: number) {
    this._serverTxt = value;
  }
  public resetServerTxt() {
    this._serverTxt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTxtInput() {
    return this._serverTxt;
  }

  // sticky - computed: false, optional: true, required: false
  private _sticky?: number; 
  public get sticky() {
    return this.getNumberAttribute('sticky');
  }
  public set sticky(value: number) {
    this._sticky = value;
  }
  public resetSticky() {
    this._sticky = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyInput() {
    return this._sticky;
  }

  // sticky_aging_time - computed: false, optional: true, required: false
  private _stickyAgingTime?: number; 
  public get stickyAgingTime() {
    return this.getNumberAttribute('sticky_aging_time');
  }
  public set stickyAgingTime(value: number) {
    this._stickyAgingTime = value;
  }
  public resetStickyAgingTime() {
    this._stickyAgingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyAgingTimeInput() {
    return this._stickyAgingTime;
  }

  // sticky_ipv6_mask - computed: false, optional: true, required: false
  private _stickyIpv6Mask?: number; 
  public get stickyIpv6Mask() {
    return this.getNumberAttribute('sticky_ipv6_mask');
  }
  public set stickyIpv6Mask(value: number) {
    this._stickyIpv6Mask = value;
  }
  public resetStickyIpv6Mask() {
    this._stickyIpv6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyIpv6MaskInput() {
    return this._stickyIpv6Mask;
  }

  // sticky_mask - computed: false, optional: true, required: false
  private _stickyMask?: string; 
  public get stickyMask() {
    return this.getStringAttribute('sticky_mask');
  }
  public set stickyMask(value: string) {
    this._stickyMask = value;
  }
  public resetStickyMask() {
    this._stickyMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyMaskInput() {
    return this._stickyMask;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // use_server_ttl - computed: false, optional: true, required: false
  private _useServerTtl?: number; 
  public get useServerTtl() {
    return this.getNumberAttribute('use_server_ttl');
  }
  public set useServerTtl(value: number) {
    this._useServerTtl = value;
  }
  public resetUseServerTtl() {
    this._useServerTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerTtlInput() {
    return this._useServerTtl;
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

  // zone_owner_mode - computed: false, optional: true, required: false
  private _zoneOwnerMode?: number; 
  public get zoneOwnerMode() {
    return this.getNumberAttribute('zone_owner_mode');
  }
  public set zoneOwnerMode(value: number) {
    this._zoneOwnerMode = value;
  }
  public resetZoneOwnerMode() {
    this._zoneOwnerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOwnerModeInput() {
    return this._zoneOwnerMode;
  }

  // block_value - computed: false, optional: true, required: false
  private _blockValue = new GslbPolicyDnsBlockValueAList(this, "block_value", false);
  public get blockValue() {
    return this._blockValue;
  }
  public putBlockValue(value: GslbPolicyDnsBlockValueA[] | cdktf.IResolvable) {
    this._blockValue.internalValue = value;
  }
  public resetBlockValue() {
    this._blockValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockValueInput() {
    return this._blockValue.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new GslbPolicyDnsIpv6AList(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: GslbPolicyDnsIpv6A[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // proxy_block_port_range_list - computed: false, optional: true, required: false
  private _proxyBlockPortRangeList = new GslbPolicyDnsProxyBlockPortRangeListStructAList(this, "proxy_block_port_range_list", false);
  public get proxyBlockPortRangeList() {
    return this._proxyBlockPortRangeList;
  }
  public putProxyBlockPortRangeList(value: GslbPolicyDnsProxyBlockPortRangeListStructA[] | cdktf.IResolvable) {
    this._proxyBlockPortRangeList.internalValue = value;
  }
  public resetProxyBlockPortRangeList() {
    this._proxyBlockPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyBlockPortRangeListInput() {
    return this._proxyBlockPortRangeList.internalValue;
  }

  // sticky_options - computed: false, optional: true, required: false
  private _stickyOptions = new GslbPolicyDnsStickyOptionsAOutputReference(this, "sticky_options");
  public get stickyOptions() {
    return this._stickyOptions;
  }
  public putStickyOptions(value: GslbPolicyDnsStickyOptionsA) {
    this._stickyOptions.internalValue = value;
  }
  public resetStickyOptions() {
    this._stickyOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyOptionsInput() {
    return this._stickyOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.numberToTerraform(this._action),
      action_type: cdktf.stringToTerraform(this._actionType),
      active_only: cdktf.numberToTerraform(this._activeOnly),
      active_only_fail_safe: cdktf.numberToTerraform(this._activeOnlyFailSafe),
      aging_time: cdktf.numberToTerraform(this._agingTime),
      backup_alias: cdktf.numberToTerraform(this._backupAlias),
      backup_server: cdktf.numberToTerraform(this._backupServer),
      block_action: cdktf.numberToTerraform(this._blockAction),
      block_type: cdktf.stringToTerraform(this._blockType),
      cache: cdktf.numberToTerraform(this._cache),
      cname_detect: cdktf.numberToTerraform(this._cnameDetect),
      delegation: cdktf.numberToTerraform(this._delegation),
      dns_addition_mx: cdktf.numberToTerraform(this._dnsAdditionMx),
      dns_auto_map: cdktf.numberToTerraform(this._dnsAutoMap),
      dynamic_preference: cdktf.numberToTerraform(this._dynamicPreference),
      dynamic_weight: cdktf.numberToTerraform(this._dynamicWeight),
      external_ip: cdktf.numberToTerraform(this._externalIp),
      external_soa: cdktf.numberToTerraform(this._externalSoa),
      geoloc_action: cdktf.numberToTerraform(this._geolocAction),
      geoloc_alias: cdktf.numberToTerraform(this._geolocAlias),
      geoloc_policy: cdktf.numberToTerraform(this._geolocPolicy),
      hint: cdktf.stringToTerraform(this._hint),
      id: cdktf.stringToTerraform(this._id),
      ip_replace: cdktf.numberToTerraform(this._ipReplace),
      logging: cdktf.stringToTerraform(this._logging),
      policy_name: cdktf.stringToTerraform(this._policyName),
      selected_only: cdktf.numberToTerraform(this._selectedOnly),
      selected_only_value: cdktf.numberToTerraform(this._selectedOnlyValue),
      server: cdktf.numberToTerraform(this._server),
      server_addition_mx: cdktf.numberToTerraform(this._serverAdditionMx),
      server_any: cdktf.numberToTerraform(this._serverAny),
      server_any_with_metric: cdktf.numberToTerraform(this._serverAnyWithMetric),
      server_authoritative: cdktf.numberToTerraform(this._serverAuthoritative),
      server_auto_ns: cdktf.numberToTerraform(this._serverAutoNs),
      server_auto_ptr: cdktf.numberToTerraform(this._serverAutoPtr),
      server_caa: cdktf.numberToTerraform(this._serverCaa),
      server_cname: cdktf.numberToTerraform(this._serverCname),
      server_custom: cdktf.numberToTerraform(this._serverCustom),
      server_full_list: cdktf.numberToTerraform(this._serverFullList),
      server_mode_only: cdktf.numberToTerraform(this._serverModeOnly),
      server_mx: cdktf.numberToTerraform(this._serverMx),
      server_naptr: cdktf.numberToTerraform(this._serverNaptr),
      server_ns: cdktf.numberToTerraform(this._serverNs),
      server_ns_list: cdktf.numberToTerraform(this._serverNsList),
      server_ptr: cdktf.numberToTerraform(this._serverPtr),
      server_sec: cdktf.numberToTerraform(this._serverSec),
      server_srv: cdktf.numberToTerraform(this._serverSrv),
      server_txt: cdktf.numberToTerraform(this._serverTxt),
      sticky: cdktf.numberToTerraform(this._sticky),
      sticky_aging_time: cdktf.numberToTerraform(this._stickyAgingTime),
      sticky_ipv6_mask: cdktf.numberToTerraform(this._stickyIpv6Mask),
      sticky_mask: cdktf.stringToTerraform(this._stickyMask),
      template: cdktf.stringToTerraform(this._template),
      ttl: cdktf.numberToTerraform(this._ttl),
      use_server_ttl: cdktf.numberToTerraform(this._useServerTtl),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_owner_mode: cdktf.numberToTerraform(this._zoneOwnerMode),
      block_value: cdktf.listMapper(gslbPolicyDnsBlockValueAToTerraform, true)(this._blockValue.internalValue),
      ipv6: cdktf.listMapper(gslbPolicyDnsIpv6AToTerraform, true)(this._ipv6.internalValue),
      proxy_block_port_range_list: cdktf.listMapper(gslbPolicyDnsProxyBlockPortRangeListStructAToTerraform, true)(this._proxyBlockPortRangeList.internalValue),
      sticky_options: gslbPolicyDnsStickyOptionsAToTerraform(this._stickyOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.numberToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_type: {
        value: cdktf.stringToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_only: {
        value: cdktf.numberToHclTerraform(this._activeOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      active_only_fail_safe: {
        value: cdktf.numberToHclTerraform(this._activeOnlyFailSafe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aging_time: {
        value: cdktf.numberToHclTerraform(this._agingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_alias: {
        value: cdktf.numberToHclTerraform(this._backupAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_server: {
        value: cdktf.numberToHclTerraform(this._backupServer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_action: {
        value: cdktf.numberToHclTerraform(this._blockAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_type: {
        value: cdktf.stringToHclTerraform(this._blockType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache: {
        value: cdktf.numberToHclTerraform(this._cache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cname_detect: {
        value: cdktf.numberToHclTerraform(this._cnameDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delegation: {
        value: cdktf.numberToHclTerraform(this._delegation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_addition_mx: {
        value: cdktf.numberToHclTerraform(this._dnsAdditionMx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_auto_map: {
        value: cdktf.numberToHclTerraform(this._dnsAutoMap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_preference: {
        value: cdktf.numberToHclTerraform(this._dynamicPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_weight: {
        value: cdktf.numberToHclTerraform(this._dynamicWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_ip: {
        value: cdktf.numberToHclTerraform(this._externalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_soa: {
        value: cdktf.numberToHclTerraform(this._externalSoa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geoloc_action: {
        value: cdktf.numberToHclTerraform(this._geolocAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geoloc_alias: {
        value: cdktf.numberToHclTerraform(this._geolocAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geoloc_policy: {
        value: cdktf.numberToHclTerraform(this._geolocPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hint: {
        value: cdktf.stringToHclTerraform(this._hint),
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
      ip_replace: {
        value: cdktf.numberToHclTerraform(this._ipReplace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logging: {
        value: cdktf.stringToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selected_only: {
        value: cdktf.numberToHclTerraform(this._selectedOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      selected_only_value: {
        value: cdktf.numberToHclTerraform(this._selectedOnlyValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.numberToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_addition_mx: {
        value: cdktf.numberToHclTerraform(this._serverAdditionMx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_any: {
        value: cdktf.numberToHclTerraform(this._serverAny),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_any_with_metric: {
        value: cdktf.numberToHclTerraform(this._serverAnyWithMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_authoritative: {
        value: cdktf.numberToHclTerraform(this._serverAuthoritative),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_auto_ns: {
        value: cdktf.numberToHclTerraform(this._serverAutoNs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_auto_ptr: {
        value: cdktf.numberToHclTerraform(this._serverAutoPtr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_caa: {
        value: cdktf.numberToHclTerraform(this._serverCaa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_cname: {
        value: cdktf.numberToHclTerraform(this._serverCname),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_custom: {
        value: cdktf.numberToHclTerraform(this._serverCustom),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_full_list: {
        value: cdktf.numberToHclTerraform(this._serverFullList),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_mode_only: {
        value: cdktf.numberToHclTerraform(this._serverModeOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_mx: {
        value: cdktf.numberToHclTerraform(this._serverMx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_naptr: {
        value: cdktf.numberToHclTerraform(this._serverNaptr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_ns: {
        value: cdktf.numberToHclTerraform(this._serverNs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_ns_list: {
        value: cdktf.numberToHclTerraform(this._serverNsList),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_ptr: {
        value: cdktf.numberToHclTerraform(this._serverPtr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_sec: {
        value: cdktf.numberToHclTerraform(this._serverSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_srv: {
        value: cdktf.numberToHclTerraform(this._serverSrv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_txt: {
        value: cdktf.numberToHclTerraform(this._serverTxt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sticky: {
        value: cdktf.numberToHclTerraform(this._sticky),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sticky_aging_time: {
        value: cdktf.numberToHclTerraform(this._stickyAgingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sticky_ipv6_mask: {
        value: cdktf.numberToHclTerraform(this._stickyIpv6Mask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sticky_mask: {
        value: cdktf.stringToHclTerraform(this._stickyMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_server_ttl: {
        value: cdktf.numberToHclTerraform(this._useServerTtl),
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
      zone_owner_mode: {
        value: cdktf.numberToHclTerraform(this._zoneOwnerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_value: {
        value: cdktf.listMapperHcl(gslbPolicyDnsBlockValueAToHclTerraform, true)(this._blockValue.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyDnsBlockValueAList",
      },
      ipv6: {
        value: cdktf.listMapperHcl(gslbPolicyDnsIpv6AToHclTerraform, true)(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyDnsIpv6AList",
      },
      proxy_block_port_range_list: {
        value: cdktf.listMapperHcl(gslbPolicyDnsProxyBlockPortRangeListStructAToHclTerraform, true)(this._proxyBlockPortRangeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyDnsProxyBlockPortRangeListStructAList",
      },
      sticky_options: {
        value: gslbPolicyDnsStickyOptionsAToHclTerraform(this._stickyOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyDnsStickyOptionsAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
