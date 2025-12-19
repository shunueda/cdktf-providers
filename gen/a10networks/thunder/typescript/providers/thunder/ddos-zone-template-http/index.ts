// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateHttpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#disable DdosZoneTemplateHttp#disable}
  */
  readonly disable?: number;
  /**
  * Do not allow HTTP Connect method (asymmetric mode only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#disallow_connect_method DdosZoneTemplateHttp#disallow_connect_method}
  */
  readonly disallowConnectMethod?: number;
  /**
  * DDOS HTTP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_tmpl_name DdosZoneTemplateHttp#http_tmpl_name}
  */
  readonly httpTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#id DdosZoneTemplateHttp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Bypass non-http traffic instead of dropping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#non_http_bypass DdosZoneTemplateHttp#non_http_bypass}
  */
  readonly nonHttpBypass?: number;
  /**
  * Set the number of packets for the out-of-order HTTP queue (asym mode only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#out_of_order_queue_size DdosZoneTemplateHttp#out_of_order_queue_size}
  */
  readonly outOfOrderQueueSize?: number;
  /**
  * Set the timeout value in seconds for out-of-order queue in HTTP (asym mode only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#out_of_order_queue_timeout DdosZoneTemplateHttp#out_of_order_queue_timeout}
  */
  readonly outOfOrderQueueTimeout?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#user_tag DdosZoneTemplateHttp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#uuid DdosZoneTemplateHttp#uuid}
  */
  readonly uuid?: string;
  /**
  * challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#challenge DdosZoneTemplateHttp#challenge}
  */
  readonly challenge?: DdosZoneTemplateHttpChallenge;
  /**
  * client_source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#client_source_ip DdosZoneTemplateHttp#client_source_ip}
  */
  readonly clientSourceIp?: DdosZoneTemplateHttpClientSourceIp;
  /**
  * dst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#dst DdosZoneTemplateHttp#dst}
  */
  readonly dst?: DdosZoneTemplateHttpDst;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#filter_list DdosZoneTemplateHttp#filter_list}
  */
  readonly filterList?: DdosZoneTemplateHttpFilterListStruct[] | cdktf.IResolvable;
  /**
  * idle_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#idle_timeout DdosZoneTemplateHttp#idle_timeout}
  */
  readonly idleTimeout?: DdosZoneTemplateHttpIdleTimeout;
  /**
  * malformed_http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#malformed_http DdosZoneTemplateHttp#malformed_http}
  */
  readonly malformedHttp?: DdosZoneTemplateHttpMalformedHttp;
  /**
  * mss_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#mss_timeout DdosZoneTemplateHttp#mss_timeout}
  */
  readonly mssTimeout?: DdosZoneTemplateHttpMssTimeout;
  /**
  * multi_pu_threshold_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#multi_pu_threshold_distribution DdosZoneTemplateHttp#multi_pu_threshold_distribution}
  */
  readonly multiPuThresholdDistribution?: DdosZoneTemplateHttpMultiPuThresholdDistribution;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#request_header DdosZoneTemplateHttp#request_header}
  */
  readonly requestHeader?: DdosZoneTemplateHttpRequestHeader;
  /**
  * slow_read block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#slow_read DdosZoneTemplateHttp#slow_read}
  */
  readonly slowRead?: DdosZoneTemplateHttpSlowRead;
  /**
  * src block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#src DdosZoneTemplateHttp#src}
  */
  readonly src?: DdosZoneTemplateHttpSrc;
}
export interface DdosZoneTemplateHttpChallenge {
  /**
  * Set the cookie name used to send back to client. Default is sto-idd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#challenge_cookie_name DdosZoneTemplateHttp#challenge_cookie_name}
  */
  readonly challengeCookieName?: string;
  /**
  * 'blacklist-src': Blacklist-src; 'reset': Reset client connection(Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#challenge_fail_action DdosZoneTemplateHttp#challenge_fail_action}
  */
  readonly challengeFailAction?: string;
  /**
  * Configure action-list to take for failing the authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#challenge_fail_action_list_name DdosZoneTemplateHttp#challenge_fail_action_list_name}
  */
  readonly challengeFailActionListName?: string;
  /**
  * Specify the challenge interval. Default is 8 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#challenge_interval DdosZoneTemplateHttp#challenge_interval}
  */
  readonly challengeInterval?: number;
  /**
  * Keep the challenge cookie from client and forward to backend. Default is do not keep
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#challenge_keep_cookie DdosZoneTemplateHttp#challenge_keep_cookie}
  */
  readonly challengeKeepCookie?: number;
  /**
  * 'http-redirect': http-redirect; 'javascript': javascript;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#challenge_method DdosZoneTemplateHttp#challenge_method}
  */
  readonly challengeMethod?: string;
  /**
  * 'authenticate-src': Authenticate-src (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#challenge_pass_action DdosZoneTemplateHttp#challenge_pass_action}
  */
  readonly challengePassAction?: string;
  /**
  * Configure action-list to take for passing the authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#challenge_pass_action_list_name DdosZoneTemplateHttp#challenge_pass_action_list_name}
  */
  readonly challengePassActionListName?: string;
  /**
  * '302': 302 Found; '307': 307 Temporary Redirect;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#challenge_redirect_code DdosZoneTemplateHttp#challenge_redirect_code}
  */
  readonly challengeRedirectCode?: string;
  /**
  * Encode the challenge phrase in uri instead of in http cookie. Default encoded in http cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#challenge_uri_encode DdosZoneTemplateHttp#challenge_uri_encode}
  */
  readonly challengeUriEncode?: number;
}

export function ddosZoneTemplateHttpChallengeToTerraform(struct?: DdosZoneTemplateHttpChallengeOutputReference | DdosZoneTemplateHttpChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    challenge_cookie_name: cdktf.stringToTerraform(struct!.challengeCookieName),
    challenge_fail_action: cdktf.stringToTerraform(struct!.challengeFailAction),
    challenge_fail_action_list_name: cdktf.stringToTerraform(struct!.challengeFailActionListName),
    challenge_interval: cdktf.numberToTerraform(struct!.challengeInterval),
    challenge_keep_cookie: cdktf.numberToTerraform(struct!.challengeKeepCookie),
    challenge_method: cdktf.stringToTerraform(struct!.challengeMethod),
    challenge_pass_action: cdktf.stringToTerraform(struct!.challengePassAction),
    challenge_pass_action_list_name: cdktf.stringToTerraform(struct!.challengePassActionListName),
    challenge_redirect_code: cdktf.stringToTerraform(struct!.challengeRedirectCode),
    challenge_uri_encode: cdktf.numberToTerraform(struct!.challengeUriEncode),
  }
}


