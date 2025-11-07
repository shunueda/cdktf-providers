// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables or disables a CDN resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#active CdnResource#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Delivery domain that will be used for content delivery through a CDN. Use `secondary_hostnames` to add extra domains. _note_ Delivery domains should be added to your DNS settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#cname CdnResource#cname}
  */
  readonly cname: string;
  /**
  * Options that configure a CDN resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#options CdnResource#options}
  */
  readonly options?: CdnResourceOptions;
  /**
  * Origin group ID with which the CDN resource is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#origin_group CdnResource#origin_group}
  */
  readonly originGroup: number;
  /**
  * Protocol used by CDN servers to request content from an origin source. If protocol is not specified, HTTP is used to connect to an origin server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#origin_protocol CdnResource#origin_protocol}
  */
  readonly originProtocol?: string;
  /**
  * The region in which to obtain the CDN client. If omitted, the `region` argument of the provider is used. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#region CdnResource#region}
  */
  readonly region?: string;
  /**
  * Additional delivery domains (CNAMEs) that will be used to deliver content via the CDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#secondary_hostnames CdnResource#secondary_hostnames}
  */
  readonly secondaryHostnames?: string[];
  /**
  * Use this attribute to configure origin shielding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#shielding CdnResource#shielding}
  */
  readonly shielding?: CdnResourceShielding;
  /**
  * SSL certificate settings for content delivery over HTTPS protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#ssl_certificate CdnResource#ssl_certificate}
  */
  readonly sslCertificate?: CdnResourceSslCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#timeouts CdnResource#timeouts}
  */
  readonly timeouts?: CdnResourceTimeouts;
}
export interface CdnResourceOptionsAllowedHttpMethods {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of HTTP methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: string[];
}

