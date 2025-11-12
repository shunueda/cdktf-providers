// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmProfileHttpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables or disables trusting the client IP address, and statistics from the client IP address, based on the request's XFF (X-forwarded-for) headers, if they exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#accept_xff LtmProfileHttp#accept_xff}
  */
  readonly acceptXff?: string;
  /**
  * The application service to which the object belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#app_service LtmProfileHttp#app_service}
  */
  readonly appService?: string;
  /**
  * Specifies a quoted string for the basic authentication realm. The system sends this string to a client whenever authorization fails. The default value is none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#basic_auth_realm LtmProfileHttp#basic_auth_realm}
  */
  readonly basicAuthRealm?: string;
  /**
  * Inherit defaults from parent profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#defaults_from LtmProfileHttp#defaults_from}
  */
  readonly defaultsFrom?: string;
  /**
  * User defined description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#description LtmProfileHttp#description}
  */
  readonly description?: string;
  /**
  * Specifies a passphrase for the cookie encryption. Note: Since it's a sensitive entity idempotency will fail for it in the update call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#encrypt_cookie_secret LtmProfileHttp#encrypt_cookie_secret}
  */
  readonly encryptCookieSecret?: string;
  /**
  * Encrypts specified cookies that the BIG-IP system sends to a client system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#encrypt_cookies LtmProfileHttp#encrypt_cookies}
  */
  readonly encryptCookies?: string[];
  /**
  * Specifies an HTTP fallback host. HTTP redirection allows you to redirect HTTP traffic to another protocol identifier, host name, port number, or URI path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#fallback_host LtmProfileHttp#fallback_host}
  */
  readonly fallbackHost?: string;
  /**
  * Specifies one or more three-digit status codes that can be returned by an HTTP server,that should trigger a redirection to the fallback host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#fallback_status_codes LtmProfileHttp#fallback_status_codes}
  */
  readonly fallbackStatusCodes?: string[];
  /**
  * Specifies the header string that you want to erase from an HTTP request. Default is none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#head_erase LtmProfileHttp#head_erase}
  */
  readonly headErase?: string;
  /**
  * Specifies a quoted header string that you want to insert into an HTTP request. Default is none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#head_insert LtmProfileHttp#head_insert}
  */
  readonly headInsert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#id LtmProfileHttp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies, when enabled, that the system inserts an X-Forwarded-For header in an HTTP request with the client IP address, to use with connection pooling. The default is Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#insert_xforwarded_for LtmProfileHttp#insert_xforwarded_for}
  */
  readonly insertXforwardedFor?: string;
  /**
  * Specifies the linear white space (LWS) separator that the system inserts when a header exceeds the maximum width you specify in the LWS Maximum Columns setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#lws_separator LtmProfileHttp#lws_separator}
  */
  readonly lwsSeparator?: string;
  /**
  * Specifies the maximum column width for any given line, when inserting an HTTP header in an HTTP request. The default is 80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#lws_width LtmProfileHttp#lws_width}
  */
  readonly lwsWidth?: number;
  /**
  * Name of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#name LtmProfileHttp#name}
  */
  readonly name: string;
  /**
  * Enables the system to perform HTTP header transformations for the purpose of keeping server-side connections open. This feature requires configuration of a OneConnect profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#oneconnect_transformations LtmProfileHttp#oneconnect_transformations}
  */
  readonly oneconnectTransformations?: string;
  /**
  * Specifies the proxy mode for this profile: reverse, explicit, or transparent. The default is Reverse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#proxy_type LtmProfileHttp#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * Specifies whether the system rewrites the URIs that are part of HTTP redirect (3XX) responses. The default is None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#redirect_rewrite LtmProfileHttp#redirect_rewrite}
  */
  readonly redirectRewrite?: string;
  /**
  * Specifies how the system handles HTTP content that is chunked by a client. The default is Preserve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#request_chunking LtmProfileHttp#request_chunking}
  */
  readonly requestChunking?: string;
  /**
  * Specifies how the system handles HTTP content that is chunked by a server. The default is Selective
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#response_chunking LtmProfileHttp#response_chunking}
  */
  readonly responseChunking?: string;
  /**
  * Specifies headers that the BIG-IP system allows in an HTTP response.If you are specifying more than one header, separate the headers with a blank space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#response_headers_permitted LtmProfileHttp#response_headers_permitted}
  */
  readonly responseHeadersPermitted?: string[];
  /**
  * Specifies the value of the Server header in responses that the BIG-IP itself generates. The default is BigIP. If no string is specified, then no Server header will be added to such responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#server_agent_name LtmProfileHttp#server_agent_name}
  */
  readonly serverAgentName?: string;
  /**
  * Displays the administrative partition within which this profile resides. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#tm_partition LtmProfileHttp#tm_partition}
  */
  readonly tmPartition?: string;
  /**
  * Specifies the hostname to include into Via header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#via_host_name LtmProfileHttp#via_host_name}
  */
  readonly viaHostName?: string;
  /**
  * Specifies whether to append, remove, or preserve a Via header in an HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#via_request LtmProfileHttp#via_request}
  */
  readonly viaRequest?: string;
  /**
  * Specifies whether to append, remove, or preserve a Via header in an HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#via_response LtmProfileHttp#via_response}
  */
  readonly viaResponse?: string;
  /**
  * Specifies alternative XFF headers instead of the default X-forwarded-for header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#xff_alternative_names LtmProfileHttp#xff_alternative_names}
  */
  readonly xffAlternativeNames?: string[];
  /**
  * enforcement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#enforcement LtmProfileHttp#enforcement}
  */
  readonly enforcement?: LtmProfileHttpEnforcement[] | cdktf.IResolvable;
  /**
  * http_strict_transport_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#http_strict_transport_security LtmProfileHttp#http_strict_transport_security}
  */
  readonly httpStrictTransportSecurity?: LtmProfileHttpHttpStrictTransportSecurity[] | cdktf.IResolvable;
}
export interface LtmProfileHttpEnforcement {
  /**
  * Specifies which HTTP methods count as being known. Removing RFC-defined methods from this list will cause the HTTP filter to not recognize them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#known_methods LtmProfileHttp#known_methods}
  */
  readonly knownMethods?: string[];
  /**
  * Specifies the maximum number of headers allowed in HTTP request/response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#max_header_count LtmProfileHttp#max_header_count}
  */
  readonly maxHeaderCount?: number;
  /**
  * Specifies the maximum header size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#max_header_size LtmProfileHttp#max_header_size}
  */
  readonly maxHeaderSize?: number;
  /**
  * Specifies whether to allow, reject or switch to pass-through mode when an unknown HTTP method is parsed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#unknown_method LtmProfileHttp#unknown_method}
  */
  readonly unknownMethod?: string;
}

