// https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UptimeCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of seconds between checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#check_interval UptimeCheck#check_interval}
  */
  readonly checkInterval: number;
  /**
  * Number of confirmation servers to confirm downtime before an alert is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#confirmation UptimeCheck#confirmation}
  */
  readonly confirmation?: number;
  /**
  * List of contact group IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#contact_groups UptimeCheck#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#id UptimeCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#name UptimeCheck#name}
  */
  readonly name: string;
  /**
  * Whether the check should be run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#paused UptimeCheck#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * List of regions on which to run checks. The values required for this parameter can be retrieved from the `GET /v1/uptime-locations` endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#regions UptimeCheck#regions}
  */
  readonly regions?: string[];
  /**
  * List of tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#tags UptimeCheck#tags}
  */
  readonly tags?: string[];
  /**
  * The number of minutes to wait before sending an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#trigger_rate UptimeCheck#trigger_rate}
  */
  readonly triggerRate?: number;
  /**
  * dns_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#dns_check UptimeCheck#dns_check}
  */
  readonly dnsCheck?: UptimeCheckDnsCheck;
  /**
  * http_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#http_check UptimeCheck#http_check}
  */
  readonly httpCheck?: UptimeCheckHttpCheck;
  /**
  * icmp_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#icmp_check UptimeCheck#icmp_check}
  */
  readonly icmpCheck?: UptimeCheckIcmpCheck;
  /**
  * monitored_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#monitored_resource UptimeCheck#monitored_resource}
  */
  readonly monitoredResource: UptimeCheckMonitoredResource;
  /**
  * tcp_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#tcp_check UptimeCheck#tcp_check}
  */
  readonly tcpCheck?: UptimeCheckTcpCheck;
}
export interface UptimeCheckLocations {
}

export function uptimeCheckLocationsToTerraform(struct?: UptimeCheckLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function uptimeCheckLocationsToHclTerraform(struct?: UptimeCheckLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UptimeCheckLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): UptimeCheckLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UptimeCheckLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class UptimeCheckLocationsList extends cdktf.ComplexList {

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
  public get(index: number): UptimeCheckLocationsOutputReference {
    return new UptimeCheckLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UptimeCheckDnsCheck {
  /**
  * List of IP addresses to compare against returned DNS records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#dns_ips UptimeCheck#dns_ips}
  */
  readonly dnsIps: string[];
  /**
  * FQDN or IP address of the nameserver to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#dns_server UptimeCheck#dns_server}
  */
  readonly dnsServer?: string;
}

export function uptimeCheckDnsCheckToTerraform(struct?: UptimeCheckDnsCheckOutputReference | UptimeCheckDnsCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsIps),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
  }
}


export function uptimeCheckDnsCheckToHclTerraform(struct?: UptimeCheckDnsCheckOutputReference | UptimeCheckDnsCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UptimeCheckDnsCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UptimeCheckDnsCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIps = this._dnsIps;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UptimeCheckDnsCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsIps = undefined;
      this._dnsServer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsIps = value.dnsIps;
      this._dnsServer = value.dnsServer;
    }
  }

  // dns_ips - computed: false, optional: false, required: true
  private _dnsIps?: string[]; 
  public get dnsIps() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_ips'));
  }
  public set dnsIps(value: string[]) {
    this._dnsIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpsInput() {
    return this._dnsIps;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }
}
export interface UptimeCheckHttpCheckBasicAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#password UptimeCheck#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#username UptimeCheck#username}
  */
  readonly username: string;
}

