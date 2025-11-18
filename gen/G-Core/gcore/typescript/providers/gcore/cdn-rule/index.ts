// https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The setting allows to enable or disable a Rule. If not specified, it will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#active CdnRule#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#id CdnRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#name CdnRule#name}
  */
  readonly name: string;
  /**
  * ID of the Origins Group. Use one of your Origins Group or create a new one. You can use either 'origin' parameter or 'originGroup' in the resource definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#origin_group CdnRule#origin_group}
  */
  readonly originGroup?: number;
  /**
  * This option defines the protocol that will be used by CDN servers to request content from an origin source. If not specified, it will be inherit from resource. Possible values are: HTTPS, HTTP, MATCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#origin_protocol CdnRule#origin_protocol}
  */
  readonly originProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#resource_id CdnRule#resource_id}
  */
  readonly resourceId: number;
  /**
  * A pattern that defines when the rule is triggered. By default, we add a leading forward slash to any rule pattern. Specify a pattern without a forward slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#rule CdnRule#rule}
  */
  readonly rule: string;
  /**
  * Type of rule. The rule is applied if the requested URI matches the rule pattern. It has two possible values: Type 0 — RegEx. Must start with '^/' or '/'. Type 1 — RegEx. Legacy type. Note that for this rule type we automatically add / to each rule pattern before your regular expression. Please use Type 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#rule_type CdnRule#rule_type}
  */
  readonly ruleType: number;
  /**
  * Rule weight that determines rule execution order: from the smallest (0) to the highest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#weight CdnRule#weight}
  */
  readonly weight?: number;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#options CdnRule#options}
  */
  readonly options?: CdnRuleOptions;
}
export interface CdnRuleOptionsAllowedHttpMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Available methods: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the content-type for each type of content you wish to have compressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Use '0s' to disable caching. The value applies for a response with codes 200, 201, 204, 206, 301, 302, 303, 304, 307, 308.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Specify if the Access-Control-Allow-Origin header should be added to a response from CDN regardless of response code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#always CdnRule#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify a value of the Access-Control-Allow-Origin header. Possible values: '*', '$http_origin', 'example.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
export interface CdnRuleOptionsCountryAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of countries according to ISO-3166-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#excepted_values CdnRule#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Possible values: allow, deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#policy_type CdnRule#policy_type}
  */
  readonly policyType: string;
}