export function ltmProfileHttpEnforcementToTerraform(struct?: LtmProfileHttpEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    known_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.knownMethods),
    max_header_count: cdktf.numberToTerraform(struct!.maxHeaderCount),
    max_header_size: cdktf.numberToTerraform(struct!.maxHeaderSize),
    unknown_method: cdktf.stringToTerraform(struct!.unknownMethod),
  }
}


export function ltmProfileHttpEnforcementToHclTerraform(struct?: LtmProfileHttpEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    known_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.knownMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_header_count: {
      value: cdktf.numberToHclTerraform(struct!.maxHeaderCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_header_size: {
      value: cdktf.numberToHclTerraform(struct!.maxHeaderSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_method: {
      value: cdktf.stringToHclTerraform(struct!.unknownMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtmProfileHttpEnforcementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LtmProfileHttpEnforcement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knownMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownMethods = this._knownMethods;
    }
    if (this._maxHeaderCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderCount = this._maxHeaderCount;
    }
    if (this._maxHeaderSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderSize = this._maxHeaderSize;
    }
    if (this._unknownMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownMethod = this._unknownMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtmProfileHttpEnforcement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knownMethods = undefined;
      this._maxHeaderCount = undefined;
      this._maxHeaderSize = undefined;
      this._unknownMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knownMethods = value.knownMethods;
      this._maxHeaderCount = value.maxHeaderCount;
      this._maxHeaderSize = value.maxHeaderSize;
      this._unknownMethod = value.unknownMethod;
    }
  }

  // known_methods - computed: true, optional: true, required: false
  private _knownMethods?: string[]; 
  public get knownMethods() {
    return this.getListAttribute('known_methods');
  }
  public set knownMethods(value: string[]) {
    this._knownMethods = value;
  }
  public resetKnownMethods() {
    this._knownMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownMethodsInput() {
    return this._knownMethods;
  }

  // max_header_count - computed: true, optional: true, required: false
  private _maxHeaderCount?: number; 
  public get maxHeaderCount() {
    return this.getNumberAttribute('max_header_count');
  }
  public set maxHeaderCount(value: number) {
    this._maxHeaderCount = value;
  }
  public resetMaxHeaderCount() {
    this._maxHeaderCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderCountInput() {
    return this._maxHeaderCount;
  }

  // max_header_size - computed: true, optional: true, required: false
  private _maxHeaderSize?: number; 
  public get maxHeaderSize() {
    return this.getNumberAttribute('max_header_size');
  }
  public set maxHeaderSize(value: number) {
    this._maxHeaderSize = value;
  }
  public resetMaxHeaderSize() {
    this._maxHeaderSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderSizeInput() {
    return this._maxHeaderSize;
  }

  // unknown_method - computed: true, optional: true, required: false
  private _unknownMethod?: string; 
  public get unknownMethod() {
    return this.getStringAttribute('unknown_method');
  }
  public set unknownMethod(value: string) {
    this._unknownMethod = value;
  }
  public resetUnknownMethod() {
    this._unknownMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownMethodInput() {
    return this._unknownMethod;
  }
}

export class LtmProfileHttpEnforcementList extends cdktf.ComplexList {
  public internalValue? : LtmProfileHttpEnforcement[] | cdktf.IResolvable

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
  public get(index: number): LtmProfileHttpEnforcementOutputReference {
    return new LtmProfileHttpEnforcementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LtmProfileHttpHttpStrictTransportSecurity {
  /**
  * Specifies whether to include the includeSubdomains directive in the HSTS header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#include_subdomains LtmProfileHttp#include_subdomains}
  */
  readonly includeSubdomains?: string;
  /**
  * Specifies the maximum age to assume the connection should remain secure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#maximum_age LtmProfileHttp#maximum_age}
  */
  readonly maximumAge?: number;
  /**
  * Specifies whether to include the HSTS response header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#mode LtmProfileHttp#mode}
  */
  readonly mode?: string;
  /**
  * Specifies whether to include the preload directive in the HSTS header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#preload LtmProfileHttp#preload}
  */
  readonly preload?: string;
}

export function ltmProfileHttpHttpStrictTransportSecurityToTerraform(struct?: LtmProfileHttpHttpStrictTransportSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_subdomains: cdktf.stringToTerraform(struct!.includeSubdomains),
    maximum_age: cdktf.numberToTerraform(struct!.maximumAge),
    mode: cdktf.stringToTerraform(struct!.mode),
    preload: cdktf.stringToTerraform(struct!.preload),
  }
}


export function ltmProfileHttpHttpStrictTransportSecurityToHclTerraform(struct?: LtmProfileHttpHttpStrictTransportSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_subdomains: {
      value: cdktf.stringToHclTerraform(struct!.includeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_age: {
      value: cdktf.numberToHclTerraform(struct!.maximumAge),
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
    preload: {
      value: cdktf.stringToHclTerraform(struct!.preload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtmProfileHttpHttpStrictTransportSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LtmProfileHttpHttpStrictTransportSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubdomains = this._includeSubdomains;
    }
    if (this._maximumAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumAge = this._maximumAge;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._preload !== undefined) {
      hasAnyValues = true;
      internalValueResult.preload = this._preload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtmProfileHttpHttpStrictTransportSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeSubdomains = undefined;
      this._maximumAge = undefined;
      this._mode = undefined;
      this._preload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeSubdomains = value.includeSubdomains;
      this._maximumAge = value.maximumAge;
      this._mode = value.mode;
      this._preload = value.preload;
    }
  }

  // include_subdomains - computed: true, optional: true, required: false
  private _includeSubdomains?: string; 
  public get includeSubdomains() {
    return this.getStringAttribute('include_subdomains');
  }
  public set includeSubdomains(value: string) {
    this._includeSubdomains = value;
  }
  public resetIncludeSubdomains() {
    this._includeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
  }

  // maximum_age - computed: true, optional: true, required: false
  private _maximumAge?: number; 
  public get maximumAge() {
    return this.getNumberAttribute('maximum_age');
  }
  public set maximumAge(value: number) {
    this._maximumAge = value;
  }
  public resetMaximumAge() {
    this._maximumAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumAgeInput() {
    return this._maximumAge;
  }

  // mode - computed: true, optional: true, required: false
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

  // preload - computed: true, optional: true, required: false
  private _preload?: string; 
  public get preload() {
    return this.getStringAttribute('preload');
  }
  public set preload(value: string) {
    this._preload = value;
  }
  public resetPreload() {
    this._preload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }
}

export class LtmProfileHttpHttpStrictTransportSecurityList extends cdktf.ComplexList {
  public internalValue? : LtmProfileHttpHttpStrictTransportSecurity[] | cdktf.IResolvable

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
  public get(index: number): LtmProfileHttpHttpStrictTransportSecurityOutputReference {
    return new LtmProfileHttpHttpStrictTransportSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http bigip_ltm_profile_http}
*/
export class LtmProfileHttp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_profile_http";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmProfileHttp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmProfileHttp to import
  * @param importFromId The id of the existing LtmProfileHttp that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmProfileHttp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_profile_http", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http bigip_ltm_profile_http} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmProfileHttpConfig
  */
  public constructor(scope: Construct, id: string, config: LtmProfileHttpConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_profile_http',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptXff = config.acceptXff;
    this._appService = config.appService;
    this._basicAuthRealm = config.basicAuthRealm;
    this._defaultsFrom = config.defaultsFrom;
    this._description = config.description;
    this._encryptCookieSecret = config.encryptCookieSecret;
    this._encryptCookies = config.encryptCookies;
    this._fallbackHost = config.fallbackHost;
    this._fallbackStatusCodes = config.fallbackStatusCodes;
    this._headErase = config.headErase;
    this._headInsert = config.headInsert;
    this._id = config.id;
    this._insertXforwardedFor = config.insertXforwardedFor;
    this._lwsSeparator = config.lwsSeparator;
    this._lwsWidth = config.lwsWidth;
    this._name = config.name;
    this._oneconnectTransformations = config.oneconnectTransformations;
    this._proxyType = config.proxyType;
    this._redirectRewrite = config.redirectRewrite;
    this._requestChunking = config.requestChunking;
    this._responseChunking = config.responseChunking;
    this._responseHeadersPermitted = config.responseHeadersPermitted;
    this._serverAgentName = config.serverAgentName;
    this._tmPartition = config.tmPartition;
    this._viaHostName = config.viaHostName;
    this._viaRequest = config.viaRequest;
    this._viaResponse = config.viaResponse;
    this._xffAlternativeNames = config.xffAlternativeNames;
    this._enforcement.internalValue = config.enforcement;
    this._httpStrictTransportSecurity.internalValue = config.httpStrictTransportSecurity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_xff - computed: true, optional: true, required: false
  private _acceptXff?: string; 
  public get acceptXff() {
    return this.getStringAttribute('accept_xff');
  }
  public set acceptXff(value: string) {
    this._acceptXff = value;
  }
  public resetAcceptXff() {
    this._acceptXff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptXffInput() {
    return this._acceptXff;
  }

  // app_service - computed: false, optional: true, required: false
  private _appService?: string; 
  public get appService() {
    return this.getStringAttribute('app_service');
  }
  public set appService(value: string) {
    this._appService = value;
  }
  public resetAppService() {
    this._appService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceInput() {
    return this._appService;
  }

  // basic_auth_realm - computed: true, optional: true, required: false
  private _basicAuthRealm?: string; 
  public get basicAuthRealm() {
    return this.getStringAttribute('basic_auth_realm');
  }
  public set basicAuthRealm(value: string) {
    this._basicAuthRealm = value;
  }
  public resetBasicAuthRealm() {
    this._basicAuthRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthRealmInput() {
    return this._basicAuthRealm;
  }

  // defaults_from - computed: true, optional: true, required: false
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  public resetDefaultsFrom() {
    this._defaultsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
  }

  // description - computed: true, optional: true, required: false
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

  // encrypt_cookie_secret - computed: false, optional: true, required: false
  private _encryptCookieSecret?: string; 
  public get encryptCookieSecret() {
    return this.getStringAttribute('encrypt_cookie_secret');
  }
  public set encryptCookieSecret(value: string) {
    this._encryptCookieSecret = value;
  }
  public resetEncryptCookieSecret() {
    this._encryptCookieSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptCookieSecretInput() {
    return this._encryptCookieSecret;
  }

  // encrypt_cookies - computed: false, optional: true, required: false
  private _encryptCookies?: string[]; 
  public get encryptCookies() {
    return cdktf.Fn.tolist(this.getListAttribute('encrypt_cookies'));
  }
  public set encryptCookies(value: string[]) {
    this._encryptCookies = value;
  }
  public resetEncryptCookies() {
    this._encryptCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptCookiesInput() {
    return this._encryptCookies;
  }

  // fallback_host - computed: false, optional: true, required: false
  private _fallbackHost?: string; 
  public get fallbackHost() {
    return this.getStringAttribute('fallback_host');
  }
  public set fallbackHost(value: string) {
    this._fallbackHost = value;
  }
  public resetFallbackHost() {
    this._fallbackHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackHostInput() {
    return this._fallbackHost;
  }

  // fallback_status_codes - computed: false, optional: true, required: false
  private _fallbackStatusCodes?: string[]; 
  public get fallbackStatusCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('fallback_status_codes'));
  }
  public set fallbackStatusCodes(value: string[]) {
    this._fallbackStatusCodes = value;
  }
  public resetFallbackStatusCodes() {
    this._fallbackStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackStatusCodesInput() {
    return this._fallbackStatusCodes;
  }

  // head_erase - computed: true, optional: true, required: false
  private _headErase?: string; 
  public get headErase() {
    return this.getStringAttribute('head_erase');
  }
  public set headErase(value: string) {
    this._headErase = value;
  }
  public resetHeadErase() {
    this._headErase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headEraseInput() {
    return this._headErase;
  }

  // head_insert - computed: true, optional: true, required: false
  private _headInsert?: string; 
  public get headInsert() {
    return this.getStringAttribute('head_insert');
  }
  public set headInsert(value: string) {
    this._headInsert = value;
  }
  public resetHeadInsert() {
    this._headInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headInsertInput() {
    return this._headInsert;
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

  // insert_xforwarded_for - computed: true, optional: true, required: false
  private _insertXforwardedFor?: string; 
  public get insertXforwardedFor() {
    return this.getStringAttribute('insert_xforwarded_for');
  }
  public set insertXforwardedFor(value: string) {
    this._insertXforwardedFor = value;
  }
  public resetInsertXforwardedFor() {
    this._insertXforwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertXforwardedForInput() {
    return this._insertXforwardedFor;
  }

  // lws_separator - computed: true, optional: true, required: false
  private _lwsSeparator?: string; 
  public get lwsSeparator() {
    return this.getStringAttribute('lws_separator');
  }
  public set lwsSeparator(value: string) {
    this._lwsSeparator = value;
  }
  public resetLwsSeparator() {
    this._lwsSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lwsSeparatorInput() {
    return this._lwsSeparator;
  }

  // lws_width - computed: true, optional: true, required: false
  private _lwsWidth?: number; 
  public get lwsWidth() {
    return this.getNumberAttribute('lws_width');
  }
  public set lwsWidth(value: number) {
    this._lwsWidth = value;
  }
  public resetLwsWidth() {
    this._lwsWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lwsWidthInput() {
    return this._lwsWidth;
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

  // oneconnect_transformations - computed: true, optional: true, required: false
  private _oneconnectTransformations?: string; 
  public get oneconnectTransformations() {
    return this.getStringAttribute('oneconnect_transformations');
  }
  public set oneconnectTransformations(value: string) {
    this._oneconnectTransformations = value;
  }
  public resetOneconnectTransformations() {
    this._oneconnectTransformations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneconnectTransformationsInput() {
    return this._oneconnectTransformations;
  }

  // proxy_type - computed: true, optional: true, required: false
  private _proxyType?: string; 
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }
  public set proxyType(value: string) {
    this._proxyType = value;
  }
  public resetProxyType() {
    this._proxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypeInput() {
    return this._proxyType;
  }

  // redirect_rewrite - computed: true, optional: true, required: false
  private _redirectRewrite?: string; 
  public get redirectRewrite() {
    return this.getStringAttribute('redirect_rewrite');
  }
  public set redirectRewrite(value: string) {
    this._redirectRewrite = value;
  }
  public resetRedirectRewrite() {
    this._redirectRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectRewriteInput() {
    return this._redirectRewrite;
  }

  // request_chunking - computed: true, optional: true, required: false
  private _requestChunking?: string; 
  public get requestChunking() {
    return this.getStringAttribute('request_chunking');
  }
  public set requestChunking(value: string) {
    this._requestChunking = value;
  }
  public resetRequestChunking() {
    this._requestChunking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestChunkingInput() {
    return this._requestChunking;
  }

  // response_chunking - computed: true, optional: true, required: false
  private _responseChunking?: string; 
  public get responseChunking() {
    return this.getStringAttribute('response_chunking');
  }
  public set responseChunking(value: string) {
    this._responseChunking = value;
  }
  public resetResponseChunking() {
    this._responseChunking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseChunkingInput() {
    return this._responseChunking;
  }

  // response_headers_permitted - computed: true, optional: true, required: false
  private _responseHeadersPermitted?: string[]; 
  public get responseHeadersPermitted() {
    return cdktf.Fn.tolist(this.getListAttribute('response_headers_permitted'));
  }
  public set responseHeadersPermitted(value: string[]) {
    this._responseHeadersPermitted = value;
  }
  public resetResponseHeadersPermitted() {
    this._responseHeadersPermitted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersPermittedInput() {
    return this._responseHeadersPermitted;
  }

  // server_agent_name - computed: true, optional: true, required: false
  private _serverAgentName?: string; 
  public get serverAgentName() {
    return this.getStringAttribute('server_agent_name');
  }
  public set serverAgentName(value: string) {
    this._serverAgentName = value;
  }
  public resetServerAgentName() {
    this._serverAgentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAgentNameInput() {
    return this._serverAgentName;
  }

  // tm_partition - computed: false, optional: true, required: false
  private _tmPartition?: string; 
  public get tmPartition() {
    return this.getStringAttribute('tm_partition');
  }
  public set tmPartition(value: string) {
    this._tmPartition = value;
  }
  public resetTmPartition() {
    this._tmPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmPartitionInput() {
    return this._tmPartition;
  }

  // via_host_name - computed: true, optional: true, required: false
  private _viaHostName?: string; 
  public get viaHostName() {
    return this.getStringAttribute('via_host_name');
  }
  public set viaHostName(value: string) {
    this._viaHostName = value;
  }
  public resetViaHostName() {
    this._viaHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaHostNameInput() {
    return this._viaHostName;
  }

  // via_request - computed: true, optional: true, required: false
  private _viaRequest?: string; 
  public get viaRequest() {
    return this.getStringAttribute('via_request');
  }
  public set viaRequest(value: string) {
    this._viaRequest = value;
  }
  public resetViaRequest() {
    this._viaRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaRequestInput() {
    return this._viaRequest;
  }

  // via_response - computed: true, optional: true, required: false
  private _viaResponse?: string; 
  public get viaResponse() {
    return this.getStringAttribute('via_response');
  }
  public set viaResponse(value: string) {
    this._viaResponse = value;
  }
  public resetViaResponse() {
    this._viaResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaResponseInput() {
    return this._viaResponse;
  }

  // xff_alternative_names - computed: true, optional: true, required: false
  private _xffAlternativeNames?: string[]; 
  public get xffAlternativeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('xff_alternative_names'));
  }
  public set xffAlternativeNames(value: string[]) {
    this._xffAlternativeNames = value;
  }
  public resetXffAlternativeNames() {
    this._xffAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xffAlternativeNamesInput() {
    return this._xffAlternativeNames;
  }

  // enforcement - computed: false, optional: true, required: false
  private _enforcement = new LtmProfileHttpEnforcementList(this, "enforcement", true);
  public get enforcement() {
    return this._enforcement;
  }
  public putEnforcement(value: LtmProfileHttpEnforcement[] | cdktf.IResolvable) {
    this._enforcement.internalValue = value;
  }
  public resetEnforcement() {
    this._enforcement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementInput() {
    return this._enforcement.internalValue;
  }

  // http_strict_transport_security - computed: false, optional: true, required: false
  private _httpStrictTransportSecurity = new LtmProfileHttpHttpStrictTransportSecurityList(this, "http_strict_transport_security", true);
  public get httpStrictTransportSecurity() {
    return this._httpStrictTransportSecurity;
  }
  public putHttpStrictTransportSecurity(value: LtmProfileHttpHttpStrictTransportSecurity[] | cdktf.IResolvable) {
    this._httpStrictTransportSecurity.internalValue = value;
  }
  public resetHttpStrictTransportSecurity() {
    this._httpStrictTransportSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStrictTransportSecurityInput() {
    return this._httpStrictTransportSecurity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_xff: cdktf.stringToTerraform(this._acceptXff),
      app_service: cdktf.stringToTerraform(this._appService),
      basic_auth_realm: cdktf.stringToTerraform(this._basicAuthRealm),
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      description: cdktf.stringToTerraform(this._description),
      encrypt_cookie_secret: cdktf.stringToTerraform(this._encryptCookieSecret),
      encrypt_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._encryptCookies),
      fallback_host: cdktf.stringToTerraform(this._fallbackHost),
      fallback_status_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fallbackStatusCodes),
      head_erase: cdktf.stringToTerraform(this._headErase),
      head_insert: cdktf.stringToTerraform(this._headInsert),
      id: cdktf.stringToTerraform(this._id),
      insert_xforwarded_for: cdktf.stringToTerraform(this._insertXforwardedFor),
      lws_separator: cdktf.stringToTerraform(this._lwsSeparator),
      lws_width: cdktf.numberToTerraform(this._lwsWidth),
      name: cdktf.stringToTerraform(this._name),
      oneconnect_transformations: cdktf.stringToTerraform(this._oneconnectTransformations),
      proxy_type: cdktf.stringToTerraform(this._proxyType),
      redirect_rewrite: cdktf.stringToTerraform(this._redirectRewrite),
      request_chunking: cdktf.stringToTerraform(this._requestChunking),
      response_chunking: cdktf.stringToTerraform(this._responseChunking),
      response_headers_permitted: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseHeadersPermitted),
      server_agent_name: cdktf.stringToTerraform(this._serverAgentName),
      tm_partition: cdktf.stringToTerraform(this._tmPartition),
      via_host_name: cdktf.stringToTerraform(this._viaHostName),
      via_request: cdktf.stringToTerraform(this._viaRequest),
      via_response: cdktf.stringToTerraform(this._viaResponse),
      xff_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._xffAlternativeNames),
      enforcement: cdktf.listMapper(ltmProfileHttpEnforcementToTerraform, true)(this._enforcement.internalValue),
      http_strict_transport_security: cdktf.listMapper(ltmProfileHttpHttpStrictTransportSecurityToTerraform, true)(this._httpStrictTransportSecurity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_xff: {
        value: cdktf.stringToHclTerraform(this._acceptXff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_service: {
        value: cdktf.stringToHclTerraform(this._appService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_realm: {
        value: cdktf.stringToHclTerraform(this._basicAuthRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_cookie_secret: {
        value: cdktf.stringToHclTerraform(this._encryptCookieSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_cookies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._encryptCookies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fallback_host: {
        value: cdktf.stringToHclTerraform(this._fallbackHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_status_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fallbackStatusCodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      head_erase: {
        value: cdktf.stringToHclTerraform(this._headErase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      head_insert: {
        value: cdktf.stringToHclTerraform(this._headInsert),
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
      insert_xforwarded_for: {
        value: cdktf.stringToHclTerraform(this._insertXforwardedFor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lws_separator: {
        value: cdktf.stringToHclTerraform(this._lwsSeparator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lws_width: {
        value: cdktf.numberToHclTerraform(this._lwsWidth),
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
      oneconnect_transformations: {
        value: cdktf.stringToHclTerraform(this._oneconnectTransformations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_type: {
        value: cdktf.stringToHclTerraform(this._proxyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_rewrite: {
        value: cdktf.stringToHclTerraform(this._redirectRewrite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_chunking: {
        value: cdktf.stringToHclTerraform(this._requestChunking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_chunking: {
        value: cdktf.stringToHclTerraform(this._responseChunking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_headers_permitted: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseHeadersPermitted),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_agent_name: {
        value: cdktf.stringToHclTerraform(this._serverAgentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tm_partition: {
        value: cdktf.stringToHclTerraform(this._tmPartition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      via_host_name: {
        value: cdktf.stringToHclTerraform(this._viaHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      via_request: {
        value: cdktf.stringToHclTerraform(this._viaRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      via_response: {
        value: cdktf.stringToHclTerraform(this._viaResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xff_alternative_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._xffAlternativeNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enforcement: {
        value: cdktf.listMapperHcl(ltmProfileHttpEnforcementToHclTerraform, true)(this._enforcement.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LtmProfileHttpEnforcementList",
      },
      http_strict_transport_security: {
        value: cdktf.listMapperHcl(ltmProfileHttpHttpStrictTransportSecurityToHclTerraform, true)(this._httpStrictTransportSecurity.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LtmProfileHttpHttpStrictTransportSecurityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
