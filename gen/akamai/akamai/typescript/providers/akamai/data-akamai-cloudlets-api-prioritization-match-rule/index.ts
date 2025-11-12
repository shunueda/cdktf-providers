// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCloudletsApiPrioritizationMatchRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#id DataAkamaiCloudletsApiPrioritizationMatchRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * match_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#match_rules DataAkamaiCloudletsApiPrioritizationMatchRule#match_rules}
  */
  readonly matchRules?: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRules[] | cdktf.IResolvable;
}
export interface DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptions {
  /**
  * The value attributes in the incoming request to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#value DataAkamaiCloudletsApiPrioritizationMatchRule#value}
  */
  readonly value?: string[];
  /**
  * Set to true if the entries for the value property should be evaluated based on case sensitivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#value_case_sensitive DataAkamaiCloudletsApiPrioritizationMatchRule#value_case_sensitive}
  */
  readonly valueCaseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Set to true if provided value should be compared in escaped form
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#value_escaped DataAkamaiCloudletsApiPrioritizationMatchRule#value_escaped}
  */
  readonly valueEscaped?: boolean | cdktf.IResolvable;
  /**
  * Set to true if the entries for the value property include wildcards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#value_has_wildcard DataAkamaiCloudletsApiPrioritizationMatchRule#value_has_wildcard}
  */
  readonly valueHasWildcard?: boolean | cdktf.IResolvable;
}

export function dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptionsToTerraform(struct?: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptionsOutputReference | DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
    value_case_sensitive: cdktf.booleanToTerraform(struct!.valueCaseSensitive),
    value_escaped: cdktf.booleanToTerraform(struct!.valueEscaped),
    value_has_wildcard: cdktf.booleanToTerraform(struct!.valueHasWildcard),
  }
}


