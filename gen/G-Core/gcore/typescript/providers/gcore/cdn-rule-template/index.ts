// https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnRuleTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#id CdnRuleTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#name CdnRuleTemplate#name}
  */
  readonly name?: string;
  /**
  * Sets a protocol other than the one specified in the CDN resource settings to connect to the origin. If not specified, it will be inherited from the CDN resource settings. Possible values are: HTTPS, HTTP, MATCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#override_origin_protocol CdnRuleTemplate#override_origin_protocol}
  */
  readonly overrideOriginProtocol?: string;
  /**
  * Path to the file or folder for which the rule will be applied. The rule is applied if the requested URI matches the rule path. We add a leading forward slash to any rule path. Specify a path without a forward slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#rule CdnRuleTemplate#rule}
  */
  readonly rule: string;
  /**
  * Rule type. Possible values are: 0 - Regular expression. Must start with '^/' or '/'. 1 - Regular expression. Note that for this rule type we automatically add / to each rule pattern before your regular expression. This type is legacy, please use 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#rule_type CdnRuleTemplate#rule_type}
  */
  readonly ruleType: number;
  /**
  * Rule execution order: from lowest (1) to highest. If requested URI matches multiple rules, the one higher in the order of the rules will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#weight CdnRuleTemplate#weight}
  */
  readonly weight?: number;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#options CdnRuleTemplate#options}
  */
  readonly options?: CdnRuleTemplateOptions;
}
export interface CdnRuleTemplateOptionsAllowedHttpMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Available methods: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: string[];
}

