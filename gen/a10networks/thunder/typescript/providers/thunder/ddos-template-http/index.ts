// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateHttpConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'drop': Drop packets for the connection; 'reset': Send RST for the connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#action DdosTemplateHttp#action}
  */
  readonly action?: string;
  /**
  * Set the cookie name used to send back to client. Default is sto-idd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#challenge_cookie_name DdosTemplateHttp#challenge_cookie_name}
  */
  readonly challengeCookieName?: string;
  /**
  * Specify the challenge interval. Default is 8 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#challenge_interval DdosTemplateHttp#challenge_interval}
  */
  readonly challengeInterval?: number;
  /**
  * Keep the challenge cookie from client and forward to backend. Default is do not keep
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#challenge_keep_cookie DdosTemplateHttp#challenge_keep_cookie}
  */
  readonly challengeKeepCookie?: number;
  /**
  * 'http-redirect': http-redirect; 'javascript': javascript;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#challenge_method DdosTemplateHttp#challenge_method}
  */
  readonly challengeMethod?: string;
  /**
  * '302': 302 Found; '307': 307 Temporary Redirect;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#challenge_redirect_code DdosTemplateHttp#challenge_redirect_code}
  */
  readonly challengeRedirectCode?: string;
  /**
  * Encode the challenge phrase in uri instead of in http cookie. Default encoded in http cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#challenge_uri_encode DdosTemplateHttp#challenge_uri_encode}
  */
  readonly challengeUriEncode?: number;
  /**
  * Disable this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#disable DdosTemplateHttp#disable}
  */
  readonly disable?: number;
  /**
  * Do not allow HTTP Connect method (asymmetric mode only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#disallow_connect_method DdosTemplateHttp#disallow_connect_method}
  */
  readonly disallowConnectMethod?: number;
  /**
  * DDOS HTTP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#http_tmpl_name DdosTemplateHttp#http_tmpl_name}
  */
  readonly httpTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#id DdosTemplateHttp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set the the idle timeout value in seconds for HTTP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#idle_timeout DdosTemplateHttp#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Don't reset idle timer on packets with zero payload length from clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#ignore_zero_payload DdosTemplateHttp#ignore_zero_payload}
  */
  readonly ignoreZeroPayload?: number;
  /**
  * Bypass non-http traffic instead of dropping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#non_http_bypass DdosTemplateHttp#non_http_bypass}
  */
  readonly nonHttpBypass?: number;
  /**
  * Set the number of packets for the out-of-order HTTP queue (asym mode only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#out_of_order_queue_size DdosTemplateHttp#out_of_order_queue_size}
  */
  readonly outOfOrderQueueSize?: number;
  /**
  * Set the timeout value in seconds for out-of-order queue in HTTP (asym mode only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#out_of_order_queue_timeout DdosTemplateHttp#out_of_order_queue_timeout}
  */
  readonly outOfOrderQueueTimeout?: number;
  /**
  * Configure rate limiting for HTTP POST request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#post_rate_limit DdosTemplateHttp#post_rate_limit}
  */
  readonly postRateLimit?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#user_tag DdosTemplateHttp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#uuid DdosTemplateHttp#uuid}
  */
  readonly uuid?: string;
  /**
  * agent_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#agent_filter DdosTemplateHttp#agent_filter}
  */
  readonly agentFilter?: DdosTemplateHttpAgentFilter;
  /**
  * filter_header_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#filter_header_list DdosTemplateHttp#filter_header_list}
  */
  readonly filterHeaderList?: DdosTemplateHttpFilterHeaderListStruct[] | cdktf.IResolvable;
  /**
  * malformed_http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#malformed_http DdosTemplateHttp#malformed_http}
  */
  readonly malformedHttp?: DdosTemplateHttpMalformedHttp;
  /**
  * mss_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#mss_cfg DdosTemplateHttp#mss_cfg}
  */
  readonly mssCfg?: DdosTemplateHttpMssCfg;
  /**
  * multi_pu_threshold_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#multi_pu_threshold_distribution DdosTemplateHttp#multi_pu_threshold_distribution}
  */
  readonly multiPuThresholdDistribution?: DdosTemplateHttpMultiPuThresholdDistribution;
  /**
  * referer_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#referer_filter DdosTemplateHttp#referer_filter}
  */
  readonly refererFilter?: DdosTemplateHttpRefererFilter;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#request_header DdosTemplateHttp#request_header}
  */
  readonly requestHeader?: DdosTemplateHttpRequestHeader;
  /**
  * request_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#request_rate_limit DdosTemplateHttp#request_rate_limit}
  */
  readonly requestRateLimit?: DdosTemplateHttpRequestRateLimit;
  /**
  * response_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#response_rate_limit DdosTemplateHttp#response_rate_limit}
  */
  readonly responseRateLimit?: DdosTemplateHttpResponseRateLimit;
  /**
  * slow_read_drop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#slow_read_drop DdosTemplateHttp#slow_read_drop}
  */
  readonly slowReadDrop?: DdosTemplateHttpSlowReadDrop;
  /**
  * use_hdr_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#use_hdr_ip_cfg DdosTemplateHttp#use_hdr_ip_cfg}
  */
  readonly useHdrIpCfg?: DdosTemplateHttpUseHdrIpCfg;
}
export interface DdosTemplateHttpAgentFilterAgentContainsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#agent_contains DdosTemplateHttp#agent_contains}
  */
  readonly agentContains?: string;
}

export function ddosTemplateHttpAgentFilterAgentContainsCfgToTerraform(struct?: DdosTemplateHttpAgentFilterAgentContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_contains: cdktf.stringToTerraform(struct!.agentContains),
  }
}


export function ddosTemplateHttpAgentFilterAgentContainsCfgToHclTerraform(struct?: DdosTemplateHttpAgentFilterAgentContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_contains: {
      value: cdktf.stringToHclTerraform(struct!.agentContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpAgentFilterAgentContainsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateHttpAgentFilterAgentContainsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentContains = this._agentContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpAgentFilterAgentContainsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentContains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentContains = value.agentContains;
    }
  }

  // agent_contains - computed: false, optional: true, required: false
  private _agentContains?: string; 
  public get agentContains() {
    return this.getStringAttribute('agent_contains');
  }
  public set agentContains(value: string) {
    this._agentContains = value;
  }
  public resetAgentContains() {
    this._agentContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentContainsInput() {
    return this._agentContains;
  }
}

export class DdosTemplateHttpAgentFilterAgentContainsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateHttpAgentFilterAgentContainsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateHttpAgentFilterAgentContainsCfgOutputReference {
    return new DdosTemplateHttpAgentFilterAgentContainsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateHttpAgentFilterAgentEndsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#agent_ends_with DdosTemplateHttp#agent_ends_with}
  */
  readonly agentEndsWith?: string;
}

export function ddosTemplateHttpAgentFilterAgentEndsCfgToTerraform(struct?: DdosTemplateHttpAgentFilterAgentEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_ends_with: cdktf.stringToTerraform(struct!.agentEndsWith),
  }
}


export function ddosTemplateHttpAgentFilterAgentEndsCfgToHclTerraform(struct?: DdosTemplateHttpAgentFilterAgentEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.agentEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpAgentFilterAgentEndsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateHttpAgentFilterAgentEndsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentEndsWith = this._agentEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpAgentFilterAgentEndsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentEndsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentEndsWith = value.agentEndsWith;
    }
  }

  // agent_ends_with - computed: false, optional: true, required: false
  private _agentEndsWith?: string; 
  public get agentEndsWith() {
    return this.getStringAttribute('agent_ends_with');
  }
  public set agentEndsWith(value: string) {
    this._agentEndsWith = value;
  }
  public resetAgentEndsWith() {
    this._agentEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentEndsWithInput() {
    return this._agentEndsWith;
  }
}

export class DdosTemplateHttpAgentFilterAgentEndsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateHttpAgentFilterAgentEndsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateHttpAgentFilterAgentEndsCfgOutputReference {
    return new DdosTemplateHttpAgentFilterAgentEndsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateHttpAgentFilterAgentEqualsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#agent_equals DdosTemplateHttp#agent_equals}
  */
  readonly agentEquals?: string;
}

export function ddosTemplateHttpAgentFilterAgentEqualsCfgToTerraform(struct?: DdosTemplateHttpAgentFilterAgentEqualsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_equals: cdktf.stringToTerraform(struct!.agentEquals),
  }
}


export function ddosTemplateHttpAgentFilterAgentEqualsCfgToHclTerraform(struct?: DdosTemplateHttpAgentFilterAgentEqualsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_equals: {
      value: cdktf.stringToHclTerraform(struct!.agentEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpAgentFilterAgentEqualsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateHttpAgentFilterAgentEqualsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentEquals = this._agentEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpAgentFilterAgentEqualsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentEquals = value.agentEquals;
    }
  }

  // agent_equals - computed: false, optional: true, required: false
  private _agentEquals?: string; 
  public get agentEquals() {
    return this.getStringAttribute('agent_equals');
  }
  public set agentEquals(value: string) {
    this._agentEquals = value;
  }
  public resetAgentEquals() {
    this._agentEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentEqualsInput() {
    return this._agentEquals;
  }
}

export class DdosTemplateHttpAgentFilterAgentEqualsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateHttpAgentFilterAgentEqualsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateHttpAgentFilterAgentEqualsCfgOutputReference {
    return new DdosTemplateHttpAgentFilterAgentEqualsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateHttpAgentFilterAgentStartsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#agent_starts_with DdosTemplateHttp#agent_starts_with}
  */
  readonly agentStartsWith?: string;
}

export function ddosTemplateHttpAgentFilterAgentStartsCfgToTerraform(struct?: DdosTemplateHttpAgentFilterAgentStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_starts_with: cdktf.stringToTerraform(struct!.agentStartsWith),
  }
}


