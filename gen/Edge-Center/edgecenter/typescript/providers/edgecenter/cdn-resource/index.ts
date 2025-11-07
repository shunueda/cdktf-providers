// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable the CDN resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#active CdnResource#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Specify a custom domain that will be used to deliver content via CDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#cname CdnResource#cname}
  */
  readonly cname: string;
  /**
  * Leave an optional comment that describes this CDN resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#description CdnResource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#id CdnResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Generate LE certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#issue_le_cert CdnResource#issue_le_cert}
  */
  readonly issueLeCert?: boolean | cdktf.IResolvable;
  /**
  * Enter a domain name or the IP address of your source. Specify a port if custom. You can use either "origin" or "origin_group" field in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#origin CdnResource#origin}
  */
  readonly origin?: string;
  /**
  * Enter the source group ID. Use one of your source groups or create a new one. You can use either "origin" or "origin_group" field in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#origin_group CdnResource#origin_group}
  */
  readonly originGroup?: number;
  /**
  * Choose the protocol that will be used by CDN servers to request content from the source. If not specified, the HTTP protocol will be used. Allowed values are "HTTPS", "HTTP", or "MATCH". If "MATCH" is chosen, content on the source should be available over both HTTP and HTTPS protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#origin_protocol CdnResource#origin_protocol}
  */
  readonly originProtocol?: string;
  /**
  * Specify up to 10 additional custom domains that will be used to deliver content via the CDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#secondary_hostnames CdnResource#secondary_hostnames}
  */
  readonly secondaryHostnames?: string[];
  /**
  * generate LE certificate automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#ssl_automated CdnResource#ssl_automated}
  */
  readonly sslAutomated?: boolean | cdktf.IResolvable;
  /**
  * Specify the SSL certificate ID which will be used for the CDN resource. The field must be used only with "ssl_enabled": true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#ssl_data CdnResource#ssl_data}
  */
  readonly sslData?: number;
  /**
  * Enable or disable the HTTPS protocol for content delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#ssl_enabled CdnResource#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#options CdnResource#options}
  */
  readonly options?: CdnResourceOptions;
}
export interface CdnResourceOptionsAllowedHttpMethods {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Allowed values are "GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", and "OPTIONS".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: string[];
}

