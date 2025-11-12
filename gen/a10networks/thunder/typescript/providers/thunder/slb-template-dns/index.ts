// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'block-length': Block-Length Padding; 'random-block-length': Random-Block-Length Padding;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#add_padding_to_client SlbTemplateDns#add_padding_to_client}
  */
  readonly addPaddingToClient?: string;
  /**
  * 'global': Follow global cofiguration (Default); 'no-change': No change in record order; 'round-robin': Round-robin;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#cache_record_serving_policy SlbTemplateDns#cache_record_serving_policy}
  */
  readonly cacheRecordServingPolicy?: string;
  /**
  * enable the ttl adjustment for dns cache response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#cache_ttl_adjustment_enable SlbTemplateDns#cache_ttl_adjustment_enable}
  */
  readonly cacheTtlAdjustmentEnable?: number;
  /**
  * 'nocache': Cache disable; 'cache': Cache enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#default_policy SlbTemplateDns#default_policy}
  */
  readonly defaultPolicy?: string;
  /**
  * Disable DNS template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#disable_dns_template SlbTemplateDns#disable_dns_template}
  */
  readonly disableDnsTemplate?: number;
  /**
  * Disable DNS recursive available flag in cached response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#disable_ra_cached_resp SlbTemplateDns#disable_ra_cached_resp}
  */
  readonly disableRaCachedResp?: number;
  /**
  * Disable attaching SOA due to RPZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#disable_rpz_attach_soa SlbTemplateDns#disable_rpz_attach_soa}
  */
  readonly disableRpzAttachSoa?: number;
  /**
  * dns logging template (DNS Logging template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#dns_logging SlbTemplateDns#dns_logging}
  */
  readonly dnsLogging?: string;
  /**
  * Use different service group if DNSSEC DO bit set (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#dnssec_service_group SlbTemplateDns#dnssec_service_group}
  */
  readonly dnssecServiceGroup?: string;
  /**
  * Drop the malformed query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#drop SlbTemplateDns#drop}
  */
  readonly drop?: number;
  /**
  * Enable DNS cache sharing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#enable_cache_sharing SlbTemplateDns#enable_cache_sharing}
  */
  readonly enableCacheSharing?: number;
  /**
  * Forward to service group (Service group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#forward SlbTemplateDns#forward}
  */
  readonly forward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#id SlbTemplateDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * prefix-length to insert for IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#insert_ipv4 SlbTemplateDns#insert_ipv4}
  */
  readonly insertIpv4?: number;
  /**
  * prefix-length to insert for IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#insert_ipv6 SlbTemplateDns#insert_ipv6}
  */
  readonly insertIpv6?: number;
  /**
  * Define maximum cache entry size (Maximum cache entry size per VIP (default 1024))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#max_cache_entry_size SlbTemplateDns#max_cache_entry_size}
  */
  readonly maxCacheEntrySize?: number;
  /**
  * Define maximum cache size (Maximum cache entry per VIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#max_cache_size SlbTemplateDns#max_cache_size}
  */
  readonly maxCacheSize?: number;
  /**
  * Define Maximum DNS Query Length, default is unlimited (Specify Maximum Length)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#max_query_length SlbTemplateDns#max_query_length}
  */
  readonly maxQueryLength?: number;
  /**
  * DNS Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#name SlbTemplateDns#name}
  */
  readonly name: string;
  /**
  * Period in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#period SlbTemplateDns#period}
  */
  readonly period?: number;
  /**
  * Use DNS query ID to create sesion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#query_id_switch SlbTemplateDns#query_id_switch}
  */
  readonly queryIdSwitch?: number;
  /**
  * Direct the client to retry with TCP for DNS UDP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#redirect_to_tcp_port SlbTemplateDns#redirect_to_tcp_port}
  */
  readonly redirectToTcpPort?: number;
  /**
  * Make answers created from cache non-authoritative
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#remove_aa_flag SlbTemplateDns#remove_aa_flag}
  */
  readonly removeAaFlag?: number;
  /**
  * Remove EDNS(0) client subnet from client queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#remove_csubnet SlbTemplateDns#remove_csubnet}
  */
  readonly removeCsubnet?: number;
  /**
  * Remove EDNS(0) padding to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#remove_padding_to_server SlbTemplateDns#remove_padding_to_server}
  */
  readonly removePaddingToServer?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#user_tag SlbTemplateDns#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#class_list SlbTemplateDns#class_list}
  */
  readonly classList?: SlbTemplateDnsClassListStruct;
  /**
  * dns64 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#dns64 SlbTemplateDns#dns64}
  */
  readonly dns64?: SlbTemplateDnsDns64;
  /**
  * local_dns_resolution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#local_dns_resolution SlbTemplateDns#local_dns_resolution}
  */
  readonly localDnsResolution?: SlbTemplateDnsLocalDnsResolution;
  /**
  * negative_dns_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#negative_dns_cache SlbTemplateDns#negative_dns_cache}
  */
  readonly negativeDnsCache?: SlbTemplateDnsNegativeDnsCache;
  /**
  * query_class_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#query_class_filter SlbTemplateDns#query_class_filter}
  */
  readonly queryClassFilter?: SlbTemplateDnsQueryClassFilter;
  /**
  * query_type_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#query_type_filter SlbTemplateDns#query_type_filter}
  */
  readonly queryTypeFilter?: SlbTemplateDnsQueryTypeFilter;
  /**
  * recursive_dns_resolution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#recursive_dns_resolution SlbTemplateDns#recursive_dns_resolution}
  */
  readonly recursiveDnsResolution?: SlbTemplateDnsRecursiveDnsResolution;
  /**
  * response_rate_limiting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#response_rate_limiting SlbTemplateDns#response_rate_limiting}
  */
  readonly responseRateLimiting?: SlbTemplateDnsResponseRateLimiting;
  /**
  * rpz_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#rpz_list SlbTemplateDns#rpz_list}
  */
  readonly rpzList?: SlbTemplateDnsRpzListStruct[] | cdktf.IResolvable;
  /**
  * udp_retransmit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#udp_retransmit SlbTemplateDns#udp_retransmit}
  */
  readonly udpRetransmit?: SlbTemplateDnsUdpRetransmit;
}
export interface SlbTemplateDnsClassListLidListDns {
  /**
  * 'cache-disable': Disable dns cache; 'cache-enable': Enable dns cache;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#cache_action SlbTemplateDns#cache_action}
  */
  readonly cacheAction?: string;
  /**
  * Honor the server reponse TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#honor_server_response_ttl SlbTemplateDns#honor_server_response_ttl}
  */
  readonly honorServerResponseTtl?: number;
  /**
  * TTL for cache entry (TTL in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#ttl SlbTemplateDns#ttl}
  */
  readonly ttl?: number;
  /**
  * Weight for cache entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#weight SlbTemplateDns#weight}
  */
  readonly weight?: number;
}