export function ddosZoneTemplateHttpChallengeToHclTerraform(struct?: DdosZoneTemplateHttpChallengeOutputReference | DdosZoneTemplateHttpChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    challenge_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.challengeCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_fail_action: {
      value: cdktf.stringToHclTerraform(struct!.challengeFailAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_fail_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.challengeFailActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_interval: {
      value: cdktf.numberToHclTerraform(struct!.challengeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    challenge_keep_cookie: {
      value: cdktf.numberToHclTerraform(struct!.challengeKeepCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    challenge_method: {
      value: cdktf.stringToHclTerraform(struct!.challengeMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_pass_action: {
      value: cdktf.stringToHclTerraform(struct!.challengePassAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_pass_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.challengePassActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_redirect_code: {
      value: cdktf.stringToHclTerraform(struct!.challengeRedirectCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_uri_encode: {
      value: cdktf.numberToHclTerraform(struct!.challengeUriEncode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._challengeCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeCookieName = this._challengeCookieName;
    }
    if (this._challengeFailAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeFailAction = this._challengeFailAction;
    }
    if (this._challengeFailActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeFailActionListName = this._challengeFailActionListName;
    }
    if (this._challengeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeInterval = this._challengeInterval;
    }
    if (this._challengeKeepCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeKeepCookie = this._challengeKeepCookie;
    }
    if (this._challengeMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeMethod = this._challengeMethod;
    }
    if (this._challengePassAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengePassAction = this._challengePassAction;
    }
    if (this._challengePassActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengePassActionListName = this._challengePassActionListName;
    }
    if (this._challengeRedirectCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeRedirectCode = this._challengeRedirectCode;
    }
    if (this._challengeUriEncode !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeUriEncode = this._challengeUriEncode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._challengeCookieName = undefined;
      this._challengeFailAction = undefined;
      this._challengeFailActionListName = undefined;
      this._challengeInterval = undefined;
      this._challengeKeepCookie = undefined;
      this._challengeMethod = undefined;
      this._challengePassAction = undefined;
      this._challengePassActionListName = undefined;
      this._challengeRedirectCode = undefined;
      this._challengeUriEncode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._challengeCookieName = value.challengeCookieName;
      this._challengeFailAction = value.challengeFailAction;
      this._challengeFailActionListName = value.challengeFailActionListName;
      this._challengeInterval = value.challengeInterval;
      this._challengeKeepCookie = value.challengeKeepCookie;
      this._challengeMethod = value.challengeMethod;
      this._challengePassAction = value.challengePassAction;
      this._challengePassActionListName = value.challengePassActionListName;
      this._challengeRedirectCode = value.challengeRedirectCode;
      this._challengeUriEncode = value.challengeUriEncode;
    }
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

  // challenge_fail_action - computed: false, optional: true, required: false
  private _challengeFailAction?: string; 
  public get challengeFailAction() {
    return this.getStringAttribute('challenge_fail_action');
  }
  public set challengeFailAction(value: string) {
    this._challengeFailAction = value;
  }
  public resetChallengeFailAction() {
    this._challengeFailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeFailActionInput() {
    return this._challengeFailAction;
  }

  // challenge_fail_action_list_name - computed: false, optional: true, required: false
  private _challengeFailActionListName?: string; 
  public get challengeFailActionListName() {
    return this.getStringAttribute('challenge_fail_action_list_name');
  }
  public set challengeFailActionListName(value: string) {
    this._challengeFailActionListName = value;
  }
  public resetChallengeFailActionListName() {
    this._challengeFailActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeFailActionListNameInput() {
    return this._challengeFailActionListName;
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

  // challenge_pass_action - computed: false, optional: true, required: false
  private _challengePassAction?: string; 
  public get challengePassAction() {
    return this.getStringAttribute('challenge_pass_action');
  }
  public set challengePassAction(value: string) {
    this._challengePassAction = value;
  }
  public resetChallengePassAction() {
    this._challengePassAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengePassActionInput() {
    return this._challengePassAction;
  }

  // challenge_pass_action_list_name - computed: false, optional: true, required: false
  private _challengePassActionListName?: string; 
  public get challengePassActionListName() {
    return this.getStringAttribute('challenge_pass_action_list_name');
  }
  public set challengePassActionListName(value: string) {
    this._challengePassActionListName = value;
  }
  public resetChallengePassActionListName() {
    this._challengePassActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengePassActionListNameInput() {
    return this._challengePassActionListName;
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
}
export interface DdosZoneTemplateHttpClientSourceIp {
  /**
  * Mitigate on src ip specified by http header for example X-Forwarded-For header. Default is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#client_source_ip DdosZoneTemplateHttp#client_source_ip}
  */
  readonly clientSourceIp?: number;
  /**
  * Set the http header name to parse for client ip. Default is X-Forwarded-For
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_header_name DdosZoneTemplateHttp#http_header_name}
  */
  readonly httpHeaderName?: string;
}

export function ddosZoneTemplateHttpClientSourceIpToTerraform(struct?: DdosZoneTemplateHttpClientSourceIpOutputReference | DdosZoneTemplateHttpClientSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_source_ip: cdktf.numberToTerraform(struct!.clientSourceIp),
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
  }
}


export function ddosZoneTemplateHttpClientSourceIpToHclTerraform(struct?: DdosZoneTemplateHttpClientSourceIpOutputReference | DdosZoneTemplateHttpClientSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_source_ip: {
      value: cdktf.numberToHclTerraform(struct!.clientSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_header_name: {
      value: cdktf.stringToHclTerraform(struct!.httpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpClientSourceIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpClientSourceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSourceIp = this._clientSourceIp;
    }
    if (this._httpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderName = this._httpHeaderName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpClientSourceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientSourceIp = undefined;
      this._httpHeaderName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientSourceIp = value.clientSourceIp;
      this._httpHeaderName = value.httpHeaderName;
    }
  }

  // client_source_ip - computed: false, optional: true, required: false
  private _clientSourceIp?: number; 
  public get clientSourceIp() {
    return this.getNumberAttribute('client_source_ip');
  }
  public set clientSourceIp(value: number) {
    this._clientSourceIp = value;
  }
  public resetClientSourceIp() {
    this._clientSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSourceIpInput() {
    return this._clientSourceIp;
  }

  // http_header_name - computed: false, optional: true, required: false
  private _httpHeaderName?: string; 
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }
  public set httpHeaderName(value: string) {
    this._httpHeaderName = value;
  }
  public resetHttpHeaderName() {
    this._httpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderNameInput() {
    return this._httpHeaderName;
  }
}
export interface DdosZoneTemplateHttpDstRateLimitHttpPost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#dst_post_rate_limit DdosZoneTemplateHttp#dst_post_rate_limit}
  */
  readonly dstPostRateLimit?: number;
  /**
  * 'drop': Drop packets(Default); 'ignore': Take no action; 'reset': Reset client connection; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#dst_post_rate_limit_action DdosZoneTemplateHttp#dst_post_rate_limit_action}
  */
  readonly dstPostRateLimitAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#dst_post_rate_limit_action_list_name DdosZoneTemplateHttp#dst_post_rate_limit_action_list_name}
  */
  readonly dstPostRateLimitActionListName?: string;
}

export function ddosZoneTemplateHttpDstRateLimitHttpPostToTerraform(struct?: DdosZoneTemplateHttpDstRateLimitHttpPostOutputReference | DdosZoneTemplateHttpDstRateLimitHttpPost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_post_rate_limit: cdktf.numberToTerraform(struct!.dstPostRateLimit),
    dst_post_rate_limit_action: cdktf.stringToTerraform(struct!.dstPostRateLimitAction),
    dst_post_rate_limit_action_list_name: cdktf.stringToTerraform(struct!.dstPostRateLimitActionListName),
  }
}


export function ddosZoneTemplateHttpDstRateLimitHttpPostToHclTerraform(struct?: DdosZoneTemplateHttpDstRateLimitHttpPostOutputReference | DdosZoneTemplateHttpDstRateLimitHttpPost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_post_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.dstPostRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_post_rate_limit_action: {
      value: cdktf.stringToHclTerraform(struct!.dstPostRateLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_post_rate_limit_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dstPostRateLimitActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpDstRateLimitHttpPostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpDstRateLimitHttpPost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstPostRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPostRateLimit = this._dstPostRateLimit;
    }
    if (this._dstPostRateLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPostRateLimitAction = this._dstPostRateLimitAction;
    }
    if (this._dstPostRateLimitActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPostRateLimitActionListName = this._dstPostRateLimitActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpDstRateLimitHttpPost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstPostRateLimit = undefined;
      this._dstPostRateLimitAction = undefined;
      this._dstPostRateLimitActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstPostRateLimit = value.dstPostRateLimit;
      this._dstPostRateLimitAction = value.dstPostRateLimitAction;
      this._dstPostRateLimitActionListName = value.dstPostRateLimitActionListName;
    }
  }

  // dst_post_rate_limit - computed: false, optional: true, required: false
  private _dstPostRateLimit?: number; 
  public get dstPostRateLimit() {
    return this.getNumberAttribute('dst_post_rate_limit');
  }
  public set dstPostRateLimit(value: number) {
    this._dstPostRateLimit = value;
  }
  public resetDstPostRateLimit() {
    this._dstPostRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPostRateLimitInput() {
    return this._dstPostRateLimit;
  }

  // dst_post_rate_limit_action - computed: false, optional: true, required: false
  private _dstPostRateLimitAction?: string; 
  public get dstPostRateLimitAction() {
    return this.getStringAttribute('dst_post_rate_limit_action');
  }
  public set dstPostRateLimitAction(value: string) {
    this._dstPostRateLimitAction = value;
  }
  public resetDstPostRateLimitAction() {
    this._dstPostRateLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPostRateLimitActionInput() {
    return this._dstPostRateLimitAction;
  }

  // dst_post_rate_limit_action_list_name - computed: false, optional: true, required: false
  private _dstPostRateLimitActionListName?: string; 
  public get dstPostRateLimitActionListName() {
    return this.getStringAttribute('dst_post_rate_limit_action_list_name');
  }
  public set dstPostRateLimitActionListName(value: string) {
    this._dstPostRateLimitActionListName = value;
  }
  public resetDstPostRateLimitActionListName() {
    this._dstPostRateLimitActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPostRateLimitActionListNameInput() {
    return this._dstPostRateLimitActionListName;
  }
}
export interface DdosZoneTemplateHttpDstRateLimitHttpRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#dst_request_rate DdosZoneTemplateHttp#dst_request_rate}
  */
  readonly dstRequestRate?: number;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'reset': Reset client connection; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#dst_request_rate_limit_action DdosZoneTemplateHttp#dst_request_rate_limit_action}
  */
  readonly dstRequestRateLimitAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#dst_request_rate_limit_action_list_name DdosZoneTemplateHttp#dst_request_rate_limit_action_list_name}
  */
  readonly dstRequestRateLimitActionListName?: string;
}

export function ddosZoneTemplateHttpDstRateLimitHttpRequestToTerraform(struct?: DdosZoneTemplateHttpDstRateLimitHttpRequestOutputReference | DdosZoneTemplateHttpDstRateLimitHttpRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_request_rate: cdktf.numberToTerraform(struct!.dstRequestRate),
    dst_request_rate_limit_action: cdktf.stringToTerraform(struct!.dstRequestRateLimitAction),
    dst_request_rate_limit_action_list_name: cdktf.stringToTerraform(struct!.dstRequestRateLimitActionListName),
  }
}


export function ddosZoneTemplateHttpDstRateLimitHttpRequestToHclTerraform(struct?: DdosZoneTemplateHttpDstRateLimitHttpRequestOutputReference | DdosZoneTemplateHttpDstRateLimitHttpRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_request_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstRequestRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_request_rate_limit_action: {
      value: cdktf.stringToHclTerraform(struct!.dstRequestRateLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_request_rate_limit_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dstRequestRateLimitActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpDstRateLimitHttpRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpDstRateLimitHttpRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstRequestRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRequestRate = this._dstRequestRate;
    }
    if (this._dstRequestRateLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRequestRateLimitAction = this._dstRequestRateLimitAction;
    }
    if (this._dstRequestRateLimitActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRequestRateLimitActionListName = this._dstRequestRateLimitActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpDstRateLimitHttpRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstRequestRate = undefined;
      this._dstRequestRateLimitAction = undefined;
      this._dstRequestRateLimitActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstRequestRate = value.dstRequestRate;
      this._dstRequestRateLimitAction = value.dstRequestRateLimitAction;
      this._dstRequestRateLimitActionListName = value.dstRequestRateLimitActionListName;
    }
  }

  // dst_request_rate - computed: false, optional: true, required: false
  private _dstRequestRate?: number; 
  public get dstRequestRate() {
    return this.getNumberAttribute('dst_request_rate');
  }
  public set dstRequestRate(value: number) {
    this._dstRequestRate = value;
  }
  public resetDstRequestRate() {
    this._dstRequestRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRequestRateInput() {
    return this._dstRequestRate;
  }

  // dst_request_rate_limit_action - computed: false, optional: true, required: false
  private _dstRequestRateLimitAction?: string; 
  public get dstRequestRateLimitAction() {
    return this.getStringAttribute('dst_request_rate_limit_action');
  }
  public set dstRequestRateLimitAction(value: string) {
    this._dstRequestRateLimitAction = value;
  }
  public resetDstRequestRateLimitAction() {
    this._dstRequestRateLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRequestRateLimitActionInput() {
    return this._dstRequestRateLimitAction;
  }

  // dst_request_rate_limit_action_list_name - computed: false, optional: true, required: false
  private _dstRequestRateLimitActionListName?: string; 
  public get dstRequestRateLimitActionListName() {
    return this.getStringAttribute('dst_request_rate_limit_action_list_name');
  }
  public set dstRequestRateLimitActionListName(value: string) {
    this._dstRequestRateLimitActionListName = value;
  }
  public resetDstRequestRateLimitActionListName() {
    this._dstRequestRateLimitActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRequestRateLimitActionListNameInput() {
    return this._dstRequestRateLimitActionListName;
  }
}
export interface DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfg {
  /**
  * Response size configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#obj_between1 DdosZoneTemplateHttp#obj_between1}
  */
  readonly objBetween1?: number;
  /**
  * Response size configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#obj_between2 DdosZoneTemplateHttp#obj_between2}
  */
  readonly objBetween2?: number;
  /**
  * Response rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#obj_between_rate DdosZoneTemplateHttp#obj_between_rate}
  */
  readonly objBetweenRate?: number;
}

export function ddosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfgToTerraform(struct?: DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfg | cdktf.IResolvable): any {
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


export function ddosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfgToHclTerraform(struct?: DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfg | cdktf.IResolvable): any {
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

export class DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfg | cdktf.IResolvable | undefined) {
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

export class DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfgOutputReference {
    return new DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfg {
  /**
  * Response size configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#obj_greater DdosZoneTemplateHttp#obj_greater}
  */
  readonly objGreater?: number;
  /**
  * Response rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#obj_greater_rate DdosZoneTemplateHttp#obj_greater_rate}
  */
  readonly objGreaterRate?: number;
}

export function ddosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfgToTerraform(struct?: DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    obj_greater: cdktf.numberToTerraform(struct!.objGreater),
    obj_greater_rate: cdktf.numberToTerraform(struct!.objGreaterRate),
  }
}


export function ddosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfgToHclTerraform(struct?: DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfg | cdktf.IResolvable): any {
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

export class DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfg | cdktf.IResolvable | undefined) {
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

export class DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfgOutputReference {
    return new DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfg {
  /**
  * Response size configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#obj_less DdosZoneTemplateHttp#obj_less}
  */
  readonly objLess?: number;
  /**
  * Response rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#obj_less_rate DdosZoneTemplateHttp#obj_less_rate}
  */
  readonly objLessRate?: number;
}

export function ddosZoneTemplateHttpDstRateLimitResponseSizeLessCfgToTerraform(struct?: DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    obj_less: cdktf.numberToTerraform(struct!.objLess),
    obj_less_rate: cdktf.numberToTerraform(struct!.objLessRate),
  }
}


export function ddosZoneTemplateHttpDstRateLimitResponseSizeLessCfgToHclTerraform(struct?: DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfg | cdktf.IResolvable): any {
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

export class DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfg | cdktf.IResolvable | undefined) {
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

export class DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfgOutputReference {
    return new DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpDstRateLimitResponseSize {
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#response_size_action DdosZoneTemplateHttp#response_size_action}
  */
  readonly responseSizeAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#response_size_action_list_name DdosZoneTemplateHttp#response_size_action_list_name}
  */
  readonly responseSizeActionListName?: string;
  /**
  * between_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#between_cfg DdosZoneTemplateHttp#between_cfg}
  */
  readonly betweenCfg?: DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfg[] | cdktf.IResolvable;
  /**
  * greater_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#greater_cfg DdosZoneTemplateHttp#greater_cfg}
  */
  readonly greaterCfg?: DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfg[] | cdktf.IResolvable;
  /**
  * less_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#less_cfg DdosZoneTemplateHttp#less_cfg}
  */
  readonly lessCfg?: DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfg[] | cdktf.IResolvable;
}

export function ddosZoneTemplateHttpDstRateLimitResponseSizeToTerraform(struct?: DdosZoneTemplateHttpDstRateLimitResponseSizeOutputReference | DdosZoneTemplateHttpDstRateLimitResponseSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_size_action: cdktf.stringToTerraform(struct!.responseSizeAction),
    response_size_action_list_name: cdktf.stringToTerraform(struct!.responseSizeActionListName),
    between_cfg: cdktf.listMapper(ddosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfgToTerraform, true)(struct!.betweenCfg),
    greater_cfg: cdktf.listMapper(ddosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfgToTerraform, true)(struct!.greaterCfg),
    less_cfg: cdktf.listMapper(ddosZoneTemplateHttpDstRateLimitResponseSizeLessCfgToTerraform, true)(struct!.lessCfg),
  }
}


export function ddosZoneTemplateHttpDstRateLimitResponseSizeToHclTerraform(struct?: DdosZoneTemplateHttpDstRateLimitResponseSizeOutputReference | DdosZoneTemplateHttpDstRateLimitResponseSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_size_action: {
      value: cdktf.stringToHclTerraform(struct!.responseSizeAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_size_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.responseSizeActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    between_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfgToHclTerraform, true)(struct!.betweenCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfgList",
    },
    greater_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfgToHclTerraform, true)(struct!.greaterCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfgList",
    },
    less_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpDstRateLimitResponseSizeLessCfgToHclTerraform, true)(struct!.lessCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpDstRateLimitResponseSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpDstRateLimitResponseSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseSizeAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSizeAction = this._responseSizeAction;
    }
    if (this._responseSizeActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSizeActionListName = this._responseSizeActionListName;
    }
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

  public set internalValue(value: DdosZoneTemplateHttpDstRateLimitResponseSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseSizeAction = undefined;
      this._responseSizeActionListName = undefined;
      this._betweenCfg.internalValue = undefined;
      this._greaterCfg.internalValue = undefined;
      this._lessCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseSizeAction = value.responseSizeAction;
      this._responseSizeActionListName = value.responseSizeActionListName;
      this._betweenCfg.internalValue = value.betweenCfg;
      this._greaterCfg.internalValue = value.greaterCfg;
      this._lessCfg.internalValue = value.lessCfg;
    }
  }

  // response_size_action - computed: false, optional: true, required: false
  private _responseSizeAction?: string; 
  public get responseSizeAction() {
    return this.getStringAttribute('response_size_action');
  }
  public set responseSizeAction(value: string) {
    this._responseSizeAction = value;
  }
  public resetResponseSizeAction() {
    this._responseSizeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeActionInput() {
    return this._responseSizeAction;
  }

  // response_size_action_list_name - computed: false, optional: true, required: false
  private _responseSizeActionListName?: string; 
  public get responseSizeActionListName() {
    return this.getStringAttribute('response_size_action_list_name');
  }
  public set responseSizeActionListName(value: string) {
    this._responseSizeActionListName = value;
  }
  public resetResponseSizeActionListName() {
    this._responseSizeActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeActionListNameInput() {
    return this._responseSizeActionListName;
  }

  // between_cfg - computed: false, optional: true, required: false
  private _betweenCfg = new DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfgList(this, "between_cfg", false);
  public get betweenCfg() {
    return this._betweenCfg;
  }
  public putBetweenCfg(value: DdosZoneTemplateHttpDstRateLimitResponseSizeBetweenCfg[] | cdktf.IResolvable) {
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
  private _greaterCfg = new DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfgList(this, "greater_cfg", false);
  public get greaterCfg() {
    return this._greaterCfg;
  }
  public putGreaterCfg(value: DdosZoneTemplateHttpDstRateLimitResponseSizeGreaterCfg[] | cdktf.IResolvable) {
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
  private _lessCfg = new DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfgList(this, "less_cfg", false);
  public get lessCfg() {
    return this._lessCfg;
  }
  public putLessCfg(value: DdosZoneTemplateHttpDstRateLimitResponseSizeLessCfg[] | cdktf.IResolvable) {
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
export interface DdosZoneTemplateHttpDstRateLimit {
  /**
  * http_post block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_post DdosZoneTemplateHttp#http_post}
  */
  readonly httpPost?: DdosZoneTemplateHttpDstRateLimitHttpPost;
  /**
  * http_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_request DdosZoneTemplateHttp#http_request}
  */
  readonly httpRequest?: DdosZoneTemplateHttpDstRateLimitHttpRequest;
  /**
  * response_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#response_size DdosZoneTemplateHttp#response_size}
  */
  readonly responseSize?: DdosZoneTemplateHttpDstRateLimitResponseSize;
}

export function ddosZoneTemplateHttpDstRateLimitToTerraform(struct?: DdosZoneTemplateHttpDstRateLimitOutputReference | DdosZoneTemplateHttpDstRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_post: ddosZoneTemplateHttpDstRateLimitHttpPostToTerraform(struct!.httpPost),
    http_request: ddosZoneTemplateHttpDstRateLimitHttpRequestToTerraform(struct!.httpRequest),
    response_size: ddosZoneTemplateHttpDstRateLimitResponseSizeToTerraform(struct!.responseSize),
  }
}


export function ddosZoneTemplateHttpDstRateLimitToHclTerraform(struct?: DdosZoneTemplateHttpDstRateLimitOutputReference | DdosZoneTemplateHttpDstRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_post: {
      value: ddosZoneTemplateHttpDstRateLimitHttpPostToHclTerraform(struct!.httpPost),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpDstRateLimitHttpPostList",
    },
    http_request: {
      value: ddosZoneTemplateHttpDstRateLimitHttpRequestToHclTerraform(struct!.httpRequest),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpDstRateLimitHttpRequestList",
    },
    response_size: {
      value: ddosZoneTemplateHttpDstRateLimitResponseSizeToHclTerraform(struct!.responseSize),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpDstRateLimitResponseSizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpDstRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpDstRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPost = this._httpPost?.internalValue;
    }
    if (this._httpRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequest = this._httpRequest?.internalValue;
    }
    if (this._responseSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSize = this._responseSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpDstRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpPost.internalValue = undefined;
      this._httpRequest.internalValue = undefined;
      this._responseSize.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpPost.internalValue = value.httpPost;
      this._httpRequest.internalValue = value.httpRequest;
      this._responseSize.internalValue = value.responseSize;
    }
  }

  // http_post - computed: false, optional: true, required: false
  private _httpPost = new DdosZoneTemplateHttpDstRateLimitHttpPostOutputReference(this, "http_post");
  public get httpPost() {
    return this._httpPost;
  }
  public putHttpPost(value: DdosZoneTemplateHttpDstRateLimitHttpPost) {
    this._httpPost.internalValue = value;
  }
  public resetHttpPost() {
    this._httpPost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPostInput() {
    return this._httpPost.internalValue;
  }

  // http_request - computed: false, optional: true, required: false
  private _httpRequest = new DdosZoneTemplateHttpDstRateLimitHttpRequestOutputReference(this, "http_request");
  public get httpRequest() {
    return this._httpRequest;
  }
  public putHttpRequest(value: DdosZoneTemplateHttpDstRateLimitHttpRequest) {
    this._httpRequest.internalValue = value;
  }
  public resetHttpRequest() {
    this._httpRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestInput() {
    return this._httpRequest.internalValue;
  }

  // response_size - computed: false, optional: true, required: false
  private _responseSize = new DdosZoneTemplateHttpDstRateLimitResponseSizeOutputReference(this, "response_size");
  public get responseSize() {
    return this._responseSize;
  }
  public putResponseSize(value: DdosZoneTemplateHttpDstRateLimitResponseSize) {
    this._responseSize.internalValue = value;
  }
  public resetResponseSize() {
    this._responseSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeInput() {
    return this._responseSize.internalValue;
  }
}
export interface DdosZoneTemplateHttpDst {
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#rate_limit DdosZoneTemplateHttp#rate_limit}
  */
  readonly rateLimit?: DdosZoneTemplateHttpDstRateLimit;
}

export function ddosZoneTemplateHttpDstToTerraform(struct?: DdosZoneTemplateHttpDstOutputReference | DdosZoneTemplateHttpDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limit: ddosZoneTemplateHttpDstRateLimitToTerraform(struct!.rateLimit),
  }
}


export function ddosZoneTemplateHttpDstToHclTerraform(struct?: DdosZoneTemplateHttpDstOutputReference | DdosZoneTemplateHttpDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limit: {
      value: ddosZoneTemplateHttpDstRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpDstRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpDstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpDst | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpDst | undefined) {
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
  private _rateLimit = new DdosZoneTemplateHttpDstRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DdosZoneTemplateHttpDstRateLimit) {
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
export interface DdosZoneTemplateHttpFilterListDst {
  /**
  * Set rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_rate_limit DdosZoneTemplateHttp#http_filter_rate_limit}
  */
  readonly httpFilterRateLimit?: number;
}

export function ddosZoneTemplateHttpFilterListDstToTerraform(struct?: DdosZoneTemplateHttpFilterListDstOutputReference | DdosZoneTemplateHttpFilterListDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_rate_limit: cdktf.numberToTerraform(struct!.httpFilterRateLimit),
  }
}


export function ddosZoneTemplateHttpFilterListDstToHclTerraform(struct?: DdosZoneTemplateHttpFilterListDstOutputReference | DdosZoneTemplateHttpFilterListDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.httpFilterRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListDstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpFilterListDst | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRateLimit = this._httpFilterRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListDst | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpFilterRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpFilterRateLimit = value.httpFilterRateLimit;
    }
  }

  // http_filter_rate_limit - computed: false, optional: true, required: false
  private _httpFilterRateLimit?: number; 
  public get httpFilterRateLimit() {
    return this.getNumberAttribute('http_filter_rate_limit');
  }
  public set httpFilterRateLimit(value: number) {
    this._httpFilterRateLimit = value;
  }
  public resetHttpFilterRateLimit() {
    this._httpFilterRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRateLimitInput() {
    return this._httpFilterRateLimit;
  }
}
export interface DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_agent_contains DdosZoneTemplateHttp#http_filter_agent_contains}
  */
  readonly httpFilterAgentContains?: string;
}

export function ddosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_agent_contains: cdktf.stringToTerraform(struct!.httpFilterAgentContains),
  }
}


export function ddosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_agent_contains: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterAgentContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterAgentContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterAgentContains = this._httpFilterAgentContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterAgentContains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterAgentContains = value.httpFilterAgentContains;
    }
  }

  // http_filter_agent_contains - computed: false, optional: true, required: false
  private _httpFilterAgentContains?: string; 
  public get httpFilterAgentContains() {
    return this.getStringAttribute('http_filter_agent_contains');
  }
  public set httpFilterAgentContains(value: string) {
    this._httpFilterAgentContains = value;
  }
  public resetHttpFilterAgentContains() {
    this._httpFilterAgentContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterAgentContainsInput() {
    return this._httpFilterAgentContains;
  }
}

export class DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_agent_ends_with DdosZoneTemplateHttp#http_filter_agent_ends_with}
  */
  readonly httpFilterAgentEndsWith?: string;
}

export function ddosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_agent_ends_with: cdktf.stringToTerraform(struct!.httpFilterAgentEndsWith),
  }
}


export function ddosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_agent_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterAgentEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterAgentEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterAgentEndsWith = this._httpFilterAgentEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterAgentEndsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterAgentEndsWith = value.httpFilterAgentEndsWith;
    }
  }

  // http_filter_agent_ends_with - computed: false, optional: true, required: false
  private _httpFilterAgentEndsWith?: string; 
  public get httpFilterAgentEndsWith() {
    return this.getStringAttribute('http_filter_agent_ends_with');
  }
  public set httpFilterAgentEndsWith(value: string) {
    this._httpFilterAgentEndsWith = value;
  }
  public resetHttpFilterAgentEndsWith() {
    this._httpFilterAgentEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterAgentEndsWithInput() {
    return this._httpFilterAgentEndsWith;
  }
}

export class DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_agent_equals DdosZoneTemplateHttp#http_filter_agent_equals}
  */
  readonly httpFilterAgentEquals?: string;
}

export function ddosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_agent_equals: cdktf.stringToTerraform(struct!.httpFilterAgentEquals),
  }
}


export function ddosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_agent_equals: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterAgentEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterAgentEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterAgentEquals = this._httpFilterAgentEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterAgentEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterAgentEquals = value.httpFilterAgentEquals;
    }
  }

  // http_filter_agent_equals - computed: false, optional: true, required: false
  private _httpFilterAgentEquals?: string; 
  public get httpFilterAgentEquals() {
    return this.getStringAttribute('http_filter_agent_equals');
  }
  public set httpFilterAgentEquals(value: string) {
    this._httpFilterAgentEquals = value;
  }
  public resetHttpFilterAgentEquals() {
    this._httpFilterAgentEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterAgentEqualsInput() {
    return this._httpFilterAgentEquals;
  }
}

export class DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_agent_starts_with DdosZoneTemplateHttp#http_filter_agent_starts_with}
  */
  readonly httpFilterAgentStartsWith?: string;
}

export function ddosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_agent_starts_with: cdktf.stringToTerraform(struct!.httpFilterAgentStartsWith),
  }
}


export function ddosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_agent_starts_with: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterAgentStartsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterAgentStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterAgentStartsWith = this._httpFilterAgentStartsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterAgentStartsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterAgentStartsWith = value.httpFilterAgentStartsWith;
    }
  }

  // http_filter_agent_starts_with - computed: false, optional: true, required: false
  private _httpFilterAgentStartsWith?: string; 
  public get httpFilterAgentStartsWith() {
    return this.getStringAttribute('http_filter_agent_starts_with');
  }
  public set httpFilterAgentStartsWith(value: string) {
    this._httpFilterAgentStartsWith = value;
  }
  public resetHttpFilterAgentStartsWith() {
    this._httpFilterAgentStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterAgentStartsWithInput() {
    return this._httpFilterAgentStartsWith;
  }
}

export class DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterListHttpAgentCfg {
  /**
  * agent_contains_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#agent_contains_cfg DdosZoneTemplateHttp#agent_contains_cfg}
  */
  readonly agentContainsCfg?: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfg[] | cdktf.IResolvable;
  /**
  * agent_ends_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#agent_ends_cfg DdosZoneTemplateHttp#agent_ends_cfg}
  */
  readonly agentEndsCfg?: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfg[] | cdktf.IResolvable;
  /**
  * agent_equals_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#agent_equals_cfg DdosZoneTemplateHttp#agent_equals_cfg}
  */
  readonly agentEqualsCfg?: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfg[] | cdktf.IResolvable;
  /**
  * agent_starts_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#agent_starts_cfg DdosZoneTemplateHttp#agent_starts_cfg}
  */
  readonly agentStartsCfg?: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfg[] | cdktf.IResolvable;
}

export function ddosZoneTemplateHttpFilterListHttpAgentCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpAgentCfgOutputReference | DdosZoneTemplateHttpFilterListHttpAgentCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_contains_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfgToTerraform, true)(struct!.agentContainsCfg),
    agent_ends_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfgToTerraform, true)(struct!.agentEndsCfg),
    agent_equals_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfgToTerraform, true)(struct!.agentEqualsCfg),
    agent_starts_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfgToTerraform, true)(struct!.agentStartsCfg),
  }
}


export function ddosZoneTemplateHttpFilterListHttpAgentCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpAgentCfgOutputReference | DdosZoneTemplateHttpFilterListHttpAgentCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_contains_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfgToHclTerraform, true)(struct!.agentContainsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfgList",
    },
    agent_ends_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfgToHclTerraform, true)(struct!.agentEndsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfgList",
    },
    agent_equals_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfgToHclTerraform, true)(struct!.agentEqualsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfgList",
    },
    agent_starts_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfgToHclTerraform, true)(struct!.agentStartsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpAgentCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpAgentCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpAgentCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentContainsCfg.internalValue = undefined;
      this._agentEndsCfg.internalValue = undefined;
      this._agentEqualsCfg.internalValue = undefined;
      this._agentStartsCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentContainsCfg.internalValue = value.agentContainsCfg;
      this._agentEndsCfg.internalValue = value.agentEndsCfg;
      this._agentEqualsCfg.internalValue = value.agentEqualsCfg;
      this._agentStartsCfg.internalValue = value.agentStartsCfg;
    }
  }

  // agent_contains_cfg - computed: false, optional: true, required: false
  private _agentContainsCfg = new DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfgList(this, "agent_contains_cfg", false);
  public get agentContainsCfg() {
    return this._agentContainsCfg;
  }
  public putAgentContainsCfg(value: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentContainsCfg[] | cdktf.IResolvable) {
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
  private _agentEndsCfg = new DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfgList(this, "agent_ends_cfg", false);
  public get agentEndsCfg() {
    return this._agentEndsCfg;
  }
  public putAgentEndsCfg(value: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEndsCfg[] | cdktf.IResolvable) {
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
  private _agentEqualsCfg = new DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfgList(this, "agent_equals_cfg", false);
  public get agentEqualsCfg() {
    return this._agentEqualsCfg;
  }
  public putAgentEqualsCfg(value: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentEqualsCfg[] | cdktf.IResolvable) {
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
  private _agentStartsCfg = new DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfgList(this, "agent_starts_cfg", false);
  public get agentStartsCfg() {
    return this._agentStartsCfg;
  }
  public putAgentStartsCfg(value: DdosZoneTemplateHttpFilterListHttpAgentCfgAgentStartsCfg[] | cdktf.IResolvable) {
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
export interface DdosZoneTemplateHttpFilterListHttpHeaderCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_header_inverse_match DdosZoneTemplateHttp#http_filter_header_inverse_match}
  */
  readonly httpFilterHeaderInverseMatch?: number;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_header_regex DdosZoneTemplateHttp#http_filter_header_regex}
  */
  readonly httpFilterHeaderRegex?: string;
}

export function ddosZoneTemplateHttpFilterListHttpHeaderCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpHeaderCfgOutputReference | DdosZoneTemplateHttpFilterListHttpHeaderCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_header_inverse_match: cdktf.numberToTerraform(struct!.httpFilterHeaderInverseMatch),
    http_filter_header_regex: cdktf.stringToTerraform(struct!.httpFilterHeaderRegex),
  }
}


export function ddosZoneTemplateHttpFilterListHttpHeaderCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpHeaderCfgOutputReference | DdosZoneTemplateHttpFilterListHttpHeaderCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_header_inverse_match: {
      value: cdktf.numberToHclTerraform(struct!.httpFilterHeaderInverseMatch),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpHeaderCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpHeaderCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterHeaderInverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterHeaderInverseMatch = this._httpFilterHeaderInverseMatch;
    }
    if (this._httpFilterHeaderRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterHeaderRegex = this._httpFilterHeaderRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpHeaderCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpFilterHeaderInverseMatch = undefined;
      this._httpFilterHeaderRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpFilterHeaderInverseMatch = value.httpFilterHeaderInverseMatch;
      this._httpFilterHeaderRegex = value.httpFilterHeaderRegex;
    }
  }

  // http_filter_header_inverse_match - computed: false, optional: true, required: false
  private _httpFilterHeaderInverseMatch?: number; 
  public get httpFilterHeaderInverseMatch() {
    return this.getNumberAttribute('http_filter_header_inverse_match');
  }
  public set httpFilterHeaderInverseMatch(value: number) {
    this._httpFilterHeaderInverseMatch = value;
  }
  public resetHttpFilterHeaderInverseMatch() {
    this._httpFilterHeaderInverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderInverseMatchInput() {
    return this._httpFilterHeaderInverseMatch;
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
}
export interface DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_referer_contains DdosZoneTemplateHttp#http_filter_referer_contains}
  */
  readonly httpFilterRefererContains?: string;
}

