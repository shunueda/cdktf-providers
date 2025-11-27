// https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The setting allows to enable or disable a CDN Resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#active CdnResource#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * A CNAME that will be used to deliver content though a CDN. If you update this field new resource will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#cname CdnResource#cname}
  */
  readonly cname: string;
  /**
  * Custom client description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#description CdnResource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#id CdnResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A domain name or IP of your origin source. Specify a port if custom. You can use either 'origin' parameter or 'originGroup' in the resource definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#origin CdnResource#origin}
  */
  readonly origin?: string;
  /**
  * ID of the Origins Group. Use one of your Origins Group or create a new one. You can use either 'origin' parameter or 'originGroup' in the resource definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#origin_group CdnResource#origin_group}
  */
  readonly originGroup?: number;
  /**
  * This option defines the protocol that will be used by CDN servers to request content from an origin source. If not specified, we will use HTTP to connect to an origin server. Possible values are: HTTPS, HTTP, MATCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#origin_protocol CdnResource#origin_protocol}
  */
  readonly originProtocol?: string;
  /**
  * Specify the ID of the main CDN resource that shares a caching zone with a reserve resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#primary_resource CdnResource#primary_resource}
  */
  readonly primaryResource?: number;
  /**
  * Specify the ID of the trusted CA certificate used to verify an origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#proxy_ssl_ca CdnResource#proxy_ssl_ca}
  */
  readonly proxySslCa?: number;
  /**
  * Specify the ID of the SSL certificate used to verify an origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#proxy_ssl_data CdnResource#proxy_ssl_data}
  */
  readonly proxySslData?: number;
  /**
  * Enables or disables SSL certificate validation of the origin server before completing any connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#proxy_ssl_enabled CdnResource#proxy_ssl_enabled}
  */
  readonly proxySslEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of additional CNAMEs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#secondary_hostnames CdnResource#secondary_hostnames}
  */
  readonly secondaryHostnames?: string[];
  /**
  * Specify the SSL Certificate ID which should be used for the CDN Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#ssl_data CdnResource#ssl_data}
  */
  readonly sslData?: number;
  /**
  * Use HTTPS protocol for content delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#ssl_enabled CdnResource#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#options CdnResource#options}
  */
  readonly options?: CdnResourceOptions;
}
export interface CdnResourceOptionsAllowedHttpMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Available methods: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the content-type for each type of content you wish to have compressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Use '0s' to disable caching. The value applies for a response with codes 200, 201, 204, 206, 301, 302, 303, 304, 307, 308.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Specify if the Access-Control-Allow-Origin header should be added to a response from CDN regardless of response code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#always CdnResource#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify a value of the Access-Control-Allow-Origin header. Possible values: '*', '$http_origin', 'example.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
export interface CdnResourceOptionsCountryAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of countries according to ISO-3166-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#excepted_values CdnResource#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Possible values: allow, deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#policy_type CdnResource#policy_type}
  */
  readonly policyType: string;
}

