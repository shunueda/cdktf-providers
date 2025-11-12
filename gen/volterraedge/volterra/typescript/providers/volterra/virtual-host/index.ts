// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#add_location VirtualHost#add_location}
  */
  readonly addLocation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#annotations VirtualHost#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#append_server_name VirtualHost#append_server_name}
  */
  readonly appendServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#connection_idle_timeout VirtualHost#connection_idle_timeout}
  */
  readonly connectionIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#custom_errors VirtualHost#custom_errors}
  */
  readonly customErrors?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#default_header VirtualHost#default_header}
  */
  readonly defaultHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#default_loadbalancer VirtualHost#default_loadbalancer}
  */
  readonly defaultLoadbalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#description VirtualHost#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#disable VirtualHost#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#disable_default_error_pages VirtualHost#disable_default_error_pages}
  */
  readonly disableDefaultErrorPages?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#disable_dns_resolve VirtualHost#disable_dns_resolve}
  */
  readonly disableDnsResolve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#disable_path_normalize VirtualHost#disable_path_normalize}
  */
  readonly disablePathNormalize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#domains VirtualHost#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#enable_path_normalize VirtualHost#enable_path_normalize}
  */
  readonly enablePathNormalize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#id VirtualHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#idle_timeout VirtualHost#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#labels VirtualHost#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#max_request_header_size VirtualHost#max_request_header_size}
  */
  readonly maxRequestHeaderSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#namespace VirtualHost#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#no_authentication VirtualHost#no_authentication}
  */
  readonly noAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#no_challenge VirtualHost#no_challenge}
  */
  readonly noChallenge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#non_default_loadbalancer VirtualHost#non_default_loadbalancer}
  */
  readonly nonDefaultLoadbalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#pass_through VirtualHost#pass_through}
  */
  readonly passThrough?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#proxy VirtualHost#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#request_cookies_to_remove VirtualHost#request_cookies_to_remove}
  */
  readonly requestCookiesToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#request_headers_to_remove VirtualHost#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#response_cookies_to_remove VirtualHost#response_cookies_to_remove}
  */
  readonly responseCookiesToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#response_headers_to_remove VirtualHost#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#server_name VirtualHost#server_name}
  */
  readonly serverName?: string;
  /**
  * advertise_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#advertise_policies VirtualHost#advertise_policies}
  */
  readonly advertisePolicies?: VirtualHostAdvertisePolicies[] | cdktf.IResolvable;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#authentication VirtualHost#authentication}
  */
  readonly authentication?: VirtualHostAuthentication;
  /**
  * buffer_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#buffer_policy VirtualHost#buffer_policy}
  */
  readonly bufferPolicy?: VirtualHostBufferPolicy;
  /**
  * captcha_challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#captcha_challenge VirtualHost#captcha_challenge}
  */
  readonly captchaChallenge?: VirtualHostCaptchaChallenge;
  /**
  * coalescing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#coalescing_options VirtualHost#coalescing_options}
  */
  readonly coalescingOptions?: VirtualHostCoalescingOptions;
  /**
  * compression_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#compression_params VirtualHost#compression_params}
  */
  readonly compressionParams?: VirtualHostCompressionParams;
  /**
  * cors_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#cors_policy VirtualHost#cors_policy}
  */
  readonly corsPolicy?: VirtualHostCorsPolicy;
  /**
  * csrf_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#csrf_policy VirtualHost#csrf_policy}
  */
  readonly csrfPolicy?: VirtualHostCsrfPolicy;
  /**
  * dynamic_reverse_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#dynamic_reverse_proxy VirtualHost#dynamic_reverse_proxy}
  */
  readonly dynamicReverseProxy?: VirtualHostDynamicReverseProxy;
  /**
  * http_protocol_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#http_protocol_options VirtualHost#http_protocol_options}
  */
  readonly httpProtocolOptions?: VirtualHostHttpProtocolOptions;
  /**
  * js_challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#js_challenge VirtualHost#js_challenge}
  */
  readonly jsChallenge?: VirtualHostJsChallenge;
  /**
  * rate_limiter_allowed_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#rate_limiter_allowed_prefixes VirtualHost#rate_limiter_allowed_prefixes}
  */
  readonly rateLimiterAllowedPrefixes?: VirtualHostRateLimiterAllowedPrefixes[] | cdktf.IResolvable;
  /**
  * request_cookies_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#request_cookies_to_add VirtualHost#request_cookies_to_add}
  */
  readonly requestCookiesToAdd?: VirtualHostRequestCookiesToAdd[] | cdktf.IResolvable;
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#request_headers_to_add VirtualHost#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: VirtualHostRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_cookies_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#response_cookies_to_add VirtualHost#response_cookies_to_add}
  */
  readonly responseCookiesToAdd?: VirtualHostResponseCookiesToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#response_headers_to_add VirtualHost#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: VirtualHostResponseHeadersToAdd[] | cdktf.IResolvable;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#retry_policy VirtualHost#retry_policy}
  */
  readonly retryPolicy?: VirtualHostRetryPolicy;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#routes VirtualHost#routes}
  */
  readonly routes?: VirtualHostRoutes[] | cdktf.IResolvable;
  /**
  * sensitive_data_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#sensitive_data_policy VirtualHost#sensitive_data_policy}
  */
  readonly sensitiveDataPolicy?: VirtualHostSensitiveDataPolicy[] | cdktf.IResolvable;
  /**
  * slow_ddos_mitigation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#slow_ddos_mitigation VirtualHost#slow_ddos_mitigation}
  */
  readonly slowDdosMitigation?: VirtualHostSlowDdosMitigation;
  /**
  * user_identification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#user_identification VirtualHost#user_identification}
  */
  readonly userIdentification?: VirtualHostUserIdentification[] | cdktf.IResolvable;
  /**
  * waf_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#waf_type VirtualHost#waf_type}
  */
  readonly wafType?: VirtualHostWafType;
}
export interface VirtualHostAdvertisePolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#namespace VirtualHost#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#tenant VirtualHost#tenant}
  */
  readonly tenant?: string;
}

export function virtualHostAdvertisePoliciesToTerraform(struct?: VirtualHostAdvertisePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualHostAdvertisePoliciesToHclTerraform(struct?: VirtualHostAdvertisePolicies | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostAdvertisePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHostAdvertisePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostAdvertisePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VirtualHostAdvertisePoliciesList extends cdktf.ComplexList {
  public internalValue? : VirtualHostAdvertisePolicies[] | cdktf.IResolvable

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
  public get(index: number): VirtualHostAdvertisePoliciesOutputReference {
    return new VirtualHostAdvertisePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHostAuthenticationAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#namespace VirtualHost#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#tenant VirtualHost#tenant}
  */
  readonly tenant?: string;
}

export function virtualHostAuthenticationAuthConfigToTerraform(struct?: VirtualHostAuthenticationAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualHostAuthenticationAuthConfigToHclTerraform(struct?: VirtualHostAuthenticationAuthConfig | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostAuthenticationAuthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHostAuthenticationAuthConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostAuthenticationAuthConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VirtualHostAuthenticationAuthConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualHostAuthenticationAuthConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualHostAuthenticationAuthConfigOutputReference {
    return new VirtualHostAuthenticationAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#decryption_provider VirtualHost#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#location VirtualHost#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#store_provider VirtualHost#store_provider}
  */
  readonly storeProvider?: string;
}

export function virtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfoToTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfoOutputReference | VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function virtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfoToHclTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfoOutputReference | VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#provider VirtualHost#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#url VirtualHost#url}
  */
  readonly url: string;
}

export function virtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfoToTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfoOutputReference | VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function virtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfoToHclTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfoOutputReference | VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VirtualHostAuthenticationCookieParamsAuthHmacPrimKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#blindfold_secret_info VirtualHost#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#clear_secret_info VirtualHost#clear_secret_info}
  */
  readonly clearSecretInfo?: VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfo;
}

export function virtualHostAuthenticationCookieParamsAuthHmacPrimKeyToTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyOutputReference | VirtualHostAuthenticationCookieParamsAuthHmacPrimKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: virtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: virtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function virtualHostAuthenticationCookieParamsAuthHmacPrimKeyToHclTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyOutputReference | VirtualHostAuthenticationCookieParamsAuthHmacPrimKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: virtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: virtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostAuthenticationCookieParamsAuthHmacPrimKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostAuthenticationCookieParamsAuthHmacPrimKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VirtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#decryption_provider VirtualHost#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#location VirtualHost#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#store_provider VirtualHost#store_provider}
  */
  readonly storeProvider?: string;
}

export function virtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfoToTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfoOutputReference | VirtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function virtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfoToHclTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfoOutputReference | VirtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VirtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#provider VirtualHost#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#url VirtualHost#url}
  */
  readonly url: string;
}

export function virtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfoToTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfoOutputReference | VirtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function virtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfoToHclTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfoOutputReference | VirtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VirtualHostAuthenticationCookieParamsAuthHmacSecKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#blindfold_secret_info VirtualHost#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VirtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#clear_secret_info VirtualHost#clear_secret_info}
  */
  readonly clearSecretInfo?: VirtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfo;
}

export function virtualHostAuthenticationCookieParamsAuthHmacSecKeyToTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacSecKeyOutputReference | VirtualHostAuthenticationCookieParamsAuthHmacSecKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: virtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: virtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function virtualHostAuthenticationCookieParamsAuthHmacSecKeyToHclTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacSecKeyOutputReference | VirtualHostAuthenticationCookieParamsAuthHmacSecKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: virtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: virtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostAuthenticationCookieParamsAuthHmacSecKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostAuthenticationCookieParamsAuthHmacSecKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostAuthenticationCookieParamsAuthHmacSecKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VirtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VirtualHostAuthenticationCookieParamsAuthHmacSecKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VirtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VirtualHostAuthenticationCookieParamsAuthHmacSecKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VirtualHostAuthenticationCookieParamsAuthHmac {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#prim_key_expiry VirtualHost#prim_key_expiry}
  */
  readonly primKeyExpiry: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#sec_key_expiry VirtualHost#sec_key_expiry}
  */
  readonly secKeyExpiry: string;
  /**
  * prim_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#prim_key VirtualHost#prim_key}
  */
  readonly primKey: VirtualHostAuthenticationCookieParamsAuthHmacPrimKey;
  /**
  * sec_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#sec_key VirtualHost#sec_key}
  */
  readonly secKey: VirtualHostAuthenticationCookieParamsAuthHmacSecKey;
}

export function virtualHostAuthenticationCookieParamsAuthHmacToTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacOutputReference | VirtualHostAuthenticationCookieParamsAuthHmac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prim_key_expiry: cdktf.stringToTerraform(struct!.primKeyExpiry),
    sec_key_expiry: cdktf.stringToTerraform(struct!.secKeyExpiry),
    prim_key: virtualHostAuthenticationCookieParamsAuthHmacPrimKeyToTerraform(struct!.primKey),
    sec_key: virtualHostAuthenticationCookieParamsAuthHmacSecKeyToTerraform(struct!.secKey),
  }
}


