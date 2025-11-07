// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsRecursiveDnsResolutionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * retry when server REFUSED AX inserted EDNS(0) subnet, works only when insert-client-subnet is configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#csubnet_retry SlbTemplateDnsRecursiveDnsResolutionA#csubnet_retry}
  */
  readonly csubnetRetry?: number;
  /**
  * Default recursive mode, forward query to bound service-group if hostnames matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#default_recursive SlbTemplateDnsRecursiveDnsResolutionA#default_recursive}
  */
  readonly defaultRecursive?: number;
  /**
  * 'enabled': Enable DNSSEC validation; 'disabled': Disable DNSSEC validation;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#dnssec_validation SlbTemplateDnsRecursiveDnsResolutionA#dnssec_validation}
  */
  readonly dnssecValidation?: string;
  /**
  * 'enabled': Enable fast NS selection; 'disabled': Disable fast NS selection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#fast_ns_selection SlbTemplateDnsRecursiveDnsResolutionA#fast_ns_selection}
  */
  readonly fastNsSelection?: string;
  /**
  * 'enabled': Force CNAME resolution always; 'disabled': Use answer record in CNAME response if it exists, else resolve;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#force_cname_resolution SlbTemplateDnsRecursiveDnsResolutionA#force_cname_resolution}
  */
  readonly forceCnameResolution?: string;
  /**
  * Serve all records (authority and additional) when applicable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#full_response SlbTemplateDnsRecursiveDnsResolutionA#full_response}
  */
  readonly fullResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#id SlbTemplateDnsRecursiveDnsResolutionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv4 Source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#ipv4_nat_pool SlbTemplateDnsRecursiveDnsResolutionA#ipv4_nat_pool}
  */
  readonly ipv4NatPool?: string;
  /**
  * IPv6 Source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#ipv6_nat_pool SlbTemplateDnsRecursiveDnsResolutionA#ipv6_nat_pool}
  */
  readonly ipv6NatPool?: string;
  /**
  * Total number of times to try DNS query to server before closing client connection, default 255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#max_trials SlbTemplateDnsRecursiveDnsResolutionA#max_trials}
  */
  readonly maxTrials?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#name SlbTemplateDnsRecursiveDnsResolutionA#name}
  */
  readonly name: string;
  /**
  * 'disabled': Disable NS Cache Lookup; 'enabled': Enable NS Cache Lookup;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#ns_cache_lookup SlbTemplateDnsRecursiveDnsResolutionA#ns_cache_lookup}
  */
  readonly nsCacheLookup?: string;
  /**
  * 'drop': Drop of the request during ongoing; 'respond-with-servfail': Respond with SERVFAIL of the request during ongoing; 'start-new-resolution': Start new resolution of the request during ongoing;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#request_for_pending_resolution SlbTemplateDnsRecursiveDnsResolutionA#request_for_pending_resolution}
  */
  readonly requestForPendingResolution?: string;
  /**
  * Number of DNS query retries at each server level before closing client connection, default 6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#retries_per_level SlbTemplateDnsRecursiveDnsResolutionA#retries_per_level}
  */
  readonly retriesPerLevel?: number;
  /**
  * UDP DNS Retry Interval value 1-6, default is 5 sec (1-6, default is 5sec)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#udp_initial_interval SlbTemplateDnsRecursiveDnsResolutionA#udp_initial_interval}
  */
  readonly udpInitialInterval?: number;
  /**
  * UDP DNS Retry Interval value 1-6, default is 1 sec (1-6 , default is 1 sec)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#udp_retry_interval SlbTemplateDnsRecursiveDnsResolutionA#udp_retry_interval}
  */
  readonly udpRetryInterval?: number;
  /**
  * Use client side query id for recursive query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#use_client_qid SlbTemplateDnsRecursiveDnsResolutionA#use_client_qid}
  */
  readonly useClientQid?: number;
  /**
  * 'disabled': Start Recursive Resolver if Server response doesnt have final answer; 'enabled': Forward Backend Server response to client and dont start recursive resolver;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#use_service_group_response SlbTemplateDnsRecursiveDnsResolutionA#use_service_group_response}
  */
  readonly useServiceGroupResponse?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#uuid SlbTemplateDnsRecursiveDnsResolutionA#uuid}
  */
  readonly uuid?: string;
  /**
  * gateway_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#gateway_health_check SlbTemplateDnsRecursiveDnsResolutionA#gateway_health_check}
  */
  readonly gatewayHealthCheck?: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA;
  /**
  * host_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#host_list_cfg SlbTemplateDnsRecursiveDnsResolutionA#host_list_cfg}
  */
  readonly hostListCfg?: SlbTemplateDnsRecursiveDnsResolutionHostListCfgA[] | cdktf.IResolvable;
  /**
  * lookup_order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#lookup_order SlbTemplateDnsRecursiveDnsResolutionA#lookup_order}
  */
  readonly lookupOrder?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderA;
}
export interface SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA {
  /**
  * 'disabled': Disable NS Cache Lookup; 'enabled': Enable NS Cache Lookup;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#gwhc_ns_cache_lookup SlbTemplateDnsRecursiveDnsResolutionA#gwhc_ns_cache_lookup}
  */
  readonly gwhcNsCacheLookup?: string;
  /**
  * Specify the health check interval, default is 10 sec (Interval value, in seconds (default 10))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#interval SlbTemplateDnsRecursiveDnsResolutionA#interval}
  */
  readonly interval?: number;
  /**
  * Other record type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#num_query_type SlbTemplateDnsRecursiveDnsResolutionA#num_query_type}
  */
  readonly numQueryType?: number;
  /**
  * Specify the query name used in probe queries, default "a10networks.com"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#query_name SlbTemplateDnsRecursiveDnsResolutionA#query_name}
  */
  readonly queryName?: string;
  /**
  * Maximum number of DNS query retries at each server level before health check fails, default 6 (Retry count (default 6))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#retry SlbTemplateDnsRecursiveDnsResolutionA#retry}
  */
  readonly retry?: number;
  /**
  * Specify number of times that health check consecutively fails before declaring gateway DOWN, default 1 (retry-multi count (default 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#retry_multi SlbTemplateDnsRecursiveDnsResolutionA#retry_multi}
  */
  readonly retryMulti?: number;
  /**
  * 'A': Address record; 'AAAA': IPv6 Address record; 'CNAME': Canonical name record; 'MX': Mail exchange record; 'NS': Name server record; 'SRV': Service locator; 'PTR': PTR resource record; 'SOA': Start of authority record; 'TXT': Text record;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#str_query_type SlbTemplateDnsRecursiveDnsResolutionA#str_query_type}
  */
  readonly strQueryType?: string;
  /**
  * Specify the health check timeout before retrying or finish, default is 5 sec (Timeout value, in seconds (default 5))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#timeout SlbTemplateDnsRecursiveDnsResolutionA#timeout}
  */
  readonly timeout?: number;
  /**
  * Specify number of times that health check consecutively passes before declaring gateway UP, default 1 (up-retry count (default 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#up_retry SlbTemplateDnsRecursiveDnsResolutionA#up_retry}
  */
  readonly upRetry?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#uuid SlbTemplateDnsRecursiveDnsResolutionA#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckAToTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckAOutputReference | SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA): any {
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


export function slbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckAToHclTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckAOutputReference | SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA): any {
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

export class SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA | undefined {
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

  public set internalValue(value: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA | undefined) {
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
export interface SlbTemplateDnsRecursiveDnsResolutionHostListCfgA {
  /**
  * Hostnames class-list name (dns type), perform resolution while query name matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#hostnames SlbTemplateDnsRecursiveDnsResolutionA#hostnames}
  */
  readonly hostnames?: string;
}

export function slbTemplateDnsRecursiveDnsResolutionHostListCfgAToTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionHostListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.stringToTerraform(struct!.hostnames),
  }
}


export function slbTemplateDnsRecursiveDnsResolutionHostListCfgAToHclTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionHostListCfgA | cdktf.IResolvable): any {
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

export class SlbTemplateDnsRecursiveDnsResolutionHostListCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsRecursiveDnsResolutionHostListCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplateDnsRecursiveDnsResolutionHostListCfgA | cdktf.IResolvable | undefined) {
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

export class SlbTemplateDnsRecursiveDnsResolutionHostListCfgAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsRecursiveDnsResolutionHostListCfgA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsRecursiveDnsResolutionHostListCfgAOutputReference {
    return new SlbTemplateDnsRecursiveDnsResolutionHostListCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA {
  /**
  * Other query type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#num_query_type SlbTemplateDnsRecursiveDnsResolutionA#num_query_type}
  */
  readonly numQueryType?: number;
  /**
  * 'ipv4-precede-ipv6': Recursive lookup via IPv4 then IPv6; 'ipv6-precede-ipv4': Recursive lookup via IPv6 then IPv4;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#order SlbTemplateDnsRecursiveDnsResolutionA#order}
  */
  readonly order?: string;
  /**
  * 'A': Address record; 'AAAA': IPv6 Address record; 'CNAME': Canonical name record; 'MX': Mail exchange record; 'NS': Name server record; 'SRV': Service locator; 'PTR': PTR resource record; 'SOA': Start of authority record; 'TXT': Text record; 'ANY': All cached record;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#str_query_type SlbTemplateDnsRecursiveDnsResolutionA#str_query_type}
  */
  readonly strQueryType?: string;
}

export function slbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAToTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA | cdktf.IResolvable): any {
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


export function slbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAToHclTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA | cdktf.IResolvable): any {
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

export class SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA | cdktf.IResolvable | undefined) {
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

export class SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAOutputReference {
    return new SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsRecursiveDnsResolutionLookupOrderA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#uuid SlbTemplateDnsRecursiveDnsResolutionA#uuid}
  */
  readonly uuid?: string;
  /**
  * query_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#query_type SlbTemplateDnsRecursiveDnsResolutionA#query_type}
  */
  readonly queryType?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA[] | cdktf.IResolvable;
}

export function slbTemplateDnsRecursiveDnsResolutionLookupOrderAToTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderAOutputReference | SlbTemplateDnsRecursiveDnsResolutionLookupOrderA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    query_type: cdktf.listMapper(slbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAToTerraform, true)(struct!.queryType),
  }
}