export function slbTemplateDnsClassListLidListDnsToTerraform(struct?: SlbTemplateDnsClassListLidListDnsOutputReference | SlbTemplateDnsClassListLidListDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_action: cdktf.stringToTerraform(struct!.cacheAction),
    honor_server_response_ttl: cdktf.numberToTerraform(struct!.honorServerResponseTtl),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function slbTemplateDnsClassListLidListDnsToHclTerraform(struct?: SlbTemplateDnsClassListLidListDnsOutputReference | SlbTemplateDnsClassListLidListDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_action: {
      value: cdktf.stringToHclTerraform(struct!.cacheAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    honor_server_response_ttl: {
      value: cdktf.numberToHclTerraform(struct!.honorServerResponseTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsClassListLidListDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsClassListLidListDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheAction = this._cacheAction;
    }
    if (this._honorServerResponseTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorServerResponseTtl = this._honorServerResponseTtl;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsClassListLidListDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheAction = undefined;
      this._honorServerResponseTtl = undefined;
      this._ttl = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheAction = value.cacheAction;
      this._honorServerResponseTtl = value.honorServerResponseTtl;
      this._ttl = value.ttl;
      this._weight = value.weight;
    }
  }

  // cache_action - computed: false, optional: true, required: false
  private _cacheAction?: string; 
  public get cacheAction() {
    return this.getStringAttribute('cache_action');
  }
  public set cacheAction(value: string) {
    this._cacheAction = value;
  }
  public resetCacheAction() {
    this._cacheAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheActionInput() {
    return this._cacheAction;
  }

  // honor_server_response_ttl - computed: false, optional: true, required: false
  private _honorServerResponseTtl?: number; 
  public get honorServerResponseTtl() {
    return this.getNumberAttribute('honor_server_response_ttl');
  }
  public set honorServerResponseTtl(value: number) {
    this._honorServerResponseTtl = value;
  }
  public resetHonorServerResponseTtl() {
    this._honorServerResponseTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorServerResponseTtlInput() {
    return this._honorServerResponseTtl;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface SlbTemplateDnsClassListLidListStruct {
  /**
  * 'dns-cache-disable': Disable DNS cache when it exceeds limit; 'dns-cache-enable': Enable DNS cache when it exceeds limit; 'forward': Forward the traffic even it exceeds limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#action_value SlbTemplateDns#action_value}
  */
  readonly actionValue?: string;
  /**
  * Connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#conn_rate_limit SlbTemplateDns#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Specify a limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lidnum SlbTemplateDns#lidnum}
  */
  readonly lidnum: number;
  /**
  * Don't accept any new connection for certain time (Lockout duration in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lockout SlbTemplateDns#lockout}
  */
  readonly lockout?: number;
  /**
  * Log a message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#log SlbTemplateDns#log}
  */
  readonly log?: number;
  /**
  * Log interval (minute, by default system will log every over limit instance)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#log_interval SlbTemplateDns#log_interval}
  */
  readonly logInterval?: number;
  /**
  * Action when exceeds limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#over_limit_action SlbTemplateDns#over_limit_action}
  */
  readonly overLimitAction?: number;
  /**
  * Per (Number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#per SlbTemplateDns#per}
  */
  readonly per?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#user_tag SlbTemplateDns#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#dns SlbTemplateDns#dns}
  */
  readonly dns?: SlbTemplateDnsClassListLidListDns;
}

export function slbTemplateDnsClassListLidListStructToTerraform(struct?: SlbTemplateDnsClassListLidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_value: cdktf.stringToTerraform(struct!.actionValue),
    conn_rate_limit: cdktf.numberToTerraform(struct!.connRateLimit),
    lidnum: cdktf.numberToTerraform(struct!.lidnum),
    lockout: cdktf.numberToTerraform(struct!.lockout),
    log: cdktf.numberToTerraform(struct!.log),
    log_interval: cdktf.numberToTerraform(struct!.logInterval),
    over_limit_action: cdktf.numberToTerraform(struct!.overLimitAction),
    per: cdktf.numberToTerraform(struct!.per),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dns: slbTemplateDnsClassListLidListDnsToTerraform(struct!.dns),
  }
}


export function slbTemplateDnsClassListLidListStructToHclTerraform(struct?: SlbTemplateDnsClassListLidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_value: {
      value: cdktf.stringToHclTerraform(struct!.actionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conn_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.connRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lidnum: {
      value: cdktf.numberToHclTerraform(struct!.lidnum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockout: {
      value: cdktf.numberToHclTerraform(struct!.lockout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_interval: {
      value: cdktf.numberToHclTerraform(struct!.logInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    over_limit_action: {
      value: cdktf.numberToHclTerraform(struct!.overLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per: {
      value: cdktf.numberToHclTerraform(struct!.per),
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
    dns: {
      value: slbTemplateDnsClassListLidListDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsClassListLidListDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsClassListLidListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsClassListLidListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionValue = this._actionValue;
    }
    if (this._connRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRateLimit = this._connRateLimit;
    }
    if (this._lidnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidnum = this._lidnum;
    }
    if (this._lockout !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockout = this._lockout;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.logInterval = this._logInterval;
    }
    if (this._overLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.overLimitAction = this._overLimitAction;
    }
    if (this._per !== undefined) {
      hasAnyValues = true;
      internalValueResult.per = this._per;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsClassListLidListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionValue = undefined;
      this._connRateLimit = undefined;
      this._lidnum = undefined;
      this._lockout = undefined;
      this._log = undefined;
      this._logInterval = undefined;
      this._overLimitAction = undefined;
      this._per = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._dns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionValue = value.actionValue;
      this._connRateLimit = value.connRateLimit;
      this._lidnum = value.lidnum;
      this._lockout = value.lockout;
      this._log = value.log;
      this._logInterval = value.logInterval;
      this._overLimitAction = value.overLimitAction;
      this._per = value.per;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._dns.internalValue = value.dns;
    }
  }

  // action_value - computed: false, optional: true, required: false
  private _actionValue?: string; 
  public get actionValue() {
    return this.getStringAttribute('action_value');
  }
  public set actionValue(value: string) {
    this._actionValue = value;
  }
  public resetActionValue() {
    this._actionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionValueInput() {
    return this._actionValue;
  }

  // conn_rate_limit - computed: false, optional: true, required: false
  private _connRateLimit?: number; 
  public get connRateLimit() {
    return this.getNumberAttribute('conn_rate_limit');
  }
  public set connRateLimit(value: number) {
    this._connRateLimit = value;
  }
  public resetConnRateLimit() {
    this._connRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitInput() {
    return this._connRateLimit;
  }

  // lidnum - computed: false, optional: false, required: true
  private _lidnum?: number; 
  public get lidnum() {
    return this.getNumberAttribute('lidnum');
  }
  public set lidnum(value: number) {
    this._lidnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lidnumInput() {
    return this._lidnum;
  }

  // lockout - computed: false, optional: true, required: false
  private _lockout?: number; 
  public get lockout() {
    return this.getNumberAttribute('lockout');
  }
  public set lockout(value: number) {
    this._lockout = value;
  }
  public resetLockout() {
    this._lockout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutInput() {
    return this._lockout;
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

  // log_interval - computed: false, optional: true, required: false
  private _logInterval?: number; 
  public get logInterval() {
    return this.getNumberAttribute('log_interval');
  }
  public set logInterval(value: number) {
    this._logInterval = value;
  }
  public resetLogInterval() {
    this._logInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntervalInput() {
    return this._logInterval;
  }

  // over_limit_action - computed: false, optional: true, required: false
  private _overLimitAction?: number; 
  public get overLimitAction() {
    return this.getNumberAttribute('over_limit_action');
  }
  public set overLimitAction(value: number) {
    this._overLimitAction = value;
  }
  public resetOverLimitAction() {
    this._overLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overLimitActionInput() {
    return this._overLimitAction;
  }

  // per - computed: false, optional: true, required: false
  private _per?: number; 
  public get per() {
    return this.getNumberAttribute('per');
  }
  public set per(value: number) {
    this._per = value;
  }
  public resetPer() {
    this._per = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perInput() {
    return this._per;
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

  // dns - computed: false, optional: true, required: false
  private _dns = new SlbTemplateDnsClassListLidListDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: SlbTemplateDnsClassListLidListDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }
}

export class SlbTemplateDnsClassListLidListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsClassListLidListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsClassListLidListStructOutputReference {
    return new SlbTemplateDnsClassListLidListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsClassListStruct {
  /**
  * Specify a class list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#name SlbTemplateDns#name}
  */
  readonly name?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * lid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lid_list SlbTemplateDns#lid_list}
  */
  readonly lidList?: SlbTemplateDnsClassListLidListStruct[] | cdktf.IResolvable;
}

export function slbTemplateDnsClassListStructToTerraform(struct?: SlbTemplateDnsClassListStructOutputReference | SlbTemplateDnsClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    lid_list: cdktf.listMapper(slbTemplateDnsClassListLidListStructToTerraform, true)(struct!.lidList),
  }
}


export function slbTemplateDnsClassListStructToHclTerraform(struct?: SlbTemplateDnsClassListStructOutputReference | SlbTemplateDnsClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    lid_list: {
      value: cdktf.listMapperHcl(slbTemplateDnsClassListLidListStructToHclTerraform, true)(struct!.lidList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsClassListLidListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsClassListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsClassListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._lidList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidList = this._lidList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsClassListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._uuid = undefined;
      this._lidList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._uuid = value.uuid;
      this._lidList.internalValue = value.lidList;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // lid_list - computed: false, optional: true, required: false
  private _lidList = new SlbTemplateDnsClassListLidListStructList(this, "lid_list", false);
  public get lidList() {
    return this._lidList;
  }
  public putLidList(value: SlbTemplateDnsClassListLidListStruct[] | cdktf.IResolvable) {
    this._lidList.internalValue = value;
  }
  public resetLidList() {
    this._lidList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidListInput() {
    return this._lidList.internalValue;
  }
}
export interface SlbTemplateDnsDns64 {
  /**
  * Use a cached A-query response to provide AAAA query responses for the same hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#cache SlbTemplateDns#cache}
  */
  readonly cache?: number;
  /**
  * Always change incoming AAAA DNS Query to A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#change_query SlbTemplateDns#change_query}
  */
  readonly changeQuery?: number;
  /**
  * Enable DNS64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#enable SlbTemplateDns#enable}
  */
  readonly enable?: number;
  /**
  * Forward AAAA Query & generate A Query in parallel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#parallel_query SlbTemplateDns#parallel_query}
  */
  readonly parallelQuery?: number;
  /**
  * Retry count, default is 3 (Retry Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#retry SlbTemplateDns#retry}
  */
  readonly retry?: number;
  /**
  * Disable Single Response which is used to avoid ambiguity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#single_response_disable SlbTemplateDns#single_response_disable}
  */
  readonly singleResponseDisable?: number;
  /**
  * Timeout to send additional Queries, unit: second, default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#timeout SlbTemplateDns#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateDnsDns64ToTerraform(struct?: SlbTemplateDnsDns64OutputReference | SlbTemplateDnsDns64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache: cdktf.numberToTerraform(struct!.cache),
    change_query: cdktf.numberToTerraform(struct!.changeQuery),
    enable: cdktf.numberToTerraform(struct!.enable),
    parallel_query: cdktf.numberToTerraform(struct!.parallelQuery),
    retry: cdktf.numberToTerraform(struct!.retry),
    single_response_disable: cdktf.numberToTerraform(struct!.singleResponseDisable),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateDnsDns64ToHclTerraform(struct?: SlbTemplateDnsDns64OutputReference | SlbTemplateDnsDns64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache: {
      value: cdktf.numberToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    change_query: {
      value: cdktf.numberToHclTerraform(struct!.changeQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parallel_query: {
      value: cdktf.numberToHclTerraform(struct!.parallelQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    single_response_disable: {
      value: cdktf.numberToHclTerraform(struct!.singleResponseDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
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

export class SlbTemplateDnsDns64OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsDns64 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._changeQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeQuery = this._changeQuery;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._parallelQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelQuery = this._parallelQuery;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._singleResponseDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleResponseDisable = this._singleResponseDisable;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsDns64 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cache = undefined;
      this._changeQuery = undefined;
      this._enable = undefined;
      this._parallelQuery = undefined;
      this._retry = undefined;
      this._singleResponseDisable = undefined;
      this._timeout = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cache = value.cache;
      this._changeQuery = value.changeQuery;
      this._enable = value.enable;
      this._parallelQuery = value.parallelQuery;
      this._retry = value.retry;
      this._singleResponseDisable = value.singleResponseDisable;
      this._timeout = value.timeout;
      this._uuid = value.uuid;
    }
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

  // change_query - computed: false, optional: true, required: false
  private _changeQuery?: number; 
  public get changeQuery() {
    return this.getNumberAttribute('change_query');
  }
  public set changeQuery(value: number) {
    this._changeQuery = value;
  }
  public resetChangeQuery() {
    this._changeQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeQueryInput() {
    return this._changeQuery;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // parallel_query - computed: false, optional: true, required: false
  private _parallelQuery?: number; 
  public get parallelQuery() {
    return this.getNumberAttribute('parallel_query');
  }
  public set parallelQuery(value: number) {
    this._parallelQuery = value;
  }
  public resetParallelQuery() {
    this._parallelQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelQueryInput() {
    return this._parallelQuery;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // single_response_disable - computed: false, optional: true, required: false
  private _singleResponseDisable?: number; 
  public get singleResponseDisable() {
    return this.getNumberAttribute('single_response_disable');
  }
  public set singleResponseDisable(value: number) {
    this._singleResponseDisable = value;
  }
  public resetSingleResponseDisable() {
    this._singleResponseDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleResponseDisableInput() {
    return this._singleResponseDisable;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
export interface SlbTemplateDnsLocalDnsResolutionHostListCfg {
  /**
  * Hostnames class-list name (dns type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#hostnames SlbTemplateDns#hostnames}
  */
  readonly hostnames?: string;
}

export function slbTemplateDnsLocalDnsResolutionHostListCfgToTerraform(struct?: SlbTemplateDnsLocalDnsResolutionHostListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.stringToTerraform(struct!.hostnames),
  }
}


export function slbTemplateDnsLocalDnsResolutionHostListCfgToHclTerraform(struct?: SlbTemplateDnsLocalDnsResolutionHostListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.stringToHclTerraform(struct!.hostnames),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsLocalDnsResolutionHostListCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsLocalDnsResolutionHostListCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsLocalDnsResolutionHostListCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string; 
  public get hostnames() {
    return this.getStringAttribute('hostnames');
  }
  public set hostnames(value: string) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }
}

export class SlbTemplateDnsLocalDnsResolutionHostListCfgList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsLocalDnsResolutionHostListCfg[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsLocalDnsResolutionHostListCfgOutputReference {
    return new SlbTemplateDnsLocalDnsResolutionHostListCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsLocalDnsResolutionLocalResolverCfg {
  /**
  * Local dns servers (address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#local_resolver SlbTemplateDns#local_resolver}
  */
  readonly localResolver?: string;
}

export function slbTemplateDnsLocalDnsResolutionLocalResolverCfgToTerraform(struct?: SlbTemplateDnsLocalDnsResolutionLocalResolverCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_resolver: cdktf.stringToTerraform(struct!.localResolver),
  }
}


export function slbTemplateDnsLocalDnsResolutionLocalResolverCfgToHclTerraform(struct?: SlbTemplateDnsLocalDnsResolutionLocalResolverCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_resolver: {
      value: cdktf.stringToHclTerraform(struct!.localResolver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsLocalDnsResolutionLocalResolverCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsLocalDnsResolutionLocalResolverCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localResolver !== undefined) {
      hasAnyValues = true;
      internalValueResult.localResolver = this._localResolver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsLocalDnsResolutionLocalResolverCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localResolver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localResolver = value.localResolver;
    }
  }

  // local_resolver - computed: false, optional: true, required: false
  private _localResolver?: string; 
  public get localResolver() {
    return this.getStringAttribute('local_resolver');
  }
  public set localResolver(value: string) {
    this._localResolver = value;
  }
  public resetLocalResolver() {
    this._localResolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localResolverInput() {
    return this._localResolver;
  }
}

export class SlbTemplateDnsLocalDnsResolutionLocalResolverCfgList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsLocalDnsResolutionLocalResolverCfg[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsLocalDnsResolutionLocalResolverCfgOutputReference {
    return new SlbTemplateDnsLocalDnsResolutionLocalResolverCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsLocalDnsResolution {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * host_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#host_list_cfg SlbTemplateDns#host_list_cfg}
  */
  readonly hostListCfg?: SlbTemplateDnsLocalDnsResolutionHostListCfg[] | cdktf.IResolvable;
  /**
  * local_resolver_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#local_resolver_cfg SlbTemplateDns#local_resolver_cfg}
  */
  readonly localResolverCfg?: SlbTemplateDnsLocalDnsResolutionLocalResolverCfg[] | cdktf.IResolvable;
}

export function slbTemplateDnsLocalDnsResolutionToTerraform(struct?: SlbTemplateDnsLocalDnsResolutionOutputReference | SlbTemplateDnsLocalDnsResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    host_list_cfg: cdktf.listMapper(slbTemplateDnsLocalDnsResolutionHostListCfgToTerraform, true)(struct!.hostListCfg),
    local_resolver_cfg: cdktf.listMapper(slbTemplateDnsLocalDnsResolutionLocalResolverCfgToTerraform, true)(struct!.localResolverCfg),
  }
}


export function slbTemplateDnsLocalDnsResolutionToHclTerraform(struct?: SlbTemplateDnsLocalDnsResolutionOutputReference | SlbTemplateDnsLocalDnsResolution): any {
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
    host_list_cfg: {
      value: cdktf.listMapperHcl(slbTemplateDnsLocalDnsResolutionHostListCfgToHclTerraform, true)(struct!.hostListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsLocalDnsResolutionHostListCfgList",
    },
    local_resolver_cfg: {
      value: cdktf.listMapperHcl(slbTemplateDnsLocalDnsResolutionLocalResolverCfgToHclTerraform, true)(struct!.localResolverCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsLocalDnsResolutionLocalResolverCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsLocalDnsResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsLocalDnsResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._hostListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostListCfg = this._hostListCfg?.internalValue;
    }
    if (this._localResolverCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localResolverCfg = this._localResolverCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsLocalDnsResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._hostListCfg.internalValue = undefined;
      this._localResolverCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._hostListCfg.internalValue = value.hostListCfg;
      this._localResolverCfg.internalValue = value.localResolverCfg;
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

  // host_list_cfg - computed: false, optional: true, required: false
  private _hostListCfg = new SlbTemplateDnsLocalDnsResolutionHostListCfgList(this, "host_list_cfg", false);
  public get hostListCfg() {
    return this._hostListCfg;
  }
  public putHostListCfg(value: SlbTemplateDnsLocalDnsResolutionHostListCfg[] | cdktf.IResolvable) {
    this._hostListCfg.internalValue = value;
  }
  public resetHostListCfg() {
    this._hostListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostListCfgInput() {
    return this._hostListCfg.internalValue;
  }

  // local_resolver_cfg - computed: false, optional: true, required: false
  private _localResolverCfg = new SlbTemplateDnsLocalDnsResolutionLocalResolverCfgList(this, "local_resolver_cfg", false);
  public get localResolverCfg() {
    return this._localResolverCfg;
  }
  public putLocalResolverCfg(value: SlbTemplateDnsLocalDnsResolutionLocalResolverCfg[] | cdktf.IResolvable) {
    this._localResolverCfg.internalValue = value;
  }
  public resetLocalResolverCfg() {
    this._localResolverCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localResolverCfgInput() {
    return this._localResolverCfg.internalValue;
  }
}
export interface SlbTemplateDnsNegativeDnsCache {
  /**
  * the threshold bypass the query, default is 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#bypass_query_threshold SlbTemplateDns#bypass_query_threshold}
  */
  readonly bypassQueryThreshold?: number;
  /**
  * Enable DNS negative cache (Need to turn-on the dns-cache for this feature)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#enable_negative_dns_cache SlbTemplateDns#enable_negative_dns_cache}
  */
  readonly enableNegativeDnsCache?: number;
  /**
  * Max negative cache ttl, default is 2 hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#max_negative_cache_ttl SlbTemplateDns#max_negative_cache_ttl}
  */
  readonly maxNegativeCacheTtl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateDnsNegativeDnsCacheToTerraform(struct?: SlbTemplateDnsNegativeDnsCacheOutputReference | SlbTemplateDnsNegativeDnsCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_query_threshold: cdktf.numberToTerraform(struct!.bypassQueryThreshold),
    enable_negative_dns_cache: cdktf.numberToTerraform(struct!.enableNegativeDnsCache),
    max_negative_cache_ttl: cdktf.numberToTerraform(struct!.maxNegativeCacheTtl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateDnsNegativeDnsCacheToHclTerraform(struct?: SlbTemplateDnsNegativeDnsCacheOutputReference | SlbTemplateDnsNegativeDnsCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_query_threshold: {
      value: cdktf.numberToHclTerraform(struct!.bypassQueryThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_negative_dns_cache: {
      value: cdktf.numberToHclTerraform(struct!.enableNegativeDnsCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_negative_cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.maxNegativeCacheTtl),
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

export class SlbTemplateDnsNegativeDnsCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsNegativeDnsCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassQueryThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassQueryThreshold = this._bypassQueryThreshold;
    }
    if (this._enableNegativeDnsCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNegativeDnsCache = this._enableNegativeDnsCache;
    }
    if (this._maxNegativeCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNegativeCacheTtl = this._maxNegativeCacheTtl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsNegativeDnsCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypassQueryThreshold = undefined;
      this._enableNegativeDnsCache = undefined;
      this._maxNegativeCacheTtl = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypassQueryThreshold = value.bypassQueryThreshold;
      this._enableNegativeDnsCache = value.enableNegativeDnsCache;
      this._maxNegativeCacheTtl = value.maxNegativeCacheTtl;
      this._uuid = value.uuid;
    }
  }

  // bypass_query_threshold - computed: false, optional: true, required: false
  private _bypassQueryThreshold?: number; 
  public get bypassQueryThreshold() {
    return this.getNumberAttribute('bypass_query_threshold');
  }
  public set bypassQueryThreshold(value: number) {
    this._bypassQueryThreshold = value;
  }
  public resetBypassQueryThreshold() {
    this._bypassQueryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassQueryThresholdInput() {
    return this._bypassQueryThreshold;
  }

  // enable_negative_dns_cache - computed: false, optional: true, required: false
  private _enableNegativeDnsCache?: number; 
  public get enableNegativeDnsCache() {
    return this.getNumberAttribute('enable_negative_dns_cache');
  }
  public set enableNegativeDnsCache(value: number) {
    this._enableNegativeDnsCache = value;
  }
  public resetEnableNegativeDnsCache() {
    this._enableNegativeDnsCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNegativeDnsCacheInput() {
    return this._enableNegativeDnsCache;
  }

  // max_negative_cache_ttl - computed: false, optional: true, required: false
  private _maxNegativeCacheTtl?: number; 
  public get maxNegativeCacheTtl() {
    return this.getNumberAttribute('max_negative_cache_ttl');
  }
  public set maxNegativeCacheTtl(value: number) {
    this._maxNegativeCacheTtl = value;
  }
  public resetMaxNegativeCacheTtl() {
    this._maxNegativeCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNegativeCacheTtlInput() {
    return this._maxNegativeCacheTtl;
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
export interface SlbTemplateDnsQueryClassFilterQueryClass {
  /**
  * Other query class value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#num_query_class SlbTemplateDns#num_query_class}
  */
  readonly numQueryClass?: number;
  /**
  * 'INTERNET': INTERNET query class; 'CHAOS': CHAOS query class; 'HESIOD': HESIOD query class; 'NONE': NONE query class; 'ANY': ANY query class;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#str_query_class SlbTemplateDns#str_query_class}
  */
  readonly strQueryClass?: string;
}

export function slbTemplateDnsQueryClassFilterQueryClassToTerraform(struct?: SlbTemplateDnsQueryClassFilterQueryClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_query_class: cdktf.numberToTerraform(struct!.numQueryClass),
    str_query_class: cdktf.stringToTerraform(struct!.strQueryClass),
  }
}


export function slbTemplateDnsQueryClassFilterQueryClassToHclTerraform(struct?: SlbTemplateDnsQueryClassFilterQueryClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_query_class: {
      value: cdktf.numberToHclTerraform(struct!.numQueryClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str_query_class: {
      value: cdktf.stringToHclTerraform(struct!.strQueryClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsQueryClassFilterQueryClassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsQueryClassFilterQueryClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numQueryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.numQueryClass = this._numQueryClass;
    }
    if (this._strQueryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.strQueryClass = this._strQueryClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsQueryClassFilterQueryClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numQueryClass = undefined;
      this._strQueryClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numQueryClass = value.numQueryClass;
      this._strQueryClass = value.strQueryClass;
    }
  }

  // num_query_class - computed: false, optional: true, required: false
  private _numQueryClass?: number; 
  public get numQueryClass() {
    return this.getNumberAttribute('num_query_class');
  }
  public set numQueryClass(value: number) {
    this._numQueryClass = value;
  }
  public resetNumQueryClass() {
    this._numQueryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numQueryClassInput() {
    return this._numQueryClass;
  }

  // str_query_class - computed: false, optional: true, required: false
  private _strQueryClass?: string; 
  public get strQueryClass() {
    return this.getStringAttribute('str_query_class');
  }
  public set strQueryClass(value: string) {
    this._strQueryClass = value;
  }
  public resetStrQueryClass() {
    this._strQueryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strQueryClassInput() {
    return this._strQueryClass;
  }
}

export class SlbTemplateDnsQueryClassFilterQueryClassList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsQueryClassFilterQueryClass[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsQueryClassFilterQueryClassOutputReference {
    return new SlbTemplateDnsQueryClassFilterQueryClassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsQueryClassFilter {
  /**
  * 'allow': Allow only certain DNS query classes; 'deny': Deny only certain DNS query classes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#query_class_action SlbTemplateDns#query_class_action}
  */
  readonly queryClassAction?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * query_class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#query_class SlbTemplateDns#query_class}
  */
  readonly queryClass?: SlbTemplateDnsQueryClassFilterQueryClass[] | cdktf.IResolvable;
}

export function slbTemplateDnsQueryClassFilterToTerraform(struct?: SlbTemplateDnsQueryClassFilterOutputReference | SlbTemplateDnsQueryClassFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_class_action: cdktf.stringToTerraform(struct!.queryClassAction),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    query_class: cdktf.listMapper(slbTemplateDnsQueryClassFilterQueryClassToTerraform, true)(struct!.queryClass),
  }
}


export function slbTemplateDnsQueryClassFilterToHclTerraform(struct?: SlbTemplateDnsQueryClassFilterOutputReference | SlbTemplateDnsQueryClassFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_class_action: {
      value: cdktf.stringToHclTerraform(struct!.queryClassAction),
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
    query_class: {
      value: cdktf.listMapperHcl(slbTemplateDnsQueryClassFilterQueryClassToHclTerraform, true)(struct!.queryClass),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsQueryClassFilterQueryClassList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsQueryClassFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsQueryClassFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryClassAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryClassAction = this._queryClassAction;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._queryClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryClass = this._queryClass?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsQueryClassFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryClassAction = undefined;
      this._uuid = undefined;
      this._queryClass.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryClassAction = value.queryClassAction;
      this._uuid = value.uuid;
      this._queryClass.internalValue = value.queryClass;
    }
  }

  // query_class_action - computed: false, optional: true, required: false
  private _queryClassAction?: string; 
  public get queryClassAction() {
    return this.getStringAttribute('query_class_action');
  }
  public set queryClassAction(value: string) {
    this._queryClassAction = value;
  }
  public resetQueryClassAction() {
    this._queryClassAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryClassActionInput() {
    return this._queryClassAction;
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

  // query_class - computed: false, optional: true, required: false
  private _queryClass = new SlbTemplateDnsQueryClassFilterQueryClassList(this, "query_class", false);
  public get queryClass() {
    return this._queryClass;
  }
  public putQueryClass(value: SlbTemplateDnsQueryClassFilterQueryClass[] | cdktf.IResolvable) {
    this._queryClass.internalValue = value;
  }
  public resetQueryClass() {
    this._queryClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryClassInput() {
    return this._queryClass.internalValue;
  }
}
export interface SlbTemplateDnsQueryTypeFilterQueryType {
  /**
  * Other record type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#num_query_type SlbTemplateDns#num_query_type}
  */
  readonly numQueryType?: number;
  /**
  * 'A': Address record; 'AAAA': IPv6 Address record; 'CNAME': Canonical name record; 'MX': Mail exchange record; 'NS': Name server record; 'SRV': Service locator; 'PTR': PTR resource record; 'SOA': Start of authority record; 'TXT': Text record; 'ANY': All cached record;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#str_query_type SlbTemplateDns#str_query_type}
  */
  readonly strQueryType?: string;
}

export function slbTemplateDnsQueryTypeFilterQueryTypeToTerraform(struct?: SlbTemplateDnsQueryTypeFilterQueryType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_query_type: cdktf.numberToTerraform(struct!.numQueryType),
    str_query_type: cdktf.stringToTerraform(struct!.strQueryType),
  }
}


export function slbTemplateDnsQueryTypeFilterQueryTypeToHclTerraform(struct?: SlbTemplateDnsQueryTypeFilterQueryType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_query_type: {
      value: cdktf.numberToHclTerraform(struct!.numQueryType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str_query_type: {
      value: cdktf.stringToHclTerraform(struct!.strQueryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsQueryTypeFilterQueryTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsQueryTypeFilterQueryType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.numQueryType = this._numQueryType;
    }
    if (this._strQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.strQueryType = this._strQueryType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsQueryTypeFilterQueryType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numQueryType = undefined;
      this._strQueryType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numQueryType = value.numQueryType;
      this._strQueryType = value.strQueryType;
    }
  }

  // num_query_type - computed: false, optional: true, required: false
  private _numQueryType?: number; 
  public get numQueryType() {
    return this.getNumberAttribute('num_query_type');
  }
  public set numQueryType(value: number) {
    this._numQueryType = value;
  }
  public resetNumQueryType() {
    this._numQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numQueryTypeInput() {
    return this._numQueryType;
  }

  // str_query_type - computed: false, optional: true, required: false
  private _strQueryType?: string; 
  public get strQueryType() {
    return this.getStringAttribute('str_query_type');
  }
  public set strQueryType(value: string) {
    this._strQueryType = value;
  }
  public resetStrQueryType() {
    this._strQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strQueryTypeInput() {
    return this._strQueryType;
  }
}

export class SlbTemplateDnsQueryTypeFilterQueryTypeList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsQueryTypeFilterQueryType[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsQueryTypeFilterQueryTypeOutputReference {
    return new SlbTemplateDnsQueryTypeFilterQueryTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsQueryTypeFilter {
  /**
  * 'allow': Allow only certain DNS query types; 'deny': Deny only certain DNS query types;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#query_type_action SlbTemplateDns#query_type_action}
  */
  readonly queryTypeAction?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * query_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#query_type SlbTemplateDns#query_type}
  */
  readonly queryType?: SlbTemplateDnsQueryTypeFilterQueryType[] | cdktf.IResolvable;
}

export function slbTemplateDnsQueryTypeFilterToTerraform(struct?: SlbTemplateDnsQueryTypeFilterOutputReference | SlbTemplateDnsQueryTypeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_type_action: cdktf.stringToTerraform(struct!.queryTypeAction),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    query_type: cdktf.listMapper(slbTemplateDnsQueryTypeFilterQueryTypeToTerraform, true)(struct!.queryType),
  }
}


export function slbTemplateDnsQueryTypeFilterToHclTerraform(struct?: SlbTemplateDnsQueryTypeFilterOutputReference | SlbTemplateDnsQueryTypeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_type_action: {
      value: cdktf.stringToHclTerraform(struct!.queryTypeAction),
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
    query_type: {
      value: cdktf.listMapperHcl(slbTemplateDnsQueryTypeFilterQueryTypeToHclTerraform, true)(struct!.queryType),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsQueryTypeFilterQueryTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsQueryTypeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsQueryTypeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryTypeAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTypeAction = this._queryTypeAction;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._queryType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsQueryTypeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryTypeAction = undefined;
      this._uuid = undefined;
      this._queryType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryTypeAction = value.queryTypeAction;
      this._uuid = value.uuid;
      this._queryType.internalValue = value.queryType;
    }
  }

  // query_type_action - computed: false, optional: true, required: false
  private _queryTypeAction?: string; 
  public get queryTypeAction() {
    return this.getStringAttribute('query_type_action');
  }
  public set queryTypeAction(value: string) {
    this._queryTypeAction = value;
  }
  public resetQueryTypeAction() {
    this._queryTypeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeActionInput() {
    return this._queryTypeAction;
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

  // query_type - computed: false, optional: true, required: false
  private _queryType = new SlbTemplateDnsQueryTypeFilterQueryTypeList(this, "query_type", false);
  public get queryType() {
    return this._queryType;
  }
  public putQueryType(value: SlbTemplateDnsQueryTypeFilterQueryType[] | cdktf.IResolvable) {
    this._queryType.internalValue = value;
  }
  public resetQueryType() {
    this._queryType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType.internalValue;
  }
}
export interface SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck {
  /**
  * 'disabled': Disable NS Cache Lookup; 'enabled': Enable NS Cache Lookup;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#gwhc_ns_cache_lookup SlbTemplateDns#gwhc_ns_cache_lookup}
  */
  readonly gwhcNsCacheLookup?: string;
  /**
  * Specify the health check interval, default is 10 sec (Interval value, in seconds (default 10))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#interval SlbTemplateDns#interval}
  */
  readonly interval?: number;
  /**
  * Other record type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#num_query_type SlbTemplateDns#num_query_type}
  */
  readonly numQueryType?: number;
  /**
  * Specify the query name used in probe queries, default "a10networks.com"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#query_name SlbTemplateDns#query_name}
  */
  readonly queryName?: string;
  /**
  * Maximum number of DNS query retries at each server level before health check fails, default 6 (Retry count (default 6))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#retry SlbTemplateDns#retry}
  */
  readonly retry?: number;
  /**
  * Specify number of times that health check consecutively fails before declaring gateway DOWN, default 1 (retry-multi count (default 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#retry_multi SlbTemplateDns#retry_multi}
  */
  readonly retryMulti?: number;
  /**
  * 'A': Address record; 'AAAA': IPv6 Address record; 'CNAME': Canonical name record; 'MX': Mail exchange record; 'NS': Name server record; 'SRV': Service locator; 'PTR': PTR resource record; 'SOA': Start of authority record; 'TXT': Text record;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#str_query_type SlbTemplateDns#str_query_type}
  */
  readonly strQueryType?: string;
  /**
  * Specify the health check timeout before retrying or finish, default is 5 sec (Timeout value, in seconds (default 5))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#timeout SlbTemplateDns#timeout}
  */
  readonly timeout?: number;
  /**
  * Specify number of times that health check consecutively passes before declaring gateway UP, default 1 (up-retry count (default 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#up_retry SlbTemplateDns#up_retry}
  */
  readonly upRetry?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckToTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckOutputReference | SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gwhc_ns_cache_lookup: cdktf.stringToTerraform(struct!.gwhcNsCacheLookup),
    interval: cdktf.numberToTerraform(struct!.interval),
    num_query_type: cdktf.numberToTerraform(struct!.numQueryType),
    query_name: cdktf.stringToTerraform(struct!.queryName),
    retry: cdktf.numberToTerraform(struct!.retry),
    retry_multi: cdktf.numberToTerraform(struct!.retryMulti),
    str_query_type: cdktf.stringToTerraform(struct!.strQueryType),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    up_retry: cdktf.numberToTerraform(struct!.upRetry),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckToHclTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckOutputReference | SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gwhc_ns_cache_lookup: {
      value: cdktf.stringToHclTerraform(struct!.gwhcNsCacheLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_query_type: {
      value: cdktf.numberToHclTerraform(struct!.numQueryType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_name: {
      value: cdktf.stringToHclTerraform(struct!.queryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_multi: {
      value: cdktf.numberToHclTerraform(struct!.retryMulti),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str_query_type: {
      value: cdktf.stringToHclTerraform(struct!.strQueryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_retry: {
      value: cdktf.numberToHclTerraform(struct!.upRetry),
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

export class SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gwhcNsCacheLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwhcNsCacheLookup = this._gwhcNsCacheLookup;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._numQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.numQueryType = this._numQueryType;
    }
    if (this._queryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._retryMulti !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryMulti = this._retryMulti;
    }
    if (this._strQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.strQueryType = this._strQueryType;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._upRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.upRetry = this._upRetry;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gwhcNsCacheLookup = undefined;
      this._interval = undefined;
      this._numQueryType = undefined;
      this._queryName = undefined;
      this._retry = undefined;
      this._retryMulti = undefined;
      this._strQueryType = undefined;
      this._timeout = undefined;
      this._upRetry = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gwhcNsCacheLookup = value.gwhcNsCacheLookup;
      this._interval = value.interval;
      this._numQueryType = value.numQueryType;
      this._queryName = value.queryName;
      this._retry = value.retry;
      this._retryMulti = value.retryMulti;
      this._strQueryType = value.strQueryType;
      this._timeout = value.timeout;
      this._upRetry = value.upRetry;
      this._uuid = value.uuid;
    }
  }

  // gwhc_ns_cache_lookup - computed: false, optional: true, required: false
  private _gwhcNsCacheLookup?: string; 
  public get gwhcNsCacheLookup() {
    return this.getStringAttribute('gwhc_ns_cache_lookup');
  }
  public set gwhcNsCacheLookup(value: string) {
    this._gwhcNsCacheLookup = value;
  }
  public resetGwhcNsCacheLookup() {
    this._gwhcNsCacheLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwhcNsCacheLookupInput() {
    return this._gwhcNsCacheLookup;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // num_query_type - computed: false, optional: true, required: false
  private _numQueryType?: number; 
  public get numQueryType() {
    return this.getNumberAttribute('num_query_type');
  }
  public set numQueryType(value: number) {
    this._numQueryType = value;
  }
  public resetNumQueryType() {
    this._numQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numQueryTypeInput() {
    return this._numQueryType;
  }

  // query_name - computed: false, optional: true, required: false
  private _queryName?: string; 
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  public resetQueryName() {
    this._queryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // retry_multi - computed: false, optional: true, required: false
  private _retryMulti?: number; 
  public get retryMulti() {
    return this.getNumberAttribute('retry_multi');
  }
  public set retryMulti(value: number) {
    this._retryMulti = value;
  }
  public resetRetryMulti() {
    this._retryMulti = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMultiInput() {
    return this._retryMulti;
  }

  // str_query_type - computed: false, optional: true, required: false
  private _strQueryType?: string; 
  public get strQueryType() {
    return this.getStringAttribute('str_query_type');
  }
  public set strQueryType(value: string) {
    this._strQueryType = value;
  }
  public resetStrQueryType() {
    this._strQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strQueryTypeInput() {
    return this._strQueryType;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // up_retry - computed: false, optional: true, required: false
  private _upRetry?: number; 
  public get upRetry() {
    return this.getNumberAttribute('up_retry');
  }
  public set upRetry(value: number) {
    this._upRetry = value;
  }
  public resetUpRetry() {
    this._upRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upRetryInput() {
    return this._upRetry;
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
export interface SlbTemplateDnsRecursiveDnsResolutionHostListCfg {
  /**
  * Hostnames class-list name (dns type), perform resolution while query name matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#hostnames SlbTemplateDns#hostnames}
  */
  readonly hostnames?: string;
}

export function slbTemplateDnsRecursiveDnsResolutionHostListCfgToTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionHostListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.stringToTerraform(struct!.hostnames),
  }
}


export function slbTemplateDnsRecursiveDnsResolutionHostListCfgToHclTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionHostListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.stringToHclTerraform(struct!.hostnames),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsRecursiveDnsResolutionHostListCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsRecursiveDnsResolutionHostListCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsRecursiveDnsResolutionHostListCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string; 
  public get hostnames() {
    return this.getStringAttribute('hostnames');
  }
  public set hostnames(value: string) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }
}

export class SlbTemplateDnsRecursiveDnsResolutionHostListCfgList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsRecursiveDnsResolutionHostListCfg[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsRecursiveDnsResolutionHostListCfgOutputReference {
    return new SlbTemplateDnsRecursiveDnsResolutionHostListCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryType {
  /**
  * Other query type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#num_query_type SlbTemplateDns#num_query_type}
  */
  readonly numQueryType?: number;
  /**
  * 'ipv4-precede-ipv6': Recursive lookup via IPv4 then IPv6; 'ipv6-precede-ipv4': Recursive lookup via IPv6 then IPv4;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#order SlbTemplateDns#order}
  */
  readonly order?: string;
  /**
  * 'A': Address record; 'AAAA': IPv6 Address record; 'CNAME': Canonical name record; 'MX': Mail exchange record; 'NS': Name server record; 'SRV': Service locator; 'PTR': PTR resource record; 'SOA': Start of authority record; 'TXT': Text record; 'ANY': All cached record;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#str_query_type SlbTemplateDns#str_query_type}
  */
  readonly strQueryType?: string;
}

export function slbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeToTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_query_type: cdktf.numberToTerraform(struct!.numQueryType),
    order: cdktf.stringToTerraform(struct!.order),
    str_query_type: cdktf.stringToTerraform(struct!.strQueryType),
  }
}


export function slbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeToHclTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_query_type: {
      value: cdktf.numberToHclTerraform(struct!.numQueryType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_query_type: {
      value: cdktf.stringToHclTerraform(struct!.strQueryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.numQueryType = this._numQueryType;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._strQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.strQueryType = this._strQueryType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numQueryType = undefined;
      this._order = undefined;
      this._strQueryType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numQueryType = value.numQueryType;
      this._order = value.order;
      this._strQueryType = value.strQueryType;
    }
  }

  // num_query_type - computed: false, optional: true, required: false
  private _numQueryType?: number; 
  public get numQueryType() {
    return this.getNumberAttribute('num_query_type');
  }
  public set numQueryType(value: number) {
    this._numQueryType = value;
  }
  public resetNumQueryType() {
    this._numQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numQueryTypeInput() {
    return this._numQueryType;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // str_query_type - computed: false, optional: true, required: false
  private _strQueryType?: string; 
  public get strQueryType() {
    return this.getStringAttribute('str_query_type');
  }
  public set strQueryType(value: string) {
    this._strQueryType = value;
  }
  public resetStrQueryType() {
    this._strQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strQueryTypeInput() {
    return this._strQueryType;
  }
}

export class SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryType[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeOutputReference {
    return new SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsRecursiveDnsResolutionLookupOrder {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * query_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#query_type SlbTemplateDns#query_type}
  */
  readonly queryType?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryType[] | cdktf.IResolvable;
}

export function slbTemplateDnsRecursiveDnsResolutionLookupOrderToTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderOutputReference | SlbTemplateDnsRecursiveDnsResolutionLookupOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    query_type: cdktf.listMapper(slbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeToTerraform, true)(struct!.queryType),
  }
}


export function slbTemplateDnsRecursiveDnsResolutionLookupOrderToHclTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderOutputReference | SlbTemplateDnsRecursiveDnsResolutionLookupOrder): any {
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
    query_type: {
      value: cdktf.listMapperHcl(slbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeToHclTerraform, true)(struct!.queryType),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsRecursiveDnsResolutionLookupOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsRecursiveDnsResolutionLookupOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._queryType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsRecursiveDnsResolutionLookupOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._queryType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._queryType.internalValue = value.queryType;
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

  // query_type - computed: false, optional: true, required: false
  private _queryType = new SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeList(this, "query_type", false);
  public get queryType() {
    return this._queryType;
  }
  public putQueryType(value: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryType[] | cdktf.IResolvable) {
    this._queryType.internalValue = value;
  }
  public resetQueryType() {
    this._queryType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType.internalValue;
  }
}
export interface SlbTemplateDnsRecursiveDnsResolution {
  /**
  * retry when server REFUSED AX inserted EDNS(0) subnet, works only when insert-client-subnet is configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#csubnet_retry SlbTemplateDns#csubnet_retry}
  */
  readonly csubnetRetry?: number;
  /**
  * Default recursive mode, forward query to bound service-group if hostnames matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#default_recursive SlbTemplateDns#default_recursive}
  */
  readonly defaultRecursive?: number;
  /**
  * 'enabled': Enable DNSSEC validation; 'disabled': Disable DNSSEC validation;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#dnssec_validation SlbTemplateDns#dnssec_validation}
  */
  readonly dnssecValidation?: string;
  /**
  * 'enabled': Enable fast NS selection; 'disabled': Disable fast NS selection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#fast_ns_selection SlbTemplateDns#fast_ns_selection}
  */
  readonly fastNsSelection?: string;
  /**
  * 'enabled': Force CNAME resolution always; 'disabled': Use answer record in CNAME response if it exists, else resolve;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#force_cname_resolution SlbTemplateDns#force_cname_resolution}
  */
  readonly forceCnameResolution?: string;
  /**
  * Serve all records (authority and additional) when applicable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#full_response SlbTemplateDns#full_response}
  */
  readonly fullResponse?: number;
  /**
  * IPv4 Source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#ipv4_nat_pool SlbTemplateDns#ipv4_nat_pool}
  */
  readonly ipv4NatPool?: string;
  /**
  * IPv6 Source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#ipv6_nat_pool SlbTemplateDns#ipv6_nat_pool}
  */
  readonly ipv6NatPool?: string;
  /**
  * Total number of times to try DNS query to server before closing client connection, default 255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#max_trials SlbTemplateDns#max_trials}
  */
  readonly maxTrials?: number;
  /**
  * 'disabled': Disable NS Cache Lookup; 'enabled': Enable NS Cache Lookup;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#ns_cache_lookup SlbTemplateDns#ns_cache_lookup}
  */
  readonly nsCacheLookup?: string;
  /**
  * 'drop': Drop of the request during ongoing; 'respond-with-servfail': Respond with SERVFAIL of the request during ongoing; 'start-new-resolution': Start new resolution of the request during ongoing;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#request_for_pending_resolution SlbTemplateDns#request_for_pending_resolution}
  */
  readonly requestForPendingResolution?: string;
  /**
  * Number of DNS query retries at each server level before closing client connection, default 6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#retries_per_level SlbTemplateDns#retries_per_level}
  */
  readonly retriesPerLevel?: number;
  /**
  * UDP DNS Retry Interval value 1-6, default is 5 sec (1-6, default is 5sec)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#udp_initial_interval SlbTemplateDns#udp_initial_interval}
  */
  readonly udpInitialInterval?: number;
  /**
  * UDP DNS Retry Interval value 1-6, default is 1 sec (1-6 , default is 1 sec)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#udp_retry_interval SlbTemplateDns#udp_retry_interval}
  */
  readonly udpRetryInterval?: number;
  /**
  * Use client side query id for recursive query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#use_client_qid SlbTemplateDns#use_client_qid}
  */
  readonly useClientQid?: number;
  /**
  * 'disabled': Start Recursive Resolver if Server response doesnt have final answer; 'enabled': Forward Backend Server response to client and dont start recursive resolver;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#use_service_group_response SlbTemplateDns#use_service_group_response}
  */
  readonly useServiceGroupResponse?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * gateway_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#gateway_health_check SlbTemplateDns#gateway_health_check}
  */
  readonly gatewayHealthCheck?: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck;
  /**
  * host_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#host_list_cfg SlbTemplateDns#host_list_cfg}
  */
  readonly hostListCfg?: SlbTemplateDnsRecursiveDnsResolutionHostListCfg[] | cdktf.IResolvable;
  /**
  * lookup_order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lookup_order SlbTemplateDns#lookup_order}
  */
  readonly lookupOrder?: SlbTemplateDnsRecursiveDnsResolutionLookupOrder;
}

export function slbTemplateDnsRecursiveDnsResolutionToTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionOutputReference | SlbTemplateDnsRecursiveDnsResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csubnet_retry: cdktf.numberToTerraform(struct!.csubnetRetry),
    default_recursive: cdktf.numberToTerraform(struct!.defaultRecursive),
    dnssec_validation: cdktf.stringToTerraform(struct!.dnssecValidation),
    fast_ns_selection: cdktf.stringToTerraform(struct!.fastNsSelection),
    force_cname_resolution: cdktf.stringToTerraform(struct!.forceCnameResolution),
    full_response: cdktf.numberToTerraform(struct!.fullResponse),
    ipv4_nat_pool: cdktf.stringToTerraform(struct!.ipv4NatPool),
    ipv6_nat_pool: cdktf.stringToTerraform(struct!.ipv6NatPool),
    max_trials: cdktf.numberToTerraform(struct!.maxTrials),
    ns_cache_lookup: cdktf.stringToTerraform(struct!.nsCacheLookup),
    request_for_pending_resolution: cdktf.stringToTerraform(struct!.requestForPendingResolution),
    retries_per_level: cdktf.numberToTerraform(struct!.retriesPerLevel),
    udp_initial_interval: cdktf.numberToTerraform(struct!.udpInitialInterval),
    udp_retry_interval: cdktf.numberToTerraform(struct!.udpRetryInterval),
    use_client_qid: cdktf.numberToTerraform(struct!.useClientQid),
    use_service_group_response: cdktf.stringToTerraform(struct!.useServiceGroupResponse),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    gateway_health_check: slbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckToTerraform(struct!.gatewayHealthCheck),
    host_list_cfg: cdktf.listMapper(slbTemplateDnsRecursiveDnsResolutionHostListCfgToTerraform, true)(struct!.hostListCfg),
    lookup_order: slbTemplateDnsRecursiveDnsResolutionLookupOrderToTerraform(struct!.lookupOrder),
  }
}


export function slbTemplateDnsRecursiveDnsResolutionToHclTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionOutputReference | SlbTemplateDnsRecursiveDnsResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csubnet_retry: {
      value: cdktf.numberToHclTerraform(struct!.csubnetRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_recursive: {
      value: cdktf.numberToHclTerraform(struct!.defaultRecursive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnssec_validation: {
      value: cdktf.stringToHclTerraform(struct!.dnssecValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fast_ns_selection: {
      value: cdktf.stringToHclTerraform(struct!.fastNsSelection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_cname_resolution: {
      value: cdktf.stringToHclTerraform(struct!.forceCnameResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_response: {
      value: cdktf.numberToHclTerraform(struct!.fullResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.ipv4NatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.ipv6NatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_trials: {
      value: cdktf.numberToHclTerraform(struct!.maxTrials),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ns_cache_lookup: {
      value: cdktf.stringToHclTerraform(struct!.nsCacheLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_for_pending_resolution: {
      value: cdktf.stringToHclTerraform(struct!.requestForPendingResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retries_per_level: {
      value: cdktf.numberToHclTerraform(struct!.retriesPerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_initial_interval: {
      value: cdktf.numberToHclTerraform(struct!.udpInitialInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_client_qid: {
      value: cdktf.numberToHclTerraform(struct!.useClientQid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_service_group_response: {
      value: cdktf.stringToHclTerraform(struct!.useServiceGroupResponse),
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
    gateway_health_check: {
      value: slbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckToHclTerraform(struct!.gatewayHealthCheck),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckList",
    },
    host_list_cfg: {
      value: cdktf.listMapperHcl(slbTemplateDnsRecursiveDnsResolutionHostListCfgToHclTerraform, true)(struct!.hostListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsRecursiveDnsResolutionHostListCfgList",
    },
    lookup_order: {
      value: slbTemplateDnsRecursiveDnsResolutionLookupOrderToHclTerraform(struct!.lookupOrder),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsRecursiveDnsResolutionLookupOrderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsRecursiveDnsResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsRecursiveDnsResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csubnetRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.csubnetRetry = this._csubnetRetry;
    }
    if (this._defaultRecursive !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecursive = this._defaultRecursive;
    }
    if (this._dnssecValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecValidation = this._dnssecValidation;
    }
    if (this._fastNsSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastNsSelection = this._fastNsSelection;
    }
    if (this._forceCnameResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCnameResolution = this._forceCnameResolution;
    }
    if (this._fullResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullResponse = this._fullResponse;
    }
    if (this._ipv4NatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NatPool = this._ipv4NatPool;
    }
    if (this._ipv6NatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NatPool = this._ipv6NatPool;
    }
    if (this._maxTrials !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTrials = this._maxTrials;
    }
    if (this._nsCacheLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsCacheLookup = this._nsCacheLookup;
    }
    if (this._requestForPendingResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestForPendingResolution = this._requestForPendingResolution;
    }
    if (this._retriesPerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriesPerLevel = this._retriesPerLevel;
    }
    if (this._udpInitialInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpInitialInterval = this._udpInitialInterval;
    }
    if (this._udpRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryInterval = this._udpRetryInterval;
    }
    if (this._useClientQid !== undefined) {
      hasAnyValues = true;
      internalValueResult.useClientQid = this._useClientQid;
    }
    if (this._useServiceGroupResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServiceGroupResponse = this._useServiceGroupResponse;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._gatewayHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayHealthCheck = this._gatewayHealthCheck?.internalValue;
    }
    if (this._hostListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostListCfg = this._hostListCfg?.internalValue;
    }
    if (this._lookupOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupOrder = this._lookupOrder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsRecursiveDnsResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._csubnetRetry = undefined;
      this._defaultRecursive = undefined;
      this._dnssecValidation = undefined;
      this._fastNsSelection = undefined;
      this._forceCnameResolution = undefined;
      this._fullResponse = undefined;
      this._ipv4NatPool = undefined;
      this._ipv6NatPool = undefined;
      this._maxTrials = undefined;
      this._nsCacheLookup = undefined;
      this._requestForPendingResolution = undefined;
      this._retriesPerLevel = undefined;
      this._udpInitialInterval = undefined;
      this._udpRetryInterval = undefined;
      this._useClientQid = undefined;
      this._useServiceGroupResponse = undefined;
      this._uuid = undefined;
      this._gatewayHealthCheck.internalValue = undefined;
      this._hostListCfg.internalValue = undefined;
      this._lookupOrder.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._csubnetRetry = value.csubnetRetry;
      this._defaultRecursive = value.defaultRecursive;
      this._dnssecValidation = value.dnssecValidation;
      this._fastNsSelection = value.fastNsSelection;
      this._forceCnameResolution = value.forceCnameResolution;
      this._fullResponse = value.fullResponse;
      this._ipv4NatPool = value.ipv4NatPool;
      this._ipv6NatPool = value.ipv6NatPool;
      this._maxTrials = value.maxTrials;
      this._nsCacheLookup = value.nsCacheLookup;
      this._requestForPendingResolution = value.requestForPendingResolution;
      this._retriesPerLevel = value.retriesPerLevel;
      this._udpInitialInterval = value.udpInitialInterval;
      this._udpRetryInterval = value.udpRetryInterval;
      this._useClientQid = value.useClientQid;
      this._useServiceGroupResponse = value.useServiceGroupResponse;
      this._uuid = value.uuid;
      this._gatewayHealthCheck.internalValue = value.gatewayHealthCheck;
      this._hostListCfg.internalValue = value.hostListCfg;
      this._lookupOrder.internalValue = value.lookupOrder;
    }
  }

  // csubnet_retry - computed: false, optional: true, required: false
  private _csubnetRetry?: number; 
  public get csubnetRetry() {
    return this.getNumberAttribute('csubnet_retry');
  }
  public set csubnetRetry(value: number) {
    this._csubnetRetry = value;
  }
  public resetCsubnetRetry() {
    this._csubnetRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csubnetRetryInput() {
    return this._csubnetRetry;
  }

  // default_recursive - computed: false, optional: true, required: false
  private _defaultRecursive?: number; 
  public get defaultRecursive() {
    return this.getNumberAttribute('default_recursive');
  }
  public set defaultRecursive(value: number) {
    this._defaultRecursive = value;
  }
  public resetDefaultRecursive() {
    this._defaultRecursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecursiveInput() {
    return this._defaultRecursive;
  }

  // dnssec_validation - computed: false, optional: true, required: false
  private _dnssecValidation?: string; 
  public get dnssecValidation() {
    return this.getStringAttribute('dnssec_validation');
  }
  public set dnssecValidation(value: string) {
    this._dnssecValidation = value;
  }
  public resetDnssecValidation() {
    this._dnssecValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecValidationInput() {
    return this._dnssecValidation;
  }

  // fast_ns_selection - computed: false, optional: true, required: false
  private _fastNsSelection?: string; 
  public get fastNsSelection() {
    return this.getStringAttribute('fast_ns_selection');
  }
  public set fastNsSelection(value: string) {
    this._fastNsSelection = value;
  }
  public resetFastNsSelection() {
    this._fastNsSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastNsSelectionInput() {
    return this._fastNsSelection;
  }

  // force_cname_resolution - computed: false, optional: true, required: false
  private _forceCnameResolution?: string; 
  public get forceCnameResolution() {
    return this.getStringAttribute('force_cname_resolution');
  }
  public set forceCnameResolution(value: string) {
    this._forceCnameResolution = value;
  }
  public resetForceCnameResolution() {
    this._forceCnameResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCnameResolutionInput() {
    return this._forceCnameResolution;
  }

  // full_response - computed: false, optional: true, required: false
  private _fullResponse?: number; 
  public get fullResponse() {
    return this.getNumberAttribute('full_response');
  }
  public set fullResponse(value: number) {
    this._fullResponse = value;
  }
  public resetFullResponse() {
    this._fullResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullResponseInput() {
    return this._fullResponse;
  }

  // ipv4_nat_pool - computed: false, optional: true, required: false
  private _ipv4NatPool?: string; 
  public get ipv4NatPool() {
    return this.getStringAttribute('ipv4_nat_pool');
  }
  public set ipv4NatPool(value: string) {
    this._ipv4NatPool = value;
  }
  public resetIpv4NatPool() {
    this._ipv4NatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatPoolInput() {
    return this._ipv4NatPool;
  }

  // ipv6_nat_pool - computed: false, optional: true, required: false
  private _ipv6NatPool?: string; 
  public get ipv6NatPool() {
    return this.getStringAttribute('ipv6_nat_pool');
  }
  public set ipv6NatPool(value: string) {
    this._ipv6NatPool = value;
  }
  public resetIpv6NatPool() {
    this._ipv6NatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NatPoolInput() {
    return this._ipv6NatPool;
  }

  // max_trials - computed: false, optional: true, required: false
  private _maxTrials?: number; 
  public get maxTrials() {
    return this.getNumberAttribute('max_trials');
  }
  public set maxTrials(value: number) {
    this._maxTrials = value;
  }
  public resetMaxTrials() {
    this._maxTrials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTrialsInput() {
    return this._maxTrials;
  }

  // ns_cache_lookup - computed: false, optional: true, required: false
  private _nsCacheLookup?: string; 
  public get nsCacheLookup() {
    return this.getStringAttribute('ns_cache_lookup');
  }
  public set nsCacheLookup(value: string) {
    this._nsCacheLookup = value;
  }
  public resetNsCacheLookup() {
    this._nsCacheLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsCacheLookupInput() {
    return this._nsCacheLookup;
  }

  // request_for_pending_resolution - computed: false, optional: true, required: false
  private _requestForPendingResolution?: string; 
  public get requestForPendingResolution() {
    return this.getStringAttribute('request_for_pending_resolution');
  }
  public set requestForPendingResolution(value: string) {
    this._requestForPendingResolution = value;
  }
  public resetRequestForPendingResolution() {
    this._requestForPendingResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestForPendingResolutionInput() {
    return this._requestForPendingResolution;
  }

  // retries_per_level - computed: false, optional: true, required: false
  private _retriesPerLevel?: number; 
  public get retriesPerLevel() {
    return this.getNumberAttribute('retries_per_level');
  }
  public set retriesPerLevel(value: number) {
    this._retriesPerLevel = value;
  }
  public resetRetriesPerLevel() {
    this._retriesPerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesPerLevelInput() {
    return this._retriesPerLevel;
  }

  // udp_initial_interval - computed: false, optional: true, required: false
  private _udpInitialInterval?: number; 
  public get udpInitialInterval() {
    return this.getNumberAttribute('udp_initial_interval');
  }
  public set udpInitialInterval(value: number) {
    this._udpInitialInterval = value;
  }
  public resetUdpInitialInterval() {
    this._udpInitialInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInitialIntervalInput() {
    return this._udpInitialInterval;
  }

  // udp_retry_interval - computed: false, optional: true, required: false
  private _udpRetryInterval?: number; 
  public get udpRetryInterval() {
    return this.getNumberAttribute('udp_retry_interval');
  }
  public set udpRetryInterval(value: number) {
    this._udpRetryInterval = value;
  }
  public resetUdpRetryInterval() {
    this._udpRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryIntervalInput() {
    return this._udpRetryInterval;
  }

  // use_client_qid - computed: false, optional: true, required: false
  private _useClientQid?: number; 
  public get useClientQid() {
    return this.getNumberAttribute('use_client_qid');
  }
  public set useClientQid(value: number) {
    this._useClientQid = value;
  }
  public resetUseClientQid() {
    this._useClientQid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useClientQidInput() {
    return this._useClientQid;
  }

  // use_service_group_response - computed: false, optional: true, required: false
  private _useServiceGroupResponse?: string; 
  public get useServiceGroupResponse() {
    return this.getStringAttribute('use_service_group_response');
  }
  public set useServiceGroupResponse(value: string) {
    this._useServiceGroupResponse = value;
  }
  public resetUseServiceGroupResponse() {
    this._useServiceGroupResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServiceGroupResponseInput() {
    return this._useServiceGroupResponse;
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

  // gateway_health_check - computed: false, optional: true, required: false
  private _gatewayHealthCheck = new SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckOutputReference(this, "gateway_health_check");
  public get gatewayHealthCheck() {
    return this._gatewayHealthCheck;
  }
  public putGatewayHealthCheck(value: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck) {
    this._gatewayHealthCheck.internalValue = value;
  }
  public resetGatewayHealthCheck() {
    this._gatewayHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayHealthCheckInput() {
    return this._gatewayHealthCheck.internalValue;
  }

  // host_list_cfg - computed: false, optional: true, required: false
  private _hostListCfg = new SlbTemplateDnsRecursiveDnsResolutionHostListCfgList(this, "host_list_cfg", false);
  public get hostListCfg() {
    return this._hostListCfg;
  }
  public putHostListCfg(value: SlbTemplateDnsRecursiveDnsResolutionHostListCfg[] | cdktf.IResolvable) {
    this._hostListCfg.internalValue = value;
  }
  public resetHostListCfg() {
    this._hostListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostListCfgInput() {
    return this._hostListCfg.internalValue;
  }

  // lookup_order - computed: false, optional: true, required: false
  private _lookupOrder = new SlbTemplateDnsRecursiveDnsResolutionLookupOrderOutputReference(this, "lookup_order");
  public get lookupOrder() {
    return this._lookupOrder;
  }
  public putLookupOrder(value: SlbTemplateDnsRecursiveDnsResolutionLookupOrder) {
    this._lookupOrder.internalValue = value;
  }
  public resetLookupOrder() {
    this._lookupOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupOrderInput() {
    return this._lookupOrder.internalValue;
  }
}
export interface SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStruct {
  /**
  * 'log-only': Only log rate-limiting, do not actually rate limit. Requires enable-log configuration; 'rate-limit': Rate-Limit based on configuration (Default); 'whitelist': Whitelist, disable rate-limiting;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lid_action SlbTemplateDns#lid_action}
  */
  readonly lidAction?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lid_enable_log SlbTemplateDns#lid_enable_log}
  */
  readonly lidEnableLog?: number;
  /**
  * IP subnet mask (response rate by IP subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lid_match_subnet SlbTemplateDns#lid_match_subnet}
  */
  readonly lidMatchSubnet?: string;
  /**
  * IPV6 subnet mask (response rate by IPv6 subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lid_match_subnet_v6 SlbTemplateDns#lid_match_subnet_v6}
  */
  readonly lidMatchSubnetV6?: number;
  /**
  * Responses exceeding this rate within the window will be dropped (default 5 per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lid_response_rate SlbTemplateDns#lid_response_rate}
  */
  readonly lidResponseRate?: number;
  /**
  * Every n'th response that would be rate-limited will be let through instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lid_slip_rate SlbTemplateDns#lid_slip_rate}
  */
  readonly lidSlipRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lid_src_ip_only SlbTemplateDns#lid_src_ip_only}
  */
  readonly lidSrcIpOnly?: number;
  /**
  * Every n'th response that would be rate-limited will respond with TC bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lid_tc_rate SlbTemplateDns#lid_tc_rate}
  */
  readonly lidTcRate?: number;
  /**
  * Rate-Limiting Interval in Seconds (default is one)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lid_window SlbTemplateDns#lid_window}
  */
  readonly lidWindow?: number;
  /**
  * Specify a limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lidnum SlbTemplateDns#lidnum}
  */
  readonly lidnum: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#user_tag SlbTemplateDns#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateDnsResponseRateLimitingRrlClassListListLidListStructToTerraform(struct?: SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lid_action: cdktf.stringToTerraform(struct!.lidAction),
    lid_enable_log: cdktf.numberToTerraform(struct!.lidEnableLog),
    lid_match_subnet: cdktf.stringToTerraform(struct!.lidMatchSubnet),
    lid_match_subnet_v6: cdktf.numberToTerraform(struct!.lidMatchSubnetV6),
    lid_response_rate: cdktf.numberToTerraform(struct!.lidResponseRate),
    lid_slip_rate: cdktf.numberToTerraform(struct!.lidSlipRate),
    lid_src_ip_only: cdktf.numberToTerraform(struct!.lidSrcIpOnly),
    lid_tc_rate: cdktf.numberToTerraform(struct!.lidTcRate),
    lid_window: cdktf.numberToTerraform(struct!.lidWindow),
    lidnum: cdktf.numberToTerraform(struct!.lidnum),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateDnsResponseRateLimitingRrlClassListListLidListStructToHclTerraform(struct?: SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lid_action: {
      value: cdktf.stringToHclTerraform(struct!.lidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lid_enable_log: {
      value: cdktf.numberToHclTerraform(struct!.lidEnableLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_match_subnet: {
      value: cdktf.stringToHclTerraform(struct!.lidMatchSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lid_match_subnet_v6: {
      value: cdktf.numberToHclTerraform(struct!.lidMatchSubnetV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_response_rate: {
      value: cdktf.numberToHclTerraform(struct!.lidResponseRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_slip_rate: {
      value: cdktf.numberToHclTerraform(struct!.lidSlipRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_src_ip_only: {
      value: cdktf.numberToHclTerraform(struct!.lidSrcIpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_tc_rate: {
      value: cdktf.numberToHclTerraform(struct!.lidTcRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_window: {
      value: cdktf.numberToHclTerraform(struct!.lidWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lidnum: {
      value: cdktf.numberToHclTerraform(struct!.lidnum),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidAction = this._lidAction;
    }
    if (this._lidEnableLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidEnableLog = this._lidEnableLog;
    }
    if (this._lidMatchSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidMatchSubnet = this._lidMatchSubnet;
    }
    if (this._lidMatchSubnetV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidMatchSubnetV6 = this._lidMatchSubnetV6;
    }
    if (this._lidResponseRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidResponseRate = this._lidResponseRate;
    }
    if (this._lidSlipRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidSlipRate = this._lidSlipRate;
    }
    if (this._lidSrcIpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidSrcIpOnly = this._lidSrcIpOnly;
    }
    if (this._lidTcRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidTcRate = this._lidTcRate;
    }
    if (this._lidWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidWindow = this._lidWindow;
    }
    if (this._lidnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidnum = this._lidnum;
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

  public set internalValue(value: SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lidAction = undefined;
      this._lidEnableLog = undefined;
      this._lidMatchSubnet = undefined;
      this._lidMatchSubnetV6 = undefined;
      this._lidResponseRate = undefined;
      this._lidSlipRate = undefined;
      this._lidSrcIpOnly = undefined;
      this._lidTcRate = undefined;
      this._lidWindow = undefined;
      this._lidnum = undefined;
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
      this._lidAction = value.lidAction;
      this._lidEnableLog = value.lidEnableLog;
      this._lidMatchSubnet = value.lidMatchSubnet;
      this._lidMatchSubnetV6 = value.lidMatchSubnetV6;
      this._lidResponseRate = value.lidResponseRate;
      this._lidSlipRate = value.lidSlipRate;
      this._lidSrcIpOnly = value.lidSrcIpOnly;
      this._lidTcRate = value.lidTcRate;
      this._lidWindow = value.lidWindow;
      this._lidnum = value.lidnum;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // lid_action - computed: false, optional: true, required: false
  private _lidAction?: string; 
  public get lidAction() {
    return this.getStringAttribute('lid_action');
  }
  public set lidAction(value: string) {
    this._lidAction = value;
  }
  public resetLidAction() {
    this._lidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidActionInput() {
    return this._lidAction;
  }

  // lid_enable_log - computed: false, optional: true, required: false
  private _lidEnableLog?: number; 
  public get lidEnableLog() {
    return this.getNumberAttribute('lid_enable_log');
  }
  public set lidEnableLog(value: number) {
    this._lidEnableLog = value;
  }
  public resetLidEnableLog() {
    this._lidEnableLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidEnableLogInput() {
    return this._lidEnableLog;
  }

  // lid_match_subnet - computed: false, optional: true, required: false
  private _lidMatchSubnet?: string; 
  public get lidMatchSubnet() {
    return this.getStringAttribute('lid_match_subnet');
  }
  public set lidMatchSubnet(value: string) {
    this._lidMatchSubnet = value;
  }
  public resetLidMatchSubnet() {
    this._lidMatchSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidMatchSubnetInput() {
    return this._lidMatchSubnet;
  }

  // lid_match_subnet_v6 - computed: false, optional: true, required: false
  private _lidMatchSubnetV6?: number; 
  public get lidMatchSubnetV6() {
    return this.getNumberAttribute('lid_match_subnet_v6');
  }
  public set lidMatchSubnetV6(value: number) {
    this._lidMatchSubnetV6 = value;
  }
  public resetLidMatchSubnetV6() {
    this._lidMatchSubnetV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidMatchSubnetV6Input() {
    return this._lidMatchSubnetV6;
  }

  // lid_response_rate - computed: false, optional: true, required: false
  private _lidResponseRate?: number; 
  public get lidResponseRate() {
    return this.getNumberAttribute('lid_response_rate');
  }
  public set lidResponseRate(value: number) {
    this._lidResponseRate = value;
  }
  public resetLidResponseRate() {
    this._lidResponseRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidResponseRateInput() {
    return this._lidResponseRate;
  }

  // lid_slip_rate - computed: false, optional: true, required: false
  private _lidSlipRate?: number; 
  public get lidSlipRate() {
    return this.getNumberAttribute('lid_slip_rate');
  }
  public set lidSlipRate(value: number) {
    this._lidSlipRate = value;
  }
  public resetLidSlipRate() {
    this._lidSlipRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidSlipRateInput() {
    return this._lidSlipRate;
  }

  // lid_src_ip_only - computed: false, optional: true, required: false
  private _lidSrcIpOnly?: number; 
  public get lidSrcIpOnly() {
    return this.getNumberAttribute('lid_src_ip_only');
  }
  public set lidSrcIpOnly(value: number) {
    this._lidSrcIpOnly = value;
  }
  public resetLidSrcIpOnly() {
    this._lidSrcIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidSrcIpOnlyInput() {
    return this._lidSrcIpOnly;
  }

  // lid_tc_rate - computed: false, optional: true, required: false
  private _lidTcRate?: number; 
  public get lidTcRate() {
    return this.getNumberAttribute('lid_tc_rate');
  }
  public set lidTcRate(value: number) {
    this._lidTcRate = value;
  }
  public resetLidTcRate() {
    this._lidTcRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidTcRateInput() {
    return this._lidTcRate;
  }

  // lid_window - computed: false, optional: true, required: false
  private _lidWindow?: number; 
  public get lidWindow() {
    return this.getNumberAttribute('lid_window');
  }
  public set lidWindow(value: number) {
    this._lidWindow = value;
  }
  public resetLidWindow() {
    this._lidWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidWindowInput() {
    return this._lidWindow;
  }

  // lidnum - computed: false, optional: false, required: true
  private _lidnum?: number; 
  public get lidnum() {
    return this.getNumberAttribute('lidnum');
  }
  public set lidnum(value: number) {
    this._lidnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lidnumInput() {
    return this._lidnum;
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

export class SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructOutputReference {
    return new SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsResponseRateLimitingRrlClassListListStruct {
  /**
  * Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#name SlbTemplateDns#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#user_tag SlbTemplateDns#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * lid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#lid_list SlbTemplateDns#lid_list}
  */
  readonly lidList?: SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStruct[] | cdktf.IResolvable;
}

export function slbTemplateDnsResponseRateLimitingRrlClassListListStructToTerraform(struct?: SlbTemplateDnsResponseRateLimitingRrlClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    lid_list: cdktf.listMapper(slbTemplateDnsResponseRateLimitingRrlClassListListLidListStructToTerraform, true)(struct!.lidList),
  }
}


export function slbTemplateDnsResponseRateLimitingRrlClassListListStructToHclTerraform(struct?: SlbTemplateDnsResponseRateLimitingRrlClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    lid_list: {
      value: cdktf.listMapperHcl(slbTemplateDnsResponseRateLimitingRrlClassListListLidListStructToHclTerraform, true)(struct!.lidList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsResponseRateLimitingRrlClassListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsResponseRateLimitingRrlClassListListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._lidList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidList = this._lidList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsResponseRateLimitingRrlClassListListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._lidList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._lidList.internalValue = value.lidList;
    }
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

  // lid_list - computed: false, optional: true, required: false
  private _lidList = new SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructList(this, "lid_list", false);
  public get lidList() {
    return this._lidList;
  }
  public putLidList(value: SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStruct[] | cdktf.IResolvable) {
    this._lidList.internalValue = value;
  }
  public resetLidList() {
    this._lidList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidListInput() {
    return this._lidList.internalValue;
  }
}

export class SlbTemplateDnsResponseRateLimitingRrlClassListListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsResponseRateLimitingRrlClassListListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsResponseRateLimitingRrlClassListListStructOutputReference {
    return new SlbTemplateDnsResponseRateLimitingRrlClassListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsResponseRateLimiting {
  /**
  * 'log-only': Only log rate-limiting, do not actually rate limit. Requires enable-log configuration; 'rate-limit': Rate-Limit based on configuration (Default); 'whitelist': Whitelist, disable rate-limiting;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#action SlbTemplateDns#action}
  */
  readonly action?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#enable_log SlbTemplateDns#enable_log}
  */
  readonly enableLog?: number;
  /**
  * Maximum allowed request rate for the filter. This should match average traffic. (default 10 per seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#filter_response_rate SlbTemplateDns#filter_response_rate}
  */
  readonly filterResponseRate?: number;
  /**
  * IP subnet mask (response rate by IP subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#match_subnet SlbTemplateDns#match_subnet}
  */
  readonly matchSubnet?: string;
  /**
  * IPV6 subnet mask (response rate by IPv6 subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#match_subnet_v6 SlbTemplateDns#match_subnet_v6}
  */
  readonly matchSubnetV6?: number;
  /**
  * Responses exceeding this rate within the window will be dropped (default 5 per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#response_rate SlbTemplateDns#response_rate}
  */
  readonly responseRate?: number;
  /**
  * Every n'th response that would be rate-limited will be let through instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#slip_rate SlbTemplateDns#slip_rate}
  */
  readonly slipRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#src_ip_only SlbTemplateDns#src_ip_only}
  */
  readonly srcIpOnly?: number;
  /**
  * Every n'th response that would be rate-limited will respond with TC bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#tc_rate SlbTemplateDns#tc_rate}
  */
  readonly tcRate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * Rate-Limiting Interval in Seconds (default is one)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#window SlbTemplateDns#window}
  */
  readonly window?: number;
  /**
  * rrl_class_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#rrl_class_list_list SlbTemplateDns#rrl_class_list_list}
  */
  readonly rrlClassListList?: SlbTemplateDnsResponseRateLimitingRrlClassListListStruct[] | cdktf.IResolvable;
}

export function slbTemplateDnsResponseRateLimitingToTerraform(struct?: SlbTemplateDnsResponseRateLimitingOutputReference | SlbTemplateDnsResponseRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enable_log: cdktf.numberToTerraform(struct!.enableLog),
    filter_response_rate: cdktf.numberToTerraform(struct!.filterResponseRate),
    match_subnet: cdktf.stringToTerraform(struct!.matchSubnet),
    match_subnet_v6: cdktf.numberToTerraform(struct!.matchSubnetV6),
    response_rate: cdktf.numberToTerraform(struct!.responseRate),
    slip_rate: cdktf.numberToTerraform(struct!.slipRate),
    src_ip_only: cdktf.numberToTerraform(struct!.srcIpOnly),
    tc_rate: cdktf.numberToTerraform(struct!.tcRate),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    window: cdktf.numberToTerraform(struct!.window),
    rrl_class_list_list: cdktf.listMapper(slbTemplateDnsResponseRateLimitingRrlClassListListStructToTerraform, true)(struct!.rrlClassListList),
  }
}


export function slbTemplateDnsResponseRateLimitingToHclTerraform(struct?: SlbTemplateDnsResponseRateLimitingOutputReference | SlbTemplateDnsResponseRateLimiting): any {
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
    enable_log: {
      value: cdktf.numberToHclTerraform(struct!.enableLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_response_rate: {
      value: cdktf.numberToHclTerraform(struct!.filterResponseRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_subnet: {
      value: cdktf.stringToHclTerraform(struct!.matchSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_subnet_v6: {
      value: cdktf.numberToHclTerraform(struct!.matchSubnetV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_rate: {
      value: cdktf.numberToHclTerraform(struct!.responseRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slip_rate: {
      value: cdktf.numberToHclTerraform(struct!.slipRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_only: {
      value: cdktf.numberToHclTerraform(struct!.srcIpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tc_rate: {
      value: cdktf.numberToHclTerraform(struct!.tcRate),
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
    window: {
      value: cdktf.numberToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rrl_class_list_list: {
      value: cdktf.listMapperHcl(slbTemplateDnsResponseRateLimitingRrlClassListListStructToHclTerraform, true)(struct!.rrlClassListList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsResponseRateLimitingRrlClassListListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsResponseRateLimitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsResponseRateLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enableLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLog = this._enableLog;
    }
    if (this._filterResponseRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterResponseRate = this._filterResponseRate;
    }
    if (this._matchSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSubnet = this._matchSubnet;
    }
    if (this._matchSubnetV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSubnetV6 = this._matchSubnetV6;
    }
    if (this._responseRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseRate = this._responseRate;
    }
    if (this._slipRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.slipRate = this._slipRate;
    }
    if (this._srcIpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpOnly = this._srcIpOnly;
    }
    if (this._tcRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcRate = this._tcRate;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._rrlClassListList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrlClassListList = this._rrlClassListList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsResponseRateLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._enableLog = undefined;
      this._filterResponseRate = undefined;
      this._matchSubnet = undefined;
      this._matchSubnetV6 = undefined;
      this._responseRate = undefined;
      this._slipRate = undefined;
      this._srcIpOnly = undefined;
      this._tcRate = undefined;
      this._uuid = undefined;
      this._window = undefined;
      this._rrlClassListList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._enableLog = value.enableLog;
      this._filterResponseRate = value.filterResponseRate;
      this._matchSubnet = value.matchSubnet;
      this._matchSubnetV6 = value.matchSubnetV6;
      this._responseRate = value.responseRate;
      this._slipRate = value.slipRate;
      this._srcIpOnly = value.srcIpOnly;
      this._tcRate = value.tcRate;
      this._uuid = value.uuid;
      this._window = value.window;
      this._rrlClassListList.internalValue = value.rrlClassListList;
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

  // enable_log - computed: false, optional: true, required: false
  private _enableLog?: number; 
  public get enableLog() {
    return this.getNumberAttribute('enable_log');
  }
  public set enableLog(value: number) {
    this._enableLog = value;
  }
  public resetEnableLog() {
    this._enableLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogInput() {
    return this._enableLog;
  }

  // filter_response_rate - computed: false, optional: true, required: false
  private _filterResponseRate?: number; 
  public get filterResponseRate() {
    return this.getNumberAttribute('filter_response_rate');
  }
  public set filterResponseRate(value: number) {
    this._filterResponseRate = value;
  }
  public resetFilterResponseRate() {
    this._filterResponseRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterResponseRateInput() {
    return this._filterResponseRate;
  }

  // match_subnet - computed: false, optional: true, required: false
  private _matchSubnet?: string; 
  public get matchSubnet() {
    return this.getStringAttribute('match_subnet');
  }
  public set matchSubnet(value: string) {
    this._matchSubnet = value;
  }
  public resetMatchSubnet() {
    this._matchSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSubnetInput() {
    return this._matchSubnet;
  }

  // match_subnet_v6 - computed: false, optional: true, required: false
  private _matchSubnetV6?: number; 
  public get matchSubnetV6() {
    return this.getNumberAttribute('match_subnet_v6');
  }
  public set matchSubnetV6(value: number) {
    this._matchSubnetV6 = value;
  }
  public resetMatchSubnetV6() {
    this._matchSubnetV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSubnetV6Input() {
    return this._matchSubnetV6;
  }

  // response_rate - computed: false, optional: true, required: false
  private _responseRate?: number; 
  public get responseRate() {
    return this.getNumberAttribute('response_rate');
  }
  public set responseRate(value: number) {
    this._responseRate = value;
  }
  public resetResponseRate() {
    this._responseRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseRateInput() {
    return this._responseRate;
  }

  // slip_rate - computed: false, optional: true, required: false
  private _slipRate?: number; 
  public get slipRate() {
    return this.getNumberAttribute('slip_rate');
  }
  public set slipRate(value: number) {
    this._slipRate = value;
  }
  public resetSlipRate() {
    this._slipRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slipRateInput() {
    return this._slipRate;
  }

  // src_ip_only - computed: false, optional: true, required: false
  private _srcIpOnly?: number; 
  public get srcIpOnly() {
    return this.getNumberAttribute('src_ip_only');
  }
  public set srcIpOnly(value: number) {
    this._srcIpOnly = value;
  }
  public resetSrcIpOnly() {
    this._srcIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpOnlyInput() {
    return this._srcIpOnly;
  }

  // tc_rate - computed: false, optional: true, required: false
  private _tcRate?: number; 
  public get tcRate() {
    return this.getNumberAttribute('tc_rate');
  }
  public set tcRate(value: number) {
    this._tcRate = value;
  }
  public resetTcRate() {
    this._tcRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcRateInput() {
    return this._tcRate;
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

  // window - computed: false, optional: true, required: false
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // rrl_class_list_list - computed: false, optional: true, required: false
  private _rrlClassListList = new SlbTemplateDnsResponseRateLimitingRrlClassListListStructList(this, "rrl_class_list_list", false);
  public get rrlClassListList() {
    return this._rrlClassListList;
  }
  public putRrlClassListList(value: SlbTemplateDnsResponseRateLimitingRrlClassListListStruct[] | cdktf.IResolvable) {
    this._rrlClassListList.internalValue = value;
  }
  public resetRrlClassListList() {
    this._rrlClassListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrlClassListListInput() {
    return this._rrlClassListList.internalValue;
  }
}
export interface SlbTemplateDnsRpzListLoggingRpzAction {
  /**
  * 'drop': Log RPZ due to drop action; 'pass-thru': Log RPZ due to pass-thru action; 'nxdomain': Log RPZ due to nxdomain action; 'nodata': Log RPZ due to nodata action; 'tcp-only': Log RPZ due to tcp-only action; 'local-data': Log RPZ due to local-data action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#str_rpz_action SlbTemplateDns#str_rpz_action}
  */
  readonly strRpzAction?: string;
}

export function slbTemplateDnsRpzListLoggingRpzActionToTerraform(struct?: SlbTemplateDnsRpzListLoggingRpzAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    str_rpz_action: cdktf.stringToTerraform(struct!.strRpzAction),
  }
}


export function slbTemplateDnsRpzListLoggingRpzActionToHclTerraform(struct?: SlbTemplateDnsRpzListLoggingRpzAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    str_rpz_action: {
      value: cdktf.stringToHclTerraform(struct!.strRpzAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsRpzListLoggingRpzActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsRpzListLoggingRpzAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strRpzAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.strRpzAction = this._strRpzAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsRpzListLoggingRpzAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._strRpzAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._strRpzAction = value.strRpzAction;
    }
  }

  // str_rpz_action - computed: false, optional: true, required: false
  private _strRpzAction?: string; 
  public get strRpzAction() {
    return this.getStringAttribute('str_rpz_action');
  }
  public set strRpzAction(value: string) {
    this._strRpzAction = value;
  }
  public resetStrRpzAction() {
    this._strRpzAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strRpzActionInput() {
    return this._strRpzAction;
  }
}

export class SlbTemplateDnsRpzListLoggingRpzActionList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsRpzListLoggingRpzAction[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsRpzListLoggingRpzActionOutputReference {
    return new SlbTemplateDnsRpzListLoggingRpzActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsRpzListLogging {
  /**
  * Log RPZ triggered action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#enable SlbTemplateDns#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * rpz_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#rpz_action SlbTemplateDns#rpz_action}
  */
  readonly rpzAction?: SlbTemplateDnsRpzListLoggingRpzAction[] | cdktf.IResolvable;
}

export function slbTemplateDnsRpzListLoggingToTerraform(struct?: SlbTemplateDnsRpzListLoggingOutputReference | SlbTemplateDnsRpzListLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    rpz_action: cdktf.listMapper(slbTemplateDnsRpzListLoggingRpzActionToTerraform, true)(struct!.rpzAction),
  }
}


export function slbTemplateDnsRpzListLoggingToHclTerraform(struct?: SlbTemplateDnsRpzListLoggingOutputReference | SlbTemplateDnsRpzListLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
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
    rpz_action: {
      value: cdktf.listMapperHcl(slbTemplateDnsRpzListLoggingRpzActionToHclTerraform, true)(struct!.rpzAction),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsRpzListLoggingRpzActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsRpzListLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsRpzListLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._rpzAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzAction = this._rpzAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsRpzListLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
      this._rpzAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
      this._rpzAction.internalValue = value.rpzAction;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // rpz_action - computed: false, optional: true, required: false
  private _rpzAction = new SlbTemplateDnsRpzListLoggingRpzActionList(this, "rpz_action", false);
  public get rpzAction() {
    return this._rpzAction;
  }
  public putRpzAction(value: SlbTemplateDnsRpzListLoggingRpzAction[] | cdktf.IResolvable) {
    this._rpzAction.internalValue = value;
  }
  public resetRpzAction() {
    this._rpzAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzActionInput() {
    return this._rpzAction.internalValue;
  }
}
export interface SlbTemplateDnsRpzListStruct {
  /**
  * Specify a Response Policy Zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#name SlbTemplateDns#name}
  */
  readonly name?: string;
  /**
  * sequential id of RPZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#seq_id SlbTemplateDns#seq_id}
  */
  readonly seqId: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#user_tag SlbTemplateDns#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#logging SlbTemplateDns#logging}
  */
  readonly logging?: SlbTemplateDnsRpzListLogging;
}

export function slbTemplateDnsRpzListStructToTerraform(struct?: SlbTemplateDnsRpzListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    seq_id: cdktf.numberToTerraform(struct!.seqId),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    logging: slbTemplateDnsRpzListLoggingToTerraform(struct!.logging),
  }
}


export function slbTemplateDnsRpzListStructToHclTerraform(struct?: SlbTemplateDnsRpzListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq_id: {
      value: cdktf.numberToHclTerraform(struct!.seqId),
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
    logging: {
      value: slbTemplateDnsRpzListLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsRpzListLoggingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsRpzListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsRpzListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._seqId !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqId = this._seqId;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsRpzListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._seqId = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._logging.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._seqId = value.seqId;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._logging.internalValue = value.logging;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // seq_id - computed: false, optional: false, required: true
  private _seqId?: number; 
  public get seqId() {
    return this.getNumberAttribute('seq_id');
  }
  public set seqId(value: number) {
    this._seqId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqIdInput() {
    return this._seqId;
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

  // logging - computed: false, optional: true, required: false
  private _logging = new SlbTemplateDnsRpzListLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: SlbTemplateDnsRpzListLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }
}

export class SlbTemplateDnsRpzListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsRpzListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsRpzListStructOutputReference {
    return new SlbTemplateDnsRpzListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsUdpRetransmit {
  /**
  * Total number of times to try DNS query to server before closing client connection, default 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#max_trials SlbTemplateDns#max_trials}
  */
  readonly maxTrials?: number;
  /**
  * DNS Retry Interval value 1 - 400 in units of 100ms, default is 10 (default is 1000ms) (1 - 400 in units of 100ms, default is 10 (1000ms/1sec))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#retry_interval SlbTemplateDns#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#uuid SlbTemplateDns#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateDnsUdpRetransmitToTerraform(struct?: SlbTemplateDnsUdpRetransmitOutputReference | SlbTemplateDnsUdpRetransmit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_trials: cdktf.numberToTerraform(struct!.maxTrials),
    retry_interval: cdktf.numberToTerraform(struct!.retryInterval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateDnsUdpRetransmitToHclTerraform(struct?: SlbTemplateDnsUdpRetransmitOutputReference | SlbTemplateDnsUdpRetransmit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_trials: {
      value: cdktf.numberToHclTerraform(struct!.maxTrials),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.retryInterval),
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

export class SlbTemplateDnsUdpRetransmitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsUdpRetransmit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTrials !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTrials = this._maxTrials;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsUdpRetransmit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxTrials = undefined;
      this._retryInterval = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxTrials = value.maxTrials;
      this._retryInterval = value.retryInterval;
      this._uuid = value.uuid;
    }
  }

  // max_trials - computed: false, optional: true, required: false
  private _maxTrials?: number; 
  public get maxTrials() {
    return this.getNumberAttribute('max_trials');
  }
  public set maxTrials(value: number) {
    this._maxTrials = value;
  }
  public resetMaxTrials() {
    this._maxTrials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTrialsInput() {
    return this._maxTrials;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns thunder_slb_template_dns}
*/
export class SlbTemplateDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDns to import
  * @param importFromId The id of the existing SlbTemplateDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns thunder_slb_template_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addPaddingToClient = config.addPaddingToClient;
    this._cacheRecordServingPolicy = config.cacheRecordServingPolicy;
    this._cacheTtlAdjustmentEnable = config.cacheTtlAdjustmentEnable;
    this._defaultPolicy = config.defaultPolicy;
    this._disableDnsTemplate = config.disableDnsTemplate;
    this._disableRaCachedResp = config.disableRaCachedResp;
    this._disableRpzAttachSoa = config.disableRpzAttachSoa;
    this._dnsLogging = config.dnsLogging;
    this._dnssecServiceGroup = config.dnssecServiceGroup;
    this._drop = config.drop;
    this._enableCacheSharing = config.enableCacheSharing;
    this._forward = config.forward;
    this._id = config.id;
    this._insertIpv4 = config.insertIpv4;
    this._insertIpv6 = config.insertIpv6;
    this._maxCacheEntrySize = config.maxCacheEntrySize;
    this._maxCacheSize = config.maxCacheSize;
    this._maxQueryLength = config.maxQueryLength;
    this._name = config.name;
    this._period = config.period;
    this._queryIdSwitch = config.queryIdSwitch;
    this._redirectToTcpPort = config.redirectToTcpPort;
    this._removeAaFlag = config.removeAaFlag;
    this._removeCsubnet = config.removeCsubnet;
    this._removePaddingToServer = config.removePaddingToServer;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._classList.internalValue = config.classList;
    this._dns64.internalValue = config.dns64;
    this._localDnsResolution.internalValue = config.localDnsResolution;
    this._negativeDnsCache.internalValue = config.negativeDnsCache;
    this._queryClassFilter.internalValue = config.queryClassFilter;
    this._queryTypeFilter.internalValue = config.queryTypeFilter;
    this._recursiveDnsResolution.internalValue = config.recursiveDnsResolution;
    this._responseRateLimiting.internalValue = config.responseRateLimiting;
    this._rpzList.internalValue = config.rpzList;
    this._udpRetransmit.internalValue = config.udpRetransmit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_padding_to_client - computed: false, optional: true, required: false
  private _addPaddingToClient?: string; 
  public get addPaddingToClient() {
    return this.getStringAttribute('add_padding_to_client');
  }
  public set addPaddingToClient(value: string) {
    this._addPaddingToClient = value;
  }
  public resetAddPaddingToClient() {
    this._addPaddingToClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPaddingToClientInput() {
    return this._addPaddingToClient;
  }

  // cache_record_serving_policy - computed: false, optional: true, required: false
  private _cacheRecordServingPolicy?: string; 
  public get cacheRecordServingPolicy() {
    return this.getStringAttribute('cache_record_serving_policy');
  }
  public set cacheRecordServingPolicy(value: string) {
    this._cacheRecordServingPolicy = value;
  }
  public resetCacheRecordServingPolicy() {
    this._cacheRecordServingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRecordServingPolicyInput() {
    return this._cacheRecordServingPolicy;
  }

  // cache_ttl_adjustment_enable - computed: false, optional: true, required: false
  private _cacheTtlAdjustmentEnable?: number; 
  public get cacheTtlAdjustmentEnable() {
    return this.getNumberAttribute('cache_ttl_adjustment_enable');
  }
  public set cacheTtlAdjustmentEnable(value: number) {
    this._cacheTtlAdjustmentEnable = value;
  }
  public resetCacheTtlAdjustmentEnable() {
    this._cacheTtlAdjustmentEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlAdjustmentEnableInput() {
    return this._cacheTtlAdjustmentEnable;
  }

  // default_policy - computed: false, optional: true, required: false
  private _defaultPolicy?: string; 
  public get defaultPolicy() {
    return this.getStringAttribute('default_policy');
  }
  public set defaultPolicy(value: string) {
    this._defaultPolicy = value;
  }
  public resetDefaultPolicy() {
    this._defaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyInput() {
    return this._defaultPolicy;
  }

  // disable_dns_template - computed: false, optional: true, required: false
  private _disableDnsTemplate?: number; 
  public get disableDnsTemplate() {
    return this.getNumberAttribute('disable_dns_template');
  }
  public set disableDnsTemplate(value: number) {
    this._disableDnsTemplate = value;
  }
  public resetDisableDnsTemplate() {
    this._disableDnsTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDnsTemplateInput() {
    return this._disableDnsTemplate;
  }

  // disable_ra_cached_resp - computed: false, optional: true, required: false
  private _disableRaCachedResp?: number; 
  public get disableRaCachedResp() {
    return this.getNumberAttribute('disable_ra_cached_resp');
  }
  public set disableRaCachedResp(value: number) {
    this._disableRaCachedResp = value;
  }
  public resetDisableRaCachedResp() {
    this._disableRaCachedResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRaCachedRespInput() {
    return this._disableRaCachedResp;
  }

  // disable_rpz_attach_soa - computed: false, optional: true, required: false
  private _disableRpzAttachSoa?: number; 
  public get disableRpzAttachSoa() {
    return this.getNumberAttribute('disable_rpz_attach_soa');
  }
  public set disableRpzAttachSoa(value: number) {
    this._disableRpzAttachSoa = value;
  }
  public resetDisableRpzAttachSoa() {
    this._disableRpzAttachSoa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRpzAttachSoaInput() {
    return this._disableRpzAttachSoa;
  }

  // dns_logging - computed: false, optional: true, required: false
  private _dnsLogging?: string; 
  public get dnsLogging() {
    return this.getStringAttribute('dns_logging');
  }
  public set dnsLogging(value: string) {
    this._dnsLogging = value;
  }
  public resetDnsLogging() {
    this._dnsLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLoggingInput() {
    return this._dnsLogging;
  }

  // dnssec_service_group - computed: false, optional: true, required: false
  private _dnssecServiceGroup?: string; 
  public get dnssecServiceGroup() {
    return this.getStringAttribute('dnssec_service_group');
  }
  public set dnssecServiceGroup(value: string) {
    this._dnssecServiceGroup = value;
  }
  public resetDnssecServiceGroup() {
    this._dnssecServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecServiceGroupInput() {
    return this._dnssecServiceGroup;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // enable_cache_sharing - computed: false, optional: true, required: false
  private _enableCacheSharing?: number; 
  public get enableCacheSharing() {
    return this.getNumberAttribute('enable_cache_sharing');
  }
  public set enableCacheSharing(value: number) {
    this._enableCacheSharing = value;
  }
  public resetEnableCacheSharing() {
    this._enableCacheSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCacheSharingInput() {
    return this._enableCacheSharing;
  }

  // forward - computed: false, optional: true, required: false
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
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

  // insert_ipv4 - computed: false, optional: true, required: false
  private _insertIpv4?: number; 
  public get insertIpv4() {
    return this.getNumberAttribute('insert_ipv4');
  }
  public set insertIpv4(value: number) {
    this._insertIpv4 = value;
  }
  public resetInsertIpv4() {
    this._insertIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertIpv4Input() {
    return this._insertIpv4;
  }

  // insert_ipv6 - computed: false, optional: true, required: false
  private _insertIpv6?: number; 
  public get insertIpv6() {
    return this.getNumberAttribute('insert_ipv6');
  }
  public set insertIpv6(value: number) {
    this._insertIpv6 = value;
  }
  public resetInsertIpv6() {
    this._insertIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertIpv6Input() {
    return this._insertIpv6;
  }

  // max_cache_entry_size - computed: false, optional: true, required: false
  private _maxCacheEntrySize?: number; 
  public get maxCacheEntrySize() {
    return this.getNumberAttribute('max_cache_entry_size');
  }
  public set maxCacheEntrySize(value: number) {
    this._maxCacheEntrySize = value;
  }
  public resetMaxCacheEntrySize() {
    this._maxCacheEntrySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheEntrySizeInput() {
    return this._maxCacheEntrySize;
  }

  // max_cache_size - computed: false, optional: true, required: false
  private _maxCacheSize?: number; 
  public get maxCacheSize() {
    return this.getNumberAttribute('max_cache_size');
  }
  public set maxCacheSize(value: number) {
    this._maxCacheSize = value;
  }
  public resetMaxCacheSize() {
    this._maxCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheSizeInput() {
    return this._maxCacheSize;
  }

  // max_query_length - computed: false, optional: true, required: false
  private _maxQueryLength?: number; 
  public get maxQueryLength() {
    return this.getNumberAttribute('max_query_length');
  }
  public set maxQueryLength(value: number) {
    this._maxQueryLength = value;
  }
  public resetMaxQueryLength() {
    this._maxQueryLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQueryLengthInput() {
    return this._maxQueryLength;
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // query_id_switch - computed: false, optional: true, required: false
  private _queryIdSwitch?: number; 
  public get queryIdSwitch() {
    return this.getNumberAttribute('query_id_switch');
  }
  public set queryIdSwitch(value: number) {
    this._queryIdSwitch = value;
  }
  public resetQueryIdSwitch() {
    this._queryIdSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdSwitchInput() {
    return this._queryIdSwitch;
  }

  // redirect_to_tcp_port - computed: false, optional: true, required: false
  private _redirectToTcpPort?: number; 
  public get redirectToTcpPort() {
    return this.getNumberAttribute('redirect_to_tcp_port');
  }
  public set redirectToTcpPort(value: number) {
    this._redirectToTcpPort = value;
  }
  public resetRedirectToTcpPort() {
    this._redirectToTcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectToTcpPortInput() {
    return this._redirectToTcpPort;
  }

  // remove_aa_flag - computed: false, optional: true, required: false
  private _removeAaFlag?: number; 
  public get removeAaFlag() {
    return this.getNumberAttribute('remove_aa_flag');
  }
  public set removeAaFlag(value: number) {
    this._removeAaFlag = value;
  }
  public resetRemoveAaFlag() {
    this._removeAaFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAaFlagInput() {
    return this._removeAaFlag;
  }

  // remove_csubnet - computed: false, optional: true, required: false
  private _removeCsubnet?: number; 
  public get removeCsubnet() {
    return this.getNumberAttribute('remove_csubnet');
  }
  public set removeCsubnet(value: number) {
    this._removeCsubnet = value;
  }
  public resetRemoveCsubnet() {
    this._removeCsubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeCsubnetInput() {
    return this._removeCsubnet;
  }

  // remove_padding_to_server - computed: false, optional: true, required: false
  private _removePaddingToServer?: number; 
  public get removePaddingToServer() {
    return this.getNumberAttribute('remove_padding_to_server');
  }
  public set removePaddingToServer(value: number) {
    this._removePaddingToServer = value;
  }
  public resetRemovePaddingToServer() {
    this._removePaddingToServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePaddingToServerInput() {
    return this._removePaddingToServer;
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

  // class_list - computed: false, optional: true, required: false
  private _classList = new SlbTemplateDnsClassListStructOutputReference(this, "class_list");
  public get classList() {
    return this._classList;
  }
  public putClassList(value: SlbTemplateDnsClassListStruct) {
    this._classList.internalValue = value;
  }
  public resetClassList() {
    this._classList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList.internalValue;
  }

  // dns64 - computed: false, optional: true, required: false
  private _dns64 = new SlbTemplateDnsDns64OutputReference(this, "dns64");
  public get dns64() {
    return this._dns64;
  }
  public putDns64(value: SlbTemplateDnsDns64) {
    this._dns64.internalValue = value;
  }
  public resetDns64() {
    this._dns64.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64Input() {
    return this._dns64.internalValue;
  }

  // local_dns_resolution - computed: false, optional: true, required: false
  private _localDnsResolution = new SlbTemplateDnsLocalDnsResolutionOutputReference(this, "local_dns_resolution");
  public get localDnsResolution() {
    return this._localDnsResolution;
  }
  public putLocalDnsResolution(value: SlbTemplateDnsLocalDnsResolution) {
    this._localDnsResolution.internalValue = value;
  }
  public resetLocalDnsResolution() {
    this._localDnsResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDnsResolutionInput() {
    return this._localDnsResolution.internalValue;
  }

  // negative_dns_cache - computed: false, optional: true, required: false
  private _negativeDnsCache = new SlbTemplateDnsNegativeDnsCacheOutputReference(this, "negative_dns_cache");
  public get negativeDnsCache() {
    return this._negativeDnsCache;
  }
  public putNegativeDnsCache(value: SlbTemplateDnsNegativeDnsCache) {
    this._negativeDnsCache.internalValue = value;
  }
  public resetNegativeDnsCache() {
    this._negativeDnsCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeDnsCacheInput() {
    return this._negativeDnsCache.internalValue;
  }

  // query_class_filter - computed: false, optional: true, required: false
  private _queryClassFilter = new SlbTemplateDnsQueryClassFilterOutputReference(this, "query_class_filter");
  public get queryClassFilter() {
    return this._queryClassFilter;
  }
  public putQueryClassFilter(value: SlbTemplateDnsQueryClassFilter) {
    this._queryClassFilter.internalValue = value;
  }
  public resetQueryClassFilter() {
    this._queryClassFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryClassFilterInput() {
    return this._queryClassFilter.internalValue;
  }

  // query_type_filter - computed: false, optional: true, required: false
  private _queryTypeFilter = new SlbTemplateDnsQueryTypeFilterOutputReference(this, "query_type_filter");
  public get queryTypeFilter() {
    return this._queryTypeFilter;
  }
  public putQueryTypeFilter(value: SlbTemplateDnsQueryTypeFilter) {
    this._queryTypeFilter.internalValue = value;
  }
  public resetQueryTypeFilter() {
    this._queryTypeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeFilterInput() {
    return this._queryTypeFilter.internalValue;
  }

  // recursive_dns_resolution - computed: false, optional: true, required: false
  private _recursiveDnsResolution = new SlbTemplateDnsRecursiveDnsResolutionOutputReference(this, "recursive_dns_resolution");
  public get recursiveDnsResolution() {
    return this._recursiveDnsResolution;
  }
  public putRecursiveDnsResolution(value: SlbTemplateDnsRecursiveDnsResolution) {
    this._recursiveDnsResolution.internalValue = value;
  }
  public resetRecursiveDnsResolution() {
    this._recursiveDnsResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveDnsResolutionInput() {
    return this._recursiveDnsResolution.internalValue;
  }

  // response_rate_limiting - computed: false, optional: true, required: false
  private _responseRateLimiting = new SlbTemplateDnsResponseRateLimitingOutputReference(this, "response_rate_limiting");
  public get responseRateLimiting() {
    return this._responseRateLimiting;
  }
  public putResponseRateLimiting(value: SlbTemplateDnsResponseRateLimiting) {
    this._responseRateLimiting.internalValue = value;
  }
  public resetResponseRateLimiting() {
    this._responseRateLimiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseRateLimitingInput() {
    return this._responseRateLimiting.internalValue;
  }

  // rpz_list - computed: false, optional: true, required: false
  private _rpzList = new SlbTemplateDnsRpzListStructList(this, "rpz_list", false);
  public get rpzList() {
    return this._rpzList;
  }
  public putRpzList(value: SlbTemplateDnsRpzListStruct[] | cdktf.IResolvable) {
    this._rpzList.internalValue = value;
  }
  public resetRpzList() {
    this._rpzList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzListInput() {
    return this._rpzList.internalValue;
  }

  // udp_retransmit - computed: false, optional: true, required: false
  private _udpRetransmit = new SlbTemplateDnsUdpRetransmitOutputReference(this, "udp_retransmit");
  public get udpRetransmit() {
    return this._udpRetransmit;
  }
  public putUdpRetransmit(value: SlbTemplateDnsUdpRetransmit) {
    this._udpRetransmit.internalValue = value;
  }
  public resetUdpRetransmit() {
    this._udpRetransmit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetransmitInput() {
    return this._udpRetransmit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_padding_to_client: cdktf.stringToTerraform(this._addPaddingToClient),
      cache_record_serving_policy: cdktf.stringToTerraform(this._cacheRecordServingPolicy),
      cache_ttl_adjustment_enable: cdktf.numberToTerraform(this._cacheTtlAdjustmentEnable),
      default_policy: cdktf.stringToTerraform(this._defaultPolicy),
      disable_dns_template: cdktf.numberToTerraform(this._disableDnsTemplate),
      disable_ra_cached_resp: cdktf.numberToTerraform(this._disableRaCachedResp),
      disable_rpz_attach_soa: cdktf.numberToTerraform(this._disableRpzAttachSoa),
      dns_logging: cdktf.stringToTerraform(this._dnsLogging),
      dnssec_service_group: cdktf.stringToTerraform(this._dnssecServiceGroup),
      drop: cdktf.numberToTerraform(this._drop),
      enable_cache_sharing: cdktf.numberToTerraform(this._enableCacheSharing),
      forward: cdktf.stringToTerraform(this._forward),
      id: cdktf.stringToTerraform(this._id),
      insert_ipv4: cdktf.numberToTerraform(this._insertIpv4),
      insert_ipv6: cdktf.numberToTerraform(this._insertIpv6),
      max_cache_entry_size: cdktf.numberToTerraform(this._maxCacheEntrySize),
      max_cache_size: cdktf.numberToTerraform(this._maxCacheSize),
      max_query_length: cdktf.numberToTerraform(this._maxQueryLength),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.numberToTerraform(this._period),
      query_id_switch: cdktf.numberToTerraform(this._queryIdSwitch),
      redirect_to_tcp_port: cdktf.numberToTerraform(this._redirectToTcpPort),
      remove_aa_flag: cdktf.numberToTerraform(this._removeAaFlag),
      remove_csubnet: cdktf.numberToTerraform(this._removeCsubnet),
      remove_padding_to_server: cdktf.numberToTerraform(this._removePaddingToServer),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      class_list: slbTemplateDnsClassListStructToTerraform(this._classList.internalValue),
      dns64: slbTemplateDnsDns64ToTerraform(this._dns64.internalValue),
      local_dns_resolution: slbTemplateDnsLocalDnsResolutionToTerraform(this._localDnsResolution.internalValue),
      negative_dns_cache: slbTemplateDnsNegativeDnsCacheToTerraform(this._negativeDnsCache.internalValue),
      query_class_filter: slbTemplateDnsQueryClassFilterToTerraform(this._queryClassFilter.internalValue),
      query_type_filter: slbTemplateDnsQueryTypeFilterToTerraform(this._queryTypeFilter.internalValue),
      recursive_dns_resolution: slbTemplateDnsRecursiveDnsResolutionToTerraform(this._recursiveDnsResolution.internalValue),
      response_rate_limiting: slbTemplateDnsResponseRateLimitingToTerraform(this._responseRateLimiting.internalValue),
      rpz_list: cdktf.listMapper(slbTemplateDnsRpzListStructToTerraform, true)(this._rpzList.internalValue),
      udp_retransmit: slbTemplateDnsUdpRetransmitToTerraform(this._udpRetransmit.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_padding_to_client: {
        value: cdktf.stringToHclTerraform(this._addPaddingToClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_record_serving_policy: {
        value: cdktf.stringToHclTerraform(this._cacheRecordServingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_ttl_adjustment_enable: {
        value: cdktf.numberToHclTerraform(this._cacheTtlAdjustmentEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_policy: {
        value: cdktf.stringToHclTerraform(this._defaultPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_dns_template: {
        value: cdktf.numberToHclTerraform(this._disableDnsTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_ra_cached_resp: {
        value: cdktf.numberToHclTerraform(this._disableRaCachedResp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_rpz_attach_soa: {
        value: cdktf.numberToHclTerraform(this._disableRpzAttachSoa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_logging: {
        value: cdktf.stringToHclTerraform(this._dnsLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnssec_service_group: {
        value: cdktf.stringToHclTerraform(this._dnssecServiceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop: {
        value: cdktf.numberToHclTerraform(this._drop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_cache_sharing: {
        value: cdktf.numberToHclTerraform(this._enableCacheSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward: {
        value: cdktf.stringToHclTerraform(this._forward),
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
      insert_ipv4: {
        value: cdktf.numberToHclTerraform(this._insertIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      insert_ipv6: {
        value: cdktf.numberToHclTerraform(this._insertIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_cache_entry_size: {
        value: cdktf.numberToHclTerraform(this._maxCacheEntrySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_cache_size: {
        value: cdktf.numberToHclTerraform(this._maxCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_query_length: {
        value: cdktf.numberToHclTerraform(this._maxQueryLength),
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
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_id_switch: {
        value: cdktf.numberToHclTerraform(this._queryIdSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redirect_to_tcp_port: {
        value: cdktf.numberToHclTerraform(this._redirectToTcpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_aa_flag: {
        value: cdktf.numberToHclTerraform(this._removeAaFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_csubnet: {
        value: cdktf.numberToHclTerraform(this._removeCsubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_padding_to_server: {
        value: cdktf.numberToHclTerraform(this._removePaddingToServer),
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
      class_list: {
        value: slbTemplateDnsClassListStructToHclTerraform(this._classList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsClassListStructList",
      },
      dns64: {
        value: slbTemplateDnsDns64ToHclTerraform(this._dns64.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsDns64List",
      },
      local_dns_resolution: {
        value: slbTemplateDnsLocalDnsResolutionToHclTerraform(this._localDnsResolution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsLocalDnsResolutionList",
      },
      negative_dns_cache: {
        value: slbTemplateDnsNegativeDnsCacheToHclTerraform(this._negativeDnsCache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsNegativeDnsCacheList",
      },
      query_class_filter: {
        value: slbTemplateDnsQueryClassFilterToHclTerraform(this._queryClassFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsQueryClassFilterList",
      },
      query_type_filter: {
        value: slbTemplateDnsQueryTypeFilterToHclTerraform(this._queryTypeFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsQueryTypeFilterList",
      },
      recursive_dns_resolution: {
        value: slbTemplateDnsRecursiveDnsResolutionToHclTerraform(this._recursiveDnsResolution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsRecursiveDnsResolutionList",
      },
      response_rate_limiting: {
        value: slbTemplateDnsResponseRateLimitingToHclTerraform(this._responseRateLimiting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsResponseRateLimitingList",
      },
      rpz_list: {
        value: cdktf.listMapperHcl(slbTemplateDnsRpzListStructToHclTerraform, true)(this._rpzList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsRpzListStructList",
      },
      udp_retransmit: {
        value: slbTemplateDnsUdpRetransmitToHclTerraform(this._udpRetransmit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsUdpRetransmitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