export function dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptionsToHclTerraform(struct?: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptionsOutputReference | DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value_case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.valueCaseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_escaped: {
      value: cdktf.booleanToHclTerraform(struct!.valueEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_has_wildcard: {
      value: cdktf.booleanToHclTerraform(struct!.valueHasWildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueCaseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueCaseSensitive = this._valueCaseSensitive;
    }
    if (this._valueEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueEscaped = this._valueEscaped;
    }
    if (this._valueHasWildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueHasWildcard = this._valueHasWildcard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
      this._valueCaseSensitive = undefined;
      this._valueEscaped = undefined;
      this._valueHasWildcard = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
      this._valueCaseSensitive = value.valueCaseSensitive;
      this._valueEscaped = value.valueEscaped;
      this._valueHasWildcard = value.valueHasWildcard;
    }
  }

  // value - computed: false, optional: true, required: false
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

  // value_case_sensitive - computed: false, optional: true, required: false
  private _valueCaseSensitive?: boolean | cdktf.IResolvable; 
  public get valueCaseSensitive() {
    return this.getBooleanAttribute('value_case_sensitive');
  }
  public set valueCaseSensitive(value: boolean | cdktf.IResolvable) {
    this._valueCaseSensitive = value;
  }
  public resetValueCaseSensitive() {
    this._valueCaseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueCaseSensitiveInput() {
    return this._valueCaseSensitive;
  }

  // value_escaped - computed: false, optional: true, required: false
  private _valueEscaped?: boolean | cdktf.IResolvable; 
  public get valueEscaped() {
    return this.getBooleanAttribute('value_escaped');
  }
  public set valueEscaped(value: boolean | cdktf.IResolvable) {
    this._valueEscaped = value;
  }
  public resetValueEscaped() {
    this._valueEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueEscapedInput() {
    return this._valueEscaped;
  }

  // value_has_wildcard - computed: false, optional: true, required: false
  private _valueHasWildcard?: boolean | cdktf.IResolvable; 
  public get valueHasWildcard() {
    return this.getBooleanAttribute('value_has_wildcard');
  }
  public set valueHasWildcard(value: boolean | cdktf.IResolvable) {
    this._valueHasWildcard = value;
  }
  public resetValueHasWildcard() {
    this._valueHasWildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueHasWildcardInput() {
    return this._valueHasWildcard;
  }
}
export interface DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValue {
  /**
  * If using a match type that supports name attributes, enter the value in the incoming request to match on. The following match types support this property: cookie, header, parameter, and query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#name DataAkamaiCloudletsApiPrioritizationMatchRule#name}
  */
  readonly name?: string;
  /**
  * Set to true if the entry for the name property should be evaluated based on case sensitivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#name_case_sensitive DataAkamaiCloudletsApiPrioritizationMatchRule#name_case_sensitive}
  */
  readonly nameCaseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Set to true if the entry for the name property includes wildcards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#name_has_wildcard DataAkamaiCloudletsApiPrioritizationMatchRule#name_has_wildcard}
  */
  readonly nameHasWildcard?: boolean | cdktf.IResolvable;
  /**
  * The array type, which can be one of the following: object or simple. Use the simple option when adding only an array of string-based values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#type DataAkamaiCloudletsApiPrioritizationMatchRule#type}
  */
  readonly type: string;
  /**
  * The value attributes in the incoming request to match on (use only with simple type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#value DataAkamaiCloudletsApiPrioritizationMatchRule#value}
  */
  readonly value?: string[];
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#options DataAkamaiCloudletsApiPrioritizationMatchRule#options}
  */
  readonly options?: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptions;
}

export function dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueToTerraform(struct?: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_case_sensitive: cdktf.booleanToTerraform(struct!.nameCaseSensitive),
    name_has_wildcard: cdktf.booleanToTerraform(struct!.nameHasWildcard),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
    options: dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptionsToTerraform(struct!.options),
  }
}


export function dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueToHclTerraform(struct?: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValue | cdktf.IResolvable): any {
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
    name_case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.nameCaseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_has_wildcard: {
      value: cdktf.booleanToHclTerraform(struct!.nameHasWildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    options: {
      value: dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameCaseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameCaseSensitive = this._nameCaseSensitive;
    }
    if (this._nameHasWildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameHasWildcard = this._nameHasWildcard;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nameCaseSensitive = undefined;
      this._nameHasWildcard = undefined;
      this._type = undefined;
      this._value = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nameCaseSensitive = value.nameCaseSensitive;
      this._nameHasWildcard = value.nameHasWildcard;
      this._type = value.type;
      this._value = value.value;
      this._options.internalValue = value.options;
    }
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

  // name_case_sensitive - computed: false, optional: true, required: false
  private _nameCaseSensitive?: boolean | cdktf.IResolvable; 
  public get nameCaseSensitive() {
    return this.getBooleanAttribute('name_case_sensitive');
  }
  public set nameCaseSensitive(value: boolean | cdktf.IResolvable) {
    this._nameCaseSensitive = value;
  }
  public resetNameCaseSensitive() {
    this._nameCaseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameCaseSensitiveInput() {
    return this._nameCaseSensitive;
  }

  // name_has_wildcard - computed: false, optional: true, required: false
  private _nameHasWildcard?: boolean | cdktf.IResolvable; 
  public get nameHasWildcard() {
    return this.getBooleanAttribute('name_has_wildcard');
  }
  public set nameHasWildcard(value: boolean | cdktf.IResolvable) {
    this._nameHasWildcard = value;
  }
  public resetNameHasWildcard() {
    this._nameHasWildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameHasWildcardInput() {
    return this._nameHasWildcard;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options = new DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValue[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOutputReference {
    return new DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatches {
  /**
  * If true, the match is case sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#case_sensitive DataAkamaiCloudletsApiPrioritizationMatchRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * For clientip, continent, countrycode, proxy, and regioncode match types, the part of the request that determines the IP address to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#check_ips DataAkamaiCloudletsApiPrioritizationMatchRule#check_ips}
  */
  readonly checkIps?: string;
  /**
  * Valid entries for this property: contains, exists, and equals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#match_operator DataAkamaiCloudletsApiPrioritizationMatchRule#match_operator}
  */
  readonly matchOperator?: string;
  /**
  * The type of match used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#match_type DataAkamaiCloudletsApiPrioritizationMatchRule#match_type}
  */
  readonly matchType?: string;
  /**
  * Depends on the matchType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#match_value DataAkamaiCloudletsApiPrioritizationMatchRule#match_value}
  */
  readonly matchValue?: string;
  /**
  * If true, negates the match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#negate DataAkamaiCloudletsApiPrioritizationMatchRule#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * object_match_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#object_match_value DataAkamaiCloudletsApiPrioritizationMatchRule#object_match_value}
  */
  readonly objectMatchValue?: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValue[] | cdktf.IResolvable;
}

export function dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesToTerraform(struct?: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    check_ips: cdktf.stringToTerraform(struct!.checkIps),
    match_operator: cdktf.stringToTerraform(struct!.matchOperator),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    match_value: cdktf.stringToTerraform(struct!.matchValue),
    negate: cdktf.booleanToTerraform(struct!.negate),
    object_match_value: cdktf.listMapper(dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueToTerraform, true)(struct!.objectMatchValue),
  }
}


export function dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesToHclTerraform(struct?: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_ips: {
      value: cdktf.stringToHclTerraform(struct!.checkIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_operator: {
      value: cdktf.stringToHclTerraform(struct!.matchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_value: {
      value: cdktf.stringToHclTerraform(struct!.matchValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_match_value: {
      value: cdktf.listMapperHcl(dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueToHclTerraform, true)(struct!.objectMatchValue),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._checkIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkIps = this._checkIps;
    }
    if (this._matchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperator = this._matchOperator;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._matchValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValue = this._matchValue;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._objectMatchValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectMatchValue = this._objectMatchValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._checkIps = undefined;
      this._matchOperator = undefined;
      this._matchType = undefined;
      this._matchValue = undefined;
      this._negate = undefined;
      this._objectMatchValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._checkIps = value.checkIps;
      this._matchOperator = value.matchOperator;
      this._matchType = value.matchType;
      this._matchValue = value.matchValue;
      this._negate = value.negate;
      this._objectMatchValue.internalValue = value.objectMatchValue;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // check_ips - computed: false, optional: true, required: false
  private _checkIps?: string; 
  public get checkIps() {
    return this.getStringAttribute('check_ips');
  }
  public set checkIps(value: string) {
    this._checkIps = value;
  }
  public resetCheckIps() {
    this._checkIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIpsInput() {
    return this._checkIps;
  }

  // match_operator - computed: false, optional: true, required: false
  private _matchOperator?: string; 
  public get matchOperator() {
    return this.getStringAttribute('match_operator');
  }
  public set matchOperator(value: string) {
    this._matchOperator = value;
  }
  public resetMatchOperator() {
    this._matchOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperatorInput() {
    return this._matchOperator;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // match_value - computed: false, optional: true, required: false
  private _matchValue?: string; 
  public get matchValue() {
    return this.getStringAttribute('match_value');
  }
  public set matchValue(value: string) {
    this._matchValue = value;
  }
  public resetMatchValue() {
    this._matchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueInput() {
    return this._matchValue;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // object_match_value - computed: false, optional: true, required: false
  private _objectMatchValue = new DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValueList(this, "object_match_value", true);
  public get objectMatchValue() {
    return this._objectMatchValue;
  }
  public putObjectMatchValue(value: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesObjectMatchValue[] | cdktf.IResolvable) {
    this._objectMatchValue.internalValue = value;
  }
  public resetObjectMatchValue() {
    this._objectMatchValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectMatchValueInput() {
    return this._objectMatchValue.internalValue;
  }
}

export class DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatches[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesOutputReference {
    return new DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRules {
  /**
  * If set to true, disables a rule so it is not evaluated against incoming requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#disabled DataAkamaiCloudletsApiPrioritizationMatchRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The end time for this match (in seconds since the epoch)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#end DataAkamaiCloudletsApiPrioritizationMatchRule#end}
  */
  readonly end?: number;
  /**
  * If using a URL match, this property is the URL that the Cloudlet uses to match the incoming request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#match_url DataAkamaiCloudletsApiPrioritizationMatchRule#match_url}
  */
  readonly matchUrl?: string;
  /**
  * The name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#name DataAkamaiCloudletsApiPrioritizationMatchRule#name}
  */
  readonly name?: string;
  /**
  * The range 0.0: 99.0 specifies the percentage of requests that pass through to the origin. The value of 100 means the request always passes through to the origin. A value of -1 means send everyone to the waiting room.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#pass_through_percent DataAkamaiCloudletsApiPrioritizationMatchRule#pass_through_percent}
  */
  readonly passThroughPercent: number;
  /**
  * The start time for this match (in seconds since the epoch)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#start DataAkamaiCloudletsApiPrioritizationMatchRule#start}
  */
  readonly start?: number;
  /**
  * matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#matches DataAkamaiCloudletsApiPrioritizationMatchRule#matches}
  */
  readonly matches?: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatches[] | cdktf.IResolvable;
}

export function dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesToTerraform(struct?: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    end: cdktf.numberToTerraform(struct!.end),
    match_url: cdktf.stringToTerraform(struct!.matchUrl),
    name: cdktf.stringToTerraform(struct!.name),
    pass_through_percent: cdktf.numberToTerraform(struct!.passThroughPercent),
    start: cdktf.numberToTerraform(struct!.start),
    matches: cdktf.listMapper(dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesToTerraform, true)(struct!.matches),
  }
}


export function dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesToHclTerraform(struct?: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRules | cdktf.IResolvable): any {
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
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_url: {
      value: cdktf.stringToHclTerraform(struct!.matchUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass_through_percent: {
      value: cdktf.numberToHclTerraform(struct!.passThroughPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    matches: {
      value: cdktf.listMapperHcl(dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesToHclTerraform, true)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._matchUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchUrl = this._matchUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passThroughPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.passThroughPercent = this._passThroughPercent;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._end = undefined;
      this._matchUrl = undefined;
      this._name = undefined;
      this._passThroughPercent = undefined;
      this._start = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._end = value.end;
      this._matchUrl = value.matchUrl;
      this._name = value.name;
      this._passThroughPercent = value.passThroughPercent;
      this._start = value.start;
      this._matches.internalValue = value.matches;
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

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // match_url - computed: false, optional: true, required: false
  private _matchUrl?: string; 
  public get matchUrl() {
    return this.getStringAttribute('match_url');
  }
  public set matchUrl(value: string) {
    this._matchUrl = value;
  }
  public resetMatchUrl() {
    this._matchUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchUrlInput() {
    return this._matchUrl;
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

  // pass_through_percent - computed: false, optional: false, required: true
  private _passThroughPercent?: number; 
  public get passThroughPercent() {
    return this.getNumberAttribute('pass_through_percent');
  }
  public set passThroughPercent(value: number) {
    this._passThroughPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughPercentInput() {
    return this._passThroughPercent;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRules[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesOutputReference {
    return new DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule akamai_cloudlets_api_prioritization_match_rule}
*/
export class DataAkamaiCloudletsApiPrioritizationMatchRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudlets_api_prioritization_match_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCloudletsApiPrioritizationMatchRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCloudletsApiPrioritizationMatchRule to import
  * @param importFromId The id of the existing DataAkamaiCloudletsApiPrioritizationMatchRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCloudletsApiPrioritizationMatchRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudlets_api_prioritization_match_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_api_prioritization_match_rule akamai_cloudlets_api_prioritization_match_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCloudletsApiPrioritizationMatchRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCloudletsApiPrioritizationMatchRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudlets_api_prioritization_match_rule',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
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
    this._matchRules.internalValue = config.matchRules;
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // match_rules - computed: false, optional: true, required: false
  private _matchRules = new DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesList(this, "match_rules", false);
  public get matchRules() {
    return this._matchRules;
  }
  public putMatchRules(value: DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRules[] | cdktf.IResolvable) {
    this._matchRules.internalValue = value;
  }
  public resetMatchRules() {
    this._matchRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRulesInput() {
    return this._matchRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      match_rules: cdktf.listMapper(dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesToTerraform, true)(this._matchRules.internalValue),
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
      match_rules: {
        value: cdktf.listMapperHcl(dataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesToHclTerraform, true)(this._matchRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiCloudletsApiPrioritizationMatchRuleMatchRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