export function ddosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_referer_contains: cdktf.stringToTerraform(struct!.httpFilterRefererContains),
  }
}


export function ddosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_referer_contains: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRefererContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterRefererContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRefererContains = this._httpFilterRefererContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterRefererContains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterRefererContains = value.httpFilterRefererContains;
    }
  }

  // http_filter_referer_contains - computed: false, optional: true, required: false
  private _httpFilterRefererContains?: string; 
  public get httpFilterRefererContains() {
    return this.getStringAttribute('http_filter_referer_contains');
  }
  public set httpFilterRefererContains(value: string) {
    this._httpFilterRefererContains = value;
  }
  public resetHttpFilterRefererContains() {
    this._httpFilterRefererContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRefererContainsInput() {
    return this._httpFilterRefererContains;
  }
}

export class DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_referer_ends_with DdosZoneTemplateHttp#http_filter_referer_ends_with}
  */
  readonly httpFilterRefererEndsWith?: string;
}

export function ddosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_referer_ends_with: cdktf.stringToTerraform(struct!.httpFilterRefererEndsWith),
  }
}


export function ddosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_referer_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRefererEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterRefererEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRefererEndsWith = this._httpFilterRefererEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterRefererEndsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterRefererEndsWith = value.httpFilterRefererEndsWith;
    }
  }

  // http_filter_referer_ends_with - computed: false, optional: true, required: false
  private _httpFilterRefererEndsWith?: string; 
  public get httpFilterRefererEndsWith() {
    return this.getStringAttribute('http_filter_referer_ends_with');
  }
  public set httpFilterRefererEndsWith(value: string) {
    this._httpFilterRefererEndsWith = value;
  }
  public resetHttpFilterRefererEndsWith() {
    this._httpFilterRefererEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRefererEndsWithInput() {
    return this._httpFilterRefererEndsWith;
  }
}