export function cdnRuleOptionsCountryAclToTerraform(struct?: CdnRuleOptionsCountryAclOutputReference | CdnRuleOptionsCountryAcl): any {
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


export function cdnRuleOptionsCountryAclToHclTerraform(struct?: CdnRuleOptionsCountryAclOutputReference | CdnRuleOptionsCountryAcl): any {
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

export class CdnRuleOptionsCountryAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsCountryAcl | undefined {
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

  public set internalValue(value: CdnRuleOptionsCountryAcl | undefined) {
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
export interface CdnRuleOptionsDisableProxyForceRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Specify caching time in seconds ('0s', '600s' for example) for a response with specific response code ('304', '404' for example). Use 'any' to specify caching time for all response codes. Use '0s' to disable caching for a specific response code. These settings have a higher priority than the value field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#custom_values CdnRule#custom_values}
  */
  readonly customValues?: { [key: string]: string };
  /**
  * Content will be cached according to origin cache settings. The value applies for a response with codes 200, 201, 204, 206, 301, 302, 303, 304, 307, 308, if an origin server does not have caching HTTP headers. Responses with other codes will not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#default CdnRule#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify caching time for the response with codes 200, 206, 301, 302. Responses with codes 4xx, 5xx will not be cached. Use '0s' to disable caching. Use custom_values field to specify a custom caching time for a response with specific codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
export interface CdnRuleOptionsFastedgeOnRequestBody {
  /**
  * The ID of the application in FastEdge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#app_id CdnRule#app_id}
  */
  readonly appId: string;
  /**
  * Determines if the FastEdge application should be called whenever HTTP request headers are received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the edge nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#execute_on_edge CdnRule#execute_on_edge}
  */
  readonly executeOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the shield nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#execute_on_shield CdnRule#execute_on_shield}
  */
  readonly executeOnShield?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request execution should be interrupted when an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#interrupt_on_error CdnRule#interrupt_on_error}
  */
  readonly interruptOnError?: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsFastedgeOnRequestBodyToTerraform(struct?: CdnRuleOptionsFastedgeOnRequestBodyOutputReference | CdnRuleOptionsFastedgeOnRequestBody): any {
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


export function cdnRuleOptionsFastedgeOnRequestBodyToHclTerraform(struct?: CdnRuleOptionsFastedgeOnRequestBodyOutputReference | CdnRuleOptionsFastedgeOnRequestBody): any {
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

export class CdnRuleOptionsFastedgeOnRequestBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsFastedgeOnRequestBody | undefined {
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

  public set internalValue(value: CdnRuleOptionsFastedgeOnRequestBody | undefined) {
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
export interface CdnRuleOptionsFastedgeOnRequestHeaders {
  /**
  * The ID of the application in FastEdge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#app_id CdnRule#app_id}
  */
  readonly appId: string;
  /**
  * Determines if the FastEdge application should be called whenever HTTP request headers are received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the edge nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#execute_on_edge CdnRule#execute_on_edge}
  */
  readonly executeOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the shield nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#execute_on_shield CdnRule#execute_on_shield}
  */
  readonly executeOnShield?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request execution should be interrupted when an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#interrupt_on_error CdnRule#interrupt_on_error}
  */
  readonly interruptOnError?: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsFastedgeOnRequestHeadersToTerraform(struct?: CdnRuleOptionsFastedgeOnRequestHeadersOutputReference | CdnRuleOptionsFastedgeOnRequestHeaders): any {
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


export function cdnRuleOptionsFastedgeOnRequestHeadersToHclTerraform(struct?: CdnRuleOptionsFastedgeOnRequestHeadersOutputReference | CdnRuleOptionsFastedgeOnRequestHeaders): any {
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

export class CdnRuleOptionsFastedgeOnRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsFastedgeOnRequestHeaders | undefined {
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

  public set internalValue(value: CdnRuleOptionsFastedgeOnRequestHeaders | undefined) {
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
export interface CdnRuleOptionsFastedgeOnResponseBody {
  /**
  * The ID of the application in FastEdge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#app_id CdnRule#app_id}
  */
  readonly appId: string;
  /**
  * Determines if the FastEdge application should be called whenever HTTP request headers are received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the edge nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#execute_on_edge CdnRule#execute_on_edge}
  */
  readonly executeOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the shield nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#execute_on_shield CdnRule#execute_on_shield}
  */
  readonly executeOnShield?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request execution should be interrupted when an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#interrupt_on_error CdnRule#interrupt_on_error}
  */
  readonly interruptOnError?: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsFastedgeOnResponseBodyToTerraform(struct?: CdnRuleOptionsFastedgeOnResponseBodyOutputReference | CdnRuleOptionsFastedgeOnResponseBody): any {
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


export function cdnRuleOptionsFastedgeOnResponseBodyToHclTerraform(struct?: CdnRuleOptionsFastedgeOnResponseBodyOutputReference | CdnRuleOptionsFastedgeOnResponseBody): any {
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

export class CdnRuleOptionsFastedgeOnResponseBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsFastedgeOnResponseBody | undefined {
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

  public set internalValue(value: CdnRuleOptionsFastedgeOnResponseBody | undefined) {
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
export interface CdnRuleOptionsFastedgeOnResponseHeaders {
  /**
  * The ID of the application in FastEdge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#app_id CdnRule#app_id}
  */
  readonly appId: string;
  /**
  * Determines if the FastEdge application should be called whenever HTTP request headers are received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the edge nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#execute_on_edge CdnRule#execute_on_edge}
  */
  readonly executeOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the shield nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#execute_on_shield CdnRule#execute_on_shield}
  */
  readonly executeOnShield?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request execution should be interrupted when an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#interrupt_on_error CdnRule#interrupt_on_error}
  */
  readonly interruptOnError?: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsFastedgeOnResponseHeadersToTerraform(struct?: CdnRuleOptionsFastedgeOnResponseHeadersOutputReference | CdnRuleOptionsFastedgeOnResponseHeaders): any {
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


export function cdnRuleOptionsFastedgeOnResponseHeadersToHclTerraform(struct?: CdnRuleOptionsFastedgeOnResponseHeadersOutputReference | CdnRuleOptionsFastedgeOnResponseHeaders): any {
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

export class CdnRuleOptionsFastedgeOnResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsFastedgeOnResponseHeaders | undefined {
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

  public set internalValue(value: CdnRuleOptionsFastedgeOnResponseHeaders | undefined) {
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
export interface CdnRuleOptionsFastedge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * on_request_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#on_request_body CdnRule#on_request_body}
  */
  readonly onRequestBody?: CdnRuleOptionsFastedgeOnRequestBody;
  /**
  * on_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#on_request_headers CdnRule#on_request_headers}
  */
  readonly onRequestHeaders?: CdnRuleOptionsFastedgeOnRequestHeaders;
  /**
  * on_response_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#on_response_body CdnRule#on_response_body}
  */
  readonly onResponseBody?: CdnRuleOptionsFastedgeOnResponseBody;
  /**
  * on_response_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#on_response_headers CdnRule#on_response_headers}
  */
  readonly onResponseHeaders?: CdnRuleOptionsFastedgeOnResponseHeaders;
}

export function cdnRuleOptionsFastedgeToTerraform(struct?: CdnRuleOptionsFastedgeOutputReference | CdnRuleOptionsFastedge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    on_request_body: cdnRuleOptionsFastedgeOnRequestBodyToTerraform(struct!.onRequestBody),
    on_request_headers: cdnRuleOptionsFastedgeOnRequestHeadersToTerraform(struct!.onRequestHeaders),
    on_response_body: cdnRuleOptionsFastedgeOnResponseBodyToTerraform(struct!.onResponseBody),
    on_response_headers: cdnRuleOptionsFastedgeOnResponseHeadersToTerraform(struct!.onResponseHeaders),
  }
}


export function cdnRuleOptionsFastedgeToHclTerraform(struct?: CdnRuleOptionsFastedgeOutputReference | CdnRuleOptionsFastedge): any {
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
      value: cdnRuleOptionsFastedgeOnRequestBodyToHclTerraform(struct!.onRequestBody),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsFastedgeOnRequestBodyList",
    },
    on_request_headers: {
      value: cdnRuleOptionsFastedgeOnRequestHeadersToHclTerraform(struct!.onRequestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsFastedgeOnRequestHeadersList",
    },
    on_response_body: {
      value: cdnRuleOptionsFastedgeOnResponseBodyToHclTerraform(struct!.onResponseBody),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsFastedgeOnResponseBodyList",
    },
    on_response_headers: {
      value: cdnRuleOptionsFastedgeOnResponseHeadersToHclTerraform(struct!.onResponseHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsFastedgeOnResponseHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnRuleOptionsFastedgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsFastedge | undefined {
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

  public set internalValue(value: CdnRuleOptionsFastedge | undefined) {
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
  private _onRequestBody = new CdnRuleOptionsFastedgeOnRequestBodyOutputReference(this, "on_request_body");
  public get onRequestBody() {
    return this._onRequestBody;
  }
  public putOnRequestBody(value: CdnRuleOptionsFastedgeOnRequestBody) {
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
  private _onRequestHeaders = new CdnRuleOptionsFastedgeOnRequestHeadersOutputReference(this, "on_request_headers");
  public get onRequestHeaders() {
    return this._onRequestHeaders;
  }
  public putOnRequestHeaders(value: CdnRuleOptionsFastedgeOnRequestHeaders) {
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
  private _onResponseBody = new CdnRuleOptionsFastedgeOnResponseBodyOutputReference(this, "on_response_body");
  public get onResponseBody() {
    return this._onResponseBody;
  }
  public putOnResponseBody(value: CdnRuleOptionsFastedgeOnResponseBody) {
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
  private _onResponseHeaders = new CdnRuleOptionsFastedgeOnResponseHeadersOutputReference(this, "on_response_headers");
  public get onResponseHeaders() {
    return this._onResponseHeaders;
  }
  public putOnResponseHeaders(value: CdnRuleOptionsFastedgeOnResponseHeaders) {
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
export interface CdnRuleOptionsFetchCompressed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Specify the redirect status code that the origin server returns. Possible values: 301, 302, 303, 307, 308.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#codes CdnRule#codes}
  */
  readonly codes: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsFollowOriginRedirectToTerraform(struct?: CdnRuleOptionsFollowOriginRedirectOutputReference | CdnRuleOptionsFollowOriginRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.codes),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnRuleOptionsFollowOriginRedirect | undefined) {
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
export interface CdnRuleOptionsForceReturn {
  /**
  * Response text or URL if you're going to set up redirection. Max length = 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#body CdnRule#body}
  */
  readonly body?: string;
  /**
  * HTTP response status code. Available codes: 100 <= value <= 599. Reserved codes: 408, 444, 477, 494, 495, 496, 497, 499
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#code CdnRule#code}
  */
  readonly code: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
export interface CdnRuleOptionsGzipOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsGzipOnToTerraform(struct?: CdnRuleOptionsGzipOnOutputReference | CdnRuleOptionsGzipOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsGzipOnToHclTerraform(struct?: CdnRuleOptionsGzipOnOutputReference | CdnRuleOptionsGzipOn): any {
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

export class CdnRuleOptionsGzipOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsGzipOn | undefined {
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

  public set internalValue(value: CdnRuleOptionsGzipOn | undefined) {
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
export interface CdnRuleOptionsHostHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * If enabled, JPG and PNG images automatically convert to AVIF format when supported by the end users browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#avif_enabled CdnRule#avif_enabled}
  */
  readonly avifEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Represents compression without quality loss for PNG format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#png_lossless CdnRule#png_lossless}
  */
  readonly pngLossless?: boolean | cdktf.IResolvable;
  /**
  * Quality settings for JPG and PNG images. Specify a value from 1 to 100. The higher the value, the better the image quality and the larger the file size after conversion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#quality CdnRule#quality}
  */
  readonly quality: number;
  /**
  * If enabled, JPG and PNG images automatically convert to WebP format when supported by the end users browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#webp_enabled CdnRule#webp_enabled}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify list of IP address with a subnet mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#excepted_values CdnRule#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Possible values: allow, deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#policy_type CdnRule#policy_type}
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
  * Amount of downloaded data after which the user will be rate limited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#buffer CdnRule#buffer}
  */
  readonly buffer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The way of controlling the download speed per each connection. Possible values are: static, dynamic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#limit_type CdnRule#limit_type}
  */
  readonly limitType: string;
  /**
  * Maximum download speed per connection. Must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#speed CdnRule#speed}
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
export interface CdnRuleOptionsProxyCacheKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Key for caching. Should be a combination of the specified variables: $request_uri, $scheme, $uri.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: string;
}

export function cdnRuleOptionsProxyCacheKeyToTerraform(struct?: CdnRuleOptionsProxyCacheKeyOutputReference | CdnRuleOptionsProxyCacheKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsProxyCacheKeyToHclTerraform(struct?: CdnRuleOptionsProxyCacheKeyOutputReference | CdnRuleOptionsProxyCacheKey): any {
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

export class CdnRuleOptionsProxyCacheKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsProxyCacheKey | undefined {
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

  public set internalValue(value: CdnRuleOptionsProxyCacheKey | undefined) {
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
export interface CdnRuleOptionsProxyCacheMethodsSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
export interface CdnRuleOptionsProxyConnectTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify time in seconds ('1s', '30s' for example).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: string;
}

export function cdnRuleOptionsProxyConnectTimeoutToTerraform(struct?: CdnRuleOptionsProxyConnectTimeoutOutputReference | CdnRuleOptionsProxyConnectTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsProxyConnectTimeoutToHclTerraform(struct?: CdnRuleOptionsProxyConnectTimeoutOutputReference | CdnRuleOptionsProxyConnectTimeout): any {
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

export class CdnRuleOptionsProxyConnectTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsProxyConnectTimeout | undefined {
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

  public set internalValue(value: CdnRuleOptionsProxyConnectTimeout | undefined) {
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
export interface CdnRuleOptionsProxyReadTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify time in seconds ('1s', '30s' for example).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: string;
}

export function cdnRuleOptionsProxyReadTimeoutToTerraform(struct?: CdnRuleOptionsProxyReadTimeoutOutputReference | CdnRuleOptionsProxyReadTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsProxyReadTimeoutToHclTerraform(struct?: CdnRuleOptionsProxyReadTimeoutOutputReference | CdnRuleOptionsProxyReadTimeout): any {
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

export class CdnRuleOptionsProxyReadTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsProxyReadTimeout | undefined {
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

  public set internalValue(value: CdnRuleOptionsProxyReadTimeout | undefined) {
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
export interface CdnRuleOptionsQueryParamsBlacklistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
export interface CdnRuleOptionsQueryStringForwarding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the keys that will not be forwarded from playlist files to media chunk files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#forward_except_keys CdnRule#forward_except_keys}
  */
  readonly forwardExceptKeys?: string[];
  /**
  * Specify the types of playlist files from which parameters will be extracted and forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#forward_from_file_types CdnRule#forward_from_file_types}
  */
  readonly forwardFromFileTypes: string[];
  /**
  * Specify the keys that will be forwarded from playlist files to media chunk files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#forward_only_keys CdnRule#forward_only_keys}
  */
  readonly forwardOnlyKeys?: string[];
  /**
  * Specify the types of media chunk files to which parameters, extracted from playlist files, will be forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#forward_to_file_types CdnRule#forward_to_file_types}
  */
  readonly forwardToFileTypes: string[];
}

export function cdnRuleOptionsQueryStringForwardingToTerraform(struct?: CdnRuleOptionsQueryStringForwardingOutputReference | CdnRuleOptionsQueryStringForwarding): any {
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


export function cdnRuleOptionsQueryStringForwardingToHclTerraform(struct?: CdnRuleOptionsQueryStringForwardingOutputReference | CdnRuleOptionsQueryStringForwarding): any {
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

export class CdnRuleOptionsQueryStringForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsQueryStringForwarding | undefined {
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

  public set internalValue(value: CdnRuleOptionsQueryStringForwarding | undefined) {
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
export interface CdnRuleOptionsRedirectHttpToHttps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
export interface CdnRuleOptionsReferrerAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify list of domain names or wildcard domains (without http:// or https://). For example, example.com or *.example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#excepted_values CdnRule#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Possible values: allow, deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#policy_type CdnRule#policy_type}
  */
  readonly policyType: string;
}

export function cdnRuleOptionsReferrerAclToTerraform(struct?: CdnRuleOptionsReferrerAclOutputReference | CdnRuleOptionsReferrerAcl): any {
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


export function cdnRuleOptionsReferrerAclToHclTerraform(struct?: CdnRuleOptionsReferrerAclOutputReference | CdnRuleOptionsReferrerAcl): any {
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

export class CdnRuleOptionsReferrerAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsReferrerAcl | undefined {
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

  public set internalValue(value: CdnRuleOptionsReferrerAcl | undefined) {
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
export interface CdnRuleOptionsRequestLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#burst CdnRule#burst}
  */
  readonly burst: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#delay CdnRule#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#rate CdnRule#rate}
  */
  readonly rate: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#rate_unit CdnRule#rate_unit}
  */
  readonly rateUnit?: string;
}

export function cdnRuleOptionsRequestLimiterToTerraform(struct?: CdnRuleOptionsRequestLimiterOutputReference | CdnRuleOptionsRequestLimiter): any {
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


export function cdnRuleOptionsRequestLimiterToHclTerraform(struct?: CdnRuleOptionsRequestLimiterOutputReference | CdnRuleOptionsRequestLimiter): any {
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

export class CdnRuleOptionsRequestLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsRequestLimiter | undefined {
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

  public set internalValue(value: CdnRuleOptionsRequestLimiter | undefined) {
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
export interface CdnRuleOptionsResponseHeadersHidingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of HTTP headers. The following required headers cannot be hidden from response: Connection, Content-Length, Content-Type, Date, Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#excepted CdnRule#excepted}
  */
  readonly excepted: string[];
  /**
  * Specify a mode of hiding HTTP headers from the response. Possible values are: hide, show.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#mode CdnRule#mode}
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
  * The pattern for Rewrite. At least one group should be specified. For Example: /rewrite_from/(.*) /rewrite_to/$1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#body CdnRule#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Define flag for the Rewrite option. Possible values: last, break, redirect, permanent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#flag CdnRule#flag}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A key generated on your side that will be used for URL signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#key CdnRule#key}
  */
  readonly key: string;
  /**
  * Specify the type of URL Signing. It can be either 0 or 2. Type 0 - includes end user's IP to secure token generation. Type 2 - excludes end user's IP from secure token generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#type CdnRule#type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Custom SNI hostname. Required if sni_type is set to 'custom'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#custom_hostname CdnRule#custom_hostname}
  */
  readonly customHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify SNI type. Possible values: dynamic, custom. dynamic - SNI hostname depends on the hostHeader and the forward_host_header options. custom - custom SNI hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#sni_type CdnRule#sni_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Possible values: error, http_403, http_404, http_429, http_500, http_502, http_503, http_504, invalid_header, timeout, updating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Header name is restricted to 255 symbols and can contain latin letters (A-Z, a-z), numbers (0-9), dashes, and underscores. Header value is restricted to 512 symbols and can contain latin letters (a-z), numbers (0-9), spaces, underscores and symbols (-/.:). Space can be used only between words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Specifies if the header will be added to a response from CDN regardless of response code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#always CdnRule#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#name CdnRule#name}
  */
  readonly name: string;
  /**
  * Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of User-Agents. Use "" to allow/deny access when the User-Agent header is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#excepted_values CdnRule#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Possible values: allow, deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#policy_type CdnRule#policy_type}
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
export interface CdnRuleOptionsWaap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsWaapToTerraform(struct?: CdnRuleOptionsWaapOutputReference | CdnRuleOptionsWaap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsWaapToHclTerraform(struct?: CdnRuleOptionsWaapOutputReference | CdnRuleOptionsWaap): any {
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

export class CdnRuleOptionsWaapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsWaap | undefined {
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

  public set internalValue(value: CdnRuleOptionsWaap | undefined) {
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
export interface CdnRuleOptionsWaf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleOptionsWafToTerraform(struct?: CdnRuleOptionsWafOutputReference | CdnRuleOptionsWaf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleOptionsWafToHclTerraform(struct?: CdnRuleOptionsWafOutputReference | CdnRuleOptionsWaf): any {
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

export class CdnRuleOptionsWafOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleOptionsWaf | undefined {
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

  public set internalValue(value: CdnRuleOptionsWaf | undefined) {
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
export interface CdnRuleOptionsWebsockets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#enabled CdnRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#value CdnRule#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#allowed_http_methods CdnRule#allowed_http_methods}
  */
  readonly allowedHttpMethods?: CdnRuleOptionsAllowedHttpMethods;
  /**
  * brotli_compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#brotli_compression CdnRule#brotli_compression}
  */
  readonly brotliCompression?: CdnRuleOptionsBrotliCompression;
  /**
  * browser_cache_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#browser_cache_settings CdnRule#browser_cache_settings}
  */
  readonly browserCacheSettings?: CdnRuleOptionsBrowserCacheSettings;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#cors CdnRule#cors}
  */
  readonly cors?: CdnRuleOptionsCors;
  /**
  * country_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#country_acl CdnRule#country_acl}
  */
  readonly countryAcl?: CdnRuleOptionsCountryAcl;
  /**
  * disable_proxy_force_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#disable_proxy_force_ranges CdnRule#disable_proxy_force_ranges}
  */
  readonly disableProxyForceRanges?: CdnRuleOptionsDisableProxyForceRanges;
  /**
  * edge_cache_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#edge_cache_settings CdnRule#edge_cache_settings}
  */
  readonly edgeCacheSettings?: CdnRuleOptionsEdgeCacheSettings;
  /**
  * fastedge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#fastedge CdnRule#fastedge}
  */
  readonly fastedge?: CdnRuleOptionsFastedge;
  /**
  * fetch_compressed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#fetch_compressed CdnRule#fetch_compressed}
  */
  readonly fetchCompressed?: CdnRuleOptionsFetchCompressed;
  /**
  * follow_origin_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#follow_origin_redirect CdnRule#follow_origin_redirect}
  */
  readonly followOriginRedirect?: CdnRuleOptionsFollowOriginRedirect;
  /**
  * force_return block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#force_return CdnRule#force_return}
  */
  readonly forceReturn?: CdnRuleOptionsForceReturn;
  /**
  * forward_host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#forward_host_header CdnRule#forward_host_header}
  */
  readonly forwardHostHeader?: CdnRuleOptionsForwardHostHeader;
  /**
  * gzip_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#gzip_on CdnRule#gzip_on}
  */
  readonly gzipOn?: CdnRuleOptionsGzipOn;
  /**
  * host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#host_header CdnRule#host_header}
  */
  readonly hostHeader?: CdnRuleOptionsHostHeader;
  /**
  * ignore_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#ignore_cookie CdnRule#ignore_cookie}
  */
  readonly ignoreCookie?: CdnRuleOptionsIgnoreCookie;
  /**
  * ignore_query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#ignore_query_string CdnRule#ignore_query_string}
  */
  readonly ignoreQueryString?: CdnRuleOptionsIgnoreQueryString;
  /**
  * image_stack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#image_stack CdnRule#image_stack}
  */
  readonly imageStack?: CdnRuleOptionsImageStack;
  /**
  * ip_address_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#ip_address_acl CdnRule#ip_address_acl}
  */
  readonly ipAddressAcl?: CdnRuleOptionsIpAddressAcl;
  /**
  * limit_bandwidth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#limit_bandwidth CdnRule#limit_bandwidth}
  */
  readonly limitBandwidth?: CdnRuleOptionsLimitBandwidth;
  /**
  * proxy_cache_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#proxy_cache_key CdnRule#proxy_cache_key}
  */
  readonly proxyCacheKey?: CdnRuleOptionsProxyCacheKey;
  /**
  * proxy_cache_methods_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#proxy_cache_methods_set CdnRule#proxy_cache_methods_set}
  */
  readonly proxyCacheMethodsSet?: CdnRuleOptionsProxyCacheMethodsSet;
  /**
  * proxy_connect_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#proxy_connect_timeout CdnRule#proxy_connect_timeout}
  */
  readonly proxyConnectTimeout?: CdnRuleOptionsProxyConnectTimeout;
  /**
  * proxy_read_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#proxy_read_timeout CdnRule#proxy_read_timeout}
  */
  readonly proxyReadTimeout?: CdnRuleOptionsProxyReadTimeout;
  /**
  * query_params_blacklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#query_params_blacklist CdnRule#query_params_blacklist}
  */
  readonly queryParamsBlacklist?: CdnRuleOptionsQueryParamsBlacklistStruct;
  /**
  * query_params_whitelist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#query_params_whitelist CdnRule#query_params_whitelist}
  */
  readonly queryParamsWhitelist?: CdnRuleOptionsQueryParamsWhitelistStruct;
  /**
  * query_string_forwarding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#query_string_forwarding CdnRule#query_string_forwarding}
  */
  readonly queryStringForwarding?: CdnRuleOptionsQueryStringForwarding;
  /**
  * redirect_http_to_https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#redirect_http_to_https CdnRule#redirect_http_to_https}
  */
  readonly redirectHttpToHttps?: CdnRuleOptionsRedirectHttpToHttps;
  /**
  * redirect_https_to_http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#redirect_https_to_http CdnRule#redirect_https_to_http}
  */
  readonly redirectHttpsToHttp?: CdnRuleOptionsRedirectHttpsToHttp;
  /**
  * referrer_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#referrer_acl CdnRule#referrer_acl}
  */
  readonly referrerAcl?: CdnRuleOptionsReferrerAcl;
  /**
  * request_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#request_limiter CdnRule#request_limiter}
  */
  readonly requestLimiter?: CdnRuleOptionsRequestLimiter;
  /**
  * response_headers_hiding_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#response_headers_hiding_policy CdnRule#response_headers_hiding_policy}
  */
  readonly responseHeadersHidingPolicy?: CdnRuleOptionsResponseHeadersHidingPolicy;
  /**
  * rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#rewrite CdnRule#rewrite}
  */
  readonly rewrite?: CdnRuleOptionsRewrite;
  /**
  * secure_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#secure_key CdnRule#secure_key}
  */
  readonly secureKey?: CdnRuleOptionsSecureKey;
  /**
  * slice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#slice CdnRule#slice}
  */
  readonly slice?: CdnRuleOptionsSlice;
  /**
  * sni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#sni CdnRule#sni}
  */
  readonly sni?: CdnRuleOptionsSni;
  /**
  * stale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#stale CdnRule#stale}
  */
  readonly stale?: CdnRuleOptionsStale;
  /**
  * static_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#static_request_headers CdnRule#static_request_headers}
  */
  readonly staticRequestHeaders?: CdnRuleOptionsStaticRequestHeaders;
  /**
  * static_response_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#static_response_headers CdnRule#static_response_headers}
  */
  readonly staticResponseHeaders?: CdnRuleOptionsStaticResponseHeaders;
  /**
  * user_agent_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#user_agent_acl CdnRule#user_agent_acl}
  */
  readonly userAgentAcl?: CdnRuleOptionsUserAgentAcl;
  /**
  * waap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#waap CdnRule#waap}
  */
  readonly waap?: CdnRuleOptionsWaap;
  /**
  * waf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#waf CdnRule#waf}
  */
  readonly waf?: CdnRuleOptionsWaf;
  /**
  * websockets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#websockets CdnRule#websockets}
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
    country_acl: cdnRuleOptionsCountryAclToTerraform(struct!.countryAcl),
    disable_proxy_force_ranges: cdnRuleOptionsDisableProxyForceRangesToTerraform(struct!.disableProxyForceRanges),
    edge_cache_settings: cdnRuleOptionsEdgeCacheSettingsToTerraform(struct!.edgeCacheSettings),
    fastedge: cdnRuleOptionsFastedgeToTerraform(struct!.fastedge),
    fetch_compressed: cdnRuleOptionsFetchCompressedToTerraform(struct!.fetchCompressed),
    follow_origin_redirect: cdnRuleOptionsFollowOriginRedirectToTerraform(struct!.followOriginRedirect),
    force_return: cdnRuleOptionsForceReturnToTerraform(struct!.forceReturn),
    forward_host_header: cdnRuleOptionsForwardHostHeaderToTerraform(struct!.forwardHostHeader),
    gzip_on: cdnRuleOptionsGzipOnToTerraform(struct!.gzipOn),
    host_header: cdnRuleOptionsHostHeaderToTerraform(struct!.hostHeader),
    ignore_cookie: cdnRuleOptionsIgnoreCookieToTerraform(struct!.ignoreCookie),
    ignore_query_string: cdnRuleOptionsIgnoreQueryStringToTerraform(struct!.ignoreQueryString),
    image_stack: cdnRuleOptionsImageStackToTerraform(struct!.imageStack),
    ip_address_acl: cdnRuleOptionsIpAddressAclToTerraform(struct!.ipAddressAcl),
    limit_bandwidth: cdnRuleOptionsLimitBandwidthToTerraform(struct!.limitBandwidth),
    proxy_cache_key: cdnRuleOptionsProxyCacheKeyToTerraform(struct!.proxyCacheKey),
    proxy_cache_methods_set: cdnRuleOptionsProxyCacheMethodsSetToTerraform(struct!.proxyCacheMethodsSet),
    proxy_connect_timeout: cdnRuleOptionsProxyConnectTimeoutToTerraform(struct!.proxyConnectTimeout),
    proxy_read_timeout: cdnRuleOptionsProxyReadTimeoutToTerraform(struct!.proxyReadTimeout),
    query_params_blacklist: cdnRuleOptionsQueryParamsBlacklistStructToTerraform(struct!.queryParamsBlacklist),
    query_params_whitelist: cdnRuleOptionsQueryParamsWhitelistStructToTerraform(struct!.queryParamsWhitelist),
    query_string_forwarding: cdnRuleOptionsQueryStringForwardingToTerraform(struct!.queryStringForwarding),
    redirect_http_to_https: cdnRuleOptionsRedirectHttpToHttpsToTerraform(struct!.redirectHttpToHttps),
    redirect_https_to_http: cdnRuleOptionsRedirectHttpsToHttpToTerraform(struct!.redirectHttpsToHttp),
    referrer_acl: cdnRuleOptionsReferrerAclToTerraform(struct!.referrerAcl),
    request_limiter: cdnRuleOptionsRequestLimiterToTerraform(struct!.requestLimiter),
    response_headers_hiding_policy: cdnRuleOptionsResponseHeadersHidingPolicyToTerraform(struct!.responseHeadersHidingPolicy),
    rewrite: cdnRuleOptionsRewriteToTerraform(struct!.rewrite),
    secure_key: cdnRuleOptionsSecureKeyToTerraform(struct!.secureKey),
    slice: cdnRuleOptionsSliceToTerraform(struct!.slice),
    sni: cdnRuleOptionsSniToTerraform(struct!.sni),
    stale: cdnRuleOptionsStaleToTerraform(struct!.stale),
    static_request_headers: cdnRuleOptionsStaticRequestHeadersToTerraform(struct!.staticRequestHeaders),
    static_response_headers: cdnRuleOptionsStaticResponseHeadersToTerraform(struct!.staticResponseHeaders),
    user_agent_acl: cdnRuleOptionsUserAgentAclToTerraform(struct!.userAgentAcl),
    waap: cdnRuleOptionsWaapToTerraform(struct!.waap),
    waf: cdnRuleOptionsWafToTerraform(struct!.waf),
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
    country_acl: {
      value: cdnRuleOptionsCountryAclToHclTerraform(struct!.countryAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsCountryAclList",
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
    fastedge: {
      value: cdnRuleOptionsFastedgeToHclTerraform(struct!.fastedge),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsFastedgeList",
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
    gzip_on: {
      value: cdnRuleOptionsGzipOnToHclTerraform(struct!.gzipOn),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsGzipOnList",
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
    proxy_cache_key: {
      value: cdnRuleOptionsProxyCacheKeyToHclTerraform(struct!.proxyCacheKey),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsProxyCacheKeyList",
    },
    proxy_cache_methods_set: {
      value: cdnRuleOptionsProxyCacheMethodsSetToHclTerraform(struct!.proxyCacheMethodsSet),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsProxyCacheMethodsSetList",
    },
    proxy_connect_timeout: {
      value: cdnRuleOptionsProxyConnectTimeoutToHclTerraform(struct!.proxyConnectTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsProxyConnectTimeoutList",
    },
    proxy_read_timeout: {
      value: cdnRuleOptionsProxyReadTimeoutToHclTerraform(struct!.proxyReadTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsProxyReadTimeoutList",
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
    query_string_forwarding: {
      value: cdnRuleOptionsQueryStringForwardingToHclTerraform(struct!.queryStringForwarding),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsQueryStringForwardingList",
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
    referrer_acl: {
      value: cdnRuleOptionsReferrerAclToHclTerraform(struct!.referrerAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsReferrerAclList",
    },
    request_limiter: {
      value: cdnRuleOptionsRequestLimiterToHclTerraform(struct!.requestLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsRequestLimiterList",
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
    waap: {
      value: cdnRuleOptionsWaapToHclTerraform(struct!.waap),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsWaapList",
    },
    waf: {
      value: cdnRuleOptionsWafToHclTerraform(struct!.waf),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleOptionsWafList",
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

  public set internalValue(value: CdnRuleOptions | undefined) {
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
      this._userAgentAcl.internalValue = value.userAgentAcl;
      this._waap.internalValue = value.waap;
      this._waf.internalValue = value.waf;
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

  // country_acl - computed: false, optional: true, required: false
  private _countryAcl = new CdnRuleOptionsCountryAclOutputReference(this, "country_acl");
  public get countryAcl() {
    return this._countryAcl;
  }
  public putCountryAcl(value: CdnRuleOptionsCountryAcl) {
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

  // fastedge - computed: false, optional: true, required: false
  private _fastedge = new CdnRuleOptionsFastedgeOutputReference(this, "fastedge");
  public get fastedge() {
    return this._fastedge;
  }
  public putFastedge(value: CdnRuleOptionsFastedge) {
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

  // gzip_on - computed: false, optional: true, required: false
  private _gzipOn = new CdnRuleOptionsGzipOnOutputReference(this, "gzip_on");
  public get gzipOn() {
    return this._gzipOn;
  }
  public putGzipOn(value: CdnRuleOptionsGzipOn) {
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

  // proxy_cache_key - computed: false, optional: true, required: false
  private _proxyCacheKey = new CdnRuleOptionsProxyCacheKeyOutputReference(this, "proxy_cache_key");
  public get proxyCacheKey() {
    return this._proxyCacheKey;
  }
  public putProxyCacheKey(value: CdnRuleOptionsProxyCacheKey) {
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

  // proxy_connect_timeout - computed: false, optional: true, required: false
  private _proxyConnectTimeout = new CdnRuleOptionsProxyConnectTimeoutOutputReference(this, "proxy_connect_timeout");
  public get proxyConnectTimeout() {
    return this._proxyConnectTimeout;
  }
  public putProxyConnectTimeout(value: CdnRuleOptionsProxyConnectTimeout) {
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
  private _proxyReadTimeout = new CdnRuleOptionsProxyReadTimeoutOutputReference(this, "proxy_read_timeout");
  public get proxyReadTimeout() {
    return this._proxyReadTimeout;
  }
  public putProxyReadTimeout(value: CdnRuleOptionsProxyReadTimeout) {
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

  // query_string_forwarding - computed: false, optional: true, required: false
  private _queryStringForwarding = new CdnRuleOptionsQueryStringForwardingOutputReference(this, "query_string_forwarding");
  public get queryStringForwarding() {
    return this._queryStringForwarding;
  }
  public putQueryStringForwarding(value: CdnRuleOptionsQueryStringForwarding) {
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

  // referrer_acl - computed: false, optional: true, required: false
  private _referrerAcl = new CdnRuleOptionsReferrerAclOutputReference(this, "referrer_acl");
  public get referrerAcl() {
    return this._referrerAcl;
  }
  public putReferrerAcl(value: CdnRuleOptionsReferrerAcl) {
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
  private _requestLimiter = new CdnRuleOptionsRequestLimiterOutputReference(this, "request_limiter");
  public get requestLimiter() {
    return this._requestLimiter;
  }
  public putRequestLimiter(value: CdnRuleOptionsRequestLimiter) {
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

  // waap - computed: false, optional: true, required: false
  private _waap = new CdnRuleOptionsWaapOutputReference(this, "waap");
  public get waap() {
    return this._waap;
  }
  public putWaap(value: CdnRuleOptionsWaap) {
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
  private _waf = new CdnRuleOptionsWafOutputReference(this, "waf");
  public get waf() {
    return this._waf;
  }
  public putWaf(value: CdnRuleOptionsWaf) {
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
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule gcore_cdn_rule}
*/
export class CdnRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_cdn_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnRule to import
  * @param importFromId The id of the existing CdnRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_cdn_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/cdn_rule gcore_cdn_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CdnRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_cdn_rule',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.0',
        providerVersionConstraint: '0.32.0'
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
    this._ruleType = config.ruleType;
    this._weight = config.weight;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
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

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: number; 
  public get ruleType() {
    return this.getNumberAttribute('rule_type');
  }
  public set ruleType(value: number) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
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
      rule_type: cdktf.numberToTerraform(this._ruleType),
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
      rule_type: {
        value: cdktf.numberToHclTerraform(this._ruleType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