export function cdnResourceOptionsAllowedHttpMethodsToTerraform(struct?: CdnResourceOptionsAllowedHttpMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsAllowedHttpMethodsToHclTerraform(struct?: CdnResourceOptionsAllowedHttpMethods | cdktf.IResolvable): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsAllowedHttpMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsAllowedHttpMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsAllowedHttpMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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
export interface CdnResourceOptionsBrotliCompression {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of content types to be compressed. It's required to specify text/html here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: string[];
}

export function cdnResourceOptionsBrotliCompressionToTerraform(struct?: CdnResourceOptionsBrotliCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsBrotliCompressionToHclTerraform(struct?: CdnResourceOptionsBrotliCompression | cdktf.IResolvable): any {
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsBrotliCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsBrotliCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
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
export interface CdnResourceOptionsBrowserCacheSettings {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Cache expiration time. Use '0s' to disable caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: string;
}

export function cdnResourceOptionsBrowserCacheSettingsToTerraform(struct?: CdnResourceOptionsBrowserCacheSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsBrowserCacheSettingsToHclTerraform(struct?: CdnResourceOptionsBrowserCacheSettings | cdktf.IResolvable): any {
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsBrowserCacheSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsBrowserCacheSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Value of the Access-Control-Allow-Origin header.
  * Possible values:
  * * ["*"] - adds "*" as the header value, content will be uploaded for requests from any domain.
  * *["domain.com", "second.dom.com"] - adds "$http_origin" as the header value if the origin matches one of the listed domains, content will be uploaded only for requests from the domains specified in the field.
  * * ["$http_origin"] - adds "$http_origin" as the header value, content will be uploaded for requests from any domain, and the domain from which the request was sent will be added to the header in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: string[];
}

export function cdnResourceOptionsCorsToTerraform(struct?: CdnResourceOptionsCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsCorsToHclTerraform(struct?: CdnResourceOptionsCors | cdktf.IResolvable): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsCors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsCors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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
export interface CdnResourceOptionsCountryAcl {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of countries according to ISO-3166-1. The meaning of the argument depends on `policy_type` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#excepted_values CdnResource#excepted_values}
  */
  readonly exceptedValues?: string[];
  /**
  * The type of CDN resource access policy. Must be one of following: "allow", "deny".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#policy_type CdnResource#policy_type}
  */
  readonly policyType?: string;
}

export function cdnResourceOptionsCountryAclToTerraform(struct?: CdnResourceOptionsCountryAcl | cdktf.IResolvable): any {
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


export function cdnResourceOptionsCountryAclToHclTerraform(struct?: CdnResourceOptionsCountryAcl | cdktf.IResolvable): any {
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
      type: "list",
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsCountryAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsCountryAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._exceptedValues = undefined;
      this._policyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._exceptedValues = value.exceptedValues;
      this._policyType = value.policyType;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // excepted_values - computed: true, optional: true, required: false
  private _exceptedValues?: string[]; 
  public get exceptedValues() {
    return this.getListAttribute('excepted_values');
  }
  public set exceptedValues(value: string[]) {
    this._exceptedValues = value;
  }
  public resetExceptedValues() {
    this._exceptedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptedValuesInput() {
    return this._exceptedValues;
  }

  // policy_type - computed: true, optional: true, required: false
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
}
export interface CdnResourceOptionsEdgeCacheSettings {
  /**
  * A map representing the caching time for a response with a specific response code.
  * These settings have a higher priority than the value field.
  * * Use `any` key to specify caching time for all response codes.
  * * Use `0s` value to disable caching for a specific response code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#custom_values CdnResource#custom_values}
  */
  readonly customValues?: { [key: string]: string };
  /**
  * Enables content caching according to the origin cache settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#default CdnResource#default}
  */
  readonly default?: string;
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Caching time. The value is applied to the following response codes: 200, 206, 301, 302.
  * Responses with codes 4xx, 5xx will not be cached. Use `0s` to disable caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: string;
}

export function cdnResourceOptionsEdgeCacheSettingsToTerraform(struct?: CdnResourceOptionsEdgeCacheSettings | cdktf.IResolvable): any {
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


export function cdnResourceOptionsEdgeCacheSettingsToHclTerraform(struct?: CdnResourceOptionsEdgeCacheSettings | cdktf.IResolvable): any {
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsEdgeCacheSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsEdgeCacheSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customValues = undefined;
      this._default = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

  // default - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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
export interface CdnResourceOptionsForceReturn {
  /**
  * URL for redirection or text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#body CdnResource#body}
  */
  readonly body?: string;
  /**
  * Status code value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#code CdnResource#code}
  */
  readonly code?: number;
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cdnResourceOptionsForceReturnToTerraform(struct?: CdnResourceOptionsForceReturn | cdktf.IResolvable): any {
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


export function cdnResourceOptionsForceReturnToHclTerraform(struct?: CdnResourceOptionsForceReturn | cdktf.IResolvable): any {
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsForceReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsForceReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._enabled = value.enabled;
    }
  }

  // body - computed: true, optional: true, required: false
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

  // code - computed: true, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // enabled - computed: true, optional: true, required: false
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
export interface CdnResourceOptionsGzipCompression {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of content types to be compressed. It's required to specify text/html here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: string[];
}

export function cdnResourceOptionsGzipCompressionToTerraform(struct?: CdnResourceOptionsGzipCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsGzipCompressionToHclTerraform(struct?: CdnResourceOptionsGzipCompression | cdktf.IResolvable): any {
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsGzipCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsGzipCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
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
export interface CdnResourceOptionsHostHeader {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Host Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: string;
}

export function cdnResourceOptionsHostHeaderToTerraform(struct?: CdnResourceOptionsHostHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsHostHeaderToHclTerraform(struct?: CdnResourceOptionsHostHeader | cdktf.IResolvable): any {
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsHostHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsHostHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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
export interface CdnResourceOptionsIpAddressAcl {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of IP addresses with a subnet mask. The meaning of the argument depends on `policy_type` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#excepted_values CdnResource#excepted_values}
  */
  readonly exceptedValues?: string[];
  /**
  * The type of CDN resource access policy. Must be one of following: "allow", "deny".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#policy_type CdnResource#policy_type}
  */
  readonly policyType?: string;
}

export function cdnResourceOptionsIpAddressAclToTerraform(struct?: CdnResourceOptionsIpAddressAcl | cdktf.IResolvable): any {
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


export function cdnResourceOptionsIpAddressAclToHclTerraform(struct?: CdnResourceOptionsIpAddressAcl | cdktf.IResolvable): any {
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
      type: "list",
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsIpAddressAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsIpAddressAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._exceptedValues = undefined;
      this._policyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._exceptedValues = value.exceptedValues;
      this._policyType = value.policyType;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // excepted_values - computed: true, optional: true, required: false
  private _exceptedValues?: string[]; 
  public get exceptedValues() {
    return this.getListAttribute('excepted_values');
  }
  public set exceptedValues(value: string[]) {
    this._exceptedValues = value;
  }
  public resetExceptedValues() {
    this._exceptedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptedValuesInput() {
    return this._exceptedValues;
  }

  // policy_type - computed: true, optional: true, required: false
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
}
export interface CdnResourceOptionsQueryParamsBlacklistStruct {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of query parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: string[];
}

export function cdnResourceOptionsQueryParamsBlacklistStructToTerraform(struct?: CdnResourceOptionsQueryParamsBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsQueryParamsBlacklistStructToHclTerraform(struct?: CdnResourceOptionsQueryParamsBlacklistStruct | cdktf.IResolvable): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsQueryParamsBlacklistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsQueryParamsBlacklistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsQueryParamsBlacklistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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
export interface CdnResourceOptionsQueryParamsWhitelistStruct {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of query parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: string[];
}

export function cdnResourceOptionsQueryParamsWhitelistStructToTerraform(struct?: CdnResourceOptionsQueryParamsWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsQueryParamsWhitelistStructToHclTerraform(struct?: CdnResourceOptionsQueryParamsWhitelistStruct | cdktf.IResolvable): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsQueryParamsWhitelistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsQueryParamsWhitelistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsQueryParamsWhitelistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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
export interface CdnResourceOptionsReferrerAcl {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of domain names or wildcard domains, without protocol. The meaning of the argument depends on `policy_type` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#excepted_values CdnResource#excepted_values}
  */
  readonly exceptedValues?: string[];
  /**
  * The type of CDN resource access policy. Must be one of following: "allow", "deny".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#policy_type CdnResource#policy_type}
  */
  readonly policyType?: string;
}

export function cdnResourceOptionsReferrerAclToTerraform(struct?: CdnResourceOptionsReferrerAcl | cdktf.IResolvable): any {
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


export function cdnResourceOptionsReferrerAclToHclTerraform(struct?: CdnResourceOptionsReferrerAcl | cdktf.IResolvable): any {
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
      type: "list",
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsReferrerAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsReferrerAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._exceptedValues = undefined;
      this._policyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._exceptedValues = value.exceptedValues;
      this._policyType = value.policyType;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // excepted_values - computed: true, optional: true, required: false
  private _exceptedValues?: string[]; 
  public get exceptedValues() {
    return this.getListAttribute('excepted_values');
  }
  public set exceptedValues(value: string[]) {
    this._exceptedValues = value;
  }
  public resetExceptedValues() {
    this._exceptedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptedValuesInput() {
    return this._exceptedValues;
  }

  // policy_type - computed: true, optional: true, required: false
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
}
export interface CdnResourceOptionsSecureKey {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Secure key generated on your side which will be used for the URL signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#key CdnResource#key}
  */
  readonly key?: string;
  /**
  * Type of the URL signing. Choose one of the values: 0 — to include the end user's IP address to secure token generation, 2 — to exclude the end user's IP address from the secure token generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#type CdnResource#type}
  */
  readonly type?: number;
}

export function cdnResourceOptionsSecureKeyToTerraform(struct?: CdnResourceOptionsSecureKey | cdktf.IResolvable): any {
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


export function cdnResourceOptionsSecureKeyToHclTerraform(struct?: CdnResourceOptionsSecureKey | cdktf.IResolvable): any {
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsSecureKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsSecureKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._key = value.key;
      this._type = value.type;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: true, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CdnResourceOptionsStale {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The list of errors to which the option is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: string[];
}

export function cdnResourceOptionsStaleToTerraform(struct?: CdnResourceOptionsStale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnResourceOptionsStaleToHclTerraform(struct?: CdnResourceOptionsStale | cdktf.IResolvable): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsStaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsStale | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsStale | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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
export interface CdnResourceOptionsStaticHeaders {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A map of static headers in the format "header_name": "header_value".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: { [key: string]: string };
}

export function cdnResourceOptionsStaticHeadersToTerraform(struct?: CdnResourceOptionsStaticHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function cdnResourceOptionsStaticHeadersToHclTerraform(struct?: CdnResourceOptionsStaticHeaders | cdktf.IResolvable): any {
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

export class CdnResourceOptionsStaticHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsStaticHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsStaticHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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
export interface CdnResourceOptionsStaticRequestHeaders {
  /**
  * Controls the option state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A map of static headers in the format "header_name": "header_value".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: { [key: string]: string };
}

export function cdnResourceOptionsStaticRequestHeadersToTerraform(struct?: CdnResourceOptionsStaticRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function cdnResourceOptionsStaticRequestHeadersToHclTerraform(struct?: CdnResourceOptionsStaticRequestHeaders | cdktf.IResolvable): any {
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptionsStaticRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnResourceOptionsStaticRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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
export interface CdnResourceOptions {
  /**
  * HTTP methods allowed for content requests from the CDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#allowed_http_methods CdnResource#allowed_http_methods}
  */
  readonly allowedHttpMethods?: CdnResourceOptionsAllowedHttpMethods;
  /**
  * Compresses content with Brotli on the CDN side. CDN servers will request only uncompressed content from the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#brotli_compression CdnResource#brotli_compression}
  */
  readonly brotliCompression?: CdnResourceOptionsBrotliCompression;
  /**
  * Cache settings for users browsers.
  * Cache expiration time is applied to the following response codes: 200, 201, 204, 206, 301, 302, 303, 304, 307, 308. Responses with other codes will not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#browser_cache_settings CdnResource#browser_cache_settings}
  */
  readonly browserCacheSettings?: CdnResourceOptionsBrowserCacheSettings;
  /**
  * Enables or disables CORS (Cross-Origin Resource Sharing) header support.
  * CORS header support allows the CDN to add the Access-Control-Allow-Origin header to a response to a browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#cors CdnResource#cors}
  */
  readonly cors?: CdnResourceOptionsCors;
  /**
  * Use this option to control access to the content for specified countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#country_acl CdnResource#country_acl}
  */
  readonly countryAcl?: CdnResourceOptionsCountryAcl;
  /**
  * Cache settings for CDN servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#edge_cache_settings CdnResource#edge_cache_settings}
  */
  readonly edgeCacheSettings?: CdnResourceOptionsEdgeCacheSettings;
  /**
  * If enabled, CDN servers request and cache compressed content from the origin. The origin server should support compression. CDN servers will not decompress your content even if a user browser does not accept compression. Conflicts with `gzip_on` if both enabled simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#fetch_compressed CdnResource#fetch_compressed}
  */
  readonly fetchCompressed?: boolean | cdktf.IResolvable;
  /**
  * Allows to apply custom HTTP code to the CDN content.
  * Specify HTTP-code you need and text or URL if you're going to set up redirection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#force_return CdnResource#force_return}
  */
  readonly forceReturn?: CdnResourceOptionsForceReturn;
  /**
  * Forwards the Host header from a end-user request to an origin server. Conflicts with `host_header` if both enabled simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#forward_host_header CdnResource#forward_host_header}
  */
  readonly forwardHostHeader?: boolean | cdktf.IResolvable;
  /**
  * Compresses content with GZip on the CDN side. CDN servers will request only uncompressed content from the origin. Conflicts with `fetch_compressed`, `slice` and `gzip_on` if any of them are enabled simultaneously. `application/wasm` value is not supported when the shielded option is disabled, compression in this case is performed on the origin shielding, so it must be active for the MIME type to be compressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#gzip_compression CdnResource#gzip_compression}
  */
  readonly gzipCompression?: CdnResourceOptionsGzipCompression;
  /**
  * Enables content compression using gzip on the CDN side. CDN servers will request only uncompressed content from the origin. Conflicts with `fetch_compressed`, `slice` and `gzip_compression` if any of them are enabled simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#gzip_on CdnResource#gzip_on}
  */
  readonly gzipOn?: boolean | cdktf.IResolvable;
  /**
  * Use this option to specify the Host header that CDN servers use when request content from an origin server. If the option is not set, the header value is equal to the first CNAME. Conflicts with `forward_host_header` if both enabled simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#host_header CdnResource#host_header}
  */
  readonly hostHeader?: CdnResourceOptionsHostHeader;
  /**
  * Defines whether the files with the Set-Cookies header are cached as one file or as different ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#ignore_cookie CdnResource#ignore_cookie}
  */
  readonly ignoreCookie?: boolean | cdktf.IResolvable;
  /**
  * Allows to specify how a file with different query strings is cached: either as one object (option is enabled) or as different objects (option is disabled.). `ignore_query_string`, `query_params_whitelist` and `query_params_blacklist` options cannot be enabled simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#ignore_query_string CdnResource#ignore_query_string}
  */
  readonly ignoreQueryString?: boolean | cdktf.IResolvable;
  /**
  * The option allows to control access to the CDN Resource content for specific IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#ip_address_acl CdnResource#ip_address_acl}
  */
  readonly ipAddressAcl?: CdnResourceOptionsIpAddressAcl;
  /**
  * Use this option to specify query parameters, so files with these query strings will be cached as one object, and files with other parameters will be cached as different objects. `ignore_query_string`, `query_params_whitelist` and `query_params_blacklist` options cannot be enabled simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#query_params_blacklist CdnResource#query_params_blacklist}
  */
  readonly queryParamsBlacklist?: CdnResourceOptionsQueryParamsBlacklistStruct;
  /**
  * Use this option to specify query parameters, so files with these query strings will be cached as different objects, and files with other parameters will be cached as one object. `ignore_query_string`, `query_params_whitelist` and `query_params_blacklist` options cannot be enabled simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#query_params_whitelist CdnResource#query_params_whitelist}
  */
  readonly queryParamsWhitelist?: CdnResourceOptionsQueryParamsWhitelistStruct;
  /**
  * Use this option to control access to the CDN resource content for specified domain names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#referrer_acl CdnResource#referrer_acl}
  */
  readonly referrerAcl?: CdnResourceOptionsReferrerAcl;
  /**
  * Configures access with tokenized URLs. This makes impossible to access content without a valid (unexpired) token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#secure_key CdnResource#secure_key}
  */
  readonly secureKey?: CdnResourceOptionsSecureKey;
  /**
  * If enabled, CDN servers request and cache files larger than 10 MB in parts. Origins must support HTTP Range requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#slice CdnResource#slice}
  */
  readonly slice?: boolean | cdktf.IResolvable;
  /**
  * If enabled, CDN serves stale cached content in case of origin unavailability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#stale CdnResource#stale}
  */
  readonly stale?: CdnResourceOptionsStale;
  /**
  * Custom HTTP Headers that a CDN server adds to a response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#static_headers CdnResource#static_headers}
  */
  readonly staticHeaders?: CdnResourceOptionsStaticHeaders;
  /**
  * Custom HTTP Headers for a CDN server to add to a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#static_request_headers CdnResource#static_request_headers}
  */
  readonly staticRequestHeaders?: CdnResourceOptionsStaticRequestHeaders;
}

export function cdnResourceOptionsToTerraform(struct?: CdnResourceOptions | cdktf.IResolvable): any {
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
    edge_cache_settings: cdnResourceOptionsEdgeCacheSettingsToTerraform(struct!.edgeCacheSettings),
    fetch_compressed: cdktf.booleanToTerraform(struct!.fetchCompressed),
    force_return: cdnResourceOptionsForceReturnToTerraform(struct!.forceReturn),
    forward_host_header: cdktf.booleanToTerraform(struct!.forwardHostHeader),
    gzip_compression: cdnResourceOptionsGzipCompressionToTerraform(struct!.gzipCompression),
    gzip_on: cdktf.booleanToTerraform(struct!.gzipOn),
    host_header: cdnResourceOptionsHostHeaderToTerraform(struct!.hostHeader),
    ignore_cookie: cdktf.booleanToTerraform(struct!.ignoreCookie),
    ignore_query_string: cdktf.booleanToTerraform(struct!.ignoreQueryString),
    ip_address_acl: cdnResourceOptionsIpAddressAclToTerraform(struct!.ipAddressAcl),
    query_params_blacklist: cdnResourceOptionsQueryParamsBlacklistStructToTerraform(struct!.queryParamsBlacklist),
    query_params_whitelist: cdnResourceOptionsQueryParamsWhitelistStructToTerraform(struct!.queryParamsWhitelist),
    referrer_acl: cdnResourceOptionsReferrerAclToTerraform(struct!.referrerAcl),
    secure_key: cdnResourceOptionsSecureKeyToTerraform(struct!.secureKey),
    slice: cdktf.booleanToTerraform(struct!.slice),
    stale: cdnResourceOptionsStaleToTerraform(struct!.stale),
    static_headers: cdnResourceOptionsStaticHeadersToTerraform(struct!.staticHeaders),
    static_request_headers: cdnResourceOptionsStaticRequestHeadersToTerraform(struct!.staticRequestHeaders),
  }
}


export function cdnResourceOptionsToHclTerraform(struct?: CdnResourceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_http_methods: {
      value: cdnResourceOptionsAllowedHttpMethodsToHclTerraform(struct!.allowedHttpMethods),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsAllowedHttpMethods",
    },
    brotli_compression: {
      value: cdnResourceOptionsBrotliCompressionToHclTerraform(struct!.brotliCompression),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsBrotliCompression",
    },
    browser_cache_settings: {
      value: cdnResourceOptionsBrowserCacheSettingsToHclTerraform(struct!.browserCacheSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsBrowserCacheSettings",
    },
    cors: {
      value: cdnResourceOptionsCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsCors",
    },
    country_acl: {
      value: cdnResourceOptionsCountryAclToHclTerraform(struct!.countryAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsCountryAcl",
    },
    edge_cache_settings: {
      value: cdnResourceOptionsEdgeCacheSettingsToHclTerraform(struct!.edgeCacheSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsEdgeCacheSettings",
    },
    fetch_compressed: {
      value: cdktf.booleanToHclTerraform(struct!.fetchCompressed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_return: {
      value: cdnResourceOptionsForceReturnToHclTerraform(struct!.forceReturn),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsForceReturn",
    },
    forward_host_header: {
      value: cdktf.booleanToHclTerraform(struct!.forwardHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gzip_compression: {
      value: cdnResourceOptionsGzipCompressionToHclTerraform(struct!.gzipCompression),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsGzipCompression",
    },
    gzip_on: {
      value: cdktf.booleanToHclTerraform(struct!.gzipOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_header: {
      value: cdnResourceOptionsHostHeaderToHclTerraform(struct!.hostHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsHostHeader",
    },
    ignore_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_query_string: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address_acl: {
      value: cdnResourceOptionsIpAddressAclToHclTerraform(struct!.ipAddressAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsIpAddressAcl",
    },
    query_params_blacklist: {
      value: cdnResourceOptionsQueryParamsBlacklistStructToHclTerraform(struct!.queryParamsBlacklist),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsQueryParamsBlacklistStruct",
    },
    query_params_whitelist: {
      value: cdnResourceOptionsQueryParamsWhitelistStructToHclTerraform(struct!.queryParamsWhitelist),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsQueryParamsWhitelistStruct",
    },
    referrer_acl: {
      value: cdnResourceOptionsReferrerAclToHclTerraform(struct!.referrerAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsReferrerAcl",
    },
    secure_key: {
      value: cdnResourceOptionsSecureKeyToHclTerraform(struct!.secureKey),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsSecureKey",
    },
    slice: {
      value: cdktf.booleanToHclTerraform(struct!.slice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stale: {
      value: cdnResourceOptionsStaleToHclTerraform(struct!.stale),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsStale",
    },
    static_headers: {
      value: cdnResourceOptionsStaticHeadersToHclTerraform(struct!.staticHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsStaticHeaders",
    },
    static_request_headers: {
      value: cdnResourceOptionsStaticRequestHeadersToHclTerraform(struct!.staticRequestHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnResourceOptionsStaticRequestHeaders",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._edgeCacheSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeCacheSettings = this._edgeCacheSettings?.internalValue;
    }
    if (this._fetchCompressed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchCompressed = this._fetchCompressed;
    }
    if (this._forceReturn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceReturn = this._forceReturn?.internalValue;
    }
    if (this._forwardHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardHostHeader = this._forwardHostHeader;
    }
    if (this._gzipCompression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipCompression = this._gzipCompression?.internalValue;
    }
    if (this._gzipOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipOn = this._gzipOn;
    }
    if (this._hostHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader?.internalValue;
    }
    if (this._ignoreCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCookie = this._ignoreCookie;
    }
    if (this._ignoreQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreQueryString = this._ignoreQueryString;
    }
    if (this._ipAddressAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressAcl = this._ipAddressAcl?.internalValue;
    }
    if (this._queryParamsBlacklist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamsBlacklist = this._queryParamsBlacklist?.internalValue;
    }
    if (this._queryParamsWhitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamsWhitelist = this._queryParamsWhitelist?.internalValue;
    }
    if (this._referrerAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referrerAcl = this._referrerAcl?.internalValue;
    }
    if (this._secureKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureKey = this._secureKey?.internalValue;
    }
    if (this._slice !== undefined) {
      hasAnyValues = true;
      internalValueResult.slice = this._slice;
    }
    if (this._stale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stale = this._stale?.internalValue;
    }
    if (this._staticHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticHeaders = this._staticHeaders?.internalValue;
    }
    if (this._staticRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRequestHeaders = this._staticRequestHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHttpMethods.internalValue = undefined;
      this._brotliCompression.internalValue = undefined;
      this._browserCacheSettings.internalValue = undefined;
      this._cors.internalValue = undefined;
      this._countryAcl.internalValue = undefined;
      this._edgeCacheSettings.internalValue = undefined;
      this._fetchCompressed = undefined;
      this._forceReturn.internalValue = undefined;
      this._forwardHostHeader = undefined;
      this._gzipCompression.internalValue = undefined;
      this._gzipOn = undefined;
      this._hostHeader.internalValue = undefined;
      this._ignoreCookie = undefined;
      this._ignoreQueryString = undefined;
      this._ipAddressAcl.internalValue = undefined;
      this._queryParamsBlacklist.internalValue = undefined;
      this._queryParamsWhitelist.internalValue = undefined;
      this._referrerAcl.internalValue = undefined;
      this._secureKey.internalValue = undefined;
      this._slice = undefined;
      this._stale.internalValue = undefined;
      this._staticHeaders.internalValue = undefined;
      this._staticRequestHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHttpMethods.internalValue = value.allowedHttpMethods;
      this._brotliCompression.internalValue = value.brotliCompression;
      this._browserCacheSettings.internalValue = value.browserCacheSettings;
      this._cors.internalValue = value.cors;
      this._countryAcl.internalValue = value.countryAcl;
      this._edgeCacheSettings.internalValue = value.edgeCacheSettings;
      this._fetchCompressed = value.fetchCompressed;
      this._forceReturn.internalValue = value.forceReturn;
      this._forwardHostHeader = value.forwardHostHeader;
      this._gzipCompression.internalValue = value.gzipCompression;
      this._gzipOn = value.gzipOn;
      this._hostHeader.internalValue = value.hostHeader;
      this._ignoreCookie = value.ignoreCookie;
      this._ignoreQueryString = value.ignoreQueryString;
      this._ipAddressAcl.internalValue = value.ipAddressAcl;
      this._queryParamsBlacklist.internalValue = value.queryParamsBlacklist;
      this._queryParamsWhitelist.internalValue = value.queryParamsWhitelist;
      this._referrerAcl.internalValue = value.referrerAcl;
      this._secureKey.internalValue = value.secureKey;
      this._slice = value.slice;
      this._stale.internalValue = value.stale;
      this._staticHeaders.internalValue = value.staticHeaders;
      this._staticRequestHeaders.internalValue = value.staticRequestHeaders;
    }
  }

  // allowed_http_methods - computed: true, optional: true, required: false
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

  // brotli_compression - computed: true, optional: true, required: false
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

  // browser_cache_settings - computed: true, optional: true, required: false
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

  // cors - computed: true, optional: true, required: false
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

  // country_acl - computed: true, optional: true, required: false
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

  // edge_cache_settings - computed: true, optional: true, required: false
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

  // fetch_compressed - computed: true, optional: true, required: false
  private _fetchCompressed?: boolean | cdktf.IResolvable; 
  public get fetchCompressed() {
    return this.getBooleanAttribute('fetch_compressed');
  }
  public set fetchCompressed(value: boolean | cdktf.IResolvable) {
    this._fetchCompressed = value;
  }
  public resetFetchCompressed() {
    this._fetchCompressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchCompressedInput() {
    return this._fetchCompressed;
  }

  // force_return - computed: true, optional: true, required: false
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

  // forward_host_header - computed: true, optional: true, required: false
  private _forwardHostHeader?: boolean | cdktf.IResolvable; 
  public get forwardHostHeader() {
    return this.getBooleanAttribute('forward_host_header');
  }
  public set forwardHostHeader(value: boolean | cdktf.IResolvable) {
    this._forwardHostHeader = value;
  }
  public resetForwardHostHeader() {
    this._forwardHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHostHeaderInput() {
    return this._forwardHostHeader;
  }

  // gzip_compression - computed: true, optional: true, required: false
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

  // gzip_on - computed: true, optional: true, required: false
  private _gzipOn?: boolean | cdktf.IResolvable; 
  public get gzipOn() {
    return this.getBooleanAttribute('gzip_on');
  }
  public set gzipOn(value: boolean | cdktf.IResolvable) {
    this._gzipOn = value;
  }
  public resetGzipOn() {
    this._gzipOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipOnInput() {
    return this._gzipOn;
  }

  // host_header - computed: true, optional: true, required: false
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

  // ignore_cookie - computed: true, optional: true, required: false
  private _ignoreCookie?: boolean | cdktf.IResolvable; 
  public get ignoreCookie() {
    return this.getBooleanAttribute('ignore_cookie');
  }
  public set ignoreCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreCookie = value;
  }
  public resetIgnoreCookie() {
    this._ignoreCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCookieInput() {
    return this._ignoreCookie;
  }

  // ignore_query_string - computed: true, optional: true, required: false
  private _ignoreQueryString?: boolean | cdktf.IResolvable; 
  public get ignoreQueryString() {
    return this.getBooleanAttribute('ignore_query_string');
  }
  public set ignoreQueryString(value: boolean | cdktf.IResolvable) {
    this._ignoreQueryString = value;
  }
  public resetIgnoreQueryString() {
    this._ignoreQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreQueryStringInput() {
    return this._ignoreQueryString;
  }

  // ip_address_acl - computed: true, optional: true, required: false
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

  // query_params_blacklist - computed: true, optional: true, required: false
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

  // query_params_whitelist - computed: true, optional: true, required: false
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

  // referrer_acl - computed: true, optional: true, required: false
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

  // secure_key - computed: true, optional: true, required: false
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

  // slice - computed: true, optional: true, required: false
  private _slice?: boolean | cdktf.IResolvable; 
  public get slice() {
    return this.getBooleanAttribute('slice');
  }
  public set slice(value: boolean | cdktf.IResolvable) {
    this._slice = value;
  }
  public resetSlice() {
    this._slice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliceInput() {
    return this._slice;
  }

  // stale - computed: true, optional: true, required: false
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

  // static_headers - computed: true, optional: true, required: false
  private _staticHeaders = new CdnResourceOptionsStaticHeadersOutputReference(this, "static_headers");
  public get staticHeaders() {
    return this._staticHeaders;
  }
  public putStaticHeaders(value: CdnResourceOptionsStaticHeaders) {
    this._staticHeaders.internalValue = value;
  }
  public resetStaticHeaders() {
    this._staticHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticHeadersInput() {
    return this._staticHeaders.internalValue;
  }

  // static_request_headers - computed: true, optional: true, required: false
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
}
export interface CdnResourceShielding {
  /**
  * Defines whether origin shielding feature is enabled for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#enabled CdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * ID of the origin shielding point of presence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#pop_id CdnResource#pop_id}
  */
  readonly popId?: number;
}

export function cdnResourceShieldingToTerraform(struct?: CdnResourceShielding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    pop_id: cdktf.numberToTerraform(struct!.popId),
  }
}


export function cdnResourceShieldingToHclTerraform(struct?: CdnResourceShielding | cdktf.IResolvable): any {
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
    pop_id: {
      value: cdktf.numberToHclTerraform(struct!.popId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceShieldingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceShielding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._popId !== undefined) {
      hasAnyValues = true;
      internalValueResult.popId = this._popId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceShielding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._popId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._popId = value.popId;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // pop_id - computed: true, optional: true, required: false
  private _popId?: number; 
  public get popId() {
    return this.getNumberAttribute('pop_id');
  }
  public set popId(value: number) {
    this._popId = value;
  }
  public resetPopId() {
    this._popId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popIdInput() {
    return this._popId;
  }
}
export interface CdnResourceSslCertificate {
  /**
  * ID of the SSL certificate linked to the CDN resource. Must be configured when `type` is "own".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#id CdnResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Type of the SSL certificate. Must be one of following: "not_used", "own", "lets_encrypt".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#type CdnResource#type}
  */
  readonly type?: string;
}

export function cdnResourceSslCertificateToTerraform(struct?: CdnResourceSslCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cdnResourceSslCertificateToHclTerraform(struct?: CdnResourceSslCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceSslCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceSslCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceSslCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CdnResourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#create CdnResource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#update CdnResource#update}
  */
  readonly update?: string;
}

export function cdnResourceTimeoutsToTerraform(struct?: CdnResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cdnResourceTimeoutsToHclTerraform(struct?: CdnResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource vkcs_cdn_resource}
*/
export class CdnResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_cdn_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnResource to import
  * @param importFromId The id of the existing CdnResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_cdn_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/cdn_resource vkcs_cdn_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnResourceConfig
  */
  public constructor(scope: Construct, id: string, config: CdnResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_cdn_resource',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
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
    this._options.internalValue = config.options;
    this._originGroup = config.originGroup;
    this._originProtocol = config.originProtocol;
    this._region = config.region;
    this._secondaryHostnames = config.secondaryHostnames;
    this._shielding.internalValue = config.shielding;
    this._sslCertificate.internalValue = config.sslCertificate;
    this._timeouts.internalValue = config.timeouts;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // options - computed: true, optional: true, required: false
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

  // origin_group - computed: false, optional: false, required: true
  private _originGroup?: number; 
  public get originGroup() {
    return this.getNumberAttribute('origin_group');
  }
  public set originGroup(value: number) {
    this._originGroup = value;
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

  // preset_applied - computed: true, optional: false, required: false
  public get presetApplied() {
    return this.getBooleanAttribute('preset_applied');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secondary_hostnames - computed: true, optional: true, required: false
  private _secondaryHostnames?: string[]; 
  public get secondaryHostnames() {
    return this.getListAttribute('secondary_hostnames');
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

  // shielding - computed: true, optional: true, required: false
  private _shielding = new CdnResourceShieldingOutputReference(this, "shielding");
  public get shielding() {
    return this._shielding;
  }
  public putShielding(value: CdnResourceShielding) {
    this._shielding.internalValue = value;
  }
  public resetShielding() {
    this._shielding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldingInput() {
    return this._shielding.internalValue;
  }

  // ssl_certificate - computed: true, optional: true, required: false
  private _sslCertificate = new CdnResourceSslCertificateOutputReference(this, "ssl_certificate");
  public get sslCertificate() {
    return this._sslCertificate;
  }
  public putSslCertificate(value: CdnResourceSslCertificate) {
    this._sslCertificate.internalValue = value;
  }
  public resetSslCertificate() {
    this._sslCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnResourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnResourceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vp_enabled - computed: true, optional: false, required: false
  public get vpEnabled() {
    return this.getBooleanAttribute('vp_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      cname: cdktf.stringToTerraform(this._cname),
      options: cdnResourceOptionsToTerraform(this._options.internalValue),
      origin_group: cdktf.numberToTerraform(this._originGroup),
      origin_protocol: cdktf.stringToTerraform(this._originProtocol),
      region: cdktf.stringToTerraform(this._region),
      secondary_hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryHostnames),
      shielding: cdnResourceShieldingToTerraform(this._shielding.internalValue),
      ssl_certificate: cdnResourceSslCertificateToTerraform(this._sslCertificate.internalValue),
      timeouts: cdnResourceTimeoutsToTerraform(this._timeouts.internalValue),
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
      options: {
        value: cdnResourceOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnResourceOptions",
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryHostnames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shielding: {
        value: cdnResourceShieldingToHclTerraform(this._shielding.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnResourceShielding",
      },
      ssl_certificate: {
        value: cdnResourceSslCertificateToHclTerraform(this._sslCertificate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnResourceSslCertificate",
      },
      timeouts: {
        value: cdnResourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnResourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