export function virtualHostAuthenticationCookieParamsAuthHmacToHclTerraform(struct?: VirtualHostAuthenticationCookieParamsAuthHmacOutputReference | VirtualHostAuthenticationCookieParamsAuthHmac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prim_key_expiry: {
      value: cdktf.stringToHclTerraform(struct!.primKeyExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sec_key_expiry: {
      value: cdktf.stringToHclTerraform(struct!.secKeyExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prim_key: {
      value: virtualHostAuthenticationCookieParamsAuthHmacPrimKeyToHclTerraform(struct!.primKey),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyList",
    },
    sec_key: {
      value: virtualHostAuthenticationCookieParamsAuthHmacSecKeyToHclTerraform(struct!.secKey),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostAuthenticationCookieParamsAuthHmacSecKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostAuthenticationCookieParamsAuthHmacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostAuthenticationCookieParamsAuthHmac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primKeyExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.primKeyExpiry = this._primKeyExpiry;
    }
    if (this._secKeyExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.secKeyExpiry = this._secKeyExpiry;
    }
    if (this._primKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primKey = this._primKey?.internalValue;
    }
    if (this._secKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secKey = this._secKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostAuthenticationCookieParamsAuthHmac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primKeyExpiry = undefined;
      this._secKeyExpiry = undefined;
      this._primKey.internalValue = undefined;
      this._secKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primKeyExpiry = value.primKeyExpiry;
      this._secKeyExpiry = value.secKeyExpiry;
      this._primKey.internalValue = value.primKey;
      this._secKey.internalValue = value.secKey;
    }
  }

  // prim_key_expiry - computed: false, optional: false, required: true
  private _primKeyExpiry?: string; 
  public get primKeyExpiry() {
    return this.getStringAttribute('prim_key_expiry');
  }
  public set primKeyExpiry(value: string) {
    this._primKeyExpiry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primKeyExpiryInput() {
    return this._primKeyExpiry;
  }

  // sec_key_expiry - computed: false, optional: false, required: true
  private _secKeyExpiry?: string; 
  public get secKeyExpiry() {
    return this.getStringAttribute('sec_key_expiry');
  }
  public set secKeyExpiry(value: string) {
    this._secKeyExpiry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secKeyExpiryInput() {
    return this._secKeyExpiry;
  }

  // prim_key - computed: false, optional: false, required: true
  private _primKey = new VirtualHostAuthenticationCookieParamsAuthHmacPrimKeyOutputReference(this, "prim_key");
  public get primKey() {
    return this._primKey;
  }
  public putPrimKey(value: VirtualHostAuthenticationCookieParamsAuthHmacPrimKey) {
    this._primKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primKeyInput() {
    return this._primKey.internalValue;
  }

  // sec_key - computed: false, optional: false, required: true
  private _secKey = new VirtualHostAuthenticationCookieParamsAuthHmacSecKeyOutputReference(this, "sec_key");
  public get secKey() {
    return this._secKey;
  }
  public putSecKey(value: VirtualHostAuthenticationCookieParamsAuthHmacSecKey) {
    this._secKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secKeyInput() {
    return this._secKey.internalValue;
  }
}
export interface VirtualHostAuthenticationCookieParamsKmsKeyHmac {
}

export function virtualHostAuthenticationCookieParamsKmsKeyHmacToTerraform(struct?: VirtualHostAuthenticationCookieParamsKmsKeyHmacOutputReference | VirtualHostAuthenticationCookieParamsKmsKeyHmac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualHostAuthenticationCookieParamsKmsKeyHmacToHclTerraform(struct?: VirtualHostAuthenticationCookieParamsKmsKeyHmacOutputReference | VirtualHostAuthenticationCookieParamsKmsKeyHmac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualHostAuthenticationCookieParamsKmsKeyHmacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostAuthenticationCookieParamsKmsKeyHmac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostAuthenticationCookieParamsKmsKeyHmac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VirtualHostAuthenticationCookieParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#cookie_expiry VirtualHost#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#cookie_refresh_interval VirtualHost#cookie_refresh_interval}
  */
  readonly cookieRefreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#session_expiry VirtualHost#session_expiry}
  */
  readonly sessionExpiry?: number;
  /**
  * auth_hmac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#auth_hmac VirtualHost#auth_hmac}
  */
  readonly authHmac?: VirtualHostAuthenticationCookieParamsAuthHmac;
  /**
  * kms_key_hmac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#kms_key_hmac VirtualHost#kms_key_hmac}
  */
  readonly kmsKeyHmac?: VirtualHostAuthenticationCookieParamsKmsKeyHmac;
}

export function virtualHostAuthenticationCookieParamsToTerraform(struct?: VirtualHostAuthenticationCookieParamsOutputReference | VirtualHostAuthenticationCookieParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    cookie_refresh_interval: cdktf.numberToTerraform(struct!.cookieRefreshInterval),
    session_expiry: cdktf.numberToTerraform(struct!.sessionExpiry),
    auth_hmac: virtualHostAuthenticationCookieParamsAuthHmacToTerraform(struct!.authHmac),
    kms_key_hmac: virtualHostAuthenticationCookieParamsKmsKeyHmacToTerraform(struct!.kmsKeyHmac),
  }
}


export function virtualHostAuthenticationCookieParamsToHclTerraform(struct?: VirtualHostAuthenticationCookieParamsOutputReference | VirtualHostAuthenticationCookieParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cookie_refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.cookieRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_expiry: {
      value: cdktf.numberToHclTerraform(struct!.sessionExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_hmac: {
      value: virtualHostAuthenticationCookieParamsAuthHmacToHclTerraform(struct!.authHmac),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostAuthenticationCookieParamsAuthHmacList",
    },
    kms_key_hmac: {
      value: virtualHostAuthenticationCookieParamsKmsKeyHmacToHclTerraform(struct!.kmsKeyHmac),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostAuthenticationCookieParamsKmsKeyHmacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostAuthenticationCookieParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostAuthenticationCookieParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._cookieRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieRefreshInterval = this._cookieRefreshInterval;
    }
    if (this._sessionExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionExpiry = this._sessionExpiry;
    }
    if (this._authHmac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authHmac = this._authHmac?.internalValue;
    }
    if (this._kmsKeyHmac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyHmac = this._kmsKeyHmac?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostAuthenticationCookieParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._cookieRefreshInterval = undefined;
      this._sessionExpiry = undefined;
      this._authHmac.internalValue = undefined;
      this._kmsKeyHmac.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._cookieRefreshInterval = value.cookieRefreshInterval;
      this._sessionExpiry = value.sessionExpiry;
      this._authHmac.internalValue = value.authHmac;
      this._kmsKeyHmac.internalValue = value.kmsKeyHmac;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // cookie_refresh_interval - computed: false, optional: true, required: false
  private _cookieRefreshInterval?: number; 
  public get cookieRefreshInterval() {
    return this.getNumberAttribute('cookie_refresh_interval');
  }
  public set cookieRefreshInterval(value: number) {
    this._cookieRefreshInterval = value;
  }
  public resetCookieRefreshInterval() {
    this._cookieRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieRefreshIntervalInput() {
    return this._cookieRefreshInterval;
  }

  // session_expiry - computed: false, optional: true, required: false
  private _sessionExpiry?: number; 
  public get sessionExpiry() {
    return this.getNumberAttribute('session_expiry');
  }
  public set sessionExpiry(value: number) {
    this._sessionExpiry = value;
  }
  public resetSessionExpiry() {
    this._sessionExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionExpiryInput() {
    return this._sessionExpiry;
  }

  // auth_hmac - computed: false, optional: true, required: false
  private _authHmac = new VirtualHostAuthenticationCookieParamsAuthHmacOutputReference(this, "auth_hmac");
  public get authHmac() {
    return this._authHmac;
  }
  public putAuthHmac(value: VirtualHostAuthenticationCookieParamsAuthHmac) {
    this._authHmac.internalValue = value;
  }
  public resetAuthHmac() {
    this._authHmac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHmacInput() {
    return this._authHmac.internalValue;
  }

  // kms_key_hmac - computed: false, optional: true, required: false
  private _kmsKeyHmac = new VirtualHostAuthenticationCookieParamsKmsKeyHmacOutputReference(this, "kms_key_hmac");
  public get kmsKeyHmac() {
    return this._kmsKeyHmac;
  }
  public putKmsKeyHmac(value: VirtualHostAuthenticationCookieParamsKmsKeyHmac) {
    this._kmsKeyHmac.internalValue = value;
  }
  public resetKmsKeyHmac() {
    this._kmsKeyHmac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyHmacInput() {
    return this._kmsKeyHmac.internalValue;
  }
}
export interface VirtualHostAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#redirect_dynamic VirtualHost#redirect_dynamic}
  */
  readonly redirectDynamic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#redirect_url VirtualHost#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#use_auth_object_config VirtualHost#use_auth_object_config}
  */
  readonly useAuthObjectConfig?: boolean | cdktf.IResolvable;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#auth_config VirtualHost#auth_config}
  */
  readonly authConfig: VirtualHostAuthenticationAuthConfig[] | cdktf.IResolvable;
  /**
  * cookie_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#cookie_params VirtualHost#cookie_params}
  */
  readonly cookieParams?: VirtualHostAuthenticationCookieParams;
}

export function virtualHostAuthenticationToTerraform(struct?: VirtualHostAuthenticationOutputReference | VirtualHostAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_dynamic: cdktf.booleanToTerraform(struct!.redirectDynamic),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    use_auth_object_config: cdktf.booleanToTerraform(struct!.useAuthObjectConfig),
    auth_config: cdktf.listMapper(virtualHostAuthenticationAuthConfigToTerraform, true)(struct!.authConfig),
    cookie_params: virtualHostAuthenticationCookieParamsToTerraform(struct!.cookieParams),
  }
}


export function virtualHostAuthenticationToHclTerraform(struct?: VirtualHostAuthenticationOutputReference | VirtualHostAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_dynamic: {
      value: cdktf.booleanToHclTerraform(struct!.redirectDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_auth_object_config: {
      value: cdktf.booleanToHclTerraform(struct!.useAuthObjectConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_config: {
      value: cdktf.listMapperHcl(virtualHostAuthenticationAuthConfigToHclTerraform, true)(struct!.authConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostAuthenticationAuthConfigList",
    },
    cookie_params: {
      value: virtualHostAuthenticationCookieParamsToHclTerraform(struct!.cookieParams),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostAuthenticationCookieParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectDynamic = this._redirectDynamic;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._useAuthObjectConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAuthObjectConfig = this._useAuthObjectConfig;
    }
    if (this._authConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConfig = this._authConfig?.internalValue;
    }
    if (this._cookieParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieParams = this._cookieParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirectDynamic = undefined;
      this._redirectUrl = undefined;
      this._useAuthObjectConfig = undefined;
      this._authConfig.internalValue = undefined;
      this._cookieParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirectDynamic = value.redirectDynamic;
      this._redirectUrl = value.redirectUrl;
      this._useAuthObjectConfig = value.useAuthObjectConfig;
      this._authConfig.internalValue = value.authConfig;
      this._cookieParams.internalValue = value.cookieParams;
    }
  }

  // redirect_dynamic - computed: false, optional: true, required: false
  private _redirectDynamic?: boolean | cdktf.IResolvable; 
  public get redirectDynamic() {
    return this.getBooleanAttribute('redirect_dynamic');
  }
  public set redirectDynamic(value: boolean | cdktf.IResolvable) {
    this._redirectDynamic = value;
  }
  public resetRedirectDynamic() {
    this._redirectDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectDynamicInput() {
    return this._redirectDynamic;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // use_auth_object_config - computed: false, optional: true, required: false
  private _useAuthObjectConfig?: boolean | cdktf.IResolvable; 
  public get useAuthObjectConfig() {
    return this.getBooleanAttribute('use_auth_object_config');
  }
  public set useAuthObjectConfig(value: boolean | cdktf.IResolvable) {
    this._useAuthObjectConfig = value;
  }
  public resetUseAuthObjectConfig() {
    this._useAuthObjectConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAuthObjectConfigInput() {
    return this._useAuthObjectConfig;
  }

  // auth_config - computed: false, optional: false, required: true
  private _authConfig = new VirtualHostAuthenticationAuthConfigList(this, "auth_config", false);
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: VirtualHostAuthenticationAuthConfig[] | cdktf.IResolvable) {
    this._authConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // cookie_params - computed: false, optional: true, required: false
  private _cookieParams = new VirtualHostAuthenticationCookieParamsOutputReference(this, "cookie_params");
  public get cookieParams() {
    return this._cookieParams;
  }
  public putCookieParams(value: VirtualHostAuthenticationCookieParams) {
    this._cookieParams.internalValue = value;
  }
  public resetCookieParams() {
    this._cookieParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieParamsInput() {
    return this._cookieParams.internalValue;
  }
}
export interface VirtualHostBufferPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#disabled VirtualHost#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#max_request_bytes VirtualHost#max_request_bytes}
  */
  readonly maxRequestBytes?: number;
}

export function virtualHostBufferPolicyToTerraform(struct?: VirtualHostBufferPolicyOutputReference | VirtualHostBufferPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    max_request_bytes: cdktf.numberToTerraform(struct!.maxRequestBytes),
  }
}


export function virtualHostBufferPolicyToHclTerraform(struct?: VirtualHostBufferPolicyOutputReference | VirtualHostBufferPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_request_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostBufferPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostBufferPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._maxRequestBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBytes = this._maxRequestBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostBufferPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._maxRequestBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._maxRequestBytes = value.maxRequestBytes;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // max_request_bytes - computed: false, optional: true, required: false
  private _maxRequestBytes?: number; 
  public get maxRequestBytes() {
    return this.getNumberAttribute('max_request_bytes');
  }
  public set maxRequestBytes(value: number) {
    this._maxRequestBytes = value;
  }
  public resetMaxRequestBytes() {
    this._maxRequestBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBytesInput() {
    return this._maxRequestBytes;
  }
}
export interface VirtualHostCaptchaChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#cookie_expiry VirtualHost#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#custom_page VirtualHost#custom_page}
  */
  readonly customPage?: string;
}

export function virtualHostCaptchaChallengeToTerraform(struct?: VirtualHostCaptchaChallengeOutputReference | VirtualHostCaptchaChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function virtualHostCaptchaChallengeToHclTerraform(struct?: VirtualHostCaptchaChallengeOutputReference | VirtualHostCaptchaChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostCaptchaChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostCaptchaChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostCaptchaChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }
}
export interface VirtualHostCoalescingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#default_coalescing VirtualHost#default_coalescing}
  */
  readonly defaultCoalescing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#strict_coalescing VirtualHost#strict_coalescing}
  */
  readonly strictCoalescing?: boolean | cdktf.IResolvable;
}

export function virtualHostCoalescingOptionsToTerraform(struct?: VirtualHostCoalescingOptionsOutputReference | VirtualHostCoalescingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_coalescing: cdktf.booleanToTerraform(struct!.defaultCoalescing),
    strict_coalescing: cdktf.booleanToTerraform(struct!.strictCoalescing),
  }
}


export function virtualHostCoalescingOptionsToHclTerraform(struct?: VirtualHostCoalescingOptionsOutputReference | VirtualHostCoalescingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_coalescing: {
      value: cdktf.booleanToHclTerraform(struct!.defaultCoalescing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict_coalescing: {
      value: cdktf.booleanToHclTerraform(struct!.strictCoalescing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostCoalescingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostCoalescingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCoalescing !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCoalescing = this._defaultCoalescing;
    }
    if (this._strictCoalescing !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictCoalescing = this._strictCoalescing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostCoalescingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultCoalescing = undefined;
      this._strictCoalescing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultCoalescing = value.defaultCoalescing;
      this._strictCoalescing = value.strictCoalescing;
    }
  }

  // default_coalescing - computed: false, optional: true, required: false
  private _defaultCoalescing?: boolean | cdktf.IResolvable; 
  public get defaultCoalescing() {
    return this.getBooleanAttribute('default_coalescing');
  }
  public set defaultCoalescing(value: boolean | cdktf.IResolvable) {
    this._defaultCoalescing = value;
  }
  public resetDefaultCoalescing() {
    this._defaultCoalescing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCoalescingInput() {
    return this._defaultCoalescing;
  }

  // strict_coalescing - computed: false, optional: true, required: false
  private _strictCoalescing?: boolean | cdktf.IResolvable; 
  public get strictCoalescing() {
    return this.getBooleanAttribute('strict_coalescing');
  }
  public set strictCoalescing(value: boolean | cdktf.IResolvable) {
    this._strictCoalescing = value;
  }
  public resetStrictCoalescing() {
    this._strictCoalescing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictCoalescingInput() {
    return this._strictCoalescing;
  }
}
export interface VirtualHostCompressionParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#content_length VirtualHost#content_length}
  */
  readonly contentLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#content_type VirtualHost#content_type}
  */
  readonly contentType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#disable_on_etag_header VirtualHost#disable_on_etag_header}
  */
  readonly disableOnEtagHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#remove_accept_encoding_header VirtualHost#remove_accept_encoding_header}
  */
  readonly removeAcceptEncodingHeader?: boolean | cdktf.IResolvable;
}

export function virtualHostCompressionParamsToTerraform(struct?: VirtualHostCompressionParamsOutputReference | VirtualHostCompressionParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_length: cdktf.numberToTerraform(struct!.contentLength),
    content_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentType),
    disable_on_etag_header: cdktf.booleanToTerraform(struct!.disableOnEtagHeader),
    remove_accept_encoding_header: cdktf.booleanToTerraform(struct!.removeAcceptEncodingHeader),
  }
}


export function virtualHostCompressionParamsToHclTerraform(struct?: VirtualHostCompressionParamsOutputReference | VirtualHostCompressionParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_length: {
      value: cdktf.numberToHclTerraform(struct!.contentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_on_etag_header: {
      value: cdktf.booleanToHclTerraform(struct!.disableOnEtagHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_accept_encoding_header: {
      value: cdktf.booleanToHclTerraform(struct!.removeAcceptEncodingHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostCompressionParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostCompressionParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLength = this._contentLength;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._disableOnEtagHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOnEtagHeader = this._disableOnEtagHeader;
    }
    if (this._removeAcceptEncodingHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAcceptEncodingHeader = this._removeAcceptEncodingHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostCompressionParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentLength = undefined;
      this._contentType = undefined;
      this._disableOnEtagHeader = undefined;
      this._removeAcceptEncodingHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentLength = value.contentLength;
      this._contentType = value.contentType;
      this._disableOnEtagHeader = value.disableOnEtagHeader;
      this._removeAcceptEncodingHeader = value.removeAcceptEncodingHeader;
    }
  }

  // content_length - computed: false, optional: true, required: false
  private _contentLength?: number; 
  public get contentLength() {
    return this.getNumberAttribute('content_length');
  }
  public set contentLength(value: number) {
    this._contentLength = value;
  }
  public resetContentLength() {
    this._contentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLengthInput() {
    return this._contentLength;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string[]; 
  public get contentType() {
    return this.getListAttribute('content_type');
  }
  public set contentType(value: string[]) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // disable_on_etag_header - computed: false, optional: true, required: false
  private _disableOnEtagHeader?: boolean | cdktf.IResolvable; 
  public get disableOnEtagHeader() {
    return this.getBooleanAttribute('disable_on_etag_header');
  }
  public set disableOnEtagHeader(value: boolean | cdktf.IResolvable) {
    this._disableOnEtagHeader = value;
  }
  public resetDisableOnEtagHeader() {
    this._disableOnEtagHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOnEtagHeaderInput() {
    return this._disableOnEtagHeader;
  }

  // remove_accept_encoding_header - computed: false, optional: true, required: false
  private _removeAcceptEncodingHeader?: boolean | cdktf.IResolvable; 
  public get removeAcceptEncodingHeader() {
    return this.getBooleanAttribute('remove_accept_encoding_header');
  }
  public set removeAcceptEncodingHeader(value: boolean | cdktf.IResolvable) {
    this._removeAcceptEncodingHeader = value;
  }
  public resetRemoveAcceptEncodingHeader() {
    this._removeAcceptEncodingHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAcceptEncodingHeaderInput() {
    return this._removeAcceptEncodingHeader;
  }
}
export interface VirtualHostCorsPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#allow_credentials VirtualHost#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#allow_headers VirtualHost#allow_headers}
  */
  readonly allowHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#allow_methods VirtualHost#allow_methods}
  */
  readonly allowMethods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#allow_origin VirtualHost#allow_origin}
  */
  readonly allowOrigin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#allow_origin_regex VirtualHost#allow_origin_regex}
  */
  readonly allowOriginRegex?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#disabled VirtualHost#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#expose_headers VirtualHost#expose_headers}
  */
  readonly exposeHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#maximum_age VirtualHost#maximum_age}
  */
  readonly maximumAge?: number;
}

export function virtualHostCorsPolicyToTerraform(struct?: VirtualHostCorsPolicyOutputReference | VirtualHostCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.stringToTerraform(struct!.allowHeaders),
    allow_methods: cdktf.stringToTerraform(struct!.allowMethods),
    allow_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigin),
    allow_origin_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOriginRegex),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.stringToTerraform(struct!.exposeHeaders),
    maximum_age: cdktf.numberToTerraform(struct!.maximumAge),
  }
}


export function virtualHostCorsPolicyToHclTerraform(struct?: VirtualHostCorsPolicyOutputReference | VirtualHostCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktf.stringToHclTerraform(struct!.allowHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_methods: {
      value: cdktf.stringToHclTerraform(struct!.allowMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_origin: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigin),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOriginRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_headers: {
      value: cdktf.stringToHclTerraform(struct!.exposeHeaders),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigin = this._allowOrigin;
    }
    if (this._allowOriginRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegex = this._allowOriginRegex;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maximumAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumAge = this._maximumAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOrigin = undefined;
      this._allowOriginRegex = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maximumAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOrigin = value.allowOrigin;
      this._allowOriginRegex = value.allowOriginRegex;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maximumAge = value.maximumAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string; 
  public get allowHeaders() {
    return this.getStringAttribute('allow_headers');
  }
  public set allowHeaders(value: string) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string; 
  public get allowMethods() {
    return this.getStringAttribute('allow_methods');
  }
  public set allowMethods(value: string) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin - computed: false, optional: true, required: false
  private _allowOrigin?: string[]; 
  public get allowOrigin() {
    return this.getListAttribute('allow_origin');
  }
  public set allowOrigin(value: string[]) {
    this._allowOrigin = value;
  }
  public resetAllowOrigin() {
    this._allowOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginInput() {
    return this._allowOrigin;
  }

  // allow_origin_regex - computed: false, optional: true, required: false
  private _allowOriginRegex?: string[]; 
  public get allowOriginRegex() {
    return this.getListAttribute('allow_origin_regex');
  }
  public set allowOriginRegex(value: string[]) {
    this._allowOriginRegex = value;
  }
  public resetAllowOriginRegex() {
    this._allowOriginRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexInput() {
    return this._allowOriginRegex;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string; 
  public get exposeHeaders() {
    return this.getStringAttribute('expose_headers');
  }
  public set exposeHeaders(value: string) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // maximum_age - computed: false, optional: true, required: false
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
}
export interface VirtualHostCsrfPolicyCustomDomainListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#domains VirtualHost#domains}
  */
  readonly domains: string[];
}

export function virtualHostCsrfPolicyCustomDomainListStructToTerraform(struct?: VirtualHostCsrfPolicyCustomDomainListStructOutputReference | VirtualHostCsrfPolicyCustomDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
  }
}


export function virtualHostCsrfPolicyCustomDomainListStructToHclTerraform(struct?: VirtualHostCsrfPolicyCustomDomainListStructOutputReference | VirtualHostCsrfPolicyCustomDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostCsrfPolicyCustomDomainListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostCsrfPolicyCustomDomainListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostCsrfPolicyCustomDomainListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }
}
export interface VirtualHostCsrfPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#all_load_balancer_domains VirtualHost#all_load_balancer_domains}
  */
  readonly allLoadBalancerDomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#disabled VirtualHost#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * custom_domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#custom_domain_list VirtualHost#custom_domain_list}
  */
  readonly customDomainList?: VirtualHostCsrfPolicyCustomDomainListStruct;
}

export function virtualHostCsrfPolicyToTerraform(struct?: VirtualHostCsrfPolicyOutputReference | VirtualHostCsrfPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_load_balancer_domains: cdktf.booleanToTerraform(struct!.allLoadBalancerDomains),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    custom_domain_list: virtualHostCsrfPolicyCustomDomainListStructToTerraform(struct!.customDomainList),
  }
}


export function virtualHostCsrfPolicyToHclTerraform(struct?: VirtualHostCsrfPolicyOutputReference | VirtualHostCsrfPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_load_balancer_domains: {
      value: cdktf.booleanToHclTerraform(struct!.allLoadBalancerDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_domain_list: {
      value: virtualHostCsrfPolicyCustomDomainListStructToHclTerraform(struct!.customDomainList),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostCsrfPolicyCustomDomainListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostCsrfPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostCsrfPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allLoadBalancerDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allLoadBalancerDomains = this._allLoadBalancerDomains;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._customDomainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDomainList = this._customDomainList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostCsrfPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allLoadBalancerDomains = undefined;
      this._disabled = undefined;
      this._customDomainList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allLoadBalancerDomains = value.allLoadBalancerDomains;
      this._disabled = value.disabled;
      this._customDomainList.internalValue = value.customDomainList;
    }
  }

  // all_load_balancer_domains - computed: false, optional: true, required: false
  private _allLoadBalancerDomains?: boolean | cdktf.IResolvable; 
  public get allLoadBalancerDomains() {
    return this.getBooleanAttribute('all_load_balancer_domains');
  }
  public set allLoadBalancerDomains(value: boolean | cdktf.IResolvable) {
    this._allLoadBalancerDomains = value;
  }
  public resetAllLoadBalancerDomains() {
    this._allLoadBalancerDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allLoadBalancerDomainsInput() {
    return this._allLoadBalancerDomains;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // custom_domain_list - computed: false, optional: true, required: false
  private _customDomainList = new VirtualHostCsrfPolicyCustomDomainListStructOutputReference(this, "custom_domain_list");
  public get customDomainList() {
    return this._customDomainList;
  }
  public putCustomDomainList(value: VirtualHostCsrfPolicyCustomDomainListStruct) {
    this._customDomainList.internalValue = value;
  }
  public resetCustomDomainList() {
    this._customDomainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainListInput() {
    return this._customDomainList.internalValue;
  }
}
export interface VirtualHostDynamicReverseProxyResolutionNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#namespace VirtualHost#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#tenant VirtualHost#tenant}
  */
  readonly tenant?: string;
}

export function virtualHostDynamicReverseProxyResolutionNetworkToTerraform(struct?: VirtualHostDynamicReverseProxyResolutionNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualHostDynamicReverseProxyResolutionNetworkToHclTerraform(struct?: VirtualHostDynamicReverseProxyResolutionNetwork | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostDynamicReverseProxyResolutionNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHostDynamicReverseProxyResolutionNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostDynamicReverseProxyResolutionNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VirtualHostDynamicReverseProxyResolutionNetworkList extends cdktf.ComplexList {
  public internalValue? : VirtualHostDynamicReverseProxyResolutionNetwork[] | cdktf.IResolvable

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
  public get(index: number): VirtualHostDynamicReverseProxyResolutionNetworkOutputReference {
    return new VirtualHostDynamicReverseProxyResolutionNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHostDynamicReverseProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#connection_timeout VirtualHost#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#resolution_network_type VirtualHost#resolution_network_type}
  */
  readonly resolutionNetworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#resolve_endpoint_dynamically VirtualHost#resolve_endpoint_dynamically}
  */
  readonly resolveEndpointDynamically?: boolean | cdktf.IResolvable;
  /**
  * resolution_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#resolution_network VirtualHost#resolution_network}
  */
  readonly resolutionNetwork?: VirtualHostDynamicReverseProxyResolutionNetwork[] | cdktf.IResolvable;
}

export function virtualHostDynamicReverseProxyToTerraform(struct?: VirtualHostDynamicReverseProxyOutputReference | VirtualHostDynamicReverseProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    resolution_network_type: cdktf.stringToTerraform(struct!.resolutionNetworkType),
    resolve_endpoint_dynamically: cdktf.booleanToTerraform(struct!.resolveEndpointDynamically),
    resolution_network: cdktf.listMapper(virtualHostDynamicReverseProxyResolutionNetworkToTerraform, true)(struct!.resolutionNetwork),
  }
}


export function virtualHostDynamicReverseProxyToHclTerraform(struct?: VirtualHostDynamicReverseProxyOutputReference | VirtualHostDynamicReverseProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resolution_network_type: {
      value: cdktf.stringToHclTerraform(struct!.resolutionNetworkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_endpoint_dynamically: {
      value: cdktf.booleanToHclTerraform(struct!.resolveEndpointDynamically),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resolution_network: {
      value: cdktf.listMapperHcl(virtualHostDynamicReverseProxyResolutionNetworkToHclTerraform, true)(struct!.resolutionNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostDynamicReverseProxyResolutionNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostDynamicReverseProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostDynamicReverseProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._resolutionNetworkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolutionNetworkType = this._resolutionNetworkType;
    }
    if (this._resolveEndpointDynamically !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveEndpointDynamically = this._resolveEndpointDynamically;
    }
    if (this._resolutionNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolutionNetwork = this._resolutionNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostDynamicReverseProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionTimeout = undefined;
      this._resolutionNetworkType = undefined;
      this._resolveEndpointDynamically = undefined;
      this._resolutionNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionTimeout = value.connectionTimeout;
      this._resolutionNetworkType = value.resolutionNetworkType;
      this._resolveEndpointDynamically = value.resolveEndpointDynamically;
      this._resolutionNetwork.internalValue = value.resolutionNetwork;
    }
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // resolution_network_type - computed: false, optional: true, required: false
  private _resolutionNetworkType?: string; 
  public get resolutionNetworkType() {
    return this.getStringAttribute('resolution_network_type');
  }
  public set resolutionNetworkType(value: string) {
    this._resolutionNetworkType = value;
  }
  public resetResolutionNetworkType() {
    this._resolutionNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionNetworkTypeInput() {
    return this._resolutionNetworkType;
  }

  // resolve_endpoint_dynamically - computed: false, optional: true, required: false
  private _resolveEndpointDynamically?: boolean | cdktf.IResolvable; 
  public get resolveEndpointDynamically() {
    return this.getBooleanAttribute('resolve_endpoint_dynamically');
  }
  public set resolveEndpointDynamically(value: boolean | cdktf.IResolvable) {
    this._resolveEndpointDynamically = value;
  }
  public resetResolveEndpointDynamically() {
    this._resolveEndpointDynamically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveEndpointDynamicallyInput() {
    return this._resolveEndpointDynamically;
  }

  // resolution_network - computed: false, optional: true, required: false
  private _resolutionNetwork = new VirtualHostDynamicReverseProxyResolutionNetworkList(this, "resolution_network", false);
  public get resolutionNetwork() {
    return this._resolutionNetwork;
  }
  public putResolutionNetwork(value: VirtualHostDynamicReverseProxyResolutionNetwork[] | cdktf.IResolvable) {
    this._resolutionNetwork.internalValue = value;
  }
  public resetResolutionNetwork() {
    this._resolutionNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionNetworkInput() {
    return this._resolutionNetwork.internalValue;
  }
}
export interface VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#default_header_transformation VirtualHost#default_header_transformation}
  */
  readonly defaultHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#legacy_header_transformation VirtualHost#legacy_header_transformation}
  */
  readonly legacyHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#preserve_case_header_transformation VirtualHost#preserve_case_header_transformation}
  */
  readonly preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#proper_case_header_transformation VirtualHost#proper_case_header_transformation}
  */
  readonly properCaseHeaderTransformation?: boolean | cdktf.IResolvable;
}

export function virtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationToTerraform(struct?: VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationOutputReference | VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_header_transformation: cdktf.booleanToTerraform(struct!.defaultHeaderTransformation),
    legacy_header_transformation: cdktf.booleanToTerraform(struct!.legacyHeaderTransformation),
    preserve_case_header_transformation: cdktf.booleanToTerraform(struct!.preserveCaseHeaderTransformation),
    proper_case_header_transformation: cdktf.booleanToTerraform(struct!.properCaseHeaderTransformation),
  }
}


export function virtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationToHclTerraform(struct?: VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationOutputReference | VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legacy_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.legacyHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.preserveCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proper_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.properCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHeaderTransformation = this._defaultHeaderTransformation;
    }
    if (this._legacyHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyHeaderTransformation = this._legacyHeaderTransformation;
    }
    if (this._preserveCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveCaseHeaderTransformation = this._preserveCaseHeaderTransformation;
    }
    if (this._properCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.properCaseHeaderTransformation = this._properCaseHeaderTransformation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultHeaderTransformation = undefined;
      this._legacyHeaderTransformation = undefined;
      this._preserveCaseHeaderTransformation = undefined;
      this._properCaseHeaderTransformation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultHeaderTransformation = value.defaultHeaderTransformation;
      this._legacyHeaderTransformation = value.legacyHeaderTransformation;
      this._preserveCaseHeaderTransformation = value.preserveCaseHeaderTransformation;
      this._properCaseHeaderTransformation = value.properCaseHeaderTransformation;
    }
  }

  // default_header_transformation - computed: false, optional: true, required: false
  private _defaultHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get defaultHeaderTransformation() {
    return this.getBooleanAttribute('default_header_transformation');
  }
  public set defaultHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._defaultHeaderTransformation = value;
  }
  public resetDefaultHeaderTransformation() {
    this._defaultHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeaderTransformationInput() {
    return this._defaultHeaderTransformation;
  }

  // legacy_header_transformation - computed: false, optional: true, required: false
  private _legacyHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get legacyHeaderTransformation() {
    return this.getBooleanAttribute('legacy_header_transformation');
  }
  public set legacyHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._legacyHeaderTransformation = value;
  }
  public resetLegacyHeaderTransformation() {
    this._legacyHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyHeaderTransformationInput() {
    return this._legacyHeaderTransformation;
  }

  // preserve_case_header_transformation - computed: false, optional: true, required: false
  private _preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get preserveCaseHeaderTransformation() {
    return this.getBooleanAttribute('preserve_case_header_transformation');
  }
  public set preserveCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._preserveCaseHeaderTransformation = value;
  }
  public resetPreserveCaseHeaderTransformation() {
    this._preserveCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveCaseHeaderTransformationInput() {
    return this._preserveCaseHeaderTransformation;
  }

  // proper_case_header_transformation - computed: false, optional: true, required: false
  private _properCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get properCaseHeaderTransformation() {
    return this.getBooleanAttribute('proper_case_header_transformation');
  }
  public set properCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._properCaseHeaderTransformation = value;
  }
  public resetProperCaseHeaderTransformation() {
    this._properCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get properCaseHeaderTransformationInput() {
    return this._properCaseHeaderTransformation;
  }
}
export interface VirtualHostHttpProtocolOptionsHttpProtocolEnableV1Only {
  /**
  * header_transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#header_transformation VirtualHost#header_transformation}
  */
  readonly headerTransformation?: VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation;
}

export function virtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyToTerraform(struct?: VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyOutputReference | VirtualHostHttpProtocolOptionsHttpProtocolEnableV1Only): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_transformation: virtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationToTerraform(struct!.headerTransformation),
  }
}


export function virtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyToHclTerraform(struct?: VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyOutputReference | VirtualHostHttpProtocolOptionsHttpProtocolEnableV1Only): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_transformation: {
      value: virtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationToHclTerraform(struct!.headerTransformation),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostHttpProtocolOptionsHttpProtocolEnableV1Only | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTransformation = this._headerTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostHttpProtocolOptionsHttpProtocolEnableV1Only | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerTransformation.internalValue = value.headerTransformation;
    }
  }

  // header_transformation - computed: false, optional: true, required: false
  private _headerTransformation = new VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationOutputReference(this, "header_transformation");
  public get headerTransformation() {
    return this._headerTransformation;
  }
  public putHeaderTransformation(value: VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation) {
    this._headerTransformation.internalValue = value;
  }
  public resetHeaderTransformation() {
    this._headerTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTransformationInput() {
    return this._headerTransformation.internalValue;
  }
}
export interface VirtualHostHttpProtocolOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#http_protocol_enable_v1_v2 VirtualHost#http_protocol_enable_v1_v2}
  */
  readonly httpProtocolEnableV1V2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#http_protocol_enable_v2_only VirtualHost#http_protocol_enable_v2_only}
  */
  readonly httpProtocolEnableV2Only?: boolean | cdktf.IResolvable;
  /**
  * http_protocol_enable_v1_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#http_protocol_enable_v1_only VirtualHost#http_protocol_enable_v1_only}
  */
  readonly httpProtocolEnableV1Only?: VirtualHostHttpProtocolOptionsHttpProtocolEnableV1Only;
}

export function virtualHostHttpProtocolOptionsToTerraform(struct?: VirtualHostHttpProtocolOptionsOutputReference | VirtualHostHttpProtocolOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_protocol_enable_v1_v2: cdktf.booleanToTerraform(struct!.httpProtocolEnableV1V2),
    http_protocol_enable_v2_only: cdktf.booleanToTerraform(struct!.httpProtocolEnableV2Only),
    http_protocol_enable_v1_only: virtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyToTerraform(struct!.httpProtocolEnableV1Only),
  }
}


export function virtualHostHttpProtocolOptionsToHclTerraform(struct?: VirtualHostHttpProtocolOptionsOutputReference | VirtualHostHttpProtocolOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_protocol_enable_v1_v2: {
      value: cdktf.booleanToHclTerraform(struct!.httpProtocolEnableV1V2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_protocol_enable_v2_only: {
      value: cdktf.booleanToHclTerraform(struct!.httpProtocolEnableV2Only),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_protocol_enable_v1_only: {
      value: virtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyToHclTerraform(struct!.httpProtocolEnableV1Only),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostHttpProtocolOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostHttpProtocolOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpProtocolEnableV1V2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocolEnableV1V2 = this._httpProtocolEnableV1V2;
    }
    if (this._httpProtocolEnableV2Only !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocolEnableV2Only = this._httpProtocolEnableV2Only;
    }
    if (this._httpProtocolEnableV1Only?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocolEnableV1Only = this._httpProtocolEnableV1Only?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostHttpProtocolOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpProtocolEnableV1V2 = undefined;
      this._httpProtocolEnableV2Only = undefined;
      this._httpProtocolEnableV1Only.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpProtocolEnableV1V2 = value.httpProtocolEnableV1V2;
      this._httpProtocolEnableV2Only = value.httpProtocolEnableV2Only;
      this._httpProtocolEnableV1Only.internalValue = value.httpProtocolEnableV1Only;
    }
  }

  // http_protocol_enable_v1_v2 - computed: false, optional: true, required: false
  private _httpProtocolEnableV1V2?: boolean | cdktf.IResolvable; 
  public get httpProtocolEnableV1V2() {
    return this.getBooleanAttribute('http_protocol_enable_v1_v2');
  }
  public set httpProtocolEnableV1V2(value: boolean | cdktf.IResolvable) {
    this._httpProtocolEnableV1V2 = value;
  }
  public resetHttpProtocolEnableV1V2() {
    this._httpProtocolEnableV1V2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolEnableV1V2Input() {
    return this._httpProtocolEnableV1V2;
  }

  // http_protocol_enable_v2_only - computed: false, optional: true, required: false
  private _httpProtocolEnableV2Only?: boolean | cdktf.IResolvable; 
  public get httpProtocolEnableV2Only() {
    return this.getBooleanAttribute('http_protocol_enable_v2_only');
  }
  public set httpProtocolEnableV2Only(value: boolean | cdktf.IResolvable) {
    this._httpProtocolEnableV2Only = value;
  }
  public resetHttpProtocolEnableV2Only() {
    this._httpProtocolEnableV2Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolEnableV2OnlyInput() {
    return this._httpProtocolEnableV2Only;
  }

  // http_protocol_enable_v1_only - computed: false, optional: true, required: false
  private _httpProtocolEnableV1Only = new VirtualHostHttpProtocolOptionsHttpProtocolEnableV1OnlyOutputReference(this, "http_protocol_enable_v1_only");
  public get httpProtocolEnableV1Only() {
    return this._httpProtocolEnableV1Only;
  }
  public putHttpProtocolEnableV1Only(value: VirtualHostHttpProtocolOptionsHttpProtocolEnableV1Only) {
    this._httpProtocolEnableV1Only.internalValue = value;
  }
  public resetHttpProtocolEnableV1Only() {
    this._httpProtocolEnableV1Only.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolEnableV1OnlyInput() {
    return this._httpProtocolEnableV1Only.internalValue;
  }
}
export interface VirtualHostJsChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#cookie_expiry VirtualHost#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#custom_page VirtualHost#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#js_script_delay VirtualHost#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function virtualHostJsChallengeToTerraform(struct?: VirtualHostJsChallengeOutputReference | VirtualHostJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
    js_script_delay: cdktf.numberToTerraform(struct!.jsScriptDelay),
  }
}


export function virtualHostJsChallengeToHclTerraform(struct?: VirtualHostJsChallengeOutputReference | VirtualHostJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_script_delay: {
      value: cdktf.numberToHclTerraform(struct!.jsScriptDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostJsChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostJsChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    if (this._jsScriptDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsScriptDelay = this._jsScriptDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostJsChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
      this._jsScriptDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
      this._jsScriptDelay = value.jsScriptDelay;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // js_script_delay - computed: false, optional: true, required: false
  private _jsScriptDelay?: number; 
  public get jsScriptDelay() {
    return this.getNumberAttribute('js_script_delay');
  }
  public set jsScriptDelay(value: number) {
    this._jsScriptDelay = value;
  }
  public resetJsScriptDelay() {
    this._jsScriptDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsScriptDelayInput() {
    return this._jsScriptDelay;
  }
}
export interface VirtualHostRateLimiterAllowedPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#namespace VirtualHost#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#tenant VirtualHost#tenant}
  */
  readonly tenant?: string;
}

export function virtualHostRateLimiterAllowedPrefixesToTerraform(struct?: VirtualHostRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualHostRateLimiterAllowedPrefixesToHclTerraform(struct?: VirtualHostRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostRateLimiterAllowedPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHostRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VirtualHostRateLimiterAllowedPrefixesList extends cdktf.ComplexList {
  public internalValue? : VirtualHostRateLimiterAllowedPrefixes[] | cdktf.IResolvable

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
  public get(index: number): VirtualHostRateLimiterAllowedPrefixesOutputReference {
    return new VirtualHostRateLimiterAllowedPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#decryption_provider VirtualHost#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#location VirtualHost#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#store_provider VirtualHost#store_provider}
  */
  readonly storeProvider?: string;
}

export function virtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: VirtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | VirtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function virtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: VirtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | VirtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VirtualHostRequestCookiesToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#provider VirtualHost#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#url VirtualHost#url}
  */
  readonly url: string;
}

export function virtualHostRequestCookiesToAddSecretValueClearSecretInfoToTerraform(struct?: VirtualHostRequestCookiesToAddSecretValueClearSecretInfoOutputReference | VirtualHostRequestCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function virtualHostRequestCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct?: VirtualHostRequestCookiesToAddSecretValueClearSecretInfoOutputReference | VirtualHostRequestCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostRequestCookiesToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostRequestCookiesToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostRequestCookiesToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VirtualHostRequestCookiesToAddSecretValue {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#blindfold_secret_info VirtualHost#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VirtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#clear_secret_info VirtualHost#clear_secret_info}
  */
  readonly clearSecretInfo?: VirtualHostRequestCookiesToAddSecretValueClearSecretInfo;
}

export function virtualHostRequestCookiesToAddSecretValueToTerraform(struct?: VirtualHostRequestCookiesToAddSecretValueOutputReference | VirtualHostRequestCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: virtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: virtualHostRequestCookiesToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function virtualHostRequestCookiesToAddSecretValueToHclTerraform(struct?: VirtualHostRequestCookiesToAddSecretValueOutputReference | VirtualHostRequestCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: virtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: virtualHostRequestCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostRequestCookiesToAddSecretValueClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostRequestCookiesToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostRequestCookiesToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostRequestCookiesToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VirtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VirtualHostRequestCookiesToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VirtualHostRequestCookiesToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VirtualHostRequestCookiesToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VirtualHostRequestCookiesToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#overwrite VirtualHost#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#value VirtualHost#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#secret_value VirtualHost#secret_value}
  */
  readonly secretValue?: VirtualHostRequestCookiesToAddSecretValue;
}

export function virtualHostRequestCookiesToAddToTerraform(struct?: VirtualHostRequestCookiesToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: virtualHostRequestCookiesToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function virtualHostRequestCookiesToAddToHclTerraform(struct?: VirtualHostRequestCookiesToAdd | cdktf.IResolvable): any {
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
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: virtualHostRequestCookiesToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostRequestCookiesToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostRequestCookiesToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHostRequestCookiesToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostRequestCookiesToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._overwrite = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._overwrite = value.overwrite;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new VirtualHostRequestCookiesToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: VirtualHostRequestCookiesToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class VirtualHostRequestCookiesToAddList extends cdktf.ComplexList {
  public internalValue? : VirtualHostRequestCookiesToAdd[] | cdktf.IResolvable

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
  public get(index: number): VirtualHostRequestCookiesToAddOutputReference {
    return new VirtualHostRequestCookiesToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#decryption_provider VirtualHost#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#location VirtualHost#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#store_provider VirtualHost#store_provider}
  */
  readonly storeProvider?: string;
}

export function virtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: VirtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | VirtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function virtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: VirtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | VirtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VirtualHostRequestHeadersToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#provider VirtualHost#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#url VirtualHost#url}
  */
  readonly url: string;
}

export function virtualHostRequestHeadersToAddSecretValueClearSecretInfoToTerraform(struct?: VirtualHostRequestHeadersToAddSecretValueClearSecretInfoOutputReference | VirtualHostRequestHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function virtualHostRequestHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct?: VirtualHostRequestHeadersToAddSecretValueClearSecretInfoOutputReference | VirtualHostRequestHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostRequestHeadersToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostRequestHeadersToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostRequestHeadersToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VirtualHostRequestHeadersToAddSecretValue {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#blindfold_secret_info VirtualHost#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VirtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#clear_secret_info VirtualHost#clear_secret_info}
  */
  readonly clearSecretInfo?: VirtualHostRequestHeadersToAddSecretValueClearSecretInfo;
}

export function virtualHostRequestHeadersToAddSecretValueToTerraform(struct?: VirtualHostRequestHeadersToAddSecretValueOutputReference | VirtualHostRequestHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: virtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: virtualHostRequestHeadersToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function virtualHostRequestHeadersToAddSecretValueToHclTerraform(struct?: VirtualHostRequestHeadersToAddSecretValueOutputReference | VirtualHostRequestHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: virtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: virtualHostRequestHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostRequestHeadersToAddSecretValueClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostRequestHeadersToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostRequestHeadersToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostRequestHeadersToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VirtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VirtualHostRequestHeadersToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VirtualHostRequestHeadersToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VirtualHostRequestHeadersToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VirtualHostRequestHeadersToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#append VirtualHost#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#value VirtualHost#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#secret_value VirtualHost#secret_value}
  */
  readonly secretValue?: VirtualHostRequestHeadersToAddSecretValue;
}

export function virtualHostRequestHeadersToAddToTerraform(struct?: VirtualHostRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: virtualHostRequestHeadersToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function virtualHostRequestHeadersToAddToHclTerraform(struct?: VirtualHostRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: virtualHostRequestHeadersToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostRequestHeadersToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHostRequestHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostRequestHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new VirtualHostRequestHeadersToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: VirtualHostRequestHeadersToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class VirtualHostRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : VirtualHostRequestHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): VirtualHostRequestHeadersToAddOutputReference {
    return new VirtualHostRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#decryption_provider VirtualHost#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#location VirtualHost#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#store_provider VirtualHost#store_provider}
  */
  readonly storeProvider?: string;
}

export function virtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: VirtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | VirtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function virtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: VirtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | VirtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VirtualHostResponseCookiesToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#provider VirtualHost#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#url VirtualHost#url}
  */
  readonly url: string;
}

export function virtualHostResponseCookiesToAddSecretValueClearSecretInfoToTerraform(struct?: VirtualHostResponseCookiesToAddSecretValueClearSecretInfoOutputReference | VirtualHostResponseCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function virtualHostResponseCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct?: VirtualHostResponseCookiesToAddSecretValueClearSecretInfoOutputReference | VirtualHostResponseCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostResponseCookiesToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostResponseCookiesToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostResponseCookiesToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VirtualHostResponseCookiesToAddSecretValue {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#blindfold_secret_info VirtualHost#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VirtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#clear_secret_info VirtualHost#clear_secret_info}
  */
  readonly clearSecretInfo?: VirtualHostResponseCookiesToAddSecretValueClearSecretInfo;
}

export function virtualHostResponseCookiesToAddSecretValueToTerraform(struct?: VirtualHostResponseCookiesToAddSecretValueOutputReference | VirtualHostResponseCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: virtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: virtualHostResponseCookiesToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function virtualHostResponseCookiesToAddSecretValueToHclTerraform(struct?: VirtualHostResponseCookiesToAddSecretValueOutputReference | VirtualHostResponseCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: virtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: virtualHostResponseCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostResponseCookiesToAddSecretValueClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostResponseCookiesToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostResponseCookiesToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostResponseCookiesToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VirtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VirtualHostResponseCookiesToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VirtualHostResponseCookiesToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VirtualHostResponseCookiesToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VirtualHostResponseCookiesToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#add_domain VirtualHost#add_domain}
  */
  readonly addDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#add_expiry VirtualHost#add_expiry}
  */
  readonly addExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#add_httponly VirtualHost#add_httponly}
  */
  readonly addHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#add_partitioned VirtualHost#add_partitioned}
  */
  readonly addPartitioned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#add_path VirtualHost#add_path}
  */
  readonly addPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#add_secure VirtualHost#add_secure}
  */
  readonly addSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#ignore_domain VirtualHost#ignore_domain}
  */
  readonly ignoreDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#ignore_expiry VirtualHost#ignore_expiry}
  */
  readonly ignoreExpiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#ignore_httponly VirtualHost#ignore_httponly}
  */
  readonly ignoreHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#ignore_max_age VirtualHost#ignore_max_age}
  */
  readonly ignoreMaxAge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#ignore_partitioned VirtualHost#ignore_partitioned}
  */
  readonly ignorePartitioned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#ignore_path VirtualHost#ignore_path}
  */
  readonly ignorePath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#ignore_samesite VirtualHost#ignore_samesite}
  */
  readonly ignoreSamesite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#ignore_secure VirtualHost#ignore_secure}
  */
  readonly ignoreSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#ignore_value VirtualHost#ignore_value}
  */
  readonly ignoreValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#max_age_value VirtualHost#max_age_value}
  */
  readonly maxAgeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#overwrite VirtualHost#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#samesite_lax VirtualHost#samesite_lax}
  */
  readonly samesiteLax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#samesite_none VirtualHost#samesite_none}
  */
  readonly samesiteNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#samesite_strict VirtualHost#samesite_strict}
  */
  readonly samesiteStrict?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#value VirtualHost#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#secret_value VirtualHost#secret_value}
  */
  readonly secretValue?: VirtualHostResponseCookiesToAddSecretValue;
}

export function virtualHostResponseCookiesToAddToTerraform(struct?: VirtualHostResponseCookiesToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_domain: cdktf.stringToTerraform(struct!.addDomain),
    add_expiry: cdktf.stringToTerraform(struct!.addExpiry),
    add_httponly: cdktf.booleanToTerraform(struct!.addHttponly),
    add_partitioned: cdktf.booleanToTerraform(struct!.addPartitioned),
    add_path: cdktf.stringToTerraform(struct!.addPath),
    add_secure: cdktf.booleanToTerraform(struct!.addSecure),
    ignore_domain: cdktf.booleanToTerraform(struct!.ignoreDomain),
    ignore_expiry: cdktf.booleanToTerraform(struct!.ignoreExpiry),
    ignore_httponly: cdktf.booleanToTerraform(struct!.ignoreHttponly),
    ignore_max_age: cdktf.booleanToTerraform(struct!.ignoreMaxAge),
    ignore_partitioned: cdktf.booleanToTerraform(struct!.ignorePartitioned),
    ignore_path: cdktf.booleanToTerraform(struct!.ignorePath),
    ignore_samesite: cdktf.booleanToTerraform(struct!.ignoreSamesite),
    ignore_secure: cdktf.booleanToTerraform(struct!.ignoreSecure),
    ignore_value: cdktf.booleanToTerraform(struct!.ignoreValue),
    max_age_value: cdktf.numberToTerraform(struct!.maxAgeValue),
    name: cdktf.stringToTerraform(struct!.name),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    samesite_lax: cdktf.booleanToTerraform(struct!.samesiteLax),
    samesite_none: cdktf.booleanToTerraform(struct!.samesiteNone),
    samesite_strict: cdktf.booleanToTerraform(struct!.samesiteStrict),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: virtualHostResponseCookiesToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function virtualHostResponseCookiesToAddToHclTerraform(struct?: VirtualHostResponseCookiesToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_domain: {
      value: cdktf.stringToHclTerraform(struct!.addDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_expiry: {
      value: cdktf.stringToHclTerraform(struct!.addExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.addHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_partitioned: {
      value: cdktf.booleanToHclTerraform(struct!.addPartitioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_path: {
      value: cdktf.stringToHclTerraform(struct!.addPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_secure: {
      value: cdktf.booleanToHclTerraform(struct!.addSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_domain: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_max_age: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_partitioned: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePartitioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_path: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_samesite: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSamesite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_secure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_value: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age_value: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_lax: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteLax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_none: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_strict: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: virtualHostResponseCookiesToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostResponseCookiesToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostResponseCookiesToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHostResponseCookiesToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.addDomain = this._addDomain;
    }
    if (this._addExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.addExpiry = this._addExpiry;
    }
    if (this._addHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttponly = this._addHttponly;
    }
    if (this._addPartitioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.addPartitioned = this._addPartitioned;
    }
    if (this._addPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.addPath = this._addPath;
    }
    if (this._addSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSecure = this._addSecure;
    }
    if (this._ignoreDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDomain = this._ignoreDomain;
    }
    if (this._ignoreExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreExpiry = this._ignoreExpiry;
    }
    if (this._ignoreHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHttponly = this._ignoreHttponly;
    }
    if (this._ignoreMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMaxAge = this._ignoreMaxAge;
    }
    if (this._ignorePartitioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePartitioned = this._ignorePartitioned;
    }
    if (this._ignorePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePath = this._ignorePath;
    }
    if (this._ignoreSamesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSamesite = this._ignoreSamesite;
    }
    if (this._ignoreSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSecure = this._ignoreSecure;
    }
    if (this._ignoreValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreValue = this._ignoreValue;
    }
    if (this._maxAgeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeValue = this._maxAgeValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._samesiteLax !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteLax = this._samesiteLax;
    }
    if (this._samesiteNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteNone = this._samesiteNone;
    }
    if (this._samesiteStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteStrict = this._samesiteStrict;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostResponseCookiesToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addDomain = undefined;
      this._addExpiry = undefined;
      this._addHttponly = undefined;
      this._addPartitioned = undefined;
      this._addPath = undefined;
      this._addSecure = undefined;
      this._ignoreDomain = undefined;
      this._ignoreExpiry = undefined;
      this._ignoreHttponly = undefined;
      this._ignoreMaxAge = undefined;
      this._ignorePartitioned = undefined;
      this._ignorePath = undefined;
      this._ignoreSamesite = undefined;
      this._ignoreSecure = undefined;
      this._ignoreValue = undefined;
      this._maxAgeValue = undefined;
      this._name = undefined;
      this._overwrite = undefined;
      this._samesiteLax = undefined;
      this._samesiteNone = undefined;
      this._samesiteStrict = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addDomain = value.addDomain;
      this._addExpiry = value.addExpiry;
      this._addHttponly = value.addHttponly;
      this._addPartitioned = value.addPartitioned;
      this._addPath = value.addPath;
      this._addSecure = value.addSecure;
      this._ignoreDomain = value.ignoreDomain;
      this._ignoreExpiry = value.ignoreExpiry;
      this._ignoreHttponly = value.ignoreHttponly;
      this._ignoreMaxAge = value.ignoreMaxAge;
      this._ignorePartitioned = value.ignorePartitioned;
      this._ignorePath = value.ignorePath;
      this._ignoreSamesite = value.ignoreSamesite;
      this._ignoreSecure = value.ignoreSecure;
      this._ignoreValue = value.ignoreValue;
      this._maxAgeValue = value.maxAgeValue;
      this._name = value.name;
      this._overwrite = value.overwrite;
      this._samesiteLax = value.samesiteLax;
      this._samesiteNone = value.samesiteNone;
      this._samesiteStrict = value.samesiteStrict;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // add_domain - computed: false, optional: true, required: false
  private _addDomain?: string; 
  public get addDomain() {
    return this.getStringAttribute('add_domain');
  }
  public set addDomain(value: string) {
    this._addDomain = value;
  }
  public resetAddDomain() {
    this._addDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addDomainInput() {
    return this._addDomain;
  }

  // add_expiry - computed: false, optional: true, required: false
  private _addExpiry?: string; 
  public get addExpiry() {
    return this.getStringAttribute('add_expiry');
  }
  public set addExpiry(value: string) {
    this._addExpiry = value;
  }
  public resetAddExpiry() {
    this._addExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addExpiryInput() {
    return this._addExpiry;
  }

  // add_httponly - computed: false, optional: true, required: false
  private _addHttponly?: boolean | cdktf.IResolvable; 
  public get addHttponly() {
    return this.getBooleanAttribute('add_httponly');
  }
  public set addHttponly(value: boolean | cdktf.IResolvable) {
    this._addHttponly = value;
  }
  public resetAddHttponly() {
    this._addHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttponlyInput() {
    return this._addHttponly;
  }

  // add_partitioned - computed: false, optional: true, required: false
  private _addPartitioned?: boolean | cdktf.IResolvable; 
  public get addPartitioned() {
    return this.getBooleanAttribute('add_partitioned');
  }
  public set addPartitioned(value: boolean | cdktf.IResolvable) {
    this._addPartitioned = value;
  }
  public resetAddPartitioned() {
    this._addPartitioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPartitionedInput() {
    return this._addPartitioned;
  }

  // add_path - computed: false, optional: true, required: false
  private _addPath?: string; 
  public get addPath() {
    return this.getStringAttribute('add_path');
  }
  public set addPath(value: string) {
    this._addPath = value;
  }
  public resetAddPath() {
    this._addPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathInput() {
    return this._addPath;
  }

  // add_secure - computed: false, optional: true, required: false
  private _addSecure?: boolean | cdktf.IResolvable; 
  public get addSecure() {
    return this.getBooleanAttribute('add_secure');
  }
  public set addSecure(value: boolean | cdktf.IResolvable) {
    this._addSecure = value;
  }
  public resetAddSecure() {
    this._addSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSecureInput() {
    return this._addSecure;
  }

  // ignore_domain - computed: false, optional: true, required: false
  private _ignoreDomain?: boolean | cdktf.IResolvable; 
  public get ignoreDomain() {
    return this.getBooleanAttribute('ignore_domain');
  }
  public set ignoreDomain(value: boolean | cdktf.IResolvable) {
    this._ignoreDomain = value;
  }
  public resetIgnoreDomain() {
    this._ignoreDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDomainInput() {
    return this._ignoreDomain;
  }

  // ignore_expiry - computed: false, optional: true, required: false
  private _ignoreExpiry?: boolean | cdktf.IResolvable; 
  public get ignoreExpiry() {
    return this.getBooleanAttribute('ignore_expiry');
  }
  public set ignoreExpiry(value: boolean | cdktf.IResolvable) {
    this._ignoreExpiry = value;
  }
  public resetIgnoreExpiry() {
    this._ignoreExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreExpiryInput() {
    return this._ignoreExpiry;
  }

  // ignore_httponly - computed: false, optional: true, required: false
  private _ignoreHttponly?: boolean | cdktf.IResolvable; 
  public get ignoreHttponly() {
    return this.getBooleanAttribute('ignore_httponly');
  }
  public set ignoreHttponly(value: boolean | cdktf.IResolvable) {
    this._ignoreHttponly = value;
  }
  public resetIgnoreHttponly() {
    this._ignoreHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHttponlyInput() {
    return this._ignoreHttponly;
  }

  // ignore_max_age - computed: false, optional: true, required: false
  private _ignoreMaxAge?: boolean | cdktf.IResolvable; 
  public get ignoreMaxAge() {
    return this.getBooleanAttribute('ignore_max_age');
  }
  public set ignoreMaxAge(value: boolean | cdktf.IResolvable) {
    this._ignoreMaxAge = value;
  }
  public resetIgnoreMaxAge() {
    this._ignoreMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMaxAgeInput() {
    return this._ignoreMaxAge;
  }

  // ignore_partitioned - computed: false, optional: true, required: false
  private _ignorePartitioned?: boolean | cdktf.IResolvable; 
  public get ignorePartitioned() {
    return this.getBooleanAttribute('ignore_partitioned');
  }
  public set ignorePartitioned(value: boolean | cdktf.IResolvable) {
    this._ignorePartitioned = value;
  }
  public resetIgnorePartitioned() {
    this._ignorePartitioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePartitionedInput() {
    return this._ignorePartitioned;
  }

  // ignore_path - computed: false, optional: true, required: false
  private _ignorePath?: boolean | cdktf.IResolvable; 
  public get ignorePath() {
    return this.getBooleanAttribute('ignore_path');
  }
  public set ignorePath(value: boolean | cdktf.IResolvable) {
    this._ignorePath = value;
  }
  public resetIgnorePath() {
    this._ignorePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePathInput() {
    return this._ignorePath;
  }

  // ignore_samesite - computed: false, optional: true, required: false
  private _ignoreSamesite?: boolean | cdktf.IResolvable; 
  public get ignoreSamesite() {
    return this.getBooleanAttribute('ignore_samesite');
  }
  public set ignoreSamesite(value: boolean | cdktf.IResolvable) {
    this._ignoreSamesite = value;
  }
  public resetIgnoreSamesite() {
    this._ignoreSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSamesiteInput() {
    return this._ignoreSamesite;
  }

  // ignore_secure - computed: false, optional: true, required: false
  private _ignoreSecure?: boolean | cdktf.IResolvable; 
  public get ignoreSecure() {
    return this.getBooleanAttribute('ignore_secure');
  }
  public set ignoreSecure(value: boolean | cdktf.IResolvable) {
    this._ignoreSecure = value;
  }
  public resetIgnoreSecure() {
    this._ignoreSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSecureInput() {
    return this._ignoreSecure;
  }

  // ignore_value - computed: false, optional: true, required: false
  private _ignoreValue?: boolean | cdktf.IResolvable; 
  public get ignoreValue() {
    return this.getBooleanAttribute('ignore_value');
  }
  public set ignoreValue(value: boolean | cdktf.IResolvable) {
    this._ignoreValue = value;
  }
  public resetIgnoreValue() {
    this._ignoreValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreValueInput() {
    return this._ignoreValue;
  }

  // max_age_value - computed: false, optional: true, required: false
  private _maxAgeValue?: number; 
  public get maxAgeValue() {
    return this.getNumberAttribute('max_age_value');
  }
  public set maxAgeValue(value: number) {
    this._maxAgeValue = value;
  }
  public resetMaxAgeValue() {
    this._maxAgeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeValueInput() {
    return this._maxAgeValue;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // samesite_lax - computed: false, optional: true, required: false
  private _samesiteLax?: boolean | cdktf.IResolvable; 
  public get samesiteLax() {
    return this.getBooleanAttribute('samesite_lax');
  }
  public set samesiteLax(value: boolean | cdktf.IResolvable) {
    this._samesiteLax = value;
  }
  public resetSamesiteLax() {
    this._samesiteLax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteLaxInput() {
    return this._samesiteLax;
  }

  // samesite_none - computed: false, optional: true, required: false
  private _samesiteNone?: boolean | cdktf.IResolvable; 
  public get samesiteNone() {
    return this.getBooleanAttribute('samesite_none');
  }
  public set samesiteNone(value: boolean | cdktf.IResolvable) {
    this._samesiteNone = value;
  }
  public resetSamesiteNone() {
    this._samesiteNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteNoneInput() {
    return this._samesiteNone;
  }

  // samesite_strict - computed: false, optional: true, required: false
  private _samesiteStrict?: boolean | cdktf.IResolvable; 
  public get samesiteStrict() {
    return this.getBooleanAttribute('samesite_strict');
  }
  public set samesiteStrict(value: boolean | cdktf.IResolvable) {
    this._samesiteStrict = value;
  }
  public resetSamesiteStrict() {
    this._samesiteStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteStrictInput() {
    return this._samesiteStrict;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new VirtualHostResponseCookiesToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: VirtualHostResponseCookiesToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class VirtualHostResponseCookiesToAddList extends cdktf.ComplexList {
  public internalValue? : VirtualHostResponseCookiesToAdd[] | cdktf.IResolvable

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
  public get(index: number): VirtualHostResponseCookiesToAddOutputReference {
    return new VirtualHostResponseCookiesToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#decryption_provider VirtualHost#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#location VirtualHost#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#store_provider VirtualHost#store_provider}
  */
  readonly storeProvider?: string;
}

export function virtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: VirtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | VirtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function virtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: VirtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | VirtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VirtualHostResponseHeadersToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#provider VirtualHost#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#url VirtualHost#url}
  */
  readonly url: string;
}

export function virtualHostResponseHeadersToAddSecretValueClearSecretInfoToTerraform(struct?: VirtualHostResponseHeadersToAddSecretValueClearSecretInfoOutputReference | VirtualHostResponseHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function virtualHostResponseHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct?: VirtualHostResponseHeadersToAddSecretValueClearSecretInfoOutputReference | VirtualHostResponseHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostResponseHeadersToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostResponseHeadersToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostResponseHeadersToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VirtualHostResponseHeadersToAddSecretValue {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#blindfold_secret_info VirtualHost#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VirtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#clear_secret_info VirtualHost#clear_secret_info}
  */
  readonly clearSecretInfo?: VirtualHostResponseHeadersToAddSecretValueClearSecretInfo;
}

export function virtualHostResponseHeadersToAddSecretValueToTerraform(struct?: VirtualHostResponseHeadersToAddSecretValueOutputReference | VirtualHostResponseHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: virtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: virtualHostResponseHeadersToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function virtualHostResponseHeadersToAddSecretValueToHclTerraform(struct?: VirtualHostResponseHeadersToAddSecretValueOutputReference | VirtualHostResponseHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: virtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: virtualHostResponseHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostResponseHeadersToAddSecretValueClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostResponseHeadersToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostResponseHeadersToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostResponseHeadersToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VirtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VirtualHostResponseHeadersToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VirtualHostResponseHeadersToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VirtualHostResponseHeadersToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VirtualHostResponseHeadersToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#append VirtualHost#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#value VirtualHost#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#secret_value VirtualHost#secret_value}
  */
  readonly secretValue?: VirtualHostResponseHeadersToAddSecretValue;
}

export function virtualHostResponseHeadersToAddToTerraform(struct?: VirtualHostResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: virtualHostResponseHeadersToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function virtualHostResponseHeadersToAddToHclTerraform(struct?: VirtualHostResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: virtualHostResponseHeadersToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostResponseHeadersToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHostResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new VirtualHostResponseHeadersToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: VirtualHostResponseHeadersToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class VirtualHostResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : VirtualHostResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): VirtualHostResponseHeadersToAddOutputReference {
    return new VirtualHostResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHostRetryPolicyBackOff {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#base_interval VirtualHost#base_interval}
  */
  readonly baseInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#max_interval VirtualHost#max_interval}
  */
  readonly maxInterval?: number;
}

export function virtualHostRetryPolicyBackOffToTerraform(struct?: VirtualHostRetryPolicyBackOffOutputReference | VirtualHostRetryPolicyBackOff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_interval: cdktf.numberToTerraform(struct!.baseInterval),
    max_interval: cdktf.numberToTerraform(struct!.maxInterval),
  }
}


export function virtualHostRetryPolicyBackOffToHclTerraform(struct?: VirtualHostRetryPolicyBackOffOutputReference | VirtualHostRetryPolicyBackOff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_interval: {
      value: cdktf.numberToHclTerraform(struct!.baseInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostRetryPolicyBackOffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostRetryPolicyBackOff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseInterval = this._baseInterval;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostRetryPolicyBackOff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseInterval = undefined;
      this._maxInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseInterval = value.baseInterval;
      this._maxInterval = value.maxInterval;
    }
  }

  // base_interval - computed: false, optional: true, required: false
  private _baseInterval?: number; 
  public get baseInterval() {
    return this.getNumberAttribute('base_interval');
  }
  public set baseInterval(value: number) {
    this._baseInterval = value;
  }
  public resetBaseInterval() {
    this._baseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseIntervalInput() {
    return this._baseInterval;
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: number; 
  public get maxInterval() {
    return this.getNumberAttribute('max_interval');
  }
  public set maxInterval(value: number) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }
}
export interface VirtualHostRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#num_retries VirtualHost#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#per_try_timeout VirtualHost#per_try_timeout}
  */
  readonly perTryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#retriable_status_codes VirtualHost#retriable_status_codes}
  */
  readonly retriableStatusCodes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#retry_condition VirtualHost#retry_condition}
  */
  readonly retryCondition: string[];
  /**
  * back_off block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#back_off VirtualHost#back_off}
  */
  readonly backOff?: VirtualHostRetryPolicyBackOff;
}

export function virtualHostRetryPolicyToTerraform(struct?: VirtualHostRetryPolicyOutputReference | VirtualHostRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    per_try_timeout: cdktf.numberToTerraform(struct!.perTryTimeout),
    retriable_status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.retriableStatusCodes),
    retry_condition: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryCondition),
    back_off: virtualHostRetryPolicyBackOffToTerraform(struct!.backOff),
  }
}


export function virtualHostRetryPolicyToHclTerraform(struct?: VirtualHostRetryPolicyOutputReference | VirtualHostRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_try_timeout: {
      value: cdktf.numberToHclTerraform(struct!.perTryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retriable_status_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.retriableStatusCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    retry_condition: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryCondition),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    back_off: {
      value: virtualHostRetryPolicyBackOffToHclTerraform(struct!.backOff),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostRetryPolicyBackOffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._perTryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout;
    }
    if (this._retriableStatusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriableStatusCodes = this._retriableStatusCodes;
    }
    if (this._retryCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCondition = this._retryCondition;
    }
    if (this._backOff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backOff = this._backOff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._perTryTimeout = undefined;
      this._retriableStatusCodes = undefined;
      this._retryCondition = undefined;
      this._backOff.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._perTryTimeout = value.perTryTimeout;
      this._retriableStatusCodes = value.retriableStatusCodes;
      this._retryCondition = value.retryCondition;
      this._backOff.internalValue = value.backOff;
    }
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: number; 
  public get perTryTimeout() {
    return this.getNumberAttribute('per_try_timeout');
  }
  public set perTryTimeout(value: number) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout;
  }

  // retriable_status_codes - computed: false, optional: true, required: false
  private _retriableStatusCodes?: number[]; 
  public get retriableStatusCodes() {
    return this.getNumberListAttribute('retriable_status_codes');
  }
  public set retriableStatusCodes(value: number[]) {
    this._retriableStatusCodes = value;
  }
  public resetRetriableStatusCodes() {
    this._retriableStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriableStatusCodesInput() {
    return this._retriableStatusCodes;
  }

  // retry_condition - computed: false, optional: false, required: true
  private _retryCondition?: string[]; 
  public get retryCondition() {
    return this.getListAttribute('retry_condition');
  }
  public set retryCondition(value: string[]) {
    this._retryCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionInput() {
    return this._retryCondition;
  }

  // back_off - computed: false, optional: true, required: false
  private _backOff = new VirtualHostRetryPolicyBackOffOutputReference(this, "back_off");
  public get backOff() {
    return this._backOff;
  }
  public putBackOff(value: VirtualHostRetryPolicyBackOff) {
    this._backOff.internalValue = value;
  }
  public resetBackOff() {
    this._backOff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backOffInput() {
    return this._backOff.internalValue;
  }
}
export interface VirtualHostRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#namespace VirtualHost#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#tenant VirtualHost#tenant}
  */
  readonly tenant?: string;
}

export function virtualHostRoutesToTerraform(struct?: VirtualHostRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualHostRoutesToHclTerraform(struct?: VirtualHostRoutes | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHostRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VirtualHostRoutesList extends cdktf.ComplexList {
  public internalValue? : VirtualHostRoutes[] | cdktf.IResolvable

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
  public get(index: number): VirtualHostRoutesOutputReference {
    return new VirtualHostRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHostSensitiveDataPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#namespace VirtualHost#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#tenant VirtualHost#tenant}
  */
  readonly tenant?: string;
}

export function virtualHostSensitiveDataPolicyToTerraform(struct?: VirtualHostSensitiveDataPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualHostSensitiveDataPolicyToHclTerraform(struct?: VirtualHostSensitiveDataPolicy | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostSensitiveDataPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHostSensitiveDataPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostSensitiveDataPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VirtualHostSensitiveDataPolicyList extends cdktf.ComplexList {
  public internalValue? : VirtualHostSensitiveDataPolicy[] | cdktf.IResolvable

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
  public get(index: number): VirtualHostSensitiveDataPolicyOutputReference {
    return new VirtualHostSensitiveDataPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHostSlowDdosMitigation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#disable_request_timeout VirtualHost#disable_request_timeout}
  */
  readonly disableRequestTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#request_headers_timeout VirtualHost#request_headers_timeout}
  */
  readonly requestHeadersTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#request_timeout VirtualHost#request_timeout}
  */
  readonly requestTimeout?: number;
}

export function virtualHostSlowDdosMitigationToTerraform(struct?: VirtualHostSlowDdosMitigationOutputReference | VirtualHostSlowDdosMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_request_timeout: cdktf.booleanToTerraform(struct!.disableRequestTimeout),
    request_headers_timeout: cdktf.numberToTerraform(struct!.requestHeadersTimeout),
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
  }
}


export function virtualHostSlowDdosMitigationToHclTerraform(struct?: VirtualHostSlowDdosMitigationOutputReference | VirtualHostSlowDdosMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_request_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.disableRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_headers_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestHeadersTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostSlowDdosMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostSlowDdosMitigation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRequestTimeout = this._disableRequestTimeout;
    }
    if (this._requestHeadersTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersTimeout = this._requestHeadersTimeout;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostSlowDdosMitigation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableRequestTimeout = undefined;
      this._requestHeadersTimeout = undefined;
      this._requestTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableRequestTimeout = value.disableRequestTimeout;
      this._requestHeadersTimeout = value.requestHeadersTimeout;
      this._requestTimeout = value.requestTimeout;
    }
  }

  // disable_request_timeout - computed: false, optional: true, required: false
  private _disableRequestTimeout?: boolean | cdktf.IResolvable; 
  public get disableRequestTimeout() {
    return this.getBooleanAttribute('disable_request_timeout');
  }
  public set disableRequestTimeout(value: boolean | cdktf.IResolvable) {
    this._disableRequestTimeout = value;
  }
  public resetDisableRequestTimeout() {
    this._disableRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRequestTimeoutInput() {
    return this._disableRequestTimeout;
  }

  // request_headers_timeout - computed: false, optional: true, required: false
  private _requestHeadersTimeout?: number; 
  public get requestHeadersTimeout() {
    return this.getNumberAttribute('request_headers_timeout');
  }
  public set requestHeadersTimeout(value: number) {
    this._requestHeadersTimeout = value;
  }
  public resetRequestHeadersTimeout() {
    this._requestHeadersTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersTimeoutInput() {
    return this._requestHeadersTimeout;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }
}
export interface VirtualHostUserIdentification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#namespace VirtualHost#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#tenant VirtualHost#tenant}
  */
  readonly tenant?: string;
}

export function virtualHostUserIdentificationToTerraform(struct?: VirtualHostUserIdentification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualHostUserIdentificationToHclTerraform(struct?: VirtualHostUserIdentification | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostUserIdentificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHostUserIdentification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostUserIdentification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VirtualHostUserIdentificationList extends cdktf.ComplexList {
  public internalValue? : VirtualHostUserIdentification[] | cdktf.IResolvable

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
  public get(index: number): VirtualHostUserIdentificationOutputReference {
    return new VirtualHostUserIdentificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHostWafTypeAppFirewallAppFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#namespace VirtualHost#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#tenant VirtualHost#tenant}
  */
  readonly tenant?: string;
}

export function virtualHostWafTypeAppFirewallAppFirewallToTerraform(struct?: VirtualHostWafTypeAppFirewallAppFirewall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualHostWafTypeAppFirewallAppFirewallToHclTerraform(struct?: VirtualHostWafTypeAppFirewallAppFirewall | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostWafTypeAppFirewallAppFirewallOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHostWafTypeAppFirewallAppFirewall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostWafTypeAppFirewallAppFirewall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VirtualHostWafTypeAppFirewallAppFirewallList extends cdktf.ComplexList {
  public internalValue? : VirtualHostWafTypeAppFirewallAppFirewall[] | cdktf.IResolvable

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
  public get(index: number): VirtualHostWafTypeAppFirewallAppFirewallOutputReference {
    return new VirtualHostWafTypeAppFirewallAppFirewallOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHostWafTypeAppFirewall {
  /**
  * app_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#app_firewall VirtualHost#app_firewall}
  */
  readonly appFirewall: VirtualHostWafTypeAppFirewallAppFirewall[] | cdktf.IResolvable;
}

export function virtualHostWafTypeAppFirewallToTerraform(struct?: VirtualHostWafTypeAppFirewallOutputReference | VirtualHostWafTypeAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_firewall: cdktf.listMapper(virtualHostWafTypeAppFirewallAppFirewallToTerraform, true)(struct!.appFirewall),
  }
}


export function virtualHostWafTypeAppFirewallToHclTerraform(struct?: VirtualHostWafTypeAppFirewallOutputReference | VirtualHostWafTypeAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_firewall: {
      value: cdktf.listMapperHcl(virtualHostWafTypeAppFirewallAppFirewallToHclTerraform, true)(struct!.appFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostWafTypeAppFirewallAppFirewallList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostWafTypeAppFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostWafTypeAppFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFirewall = this._appFirewall?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostWafTypeAppFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appFirewall.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appFirewall.internalValue = value.appFirewall;
    }
  }

  // app_firewall - computed: false, optional: false, required: true
  private _appFirewall = new VirtualHostWafTypeAppFirewallAppFirewallList(this, "app_firewall", false);
  public get appFirewall() {
    return this._appFirewall;
  }
  public putAppFirewall(value: VirtualHostWafTypeAppFirewallAppFirewall[] | cdktf.IResolvable) {
    this._appFirewall.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appFirewallInput() {
    return this._appFirewall.internalValue;
  }
}
export interface VirtualHostWafType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#disable_waf VirtualHost#disable_waf}
  */
  readonly disableWaf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#inherit_waf VirtualHost#inherit_waf}
  */
  readonly inheritWaf?: boolean | cdktf.IResolvable;
  /**
  * app_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#app_firewall VirtualHost#app_firewall}
  */
  readonly appFirewall?: VirtualHostWafTypeAppFirewall;
}

export function virtualHostWafTypeToTerraform(struct?: VirtualHostWafTypeOutputReference | VirtualHostWafType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_waf: cdktf.booleanToTerraform(struct!.disableWaf),
    inherit_waf: cdktf.booleanToTerraform(struct!.inheritWaf),
    app_firewall: virtualHostWafTypeAppFirewallToTerraform(struct!.appFirewall),
  }
}


export function virtualHostWafTypeToHclTerraform(struct?: VirtualHostWafTypeOutputReference | VirtualHostWafType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_waf: {
      value: cdktf.booleanToHclTerraform(struct!.disableWaf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inherit_waf: {
      value: cdktf.booleanToHclTerraform(struct!.inheritWaf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_firewall: {
      value: virtualHostWafTypeAppFirewallToHclTerraform(struct!.appFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualHostWafTypeAppFirewallList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHostWafTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHostWafType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableWaf !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWaf = this._disableWaf;
    }
    if (this._inheritWaf !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritWaf = this._inheritWaf;
    }
    if (this._appFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFirewall = this._appFirewall?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHostWafType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableWaf = undefined;
      this._inheritWaf = undefined;
      this._appFirewall.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableWaf = value.disableWaf;
      this._inheritWaf = value.inheritWaf;
      this._appFirewall.internalValue = value.appFirewall;
    }
  }

  // disable_waf - computed: false, optional: true, required: false
  private _disableWaf?: boolean | cdktf.IResolvable; 
  public get disableWaf() {
    return this.getBooleanAttribute('disable_waf');
  }
  public set disableWaf(value: boolean | cdktf.IResolvable) {
    this._disableWaf = value;
  }
  public resetDisableWaf() {
    this._disableWaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWafInput() {
    return this._disableWaf;
  }

  // inherit_waf - computed: false, optional: true, required: false
  private _inheritWaf?: boolean | cdktf.IResolvable; 
  public get inheritWaf() {
    return this.getBooleanAttribute('inherit_waf');
  }
  public set inheritWaf(value: boolean | cdktf.IResolvable) {
    this._inheritWaf = value;
  }
  public resetInheritWaf() {
    this._inheritWaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritWafInput() {
    return this._inheritWaf;
  }

  // app_firewall - computed: false, optional: true, required: false
  private _appFirewall = new VirtualHostWafTypeAppFirewallOutputReference(this, "app_firewall");
  public get appFirewall() {
    return this._appFirewall;
  }
  public putAppFirewall(value: VirtualHostWafTypeAppFirewall) {
    this._appFirewall.internalValue = value;
  }
  public resetAppFirewall() {
    this._appFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFirewallInput() {
    return this._appFirewall.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host volterra_virtual_host}
*/
export class VirtualHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_virtual_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualHost to import
  * @param importFromId The id of the existing VirtualHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_virtual_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/virtual_host volterra_virtual_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualHostConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualHostConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_virtual_host',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addLocation = config.addLocation;
    this._annotations = config.annotations;
    this._appendServerName = config.appendServerName;
    this._connectionIdleTimeout = config.connectionIdleTimeout;
    this._customErrors = config.customErrors;
    this._defaultHeader = config.defaultHeader;
    this._defaultLoadbalancer = config.defaultLoadbalancer;
    this._description = config.description;
    this._disable = config.disable;
    this._disableDefaultErrorPages = config.disableDefaultErrorPages;
    this._disableDnsResolve = config.disableDnsResolve;
    this._disablePathNormalize = config.disablePathNormalize;
    this._domains = config.domains;
    this._enablePathNormalize = config.enablePathNormalize;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._labels = config.labels;
    this._maxRequestHeaderSize = config.maxRequestHeaderSize;
    this._name = config.name;
    this._namespace = config.namespace;
    this._noAuthentication = config.noAuthentication;
    this._noChallenge = config.noChallenge;
    this._nonDefaultLoadbalancer = config.nonDefaultLoadbalancer;
    this._passThrough = config.passThrough;
    this._proxy = config.proxy;
    this._requestCookiesToRemove = config.requestCookiesToRemove;
    this._requestHeadersToRemove = config.requestHeadersToRemove;
    this._responseCookiesToRemove = config.responseCookiesToRemove;
    this._responseHeadersToRemove = config.responseHeadersToRemove;
    this._serverName = config.serverName;
    this._advertisePolicies.internalValue = config.advertisePolicies;
    this._authentication.internalValue = config.authentication;
    this._bufferPolicy.internalValue = config.bufferPolicy;
    this._captchaChallenge.internalValue = config.captchaChallenge;
    this._coalescingOptions.internalValue = config.coalescingOptions;
    this._compressionParams.internalValue = config.compressionParams;
    this._corsPolicy.internalValue = config.corsPolicy;
    this._csrfPolicy.internalValue = config.csrfPolicy;
    this._dynamicReverseProxy.internalValue = config.dynamicReverseProxy;
    this._httpProtocolOptions.internalValue = config.httpProtocolOptions;
    this._jsChallenge.internalValue = config.jsChallenge;
    this._rateLimiterAllowedPrefixes.internalValue = config.rateLimiterAllowedPrefixes;
    this._requestCookiesToAdd.internalValue = config.requestCookiesToAdd;
    this._requestHeadersToAdd.internalValue = config.requestHeadersToAdd;
    this._responseCookiesToAdd.internalValue = config.responseCookiesToAdd;
    this._responseHeadersToAdd.internalValue = config.responseHeadersToAdd;
    this._retryPolicy.internalValue = config.retryPolicy;
    this._routes.internalValue = config.routes;
    this._sensitiveDataPolicy.internalValue = config.sensitiveDataPolicy;
    this._slowDdosMitigation.internalValue = config.slowDdosMitigation;
    this._userIdentification.internalValue = config.userIdentification;
    this._wafType.internalValue = config.wafType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_location - computed: false, optional: true, required: false
  private _addLocation?: boolean | cdktf.IResolvable; 
  public get addLocation() {
    return this.getBooleanAttribute('add_location');
  }
  public set addLocation(value: boolean | cdktf.IResolvable) {
    this._addLocation = value;
  }
  public resetAddLocation() {
    this._addLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addLocationInput() {
    return this._addLocation;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // append_server_name - computed: false, optional: true, required: false
  private _appendServerName?: string; 
  public get appendServerName() {
    return this.getStringAttribute('append_server_name');
  }
  public set appendServerName(value: string) {
    this._appendServerName = value;
  }
  public resetAppendServerName() {
    this._appendServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendServerNameInput() {
    return this._appendServerName;
  }

  // connection_idle_timeout - computed: false, optional: true, required: false
  private _connectionIdleTimeout?: number; 
  public get connectionIdleTimeout() {
    return this.getNumberAttribute('connection_idle_timeout');
  }
  public set connectionIdleTimeout(value: number) {
    this._connectionIdleTimeout = value;
  }
  public resetConnectionIdleTimeout() {
    this._connectionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdleTimeoutInput() {
    return this._connectionIdleTimeout;
  }

  // custom_errors - computed: false, optional: true, required: false
  private _customErrors?: { [key: string]: string }; 
  public get customErrors() {
    return this.getStringMapAttribute('custom_errors');
  }
  public set customErrors(value: { [key: string]: string }) {
    this._customErrors = value;
  }
  public resetCustomErrors() {
    this._customErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorsInput() {
    return this._customErrors;
  }

  // default_header - computed: false, optional: true, required: false
  private _defaultHeader?: boolean | cdktf.IResolvable; 
  public get defaultHeader() {
    return this.getBooleanAttribute('default_header');
  }
  public set defaultHeader(value: boolean | cdktf.IResolvable) {
    this._defaultHeader = value;
  }
  public resetDefaultHeader() {
    this._defaultHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeaderInput() {
    return this._defaultHeader;
  }

  // default_loadbalancer - computed: false, optional: true, required: false
  private _defaultLoadbalancer?: boolean | cdktf.IResolvable; 
  public get defaultLoadbalancer() {
    return this.getBooleanAttribute('default_loadbalancer');
  }
  public set defaultLoadbalancer(value: boolean | cdktf.IResolvable) {
    this._defaultLoadbalancer = value;
  }
  public resetDefaultLoadbalancer() {
    this._defaultLoadbalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLoadbalancerInput() {
    return this._defaultLoadbalancer;
  }

  // description - computed: false, optional: true, required: false
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // disable_default_error_pages - computed: false, optional: true, required: false
  private _disableDefaultErrorPages?: boolean | cdktf.IResolvable; 
  public get disableDefaultErrorPages() {
    return this.getBooleanAttribute('disable_default_error_pages');
  }
  public set disableDefaultErrorPages(value: boolean | cdktf.IResolvable) {
    this._disableDefaultErrorPages = value;
  }
  public resetDisableDefaultErrorPages() {
    this._disableDefaultErrorPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDefaultErrorPagesInput() {
    return this._disableDefaultErrorPages;
  }

  // disable_dns_resolve - computed: false, optional: true, required: false
  private _disableDnsResolve?: boolean | cdktf.IResolvable; 
  public get disableDnsResolve() {
    return this.getBooleanAttribute('disable_dns_resolve');
  }
  public set disableDnsResolve(value: boolean | cdktf.IResolvable) {
    this._disableDnsResolve = value;
  }
  public resetDisableDnsResolve() {
    this._disableDnsResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDnsResolveInput() {
    return this._disableDnsResolve;
  }

  // disable_path_normalize - computed: false, optional: true, required: false
  private _disablePathNormalize?: boolean | cdktf.IResolvable; 
  public get disablePathNormalize() {
    return this.getBooleanAttribute('disable_path_normalize');
  }
  public set disablePathNormalize(value: boolean | cdktf.IResolvable) {
    this._disablePathNormalize = value;
  }
  public resetDisablePathNormalize() {
    this._disablePathNormalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePathNormalizeInput() {
    return this._disablePathNormalize;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // enable_path_normalize - computed: false, optional: true, required: false
  private _enablePathNormalize?: boolean | cdktf.IResolvable; 
  public get enablePathNormalize() {
    return this.getBooleanAttribute('enable_path_normalize');
  }
  public set enablePathNormalize(value: boolean | cdktf.IResolvable) {
    this._enablePathNormalize = value;
  }
  public resetEnablePathNormalize() {
    this._enablePathNormalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePathNormalizeInput() {
    return this._enablePathNormalize;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // max_request_header_size - computed: false, optional: true, required: false
  private _maxRequestHeaderSize?: number; 
  public get maxRequestHeaderSize() {
    return this.getNumberAttribute('max_request_header_size');
  }
  public set maxRequestHeaderSize(value: number) {
    this._maxRequestHeaderSize = value;
  }
  public resetMaxRequestHeaderSize() {
    this._maxRequestHeaderSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestHeaderSizeInput() {
    return this._maxRequestHeaderSize;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // no_authentication - computed: false, optional: true, required: false
  private _noAuthentication?: boolean | cdktf.IResolvable; 
  public get noAuthentication() {
    return this.getBooleanAttribute('no_authentication');
  }
  public set noAuthentication(value: boolean | cdktf.IResolvable) {
    this._noAuthentication = value;
  }
  public resetNoAuthentication() {
    this._noAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAuthenticationInput() {
    return this._noAuthentication;
  }

  // no_challenge - computed: false, optional: true, required: false
  private _noChallenge?: boolean | cdktf.IResolvable; 
  public get noChallenge() {
    return this.getBooleanAttribute('no_challenge');
  }
  public set noChallenge(value: boolean | cdktf.IResolvable) {
    this._noChallenge = value;
  }
  public resetNoChallenge() {
    this._noChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noChallengeInput() {
    return this._noChallenge;
  }

  // non_default_loadbalancer - computed: false, optional: true, required: false
  private _nonDefaultLoadbalancer?: boolean | cdktf.IResolvable; 
  public get nonDefaultLoadbalancer() {
    return this.getBooleanAttribute('non_default_loadbalancer');
  }
  public set nonDefaultLoadbalancer(value: boolean | cdktf.IResolvable) {
    this._nonDefaultLoadbalancer = value;
  }
  public resetNonDefaultLoadbalancer() {
    this._nonDefaultLoadbalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonDefaultLoadbalancerInput() {
    return this._nonDefaultLoadbalancer;
  }

  // pass_through - computed: false, optional: true, required: false
  private _passThrough?: boolean | cdktf.IResolvable; 
  public get passThrough() {
    return this.getBooleanAttribute('pass_through');
  }
  public set passThrough(value: boolean | cdktf.IResolvable) {
    this._passThrough = value;
  }
  public resetPassThrough() {
    this._passThrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughInput() {
    return this._passThrough;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // request_cookies_to_remove - computed: false, optional: true, required: false
  private _requestCookiesToRemove?: string[]; 
  public get requestCookiesToRemove() {
    return this.getListAttribute('request_cookies_to_remove');
  }
  public set requestCookiesToRemove(value: string[]) {
    this._requestCookiesToRemove = value;
  }
  public resetRequestCookiesToRemove() {
    this._requestCookiesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookiesToRemoveInput() {
    return this._requestCookiesToRemove;
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_cookies_to_remove - computed: false, optional: true, required: false
  private _responseCookiesToRemove?: string[]; 
  public get responseCookiesToRemove() {
    return this.getListAttribute('response_cookies_to_remove');
  }
  public set responseCookiesToRemove(value: string[]) {
    this._responseCookiesToRemove = value;
  }
  public resetResponseCookiesToRemove() {
    this._responseCookiesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCookiesToRemoveInput() {
    return this._responseCookiesToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // advertise_policies - computed: false, optional: true, required: false
  private _advertisePolicies = new VirtualHostAdvertisePoliciesList(this, "advertise_policies", false);
  public get advertisePolicies() {
    return this._advertisePolicies;
  }
  public putAdvertisePolicies(value: VirtualHostAdvertisePolicies[] | cdktf.IResolvable) {
    this._advertisePolicies.internalValue = value;
  }
  public resetAdvertisePolicies() {
    this._advertisePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisePoliciesInput() {
    return this._advertisePolicies.internalValue;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new VirtualHostAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: VirtualHostAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // buffer_policy - computed: false, optional: true, required: false
  private _bufferPolicy = new VirtualHostBufferPolicyOutputReference(this, "buffer_policy");
  public get bufferPolicy() {
    return this._bufferPolicy;
  }
  public putBufferPolicy(value: VirtualHostBufferPolicy) {
    this._bufferPolicy.internalValue = value;
  }
  public resetBufferPolicy() {
    this._bufferPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferPolicyInput() {
    return this._bufferPolicy.internalValue;
  }

  // captcha_challenge - computed: false, optional: true, required: false
  private _captchaChallenge = new VirtualHostCaptchaChallengeOutputReference(this, "captcha_challenge");
  public get captchaChallenge() {
    return this._captchaChallenge;
  }
  public putCaptchaChallenge(value: VirtualHostCaptchaChallenge) {
    this._captchaChallenge.internalValue = value;
  }
  public resetCaptchaChallenge() {
    this._captchaChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaChallengeInput() {
    return this._captchaChallenge.internalValue;
  }

  // coalescing_options - computed: false, optional: true, required: false
  private _coalescingOptions = new VirtualHostCoalescingOptionsOutputReference(this, "coalescing_options");
  public get coalescingOptions() {
    return this._coalescingOptions;
  }
  public putCoalescingOptions(value: VirtualHostCoalescingOptions) {
    this._coalescingOptions.internalValue = value;
  }
  public resetCoalescingOptions() {
    this._coalescingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coalescingOptionsInput() {
    return this._coalescingOptions.internalValue;
  }

  // compression_params - computed: false, optional: true, required: false
  private _compressionParams = new VirtualHostCompressionParamsOutputReference(this, "compression_params");
  public get compressionParams() {
    return this._compressionParams;
  }
  public putCompressionParams(value: VirtualHostCompressionParams) {
    this._compressionParams.internalValue = value;
  }
  public resetCompressionParams() {
    this._compressionParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionParamsInput() {
    return this._compressionParams.internalValue;
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new VirtualHostCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: VirtualHostCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // csrf_policy - computed: false, optional: true, required: false
  private _csrfPolicy = new VirtualHostCsrfPolicyOutputReference(this, "csrf_policy");
  public get csrfPolicy() {
    return this._csrfPolicy;
  }
  public putCsrfPolicy(value: VirtualHostCsrfPolicy) {
    this._csrfPolicy.internalValue = value;
  }
  public resetCsrfPolicy() {
    this._csrfPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrfPolicyInput() {
    return this._csrfPolicy.internalValue;
  }

  // dynamic_reverse_proxy - computed: false, optional: true, required: false
  private _dynamicReverseProxy = new VirtualHostDynamicReverseProxyOutputReference(this, "dynamic_reverse_proxy");
  public get dynamicReverseProxy() {
    return this._dynamicReverseProxy;
  }
  public putDynamicReverseProxy(value: VirtualHostDynamicReverseProxy) {
    this._dynamicReverseProxy.internalValue = value;
  }
  public resetDynamicReverseProxy() {
    this._dynamicReverseProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicReverseProxyInput() {
    return this._dynamicReverseProxy.internalValue;
  }

  // http_protocol_options - computed: false, optional: true, required: false
  private _httpProtocolOptions = new VirtualHostHttpProtocolOptionsOutputReference(this, "http_protocol_options");
  public get httpProtocolOptions() {
    return this._httpProtocolOptions;
  }
  public putHttpProtocolOptions(value: VirtualHostHttpProtocolOptions) {
    this._httpProtocolOptions.internalValue = value;
  }
  public resetHttpProtocolOptions() {
    this._httpProtocolOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolOptionsInput() {
    return this._httpProtocolOptions.internalValue;
  }

  // js_challenge - computed: false, optional: true, required: false
  private _jsChallenge = new VirtualHostJsChallengeOutputReference(this, "js_challenge");
  public get jsChallenge() {
    return this._jsChallenge;
  }
  public putJsChallenge(value: VirtualHostJsChallenge) {
    this._jsChallenge.internalValue = value;
  }
  public resetJsChallenge() {
    this._jsChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsChallengeInput() {
    return this._jsChallenge.internalValue;
  }

  // rate_limiter_allowed_prefixes - computed: false, optional: true, required: false
  private _rateLimiterAllowedPrefixes = new VirtualHostRateLimiterAllowedPrefixesList(this, "rate_limiter_allowed_prefixes", false);
  public get rateLimiterAllowedPrefixes() {
    return this._rateLimiterAllowedPrefixes;
  }
  public putRateLimiterAllowedPrefixes(value: VirtualHostRateLimiterAllowedPrefixes[] | cdktf.IResolvable) {
    this._rateLimiterAllowedPrefixes.internalValue = value;
  }
  public resetRateLimiterAllowedPrefixes() {
    this._rateLimiterAllowedPrefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterAllowedPrefixesInput() {
    return this._rateLimiterAllowedPrefixes.internalValue;
  }

  // request_cookies_to_add - computed: false, optional: true, required: false
  private _requestCookiesToAdd = new VirtualHostRequestCookiesToAddList(this, "request_cookies_to_add", false);
  public get requestCookiesToAdd() {
    return this._requestCookiesToAdd;
  }
  public putRequestCookiesToAdd(value: VirtualHostRequestCookiesToAdd[] | cdktf.IResolvable) {
    this._requestCookiesToAdd.internalValue = value;
  }
  public resetRequestCookiesToAdd() {
    this._requestCookiesToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookiesToAddInput() {
    return this._requestCookiesToAdd.internalValue;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new VirtualHostRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: VirtualHostRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_cookies_to_add - computed: false, optional: true, required: false
  private _responseCookiesToAdd = new VirtualHostResponseCookiesToAddList(this, "response_cookies_to_add", false);
  public get responseCookiesToAdd() {
    return this._responseCookiesToAdd;
  }
  public putResponseCookiesToAdd(value: VirtualHostResponseCookiesToAdd[] | cdktf.IResolvable) {
    this._responseCookiesToAdd.internalValue = value;
  }
  public resetResponseCookiesToAdd() {
    this._responseCookiesToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCookiesToAddInput() {
    return this._responseCookiesToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new VirtualHostResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: VirtualHostResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new VirtualHostRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: VirtualHostRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new VirtualHostRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: VirtualHostRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // sensitive_data_policy - computed: false, optional: true, required: false
  private _sensitiveDataPolicy = new VirtualHostSensitiveDataPolicyList(this, "sensitive_data_policy", false);
  public get sensitiveDataPolicy() {
    return this._sensitiveDataPolicy;
  }
  public putSensitiveDataPolicy(value: VirtualHostSensitiveDataPolicy[] | cdktf.IResolvable) {
    this._sensitiveDataPolicy.internalValue = value;
  }
  public resetSensitiveDataPolicy() {
    this._sensitiveDataPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataPolicyInput() {
    return this._sensitiveDataPolicy.internalValue;
  }

  // slow_ddos_mitigation - computed: false, optional: true, required: false
  private _slowDdosMitigation = new VirtualHostSlowDdosMitigationOutputReference(this, "slow_ddos_mitigation");
  public get slowDdosMitigation() {
    return this._slowDdosMitigation;
  }
  public putSlowDdosMitigation(value: VirtualHostSlowDdosMitigation) {
    this._slowDdosMitigation.internalValue = value;
  }
  public resetSlowDdosMitigation() {
    this._slowDdosMitigation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowDdosMitigationInput() {
    return this._slowDdosMitigation.internalValue;
  }

  // user_identification - computed: false, optional: true, required: false
  private _userIdentification = new VirtualHostUserIdentificationList(this, "user_identification", false);
  public get userIdentification() {
    return this._userIdentification;
  }
  public putUserIdentification(value: VirtualHostUserIdentification[] | cdktf.IResolvable) {
    this._userIdentification.internalValue = value;
  }
  public resetUserIdentification() {
    this._userIdentification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentificationInput() {
    return this._userIdentification.internalValue;
  }

  // waf_type - computed: false, optional: true, required: false
  private _wafType = new VirtualHostWafTypeOutputReference(this, "waf_type");
  public get wafType() {
    return this._wafType;
  }
  public putWafType(value: VirtualHostWafType) {
    this._wafType.internalValue = value;
  }
  public resetWafType() {
    this._wafType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafTypeInput() {
    return this._wafType.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_location: cdktf.booleanToTerraform(this._addLocation),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      append_server_name: cdktf.stringToTerraform(this._appendServerName),
      connection_idle_timeout: cdktf.numberToTerraform(this._connectionIdleTimeout),
      custom_errors: cdktf.hashMapper(cdktf.stringToTerraform)(this._customErrors),
      default_header: cdktf.booleanToTerraform(this._defaultHeader),
      default_loadbalancer: cdktf.booleanToTerraform(this._defaultLoadbalancer),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      disable_default_error_pages: cdktf.booleanToTerraform(this._disableDefaultErrorPages),
      disable_dns_resolve: cdktf.booleanToTerraform(this._disableDnsResolve),
      disable_path_normalize: cdktf.booleanToTerraform(this._disablePathNormalize),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      enable_path_normalize: cdktf.booleanToTerraform(this._enablePathNormalize),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      max_request_header_size: cdktf.numberToTerraform(this._maxRequestHeaderSize),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      no_authentication: cdktf.booleanToTerraform(this._noAuthentication),
      no_challenge: cdktf.booleanToTerraform(this._noChallenge),
      non_default_loadbalancer: cdktf.booleanToTerraform(this._nonDefaultLoadbalancer),
      pass_through: cdktf.booleanToTerraform(this._passThrough),
      proxy: cdktf.stringToTerraform(this._proxy),
      request_cookies_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requestCookiesToRemove),
      request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requestHeadersToRemove),
      response_cookies_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseCookiesToRemove),
      response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseHeadersToRemove),
      server_name: cdktf.stringToTerraform(this._serverName),
      advertise_policies: cdktf.listMapper(virtualHostAdvertisePoliciesToTerraform, true)(this._advertisePolicies.internalValue),
      authentication: virtualHostAuthenticationToTerraform(this._authentication.internalValue),
      buffer_policy: virtualHostBufferPolicyToTerraform(this._bufferPolicy.internalValue),
      captcha_challenge: virtualHostCaptchaChallengeToTerraform(this._captchaChallenge.internalValue),
      coalescing_options: virtualHostCoalescingOptionsToTerraform(this._coalescingOptions.internalValue),
      compression_params: virtualHostCompressionParamsToTerraform(this._compressionParams.internalValue),
      cors_policy: virtualHostCorsPolicyToTerraform(this._corsPolicy.internalValue),
      csrf_policy: virtualHostCsrfPolicyToTerraform(this._csrfPolicy.internalValue),
      dynamic_reverse_proxy: virtualHostDynamicReverseProxyToTerraform(this._dynamicReverseProxy.internalValue),
      http_protocol_options: virtualHostHttpProtocolOptionsToTerraform(this._httpProtocolOptions.internalValue),
      js_challenge: virtualHostJsChallengeToTerraform(this._jsChallenge.internalValue),
      rate_limiter_allowed_prefixes: cdktf.listMapper(virtualHostRateLimiterAllowedPrefixesToTerraform, true)(this._rateLimiterAllowedPrefixes.internalValue),
      request_cookies_to_add: cdktf.listMapper(virtualHostRequestCookiesToAddToTerraform, true)(this._requestCookiesToAdd.internalValue),
      request_headers_to_add: cdktf.listMapper(virtualHostRequestHeadersToAddToTerraform, true)(this._requestHeadersToAdd.internalValue),
      response_cookies_to_add: cdktf.listMapper(virtualHostResponseCookiesToAddToTerraform, true)(this._responseCookiesToAdd.internalValue),
      response_headers_to_add: cdktf.listMapper(virtualHostResponseHeadersToAddToTerraform, true)(this._responseHeadersToAdd.internalValue),
      retry_policy: virtualHostRetryPolicyToTerraform(this._retryPolicy.internalValue),
      routes: cdktf.listMapper(virtualHostRoutesToTerraform, true)(this._routes.internalValue),
      sensitive_data_policy: cdktf.listMapper(virtualHostSensitiveDataPolicyToTerraform, true)(this._sensitiveDataPolicy.internalValue),
      slow_ddos_mitigation: virtualHostSlowDdosMitigationToTerraform(this._slowDdosMitigation.internalValue),
      user_identification: cdktf.listMapper(virtualHostUserIdentificationToTerraform, true)(this._userIdentification.internalValue),
      waf_type: virtualHostWafTypeToTerraform(this._wafType.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_location: {
        value: cdktf.booleanToHclTerraform(this._addLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      append_server_name: {
        value: cdktf.stringToHclTerraform(this._appendServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._connectionIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_errors: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customErrors),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      default_header: {
        value: cdktf.booleanToHclTerraform(this._defaultHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_loadbalancer: {
        value: cdktf.booleanToHclTerraform(this._defaultLoadbalancer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_default_error_pages: {
        value: cdktf.booleanToHclTerraform(this._disableDefaultErrorPages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_dns_resolve: {
        value: cdktf.booleanToHclTerraform(this._disableDnsResolve),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_path_normalize: {
        value: cdktf.booleanToHclTerraform(this._disablePathNormalize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable_path_normalize: {
        value: cdktf.booleanToHclTerraform(this._enablePathNormalize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_request_header_size: {
        value: cdktf.numberToHclTerraform(this._maxRequestHeaderSize),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_authentication: {
        value: cdktf.booleanToHclTerraform(this._noAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_challenge: {
        value: cdktf.booleanToHclTerraform(this._noChallenge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      non_default_loadbalancer: {
        value: cdktf.booleanToHclTerraform(this._nonDefaultLoadbalancer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pass_through: {
        value: cdktf.booleanToHclTerraform(this._passThrough),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_cookies_to_remove: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requestCookiesToRemove),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      request_headers_to_remove: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requestHeadersToRemove),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      response_cookies_to_remove: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseCookiesToRemove),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      response_headers_to_remove: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseHeadersToRemove),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_policies: {
        value: cdktf.listMapperHcl(virtualHostAdvertisePoliciesToHclTerraform, true)(this._advertisePolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostAdvertisePoliciesList",
      },
      authentication: {
        value: virtualHostAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostAuthenticationList",
      },
      buffer_policy: {
        value: virtualHostBufferPolicyToHclTerraform(this._bufferPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostBufferPolicyList",
      },
      captcha_challenge: {
        value: virtualHostCaptchaChallengeToHclTerraform(this._captchaChallenge.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostCaptchaChallengeList",
      },
      coalescing_options: {
        value: virtualHostCoalescingOptionsToHclTerraform(this._coalescingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostCoalescingOptionsList",
      },
      compression_params: {
        value: virtualHostCompressionParamsToHclTerraform(this._compressionParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostCompressionParamsList",
      },
      cors_policy: {
        value: virtualHostCorsPolicyToHclTerraform(this._corsPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostCorsPolicyList",
      },
      csrf_policy: {
        value: virtualHostCsrfPolicyToHclTerraform(this._csrfPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostCsrfPolicyList",
      },
      dynamic_reverse_proxy: {
        value: virtualHostDynamicReverseProxyToHclTerraform(this._dynamicReverseProxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostDynamicReverseProxyList",
      },
      http_protocol_options: {
        value: virtualHostHttpProtocolOptionsToHclTerraform(this._httpProtocolOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostHttpProtocolOptionsList",
      },
      js_challenge: {
        value: virtualHostJsChallengeToHclTerraform(this._jsChallenge.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostJsChallengeList",
      },
      rate_limiter_allowed_prefixes: {
        value: cdktf.listMapperHcl(virtualHostRateLimiterAllowedPrefixesToHclTerraform, true)(this._rateLimiterAllowedPrefixes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostRateLimiterAllowedPrefixesList",
      },
      request_cookies_to_add: {
        value: cdktf.listMapperHcl(virtualHostRequestCookiesToAddToHclTerraform, true)(this._requestCookiesToAdd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostRequestCookiesToAddList",
      },
      request_headers_to_add: {
        value: cdktf.listMapperHcl(virtualHostRequestHeadersToAddToHclTerraform, true)(this._requestHeadersToAdd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostRequestHeadersToAddList",
      },
      response_cookies_to_add: {
        value: cdktf.listMapperHcl(virtualHostResponseCookiesToAddToHclTerraform, true)(this._responseCookiesToAdd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostResponseCookiesToAddList",
      },
      response_headers_to_add: {
        value: cdktf.listMapperHcl(virtualHostResponseHeadersToAddToHclTerraform, true)(this._responseHeadersToAdd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostResponseHeadersToAddList",
      },
      retry_policy: {
        value: virtualHostRetryPolicyToHclTerraform(this._retryPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostRetryPolicyList",
      },
      routes: {
        value: cdktf.listMapperHcl(virtualHostRoutesToHclTerraform, true)(this._routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostRoutesList",
      },
      sensitive_data_policy: {
        value: cdktf.listMapperHcl(virtualHostSensitiveDataPolicyToHclTerraform, true)(this._sensitiveDataPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostSensitiveDataPolicyList",
      },
      slow_ddos_mitigation: {
        value: virtualHostSlowDdosMitigationToHclTerraform(this._slowDdosMitigation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostSlowDdosMitigationList",
      },
      user_identification: {
        value: cdktf.listMapperHcl(virtualHostUserIdentificationToHclTerraform, true)(this._userIdentification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostUserIdentificationList",
      },
      waf_type: {
        value: virtualHostWafTypeToHclTerraform(this._wafType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualHostWafTypeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
