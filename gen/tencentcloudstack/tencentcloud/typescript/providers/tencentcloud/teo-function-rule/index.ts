// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoFunctionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule#function_id TeoFunctionRule#function_id}
  */
  readonly functionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule#id TeoFunctionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule description, maximum support of 60 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule#remark TeoFunctionRule#remark}
  */
  readonly remark?: string;
  /**
  * ID of the site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule#zone_id TeoFunctionRule#zone_id}
  */
  readonly zoneId: string;
  /**
  * function_rule_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule#function_rule_conditions TeoFunctionRule#function_rule_conditions}
  */
  readonly functionRuleConditions: TeoFunctionRuleFunctionRuleConditions[] | cdktf.IResolvable;
}
export interface TeoFunctionRuleFunctionRuleConditionsRuleConditions {
  /**
  * Whether the parameter value is case insensitive. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule#ignore_case TeoFunctionRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The parameter name of the match type. This field is required only when `Target=query_string/request_header`.
  *   - `query_string`: Name of the query string, such as "lang" and "version" in "lang=cn&version=1".
  *   - `request_header`: Name of the HTTP request header, such as "Accept-Language" in the "Accept-Language:zh-CN,zh;q=0.9" header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule#name TeoFunctionRule#name}
  */
  readonly name?: string;
  /**
  * Operator. Valid values:
  *   - `equals`: Equals.
  *   - `notEquals`: Does not equal.
  *   - `exist`: Exists.
  *   - `notexist`: Does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule#operator TeoFunctionRule#operator}
  */
  readonly operator: string;
  /**
  * The match type. Values:
  *   - `filename`: File name.
  *   - `extension`: File extension.
  *   - `host`: Host.
  *   - `full_url`: Full URL, which indicates the complete URL path under the current site and must contain the HTTP protocol, host, and path.
  *   - `url`: Partial URL under the current site.
  *   - `client_country`: Country/Region of the client.
  *   - `query_string`: Query string in the request URL.
  *   - `request_header`: HTTP request header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule#target TeoFunctionRule#target}
  */
  readonly target: string;
  /**
  * The parameter value of the match type. It can be an empty string only when `Target=query string/request header` and `Operator=exist/notexist`.
  *   - When `Target=extension`, enter the file extension, such as "jpg" and "txt".
  *   - When `Target=filename`, enter the file name, such as "foo" in "foo.jpg".
  *   - When `Target=all`, it indicates any site request.
  *   - When `Target=host`, enter the host under the current site, such as "www.maxx55.com".
  *   - When `Target=url`, enter the partial URL path under the current site, such as "/example".
  *   - When `Target=full_url`, enter the complete URL under the current site. It must contain the HTTP protocol, host, and path, such as "https://www.maxx55.cn/example".
  *   - When `Target=client_country`, enter the ISO-3166 country/region code.
  *   - When `Target=query_string`, enter the value of the query string, such as "cn" and "1" in "lang=cn&version=1".
  *   - When `Target=request_header`, enter the HTTP request header value, such as "zh-CN,zh;q=0.9" in the "Accept-Language:zh-CN,zh;q=0.9" header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule#values TeoFunctionRule#values}
  */
  readonly values?: string[];
}

