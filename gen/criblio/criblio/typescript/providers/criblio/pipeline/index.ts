// https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#conf Pipeline#conf}
  */
  readonly conf: PipelineConf;
  /**
  * The consumer group to which this instance belongs. Defaults to 'Cribl'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#group_id Pipeline#group_id}
  */
  readonly groupId: string;
  /**
  * Unique ID to PATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#id Pipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface PipelineConfFunctions {
  /**
  * Function-specific configuration as a JSON object. Different functions require different configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#conf Pipeline#conf}
  */
  readonly conf?: string;
  /**
  * Simple description of this step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#description Pipeline#description}
  */
  readonly description?: string;
  /**
  * If true, data will not be pushed through this function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#disabled Pipeline#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Filter that selects data to be fed through this Function. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#filter Pipeline#filter}
  */
  readonly filter?: string;
  /**
  * If enabled, stops the results of this Function from being passed to the downstream Functions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#final Pipeline#final}
  */
  readonly final?: boolean | cdktf.IResolvable;
  /**
  * Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#group_id Pipeline#group_id}
  */
  readonly groupId?: string;
  /**
  * Function ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#id Pipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function pipelineConfFunctionsToTerraform(struct?: PipelineConfFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conf: cdktf.stringToTerraform(struct!.conf),
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    filter: cdktf.stringToTerraform(struct!.filter),
    final: cdktf.booleanToTerraform(struct!.final),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function pipelineConfFunctionsToHclTerraform(struct?: PipelineConfFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conf: {
      value: cdktf.stringToHclTerraform(struct!.conf),
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
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineConfFunctionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineConfFunctions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conf !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._final !== undefined) {
      hasAnyValues = true;
      internalValueResult.final = this._final;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineConfFunctions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conf = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._filter = undefined;
      this._final = undefined;
      this._groupId = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conf = value.conf;
      this._description = value.description;
      this._disabled = value.disabled;
      this._filter = value.filter;
      this._final = value.final;
      this._groupId = value.groupId;
      this._id = value.id;
    }
  }

  // conf - computed: true, optional: true, required: false
  private _conf?: string; 
  public get conf() {
    return this.getStringAttribute('conf');
  }
  public set conf(value: string) {
    this._conf = value;
  }
  public resetConf() {
    this._conf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf;
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

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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
}

export class PipelineConfFunctionsList extends cdktf.ComplexList {
  public internalValue? : PipelineConfFunctions[] | cdktf.IResolvable

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
  public get(index: number): PipelineConfFunctionsOutputReference {
    return new PipelineConfFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineConfGroups {
  /**
  * Short description of this group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#description Pipeline#description}
  */
  readonly description?: string;
  /**
  * Whether this group is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#disabled Pipeline#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name?: string;
}

export function pipelineConfGroupsToTerraform(struct?: PipelineConfGroups | cdktf.IResolvable): any {
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


export function pipelineConfGroupsToHclTerraform(struct?: PipelineConfGroups | cdktf.IResolvable): any {
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

export class PipelineConfGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineConfGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PipelineConfGroups | cdktf.IResolvable | undefined) {
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

export class PipelineConfGroupsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PipelineConfGroups } | cdktf.IResolvable

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
  public get(key: string): PipelineConfGroupsOutputReference {
    return new PipelineConfGroupsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PipelineConf {
  /**
  * Time (in ms) to wait for an async function to complete processing of a data item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#async_func_timeout Pipeline#async_func_timeout}
  */
  readonly asyncFuncTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#description Pipeline#description}
  */
  readonly description?: string;
  /**
  * List of Functions to pass data through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#functions Pipeline#functions}
  */
  readonly functions?: PipelineConfFunctions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#groups Pipeline#groups}
  */
  readonly groups?: { [key: string]: PipelineConfGroups } | cdktf.IResolvable;
  /**
  * The output destination for events processed by this Pipeline. Default: "default"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#output Pipeline#output}
  */
  readonly output?: string;
  /**
  * Tags for filtering and grouping in @{product}. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#streamtags Pipeline#streamtags}
  */
  readonly streamtags?: string[];
}