export class DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_referer_equals DdosZoneTemplateHttp#http_filter_referer_equals}
  */
  readonly httpFilterRefererEquals?: string;
}

export function ddosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_referer_equals: cdktf.stringToTerraform(struct!.httpFilterRefererEquals),
  }
}


export function ddosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_referer_equals: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRefererEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterRefererEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRefererEquals = this._httpFilterRefererEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterRefererEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterRefererEquals = value.httpFilterRefererEquals;
    }
  }

  // http_filter_referer_equals - computed: false, optional: true, required: false
  private _httpFilterRefererEquals?: string; 
  public get httpFilterRefererEquals() {
    return this.getStringAttribute('http_filter_referer_equals');
  }
  public set httpFilterRefererEquals(value: string) {
    this._httpFilterRefererEquals = value;
  }
  public resetHttpFilterRefererEquals() {
    this._httpFilterRefererEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRefererEqualsInput() {
    return this._httpFilterRefererEquals;
  }
}

export class DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_referer_starts_with DdosZoneTemplateHttp#http_filter_referer_starts_with}
  */
  readonly httpFilterRefererStartsWith?: string;
}

export function ddosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_referer_starts_with: cdktf.stringToTerraform(struct!.httpFilterRefererStartsWith),
  }
}


export function ddosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_referer_starts_with: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRefererStartsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterRefererStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRefererStartsWith = this._httpFilterRefererStartsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterRefererStartsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterRefererStartsWith = value.httpFilterRefererStartsWith;
    }
  }

  // http_filter_referer_starts_with - computed: false, optional: true, required: false
  private _httpFilterRefererStartsWith?: string; 
  public get httpFilterRefererStartsWith() {
    return this.getStringAttribute('http_filter_referer_starts_with');
  }
  public set httpFilterRefererStartsWith(value: string) {
    this._httpFilterRefererStartsWith = value;
  }
  public resetHttpFilterRefererStartsWith() {
    this._httpFilterRefererStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRefererStartsWithInput() {
    return this._httpFilterRefererStartsWith;
  }
}

export class DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterListHttpRefererCfg {
  /**
  * referer_contains_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#referer_contains_cfg DdosZoneTemplateHttp#referer_contains_cfg}
  */
  readonly refererContainsCfg?: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfg[] | cdktf.IResolvable;
  /**
  * referer_ends_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#referer_ends_cfg DdosZoneTemplateHttp#referer_ends_cfg}
  */
  readonly refererEndsCfg?: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfg[] | cdktf.IResolvable;
  /**
  * referer_equals_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#referer_equals_cfg DdosZoneTemplateHttp#referer_equals_cfg}
  */
  readonly refererEqualsCfg?: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfg[] | cdktf.IResolvable;
  /**
  * referer_starts_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#referer_starts_cfg DdosZoneTemplateHttp#referer_starts_cfg}
  */
  readonly refererStartsCfg?: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfg[] | cdktf.IResolvable;
}

export function ddosZoneTemplateHttpFilterListHttpRefererCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpRefererCfgOutputReference | DdosZoneTemplateHttpFilterListHttpRefererCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    referer_contains_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfgToTerraform, true)(struct!.refererContainsCfg),
    referer_ends_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfgToTerraform, true)(struct!.refererEndsCfg),
    referer_equals_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfgToTerraform, true)(struct!.refererEqualsCfg),
    referer_starts_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfgToTerraform, true)(struct!.refererStartsCfg),
  }
}


export function ddosZoneTemplateHttpFilterListHttpRefererCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpRefererCfgOutputReference | DdosZoneTemplateHttpFilterListHttpRefererCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    referer_contains_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfgToHclTerraform, true)(struct!.refererContainsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfgList",
    },
    referer_ends_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfgToHclTerraform, true)(struct!.refererEndsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfgList",
    },
    referer_equals_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfgToHclTerraform, true)(struct!.refererEqualsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfgList",
    },
    referer_starts_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfgToHclTerraform, true)(struct!.refererStartsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpRefererCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpRefererCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpRefererCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refererContainsCfg.internalValue = undefined;
      this._refererEndsCfg.internalValue = undefined;
      this._refererEqualsCfg.internalValue = undefined;
      this._refererStartsCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refererContainsCfg.internalValue = value.refererContainsCfg;
      this._refererEndsCfg.internalValue = value.refererEndsCfg;
      this._refererEqualsCfg.internalValue = value.refererEqualsCfg;
      this._refererStartsCfg.internalValue = value.refererStartsCfg;
    }
  }

  // referer_contains_cfg - computed: false, optional: true, required: false
  private _refererContainsCfg = new DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfgList(this, "referer_contains_cfg", false);
  public get refererContainsCfg() {
    return this._refererContainsCfg;
  }
  public putRefererContainsCfg(value: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererContainsCfg[] | cdktf.IResolvable) {
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
  private _refererEndsCfg = new DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfgList(this, "referer_ends_cfg", false);
  public get refererEndsCfg() {
    return this._refererEndsCfg;
  }
  public putRefererEndsCfg(value: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEndsCfg[] | cdktf.IResolvable) {
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
  private _refererEqualsCfg = new DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfgList(this, "referer_equals_cfg", false);
  public get refererEqualsCfg() {
    return this._refererEqualsCfg;
  }
  public putRefererEqualsCfg(value: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererEqualsCfg[] | cdktf.IResolvable) {
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
  private _refererStartsCfg = new DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfgList(this, "referer_starts_cfg", false);
  public get refererStartsCfg() {
    return this._refererStartsCfg;
  }
  public putRefererStartsCfg(value: DdosZoneTemplateHttpFilterListHttpRefererCfgRefererStartsCfg[] | cdktf.IResolvable) {
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
export interface DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_uri_contains DdosZoneTemplateHttp#http_filter_uri_contains}
  */
  readonly httpFilterUriContains?: string;
}

export function ddosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_uri_contains: cdktf.stringToTerraform(struct!.httpFilterUriContains),
  }
}


export function ddosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_uri_contains: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterUriContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterUriContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterUriContains = this._httpFilterUriContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterUriContains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterUriContains = value.httpFilterUriContains;
    }
  }

  // http_filter_uri_contains - computed: false, optional: true, required: false
  private _httpFilterUriContains?: string; 
  public get httpFilterUriContains() {
    return this.getStringAttribute('http_filter_uri_contains');
  }
  public set httpFilterUriContains(value: string) {
    this._httpFilterUriContains = value;
  }
  public resetHttpFilterUriContains() {
    this._httpFilterUriContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterUriContainsInput() {
    return this._httpFilterUriContains;
  }
}

export class DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_uri_ends_with DdosZoneTemplateHttp#http_filter_uri_ends_with}
  */
  readonly httpFilterUriEndsWith?: string;
}

export function ddosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_uri_ends_with: cdktf.stringToTerraform(struct!.httpFilterUriEndsWith),
  }
}


export function ddosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_uri_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterUriEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterUriEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterUriEndsWith = this._httpFilterUriEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterUriEndsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterUriEndsWith = value.httpFilterUriEndsWith;
    }
  }

  // http_filter_uri_ends_with - computed: false, optional: true, required: false
  private _httpFilterUriEndsWith?: string; 
  public get httpFilterUriEndsWith() {
    return this.getStringAttribute('http_filter_uri_ends_with');
  }
  public set httpFilterUriEndsWith(value: string) {
    this._httpFilterUriEndsWith = value;
  }
  public resetHttpFilterUriEndsWith() {
    this._httpFilterUriEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterUriEndsWithInput() {
    return this._httpFilterUriEndsWith;
  }
}

export class DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_uri_equals DdosZoneTemplateHttp#http_filter_uri_equals}
  */
  readonly httpFilterUriEquals?: string;
}

export function ddosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_uri_equals: cdktf.stringToTerraform(struct!.httpFilterUriEquals),
  }
}


export function ddosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_uri_equals: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterUriEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterUriEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterUriEquals = this._httpFilterUriEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterUriEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterUriEquals = value.httpFilterUriEquals;
    }
  }

  // http_filter_uri_equals - computed: false, optional: true, required: false
  private _httpFilterUriEquals?: string; 
  public get httpFilterUriEquals() {
    return this.getStringAttribute('http_filter_uri_equals');
  }
  public set httpFilterUriEquals(value: string) {
    this._httpFilterUriEquals = value;
  }
  public resetHttpFilterUriEquals() {
    this._httpFilterUriEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterUriEqualsInput() {
    return this._httpFilterUriEquals;
  }
}

export class DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfgOutputReference {
    return new DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_uri_starts_with DdosZoneTemplateHttp#http_filter_uri_starts_with}
  */
  readonly httpFilterUriStartsWith?: string;
}

export function ddosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_uri_starts_with: cdktf.stringToTerraform(struct!.httpFilterUriStartsWith),
  }
}


export function ddosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_uri_starts_with: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterUriStartsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterUriStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterUriStartsWith = this._httpFilterUriStartsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterUriStartsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterUriStartsWith = value.httpFilterUriStartsWith;
    }
  }

  // http_filter_uri_starts_with - computed: false, optional: true, required: false
  private _httpFilterUriStartsWith?: string; 
  public get httpFilterUriStartsWith() {
    return this.getStringAttribute('http_filter_uri_starts_with');
  }
  public set httpFilterUriStartsWith(value: string) {
    this._httpFilterUriStartsWith = value;
  }
  public resetHttpFilterUriStartsWith() {
    this._httpFilterUriStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterUriStartsWithInput() {
    return this._httpFilterUriStartsWith;
  }
}

export class DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterListHttpUriCfg {
  /**
  * uri_contains_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#uri_contains_cfg DdosZoneTemplateHttp#uri_contains_cfg}
  */
  readonly uriContainsCfg?: DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfg[] | cdktf.IResolvable;
  /**
  * uri_ends_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#uri_ends_cfg DdosZoneTemplateHttp#uri_ends_cfg}
  */
  readonly uriEndsCfg?: DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfg[] | cdktf.IResolvable;
  /**
  * uri_equal_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#uri_equal_cfg DdosZoneTemplateHttp#uri_equal_cfg}
  */
  readonly uriEqualCfg?: DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfg[] | cdktf.IResolvable;
  /**
  * uri_starts_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#uri_starts_cfg DdosZoneTemplateHttp#uri_starts_cfg}
  */
  readonly uriStartsCfg?: DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfg[] | cdktf.IResolvable;
}

