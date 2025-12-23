// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#active CdnRule#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#id CdnRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enter a location name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#name CdnRule#name}
  */
  readonly name: string;
  /**
  * Specify a source group ID for the location. Set to "null" to inherit the source group from the CDN resource settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#origin_group CdnRule#origin_group}
  */
  readonly originGroup?: number;
  /**
  * Choose the protocol that will be used by CDN servers to request content from the source. If not specified, the HTTP protocol will be used. Allowed values are "HTTPS", "HTTP", or "MATCH". If "MATCH" is chosen, content on the source should be available over both HTTP and HTTPS protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#origin_protocol CdnRule#origin_protocol}
  */
  readonly originProtocol?: string;
  /**
  * Enter the CDN resource ID to which the Origin shielding should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#resource_id CdnRule#resource_id}
  */
  readonly resourceId: number;
  /**
  * Use regex to specify the location pattern to which the settings will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#rule CdnRule#rule}
  */
  readonly rule: string;
  /**
  * Specify the location weight to determine the order in which the locations are applied: from the lowest (0) to the highest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#weight CdnRule#weight}
  */
  readonly weight?: number;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#options CdnRule#options}
  */
  readonly options?: CdnRuleOptions;
}
export interface CdnRuleOptionsAllowedHttpMethods {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Allowed values are "GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", and "OPTIONS".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: string[];
}