export function cdnRuleTemplateOptionsAllowedHttpMethodsToTerraform(struct?: CdnRuleTemplateOptionsAllowedHttpMethodsOutputReference | CdnRuleTemplateOptionsAllowedHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnRuleTemplateOptionsAllowedHttpMethodsToHclTerraform(struct?: CdnRuleTemplateOptionsAllowedHttpMethodsOutputReference | CdnRuleTemplateOptionsAllowedHttpMethods): any {
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

export class CdnRuleTemplateOptionsAllowedHttpMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsAllowedHttpMethods | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsAllowedHttpMethods | undefined) {
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
export interface CdnRuleTemplateOptionsBrotliCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the content-type for each type of content you wish to have compressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: string[];
}

export function cdnRuleTemplateOptionsBrotliCompressionToTerraform(struct?: CdnRuleTemplateOptionsBrotliCompressionOutputReference | CdnRuleTemplateOptionsBrotliCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnRuleTemplateOptionsBrotliCompressionToHclTerraform(struct?: CdnRuleTemplateOptionsBrotliCompressionOutputReference | CdnRuleTemplateOptionsBrotliCompression): any {
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

export class CdnRuleTemplateOptionsBrotliCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsBrotliCompression | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsBrotliCompression | undefined) {
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
export interface CdnRuleTemplateOptionsBrowserCacheSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Use '0s' to disable caching. The value applies for a response with codes 200, 201, 204, 206, 301, 302, 303, 304, 307, 308.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value?: string;
}

export function cdnRuleTemplateOptionsBrowserCacheSettingsToTerraform(struct?: CdnRuleTemplateOptionsBrowserCacheSettingsOutputReference | CdnRuleTemplateOptionsBrowserCacheSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsBrowserCacheSettingsToHclTerraform(struct?: CdnRuleTemplateOptionsBrowserCacheSettingsOutputReference | CdnRuleTemplateOptionsBrowserCacheSettings): any {
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

export class CdnRuleTemplateOptionsBrowserCacheSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsBrowserCacheSettings | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsBrowserCacheSettings | undefined) {
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
export interface CdnRuleTemplateOptionsCors {
  /**
  * Specify if the Access-Control-Allow-Origin header should be added to a response from CDN regardless of response code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#always CdnRuleTemplate#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify a value of the Access-Control-Allow-Origin header. Possible values: '*', '$http_origin', 'example.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: string[];
}

export function cdnRuleTemplateOptionsCorsToTerraform(struct?: CdnRuleTemplateOptionsCorsOutputReference | CdnRuleTemplateOptionsCors): any {
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


export function cdnRuleTemplateOptionsCorsToHclTerraform(struct?: CdnRuleTemplateOptionsCorsOutputReference | CdnRuleTemplateOptionsCors): any {
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

export class CdnRuleTemplateOptionsCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsCors | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsCors | undefined) {
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
export interface CdnRuleTemplateOptionsCountryAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of countries according to ISO-3166-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#excepted_values CdnRuleTemplate#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Possible values: allow, deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#policy_type CdnRuleTemplate#policy_type}
  */
  readonly policyType: string;
}

export function cdnRuleTemplateOptionsCountryAclToTerraform(struct?: CdnRuleTemplateOptionsCountryAclOutputReference | CdnRuleTemplateOptionsCountryAcl): any {
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


export function cdnRuleTemplateOptionsCountryAclToHclTerraform(struct?: CdnRuleTemplateOptionsCountryAclOutputReference | CdnRuleTemplateOptionsCountryAcl): any {
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

export class CdnRuleTemplateOptionsCountryAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsCountryAcl | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsCountryAcl | undefined) {
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
export interface CdnRuleTemplateOptionsDisableProxyForceRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsDisableProxyForceRangesToTerraform(struct?: CdnRuleTemplateOptionsDisableProxyForceRangesOutputReference | CdnRuleTemplateOptionsDisableProxyForceRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsDisableProxyForceRangesToHclTerraform(struct?: CdnRuleTemplateOptionsDisableProxyForceRangesOutputReference | CdnRuleTemplateOptionsDisableProxyForceRanges): any {
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

export class CdnRuleTemplateOptionsDisableProxyForceRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsDisableProxyForceRanges | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsDisableProxyForceRanges | undefined) {
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
export interface CdnRuleTemplateOptionsEdgeCacheSettings {
  /**
  * Specify caching time in seconds ('0s', '600s' for example) for a response with specific response code ('304', '404' for example). Use 'any' to specify caching time for all response codes. Use '0s' to disable caching for a specific response code. These settings have a higher priority than the value field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#custom_values CdnRuleTemplate#custom_values}
  */
  readonly customValues?: { [key: string]: string };
  /**
  * Content will be cached according to origin cache settings. The value applies for a response with codes 200, 201, 204, 206, 301, 302, 303, 304, 307, 308, if an origin server does not have caching HTTP headers. Responses with other codes will not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#default CdnRuleTemplate#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify caching time for the response with codes 200, 206, 301, 302. Responses with codes 4xx, 5xx will not be cached. Use '0s' to disable caching. Use custom_values field to specify a custom caching time for a response with specific codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value?: string;
}

export function cdnRuleTemplateOptionsEdgeCacheSettingsToTerraform(struct?: CdnRuleTemplateOptionsEdgeCacheSettingsOutputReference | CdnRuleTemplateOptionsEdgeCacheSettings): any {
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


export function cdnRuleTemplateOptionsEdgeCacheSettingsToHclTerraform(struct?: CdnRuleTemplateOptionsEdgeCacheSettingsOutputReference | CdnRuleTemplateOptionsEdgeCacheSettings): any {
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

export class CdnRuleTemplateOptionsEdgeCacheSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsEdgeCacheSettings | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsEdgeCacheSettings | undefined) {
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
export interface CdnRuleTemplateOptionsFastedgeOnRequestBody {
  /**
  * The ID of the application in FastEdge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#app_id CdnRuleTemplate#app_id}
  */
  readonly appId: string;
  /**
  * Determines if the FastEdge application should be called whenever HTTP request headers are received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the edge nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#execute_on_edge CdnRuleTemplate#execute_on_edge}
  */
  readonly executeOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the shield nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#execute_on_shield CdnRuleTemplate#execute_on_shield}
  */
  readonly executeOnShield?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request execution should be interrupted when an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#interrupt_on_error CdnRuleTemplate#interrupt_on_error}
  */
  readonly interruptOnError?: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsFastedgeOnRequestBodyToTerraform(struct?: CdnRuleTemplateOptionsFastedgeOnRequestBodyOutputReference | CdnRuleTemplateOptionsFastedgeOnRequestBody): any {
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


export function cdnRuleTemplateOptionsFastedgeOnRequestBodyToHclTerraform(struct?: CdnRuleTemplateOptionsFastedgeOnRequestBodyOutputReference | CdnRuleTemplateOptionsFastedgeOnRequestBody): any {
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

export class CdnRuleTemplateOptionsFastedgeOnRequestBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsFastedgeOnRequestBody | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsFastedgeOnRequestBody | undefined) {
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
export interface CdnRuleTemplateOptionsFastedgeOnRequestHeaders {
  /**
  * The ID of the application in FastEdge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#app_id CdnRuleTemplate#app_id}
  */
  readonly appId: string;
  /**
  * Determines if the FastEdge application should be called whenever HTTP request headers are received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the edge nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#execute_on_edge CdnRuleTemplate#execute_on_edge}
  */
  readonly executeOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the shield nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#execute_on_shield CdnRuleTemplate#execute_on_shield}
  */
  readonly executeOnShield?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request execution should be interrupted when an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#interrupt_on_error CdnRuleTemplate#interrupt_on_error}
  */
  readonly interruptOnError?: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsFastedgeOnRequestHeadersToTerraform(struct?: CdnRuleTemplateOptionsFastedgeOnRequestHeadersOutputReference | CdnRuleTemplateOptionsFastedgeOnRequestHeaders): any {
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


export function cdnRuleTemplateOptionsFastedgeOnRequestHeadersToHclTerraform(struct?: CdnRuleTemplateOptionsFastedgeOnRequestHeadersOutputReference | CdnRuleTemplateOptionsFastedgeOnRequestHeaders): any {
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

export class CdnRuleTemplateOptionsFastedgeOnRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsFastedgeOnRequestHeaders | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsFastedgeOnRequestHeaders | undefined) {
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
export interface CdnRuleTemplateOptionsFastedgeOnResponseBody {
  /**
  * The ID of the application in FastEdge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#app_id CdnRuleTemplate#app_id}
  */
  readonly appId: string;
  /**
  * Determines if the FastEdge application should be called whenever HTTP request headers are received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the edge nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#execute_on_edge CdnRuleTemplate#execute_on_edge}
  */
  readonly executeOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the shield nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#execute_on_shield CdnRuleTemplate#execute_on_shield}
  */
  readonly executeOnShield?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request execution should be interrupted when an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#interrupt_on_error CdnRuleTemplate#interrupt_on_error}
  */
  readonly interruptOnError?: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsFastedgeOnResponseBodyToTerraform(struct?: CdnRuleTemplateOptionsFastedgeOnResponseBodyOutputReference | CdnRuleTemplateOptionsFastedgeOnResponseBody): any {
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


export function cdnRuleTemplateOptionsFastedgeOnResponseBodyToHclTerraform(struct?: CdnRuleTemplateOptionsFastedgeOnResponseBodyOutputReference | CdnRuleTemplateOptionsFastedgeOnResponseBody): any {
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

export class CdnRuleTemplateOptionsFastedgeOnResponseBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsFastedgeOnResponseBody | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsFastedgeOnResponseBody | undefined) {
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
export interface CdnRuleTemplateOptionsFastedgeOnResponseHeaders {
  /**
  * The ID of the application in FastEdge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#app_id CdnRuleTemplate#app_id}
  */
  readonly appId: string;
  /**
  * Determines if the FastEdge application should be called whenever HTTP request headers are received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the edge nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#execute_on_edge CdnRuleTemplate#execute_on_edge}
  */
  readonly executeOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request should be executed at the shield nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#execute_on_shield CdnRuleTemplate#execute_on_shield}
  */
  readonly executeOnShield?: boolean | cdktf.IResolvable;
  /**
  * Determines if the request execution should be interrupted when an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#interrupt_on_error CdnRuleTemplate#interrupt_on_error}
  */
  readonly interruptOnError?: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsFastedgeOnResponseHeadersToTerraform(struct?: CdnRuleTemplateOptionsFastedgeOnResponseHeadersOutputReference | CdnRuleTemplateOptionsFastedgeOnResponseHeaders): any {
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


export function cdnRuleTemplateOptionsFastedgeOnResponseHeadersToHclTerraform(struct?: CdnRuleTemplateOptionsFastedgeOnResponseHeadersOutputReference | CdnRuleTemplateOptionsFastedgeOnResponseHeaders): any {
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

export class CdnRuleTemplateOptionsFastedgeOnResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsFastedgeOnResponseHeaders | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsFastedgeOnResponseHeaders | undefined) {
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
export interface CdnRuleTemplateOptionsFastedge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * on_request_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#on_request_body CdnRuleTemplate#on_request_body}
  */
  readonly onRequestBody?: CdnRuleTemplateOptionsFastedgeOnRequestBody;
  /**
  * on_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#on_request_headers CdnRuleTemplate#on_request_headers}
  */
  readonly onRequestHeaders?: CdnRuleTemplateOptionsFastedgeOnRequestHeaders;
  /**
  * on_response_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#on_response_body CdnRuleTemplate#on_response_body}
  */
  readonly onResponseBody?: CdnRuleTemplateOptionsFastedgeOnResponseBody;
  /**
  * on_response_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#on_response_headers CdnRuleTemplate#on_response_headers}
  */
  readonly onResponseHeaders?: CdnRuleTemplateOptionsFastedgeOnResponseHeaders;
}

export function cdnRuleTemplateOptionsFastedgeToTerraform(struct?: CdnRuleTemplateOptionsFastedgeOutputReference | CdnRuleTemplateOptionsFastedge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    on_request_body: cdnRuleTemplateOptionsFastedgeOnRequestBodyToTerraform(struct!.onRequestBody),
    on_request_headers: cdnRuleTemplateOptionsFastedgeOnRequestHeadersToTerraform(struct!.onRequestHeaders),
    on_response_body: cdnRuleTemplateOptionsFastedgeOnResponseBodyToTerraform(struct!.onResponseBody),
    on_response_headers: cdnRuleTemplateOptionsFastedgeOnResponseHeadersToTerraform(struct!.onResponseHeaders),
  }
}


export function cdnRuleTemplateOptionsFastedgeToHclTerraform(struct?: CdnRuleTemplateOptionsFastedgeOutputReference | CdnRuleTemplateOptionsFastedge): any {
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
      value: cdnRuleTemplateOptionsFastedgeOnRequestBodyToHclTerraform(struct!.onRequestBody),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsFastedgeOnRequestBodyList",
    },
    on_request_headers: {
      value: cdnRuleTemplateOptionsFastedgeOnRequestHeadersToHclTerraform(struct!.onRequestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsFastedgeOnRequestHeadersList",
    },
    on_response_body: {
      value: cdnRuleTemplateOptionsFastedgeOnResponseBodyToHclTerraform(struct!.onResponseBody),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsFastedgeOnResponseBodyList",
    },
    on_response_headers: {
      value: cdnRuleTemplateOptionsFastedgeOnResponseHeadersToHclTerraform(struct!.onResponseHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsFastedgeOnResponseHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnRuleTemplateOptionsFastedgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsFastedge | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsFastedge | undefined) {
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
  private _onRequestBody = new CdnRuleTemplateOptionsFastedgeOnRequestBodyOutputReference(this, "on_request_body");
  public get onRequestBody() {
    return this._onRequestBody;
  }
  public putOnRequestBody(value: CdnRuleTemplateOptionsFastedgeOnRequestBody) {
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
  private _onRequestHeaders = new CdnRuleTemplateOptionsFastedgeOnRequestHeadersOutputReference(this, "on_request_headers");
  public get onRequestHeaders() {
    return this._onRequestHeaders;
  }
  public putOnRequestHeaders(value: CdnRuleTemplateOptionsFastedgeOnRequestHeaders) {
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
  private _onResponseBody = new CdnRuleTemplateOptionsFastedgeOnResponseBodyOutputReference(this, "on_response_body");
  public get onResponseBody() {
    return this._onResponseBody;
  }
  public putOnResponseBody(value: CdnRuleTemplateOptionsFastedgeOnResponseBody) {
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
  private _onResponseHeaders = new CdnRuleTemplateOptionsFastedgeOnResponseHeadersOutputReference(this, "on_response_headers");
  public get onResponseHeaders() {
    return this._onResponseHeaders;
  }
  public putOnResponseHeaders(value: CdnRuleTemplateOptionsFastedgeOnResponseHeaders) {
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
export interface CdnRuleTemplateOptionsFetchCompressed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsFetchCompressedToTerraform(struct?: CdnRuleTemplateOptionsFetchCompressedOutputReference | CdnRuleTemplateOptionsFetchCompressed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsFetchCompressedToHclTerraform(struct?: CdnRuleTemplateOptionsFetchCompressedOutputReference | CdnRuleTemplateOptionsFetchCompressed): any {
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

export class CdnRuleTemplateOptionsFetchCompressedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsFetchCompressed | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsFetchCompressed | undefined) {
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
export interface CdnRuleTemplateOptionsFollowOriginRedirect {
  /**
  * Specify the redirect status code that the origin server returns. Possible values: 301, 302, 303, 307, 308.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#codes CdnRuleTemplate#codes}
  */
  readonly codes: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsFollowOriginRedirectToTerraform(struct?: CdnRuleTemplateOptionsFollowOriginRedirectOutputReference | CdnRuleTemplateOptionsFollowOriginRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.codes),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cdnRuleTemplateOptionsFollowOriginRedirectToHclTerraform(struct?: CdnRuleTemplateOptionsFollowOriginRedirectOutputReference | CdnRuleTemplateOptionsFollowOriginRedirect): any {
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

export class CdnRuleTemplateOptionsFollowOriginRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsFollowOriginRedirect | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsFollowOriginRedirect | undefined) {
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
export interface CdnRuleTemplateOptionsForceReturn {
  /**
  * Response text or URL if you're going to set up redirection. Max length = 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#body CdnRuleTemplate#body}
  */
  readonly body?: string;
  /**
  * HTTP response status code. Available codes: 100 <= value <= 599. Reserved codes: 408, 444, 477, 494, 495, 496, 497, 499
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#code CdnRuleTemplate#code}
  */
  readonly code: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsForceReturnToTerraform(struct?: CdnRuleTemplateOptionsForceReturnOutputReference | CdnRuleTemplateOptionsForceReturn): any {
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


export function cdnRuleTemplateOptionsForceReturnToHclTerraform(struct?: CdnRuleTemplateOptionsForceReturnOutputReference | CdnRuleTemplateOptionsForceReturn): any {
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

export class CdnRuleTemplateOptionsForceReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsForceReturn | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsForceReturn | undefined) {
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
export interface CdnRuleTemplateOptionsForwardHostHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsForwardHostHeaderToTerraform(struct?: CdnRuleTemplateOptionsForwardHostHeaderOutputReference | CdnRuleTemplateOptionsForwardHostHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsForwardHostHeaderToHclTerraform(struct?: CdnRuleTemplateOptionsForwardHostHeaderOutputReference | CdnRuleTemplateOptionsForwardHostHeader): any {
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

export class CdnRuleTemplateOptionsForwardHostHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsForwardHostHeader | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsForwardHostHeader | undefined) {
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
export interface CdnRuleTemplateOptionsGzipOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsGzipOnToTerraform(struct?: CdnRuleTemplateOptionsGzipOnOutputReference | CdnRuleTemplateOptionsGzipOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsGzipOnToHclTerraform(struct?: CdnRuleTemplateOptionsGzipOnOutputReference | CdnRuleTemplateOptionsGzipOn): any {
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

export class CdnRuleTemplateOptionsGzipOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsGzipOn | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsGzipOn | undefined) {
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
export interface CdnRuleTemplateOptionsHostHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: string;
}

export function cdnRuleTemplateOptionsHostHeaderToTerraform(struct?: CdnRuleTemplateOptionsHostHeaderOutputReference | CdnRuleTemplateOptionsHostHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsHostHeaderToHclTerraform(struct?: CdnRuleTemplateOptionsHostHeaderOutputReference | CdnRuleTemplateOptionsHostHeader): any {
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

export class CdnRuleTemplateOptionsHostHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsHostHeader | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsHostHeader | undefined) {
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
export interface CdnRuleTemplateOptionsIgnoreCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsIgnoreCookieToTerraform(struct?: CdnRuleTemplateOptionsIgnoreCookieOutputReference | CdnRuleTemplateOptionsIgnoreCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsIgnoreCookieToHclTerraform(struct?: CdnRuleTemplateOptionsIgnoreCookieOutputReference | CdnRuleTemplateOptionsIgnoreCookie): any {
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

export class CdnRuleTemplateOptionsIgnoreCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsIgnoreCookie | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsIgnoreCookie | undefined) {
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
export interface CdnRuleTemplateOptionsIgnoreQueryString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsIgnoreQueryStringToTerraform(struct?: CdnRuleTemplateOptionsIgnoreQueryStringOutputReference | CdnRuleTemplateOptionsIgnoreQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsIgnoreQueryStringToHclTerraform(struct?: CdnRuleTemplateOptionsIgnoreQueryStringOutputReference | CdnRuleTemplateOptionsIgnoreQueryString): any {
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

export class CdnRuleTemplateOptionsIgnoreQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsIgnoreQueryString | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsIgnoreQueryString | undefined) {
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
export interface CdnRuleTemplateOptionsImageStack {
  /**
  * If enabled, JPG and PNG images automatically convert to AVIF format when supported by the end users browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#avif_enabled CdnRuleTemplate#avif_enabled}
  */
  readonly avifEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Represents compression without quality loss for PNG format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#png_lossless CdnRuleTemplate#png_lossless}
  */
  readonly pngLossless?: boolean | cdktf.IResolvable;
  /**
  * Quality settings for JPG and PNG images. Specify a value from 1 to 100. The higher the value, the better the image quality and the larger the file size after conversion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#quality CdnRuleTemplate#quality}
  */
  readonly quality: number;
  /**
  * If enabled, JPG and PNG images automatically convert to WebP format when supported by the end users browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#webp_enabled CdnRuleTemplate#webp_enabled}
  */
  readonly webpEnabled?: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsImageStackToTerraform(struct?: CdnRuleTemplateOptionsImageStackOutputReference | CdnRuleTemplateOptionsImageStack): any {
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


export function cdnRuleTemplateOptionsImageStackToHclTerraform(struct?: CdnRuleTemplateOptionsImageStackOutputReference | CdnRuleTemplateOptionsImageStack): any {
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

export class CdnRuleTemplateOptionsImageStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsImageStack | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsImageStack | undefined) {
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
export interface CdnRuleTemplateOptionsIpAddressAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify list of IP address with a subnet mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#excepted_values CdnRuleTemplate#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Possible values: allow, deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#policy_type CdnRuleTemplate#policy_type}
  */
  readonly policyType: string;
}

export function cdnRuleTemplateOptionsIpAddressAclToTerraform(struct?: CdnRuleTemplateOptionsIpAddressAclOutputReference | CdnRuleTemplateOptionsIpAddressAcl): any {
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


export function cdnRuleTemplateOptionsIpAddressAclToHclTerraform(struct?: CdnRuleTemplateOptionsIpAddressAclOutputReference | CdnRuleTemplateOptionsIpAddressAcl): any {
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

export class CdnRuleTemplateOptionsIpAddressAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsIpAddressAcl | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsIpAddressAcl | undefined) {
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
export interface CdnRuleTemplateOptionsLimitBandwidth {
  /**
  * Amount of downloaded data after which the user will be rate limited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#buffer CdnRuleTemplate#buffer}
  */
  readonly buffer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The way of controlling the download speed per each connection. Possible values are: static, dynamic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#limit_type CdnRuleTemplate#limit_type}
  */
  readonly limitType: string;
  /**
  * Maximum download speed per connection. Must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#speed CdnRuleTemplate#speed}
  */
  readonly speed?: number;
}

export function cdnRuleTemplateOptionsLimitBandwidthToTerraform(struct?: CdnRuleTemplateOptionsLimitBandwidthOutputReference | CdnRuleTemplateOptionsLimitBandwidth): any {
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


export function cdnRuleTemplateOptionsLimitBandwidthToHclTerraform(struct?: CdnRuleTemplateOptionsLimitBandwidthOutputReference | CdnRuleTemplateOptionsLimitBandwidth): any {
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

export class CdnRuleTemplateOptionsLimitBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsLimitBandwidth | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsLimitBandwidth | undefined) {
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
export interface CdnRuleTemplateOptionsProxyCacheKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Key for caching. Should be a combination of the specified variables: $request_uri, $scheme, $uri.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: string;
}

export function cdnRuleTemplateOptionsProxyCacheKeyToTerraform(struct?: CdnRuleTemplateOptionsProxyCacheKeyOutputReference | CdnRuleTemplateOptionsProxyCacheKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsProxyCacheKeyToHclTerraform(struct?: CdnRuleTemplateOptionsProxyCacheKeyOutputReference | CdnRuleTemplateOptionsProxyCacheKey): any {
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

export class CdnRuleTemplateOptionsProxyCacheKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsProxyCacheKey | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsProxyCacheKey | undefined) {
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
export interface CdnRuleTemplateOptionsProxyCacheMethodsSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsProxyCacheMethodsSetToTerraform(struct?: CdnRuleTemplateOptionsProxyCacheMethodsSetOutputReference | CdnRuleTemplateOptionsProxyCacheMethodsSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsProxyCacheMethodsSetToHclTerraform(struct?: CdnRuleTemplateOptionsProxyCacheMethodsSetOutputReference | CdnRuleTemplateOptionsProxyCacheMethodsSet): any {
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

export class CdnRuleTemplateOptionsProxyCacheMethodsSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsProxyCacheMethodsSet | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsProxyCacheMethodsSet | undefined) {
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
export interface CdnRuleTemplateOptionsProxyConnectTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify time in seconds ('1s', '30s' for example).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: string;
}

export function cdnRuleTemplateOptionsProxyConnectTimeoutToTerraform(struct?: CdnRuleTemplateOptionsProxyConnectTimeoutOutputReference | CdnRuleTemplateOptionsProxyConnectTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsProxyConnectTimeoutToHclTerraform(struct?: CdnRuleTemplateOptionsProxyConnectTimeoutOutputReference | CdnRuleTemplateOptionsProxyConnectTimeout): any {
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

export class CdnRuleTemplateOptionsProxyConnectTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsProxyConnectTimeout | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsProxyConnectTimeout | undefined) {
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
export interface CdnRuleTemplateOptionsProxyReadTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify time in seconds ('1s', '30s' for example).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: string;
}

export function cdnRuleTemplateOptionsProxyReadTimeoutToTerraform(struct?: CdnRuleTemplateOptionsProxyReadTimeoutOutputReference | CdnRuleTemplateOptionsProxyReadTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsProxyReadTimeoutToHclTerraform(struct?: CdnRuleTemplateOptionsProxyReadTimeoutOutputReference | CdnRuleTemplateOptionsProxyReadTimeout): any {
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

export class CdnRuleTemplateOptionsProxyReadTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsProxyReadTimeout | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsProxyReadTimeout | undefined) {
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
export interface CdnRuleTemplateOptionsQueryParamsBlacklistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: string[];
}

export function cdnRuleTemplateOptionsQueryParamsBlacklistStructToTerraform(struct?: CdnRuleTemplateOptionsQueryParamsBlacklistStructOutputReference | CdnRuleTemplateOptionsQueryParamsBlacklistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnRuleTemplateOptionsQueryParamsBlacklistStructToHclTerraform(struct?: CdnRuleTemplateOptionsQueryParamsBlacklistStructOutputReference | CdnRuleTemplateOptionsQueryParamsBlacklistStruct): any {
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

export class CdnRuleTemplateOptionsQueryParamsBlacklistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsQueryParamsBlacklistStruct | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsQueryParamsBlacklistStruct | undefined) {
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
export interface CdnRuleTemplateOptionsQueryParamsWhitelistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: string[];
}

export function cdnRuleTemplateOptionsQueryParamsWhitelistStructToTerraform(struct?: CdnRuleTemplateOptionsQueryParamsWhitelistStructOutputReference | CdnRuleTemplateOptionsQueryParamsWhitelistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnRuleTemplateOptionsQueryParamsWhitelistStructToHclTerraform(struct?: CdnRuleTemplateOptionsQueryParamsWhitelistStructOutputReference | CdnRuleTemplateOptionsQueryParamsWhitelistStruct): any {
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

export class CdnRuleTemplateOptionsQueryParamsWhitelistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsQueryParamsWhitelistStruct | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsQueryParamsWhitelistStruct | undefined) {
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
export interface CdnRuleTemplateOptionsQueryStringForwarding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the keys that will not be forwarded from playlist files to media chunk files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#forward_except_keys CdnRuleTemplate#forward_except_keys}
  */
  readonly forwardExceptKeys?: string[];
  /**
  * Specify the types of playlist files from which parameters will be extracted and forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#forward_from_file_types CdnRuleTemplate#forward_from_file_types}
  */
  readonly forwardFromFileTypes: string[];
  /**
  * Specify the keys that will be forwarded from playlist files to media chunk files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#forward_only_keys CdnRuleTemplate#forward_only_keys}
  */
  readonly forwardOnlyKeys?: string[];
  /**
  * Specify the types of media chunk files to which parameters, extracted from playlist files, will be forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#forward_to_file_types CdnRuleTemplate#forward_to_file_types}
  */
  readonly forwardToFileTypes: string[];
}

export function cdnRuleTemplateOptionsQueryStringForwardingToTerraform(struct?: CdnRuleTemplateOptionsQueryStringForwardingOutputReference | CdnRuleTemplateOptionsQueryStringForwarding): any {
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


export function cdnRuleTemplateOptionsQueryStringForwardingToHclTerraform(struct?: CdnRuleTemplateOptionsQueryStringForwardingOutputReference | CdnRuleTemplateOptionsQueryStringForwarding): any {
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

export class CdnRuleTemplateOptionsQueryStringForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsQueryStringForwarding | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsQueryStringForwarding | undefined) {
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
export interface CdnRuleTemplateOptionsRedirectHttpToHttps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsRedirectHttpToHttpsToTerraform(struct?: CdnRuleTemplateOptionsRedirectHttpToHttpsOutputReference | CdnRuleTemplateOptionsRedirectHttpToHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsRedirectHttpToHttpsToHclTerraform(struct?: CdnRuleTemplateOptionsRedirectHttpToHttpsOutputReference | CdnRuleTemplateOptionsRedirectHttpToHttps): any {
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

export class CdnRuleTemplateOptionsRedirectHttpToHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsRedirectHttpToHttps | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsRedirectHttpToHttps | undefined) {
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
export interface CdnRuleTemplateOptionsRedirectHttpsToHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsRedirectHttpsToHttpToTerraform(struct?: CdnRuleTemplateOptionsRedirectHttpsToHttpOutputReference | CdnRuleTemplateOptionsRedirectHttpsToHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsRedirectHttpsToHttpToHclTerraform(struct?: CdnRuleTemplateOptionsRedirectHttpsToHttpOutputReference | CdnRuleTemplateOptionsRedirectHttpsToHttp): any {
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

export class CdnRuleTemplateOptionsRedirectHttpsToHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsRedirectHttpsToHttp | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsRedirectHttpsToHttp | undefined) {
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
export interface CdnRuleTemplateOptionsReferrerAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify list of domain names or wildcard domains (without http:// or https://). For example, example.com or *.example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#excepted_values CdnRuleTemplate#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Possible values: allow, deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#policy_type CdnRuleTemplate#policy_type}
  */
  readonly policyType: string;
}

export function cdnRuleTemplateOptionsReferrerAclToTerraform(struct?: CdnRuleTemplateOptionsReferrerAclOutputReference | CdnRuleTemplateOptionsReferrerAcl): any {
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


export function cdnRuleTemplateOptionsReferrerAclToHclTerraform(struct?: CdnRuleTemplateOptionsReferrerAclOutputReference | CdnRuleTemplateOptionsReferrerAcl): any {
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

export class CdnRuleTemplateOptionsReferrerAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsReferrerAcl | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsReferrerAcl | undefined) {
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
export interface CdnRuleTemplateOptionsRequestLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#burst CdnRuleTemplate#burst}
  */
  readonly burst: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#delay CdnRuleTemplate#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#rate CdnRuleTemplate#rate}
  */
  readonly rate: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#rate_unit CdnRuleTemplate#rate_unit}
  */
  readonly rateUnit?: string;
}

export function cdnRuleTemplateOptionsRequestLimiterToTerraform(struct?: CdnRuleTemplateOptionsRequestLimiterOutputReference | CdnRuleTemplateOptionsRequestLimiter): any {
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


export function cdnRuleTemplateOptionsRequestLimiterToHclTerraform(struct?: CdnRuleTemplateOptionsRequestLimiterOutputReference | CdnRuleTemplateOptionsRequestLimiter): any {
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

export class CdnRuleTemplateOptionsRequestLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsRequestLimiter | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsRequestLimiter | undefined) {
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
export interface CdnRuleTemplateOptionsResponseHeadersHidingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of HTTP headers. The following required headers cannot be hidden from response: Connection, Content-Length, Content-Type, Date, Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#excepted CdnRuleTemplate#excepted}
  */
  readonly excepted: string[];
  /**
  * Specify a mode of hiding HTTP headers from the response. Possible values are: hide, show.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#mode CdnRuleTemplate#mode}
  */
  readonly mode: string;
}

export function cdnRuleTemplateOptionsResponseHeadersHidingPolicyToTerraform(struct?: CdnRuleTemplateOptionsResponseHeadersHidingPolicyOutputReference | CdnRuleTemplateOptionsResponseHeadersHidingPolicy): any {
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


export function cdnRuleTemplateOptionsResponseHeadersHidingPolicyToHclTerraform(struct?: CdnRuleTemplateOptionsResponseHeadersHidingPolicyOutputReference | CdnRuleTemplateOptionsResponseHeadersHidingPolicy): any {
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

export class CdnRuleTemplateOptionsResponseHeadersHidingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsResponseHeadersHidingPolicy | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsResponseHeadersHidingPolicy | undefined) {
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
export interface CdnRuleTemplateOptionsRewrite {
  /**
  * The pattern for Rewrite. At least one group should be specified. For Example: /rewrite_from/(.*) /rewrite_to/$1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#body CdnRuleTemplate#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Define flag for the Rewrite option. Possible values: last, break, redirect, permanent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#flag CdnRuleTemplate#flag}
  */
  readonly flag?: string;
}

export function cdnRuleTemplateOptionsRewriteToTerraform(struct?: CdnRuleTemplateOptionsRewriteOutputReference | CdnRuleTemplateOptionsRewrite): any {
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


export function cdnRuleTemplateOptionsRewriteToHclTerraform(struct?: CdnRuleTemplateOptionsRewriteOutputReference | CdnRuleTemplateOptionsRewrite): any {
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

export class CdnRuleTemplateOptionsRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsRewrite | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsRewrite | undefined) {
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
export interface CdnRuleTemplateOptionsSecureKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A key generated on your side that will be used for URL signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#key CdnRuleTemplate#key}
  */
  readonly key: string;
  /**
  * Specify the type of URL Signing. It can be either 0 or 2. Type 0 - includes end user's IP to secure token generation. Type 2 - excludes end user's IP from secure token generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#type CdnRuleTemplate#type}
  */
  readonly type: number;
}

export function cdnRuleTemplateOptionsSecureKeyToTerraform(struct?: CdnRuleTemplateOptionsSecureKeyOutputReference | CdnRuleTemplateOptionsSecureKey): any {
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


export function cdnRuleTemplateOptionsSecureKeyToHclTerraform(struct?: CdnRuleTemplateOptionsSecureKeyOutputReference | CdnRuleTemplateOptionsSecureKey): any {
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

export class CdnRuleTemplateOptionsSecureKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsSecureKey | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsSecureKey | undefined) {
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
export interface CdnRuleTemplateOptionsSlice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsSliceToTerraform(struct?: CdnRuleTemplateOptionsSliceOutputReference | CdnRuleTemplateOptionsSlice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsSliceToHclTerraform(struct?: CdnRuleTemplateOptionsSliceOutputReference | CdnRuleTemplateOptionsSlice): any {
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

export class CdnRuleTemplateOptionsSliceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsSlice | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsSlice | undefined) {
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
export interface CdnRuleTemplateOptionsSni {
  /**
  * Custom SNI hostname. Required if sni_type is set to 'custom'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#custom_hostname CdnRuleTemplate#custom_hostname}
  */
  readonly customHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify SNI type. Possible values: dynamic, custom. dynamic - SNI hostname depends on the hostHeader and the forward_host_header options. custom - custom SNI hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#sni_type CdnRuleTemplate#sni_type}
  */
  readonly sniType?: string;
}

export function cdnRuleTemplateOptionsSniToTerraform(struct?: CdnRuleTemplateOptionsSniOutputReference | CdnRuleTemplateOptionsSni): any {
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


export function cdnRuleTemplateOptionsSniToHclTerraform(struct?: CdnRuleTemplateOptionsSniOutputReference | CdnRuleTemplateOptionsSni): any {
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

export class CdnRuleTemplateOptionsSniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsSni | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsSni | undefined) {
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
export interface CdnRuleTemplateOptionsStale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Possible values: error, http_403, http_404, http_429, http_500, http_502, http_503, http_504, invalid_header, timeout, updating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: string[];
}

export function cdnRuleTemplateOptionsStaleToTerraform(struct?: CdnRuleTemplateOptionsStaleOutputReference | CdnRuleTemplateOptionsStale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function cdnRuleTemplateOptionsStaleToHclTerraform(struct?: CdnRuleTemplateOptionsStaleOutputReference | CdnRuleTemplateOptionsStale): any {
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

export class CdnRuleTemplateOptionsStaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsStale | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsStale | undefined) {
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
export interface CdnRuleTemplateOptionsStaticRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Header name is restricted to 255 symbols and can contain latin letters (A-Z, a-z), numbers (0-9), dashes, and underscores. Header value is restricted to 512 symbols and can contain latin letters (a-z), numbers (0-9), spaces, underscores and symbols (-/.:). Space can be used only between words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: { [key: string]: string };
}

export function cdnRuleTemplateOptionsStaticRequestHeadersToTerraform(struct?: CdnRuleTemplateOptionsStaticRequestHeadersOutputReference | CdnRuleTemplateOptionsStaticRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function cdnRuleTemplateOptionsStaticRequestHeadersToHclTerraform(struct?: CdnRuleTemplateOptionsStaticRequestHeadersOutputReference | CdnRuleTemplateOptionsStaticRequestHeaders): any {
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

export class CdnRuleTemplateOptionsStaticRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsStaticRequestHeaders | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsStaticRequestHeaders | undefined) {
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
export interface CdnRuleTemplateOptionsStaticResponseHeadersValue {
  /**
  * Specifies if the header will be added to a response from CDN regardless of response code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#always CdnRuleTemplate#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#name CdnRuleTemplate#name}
  */
  readonly name: string;
  /**
  * Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: string[];
}

export function cdnRuleTemplateOptionsStaticResponseHeadersValueToTerraform(struct?: CdnRuleTemplateOptionsStaticResponseHeadersValue | cdktf.IResolvable): any {
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


export function cdnRuleTemplateOptionsStaticResponseHeadersValueToHclTerraform(struct?: CdnRuleTemplateOptionsStaticResponseHeadersValue | cdktf.IResolvable): any {
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

export class CdnRuleTemplateOptionsStaticResponseHeadersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnRuleTemplateOptionsStaticResponseHeadersValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsStaticResponseHeadersValue | cdktf.IResolvable | undefined) {
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

export class CdnRuleTemplateOptionsStaticResponseHeadersValueList extends cdktf.ComplexList {
  public internalValue? : CdnRuleTemplateOptionsStaticResponseHeadersValue[] | cdktf.IResolvable

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
  public get(index: number): CdnRuleTemplateOptionsStaticResponseHeadersValueOutputReference {
    return new CdnRuleTemplateOptionsStaticResponseHeadersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnRuleTemplateOptionsStaticResponseHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: CdnRuleTemplateOptionsStaticResponseHeadersValue[] | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsStaticResponseHeadersToTerraform(struct?: CdnRuleTemplateOptionsStaticResponseHeadersOutputReference | CdnRuleTemplateOptionsStaticResponseHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdnRuleTemplateOptionsStaticResponseHeadersValueToTerraform, true)(struct!.value),
  }
}


export function cdnRuleTemplateOptionsStaticResponseHeadersToHclTerraform(struct?: CdnRuleTemplateOptionsStaticResponseHeadersOutputReference | CdnRuleTemplateOptionsStaticResponseHeaders): any {
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
      value: cdktf.listMapperHcl(cdnRuleTemplateOptionsStaticResponseHeadersValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsStaticResponseHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnRuleTemplateOptionsStaticResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsStaticResponseHeaders | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsStaticResponseHeaders | undefined) {
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
  private _value = new CdnRuleTemplateOptionsStaticResponseHeadersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: CdnRuleTemplateOptionsStaticResponseHeadersValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface CdnRuleTemplateOptionsUserAgentAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of User-Agents. Use "" to allow/deny access when the User-Agent header is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#excepted_values CdnRuleTemplate#excepted_values}
  */
  readonly exceptedValues: string[];
  /**
  * Possible values: allow, deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#policy_type CdnRuleTemplate#policy_type}
  */
  readonly policyType: string;
}

export function cdnRuleTemplateOptionsUserAgentAclToTerraform(struct?: CdnRuleTemplateOptionsUserAgentAclOutputReference | CdnRuleTemplateOptionsUserAgentAcl): any {
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


export function cdnRuleTemplateOptionsUserAgentAclToHclTerraform(struct?: CdnRuleTemplateOptionsUserAgentAclOutputReference | CdnRuleTemplateOptionsUserAgentAcl): any {
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

export class CdnRuleTemplateOptionsUserAgentAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsUserAgentAcl | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsUserAgentAcl | undefined) {
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
export interface CdnRuleTemplateOptionsWaap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsWaapToTerraform(struct?: CdnRuleTemplateOptionsWaapOutputReference | CdnRuleTemplateOptionsWaap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsWaapToHclTerraform(struct?: CdnRuleTemplateOptionsWaapOutputReference | CdnRuleTemplateOptionsWaap): any {
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

export class CdnRuleTemplateOptionsWaapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsWaap | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsWaap | undefined) {
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
export interface CdnRuleTemplateOptionsWaf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsWafToTerraform(struct?: CdnRuleTemplateOptionsWafOutputReference | CdnRuleTemplateOptionsWaf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsWafToHclTerraform(struct?: CdnRuleTemplateOptionsWafOutputReference | CdnRuleTemplateOptionsWaf): any {
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

export class CdnRuleTemplateOptionsWafOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsWaf | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsWaf | undefined) {
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
export interface CdnRuleTemplateOptionsWebsockets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#enabled CdnRuleTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#value CdnRuleTemplate#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function cdnRuleTemplateOptionsWebsocketsToTerraform(struct?: CdnRuleTemplateOptionsWebsocketsOutputReference | CdnRuleTemplateOptionsWebsockets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function cdnRuleTemplateOptionsWebsocketsToHclTerraform(struct?: CdnRuleTemplateOptionsWebsocketsOutputReference | CdnRuleTemplateOptionsWebsockets): any {
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

export class CdnRuleTemplateOptionsWebsocketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptionsWebsockets | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptionsWebsockets | undefined) {
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
export interface CdnRuleTemplateOptions {
  /**
  * allowed_http_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#allowed_http_methods CdnRuleTemplate#allowed_http_methods}
  */
  readonly allowedHttpMethods?: CdnRuleTemplateOptionsAllowedHttpMethods;
  /**
  * brotli_compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#brotli_compression CdnRuleTemplate#brotli_compression}
  */
  readonly brotliCompression?: CdnRuleTemplateOptionsBrotliCompression;
  /**
  * browser_cache_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#browser_cache_settings CdnRuleTemplate#browser_cache_settings}
  */
  readonly browserCacheSettings?: CdnRuleTemplateOptionsBrowserCacheSettings;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#cors CdnRuleTemplate#cors}
  */
  readonly cors?: CdnRuleTemplateOptionsCors;
  /**
  * country_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#country_acl CdnRuleTemplate#country_acl}
  */
  readonly countryAcl?: CdnRuleTemplateOptionsCountryAcl;
  /**
  * disable_proxy_force_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#disable_proxy_force_ranges CdnRuleTemplate#disable_proxy_force_ranges}
  */
  readonly disableProxyForceRanges?: CdnRuleTemplateOptionsDisableProxyForceRanges;
  /**
  * edge_cache_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#edge_cache_settings CdnRuleTemplate#edge_cache_settings}
  */
  readonly edgeCacheSettings?: CdnRuleTemplateOptionsEdgeCacheSettings;
  /**
  * fastedge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#fastedge CdnRuleTemplate#fastedge}
  */
  readonly fastedge?: CdnRuleTemplateOptionsFastedge;
  /**
  * fetch_compressed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#fetch_compressed CdnRuleTemplate#fetch_compressed}
  */
  readonly fetchCompressed?: CdnRuleTemplateOptionsFetchCompressed;
  /**
  * follow_origin_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#follow_origin_redirect CdnRuleTemplate#follow_origin_redirect}
  */
  readonly followOriginRedirect?: CdnRuleTemplateOptionsFollowOriginRedirect;
  /**
  * force_return block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#force_return CdnRuleTemplate#force_return}
  */
  readonly forceReturn?: CdnRuleTemplateOptionsForceReturn;
  /**
  * forward_host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#forward_host_header CdnRuleTemplate#forward_host_header}
  */
  readonly forwardHostHeader?: CdnRuleTemplateOptionsForwardHostHeader;
  /**
  * gzip_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#gzip_on CdnRuleTemplate#gzip_on}
  */
  readonly gzipOn?: CdnRuleTemplateOptionsGzipOn;
  /**
  * host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#host_header CdnRuleTemplate#host_header}
  */
  readonly hostHeader?: CdnRuleTemplateOptionsHostHeader;
  /**
  * ignore_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#ignore_cookie CdnRuleTemplate#ignore_cookie}
  */
  readonly ignoreCookie?: CdnRuleTemplateOptionsIgnoreCookie;
  /**
  * ignore_query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#ignore_query_string CdnRuleTemplate#ignore_query_string}
  */
  readonly ignoreQueryString?: CdnRuleTemplateOptionsIgnoreQueryString;
  /**
  * image_stack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#image_stack CdnRuleTemplate#image_stack}
  */
  readonly imageStack?: CdnRuleTemplateOptionsImageStack;
  /**
  * ip_address_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#ip_address_acl CdnRuleTemplate#ip_address_acl}
  */
  readonly ipAddressAcl?: CdnRuleTemplateOptionsIpAddressAcl;
  /**
  * limit_bandwidth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#limit_bandwidth CdnRuleTemplate#limit_bandwidth}
  */
  readonly limitBandwidth?: CdnRuleTemplateOptionsLimitBandwidth;
  /**
  * proxy_cache_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#proxy_cache_key CdnRuleTemplate#proxy_cache_key}
  */
  readonly proxyCacheKey?: CdnRuleTemplateOptionsProxyCacheKey;
  /**
  * proxy_cache_methods_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#proxy_cache_methods_set CdnRuleTemplate#proxy_cache_methods_set}
  */
  readonly proxyCacheMethodsSet?: CdnRuleTemplateOptionsProxyCacheMethodsSet;
  /**
  * proxy_connect_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#proxy_connect_timeout CdnRuleTemplate#proxy_connect_timeout}
  */
  readonly proxyConnectTimeout?: CdnRuleTemplateOptionsProxyConnectTimeout;
  /**
  * proxy_read_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#proxy_read_timeout CdnRuleTemplate#proxy_read_timeout}
  */
  readonly proxyReadTimeout?: CdnRuleTemplateOptionsProxyReadTimeout;
  /**
  * query_params_blacklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#query_params_blacklist CdnRuleTemplate#query_params_blacklist}
  */
  readonly queryParamsBlacklist?: CdnRuleTemplateOptionsQueryParamsBlacklistStruct;
  /**
  * query_params_whitelist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#query_params_whitelist CdnRuleTemplate#query_params_whitelist}
  */
  readonly queryParamsWhitelist?: CdnRuleTemplateOptionsQueryParamsWhitelistStruct;
  /**
  * query_string_forwarding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#query_string_forwarding CdnRuleTemplate#query_string_forwarding}
  */
  readonly queryStringForwarding?: CdnRuleTemplateOptionsQueryStringForwarding;
  /**
  * redirect_http_to_https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#redirect_http_to_https CdnRuleTemplate#redirect_http_to_https}
  */
  readonly redirectHttpToHttps?: CdnRuleTemplateOptionsRedirectHttpToHttps;
  /**
  * redirect_https_to_http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#redirect_https_to_http CdnRuleTemplate#redirect_https_to_http}
  */
  readonly redirectHttpsToHttp?: CdnRuleTemplateOptionsRedirectHttpsToHttp;
  /**
  * referrer_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#referrer_acl CdnRuleTemplate#referrer_acl}
  */
  readonly referrerAcl?: CdnRuleTemplateOptionsReferrerAcl;
  /**
  * request_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#request_limiter CdnRuleTemplate#request_limiter}
  */
  readonly requestLimiter?: CdnRuleTemplateOptionsRequestLimiter;
  /**
  * response_headers_hiding_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#response_headers_hiding_policy CdnRuleTemplate#response_headers_hiding_policy}
  */
  readonly responseHeadersHidingPolicy?: CdnRuleTemplateOptionsResponseHeadersHidingPolicy;
  /**
  * rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#rewrite CdnRuleTemplate#rewrite}
  */
  readonly rewrite?: CdnRuleTemplateOptionsRewrite;
  /**
  * secure_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#secure_key CdnRuleTemplate#secure_key}
  */
  readonly secureKey?: CdnRuleTemplateOptionsSecureKey;
  /**
  * slice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#slice CdnRuleTemplate#slice}
  */
  readonly slice?: CdnRuleTemplateOptionsSlice;
  /**
  * sni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#sni CdnRuleTemplate#sni}
  */
  readonly sni?: CdnRuleTemplateOptionsSni;
  /**
  * stale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#stale CdnRuleTemplate#stale}
  */
  readonly stale?: CdnRuleTemplateOptionsStale;
  /**
  * static_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#static_request_headers CdnRuleTemplate#static_request_headers}
  */
  readonly staticRequestHeaders?: CdnRuleTemplateOptionsStaticRequestHeaders;
  /**
  * static_response_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#static_response_headers CdnRuleTemplate#static_response_headers}
  */
  readonly staticResponseHeaders?: CdnRuleTemplateOptionsStaticResponseHeaders;
  /**
  * user_agent_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#user_agent_acl CdnRuleTemplate#user_agent_acl}
  */
  readonly userAgentAcl?: CdnRuleTemplateOptionsUserAgentAcl;
  /**
  * waap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#waap CdnRuleTemplate#waap}
  */
  readonly waap?: CdnRuleTemplateOptionsWaap;
  /**
  * waf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#waf CdnRuleTemplate#waf}
  */
  readonly waf?: CdnRuleTemplateOptionsWaf;
  /**
  * websockets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#websockets CdnRuleTemplate#websockets}
  */
  readonly websockets?: CdnRuleTemplateOptionsWebsockets;
}

export function cdnRuleTemplateOptionsToTerraform(struct?: CdnRuleTemplateOptionsOutputReference | CdnRuleTemplateOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_http_methods: cdnRuleTemplateOptionsAllowedHttpMethodsToTerraform(struct!.allowedHttpMethods),
    brotli_compression: cdnRuleTemplateOptionsBrotliCompressionToTerraform(struct!.brotliCompression),
    browser_cache_settings: cdnRuleTemplateOptionsBrowserCacheSettingsToTerraform(struct!.browserCacheSettings),
    cors: cdnRuleTemplateOptionsCorsToTerraform(struct!.cors),
    country_acl: cdnRuleTemplateOptionsCountryAclToTerraform(struct!.countryAcl),
    disable_proxy_force_ranges: cdnRuleTemplateOptionsDisableProxyForceRangesToTerraform(struct!.disableProxyForceRanges),
    edge_cache_settings: cdnRuleTemplateOptionsEdgeCacheSettingsToTerraform(struct!.edgeCacheSettings),
    fastedge: cdnRuleTemplateOptionsFastedgeToTerraform(struct!.fastedge),
    fetch_compressed: cdnRuleTemplateOptionsFetchCompressedToTerraform(struct!.fetchCompressed),
    follow_origin_redirect: cdnRuleTemplateOptionsFollowOriginRedirectToTerraform(struct!.followOriginRedirect),
    force_return: cdnRuleTemplateOptionsForceReturnToTerraform(struct!.forceReturn),
    forward_host_header: cdnRuleTemplateOptionsForwardHostHeaderToTerraform(struct!.forwardHostHeader),
    gzip_on: cdnRuleTemplateOptionsGzipOnToTerraform(struct!.gzipOn),
    host_header: cdnRuleTemplateOptionsHostHeaderToTerraform(struct!.hostHeader),
    ignore_cookie: cdnRuleTemplateOptionsIgnoreCookieToTerraform(struct!.ignoreCookie),
    ignore_query_string: cdnRuleTemplateOptionsIgnoreQueryStringToTerraform(struct!.ignoreQueryString),
    image_stack: cdnRuleTemplateOptionsImageStackToTerraform(struct!.imageStack),
    ip_address_acl: cdnRuleTemplateOptionsIpAddressAclToTerraform(struct!.ipAddressAcl),
    limit_bandwidth: cdnRuleTemplateOptionsLimitBandwidthToTerraform(struct!.limitBandwidth),
    proxy_cache_key: cdnRuleTemplateOptionsProxyCacheKeyToTerraform(struct!.proxyCacheKey),
    proxy_cache_methods_set: cdnRuleTemplateOptionsProxyCacheMethodsSetToTerraform(struct!.proxyCacheMethodsSet),
    proxy_connect_timeout: cdnRuleTemplateOptionsProxyConnectTimeoutToTerraform(struct!.proxyConnectTimeout),
    proxy_read_timeout: cdnRuleTemplateOptionsProxyReadTimeoutToTerraform(struct!.proxyReadTimeout),
    query_params_blacklist: cdnRuleTemplateOptionsQueryParamsBlacklistStructToTerraform(struct!.queryParamsBlacklist),
    query_params_whitelist: cdnRuleTemplateOptionsQueryParamsWhitelistStructToTerraform(struct!.queryParamsWhitelist),
    query_string_forwarding: cdnRuleTemplateOptionsQueryStringForwardingToTerraform(struct!.queryStringForwarding),
    redirect_http_to_https: cdnRuleTemplateOptionsRedirectHttpToHttpsToTerraform(struct!.redirectHttpToHttps),
    redirect_https_to_http: cdnRuleTemplateOptionsRedirectHttpsToHttpToTerraform(struct!.redirectHttpsToHttp),
    referrer_acl: cdnRuleTemplateOptionsReferrerAclToTerraform(struct!.referrerAcl),
    request_limiter: cdnRuleTemplateOptionsRequestLimiterToTerraform(struct!.requestLimiter),
    response_headers_hiding_policy: cdnRuleTemplateOptionsResponseHeadersHidingPolicyToTerraform(struct!.responseHeadersHidingPolicy),
    rewrite: cdnRuleTemplateOptionsRewriteToTerraform(struct!.rewrite),
    secure_key: cdnRuleTemplateOptionsSecureKeyToTerraform(struct!.secureKey),
    slice: cdnRuleTemplateOptionsSliceToTerraform(struct!.slice),
    sni: cdnRuleTemplateOptionsSniToTerraform(struct!.sni),
    stale: cdnRuleTemplateOptionsStaleToTerraform(struct!.stale),
    static_request_headers: cdnRuleTemplateOptionsStaticRequestHeadersToTerraform(struct!.staticRequestHeaders),
    static_response_headers: cdnRuleTemplateOptionsStaticResponseHeadersToTerraform(struct!.staticResponseHeaders),
    user_agent_acl: cdnRuleTemplateOptionsUserAgentAclToTerraform(struct!.userAgentAcl),
    waap: cdnRuleTemplateOptionsWaapToTerraform(struct!.waap),
    waf: cdnRuleTemplateOptionsWafToTerraform(struct!.waf),
    websockets: cdnRuleTemplateOptionsWebsocketsToTerraform(struct!.websockets),
  }
}


export function cdnRuleTemplateOptionsToHclTerraform(struct?: CdnRuleTemplateOptionsOutputReference | CdnRuleTemplateOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_http_methods: {
      value: cdnRuleTemplateOptionsAllowedHttpMethodsToHclTerraform(struct!.allowedHttpMethods),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsAllowedHttpMethodsList",
    },
    brotli_compression: {
      value: cdnRuleTemplateOptionsBrotliCompressionToHclTerraform(struct!.brotliCompression),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsBrotliCompressionList",
    },
    browser_cache_settings: {
      value: cdnRuleTemplateOptionsBrowserCacheSettingsToHclTerraform(struct!.browserCacheSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsBrowserCacheSettingsList",
    },
    cors: {
      value: cdnRuleTemplateOptionsCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsCorsList",
    },
    country_acl: {
      value: cdnRuleTemplateOptionsCountryAclToHclTerraform(struct!.countryAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsCountryAclList",
    },
    disable_proxy_force_ranges: {
      value: cdnRuleTemplateOptionsDisableProxyForceRangesToHclTerraform(struct!.disableProxyForceRanges),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsDisableProxyForceRangesList",
    },
    edge_cache_settings: {
      value: cdnRuleTemplateOptionsEdgeCacheSettingsToHclTerraform(struct!.edgeCacheSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsEdgeCacheSettingsList",
    },
    fastedge: {
      value: cdnRuleTemplateOptionsFastedgeToHclTerraform(struct!.fastedge),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsFastedgeList",
    },
    fetch_compressed: {
      value: cdnRuleTemplateOptionsFetchCompressedToHclTerraform(struct!.fetchCompressed),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsFetchCompressedList",
    },
    follow_origin_redirect: {
      value: cdnRuleTemplateOptionsFollowOriginRedirectToHclTerraform(struct!.followOriginRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsFollowOriginRedirectList",
    },
    force_return: {
      value: cdnRuleTemplateOptionsForceReturnToHclTerraform(struct!.forceReturn),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsForceReturnList",
    },
    forward_host_header: {
      value: cdnRuleTemplateOptionsForwardHostHeaderToHclTerraform(struct!.forwardHostHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsForwardHostHeaderList",
    },
    gzip_on: {
      value: cdnRuleTemplateOptionsGzipOnToHclTerraform(struct!.gzipOn),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsGzipOnList",
    },
    host_header: {
      value: cdnRuleTemplateOptionsHostHeaderToHclTerraform(struct!.hostHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsHostHeaderList",
    },
    ignore_cookie: {
      value: cdnRuleTemplateOptionsIgnoreCookieToHclTerraform(struct!.ignoreCookie),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsIgnoreCookieList",
    },
    ignore_query_string: {
      value: cdnRuleTemplateOptionsIgnoreQueryStringToHclTerraform(struct!.ignoreQueryString),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsIgnoreQueryStringList",
    },
    image_stack: {
      value: cdnRuleTemplateOptionsImageStackToHclTerraform(struct!.imageStack),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsImageStackList",
    },
    ip_address_acl: {
      value: cdnRuleTemplateOptionsIpAddressAclToHclTerraform(struct!.ipAddressAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsIpAddressAclList",
    },
    limit_bandwidth: {
      value: cdnRuleTemplateOptionsLimitBandwidthToHclTerraform(struct!.limitBandwidth),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsLimitBandwidthList",
    },
    proxy_cache_key: {
      value: cdnRuleTemplateOptionsProxyCacheKeyToHclTerraform(struct!.proxyCacheKey),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsProxyCacheKeyList",
    },
    proxy_cache_methods_set: {
      value: cdnRuleTemplateOptionsProxyCacheMethodsSetToHclTerraform(struct!.proxyCacheMethodsSet),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsProxyCacheMethodsSetList",
    },
    proxy_connect_timeout: {
      value: cdnRuleTemplateOptionsProxyConnectTimeoutToHclTerraform(struct!.proxyConnectTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsProxyConnectTimeoutList",
    },
    proxy_read_timeout: {
      value: cdnRuleTemplateOptionsProxyReadTimeoutToHclTerraform(struct!.proxyReadTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsProxyReadTimeoutList",
    },
    query_params_blacklist: {
      value: cdnRuleTemplateOptionsQueryParamsBlacklistStructToHclTerraform(struct!.queryParamsBlacklist),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsQueryParamsBlacklistStructList",
    },
    query_params_whitelist: {
      value: cdnRuleTemplateOptionsQueryParamsWhitelistStructToHclTerraform(struct!.queryParamsWhitelist),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsQueryParamsWhitelistStructList",
    },
    query_string_forwarding: {
      value: cdnRuleTemplateOptionsQueryStringForwardingToHclTerraform(struct!.queryStringForwarding),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsQueryStringForwardingList",
    },
    redirect_http_to_https: {
      value: cdnRuleTemplateOptionsRedirectHttpToHttpsToHclTerraform(struct!.redirectHttpToHttps),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsRedirectHttpToHttpsList",
    },
    redirect_https_to_http: {
      value: cdnRuleTemplateOptionsRedirectHttpsToHttpToHclTerraform(struct!.redirectHttpsToHttp),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsRedirectHttpsToHttpList",
    },
    referrer_acl: {
      value: cdnRuleTemplateOptionsReferrerAclToHclTerraform(struct!.referrerAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsReferrerAclList",
    },
    request_limiter: {
      value: cdnRuleTemplateOptionsRequestLimiterToHclTerraform(struct!.requestLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsRequestLimiterList",
    },
    response_headers_hiding_policy: {
      value: cdnRuleTemplateOptionsResponseHeadersHidingPolicyToHclTerraform(struct!.responseHeadersHidingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsResponseHeadersHidingPolicyList",
    },
    rewrite: {
      value: cdnRuleTemplateOptionsRewriteToHclTerraform(struct!.rewrite),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsRewriteList",
    },
    secure_key: {
      value: cdnRuleTemplateOptionsSecureKeyToHclTerraform(struct!.secureKey),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsSecureKeyList",
    },
    slice: {
      value: cdnRuleTemplateOptionsSliceToHclTerraform(struct!.slice),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsSliceList",
    },
    sni: {
      value: cdnRuleTemplateOptionsSniToHclTerraform(struct!.sni),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsSniList",
    },
    stale: {
      value: cdnRuleTemplateOptionsStaleToHclTerraform(struct!.stale),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsStaleList",
    },
    static_request_headers: {
      value: cdnRuleTemplateOptionsStaticRequestHeadersToHclTerraform(struct!.staticRequestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsStaticRequestHeadersList",
    },
    static_response_headers: {
      value: cdnRuleTemplateOptionsStaticResponseHeadersToHclTerraform(struct!.staticResponseHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsStaticResponseHeadersList",
    },
    user_agent_acl: {
      value: cdnRuleTemplateOptionsUserAgentAclToHclTerraform(struct!.userAgentAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsUserAgentAclList",
    },
    waap: {
      value: cdnRuleTemplateOptionsWaapToHclTerraform(struct!.waap),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsWaapList",
    },
    waf: {
      value: cdnRuleTemplateOptionsWafToHclTerraform(struct!.waf),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsWafList",
    },
    websockets: {
      value: cdnRuleTemplateOptionsWebsocketsToHclTerraform(struct!.websockets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnRuleTemplateOptionsWebsocketsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnRuleTemplateOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnRuleTemplateOptions | undefined {
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

  public set internalValue(value: CdnRuleTemplateOptions | undefined) {
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
  private _allowedHttpMethods = new CdnRuleTemplateOptionsAllowedHttpMethodsOutputReference(this, "allowed_http_methods");
  public get allowedHttpMethods() {
    return this._allowedHttpMethods;
  }
  public putAllowedHttpMethods(value: CdnRuleTemplateOptionsAllowedHttpMethods) {
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
  private _brotliCompression = new CdnRuleTemplateOptionsBrotliCompressionOutputReference(this, "brotli_compression");
  public get brotliCompression() {
    return this._brotliCompression;
  }
  public putBrotliCompression(value: CdnRuleTemplateOptionsBrotliCompression) {
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
  private _browserCacheSettings = new CdnRuleTemplateOptionsBrowserCacheSettingsOutputReference(this, "browser_cache_settings");
  public get browserCacheSettings() {
    return this._browserCacheSettings;
  }
  public putBrowserCacheSettings(value: CdnRuleTemplateOptionsBrowserCacheSettings) {
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
  private _cors = new CdnRuleTemplateOptionsCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: CdnRuleTemplateOptionsCors) {
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
  private _countryAcl = new CdnRuleTemplateOptionsCountryAclOutputReference(this, "country_acl");
  public get countryAcl() {
    return this._countryAcl;
  }
  public putCountryAcl(value: CdnRuleTemplateOptionsCountryAcl) {
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
  private _disableProxyForceRanges = new CdnRuleTemplateOptionsDisableProxyForceRangesOutputReference(this, "disable_proxy_force_ranges");
  public get disableProxyForceRanges() {
    return this._disableProxyForceRanges;
  }
  public putDisableProxyForceRanges(value: CdnRuleTemplateOptionsDisableProxyForceRanges) {
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
  private _edgeCacheSettings = new CdnRuleTemplateOptionsEdgeCacheSettingsOutputReference(this, "edge_cache_settings");
  public get edgeCacheSettings() {
    return this._edgeCacheSettings;
  }
  public putEdgeCacheSettings(value: CdnRuleTemplateOptionsEdgeCacheSettings) {
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
  private _fastedge = new CdnRuleTemplateOptionsFastedgeOutputReference(this, "fastedge");
  public get fastedge() {
    return this._fastedge;
  }
  public putFastedge(value: CdnRuleTemplateOptionsFastedge) {
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
  private _fetchCompressed = new CdnRuleTemplateOptionsFetchCompressedOutputReference(this, "fetch_compressed");
  public get fetchCompressed() {
    return this._fetchCompressed;
  }
  public putFetchCompressed(value: CdnRuleTemplateOptionsFetchCompressed) {
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
  private _followOriginRedirect = new CdnRuleTemplateOptionsFollowOriginRedirectOutputReference(this, "follow_origin_redirect");
  public get followOriginRedirect() {
    return this._followOriginRedirect;
  }
  public putFollowOriginRedirect(value: CdnRuleTemplateOptionsFollowOriginRedirect) {
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
  private _forceReturn = new CdnRuleTemplateOptionsForceReturnOutputReference(this, "force_return");
  public get forceReturn() {
    return this._forceReturn;
  }
  public putForceReturn(value: CdnRuleTemplateOptionsForceReturn) {
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
  private _forwardHostHeader = new CdnRuleTemplateOptionsForwardHostHeaderOutputReference(this, "forward_host_header");
  public get forwardHostHeader() {
    return this._forwardHostHeader;
  }
  public putForwardHostHeader(value: CdnRuleTemplateOptionsForwardHostHeader) {
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
  private _gzipOn = new CdnRuleTemplateOptionsGzipOnOutputReference(this, "gzip_on");
  public get gzipOn() {
    return this._gzipOn;
  }
  public putGzipOn(value: CdnRuleTemplateOptionsGzipOn) {
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
  private _hostHeader = new CdnRuleTemplateOptionsHostHeaderOutputReference(this, "host_header");
  public get hostHeader() {
    return this._hostHeader;
  }
  public putHostHeader(value: CdnRuleTemplateOptionsHostHeader) {
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
  private _ignoreCookie = new CdnRuleTemplateOptionsIgnoreCookieOutputReference(this, "ignore_cookie");
  public get ignoreCookie() {
    return this._ignoreCookie;
  }
  public putIgnoreCookie(value: CdnRuleTemplateOptionsIgnoreCookie) {
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
  private _ignoreQueryString = new CdnRuleTemplateOptionsIgnoreQueryStringOutputReference(this, "ignore_query_string");
  public get ignoreQueryString() {
    return this._ignoreQueryString;
  }
  public putIgnoreQueryString(value: CdnRuleTemplateOptionsIgnoreQueryString) {
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
  private _imageStack = new CdnRuleTemplateOptionsImageStackOutputReference(this, "image_stack");
  public get imageStack() {
    return this._imageStack;
  }
  public putImageStack(value: CdnRuleTemplateOptionsImageStack) {
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
  private _ipAddressAcl = new CdnRuleTemplateOptionsIpAddressAclOutputReference(this, "ip_address_acl");
  public get ipAddressAcl() {
    return this._ipAddressAcl;
  }
  public putIpAddressAcl(value: CdnRuleTemplateOptionsIpAddressAcl) {
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
  private _limitBandwidth = new CdnRuleTemplateOptionsLimitBandwidthOutputReference(this, "limit_bandwidth");
  public get limitBandwidth() {
    return this._limitBandwidth;
  }
  public putLimitBandwidth(value: CdnRuleTemplateOptionsLimitBandwidth) {
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
  private _proxyCacheKey = new CdnRuleTemplateOptionsProxyCacheKeyOutputReference(this, "proxy_cache_key");
  public get proxyCacheKey() {
    return this._proxyCacheKey;
  }
  public putProxyCacheKey(value: CdnRuleTemplateOptionsProxyCacheKey) {
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
  private _proxyCacheMethodsSet = new CdnRuleTemplateOptionsProxyCacheMethodsSetOutputReference(this, "proxy_cache_methods_set");
  public get proxyCacheMethodsSet() {
    return this._proxyCacheMethodsSet;
  }
  public putProxyCacheMethodsSet(value: CdnRuleTemplateOptionsProxyCacheMethodsSet) {
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
  private _proxyConnectTimeout = new CdnRuleTemplateOptionsProxyConnectTimeoutOutputReference(this, "proxy_connect_timeout");
  public get proxyConnectTimeout() {
    return this._proxyConnectTimeout;
  }
  public putProxyConnectTimeout(value: CdnRuleTemplateOptionsProxyConnectTimeout) {
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
  private _proxyReadTimeout = new CdnRuleTemplateOptionsProxyReadTimeoutOutputReference(this, "proxy_read_timeout");
  public get proxyReadTimeout() {
    return this._proxyReadTimeout;
  }
  public putProxyReadTimeout(value: CdnRuleTemplateOptionsProxyReadTimeout) {
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
  private _queryParamsBlacklist = new CdnRuleTemplateOptionsQueryParamsBlacklistStructOutputReference(this, "query_params_blacklist");
  public get queryParamsBlacklist() {
    return this._queryParamsBlacklist;
  }
  public putQueryParamsBlacklist(value: CdnRuleTemplateOptionsQueryParamsBlacklistStruct) {
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
  private _queryParamsWhitelist = new CdnRuleTemplateOptionsQueryParamsWhitelistStructOutputReference(this, "query_params_whitelist");
  public get queryParamsWhitelist() {
    return this._queryParamsWhitelist;
  }
  public putQueryParamsWhitelist(value: CdnRuleTemplateOptionsQueryParamsWhitelistStruct) {
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
  private _queryStringForwarding = new CdnRuleTemplateOptionsQueryStringForwardingOutputReference(this, "query_string_forwarding");
  public get queryStringForwarding() {
    return this._queryStringForwarding;
  }
  public putQueryStringForwarding(value: CdnRuleTemplateOptionsQueryStringForwarding) {
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
  private _redirectHttpToHttps = new CdnRuleTemplateOptionsRedirectHttpToHttpsOutputReference(this, "redirect_http_to_https");
  public get redirectHttpToHttps() {
    return this._redirectHttpToHttps;
  }
  public putRedirectHttpToHttps(value: CdnRuleTemplateOptionsRedirectHttpToHttps) {
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
  private _redirectHttpsToHttp = new CdnRuleTemplateOptionsRedirectHttpsToHttpOutputReference(this, "redirect_https_to_http");
  public get redirectHttpsToHttp() {
    return this._redirectHttpsToHttp;
  }
  public putRedirectHttpsToHttp(value: CdnRuleTemplateOptionsRedirectHttpsToHttp) {
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
  private _referrerAcl = new CdnRuleTemplateOptionsReferrerAclOutputReference(this, "referrer_acl");
  public get referrerAcl() {
    return this._referrerAcl;
  }
  public putReferrerAcl(value: CdnRuleTemplateOptionsReferrerAcl) {
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
  private _requestLimiter = new CdnRuleTemplateOptionsRequestLimiterOutputReference(this, "request_limiter");
  public get requestLimiter() {
    return this._requestLimiter;
  }
  public putRequestLimiter(value: CdnRuleTemplateOptionsRequestLimiter) {
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
  private _responseHeadersHidingPolicy = new CdnRuleTemplateOptionsResponseHeadersHidingPolicyOutputReference(this, "response_headers_hiding_policy");
  public get responseHeadersHidingPolicy() {
    return this._responseHeadersHidingPolicy;
  }
  public putResponseHeadersHidingPolicy(value: CdnRuleTemplateOptionsResponseHeadersHidingPolicy) {
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
  private _rewrite = new CdnRuleTemplateOptionsRewriteOutputReference(this, "rewrite");
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: CdnRuleTemplateOptionsRewrite) {
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
  private _secureKey = new CdnRuleTemplateOptionsSecureKeyOutputReference(this, "secure_key");
  public get secureKey() {
    return this._secureKey;
  }
  public putSecureKey(value: CdnRuleTemplateOptionsSecureKey) {
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
  private _slice = new CdnRuleTemplateOptionsSliceOutputReference(this, "slice");
  public get slice() {
    return this._slice;
  }
  public putSlice(value: CdnRuleTemplateOptionsSlice) {
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
  private _sni = new CdnRuleTemplateOptionsSniOutputReference(this, "sni");
  public get sni() {
    return this._sni;
  }
  public putSni(value: CdnRuleTemplateOptionsSni) {
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
  private _stale = new CdnRuleTemplateOptionsStaleOutputReference(this, "stale");
  public get stale() {
    return this._stale;
  }
  public putStale(value: CdnRuleTemplateOptionsStale) {
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
  private _staticRequestHeaders = new CdnRuleTemplateOptionsStaticRequestHeadersOutputReference(this, "static_request_headers");
  public get staticRequestHeaders() {
    return this._staticRequestHeaders;
  }
  public putStaticRequestHeaders(value: CdnRuleTemplateOptionsStaticRequestHeaders) {
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
  private _staticResponseHeaders = new CdnRuleTemplateOptionsStaticResponseHeadersOutputReference(this, "static_response_headers");
  public get staticResponseHeaders() {
    return this._staticResponseHeaders;
  }
  public putStaticResponseHeaders(value: CdnRuleTemplateOptionsStaticResponseHeaders) {
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
  private _userAgentAcl = new CdnRuleTemplateOptionsUserAgentAclOutputReference(this, "user_agent_acl");
  public get userAgentAcl() {
    return this._userAgentAcl;
  }
  public putUserAgentAcl(value: CdnRuleTemplateOptionsUserAgentAcl) {
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
  private _waap = new CdnRuleTemplateOptionsWaapOutputReference(this, "waap");
  public get waap() {
    return this._waap;
  }
  public putWaap(value: CdnRuleTemplateOptionsWaap) {
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
  private _waf = new CdnRuleTemplateOptionsWafOutputReference(this, "waf");
  public get waf() {
    return this._waf;
  }
  public putWaf(value: CdnRuleTemplateOptionsWaf) {
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
  private _websockets = new CdnRuleTemplateOptionsWebsocketsOutputReference(this, "websockets");
  public get websockets() {
    return this._websockets;
  }
  public putWebsockets(value: CdnRuleTemplateOptionsWebsockets) {
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
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template gcore_cdn_rule_template}
*/
export class CdnRuleTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_cdn_rule_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnRuleTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnRuleTemplate to import
  * @param importFromId The id of the existing CdnRuleTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnRuleTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_cdn_rule_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_rule_template gcore_cdn_rule_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnRuleTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CdnRuleTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_cdn_rule_template',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.4',
        providerVersionConstraint: '0.32.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._overrideOriginProtocol = config.overrideOriginProtocol;
    this._rule = config.rule;
    this._ruleType = config.ruleType;
    this._weight = config.weight;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: true, optional: true, required: false
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

  // override_origin_protocol - computed: false, optional: true, required: false
  private _overrideOriginProtocol?: string; 
  public get overrideOriginProtocol() {
    return this.getStringAttribute('override_origin_protocol');
  }
  public set overrideOriginProtocol(value: string) {
    this._overrideOriginProtocol = value;
  }
  public resetOverrideOriginProtocol() {
    this._overrideOriginProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideOriginProtocolInput() {
    return this._overrideOriginProtocol;
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
  private _options = new CdnRuleTemplateOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: CdnRuleTemplateOptions) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      override_origin_protocol: cdktf.stringToTerraform(this._overrideOriginProtocol),
      rule: cdktf.stringToTerraform(this._rule),
      rule_type: cdktf.numberToTerraform(this._ruleType),
      weight: cdktf.numberToTerraform(this._weight),
      options: cdnRuleTemplateOptionsToTerraform(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      override_origin_protocol: {
        value: cdktf.stringToHclTerraform(this._overrideOriginProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdnRuleTemplateOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnRuleTemplateOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
