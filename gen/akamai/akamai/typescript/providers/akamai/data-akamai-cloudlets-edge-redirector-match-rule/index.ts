// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCloudletsEdgeRedirectorMatchRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#id DataAkamaiCloudletsEdgeRedirectorMatchRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * match_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#match_rules DataAkamaiCloudletsEdgeRedirectorMatchRule#match_rules}
  */
  readonly matchRules?: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRules[] | cdktf.IResolvable;
}
export interface DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptions {
  /**
  * The value attributes in the incoming request to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#value DataAkamaiCloudletsEdgeRedirectorMatchRule#value}
  */
  readonly value?: string[];
  /**
  * Set to true if the entries for the value property should be evaluated based on case sensitivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#value_case_sensitive DataAkamaiCloudletsEdgeRedirectorMatchRule#value_case_sensitive}
  */
  readonly valueCaseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Set to true if provided value should be compared in escaped form
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#value_escaped DataAkamaiCloudletsEdgeRedirectorMatchRule#value_escaped}
  */
  readonly valueEscaped?: boolean | cdktf.IResolvable;
  /**
  * Set to true if the entries for the value property include wildcards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#value_has_wildcard DataAkamaiCloudletsEdgeRedirectorMatchRule#value_has_wildcard}
  */
  readonly valueHasWildcard?: boolean | cdktf.IResolvable;
}

