// https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#comments Routes#comments}
  */
  readonly comments?: RoutesComments[] | cdktf.IResolvable;
  /**
  * group Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#group_id Routes#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#groups Routes#groups}
  */
  readonly groups?: { [key: string]: RoutesGroups } | cdktf.IResolvable;
  /**
  * Routes ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#id Routes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Pipeline routing rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#routes Routes#routes}
  */
  readonly routes: RoutesRoutes[] | cdktf.IResolvable;
}
export interface RoutesComments {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#additional_properties Routes#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Optional, short description of this Route's purpose
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#comment Routes#comment}
  */
  readonly comment?: string;
}

export function routesCommentsToTerraform(struct?: RoutesComments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    comment: cdktf.stringToTerraform(struct!.comment),
  }
}


export function routesCommentsToHclTerraform(struct?: RoutesComments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutesCommentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutesComments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesComments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._comment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._comment = value.comment;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }
}

export class RoutesCommentsList extends cdktf.ComplexList {
  public internalValue? : RoutesComments[] | cdktf.IResolvable

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
  public get(index: number): RoutesCommentsOutputReference {
    return new RoutesCommentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutesGroups {
  /**
  * Short description of this group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#description Routes#description}
  */
  readonly description?: string;
  /**
  * Whether this group is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#disabled Routes#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#name Routes#name}
  */
  readonly name?: string;
}

export function routesGroupsToTerraform(struct?: RoutesGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routesGroupsToHclTerraform(struct?: RoutesGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutesGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): RoutesGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disabled = value.disabled;
      this._name = value.name;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // disabled - computed: true, optional: true, required: false
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
}

export class RoutesGroupsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: RoutesGroups } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): RoutesGroupsOutputReference {
    return new RoutesGroupsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface RoutesRoutes {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#additional_properties Routes#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#description Routes#description}
  */
  readonly description?: string;
  /**
  * Disable this routing rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#disabled Routes#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Enable to use a JavaScript expression that evaluates to the name of the Description below. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#enable_output_expression Routes#enable_output_expression}
  */
  readonly enableOutputExpression?: boolean | cdktf.IResolvable;
  /**
  * JavaScript expression to select data to route. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#filter Routes#filter}
  */
  readonly filter?: string;
  /**
  * Flag to control whether the event gets consumed by this Route (Final), or cloned into it. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#final Routes#final}
  */
  readonly final?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#name Routes#name}
  */
  readonly name?: string;
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#output Routes#output}
  */
  readonly output?: string;
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#output_expression Routes#output_expression}
  */
  readonly outputExpression?: string;
  /**
  * Pipeline to send the matching data to. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#pipeline Routes#pipeline}
  */
  readonly pipeline?: string;
}

export function routesRoutesToTerraform(struct?: RoutesRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    enable_output_expression: cdktf.booleanToTerraform(struct!.enableOutputExpression),
    filter: cdktf.stringToTerraform(struct!.filter),
    final: cdktf.booleanToTerraform(struct!.final),
    name: cdktf.stringToTerraform(struct!.name),
    output: cdktf.stringToTerraform(struct!.output),
    output_expression: cdktf.stringToTerraform(struct!.outputExpression),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
  }
}


export function routesRoutesToHclTerraform(struct?: RoutesRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_output_expression: {
      value: cdktf.booleanToHclTerraform(struct!.enableOutputExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    final: {
      value: cdktf.booleanToHclTerraform(struct!.final),
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
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_expression: {
      value: cdktf.stringToHclTerraform(struct!.outputExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline: {
      value: cdktf.stringToHclTerraform(struct!.pipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutesRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutesRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._enableOutputExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOutputExpression = this._enableOutputExpression;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._final !== undefined) {
      hasAnyValues = true;
      internalValueResult.final = this._final;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._outputExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputExpression = this._outputExpression;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._enableOutputExpression = undefined;
      this._filter = undefined;
      this._final = undefined;
      this._name = undefined;
      this._output = undefined;
      this._outputExpression = undefined;
      this._pipeline = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._description = value.description;
      this._disabled = value.disabled;
      this._enableOutputExpression = value.enableOutputExpression;
      this._filter = value.filter;
      this._final = value.final;
      this._name = value.name;
      this._output = value.output;
      this._outputExpression = value.outputExpression;
      this._pipeline = value.pipeline;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // description - computed: true, optional: true, required: false
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

  // disabled - computed: true, optional: true, required: false
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

  // enable_output_expression - computed: true, optional: true, required: false
  private _enableOutputExpression?: boolean | cdktf.IResolvable; 
  public get enableOutputExpression() {
    return this.getBooleanAttribute('enable_output_expression');
  }
  public set enableOutputExpression(value: boolean | cdktf.IResolvable) {
    this._enableOutputExpression = value;
  }
  public resetEnableOutputExpression() {
    this._enableOutputExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOutputExpressionInput() {
    return this._enableOutputExpression;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // final - computed: true, optional: true, required: false
  private _final?: boolean | cdktf.IResolvable; 
  public get final() {
    return this.getBooleanAttribute('final');
  }
  public set final(value: boolean | cdktf.IResolvable) {
    this._final = value;
  }
  public resetFinal() {
    this._final = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalInput() {
    return this._final;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // output - computed: true, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // output_expression - computed: true, optional: true, required: false
  private _outputExpression?: string; 
  public get outputExpression() {
    return this.getStringAttribute('output_expression');
  }
  public set outputExpression(value: string) {
    this._outputExpression = value;
  }
  public resetOutputExpression() {
    this._outputExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputExpressionInput() {
    return this._outputExpression;
  }

  // pipeline - computed: true, optional: true, required: false
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  public resetPipeline() {
    this._pipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }
}

export class RoutesRoutesList extends cdktf.ComplexList {
  public internalValue? : RoutesRoutes[] | cdktf.IResolvable

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
  public get(index: number): RoutesRoutesOutputReference {
    return new RoutesRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes criblio_routes}
*/
export class Routes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Routes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Routes to import
  * @param importFromId The id of the existing Routes that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Routes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/routes criblio_routes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutesConfig
  */
  public constructor(scope: Construct, id: string, config: RoutesConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_routes',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments.internalValue = config.comments;
    this._groupId = config.groupId;
    this._groups.internalValue = config.groups;
    this._id = config.id;
    this._routes.internalValue = config.routes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: true, optional: true, required: false
  private _comments = new RoutesCommentsList(this, "comments", false);
  public get comments() {
    return this._comments;
  }
  public putComments(value: RoutesComments[] | cdktf.IResolvable) {
    this._comments.internalValue = value;
  }
  public resetComments() {
    this._comments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments.internalValue;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // groups - computed: true, optional: true, required: false
  private _groups = new RoutesGroupsMap(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: { [key: string]: RoutesGroups } | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
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

  // routes - computed: false, optional: false, required: true
  private _routes = new RoutesRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: RoutesRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.listMapper(routesCommentsToTerraform, false)(this._comments.internalValue),
      group_id: cdktf.stringToTerraform(this._groupId),
      groups: cdktf.hashMapper(routesGroupsToTerraform)(this._groups.internalValue),
      id: cdktf.stringToTerraform(this._id),
      routes: cdktf.listMapper(routesRoutesToTerraform, false)(this._routes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.listMapperHcl(routesCommentsToHclTerraform, false)(this._comments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutesCommentsList",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.hashMapperHcl(routesGroupsToHclTerraform)(this._groups.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "RoutesGroupsMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routes: {
        value: cdktf.listMapperHcl(routesRoutesToHclTerraform, false)(this._routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutesRoutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