export function cdnResourceOptionsCountryAclToTerraform(struct?: CdnResourceOptionsCountryAclOutputReference | CdnResourceOptionsCountryAcl): any {
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


export function cdnResourceOptionsCountryAclToHclTerraform(struct?: CdnResourceOptionsCountryAclOutputReference | CdnResourceOptionsCountryAcl): any {
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

export class CdnResourceOptionsCountryAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsCountryAcl | undefined {
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

  public set internalValue(value: CdnResourceOptionsCountryAcl | undefined) {
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
export interface CdnResourceOptionsDisableProxyForceRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Specify caching time in seconds ('0s', '600s' for example) for a response with specific response code ('304', '404' for example). Use 'any' to specify caching time for all response codes. Use '0s' to disable caching for a specific response code. These settings have a higher priority than the value field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#custom_values CdnResource#custom_values}
  */
  readonly customValues?: { [key: string]: string };
  /**
  * Content will be cached according to origin cache settings. The value applies for a response with codes 200, 201, 204, 206, 301, 302, 303, 304, 307, 308, if an origin server does not have caching HTTP headers. Responses with other codes will not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#default CdnResource#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify caching time for the response with codes 200, 206, 301, 302. Responses with codes 4xx, 5xx will not be cached. Use '0s' to disable caching. Use custom_values field to specify a custom caching time for a response with specific codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
export interface CdnResourceOptionsFastedgeOnRequestBody {
  /**
  * The ID of the application in FastEdge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#app_id CdnResource#app_id}
  */
  readonly appId: string;
  /**
  * Determines if the FastEdge application should be called whenever HTTP request headers are received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the edge nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#execute_on_edge CdnResource#execute_on_edge}
  */
  readonly executeOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the shield nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#execute_on_shield CdnResource#execute_on_shield}
  */
  readonly executeOnShield?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request execution should be interrupted when an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#interrupt_on_error CdnResource#interrupt_on_error}
  */
  readonly interruptOnError?: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsFastedgeOnRequestBodyToTerraform(struct?: CdnResourceOptionsFastedgeOnRequestBodyOutputReference | CdnResourceOptionsFastedgeOnRequestBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    execute_on_edge: cdktf.booleanToTerraform(struct!.executeOnEdge),
    execute_on_shield: cdktf.booleanToTerraform(struct!.executeOnShield),
    interrupt_on_error: cdktf.booleanToTerraform(struct!.interruptOnError),
  }
}


export function cdnResourceOptionsFastedgeOnRequestBodyToHclTerraform(struct?: CdnResourceOptionsFastedgeOnRequestBodyOutputReference | CdnResourceOptionsFastedgeOnRequestBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
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
    execute_on_edge: {
      value: cdktf.booleanToHclTerraform(struct!.executeOnEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execute_on_shield: {
      value: cdktf.booleanToHclTerraform(struct!.executeOnShield),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interrupt_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.interruptOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsFastedgeOnRequestBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsFastedgeOnRequestBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._executeOnEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOnEdge = this._executeOnEdge;
    }
    if (this._executeOnShield !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOnShield = this._executeOnShield;
    }
    if (this._interruptOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptOnError = this._interruptOnError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsFastedgeOnRequestBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._enabled = undefined;
      this._executeOnEdge = undefined;
      this._executeOnShield = undefined;
      this._interruptOnError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._enabled = value.enabled;
      this._executeOnEdge = value.executeOnEdge;
      this._executeOnShield = value.executeOnShield;
      this._interruptOnError = value.interruptOnError;
    }
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // execute_on_edge - computed: false, optional: true, required: false
  private _executeOnEdge?: boolean | cdktf.IResolvable; 
  public get executeOnEdge() {
    return this.getBooleanAttribute('execute_on_edge');
  }
  public set executeOnEdge(value: boolean | cdktf.IResolvable) {
    this._executeOnEdge = value;
  }
  public resetExecuteOnEdge() {
    this._executeOnEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnEdgeInput() {
    return this._executeOnEdge;
  }

  // execute_on_shield - computed: false, optional: true, required: false
  private _executeOnShield?: boolean | cdktf.IResolvable; 
  public get executeOnShield() {
    return this.getBooleanAttribute('execute_on_shield');
  }
  public set executeOnShield(value: boolean | cdktf.IResolvable) {
    this._executeOnShield = value;
  }
  public resetExecuteOnShield() {
    this._executeOnShield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnShieldInput() {
    return this._executeOnShield;
  }

  // interrupt_on_error - computed: false, optional: true, required: false
  private _interruptOnError?: boolean | cdktf.IResolvable; 
  public get interruptOnError() {
    return this.getBooleanAttribute('interrupt_on_error');
  }
  public set interruptOnError(value: boolean | cdktf.IResolvable) {
    this._interruptOnError = value;
  }
  public resetInterruptOnError() {
    this._interruptOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptOnErrorInput() {
    return this._interruptOnError;
  }
}
export interface CdnResourceOptionsFastedgeOnRequestHeaders {
  /**
  * The ID of the application in FastEdge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#app_id CdnResource#app_id}
  */
  readonly appId: string;
  /**
  * Determines if the FastEdge application should be called whenever HTTP request headers are received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the edge nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#execute_on_edge CdnResource#execute_on_edge}
  */
  readonly executeOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the shield nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#execute_on_shield CdnResource#execute_on_shield}
  */
  readonly executeOnShield?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request execution should be interrupted when an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#interrupt_on_error CdnResource#interrupt_on_error}
  */
  readonly interruptOnError?: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsFastedgeOnRequestHeadersToTerraform(struct?: CdnResourceOptionsFastedgeOnRequestHeadersOutputReference | CdnResourceOptionsFastedgeOnRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    execute_on_edge: cdktf.booleanToTerraform(struct!.executeOnEdge),
    execute_on_shield: cdktf.booleanToTerraform(struct!.executeOnShield),
    interrupt_on_error: cdktf.booleanToTerraform(struct!.interruptOnError),
  }
}


export function cdnResourceOptionsFastedgeOnRequestHeadersToHclTerraform(struct?: CdnResourceOptionsFastedgeOnRequestHeadersOutputReference | CdnResourceOptionsFastedgeOnRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
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
    execute_on_edge: {
      value: cdktf.booleanToHclTerraform(struct!.executeOnEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execute_on_shield: {
      value: cdktf.booleanToHclTerraform(struct!.executeOnShield),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interrupt_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.interruptOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsFastedgeOnRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsFastedgeOnRequestHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._executeOnEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOnEdge = this._executeOnEdge;
    }
    if (this._executeOnShield !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOnShield = this._executeOnShield;
    }
    if (this._interruptOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptOnError = this._interruptOnError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsFastedgeOnRequestHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._enabled = undefined;
      this._executeOnEdge = undefined;
      this._executeOnShield = undefined;
      this._interruptOnError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._enabled = value.enabled;
      this._executeOnEdge = value.executeOnEdge;
      this._executeOnShield = value.executeOnShield;
      this._interruptOnError = value.interruptOnError;
    }
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // execute_on_edge - computed: false, optional: true, required: false
  private _executeOnEdge?: boolean | cdktf.IResolvable; 
  public get executeOnEdge() {
    return this.getBooleanAttribute('execute_on_edge');
  }
  public set executeOnEdge(value: boolean | cdktf.IResolvable) {
    this._executeOnEdge = value;
  }
  public resetExecuteOnEdge() {
    this._executeOnEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnEdgeInput() {
    return this._executeOnEdge;
  }

  // execute_on_shield - computed: false, optional: true, required: false
  private _executeOnShield?: boolean | cdktf.IResolvable; 
  public get executeOnShield() {
    return this.getBooleanAttribute('execute_on_shield');
  }
  public set executeOnShield(value: boolean | cdktf.IResolvable) {
    this._executeOnShield = value;
  }
  public resetExecuteOnShield() {
    this._executeOnShield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnShieldInput() {
    return this._executeOnShield;
  }

  // interrupt_on_error - computed: false, optional: true, required: false
  private _interruptOnError?: boolean | cdktf.IResolvable; 
  public get interruptOnError() {
    return this.getBooleanAttribute('interrupt_on_error');
  }
  public set interruptOnError(value: boolean | cdktf.IResolvable) {
    this._interruptOnError = value;
  }
  public resetInterruptOnError() {
    this._interruptOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptOnErrorInput() {
    return this._interruptOnError;
  }
}
export interface CdnResourceOptionsFastedgeOnResponseBody {
  /**
  * The ID of the application in FastEdge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#app_id CdnResource#app_id}
  */
  readonly appId: string;
  /**
  * Determines if the FastEdge application should be called whenever HTTP request headers are received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the edge nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#execute_on_edge CdnResource#execute_on_edge}
  */
  readonly executeOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the shield nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#execute_on_shield CdnResource#execute_on_shield}
  */
  readonly executeOnShield?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request execution should be interrupted when an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#interrupt_on_error CdnResource#interrupt_on_error}
  */
  readonly interruptOnError?: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsFastedgeOnResponseBodyToTerraform(struct?: CdnResourceOptionsFastedgeOnResponseBodyOutputReference | CdnResourceOptionsFastedgeOnResponseBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    execute_on_edge: cdktf.booleanToTerraform(struct!.executeOnEdge),
    execute_on_shield: cdktf.booleanToTerraform(struct!.executeOnShield),
    interrupt_on_error: cdktf.booleanToTerraform(struct!.interruptOnError),
  }
}


export function cdnResourceOptionsFastedgeOnResponseBodyToHclTerraform(struct?: CdnResourceOptionsFastedgeOnResponseBodyOutputReference | CdnResourceOptionsFastedgeOnResponseBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
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
    execute_on_edge: {
      value: cdktf.booleanToHclTerraform(struct!.executeOnEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execute_on_shield: {
      value: cdktf.booleanToHclTerraform(struct!.executeOnShield),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interrupt_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.interruptOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsFastedgeOnResponseBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsFastedgeOnResponseBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._executeOnEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOnEdge = this._executeOnEdge;
    }
    if (this._executeOnShield !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOnShield = this._executeOnShield;
    }
    if (this._interruptOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptOnError = this._interruptOnError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsFastedgeOnResponseBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._enabled = undefined;
      this._executeOnEdge = undefined;
      this._executeOnShield = undefined;
      this._interruptOnError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._enabled = value.enabled;
      this._executeOnEdge = value.executeOnEdge;
      this._executeOnShield = value.executeOnShield;
      this._interruptOnError = value.interruptOnError;
    }
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // execute_on_edge - computed: false, optional: true, required: false
  private _executeOnEdge?: boolean | cdktf.IResolvable; 
  public get executeOnEdge() {
    return this.getBooleanAttribute('execute_on_edge');
  }
  public set executeOnEdge(value: boolean | cdktf.IResolvable) {
    this._executeOnEdge = value;
  }
  public resetExecuteOnEdge() {
    this._executeOnEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnEdgeInput() {
    return this._executeOnEdge;
  }

  // execute_on_shield - computed: false, optional: true, required: false
  private _executeOnShield?: boolean | cdktf.IResolvable; 
  public get executeOnShield() {
    return this.getBooleanAttribute('execute_on_shield');
  }
  public set executeOnShield(value: boolean | cdktf.IResolvable) {
    this._executeOnShield = value;
  }
  public resetExecuteOnShield() {
    this._executeOnShield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnShieldInput() {
    return this._executeOnShield;
  }

  // interrupt_on_error - computed: false, optional: true, required: false
  private _interruptOnError?: boolean | cdktf.IResolvable; 
  public get interruptOnError() {
    return this.getBooleanAttribute('interrupt_on_error');
  }
  public set interruptOnError(value: boolean | cdktf.IResolvable) {
    this._interruptOnError = value;
  }
  public resetInterruptOnError() {
    this._interruptOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptOnErrorInput() {
    return this._interruptOnError;
  }
}
export interface CdnResourceOptionsFastedgeOnResponseHeaders {
  /**
  * The ID of the application in FastEdge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#app_id CdnResource#app_id}
  */
  readonly appId: string;
  /**
  * Determines if the FastEdge application should be called whenever HTTP request headers are received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the edge nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#execute_on_edge CdnResource#execute_on_edge}
  */
  readonly executeOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the shield nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#execute_on_shield CdnResource#execute_on_shield}
  */
  readonly executeOnShield?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request execution should be interrupted when an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#interrupt_on_error CdnResource#interrupt_on_error}
  */
  readonly interruptOnError?: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsFastedgeOnResponseHeadersToTerraform(struct?: CdnResourceOptionsFastedgeOnResponseHeadersOutputReference | CdnResourceOptionsFastedgeOnResponseHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    execute_on_edge: cdktf.booleanToTerraform(struct!.executeOnEdge),
    execute_on_shield: cdktf.booleanToTerraform(struct!.executeOnShield),
    interrupt_on_error: cdktf.booleanToTerraform(struct!.interruptOnError),
  }
}


export function cdnResourceOptionsFastedgeOnResponseHeadersToHclTerraform(struct?: CdnResourceOptionsFastedgeOnResponseHeadersOutputReference | CdnResourceOptionsFastedgeOnResponseHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
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
    execute_on_edge: {
      value: cdktf.booleanToHclTerraform(struct!.executeOnEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execute_on_shield: {
      value: cdktf.booleanToHclTerraform(struct!.executeOnShield),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interrupt_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.interruptOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsFastedgeOnResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsFastedgeOnResponseHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._executeOnEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOnEdge = this._executeOnEdge;
    }
    if (this._executeOnShield !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOnShield = this._executeOnShield;
    }
    if (this._interruptOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptOnError = this._interruptOnError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsFastedgeOnResponseHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._enabled = undefined;
      this._executeOnEdge = undefined;
      this._executeOnShield = undefined;
      this._interruptOnError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._enabled = value.enabled;
      this._executeOnEdge = value.executeOnEdge;
      this._executeOnShield = value.executeOnShield;
      this._interruptOnError = value.interruptOnError;
    }
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // execute_on_edge - computed: false, optional: true, required: false
  private _executeOnEdge?: boolean | cdktf.IResolvable; 
  public get executeOnEdge() {
    return this.getBooleanAttribute('execute_on_edge');
  }
  public set executeOnEdge(value: boolean | cdktf.IResolvable) {
    this._executeOnEdge = value;
  }
  public resetExecuteOnEdge() {
    this._executeOnEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnEdgeInput() {
    return this._executeOnEdge;
  }

  // execute_on_shield - computed: false, optional: true, required: false
  private _executeOnShield?: boolean | cdktf.IResolvable; 
  public get executeOnShield() {
    return this.getBooleanAttribute('execute_on_shield');
  }
  public set executeOnShield(value: boolean | cdktf.IResolvable) {
    this._executeOnShield = value;
  }
  public resetExecuteOnShield() {
    this._executeOnShield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnShieldInput() {
    return this._executeOnShield;
  }

  // interrupt_on_error - computed: false, optional: true, required: false
  private _interruptOnError?: boolean | cdktf.IResolvable; 
  public get interruptOnError() {
    return this.getBooleanAttribute('interrupt_on_error');
  }
  public set interruptOnError(value: boolean | cdktf.IResolvable) {
    this._interruptOnError = value;
  }
  public resetInterruptOnError() {
    this._interruptOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptOnErrorInput() {
    return this._interruptOnError;
  }
}
export interface CdnResourceOptionsFastedge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * on_request_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#on_request_body CdnResource#on_request_body}
  */
  readonly onRequestBody?: CdnResourceOptionsFastedgeOnRequestBody;
  /**
  * on_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#on_request_headers CdnResource#on_request_headers}
  */
  readonly onRequestHeaders?: CdnResourceOptionsFastedgeOnRequestHeaders;
  /**
  * on_response_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#on_response_body CdnResource#on_response_body}
  */
  readonly onResponseBody?: CdnResourceOptionsFastedgeOnResponseBody;
  /**
  * on_response_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#on_response_headers CdnResource#on_response_headers}
  */
  readonly onResponseHeaders?: CdnResourceOptionsFastedgeOnResponseHeaders;
}

export function cdnResourceOptionsFastedgeToTerraform(struct?: CdnResourceOptionsFastedgeOutputReference | CdnResourceOptionsFastedge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    on_request_body: cdnResourceOptionsFastedgeOnRequestBodyToTerraform(struct!.onRequestBody),
    on_request_headers: cdnResourceOptionsFastedgeOnRequestHeadersToTerraform(struct!.onRequestHeaders),
    on_response_body: cdnResourceOptionsFastedgeOnResponseBodyToTerraform(struct!.onResponseBody),
    on_response_headers: cdnResourceOptionsFastedgeOnResponseHeadersToTerraform(struct!.onResponseHeaders),
  }
}


export function cdnResourceOptionsFastedgeToHclTerraform(struct?: CdnResourceOptionsFastedgeOutputReference | CdnResourceOptionsFastedge): any {
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
    on_request_body: {
      value: cdnResourceOptionsFastedgeOnRequestBodyToHclTerraform(struct!.onRequestBody),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsFastedgeOnRequestBodyList",
    },
    on_request_headers: {
      value: cdnResourceOptionsFastedgeOnRequestHeadersToHclTerraform(struct!.onRequestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsFastedgeOnRequestHeadersList",
    },
    on_response_body: {
      value: cdnResourceOptionsFastedgeOnResponseBodyToHclTerraform(struct!.onResponseBody),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsFastedgeOnResponseBodyList",
    },
    on_response_headers: {
      value: cdnResourceOptionsFastedgeOnResponseHeadersToHclTerraform(struct!.onResponseHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsFastedgeOnResponseHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsFastedgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsFastedge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._onRequestBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onRequestBody = this._onRequestBody?.internalValue;
    }
    if (this._onRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onRequestHeaders = this._onRequestHeaders?.internalValue;
    }
    if (this._onResponseBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onResponseBody = this._onResponseBody?.internalValue;
    }
    if (this._onResponseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onResponseHeaders = this._onResponseHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsFastedge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._onRequestBody.internalValue = undefined;
      this._onRequestHeaders.internalValue = undefined;
      this._onResponseBody.internalValue = undefined;
      this._onResponseHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._onRequestBody.internalValue = value.onRequestBody;
      this._onRequestHeaders.internalValue = value.onRequestHeaders;
      this._onResponseBody.internalValue = value.onResponseBody;
      this._onResponseHeaders.internalValue = value.onResponseHeaders;
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

  // on_request_body - computed: false, optional: true, required: false
  private _onRequestBody = new CdnResourceOptionsFastedgeOnRequestBodyOutputReference(this, "on_request_body");
  public get onRequestBody() {
    return this._onRequestBody;
  }
  public putOnRequestBody(value: CdnResourceOptionsFastedgeOnRequestBody) {
    this._onRequestBody.internalValue = value;
  }
  public resetOnRequestBody() {
    this._onRequestBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onRequestBodyInput() {
    return this._onRequestBody.internalValue;
  }

  // on_request_headers - computed: false, optional: true, required: false
  private _onRequestHeaders = new CdnResourceOptionsFastedgeOnRequestHeadersOutputReference(this, "on_request_headers");
  public get onRequestHeaders() {
    return this._onRequestHeaders;
  }
  public putOnRequestHeaders(value: CdnResourceOptionsFastedgeOnRequestHeaders) {
    this._onRequestHeaders.internalValue = value;
  }
  public resetOnRequestHeaders() {
    this._onRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onRequestHeadersInput() {
    return this._onRequestHeaders.internalValue;
  }

  // on_response_body - computed: false, optional: true, required: false
  private _onResponseBody = new CdnResourceOptionsFastedgeOnResponseBodyOutputReference(this, "on_response_body");
  public get onResponseBody() {
    return this._onResponseBody;
  }
  public putOnResponseBody(value: CdnResourceOptionsFastedgeOnResponseBody) {
    this._onResponseBody.internalValue = value;
  }
  public resetOnResponseBody() {
    this._onResponseBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onResponseBodyInput() {
    return this._onResponseBody.internalValue;
  }

  // on_response_headers - computed: false, optional: true, required: false
  private _onResponseHeaders = new CdnResourceOptionsFastedgeOnResponseHeadersOutputReference(this, "on_response_headers");
  public get onResponseHeaders() {
    return this._onResponseHeaders;
  }
  public putOnResponseHeaders(value: CdnResourceOptionsFastedgeOnResponseHeaders) {
    this._onResponseHeaders.internalValue = value;
  }
  public resetOnResponseHeaders() {
    this._onResponseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onResponseHeadersInput() {
    return this._onResponseHeaders.internalValue;
  }
}
export interface CdnResourceOptionsFetchCompressed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Specify the redirect status code that the origin server returns. Possible values: 301, 302, 303, 307, 308.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#codes CdnResource#codes}
  */
  readonly codes: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsFollowOriginRedirectToTerraform(struct?: CdnResourceOptionsFollowOriginRedirectOutputReference | CdnResourceOptionsFollowOriginRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.codes),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsFollowOriginRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codes = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codes = value.codes;
      this._enabled = value.enabled;
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
}
export interface CdnResourceOptionsForceReturn {
  /**
  * Response text or URL if you're going to set up redirection. Max length = 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#body CdnResource#body}
  */
  readonly body?: string;
  /**
  * HTTP response status code. Available codes: 100 <= value <= 599. Reserved codes: 408, 444, 477, 494, 495, 496, 497, 499
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#code CdnResource#code}
  */
  readonly code: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
export interface CdnResourceOptionsGzipOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsGzipOnToTerraform(struct?: CdnResourceOptionsGzipOnOutputReference | CdnResourceOptionsGzipOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsGzipOnToHclTerraform(struct?: CdnResourceOptionsGzipOnOutputReference | CdnResourceOptionsGzipOn): any {
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

export class CdnResourceOptionsGzipOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsGzipOn | undefined {
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

  public set internalValue(value: CdnResourceOptionsGzipOn | undefined) {
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
export interface CdnResourceOptionsHostHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * If enabled, JPG and PNG images automatically convert to AVIF format when supported by the end users browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#avif_enabled CdnResource#avif_enabled}
  */
  readonly avifEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Represents compression without quality loss for PNG format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#png_lossless CdnResource#png_lossless}
  */
  readonly pngLossless?: boolean | cdktf.IResolvable;
  /**
  * Quality settings for JPG and PNG images. Specify a value from 1 to 100. The higher the value, the better the image quality and the larger the file size after conversion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#quality CdnResource#quality}
  */
  readonly quality: number;
  /**
  * If enabled, JPG and PNG images automatically convert to WebP format when supported by the end users browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#webp_enabled CdnResource#webp_enabled}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify list of IP address with a subnet mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#excepted_values CdnResource#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Possible values: allow, deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#policy_type CdnResource#policy_type}
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
  * Amount of downloaded data after which the user will be rate limited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#buffer CdnResource#buffer}
  */
  readonly buffer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The way of controlling the download speed per each connection. Possible values are: static, dynamic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#limit_type CdnResource#limit_type}
  */
  readonly limitType: string;
  /**
  * Maximum download speed per connection. Must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#speed CdnResource#speed}
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
export interface CdnResourceOptionsProxyCacheKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Key for caching. Should be a combination of the specified variables: $request_uri, $scheme, $uri.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: string;
}

export function cdnResourceOptionsProxyCacheKeyToTerraform(struct?: CdnResourceOptionsProxyCacheKeyOutputReference | CdnResourceOptionsProxyCacheKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsProxyCacheKeyToHclTerraform(struct?: CdnResourceOptionsProxyCacheKeyOutputReference | CdnResourceOptionsProxyCacheKey): any {
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

export class CdnResourceOptionsProxyCacheKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsProxyCacheKey | undefined {
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

  public set internalValue(value: CdnResourceOptionsProxyCacheKey | undefined) {
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
export interface CdnResourceOptionsProxyCacheMethodsSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
export interface CdnResourceOptionsProxyConnectTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify time in seconds ('1s', '30s' for example).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: string;
}

export function cdnResourceOptionsProxyConnectTimeoutToTerraform(struct?: CdnResourceOptionsProxyConnectTimeoutOutputReference | CdnResourceOptionsProxyConnectTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsProxyConnectTimeoutToHclTerraform(struct?: CdnResourceOptionsProxyConnectTimeoutOutputReference | CdnResourceOptionsProxyConnectTimeout): any {
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

export class CdnResourceOptionsProxyConnectTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsProxyConnectTimeout | undefined {
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

  public set internalValue(value: CdnResourceOptionsProxyConnectTimeout | undefined) {
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
export interface CdnResourceOptionsProxyReadTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify time in seconds ('1s', '30s' for example).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: string;
}

export function cdnResourceOptionsProxyReadTimeoutToTerraform(struct?: CdnResourceOptionsProxyReadTimeoutOutputReference | CdnResourceOptionsProxyReadTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsProxyReadTimeoutToHclTerraform(struct?: CdnResourceOptionsProxyReadTimeoutOutputReference | CdnResourceOptionsProxyReadTimeout): any {
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

export class CdnResourceOptionsProxyReadTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsProxyReadTimeout | undefined {
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

  public set internalValue(value: CdnResourceOptionsProxyReadTimeout | undefined) {
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
export interface CdnResourceOptionsQueryParamsBlacklistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
export interface CdnResourceOptionsQueryStringForwarding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the keys that will not be forwarded from playlist files to media chunk files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#forward_except_keys CdnResource#forward_except_keys}
  */
  readonly forwardExceptKeys?: string[];
  /**
  * Specify the types of playlist files from which parameters will be extracted and forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#forward_from_file_types CdnResource#forward_from_file_types}
  */
  readonly forwardFromFileTypes: string[];
  /**
  * Specify the keys that will be forwarded from playlist files to media chunk files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#forward_only_keys CdnResource#forward_only_keys}
  */
  readonly forwardOnlyKeys?: string[];
  /**
  * Specify the types of media chunk files to which parameters, extracted from playlist files, will be forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#forward_to_file_types CdnResource#forward_to_file_types}
  */
  readonly forwardToFileTypes: string[];
}

export function cdnResourceOptionsQueryStringForwardingToTerraform(struct?: CdnResourceOptionsQueryStringForwardingOutputReference | CdnResourceOptionsQueryStringForwarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    forward_except_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forwardExceptKeys),
    forward_from_file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forwardFromFileTypes),
    forward_only_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forwardOnlyKeys),
    forward_to_file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forwardToFileTypes),
  }
}


export function cdnResourceOptionsQueryStringForwardingToHclTerraform(struct?: CdnResourceOptionsQueryStringForwardingOutputReference | CdnResourceOptionsQueryStringForwarding): any {
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
    forward_except_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forwardExceptKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    forward_from_file_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forwardFromFileTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    forward_only_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forwardOnlyKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    forward_to_file_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forwardToFileTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsQueryStringForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsQueryStringForwarding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._forwardExceptKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardExceptKeys = this._forwardExceptKeys;
    }
    if (this._forwardFromFileTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardFromFileTypes = this._forwardFromFileTypes;
    }
    if (this._forwardOnlyKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardOnlyKeys = this._forwardOnlyKeys;
    }
    if (this._forwardToFileTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardToFileTypes = this._forwardToFileTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsQueryStringForwarding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._forwardExceptKeys = undefined;
      this._forwardFromFileTypes = undefined;
      this._forwardOnlyKeys = undefined;
      this._forwardToFileTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._forwardExceptKeys = value.forwardExceptKeys;
      this._forwardFromFileTypes = value.forwardFromFileTypes;
      this._forwardOnlyKeys = value.forwardOnlyKeys;
      this._forwardToFileTypes = value.forwardToFileTypes;
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

  // forward_except_keys - computed: false, optional: true, required: false
  private _forwardExceptKeys?: string[]; 
  public get forwardExceptKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('forward_except_keys'));
  }
  public set forwardExceptKeys(value: string[]) {
    this._forwardExceptKeys = value;
  }
  public resetForwardExceptKeys() {
    this._forwardExceptKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardExceptKeysInput() {
    return this._forwardExceptKeys;
  }

  // forward_from_file_types - computed: false, optional: false, required: true
  private _forwardFromFileTypes?: string[]; 
  public get forwardFromFileTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('forward_from_file_types'));
  }
  public set forwardFromFileTypes(value: string[]) {
    this._forwardFromFileTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardFromFileTypesInput() {
    return this._forwardFromFileTypes;
  }

  // forward_only_keys - computed: false, optional: true, required: false
  private _forwardOnlyKeys?: string[]; 
  public get forwardOnlyKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('forward_only_keys'));
  }
  public set forwardOnlyKeys(value: string[]) {
    this._forwardOnlyKeys = value;
  }
  public resetForwardOnlyKeys() {
    this._forwardOnlyKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardOnlyKeysInput() {
    return this._forwardOnlyKeys;
  }

  // forward_to_file_types - computed: false, optional: false, required: true
  private _forwardToFileTypes?: string[]; 
  public get forwardToFileTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('forward_to_file_types'));
  }
  public set forwardToFileTypes(value: string[]) {
    this._forwardToFileTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToFileTypesInput() {
    return this._forwardToFileTypes;
  }
}
export interface CdnResourceOptionsRedirectHttpToHttps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
export interface CdnResourceOptionsReferrerAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify list of domain names or wildcard domains (without http:// or https://). For example, example.com or *.example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#excepted_values CdnResource#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Possible values: allow, deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#policy_type CdnResource#policy_type}
  */
  readonly policyType: string;
}

export function cdnResourceOptionsReferrerAclToTerraform(struct?: CdnResourceOptionsReferrerAclOutputReference | CdnResourceOptionsReferrerAcl): any {
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


export function cdnResourceOptionsReferrerAclToHclTerraform(struct?: CdnResourceOptionsReferrerAclOutputReference | CdnResourceOptionsReferrerAcl): any {
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

export class CdnResourceOptionsReferrerAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsReferrerAcl | undefined {
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

  public set internalValue(value: CdnResourceOptionsReferrerAcl | undefined) {
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
export interface CdnResourceOptionsRequestLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#burst CdnResource#burst}
  */
  readonly burst: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#delay CdnResource#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#rate CdnResource#rate}
  */
  readonly rate: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#rate_unit CdnResource#rate_unit}
  */
  readonly rateUnit?: string;
}

export function cdnResourceOptionsRequestLimiterToTerraform(struct?: CdnResourceOptionsRequestLimiterOutputReference | CdnResourceOptionsRequestLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst: cdktf.numberToTerraform(struct!.burst),
    delay: cdktf.numberToTerraform(struct!.delay),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rate: cdktf.numberToTerraform(struct!.rate),
    rate_unit: cdktf.stringToTerraform(struct!.rateUnit),
  }
}


export function cdnResourceOptionsRequestLimiterToHclTerraform(struct?: CdnResourceOptionsRequestLimiterOutputReference | CdnResourceOptionsRequestLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
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
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_unit: {
      value: cdktf.stringToHclTerraform(struct!.rateUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsRequestLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsRequestLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._rateUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateUnit = this._rateUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsRequestLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._burst = undefined;
      this._delay = undefined;
      this._enabled = undefined;
      this._rate = undefined;
      this._rateUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._burst = value.burst;
      this._delay = value.delay;
      this._enabled = value.enabled;
      this._rate = value.rate;
      this._rateUnit = value.rateUnit;
    }
  }

  // burst - computed: false, optional: false, required: true
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
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

  // rate - computed: false, optional: false, required: true
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // rate_unit - computed: false, optional: true, required: false
  private _rateUnit?: string; 
  public get rateUnit() {
    return this.getStringAttribute('rate_unit');
  }
  public set rateUnit(value: string) {
    this._rateUnit = value;
  }
  public resetRateUnit() {
    this._rateUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateUnitInput() {
    return this._rateUnit;
  }
}
export interface CdnResourceOptionsResponseHeadersHidingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of HTTP headers. The following required headers cannot be hidden from response: Connection, Content-Length, Content-Type, Date, Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#excepted CdnResource#excepted}
  */
  readonly excepted: string[];
  /**
  * Specify a mode of hiding HTTP headers from the response. Possible values are: hide, show.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#mode CdnResource#mode}
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
  * The pattern for Rewrite. At least one group should be specified. For Example: /rewrite_from/(.*) /rewrite_to/$1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#body CdnResource#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Define flag for the Rewrite option. Possible values: last, break, redirect, permanent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#flag CdnResource#flag}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A key generated on your side that will be used for URL signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#key CdnResource#key}
  */
  readonly key: string;
  /**
  * Specify the type of URL Signing. It can be either 0 or 2. Type 0 - includes end user's IP to secure token generation. Type 2 - excludes end user's IP from secure token generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#type CdnResource#type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Custom SNI hostname. Required if sni_type is set to 'custom'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#custom_hostname CdnResource#custom_hostname}
  */
  readonly customHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify SNI type. Possible values: dynamic, custom. dynamic - SNI hostname depends on the hostHeader and the forward_host_header options. custom - custom SNI hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#sni_type CdnResource#sni_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Possible values: error, http_403, http_404, http_429, http_500, http_502, http_503, http_504, invalid_header, timeout, updating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Header name is restricted to 255 symbols and can contain latin letters (A-Z, a-z), numbers (0-9), dashes, and underscores. Header value is restricted to 512 symbols and can contain latin letters (a-z), numbers (0-9), spaces, underscores and symbols (-/.:). Space can be used only between words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Specifies if the header will be added to a response from CDN regardless of response code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#always CdnResource#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#name CdnResource#name}
  */
  readonly name: string;
  /**
  * Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Possible values (case sensitive): SSLv3, TLSv1, TLSv1.1, TLSv1.2, TLSv1.3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
export interface CdnResourceOptionsUseDns01LeChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsUseDns01LeChallengeToTerraform(struct?: CdnResourceOptionsUseDns01LeChallengeOutputReference | CdnResourceOptionsUseDns01LeChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsUseDns01LeChallengeToHclTerraform(struct?: CdnResourceOptionsUseDns01LeChallengeOutputReference | CdnResourceOptionsUseDns01LeChallenge): any {
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

export class CdnResourceOptionsUseDns01LeChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsUseDns01LeChallenge | undefined {
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

  public set internalValue(value: CdnResourceOptionsUseDns01LeChallenge | undefined) {
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
export interface CdnResourceOptionsUseRsaLeCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsUseRsaLeCertToTerraform(struct?: CdnResourceOptionsUseRsaLeCertOutputReference | CdnResourceOptionsUseRsaLeCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsUseRsaLeCertToHclTerraform(struct?: CdnResourceOptionsUseRsaLeCertOutputReference | CdnResourceOptionsUseRsaLeCert): any {
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

export class CdnResourceOptionsUseRsaLeCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsUseRsaLeCert | undefined {
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

  public set internalValue(value: CdnResourceOptionsUseRsaLeCert | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of User-Agents. Use "" to allow/deny access when the User-Agent header is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#excepted_values CdnResource#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Possible values: allow, deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#policy_type CdnResource#policy_type}
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
export interface CdnResourceOptionsWaap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsWaapToTerraform(struct?: CdnResourceOptionsWaapOutputReference | CdnResourceOptionsWaap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsWaapToHclTerraform(struct?: CdnResourceOptionsWaapOutputReference | CdnResourceOptionsWaap): any {
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

export class CdnResourceOptionsWaapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsWaap | undefined {
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

  public set internalValue(value: CdnResourceOptionsWaap | undefined) {
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
export interface CdnResourceOptionsWaf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsWafToTerraform(struct?: CdnResourceOptionsWafOutputReference | CdnResourceOptionsWaf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsWafToHclTerraform(struct?: CdnResourceOptionsWafOutputReference | CdnResourceOptionsWaf): any {
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

export class CdnResourceOptionsWafOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsWaf | undefined {
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

  public set internalValue(value: CdnResourceOptionsWaf | undefined) {
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
export interface CdnResourceOptionsWebsockets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#value CdnResource#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#allowed_http_methods CdnResource#allowed_http_methods}
  */
  readonly allowedHttpMethods?: CdnResourceOptionsAllowedHttpMethods;
  /**
  * brotli_compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#brotli_compression CdnResource#brotli_compression}
  */
  readonly brotliCompression?: CdnResourceOptionsBrotliCompression;
  /**
  * browser_cache_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#browser_cache_settings CdnResource#browser_cache_settings}
  */
  readonly browserCacheSettings?: CdnResourceOptionsBrowserCacheSettings;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#cors CdnResource#cors}
  */
  readonly cors?: CdnResourceOptionsCors;
  /**
  * country_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#country_acl CdnResource#country_acl}
  */
  readonly countryAcl?: CdnResourceOptionsCountryAcl;
  /**
  * disable_proxy_force_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#disable_proxy_force_ranges CdnResource#disable_proxy_force_ranges}
  */
  readonly disableProxyForceRanges?: CdnResourceOptionsDisableProxyForceRanges;
  /**
  * edge_cache_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#edge_cache_settings CdnResource#edge_cache_settings}
  */
  readonly edgeCacheSettings?: CdnResourceOptionsEdgeCacheSettings;
  /**
  * fastedge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#fastedge CdnResource#fastedge}
  */
  readonly fastedge?: CdnResourceOptionsFastedge;
  /**
  * fetch_compressed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#fetch_compressed CdnResource#fetch_compressed}
  */
  readonly fetchCompressed?: CdnResourceOptionsFetchCompressed;
  /**
  * follow_origin_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#follow_origin_redirect CdnResource#follow_origin_redirect}
  */
  readonly followOriginRedirect?: CdnResourceOptionsFollowOriginRedirect;
  /**
  * force_return block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#force_return CdnResource#force_return}
  */
  readonly forceReturn?: CdnResourceOptionsForceReturn;
  /**
  * forward_host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#forward_host_header CdnResource#forward_host_header}
  */
  readonly forwardHostHeader?: CdnResourceOptionsForwardHostHeader;
  /**
  * gzip_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#gzip_on CdnResource#gzip_on}
  */
  readonly gzipOn?: CdnResourceOptionsGzipOn;
  /**
  * host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#host_header CdnResource#host_header}
  */
  readonly hostHeader?: CdnResourceOptionsHostHeader;
  /**
  * http3_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#http3_enabled CdnResource#http3_enabled}
  */
  readonly http3Enabled?: CdnResourceOptionsHttp3Enabled;
  /**
  * ignore_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#ignore_cookie CdnResource#ignore_cookie}
  */
  readonly ignoreCookie?: CdnResourceOptionsIgnoreCookie;
  /**
  * ignore_query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#ignore_query_string CdnResource#ignore_query_string}
  */
  readonly ignoreQueryString?: CdnResourceOptionsIgnoreQueryString;
  /**
  * image_stack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#image_stack CdnResource#image_stack}
  */
  readonly imageStack?: CdnResourceOptionsImageStack;
  /**
  * ip_address_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#ip_address_acl CdnResource#ip_address_acl}
  */
  readonly ipAddressAcl?: CdnResourceOptionsIpAddressAcl;
  /**
  * limit_bandwidth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#limit_bandwidth CdnResource#limit_bandwidth}
  */
  readonly limitBandwidth?: CdnResourceOptionsLimitBandwidth;
  /**
  * proxy_cache_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#proxy_cache_key CdnResource#proxy_cache_key}
  */
  readonly proxyCacheKey?: CdnResourceOptionsProxyCacheKey;
  /**
  * proxy_cache_methods_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#proxy_cache_methods_set CdnResource#proxy_cache_methods_set}
  */
  readonly proxyCacheMethodsSet?: CdnResourceOptionsProxyCacheMethodsSet;
  /**
  * proxy_connect_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#proxy_connect_timeout CdnResource#proxy_connect_timeout}
  */
  readonly proxyConnectTimeout?: CdnResourceOptionsProxyConnectTimeout;
  /**
  * proxy_read_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#proxy_read_timeout CdnResource#proxy_read_timeout}
  */
  readonly proxyReadTimeout?: CdnResourceOptionsProxyReadTimeout;
  /**
  * query_params_blacklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#query_params_blacklist CdnResource#query_params_blacklist}
  */
  readonly queryParamsBlacklist?: CdnResourceOptionsQueryParamsBlacklistStruct;
  /**
  * query_params_whitelist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#query_params_whitelist CdnResource#query_params_whitelist}
  */
  readonly queryParamsWhitelist?: CdnResourceOptionsQueryParamsWhitelistStruct;
  /**
  * query_string_forwarding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#query_string_forwarding CdnResource#query_string_forwarding}
  */
  readonly queryStringForwarding?: CdnResourceOptionsQueryStringForwarding;
  /**
  * redirect_http_to_https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#redirect_http_to_https CdnResource#redirect_http_to_https}
  */
  readonly redirectHttpToHttps?: CdnResourceOptionsRedirectHttpToHttps;
  /**
  * redirect_https_to_http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#redirect_https_to_http CdnResource#redirect_https_to_http}
  */
  readonly redirectHttpsToHttp?: CdnResourceOptionsRedirectHttpsToHttp;
  /**
  * referrer_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#referrer_acl CdnResource#referrer_acl}
  */
  readonly referrerAcl?: CdnResourceOptionsReferrerAcl;
  /**
  * request_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#request_limiter CdnResource#request_limiter}
  */
  readonly requestLimiter?: CdnResourceOptionsRequestLimiter;
  /**
  * response_headers_hiding_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#response_headers_hiding_policy CdnResource#response_headers_hiding_policy}
  */
  readonly responseHeadersHidingPolicy?: CdnResourceOptionsResponseHeadersHidingPolicy;
  /**
  * rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#rewrite CdnResource#rewrite}
  */
  readonly rewrite?: CdnResourceOptionsRewrite;
  /**
  * secure_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#secure_key CdnResource#secure_key}
  */
  readonly secureKey?: CdnResourceOptionsSecureKey;
  /**
  * slice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#slice CdnResource#slice}
  */
  readonly slice?: CdnResourceOptionsSlice;
  /**
  * sni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#sni CdnResource#sni}
  */
  readonly sni?: CdnResourceOptionsSni;
  /**
  * stale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#stale CdnResource#stale}
  */
  readonly stale?: CdnResourceOptionsStale;
  /**
  * static_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#static_request_headers CdnResource#static_request_headers}
  */
  readonly staticRequestHeaders?: CdnResourceOptionsStaticRequestHeaders;
  /**
  * static_response_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#static_response_headers CdnResource#static_response_headers}
  */
  readonly staticResponseHeaders?: CdnResourceOptionsStaticResponseHeaders;
  /**
  * tls_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#tls_versions CdnResource#tls_versions}
  */
  readonly tlsVersions?: CdnResourceOptionsTlsVersions;
  /**
  * use_default_le_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#use_default_le_chain CdnResource#use_default_le_chain}
  */
  readonly useDefaultLeChain?: CdnResourceOptionsUseDefaultLeChain;
  /**
  * use_dns01_le_challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#use_dns01_le_challenge CdnResource#use_dns01_le_challenge}
  */
  readonly useDns01LeChallenge?: CdnResourceOptionsUseDns01LeChallenge;
  /**
  * use_rsa_le_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#use_rsa_le_cert CdnResource#use_rsa_le_cert}
  */
  readonly useRsaLeCert?: CdnResourceOptionsUseRsaLeCert;
  /**
  * user_agent_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#user_agent_acl CdnResource#user_agent_acl}
  */
  readonly userAgentAcl?: CdnResourceOptionsUserAgentAcl;
  /**
  * waap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#waap CdnResource#waap}
  */
  readonly waap?: CdnResourceOptionsWaap;
  /**
  * waf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#waf CdnResource#waf}
  */
  readonly waf?: CdnResourceOptionsWaf;
  /**
  * websockets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#websockets CdnResource#websockets}
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
    country_acl: cdnResourceOptionsCountryAclToTerraform(struct!.countryAcl),
    disable_proxy_force_ranges: cdnResourceOptionsDisableProxyForceRangesToTerraform(struct!.disableProxyForceRanges),
    edge_cache_settings: cdnResourceOptionsEdgeCacheSettingsToTerraform(struct!.edgeCacheSettings),
    fastedge: cdnResourceOptionsFastedgeToTerraform(struct!.fastedge),
    fetch_compressed: cdnResourceOptionsFetchCompressedToTerraform(struct!.fetchCompressed),
    follow_origin_redirect: cdnResourceOptionsFollowOriginRedirectToTerraform(struct!.followOriginRedirect),
    force_return: cdnResourceOptionsForceReturnToTerraform(struct!.forceReturn),
    forward_host_header: cdnResourceOptionsForwardHostHeaderToTerraform(struct!.forwardHostHeader),
    gzip_on: cdnResourceOptionsGzipOnToTerraform(struct!.gzipOn),
    host_header: cdnResourceOptionsHostHeaderToTerraform(struct!.hostHeader),
    http3_enabled: cdnResourceOptionsHttp3EnabledToTerraform(struct!.http3Enabled),
    ignore_cookie: cdnResourceOptionsIgnoreCookieToTerraform(struct!.ignoreCookie),
    ignore_query_string: cdnResourceOptionsIgnoreQueryStringToTerraform(struct!.ignoreQueryString),
    image_stack: cdnResourceOptionsImageStackToTerraform(struct!.imageStack),
    ip_address_acl: cdnResourceOptionsIpAddressAclToTerraform(struct!.ipAddressAcl),
    limit_bandwidth: cdnResourceOptionsLimitBandwidthToTerraform(struct!.limitBandwidth),
    proxy_cache_key: cdnResourceOptionsProxyCacheKeyToTerraform(struct!.proxyCacheKey),
    proxy_cache_methods_set: cdnResourceOptionsProxyCacheMethodsSetToTerraform(struct!.proxyCacheMethodsSet),
    proxy_connect_timeout: cdnResourceOptionsProxyConnectTimeoutToTerraform(struct!.proxyConnectTimeout),
    proxy_read_timeout: cdnResourceOptionsProxyReadTimeoutToTerraform(struct!.proxyReadTimeout),
    query_params_blacklist: cdnResourceOptionsQueryParamsBlacklistStructToTerraform(struct!.queryParamsBlacklist),
    query_params_whitelist: cdnResourceOptionsQueryParamsWhitelistStructToTerraform(struct!.queryParamsWhitelist),
    query_string_forwarding: cdnResourceOptionsQueryStringForwardingToTerraform(struct!.queryStringForwarding),
    redirect_http_to_https: cdnResourceOptionsRedirectHttpToHttpsToTerraform(struct!.redirectHttpToHttps),
    redirect_https_to_http: cdnResourceOptionsRedirectHttpsToHttpToTerraform(struct!.redirectHttpsToHttp),
    referrer_acl: cdnResourceOptionsReferrerAclToTerraform(struct!.referrerAcl),
    request_limiter: cdnResourceOptionsRequestLimiterToTerraform(struct!.requestLimiter),
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
    use_dns01_le_challenge: cdnResourceOptionsUseDns01LeChallengeToTerraform(struct!.useDns01LeChallenge),
    use_rsa_le_cert: cdnResourceOptionsUseRsaLeCertToTerraform(struct!.useRsaLeCert),
    user_agent_acl: cdnResourceOptionsUserAgentAclToTerraform(struct!.userAgentAcl),
    waap: cdnResourceOptionsWaapToTerraform(struct!.waap),
    waf: cdnResourceOptionsWafToTerraform(struct!.waf),
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
    country_acl: {
      value: cdnResourceOptionsCountryAclToHclTerraform(struct!.countryAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsCountryAclList",
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
    fastedge: {
      value: cdnResourceOptionsFastedgeToHclTerraform(struct!.fastedge),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsFastedgeList",
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
    gzip_on: {
      value: cdnResourceOptionsGzipOnToHclTerraform(struct!.gzipOn),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsGzipOnList",
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
    proxy_cache_key: {
      value: cdnResourceOptionsProxyCacheKeyToHclTerraform(struct!.proxyCacheKey),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsProxyCacheKeyList",
    },
    proxy_cache_methods_set: {
      value: cdnResourceOptionsProxyCacheMethodsSetToHclTerraform(struct!.proxyCacheMethodsSet),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsProxyCacheMethodsSetList",
    },
    proxy_connect_timeout: {
      value: cdnResourceOptionsProxyConnectTimeoutToHclTerraform(struct!.proxyConnectTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsProxyConnectTimeoutList",
    },
    proxy_read_timeout: {
      value: cdnResourceOptionsProxyReadTimeoutToHclTerraform(struct!.proxyReadTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsProxyReadTimeoutList",
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
    query_string_forwarding: {
      value: cdnResourceOptionsQueryStringForwardingToHclTerraform(struct!.queryStringForwarding),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsQueryStringForwardingList",
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
    referrer_acl: {
      value: cdnResourceOptionsReferrerAclToHclTerraform(struct!.referrerAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsReferrerAclList",
    },
    request_limiter: {
      value: cdnResourceOptionsRequestLimiterToHclTerraform(struct!.requestLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsRequestLimiterList",
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
    use_dns01_le_challenge: {
      value: cdnResourceOptionsUseDns01LeChallengeToHclTerraform(struct!.useDns01LeChallenge),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsUseDns01LeChallengeList",
    },
    use_rsa_le_cert: {
      value: cdnResourceOptionsUseRsaLeCertToHclTerraform(struct!.useRsaLeCert),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsUseRsaLeCertList",
    },
    user_agent_acl: {
      value: cdnResourceOptionsUserAgentAclToHclTerraform(struct!.userAgentAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsUserAgentAclList",
    },
    waap: {
      value: cdnResourceOptionsWaapToHclTerraform(struct!.waap),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsWaapList",
    },
    waf: {
      value: cdnResourceOptionsWafToHclTerraform(struct!.waf),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsWafList",
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
    if (this._countryAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryAcl = this._countryAcl?.internalValue;
    }
    if (this._disableProxyForceRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProxyForceRanges = this._disableProxyForceRanges?.internalValue;
    }
    if (this._edgeCacheSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeCacheSettings = this._edgeCacheSettings?.internalValue;
    }
    if (this._fastedge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastedge = this._fastedge?.internalValue;
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
    if (this._gzipOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipOn = this._gzipOn?.internalValue;
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
    if (this._proxyCacheKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyCacheKey = this._proxyCacheKey?.internalValue;
    }
    if (this._proxyCacheMethodsSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyCacheMethodsSet = this._proxyCacheMethodsSet?.internalValue;
    }
    if (this._proxyConnectTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConnectTimeout = this._proxyConnectTimeout?.internalValue;
    }
    if (this._proxyReadTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyReadTimeout = this._proxyReadTimeout?.internalValue;
    }
    if (this._queryParamsBlacklist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamsBlacklist = this._queryParamsBlacklist?.internalValue;
    }
    if (this._queryParamsWhitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamsWhitelist = this._queryParamsWhitelist?.internalValue;
    }
    if (this._queryStringForwarding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringForwarding = this._queryStringForwarding?.internalValue;
    }
    if (this._redirectHttpToHttps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectHttpToHttps = this._redirectHttpToHttps?.internalValue;
    }
    if (this._redirectHttpsToHttp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectHttpsToHttp = this._redirectHttpsToHttp?.internalValue;
    }
    if (this._referrerAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referrerAcl = this._referrerAcl?.internalValue;
    }
    if (this._requestLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLimiter = this._requestLimiter?.internalValue;
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
    if (this._useDns01LeChallenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDns01LeChallenge = this._useDns01LeChallenge?.internalValue;
    }
    if (this._useRsaLeCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRsaLeCert = this._useRsaLeCert?.internalValue;
    }
    if (this._userAgentAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgentAcl = this._userAgentAcl?.internalValue;
    }
    if (this._waap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waap = this._waap?.internalValue;
    }
    if (this._waf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waf = this._waf?.internalValue;
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
      this._countryAcl.internalValue = undefined;
      this._disableProxyForceRanges.internalValue = undefined;
      this._edgeCacheSettings.internalValue = undefined;
      this._fastedge.internalValue = undefined;
      this._fetchCompressed.internalValue = undefined;
      this._followOriginRedirect.internalValue = undefined;
      this._forceReturn.internalValue = undefined;
      this._forwardHostHeader.internalValue = undefined;
      this._gzipOn.internalValue = undefined;
      this._hostHeader.internalValue = undefined;
      this._http3Enabled.internalValue = undefined;
      this._ignoreCookie.internalValue = undefined;
      this._ignoreQueryString.internalValue = undefined;
      this._imageStack.internalValue = undefined;
      this._ipAddressAcl.internalValue = undefined;
      this._limitBandwidth.internalValue = undefined;
      this._proxyCacheKey.internalValue = undefined;
      this._proxyCacheMethodsSet.internalValue = undefined;
      this._proxyConnectTimeout.internalValue = undefined;
      this._proxyReadTimeout.internalValue = undefined;
      this._queryParamsBlacklist.internalValue = undefined;
      this._queryParamsWhitelist.internalValue = undefined;
      this._queryStringForwarding.internalValue = undefined;
      this._redirectHttpToHttps.internalValue = undefined;
      this._redirectHttpsToHttp.internalValue = undefined;
      this._referrerAcl.internalValue = undefined;
      this._requestLimiter.internalValue = undefined;
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
      this._useDns01LeChallenge.internalValue = undefined;
      this._useRsaLeCert.internalValue = undefined;
      this._userAgentAcl.internalValue = undefined;
      this._waap.internalValue = undefined;
      this._waf.internalValue = undefined;
      this._websockets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHttpMethods.internalValue = value.allowedHttpMethods;
      this._brotliCompression.internalValue = value.brotliCompression;
      this._browserCacheSettings.internalValue = value.browserCacheSettings;
      this._cors.internalValue = value.cors;
      this._countryAcl.internalValue = value.countryAcl;
      this._disableProxyForceRanges.internalValue = value.disableProxyForceRanges;
      this._edgeCacheSettings.internalValue = value.edgeCacheSettings;
      this._fastedge.internalValue = value.fastedge;
      this._fetchCompressed.internalValue = value.fetchCompressed;
      this._followOriginRedirect.internalValue = value.followOriginRedirect;
      this._forceReturn.internalValue = value.forceReturn;
      this._forwardHostHeader.internalValue = value.forwardHostHeader;
      this._gzipOn.internalValue = value.gzipOn;
      this._hostHeader.internalValue = value.hostHeader;
      this._http3Enabled.internalValue = value.http3Enabled;
      this._ignoreCookie.internalValue = value.ignoreCookie;
      this._ignoreQueryString.internalValue = value.ignoreQueryString;
      this._imageStack.internalValue = value.imageStack;
      this._ipAddressAcl.internalValue = value.ipAddressAcl;
      this._limitBandwidth.internalValue = value.limitBandwidth;
      this._proxyCacheKey.internalValue = value.proxyCacheKey;
      this._proxyCacheMethodsSet.internalValue = value.proxyCacheMethodsSet;
      this._proxyConnectTimeout.internalValue = value.proxyConnectTimeout;
      this._proxyReadTimeout.internalValue = value.proxyReadTimeout;
      this._queryParamsBlacklist.internalValue = value.queryParamsBlacklist;
      this._queryParamsWhitelist.internalValue = value.queryParamsWhitelist;
      this._queryStringForwarding.internalValue = value.queryStringForwarding;
      this._redirectHttpToHttps.internalValue = value.redirectHttpToHttps;
      this._redirectHttpsToHttp.internalValue = value.redirectHttpsToHttp;
      this._referrerAcl.internalValue = value.referrerAcl;
      this._requestLimiter.internalValue = value.requestLimiter;
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
      this._useDns01LeChallenge.internalValue = value.useDns01LeChallenge;
      this._useRsaLeCert.internalValue = value.useRsaLeCert;
      this._userAgentAcl.internalValue = value.userAgentAcl;
      this._waap.internalValue = value.waap;
      this._waf.internalValue = value.waf;
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

  // country_acl - computed: false, optional: true, required: false
  private _countryAcl = new CdnResourceOptionsCountryAclOutputReference(this, "country_acl");
  public get countryAcl() {
    return this._countryAcl;
  }
  public putCountryAcl(value: CdnResourceOptionsCountryAcl) {
    this._countryAcl.internalValue = value;
  }
  public resetCountryAcl() {
    this._countryAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryAclInput() {
    return this._countryAcl.internalValue;
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

  // fastedge - computed: false, optional: true, required: false
  private _fastedge = new CdnResourceOptionsFastedgeOutputReference(this, "fastedge");
  public get fastedge() {
    return this._fastedge;
  }
  public putFastedge(value: CdnResourceOptionsFastedge) {
    this._fastedge.internalValue = value;
  }
  public resetFastedge() {
    this._fastedge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastedgeInput() {
    return this._fastedge.internalValue;
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

  // gzip_on - computed: false, optional: true, required: false
  private _gzipOn = new CdnResourceOptionsGzipOnOutputReference(this, "gzip_on");
  public get gzipOn() {
    return this._gzipOn;
  }
  public putGzipOn(value: CdnResourceOptionsGzipOn) {
    this._gzipOn.internalValue = value;
  }
  public resetGzipOn() {
    this._gzipOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipOnInput() {
    return this._gzipOn.internalValue;
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

  // proxy_cache_key - computed: false, optional: true, required: false
  private _proxyCacheKey = new CdnResourceOptionsProxyCacheKeyOutputReference(this, "proxy_cache_key");
  public get proxyCacheKey() {
    return this._proxyCacheKey;
  }
  public putProxyCacheKey(value: CdnResourceOptionsProxyCacheKey) {
    this._proxyCacheKey.internalValue = value;
  }
  public resetProxyCacheKey() {
    this._proxyCacheKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCacheKeyInput() {
    return this._proxyCacheKey.internalValue;
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

  // proxy_connect_timeout - computed: false, optional: true, required: false
  private _proxyConnectTimeout = new CdnResourceOptionsProxyConnectTimeoutOutputReference(this, "proxy_connect_timeout");
  public get proxyConnectTimeout() {
    return this._proxyConnectTimeout;
  }
  public putProxyConnectTimeout(value: CdnResourceOptionsProxyConnectTimeout) {
    this._proxyConnectTimeout.internalValue = value;
  }
  public resetProxyConnectTimeout() {
    this._proxyConnectTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConnectTimeoutInput() {
    return this._proxyConnectTimeout.internalValue;
  }

  // proxy_read_timeout - computed: false, optional: true, required: false
  private _proxyReadTimeout = new CdnResourceOptionsProxyReadTimeoutOutputReference(this, "proxy_read_timeout");
  public get proxyReadTimeout() {
    return this._proxyReadTimeout;
  }
  public putProxyReadTimeout(value: CdnResourceOptionsProxyReadTimeout) {
    this._proxyReadTimeout.internalValue = value;
  }
  public resetProxyReadTimeout() {
    this._proxyReadTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyReadTimeoutInput() {
    return this._proxyReadTimeout.internalValue;
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

  // query_string_forwarding - computed: false, optional: true, required: false
  private _queryStringForwarding = new CdnResourceOptionsQueryStringForwardingOutputReference(this, "query_string_forwarding");
  public get queryStringForwarding() {
    return this._queryStringForwarding;
  }
  public putQueryStringForwarding(value: CdnResourceOptionsQueryStringForwarding) {
    this._queryStringForwarding.internalValue = value;
  }
  public resetQueryStringForwarding() {
    this._queryStringForwarding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringForwardingInput() {
    return this._queryStringForwarding.internalValue;
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

  // referrer_acl - computed: false, optional: true, required: false
  private _referrerAcl = new CdnResourceOptionsReferrerAclOutputReference(this, "referrer_acl");
  public get referrerAcl() {
    return this._referrerAcl;
  }
  public putReferrerAcl(value: CdnResourceOptionsReferrerAcl) {
    this._referrerAcl.internalValue = value;
  }
  public resetReferrerAcl() {
    this._referrerAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerAclInput() {
    return this._referrerAcl.internalValue;
  }

  // request_limiter - computed: false, optional: true, required: false
  private _requestLimiter = new CdnResourceOptionsRequestLimiterOutputReference(this, "request_limiter");
  public get requestLimiter() {
    return this._requestLimiter;
  }
  public putRequestLimiter(value: CdnResourceOptionsRequestLimiter) {
    this._requestLimiter.internalValue = value;
  }
  public resetRequestLimiter() {
    this._requestLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLimiterInput() {
    return this._requestLimiter.internalValue;
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

  // use_dns01_le_challenge - computed: false, optional: true, required: false
  private _useDns01LeChallenge = new CdnResourceOptionsUseDns01LeChallengeOutputReference(this, "use_dns01_le_challenge");
  public get useDns01LeChallenge() {
    return this._useDns01LeChallenge;
  }
  public putUseDns01LeChallenge(value: CdnResourceOptionsUseDns01LeChallenge) {
    this._useDns01LeChallenge.internalValue = value;
  }
  public resetUseDns01LeChallenge() {
    this._useDns01LeChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDns01LeChallengeInput() {
    return this._useDns01LeChallenge.internalValue;
  }

  // use_rsa_le_cert - computed: false, optional: true, required: false
  private _useRsaLeCert = new CdnResourceOptionsUseRsaLeCertOutputReference(this, "use_rsa_le_cert");
  public get useRsaLeCert() {
    return this._useRsaLeCert;
  }
  public putUseRsaLeCert(value: CdnResourceOptionsUseRsaLeCert) {
    this._useRsaLeCert.internalValue = value;
  }
  public resetUseRsaLeCert() {
    this._useRsaLeCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRsaLeCertInput() {
    return this._useRsaLeCert.internalValue;
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

  // waap - computed: false, optional: true, required: false
  private _waap = new CdnResourceOptionsWaapOutputReference(this, "waap");
  public get waap() {
    return this._waap;
  }
  public putWaap(value: CdnResourceOptionsWaap) {
    this._waap.internalValue = value;
  }
  public resetWaap() {
    this._waap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waapInput() {
    return this._waap.internalValue;
  }

  // waf - computed: false, optional: true, required: false
  private _waf = new CdnResourceOptionsWafOutputReference(this, "waf");
  public get waf() {
    return this._waf;
  }
  public putWaf(value: CdnResourceOptionsWaf) {
    this._waf.internalValue = value;
  }
  public resetWaf() {
    this._waf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafInput() {
    return this._waf.internalValue;
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
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource gcore_cdn_resource}
*/
export class CdnResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_cdn_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnResource to import
  * @param importFromId The id of the existing CdnResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_cdn_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_resource gcore_cdn_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnResourceConfig
  */
  public constructor(scope: Construct, id: string, config: CdnResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_cdn_resource',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.2',
        providerVersionConstraint: '0.32.2'
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
    this._origin = config.origin;
    this._originGroup = config.originGroup;
    this._originProtocol = config.originProtocol;
    this._primaryResource = config.primaryResource;
    this._proxySslCa = config.proxySslCa;
    this._proxySslData = config.proxySslData;
    this._proxySslEnabled = config.proxySslEnabled;
    this._secondaryHostnames = config.secondaryHostnames;
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

  // origin_protocol - computed: false, optional: true, required: false
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

  // primary_resource - computed: false, optional: true, required: false
  private _primaryResource?: number; 
  public get primaryResource() {
    return this.getNumberAttribute('primary_resource');
  }
  public set primaryResource(value: number) {
    this._primaryResource = value;
  }
  public resetPrimaryResource() {
    this._primaryResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryResourceInput() {
    return this._primaryResource;
  }

  // proxy_ssl_ca - computed: false, optional: true, required: false
  private _proxySslCa?: number; 
  public get proxySslCa() {
    return this.getNumberAttribute('proxy_ssl_ca');
  }
  public set proxySslCa(value: number) {
    this._proxySslCa = value;
  }
  public resetProxySslCa() {
    this._proxySslCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySslCaInput() {
    return this._proxySslCa;
  }

  // proxy_ssl_data - computed: false, optional: true, required: false
  private _proxySslData?: number; 
  public get proxySslData() {
    return this.getNumberAttribute('proxy_ssl_data');
  }
  public set proxySslData(value: number) {
    this._proxySslData = value;
  }
  public resetProxySslData() {
    this._proxySslData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySslDataInput() {
    return this._proxySslData;
  }

  // proxy_ssl_enabled - computed: false, optional: true, required: false
  private _proxySslEnabled?: boolean | cdktf.IResolvable; 
  public get proxySslEnabled() {
    return this.getBooleanAttribute('proxy_ssl_enabled');
  }
  public set proxySslEnabled(value: boolean | cdktf.IResolvable) {
    this._proxySslEnabled = value;
  }
  public resetProxySslEnabled() {
    this._proxySslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySslEnabledInput() {
    return this._proxySslEnabled;
  }

  // secondary_hostnames - computed: false, optional: true, required: false
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
      origin: cdktf.stringToTerraform(this._origin),
      origin_group: cdktf.numberToTerraform(this._originGroup),
      origin_protocol: cdktf.stringToTerraform(this._originProtocol),
      primary_resource: cdktf.numberToTerraform(this._primaryResource),
      proxy_ssl_ca: cdktf.numberToTerraform(this._proxySslCa),
      proxy_ssl_data: cdktf.numberToTerraform(this._proxySslData),
      proxy_ssl_enabled: cdktf.booleanToTerraform(this._proxySslEnabled),
      secondary_hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryHostnames),
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
      primary_resource: {
        value: cdktf.numberToHclTerraform(this._primaryResource),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_ssl_ca: {
        value: cdktf.numberToHclTerraform(this._proxySslCa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_ssl_data: {
        value: cdktf.numberToHclTerraform(this._proxySslData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_ssl_enabled: {
        value: cdktf.booleanToHclTerraform(this._proxySslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secondary_hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryHostnames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