export function cdnRuleOptionsAllowedHttpMethodsToTerraform(struct?: CdnRuleOptionsAllowedHttpMethodsOutputReference | CdnRuleOptionsAllowedHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnRuleOptionsAllowedHttpMethodsToHclTerraform(struct?: CdnRuleOptionsAllowedHttpMethodsOutputReference | CdnRuleOptionsAllowedHttpMethods): any {
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

export class CdnRuleOptionsAllowedHttpMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsAllowedHttpMethods | undefined {
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

  public set internalValue(value: CdnRuleOptionsAllowedHttpMethods | undefined) {
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
export interface CdnRuleOptionsBrotliCompression {
  /**
  * Enable or disable the option. Allowed values are "true" or "false". 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Allowed values are "application/javascript", "application/json", "application/vnd.ms-fontobject", "application/x-font-ttf", "application/x-javascript", "application/xml", "application/xml+rss", "image/svg+xml", "image/x-icon", "text/css", "text/html", "text/javascript", "text/plain", "text/xml".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: string[];
}

export function cdnRuleOptionsBrotliCompressionToTerraform(struct?: CdnRuleOptionsBrotliCompressionOutputReference | CdnRuleOptionsBrotliCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnRuleOptionsBrotliCompressionToHclTerraform(struct?: CdnRuleOptionsBrotliCompressionOutputReference | CdnRuleOptionsBrotliCompression): any {
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

export class CdnRuleOptionsBrotliCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsBrotliCompression | undefined {
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

  public set internalValue(value: CdnRuleOptionsBrotliCompression | undefined) {
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
export interface CdnRuleOptionsBrowserCacheSettings {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the cache lifetime if the CDN controlled option is chosen. If the value is empty, the Origin controlled option will be enabled and the cache lifetime will be inherited from the source. Set to "0s" to disable browser caching. The value only applies for the HTTP 200, 201, 204, 206, 301, 302, 303, 304, 307, 308 response status codes. Responses with other HTTP status codes will not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value?: string;
}

export function cdnRuleOptionsBrowserCacheSettingsToTerraform(struct?: CdnRuleOptionsBrowserCacheSettingsOutputReference | CdnRuleOptionsBrowserCacheSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsBrowserCacheSettingsToHclTerraform(struct?: CdnRuleOptionsBrowserCacheSettingsOutputReference | CdnRuleOptionsBrowserCacheSettings): any {
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

export class CdnRuleOptionsBrowserCacheSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsBrowserCacheSettings | undefined {
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

  public set internalValue(value: CdnRuleOptionsBrowserCacheSettings | undefined) {
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
export interface CdnRuleOptionsCors {
  /**
  * Add the Access-Control-Allow-Origin header to the response regardless of the HTTP response status code. Allowed values are "true" or "false". If set to "false", the header is only added to the responses with HTTP 200, 201, 204, 206, 301, 302, 303, 304, 307, or 308 response status codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#always CdnRule#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add the value of the Access-Control-Allow-Origin header. Allowed values are "*", "domain.com" or other domain name, or "$http_origin".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: string[];
}

export function cdnRuleOptionsCorsToTerraform(struct?: CdnRuleOptionsCorsOutputReference | CdnRuleOptionsCors): any {
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


export function cdnRuleOptionsCorsToHclTerraform(struct?: CdnRuleOptionsCorsOutputReference | CdnRuleOptionsCors): any {
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

export class CdnRuleOptionsCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsCors | undefined {
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

  public set internalValue(value: CdnRuleOptionsCors | undefined) {
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
export interface CdnRuleOptionsDisableProxyForceRanges {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsDisableProxyForceRangesToTerraform(struct?: CdnRuleOptionsDisableProxyForceRangesOutputReference | CdnRuleOptionsDisableProxyForceRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsDisableProxyForceRangesToHclTerraform(struct?: CdnRuleOptionsDisableProxyForceRangesOutputReference | CdnRuleOptionsDisableProxyForceRanges): any {
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

export class CdnRuleOptionsDisableProxyForceRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsDisableProxyForceRanges | undefined {
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

  public set internalValue(value: CdnRuleOptionsDisableProxyForceRanges | undefined) {
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
export interface CdnRuleOptionsEdgeCacheSettings {
  /**
  * Set the caching time in seconds for certain HTTP status codes. Use "any" to specify the caching time for all HTTP response status codes. Use "0s" to disable caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#custom_values CdnRule#custom_values}
  */
  readonly customValues?: { [key: string]: string };
  /**
  * Set the caching time in seconds. Use the field if you want your source to control the caching time of the HTTP 200, 201, 204, 206, 301, 302, 303, 304, 307, 308 response status codes, and if a source server does not have any caching HTTP headers. Responses with other HTTP status codes will not be cached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#default CdnRule#default}
  */
  readonly default?: string;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the caching time in seconds. Use the field if you want CDN to control the caching time of the HTTP 200, 206, 301, and 302 response status codes. Responses with HTTP 4xx, 5xx status codes will not be cached. Use the "custom_values" field to specify the custom caching time for responses with specific HTTP status codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value?: string;
}

export function cdnRuleOptionsEdgeCacheSettingsToTerraform(struct?: CdnRuleOptionsEdgeCacheSettingsOutputReference | CdnRuleOptionsEdgeCacheSettings): any {
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


export function cdnRuleOptionsEdgeCacheSettingsToHclTerraform(struct?: CdnRuleOptionsEdgeCacheSettingsOutputReference | CdnRuleOptionsEdgeCacheSettings): any {
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

export class CdnRuleOptionsEdgeCacheSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsEdgeCacheSettings | undefined {
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

  public set internalValue(value: CdnRuleOptionsEdgeCacheSettings | undefined) {
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
export interface CdnRuleOptionsFetchCompressed {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsFetchCompressedToTerraform(struct?: CdnRuleOptionsFetchCompressedOutputReference | CdnRuleOptionsFetchCompressed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsFetchCompressedToHclTerraform(struct?: CdnRuleOptionsFetchCompressedOutputReference | CdnRuleOptionsFetchCompressed): any {
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

export class CdnRuleOptionsFetchCompressedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsFetchCompressed | undefined {
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

  public set internalValue(value: CdnRuleOptionsFetchCompressed | undefined) {
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
export interface CdnRuleOptionsFollowOriginRedirect {
  /**
  * Add the redirect HTTP status codes returned by the source. Allowed values are "301", "302", "303", "307", "308".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#codes CdnRule#codes}
  */
  readonly codes: number[];
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Use the redirect target domain as a Host header, or leave it the same as the value of the Change Host header option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#use_host CdnRule#use_host}
  */
  readonly useHost?: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsFollowOriginRedirectToTerraform(struct?: CdnRuleOptionsFollowOriginRedirectOutputReference | CdnRuleOptionsFollowOriginRedirect): any {
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


export function cdnRuleOptionsFollowOriginRedirectToHclTerraform(struct?: CdnRuleOptionsFollowOriginRedirectOutputReference | CdnRuleOptionsFollowOriginRedirect): any {
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

export class CdnRuleOptionsFollowOriginRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsFollowOriginRedirect | undefined {
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

  public set internalValue(value: CdnRuleOptionsFollowOriginRedirect | undefined) {
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
export interface CdnRuleOptionsForceReturn {
  /**
  * Add the URL for redirection or the text message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#body CdnRule#body}
  */
  readonly body?: string;
  /**
  * Set the HTTP status code that should be returned by the CDN. Allowed values are from "100" to "599".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#code CdnRule#code}
  */
  readonly code: number;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsForceReturnToTerraform(struct?: CdnRuleOptionsForceReturnOutputReference | CdnRuleOptionsForceReturn): any {
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


export function cdnRuleOptionsForceReturnToHclTerraform(struct?: CdnRuleOptionsForceReturnOutputReference | CdnRuleOptionsForceReturn): any {
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

export class CdnRuleOptionsForceReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsForceReturn | undefined {
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

  public set internalValue(value: CdnRuleOptionsForceReturn | undefined) {
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
export interface CdnRuleOptionsForwardHostHeader {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsForwardHostHeaderToTerraform(struct?: CdnRuleOptionsForwardHostHeaderOutputReference | CdnRuleOptionsForwardHostHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsForwardHostHeaderToHclTerraform(struct?: CdnRuleOptionsForwardHostHeaderOutputReference | CdnRuleOptionsForwardHostHeader): any {
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

export class CdnRuleOptionsForwardHostHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsForwardHostHeader | undefined {
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

  public set internalValue(value: CdnRuleOptionsForwardHostHeader | undefined) {
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
export interface CdnRuleOptionsGeoAclExceptedValues {
  /**
  * Two-letter country code as defined by ISO 3166-1 alpha-2 (e.g., 'US' for United States, 'RU' for Russia).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#key CdnRule#key}
  */
  readonly key: string;
  /**
  * List of region codes for the specified country, using short English names from ISO 3166-2 (e.g., 'CA' for California in 'US', 'MOW' for Moscow in 'RU').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#values CdnRule#values}
  */
  readonly values: string[];
}

export function cdnRuleOptionsGeoAclExceptedValuesToTerraform(struct?: CdnRuleOptionsGeoAclExceptedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function cdnRuleOptionsGeoAclExceptedValuesToHclTerraform(struct?: CdnRuleOptionsGeoAclExceptedValues | cdktf.IResolvable): any {
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

export class CdnRuleOptionsGeoAclExceptedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnRuleOptionsGeoAclExceptedValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnRuleOptionsGeoAclExceptedValues | cdktf.IResolvable | undefined) {
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

export class CdnRuleOptionsGeoAclExceptedValuesList extends cdktf.ComplexList {
  public internalValue? : CdnRuleOptionsGeoAclExceptedValues[] | cdktf.IResolvable

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
  public get(index: number): CdnRuleOptionsGeoAclExceptedValuesOutputReference {
    return new CdnRuleOptionsGeoAclExceptedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnRuleOptionsGeoAcl {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Shows the chosen policy type. Has either "allow" or "deny" value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#policy_type CdnRule#policy_type}
  */
  readonly policyType?: string;
  /**
  * excepted_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#excepted_values CdnRule#excepted_values}
  */
  readonly exceptedValues: CdnRuleOptionsGeoAclExceptedValues[] | cdktf.IResolvable;
}

export function cdnRuleOptionsGeoAclToTerraform(struct?: CdnRuleOptionsGeoAclOutputReference | CdnRuleOptionsGeoAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    excepted_values: cdktf.listMapper(cdnRuleOptionsGeoAclExceptedValuesToTerraform, true)(struct!.exceptedValues),
  }
}


export function cdnRuleOptionsGeoAclToHclTerraform(struct?: CdnRuleOptionsGeoAclOutputReference | CdnRuleOptionsGeoAcl): any {
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
      value: cdktf.listMapperHcl(cdnRuleOptionsGeoAclExceptedValuesToHclTerraform, true)(struct!.exceptedValues),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsGeoAclExceptedValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnRuleOptionsGeoAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsGeoAcl | undefined {
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

  public set internalValue(value: CdnRuleOptionsGeoAcl | undefined) {
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
  private _exceptedValues = new CdnRuleOptionsGeoAclExceptedValuesList(this, "excepted_values", false);
  public get exceptedValues() {
    return this._exceptedValues;
  }
  public putExceptedValues(value: CdnRuleOptionsGeoAclExceptedValues[] | cdktf.IResolvable) {
    this._exceptedValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptedValuesInput() {
    return this._exceptedValues.internalValue;
  }
}
export interface CdnRuleOptionsGzipCompression {
  /**
  * Enable or disable the option. Allowed values are "true" or "false". 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Allowed values are "application/dash+xml", "application/javascript", "application/javascript", "application/vnd.apple.mpegurl", "application/vnd.ms-fontobject", "application/wasm", "application/x-font-opentype", "application/x-font-ttf", "application/x-javascript", "application/x-mpegURL", "application/x-subrip", "application/xml", "application/xml+rss", "font/woff", "font/woff2", "image/svg+xml", "text/css", "text/html", "text/javascript", "text/plain", "text/vtt", "text/xml".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: string[];
}

export function cdnRuleOptionsGzipCompressionToTerraform(struct?: CdnRuleOptionsGzipCompressionOutputReference | CdnRuleOptionsGzipCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnRuleOptionsGzipCompressionToHclTerraform(struct?: CdnRuleOptionsGzipCompressionOutputReference | CdnRuleOptionsGzipCompression): any {
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

export class CdnRuleOptionsGzipCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsGzipCompression | undefined {
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

  public set internalValue(value: CdnRuleOptionsGzipCompression | undefined) {
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
export interface CdnRuleOptionsHostHeader {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the Host header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: string;
}

export function cdnRuleOptionsHostHeaderToTerraform(struct?: CdnRuleOptionsHostHeaderOutputReference | CdnRuleOptionsHostHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsHostHeaderToHclTerraform(struct?: CdnRuleOptionsHostHeaderOutputReference | CdnRuleOptionsHostHeader): any {
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

export class CdnRuleOptionsHostHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsHostHeader | undefined {
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

  public set internalValue(value: CdnRuleOptionsHostHeader | undefined) {
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
export interface CdnRuleOptionsIgnoreCookie {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsIgnoreCookieToTerraform(struct?: CdnRuleOptionsIgnoreCookieOutputReference | CdnRuleOptionsIgnoreCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsIgnoreCookieToHclTerraform(struct?: CdnRuleOptionsIgnoreCookieOutputReference | CdnRuleOptionsIgnoreCookie): any {
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

export class CdnRuleOptionsIgnoreCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsIgnoreCookie | undefined {
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

  public set internalValue(value: CdnRuleOptionsIgnoreCookie | undefined) {
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
export interface CdnRuleOptionsIgnoreQueryString {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false". If set to "true", Ignore all setting is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsIgnoreQueryStringToTerraform(struct?: CdnRuleOptionsIgnoreQueryStringOutputReference | CdnRuleOptionsIgnoreQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsIgnoreQueryStringToHclTerraform(struct?: CdnRuleOptionsIgnoreQueryStringOutputReference | CdnRuleOptionsIgnoreQueryString): any {
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

export class CdnRuleOptionsIgnoreQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsIgnoreQueryString | undefined {
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

  public set internalValue(value: CdnRuleOptionsIgnoreQueryString | undefined) {
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
export interface CdnRuleOptionsImageStack {
  /**
  * Allow to convert the JPG and PNG images into AVIF format when supported by the end user's browser. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#avif_enabled CdnRule#avif_enabled}
  */
  readonly avifEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify if the PNG images should be compressed without the quality loss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#png_lossless CdnRule#png_lossless}
  */
  readonly pngLossless?: boolean | cdktf.IResolvable;
  /**
  * Set the quality of the JPG and PNG images after conversion. The higher the value, the better the image quality and the larger the file size after conversion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#quality CdnRule#quality}
  */
  readonly quality: number;
  /**
  * Allow to convert the JPG and PNG images into WebP format when supported by the end user's browser. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#webp_enabled CdnRule#webp_enabled}
  */
  readonly webpEnabled?: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsImageStackToTerraform(struct?: CdnRuleOptionsImageStackOutputReference | CdnRuleOptionsImageStack): any {
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


export function cdnRuleOptionsImageStackToHclTerraform(struct?: CdnRuleOptionsImageStackOutputReference | CdnRuleOptionsImageStack): any {
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

export class CdnRuleOptionsImageStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsImageStack | undefined {
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

  public set internalValue(value: CdnRuleOptionsImageStack | undefined) {
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
export interface CdnRuleOptionsIpAddressAcl {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add the list of IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#excepted_values CdnRule#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Set the policy type. Allowed values are "allow" or "deny". The policy allows or denies access to content from all IP addresses except those specified in the "excepted_values" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#policy_type CdnRule#policy_type}
  */
  readonly policyType: string;
}

export function cdnRuleOptionsIpAddressAclToTerraform(struct?: CdnRuleOptionsIpAddressAclOutputReference | CdnRuleOptionsIpAddressAcl): any {
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


export function cdnRuleOptionsIpAddressAclToHclTerraform(struct?: CdnRuleOptionsIpAddressAclOutputReference | CdnRuleOptionsIpAddressAcl): any {
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

export class CdnRuleOptionsIpAddressAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsIpAddressAcl | undefined {
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

  public set internalValue(value: CdnRuleOptionsIpAddressAcl | undefined) {
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
export interface CdnRuleOptionsLimitBandwidth {
  /**
  * Specify the amount of downloaded data in KB after which the user will be rate limited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#buffer CdnRule#buffer}
  */
  readonly buffer?: number;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the speed limit type. Allowed values are "static" or "dynamic". If set to "static", use the "speed" and "buffer" fields. If set to "dynamic", the speed is limited according to the "?speed" and "?buffer" query parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#limit_type CdnRule#limit_type}
  */
  readonly limitType: string;
  /**
  * Set the maximum download speed per connection in KB/s. Must be greater than "0".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#speed CdnRule#speed}
  */
  readonly speed?: number;
}

export function cdnRuleOptionsLimitBandwidthToTerraform(struct?: CdnRuleOptionsLimitBandwidthOutputReference | CdnRuleOptionsLimitBandwidth): any {
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


export function cdnRuleOptionsLimitBandwidthToHclTerraform(struct?: CdnRuleOptionsLimitBandwidthOutputReference | CdnRuleOptionsLimitBandwidth): any {
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

export class CdnRuleOptionsLimitBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsLimitBandwidth | undefined {
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

  public set internalValue(value: CdnRuleOptionsLimitBandwidth | undefined) {
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
export interface CdnRuleOptionsProxyCacheMethodsSet {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsProxyCacheMethodsSetToTerraform(struct?: CdnRuleOptionsProxyCacheMethodsSetOutputReference | CdnRuleOptionsProxyCacheMethodsSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsProxyCacheMethodsSetToHclTerraform(struct?: CdnRuleOptionsProxyCacheMethodsSetOutputReference | CdnRuleOptionsProxyCacheMethodsSet): any {
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

export class CdnRuleOptionsProxyCacheMethodsSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsProxyCacheMethodsSet | undefined {
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

  public set internalValue(value: CdnRuleOptionsProxyCacheMethodsSet | undefined) {
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
export interface CdnRuleOptionsQueryParamsBlacklistStruct {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add the list of params that should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: string[];
}

export function cdnRuleOptionsQueryParamsBlacklistStructToTerraform(struct?: CdnRuleOptionsQueryParamsBlacklistStructOutputReference | CdnRuleOptionsQueryParamsBlacklistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnRuleOptionsQueryParamsBlacklistStructToHclTerraform(struct?: CdnRuleOptionsQueryParamsBlacklistStructOutputReference | CdnRuleOptionsQueryParamsBlacklistStruct): any {
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

export class CdnRuleOptionsQueryParamsBlacklistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsQueryParamsBlacklistStruct | undefined {
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

  public set internalValue(value: CdnRuleOptionsQueryParamsBlacklistStruct | undefined) {
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
export interface CdnRuleOptionsQueryParamsWhitelistStruct {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add the list of params that should not be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: string[];
}

export function cdnRuleOptionsQueryParamsWhitelistStructToTerraform(struct?: CdnRuleOptionsQueryParamsWhitelistStructOutputReference | CdnRuleOptionsQueryParamsWhitelistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnRuleOptionsQueryParamsWhitelistStructToHclTerraform(struct?: CdnRuleOptionsQueryParamsWhitelistStructOutputReference | CdnRuleOptionsQueryParamsWhitelistStruct): any {
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

export class CdnRuleOptionsQueryParamsWhitelistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsQueryParamsWhitelistStruct | undefined {
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

  public set internalValue(value: CdnRuleOptionsQueryParamsWhitelistStruct | undefined) {
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
export interface CdnRuleOptionsRedirectHttpToHttps {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsRedirectHttpToHttpsToTerraform(struct?: CdnRuleOptionsRedirectHttpToHttpsOutputReference | CdnRuleOptionsRedirectHttpToHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsRedirectHttpToHttpsToHclTerraform(struct?: CdnRuleOptionsRedirectHttpToHttpsOutputReference | CdnRuleOptionsRedirectHttpToHttps): any {
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

export class CdnRuleOptionsRedirectHttpToHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsRedirectHttpToHttps | undefined {
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

  public set internalValue(value: CdnRuleOptionsRedirectHttpToHttps | undefined) {
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
export interface CdnRuleOptionsRedirectHttpsToHttp {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsRedirectHttpsToHttpToTerraform(struct?: CdnRuleOptionsRedirectHttpsToHttpOutputReference | CdnRuleOptionsRedirectHttpsToHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsRedirectHttpsToHttpToHclTerraform(struct?: CdnRuleOptionsRedirectHttpsToHttpOutputReference | CdnRuleOptionsRedirectHttpsToHttp): any {
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

export class CdnRuleOptionsRedirectHttpsToHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsRedirectHttpsToHttp | undefined {
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

  public set internalValue(value: CdnRuleOptionsRedirectHttpsToHttp | undefined) {
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
export interface CdnRuleOptionsRefererAcl {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add a list of domain names. To allow a direct link access, add an empty value "". You cannot enter just the empty value because at least one valid referer is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#excepted_values CdnRule#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Set the policy type. Allowed values are "allow" or "deny". The policy allows or denies access to content from all domain names except those specified in the "excepted_values" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#policy_type CdnRule#policy_type}
  */
  readonly policyType: string;
}

export function cdnRuleOptionsRefererAclToTerraform(struct?: CdnRuleOptionsRefererAclOutputReference | CdnRuleOptionsRefererAcl): any {
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


export function cdnRuleOptionsRefererAclToHclTerraform(struct?: CdnRuleOptionsRefererAclOutputReference | CdnRuleOptionsRefererAcl): any {
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

export class CdnRuleOptionsRefererAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsRefererAcl | undefined {
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

  public set internalValue(value: CdnRuleOptionsRefererAcl | undefined) {
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
export interface CdnRuleOptionsResponseHeadersHidingPolicy {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Depending on the value of the "mode" field, list the HTTP headers that will be either shown or hidden in the response. HTTP headers, that can't be hidden from the response: Connection, Content-Length, Content-Type, Date, Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#excepted CdnRule#excepted}
  */
  readonly excepted: string[];
  /**
  * Set the way the HTTP headers are displayed. Allowed values are "hide" or "show". If set to "hide", all the HTTP headers from the response except those listed in the "excepted" field. If set to "show", the HTTP headers listed in the "excepted" field are hidden from the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#mode CdnRule#mode}
  */
  readonly mode: string;
}

export function cdnRuleOptionsResponseHeadersHidingPolicyToTerraform(struct?: CdnRuleOptionsResponseHeadersHidingPolicyOutputReference | CdnRuleOptionsResponseHeadersHidingPolicy): any {
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


export function cdnRuleOptionsResponseHeadersHidingPolicyToHclTerraform(struct?: CdnRuleOptionsResponseHeadersHidingPolicyOutputReference | CdnRuleOptionsResponseHeadersHidingPolicy): any {
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

export class CdnRuleOptionsResponseHeadersHidingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsResponseHeadersHidingPolicy | undefined {
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

  public set internalValue(value: CdnRuleOptionsResponseHeadersHidingPolicy | undefined) {
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
export interface CdnRuleOptionsRewrite {
  /**
  * Specify the rewrite pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#body CdnRule#body}
  */
  readonly body: string;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify a rewrite flag type. Allowed values are "last", "break", "redirect", or "permanent".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#flag CdnRule#flag}
  */
  readonly flag?: string;
}

export function cdnRuleOptionsRewriteToTerraform(struct?: CdnRuleOptionsRewriteOutputReference | CdnRuleOptionsRewrite): any {
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


export function cdnRuleOptionsRewriteToHclTerraform(struct?: CdnRuleOptionsRewriteOutputReference | CdnRuleOptionsRewrite): any {
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

export class CdnRuleOptionsRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsRewrite | undefined {
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

  public set internalValue(value: CdnRuleOptionsRewrite | undefined) {
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
export interface CdnRuleOptionsSecureKey {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add the key generated on your side which will be used for the URL signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#key CdnRule#key}
  */
  readonly key: string;
  /**
  * Set the type of the URL signing. Allowed values are "0" or "2". If set to "0", the end user's IP address is inclded to secure token generation. If set to "2", the end user's IP address is excluded from the secure token generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#type CdnRule#type}
  */
  readonly type: number;
}

export function cdnRuleOptionsSecureKeyToTerraform(struct?: CdnRuleOptionsSecureKeyOutputReference | CdnRuleOptionsSecureKey): any {
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


export function cdnRuleOptionsSecureKeyToHclTerraform(struct?: CdnRuleOptionsSecureKeyOutputReference | CdnRuleOptionsSecureKey): any {
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

export class CdnRuleOptionsSecureKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsSecureKey | undefined {
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

  public set internalValue(value: CdnRuleOptionsSecureKey | undefined) {
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
export interface CdnRuleOptionsSlice {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsSliceToTerraform(struct?: CdnRuleOptionsSliceOutputReference | CdnRuleOptionsSlice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsSliceToHclTerraform(struct?: CdnRuleOptionsSliceOutputReference | CdnRuleOptionsSlice): any {
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

export class CdnRuleOptionsSliceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsSlice | undefined {
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

  public set internalValue(value: CdnRuleOptionsSlice | undefined) {
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
export interface CdnRuleOptionsSni {
  /**
  * Specify the custom SNI hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#custom_hostname CdnRule#custom_hostname}
  */
  readonly customHostname?: string;
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the SNI type. Allowed values are "dynamic" or "custom". If set to "dynamic", the hostname matches the value of the "host_header" or "forward_host_header" field. If set to "custom", the hostname matches the value of the "custom_hostname" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#sni_type CdnRule#sni_type}
  */
  readonly sniType?: string;
}

export function cdnRuleOptionsSniToTerraform(struct?: CdnRuleOptionsSniOutputReference | CdnRuleOptionsSni): any {
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


export function cdnRuleOptionsSniToHclTerraform(struct?: CdnRuleOptionsSniOutputReference | CdnRuleOptionsSni): any {
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

export class CdnRuleOptionsSniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsSni | undefined {
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

  public set internalValue(value: CdnRuleOptionsSni | undefined) {
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
export interface CdnRuleOptionsStale {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add a list of errors. Allowed values are "error", "http_403", "http_404", "http_429", "http_500", "http_502", "http_503", "http_504", "invalid_header", "timeout", "updating".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: string[];
}

export function cdnRuleOptionsStaleToTerraform(struct?: CdnRuleOptionsStaleOutputReference | CdnRuleOptionsStale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnRuleOptionsStaleToHclTerraform(struct?: CdnRuleOptionsStaleOutputReference | CdnRuleOptionsStale): any {
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

export class CdnRuleOptionsStaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsStale | undefined {
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

  public set internalValue(value: CdnRuleOptionsStale | undefined) {
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
export interface CdnRuleOptionsStaticRequestHeaders {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add the list of custom HTTP request headers in the "name: value" format. Header name is restricted to 255 symbols and can contain Latin letters (A-Z, a-z), numbers (0-9), dashes, and underscores
  * Header value is restricted to 512 symbols and must start with a letter, a number, an asterisk or {. It can contain only Latin letters (A-Z, a-z), numbers (0-9), spaces and symbols (`~!@#%^&*()-_=+ /|";:?.><{}[]). Space can be used only between the words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: { [key: string]: string };
}

export function cdnRuleOptionsStaticRequestHeadersToTerraform(struct?: CdnRuleOptionsStaticRequestHeadersOutputReference | CdnRuleOptionsStaticRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function cdnRuleOptionsStaticRequestHeadersToHclTerraform(struct?: CdnRuleOptionsStaticRequestHeadersOutputReference | CdnRuleOptionsStaticRequestHeaders): any {
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

export class CdnRuleOptionsStaticRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsStaticRequestHeaders | undefined {
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

  public set internalValue(value: CdnRuleOptionsStaticRequestHeaders | undefined) {
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
export interface CdnRuleOptionsStaticResponseHeadersValue {
  /**
  * Specify if the custom header should be added to the responses from CDN regardless of the HTTP response status code. Allowed values are "true" or "false". If set to "false", the header will only be added to the responses with HTTP 200, 201, 204, 206, 301, 302, 303, 304, 307, or 308 status codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#always CdnRule#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Add the header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#name CdnRule#name}
  */
  readonly name: string;
  /**
  * Add the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: string[];
}

export function cdnRuleOptionsStaticResponseHeadersValueToTerraform(struct?: CdnRuleOptionsStaticResponseHeadersValue | cdktf.IResolvable): any {
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


export function cdnRuleOptionsStaticResponseHeadersValueToHclTerraform(struct?: CdnRuleOptionsStaticResponseHeadersValue | cdktf.IResolvable): any {
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

export class CdnRuleOptionsStaticResponseHeadersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnRuleOptionsStaticResponseHeadersValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnRuleOptionsStaticResponseHeadersValue | cdktf.IResolvable | undefined) {
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

export class CdnRuleOptionsStaticResponseHeadersValueList extends cdktf.ComplexList {
  public internalValue? : CdnRuleOptionsStaticResponseHeadersValue[] | cdktf.IResolvable

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
  public get(index: number): CdnRuleOptionsStaticResponseHeadersValueOutputReference {
    return new CdnRuleOptionsStaticResponseHeadersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnRuleOptionsStaticResponseHeaders {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: CdnRuleOptionsStaticResponseHeadersValue[] | cdktf.IResolvable;
}

export function cdnRuleOptionsStaticResponseHeadersToTerraform(struct?: CdnRuleOptionsStaticResponseHeadersOutputReference | CdnRuleOptionsStaticResponseHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdnRuleOptionsStaticResponseHeadersValueToTerraform, true)(struct!.value),
  }
}


export function cdnRuleOptionsStaticResponseHeadersToHclTerraform(struct?: CdnRuleOptionsStaticResponseHeadersOutputReference | CdnRuleOptionsStaticResponseHeaders): any {
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
      value: cdktf.listMapperHcl(cdnRuleOptionsStaticResponseHeadersValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsStaticResponseHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnRuleOptionsStaticResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsStaticResponseHeaders | undefined {
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

  public set internalValue(value: CdnRuleOptionsStaticResponseHeaders | undefined) {
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
  private _value = new CdnRuleOptionsStaticResponseHeadersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: CdnRuleOptionsStaticResponseHeadersValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface CdnRuleOptionsUserAgentAcl {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Add a list of user agents. Enter the values in [""]. You can specify a user agent string, an empty value using "", or a regular expression that starts with "~".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#excepted_values CdnRule#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Set the policy type. Allowed values are "allow" or "deny". The policy allows or denies access to content from all user agents except those specified in the "excepted_values" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#policy_type CdnRule#policy_type}
  */
  readonly policyType: string;
}

export function cdnRuleOptionsUserAgentAclToTerraform(struct?: CdnRuleOptionsUserAgentAclOutputReference | CdnRuleOptionsUserAgentAcl): any {
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


export function cdnRuleOptionsUserAgentAclToHclTerraform(struct?: CdnRuleOptionsUserAgentAclOutputReference | CdnRuleOptionsUserAgentAcl): any {
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

export class CdnRuleOptionsUserAgentAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsUserAgentAcl | undefined {
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

  public set internalValue(value: CdnRuleOptionsUserAgentAcl | undefined) {
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
export interface CdnRuleOptionsWebsockets {
  /**
  * Enable or disable the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the option. Allowed values are "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsWebsocketsToTerraform(struct?: CdnRuleOptionsWebsocketsOutputReference | CdnRuleOptionsWebsockets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsWebsocketsToHclTerraform(struct?: CdnRuleOptionsWebsocketsOutputReference | CdnRuleOptionsWebsockets): any {
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

export class CdnRuleOptionsWebsocketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsWebsockets | undefined {
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

  public set internalValue(value: CdnRuleOptionsWebsockets | undefined) {
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
export interface CdnRuleOptions {
  /**
  * allowed_http_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#allowed_http_methods CdnRule#allowed_http_methods}
  */
  readonly allowedHttpMethods?: CdnRuleOptionsAllowedHttpMethods;
  /**
  * brotli_compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#brotli_compression CdnRule#brotli_compression}
  */
  readonly brotliCompression?: CdnRuleOptionsBrotliCompression;
  /**
  * browser_cache_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#browser_cache_settings CdnRule#browser_cache_settings}
  */
  readonly browserCacheSettings?: CdnRuleOptionsBrowserCacheSettings;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#cors CdnRule#cors}
  */
  readonly cors?: CdnRuleOptionsCors;
  /**
  * disable_proxy_force_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#disable_proxy_force_ranges CdnRule#disable_proxy_force_ranges}
  */
  readonly disableProxyForceRanges?: CdnRuleOptionsDisableProxyForceRanges;
  /**
  * edge_cache_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#edge_cache_settings CdnRule#edge_cache_settings}
  */
  readonly edgeCacheSettings?: CdnRuleOptionsEdgeCacheSettings;
  /**
  * fetch_compressed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#fetch_compressed CdnRule#fetch_compressed}
  */
  readonly fetchCompressed?: CdnRuleOptionsFetchCompressed;
  /**
  * follow_origin_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#follow_origin_redirect CdnRule#follow_origin_redirect}
  */
  readonly followOriginRedirect?: CdnRuleOptionsFollowOriginRedirect;
  /**
  * force_return block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#force_return CdnRule#force_return}
  */
  readonly forceReturn?: CdnRuleOptionsForceReturn;
  /**
  * forward_host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#forward_host_header CdnRule#forward_host_header}
  */
  readonly forwardHostHeader?: CdnRuleOptionsForwardHostHeader;
  /**
  * geo_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#geo_acl CdnRule#geo_acl}
  */
  readonly geoAcl?: CdnRuleOptionsGeoAcl;
  /**
  * gzip_compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#gzip_compression CdnRule#gzip_compression}
  */
  readonly gzipCompression?: CdnRuleOptionsGzipCompression;
  /**
  * host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#host_header CdnRule#host_header}
  */
  readonly hostHeader?: CdnRuleOptionsHostHeader;
  /**
  * ignore_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#ignore_cookie CdnRule#ignore_cookie}
  */
  readonly ignoreCookie?: CdnRuleOptionsIgnoreCookie;
  /**
  * ignore_query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#ignore_query_string CdnRule#ignore_query_string}
  */
  readonly ignoreQueryString?: CdnRuleOptionsIgnoreQueryString;
  /**
  * image_stack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#image_stack CdnRule#image_stack}
  */
  readonly imageStack?: CdnRuleOptionsImageStack;
  /**
  * ip_address_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#ip_address_acl CdnRule#ip_address_acl}
  */
  readonly ipAddressAcl?: CdnRuleOptionsIpAddressAcl;
  /**
  * limit_bandwidth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#limit_bandwidth CdnRule#limit_bandwidth}
  */
  readonly limitBandwidth?: CdnRuleOptionsLimitBandwidth;
  /**
  * proxy_cache_methods_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#proxy_cache_methods_set CdnRule#proxy_cache_methods_set}
  */
  readonly proxyCacheMethodsSet?: CdnRuleOptionsProxyCacheMethodsSet;
  /**
  * query_params_blacklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#query_params_blacklist CdnRule#query_params_blacklist}
  */
  readonly queryParamsBlacklist?: CdnRuleOptionsQueryParamsBlacklistStruct;
  /**
  * query_params_whitelist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#query_params_whitelist CdnRule#query_params_whitelist}
  */
  readonly queryParamsWhitelist?: CdnRuleOptionsQueryParamsWhitelistStruct;
  /**
  * redirect_http_to_https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#redirect_http_to_https CdnRule#redirect_http_to_https}
  */
  readonly redirectHttpToHttps?: CdnRuleOptionsRedirectHttpToHttps;
  /**
  * redirect_https_to_http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#redirect_https_to_http CdnRule#redirect_https_to_http}
  */
  readonly redirectHttpsToHttp?: CdnRuleOptionsRedirectHttpsToHttp;
  /**
  * referer_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#referer_acl CdnRule#referer_acl}
  */
  readonly refererAcl?: CdnRuleOptionsRefererAcl;
  /**
  * response_headers_hiding_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#response_headers_hiding_policy CdnRule#response_headers_hiding_policy}
  */
  readonly responseHeadersHidingPolicy?: CdnRuleOptionsResponseHeadersHidingPolicy;
  /**
  * rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#rewrite CdnRule#rewrite}
  */
  readonly rewrite?: CdnRuleOptionsRewrite;
  /**
  * secure_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#secure_key CdnRule#secure_key}
  */
  readonly secureKey?: CdnRuleOptionsSecureKey;
  /**
  * slice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#slice CdnRule#slice}
  */
  readonly slice?: CdnRuleOptionsSlice;
  /**
  * sni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#sni CdnRule#sni}
  */
  readonly sni?: CdnRuleOptionsSni;
  /**
  * stale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#stale CdnRule#stale}
  */
  readonly stale?: CdnRuleOptionsStale;
  /**
  * static_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#static_request_headers CdnRule#static_request_headers}
  */
  readonly staticRequestHeaders?: CdnRuleOptionsStaticRequestHeaders;
  /**
  * static_response_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#static_response_headers CdnRule#static_response_headers}
  */
  readonly staticResponseHeaders?: CdnRuleOptionsStaticResponseHeaders;
  /**
  * user_agent_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#user_agent_acl CdnRule#user_agent_acl}
  */
  readonly userAgentAcl?: CdnRuleOptionsUserAgentAcl;
  /**
  * websockets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#websockets CdnRule#websockets}
  */
  readonly websockets?: CdnRuleOptionsWebsockets;
}

export function cdnRuleOptionsToTerraform(struct?: CdnRuleOptionsOutputReference | CdnRuleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_http_methods: cdnRuleOptionsAllowedHttpMethodsToTerraform(struct!.allowedHttpMethods),
    brotli_compression: cdnRuleOptionsBrotliCompressionToTerraform(struct!.brotliCompression),
    browser_cache_settings: cdnRuleOptionsBrowserCacheSettingsToTerraform(struct!.browserCacheSettings),
    cors: cdnRuleOptionsCorsToTerraform(struct!.cors),
    disable_proxy_force_ranges: cdnRuleOptionsDisableProxyForceRangesToTerraform(struct!.disableProxyForceRanges),
    edge_cache_settings: cdnRuleOptionsEdgeCacheSettingsToTerraform(struct!.edgeCacheSettings),
    fetch_compressed: cdnRuleOptionsFetchCompressedToTerraform(struct!.fetchCompressed),
    follow_origin_redirect: cdnRuleOptionsFollowOriginRedirectToTerraform(struct!.followOriginRedirect),
    force_return: cdnRuleOptionsForceReturnToTerraform(struct!.forceReturn),
    forward_host_header: cdnRuleOptionsForwardHostHeaderToTerraform(struct!.forwardHostHeader),
    geo_acl: cdnRuleOptionsGeoAclToTerraform(struct!.geoAcl),
    gzip_compression: cdnRuleOptionsGzipCompressionToTerraform(struct!.gzipCompression),
    host_header: cdnRuleOptionsHostHeaderToTerraform(struct!.hostHeader),
    ignore_cookie: cdnRuleOptionsIgnoreCookieToTerraform(struct!.ignoreCookie),
    ignore_query_string: cdnRuleOptionsIgnoreQueryStringToTerraform(struct!.ignoreQueryString),
    image_stack: cdnRuleOptionsImageStackToTerraform(struct!.imageStack),
    ip_address_acl: cdnRuleOptionsIpAddressAclToTerraform(struct!.ipAddressAcl),
    limit_bandwidth: cdnRuleOptionsLimitBandwidthToTerraform(struct!.limitBandwidth),
    proxy_cache_methods_set: cdnRuleOptionsProxyCacheMethodsSetToTerraform(struct!.proxyCacheMethodsSet),
    query_params_blacklist: cdnRuleOptionsQueryParamsBlacklistStructToTerraform(struct!.queryParamsBlacklist),
    query_params_whitelist: cdnRuleOptionsQueryParamsWhitelistStructToTerraform(struct!.queryParamsWhitelist),
    redirect_http_to_https: cdnRuleOptionsRedirectHttpToHttpsToTerraform(struct!.redirectHttpToHttps),
    redirect_https_to_http: cdnRuleOptionsRedirectHttpsToHttpToTerraform(struct!.redirectHttpsToHttp),
    referer_acl: cdnRuleOptionsRefererAclToTerraform(struct!.refererAcl),
    response_headers_hiding_policy: cdnRuleOptionsResponseHeadersHidingPolicyToTerraform(struct!.responseHeadersHidingPolicy),
    rewrite: cdnRuleOptionsRewriteToTerraform(struct!.rewrite),
    secure_key: cdnRuleOptionsSecureKeyToTerraform(struct!.secureKey),
    slice: cdnRuleOptionsSliceToTerraform(struct!.slice),
    sni: cdnRuleOptionsSniToTerraform(struct!.sni),
    stale: cdnRuleOptionsStaleToTerraform(struct!.stale),
    static_request_headers: cdnRuleOptionsStaticRequestHeadersToTerraform(struct!.staticRequestHeaders),
    static_response_headers: cdnRuleOptionsStaticResponseHeadersToTerraform(struct!.staticResponseHeaders),
    user_agent_acl: cdnRuleOptionsUserAgentAclToTerraform(struct!.userAgentAcl),
    websockets: cdnRuleOptionsWebsocketsToTerraform(struct!.websockets),
  }
}


export function cdnRuleOptionsToHclTerraform(struct?: CdnRuleOptionsOutputReference | CdnRuleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_http_methods: {
      value: cdnRuleOptionsAllowedHttpMethodsToHclTerraform(struct!.allowedHttpMethods),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsAllowedHttpMethodsList",
    },
    brotli_compression: {
      value: cdnRuleOptionsBrotliCompressionToHclTerraform(struct!.brotliCompression),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsBrotliCompressionList",
    },
    browser_cache_settings: {
      value: cdnRuleOptionsBrowserCacheSettingsToHclTerraform(struct!.browserCacheSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsBrowserCacheSettingsList",
    },
    cors: {
      value: cdnRuleOptionsCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsCorsList",
    },
    disable_proxy_force_ranges: {
      value: cdnRuleOptionsDisableProxyForceRangesToHclTerraform(struct!.disableProxyForceRanges),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsDisableProxyForceRangesList",
    },
    edge_cache_settings: {
      value: cdnRuleOptionsEdgeCacheSettingsToHclTerraform(struct!.edgeCacheSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsEdgeCacheSettingsList",
    },
    fetch_compressed: {
      value: cdnRuleOptionsFetchCompressedToHclTerraform(struct!.fetchCompressed),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsFetchCompressedList",
    },
    follow_origin_redirect: {
      value: cdnRuleOptionsFollowOriginRedirectToHclTerraform(struct!.followOriginRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsFollowOriginRedirectList",
    },
    force_return: {
      value: cdnRuleOptionsForceReturnToHclTerraform(struct!.forceReturn),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsForceReturnList",
    },
    forward_host_header: {
      value: cdnRuleOptionsForwardHostHeaderToHclTerraform(struct!.forwardHostHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsForwardHostHeaderList",
    },
    geo_acl: {
      value: cdnRuleOptionsGeoAclToHclTerraform(struct!.geoAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsGeoAclList",
    },
    gzip_compression: {
      value: cdnRuleOptionsGzipCompressionToHclTerraform(struct!.gzipCompression),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsGzipCompressionList",
    },
    host_header: {
      value: cdnRuleOptionsHostHeaderToHclTerraform(struct!.hostHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsHostHeaderList",
    },
    ignore_cookie: {
      value: cdnRuleOptionsIgnoreCookieToHclTerraform(struct!.ignoreCookie),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsIgnoreCookieList",
    },
    ignore_query_string: {
      value: cdnRuleOptionsIgnoreQueryStringToHclTerraform(struct!.ignoreQueryString),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsIgnoreQueryStringList",
    },
    image_stack: {
      value: cdnRuleOptionsImageStackToHclTerraform(struct!.imageStack),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsImageStackList",
    },
    ip_address_acl: {
      value: cdnRuleOptionsIpAddressAclToHclTerraform(struct!.ipAddressAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsIpAddressAclList",
    },
    limit_bandwidth: {
      value: cdnRuleOptionsLimitBandwidthToHclTerraform(struct!.limitBandwidth),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsLimitBandwidthList",
    },
    proxy_cache_methods_set: {
      value: cdnRuleOptionsProxyCacheMethodsSetToHclTerraform(struct!.proxyCacheMethodsSet),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsProxyCacheMethodsSetList",
    },
    query_params_blacklist: {
      value: cdnRuleOptionsQueryParamsBlacklistStructToHclTerraform(struct!.queryParamsBlacklist),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsQueryParamsBlacklistStructList",
    },
    query_params_whitelist: {
      value: cdnRuleOptionsQueryParamsWhitelistStructToHclTerraform(struct!.queryParamsWhitelist),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsQueryParamsWhitelistStructList",
    },
    redirect_http_to_https: {
      value: cdnRuleOptionsRedirectHttpToHttpsToHclTerraform(struct!.redirectHttpToHttps),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsRedirectHttpToHttpsList",
    },
    redirect_https_to_http: {
      value: cdnRuleOptionsRedirectHttpsToHttpToHclTerraform(struct!.redirectHttpsToHttp),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsRedirectHttpsToHttpList",
    },
    referer_acl: {
      value: cdnRuleOptionsRefererAclToHclTerraform(struct!.refererAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsRefererAclList",
    },
    response_headers_hiding_policy: {
      value: cdnRuleOptionsResponseHeadersHidingPolicyToHclTerraform(struct!.responseHeadersHidingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsResponseHeadersHidingPolicyList",
    },
    rewrite: {
      value: cdnRuleOptionsRewriteToHclTerraform(struct!.rewrite),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsRewriteList",
    },
    secure_key: {
      value: cdnRuleOptionsSecureKeyToHclTerraform(struct!.secureKey),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsSecureKeyList",
    },
    slice: {
      value: cdnRuleOptionsSliceToHclTerraform(struct!.slice),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsSliceList",
    },
    sni: {
      value: cdnRuleOptionsSniToHclTerraform(struct!.sni),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsSniList",
    },
    stale: {
      value: cdnRuleOptionsStaleToHclTerraform(struct!.stale),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsStaleList",
    },
    static_request_headers: {
      value: cdnRuleOptionsStaticRequestHeadersToHclTerraform(struct!.staticRequestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsStaticRequestHeadersList",
    },
    static_response_headers: {
      value: cdnRuleOptionsStaticResponseHeadersToHclTerraform(struct!.staticResponseHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsStaticResponseHeadersList",
    },
    user_agent_acl: {
      value: cdnRuleOptionsUserAgentAclToHclTerraform(struct!.userAgentAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsUserAgentAclList",
    },
    websockets: {
      value: cdnRuleOptionsWebsocketsToHclTerraform(struct!.websockets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsWebsocketsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnRuleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptions | undefined {
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

  public set internalValue(value: CdnRuleOptions | undefined) {
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
      this._userAgentAcl.internalValue = value.userAgentAcl;
      this._websockets.internalValue = value.websockets;
    }
  }

  // allowed_http_methods - computed: false, optional: true, required: false
  private _allowedHttpMethods = new CdnRuleOptionsAllowedHttpMethodsOutputReference(this, "allowed_http_methods");
  public get allowedHttpMethods() {
    return this._allowedHttpMethods;
  }
  public putAllowedHttpMethods(value: CdnRuleOptionsAllowedHttpMethods) {
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
  private _brotliCompression = new CdnRuleOptionsBrotliCompressionOutputReference(this, "brotli_compression");
  public get brotliCompression() {
    return this._brotliCompression;
  }
  public putBrotliCompression(value: CdnRuleOptionsBrotliCompression) {
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
  private _browserCacheSettings = new CdnRuleOptionsBrowserCacheSettingsOutputReference(this, "browser_cache_settings");
  public get browserCacheSettings() {
    return this._browserCacheSettings;
  }
  public putBrowserCacheSettings(value: CdnRuleOptionsBrowserCacheSettings) {
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
  private _cors = new CdnRuleOptionsCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: CdnRuleOptionsCors) {
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
  private _disableProxyForceRanges = new CdnRuleOptionsDisableProxyForceRangesOutputReference(this, "disable_proxy_force_ranges");
  public get disableProxyForceRanges() {
    return this._disableProxyForceRanges;
  }
  public putDisableProxyForceRanges(value: CdnRuleOptionsDisableProxyForceRanges) {
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
  private _edgeCacheSettings = new CdnRuleOptionsEdgeCacheSettingsOutputReference(this, "edge_cache_settings");
  public get edgeCacheSettings() {
    return this._edgeCacheSettings;
  }
  public putEdgeCacheSettings(value: CdnRuleOptionsEdgeCacheSettings) {
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
  private _fetchCompressed = new CdnRuleOptionsFetchCompressedOutputReference(this, "fetch_compressed");
  public get fetchCompressed() {
    return this._fetchCompressed;
  }
  public putFetchCompressed(value: CdnRuleOptionsFetchCompressed) {
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
  private _followOriginRedirect = new CdnRuleOptionsFollowOriginRedirectOutputReference(this, "follow_origin_redirect");
  public get followOriginRedirect() {
    return this._followOriginRedirect;
  }
  public putFollowOriginRedirect(value: CdnRuleOptionsFollowOriginRedirect) {
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
  private _forceReturn = new CdnRuleOptionsForceReturnOutputReference(this, "force_return");
  public get forceReturn() {
    return this._forceReturn;
  }
  public putForceReturn(value: CdnRuleOptionsForceReturn) {
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
  private _forwardHostHeader = new CdnRuleOptionsForwardHostHeaderOutputReference(this, "forward_host_header");
  public get forwardHostHeader() {
    return this._forwardHostHeader;
  }
  public putForwardHostHeader(value: CdnRuleOptionsForwardHostHeader) {
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
  private _geoAcl = new CdnRuleOptionsGeoAclOutputReference(this, "geo_acl");
  public get geoAcl() {
    return this._geoAcl;
  }
  public putGeoAcl(value: CdnRuleOptionsGeoAcl) {
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
  private _gzipCompression = new CdnRuleOptionsGzipCompressionOutputReference(this, "gzip_compression");
  public get gzipCompression() {
    return this._gzipCompression;
  }
  public putGzipCompression(value: CdnRuleOptionsGzipCompression) {
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
  private _hostHeader = new CdnRuleOptionsHostHeaderOutputReference(this, "host_header");
  public get hostHeader() {
    return this._hostHeader;
  }
  public putHostHeader(value: CdnRuleOptionsHostHeader) {
    this._hostHeader.internalValue = value;
  }
  public resetHostHeader() {
    this._hostHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader.internalValue;
  }

  // ignore_cookie - computed: false, optional: true, required: false
  private _ignoreCookie = new CdnRuleOptionsIgnoreCookieOutputReference(this, "ignore_cookie");
  public get ignoreCookie() {
    return this._ignoreCookie;
  }
  public putIgnoreCookie(value: CdnRuleOptionsIgnoreCookie) {
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
  private _ignoreQueryString = new CdnRuleOptionsIgnoreQueryStringOutputReference(this, "ignore_query_string");
  public get ignoreQueryString() {
    return this._ignoreQueryString;
  }
  public putIgnoreQueryString(value: CdnRuleOptionsIgnoreQueryString) {
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
  private _imageStack = new CdnRuleOptionsImageStackOutputReference(this, "image_stack");
  public get imageStack() {
    return this._imageStack;
  }
  public putImageStack(value: CdnRuleOptionsImageStack) {
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
  private _ipAddressAcl = new CdnRuleOptionsIpAddressAclOutputReference(this, "ip_address_acl");
  public get ipAddressAcl() {
    return this._ipAddressAcl;
  }
  public putIpAddressAcl(value: CdnRuleOptionsIpAddressAcl) {
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
  private _limitBandwidth = new CdnRuleOptionsLimitBandwidthOutputReference(this, "limit_bandwidth");
  public get limitBandwidth() {
    return this._limitBandwidth;
  }
  public putLimitBandwidth(value: CdnRuleOptionsLimitBandwidth) {
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
  private _proxyCacheMethodsSet = new CdnRuleOptionsProxyCacheMethodsSetOutputReference(this, "proxy_cache_methods_set");
  public get proxyCacheMethodsSet() {
    return this._proxyCacheMethodsSet;
  }
  public putProxyCacheMethodsSet(value: CdnRuleOptionsProxyCacheMethodsSet) {
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
  private _queryParamsBlacklist = new CdnRuleOptionsQueryParamsBlacklistStructOutputReference(this, "query_params_blacklist");
  public get queryParamsBlacklist() {
    return this._queryParamsBlacklist;
  }
  public putQueryParamsBlacklist(value: CdnRuleOptionsQueryParamsBlacklistStruct) {
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
  private _queryParamsWhitelist = new CdnRuleOptionsQueryParamsWhitelistStructOutputReference(this, "query_params_whitelist");
  public get queryParamsWhitelist() {
    return this._queryParamsWhitelist;
  }
  public putQueryParamsWhitelist(value: CdnRuleOptionsQueryParamsWhitelistStruct) {
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
  private _redirectHttpToHttps = new CdnRuleOptionsRedirectHttpToHttpsOutputReference(this, "redirect_http_to_https");
  public get redirectHttpToHttps() {
    return this._redirectHttpToHttps;
  }
  public putRedirectHttpToHttps(value: CdnRuleOptionsRedirectHttpToHttps) {
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
  private _redirectHttpsToHttp = new CdnRuleOptionsRedirectHttpsToHttpOutputReference(this, "redirect_https_to_http");
  public get redirectHttpsToHttp() {
    return this._redirectHttpsToHttp;
  }
  public putRedirectHttpsToHttp(value: CdnRuleOptionsRedirectHttpsToHttp) {
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
  private _refererAcl = new CdnRuleOptionsRefererAclOutputReference(this, "referer_acl");
  public get refererAcl() {
    return this._refererAcl;
  }
  public putRefererAcl(value: CdnRuleOptionsRefererAcl) {
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
  private _responseHeadersHidingPolicy = new CdnRuleOptionsResponseHeadersHidingPolicyOutputReference(this, "response_headers_hiding_policy");
  public get responseHeadersHidingPolicy() {
    return this._responseHeadersHidingPolicy;
  }
  public putResponseHeadersHidingPolicy(value: CdnRuleOptionsResponseHeadersHidingPolicy) {
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
  private _rewrite = new CdnRuleOptionsRewriteOutputReference(this, "rewrite");
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: CdnRuleOptionsRewrite) {
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
  private _secureKey = new CdnRuleOptionsSecureKeyOutputReference(this, "secure_key");
  public get secureKey() {
    return this._secureKey;
  }
  public putSecureKey(value: CdnRuleOptionsSecureKey) {
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
  private _slice = new CdnRuleOptionsSliceOutputReference(this, "slice");
  public get slice() {
    return this._slice;
  }
  public putSlice(value: CdnRuleOptionsSlice) {
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
  private _sni = new CdnRuleOptionsSniOutputReference(this, "sni");
  public get sni() {
    return this._sni;
  }
  public putSni(value: CdnRuleOptionsSni) {
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
  private _stale = new CdnRuleOptionsStaleOutputReference(this, "stale");
  public get stale() {
    return this._stale;
  }
  public putStale(value: CdnRuleOptionsStale) {
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
  private _staticRequestHeaders = new CdnRuleOptionsStaticRequestHeadersOutputReference(this, "static_request_headers");
  public get staticRequestHeaders() {
    return this._staticRequestHeaders;
  }
  public putStaticRequestHeaders(value: CdnRuleOptionsStaticRequestHeaders) {
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
  private _staticResponseHeaders = new CdnRuleOptionsStaticResponseHeadersOutputReference(this, "static_response_headers");
  public get staticResponseHeaders() {
    return this._staticResponseHeaders;
  }
  public putStaticResponseHeaders(value: CdnRuleOptionsStaticResponseHeaders) {
    this._staticResponseHeaders.internalValue = value;
  }
  public resetStaticResponseHeaders() {
    this._staticResponseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticResponseHeadersInput() {
    return this._staticResponseHeaders.internalValue;
  }

  // user_agent_acl - computed: false, optional: true, required: false
  private _userAgentAcl = new CdnRuleOptionsUserAgentAclOutputReference(this, "user_agent_acl");
  public get userAgentAcl() {
    return this._userAgentAcl;
  }
  public putUserAgentAcl(value: CdnRuleOptionsUserAgentAcl) {
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
  private _websockets = new CdnRuleOptionsWebsocketsOutputReference(this, "websockets");
  public get websockets() {
    return this._websockets;
  }
  public putWebsockets(value: CdnRuleOptionsWebsockets) {
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
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule edgecenter_cdn_rule}
*/
export class CdnRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_cdn_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnRule to import
  * @param importFromId The id of the existing CdnRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_cdn_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_rule edgecenter_cdn_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CdnRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_cdn_rule',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.7',
        providerVersionConstraint: '0.10.7'
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
    this._id = config.id;
    this._name = config.name;
    this._originGroup = config.originGroup;
    this._originProtocol = config.originProtocol;
    this._resourceId = config.resourceId;
    this._rule = config.rule;
    this._weight = config.weight;
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

  // origin_group - computed: false, optional: true, required: false
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: number; 
  public get resourceId() {
    return this.getNumberAttribute('resource_id');
  }
  public set resourceId(value: number) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // weight - computed: true, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options = new CdnRuleOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: CdnRuleOptions) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      origin_group: cdktf.numberToTerraform(this._originGroup),
      origin_protocol: cdktf.stringToTerraform(this._originProtocol),
      resource_id: cdktf.numberToTerraform(this._resourceId),
      rule: cdktf.stringToTerraform(this._rule),
      weight: cdktf.numberToTerraform(this._weight),
      options: cdnRuleOptionsToTerraform(this._options.internalValue),
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
      resource_id: {
        value: cdktf.numberToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      options: {
        value: cdnRuleOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnRuleOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