export function slbTemplateDnsRecursiveDnsResolutionLookupOrderAToHclTerraform(struct?: SlbTemplateDnsRecursiveDnsResolutionLookupOrderAOutputReference | SlbTemplateDnsRecursiveDnsResolutionLookupOrderA): any {
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
      value: cdktf.listMapperHcl(slbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAToHclTerraform, true)(struct!.queryType),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsRecursiveDnsResolutionLookupOrderAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsRecursiveDnsResolutionLookupOrderA | undefined {
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

  public set internalValue(value: SlbTemplateDnsRecursiveDnsResolutionLookupOrderA | undefined) {
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
  private _queryType = new SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeAList(this, "query_type", false);
  public get queryType() {
    return this._queryType;
  }
  public putQueryType(value: SlbTemplateDnsRecursiveDnsResolutionLookupOrderQueryTypeA[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution thunder_slb_template_dns_recursive_dns_resolution}
*/
export class SlbTemplateDnsRecursiveDnsResolutionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_recursive_dns_resolution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsRecursiveDnsResolutionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsRecursiveDnsResolutionA to import
  * @param importFromId The id of the existing SlbTemplateDnsRecursiveDnsResolutionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsRecursiveDnsResolutionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_recursive_dns_resolution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_recursive_dns_resolution thunder_slb_template_dns_recursive_dns_resolution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsRecursiveDnsResolutionAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsRecursiveDnsResolutionAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_recursive_dns_resolution',
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
    this._csubnetRetry = config.csubnetRetry;
    this._defaultRecursive = config.defaultRecursive;
    this._dnssecValidation = config.dnssecValidation;
    this._fastNsSelection = config.fastNsSelection;
    this._forceCnameResolution = config.forceCnameResolution;
    this._fullResponse = config.fullResponse;
    this._id = config.id;
    this._ipv4NatPool = config.ipv4NatPool;
    this._ipv6NatPool = config.ipv6NatPool;
    this._maxTrials = config.maxTrials;
    this._name = config.name;
    this._nsCacheLookup = config.nsCacheLookup;
    this._requestForPendingResolution = config.requestForPendingResolution;
    this._retriesPerLevel = config.retriesPerLevel;
    this._udpInitialInterval = config.udpInitialInterval;
    this._udpRetryInterval = config.udpRetryInterval;
    this._useClientQid = config.useClientQid;
    this._useServiceGroupResponse = config.useServiceGroupResponse;
    this._uuid = config.uuid;
    this._gatewayHealthCheck.internalValue = config.gatewayHealthCheck;
    this._hostListCfg.internalValue = config.hostListCfg;
    this._lookupOrder.internalValue = config.lookupOrder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _gatewayHealthCheck = new SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckAOutputReference(this, "gateway_health_check");
  public get gatewayHealthCheck() {
    return this._gatewayHealthCheck;
  }
  public putGatewayHealthCheck(value: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA) {
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
  private _hostListCfg = new SlbTemplateDnsRecursiveDnsResolutionHostListCfgAList(this, "host_list_cfg", false);
  public get hostListCfg() {
    return this._hostListCfg;
  }
  public putHostListCfg(value: SlbTemplateDnsRecursiveDnsResolutionHostListCfgA[] | cdktf.IResolvable) {
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
  private _lookupOrder = new SlbTemplateDnsRecursiveDnsResolutionLookupOrderAOutputReference(this, "lookup_order");
  public get lookupOrder() {
    return this._lookupOrder;
  }
  public putLookupOrder(value: SlbTemplateDnsRecursiveDnsResolutionLookupOrderA) {
    this._lookupOrder.internalValue = value;
  }
  public resetLookupOrder() {
    this._lookupOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupOrderInput() {
    return this._lookupOrder.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csubnet_retry: cdktf.numberToTerraform(this._csubnetRetry),
      default_recursive: cdktf.numberToTerraform(this._defaultRecursive),
      dnssec_validation: cdktf.stringToTerraform(this._dnssecValidation),
      fast_ns_selection: cdktf.stringToTerraform(this._fastNsSelection),
      force_cname_resolution: cdktf.stringToTerraform(this._forceCnameResolution),
      full_response: cdktf.numberToTerraform(this._fullResponse),
      id: cdktf.stringToTerraform(this._id),
      ipv4_nat_pool: cdktf.stringToTerraform(this._ipv4NatPool),
      ipv6_nat_pool: cdktf.stringToTerraform(this._ipv6NatPool),
      max_trials: cdktf.numberToTerraform(this._maxTrials),
      name: cdktf.stringToTerraform(this._name),
      ns_cache_lookup: cdktf.stringToTerraform(this._nsCacheLookup),
      request_for_pending_resolution: cdktf.stringToTerraform(this._requestForPendingResolution),
      retries_per_level: cdktf.numberToTerraform(this._retriesPerLevel),
      udp_initial_interval: cdktf.numberToTerraform(this._udpInitialInterval),
      udp_retry_interval: cdktf.numberToTerraform(this._udpRetryInterval),
      use_client_qid: cdktf.numberToTerraform(this._useClientQid),
      use_service_group_response: cdktf.stringToTerraform(this._useServiceGroupResponse),
      uuid: cdktf.stringToTerraform(this._uuid),
      gateway_health_check: slbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckAToTerraform(this._gatewayHealthCheck.internalValue),
      host_list_cfg: cdktf.listMapper(slbTemplateDnsRecursiveDnsResolutionHostListCfgAToTerraform, true)(this._hostListCfg.internalValue),
      lookup_order: slbTemplateDnsRecursiveDnsResolutionLookupOrderAToTerraform(this._lookupOrder.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      csubnet_retry: {
        value: cdktf.numberToHclTerraform(this._csubnetRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_recursive: {
        value: cdktf.numberToHclTerraform(this._defaultRecursive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dnssec_validation: {
        value: cdktf.stringToHclTerraform(this._dnssecValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_ns_selection: {
        value: cdktf.stringToHclTerraform(this._fastNsSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_cname_resolution: {
        value: cdktf.stringToHclTerraform(this._forceCnameResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_response: {
        value: cdktf.numberToHclTerraform(this._fullResponse),
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
      ipv4_nat_pool: {
        value: cdktf.stringToHclTerraform(this._ipv4NatPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_nat_pool: {
        value: cdktf.stringToHclTerraform(this._ipv6NatPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_trials: {
        value: cdktf.numberToHclTerraform(this._maxTrials),
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
      ns_cache_lookup: {
        value: cdktf.stringToHclTerraform(this._nsCacheLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_for_pending_resolution: {
        value: cdktf.stringToHclTerraform(this._requestForPendingResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries_per_level: {
        value: cdktf.numberToHclTerraform(this._retriesPerLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_initial_interval: {
        value: cdktf.numberToHclTerraform(this._udpInitialInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_retry_interval: {
        value: cdktf.numberToHclTerraform(this._udpRetryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_client_qid: {
        value: cdktf.numberToHclTerraform(this._useClientQid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_service_group_response: {
        value: cdktf.stringToHclTerraform(this._useServiceGroupResponse),
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
      gateway_health_check: {
        value: slbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckAToHclTerraform(this._gatewayHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckAList",
      },
      host_list_cfg: {
        value: cdktf.listMapperHcl(slbTemplateDnsRecursiveDnsResolutionHostListCfgAToHclTerraform, true)(this._hostListCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsRecursiveDnsResolutionHostListCfgAList",
      },
      lookup_order: {
        value: slbTemplateDnsRecursiveDnsResolutionLookupOrderAToHclTerraform(this._lookupOrder.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsRecursiveDnsResolutionLookupOrderAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