export function dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptionsToTerraform(struct?: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptionsOutputReference | DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptions): any {
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


export function dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptionsToHclTerraform(struct?: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptionsOutputReference | DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptions): any {
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

export class DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptions | undefined {
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

  public set internalValue(value: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptions | undefined) {
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
export interface DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValue {
  /**
  * If using a match type that supports name attributes, enter the value in the incoming request to match on. The following match types support this property: cookie, header, parameter, and query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#name DataAkamaiCloudletsEdgeRedirectorMatchRule#name}
  */
  readonly name?: string;
  /**
  * Set to true if the entry for the name property should be evaluated based on case sensitivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#name_case_sensitive DataAkamaiCloudletsEdgeRedirectorMatchRule#name_case_sensitive}
  */
  readonly nameCaseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Set to true if the entry for the name property includes wildcards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#name_has_wildcard DataAkamaiCloudletsEdgeRedirectorMatchRule#name_has_wildcard}
  */
  readonly nameHasWildcard?: boolean | cdktf.IResolvable;
  /**
  * The array type, which can be one of the following: object or simple. Use the simple option when adding only an array of string-based values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#type DataAkamaiCloudletsEdgeRedirectorMatchRule#type}
  */
  readonly type: string;
  /**
  * The value attributes in the incoming request to match on (use only with simple type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#value DataAkamaiCloudletsEdgeRedirectorMatchRule#value}
  */
  readonly value?: string[];
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#options DataAkamaiCloudletsEdgeRedirectorMatchRule#options}
  */
  readonly options?: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptions;
}

export function dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueToTerraform(struct?: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValue | cdktf.IResolvable): any {
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
    options: dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptionsToTerraform(struct!.options),
  }
}


export function dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueToHclTerraform(struct?: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValue | cdktf.IResolvable): any {
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
      value: dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValue | cdktf.IResolvable | undefined) {
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
  private _options = new DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOptions) {
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

export class DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValue[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOutputReference {
    return new DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatches {
  /**
  * If true, the match is case sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#case_sensitive DataAkamaiCloudletsEdgeRedirectorMatchRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * For clientip, continent, countrycode, proxy, and regioncode match types, the part of the request that determines the IP address to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#check_ips DataAkamaiCloudletsEdgeRedirectorMatchRule#check_ips}
  */
  readonly checkIps?: string;
  /**
  * Valid entries for this property: contains, exists, and equals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#match_operator DataAkamaiCloudletsEdgeRedirectorMatchRule#match_operator}
  */
  readonly matchOperator?: string;
  /**
  * The type of match used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#match_type DataAkamaiCloudletsEdgeRedirectorMatchRule#match_type}
  */
  readonly matchType?: string;
  /**
  * Depends on the matchType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#match_value DataAkamaiCloudletsEdgeRedirectorMatchRule#match_value}
  */
  readonly matchValue?: string;
  /**
  * If true, negates the match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#negate DataAkamaiCloudletsEdgeRedirectorMatchRule#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * object_match_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#object_match_value DataAkamaiCloudletsEdgeRedirectorMatchRule#object_match_value}
  */
  readonly objectMatchValue?: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValue[] | cdktf.IResolvable;
}

export function dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesToTerraform(struct?: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatches | cdktf.IResolvable): any {
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
    object_match_value: cdktf.listMapper(dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueToTerraform, true)(struct!.objectMatchValue),
  }
}


export function dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesToHclTerraform(struct?: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatches | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueToHclTerraform, true)(struct!.objectMatchValue),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatches | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatches | cdktf.IResolvable | undefined) {
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
  private _objectMatchValue = new DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValueList(this, "object_match_value", true);
  public get objectMatchValue() {
    return this._objectMatchValue;
  }
  public putObjectMatchValue(value: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesObjectMatchValue[] | cdktf.IResolvable) {
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

export class DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatches[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesOutputReference {
    return new DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRules {
  /**
  * If set to true, disables a rule so it is not evaluated against incoming requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#disabled DataAkamaiCloudletsEdgeRedirectorMatchRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The end time for this match (in seconds since the epoch)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#end DataAkamaiCloudletsEdgeRedirectorMatchRule#end}
  */
  readonly end?: number;
  /**
  * If using a URL match, this property is the URL that the Cloudlet uses to match the incoming request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#match_url DataAkamaiCloudletsEdgeRedirectorMatchRule#match_url}
  */
  readonly matchUrl?: string;
  /**
  * Is used in some cloudlets to support default rules (rule that is always matched)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#matches_always DataAkamaiCloudletsEdgeRedirectorMatchRule#matches_always}
  */
  readonly matchesAlways?: boolean | cdktf.IResolvable;
  /**
  * The name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#name DataAkamaiCloudletsEdgeRedirectorMatchRule#name}
  */
  readonly name?: string;
  /**
  * The URL Edge Redirector redirects the request to. If using use_relative_url, you can enter a path for the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#redirect_url DataAkamaiCloudletsEdgeRedirectorMatchRule#redirect_url}
  */
  readonly redirectUrl: string;
  /**
  * The start time for this match (in seconds since the epoch)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#start DataAkamaiCloudletsEdgeRedirectorMatchRule#start}
  */
  readonly start?: number;
  /**
  * The HTTP response status code (allowed values: 301, 302, 303, 307, 308)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#status_code DataAkamaiCloudletsEdgeRedirectorMatchRule#status_code}
  */
  readonly statusCode: number;
  /**
  * If set to true, the Cloudlet includes the query string from the request in the rewritten or forwarded URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#use_incoming_query_string DataAkamaiCloudletsEdgeRedirectorMatchRule#use_incoming_query_string}
  */
  readonly useIncomingQueryString?: boolean | cdktf.IResolvable;
  /**
  * If set to relative_url, takes the path entered for the redirectUrl and sets it in the response’s Location header. If set to copy_scheme_hostname, creates an absolute path by taking the protocol and hostname from the incoming request and combining them with path information entered for the redirectUrl. If this property is not included, or is set to none, then the redirect_url should be fully-qualified URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#use_relative_url DataAkamaiCloudletsEdgeRedirectorMatchRule#use_relative_url}
  */
  readonly useRelativeUrl?: string;
  /**
  * matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#matches DataAkamaiCloudletsEdgeRedirectorMatchRule#matches}
  */
  readonly matches?: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatches[] | cdktf.IResolvable;
}

export function dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesToTerraform(struct?: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    end: cdktf.numberToTerraform(struct!.end),
    match_url: cdktf.stringToTerraform(struct!.matchUrl),
    matches_always: cdktf.booleanToTerraform(struct!.matchesAlways),
    name: cdktf.stringToTerraform(struct!.name),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    start: cdktf.numberToTerraform(struct!.start),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    use_incoming_query_string: cdktf.booleanToTerraform(struct!.useIncomingQueryString),
    use_relative_url: cdktf.stringToTerraform(struct!.useRelativeUrl),
    matches: cdktf.listMapper(dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesToTerraform, true)(struct!.matches),
  }
}


export function dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesToHclTerraform(struct?: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRules | cdktf.IResolvable): any {
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
    matches_always: {
      value: cdktf.booleanToHclTerraform(struct!.matchesAlways),
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
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_incoming_query_string: {
      value: cdktf.booleanToHclTerraform(struct!.useIncomingQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_relative_url: {
      value: cdktf.stringToHclTerraform(struct!.useRelativeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matches: {
      value: cdktf.listMapperHcl(dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesToHclTerraform, true)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRules | cdktf.IResolvable | undefined {
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
    if (this._matchesAlways !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchesAlways = this._matchesAlways;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._useIncomingQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIncomingQueryString = this._useIncomingQueryString;
    }
    if (this._useRelativeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRelativeUrl = this._useRelativeUrl;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._end = undefined;
      this._matchUrl = undefined;
      this._matchesAlways = undefined;
      this._name = undefined;
      this._redirectUrl = undefined;
      this._start = undefined;
      this._statusCode = undefined;
      this._useIncomingQueryString = undefined;
      this._useRelativeUrl = undefined;
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
      this._matchesAlways = value.matchesAlways;
      this._name = value.name;
      this._redirectUrl = value.redirectUrl;
      this._start = value.start;
      this._statusCode = value.statusCode;
      this._useIncomingQueryString = value.useIncomingQueryString;
      this._useRelativeUrl = value.useRelativeUrl;
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

  // matches_always - computed: false, optional: true, required: false
  private _matchesAlways?: boolean | cdktf.IResolvable; 
  public get matchesAlways() {
    return this.getBooleanAttribute('matches_always');
  }
  public set matchesAlways(value: boolean | cdktf.IResolvable) {
    this._matchesAlways = value;
  }
  public resetMatchesAlways() {
    this._matchesAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesAlwaysInput() {
    return this._matchesAlways;
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

  // redirect_url - computed: false, optional: false, required: true
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
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

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_incoming_query_string - computed: false, optional: true, required: false
  private _useIncomingQueryString?: boolean | cdktf.IResolvable; 
  public get useIncomingQueryString() {
    return this.getBooleanAttribute('use_incoming_query_string');
  }
  public set useIncomingQueryString(value: boolean | cdktf.IResolvable) {
    this._useIncomingQueryString = value;
  }
  public resetUseIncomingQueryString() {
    this._useIncomingQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIncomingQueryStringInput() {
    return this._useIncomingQueryString;
  }

  // use_relative_url - computed: false, optional: true, required: false
  private _useRelativeUrl?: string; 
  public get useRelativeUrl() {
    return this.getStringAttribute('use_relative_url');
  }
  public set useRelativeUrl(value: string) {
    this._useRelativeUrl = value;
  }
  public resetUseRelativeUrl() {
    this._useRelativeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRelativeUrlInput() {
    return this._useRelativeUrl;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesMatches[] | cdktf.IResolvable) {
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

export class DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRules[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesOutputReference {
    return new DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule akamai_cloudlets_edge_redirector_match_rule}
*/
export class DataAkamaiCloudletsEdgeRedirectorMatchRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudlets_edge_redirector_match_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCloudletsEdgeRedirectorMatchRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCloudletsEdgeRedirectorMatchRule to import
  * @param importFromId The id of the existing DataAkamaiCloudletsEdgeRedirectorMatchRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCloudletsEdgeRedirectorMatchRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudlets_edge_redirector_match_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_edge_redirector_match_rule akamai_cloudlets_edge_redirector_match_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCloudletsEdgeRedirectorMatchRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCloudletsEdgeRedirectorMatchRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudlets_edge_redirector_match_rule',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
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
  private _matchRules = new DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesList(this, "match_rules", false);
  public get matchRules() {
    return this._matchRules;
  }
  public putMatchRules(value: DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRules[] | cdktf.IResolvable) {
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
      match_rules: cdktf.listMapper(dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesToTerraform, true)(this._matchRules.internalValue),
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
        value: cdktf.listMapperHcl(dataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesToHclTerraform, true)(this._matchRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiCloudletsEdgeRedirectorMatchRuleMatchRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
