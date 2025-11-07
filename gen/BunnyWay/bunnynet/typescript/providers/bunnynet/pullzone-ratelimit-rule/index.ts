// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PullzoneRatelimitRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The rate limit rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#description PullzoneRatelimitRule#description}
  */
  readonly description?: string;
  /**
  * The rate limit rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#name PullzoneRatelimitRule#name}
  */
  readonly name: string;
  /**
  * The ID of the linked pullzone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#pullzone PullzoneRatelimitRule#pullzone}
  */
  readonly pullzone: number;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#condition PullzoneRatelimitRule#condition}
  */
  readonly condition?: PullzoneRatelimitRuleCondition;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#limit PullzoneRatelimitRule#limit}
  */
  readonly limit: PullzoneRatelimitRuleLimit;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#response PullzoneRatelimitRule#response}
  */
  readonly response: PullzoneRatelimitRuleResponse;
}
export interface PullzoneRatelimitRuleCondition {
  /**
  * Options: `BEGINSWITH`, `CONTAINS`, `CONTAINSWORD`, `DETECTSQLI`, `DETECTXSS`, `ENDSWITH`, `EQ`, `GE`, `GT`, `LE`, `LT`, `RX`, `STREQ`, `STRMATCH`, `WITHIN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#operator PullzoneRatelimitRule#operator}
  */
  readonly operator: string;
  /**
  * Options: `CMDLINE`, `COMPRESSWHITESPACE`, `CSSDECODE`, `HEXENCODE`, `HTMLENTITYDECODE`, `JSDECODE`, `LENGTH`, `LOWERCASE`, `MD5`, `NORMALISEPATH`, `NORMALISEPATHWIN`, `NORMALIZEPATH`, `NORMALIZEPATHWIN`, `REMOVECOMMENTS`, `REMOVENULLS`, `REMOVEWHITESPACE`, `REPLACECOMMENTS`, `SHA1`, `URLDECODE`, `URLDECODEUNI`, `UTF8TOUNICODE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#transformations PullzoneRatelimitRule#transformations}
  */
  readonly transformations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#value PullzoneRatelimitRule#value}
  */
  readonly value: string;
  /**
  * Options: `ARGS`, `ARGS_COMBINED_SIZE`, `ARGS_GET`, `ARGS_GET_NAMES`, `ARGS_POST`, `ARGS_POST_NAMES`, `FILES_NAMES`, `QUERY_STRING`, `REMOTE_ADDR`, `REQUEST_BASENAME`, `REQUEST_BODY`, `REQUEST_COOKIES`, `REQUEST_COOKIES_NAMES`, `REQUEST_FILENAME`, `REQUEST_HEADERS`, `REQUEST_HEADERS_NAMES`, `REQUEST_LINE`, `REQUEST_METHOD`, `REQUEST_PROTOCOL`, `REQUEST_URI`, `REQUEST_URI_RAW`, `RESPONSE_BODY`, `RESPONSE_HEADERS`, `RESPONSE_STATUS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#variable PullzoneRatelimitRule#variable}
  */
  readonly variable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#variable_value PullzoneRatelimitRule#variable_value}
  */
  readonly variableValue?: string;
}

export function pullzoneRatelimitRuleConditionToTerraform(struct?: PullzoneRatelimitRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    transformations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformations),
    value: cdktf.stringToTerraform(struct!.value),
    variable: cdktf.stringToTerraform(struct!.variable),
    variable_value: cdktf.stringToTerraform(struct!.variableValue),
  }
}