export function teoFunctionRuleFunctionRuleConditionsRuleConditionsToTerraform(struct?: TeoFunctionRuleFunctionRuleConditionsRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    target: cdktf.stringToTerraform(struct!.target),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoFunctionRuleFunctionRuleConditionsRuleConditionsToHclTerraform(struct?: TeoFunctionRuleFunctionRuleConditionsRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoFunctionRuleFunctionRuleConditionsRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoFunctionRuleFunctionRuleConditionsRuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoFunctionRuleFunctionRuleConditionsRuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreCase = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._target = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreCase = value.ignoreCase;
      this._name = value.name;
      this._operator = value.operator;
      this._target = value.target;
      this._values = value.values;
    }
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class TeoFunctionRuleFunctionRuleConditionsRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : TeoFunctionRuleFunctionRuleConditionsRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): TeoFunctionRuleFunctionRuleConditionsRuleConditionsOutputReference {
    return new TeoFunctionRuleFunctionRuleConditionsRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoFunctionRuleFunctionRuleConditions {
  /**
  * rule_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule#rule_conditions TeoFunctionRule#rule_conditions}
  */
  readonly ruleConditions: TeoFunctionRuleFunctionRuleConditionsRuleConditions[] | cdktf.IResolvable;
}

export function teoFunctionRuleFunctionRuleConditionsToTerraform(struct?: TeoFunctionRuleFunctionRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_conditions: cdktf.listMapper(teoFunctionRuleFunctionRuleConditionsRuleConditionsToTerraform, true)(struct!.ruleConditions),
  }
}


export function teoFunctionRuleFunctionRuleConditionsToHclTerraform(struct?: TeoFunctionRuleFunctionRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_conditions: {
      value: cdktf.listMapperHcl(teoFunctionRuleFunctionRuleConditionsRuleConditionsToHclTerraform, true)(struct!.ruleConditions),
      isBlock: true,
      type: "list",
      storageClassType: "TeoFunctionRuleFunctionRuleConditionsRuleConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoFunctionRuleFunctionRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoFunctionRuleFunctionRuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleConditions = this._ruleConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoFunctionRuleFunctionRuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleConditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleConditions.internalValue = value.ruleConditions;
    }
  }

  // rule_conditions - computed: false, optional: false, required: true
  private _ruleConditions = new TeoFunctionRuleFunctionRuleConditionsRuleConditionsList(this, "rule_conditions", false);
  public get ruleConditions() {
    return this._ruleConditions;
  }
  public putRuleConditions(value: TeoFunctionRuleFunctionRuleConditionsRuleConditions[] | cdktf.IResolvable) {
    this._ruleConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConditionsInput() {
    return this._ruleConditions.internalValue;
  }
}

export class TeoFunctionRuleFunctionRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : TeoFunctionRuleFunctionRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): TeoFunctionRuleFunctionRuleConditionsOutputReference {
    return new TeoFunctionRuleFunctionRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule tencentcloud_teo_function_rule}
*/
export class TeoFunctionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_function_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoFunctionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoFunctionRule to import
  * @param importFromId The id of the existing TeoFunctionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoFunctionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_function_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/teo_function_rule tencentcloud_teo_function_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoFunctionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TeoFunctionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_function_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._functionId = config.functionId;
    this._id = config.id;
    this._remark = config.remark;
    this._zoneId = config.zoneId;
    this._functionRuleConditions.internalValue = config.functionRuleConditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_id - computed: false, optional: false, required: true
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
  }

  // function_name - computed: true, optional: false, required: false
  public get functionName() {
    return this.getStringAttribute('function_name');
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // function_rule_conditions - computed: false, optional: false, required: true
  private _functionRuleConditions = new TeoFunctionRuleFunctionRuleConditionsList(this, "function_rule_conditions", false);
  public get functionRuleConditions() {
    return this._functionRuleConditions;
  }
  public putFunctionRuleConditions(value: TeoFunctionRuleFunctionRuleConditions[] | cdktf.IResolvable) {
    this._functionRuleConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionRuleConditionsInput() {
    return this._functionRuleConditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_id: cdktf.stringToTerraform(this._functionId),
      id: cdktf.stringToTerraform(this._id),
      remark: cdktf.stringToTerraform(this._remark),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      function_rule_conditions: cdktf.listMapper(teoFunctionRuleFunctionRuleConditionsToTerraform, true)(this._functionRuleConditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_id: {
        value: cdktf.stringToHclTerraform(this._functionId),
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
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_rule_conditions: {
        value: cdktf.listMapperHcl(teoFunctionRuleFunctionRuleConditionsToHclTerraform, true)(this._functionRuleConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoFunctionRuleFunctionRuleConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