export function ddosTemplateHttpAgentFilterAgentStartsCfgToHclTerraform(struct?: DdosTemplateHttpAgentFilterAgentStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_starts_with: {
      value: cdktf.stringToHclTerraform(struct!.agentStartsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpAgentFilterAgentStartsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateHttpAgentFilterAgentStartsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentStartsWith = this._agentStartsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpAgentFilterAgentStartsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentStartsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentStartsWith = value.agentStartsWith;
    }
  }

  // agent_starts_with - computed: false, optional: true, required: false
  private _agentStartsWith?: string; 
  public get agentStartsWith() {
    return this.getStringAttribute('agent_starts_with');
  }
  public set agentStartsWith(value: string) {
    this._agentStartsWith = value;
  }
  public resetAgentStartsWith() {
    this._agentStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentStartsWithInput() {
    return this._agentStartsWith;
  }
}

export class DdosTemplateHttpAgentFilterAgentStartsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateHttpAgentFilterAgentStartsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateHttpAgentFilterAgentStartsCfgOutputReference {
    return new DdosTemplateHttpAgentFilterAgentStartsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateHttpAgentFilter {
  /**
  * Blacklist the source if the user-agent matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#agent_filter_blacklist DdosTemplateHttp#agent_filter_blacklist}
  */
  readonly agentFilterBlacklist?: number;
  /**
  * agent_contains_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#agent_contains_cfg DdosTemplateHttp#agent_contains_cfg}
  */
  readonly agentContainsCfg?: DdosTemplateHttpAgentFilterAgentContainsCfg[] | cdktf.IResolvable;
  /**
  * agent_ends_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#agent_ends_cfg DdosTemplateHttp#agent_ends_cfg}
  */
  readonly agentEndsCfg?: DdosTemplateHttpAgentFilterAgentEndsCfg[] | cdktf.IResolvable;
  /**
  * agent_equals_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#agent_equals_cfg DdosTemplateHttp#agent_equals_cfg}
  */
  readonly agentEqualsCfg?: DdosTemplateHttpAgentFilterAgentEqualsCfg[] | cdktf.IResolvable;
  /**
  * agent_starts_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#agent_starts_cfg DdosTemplateHttp#agent_starts_cfg}
  */
  readonly agentStartsCfg?: DdosTemplateHttpAgentFilterAgentStartsCfg[] | cdktf.IResolvable;
}

export function ddosTemplateHttpAgentFilterToTerraform(struct?: DdosTemplateHttpAgentFilterOutputReference | DdosTemplateHttpAgentFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_filter_blacklist: cdktf.numberToTerraform(struct!.agentFilterBlacklist),
    agent_contains_cfg: cdktf.listMapper(ddosTemplateHttpAgentFilterAgentContainsCfgToTerraform, true)(struct!.agentContainsCfg),
    agent_ends_cfg: cdktf.listMapper(ddosTemplateHttpAgentFilterAgentEndsCfgToTerraform, true)(struct!.agentEndsCfg),
    agent_equals_cfg: cdktf.listMapper(ddosTemplateHttpAgentFilterAgentEqualsCfgToTerraform, true)(struct!.agentEqualsCfg),
    agent_starts_cfg: cdktf.listMapper(ddosTemplateHttpAgentFilterAgentStartsCfgToTerraform, true)(struct!.agentStartsCfg),
  }
}


export function ddosTemplateHttpAgentFilterToHclTerraform(struct?: DdosTemplateHttpAgentFilterOutputReference | DdosTemplateHttpAgentFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_filter_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.agentFilterBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    agent_contains_cfg: {
      value: cdktf.listMapperHcl(ddosTemplateHttpAgentFilterAgentContainsCfgToHclTerraform, true)(struct!.agentContainsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpAgentFilterAgentContainsCfgList",
    },
    agent_ends_cfg: {
      value: cdktf.listMapperHcl(ddosTemplateHttpAgentFilterAgentEndsCfgToHclTerraform, true)(struct!.agentEndsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpAgentFilterAgentEndsCfgList",
    },
    agent_equals_cfg: {
      value: cdktf.listMapperHcl(ddosTemplateHttpAgentFilterAgentEqualsCfgToHclTerraform, true)(struct!.agentEqualsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpAgentFilterAgentEqualsCfgList",
    },
    agent_starts_cfg: {
      value: cdktf.listMapperHcl(ddosTemplateHttpAgentFilterAgentStartsCfgToHclTerraform, true)(struct!.agentStartsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpAgentFilterAgentStartsCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpAgentFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpAgentFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentFilterBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentFilterBlacklist = this._agentFilterBlacklist;
    }
    if (this._agentContainsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentContainsCfg = this._agentContainsCfg?.internalValue;
    }
    if (this._agentEndsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentEndsCfg = this._agentEndsCfg?.internalValue;
    }
    if (this._agentEqualsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentEqualsCfg = this._agentEqualsCfg?.internalValue;
    }
    if (this._agentStartsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentStartsCfg = this._agentStartsCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpAgentFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentFilterBlacklist = undefined;
      this._agentContainsCfg.internalValue = undefined;
      this._agentEndsCfg.internalValue = undefined;
      this._agentEqualsCfg.internalValue = undefined;
      this._agentStartsCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentFilterBlacklist = value.agentFilterBlacklist;
      this._agentContainsCfg.internalValue = value.agentContainsCfg;
      this._agentEndsCfg.internalValue = value.agentEndsCfg;
      this._agentEqualsCfg.internalValue = value.agentEqualsCfg;
      this._agentStartsCfg.internalValue = value.agentStartsCfg;
    }
  }

  // agent_filter_blacklist - computed: false, optional: true, required: false
  private _agentFilterBlacklist?: number; 
  public get agentFilterBlacklist() {
    return this.getNumberAttribute('agent_filter_blacklist');
  }
  public set agentFilterBlacklist(value: number) {
    this._agentFilterBlacklist = value;
  }
  public resetAgentFilterBlacklist() {
    this._agentFilterBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentFilterBlacklistInput() {
    return this._agentFilterBlacklist;
  }

  // agent_contains_cfg - computed: false, optional: true, required: false
  private _agentContainsCfg = new DdosTemplateHttpAgentFilterAgentContainsCfgList(this, "agent_contains_cfg", false);
  public get agentContainsCfg() {
    return this._agentContainsCfg;
  }
  public putAgentContainsCfg(value: DdosTemplateHttpAgentFilterAgentContainsCfg[] | cdktf.IResolvable) {
    this._agentContainsCfg.internalValue = value;
  }
  public resetAgentContainsCfg() {
    this._agentContainsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentContainsCfgInput() {
    return this._agentContainsCfg.internalValue;
  }

  // agent_ends_cfg - computed: false, optional: true, required: false
  private _agentEndsCfg = new DdosTemplateHttpAgentFilterAgentEndsCfgList(this, "agent_ends_cfg", false);
  public get agentEndsCfg() {
    return this._agentEndsCfg;
  }
  public putAgentEndsCfg(value: DdosTemplateHttpAgentFilterAgentEndsCfg[] | cdktf.IResolvable) {
    this._agentEndsCfg.internalValue = value;
  }
  public resetAgentEndsCfg() {
    this._agentEndsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentEndsCfgInput() {
    return this._agentEndsCfg.internalValue;
  }

  // agent_equals_cfg - computed: false, optional: true, required: false
  private _agentEqualsCfg = new DdosTemplateHttpAgentFilterAgentEqualsCfgList(this, "agent_equals_cfg", false);
  public get agentEqualsCfg() {
    return this._agentEqualsCfg;
  }
  public putAgentEqualsCfg(value: DdosTemplateHttpAgentFilterAgentEqualsCfg[] | cdktf.IResolvable) {
    this._agentEqualsCfg.internalValue = value;
  }
  public resetAgentEqualsCfg() {
    this._agentEqualsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentEqualsCfgInput() {
    return this._agentEqualsCfg.internalValue;
  }

  // agent_starts_cfg - computed: false, optional: true, required: false
  private _agentStartsCfg = new DdosTemplateHttpAgentFilterAgentStartsCfgList(this, "agent_starts_cfg", false);
  public get agentStartsCfg() {
    return this._agentStartsCfg;
  }
  public putAgentStartsCfg(value: DdosTemplateHttpAgentFilterAgentStartsCfg[] | cdktf.IResolvable) {
    this._agentStartsCfg.internalValue = value;
  }
  public resetAgentStartsCfg() {
    this._agentStartsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentStartsCfgInput() {
    return this._agentStartsCfg.internalValue;
  }
}
export interface DdosTemplateHttpFilterHeaderListStruct {
  /**
  * Also blacklist the source when action is taken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#http_filter_header_blacklist DdosTemplateHttp#http_filter_header_blacklist}
  */
  readonly httpFilterHeaderBlacklist?: number;
  /**
  * Take no action and continue processing the next filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#http_filter_header_count_only DdosTemplateHttp#http_filter_header_count_only}
  */
  readonly httpFilterHeaderCountOnly?: number;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#http_filter_header_regex DdosTemplateHttp#http_filter_header_regex}
  */
  readonly httpFilterHeaderRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#http_filter_header_seq DdosTemplateHttp#http_filter_header_seq}
  */
  readonly httpFilterHeaderSeq: number;
  /**
  * action taken when it does not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#http_filter_header_unmatched DdosTemplateHttp#http_filter_header_unmatched}
  */
  readonly httpFilterHeaderUnmatched?: number;
  /**
  * Whitelist the source after filter passes, packets are dropped until then
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#http_filter_header_whitelist DdosTemplateHttp#http_filter_header_whitelist}
  */
  readonly httpFilterHeaderWhitelist?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#user_tag DdosTemplateHttp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#uuid DdosTemplateHttp#uuid}
  */
  readonly uuid?: string;
}

export function ddosTemplateHttpFilterHeaderListStructToTerraform(struct?: DdosTemplateHttpFilterHeaderListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_header_blacklist: cdktf.numberToTerraform(struct!.httpFilterHeaderBlacklist),
    http_filter_header_count_only: cdktf.numberToTerraform(struct!.httpFilterHeaderCountOnly),
    http_filter_header_regex: cdktf.stringToTerraform(struct!.httpFilterHeaderRegex),
    http_filter_header_seq: cdktf.numberToTerraform(struct!.httpFilterHeaderSeq),
    http_filter_header_unmatched: cdktf.numberToTerraform(struct!.httpFilterHeaderUnmatched),
    http_filter_header_whitelist: cdktf.numberToTerraform(struct!.httpFilterHeaderWhitelist),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosTemplateHttpFilterHeaderListStructToHclTerraform(struct?: DdosTemplateHttpFilterHeaderListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_header_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.httpFilterHeaderBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_filter_header_count_only: {
      value: cdktf.numberToHclTerraform(struct!.httpFilterHeaderCountOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_filter_header_regex: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterHeaderRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_filter_header_seq: {
      value: cdktf.numberToHclTerraform(struct!.httpFilterHeaderSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_filter_header_unmatched: {
      value: cdktf.numberToHclTerraform(struct!.httpFilterHeaderUnmatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_filter_header_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.httpFilterHeaderWhitelist),
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

export class DdosTemplateHttpFilterHeaderListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateHttpFilterHeaderListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterHeaderBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterHeaderBlacklist = this._httpFilterHeaderBlacklist;
    }
    if (this._httpFilterHeaderCountOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterHeaderCountOnly = this._httpFilterHeaderCountOnly;
    }
    if (this._httpFilterHeaderRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterHeaderRegex = this._httpFilterHeaderRegex;
    }
    if (this._httpFilterHeaderSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterHeaderSeq = this._httpFilterHeaderSeq;
    }
    if (this._httpFilterHeaderUnmatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterHeaderUnmatched = this._httpFilterHeaderUnmatched;
    }
    if (this._httpFilterHeaderWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterHeaderWhitelist = this._httpFilterHeaderWhitelist;
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

  public set internalValue(value: DdosTemplateHttpFilterHeaderListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterHeaderBlacklist = undefined;
      this._httpFilterHeaderCountOnly = undefined;
      this._httpFilterHeaderRegex = undefined;
      this._httpFilterHeaderSeq = undefined;
      this._httpFilterHeaderUnmatched = undefined;
      this._httpFilterHeaderWhitelist = undefined;
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
      this._httpFilterHeaderBlacklist = value.httpFilterHeaderBlacklist;
      this._httpFilterHeaderCountOnly = value.httpFilterHeaderCountOnly;
      this._httpFilterHeaderRegex = value.httpFilterHeaderRegex;
      this._httpFilterHeaderSeq = value.httpFilterHeaderSeq;
      this._httpFilterHeaderUnmatched = value.httpFilterHeaderUnmatched;
      this._httpFilterHeaderWhitelist = value.httpFilterHeaderWhitelist;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // http_filter_header_blacklist - computed: false, optional: true, required: false
  private _httpFilterHeaderBlacklist?: number; 
  public get httpFilterHeaderBlacklist() {
    return this.getNumberAttribute('http_filter_header_blacklist');
  }
  public set httpFilterHeaderBlacklist(value: number) {
    this._httpFilterHeaderBlacklist = value;
  }
  public resetHttpFilterHeaderBlacklist() {
    this._httpFilterHeaderBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderBlacklistInput() {
    return this._httpFilterHeaderBlacklist;
  }

  // http_filter_header_count_only - computed: false, optional: true, required: false
  private _httpFilterHeaderCountOnly?: number; 
  public get httpFilterHeaderCountOnly() {
    return this.getNumberAttribute('http_filter_header_count_only');
  }
  public set httpFilterHeaderCountOnly(value: number) {
    this._httpFilterHeaderCountOnly = value;
  }
  public resetHttpFilterHeaderCountOnly() {
    this._httpFilterHeaderCountOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderCountOnlyInput() {
    return this._httpFilterHeaderCountOnly;
  }

  // http_filter_header_regex - computed: false, optional: true, required: false
  private _httpFilterHeaderRegex?: string; 
  public get httpFilterHeaderRegex() {
    return this.getStringAttribute('http_filter_header_regex');
  }
  public set httpFilterHeaderRegex(value: string) {
    this._httpFilterHeaderRegex = value;
  }
  public resetHttpFilterHeaderRegex() {
    this._httpFilterHeaderRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderRegexInput() {
    return this._httpFilterHeaderRegex;
  }

  // http_filter_header_seq - computed: false, optional: false, required: true
  private _httpFilterHeaderSeq?: number; 
  public get httpFilterHeaderSeq() {
    return this.getNumberAttribute('http_filter_header_seq');
  }
  public set httpFilterHeaderSeq(value: number) {
    this._httpFilterHeaderSeq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderSeqInput() {
    return this._httpFilterHeaderSeq;
  }

  // http_filter_header_unmatched - computed: false, optional: true, required: false
  private _httpFilterHeaderUnmatched?: number; 
  public get httpFilterHeaderUnmatched() {
    return this.getNumberAttribute('http_filter_header_unmatched');
  }
  public set httpFilterHeaderUnmatched(value: number) {
    this._httpFilterHeaderUnmatched = value;
  }
  public resetHttpFilterHeaderUnmatched() {
    this._httpFilterHeaderUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderUnmatchedInput() {
    return this._httpFilterHeaderUnmatched;
  }

  // http_filter_header_whitelist - computed: false, optional: true, required: false
  private _httpFilterHeaderWhitelist?: number; 
  public get httpFilterHeaderWhitelist() {
    return this.getNumberAttribute('http_filter_header_whitelist');
  }
  public set httpFilterHeaderWhitelist(value: number) {
    this._httpFilterHeaderWhitelist = value;
  }
  public resetHttpFilterHeaderWhitelist() {
    this._httpFilterHeaderWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderWhitelistInput() {
    return this._httpFilterHeaderWhitelist;
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

export class DdosTemplateHttpFilterHeaderListStructList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateHttpFilterHeaderListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateHttpFilterHeaderListStructOutputReference {
    return new DdosTemplateHttpFilterHeaderListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateHttpMalformedHttp {
  /**
  * Enabling bad chunk monitoring. Default is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#malformed_http_bad_chunk_mon_enabled DdosTemplateHttp#malformed_http_bad_chunk_mon_enabled}
  */
  readonly malformedHttpBadChunkMonEnabled?: number;
  /**
  * Enabling ddos malformed http protection. Default value is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#malformed_http_enabled DdosTemplateHttp#malformed_http_enabled}
  */
  readonly malformedHttpEnabled?: number;
  /**
  * Set the maximum content-length header. Default value is 4294967295 bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#malformed_http_max_content_length DdosTemplateHttp#malformed_http_max_content_length}
  */
  readonly malformedHttpMaxContentLength?: number;
  /**
  * Set the maxinum header name length. Default value is 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#malformed_http_max_header_name_size DdosTemplateHttp#malformed_http_max_header_name_size}
  */
  readonly malformedHttpMaxHeaderNameSize?: number;
  /**
  * Set the maximum line size. Default value is 32512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#malformed_http_max_line_size DdosTemplateHttp#malformed_http_max_line_size}
  */
  readonly malformedHttpMaxLineSize?: number;
  /**
  * Set the maximum number of headers. Default value is 90
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#malformed_http_max_num_headers DdosTemplateHttp#malformed_http_max_num_headers}
  */
  readonly malformedHttpMaxNumHeaders?: number;
  /**
  * Set the maximum request line size. Default value is 32512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#malformed_http_max_req_line_size DdosTemplateHttp#malformed_http_max_req_line_size}
  */
  readonly malformedHttpMaxReqLineSize?: number;
}

export function ddosTemplateHttpMalformedHttpToTerraform(struct?: DdosTemplateHttpMalformedHttpOutputReference | DdosTemplateHttpMalformedHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    malformed_http_bad_chunk_mon_enabled: cdktf.numberToTerraform(struct!.malformedHttpBadChunkMonEnabled),
    malformed_http_enabled: cdktf.numberToTerraform(struct!.malformedHttpEnabled),
    malformed_http_max_content_length: cdktf.numberToTerraform(struct!.malformedHttpMaxContentLength),
    malformed_http_max_header_name_size: cdktf.numberToTerraform(struct!.malformedHttpMaxHeaderNameSize),
    malformed_http_max_line_size: cdktf.numberToTerraform(struct!.malformedHttpMaxLineSize),
    malformed_http_max_num_headers: cdktf.numberToTerraform(struct!.malformedHttpMaxNumHeaders),
    malformed_http_max_req_line_size: cdktf.numberToTerraform(struct!.malformedHttpMaxReqLineSize),
  }
}


export function ddosTemplateHttpMalformedHttpToHclTerraform(struct?: DdosTemplateHttpMalformedHttpOutputReference | DdosTemplateHttpMalformedHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    malformed_http_bad_chunk_mon_enabled: {
      value: cdktf.numberToHclTerraform(struct!.malformedHttpBadChunkMonEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_http_enabled: {
      value: cdktf.numberToHclTerraform(struct!.malformedHttpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_http_max_content_length: {
      value: cdktf.numberToHclTerraform(struct!.malformedHttpMaxContentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_http_max_header_name_size: {
      value: cdktf.numberToHclTerraform(struct!.malformedHttpMaxHeaderNameSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_http_max_line_size: {
      value: cdktf.numberToHclTerraform(struct!.malformedHttpMaxLineSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_http_max_num_headers: {
      value: cdktf.numberToHclTerraform(struct!.malformedHttpMaxNumHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_http_max_req_line_size: {
      value: cdktf.numberToHclTerraform(struct!.malformedHttpMaxReqLineSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpMalformedHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpMalformedHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._malformedHttpBadChunkMonEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHttpBadChunkMonEnabled = this._malformedHttpBadChunkMonEnabled;
    }
    if (this._malformedHttpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHttpEnabled = this._malformedHttpEnabled;
    }
    if (this._malformedHttpMaxContentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHttpMaxContentLength = this._malformedHttpMaxContentLength;
    }
    if (this._malformedHttpMaxHeaderNameSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHttpMaxHeaderNameSize = this._malformedHttpMaxHeaderNameSize;
    }
    if (this._malformedHttpMaxLineSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHttpMaxLineSize = this._malformedHttpMaxLineSize;
    }
    if (this._malformedHttpMaxNumHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHttpMaxNumHeaders = this._malformedHttpMaxNumHeaders;
    }
    if (this._malformedHttpMaxReqLineSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHttpMaxReqLineSize = this._malformedHttpMaxReqLineSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpMalformedHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._malformedHttpBadChunkMonEnabled = undefined;
      this._malformedHttpEnabled = undefined;
      this._malformedHttpMaxContentLength = undefined;
      this._malformedHttpMaxHeaderNameSize = undefined;
      this._malformedHttpMaxLineSize = undefined;
      this._malformedHttpMaxNumHeaders = undefined;
      this._malformedHttpMaxReqLineSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._malformedHttpBadChunkMonEnabled = value.malformedHttpBadChunkMonEnabled;
      this._malformedHttpEnabled = value.malformedHttpEnabled;
      this._malformedHttpMaxContentLength = value.malformedHttpMaxContentLength;
      this._malformedHttpMaxHeaderNameSize = value.malformedHttpMaxHeaderNameSize;
      this._malformedHttpMaxLineSize = value.malformedHttpMaxLineSize;
      this._malformedHttpMaxNumHeaders = value.malformedHttpMaxNumHeaders;
      this._malformedHttpMaxReqLineSize = value.malformedHttpMaxReqLineSize;
    }
  }

  // malformed_http_bad_chunk_mon_enabled - computed: false, optional: true, required: false
  private _malformedHttpBadChunkMonEnabled?: number; 
  public get malformedHttpBadChunkMonEnabled() {
    return this.getNumberAttribute('malformed_http_bad_chunk_mon_enabled');
  }
  public set malformedHttpBadChunkMonEnabled(value: number) {
    this._malformedHttpBadChunkMonEnabled = value;
  }
  public resetMalformedHttpBadChunkMonEnabled() {
    this._malformedHttpBadChunkMonEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpBadChunkMonEnabledInput() {
    return this._malformedHttpBadChunkMonEnabled;
  }

  // malformed_http_enabled - computed: false, optional: true, required: false
  private _malformedHttpEnabled?: number; 
  public get malformedHttpEnabled() {
    return this.getNumberAttribute('malformed_http_enabled');
  }
  public set malformedHttpEnabled(value: number) {
    this._malformedHttpEnabled = value;
  }
  public resetMalformedHttpEnabled() {
    this._malformedHttpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpEnabledInput() {
    return this._malformedHttpEnabled;
  }

  // malformed_http_max_content_length - computed: false, optional: true, required: false
  private _malformedHttpMaxContentLength?: number; 
  public get malformedHttpMaxContentLength() {
    return this.getNumberAttribute('malformed_http_max_content_length');
  }
  public set malformedHttpMaxContentLength(value: number) {
    this._malformedHttpMaxContentLength = value;
  }
  public resetMalformedHttpMaxContentLength() {
    this._malformedHttpMaxContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpMaxContentLengthInput() {
    return this._malformedHttpMaxContentLength;
  }

  // malformed_http_max_header_name_size - computed: false, optional: true, required: false
  private _malformedHttpMaxHeaderNameSize?: number; 
  public get malformedHttpMaxHeaderNameSize() {
    return this.getNumberAttribute('malformed_http_max_header_name_size');
  }
  public set malformedHttpMaxHeaderNameSize(value: number) {
    this._malformedHttpMaxHeaderNameSize = value;
  }
  public resetMalformedHttpMaxHeaderNameSize() {
    this._malformedHttpMaxHeaderNameSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpMaxHeaderNameSizeInput() {
    return this._malformedHttpMaxHeaderNameSize;
  }

  // malformed_http_max_line_size - computed: false, optional: true, required: false
  private _malformedHttpMaxLineSize?: number; 
  public get malformedHttpMaxLineSize() {
    return this.getNumberAttribute('malformed_http_max_line_size');
  }
  public set malformedHttpMaxLineSize(value: number) {
    this._malformedHttpMaxLineSize = value;
  }
  public resetMalformedHttpMaxLineSize() {
    this._malformedHttpMaxLineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpMaxLineSizeInput() {
    return this._malformedHttpMaxLineSize;
  }

  // malformed_http_max_num_headers - computed: false, optional: true, required: false
  private _malformedHttpMaxNumHeaders?: number; 
  public get malformedHttpMaxNumHeaders() {
    return this.getNumberAttribute('malformed_http_max_num_headers');
  }
  public set malformedHttpMaxNumHeaders(value: number) {
    this._malformedHttpMaxNumHeaders = value;
  }
  public resetMalformedHttpMaxNumHeaders() {
    this._malformedHttpMaxNumHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpMaxNumHeadersInput() {
    return this._malformedHttpMaxNumHeaders;
  }

  // malformed_http_max_req_line_size - computed: false, optional: true, required: false
  private _malformedHttpMaxReqLineSize?: number; 
  public get malformedHttpMaxReqLineSize() {
    return this.getNumberAttribute('malformed_http_max_req_line_size');
  }
  public set malformedHttpMaxReqLineSize(value: number) {
    this._malformedHttpMaxReqLineSize = value;
  }
  public resetMalformedHttpMaxReqLineSize() {
    this._malformedHttpMaxReqLineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpMaxReqLineSizeInput() {
    return this._malformedHttpMaxReqLineSize;
  }
}
export interface DdosTemplateHttpMssCfg {
  /**
  * Configure percentage of mss such that if a packet size is below the mss times mss-percent, packet is considered bad.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#mss_percent DdosTemplateHttp#mss_percent}
  */
  readonly mssPercent?: number;
  /**
  * Configure DDOS detection based on mss and packet size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#mss_timeout DdosTemplateHttp#mss_timeout}
  */
  readonly mssTimeout?: number;
  /**
  * Specify percentage of mss. Default is 0, mss-timeout is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#number_packets DdosTemplateHttp#number_packets}
  */
  readonly numberPackets?: number;
}

export function ddosTemplateHttpMssCfgToTerraform(struct?: DdosTemplateHttpMssCfgOutputReference | DdosTemplateHttpMssCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mss_percent: cdktf.numberToTerraform(struct!.mssPercent),
    mss_timeout: cdktf.numberToTerraform(struct!.mssTimeout),
    number_packets: cdktf.numberToTerraform(struct!.numberPackets),
  }
}


export function ddosTemplateHttpMssCfgToHclTerraform(struct?: DdosTemplateHttpMssCfgOutputReference | DdosTemplateHttpMssCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mss_percent: {
      value: cdktf.numberToHclTerraform(struct!.mssPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mss_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mssTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_packets: {
      value: cdktf.numberToHclTerraform(struct!.numberPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpMssCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpMssCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mssPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssPercent = this._mssPercent;
    }
    if (this._mssTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssTimeout = this._mssTimeout;
    }
    if (this._numberPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberPackets = this._numberPackets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpMssCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mssPercent = undefined;
      this._mssTimeout = undefined;
      this._numberPackets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mssPercent = value.mssPercent;
      this._mssTimeout = value.mssTimeout;
      this._numberPackets = value.numberPackets;
    }
  }

  // mss_percent - computed: false, optional: true, required: false
  private _mssPercent?: number; 
  public get mssPercent() {
    return this.getNumberAttribute('mss_percent');
  }
  public set mssPercent(value: number) {
    this._mssPercent = value;
  }
  public resetMssPercent() {
    this._mssPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssPercentInput() {
    return this._mssPercent;
  }

  // mss_timeout - computed: false, optional: true, required: false
  private _mssTimeout?: number; 
  public get mssTimeout() {
    return this.getNumberAttribute('mss_timeout');
  }
  public set mssTimeout(value: number) {
    this._mssTimeout = value;
  }
  public resetMssTimeout() {
    this._mssTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssTimeoutInput() {
    return this._mssTimeout;
  }

  // number_packets - computed: false, optional: true, required: false
  private _numberPackets?: number; 
  public get numberPackets() {
    return this.getNumberAttribute('number_packets');
  }
  public set numberPackets(value: number) {
    this._numberPackets = value;
  }
  public resetNumberPackets() {
    this._numberPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberPacketsInput() {
    return this._numberPackets;
  }
}
export interface DdosTemplateHttpMultiPuThresholdDistribution {
  /**
  * 'disable': Destination side rate limit only. Default: Enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#multi_pu_threshold_distribution_disable DdosTemplateHttp#multi_pu_threshold_distribution_disable}
  */
  readonly multiPuThresholdDistributionDisable?: string;
  /**
  * Destination side rate limit only. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#multi_pu_threshold_distribution_value DdosTemplateHttp#multi_pu_threshold_distribution_value}
  */
  readonly multiPuThresholdDistributionValue?: number;
}

export function ddosTemplateHttpMultiPuThresholdDistributionToTerraform(struct?: DdosTemplateHttpMultiPuThresholdDistributionOutputReference | DdosTemplateHttpMultiPuThresholdDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multi_pu_threshold_distribution_disable: cdktf.stringToTerraform(struct!.multiPuThresholdDistributionDisable),
    multi_pu_threshold_distribution_value: cdktf.numberToTerraform(struct!.multiPuThresholdDistributionValue),
  }
}


export function ddosTemplateHttpMultiPuThresholdDistributionToHclTerraform(struct?: DdosTemplateHttpMultiPuThresholdDistributionOutputReference | DdosTemplateHttpMultiPuThresholdDistribution): any {
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

export class DdosTemplateHttpMultiPuThresholdDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpMultiPuThresholdDistribution | undefined {
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

  public set internalValue(value: DdosTemplateHttpMultiPuThresholdDistribution | undefined) {
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
export interface DdosTemplateHttpRefererFilterRefererContainsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#referer_contains DdosTemplateHttp#referer_contains}
  */
  readonly refererContains?: string;
}

export function ddosTemplateHttpRefererFilterRefererContainsCfgToTerraform(struct?: DdosTemplateHttpRefererFilterRefererContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    referer_contains: cdktf.stringToTerraform(struct!.refererContains),
  }
}


export function ddosTemplateHttpRefererFilterRefererContainsCfgToHclTerraform(struct?: DdosTemplateHttpRefererFilterRefererContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    referer_contains: {
      value: cdktf.stringToHclTerraform(struct!.refererContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpRefererFilterRefererContainsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateHttpRefererFilterRefererContainsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refererContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererContains = this._refererContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpRefererFilterRefererContainsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._refererContains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._refererContains = value.refererContains;
    }
  }

  // referer_contains - computed: false, optional: true, required: false
  private _refererContains?: string; 
  public get refererContains() {
    return this.getStringAttribute('referer_contains');
  }
  public set refererContains(value: string) {
    this._refererContains = value;
  }
  public resetRefererContains() {
    this._refererContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererContainsInput() {
    return this._refererContains;
  }
}

export class DdosTemplateHttpRefererFilterRefererContainsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateHttpRefererFilterRefererContainsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateHttpRefererFilterRefererContainsCfgOutputReference {
    return new DdosTemplateHttpRefererFilterRefererContainsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateHttpRefererFilterRefererEndsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#referer_ends_with DdosTemplateHttp#referer_ends_with}
  */
  readonly refererEndsWith?: string;
}

export function ddosTemplateHttpRefererFilterRefererEndsCfgToTerraform(struct?: DdosTemplateHttpRefererFilterRefererEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    referer_ends_with: cdktf.stringToTerraform(struct!.refererEndsWith),
  }
}


export function ddosTemplateHttpRefererFilterRefererEndsCfgToHclTerraform(struct?: DdosTemplateHttpRefererFilterRefererEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    referer_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.refererEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpRefererFilterRefererEndsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateHttpRefererFilterRefererEndsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refererEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererEndsWith = this._refererEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpRefererFilterRefererEndsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._refererEndsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._refererEndsWith = value.refererEndsWith;
    }
  }

  // referer_ends_with - computed: false, optional: true, required: false
  private _refererEndsWith?: string; 
  public get refererEndsWith() {
    return this.getStringAttribute('referer_ends_with');
  }
  public set refererEndsWith(value: string) {
    this._refererEndsWith = value;
  }
  public resetRefererEndsWith() {
    this._refererEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererEndsWithInput() {
    return this._refererEndsWith;
  }
}

export class DdosTemplateHttpRefererFilterRefererEndsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateHttpRefererFilterRefererEndsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateHttpRefererFilterRefererEndsCfgOutputReference {
    return new DdosTemplateHttpRefererFilterRefererEndsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateHttpRefererFilterRefererEqualsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#referer_equals DdosTemplateHttp#referer_equals}
  */
  readonly refererEquals?: string;
}

export function ddosTemplateHttpRefererFilterRefererEqualsCfgToTerraform(struct?: DdosTemplateHttpRefererFilterRefererEqualsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    referer_equals: cdktf.stringToTerraform(struct!.refererEquals),
  }
}


export function ddosTemplateHttpRefererFilterRefererEqualsCfgToHclTerraform(struct?: DdosTemplateHttpRefererFilterRefererEqualsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    referer_equals: {
      value: cdktf.stringToHclTerraform(struct!.refererEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpRefererFilterRefererEqualsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateHttpRefererFilterRefererEqualsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refererEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererEquals = this._refererEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpRefererFilterRefererEqualsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._refererEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._refererEquals = value.refererEquals;
    }
  }

  // referer_equals - computed: false, optional: true, required: false
  private _refererEquals?: string; 
  public get refererEquals() {
    return this.getStringAttribute('referer_equals');
  }
  public set refererEquals(value: string) {
    this._refererEquals = value;
  }
  public resetRefererEquals() {
    this._refererEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererEqualsInput() {
    return this._refererEquals;
  }
}

export class DdosTemplateHttpRefererFilterRefererEqualsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateHttpRefererFilterRefererEqualsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateHttpRefererFilterRefererEqualsCfgOutputReference {
    return new DdosTemplateHttpRefererFilterRefererEqualsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateHttpRefererFilterRefererStartsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#referer_starts_with DdosTemplateHttp#referer_starts_with}
  */
  readonly refererStartsWith?: string;
}

export function ddosTemplateHttpRefererFilterRefererStartsCfgToTerraform(struct?: DdosTemplateHttpRefererFilterRefererStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    referer_starts_with: cdktf.stringToTerraform(struct!.refererStartsWith),
  }
}


export function ddosTemplateHttpRefererFilterRefererStartsCfgToHclTerraform(struct?: DdosTemplateHttpRefererFilterRefererStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    referer_starts_with: {
      value: cdktf.stringToHclTerraform(struct!.refererStartsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpRefererFilterRefererStartsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateHttpRefererFilterRefererStartsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refererStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererStartsWith = this._refererStartsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpRefererFilterRefererStartsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._refererStartsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._refererStartsWith = value.refererStartsWith;
    }
  }

  // referer_starts_with - computed: false, optional: true, required: false
  private _refererStartsWith?: string; 
  public get refererStartsWith() {
    return this.getStringAttribute('referer_starts_with');
  }
  public set refererStartsWith(value: string) {
    this._refererStartsWith = value;
  }
  public resetRefererStartsWith() {
    this._refererStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererStartsWithInput() {
    return this._refererStartsWith;
  }
}

export class DdosTemplateHttpRefererFilterRefererStartsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateHttpRefererFilterRefererStartsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateHttpRefererFilterRefererStartsCfgOutputReference {
    return new DdosTemplateHttpRefererFilterRefererStartsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateHttpRefererFilter {
  /**
  * Blacklist the source if the referer matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#ref_filter_blacklist DdosTemplateHttp#ref_filter_blacklist}
  */
  readonly refFilterBlacklist?: number;
  /**
  * referer_contains_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#referer_contains_cfg DdosTemplateHttp#referer_contains_cfg}
  */
  readonly refererContainsCfg?: DdosTemplateHttpRefererFilterRefererContainsCfg[] | cdktf.IResolvable;
  /**
  * referer_ends_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#referer_ends_cfg DdosTemplateHttp#referer_ends_cfg}
  */
  readonly refererEndsCfg?: DdosTemplateHttpRefererFilterRefererEndsCfg[] | cdktf.IResolvable;
  /**
  * referer_equals_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#referer_equals_cfg DdosTemplateHttp#referer_equals_cfg}
  */
  readonly refererEqualsCfg?: DdosTemplateHttpRefererFilterRefererEqualsCfg[] | cdktf.IResolvable;
  /**
  * referer_starts_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#referer_starts_cfg DdosTemplateHttp#referer_starts_cfg}
  */
  readonly refererStartsCfg?: DdosTemplateHttpRefererFilterRefererStartsCfg[] | cdktf.IResolvable;
}

export function ddosTemplateHttpRefererFilterToTerraform(struct?: DdosTemplateHttpRefererFilterOutputReference | DdosTemplateHttpRefererFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref_filter_blacklist: cdktf.numberToTerraform(struct!.refFilterBlacklist),
    referer_contains_cfg: cdktf.listMapper(ddosTemplateHttpRefererFilterRefererContainsCfgToTerraform, true)(struct!.refererContainsCfg),
    referer_ends_cfg: cdktf.listMapper(ddosTemplateHttpRefererFilterRefererEndsCfgToTerraform, true)(struct!.refererEndsCfg),
    referer_equals_cfg: cdktf.listMapper(ddosTemplateHttpRefererFilterRefererEqualsCfgToTerraform, true)(struct!.refererEqualsCfg),
    referer_starts_cfg: cdktf.listMapper(ddosTemplateHttpRefererFilterRefererStartsCfgToTerraform, true)(struct!.refererStartsCfg),
  }
}


export function ddosTemplateHttpRefererFilterToHclTerraform(struct?: DdosTemplateHttpRefererFilterOutputReference | DdosTemplateHttpRefererFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref_filter_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.refFilterBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    referer_contains_cfg: {
      value: cdktf.listMapperHcl(ddosTemplateHttpRefererFilterRefererContainsCfgToHclTerraform, true)(struct!.refererContainsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpRefererFilterRefererContainsCfgList",
    },
    referer_ends_cfg: {
      value: cdktf.listMapperHcl(ddosTemplateHttpRefererFilterRefererEndsCfgToHclTerraform, true)(struct!.refererEndsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpRefererFilterRefererEndsCfgList",
    },
    referer_equals_cfg: {
      value: cdktf.listMapperHcl(ddosTemplateHttpRefererFilterRefererEqualsCfgToHclTerraform, true)(struct!.refererEqualsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpRefererFilterRefererEqualsCfgList",
    },
    referer_starts_cfg: {
      value: cdktf.listMapperHcl(ddosTemplateHttpRefererFilterRefererStartsCfgToHclTerraform, true)(struct!.refererStartsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpRefererFilterRefererStartsCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpRefererFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpRefererFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refFilterBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.refFilterBlacklist = this._refFilterBlacklist;
    }
    if (this._refererContainsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererContainsCfg = this._refererContainsCfg?.internalValue;
    }
    if (this._refererEndsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererEndsCfg = this._refererEndsCfg?.internalValue;
    }
    if (this._refererEqualsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererEqualsCfg = this._refererEqualsCfg?.internalValue;
    }
    if (this._refererStartsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererStartsCfg = this._refererStartsCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpRefererFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refFilterBlacklist = undefined;
      this._refererContainsCfg.internalValue = undefined;
      this._refererEndsCfg.internalValue = undefined;
      this._refererEqualsCfg.internalValue = undefined;
      this._refererStartsCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refFilterBlacklist = value.refFilterBlacklist;
      this._refererContainsCfg.internalValue = value.refererContainsCfg;
      this._refererEndsCfg.internalValue = value.refererEndsCfg;
      this._refererEqualsCfg.internalValue = value.refererEqualsCfg;
      this._refererStartsCfg.internalValue = value.refererStartsCfg;
    }
  }

  // ref_filter_blacklist - computed: false, optional: true, required: false
  private _refFilterBlacklist?: number; 
  public get refFilterBlacklist() {
    return this.getNumberAttribute('ref_filter_blacklist');
  }
  public set refFilterBlacklist(value: number) {
    this._refFilterBlacklist = value;
  }
  public resetRefFilterBlacklist() {
    this._refFilterBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refFilterBlacklistInput() {
    return this._refFilterBlacklist;
  }

  // referer_contains_cfg - computed: false, optional: true, required: false
  private _refererContainsCfg = new DdosTemplateHttpRefererFilterRefererContainsCfgList(this, "referer_contains_cfg", false);
  public get refererContainsCfg() {
    return this._refererContainsCfg;
  }
  public putRefererContainsCfg(value: DdosTemplateHttpRefererFilterRefererContainsCfg[] | cdktf.IResolvable) {
    this._refererContainsCfg.internalValue = value;
  }
  public resetRefererContainsCfg() {
    this._refererContainsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererContainsCfgInput() {
    return this._refererContainsCfg.internalValue;
  }

  // referer_ends_cfg - computed: false, optional: true, required: false
  private _refererEndsCfg = new DdosTemplateHttpRefererFilterRefererEndsCfgList(this, "referer_ends_cfg", false);
  public get refererEndsCfg() {
    return this._refererEndsCfg;
  }
  public putRefererEndsCfg(value: DdosTemplateHttpRefererFilterRefererEndsCfg[] | cdktf.IResolvable) {
    this._refererEndsCfg.internalValue = value;
  }
  public resetRefererEndsCfg() {
    this._refererEndsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererEndsCfgInput() {
    return this._refererEndsCfg.internalValue;
  }

  // referer_equals_cfg - computed: false, optional: true, required: false
  private _refererEqualsCfg = new DdosTemplateHttpRefererFilterRefererEqualsCfgList(this, "referer_equals_cfg", false);
  public get refererEqualsCfg() {
    return this._refererEqualsCfg;
  }
  public putRefererEqualsCfg(value: DdosTemplateHttpRefererFilterRefererEqualsCfg[] | cdktf.IResolvable) {
    this._refererEqualsCfg.internalValue = value;
  }
  public resetRefererEqualsCfg() {
    this._refererEqualsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererEqualsCfgInput() {
    return this._refererEqualsCfg.internalValue;
  }

  // referer_starts_cfg - computed: false, optional: true, required: false
  private _refererStartsCfg = new DdosTemplateHttpRefererFilterRefererStartsCfgList(this, "referer_starts_cfg", false);
  public get refererStartsCfg() {
    return this._refererStartsCfg;
  }
  public putRefererStartsCfg(value: DdosTemplateHttpRefererFilterRefererStartsCfg[] | cdktf.IResolvable) {
    this._refererStartsCfg.internalValue = value;
  }
  public resetRefererStartsCfg() {
    this._refererStartsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererStartsCfgInput() {
    return this._refererStartsCfg.internalValue;
  }
}
export interface DdosTemplateHttpRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#timeout DdosTemplateHttp#timeout}
  */
  readonly timeout?: number;
}

export function ddosTemplateHttpRequestHeaderToTerraform(struct?: DdosTemplateHttpRequestHeaderOutputReference | DdosTemplateHttpRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function ddosTemplateHttpRequestHeaderToHclTerraform(struct?: DdosTemplateHttpRequestHeaderOutputReference | DdosTemplateHttpRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpRequestHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpRequestHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpRequestHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeout = value.timeout;
    }
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
}
export interface DdosTemplateHttpRequestRateLimitUriContainsCfg {
  /**
  * Request rate-limit HTTP URI containing a specified pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#url_contains DdosTemplateHttp#url_contains}
  */
  readonly urlContains?: string;
  /**
  * Request rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#url_contains_rate DdosTemplateHttp#url_contains_rate}
  */
  readonly urlContainsRate?: number;
}

export function ddosTemplateHttpRequestRateLimitUriContainsCfgToTerraform(struct?: DdosTemplateHttpRequestRateLimitUriContainsCfgOutputReference | DdosTemplateHttpRequestRateLimitUriContainsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_contains: cdktf.stringToTerraform(struct!.urlContains),
    url_contains_rate: cdktf.numberToTerraform(struct!.urlContainsRate),
  }
}


export function ddosTemplateHttpRequestRateLimitUriContainsCfgToHclTerraform(struct?: DdosTemplateHttpRequestRateLimitUriContainsCfgOutputReference | DdosTemplateHttpRequestRateLimitUriContainsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url_contains: {
      value: cdktf.stringToHclTerraform(struct!.urlContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_contains_rate: {
      value: cdktf.numberToHclTerraform(struct!.urlContainsRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpRequestRateLimitUriContainsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpRequestRateLimitUriContainsCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlContains = this._urlContains;
    }
    if (this._urlContainsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlContainsRate = this._urlContainsRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpRequestRateLimitUriContainsCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._urlContains = undefined;
      this._urlContainsRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._urlContains = value.urlContains;
      this._urlContainsRate = value.urlContainsRate;
    }
  }

  // url_contains - computed: false, optional: true, required: false
  private _urlContains?: string; 
  public get urlContains() {
    return this.getStringAttribute('url_contains');
  }
  public set urlContains(value: string) {
    this._urlContains = value;
  }
  public resetUrlContains() {
    this._urlContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlContainsInput() {
    return this._urlContains;
  }

  // url_contains_rate - computed: false, optional: true, required: false
  private _urlContainsRate?: number; 
  public get urlContainsRate() {
    return this.getNumberAttribute('url_contains_rate');
  }
  public set urlContainsRate(value: number) {
    this._urlContainsRate = value;
  }
  public resetUrlContainsRate() {
    this._urlContainsRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlContainsRateInput() {
    return this._urlContainsRate;
  }
}
export interface DdosTemplateHttpRequestRateLimitUriEndsCfg {
  /**
  * Request rate-limit HTTP URI ending with a specified pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#url_ends_with DdosTemplateHttp#url_ends_with}
  */
  readonly urlEndsWith?: string;
  /**
  * Request rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#url_ends_with_rate DdosTemplateHttp#url_ends_with_rate}
  */
  readonly urlEndsWithRate?: number;
}

export function ddosTemplateHttpRequestRateLimitUriEndsCfgToTerraform(struct?: DdosTemplateHttpRequestRateLimitUriEndsCfgOutputReference | DdosTemplateHttpRequestRateLimitUriEndsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_ends_with: cdktf.stringToTerraform(struct!.urlEndsWith),
    url_ends_with_rate: cdktf.numberToTerraform(struct!.urlEndsWithRate),
  }
}


export function ddosTemplateHttpRequestRateLimitUriEndsCfgToHclTerraform(struct?: DdosTemplateHttpRequestRateLimitUriEndsCfgOutputReference | DdosTemplateHttpRequestRateLimitUriEndsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.urlEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_ends_with_rate: {
      value: cdktf.numberToHclTerraform(struct!.urlEndsWithRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpRequestRateLimitUriEndsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpRequestRateLimitUriEndsCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlEndsWith = this._urlEndsWith;
    }
    if (this._urlEndsWithRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlEndsWithRate = this._urlEndsWithRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpRequestRateLimitUriEndsCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._urlEndsWith = undefined;
      this._urlEndsWithRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._urlEndsWith = value.urlEndsWith;
      this._urlEndsWithRate = value.urlEndsWithRate;
    }
  }

  // url_ends_with - computed: false, optional: true, required: false
  private _urlEndsWith?: string; 
  public get urlEndsWith() {
    return this.getStringAttribute('url_ends_with');
  }
  public set urlEndsWith(value: string) {
    this._urlEndsWith = value;
  }
  public resetUrlEndsWith() {
    this._urlEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlEndsWithInput() {
    return this._urlEndsWith;
  }

  // url_ends_with_rate - computed: false, optional: true, required: false
  private _urlEndsWithRate?: number; 
  public get urlEndsWithRate() {
    return this.getNumberAttribute('url_ends_with_rate');
  }
  public set urlEndsWithRate(value: number) {
    this._urlEndsWithRate = value;
  }
  public resetUrlEndsWithRate() {
    this._urlEndsWithRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlEndsWithRateInput() {
    return this._urlEndsWithRate;
  }
}
export interface DdosTemplateHttpRequestRateLimitUriEqualCfg {
  /**
  * Request rate-limit HTTP URI matching a specified pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#url_equals DdosTemplateHttp#url_equals}
  */
  readonly urlEquals?: string;
  /**
  * Request rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#url_equals_rate DdosTemplateHttp#url_equals_rate}
  */
  readonly urlEqualsRate?: number;
}

export function ddosTemplateHttpRequestRateLimitUriEqualCfgToTerraform(struct?: DdosTemplateHttpRequestRateLimitUriEqualCfgOutputReference | DdosTemplateHttpRequestRateLimitUriEqualCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_equals: cdktf.stringToTerraform(struct!.urlEquals),
    url_equals_rate: cdktf.numberToTerraform(struct!.urlEqualsRate),
  }
}


export function ddosTemplateHttpRequestRateLimitUriEqualCfgToHclTerraform(struct?: DdosTemplateHttpRequestRateLimitUriEqualCfgOutputReference | DdosTemplateHttpRequestRateLimitUriEqualCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url_equals: {
      value: cdktf.stringToHclTerraform(struct!.urlEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_equals_rate: {
      value: cdktf.numberToHclTerraform(struct!.urlEqualsRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpRequestRateLimitUriEqualCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpRequestRateLimitUriEqualCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlEquals = this._urlEquals;
    }
    if (this._urlEqualsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlEqualsRate = this._urlEqualsRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpRequestRateLimitUriEqualCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._urlEquals = undefined;
      this._urlEqualsRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._urlEquals = value.urlEquals;
      this._urlEqualsRate = value.urlEqualsRate;
    }
  }

  // url_equals - computed: false, optional: true, required: false
  private _urlEquals?: string; 
  public get urlEquals() {
    return this.getStringAttribute('url_equals');
  }
  public set urlEquals(value: string) {
    this._urlEquals = value;
  }
  public resetUrlEquals() {
    this._urlEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlEqualsInput() {
    return this._urlEquals;
  }

  // url_equals_rate - computed: false, optional: true, required: false
  private _urlEqualsRate?: number; 
  public get urlEqualsRate() {
    return this.getNumberAttribute('url_equals_rate');
  }
  public set urlEqualsRate(value: number) {
    this._urlEqualsRate = value;
  }
  public resetUrlEqualsRate() {
    this._urlEqualsRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlEqualsRateInput() {
    return this._urlEqualsRate;
  }
}
export interface DdosTemplateHttpRequestRateLimitUriStartsCfg {
  /**
  * Request rate-limit HTTP URI strting with a specified pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#url_starts_with DdosTemplateHttp#url_starts_with}
  */
  readonly urlStartsWith?: string;
  /**
  * Request rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#url_starts_with_rate DdosTemplateHttp#url_starts_with_rate}
  */
  readonly urlStartsWithRate?: number;
}

export function ddosTemplateHttpRequestRateLimitUriStartsCfgToTerraform(struct?: DdosTemplateHttpRequestRateLimitUriStartsCfgOutputReference | DdosTemplateHttpRequestRateLimitUriStartsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_starts_with: cdktf.stringToTerraform(struct!.urlStartsWith),
    url_starts_with_rate: cdktf.numberToTerraform(struct!.urlStartsWithRate),
  }
}


export function ddosTemplateHttpRequestRateLimitUriStartsCfgToHclTerraform(struct?: DdosTemplateHttpRequestRateLimitUriStartsCfgOutputReference | DdosTemplateHttpRequestRateLimitUriStartsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url_starts_with: {
      value: cdktf.stringToHclTerraform(struct!.urlStartsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_starts_with_rate: {
      value: cdktf.numberToHclTerraform(struct!.urlStartsWithRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpRequestRateLimitUriStartsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpRequestRateLimitUriStartsCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlStartsWith = this._urlStartsWith;
    }
    if (this._urlStartsWithRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlStartsWithRate = this._urlStartsWithRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpRequestRateLimitUriStartsCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._urlStartsWith = undefined;
      this._urlStartsWithRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._urlStartsWith = value.urlStartsWith;
      this._urlStartsWithRate = value.urlStartsWithRate;
    }
  }

  // url_starts_with - computed: false, optional: true, required: false
  private _urlStartsWith?: string; 
  public get urlStartsWith() {
    return this.getStringAttribute('url_starts_with');
  }
  public set urlStartsWith(value: string) {
    this._urlStartsWith = value;
  }
  public resetUrlStartsWith() {
    this._urlStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlStartsWithInput() {
    return this._urlStartsWith;
  }

  // url_starts_with_rate - computed: false, optional: true, required: false
  private _urlStartsWithRate?: number; 
  public get urlStartsWithRate() {
    return this.getNumberAttribute('url_starts_with_rate');
  }
  public set urlStartsWithRate(value: number) {
    this._urlStartsWithRate = value;
  }
  public resetUrlStartsWithRate() {
    this._urlStartsWithRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlStartsWithRateInput() {
    return this._urlStartsWithRate;
  }
}
export interface DdosTemplateHttpRequestRateLimitUri {
  /**
  * contains_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#contains_cfg DdosTemplateHttp#contains_cfg}
  */
  readonly containsCfg?: DdosTemplateHttpRequestRateLimitUriContainsCfg;
  /**
  * ends_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#ends_cfg DdosTemplateHttp#ends_cfg}
  */
  readonly endsCfg?: DdosTemplateHttpRequestRateLimitUriEndsCfg;
  /**
  * equal_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#equal_cfg DdosTemplateHttp#equal_cfg}
  */
  readonly equalCfg?: DdosTemplateHttpRequestRateLimitUriEqualCfg;
  /**
  * starts_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#starts_cfg DdosTemplateHttp#starts_cfg}
  */
  readonly startsCfg?: DdosTemplateHttpRequestRateLimitUriStartsCfg;
}

export function ddosTemplateHttpRequestRateLimitUriToTerraform(struct?: DdosTemplateHttpRequestRateLimitUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains_cfg: ddosTemplateHttpRequestRateLimitUriContainsCfgToTerraform(struct!.containsCfg),
    ends_cfg: ddosTemplateHttpRequestRateLimitUriEndsCfgToTerraform(struct!.endsCfg),
    equal_cfg: ddosTemplateHttpRequestRateLimitUriEqualCfgToTerraform(struct!.equalCfg),
    starts_cfg: ddosTemplateHttpRequestRateLimitUriStartsCfgToTerraform(struct!.startsCfg),
  }
}


export function ddosTemplateHttpRequestRateLimitUriToHclTerraform(struct?: DdosTemplateHttpRequestRateLimitUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains_cfg: {
      value: ddosTemplateHttpRequestRateLimitUriContainsCfgToHclTerraform(struct!.containsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpRequestRateLimitUriContainsCfgList",
    },
    ends_cfg: {
      value: ddosTemplateHttpRequestRateLimitUriEndsCfgToHclTerraform(struct!.endsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpRequestRateLimitUriEndsCfgList",
    },
    equal_cfg: {
      value: ddosTemplateHttpRequestRateLimitUriEqualCfgToHclTerraform(struct!.equalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpRequestRateLimitUriEqualCfgList",
    },
    starts_cfg: {
      value: ddosTemplateHttpRequestRateLimitUriStartsCfgToHclTerraform(struct!.startsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpRequestRateLimitUriStartsCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpRequestRateLimitUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateHttpRequestRateLimitUri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containsCfg = this._containsCfg?.internalValue;
    }
    if (this._endsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endsCfg = this._endsCfg?.internalValue;
    }
    if (this._equalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalCfg = this._equalCfg?.internalValue;
    }
    if (this._startsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsCfg = this._startsCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpRequestRateLimitUri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containsCfg.internalValue = undefined;
      this._endsCfg.internalValue = undefined;
      this._equalCfg.internalValue = undefined;
      this._startsCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containsCfg.internalValue = value.containsCfg;
      this._endsCfg.internalValue = value.endsCfg;
      this._equalCfg.internalValue = value.equalCfg;
      this._startsCfg.internalValue = value.startsCfg;
    }
  }

  // contains_cfg - computed: false, optional: true, required: false
  private _containsCfg = new DdosTemplateHttpRequestRateLimitUriContainsCfgOutputReference(this, "contains_cfg");
  public get containsCfg() {
    return this._containsCfg;
  }
  public putContainsCfg(value: DdosTemplateHttpRequestRateLimitUriContainsCfg) {
    this._containsCfg.internalValue = value;
  }
  public resetContainsCfg() {
    this._containsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsCfgInput() {
    return this._containsCfg.internalValue;
  }

  // ends_cfg - computed: false, optional: true, required: false
  private _endsCfg = new DdosTemplateHttpRequestRateLimitUriEndsCfgOutputReference(this, "ends_cfg");
  public get endsCfg() {
    return this._endsCfg;
  }
  public putEndsCfg(value: DdosTemplateHttpRequestRateLimitUriEndsCfg) {
    this._endsCfg.internalValue = value;
  }
  public resetEndsCfg() {
    this._endsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsCfgInput() {
    return this._endsCfg.internalValue;
  }

  // equal_cfg - computed: false, optional: true, required: false
  private _equalCfg = new DdosTemplateHttpRequestRateLimitUriEqualCfgOutputReference(this, "equal_cfg");
  public get equalCfg() {
    return this._equalCfg;
  }
  public putEqualCfg(value: DdosTemplateHttpRequestRateLimitUriEqualCfg) {
    this._equalCfg.internalValue = value;
  }
  public resetEqualCfg() {
    this._equalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalCfgInput() {
    return this._equalCfg.internalValue;
  }

  // starts_cfg - computed: false, optional: true, required: false
  private _startsCfg = new DdosTemplateHttpRequestRateLimitUriStartsCfgOutputReference(this, "starts_cfg");
  public get startsCfg() {
    return this._startsCfg;
  }
  public putStartsCfg(value: DdosTemplateHttpRequestRateLimitUriStartsCfg) {
    this._startsCfg.internalValue = value;
  }
  public resetStartsCfg() {
    this._startsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsCfgInput() {
    return this._startsCfg.internalValue;
  }
}

export class DdosTemplateHttpRequestRateLimitUriList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateHttpRequestRateLimitUri[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateHttpRequestRateLimitUriOutputReference {
    return new DdosTemplateHttpRequestRateLimitUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateHttpRequestRateLimit {
  /**
  * HTTP request rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#request_rate DdosTemplateHttp#request_rate}
  */
  readonly requestRate?: number;
  /**
  * uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#uri DdosTemplateHttp#uri}
  */
  readonly uri?: DdosTemplateHttpRequestRateLimitUri[] | cdktf.IResolvable;
}

export function ddosTemplateHttpRequestRateLimitToTerraform(struct?: DdosTemplateHttpRequestRateLimitOutputReference | DdosTemplateHttpRequestRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_rate: cdktf.numberToTerraform(struct!.requestRate),
    uri: cdktf.listMapper(ddosTemplateHttpRequestRateLimitUriToTerraform, true)(struct!.uri),
  }
}


export function ddosTemplateHttpRequestRateLimitToHclTerraform(struct?: DdosTemplateHttpRequestRateLimitOutputReference | DdosTemplateHttpRequestRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_rate: {
      value: cdktf.numberToHclTerraform(struct!.requestRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uri: {
      value: cdktf.listMapperHcl(ddosTemplateHttpRequestRateLimitUriToHclTerraform, true)(struct!.uri),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpRequestRateLimitUriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpRequestRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpRequestRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestRate = this._requestRate;
    }
    if (this._uri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpRequestRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestRate = undefined;
      this._uri.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestRate = value.requestRate;
      this._uri.internalValue = value.uri;
    }
  }

  // request_rate - computed: false, optional: true, required: false
  private _requestRate?: number; 
  public get requestRate() {
    return this.getNumberAttribute('request_rate');
  }
  public set requestRate(value: number) {
    this._requestRate = value;
  }
  public resetRequestRate() {
    this._requestRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRateInput() {
    return this._requestRate;
  }

  // uri - computed: false, optional: true, required: false
  private _uri = new DdosTemplateHttpRequestRateLimitUriList(this, "uri", false);
  public get uri() {
    return this._uri;
  }
  public putUri(value: DdosTemplateHttpRequestRateLimitUri[] | cdktf.IResolvable) {
    this._uri.internalValue = value;
  }
  public resetUri() {
    this._uri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri.internalValue;
  }
}
export interface DdosTemplateHttpResponseRateLimitObjSizeBetweenCfg {
  /**
  * Response size configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#obj_between1 DdosTemplateHttp#obj_between1}
  */
  readonly objBetween1?: number;
  /**
  * Response size configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#obj_between2 DdosTemplateHttp#obj_between2}
  */
  readonly objBetween2?: number;
  /**
  * Response rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#obj_between_rate DdosTemplateHttp#obj_between_rate}
  */
  readonly objBetweenRate?: number;
}

export function ddosTemplateHttpResponseRateLimitObjSizeBetweenCfgToTerraform(struct?: DdosTemplateHttpResponseRateLimitObjSizeBetweenCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    obj_between1: cdktf.numberToTerraform(struct!.objBetween1),
    obj_between2: cdktf.numberToTerraform(struct!.objBetween2),
    obj_between_rate: cdktf.numberToTerraform(struct!.objBetweenRate),
  }
}


export function ddosTemplateHttpResponseRateLimitObjSizeBetweenCfgToHclTerraform(struct?: DdosTemplateHttpResponseRateLimitObjSizeBetweenCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    obj_between1: {
      value: cdktf.numberToHclTerraform(struct!.objBetween1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_between2: {
      value: cdktf.numberToHclTerraform(struct!.objBetween2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_between_rate: {
      value: cdktf.numberToHclTerraform(struct!.objBetweenRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpResponseRateLimitObjSizeBetweenCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateHttpResponseRateLimitObjSizeBetweenCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objBetween1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.objBetween1 = this._objBetween1;
    }
    if (this._objBetween2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.objBetween2 = this._objBetween2;
    }
    if (this._objBetweenRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.objBetweenRate = this._objBetweenRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpResponseRateLimitObjSizeBetweenCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objBetween1 = undefined;
      this._objBetween2 = undefined;
      this._objBetweenRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objBetween1 = value.objBetween1;
      this._objBetween2 = value.objBetween2;
      this._objBetweenRate = value.objBetweenRate;
    }
  }

  // obj_between1 - computed: false, optional: true, required: false
  private _objBetween1?: number; 
  public get objBetween1() {
    return this.getNumberAttribute('obj_between1');
  }
  public set objBetween1(value: number) {
    this._objBetween1 = value;
  }
  public resetObjBetween1() {
    this._objBetween1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objBetween1Input() {
    return this._objBetween1;
  }

  // obj_between2 - computed: false, optional: true, required: false
  private _objBetween2?: number; 
  public get objBetween2() {
    return this.getNumberAttribute('obj_between2');
  }
  public set objBetween2(value: number) {
    this._objBetween2 = value;
  }
  public resetObjBetween2() {
    this._objBetween2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objBetween2Input() {
    return this._objBetween2;
  }

  // obj_between_rate - computed: false, optional: true, required: false
  private _objBetweenRate?: number; 
  public get objBetweenRate() {
    return this.getNumberAttribute('obj_between_rate');
  }
  public set objBetweenRate(value: number) {
    this._objBetweenRate = value;
  }
  public resetObjBetweenRate() {
    this._objBetweenRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objBetweenRateInput() {
    return this._objBetweenRate;
  }
}

export class DdosTemplateHttpResponseRateLimitObjSizeBetweenCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateHttpResponseRateLimitObjSizeBetweenCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateHttpResponseRateLimitObjSizeBetweenCfgOutputReference {
    return new DdosTemplateHttpResponseRateLimitObjSizeBetweenCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateHttpResponseRateLimitObjSizeGreaterCfg {
  /**
  * Response size configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#obj_greater DdosTemplateHttp#obj_greater}
  */
  readonly objGreater?: number;
  /**
  * Response rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#obj_greater_rate DdosTemplateHttp#obj_greater_rate}
  */
  readonly objGreaterRate?: number;
}

export function ddosTemplateHttpResponseRateLimitObjSizeGreaterCfgToTerraform(struct?: DdosTemplateHttpResponseRateLimitObjSizeGreaterCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    obj_greater: cdktf.numberToTerraform(struct!.objGreater),
    obj_greater_rate: cdktf.numberToTerraform(struct!.objGreaterRate),
  }
}


export function ddosTemplateHttpResponseRateLimitObjSizeGreaterCfgToHclTerraform(struct?: DdosTemplateHttpResponseRateLimitObjSizeGreaterCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    obj_greater: {
      value: cdktf.numberToHclTerraform(struct!.objGreater),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_greater_rate: {
      value: cdktf.numberToHclTerraform(struct!.objGreaterRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpResponseRateLimitObjSizeGreaterCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateHttpResponseRateLimitObjSizeGreaterCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objGreater !== undefined) {
      hasAnyValues = true;
      internalValueResult.objGreater = this._objGreater;
    }
    if (this._objGreaterRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.objGreaterRate = this._objGreaterRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpResponseRateLimitObjSizeGreaterCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objGreater = undefined;
      this._objGreaterRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objGreater = value.objGreater;
      this._objGreaterRate = value.objGreaterRate;
    }
  }

  // obj_greater - computed: false, optional: true, required: false
  private _objGreater?: number; 
  public get objGreater() {
    return this.getNumberAttribute('obj_greater');
  }
  public set objGreater(value: number) {
    this._objGreater = value;
  }
  public resetObjGreater() {
    this._objGreater = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objGreaterInput() {
    return this._objGreater;
  }

  // obj_greater_rate - computed: false, optional: true, required: false
  private _objGreaterRate?: number; 
  public get objGreaterRate() {
    return this.getNumberAttribute('obj_greater_rate');
  }
  public set objGreaterRate(value: number) {
    this._objGreaterRate = value;
  }
  public resetObjGreaterRate() {
    this._objGreaterRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objGreaterRateInput() {
    return this._objGreaterRate;
  }
}

export class DdosTemplateHttpResponseRateLimitObjSizeGreaterCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateHttpResponseRateLimitObjSizeGreaterCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateHttpResponseRateLimitObjSizeGreaterCfgOutputReference {
    return new DdosTemplateHttpResponseRateLimitObjSizeGreaterCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateHttpResponseRateLimitObjSizeLessCfg {
  /**
  * Response size configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#obj_less DdosTemplateHttp#obj_less}
  */
  readonly objLess?: number;
  /**
  * Response rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#obj_less_rate DdosTemplateHttp#obj_less_rate}
  */
  readonly objLessRate?: number;
}

export function ddosTemplateHttpResponseRateLimitObjSizeLessCfgToTerraform(struct?: DdosTemplateHttpResponseRateLimitObjSizeLessCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    obj_less: cdktf.numberToTerraform(struct!.objLess),
    obj_less_rate: cdktf.numberToTerraform(struct!.objLessRate),
  }
}


export function ddosTemplateHttpResponseRateLimitObjSizeLessCfgToHclTerraform(struct?: DdosTemplateHttpResponseRateLimitObjSizeLessCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    obj_less: {
      value: cdktf.numberToHclTerraform(struct!.objLess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_less_rate: {
      value: cdktf.numberToHclTerraform(struct!.objLessRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpResponseRateLimitObjSizeLessCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateHttpResponseRateLimitObjSizeLessCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objLess !== undefined) {
      hasAnyValues = true;
      internalValueResult.objLess = this._objLess;
    }
    if (this._objLessRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.objLessRate = this._objLessRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpResponseRateLimitObjSizeLessCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objLess = undefined;
      this._objLessRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objLess = value.objLess;
      this._objLessRate = value.objLessRate;
    }
  }

  // obj_less - computed: false, optional: true, required: false
  private _objLess?: number; 
  public get objLess() {
    return this.getNumberAttribute('obj_less');
  }
  public set objLess(value: number) {
    this._objLess = value;
  }
  public resetObjLess() {
    this._objLess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objLessInput() {
    return this._objLess;
  }

  // obj_less_rate - computed: false, optional: true, required: false
  private _objLessRate?: number; 
  public get objLessRate() {
    return this.getNumberAttribute('obj_less_rate');
  }
  public set objLessRate(value: number) {
    this._objLessRate = value;
  }
  public resetObjLessRate() {
    this._objLessRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objLessRateInput() {
    return this._objLessRate;
  }
}

export class DdosTemplateHttpResponseRateLimitObjSizeLessCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateHttpResponseRateLimitObjSizeLessCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateHttpResponseRateLimitObjSizeLessCfgOutputReference {
    return new DdosTemplateHttpResponseRateLimitObjSizeLessCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateHttpResponseRateLimitObjSize {
  /**
  * between_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#between_cfg DdosTemplateHttp#between_cfg}
  */
  readonly betweenCfg?: DdosTemplateHttpResponseRateLimitObjSizeBetweenCfg[] | cdktf.IResolvable;
  /**
  * greater_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#greater_cfg DdosTemplateHttp#greater_cfg}
  */
  readonly greaterCfg?: DdosTemplateHttpResponseRateLimitObjSizeGreaterCfg[] | cdktf.IResolvable;
  /**
  * less_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#less_cfg DdosTemplateHttp#less_cfg}
  */
  readonly lessCfg?: DdosTemplateHttpResponseRateLimitObjSizeLessCfg[] | cdktf.IResolvable;
}

export function ddosTemplateHttpResponseRateLimitObjSizeToTerraform(struct?: DdosTemplateHttpResponseRateLimitObjSizeOutputReference | DdosTemplateHttpResponseRateLimitObjSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    between_cfg: cdktf.listMapper(ddosTemplateHttpResponseRateLimitObjSizeBetweenCfgToTerraform, true)(struct!.betweenCfg),
    greater_cfg: cdktf.listMapper(ddosTemplateHttpResponseRateLimitObjSizeGreaterCfgToTerraform, true)(struct!.greaterCfg),
    less_cfg: cdktf.listMapper(ddosTemplateHttpResponseRateLimitObjSizeLessCfgToTerraform, true)(struct!.lessCfg),
  }
}


export function ddosTemplateHttpResponseRateLimitObjSizeToHclTerraform(struct?: DdosTemplateHttpResponseRateLimitObjSizeOutputReference | DdosTemplateHttpResponseRateLimitObjSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    between_cfg: {
      value: cdktf.listMapperHcl(ddosTemplateHttpResponseRateLimitObjSizeBetweenCfgToHclTerraform, true)(struct!.betweenCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpResponseRateLimitObjSizeBetweenCfgList",
    },
    greater_cfg: {
      value: cdktf.listMapperHcl(ddosTemplateHttpResponseRateLimitObjSizeGreaterCfgToHclTerraform, true)(struct!.greaterCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpResponseRateLimitObjSizeGreaterCfgList",
    },
    less_cfg: {
      value: cdktf.listMapperHcl(ddosTemplateHttpResponseRateLimitObjSizeLessCfgToHclTerraform, true)(struct!.lessCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpResponseRateLimitObjSizeLessCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpResponseRateLimitObjSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpResponseRateLimitObjSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenCfg = this._betweenCfg?.internalValue;
    }
    if (this._greaterCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterCfg = this._greaterCfg?.internalValue;
    }
    if (this._lessCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessCfg = this._lessCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpResponseRateLimitObjSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._betweenCfg.internalValue = undefined;
      this._greaterCfg.internalValue = undefined;
      this._lessCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._betweenCfg.internalValue = value.betweenCfg;
      this._greaterCfg.internalValue = value.greaterCfg;
      this._lessCfg.internalValue = value.lessCfg;
    }
  }

  // between_cfg - computed: false, optional: true, required: false
  private _betweenCfg = new DdosTemplateHttpResponseRateLimitObjSizeBetweenCfgList(this, "between_cfg", false);
  public get betweenCfg() {
    return this._betweenCfg;
  }
  public putBetweenCfg(value: DdosTemplateHttpResponseRateLimitObjSizeBetweenCfg[] | cdktf.IResolvable) {
    this._betweenCfg.internalValue = value;
  }
  public resetBetweenCfg() {
    this._betweenCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenCfgInput() {
    return this._betweenCfg.internalValue;
  }

  // greater_cfg - computed: false, optional: true, required: false
  private _greaterCfg = new DdosTemplateHttpResponseRateLimitObjSizeGreaterCfgList(this, "greater_cfg", false);
  public get greaterCfg() {
    return this._greaterCfg;
  }
  public putGreaterCfg(value: DdosTemplateHttpResponseRateLimitObjSizeGreaterCfg[] | cdktf.IResolvable) {
    this._greaterCfg.internalValue = value;
  }
  public resetGreaterCfg() {
    this._greaterCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterCfgInput() {
    return this._greaterCfg.internalValue;
  }

  // less_cfg - computed: false, optional: true, required: false
  private _lessCfg = new DdosTemplateHttpResponseRateLimitObjSizeLessCfgList(this, "less_cfg", false);
  public get lessCfg() {
    return this._lessCfg;
  }
  public putLessCfg(value: DdosTemplateHttpResponseRateLimitObjSizeLessCfg[] | cdktf.IResolvable) {
    this._lessCfg.internalValue = value;
  }
  public resetLessCfg() {
    this._lessCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessCfgInput() {
    return this._lessCfg.internalValue;
  }
}
export interface DdosTemplateHttpResponseRateLimit {
  /**
  * obj_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#obj_size DdosTemplateHttp#obj_size}
  */
  readonly objSize?: DdosTemplateHttpResponseRateLimitObjSize;
}

export function ddosTemplateHttpResponseRateLimitToTerraform(struct?: DdosTemplateHttpResponseRateLimitOutputReference | DdosTemplateHttpResponseRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    obj_size: ddosTemplateHttpResponseRateLimitObjSizeToTerraform(struct!.objSize),
  }
}


export function ddosTemplateHttpResponseRateLimitToHclTerraform(struct?: DdosTemplateHttpResponseRateLimitOutputReference | DdosTemplateHttpResponseRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    obj_size: {
      value: ddosTemplateHttpResponseRateLimitObjSizeToHclTerraform(struct!.objSize),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateHttpResponseRateLimitObjSizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpResponseRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpResponseRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objSize = this._objSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpResponseRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objSize.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objSize.internalValue = value.objSize;
    }
  }

  // obj_size - computed: false, optional: true, required: false
  private _objSize = new DdosTemplateHttpResponseRateLimitObjSizeOutputReference(this, "obj_size");
  public get objSize() {
    return this._objSize;
  }
  public putObjSize(value: DdosTemplateHttpResponseRateLimitObjSize) {
    this._objSize.internalValue = value;
  }
  public resetObjSize() {
    this._objSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objSizeInput() {
    return this._objSize.internalValue;
  }
}
export interface DdosTemplateHttpSlowReadDrop {
  /**
  * Number of packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#min_window_count DdosTemplateHttp#min_window_count}
  */
  readonly minWindowCount?: number;
  /**
  * minimum window size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#min_window_size DdosTemplateHttp#min_window_size}
  */
  readonly minWindowSize?: number;
}

export function ddosTemplateHttpSlowReadDropToTerraform(struct?: DdosTemplateHttpSlowReadDropOutputReference | DdosTemplateHttpSlowReadDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_window_count: cdktf.numberToTerraform(struct!.minWindowCount),
    min_window_size: cdktf.numberToTerraform(struct!.minWindowSize),
  }
}


export function ddosTemplateHttpSlowReadDropToHclTerraform(struct?: DdosTemplateHttpSlowReadDropOutputReference | DdosTemplateHttpSlowReadDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_window_count: {
      value: cdktf.numberToHclTerraform(struct!.minWindowCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_window_size: {
      value: cdktf.numberToHclTerraform(struct!.minWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpSlowReadDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpSlowReadDrop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minWindowCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWindowCount = this._minWindowCount;
    }
    if (this._minWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWindowSize = this._minWindowSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpSlowReadDrop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minWindowCount = undefined;
      this._minWindowSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minWindowCount = value.minWindowCount;
      this._minWindowSize = value.minWindowSize;
    }
  }

  // min_window_count - computed: false, optional: true, required: false
  private _minWindowCount?: number; 
  public get minWindowCount() {
    return this.getNumberAttribute('min_window_count');
  }
  public set minWindowCount(value: number) {
    this._minWindowCount = value;
  }
  public resetMinWindowCount() {
    this._minWindowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWindowCountInput() {
    return this._minWindowCount;
  }

  // min_window_size - computed: false, optional: true, required: false
  private _minWindowSize?: number; 
  public get minWindowSize() {
    return this.getNumberAttribute('min_window_size');
  }
  public set minWindowSize(value: number) {
    this._minWindowSize = value;
  }
  public resetMinWindowSize() {
    this._minWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWindowSizeInput() {
    return this._minWindowSize;
  }
}
export interface DdosTemplateHttpUseHdrIpCfg {
  /**
  * Set the http header name to parse for client ip. Default is X-Forwarded-For
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#l7_hdr_name DdosTemplateHttp#l7_hdr_name}
  */
  readonly l7HdrName?: string;
  /**
  * Mitigate on src ip specified by http header for example X-Forwarded-For header. Default is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#use_hdr_ip_as_source DdosTemplateHttp#use_hdr_ip_as_source}
  */
  readonly useHdrIpAsSource?: number;
}

export function ddosTemplateHttpUseHdrIpCfgToTerraform(struct?: DdosTemplateHttpUseHdrIpCfgOutputReference | DdosTemplateHttpUseHdrIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l7_hdr_name: cdktf.stringToTerraform(struct!.l7HdrName),
    use_hdr_ip_as_source: cdktf.numberToTerraform(struct!.useHdrIpAsSource),
  }
}


export function ddosTemplateHttpUseHdrIpCfgToHclTerraform(struct?: DdosTemplateHttpUseHdrIpCfgOutputReference | DdosTemplateHttpUseHdrIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l7_hdr_name: {
      value: cdktf.stringToHclTerraform(struct!.l7HdrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_hdr_ip_as_source: {
      value: cdktf.numberToHclTerraform(struct!.useHdrIpAsSource),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateHttpUseHdrIpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateHttpUseHdrIpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l7HdrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7HdrName = this._l7HdrName;
    }
    if (this._useHdrIpAsSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHdrIpAsSource = this._useHdrIpAsSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateHttpUseHdrIpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._l7HdrName = undefined;
      this._useHdrIpAsSource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._l7HdrName = value.l7HdrName;
      this._useHdrIpAsSource = value.useHdrIpAsSource;
    }
  }

  // l7_hdr_name - computed: false, optional: true, required: false
  private _l7HdrName?: string; 
  public get l7HdrName() {
    return this.getStringAttribute('l7_hdr_name');
  }
  public set l7HdrName(value: string) {
    this._l7HdrName = value;
  }
  public resetL7HdrName() {
    this._l7HdrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7HdrNameInput() {
    return this._l7HdrName;
  }

  // use_hdr_ip_as_source - computed: false, optional: true, required: false
  private _useHdrIpAsSource?: number; 
  public get useHdrIpAsSource() {
    return this.getNumberAttribute('use_hdr_ip_as_source');
  }
  public set useHdrIpAsSource(value: number) {
    this._useHdrIpAsSource = value;
  }
  public resetUseHdrIpAsSource() {
    this._useHdrIpAsSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHdrIpAsSourceInput() {
    return this._useHdrIpAsSource;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http thunder_ddos_template_http}
*/
export class DdosTemplateHttp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_http";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateHttp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateHttp to import
  * @param importFromId The id of the existing DdosTemplateHttp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateHttp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_http", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_http thunder_ddos_template_http} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateHttpConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateHttpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_http',
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
    this._challengeCookieName = config.challengeCookieName;
    this._challengeInterval = config.challengeInterval;
    this._challengeKeepCookie = config.challengeKeepCookie;
    this._challengeMethod = config.challengeMethod;
    this._challengeRedirectCode = config.challengeRedirectCode;
    this._challengeUriEncode = config.challengeUriEncode;
    this._disable = config.disable;
    this._disallowConnectMethod = config.disallowConnectMethod;
    this._httpTmplName = config.httpTmplName;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._ignoreZeroPayload = config.ignoreZeroPayload;
    this._nonHttpBypass = config.nonHttpBypass;
    this._outOfOrderQueueSize = config.outOfOrderQueueSize;
    this._outOfOrderQueueTimeout = config.outOfOrderQueueTimeout;
    this._postRateLimit = config.postRateLimit;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._agentFilter.internalValue = config.agentFilter;
    this._filterHeaderList.internalValue = config.filterHeaderList;
    this._malformedHttp.internalValue = config.malformedHttp;
    this._mssCfg.internalValue = config.mssCfg;
    this._multiPuThresholdDistribution.internalValue = config.multiPuThresholdDistribution;
    this._refererFilter.internalValue = config.refererFilter;
    this._requestHeader.internalValue = config.requestHeader;
    this._requestRateLimit.internalValue = config.requestRateLimit;
    this._responseRateLimit.internalValue = config.responseRateLimit;
    this._slowReadDrop.internalValue = config.slowReadDrop;
    this._useHdrIpCfg.internalValue = config.useHdrIpCfg;
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

  // challenge_cookie_name - computed: false, optional: true, required: false
  private _challengeCookieName?: string; 
  public get challengeCookieName() {
    return this.getStringAttribute('challenge_cookie_name');
  }
  public set challengeCookieName(value: string) {
    this._challengeCookieName = value;
  }
  public resetChallengeCookieName() {
    this._challengeCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeCookieNameInput() {
    return this._challengeCookieName;
  }

  // challenge_interval - computed: false, optional: true, required: false
  private _challengeInterval?: number; 
  public get challengeInterval() {
    return this.getNumberAttribute('challenge_interval');
  }
  public set challengeInterval(value: number) {
    this._challengeInterval = value;
  }
  public resetChallengeInterval() {
    this._challengeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeIntervalInput() {
    return this._challengeInterval;
  }

  // challenge_keep_cookie - computed: false, optional: true, required: false
  private _challengeKeepCookie?: number; 
  public get challengeKeepCookie() {
    return this.getNumberAttribute('challenge_keep_cookie');
  }
  public set challengeKeepCookie(value: number) {
    this._challengeKeepCookie = value;
  }
  public resetChallengeKeepCookie() {
    this._challengeKeepCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeKeepCookieInput() {
    return this._challengeKeepCookie;
  }

  // challenge_method - computed: false, optional: true, required: false
  private _challengeMethod?: string; 
  public get challengeMethod() {
    return this.getStringAttribute('challenge_method');
  }
  public set challengeMethod(value: string) {
    this._challengeMethod = value;
  }
  public resetChallengeMethod() {
    this._challengeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeMethodInput() {
    return this._challengeMethod;
  }

  // challenge_redirect_code - computed: false, optional: true, required: false
  private _challengeRedirectCode?: string; 
  public get challengeRedirectCode() {
    return this.getStringAttribute('challenge_redirect_code');
  }
  public set challengeRedirectCode(value: string) {
    this._challengeRedirectCode = value;
  }
  public resetChallengeRedirectCode() {
    this._challengeRedirectCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeRedirectCodeInput() {
    return this._challengeRedirectCode;
  }

  // challenge_uri_encode - computed: false, optional: true, required: false
  private _challengeUriEncode?: number; 
  public get challengeUriEncode() {
    return this.getNumberAttribute('challenge_uri_encode');
  }
  public set challengeUriEncode(value: number) {
    this._challengeUriEncode = value;
  }
  public resetChallengeUriEncode() {
    this._challengeUriEncode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeUriEncodeInput() {
    return this._challengeUriEncode;
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

  // disallow_connect_method - computed: false, optional: true, required: false
  private _disallowConnectMethod?: number; 
  public get disallowConnectMethod() {
    return this.getNumberAttribute('disallow_connect_method');
  }
  public set disallowConnectMethod(value: number) {
    this._disallowConnectMethod = value;
  }
  public resetDisallowConnectMethod() {
    this._disallowConnectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowConnectMethodInput() {
    return this._disallowConnectMethod;
  }

  // http_tmpl_name - computed: false, optional: false, required: true
  private _httpTmplName?: string; 
  public get httpTmplName() {
    return this.getStringAttribute('http_tmpl_name');
  }
  public set httpTmplName(value: string) {
    this._httpTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTmplNameInput() {
    return this._httpTmplName;
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

  // ignore_zero_payload - computed: false, optional: true, required: false
  private _ignoreZeroPayload?: number; 
  public get ignoreZeroPayload() {
    return this.getNumberAttribute('ignore_zero_payload');
  }
  public set ignoreZeroPayload(value: number) {
    this._ignoreZeroPayload = value;
  }
  public resetIgnoreZeroPayload() {
    this._ignoreZeroPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreZeroPayloadInput() {
    return this._ignoreZeroPayload;
  }

  // non_http_bypass - computed: false, optional: true, required: false
  private _nonHttpBypass?: number; 
  public get nonHttpBypass() {
    return this.getNumberAttribute('non_http_bypass');
  }
  public set nonHttpBypass(value: number) {
    this._nonHttpBypass = value;
  }
  public resetNonHttpBypass() {
    this._nonHttpBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonHttpBypassInput() {
    return this._nonHttpBypass;
  }

  // out_of_order_queue_size - computed: false, optional: true, required: false
  private _outOfOrderQueueSize?: number; 
  public get outOfOrderQueueSize() {
    return this.getNumberAttribute('out_of_order_queue_size');
  }
  public set outOfOrderQueueSize(value: number) {
    this._outOfOrderQueueSize = value;
  }
  public resetOutOfOrderQueueSize() {
    this._outOfOrderQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfOrderQueueSizeInput() {
    return this._outOfOrderQueueSize;
  }

  // out_of_order_queue_timeout - computed: false, optional: true, required: false
  private _outOfOrderQueueTimeout?: number; 
  public get outOfOrderQueueTimeout() {
    return this.getNumberAttribute('out_of_order_queue_timeout');
  }
  public set outOfOrderQueueTimeout(value: number) {
    this._outOfOrderQueueTimeout = value;
  }
  public resetOutOfOrderQueueTimeout() {
    this._outOfOrderQueueTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfOrderQueueTimeoutInput() {
    return this._outOfOrderQueueTimeout;
  }

  // post_rate_limit - computed: false, optional: true, required: false
  private _postRateLimit?: number; 
  public get postRateLimit() {
    return this.getNumberAttribute('post_rate_limit');
  }
  public set postRateLimit(value: number) {
    this._postRateLimit = value;
  }
  public resetPostRateLimit() {
    this._postRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postRateLimitInput() {
    return this._postRateLimit;
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

  // agent_filter - computed: false, optional: true, required: false
  private _agentFilter = new DdosTemplateHttpAgentFilterOutputReference(this, "agent_filter");
  public get agentFilter() {
    return this._agentFilter;
  }
  public putAgentFilter(value: DdosTemplateHttpAgentFilter) {
    this._agentFilter.internalValue = value;
  }
  public resetAgentFilter() {
    this._agentFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentFilterInput() {
    return this._agentFilter.internalValue;
  }

  // filter_header_list - computed: false, optional: true, required: false
  private _filterHeaderList = new DdosTemplateHttpFilterHeaderListStructList(this, "filter_header_list", false);
  public get filterHeaderList() {
    return this._filterHeaderList;
  }
  public putFilterHeaderList(value: DdosTemplateHttpFilterHeaderListStruct[] | cdktf.IResolvable) {
    this._filterHeaderList.internalValue = value;
  }
  public resetFilterHeaderList() {
    this._filterHeaderList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterHeaderListInput() {
    return this._filterHeaderList.internalValue;
  }

  // malformed_http - computed: false, optional: true, required: false
  private _malformedHttp = new DdosTemplateHttpMalformedHttpOutputReference(this, "malformed_http");
  public get malformedHttp() {
    return this._malformedHttp;
  }
  public putMalformedHttp(value: DdosTemplateHttpMalformedHttp) {
    this._malformedHttp.internalValue = value;
  }
  public resetMalformedHttp() {
    this._malformedHttp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpInput() {
    return this._malformedHttp.internalValue;
  }

  // mss_cfg - computed: false, optional: true, required: false
  private _mssCfg = new DdosTemplateHttpMssCfgOutputReference(this, "mss_cfg");
  public get mssCfg() {
    return this._mssCfg;
  }
  public putMssCfg(value: DdosTemplateHttpMssCfg) {
    this._mssCfg.internalValue = value;
  }
  public resetMssCfg() {
    this._mssCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssCfgInput() {
    return this._mssCfg.internalValue;
  }

  // multi_pu_threshold_distribution - computed: false, optional: true, required: false
  private _multiPuThresholdDistribution = new DdosTemplateHttpMultiPuThresholdDistributionOutputReference(this, "multi_pu_threshold_distribution");
  public get multiPuThresholdDistribution() {
    return this._multiPuThresholdDistribution;
  }
  public putMultiPuThresholdDistribution(value: DdosTemplateHttpMultiPuThresholdDistribution) {
    this._multiPuThresholdDistribution.internalValue = value;
  }
  public resetMultiPuThresholdDistribution() {
    this._multiPuThresholdDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionInput() {
    return this._multiPuThresholdDistribution.internalValue;
  }

  // referer_filter - computed: false, optional: true, required: false
  private _refererFilter = new DdosTemplateHttpRefererFilterOutputReference(this, "referer_filter");
  public get refererFilter() {
    return this._refererFilter;
  }
  public putRefererFilter(value: DdosTemplateHttpRefererFilter) {
    this._refererFilter.internalValue = value;
  }
  public resetRefererFilter() {
    this._refererFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererFilterInput() {
    return this._refererFilter.internalValue;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new DdosTemplateHttpRequestHeaderOutputReference(this, "request_header");
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: DdosTemplateHttpRequestHeader) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // request_rate_limit - computed: false, optional: true, required: false
  private _requestRateLimit = new DdosTemplateHttpRequestRateLimitOutputReference(this, "request_rate_limit");
  public get requestRateLimit() {
    return this._requestRateLimit;
  }
  public putRequestRateLimit(value: DdosTemplateHttpRequestRateLimit) {
    this._requestRateLimit.internalValue = value;
  }
  public resetRequestRateLimit() {
    this._requestRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRateLimitInput() {
    return this._requestRateLimit.internalValue;
  }

  // response_rate_limit - computed: false, optional: true, required: false
  private _responseRateLimit = new DdosTemplateHttpResponseRateLimitOutputReference(this, "response_rate_limit");
  public get responseRateLimit() {
    return this._responseRateLimit;
  }
  public putResponseRateLimit(value: DdosTemplateHttpResponseRateLimit) {
    this._responseRateLimit.internalValue = value;
  }
  public resetResponseRateLimit() {
    this._responseRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseRateLimitInput() {
    return this._responseRateLimit.internalValue;
  }

  // slow_read_drop - computed: false, optional: true, required: false
  private _slowReadDrop = new DdosTemplateHttpSlowReadDropOutputReference(this, "slow_read_drop");
  public get slowReadDrop() {
    return this._slowReadDrop;
  }
  public putSlowReadDrop(value: DdosTemplateHttpSlowReadDrop) {
    this._slowReadDrop.internalValue = value;
  }
  public resetSlowReadDrop() {
    this._slowReadDrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowReadDropInput() {
    return this._slowReadDrop.internalValue;
  }

  // use_hdr_ip_cfg - computed: false, optional: true, required: false
  private _useHdrIpCfg = new DdosTemplateHttpUseHdrIpCfgOutputReference(this, "use_hdr_ip_cfg");
  public get useHdrIpCfg() {
    return this._useHdrIpCfg;
  }
  public putUseHdrIpCfg(value: DdosTemplateHttpUseHdrIpCfg) {
    this._useHdrIpCfg.internalValue = value;
  }
  public resetUseHdrIpCfg() {
    this._useHdrIpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHdrIpCfgInput() {
    return this._useHdrIpCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      challenge_cookie_name: cdktf.stringToTerraform(this._challengeCookieName),
      challenge_interval: cdktf.numberToTerraform(this._challengeInterval),
      challenge_keep_cookie: cdktf.numberToTerraform(this._challengeKeepCookie),
      challenge_method: cdktf.stringToTerraform(this._challengeMethod),
      challenge_redirect_code: cdktf.stringToTerraform(this._challengeRedirectCode),
      challenge_uri_encode: cdktf.numberToTerraform(this._challengeUriEncode),
      disable: cdktf.numberToTerraform(this._disable),
      disallow_connect_method: cdktf.numberToTerraform(this._disallowConnectMethod),
      http_tmpl_name: cdktf.stringToTerraform(this._httpTmplName),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      ignore_zero_payload: cdktf.numberToTerraform(this._ignoreZeroPayload),
      non_http_bypass: cdktf.numberToTerraform(this._nonHttpBypass),
      out_of_order_queue_size: cdktf.numberToTerraform(this._outOfOrderQueueSize),
      out_of_order_queue_timeout: cdktf.numberToTerraform(this._outOfOrderQueueTimeout),
      post_rate_limit: cdktf.numberToTerraform(this._postRateLimit),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      agent_filter: ddosTemplateHttpAgentFilterToTerraform(this._agentFilter.internalValue),
      filter_header_list: cdktf.listMapper(ddosTemplateHttpFilterHeaderListStructToTerraform, true)(this._filterHeaderList.internalValue),
      malformed_http: ddosTemplateHttpMalformedHttpToTerraform(this._malformedHttp.internalValue),
      mss_cfg: ddosTemplateHttpMssCfgToTerraform(this._mssCfg.internalValue),
      multi_pu_threshold_distribution: ddosTemplateHttpMultiPuThresholdDistributionToTerraform(this._multiPuThresholdDistribution.internalValue),
      referer_filter: ddosTemplateHttpRefererFilterToTerraform(this._refererFilter.internalValue),
      request_header: ddosTemplateHttpRequestHeaderToTerraform(this._requestHeader.internalValue),
      request_rate_limit: ddosTemplateHttpRequestRateLimitToTerraform(this._requestRateLimit.internalValue),
      response_rate_limit: ddosTemplateHttpResponseRateLimitToTerraform(this._responseRateLimit.internalValue),
      slow_read_drop: ddosTemplateHttpSlowReadDropToTerraform(this._slowReadDrop.internalValue),
      use_hdr_ip_cfg: ddosTemplateHttpUseHdrIpCfgToTerraform(this._useHdrIpCfg.internalValue),
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
      challenge_cookie_name: {
        value: cdktf.stringToHclTerraform(this._challengeCookieName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      challenge_interval: {
        value: cdktf.numberToHclTerraform(this._challengeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      challenge_keep_cookie: {
        value: cdktf.numberToHclTerraform(this._challengeKeepCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      challenge_method: {
        value: cdktf.stringToHclTerraform(this._challengeMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      challenge_redirect_code: {
        value: cdktf.stringToHclTerraform(this._challengeRedirectCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      challenge_uri_encode: {
        value: cdktf.numberToHclTerraform(this._challengeUriEncode),
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
      disallow_connect_method: {
        value: cdktf.numberToHclTerraform(this._disallowConnectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._httpTmplName),
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
      ignore_zero_payload: {
        value: cdktf.numberToHclTerraform(this._ignoreZeroPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      non_http_bypass: {
        value: cdktf.numberToHclTerraform(this._nonHttpBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      out_of_order_queue_size: {
        value: cdktf.numberToHclTerraform(this._outOfOrderQueueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      out_of_order_queue_timeout: {
        value: cdktf.numberToHclTerraform(this._outOfOrderQueueTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      post_rate_limit: {
        value: cdktf.numberToHclTerraform(this._postRateLimit),
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
      agent_filter: {
        value: ddosTemplateHttpAgentFilterToHclTerraform(this._agentFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateHttpAgentFilterList",
      },
      filter_header_list: {
        value: cdktf.listMapperHcl(ddosTemplateHttpFilterHeaderListStructToHclTerraform, true)(this._filterHeaderList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateHttpFilterHeaderListStructList",
      },
      malformed_http: {
        value: ddosTemplateHttpMalformedHttpToHclTerraform(this._malformedHttp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateHttpMalformedHttpList",
      },
      mss_cfg: {
        value: ddosTemplateHttpMssCfgToHclTerraform(this._mssCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateHttpMssCfgList",
      },
      multi_pu_threshold_distribution: {
        value: ddosTemplateHttpMultiPuThresholdDistributionToHclTerraform(this._multiPuThresholdDistribution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateHttpMultiPuThresholdDistributionList",
      },
      referer_filter: {
        value: ddosTemplateHttpRefererFilterToHclTerraform(this._refererFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateHttpRefererFilterList",
      },
      request_header: {
        value: ddosTemplateHttpRequestHeaderToHclTerraform(this._requestHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateHttpRequestHeaderList",
      },
      request_rate_limit: {
        value: ddosTemplateHttpRequestRateLimitToHclTerraform(this._requestRateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateHttpRequestRateLimitList",
      },
      response_rate_limit: {
        value: ddosTemplateHttpResponseRateLimitToHclTerraform(this._responseRateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateHttpResponseRateLimitList",
      },
      slow_read_drop: {
        value: ddosTemplateHttpSlowReadDropToHclTerraform(this._slowReadDrop.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateHttpSlowReadDropList",
      },
      use_hdr_ip_cfg: {
        value: ddosTemplateHttpUseHdrIpCfgToHclTerraform(this._useHdrIpCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateHttpUseHdrIpCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