export function pipelineConfToTerraform(struct?: PipelineConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    async_func_timeout: cdktf.numberToTerraform(struct!.asyncFuncTimeout),
    description: cdktf.stringToTerraform(struct!.description),
    functions: cdktf.listMapper(pipelineConfFunctionsToTerraform, false)(struct!.functions),
    groups: cdktf.hashMapper(pipelineConfGroupsToTerraform)(struct!.groups),
    output: cdktf.stringToTerraform(struct!.output),
    streamtags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streamtags),
  }
}


export function pipelineConfToHclTerraform(struct?: PipelineConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    async_func_timeout: {
      value: cdktf.numberToHclTerraform(struct!.asyncFuncTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    functions: {
      value: cdktf.listMapperHcl(pipelineConfFunctionsToHclTerraform, false)(struct!.functions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineConfFunctionsList",
    },
    groups: {
      value: cdktf.hashMapperHcl(pipelineConfGroupsToHclTerraform)(struct!.groups),
      isBlock: true,
      type: "map",
      storageClassType: "PipelineConfGroupsMap",
    },
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    streamtags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streamtags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asyncFuncTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncFuncTimeout = this._asyncFuncTimeout;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._functions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functions = this._functions?.internalValue;
    }
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._streamtags !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamtags = this._streamtags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asyncFuncTimeout = undefined;
      this._description = undefined;
      this._functions.internalValue = undefined;
      this._groups.internalValue = undefined;
      this._output = undefined;
      this._streamtags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asyncFuncTimeout = value.asyncFuncTimeout;
      this._description = value.description;
      this._functions.internalValue = value.functions;
      this._groups.internalValue = value.groups;
      this._output = value.output;
      this._streamtags = value.streamtags;
    }
  }

  // async_func_timeout - computed: true, optional: true, required: false
  private _asyncFuncTimeout?: number; 
  public get asyncFuncTimeout() {
    return this.getNumberAttribute('async_func_timeout');
  }
  public set asyncFuncTimeout(value: number) {
    this._asyncFuncTimeout = value;
  }
  public resetAsyncFuncTimeout() {
    this._asyncFuncTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncFuncTimeoutInput() {
    return this._asyncFuncTimeout;
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

  // functions - computed: true, optional: true, required: false
  private _functions = new PipelineConfFunctionsList(this, "functions", false);
  public get functions() {
    return this._functions;
  }
  public putFunctions(value: PipelineConfFunctions[] | cdktf.IResolvable) {
    this._functions.internalValue = value;
  }
  public resetFunctions() {
    this._functions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions.internalValue;
  }

  // groups - computed: true, optional: true, required: false
  private _groups = new PipelineConfGroupsMap(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: { [key: string]: PipelineConfGroups } | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
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

  // streamtags - computed: true, optional: true, required: false
  private _streamtags?: string[]; 
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }
  public set streamtags(value: string[]) {
    this._streamtags = value;
  }
  public resetStreamtags() {
    this._streamtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamtagsInput() {
    return this._streamtags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline criblio_pipeline}
*/
export class Pipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pipeline to import
  * @param importFromId The id of the existing Pipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/pipeline criblio_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.64',
        providerVersionConstraint: '1.20.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conf.internalValue = config.conf;
    this._groupId = config.groupId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conf - computed: false, optional: false, required: true
  private _conf = new PipelineConfOutputReference(this, "conf");
  public get conf() {
    return this._conf;
  }
  public putConf(value: PipelineConf) {
    this._conf.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf.internalValue;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conf: pipelineConfToTerraform(this._conf.internalValue),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conf: {
        value: pipelineConfToHclTerraform(this._conf.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineConf",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