export function pullzoneRatelimitRuleConditionToHclTerraform(struct?: PullzoneRatelimitRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_value: {
      value: cdktf.stringToHclTerraform(struct!.variableValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PullzoneRatelimitRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PullzoneRatelimitRuleCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transformations !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformations = this._transformations;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    if (this._variableValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableValue = this._variableValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PullzoneRatelimitRuleCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._transformations = undefined;
      this._value = undefined;
      this._variable = undefined;
      this._variableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._transformations = value.transformations;
      this._value = value.value;
      this._variable = value.variable;
      this._variableValue = value.variableValue;
    }
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

  // transformations - computed: false, optional: true, required: false
  private _transformations?: string[]; 
  public get transformations() {
    return cdktf.Fn.tolist(this.getListAttribute('transformations'));
  }
  public set transformations(value: string[]) {
    this._transformations = value;
  }
  public resetTransformations() {
    this._transformations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations;
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

  // variable - computed: false, optional: false, required: true
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }

  // variable_value - computed: false, optional: true, required: false
  private _variableValue?: string; 
  public get variableValue() {
    return this.getStringAttribute('variable_value');
  }
  public set variableValue(value: string) {
    this._variableValue = value;
  }
  public resetVariableValue() {
    this._variableValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableValueInput() {
    return this._variableValue;
  }
}
export interface PullzoneRatelimitRuleLimit {
  /**
  * The interval, in seconds, to consider for to trigger the rate limit rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#interval PullzoneRatelimitRule#interval}
  */
  readonly interval: number;
  /**
  * The number of request within the interval to trigger the rate limit rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#requests PullzoneRatelimitRule#requests}
  */
  readonly requests: number;
}

export function pullzoneRatelimitRuleLimitToTerraform(struct?: PullzoneRatelimitRuleLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    requests: cdktf.numberToTerraform(struct!.requests),
  }
}


export function pullzoneRatelimitRuleLimitToHclTerraform(struct?: PullzoneRatelimitRuleLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requests: {
      value: cdktf.numberToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PullzoneRatelimitRuleLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PullzoneRatelimitRuleLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PullzoneRatelimitRuleLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._requests = value.requests;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // requests - computed: false, optional: false, required: true
  private _requests?: number; 
  public get requests() {
    return this.getNumberAttribute('requests');
  }
  public set requests(value: number) {
    this._requests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface PullzoneRatelimitRuleResponse {
  /**
  * The interval, in seconds, that the rate limit will apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#interval PullzoneRatelimitRule#interval}
  */
  readonly interval: number;
}

export function pullzoneRatelimitRuleResponseToTerraform(struct?: PullzoneRatelimitRuleResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function pullzoneRatelimitRuleResponseToHclTerraform(struct?: PullzoneRatelimitRuleResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PullzoneRatelimitRuleResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PullzoneRatelimitRuleResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PullzoneRatelimitRuleResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule bunnynet_pullzone_ratelimit_rule}
*/
export class PullzoneRatelimitRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_pullzone_ratelimit_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PullzoneRatelimitRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PullzoneRatelimitRule to import
  * @param importFromId The id of the existing PullzoneRatelimitRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PullzoneRatelimitRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_pullzone_ratelimit_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_ratelimit_rule bunnynet_pullzone_ratelimit_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PullzoneRatelimitRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PullzoneRatelimitRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_pullzone_ratelimit_rule',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._pullzone = config.pullzone;
    this._condition.internalValue = config.condition;
    this._limit.internalValue = config.limit;
    this._response.internalValue = config.response;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // pullzone - computed: false, optional: false, required: true
  private _pullzone?: number; 
  public get pullzone() {
    return this.getNumberAttribute('pullzone');
  }
  public set pullzone(value: number) {
    this._pullzone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pullzoneInput() {
    return this._pullzone;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new PullzoneRatelimitRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: PullzoneRatelimitRuleCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // limit - computed: false, optional: false, required: true
  private _limit = new PullzoneRatelimitRuleLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: PullzoneRatelimitRuleLimit) {
    this._limit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }

  // response - computed: false, optional: false, required: true
  private _response = new PullzoneRatelimitRuleResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: PullzoneRatelimitRuleResponse) {
    this._response.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      pullzone: cdktf.numberToTerraform(this._pullzone),
      condition: pullzoneRatelimitRuleConditionToTerraform(this._condition.internalValue),
      limit: pullzoneRatelimitRuleLimitToTerraform(this._limit.internalValue),
      response: pullzoneRatelimitRuleResponseToTerraform(this._response.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      pullzone: {
        value: cdktf.numberToHclTerraform(this._pullzone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      condition: {
        value: pullzoneRatelimitRuleConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PullzoneRatelimitRuleCondition",
      },
      limit: {
        value: pullzoneRatelimitRuleLimitToHclTerraform(this._limit.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PullzoneRatelimitRuleLimit",
      },
      response: {
        value: pullzoneRatelimitRuleResponseToHclTerraform(this._response.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PullzoneRatelimitRuleResponse",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