export function uptimeCheckHttpCheckBasicAuthenticationToTerraform(struct?: UptimeCheckHttpCheckBasicAuthenticationOutputReference | UptimeCheckHttpCheckBasicAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function uptimeCheckHttpCheckBasicAuthenticationToHclTerraform(struct?: UptimeCheckHttpCheckBasicAuthenticationOutputReference | UptimeCheckHttpCheckBasicAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UptimeCheckHttpCheckBasicAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UptimeCheckHttpCheckBasicAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UptimeCheckHttpCheckBasicAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface UptimeCheckHttpCheckContentMatchers {
  /**
  * String to look for within the response. Considered down if not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#content UptimeCheck#content}
  */
  readonly content: string;
  /**
  * Include header content in string match search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#include_headers UptimeCheck#include_headers}
  */
  readonly includeHeaders?: boolean | cdktf.IResolvable;
  /**
  * Whether to consider the check as down if the content is present within the response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#matcher UptimeCheck#matcher}
  */
  readonly matcher?: string;
}

export function uptimeCheckHttpCheckContentMatchersToTerraform(struct?: UptimeCheckHttpCheckContentMatchersOutputReference | UptimeCheckHttpCheckContentMatchers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    include_headers: cdktf.booleanToTerraform(struct!.includeHeaders),
    matcher: cdktf.stringToTerraform(struct!.matcher),
  }
}


export function uptimeCheckHttpCheckContentMatchersToHclTerraform(struct?: UptimeCheckHttpCheckContentMatchersOutputReference | UptimeCheckHttpCheckContentMatchers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_headers: {
      value: cdktf.booleanToHclTerraform(struct!.includeHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    matcher: {
      value: cdktf.stringToHclTerraform(struct!.matcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UptimeCheckHttpCheckContentMatchersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UptimeCheckHttpCheckContentMatchers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._includeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHeaders = this._includeHeaders;
    }
    if (this._matcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UptimeCheckHttpCheckContentMatchers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._includeHeaders = undefined;
      this._matcher = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._includeHeaders = value.includeHeaders;
      this._matcher = value.matcher;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // include_headers - computed: false, optional: true, required: false
  private _includeHeaders?: boolean | cdktf.IResolvable; 
  public get includeHeaders() {
    return this.getBooleanAttribute('include_headers');
  }
  public set includeHeaders(value: boolean | cdktf.IResolvable) {
    this._includeHeaders = value;
  }
  public resetIncludeHeaders() {
    this._includeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHeadersInput() {
    return this._includeHeaders;
  }

  // matcher - computed: false, optional: true, required: false
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  public resetMatcher() {
    this._matcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
  }
}
export interface UptimeCheckHttpCheck {
  /**
  * Whether to enable cookie storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#enable_cookies UptimeCheck#enable_cookies}
  */
  readonly enableCookies?: boolean | cdktf.IResolvable;
  /**
  * Specify where the redirect chain should end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#final_endpoint UptimeCheck#final_endpoint}
  */
  readonly finalEndpoint?: string;
  /**
  * Whether to follow redirects when testing. Disabled by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#follow_redirects UptimeCheck#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Represents headers to be sent when making requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#request_headers UptimeCheck#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Type of HTTP check. Either HTTP, or HEAD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#request_method UptimeCheck#request_method}
  */
  readonly requestMethod?: string;
  /**
  * Payload submitted with the request. Setting this updates the check to use the HTTP POST verb. Only one of `request_payload` or `request_payload_raw` may be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#request_payload UptimeCheck#request_payload}
  */
  readonly requestPayload?: { [key: string]: string };
  /**
  * Raw payload submitted with the request. Setting this updates the check to use the HTTP POST verb. Only one of `request_payload` or `request_payload_raw` may be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#request_payload_raw UptimeCheck#request_payload_raw}
  */
  readonly requestPayloadRaw?: string;
  /**
  * List of status codes that trigger an alert. If not specified then the default status codes are used. Once set, the default status codes cannot be restored and ommitting this field does not clear the attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#status_codes UptimeCheck#status_codes}
  */
  readonly statusCodes?: string[];
  /**
  * The number of seconds to wait to receive the first byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#timeout UptimeCheck#timeout}
  */
  readonly timeout?: number;
  /**
  * Custom user agent string set when testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#user_agent UptimeCheck#user_agent}
  */
  readonly userAgent?: string;
  /**
  * Whether to send an alert if the SSL certificate is soon to expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#validate_ssl UptimeCheck#validate_ssl}
  */
  readonly validateSsl?: boolean | cdktf.IResolvable;
  /**
  * basic_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#basic_authentication UptimeCheck#basic_authentication}
  */
  readonly basicAuthentication?: UptimeCheckHttpCheckBasicAuthentication;
  /**
  * content_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#content_matchers UptimeCheck#content_matchers}
  */
  readonly contentMatchers?: UptimeCheckHttpCheckContentMatchers;
}

export function uptimeCheckHttpCheckToTerraform(struct?: UptimeCheckHttpCheckOutputReference | UptimeCheckHttpCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_cookies: cdktf.booleanToTerraform(struct!.enableCookies),
    final_endpoint: cdktf.stringToTerraform(struct!.finalEndpoint),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    request_method: cdktf.stringToTerraform(struct!.requestMethod),
    request_payload: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestPayload),
    request_payload_raw: cdktf.stringToTerraform(struct!.requestPayloadRaw),
    status_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statusCodes),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    user_agent: cdktf.stringToTerraform(struct!.userAgent),
    validate_ssl: cdktf.booleanToTerraform(struct!.validateSsl),
    basic_authentication: uptimeCheckHttpCheckBasicAuthenticationToTerraform(struct!.basicAuthentication),
    content_matchers: uptimeCheckHttpCheckContentMatchersToTerraform(struct!.contentMatchers),
  }
}


export function uptimeCheckHttpCheckToHclTerraform(struct?: UptimeCheckHttpCheckOutputReference | UptimeCheckHttpCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_cookies: {
      value: cdktf.booleanToHclTerraform(struct!.enableCookies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    final_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.finalEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_method: {
      value: cdktf.stringToHclTerraform(struct!.requestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_payload: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestPayload),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_payload_raw: {
      value: cdktf.stringToHclTerraform(struct!.requestPayloadRaw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statusCodes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_agent: {
      value: cdktf.stringToHclTerraform(struct!.userAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.validateSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    basic_authentication: {
      value: uptimeCheckHttpCheckBasicAuthenticationToHclTerraform(struct!.basicAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "UptimeCheckHttpCheckBasicAuthenticationList",
    },
    content_matchers: {
      value: uptimeCheckHttpCheckContentMatchersToHclTerraform(struct!.contentMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "UptimeCheckHttpCheckContentMatchersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UptimeCheckHttpCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UptimeCheckHttpCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCookies = this._enableCookies;
    }
    if (this._finalEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalEndpoint = this._finalEndpoint;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._requestPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPayload = this._requestPayload;
    }
    if (this._requestPayloadRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPayloadRaw = this._requestPayloadRaw;
    }
    if (this._statusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodes = this._statusCodes;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._userAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent;
    }
    if (this._validateSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateSsl = this._validateSsl;
    }
    if (this._basicAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthentication = this._basicAuthentication?.internalValue;
    }
    if (this._contentMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentMatchers = this._contentMatchers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UptimeCheckHttpCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableCookies = undefined;
      this._finalEndpoint = undefined;
      this._followRedirects = undefined;
      this._requestHeaders = undefined;
      this._requestMethod = undefined;
      this._requestPayload = undefined;
      this._requestPayloadRaw = undefined;
      this._statusCodes = undefined;
      this._timeout = undefined;
      this._userAgent = undefined;
      this._validateSsl = undefined;
      this._basicAuthentication.internalValue = undefined;
      this._contentMatchers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableCookies = value.enableCookies;
      this._finalEndpoint = value.finalEndpoint;
      this._followRedirects = value.followRedirects;
      this._requestHeaders = value.requestHeaders;
      this._requestMethod = value.requestMethod;
      this._requestPayload = value.requestPayload;
      this._requestPayloadRaw = value.requestPayloadRaw;
      this._statusCodes = value.statusCodes;
      this._timeout = value.timeout;
      this._userAgent = value.userAgent;
      this._validateSsl = value.validateSsl;
      this._basicAuthentication.internalValue = value.basicAuthentication;
      this._contentMatchers.internalValue = value.contentMatchers;
    }
  }

  // enable_cookies - computed: false, optional: true, required: false
  private _enableCookies?: boolean | cdktf.IResolvable; 
  public get enableCookies() {
    return this.getBooleanAttribute('enable_cookies');
  }
  public set enableCookies(value: boolean | cdktf.IResolvable) {
    this._enableCookies = value;
  }
  public resetEnableCookies() {
    this._enableCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCookiesInput() {
    return this._enableCookies;
  }

  // final_endpoint - computed: false, optional: true, required: false
  private _finalEndpoint?: string; 
  public get finalEndpoint() {
    return this.getStringAttribute('final_endpoint');
  }
  public set finalEndpoint(value: string) {
    this._finalEndpoint = value;
  }
  public resetFinalEndpoint() {
    this._finalEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalEndpointInput() {
    return this._finalEndpoint;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // request_method - computed: false, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // request_payload - computed: false, optional: true, required: false
  private _requestPayload?: { [key: string]: string }; 
  public get requestPayload() {
    return this.getStringMapAttribute('request_payload');
  }
  public set requestPayload(value: { [key: string]: string }) {
    this._requestPayload = value;
  }
  public resetRequestPayload() {
    this._requestPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPayloadInput() {
    return this._requestPayload;
  }

  // request_payload_raw - computed: false, optional: true, required: false
  private _requestPayloadRaw?: string; 
  public get requestPayloadRaw() {
    return this.getStringAttribute('request_payload_raw');
  }
  public set requestPayloadRaw(value: string) {
    this._requestPayloadRaw = value;
  }
  public resetRequestPayloadRaw() {
    this._requestPayloadRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPayloadRawInput() {
    return this._requestPayloadRaw;
  }

  // status_codes - computed: true, optional: true, required: false
  private _statusCodes?: string[]; 
  public get statusCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('status_codes'));
  }
  public set statusCodes(value: string[]) {
    this._statusCodes = value;
  }
  public resetStatusCodes() {
    this._statusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodesInput() {
    return this._statusCodes;
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

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // validate_ssl - computed: false, optional: true, required: false
  private _validateSsl?: boolean | cdktf.IResolvable; 
  public get validateSsl() {
    return this.getBooleanAttribute('validate_ssl');
  }
  public set validateSsl(value: boolean | cdktf.IResolvable) {
    this._validateSsl = value;
  }
  public resetValidateSsl() {
    this._validateSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateSslInput() {
    return this._validateSsl;
  }

  // basic_authentication - computed: false, optional: true, required: false
  private _basicAuthentication = new UptimeCheckHttpCheckBasicAuthenticationOutputReference(this, "basic_authentication");
  public get basicAuthentication() {
    return this._basicAuthentication;
  }
  public putBasicAuthentication(value: UptimeCheckHttpCheckBasicAuthentication) {
    this._basicAuthentication.internalValue = value;
  }
  public resetBasicAuthentication() {
    this._basicAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthenticationInput() {
    return this._basicAuthentication.internalValue;
  }

  // content_matchers - computed: false, optional: true, required: false
  private _contentMatchers = new UptimeCheckHttpCheckContentMatchersOutputReference(this, "content_matchers");
  public get contentMatchers() {
    return this._contentMatchers;
  }
  public putContentMatchers(value: UptimeCheckHttpCheckContentMatchers) {
    this._contentMatchers.internalValue = value;
  }
  public resetContentMatchers() {
    this._contentMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMatchersInput() {
    return this._contentMatchers.internalValue;
  }
}
export interface UptimeCheckIcmpCheck {
  /**
  * Dummy attribute to allow for a nested block. This field should not be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#enabled UptimeCheck#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function uptimeCheckIcmpCheckToTerraform(struct?: UptimeCheckIcmpCheckOutputReference | UptimeCheckIcmpCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function uptimeCheckIcmpCheckToHclTerraform(struct?: UptimeCheckIcmpCheckOutputReference | UptimeCheckIcmpCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UptimeCheckIcmpCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UptimeCheckIcmpCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UptimeCheckIcmpCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface UptimeCheckMonitoredResource {
  /**
  * URL, FQDN, or IP address of the server under test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#address UptimeCheck#address}
  */
  readonly address: string;
  /**
  * Name of the hosting provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#host UptimeCheck#host}
  */
  readonly host?: string;
}

export function uptimeCheckMonitoredResourceToTerraform(struct?: UptimeCheckMonitoredResourceOutputReference | UptimeCheckMonitoredResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function uptimeCheckMonitoredResourceToHclTerraform(struct?: UptimeCheckMonitoredResourceOutputReference | UptimeCheckMonitoredResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UptimeCheckMonitoredResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UptimeCheckMonitoredResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UptimeCheckMonitoredResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._host = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._host = value.host;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }
}
export interface UptimeCheckTcpCheckAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#password UptimeCheck#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#username UptimeCheck#username}
  */
  readonly username: string;
}

export function uptimeCheckTcpCheckAuthenticationToTerraform(struct?: UptimeCheckTcpCheckAuthenticationOutputReference | UptimeCheckTcpCheckAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function uptimeCheckTcpCheckAuthenticationToHclTerraform(struct?: UptimeCheckTcpCheckAuthenticationOutputReference | UptimeCheckTcpCheckAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UptimeCheckTcpCheckAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UptimeCheckTcpCheckAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UptimeCheckTcpCheckAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface UptimeCheckTcpCheck {
  /**
  * Destination port for TCP checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#port UptimeCheck#port}
  */
  readonly port: number;
  /**
  * Type of TCP check. Either SMTP, SSH or TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#protocol UptimeCheck#protocol}
  */
  readonly protocol?: string;
  /**
  * The number of seconds to wait to receive the first byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#timeout UptimeCheck#timeout}
  */
  readonly timeout?: number;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#authentication UptimeCheck#authentication}
  */
  readonly authentication?: UptimeCheckTcpCheckAuthentication;
}

export function uptimeCheckTcpCheckToTerraform(struct?: UptimeCheckTcpCheckOutputReference | UptimeCheckTcpCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    authentication: uptimeCheckTcpCheckAuthenticationToTerraform(struct!.authentication),
  }
}


export function uptimeCheckTcpCheckToHclTerraform(struct?: UptimeCheckTcpCheckOutputReference | UptimeCheckTcpCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
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
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication: {
      value: uptimeCheckTcpCheckAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "UptimeCheckTcpCheckAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UptimeCheckTcpCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UptimeCheckTcpCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UptimeCheckTcpCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._protocol = undefined;
      this._timeout = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeout = value.timeout;
      this._authentication.internalValue = value.authentication;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new UptimeCheckTcpCheckAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: UptimeCheckTcpCheckAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check statuscake_uptime_check}
*/
export class UptimeCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "statuscake_uptime_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UptimeCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UptimeCheck to import
  * @param importFromId The id of the existing UptimeCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UptimeCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "statuscake_uptime_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/uptime_check statuscake_uptime_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UptimeCheckConfig
  */
  public constructor(scope: Construct, id: string, config: UptimeCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'statuscake_uptime_check',
      terraformGeneratorMetadata: {
        providerName: 'statuscake',
        providerVersion: '2.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkInterval = config.checkInterval;
    this._confirmation = config.confirmation;
    this._contactGroups = config.contactGroups;
    this._id = config.id;
    this._name = config.name;
    this._paused = config.paused;
    this._regions = config.regions;
    this._tags = config.tags;
    this._triggerRate = config.triggerRate;
    this._dnsCheck.internalValue = config.dnsCheck;
    this._httpCheck.internalValue = config.httpCheck;
    this._icmpCheck.internalValue = config.icmpCheck;
    this._monitoredResource.internalValue = config.monitoredResource;
    this._tcpCheck.internalValue = config.tcpCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_interval - computed: false, optional: false, required: true
  private _checkInterval?: number; 
  public get checkInterval() {
    return this.getNumberAttribute('check_interval');
  }
  public set checkInterval(value: number) {
    this._checkInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalInput() {
    return this._checkInterval;
  }

  // confirmation - computed: false, optional: true, required: false
  private _confirmation?: number; 
  public get confirmation() {
    return this.getNumberAttribute('confirmation');
  }
  public set confirmation(value: number) {
    this._confirmation = value;
  }
  public resetConfirmation() {
    this._confirmation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationInput() {
    return this._confirmation;
  }

  // contact_groups - computed: false, optional: true, required: false
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_groups'));
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  public resetContactGroups() {
    this._contactGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
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

  // locations - computed: true, optional: false, required: false
  private _locations = new UptimeCheckLocationsList(this, "locations", true);
  public get locations() {
    return this._locations;
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

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // trigger_rate - computed: false, optional: true, required: false
  private _triggerRate?: number; 
  public get triggerRate() {
    return this.getNumberAttribute('trigger_rate');
  }
  public set triggerRate(value: number) {
    this._triggerRate = value;
  }
  public resetTriggerRate() {
    this._triggerRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerRateInput() {
    return this._triggerRate;
  }

  // dns_check - computed: false, optional: true, required: false
  private _dnsCheck = new UptimeCheckDnsCheckOutputReference(this, "dns_check");
  public get dnsCheck() {
    return this._dnsCheck;
  }
  public putDnsCheck(value: UptimeCheckDnsCheck) {
    this._dnsCheck.internalValue = value;
  }
  public resetDnsCheck() {
    this._dnsCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCheckInput() {
    return this._dnsCheck.internalValue;
  }

  // http_check - computed: false, optional: true, required: false
  private _httpCheck = new UptimeCheckHttpCheckOutputReference(this, "http_check");
  public get httpCheck() {
    return this._httpCheck;
  }
  public putHttpCheck(value: UptimeCheckHttpCheck) {
    this._httpCheck.internalValue = value;
  }
  public resetHttpCheck() {
    this._httpCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCheckInput() {
    return this._httpCheck.internalValue;
  }

  // icmp_check - computed: false, optional: true, required: false
  private _icmpCheck = new UptimeCheckIcmpCheckOutputReference(this, "icmp_check");
  public get icmpCheck() {
    return this._icmpCheck;
  }
  public putIcmpCheck(value: UptimeCheckIcmpCheck) {
    this._icmpCheck.internalValue = value;
  }
  public resetIcmpCheck() {
    this._icmpCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCheckInput() {
    return this._icmpCheck.internalValue;
  }

  // monitored_resource - computed: false, optional: false, required: true
  private _monitoredResource = new UptimeCheckMonitoredResourceOutputReference(this, "monitored_resource");
  public get monitoredResource() {
    return this._monitoredResource;
  }
  public putMonitoredResource(value: UptimeCheckMonitoredResource) {
    this._monitoredResource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredResourceInput() {
    return this._monitoredResource.internalValue;
  }

  // tcp_check - computed: false, optional: true, required: false
  private _tcpCheck = new UptimeCheckTcpCheckOutputReference(this, "tcp_check");
  public get tcpCheck() {
    return this._tcpCheck;
  }
  public putTcpCheck(value: UptimeCheckTcpCheck) {
    this._tcpCheck.internalValue = value;
  }
  public resetTcpCheck() {
    this._tcpCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCheckInput() {
    return this._tcpCheck.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_interval: cdktf.numberToTerraform(this._checkInterval),
      confirmation: cdktf.numberToTerraform(this._confirmation),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      paused: cdktf.booleanToTerraform(this._paused),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      trigger_rate: cdktf.numberToTerraform(this._triggerRate),
      dns_check: uptimeCheckDnsCheckToTerraform(this._dnsCheck.internalValue),
      http_check: uptimeCheckHttpCheckToTerraform(this._httpCheck.internalValue),
      icmp_check: uptimeCheckIcmpCheckToTerraform(this._icmpCheck.internalValue),
      monitored_resource: uptimeCheckMonitoredResourceToTerraform(this._monitoredResource.internalValue),
      tcp_check: uptimeCheckTcpCheckToTerraform(this._tcpCheck.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_interval: {
        value: cdktf.numberToHclTerraform(this._checkInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      confirmation: {
        value: cdktf.numberToHclTerraform(this._confirmation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contact_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trigger_rate: {
        value: cdktf.numberToHclTerraform(this._triggerRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_check: {
        value: uptimeCheckDnsCheckToHclTerraform(this._dnsCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UptimeCheckDnsCheckList",
      },
      http_check: {
        value: uptimeCheckHttpCheckToHclTerraform(this._httpCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UptimeCheckHttpCheckList",
      },
      icmp_check: {
        value: uptimeCheckIcmpCheckToHclTerraform(this._icmpCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UptimeCheckIcmpCheckList",
      },
      monitored_resource: {
        value: uptimeCheckMonitoredResourceToHclTerraform(this._monitoredResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UptimeCheckMonitoredResourceList",
      },
      tcp_check: {
        value: uptimeCheckTcpCheckToHclTerraform(this._tcpCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UptimeCheckTcpCheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