export function ddosZoneTemplateHttpFilterListHttpUriCfgToTerraform(struct?: DdosZoneTemplateHttpFilterListHttpUriCfgOutputReference | DdosZoneTemplateHttpFilterListHttpUriCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri_contains_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfgToTerraform, true)(struct!.uriContainsCfg),
    uri_ends_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfgToTerraform, true)(struct!.uriEndsCfg),
    uri_equal_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfgToTerraform, true)(struct!.uriEqualCfg),
    uri_starts_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfgToTerraform, true)(struct!.uriStartsCfg),
  }
}


export function ddosZoneTemplateHttpFilterListHttpUriCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterListHttpUriCfgOutputReference | DdosZoneTemplateHttpFilterListHttpUriCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri_contains_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfgToHclTerraform, true)(struct!.uriContainsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfgList",
    },
    uri_ends_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfgToHclTerraform, true)(struct!.uriEndsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfgList",
    },
    uri_equal_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfgToHclTerraform, true)(struct!.uriEqualCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfgList",
    },
    uri_starts_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfgToHclTerraform, true)(struct!.uriStartsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListHttpUriCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpFilterListHttpUriCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uriContainsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriContainsCfg = this._uriContainsCfg?.internalValue;
    }
    if (this._uriEndsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriEndsCfg = this._uriEndsCfg?.internalValue;
    }
    if (this._uriEqualCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriEqualCfg = this._uriEqualCfg?.internalValue;
    }
    if (this._uriStartsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriStartsCfg = this._uriStartsCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListHttpUriCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uriContainsCfg.internalValue = undefined;
      this._uriEndsCfg.internalValue = undefined;
      this._uriEqualCfg.internalValue = undefined;
      this._uriStartsCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uriContainsCfg.internalValue = value.uriContainsCfg;
      this._uriEndsCfg.internalValue = value.uriEndsCfg;
      this._uriEqualCfg.internalValue = value.uriEqualCfg;
      this._uriStartsCfg.internalValue = value.uriStartsCfg;
    }
  }

  // uri_contains_cfg - computed: false, optional: true, required: false
  private _uriContainsCfg = new DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfgList(this, "uri_contains_cfg", false);
  public get uriContainsCfg() {
    return this._uriContainsCfg;
  }
  public putUriContainsCfg(value: DdosZoneTemplateHttpFilterListHttpUriCfgUriContainsCfg[] | cdktf.IResolvable) {
    this._uriContainsCfg.internalValue = value;
  }
  public resetUriContainsCfg() {
    this._uriContainsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriContainsCfgInput() {
    return this._uriContainsCfg.internalValue;
  }

  // uri_ends_cfg - computed: false, optional: true, required: false
  private _uriEndsCfg = new DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfgList(this, "uri_ends_cfg", false);
  public get uriEndsCfg() {
    return this._uriEndsCfg;
  }
  public putUriEndsCfg(value: DdosZoneTemplateHttpFilterListHttpUriCfgUriEndsCfg[] | cdktf.IResolvable) {
    this._uriEndsCfg.internalValue = value;
  }
  public resetUriEndsCfg() {
    this._uriEndsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriEndsCfgInput() {
    return this._uriEndsCfg.internalValue;
  }

  // uri_equal_cfg - computed: false, optional: true, required: false
  private _uriEqualCfg = new DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfgList(this, "uri_equal_cfg", false);
  public get uriEqualCfg() {
    return this._uriEqualCfg;
  }
  public putUriEqualCfg(value: DdosZoneTemplateHttpFilterListHttpUriCfgUriEqualCfg[] | cdktf.IResolvable) {
    this._uriEqualCfg.internalValue = value;
  }
  public resetUriEqualCfg() {
    this._uriEqualCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriEqualCfgInput() {
    return this._uriEqualCfg.internalValue;
  }

  // uri_starts_cfg - computed: false, optional: true, required: false
  private _uriStartsCfg = new DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfgList(this, "uri_starts_cfg", false);
  public get uriStartsCfg() {
    return this._uriStartsCfg;
  }
  public putUriStartsCfg(value: DdosZoneTemplateHttpFilterListHttpUriCfgUriStartsCfg[] | cdktf.IResolvable) {
    this._uriStartsCfg.internalValue = value;
  }
  public resetUriStartsCfg() {
    this._uriStartsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriStartsCfgInput() {
    return this._uriStartsCfg.internalValue;
  }
}
export interface DdosZoneTemplateHttpFilterListStruct {
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'authenticate-src': Authenticate-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_action DdosZoneTemplateHttp#http_filter_action}
  */
  readonly httpFilterAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_action_list_name DdosZoneTemplateHttp#http_filter_action_list_name}
  */
  readonly httpFilterActionListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_name DdosZoneTemplateHttp#http_filter_name}
  */
  readonly httpFilterName: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_filter_seq DdosZoneTemplateHttp#http_filter_seq}
  */
  readonly httpFilterSeq?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#user_tag DdosZoneTemplateHttp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#uuid DdosZoneTemplateHttp#uuid}
  */
  readonly uuid?: string;
  /**
  * dst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#dst DdosZoneTemplateHttp#dst}
  */
  readonly dst?: DdosZoneTemplateHttpFilterListDst;
  /**
  * http_agent_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_agent_cfg DdosZoneTemplateHttp#http_agent_cfg}
  */
  readonly httpAgentCfg?: DdosZoneTemplateHttpFilterListHttpAgentCfg;
  /**
  * http_header_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_header_cfg DdosZoneTemplateHttp#http_header_cfg}
  */
  readonly httpHeaderCfg?: DdosZoneTemplateHttpFilterListHttpHeaderCfg;
  /**
  * http_referer_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_referer_cfg DdosZoneTemplateHttp#http_referer_cfg}
  */
  readonly httpRefererCfg?: DdosZoneTemplateHttpFilterListHttpRefererCfg;
  /**
  * http_uri_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_uri_cfg DdosZoneTemplateHttp#http_uri_cfg}
  */
  readonly httpUriCfg?: DdosZoneTemplateHttpFilterListHttpUriCfg;
}

export function ddosZoneTemplateHttpFilterListStructToTerraform(struct?: DdosZoneTemplateHttpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_action: cdktf.stringToTerraform(struct!.httpFilterAction),
    http_filter_action_list_name: cdktf.stringToTerraform(struct!.httpFilterActionListName),
    http_filter_name: cdktf.stringToTerraform(struct!.httpFilterName),
    http_filter_seq: cdktf.numberToTerraform(struct!.httpFilterSeq),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dst: ddosZoneTemplateHttpFilterListDstToTerraform(struct!.dst),
    http_agent_cfg: ddosZoneTemplateHttpFilterListHttpAgentCfgToTerraform(struct!.httpAgentCfg),
    http_header_cfg: ddosZoneTemplateHttpFilterListHttpHeaderCfgToTerraform(struct!.httpHeaderCfg),
    http_referer_cfg: ddosZoneTemplateHttpFilterListHttpRefererCfgToTerraform(struct!.httpRefererCfg),
    http_uri_cfg: ddosZoneTemplateHttpFilterListHttpUriCfgToTerraform(struct!.httpUriCfg),
  }
}


export function ddosZoneTemplateHttpFilterListStructToHclTerraform(struct?: DdosZoneTemplateHttpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_action: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_filter_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_filter_seq: {
      value: cdktf.numberToHclTerraform(struct!.httpFilterSeq),
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
    dst: {
      value: ddosZoneTemplateHttpFilterListDstToHclTerraform(struct!.dst),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListDstList",
    },
    http_agent_cfg: {
      value: ddosZoneTemplateHttpFilterListHttpAgentCfgToHclTerraform(struct!.httpAgentCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpAgentCfgList",
    },
    http_header_cfg: {
      value: ddosZoneTemplateHttpFilterListHttpHeaderCfgToHclTerraform(struct!.httpHeaderCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpHeaderCfgList",
    },
    http_referer_cfg: {
      value: ddosZoneTemplateHttpFilterListHttpRefererCfgToHclTerraform(struct!.httpRefererCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpRefererCfgList",
    },
    http_uri_cfg: {
      value: ddosZoneTemplateHttpFilterListHttpUriCfgToHclTerraform(struct!.httpUriCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterListHttpUriCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterAction = this._httpFilterAction;
    }
    if (this._httpFilterActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterActionListName = this._httpFilterActionListName;
    }
    if (this._httpFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterName = this._httpFilterName;
    }
    if (this._httpFilterSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterSeq = this._httpFilterSeq;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._dst?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst?.internalValue;
    }
    if (this._httpAgentCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAgentCfg = this._httpAgentCfg?.internalValue;
    }
    if (this._httpHeaderCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderCfg = this._httpHeaderCfg?.internalValue;
    }
    if (this._httpRefererCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRefererCfg = this._httpRefererCfg?.internalValue;
    }
    if (this._httpUriCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUriCfg = this._httpUriCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterAction = undefined;
      this._httpFilterActionListName = undefined;
      this._httpFilterName = undefined;
      this._httpFilterSeq = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._dst.internalValue = undefined;
      this._httpAgentCfg.internalValue = undefined;
      this._httpHeaderCfg.internalValue = undefined;
      this._httpRefererCfg.internalValue = undefined;
      this._httpUriCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterAction = value.httpFilterAction;
      this._httpFilterActionListName = value.httpFilterActionListName;
      this._httpFilterName = value.httpFilterName;
      this._httpFilterSeq = value.httpFilterSeq;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._dst.internalValue = value.dst;
      this._httpAgentCfg.internalValue = value.httpAgentCfg;
      this._httpHeaderCfg.internalValue = value.httpHeaderCfg;
      this._httpRefererCfg.internalValue = value.httpRefererCfg;
      this._httpUriCfg.internalValue = value.httpUriCfg;
    }
  }

  // http_filter_action - computed: false, optional: true, required: false
  private _httpFilterAction?: string; 
  public get httpFilterAction() {
    return this.getStringAttribute('http_filter_action');
  }
  public set httpFilterAction(value: string) {
    this._httpFilterAction = value;
  }
  public resetHttpFilterAction() {
    this._httpFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterActionInput() {
    return this._httpFilterAction;
  }

  // http_filter_action_list_name - computed: false, optional: true, required: false
  private _httpFilterActionListName?: string; 
  public get httpFilterActionListName() {
    return this.getStringAttribute('http_filter_action_list_name');
  }
  public set httpFilterActionListName(value: string) {
    this._httpFilterActionListName = value;
  }
  public resetHttpFilterActionListName() {
    this._httpFilterActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterActionListNameInput() {
    return this._httpFilterActionListName;
  }

  // http_filter_name - computed: false, optional: false, required: true
  private _httpFilterName?: string; 
  public get httpFilterName() {
    return this.getStringAttribute('http_filter_name');
  }
  public set httpFilterName(value: string) {
    this._httpFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterNameInput() {
    return this._httpFilterName;
  }

  // http_filter_seq - computed: false, optional: true, required: false
  private _httpFilterSeq?: number; 
  public get httpFilterSeq() {
    return this.getNumberAttribute('http_filter_seq');
  }
  public set httpFilterSeq(value: number) {
    this._httpFilterSeq = value;
  }
  public resetHttpFilterSeq() {
    this._httpFilterSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterSeqInput() {
    return this._httpFilterSeq;
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

  // dst - computed: false, optional: true, required: false
  private _dst = new DdosZoneTemplateHttpFilterListDstOutputReference(this, "dst");
  public get dst() {
    return this._dst;
  }
  public putDst(value: DdosZoneTemplateHttpFilterListDst) {
    this._dst.internalValue = value;
  }
  public resetDst() {
    this._dst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst.internalValue;
  }

  // http_agent_cfg - computed: false, optional: true, required: false
  private _httpAgentCfg = new DdosZoneTemplateHttpFilterListHttpAgentCfgOutputReference(this, "http_agent_cfg");
  public get httpAgentCfg() {
    return this._httpAgentCfg;
  }
  public putHttpAgentCfg(value: DdosZoneTemplateHttpFilterListHttpAgentCfg) {
    this._httpAgentCfg.internalValue = value;
  }
  public resetHttpAgentCfg() {
    this._httpAgentCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAgentCfgInput() {
    return this._httpAgentCfg.internalValue;
  }

  // http_header_cfg - computed: false, optional: true, required: false
  private _httpHeaderCfg = new DdosZoneTemplateHttpFilterListHttpHeaderCfgOutputReference(this, "http_header_cfg");
  public get httpHeaderCfg() {
    return this._httpHeaderCfg;
  }
  public putHttpHeaderCfg(value: DdosZoneTemplateHttpFilterListHttpHeaderCfg) {
    this._httpHeaderCfg.internalValue = value;
  }
  public resetHttpHeaderCfg() {
    this._httpHeaderCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderCfgInput() {
    return this._httpHeaderCfg.internalValue;
  }

  // http_referer_cfg - computed: false, optional: true, required: false
  private _httpRefererCfg = new DdosZoneTemplateHttpFilterListHttpRefererCfgOutputReference(this, "http_referer_cfg");
  public get httpRefererCfg() {
    return this._httpRefererCfg;
  }
  public putHttpRefererCfg(value: DdosZoneTemplateHttpFilterListHttpRefererCfg) {
    this._httpRefererCfg.internalValue = value;
  }
  public resetHttpRefererCfg() {
    this._httpRefererCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRefererCfgInput() {
    return this._httpRefererCfg.internalValue;
  }

  // http_uri_cfg - computed: false, optional: true, required: false
  private _httpUriCfg = new DdosZoneTemplateHttpFilterListHttpUriCfgOutputReference(this, "http_uri_cfg");
  public get httpUriCfg() {
    return this._httpUriCfg;
  }
  public putHttpUriCfg(value: DdosZoneTemplateHttpFilterListHttpUriCfg) {
    this._httpUriCfg.internalValue = value;
  }
  public resetHttpUriCfg() {
    this._httpUriCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUriCfgInput() {
    return this._httpUriCfg.internalValue;
  }
}

export class DdosZoneTemplateHttpFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterListStructOutputReference {
    return new DdosZoneTemplateHttpFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpIdleTimeout {
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#idle_timeout_action DdosZoneTemplateHttp#idle_timeout_action}
  */
  readonly idleTimeoutAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#idle_timeout_action_list_name DdosZoneTemplateHttp#idle_timeout_action_list_name}
  */
  readonly idleTimeoutActionListName?: string;
  /**
  * Set the the idle timeout value in seconds for HTTP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#idle_timeout_value DdosZoneTemplateHttp#idle_timeout_value}
  */
  readonly idleTimeoutValue?: number;
  /**
  * Don't reset idle timer on packets with zero payload length from clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#ignore_zero_payload DdosZoneTemplateHttp#ignore_zero_payload}
  */
  readonly ignoreZeroPayload?: number;
}

export function ddosZoneTemplateHttpIdleTimeoutToTerraform(struct?: DdosZoneTemplateHttpIdleTimeoutOutputReference | DdosZoneTemplateHttpIdleTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_action: cdktf.stringToTerraform(struct!.idleTimeoutAction),
    idle_timeout_action_list_name: cdktf.stringToTerraform(struct!.idleTimeoutActionListName),
    idle_timeout_value: cdktf.numberToTerraform(struct!.idleTimeoutValue),
    ignore_zero_payload: cdktf.numberToTerraform(struct!.ignoreZeroPayload),
  }
}


export function ddosZoneTemplateHttpIdleTimeoutToHclTerraform(struct?: DdosZoneTemplateHttpIdleTimeoutOutputReference | DdosZoneTemplateHttpIdleTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_action: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeoutAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeoutActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout_value: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_zero_payload: {
      value: cdktf.numberToHclTerraform(struct!.ignoreZeroPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpIdleTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpIdleTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutAction = this._idleTimeoutAction;
    }
    if (this._idleTimeoutActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutActionListName = this._idleTimeoutActionListName;
    }
    if (this._idleTimeoutValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutValue = this._idleTimeoutValue;
    }
    if (this._ignoreZeroPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreZeroPayload = this._ignoreZeroPayload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpIdleTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutAction = undefined;
      this._idleTimeoutActionListName = undefined;
      this._idleTimeoutValue = undefined;
      this._ignoreZeroPayload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutAction = value.idleTimeoutAction;
      this._idleTimeoutActionListName = value.idleTimeoutActionListName;
      this._idleTimeoutValue = value.idleTimeoutValue;
      this._ignoreZeroPayload = value.ignoreZeroPayload;
    }
  }

  // idle_timeout_action - computed: false, optional: true, required: false
  private _idleTimeoutAction?: string; 
  public get idleTimeoutAction() {
    return this.getStringAttribute('idle_timeout_action');
  }
  public set idleTimeoutAction(value: string) {
    this._idleTimeoutAction = value;
  }
  public resetIdleTimeoutAction() {
    this._idleTimeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutActionInput() {
    return this._idleTimeoutAction;
  }

  // idle_timeout_action_list_name - computed: false, optional: true, required: false
  private _idleTimeoutActionListName?: string; 
  public get idleTimeoutActionListName() {
    return this.getStringAttribute('idle_timeout_action_list_name');
  }
  public set idleTimeoutActionListName(value: string) {
    this._idleTimeoutActionListName = value;
  }
  public resetIdleTimeoutActionListName() {
    this._idleTimeoutActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutActionListNameInput() {
    return this._idleTimeoutActionListName;
  }

  // idle_timeout_value - computed: false, optional: true, required: false
  private _idleTimeoutValue?: number; 
  public get idleTimeoutValue() {
    return this.getNumberAttribute('idle_timeout_value');
  }
  public set idleTimeoutValue(value: number) {
    this._idleTimeoutValue = value;
  }
  public resetIdleTimeoutValue() {
    this._idleTimeoutValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutValueInput() {
    return this._idleTimeoutValue;
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
}
export interface DdosZoneTemplateHttpMalformedHttp {
  /**
  * 'check': Configure malformed HTTP parameters;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#malformed_http DdosZoneTemplateHttp#malformed_http}
  */
  readonly malformedHttp?: string;
  /**
  * 'drop': Drop packets (Default); 'reset': Reset client connection; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#malformed_http_action DdosZoneTemplateHttp#malformed_http_action}
  */
  readonly malformedHttpAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#malformed_http_action_list_name DdosZoneTemplateHttp#malformed_http_action_list_name}
  */
  readonly malformedHttpActionListName?: string;
  /**
  * Enabling bad chunk monitoring. Default is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#malformed_http_bad_chunk_mon_enabled DdosZoneTemplateHttp#malformed_http_bad_chunk_mon_enabled}
  */
  readonly malformedHttpBadChunkMonEnabled?: number;
  /**
  * Set the maxinum content-length header. Default value is 4294967295 bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#malformed_http_max_content_length DdosZoneTemplateHttp#malformed_http_max_content_length}
  */
  readonly malformedHttpMaxContentLength?: number;
  /**
  * Set the maxinum header name length. Default value is 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#malformed_http_max_header_name_size DdosZoneTemplateHttp#malformed_http_max_header_name_size}
  */
  readonly malformedHttpMaxHeaderNameSize?: number;
  /**
  * Set the maximum line size. Default value is 32512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#malformed_http_max_line_size DdosZoneTemplateHttp#malformed_http_max_line_size}
  */
  readonly malformedHttpMaxLineSize?: number;
  /**
  * Set the maximum number of headers. Default value is 90
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#malformed_http_max_num_headers DdosZoneTemplateHttp#malformed_http_max_num_headers}
  */
  readonly malformedHttpMaxNumHeaders?: number;
  /**
  * Set the maximum request line size. Default value is 32512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#malformed_http_max_req_line_size DdosZoneTemplateHttp#malformed_http_max_req_line_size}
  */
  readonly malformedHttpMaxReqLineSize?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#uuid DdosZoneTemplateHttp#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneTemplateHttpMalformedHttpToTerraform(struct?: DdosZoneTemplateHttpMalformedHttpOutputReference | DdosZoneTemplateHttpMalformedHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    malformed_http: cdktf.stringToTerraform(struct!.malformedHttp),
    malformed_http_action: cdktf.stringToTerraform(struct!.malformedHttpAction),
    malformed_http_action_list_name: cdktf.stringToTerraform(struct!.malformedHttpActionListName),
    malformed_http_bad_chunk_mon_enabled: cdktf.numberToTerraform(struct!.malformedHttpBadChunkMonEnabled),
    malformed_http_max_content_length: cdktf.numberToTerraform(struct!.malformedHttpMaxContentLength),
    malformed_http_max_header_name_size: cdktf.numberToTerraform(struct!.malformedHttpMaxHeaderNameSize),
    malformed_http_max_line_size: cdktf.numberToTerraform(struct!.malformedHttpMaxLineSize),
    malformed_http_max_num_headers: cdktf.numberToTerraform(struct!.malformedHttpMaxNumHeaders),
    malformed_http_max_req_line_size: cdktf.numberToTerraform(struct!.malformedHttpMaxReqLineSize),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosZoneTemplateHttpMalformedHttpToHclTerraform(struct?: DdosZoneTemplateHttpMalformedHttpOutputReference | DdosZoneTemplateHttpMalformedHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    malformed_http: {
      value: cdktf.stringToHclTerraform(struct!.malformedHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_http_action: {
      value: cdktf.stringToHclTerraform(struct!.malformedHttpAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_http_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.malformedHttpActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_http_bad_chunk_mon_enabled: {
      value: cdktf.numberToHclTerraform(struct!.malformedHttpBadChunkMonEnabled),
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

export class DdosZoneTemplateHttpMalformedHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpMalformedHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._malformedHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHttp = this._malformedHttp;
    }
    if (this._malformedHttpAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHttpAction = this._malformedHttpAction;
    }
    if (this._malformedHttpActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHttpActionListName = this._malformedHttpActionListName;
    }
    if (this._malformedHttpBadChunkMonEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHttpBadChunkMonEnabled = this._malformedHttpBadChunkMonEnabled;
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
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpMalformedHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._malformedHttp = undefined;
      this._malformedHttpAction = undefined;
      this._malformedHttpActionListName = undefined;
      this._malformedHttpBadChunkMonEnabled = undefined;
      this._malformedHttpMaxContentLength = undefined;
      this._malformedHttpMaxHeaderNameSize = undefined;
      this._malformedHttpMaxLineSize = undefined;
      this._malformedHttpMaxNumHeaders = undefined;
      this._malformedHttpMaxReqLineSize = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._malformedHttp = value.malformedHttp;
      this._malformedHttpAction = value.malformedHttpAction;
      this._malformedHttpActionListName = value.malformedHttpActionListName;
      this._malformedHttpBadChunkMonEnabled = value.malformedHttpBadChunkMonEnabled;
      this._malformedHttpMaxContentLength = value.malformedHttpMaxContentLength;
      this._malformedHttpMaxHeaderNameSize = value.malformedHttpMaxHeaderNameSize;
      this._malformedHttpMaxLineSize = value.malformedHttpMaxLineSize;
      this._malformedHttpMaxNumHeaders = value.malformedHttpMaxNumHeaders;
      this._malformedHttpMaxReqLineSize = value.malformedHttpMaxReqLineSize;
      this._uuid = value.uuid;
    }
  }

  // malformed_http - computed: false, optional: true, required: false
  private _malformedHttp?: string; 
  public get malformedHttp() {
    return this.getStringAttribute('malformed_http');
  }
  public set malformedHttp(value: string) {
    this._malformedHttp = value;
  }
  public resetMalformedHttp() {
    this._malformedHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpInput() {
    return this._malformedHttp;
  }

  // malformed_http_action - computed: false, optional: true, required: false
  private _malformedHttpAction?: string; 
  public get malformedHttpAction() {
    return this.getStringAttribute('malformed_http_action');
  }
  public set malformedHttpAction(value: string) {
    this._malformedHttpAction = value;
  }
  public resetMalformedHttpAction() {
    this._malformedHttpAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpActionInput() {
    return this._malformedHttpAction;
  }

  // malformed_http_action_list_name - computed: false, optional: true, required: false
  private _malformedHttpActionListName?: string; 
  public get malformedHttpActionListName() {
    return this.getStringAttribute('malformed_http_action_list_name');
  }
  public set malformedHttpActionListName(value: string) {
    this._malformedHttpActionListName = value;
  }
  public resetMalformedHttpActionListName() {
    this._malformedHttpActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpActionListNameInput() {
    return this._malformedHttpActionListName;
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
export interface DdosZoneTemplateHttpMssTimeout {
  /**
  * Configure percentage of mss such that if a packet size is below the mss times mss-percent, packet is considered bad.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#mss_percent DdosZoneTemplateHttp#mss_percent}
  */
  readonly mssPercent?: number;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#mss_timeout_action DdosZoneTemplateHttp#mss_timeout_action}
  */
  readonly mssTimeoutAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#mss_timeout_action_list_name DdosZoneTemplateHttp#mss_timeout_action_list_name}
  */
  readonly mssTimeoutActionListName?: string;
  /**
  * Specify percentage of mss. Default is 0, mss-timeout is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#number_packets DdosZoneTemplateHttp#number_packets}
  */
  readonly numberPackets?: number;
}

export function ddosZoneTemplateHttpMssTimeoutToTerraform(struct?: DdosZoneTemplateHttpMssTimeoutOutputReference | DdosZoneTemplateHttpMssTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mss_percent: cdktf.numberToTerraform(struct!.mssPercent),
    mss_timeout_action: cdktf.stringToTerraform(struct!.mssTimeoutAction),
    mss_timeout_action_list_name: cdktf.stringToTerraform(struct!.mssTimeoutActionListName),
    number_packets: cdktf.numberToTerraform(struct!.numberPackets),
  }
}


export function ddosZoneTemplateHttpMssTimeoutToHclTerraform(struct?: DdosZoneTemplateHttpMssTimeoutOutputReference | DdosZoneTemplateHttpMssTimeout): any {
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
    mss_timeout_action: {
      value: cdktf.stringToHclTerraform(struct!.mssTimeoutAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mss_timeout_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.mssTimeoutActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DdosZoneTemplateHttpMssTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpMssTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mssPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssPercent = this._mssPercent;
    }
    if (this._mssTimeoutAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssTimeoutAction = this._mssTimeoutAction;
    }
    if (this._mssTimeoutActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssTimeoutActionListName = this._mssTimeoutActionListName;
    }
    if (this._numberPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberPackets = this._numberPackets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpMssTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mssPercent = undefined;
      this._mssTimeoutAction = undefined;
      this._mssTimeoutActionListName = undefined;
      this._numberPackets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mssPercent = value.mssPercent;
      this._mssTimeoutAction = value.mssTimeoutAction;
      this._mssTimeoutActionListName = value.mssTimeoutActionListName;
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

  // mss_timeout_action - computed: false, optional: true, required: false
  private _mssTimeoutAction?: string; 
  public get mssTimeoutAction() {
    return this.getStringAttribute('mss_timeout_action');
  }
  public set mssTimeoutAction(value: string) {
    this._mssTimeoutAction = value;
  }
  public resetMssTimeoutAction() {
    this._mssTimeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssTimeoutActionInput() {
    return this._mssTimeoutAction;
  }

  // mss_timeout_action_list_name - computed: false, optional: true, required: false
  private _mssTimeoutActionListName?: string; 
  public get mssTimeoutActionListName() {
    return this.getStringAttribute('mss_timeout_action_list_name');
  }
  public set mssTimeoutActionListName(value: string) {
    this._mssTimeoutActionListName = value;
  }
  public resetMssTimeoutActionListName() {
    this._mssTimeoutActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssTimeoutActionListNameInput() {
    return this._mssTimeoutActionListName;
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
export interface DdosZoneTemplateHttpMultiPuThresholdDistribution {
  /**
  * 'disable': Destination side rate limit only. Default: Enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#multi_pu_threshold_distribution_disable DdosZoneTemplateHttp#multi_pu_threshold_distribution_disable}
  */
  readonly multiPuThresholdDistributionDisable?: string;
  /**
  * Destination side rate limit only. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#multi_pu_threshold_distribution_value DdosZoneTemplateHttp#multi_pu_threshold_distribution_value}
  */
  readonly multiPuThresholdDistributionValue?: number;
}

export function ddosZoneTemplateHttpMultiPuThresholdDistributionToTerraform(struct?: DdosZoneTemplateHttpMultiPuThresholdDistributionOutputReference | DdosZoneTemplateHttpMultiPuThresholdDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multi_pu_threshold_distribution_disable: cdktf.stringToTerraform(struct!.multiPuThresholdDistributionDisable),
    multi_pu_threshold_distribution_value: cdktf.numberToTerraform(struct!.multiPuThresholdDistributionValue),
  }
}


export function ddosZoneTemplateHttpMultiPuThresholdDistributionToHclTerraform(struct?: DdosZoneTemplateHttpMultiPuThresholdDistributionOutputReference | DdosZoneTemplateHttpMultiPuThresholdDistribution): any {
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

export class DdosZoneTemplateHttpMultiPuThresholdDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpMultiPuThresholdDistribution | undefined {
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

  public set internalValue(value: DdosZoneTemplateHttpMultiPuThresholdDistribution | undefined) {
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
export interface DdosZoneTemplateHttpRequestHeader {
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#header_timeout_action DdosZoneTemplateHttp#header_timeout_action}
  */
  readonly headerTimeoutAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#header_timeout_action_list_name DdosZoneTemplateHttp#header_timeout_action_list_name}
  */
  readonly headerTimeoutActionListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#timeout DdosZoneTemplateHttp#timeout}
  */
  readonly timeout?: number;
}

export function ddosZoneTemplateHttpRequestHeaderToTerraform(struct?: DdosZoneTemplateHttpRequestHeaderOutputReference | DdosZoneTemplateHttpRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_timeout_action: cdktf.stringToTerraform(struct!.headerTimeoutAction),
    header_timeout_action_list_name: cdktf.stringToTerraform(struct!.headerTimeoutActionListName),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function ddosZoneTemplateHttpRequestHeaderToHclTerraform(struct?: DdosZoneTemplateHttpRequestHeaderOutputReference | DdosZoneTemplateHttpRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_timeout_action: {
      value: cdktf.stringToHclTerraform(struct!.headerTimeoutAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_timeout_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.headerTimeoutActionListName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpRequestHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpRequestHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerTimeoutAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTimeoutAction = this._headerTimeoutAction;
    }
    if (this._headerTimeoutActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTimeoutActionListName = this._headerTimeoutActionListName;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpRequestHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerTimeoutAction = undefined;
      this._headerTimeoutActionListName = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerTimeoutAction = value.headerTimeoutAction;
      this._headerTimeoutActionListName = value.headerTimeoutActionListName;
      this._timeout = value.timeout;
    }
  }

  // header_timeout_action - computed: false, optional: true, required: false
  private _headerTimeoutAction?: string; 
  public get headerTimeoutAction() {
    return this.getStringAttribute('header_timeout_action');
  }
  public set headerTimeoutAction(value: string) {
    this._headerTimeoutAction = value;
  }
  public resetHeaderTimeoutAction() {
    this._headerTimeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTimeoutActionInput() {
    return this._headerTimeoutAction;
  }

  // header_timeout_action_list_name - computed: false, optional: true, required: false
  private _headerTimeoutActionListName?: string; 
  public get headerTimeoutActionListName() {
    return this.getStringAttribute('header_timeout_action_list_name');
  }
  public set headerTimeoutActionListName(value: string) {
    this._headerTimeoutActionListName = value;
  }
  public resetHeaderTimeoutActionListName() {
    this._headerTimeoutActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTimeoutActionListNameInput() {
    return this._headerTimeoutActionListName;
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
export interface DdosZoneTemplateHttpSlowRead {
  /**
  * Number of packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#min_window_count DdosZoneTemplateHttp#min_window_count}
  */
  readonly minWindowCount?: number;
  /**
  * minimum window size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#min_window_size DdosZoneTemplateHttp#min_window_size}
  */
  readonly minWindowSize?: number;
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src; 'ignore': Take no action; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#slow_read_action DdosZoneTemplateHttp#slow_read_action}
  */
  readonly slowReadAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#slow_read_action_list_name DdosZoneTemplateHttp#slow_read_action_list_name}
  */
  readonly slowReadActionListName?: string;
}

export function ddosZoneTemplateHttpSlowReadToTerraform(struct?: DdosZoneTemplateHttpSlowReadOutputReference | DdosZoneTemplateHttpSlowRead): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_window_count: cdktf.numberToTerraform(struct!.minWindowCount),
    min_window_size: cdktf.numberToTerraform(struct!.minWindowSize),
    slow_read_action: cdktf.stringToTerraform(struct!.slowReadAction),
    slow_read_action_list_name: cdktf.stringToTerraform(struct!.slowReadActionListName),
  }
}


export function ddosZoneTemplateHttpSlowReadToHclTerraform(struct?: DdosZoneTemplateHttpSlowReadOutputReference | DdosZoneTemplateHttpSlowRead): any {
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
    slow_read_action: {
      value: cdktf.stringToHclTerraform(struct!.slowReadAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slow_read_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.slowReadActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpSlowReadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpSlowRead | undefined {
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
    if (this._slowReadAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowReadAction = this._slowReadAction;
    }
    if (this._slowReadActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowReadActionListName = this._slowReadActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpSlowRead | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minWindowCount = undefined;
      this._minWindowSize = undefined;
      this._slowReadAction = undefined;
      this._slowReadActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minWindowCount = value.minWindowCount;
      this._minWindowSize = value.minWindowSize;
      this._slowReadAction = value.slowReadAction;
      this._slowReadActionListName = value.slowReadActionListName;
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

  // slow_read_action - computed: false, optional: true, required: false
  private _slowReadAction?: string; 
  public get slowReadAction() {
    return this.getStringAttribute('slow_read_action');
  }
  public set slowReadAction(value: string) {
    this._slowReadAction = value;
  }
  public resetSlowReadAction() {
    this._slowReadAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowReadActionInput() {
    return this._slowReadAction;
  }

  // slow_read_action_list_name - computed: false, optional: true, required: false
  private _slowReadActionListName?: string; 
  public get slowReadActionListName() {
    return this.getStringAttribute('slow_read_action_list_name');
  }
  public set slowReadActionListName(value: string) {
    this._slowReadActionListName = value;
  }
  public resetSlowReadActionListName() {
    this._slowReadActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowReadActionListNameInput() {
    return this._slowReadActionListName;
  }
}
export interface DdosZoneTemplateHttpSrcRateLimitHttpPost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#src_post_rate_limit DdosZoneTemplateHttp#src_post_rate_limit}
  */
  readonly srcPostRateLimit?: number;
  /**
  * 'drop': Drop packets(Default); 'ignore': Take no action; 'reset': Reset client connection; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#src_post_rate_limit_action DdosZoneTemplateHttp#src_post_rate_limit_action}
  */
  readonly srcPostRateLimitAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#src_post_rate_limit_action_list_name DdosZoneTemplateHttp#src_post_rate_limit_action_list_name}
  */
  readonly srcPostRateLimitActionListName?: string;
}

export function ddosZoneTemplateHttpSrcRateLimitHttpPostToTerraform(struct?: DdosZoneTemplateHttpSrcRateLimitHttpPostOutputReference | DdosZoneTemplateHttpSrcRateLimitHttpPost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_post_rate_limit: cdktf.numberToTerraform(struct!.srcPostRateLimit),
    src_post_rate_limit_action: cdktf.stringToTerraform(struct!.srcPostRateLimitAction),
    src_post_rate_limit_action_list_name: cdktf.stringToTerraform(struct!.srcPostRateLimitActionListName),
  }
}


export function ddosZoneTemplateHttpSrcRateLimitHttpPostToHclTerraform(struct?: DdosZoneTemplateHttpSrcRateLimitHttpPostOutputReference | DdosZoneTemplateHttpSrcRateLimitHttpPost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_post_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.srcPostRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_post_rate_limit_action: {
      value: cdktf.stringToHclTerraform(struct!.srcPostRateLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_post_rate_limit_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.srcPostRateLimitActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpSrcRateLimitHttpPostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpSrcRateLimitHttpPost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcPostRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPostRateLimit = this._srcPostRateLimit;
    }
    if (this._srcPostRateLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPostRateLimitAction = this._srcPostRateLimitAction;
    }
    if (this._srcPostRateLimitActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPostRateLimitActionListName = this._srcPostRateLimitActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpSrcRateLimitHttpPost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcPostRateLimit = undefined;
      this._srcPostRateLimitAction = undefined;
      this._srcPostRateLimitActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcPostRateLimit = value.srcPostRateLimit;
      this._srcPostRateLimitAction = value.srcPostRateLimitAction;
      this._srcPostRateLimitActionListName = value.srcPostRateLimitActionListName;
    }
  }

  // src_post_rate_limit - computed: false, optional: true, required: false
  private _srcPostRateLimit?: number; 
  public get srcPostRateLimit() {
    return this.getNumberAttribute('src_post_rate_limit');
  }
  public set srcPostRateLimit(value: number) {
    this._srcPostRateLimit = value;
  }
  public resetSrcPostRateLimit() {
    this._srcPostRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPostRateLimitInput() {
    return this._srcPostRateLimit;
  }

  // src_post_rate_limit_action - computed: false, optional: true, required: false
  private _srcPostRateLimitAction?: string; 
  public get srcPostRateLimitAction() {
    return this.getStringAttribute('src_post_rate_limit_action');
  }
  public set srcPostRateLimitAction(value: string) {
    this._srcPostRateLimitAction = value;
  }
  public resetSrcPostRateLimitAction() {
    this._srcPostRateLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPostRateLimitActionInput() {
    return this._srcPostRateLimitAction;
  }

  // src_post_rate_limit_action_list_name - computed: false, optional: true, required: false
  private _srcPostRateLimitActionListName?: string; 
  public get srcPostRateLimitActionListName() {
    return this.getStringAttribute('src_post_rate_limit_action_list_name');
  }
  public set srcPostRateLimitActionListName(value: string) {
    this._srcPostRateLimitActionListName = value;
  }
  public resetSrcPostRateLimitActionListName() {
    this._srcPostRateLimitActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPostRateLimitActionListNameInput() {
    return this._srcPostRateLimitActionListName;
  }
}
export interface DdosZoneTemplateHttpSrcRateLimitHttpRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#src_request_rate DdosZoneTemplateHttp#src_request_rate}
  */
  readonly srcRequestRate?: number;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'reset': Reset client connection; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#src_request_rate_limit_action DdosZoneTemplateHttp#src_request_rate_limit_action}
  */
  readonly srcRequestRateLimitAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#src_request_rate_limit_action_list_name DdosZoneTemplateHttp#src_request_rate_limit_action_list_name}
  */
  readonly srcRequestRateLimitActionListName?: string;
}

export function ddosZoneTemplateHttpSrcRateLimitHttpRequestToTerraform(struct?: DdosZoneTemplateHttpSrcRateLimitHttpRequestOutputReference | DdosZoneTemplateHttpSrcRateLimitHttpRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_request_rate: cdktf.numberToTerraform(struct!.srcRequestRate),
    src_request_rate_limit_action: cdktf.stringToTerraform(struct!.srcRequestRateLimitAction),
    src_request_rate_limit_action_list_name: cdktf.stringToTerraform(struct!.srcRequestRateLimitActionListName),
  }
}


export function ddosZoneTemplateHttpSrcRateLimitHttpRequestToHclTerraform(struct?: DdosZoneTemplateHttpSrcRateLimitHttpRequestOutputReference | DdosZoneTemplateHttpSrcRateLimitHttpRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_request_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcRequestRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_request_rate_limit_action: {
      value: cdktf.stringToHclTerraform(struct!.srcRequestRateLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_request_rate_limit_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.srcRequestRateLimitActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpSrcRateLimitHttpRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpSrcRateLimitHttpRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcRequestRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRequestRate = this._srcRequestRate;
    }
    if (this._srcRequestRateLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRequestRateLimitAction = this._srcRequestRateLimitAction;
    }
    if (this._srcRequestRateLimitActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRequestRateLimitActionListName = this._srcRequestRateLimitActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpSrcRateLimitHttpRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcRequestRate = undefined;
      this._srcRequestRateLimitAction = undefined;
      this._srcRequestRateLimitActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcRequestRate = value.srcRequestRate;
      this._srcRequestRateLimitAction = value.srcRequestRateLimitAction;
      this._srcRequestRateLimitActionListName = value.srcRequestRateLimitActionListName;
    }
  }

  // src_request_rate - computed: false, optional: true, required: false
  private _srcRequestRate?: number; 
  public get srcRequestRate() {
    return this.getNumberAttribute('src_request_rate');
  }
  public set srcRequestRate(value: number) {
    this._srcRequestRate = value;
  }
  public resetSrcRequestRate() {
    this._srcRequestRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRequestRateInput() {
    return this._srcRequestRate;
  }

  // src_request_rate_limit_action - computed: false, optional: true, required: false
  private _srcRequestRateLimitAction?: string; 
  public get srcRequestRateLimitAction() {
    return this.getStringAttribute('src_request_rate_limit_action');
  }
  public set srcRequestRateLimitAction(value: string) {
    this._srcRequestRateLimitAction = value;
  }
  public resetSrcRequestRateLimitAction() {
    this._srcRequestRateLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRequestRateLimitActionInput() {
    return this._srcRequestRateLimitAction;
  }

  // src_request_rate_limit_action_list_name - computed: false, optional: true, required: false
  private _srcRequestRateLimitActionListName?: string; 
  public get srcRequestRateLimitActionListName() {
    return this.getStringAttribute('src_request_rate_limit_action_list_name');
  }
  public set srcRequestRateLimitActionListName(value: string) {
    this._srcRequestRateLimitActionListName = value;
  }
  public resetSrcRequestRateLimitActionListName() {
    this._srcRequestRateLimitActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRequestRateLimitActionListNameInput() {
    return this._srcRequestRateLimitActionListName;
  }
}
export interface DdosZoneTemplateHttpSrcRateLimit {
  /**
  * http_post block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_post DdosZoneTemplateHttp#http_post}
  */
  readonly httpPost?: DdosZoneTemplateHttpSrcRateLimitHttpPost;
  /**
  * http_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#http_request DdosZoneTemplateHttp#http_request}
  */
  readonly httpRequest?: DdosZoneTemplateHttpSrcRateLimitHttpRequest;
}

export function ddosZoneTemplateHttpSrcRateLimitToTerraform(struct?: DdosZoneTemplateHttpSrcRateLimitOutputReference | DdosZoneTemplateHttpSrcRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_post: ddosZoneTemplateHttpSrcRateLimitHttpPostToTerraform(struct!.httpPost),
    http_request: ddosZoneTemplateHttpSrcRateLimitHttpRequestToTerraform(struct!.httpRequest),
  }
}


export function ddosZoneTemplateHttpSrcRateLimitToHclTerraform(struct?: DdosZoneTemplateHttpSrcRateLimitOutputReference | DdosZoneTemplateHttpSrcRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_post: {
      value: ddosZoneTemplateHttpSrcRateLimitHttpPostToHclTerraform(struct!.httpPost),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpSrcRateLimitHttpPostList",
    },
    http_request: {
      value: ddosZoneTemplateHttpSrcRateLimitHttpRequestToHclTerraform(struct!.httpRequest),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpSrcRateLimitHttpRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpSrcRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpSrcRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPost = this._httpPost?.internalValue;
    }
    if (this._httpRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequest = this._httpRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpSrcRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpPost.internalValue = undefined;
      this._httpRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpPost.internalValue = value.httpPost;
      this._httpRequest.internalValue = value.httpRequest;
    }
  }

  // http_post - computed: false, optional: true, required: false
  private _httpPost = new DdosZoneTemplateHttpSrcRateLimitHttpPostOutputReference(this, "http_post");
  public get httpPost() {
    return this._httpPost;
  }
  public putHttpPost(value: DdosZoneTemplateHttpSrcRateLimitHttpPost) {
    this._httpPost.internalValue = value;
  }
  public resetHttpPost() {
    this._httpPost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPostInput() {
    return this._httpPost.internalValue;
  }

  // http_request - computed: false, optional: true, required: false
  private _httpRequest = new DdosZoneTemplateHttpSrcRateLimitHttpRequestOutputReference(this, "http_request");
  public get httpRequest() {
    return this._httpRequest;
  }
  public putHttpRequest(value: DdosZoneTemplateHttpSrcRateLimitHttpRequest) {
    this._httpRequest.internalValue = value;
  }
  public resetHttpRequest() {
    this._httpRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestInput() {
    return this._httpRequest.internalValue;
  }
}
export interface DdosZoneTemplateHttpSrc {
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#rate_limit DdosZoneTemplateHttp#rate_limit}
  */
  readonly rateLimit?: DdosZoneTemplateHttpSrcRateLimit;
}

export function ddosZoneTemplateHttpSrcToTerraform(struct?: DdosZoneTemplateHttpSrcOutputReference | DdosZoneTemplateHttpSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limit: ddosZoneTemplateHttpSrcRateLimitToTerraform(struct!.rateLimit),
  }
}


export function ddosZoneTemplateHttpSrcToHclTerraform(struct?: DdosZoneTemplateHttpSrcOutputReference | DdosZoneTemplateHttpSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limit: {
      value: ddosZoneTemplateHttpSrcRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpSrcRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpSrcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpSrc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpSrc | undefined) {
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
  private _rateLimit = new DdosZoneTemplateHttpSrcRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DdosZoneTemplateHttpSrcRateLimit) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http thunder_ddos_zone_template_http}
*/
export class DdosZoneTemplateHttp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_http";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateHttp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateHttp to import
  * @param importFromId The id of the existing DdosZoneTemplateHttp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateHttp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_http", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http thunder_ddos_zone_template_http} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateHttpConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateHttpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_http',
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
    this._disable = config.disable;
    this._disallowConnectMethod = config.disallowConnectMethod;
    this._httpTmplName = config.httpTmplName;
    this._id = config.id;
    this._nonHttpBypass = config.nonHttpBypass;
    this._outOfOrderQueueSize = config.outOfOrderQueueSize;
    this._outOfOrderQueueTimeout = config.outOfOrderQueueTimeout;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._challenge.internalValue = config.challenge;
    this._clientSourceIp.internalValue = config.clientSourceIp;
    this._dst.internalValue = config.dst;
    this._filterList.internalValue = config.filterList;
    this._idleTimeout.internalValue = config.idleTimeout;
    this._malformedHttp.internalValue = config.malformedHttp;
    this._mssTimeout.internalValue = config.mssTimeout;
    this._multiPuThresholdDistribution.internalValue = config.multiPuThresholdDistribution;
    this._requestHeader.internalValue = config.requestHeader;
    this._slowRead.internalValue = config.slowRead;
    this._src.internalValue = config.src;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // challenge - computed: false, optional: true, required: false
  private _challenge = new DdosZoneTemplateHttpChallengeOutputReference(this, "challenge");
  public get challenge() {
    return this._challenge;
  }
  public putChallenge(value: DdosZoneTemplateHttpChallenge) {
    this._challenge.internalValue = value;
  }
  public resetChallenge() {
    this._challenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeInput() {
    return this._challenge.internalValue;
  }

  // client_source_ip - computed: false, optional: true, required: false
  private _clientSourceIp = new DdosZoneTemplateHttpClientSourceIpOutputReference(this, "client_source_ip");
  public get clientSourceIp() {
    return this._clientSourceIp;
  }
  public putClientSourceIp(value: DdosZoneTemplateHttpClientSourceIp) {
    this._clientSourceIp.internalValue = value;
  }
  public resetClientSourceIp() {
    this._clientSourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSourceIpInput() {
    return this._clientSourceIp.internalValue;
  }

  // dst - computed: false, optional: true, required: false
  private _dst = new DdosZoneTemplateHttpDstOutputReference(this, "dst");
  public get dst() {
    return this._dst;
  }
  public putDst(value: DdosZoneTemplateHttpDst) {
    this._dst.internalValue = value;
  }
  public resetDst() {
    this._dst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst.internalValue;
  }

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new DdosZoneTemplateHttpFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DdosZoneTemplateHttpFilterListStruct[] | cdktf.IResolvable) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout = new DdosZoneTemplateHttpIdleTimeoutOutputReference(this, "idle_timeout");
  public get idleTimeout() {
    return this._idleTimeout;
  }
  public putIdleTimeout(value: DdosZoneTemplateHttpIdleTimeout) {
    this._idleTimeout.internalValue = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout.internalValue;
  }

  // malformed_http - computed: false, optional: true, required: false
  private _malformedHttp = new DdosZoneTemplateHttpMalformedHttpOutputReference(this, "malformed_http");
  public get malformedHttp() {
    return this._malformedHttp;
  }
  public putMalformedHttp(value: DdosZoneTemplateHttpMalformedHttp) {
    this._malformedHttp.internalValue = value;
  }
  public resetMalformedHttp() {
    this._malformedHttp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpInput() {
    return this._malformedHttp.internalValue;
  }

  // mss_timeout - computed: false, optional: true, required: false
  private _mssTimeout = new DdosZoneTemplateHttpMssTimeoutOutputReference(this, "mss_timeout");
  public get mssTimeout() {
    return this._mssTimeout;
  }
  public putMssTimeout(value: DdosZoneTemplateHttpMssTimeout) {
    this._mssTimeout.internalValue = value;
  }
  public resetMssTimeout() {
    this._mssTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssTimeoutInput() {
    return this._mssTimeout.internalValue;
  }

  // multi_pu_threshold_distribution - computed: false, optional: true, required: false
  private _multiPuThresholdDistribution = new DdosZoneTemplateHttpMultiPuThresholdDistributionOutputReference(this, "multi_pu_threshold_distribution");
  public get multiPuThresholdDistribution() {
    return this._multiPuThresholdDistribution;
  }
  public putMultiPuThresholdDistribution(value: DdosZoneTemplateHttpMultiPuThresholdDistribution) {
    this._multiPuThresholdDistribution.internalValue = value;
  }
  public resetMultiPuThresholdDistribution() {
    this._multiPuThresholdDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionInput() {
    return this._multiPuThresholdDistribution.internalValue;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new DdosZoneTemplateHttpRequestHeaderOutputReference(this, "request_header");
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: DdosZoneTemplateHttpRequestHeader) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // slow_read - computed: false, optional: true, required: false
  private _slowRead = new DdosZoneTemplateHttpSlowReadOutputReference(this, "slow_read");
  public get slowRead() {
    return this._slowRead;
  }
  public putSlowRead(value: DdosZoneTemplateHttpSlowRead) {
    this._slowRead.internalValue = value;
  }
  public resetSlowRead() {
    this._slowRead.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowReadInput() {
    return this._slowRead.internalValue;
  }

  // src - computed: false, optional: true, required: false
  private _src = new DdosZoneTemplateHttpSrcOutputReference(this, "src");
  public get src() {
    return this._src;
  }
  public putSrc(value: DdosZoneTemplateHttpSrc) {
    this._src.internalValue = value;
  }
  public resetSrc() {
    this._src.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.numberToTerraform(this._disable),
      disallow_connect_method: cdktf.numberToTerraform(this._disallowConnectMethod),
      http_tmpl_name: cdktf.stringToTerraform(this._httpTmplName),
      id: cdktf.stringToTerraform(this._id),
      non_http_bypass: cdktf.numberToTerraform(this._nonHttpBypass),
      out_of_order_queue_size: cdktf.numberToTerraform(this._outOfOrderQueueSize),
      out_of_order_queue_timeout: cdktf.numberToTerraform(this._outOfOrderQueueTimeout),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      challenge: ddosZoneTemplateHttpChallengeToTerraform(this._challenge.internalValue),
      client_source_ip: ddosZoneTemplateHttpClientSourceIpToTerraform(this._clientSourceIp.internalValue),
      dst: ddosZoneTemplateHttpDstToTerraform(this._dst.internalValue),
      filter_list: cdktf.listMapper(ddosZoneTemplateHttpFilterListStructToTerraform, true)(this._filterList.internalValue),
      idle_timeout: ddosZoneTemplateHttpIdleTimeoutToTerraform(this._idleTimeout.internalValue),
      malformed_http: ddosZoneTemplateHttpMalformedHttpToTerraform(this._malformedHttp.internalValue),
      mss_timeout: ddosZoneTemplateHttpMssTimeoutToTerraform(this._mssTimeout.internalValue),
      multi_pu_threshold_distribution: ddosZoneTemplateHttpMultiPuThresholdDistributionToTerraform(this._multiPuThresholdDistribution.internalValue),
      request_header: ddosZoneTemplateHttpRequestHeaderToTerraform(this._requestHeader.internalValue),
      slow_read: ddosZoneTemplateHttpSlowReadToTerraform(this._slowRead.internalValue),
      src: ddosZoneTemplateHttpSrcToTerraform(this._src.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      challenge: {
        value: ddosZoneTemplateHttpChallengeToHclTerraform(this._challenge.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpChallengeList",
      },
      client_source_ip: {
        value: ddosZoneTemplateHttpClientSourceIpToHclTerraform(this._clientSourceIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpClientSourceIpList",
      },
      dst: {
        value: ddosZoneTemplateHttpDstToHclTerraform(this._dst.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpDstList",
      },
      filter_list: {
        value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterListStructToHclTerraform, true)(this._filterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpFilterListStructList",
      },
      idle_timeout: {
        value: ddosZoneTemplateHttpIdleTimeoutToHclTerraform(this._idleTimeout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpIdleTimeoutList",
      },
      malformed_http: {
        value: ddosZoneTemplateHttpMalformedHttpToHclTerraform(this._malformedHttp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpMalformedHttpList",
      },
      mss_timeout: {
        value: ddosZoneTemplateHttpMssTimeoutToHclTerraform(this._mssTimeout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpMssTimeoutList",
      },
      multi_pu_threshold_distribution: {
        value: ddosZoneTemplateHttpMultiPuThresholdDistributionToHclTerraform(this._multiPuThresholdDistribution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpMultiPuThresholdDistributionList",
      },
      request_header: {
        value: ddosZoneTemplateHttpRequestHeaderToHclTerraform(this._requestHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpRequestHeaderList",
      },
      slow_read: {
        value: ddosZoneTemplateHttpSlowReadToHclTerraform(this._slowRead.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpSlowReadList",
      },
      src: {
        value: ddosZoneTemplateHttpSrcToHclTerraform(this._src.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpSrcList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