export function cdnResourceOptionsAllowedHttpMethodsToTerraform(struct?: CdnResourceOptionsAllowedHttpMethodsOutputReference | CdnResourceOptionsAllowedHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsAllowedHttpMethodsToHclTerraform(struct?: CdnResourceOptionsAllowedHttpMethodsOutputReference | CdnResourceOptionsAllowedHttpMethods): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsAllowedHttpMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsAllowedHttpMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsAllowedHttpMethods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsBrotliCompression {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Allowed values are "application/javascript", "application/json", "application/vnd.ms-fontobject", "application/x-font-ttf", "application/x-javascript", "application/xml", "application/xml+rss", "image/svg+xml", "image/x-icon", "text/css", "text/html", "text/javascript", "text/plain", "text/xml".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: string[];
}

export function cdnResourceOptionsBrotliCompressionToTerraform(struct?: CdnResourceOptionsBrotliCompressionOutputReference | CdnResourceOptionsBrotliCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsBrotliCompressionToHclTerraform(struct?: CdnResourceOptionsBrotliCompressionOutputReference | CdnResourceOptionsBrotliCompression): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsBrotliCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsBrotliCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsBrotliCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsBrowserCacheSettings {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the cache lifetime if the CDN controlled option is chosen. If the value is empty, the Origin controlled option will be enabled and the cache lifetime will be inherited from the source. Set to "0s" to disable browser caching. The value only applies for the HTTP 200, 201, 204, 206, 301, 302, 303, 304, 307, 308 response status codes. Responses with other HTTP status codes will not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: string;
}

export function cdnResourceOptionsBrowserCacheSettingsToTerraform(struct?: CdnResourceOptionsBrowserCacheSettingsOutputReference | CdnResourceOptionsBrowserCacheSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsBrowserCacheSettingsToHclTerraform(struct?: CdnResourceOptionsBrowserCacheSettingsOutputReference | CdnResourceOptionsBrowserCacheSettings): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsBrowserCacheSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsBrowserCacheSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsBrowserCacheSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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
}
export interface CdnResourceOptionsCors {
  /**
  * Add the Access-Control-Allow-Origin header to the response regardless of the HTTP response status code. Allowed values are "true" or "false". If set to "false", the header is only added to the responses with HTTP 200, 201, 204, 206, 301, 302, 303, 304, 307, or 308 response status codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#always CdnResource#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add the value of the Access-Control-Allow-Origin header. Allowed values are "*", "domain.com" or other domain name, or "$http_origin".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: string[];
}

export function cdnResourceOptionsCorsToTerraform(struct?: CdnResourceOptionsCorsOutputReference | CdnResourceOptionsCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.booleanToTerraform(struct!.always),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsCorsToHclTerraform(struct?: CdnResourceOptionsCorsOutputReference | CdnResourceOptionsCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.booleanToHclTerraform(struct!.always),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._always = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._always = value.always;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // always - computed: true, optional: true, required: false
  private _always?: boolean | cdktf.IResolvable; 
  public get always() {
    return this.getBooleanAttribute('always');
  }
  public set always(value: boolean | cdktf.IResolvable) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsDisableProxyForceRanges {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsDisableProxyForceRangesToTerraform(struct?: CdnResourceOptionsDisableProxyForceRangesOutputReference | CdnResourceOptionsDisableProxyForceRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsDisableProxyForceRangesToHclTerraform(struct?: CdnResourceOptionsDisableProxyForceRangesOutputReference | CdnResourceOptionsDisableProxyForceRanges): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsDisableProxyForceRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsDisableProxyForceRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsDisableProxyForceRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsEdgeCacheSettings {
  /**
  * Set the caching time in seconds for certain HTTP status codes. Use "any" to specify the caching time for all HTTP response status codes. Use "0s" to disable caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#custom_values CdnResource#custom_values}
  */
  readonly customValues?: { [key: string]: string };
  /**
  * Set the caching time in seconds. Use the field if you want your source to control the caching time of the HTTP 200, 201, 204, 206, 301, 302, 303, 304, 307, 308 response status codes, and if a source server does not have any caching HTTP headers. Responses with other HTTP status codes will not be cached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#default CdnResource#default}
  */
  readonly default?: string;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the caching time in seconds. Use the field if you want CDN to control the caching time of the HTTP 200, 206, 301, and 302 response status codes. Responses with HTTP 4xx, 5xx status codes will not be cached. Use the "custom_values" field to specify the custom caching time for responses with specific HTTP status codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: string;
}

export function cdnResourceOptionsEdgeCacheSettingsToTerraform(struct?: CdnResourceOptionsEdgeCacheSettingsOutputReference | CdnResourceOptionsEdgeCacheSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customValues),
    default: cdktf.stringToTerraform(struct!.default),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsEdgeCacheSettingsToHclTerraform(struct?: CdnResourceOptionsEdgeCacheSettingsOutputReference | CdnResourceOptionsEdgeCacheSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsEdgeCacheSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsEdgeCacheSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.customValues = this._customValues;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsEdgeCacheSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customValues = undefined;
      this._default = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customValues = value.customValues;
      this._default = value.default;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // custom_values - computed: true, optional: true, required: false
  private _customValues?: { [key: string]: string }; 
  public get customValues() {
    return this.getStringMapAttribute('custom_values');
  }
  public set customValues(value: { [key: string]: string }) {
    this._customValues = value;
  }
  public resetCustomValues() {
    this._customValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customValuesInput() {
    return this._customValues;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
}
export interface CdnResourceOptionsFetchCompressed {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsFetchCompressedToTerraform(struct?: CdnResourceOptionsFetchCompressedOutputReference | CdnResourceOptionsFetchCompressed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsFetchCompressedToHclTerraform(struct?: CdnResourceOptionsFetchCompressedOutputReference | CdnResourceOptionsFetchCompressed): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsFetchCompressedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsFetchCompressed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsFetchCompressed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsFollowOriginRedirect {
  /**
  * Add the redirect HTTP status codes returned by the source. Allowed values are "301", "302", "303", "307", "308".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#codes CdnResource#codes}
  */
  readonly codes: number[];
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Use the redirect target domain as a Host header, or leave it the same as the value of the Change Host header option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#use_host CdnResource#use_host}
  */
  readonly useHost?: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsFollowOriginRedirectToTerraform(struct?: CdnResourceOptionsFollowOriginRedirectOutputReference | CdnResourceOptionsFollowOriginRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.codes),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    use_host: cdktf.booleanToTerraform(struct!.useHost),
  }
}


export function cdnResourceOptionsFollowOriginRedirectToHclTerraform(struct?: CdnResourceOptionsFollowOriginRedirectOutputReference | CdnResourceOptionsFollowOriginRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.codes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_host: {
      value: cdktf.booleanToHclTerraform(struct!.useHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsFollowOriginRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsFollowOriginRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codes !== undefined) {
      hasAnyValues = true;
      internalValueResult.codes = this._codes;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._useHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHost = this._useHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsFollowOriginRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codes = undefined;
      this._enabled = undefined;
      this._useHost = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codes = value.codes;
      this._enabled = value.enabled;
      this._useHost = value.useHost;
    }
  }

  // codes - computed: false, optional: false, required: true
  private _codes?: number[]; 
  public get codes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('codes')));
  }
  public set codes(value: number[]) {
    this._codes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codesInput() {
    return this._codes;
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

  // use_host - computed: true, optional: true, required: false
  private _useHost?: boolean | cdktf.IResolvable; 
  public get useHost() {
    return this.getBooleanAttribute('use_host');
  }
  public set useHost(value: boolean | cdktf.IResolvable) {
    this._useHost = value;
  }
  public resetUseHost() {
    this._useHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostInput() {
    return this._useHost;
  }
}
export interface CdnResourceOptionsForceReturn {
  /**
  * Add the URL for redirection or the text message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#body CdnResource#body}
  */
  readonly body?: string;
  /**
  * Set the HTTP status code that should be returned by the CDN. Allowed values are from "100" to "599".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#code CdnResource#code}
  */
  readonly code: number;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsForceReturnToTerraform(struct?: CdnResourceOptionsForceReturnOutputReference | CdnResourceOptionsForceReturn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cdnResourceOptionsForceReturnToHclTerraform(struct?: CdnResourceOptionsForceReturnOutputReference | CdnResourceOptionsForceReturn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class CdnResourceOptionsForceReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsForceReturn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsForceReturn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._code = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._code = value.code;
      this._enabled = value.enabled;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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
export interface CdnResourceOptionsForwardHostHeader {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsForwardHostHeaderToTerraform(struct?: CdnResourceOptionsForwardHostHeaderOutputReference | CdnResourceOptionsForwardHostHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsForwardHostHeaderToHclTerraform(struct?: CdnResourceOptionsForwardHostHeaderOutputReference | CdnResourceOptionsForwardHostHeader): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsForwardHostHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsForwardHostHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsForwardHostHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsGeoAclExceptedValues {
  /**
  * Two-letter country code as defined by ISO 3166-1 alpha-2 (e.g., 'US' for United States, 'RU' for Russia).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#key CdnResource#key}
  */
  readonly key: string;
  /**
  * List of region codes for the specified country, using short English names from ISO 3166-2 (e.g., 'CA' for California in 'US', 'MOW' for Moscow in 'RU').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#values CdnResource#values}
  */
  readonly values: string[];
}

export function cdnResourceOptionsGeoAclExceptedValuesToTerraform(struct?: CdnResourceOptionsGeoAclExceptedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function cdnResourceOptionsGeoAclExceptedValuesToHclTerraform(struct?: CdnResourceOptionsGeoAclExceptedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsGeoAclExceptedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnResourceOptionsGeoAclExceptedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsGeoAclExceptedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnResourceOptionsGeoAclExceptedValuesList extends cdktf.ComplexList {
  public internalValue? : CdnResourceOptionsGeoAclExceptedValues[] | cdktf.IResolvable

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
  public get(index: number): CdnResourceOptionsGeoAclExceptedValuesOutputReference {
    return new CdnResourceOptionsGeoAclExceptedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnResourceOptionsGeoAcl {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Shows the chosen policy type. Has either "allow" or "deny" value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#policy_type CdnResource#policy_type}
  */
  readonly policyType?: string;
  /**
  * excepted_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#excepted_values CdnResource#excepted_values}
  */
  readonly exceptedValues: CdnResourceOptionsGeoAclExceptedValues[] | cdktf.IResolvable;
}

export function cdnResourceOptionsGeoAclToTerraform(struct?: CdnResourceOptionsGeoAclOutputReference | CdnResourceOptionsGeoAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    excepted_values: cdktf.listMapper(cdnResourceOptionsGeoAclExceptedValuesToTerraform, true)(struct!.exceptedValues),
  }
}


export function cdnResourceOptionsGeoAclToHclTerraform(struct?: CdnResourceOptionsGeoAclOutputReference | CdnResourceOptionsGeoAcl): any {
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
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excepted_values: {
      value: cdktf.listMapperHcl(cdnResourceOptionsGeoAclExceptedValuesToHclTerraform, true)(struct!.exceptedValues),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsGeoAclExceptedValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsGeoAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsGeoAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._exceptedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptedValues = this._exceptedValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsGeoAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._policyType = undefined;
      this._exceptedValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._policyType = value.policyType;
      this._exceptedValues.internalValue = value.exceptedValues;
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

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // excepted_values - computed: false, optional: false, required: true
  private _exceptedValues = new CdnResourceOptionsGeoAclExceptedValuesList(this, "excepted_values", false);
  public get exceptedValues() {
    return this._exceptedValues;
  }
  public putExceptedValues(value: CdnResourceOptionsGeoAclExceptedValues[] | cdktf.IResolvable) {
    this._exceptedValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptedValuesInput() {
    return this._exceptedValues.internalValue;
  }
}
export interface CdnResourceOptionsGzipCompression {
  /**
  * Enable or disable the option. Allowed values are "true" or "false". 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Allowed values are "application/dash+xml", "application/javascript", "application/javascript", "application/vnd.apple.mpegurl", "application/vnd.ms-fontobject", "application/wasm", "application/x-font-opentype", "application/x-font-ttf", "application/x-javascript", "application/x-mpegURL", "application/x-subrip", "application/xml", "application/xml+rss", "font/woff", "font/woff2", "image/svg+xml", "text/css", "text/html", "text/javascript", "text/plain", "text/vtt", "text/xml".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: string[];
}

export function cdnResourceOptionsGzipCompressionToTerraform(struct?: CdnResourceOptionsGzipCompressionOutputReference | CdnResourceOptionsGzipCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsGzipCompressionToHclTerraform(struct?: CdnResourceOptionsGzipCompressionOutputReference | CdnResourceOptionsGzipCompression): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsGzipCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsGzipCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsGzipCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsHostHeader {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the Host header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: string;
}

export function cdnResourceOptionsHostHeaderToTerraform(struct?: CdnResourceOptionsHostHeaderOutputReference | CdnResourceOptionsHostHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsHostHeaderToHclTerraform(struct?: CdnResourceOptionsHostHeaderOutputReference | CdnResourceOptionsHostHeader): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsHostHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsHostHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsHostHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsHttp3Enabled {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsHttp3EnabledToTerraform(struct?: CdnResourceOptionsHttp3EnabledOutputReference | CdnResourceOptionsHttp3Enabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsHttp3EnabledToHclTerraform(struct?: CdnResourceOptionsHttp3EnabledOutputReference | CdnResourceOptionsHttp3Enabled): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsHttp3EnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsHttp3Enabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsHttp3Enabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsIgnoreCookie {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsIgnoreCookieToTerraform(struct?: CdnResourceOptionsIgnoreCookieOutputReference | CdnResourceOptionsIgnoreCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsIgnoreCookieToHclTerraform(struct?: CdnResourceOptionsIgnoreCookieOutputReference | CdnResourceOptionsIgnoreCookie): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsIgnoreCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsIgnoreCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsIgnoreCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsIgnoreQueryString {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false". If set to "true", Ignore all setting is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsIgnoreQueryStringToTerraform(struct?: CdnResourceOptionsIgnoreQueryStringOutputReference | CdnResourceOptionsIgnoreQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsIgnoreQueryStringToHclTerraform(struct?: CdnResourceOptionsIgnoreQueryStringOutputReference | CdnResourceOptionsIgnoreQueryString): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsIgnoreQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsIgnoreQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsIgnoreQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsImageStack {
  /**
  * Allow to convert the JPG and PNG images into AVIF format when supported by the end user's browser. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#avif_enabled CdnResource#avif_enabled}
  */
  readonly avifEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify if the PNG images should be compressed without the quality loss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#png_lossless CdnResource#png_lossless}
  */
  readonly pngLossless?: boolean | cdktf.IResolvable;
  /**
  * Set the quality of the JPG and PNG images after conversion. The higher the value, the better the image quality and the larger the file size after conversion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#quality CdnResource#quality}
  */
  readonly quality: number;
  /**
  * Allow to convert the JPG and PNG images into WebP format when supported by the end user's browser. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#webp_enabled CdnResource#webp_enabled}
  */
  readonly webpEnabled?: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsImageStackToTerraform(struct?: CdnResourceOptionsImageStackOutputReference | CdnResourceOptionsImageStack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avif_enabled: cdktf.booleanToTerraform(struct!.avifEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    png_lossless: cdktf.booleanToTerraform(struct!.pngLossless),
    quality: cdktf.numberToTerraform(struct!.quality),
    webp_enabled: cdktf.booleanToTerraform(struct!.webpEnabled),
  }
}


export function cdnResourceOptionsImageStackToHclTerraform(struct?: CdnResourceOptionsImageStackOutputReference | CdnResourceOptionsImageStack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avif_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.avifEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    png_lossless: {
      value: cdktf.booleanToHclTerraform(struct!.pngLossless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    quality: {
      value: cdktf.numberToHclTerraform(struct!.quality),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    webp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.webpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsImageStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsImageStack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avifEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.avifEnabled = this._avifEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._pngLossless !== undefined) {
      hasAnyValues = true;
      internalValueResult.pngLossless = this._pngLossless;
    }
    if (this._quality !== undefined) {
      hasAnyValues = true;
      internalValueResult.quality = this._quality;
    }
    if (this._webpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.webpEnabled = this._webpEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsImageStack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avifEnabled = undefined;
      this._enabled = undefined;
      this._pngLossless = undefined;
      this._quality = undefined;
      this._webpEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._avifEnabled = value.avifEnabled;
      this._enabled = value.enabled;
      this._pngLossless = value.pngLossless;
      this._quality = value.quality;
      this._webpEnabled = value.webpEnabled;
    }
  }

  // avif_enabled - computed: true, optional: true, required: false
  private _avifEnabled?: boolean | cdktf.IResolvable; 
  public get avifEnabled() {
    return this.getBooleanAttribute('avif_enabled');
  }
  public set avifEnabled(value: boolean | cdktf.IResolvable) {
    this._avifEnabled = value;
  }
  public resetAvifEnabled() {
    this._avifEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avifEnabledInput() {
    return this._avifEnabled;
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

  // png_lossless - computed: true, optional: true, required: false
  private _pngLossless?: boolean | cdktf.IResolvable; 
  public get pngLossless() {
    return this.getBooleanAttribute('png_lossless');
  }
  public set pngLossless(value: boolean | cdktf.IResolvable) {
    this._pngLossless = value;
  }
  public resetPngLossless() {
    this._pngLossless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pngLosslessInput() {
    return this._pngLossless;
  }

  // quality - computed: false, optional: false, required: true
  private _quality?: number; 
  public get quality() {
    return this.getNumberAttribute('quality');
  }
  public set quality(value: number) {
    this._quality = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityInput() {
    return this._quality;
  }

  // webp_enabled - computed: true, optional: true, required: false
  private _webpEnabled?: boolean | cdktf.IResolvable; 
  public get webpEnabled() {
    return this.getBooleanAttribute('webp_enabled');
  }
  public set webpEnabled(value: boolean | cdktf.IResolvable) {
    this._webpEnabled = value;
  }
  public resetWebpEnabled() {
    this._webpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webpEnabledInput() {
    return this._webpEnabled;
  }
}
export interface CdnResourceOptionsIpAddressAcl {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add the list of IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#excepted_values CdnResource#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Set the policy type. Allowed values are "allow" or "deny". The policy allows or denies access to content from all IP addresses except those specified in the "excepted_values" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#policy_type CdnResource#policy_type}
  */
  readonly policyType: string;
}

export function cdnResourceOptionsIpAddressAclToTerraform(struct?: CdnResourceOptionsIpAddressAclOutputReference | CdnResourceOptionsIpAddressAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    excepted_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptedValues),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
  }
}


export function cdnResourceOptionsIpAddressAclToHclTerraform(struct?: CdnResourceOptionsIpAddressAclOutputReference | CdnResourceOptionsIpAddressAcl): any {
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
    excepted_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptedValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsIpAddressAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsIpAddressAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exceptedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptedValues = this._exceptedValues;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsIpAddressAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._exceptedValues = undefined;
      this._policyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._exceptedValues = value.exceptedValues;
      this._policyType = value.policyType;
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

  // excepted_values - computed: false, optional: false, required: true
  private _exceptedValues?: string[]; 
  public get exceptedValues() {
    return cdktf.Fn.tolist(this.getListAttribute('excepted_values'));
  }
  public set exceptedValues(value: string[]) {
    this._exceptedValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptedValuesInput() {
    return this._exceptedValues;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}
export interface CdnResourceOptionsLimitBandwidth {
  /**
  * Specify the amount of downloaded data in KB after which the user will be rate limited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#buffer CdnResource#buffer}
  */
  readonly buffer?: number;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the speed limit type. Allowed values are "static" or "dynamic". If set to "static", use the "speed" and "buffer" fields. If set to "dynamic", the speed is limited according to the "?speed" and "?buffer" query parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#limit_type CdnResource#limit_type}
  */
  readonly limitType: string;
  /**
  * Set the maximum download speed per connection in KB/s. Must be greater than "0".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#speed CdnResource#speed}
  */
  readonly speed?: number;
}

export function cdnResourceOptionsLimitBandwidthToTerraform(struct?: CdnResourceOptionsLimitBandwidthOutputReference | CdnResourceOptionsLimitBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.numberToTerraform(struct!.buffer),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    limit_type: cdktf.stringToTerraform(struct!.limitType),
    speed: cdktf.numberToTerraform(struct!.speed),
  }
}


export function cdnResourceOptionsLimitBandwidthToHclTerraform(struct?: CdnResourceOptionsLimitBandwidthOutputReference | CdnResourceOptionsLimitBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.numberToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_type: {
      value: cdktf.stringToHclTerraform(struct!.limitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed: {
      value: cdktf.numberToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsLimitBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsLimitBandwidth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._limitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitType = this._limitType;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsLimitBandwidth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buffer = undefined;
      this._enabled = undefined;
      this._limitType = undefined;
      this._speed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buffer = value.buffer;
      this._enabled = value.enabled;
      this._limitType = value.limitType;
      this._speed = value.speed;
    }
  }

  // buffer - computed: true, optional: true, required: false
  private _buffer?: number; 
  public get buffer() {
    return this.getNumberAttribute('buffer');
  }
  public set buffer(value: number) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
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

  // limit_type - computed: false, optional: false, required: true
  private _limitType?: string; 
  public get limitType() {
    return this.getStringAttribute('limit_type');
  }
  public set limitType(value: string) {
    this._limitType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitTypeInput() {
    return this._limitType;
  }

  // speed - computed: true, optional: true, required: false
  private _speed?: number; 
  public get speed() {
    return this.getNumberAttribute('speed');
  }
  public set speed(value: number) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }
}
export interface CdnResourceOptionsProxyCacheMethodsSet {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsProxyCacheMethodsSetToTerraform(struct?: CdnResourceOptionsProxyCacheMethodsSetOutputReference | CdnResourceOptionsProxyCacheMethodsSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsProxyCacheMethodsSetToHclTerraform(struct?: CdnResourceOptionsProxyCacheMethodsSetOutputReference | CdnResourceOptionsProxyCacheMethodsSet): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsProxyCacheMethodsSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsProxyCacheMethodsSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsProxyCacheMethodsSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsQueryParamsBlacklistStruct {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add the list of params that should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: string[];
}

export function cdnResourceOptionsQueryParamsBlacklistStructToTerraform(struct?: CdnResourceOptionsQueryParamsBlacklistStructOutputReference | CdnResourceOptionsQueryParamsBlacklistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsQueryParamsBlacklistStructToHclTerraform(struct?: CdnResourceOptionsQueryParamsBlacklistStructOutputReference | CdnResourceOptionsQueryParamsBlacklistStruct): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsQueryParamsBlacklistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsQueryParamsBlacklistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsQueryParamsBlacklistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsQueryParamsWhitelistStruct {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add the list of params that should not be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: string[];
}

export function cdnResourceOptionsQueryParamsWhitelistStructToTerraform(struct?: CdnResourceOptionsQueryParamsWhitelistStructOutputReference | CdnResourceOptionsQueryParamsWhitelistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsQueryParamsWhitelistStructToHclTerraform(struct?: CdnResourceOptionsQueryParamsWhitelistStructOutputReference | CdnResourceOptionsQueryParamsWhitelistStruct): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsQueryParamsWhitelistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsQueryParamsWhitelistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsQueryParamsWhitelistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsRedirectHttpToHttps {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsRedirectHttpToHttpsToTerraform(struct?: CdnResourceOptionsRedirectHttpToHttpsOutputReference | CdnResourceOptionsRedirectHttpToHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsRedirectHttpToHttpsToHclTerraform(struct?: CdnResourceOptionsRedirectHttpToHttpsOutputReference | CdnResourceOptionsRedirectHttpToHttps): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsRedirectHttpToHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsRedirectHttpToHttps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsRedirectHttpToHttps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsRedirectHttpsToHttp {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsRedirectHttpsToHttpToTerraform(struct?: CdnResourceOptionsRedirectHttpsToHttpOutputReference | CdnResourceOptionsRedirectHttpsToHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsRedirectHttpsToHttpToHclTerraform(struct?: CdnResourceOptionsRedirectHttpsToHttpOutputReference | CdnResourceOptionsRedirectHttpsToHttp): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsRedirectHttpsToHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsRedirectHttpsToHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsRedirectHttpsToHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsRefererAcl {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add a list of domain names. To allow a direct link access, add an empty value "". You cannot enter just the empty value because at least one valid referer is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#excepted_values CdnResource#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Set the policy type. Allowed values are "allow" or "deny". The policy allows or denies access to content from all domain names except those specified in the "excepted_values" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#policy_type CdnResource#policy_type}
  */
  readonly policyType: string;
}

export function cdnResourceOptionsRefererAclToTerraform(struct?: CdnResourceOptionsRefererAclOutputReference | CdnResourceOptionsRefererAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    excepted_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptedValues),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
  }
}


export function cdnResourceOptionsRefererAclToHclTerraform(struct?: CdnResourceOptionsRefererAclOutputReference | CdnResourceOptionsRefererAcl): any {
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
    excepted_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptedValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsRefererAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsRefererAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exceptedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptedValues = this._exceptedValues;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsRefererAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._exceptedValues = undefined;
      this._policyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._exceptedValues = value.exceptedValues;
      this._policyType = value.policyType;
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

  // excepted_values - computed: false, optional: false, required: true
  private _exceptedValues?: string[]; 
  public get exceptedValues() {
    return cdktf.Fn.tolist(this.getListAttribute('excepted_values'));
  }
  public set exceptedValues(value: string[]) {
    this._exceptedValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptedValuesInput() {
    return this._exceptedValues;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}
export interface CdnResourceOptionsResponseHeadersHidingPolicy {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Depending on the value of the "mode" field, list the HTTP headers that will be either shown or hidden in the response. HTTP headers, that can't be hidden from the response: Connection, Content-Length, Content-Type, Date, Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#excepted CdnResource#excepted}
  */
  readonly excepted: string[];
  /**
  * Set the way the HTTP headers are displayed. Allowed values are "hide" or "show". If set to "hide", all the HTTP headers from the response except those listed in the "excepted" field. If set to "show", the HTTP headers listed in the "excepted" field are hidden from the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#mode CdnResource#mode}
  */
  readonly mode: string;
}

export function cdnResourceOptionsResponseHeadersHidingPolicyToTerraform(struct?: CdnResourceOptionsResponseHeadersHidingPolicyOutputReference | CdnResourceOptionsResponseHeadersHidingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    excepted: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excepted),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function cdnResourceOptionsResponseHeadersHidingPolicyToHclTerraform(struct?: CdnResourceOptionsResponseHeadersHidingPolicyOutputReference | CdnResourceOptionsResponseHeadersHidingPolicy): any {
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
    excepted: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excepted),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsResponseHeadersHidingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsResponseHeadersHidingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excepted !== undefined) {
      hasAnyValues = true;
      internalValueResult.excepted = this._excepted;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsResponseHeadersHidingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._excepted = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._excepted = value.excepted;
      this._mode = value.mode;
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

  // excepted - computed: false, optional: false, required: true
  private _excepted?: string[]; 
  public get excepted() {
    return cdktf.Fn.tolist(this.getListAttribute('excepted'));
  }
  public set excepted(value: string[]) {
    this._excepted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptedInput() {
    return this._excepted;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface CdnResourceOptionsRewrite {
  /**
  * Specify the rewrite pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#body CdnResource#body}
  */
  readonly body: string;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify a rewrite flag type. Allowed values are "last", "break", "redirect", or "permanent".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#flag CdnResource#flag}
  */
  readonly flag?: string;
}

export function cdnResourceOptionsRewriteToTerraform(struct?: CdnResourceOptionsRewriteOutputReference | CdnResourceOptionsRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    flag: cdktf.stringToTerraform(struct!.flag),
  }
}


export function cdnResourceOptionsRewriteToHclTerraform(struct?: CdnResourceOptionsRewriteOutputReference | CdnResourceOptionsRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flag: {
      value: cdktf.stringToHclTerraform(struct!.flag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._flag !== undefined) {
      hasAnyValues = true;
      internalValueResult.flag = this._flag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._enabled = undefined;
      this._flag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._enabled = value.enabled;
      this._flag = value.flag;
    }
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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

  // flag - computed: false, optional: true, required: false
  private _flag?: string; 
  public get flag() {
    return this.getStringAttribute('flag');
  }
  public set flag(value: string) {
    this._flag = value;
  }
  public resetFlag() {
    this._flag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag;
  }
}
export interface CdnResourceOptionsSecureKey {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add the key generated on your side which will be used for the URL signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#key CdnResource#key}
  */
  readonly key: string;
  /**
  * Set the type of the URL signing. Allowed values are "0" or "2". If set to "0", the end user's IP address is inclded to secure token generation. If set to "2", the end user's IP address is excluded from the secure token generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#type CdnResource#type}
  */
  readonly type: number;
}

export function cdnResourceOptionsSecureKeyToTerraform(struct?: CdnResourceOptionsSecureKeyOutputReference | CdnResourceOptionsSecureKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function cdnResourceOptionsSecureKeyToHclTerraform(struct?: CdnResourceOptionsSecureKeyOutputReference | CdnResourceOptionsSecureKey): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsSecureKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsSecureKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsSecureKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._key = value.key;
      this._type = value.type;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CdnResourceOptionsSlice {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsSliceToTerraform(struct?: CdnResourceOptionsSliceOutputReference | CdnResourceOptionsSlice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsSliceToHclTerraform(struct?: CdnResourceOptionsSliceOutputReference | CdnResourceOptionsSlice): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsSliceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsSlice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsSlice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsSni {
  /**
  * Specify the custom SNI hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#custom_hostname CdnResource#custom_hostname}
  */
  readonly customHostname?: string;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the SNI type. Allowed values are "dynamic" or "custom". If set to "dynamic", the hostname matches the value of the "host_header" or "forward_host_header" field. If set to "custom", the hostname matches the value of the "custom_hostname" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#sni_type CdnResource#sni_type}
  */
  readonly sniType?: string;
}

export function cdnResourceOptionsSniToTerraform(struct?: CdnResourceOptionsSniOutputReference | CdnResourceOptionsSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_hostname: cdktf.stringToTerraform(struct!.customHostname),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sni_type: cdktf.stringToTerraform(struct!.sniType),
  }
}


export function cdnResourceOptionsSniToHclTerraform(struct?: CdnResourceOptionsSniOutputReference | CdnResourceOptionsSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_hostname: {
      value: cdktf.stringToHclTerraform(struct!.customHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sni_type: {
      value: cdktf.stringToHclTerraform(struct!.sniType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsSniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsSni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostname = this._customHostname;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._sniType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniType = this._sniType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsSni | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customHostname = undefined;
      this._enabled = undefined;
      this._sniType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customHostname = value.customHostname;
      this._enabled = value.enabled;
      this._sniType = value.sniType;
    }
  }

  // custom_hostname - computed: false, optional: true, required: false
  private _customHostname?: string; 
  public get customHostname() {
    return this.getStringAttribute('custom_hostname');
  }
  public set customHostname(value: string) {
    this._customHostname = value;
  }
  public resetCustomHostname() {
    this._customHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostnameInput() {
    return this._customHostname;
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

  // sni_type - computed: false, optional: true, required: false
  private _sniType?: string; 
  public get sniType() {
    return this.getStringAttribute('sni_type');
  }
  public set sniType(value: string) {
    this._sniType = value;
  }
  public resetSniType() {
    this._sniType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniTypeInput() {
    return this._sniType;
  }
}
export interface CdnResourceOptionsStale {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add a list of errors. Allowed values are "error", "http_403", "http_404", "http_429", "http_500", "http_502", "http_503", "http_504", "invalid_header", "timeout", "updating".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: string[];
}

export function cdnResourceOptionsStaleToTerraform(struct?: CdnResourceOptionsStaleOutputReference | CdnResourceOptionsStale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsStaleToHclTerraform(struct?: CdnResourceOptionsStaleOutputReference | CdnResourceOptionsStale): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsStaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsStale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsStale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsStaticRequestHeaders {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add the list of custom HTTP request headers in the "name: value" format. Header name is restricted to 255 symbols and can contain Latin letters (A-Z, a-z), numbers (0-9), dashes, and underscores
  * Header value is restricted to 512 symbols and must start with a letter, a number, an asterisk or {. It can contain only Latin letters (A-Z, a-z), numbers (0-9), spaces and symbols (`~!@#%^&*()-_=+ /|";:?.><{}[]). Space can be used only between the words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: { [key: string]: string };
}

export function cdnResourceOptionsStaticRequestHeadersToTerraform(struct?: CdnResourceOptionsStaticRequestHeadersOutputReference | CdnResourceOptionsStaticRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function cdnResourceOptionsStaticRequestHeadersToHclTerraform(struct?: CdnResourceOptionsStaticRequestHeadersOutputReference | CdnResourceOptionsStaticRequestHeaders): any {
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsStaticRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsStaticRequestHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsStaticRequestHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsStaticResponseHeadersValue {
  /**
  * Specify if the custom header should be added to the responses from CDN regardless of the HTTP response status code. Allowed values are "true" or "false". If set to "false", the header will only be added to the responses with HTTP 200, 201, 204, 206, 301, 302, 303, 304, 307, or 308 status codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#always CdnResource#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Add the header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#name CdnResource#name}
  */
  readonly name: string;
  /**
  * Add the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: string[];
}

export function cdnResourceOptionsStaticResponseHeadersValueToTerraform(struct?: CdnResourceOptionsStaticResponseHeadersValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.booleanToTerraform(struct!.always),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsStaticResponseHeadersValueToHclTerraform(struct?: CdnResourceOptionsStaticResponseHeadersValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.booleanToHclTerraform(struct!.always),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsStaticResponseHeadersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnResourceOptionsStaticResponseHeadersValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsStaticResponseHeadersValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._always = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._always = value.always;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // always - computed: true, optional: true, required: false
  private _always?: boolean | cdktf.IResolvable; 
  public get always() {
    return this.getBooleanAttribute('always');
  }
  public set always(value: boolean | cdktf.IResolvable) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CdnResourceOptionsStaticResponseHeadersValueList extends cdktf.ComplexList {
  public internalValue? : CdnResourceOptionsStaticResponseHeadersValue[] | cdktf.IResolvable

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
  public get(index: number): CdnResourceOptionsStaticResponseHeadersValueOutputReference {
    return new CdnResourceOptionsStaticResponseHeadersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnResourceOptionsStaticResponseHeaders {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: CdnResourceOptionsStaticResponseHeadersValue[] | cdktf.IResolvable;
}

export function cdnResourceOptionsStaticResponseHeadersToTerraform(struct?: CdnResourceOptionsStaticResponseHeadersOutputReference | CdnResourceOptionsStaticResponseHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdnResourceOptionsStaticResponseHeadersValueToTerraform, true)(struct!.value),
  }
}


export function cdnResourceOptionsStaticResponseHeadersToHclTerraform(struct?: CdnResourceOptionsStaticResponseHeadersOutputReference | CdnResourceOptionsStaticResponseHeaders): any {
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
    value: {
      value: cdktf.listMapperHcl(cdnResourceOptionsStaticResponseHeadersValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsStaticResponseHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsStaticResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsStaticResponseHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsStaticResponseHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value = new CdnResourceOptionsStaticResponseHeadersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: CdnResourceOptionsStaticResponseHeadersValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface CdnResourceOptionsTlsVersions {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the list of TLS versions. Allowed values are "SSLv3", "TLSv1", "TLSv1.1", "TLSv1.2", "TLSv1.3".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: string[];
}

export function cdnResourceOptionsTlsVersionsToTerraform(struct?: CdnResourceOptionsTlsVersionsOutputReference | CdnResourceOptionsTlsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsTlsVersionsToHclTerraform(struct?: CdnResourceOptionsTlsVersionsOutputReference | CdnResourceOptionsTlsVersions): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsTlsVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsTlsVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsTlsVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsUseDefaultLeChain {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Choose the certificate chain type. Allowed values are "true" or "false". If set to "true", a default chain is chosen. Use it for Android devices 7.1.1 or lower. If set to "false", an alternative certificate chain is chosen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsUseDefaultLeChainToTerraform(struct?: CdnResourceOptionsUseDefaultLeChainOutputReference | CdnResourceOptionsUseDefaultLeChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsUseDefaultLeChainToHclTerraform(struct?: CdnResourceOptionsUseDefaultLeChainOutputReference | CdnResourceOptionsUseDefaultLeChain): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsUseDefaultLeChainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsUseDefaultLeChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsUseDefaultLeChain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsUserAgentAcl {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add a list of user agents. Enter the values in [""]. You can specify a user agent string, an empty value using "", or a regular expression that starts with "~".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#excepted_values CdnResource#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Set the policy type. Allowed values are "allow" or "deny". The policy allows or denies access to content from all user agents except those specified in the "excepted_values" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#policy_type CdnResource#policy_type}
  */
  readonly policyType: string;
}

export function cdnResourceOptionsUserAgentAclToTerraform(struct?: CdnResourceOptionsUserAgentAclOutputReference | CdnResourceOptionsUserAgentAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    excepted_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptedValues),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
  }
}


export function cdnResourceOptionsUserAgentAclToHclTerraform(struct?: CdnResourceOptionsUserAgentAclOutputReference | CdnResourceOptionsUserAgentAcl): any {
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
    excepted_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptedValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsUserAgentAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsUserAgentAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exceptedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptedValues = this._exceptedValues;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsUserAgentAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._exceptedValues = undefined;
      this._policyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._exceptedValues = value.exceptedValues;
      this._policyType = value.policyType;
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

  // excepted_values - computed: false, optional: false, required: true
  private _exceptedValues?: string[]; 
  public get exceptedValues() {
    return cdktf.Fn.tolist(this.getListAttribute('excepted_values'));
  }
  public set exceptedValues(value: string[]) {
    this._exceptedValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptedValuesInput() {
    return this._exceptedValues;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}
export interface CdnResourceOptionsWebsockets {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsWebsocketsToTerraform(struct?: CdnResourceOptionsWebsocketsOutputReference | CdnResourceOptionsWebsockets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsWebsocketsToHclTerraform(struct?: CdnResourceOptionsWebsocketsOutputReference | CdnResourceOptionsWebsockets): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsWebsocketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsWebsockets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsWebsockets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptions {
  /**
  * allowed_http_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#allowed_http_methods CdnResource#allowed_http_methods}
  */
  readonly allowedHttpMethods?: CdnResourceOptionsAllowedHttpMethods;
  /**
  * brotli_compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#brotli_compression CdnResource#brotli_compression}
  */
  readonly brotliCompression?: CdnResourceOptionsBrotliCompression;
  /**
  * browser_cache_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#browser_cache_settings CdnResource#browser_cache_settings}
  */
  readonly browserCacheSettings?: CdnResourceOptionsBrowserCacheSettings;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#cors CdnResource#cors}
  */
  readonly cors?: CdnResourceOptionsCors;
  /**
  * disable_proxy_force_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#disable_proxy_force_ranges CdnResource#disable_proxy_force_ranges}
  */
  readonly disableProxyForceRanges?: CdnResourceOptionsDisableProxyForceRanges;
  /**
  * edge_cache_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#edge_cache_settings CdnResource#edge_cache_settings}
  */
  readonly edgeCacheSettings?: CdnResourceOptionsEdgeCacheSettings;
  /**
  * fetch_compressed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#fetch_compressed CdnResource#fetch_compressed}
  */
  readonly fetchCompressed?: CdnResourceOptionsFetchCompressed;
  /**
  * follow_origin_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#follow_origin_redirect CdnResource#follow_origin_redirect}
  */
  readonly followOriginRedirect?: CdnResourceOptionsFollowOriginRedirect;
  /**
  * force_return block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#force_return CdnResource#force_return}
  */
  readonly forceReturn?: CdnResourceOptionsForceReturn;
  /**
  * forward_host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#forward_host_header CdnResource#forward_host_header}
  */
  readonly forwardHostHeader?: CdnResourceOptionsForwardHostHeader;
  /**
  * geo_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#geo_acl CdnResource#geo_acl}
  */
  readonly geoAcl?: CdnResourceOptionsGeoAcl;
  /**
  * gzip_compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#gzip_compression CdnResource#gzip_compression}
  */
  readonly gzipCompression?: CdnResourceOptionsGzipCompression;
  /**
  * host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#host_header CdnResource#host_header}
  */
  readonly hostHeader?: CdnResourceOptionsHostHeader;
  /**
  * http3_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#http3_enabled CdnResource#http3_enabled}
  */
  readonly http3Enabled?: CdnResourceOptionsHttp3Enabled;
  /**
  * ignore_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#ignore_cookie CdnResource#ignore_cookie}
  */
  readonly ignoreCookie?: CdnResourceOptionsIgnoreCookie;
  /**
  * ignore_query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#ignore_query_string CdnResource#ignore_query_string}
  */
  readonly ignoreQueryString?: CdnResourceOptionsIgnoreQueryString;
  /**
  * image_stack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#image_stack CdnResource#image_stack}
  */
  readonly imageStack?: CdnResourceOptionsImageStack;
  /**
  * ip_address_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#ip_address_acl CdnResource#ip_address_acl}
  */
  readonly ipAddressAcl?: CdnResourceOptionsIpAddressAcl;
  /**
  * limit_bandwidth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#limit_bandwidth CdnResource#limit_bandwidth}
  */
  readonly limitBandwidth?: CdnResourceOptionsLimitBandwidth;
  /**
  * proxy_cache_methods_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#proxy_cache_methods_set CdnResource#proxy_cache_methods_set}
  */
  readonly proxyCacheMethodsSet?: CdnResourceOptionsProxyCacheMethodsSet;
  /**
  * query_params_blacklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#query_params_blacklist CdnResource#query_params_blacklist}
  */
  readonly queryParamsBlacklist?: CdnResourceOptionsQueryParamsBlacklistStruct;
  /**
  * query_params_whitelist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#query_params_whitelist CdnResource#query_params_whitelist}
  */
  readonly queryParamsWhitelist?: CdnResourceOptionsQueryParamsWhitelistStruct;
  /**
  * redirect_http_to_https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#redirect_http_to_https CdnResource#redirect_http_to_https}
  */
  readonly redirectHttpToHttps?: CdnResourceOptionsRedirectHttpToHttps;
  /**
  * redirect_https_to_http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#redirect_https_to_http CdnResource#redirect_https_to_http}
  */
  readonly redirectHttpsToHttp?: CdnResourceOptionsRedirectHttpsToHttp;
  /**
  * referer_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#referer_acl CdnResource#referer_acl}
  */
  readonly refererAcl?: CdnResourceOptionsRefererAcl;
  /**
  * response_headers_hiding_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#response_headers_hiding_policy CdnResource#response_headers_hiding_policy}
  */
  readonly responseHeadersHidingPolicy?: CdnResourceOptionsResponseHeadersHidingPolicy;
  /**
  * rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#rewrite CdnResource#rewrite}
  */
  readonly rewrite?: CdnResourceOptionsRewrite;
  /**
  * secure_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#secure_key CdnResource#secure_key}
  */
  readonly secureKey?: CdnResourceOptionsSecureKey;
  /**
  * slice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#slice CdnResource#slice}
  */
  readonly slice?: CdnResourceOptionsSlice;
  /**
  * sni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#sni CdnResource#sni}
  */
  readonly sni?: CdnResourceOptionsSni;
  /**
  * stale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#stale CdnResource#stale}
  */
  readonly stale?: CdnResourceOptionsStale;
  /**
  * static_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#static_request_headers CdnResource#static_request_headers}
  */
  readonly staticRequestHeaders?: CdnResourceOptionsStaticRequestHeaders;
  /**
  * static_response_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#static_response_headers CdnResource#static_response_headers}
  */
  readonly staticResponseHeaders?: CdnResourceOptionsStaticResponseHeaders;
  /**
  * tls_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#tls_versions CdnResource#tls_versions}
  */
  readonly tlsVersions?: CdnResourceOptionsTlsVersions;
  /**
  * use_default_le_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#use_default_le_chain CdnResource#use_default_le_chain}
  */
  readonly useDefaultLeChain?: CdnResourceOptionsUseDefaultLeChain;
  /**
  * user_agent_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#user_agent_acl CdnResource#user_agent_acl}
  */
  readonly userAgentAcl?: CdnResourceOptionsUserAgentAcl;
  /**
  * websockets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#websockets CdnResource#websockets}
  */
  readonly websockets?: CdnResourceOptionsWebsockets;
}

export function cdnResourceOptionsToTerraform(struct?: CdnResourceOptionsOutputReference | CdnResourceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_http_methods: cdnResourceOptionsAllowedHttpMethodsToTerraform(struct!.allowedHttpMethods),
    brotli_compression: cdnResourceOptionsBrotliCompressionToTerraform(struct!.brotliCompression),
    browser_cache_settings: cdnResourceOptionsBrowserCacheSettingsToTerraform(struct!.browserCacheSettings),
    cors: cdnResourceOptionsCorsToTerraform(struct!.cors),
    disable_proxy_force_ranges: cdnResourceOptionsDisableProxyForceRangesToTerraform(struct!.disableProxyForceRanges),
    edge_cache_settings: cdnResourceOptionsEdgeCacheSettingsToTerraform(struct!.edgeCacheSettings),
    fetch_compressed: cdnResourceOptionsFetchCompressedToTerraform(struct!.fetchCompressed),
    follow_origin_redirect: cdnResourceOptionsFollowOriginRedirectToTerraform(struct!.followOriginRedirect),
    force_return: cdnResourceOptionsForceReturnToTerraform(struct!.forceReturn),
    forward_host_header: cdnResourceOptionsForwardHostHeaderToTerraform(struct!.forwardHostHeader),
    geo_acl: cdnResourceOptionsGeoAclToTerraform(struct!.geoAcl),
    gzip_compression: cdnResourceOptionsGzipCompressionToTerraform(struct!.gzipCompression),
    host_header: cdnResourceOptionsHostHeaderToTerraform(struct!.hostHeader),
    http3_enabled: cdnResourceOptionsHttp3EnabledToTerraform(struct!.http3Enabled),
    ignore_cookie: cdnResourceOptionsIgnoreCookieToTerraform(struct!.ignoreCookie),
    ignore_query_string: cdnResourceOptionsIgnoreQueryStringToTerraform(struct!.ignoreQueryString),
    image_stack: cdnResourceOptionsImageStackToTerraform(struct!.imageStack),
    ip_address_acl: cdnResourceOptionsIpAddressAclToTerraform(struct!.ipAddressAcl),
    limit_bandwidth: cdnResourceOptionsLimitBandwidthToTerraform(struct!.limitBandwidth),
    proxy_cache_methods_set: cdnResourceOptionsProxyCacheMethodsSetToTerraform(struct!.proxyCacheMethodsSet),
    query_params_blacklist: cdnResourceOptionsQueryParamsBlacklistStructToTerraform(struct!.queryParamsBlacklist),
    query_params_whitelist: cdnResourceOptionsQueryParamsWhitelistStructToTerraform(struct!.queryParamsWhitelist),
    redirect_http_to_https: cdnResourceOptionsRedirectHttpToHttpsToTerraform(struct!.redirectHttpToHttps),
    redirect_https_to_http: cdnResourceOptionsRedirectHttpsToHttpToTerraform(struct!.redirectHttpsToHttp),
    referer_acl: cdnResourceOptionsRefererAclToTerraform(struct!.refererAcl),
    response_headers_hiding_policy: cdnResourceOptionsResponseHeadersHidingPolicyToTerraform(struct!.responseHeadersHidingPolicy),
    rewrite: cdnResourceOptionsRewriteToTerraform(struct!.rewrite),
    secure_key: cdnResourceOptionsSecureKeyToTerraform(struct!.secureKey),
    slice: cdnResourceOptionsSliceToTerraform(struct!.slice),
    sni: cdnResourceOptionsSniToTerraform(struct!.sni),
    stale: cdnResourceOptionsStaleToTerraform(struct!.stale),
    static_request_headers: cdnResourceOptionsStaticRequestHeadersToTerraform(struct!.staticRequestHeaders),
    static_response_headers: cdnResourceOptionsStaticResponseHeadersToTerraform(struct!.staticResponseHeaders),
    tls_versions: cdnResourceOptionsTlsVersionsToTerraform(struct!.tlsVersions),
    use_default_le_chain: cdnResourceOptionsUseDefaultLeChainToTerraform(struct!.useDefaultLeChain),
    user_agent_acl: cdnResourceOptionsUserAgentAclToTerraform(struct!.userAgentAcl),
    websockets: cdnResourceOptionsWebsocketsToTerraform(struct!.websockets),
  }
}


export function cdnResourceOptionsToHclTerraform(struct?: CdnResourceOptionsOutputReference | CdnResourceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_http_methods: {
      value: cdnResourceOptionsAllowedHttpMethodsToHclTerraform(struct!.allowedHttpMethods),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsAllowedHttpMethodsList",
    },
    brotli_compression: {
      value: cdnResourceOptionsBrotliCompressionToHclTerraform(struct!.brotliCompression),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsBrotliCompressionList",
    },
    browser_cache_settings: {
      value: cdnResourceOptionsBrowserCacheSettingsToHclTerraform(struct!.browserCacheSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsBrowserCacheSettingsList",
    },
    cors: {
      value: cdnResourceOptionsCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsCorsList",
    },
    disable_proxy_force_ranges: {
      value: cdnResourceOptionsDisableProxyForceRangesToHclTerraform(struct!.disableProxyForceRanges),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsDisableProxyForceRangesList",
    },
    edge_cache_settings: {
      value: cdnResourceOptionsEdgeCacheSettingsToHclTerraform(struct!.edgeCacheSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsEdgeCacheSettingsList",
    },
    fetch_compressed: {
      value: cdnResourceOptionsFetchCompressedToHclTerraform(struct!.fetchCompressed),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsFetchCompressedList",
    },
    follow_origin_redirect: {
      value: cdnResourceOptionsFollowOriginRedirectToHclTerraform(struct!.followOriginRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsFollowOriginRedirectList",
    },
    force_return: {
      value: cdnResourceOptionsForceReturnToHclTerraform(struct!.forceReturn),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsForceReturnList",
    },
    forward_host_header: {
      value: cdnResourceOptionsForwardHostHeaderToHclTerraform(struct!.forwardHostHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsForwardHostHeaderList",
    },
    geo_acl: {
      value: cdnResourceOptionsGeoAclToHclTerraform(struct!.geoAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsGeoAclList",
    },
    gzip_compression: {
      value: cdnResourceOptionsGzipCompressionToHclTerraform(struct!.gzipCompression),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsGzipCompressionList",
    },
    host_header: {
      value: cdnResourceOptionsHostHeaderToHclTerraform(struct!.hostHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsHostHeaderList",
    },
    http3_enabled: {
      value: cdnResourceOptionsHttp3EnabledToHclTerraform(struct!.http3Enabled),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsHttp3EnabledList",
    },
    ignore_cookie: {
      value: cdnResourceOptionsIgnoreCookieToHclTerraform(struct!.ignoreCookie),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsIgnoreCookieList",
    },
    ignore_query_string: {
      value: cdnResourceOptionsIgnoreQueryStringToHclTerraform(struct!.ignoreQueryString),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsIgnoreQueryStringList",
    },
    image_stack: {
      value: cdnResourceOptionsImageStackToHclTerraform(struct!.imageStack),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsImageStackList",
    },
    ip_address_acl: {
      value: cdnResourceOptionsIpAddressAclToHclTerraform(struct!.ipAddressAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsIpAddressAclList",
    },
    limit_bandwidth: {
      value: cdnResourceOptionsLimitBandwidthToHclTerraform(struct!.limitBandwidth),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsLimitBandwidthList",
    },
    proxy_cache_methods_set: {
      value: cdnResourceOptionsProxyCacheMethodsSetToHclTerraform(struct!.proxyCacheMethodsSet),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsProxyCacheMethodsSetList",
    },
    query_params_blacklist: {
      value: cdnResourceOptionsQueryParamsBlacklistStructToHclTerraform(struct!.queryParamsBlacklist),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsQueryParamsBlacklistStructList",
    },
    query_params_whitelist: {
      value: cdnResourceOptionsQueryParamsWhitelistStructToHclTerraform(struct!.queryParamsWhitelist),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsQueryParamsWhitelistStructList",
    },
    redirect_http_to_https: {
      value: cdnResourceOptionsRedirectHttpToHttpsToHclTerraform(struct!.redirectHttpToHttps),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsRedirectHttpToHttpsList",
    },
    redirect_https_to_http: {
      value: cdnResourceOptionsRedirectHttpsToHttpToHclTerraform(struct!.redirectHttpsToHttp),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsRedirectHttpsToHttpList",
    },
    referer_acl: {
      value: cdnResourceOptionsRefererAclToHclTerraform(struct!.refererAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsRefererAclList",
    },
    response_headers_hiding_policy: {
      value: cdnResourceOptionsResponseHeadersHidingPolicyToHclTerraform(struct!.responseHeadersHidingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsResponseHeadersHidingPolicyList",
    },
    rewrite: {
      value: cdnResourceOptionsRewriteToHclTerraform(struct!.rewrite),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsRewriteList",
    },
    secure_key: {
      value: cdnResourceOptionsSecureKeyToHclTerraform(struct!.secureKey),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsSecureKeyList",
    },
    slice: {
      value: cdnResourceOptionsSliceToHclTerraform(struct!.slice),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsSliceList",
    },
    sni: {
      value: cdnResourceOptionsSniToHclTerraform(struct!.sni),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsSniList",
    },
    stale: {
      value: cdnResourceOptionsStaleToHclTerraform(struct!.stale),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsStaleList",
    },
    static_request_headers: {
      value: cdnResourceOptionsStaticRequestHeadersToHclTerraform(struct!.staticRequestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsStaticRequestHeadersList",
    },
    static_response_headers: {
      value: cdnResourceOptionsStaticResponseHeadersToHclTerraform(struct!.staticResponseHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsStaticResponseHeadersList",
    },
    tls_versions: {
      value: cdnResourceOptionsTlsVersionsToHclTerraform(struct!.tlsVersions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsTlsVersionsList",
    },
    use_default_le_chain: {
      value: cdnResourceOptionsUseDefaultLeChainToHclTerraform(struct!.useDefaultLeChain),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsUseDefaultLeChainList",
    },
    user_agent_acl: {
      value: cdnResourceOptionsUserAgentAclToHclTerraform(struct!.userAgentAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsUserAgentAclList",
    },
    websockets: {
      value: cdnResourceOptionsWebsocketsToHclTerraform(struct!.websockets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsWebsocketsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHttpMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHttpMethods = this._allowedHttpMethods?.internalValue;
    }
    if (this._brotliCompression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.brotliCompression = this._brotliCompression?.internalValue;
    }
    if (this._browserCacheSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserCacheSettings = this._browserCacheSettings?.internalValue;
    }
    if (this._cors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    if (this._disableProxyForceRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProxyForceRanges = this._disableProxyForceRanges?.internalValue;
    }
    if (this._edgeCacheSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeCacheSettings = this._edgeCacheSettings?.internalValue;
    }
    if (this._fetchCompressed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchCompressed = this._fetchCompressed?.internalValue;
    }
    if (this._followOriginRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.followOriginRedirect = this._followOriginRedirect?.internalValue;
    }
    if (this._forceReturn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceReturn = this._forceReturn?.internalValue;
    }
    if (this._forwardHostHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardHostHeader = this._forwardHostHeader?.internalValue;
    }
    if (this._geoAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoAcl = this._geoAcl?.internalValue;
    }
    if (this._gzipCompression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipCompression = this._gzipCompression?.internalValue;
    }
    if (this._hostHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader?.internalValue;
    }
    if (this._http3Enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http3Enabled = this._http3Enabled?.internalValue;
    }
    if (this._ignoreCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCookie = this._ignoreCookie?.internalValue;
    }
    if (this._ignoreQueryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreQueryString = this._ignoreQueryString?.internalValue;
    }
    if (this._imageStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageStack = this._imageStack?.internalValue;
    }
    if (this._ipAddressAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressAcl = this._ipAddressAcl?.internalValue;
    }
    if (this._limitBandwidth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitBandwidth = this._limitBandwidth?.internalValue;
    }
    if (this._proxyCacheMethodsSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyCacheMethodsSet = this._proxyCacheMethodsSet?.internalValue;
    }
    if (this._queryParamsBlacklist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamsBlacklist = this._queryParamsBlacklist?.internalValue;
    }
    if (this._queryParamsWhitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamsWhitelist = this._queryParamsWhitelist?.internalValue;
    }
    if (this._redirectHttpToHttps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectHttpToHttps = this._redirectHttpToHttps?.internalValue;
    }
    if (this._redirectHttpsToHttp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectHttpsToHttp = this._redirectHttpsToHttp?.internalValue;
    }
    if (this._refererAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererAcl = this._refererAcl?.internalValue;
    }
    if (this._responseHeadersHidingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersHidingPolicy = this._responseHeadersHidingPolicy?.internalValue;
    }
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    if (this._secureKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureKey = this._secureKey?.internalValue;
    }
    if (this._slice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slice = this._slice?.internalValue;
    }
    if (this._sni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni?.internalValue;
    }
    if (this._stale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stale = this._stale?.internalValue;
    }
    if (this._staticRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRequestHeaders = this._staticRequestHeaders?.internalValue;
    }
    if (this._staticResponseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticResponseHeaders = this._staticResponseHeaders?.internalValue;
    }
    if (this._tlsVersions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersions = this._tlsVersions?.internalValue;
    }
    if (this._useDefaultLeChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultLeChain = this._useDefaultLeChain?.internalValue;
    }
    if (this._userAgentAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgentAcl = this._userAgentAcl?.internalValue;
    }
    if (this._websockets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.websockets = this._websockets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHttpMethods.internalValue = undefined;
      this._brotliCompression.internalValue = undefined;
      this._browserCacheSettings.internalValue = undefined;
      this._cors.internalValue = undefined;
      this._disableProxyForceRanges.internalValue = undefined;
      this._edgeCacheSettings.internalValue = undefined;
      this._fetchCompressed.internalValue = undefined;
      this._followOriginRedirect.internalValue = undefined;
      this._forceReturn.internalValue = undefined;
      this._forwardHostHeader.internalValue = undefined;
      this._geoAcl.internalValue = undefined;
      this._gzipCompression.internalValue = undefined;
      this._hostHeader.internalValue = undefined;
      this._http3Enabled.internalValue = undefined;
      this._ignoreCookie.internalValue = undefined;
      this._ignoreQueryString.internalValue = undefined;
      this._imageStack.internalValue = undefined;
      this._ipAddressAcl.internalValue = undefined;
      this._limitBandwidth.internalValue = undefined;
      this._proxyCacheMethodsSet.internalValue = undefined;
      this._queryParamsBlacklist.internalValue = undefined;
      this._queryParamsWhitelist.internalValue = undefined;
      this._redirectHttpToHttps.internalValue = undefined;
      this._redirectHttpsToHttp.internalValue = undefined;
      this._refererAcl.internalValue = undefined;
      this._responseHeadersHidingPolicy.internalValue = undefined;
      this._rewrite.internalValue = undefined;
      this._secureKey.internalValue = undefined;
      this._slice.internalValue = undefined;
      this._sni.internalValue = undefined;
      this._stale.internalValue = undefined;
      this._staticRequestHeaders.internalValue = undefined;
      this._staticResponseHeaders.internalValue = undefined;
      this._tlsVersions.internalValue = undefined;
      this._useDefaultLeChain.internalValue = undefined;
      this._userAgentAcl.internalValue = undefined;
      this._websockets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHttpMethods.internalValue = value.allowedHttpMethods;
      this._brotliCompression.internalValue = value.brotliCompression;
      this._browserCacheSettings.internalValue = value.browserCacheSettings;
      this._cors.internalValue = value.cors;
      this._disableProxyForceRanges.internalValue = value.disableProxyForceRanges;
      this._edgeCacheSettings.internalValue = value.edgeCacheSettings;
      this._fetchCompressed.internalValue = value.fetchCompressed;
      this._followOriginRedirect.internalValue = value.followOriginRedirect;
      this._forceReturn.internalValue = value.forceReturn;
      this._forwardHostHeader.internalValue = value.forwardHostHeader;
      this._geoAcl.internalValue = value.geoAcl;
      this._gzipCompression.internalValue = value.gzipCompression;
      this._hostHeader.internalValue = value.hostHeader;
      this._http3Enabled.internalValue = value.http3Enabled;
      this._ignoreCookie.internalValue = value.ignoreCookie;
      this._ignoreQueryString.internalValue = value.ignoreQueryString;
      this._imageStack.internalValue = value.imageStack;
      this._ipAddressAcl.internalValue = value.ipAddressAcl;
      this._limitBandwidth.internalValue = value.limitBandwidth;
      this._proxyCacheMethodsSet.internalValue = value.proxyCacheMethodsSet;
      this._queryParamsBlacklist.internalValue = value.queryParamsBlacklist;
      this._queryParamsWhitelist.internalValue = value.queryParamsWhitelist;
      this._redirectHttpToHttps.internalValue = value.redirectHttpToHttps;
      this._redirectHttpsToHttp.internalValue = value.redirectHttpsToHttp;
      this._refererAcl.internalValue = value.refererAcl;
      this._responseHeadersHidingPolicy.internalValue = value.responseHeadersHidingPolicy;
      this._rewrite.internalValue = value.rewrite;
      this._secureKey.internalValue = value.secureKey;
      this._slice.internalValue = value.slice;
      this._sni.internalValue = value.sni;
      this._stale.internalValue = value.stale;
      this._staticRequestHeaders.internalValue = value.staticRequestHeaders;
      this._staticResponseHeaders.internalValue = value.staticResponseHeaders;
      this._tlsVersions.internalValue = value.tlsVersions;
      this._useDefaultLeChain.internalValue = value.useDefaultLeChain;
      this._userAgentAcl.internalValue = value.userAgentAcl;
      this._websockets.internalValue = value.websockets;
    }
  }

  // allowed_http_methods - computed: false, optional: true, required: false
  private _allowedHttpMethods = new CdnResourceOptionsAllowedHttpMethodsOutputReference(this, "allowed_http_methods");
  public get allowedHttpMethods() {
    return this._allowedHttpMethods;
  }
  public putAllowedHttpMethods(value: CdnResourceOptionsAllowedHttpMethods) {
    this._allowedHttpMethods.internalValue = value;
  }
  public resetAllowedHttpMethods() {
    this._allowedHttpMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHttpMethodsInput() {
    return this._allowedHttpMethods.internalValue;
  }

  // brotli_compression - computed: false, optional: true, required: false
  private _brotliCompression = new CdnResourceOptionsBrotliCompressionOutputReference(this, "brotli_compression");
  public get brotliCompression() {
    return this._brotliCompression;
  }
  public putBrotliCompression(value: CdnResourceOptionsBrotliCompression) {
    this._brotliCompression.internalValue = value;
  }
  public resetBrotliCompression() {
    this._brotliCompression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brotliCompressionInput() {
    return this._brotliCompression.internalValue;
  }

  // browser_cache_settings - computed: false, optional: true, required: false
  private _browserCacheSettings = new CdnResourceOptionsBrowserCacheSettingsOutputReference(this, "browser_cache_settings");
  public get browserCacheSettings() {
    return this._browserCacheSettings;
  }
  public putBrowserCacheSettings(value: CdnResourceOptionsBrowserCacheSettings) {
    this._browserCacheSettings.internalValue = value;
  }
  public resetBrowserCacheSettings() {
    this._browserCacheSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserCacheSettingsInput() {
    return this._browserCacheSettings.internalValue;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new CdnResourceOptionsCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: CdnResourceOptionsCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // disable_proxy_force_ranges - computed: false, optional: true, required: false
  private _disableProxyForceRanges = new CdnResourceOptionsDisableProxyForceRangesOutputReference(this, "disable_proxy_force_ranges");
  public get disableProxyForceRanges() {
    return this._disableProxyForceRanges;
  }
  public putDisableProxyForceRanges(value: CdnResourceOptionsDisableProxyForceRanges) {
    this._disableProxyForceRanges.internalValue = value;
  }
  public resetDisableProxyForceRanges() {
    this._disableProxyForceRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProxyForceRangesInput() {
    return this._disableProxyForceRanges.internalValue;
  }

  // edge_cache_settings - computed: false, optional: true, required: false
  private _edgeCacheSettings = new CdnResourceOptionsEdgeCacheSettingsOutputReference(this, "edge_cache_settings");
  public get edgeCacheSettings() {
    return this._edgeCacheSettings;
  }
  public putEdgeCacheSettings(value: CdnResourceOptionsEdgeCacheSettings) {
    this._edgeCacheSettings.internalValue = value;
  }
  public resetEdgeCacheSettings() {
    this._edgeCacheSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeCacheSettingsInput() {
    return this._edgeCacheSettings.internalValue;
  }

  // fetch_compressed - computed: false, optional: true, required: false
  private _fetchCompressed = new CdnResourceOptionsFetchCompressedOutputReference(this, "fetch_compressed");
  public get fetchCompressed() {
    return this._fetchCompressed;
  }
  public putFetchCompressed(value: CdnResourceOptionsFetchCompressed) {
    this._fetchCompressed.internalValue = value;
  }
  public resetFetchCompressed() {
    this._fetchCompressed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchCompressedInput() {
    return this._fetchCompressed.internalValue;
  }

  // follow_origin_redirect - computed: false, optional: true, required: false
  private _followOriginRedirect = new CdnResourceOptionsFollowOriginRedirectOutputReference(this, "follow_origin_redirect");
  public get followOriginRedirect() {
    return this._followOriginRedirect;
  }
  public putFollowOriginRedirect(value: CdnResourceOptionsFollowOriginRedirect) {
    this._followOriginRedirect.internalValue = value;
  }
  public resetFollowOriginRedirect() {
    this._followOriginRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followOriginRedirectInput() {
    return this._followOriginRedirect.internalValue;
  }

  // force_return - computed: false, optional: true, required: false
  private _forceReturn = new CdnResourceOptionsForceReturnOutputReference(this, "force_return");
  public get forceReturn() {
    return this._forceReturn;
  }
  public putForceReturn(value: CdnResourceOptionsForceReturn) {
    this._forceReturn.internalValue = value;
  }
  public resetForceReturn() {
    this._forceReturn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceReturnInput() {
    return this._forceReturn.internalValue;
  }

  // forward_host_header - computed: false, optional: true, required: false
  private _forwardHostHeader = new CdnResourceOptionsForwardHostHeaderOutputReference(this, "forward_host_header");
  public get forwardHostHeader() {
    return this._forwardHostHeader;
  }
  public putForwardHostHeader(value: CdnResourceOptionsForwardHostHeader) {
    this._forwardHostHeader.internalValue = value;
  }
  public resetForwardHostHeader() {
    this._forwardHostHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHostHeaderInput() {
    return this._forwardHostHeader.internalValue;
  }

  // geo_acl - computed: false, optional: true, required: false
  private _geoAcl = new CdnResourceOptionsGeoAclOutputReference(this, "geo_acl");
  public get geoAcl() {
    return this._geoAcl;
  }
  public putGeoAcl(value: CdnResourceOptionsGeoAcl) {
    this._geoAcl.internalValue = value;
  }
  public resetGeoAcl() {
    this._geoAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoAclInput() {
    return this._geoAcl.internalValue;
  }

  // gzip_compression - computed: false, optional: true, required: false
  private _gzipCompression = new CdnResourceOptionsGzipCompressionOutputReference(this, "gzip_compression");
  public get gzipCompression() {
    return this._gzipCompression;
  }
  public putGzipCompression(value: CdnResourceOptionsGzipCompression) {
    this._gzipCompression.internalValue = value;
  }
  public resetGzipCompression() {
    this._gzipCompression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipCompressionInput() {
    return this._gzipCompression.internalValue;
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader = new CdnResourceOptionsHostHeaderOutputReference(this, "host_header");
  public get hostHeader() {
    return this._hostHeader;
  }
  public putHostHeader(value: CdnResourceOptionsHostHeader) {
    this._hostHeader.internalValue = value;
  }
  public resetHostHeader() {
    this._hostHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader.internalValue;
  }

  // http3_enabled - computed: false, optional: true, required: false
  private _http3Enabled = new CdnResourceOptionsHttp3EnabledOutputReference(this, "http3_enabled");
  public get http3Enabled() {
    return this._http3Enabled;
  }
  public putHttp3Enabled(value: CdnResourceOptionsHttp3Enabled) {
    this._http3Enabled.internalValue = value;
  }
  public resetHttp3Enabled() {
    this._http3Enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http3EnabledInput() {
    return this._http3Enabled.internalValue;
  }

  // ignore_cookie - computed: false, optional: true, required: false
  private _ignoreCookie = new CdnResourceOptionsIgnoreCookieOutputReference(this, "ignore_cookie");
  public get ignoreCookie() {
    return this._ignoreCookie;
  }
  public putIgnoreCookie(value: CdnResourceOptionsIgnoreCookie) {
    this._ignoreCookie.internalValue = value;
  }
  public resetIgnoreCookie() {
    this._ignoreCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCookieInput() {
    return this._ignoreCookie.internalValue;
  }

  // ignore_query_string - computed: false, optional: true, required: false
  private _ignoreQueryString = new CdnResourceOptionsIgnoreQueryStringOutputReference(this, "ignore_query_string");
  public get ignoreQueryString() {
    return this._ignoreQueryString;
  }
  public putIgnoreQueryString(value: CdnResourceOptionsIgnoreQueryString) {
    this._ignoreQueryString.internalValue = value;
  }
  public resetIgnoreQueryString() {
    this._ignoreQueryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreQueryStringInput() {
    return this._ignoreQueryString.internalValue;
  }

  // image_stack - computed: false, optional: true, required: false
  private _imageStack = new CdnResourceOptionsImageStackOutputReference(this, "image_stack");
  public get imageStack() {
    return this._imageStack;
  }
  public putImageStack(value: CdnResourceOptionsImageStack) {
    this._imageStack.internalValue = value;
  }
  public resetImageStack() {
    this._imageStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageStackInput() {
    return this._imageStack.internalValue;
  }

  // ip_address_acl - computed: false, optional: true, required: false
  private _ipAddressAcl = new CdnResourceOptionsIpAddressAclOutputReference(this, "ip_address_acl");
  public get ipAddressAcl() {
    return this._ipAddressAcl;
  }
  public putIpAddressAcl(value: CdnResourceOptionsIpAddressAcl) {
    this._ipAddressAcl.internalValue = value;
  }
  public resetIpAddressAcl() {
    this._ipAddressAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressAclInput() {
    return this._ipAddressAcl.internalValue;
  }

  // limit_bandwidth - computed: false, optional: true, required: false
  private _limitBandwidth = new CdnResourceOptionsLimitBandwidthOutputReference(this, "limit_bandwidth");
  public get limitBandwidth() {
    return this._limitBandwidth;
  }
  public putLimitBandwidth(value: CdnResourceOptionsLimitBandwidth) {
    this._limitBandwidth.internalValue = value;
  }
  public resetLimitBandwidth() {
    this._limitBandwidth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitBandwidthInput() {
    return this._limitBandwidth.internalValue;
  }

  // proxy_cache_methods_set - computed: false, optional: true, required: false
  private _proxyCacheMethodsSet = new CdnResourceOptionsProxyCacheMethodsSetOutputReference(this, "proxy_cache_methods_set");
  public get proxyCacheMethodsSet() {
    return this._proxyCacheMethodsSet;
  }
  public putProxyCacheMethodsSet(value: CdnResourceOptionsProxyCacheMethodsSet) {
    this._proxyCacheMethodsSet.internalValue = value;
  }
  public resetProxyCacheMethodsSet() {
    this._proxyCacheMethodsSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCacheMethodsSetInput() {
    return this._proxyCacheMethodsSet.internalValue;
  }

  // query_params_blacklist - computed: false, optional: true, required: false
  private _queryParamsBlacklist = new CdnResourceOptionsQueryParamsBlacklistStructOutputReference(this, "query_params_blacklist");
  public get queryParamsBlacklist() {
    return this._queryParamsBlacklist;
  }
  public putQueryParamsBlacklist(value: CdnResourceOptionsQueryParamsBlacklistStruct) {
    this._queryParamsBlacklist.internalValue = value;
  }
  public resetQueryParamsBlacklist() {
    this._queryParamsBlacklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsBlacklistInput() {
    return this._queryParamsBlacklist.internalValue;
  }

  // query_params_whitelist - computed: false, optional: true, required: false
  private _queryParamsWhitelist = new CdnResourceOptionsQueryParamsWhitelistStructOutputReference(this, "query_params_whitelist");
  public get queryParamsWhitelist() {
    return this._queryParamsWhitelist;
  }
  public putQueryParamsWhitelist(value: CdnResourceOptionsQueryParamsWhitelistStruct) {
    this._queryParamsWhitelist.internalValue = value;
  }
  public resetQueryParamsWhitelist() {
    this._queryParamsWhitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsWhitelistInput() {
    return this._queryParamsWhitelist.internalValue;
  }

  // redirect_http_to_https - computed: false, optional: true, required: false
  private _redirectHttpToHttps = new CdnResourceOptionsRedirectHttpToHttpsOutputReference(this, "redirect_http_to_https");
  public get redirectHttpToHttps() {
    return this._redirectHttpToHttps;
  }
  public putRedirectHttpToHttps(value: CdnResourceOptionsRedirectHttpToHttps) {
    this._redirectHttpToHttps.internalValue = value;
  }
  public resetRedirectHttpToHttps() {
    this._redirectHttpToHttps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHttpToHttpsInput() {
    return this._redirectHttpToHttps.internalValue;
  }

  // redirect_https_to_http - computed: false, optional: true, required: false
  private _redirectHttpsToHttp = new CdnResourceOptionsRedirectHttpsToHttpOutputReference(this, "redirect_https_to_http");
  public get redirectHttpsToHttp() {
    return this._redirectHttpsToHttp;
  }
  public putRedirectHttpsToHttp(value: CdnResourceOptionsRedirectHttpsToHttp) {
    this._redirectHttpsToHttp.internalValue = value;
  }
  public resetRedirectHttpsToHttp() {
    this._redirectHttpsToHttp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHttpsToHttpInput() {
    return this._redirectHttpsToHttp.internalValue;
  }

  // referer_acl - computed: false, optional: true, required: false
  private _refererAcl = new CdnResourceOptionsRefererAclOutputReference(this, "referer_acl");
  public get refererAcl() {
    return this._refererAcl;
  }
  public putRefererAcl(value: CdnResourceOptionsRefererAcl) {
    this._refererAcl.internalValue = value;
  }
  public resetRefererAcl() {
    this._refererAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererAclInput() {
    return this._refererAcl.internalValue;
  }

  // response_headers_hiding_policy - computed: false, optional: true, required: false
  private _responseHeadersHidingPolicy = new CdnResourceOptionsResponseHeadersHidingPolicyOutputReference(this, "response_headers_hiding_policy");
  public get responseHeadersHidingPolicy() {
    return this._responseHeadersHidingPolicy;
  }
  public putResponseHeadersHidingPolicy(value: CdnResourceOptionsResponseHeadersHidingPolicy) {
    this._responseHeadersHidingPolicy.internalValue = value;
  }
  public resetResponseHeadersHidingPolicy() {
    this._responseHeadersHidingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersHidingPolicyInput() {
    return this._responseHeadersHidingPolicy.internalValue;
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new CdnResourceOptionsRewriteOutputReference(this, "rewrite");
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: CdnResourceOptionsRewrite) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }

  // secure_key - computed: false, optional: true, required: false
  private _secureKey = new CdnResourceOptionsSecureKeyOutputReference(this, "secure_key");
  public get secureKey() {
    return this._secureKey;
  }
  public putSecureKey(value: CdnResourceOptionsSecureKey) {
    this._secureKey.internalValue = value;
  }
  public resetSecureKey() {
    this._secureKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureKeyInput() {
    return this._secureKey.internalValue;
  }

  // slice - computed: false, optional: true, required: false
  private _slice = new CdnResourceOptionsSliceOutputReference(this, "slice");
  public get slice() {
    return this._slice;
  }
  public putSlice(value: CdnResourceOptionsSlice) {
    this._slice.internalValue = value;
  }
  public resetSlice() {
    this._slice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliceInput() {
    return this._slice.internalValue;
  }

  // sni - computed: false, optional: true, required: false
  private _sni = new CdnResourceOptionsSniOutputReference(this, "sni");
  public get sni() {
    return this._sni;
  }
  public putSni(value: CdnResourceOptionsSni) {
    this._sni.internalValue = value;
  }
  public resetSni() {
    this._sni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni.internalValue;
  }

  // stale - computed: false, optional: true, required: false
  private _stale = new CdnResourceOptionsStaleOutputReference(this, "stale");
  public get stale() {
    return this._stale;
  }
  public putStale(value: CdnResourceOptionsStale) {
    this._stale.internalValue = value;
  }
  public resetStale() {
    this._stale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleInput() {
    return this._stale.internalValue;
  }

  // static_request_headers - computed: false, optional: true, required: false
  private _staticRequestHeaders = new CdnResourceOptionsStaticRequestHeadersOutputReference(this, "static_request_headers");
  public get staticRequestHeaders() {
    return this._staticRequestHeaders;
  }
  public putStaticRequestHeaders(value: CdnResourceOptionsStaticRequestHeaders) {
    this._staticRequestHeaders.internalValue = value;
  }
  public resetStaticRequestHeaders() {
    this._staticRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRequestHeadersInput() {
    return this._staticRequestHeaders.internalValue;
  }

  // static_response_headers - computed: false, optional: true, required: false
  private _staticResponseHeaders = new CdnResourceOptionsStaticResponseHeadersOutputReference(this, "static_response_headers");
  public get staticResponseHeaders() {
    return this._staticResponseHeaders;
  }
  public putStaticResponseHeaders(value: CdnResourceOptionsStaticResponseHeaders) {
    this._staticResponseHeaders.internalValue = value;
  }
  public resetStaticResponseHeaders() {
    this._staticResponseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticResponseHeadersInput() {
    return this._staticResponseHeaders.internalValue;
  }

  // tls_versions - computed: false, optional: true, required: false
  private _tlsVersions = new CdnResourceOptionsTlsVersionsOutputReference(this, "tls_versions");
  public get tlsVersions() {
    return this._tlsVersions;
  }
  public putTlsVersions(value: CdnResourceOptionsTlsVersions) {
    this._tlsVersions.internalValue = value;
  }
  public resetTlsVersions() {
    this._tlsVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionsInput() {
    return this._tlsVersions.internalValue;
  }

  // use_default_le_chain - computed: false, optional: true, required: false
  private _useDefaultLeChain = new CdnResourceOptionsUseDefaultLeChainOutputReference(this, "use_default_le_chain");
  public get useDefaultLeChain() {
    return this._useDefaultLeChain;
  }
  public putUseDefaultLeChain(value: CdnResourceOptionsUseDefaultLeChain) {
    this._useDefaultLeChain.internalValue = value;
  }
  public resetUseDefaultLeChain() {
    this._useDefaultLeChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultLeChainInput() {
    return this._useDefaultLeChain.internalValue;
  }

  // user_agent_acl - computed: false, optional: true, required: false
  private _userAgentAcl = new CdnResourceOptionsUserAgentAclOutputReference(this, "user_agent_acl");
  public get userAgentAcl() {
    return this._userAgentAcl;
  }
  public putUserAgentAcl(value: CdnResourceOptionsUserAgentAcl) {
    this._userAgentAcl.internalValue = value;
  }
  public resetUserAgentAcl() {
    this._userAgentAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentAclInput() {
    return this._userAgentAcl.internalValue;
  }

  // websockets - computed: false, optional: true, required: false
  private _websockets = new CdnResourceOptionsWebsocketsOutputReference(this, "websockets");
  public get websockets() {
    return this._websockets;
  }
  public putWebsockets(value: CdnResourceOptionsWebsockets) {
    this._websockets.internalValue = value;
  }
  public resetWebsockets() {
    this._websockets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketsInput() {
    return this._websockets.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource edgecenter_cdn_resource}
*/
export class CdnResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_cdn_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnResource to import
  * @param importFromId The id of the existing CdnResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_cdn_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_resource edgecenter_cdn_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnResourceConfig
  */
  public constructor(scope: Construct, id: string, config: CdnResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_cdn_resource',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._cname = config.cname;
    this._description = config.description;
    this._id = config.id;
    this._issueLeCert = config.issueLeCert;
    this._origin = config.origin;
    this._originGroup = config.originGroup;
    this._originProtocol = config.originProtocol;
    this._secondaryHostnames = config.secondaryHostnames;
    this._sslAutomated = config.sslAutomated;
    this._sslData = config.sslData;
    this._sslEnabled = config.sslEnabled;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // cname - computed: false, optional: false, required: true
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
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

  // issue_le_cert - computed: true, optional: true, required: false
  private _issueLeCert?: boolean | cdktf.IResolvable; 
  public get issueLeCert() {
    return this.getBooleanAttribute('issue_le_cert');
  }
  public set issueLeCert(value: boolean | cdktf.IResolvable) {
    this._issueLeCert = value;
  }
  public resetIssueLeCert() {
    this._issueLeCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueLeCertInput() {
    return this._issueLeCert;
  }

  // origin - computed: true, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // origin_group - computed: true, optional: true, required: false
  private _originGroup?: number; 
  public get originGroup() {
    return this.getNumberAttribute('origin_group');
  }
  public set originGroup(value: number) {
    this._originGroup = value;
  }
  public resetOriginGroup() {
    this._originGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupInput() {
    return this._originGroup;
  }

  // origin_protocol - computed: true, optional: true, required: false
  private _originProtocol?: string; 
  public get originProtocol() {
    return this.getStringAttribute('origin_protocol');
  }
  public set originProtocol(value: string) {
    this._originProtocol = value;
  }
  public resetOriginProtocol() {
    this._originProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originProtocolInput() {
    return this._originProtocol;
  }

  // secondary_hostnames - computed: true, optional: true, required: false
  private _secondaryHostnames?: string[]; 
  public get secondaryHostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_hostnames'));
  }
  public set secondaryHostnames(value: string[]) {
    this._secondaryHostnames = value;
  }
  public resetSecondaryHostnames() {
    this._secondaryHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryHostnamesInput() {
    return this._secondaryHostnames;
  }

  // ssl_automated - computed: true, optional: true, required: false
  private _sslAutomated?: boolean | cdktf.IResolvable; 
  public get sslAutomated() {
    return this.getBooleanAttribute('ssl_automated');
  }
  public set sslAutomated(value: boolean | cdktf.IResolvable) {
    this._sslAutomated = value;
  }
  public resetSslAutomated() {
    this._sslAutomated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAutomatedInput() {
    return this._sslAutomated;
  }

  // ssl_data - computed: false, optional: true, required: false
  private _sslData?: number; 
  public get sslData() {
    return this.getNumberAttribute('ssl_data');
  }
  public set sslData(value: number) {
    this._sslData = value;
  }
  public resetSslData() {
    this._sslData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDataInput() {
    return this._sslData;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // ssl_le_enabled - computed: true, optional: false, required: false
  public get sslLeEnabled() {
    return this.getBooleanAttribute('ssl_le_enabled');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // options - computed: false, optional: true, required: false
  private _options = new CdnResourceOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: CdnResourceOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      cname: cdktf.stringToTerraform(this._cname),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      issue_le_cert: cdktf.booleanToTerraform(this._issueLeCert),
      origin: cdktf.stringToTerraform(this._origin),
      origin_group: cdktf.numberToTerraform(this._originGroup),
      origin_protocol: cdktf.stringToTerraform(this._originProtocol),
      secondary_hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryHostnames),
      ssl_automated: cdktf.booleanToTerraform(this._sslAutomated),
      ssl_data: cdktf.numberToTerraform(this._sslData),
      ssl_enabled: cdktf.booleanToTerraform(this._sslEnabled),
      options: cdnResourceOptionsToTerraform(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cname: {
        value: cdktf.stringToHclTerraform(this._cname),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issue_le_cert: {
        value: cdktf.booleanToHclTerraform(this._issueLeCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_group: {
        value: cdktf.numberToHclTerraform(this._originGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      origin_protocol: {
        value: cdktf.stringToHclTerraform(this._originProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryHostnames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_automated: {
        value: cdktf.booleanToHclTerraform(this._sslAutomated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_data: {
        value: cdktf.numberToHclTerraform(this._sslData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_enabled: {
        value: cdktf.booleanToHclTerraform(this._sslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      options: {
        value: cdnResourceOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnResourceOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
