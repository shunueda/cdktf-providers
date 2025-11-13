// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoRuleEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#id TeoRuleEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The rule name (1 to 255 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#rule_name TeoRuleEngine#rule_name}
  */
  readonly ruleName: string;
  /**
  * Rule status. Values:
  *   - `enable`: Enabled.
  *   - `disable`: Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#status TeoRuleEngine#status}
  */
  readonly status: string;
  /**
  * rule tag list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#tags TeoRuleEngine#tags}
  */
  readonly tags?: string[];
  /**
  * ID of the site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#zone_id TeoRuleEngine#zone_id}
  */
  readonly zoneId: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#rules TeoRuleEngine#rules}
  */
  readonly rules: TeoRuleEngineRules[] | cdktf.IResolvable;
}
export interface TeoRuleEngineRulesActionsCodeActionParameters {
  /**
  * The parameter name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#name TeoRuleEngine#name}
  */
  readonly name: string;
  /**
  * The status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#status_code TeoRuleEngine#status_code}
  */
  readonly statusCode: number;
  /**
  * The parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#values TeoRuleEngine#values}
  */
  readonly values: string[];
}

export function teoRuleEngineRulesActionsCodeActionParametersToTerraform(struct?: TeoRuleEngineRulesActionsCodeActionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoRuleEngineRulesActionsCodeActionParametersToHclTerraform(struct?: TeoRuleEngineRulesActionsCodeActionParameters | cdktf.IResolvable): any {
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
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class TeoRuleEngineRulesActionsCodeActionParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesActionsCodeActionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesActionsCodeActionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._statusCode = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._statusCode = value.statusCode;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class TeoRuleEngineRulesActionsCodeActionParametersList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesActionsCodeActionParameters[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesActionsCodeActionParametersOutputReference {
    return new TeoRuleEngineRulesActionsCodeActionParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRulesActionsCodeAction {
  /**
  * Feature name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the feature name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#action TeoRuleEngine#action}
  */
  readonly action: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#parameters TeoRuleEngine#parameters}
  */
  readonly parameters: TeoRuleEngineRulesActionsCodeActionParameters[] | cdktf.IResolvable;
}

export function teoRuleEngineRulesActionsCodeActionToTerraform(struct?: TeoRuleEngineRulesActionsCodeActionOutputReference | TeoRuleEngineRulesActionsCodeAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    parameters: cdktf.listMapper(teoRuleEngineRulesActionsCodeActionParametersToTerraform, true)(struct!.parameters),
  }
}


export function teoRuleEngineRulesActionsCodeActionToHclTerraform(struct?: TeoRuleEngineRulesActionsCodeActionOutputReference | TeoRuleEngineRulesActionsCodeAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesActionsCodeActionParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesActionsCodeActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRuleEngineRulesActionsCodeActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoRuleEngineRulesActionsCodeAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesActionsCodeAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._parameters.internalValue = value.parameters;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new TeoRuleEngineRulesActionsCodeActionParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: TeoRuleEngineRulesActionsCodeActionParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface TeoRuleEngineRulesActionsNormalActionParameters {
  /**
  * Parameter name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#name TeoRuleEngine#name}
  */
  readonly name: string;
  /**
  * The parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#values TeoRuleEngine#values}
  */
  readonly values: string[];
}

export function teoRuleEngineRulesActionsNormalActionParametersToTerraform(struct?: TeoRuleEngineRulesActionsNormalActionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoRuleEngineRulesActionsNormalActionParametersToHclTerraform(struct?: TeoRuleEngineRulesActionsNormalActionParameters | cdktf.IResolvable): any {
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

export class TeoRuleEngineRulesActionsNormalActionParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesActionsNormalActionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesActionsNormalActionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class TeoRuleEngineRulesActionsNormalActionParametersList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesActionsNormalActionParameters[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesActionsNormalActionParametersOutputReference {
    return new TeoRuleEngineRulesActionsNormalActionParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRulesActionsNormalAction {
  /**
  * Feature name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the feature name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#action TeoRuleEngine#action}
  */
  readonly action: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#parameters TeoRuleEngine#parameters}
  */
  readonly parameters: TeoRuleEngineRulesActionsNormalActionParameters[] | cdktf.IResolvable;
}

export function teoRuleEngineRulesActionsNormalActionToTerraform(struct?: TeoRuleEngineRulesActionsNormalActionOutputReference | TeoRuleEngineRulesActionsNormalAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    parameters: cdktf.listMapper(teoRuleEngineRulesActionsNormalActionParametersToTerraform, true)(struct!.parameters),
  }
}


export function teoRuleEngineRulesActionsNormalActionToHclTerraform(struct?: TeoRuleEngineRulesActionsNormalActionOutputReference | TeoRuleEngineRulesActionsNormalAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesActionsNormalActionParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesActionsNormalActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRuleEngineRulesActionsNormalActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoRuleEngineRulesActionsNormalAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesActionsNormalAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._parameters.internalValue = value.parameters;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new TeoRuleEngineRulesActionsNormalActionParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: TeoRuleEngineRulesActionsNormalActionParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface TeoRuleEngineRulesActionsRewriteActionParameters {
  /**
  * Feature parameter name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the parameter name, which has three values:
  *   - add: Add the HTTP header.
  *   - set: Rewrite the HTTP header.
  *   - del: Delete the HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#action TeoRuleEngine#action}
  */
  readonly action: string;
  /**
  * Parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#name TeoRuleEngine#name}
  */
  readonly name: string;
  /**
  * Parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#values TeoRuleEngine#values}
  */
  readonly values: string[];
}

export function teoRuleEngineRulesActionsRewriteActionParametersToTerraform(struct?: TeoRuleEngineRulesActionsRewriteActionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoRuleEngineRulesActionsRewriteActionParametersToHclTerraform(struct?: TeoRuleEngineRulesActionsRewriteActionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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

export class TeoRuleEngineRulesActionsRewriteActionParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesActionsRewriteActionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesActionsRewriteActionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class TeoRuleEngineRulesActionsRewriteActionParametersList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesActionsRewriteActionParameters[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesActionsRewriteActionParametersOutputReference {
    return new TeoRuleEngineRulesActionsRewriteActionParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRulesActionsRewriteAction {
  /**
  * Feature name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the feature name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#action TeoRuleEngine#action}
  */
  readonly action: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#parameters TeoRuleEngine#parameters}
  */
  readonly parameters: TeoRuleEngineRulesActionsRewriteActionParameters[] | cdktf.IResolvable;
}

export function teoRuleEngineRulesActionsRewriteActionToTerraform(struct?: TeoRuleEngineRulesActionsRewriteActionOutputReference | TeoRuleEngineRulesActionsRewriteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    parameters: cdktf.listMapper(teoRuleEngineRulesActionsRewriteActionParametersToTerraform, true)(struct!.parameters),
  }
}


export function teoRuleEngineRulesActionsRewriteActionToHclTerraform(struct?: TeoRuleEngineRulesActionsRewriteActionOutputReference | TeoRuleEngineRulesActionsRewriteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesActionsRewriteActionParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesActionsRewriteActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRuleEngineRulesActionsRewriteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoRuleEngineRulesActionsRewriteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesActionsRewriteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._parameters.internalValue = value.parameters;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new TeoRuleEngineRulesActionsRewriteActionParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: TeoRuleEngineRulesActionsRewriteActionParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface TeoRuleEngineRulesActions {
  /**
  * code_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#code_action TeoRuleEngine#code_action}
  */
  readonly codeAction?: TeoRuleEngineRulesActionsCodeAction;
  /**
  * normal_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#normal_action TeoRuleEngine#normal_action}
  */
  readonly normalAction?: TeoRuleEngineRulesActionsNormalAction;
  /**
  * rewrite_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#rewrite_action TeoRuleEngine#rewrite_action}
  */
  readonly rewriteAction?: TeoRuleEngineRulesActionsRewriteAction;
}

export function teoRuleEngineRulesActionsToTerraform(struct?: TeoRuleEngineRulesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_action: teoRuleEngineRulesActionsCodeActionToTerraform(struct!.codeAction),
    normal_action: teoRuleEngineRulesActionsNormalActionToTerraform(struct!.normalAction),
    rewrite_action: teoRuleEngineRulesActionsRewriteActionToTerraform(struct!.rewriteAction),
  }
}


export function teoRuleEngineRulesActionsToHclTerraform(struct?: TeoRuleEngineRulesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_action: {
      value: teoRuleEngineRulesActionsCodeActionToHclTerraform(struct!.codeAction),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesActionsCodeActionList",
    },
    normal_action: {
      value: teoRuleEngineRulesActionsNormalActionToHclTerraform(struct!.normalAction),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesActionsNormalActionList",
    },
    rewrite_action: {
      value: teoRuleEngineRulesActionsRewriteActionToHclTerraform(struct!.rewriteAction),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesActionsRewriteActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRuleEngineRulesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeAction = this._codeAction?.internalValue;
    }
    if (this._normalAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalAction = this._normalAction?.internalValue;
    }
    if (this._rewriteAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteAction = this._rewriteAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeAction.internalValue = undefined;
      this._normalAction.internalValue = undefined;
      this._rewriteAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeAction.internalValue = value.codeAction;
      this._normalAction.internalValue = value.normalAction;
      this._rewriteAction.internalValue = value.rewriteAction;
    }
  }

  // code_action - computed: false, optional: true, required: false
  private _codeAction = new TeoRuleEngineRulesActionsCodeActionOutputReference(this, "code_action");
  public get codeAction() {
    return this._codeAction;
  }
  public putCodeAction(value: TeoRuleEngineRulesActionsCodeAction) {
    this._codeAction.internalValue = value;
  }
  public resetCodeAction() {
    this._codeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeActionInput() {
    return this._codeAction.internalValue;
  }

  // normal_action - computed: false, optional: true, required: false
  private _normalAction = new TeoRuleEngineRulesActionsNormalActionOutputReference(this, "normal_action");
  public get normalAction() {
    return this._normalAction;
  }
  public putNormalAction(value: TeoRuleEngineRulesActionsNormalAction) {
    this._normalAction.internalValue = value;
  }
  public resetNormalAction() {
    this._normalAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalActionInput() {
    return this._normalAction.internalValue;
  }

  // rewrite_action - computed: false, optional: true, required: false
  private _rewriteAction = new TeoRuleEngineRulesActionsRewriteActionOutputReference(this, "rewrite_action");
  public get rewriteAction() {
    return this._rewriteAction;
  }
  public putRewriteAction(value: TeoRuleEngineRulesActionsRewriteAction) {
    this._rewriteAction.internalValue = value;
  }
  public resetRewriteAction() {
    this._rewriteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteActionInput() {
    return this._rewriteAction.internalValue;
  }
}

export class TeoRuleEngineRulesActionsList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesActions[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesActionsOutputReference {
    return new TeoRuleEngineRulesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRulesOrAnd {
  /**
  * Whether the parameter value is case insensitive. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#ignore_case TeoRuleEngine#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The parameter name of the match type. This field is required only when `Target=query_string/request_header`.
  *   - `query_string`: Name of the query string, such as "lang" and "version" in "lang=cn&version=1".
  *   - `request_header`: Name of the HTTP request header, such as "Accept-Language" in the "Accept-Language:zh-CN,zh;q=0.9" header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#name TeoRuleEngine#name}
  */
  readonly name?: string;
  /**
  * Operator. Valid values:
  *   - `equal`: Equal.
  *   - `notEqual`: Does not equal.
  *   - `exist`: Exists.
  *   - `notexist`: Does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#operator TeoRuleEngine#operator}
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
  *   - `client_ip`: Client IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#target TeoRuleEngine#target}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#values TeoRuleEngine#values}
  */
  readonly values?: string[];
}

export function teoRuleEngineRulesOrAndToTerraform(struct?: TeoRuleEngineRulesOrAnd | cdktf.IResolvable): any {
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


export function teoRuleEngineRulesOrAndToHclTerraform(struct?: TeoRuleEngineRulesOrAnd | cdktf.IResolvable): any {
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

export class TeoRuleEngineRulesOrAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesOrAnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TeoRuleEngineRulesOrAnd | cdktf.IResolvable | undefined) {
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

export class TeoRuleEngineRulesOrAndList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesOrAnd[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesOrAndOutputReference {
    return new TeoRuleEngineRulesOrAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRulesOr {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#and TeoRuleEngine#and}
  */
  readonly and: TeoRuleEngineRulesOrAnd[] | cdktf.IResolvable;
}

export function teoRuleEngineRulesOrToTerraform(struct?: TeoRuleEngineRulesOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(teoRuleEngineRulesOrAndToTerraform, true)(struct!.and),
  }
}


export function teoRuleEngineRulesOrToHclTerraform(struct?: TeoRuleEngineRulesOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesOrAndToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesOrAndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRuleEngineRulesOrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesOr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesOr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
    }
  }

  // and - computed: false, optional: false, required: true
  private _and = new TeoRuleEngineRulesOrAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: TeoRuleEngineRulesOrAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }
}

export class TeoRuleEngineRulesOrList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesOr[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesOrOutputReference {
    return new TeoRuleEngineRulesOrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRulesSubRulesRulesActionsCodeActionParameters {
  /**
  * The parameter name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#name TeoRuleEngine#name}
  */
  readonly name: string;
  /**
  * The status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#status_code TeoRuleEngine#status_code}
  */
  readonly statusCode: number;
  /**
  * The parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#values TeoRuleEngine#values}
  */
  readonly values: string[];
}

export function teoRuleEngineRulesSubRulesRulesActionsCodeActionParametersToTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActionsCodeActionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoRuleEngineRulesSubRulesRulesActionsCodeActionParametersToHclTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActionsCodeActionParameters | cdktf.IResolvable): any {
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
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class TeoRuleEngineRulesSubRulesRulesActionsCodeActionParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesSubRulesRulesActionsCodeActionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesSubRulesRulesActionsCodeActionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._statusCode = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._statusCode = value.statusCode;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class TeoRuleEngineRulesSubRulesRulesActionsCodeActionParametersList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesSubRulesRulesActionsCodeActionParameters[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesSubRulesRulesActionsCodeActionParametersOutputReference {
    return new TeoRuleEngineRulesSubRulesRulesActionsCodeActionParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRulesSubRulesRulesActionsCodeAction {
  /**
  * Feature name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the feature name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#action TeoRuleEngine#action}
  */
  readonly action: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#parameters TeoRuleEngine#parameters}
  */
  readonly parameters: TeoRuleEngineRulesSubRulesRulesActionsCodeActionParameters[] | cdktf.IResolvable;
}

export function teoRuleEngineRulesSubRulesRulesActionsCodeActionToTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActionsCodeActionOutputReference | TeoRuleEngineRulesSubRulesRulesActionsCodeAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    parameters: cdktf.listMapper(teoRuleEngineRulesSubRulesRulesActionsCodeActionParametersToTerraform, true)(struct!.parameters),
  }
}


export function teoRuleEngineRulesSubRulesRulesActionsCodeActionToHclTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActionsCodeActionOutputReference | TeoRuleEngineRulesSubRulesRulesActionsCodeAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesSubRulesRulesActionsCodeActionParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesSubRulesRulesActionsCodeActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRuleEngineRulesSubRulesRulesActionsCodeActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoRuleEngineRulesSubRulesRulesActionsCodeAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesSubRulesRulesActionsCodeAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._parameters.internalValue = value.parameters;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new TeoRuleEngineRulesSubRulesRulesActionsCodeActionParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: TeoRuleEngineRulesSubRulesRulesActionsCodeActionParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface TeoRuleEngineRulesSubRulesRulesActionsNormalActionParameters {
  /**
  * Parameter name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#name TeoRuleEngine#name}
  */
  readonly name: string;
  /**
  * The parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#values TeoRuleEngine#values}
  */
  readonly values: string[];
}

export function teoRuleEngineRulesSubRulesRulesActionsNormalActionParametersToTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActionsNormalActionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoRuleEngineRulesSubRulesRulesActionsNormalActionParametersToHclTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActionsNormalActionParameters | cdktf.IResolvable): any {
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

export class TeoRuleEngineRulesSubRulesRulesActionsNormalActionParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesSubRulesRulesActionsNormalActionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesSubRulesRulesActionsNormalActionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class TeoRuleEngineRulesSubRulesRulesActionsNormalActionParametersList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesSubRulesRulesActionsNormalActionParameters[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesSubRulesRulesActionsNormalActionParametersOutputReference {
    return new TeoRuleEngineRulesSubRulesRulesActionsNormalActionParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRulesSubRulesRulesActionsNormalAction {
  /**
  * Feature name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the feature name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#action TeoRuleEngine#action}
  */
  readonly action: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#parameters TeoRuleEngine#parameters}
  */
  readonly parameters: TeoRuleEngineRulesSubRulesRulesActionsNormalActionParameters[] | cdktf.IResolvable;
}

export function teoRuleEngineRulesSubRulesRulesActionsNormalActionToTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActionsNormalActionOutputReference | TeoRuleEngineRulesSubRulesRulesActionsNormalAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    parameters: cdktf.listMapper(teoRuleEngineRulesSubRulesRulesActionsNormalActionParametersToTerraform, true)(struct!.parameters),
  }
}


export function teoRuleEngineRulesSubRulesRulesActionsNormalActionToHclTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActionsNormalActionOutputReference | TeoRuleEngineRulesSubRulesRulesActionsNormalAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesSubRulesRulesActionsNormalActionParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesSubRulesRulesActionsNormalActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRuleEngineRulesSubRulesRulesActionsNormalActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoRuleEngineRulesSubRulesRulesActionsNormalAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesSubRulesRulesActionsNormalAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._parameters.internalValue = value.parameters;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new TeoRuleEngineRulesSubRulesRulesActionsNormalActionParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: TeoRuleEngineRulesSubRulesRulesActionsNormalActionParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParameters {
  /**
  * Feature parameter name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the parameter name, which has three values:
  *   - add: Add the HTTP header.
  *   - set: Rewrite the HTTP header.
  *   - del: Delete the HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#action TeoRuleEngine#action}
  */
  readonly action: string;
  /**
  * Parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#name TeoRuleEngine#name}
  */
  readonly name: string;
  /**
  * Parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#values TeoRuleEngine#values}
  */
  readonly values: string[];
}

export function teoRuleEngineRulesSubRulesRulesActionsRewriteActionParametersToTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoRuleEngineRulesSubRulesRulesActionsRewriteActionParametersToHclTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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

export class TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParametersList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParameters[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParametersOutputReference {
    return new TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRulesSubRulesRulesActionsRewriteAction {
  /**
  * Feature name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the feature name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#action TeoRuleEngine#action}
  */
  readonly action: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#parameters TeoRuleEngine#parameters}
  */
  readonly parameters: TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParameters[] | cdktf.IResolvable;
}

export function teoRuleEngineRulesSubRulesRulesActionsRewriteActionToTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActionsRewriteActionOutputReference | TeoRuleEngineRulesSubRulesRulesActionsRewriteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    parameters: cdktf.listMapper(teoRuleEngineRulesSubRulesRulesActionsRewriteActionParametersToTerraform, true)(struct!.parameters),
  }
}


export function teoRuleEngineRulesSubRulesRulesActionsRewriteActionToHclTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActionsRewriteActionOutputReference | TeoRuleEngineRulesSubRulesRulesActionsRewriteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesSubRulesRulesActionsRewriteActionParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRuleEngineRulesSubRulesRulesActionsRewriteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoRuleEngineRulesSubRulesRulesActionsRewriteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesSubRulesRulesActionsRewriteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._parameters.internalValue = value.parameters;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: TeoRuleEngineRulesSubRulesRulesActionsRewriteActionParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface TeoRuleEngineRulesSubRulesRulesActions {
  /**
  * code_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#code_action TeoRuleEngine#code_action}
  */
  readonly codeAction?: TeoRuleEngineRulesSubRulesRulesActionsCodeAction;
  /**
  * normal_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#normal_action TeoRuleEngine#normal_action}
  */
  readonly normalAction?: TeoRuleEngineRulesSubRulesRulesActionsNormalAction;
  /**
  * rewrite_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#rewrite_action TeoRuleEngine#rewrite_action}
  */
  readonly rewriteAction?: TeoRuleEngineRulesSubRulesRulesActionsRewriteAction;
}

export function teoRuleEngineRulesSubRulesRulesActionsToTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_action: teoRuleEngineRulesSubRulesRulesActionsCodeActionToTerraform(struct!.codeAction),
    normal_action: teoRuleEngineRulesSubRulesRulesActionsNormalActionToTerraform(struct!.normalAction),
    rewrite_action: teoRuleEngineRulesSubRulesRulesActionsRewriteActionToTerraform(struct!.rewriteAction),
  }
}


export function teoRuleEngineRulesSubRulesRulesActionsToHclTerraform(struct?: TeoRuleEngineRulesSubRulesRulesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_action: {
      value: teoRuleEngineRulesSubRulesRulesActionsCodeActionToHclTerraform(struct!.codeAction),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesSubRulesRulesActionsCodeActionList",
    },
    normal_action: {
      value: teoRuleEngineRulesSubRulesRulesActionsNormalActionToHclTerraform(struct!.normalAction),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesSubRulesRulesActionsNormalActionList",
    },
    rewrite_action: {
      value: teoRuleEngineRulesSubRulesRulesActionsRewriteActionToHclTerraform(struct!.rewriteAction),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesSubRulesRulesActionsRewriteActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRuleEngineRulesSubRulesRulesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesSubRulesRulesActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeAction = this._codeAction?.internalValue;
    }
    if (this._normalAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalAction = this._normalAction?.internalValue;
    }
    if (this._rewriteAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteAction = this._rewriteAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesSubRulesRulesActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeAction.internalValue = undefined;
      this._normalAction.internalValue = undefined;
      this._rewriteAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeAction.internalValue = value.codeAction;
      this._normalAction.internalValue = value.normalAction;
      this._rewriteAction.internalValue = value.rewriteAction;
    }
  }

  // code_action - computed: false, optional: true, required: false
  private _codeAction = new TeoRuleEngineRulesSubRulesRulesActionsCodeActionOutputReference(this, "code_action");
  public get codeAction() {
    return this._codeAction;
  }
  public putCodeAction(value: TeoRuleEngineRulesSubRulesRulesActionsCodeAction) {
    this._codeAction.internalValue = value;
  }
  public resetCodeAction() {
    this._codeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeActionInput() {
    return this._codeAction.internalValue;
  }

  // normal_action - computed: false, optional: true, required: false
  private _normalAction = new TeoRuleEngineRulesSubRulesRulesActionsNormalActionOutputReference(this, "normal_action");
  public get normalAction() {
    return this._normalAction;
  }
  public putNormalAction(value: TeoRuleEngineRulesSubRulesRulesActionsNormalAction) {
    this._normalAction.internalValue = value;
  }
  public resetNormalAction() {
    this._normalAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalActionInput() {
    return this._normalAction.internalValue;
  }

  // rewrite_action - computed: false, optional: true, required: false
  private _rewriteAction = new TeoRuleEngineRulesSubRulesRulesActionsRewriteActionOutputReference(this, "rewrite_action");
  public get rewriteAction() {
    return this._rewriteAction;
  }
  public putRewriteAction(value: TeoRuleEngineRulesSubRulesRulesActionsRewriteAction) {
    this._rewriteAction.internalValue = value;
  }
  public resetRewriteAction() {
    this._rewriteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteActionInput() {
    return this._rewriteAction.internalValue;
  }
}

export class TeoRuleEngineRulesSubRulesRulesActionsList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesSubRulesRulesActions[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesSubRulesRulesActionsOutputReference {
    return new TeoRuleEngineRulesSubRulesRulesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRulesSubRulesRulesOrAnd {
  /**
  * Whether the parameter value is case insensitive. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#ignore_case TeoRuleEngine#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The parameter name of the match type. This field is required only when `Target=query_string/request_header`.
  *   - `query_string`: Name of the query string, such as "lang" and "version" in "lang=cn&version=1".
  *   - `request_header`: Name of the HTTP request header, such as "Accept-Language" in the "Accept-Language:zh-CN,zh;q=0.9" header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#name TeoRuleEngine#name}
  */
  readonly name?: string;
  /**
  * Operator. Valid values:
  *   - `equal`: Equal.
  *   - `notEqual`: Does not equal.
  *   - `exist`: Exists.
  *   - `notexist`: Does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#operator TeoRuleEngine#operator}
  */
  readonly operator: string;
  /**
  * The match type. Values:
  *   - `filename`: File name.
  *   - `extension`: File extension.
  *   - `host`: Host.
  *   - `full_url`: Full URL, which indicates the complete URL path under the current site and must contain the HTTP protocol, host, and path.
  *   - `url`: Partial URL under the current site.  - `client_country`: Country/Region of the client.
  *   - `query_string`: Query string in the request URL.
  *   - `request_header`: HTTP request header.
  *   - `client_ip`: Client IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#target TeoRuleEngine#target}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#values TeoRuleEngine#values}
  */
  readonly values?: string[];
}

export function teoRuleEngineRulesSubRulesRulesOrAndToTerraform(struct?: TeoRuleEngineRulesSubRulesRulesOrAnd | cdktf.IResolvable): any {
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


export function teoRuleEngineRulesSubRulesRulesOrAndToHclTerraform(struct?: TeoRuleEngineRulesSubRulesRulesOrAnd | cdktf.IResolvable): any {
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

export class TeoRuleEngineRulesSubRulesRulesOrAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesSubRulesRulesOrAnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TeoRuleEngineRulesSubRulesRulesOrAnd | cdktf.IResolvable | undefined) {
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

export class TeoRuleEngineRulesSubRulesRulesOrAndList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesSubRulesRulesOrAnd[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesSubRulesRulesOrAndOutputReference {
    return new TeoRuleEngineRulesSubRulesRulesOrAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRulesSubRulesRulesOr {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#and TeoRuleEngine#and}
  */
  readonly and: TeoRuleEngineRulesSubRulesRulesOrAnd[] | cdktf.IResolvable;
}

export function teoRuleEngineRulesSubRulesRulesOrToTerraform(struct?: TeoRuleEngineRulesSubRulesRulesOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(teoRuleEngineRulesSubRulesRulesOrAndToTerraform, true)(struct!.and),
  }
}


export function teoRuleEngineRulesSubRulesRulesOrToHclTerraform(struct?: TeoRuleEngineRulesSubRulesRulesOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesSubRulesRulesOrAndToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesSubRulesRulesOrAndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRuleEngineRulesSubRulesRulesOrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesSubRulesRulesOr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesSubRulesRulesOr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
    }
  }

  // and - computed: false, optional: false, required: true
  private _and = new TeoRuleEngineRulesSubRulesRulesOrAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: TeoRuleEngineRulesSubRulesRulesOrAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }
}

export class TeoRuleEngineRulesSubRulesRulesOrList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesSubRulesRulesOr[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesSubRulesRulesOrOutputReference {
    return new TeoRuleEngineRulesSubRulesRulesOrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRulesSubRulesRules {
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#actions TeoRuleEngine#actions}
  */
  readonly actions?: TeoRuleEngineRulesSubRulesRulesActions[] | cdktf.IResolvable;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#or TeoRuleEngine#or}
  */
  readonly or: TeoRuleEngineRulesSubRulesRulesOr[] | cdktf.IResolvable;
}

export function teoRuleEngineRulesSubRulesRulesToTerraform(struct?: TeoRuleEngineRulesSubRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(teoRuleEngineRulesSubRulesRulesActionsToTerraform, true)(struct!.actions),
    or: cdktf.listMapper(teoRuleEngineRulesSubRulesRulesOrToTerraform, true)(struct!.or),
  }
}


export function teoRuleEngineRulesSubRulesRulesToHclTerraform(struct?: TeoRuleEngineRulesSubRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesSubRulesRulesActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesSubRulesRulesActionsList",
    },
    or: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesSubRulesRulesOrToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesSubRulesRulesOrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRuleEngineRulesSubRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesSubRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesSubRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._or.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._or.internalValue = value.or;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new TeoRuleEngineRulesSubRulesRulesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: TeoRuleEngineRulesSubRulesRulesActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // or - computed: false, optional: false, required: true
  private _or = new TeoRuleEngineRulesSubRulesRulesOrList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: TeoRuleEngineRulesSubRulesRulesOr[] | cdktf.IResolvable) {
    this._or.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }
}

export class TeoRuleEngineRulesSubRulesRulesList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesSubRulesRules[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesSubRulesRulesOutputReference {
    return new TeoRuleEngineRulesSubRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRulesSubRules {
  /**
  * Tag of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#tags TeoRuleEngine#tags}
  */
  readonly tags?: string[];
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#rules TeoRuleEngine#rules}
  */
  readonly rules: TeoRuleEngineRulesSubRulesRules[] | cdktf.IResolvable;
}

export function teoRuleEngineRulesSubRulesToTerraform(struct?: TeoRuleEngineRulesSubRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    rules: cdktf.listMapper(teoRuleEngineRulesSubRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function teoRuleEngineRulesSubRulesToHclTerraform(struct?: TeoRuleEngineRulesSubRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rules: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesSubRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesSubRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRuleEngineRulesSubRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRulesSubRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRulesSubRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags = value.tags;
      this._rules.internalValue = value.rules;
    }
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new TeoRuleEngineRulesSubRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: TeoRuleEngineRulesSubRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class TeoRuleEngineRulesSubRulesList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRulesSubRules[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesSubRulesOutputReference {
    return new TeoRuleEngineRulesSubRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRuleEngineRules {
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#actions TeoRuleEngine#actions}
  */
  readonly actions?: TeoRuleEngineRulesActions[] | cdktf.IResolvable;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#or TeoRuleEngine#or}
  */
  readonly or: TeoRuleEngineRulesOr[] | cdktf.IResolvable;
  /**
  * sub_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#sub_rules TeoRuleEngine#sub_rules}
  */
  readonly subRules?: TeoRuleEngineRulesSubRules[] | cdktf.IResolvable;
}

export function teoRuleEngineRulesToTerraform(struct?: TeoRuleEngineRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(teoRuleEngineRulesActionsToTerraform, true)(struct!.actions),
    or: cdktf.listMapper(teoRuleEngineRulesOrToTerraform, true)(struct!.or),
    sub_rules: cdktf.listMapper(teoRuleEngineRulesSubRulesToTerraform, true)(struct!.subRules),
  }
}


export function teoRuleEngineRulesToHclTerraform(struct?: TeoRuleEngineRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesActionsList",
    },
    or: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesOrToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesOrList",
    },
    sub_rules: {
      value: cdktf.listMapperHcl(teoRuleEngineRulesSubRulesToHclTerraform, true)(struct!.subRules),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRuleEngineRulesSubRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRuleEngineRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRuleEngineRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._subRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subRules = this._subRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRuleEngineRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._or.internalValue = undefined;
      this._subRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._or.internalValue = value.or;
      this._subRules.internalValue = value.subRules;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new TeoRuleEngineRulesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: TeoRuleEngineRulesActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // or - computed: false, optional: false, required: true
  private _or = new TeoRuleEngineRulesOrList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: TeoRuleEngineRulesOr[] | cdktf.IResolvable) {
    this._or.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // sub_rules - computed: false, optional: true, required: false
  private _subRules = new TeoRuleEngineRulesSubRulesList(this, "sub_rules", false);
  public get subRules() {
    return this._subRules;
  }
  public putSubRules(value: TeoRuleEngineRulesSubRules[] | cdktf.IResolvable) {
    this._subRules.internalValue = value;
  }
  public resetSubRules() {
    this._subRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subRulesInput() {
    return this._subRules.internalValue;
  }
}

export class TeoRuleEngineRulesList extends cdktf.ComplexList {
  public internalValue? : TeoRuleEngineRules[] | cdktf.IResolvable

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
  public get(index: number): TeoRuleEngineRulesOutputReference {
    return new TeoRuleEngineRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine tencentcloud_teo_rule_engine}
*/
export class TeoRuleEngine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_rule_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoRuleEngine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoRuleEngine to import
  * @param importFromId The id of the existing TeoRuleEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoRuleEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_rule_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_rule_engine tencentcloud_teo_rule_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoRuleEngineConfig
  */
  public constructor(scope: Construct, id: string, config: TeoRuleEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_rule_engine',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
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
    this._ruleName = config.ruleName;
    this._status = config.status;
    this._tags = config.tags;
    this._zoneId = config.zoneId;
    this._rules.internalValue = config.rules;
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

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_priority - computed: true, optional: false, required: false
  public get rulePriority() {
    return this.getNumberAttribute('rule_priority');
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // rules - computed: false, optional: false, required: true
  private _rules = new TeoRuleEngineRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: TeoRuleEngineRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      rules: cdktf.listMapper(teoRuleEngineRulesToTerraform, true)(this._rules.internalValue),
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
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(teoRuleEngineRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoRuleEngineRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
