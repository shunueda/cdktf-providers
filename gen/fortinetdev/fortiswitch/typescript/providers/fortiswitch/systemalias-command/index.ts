// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemaliasCommandConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#attribute SystemaliasCommand#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#command SystemaliasCommand#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#description SystemaliasCommand#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#dynamic_sort_subtable SystemaliasCommand#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#id SystemaliasCommand#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#limit_shown_attributes SystemaliasCommand#limit_shown_attributes}
  */
  readonly limitShownAttributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#name SystemaliasCommand#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#path SystemaliasCommand#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#permission SystemaliasCommand#permission}
  */
  readonly permission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#table_entry_create SystemaliasCommand#table_entry_create}
  */
  readonly tableEntryCreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#table_listing SystemaliasCommand#table_listing}
  */
  readonly tableListing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#type SystemaliasCommand#type}
  */
  readonly type?: string;
  /**
  * read_only_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#read_only_attributes SystemaliasCommand#read_only_attributes}
  */
  readonly readOnlyAttributes?: SystemaliasCommandReadOnlyAttributes[] | cdktf.IResolvable;
  /**
  * script_arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#script_arguments SystemaliasCommand#script_arguments}
  */
  readonly scriptArguments?: SystemaliasCommandScriptArguments[] | cdktf.IResolvable;
  /**
  * table_ids_allowed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#table_ids_allowed SystemaliasCommand#table_ids_allowed}
  */
  readonly tableIdsAllowed?: SystemaliasCommandTableIdsAllowed[] | cdktf.IResolvable;
}
export interface SystemaliasCommandReadOnlyAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#attribute_name SystemaliasCommand#attribute_name}
  */
  readonly attributeName?: string;
}

export function systemaliasCommandReadOnlyAttributesToTerraform(struct?: SystemaliasCommandReadOnlyAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
  }
}


export function systemaliasCommandReadOnlyAttributesToHclTerraform(struct?: SystemaliasCommandReadOnlyAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemaliasCommandReadOnlyAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemaliasCommandReadOnlyAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemaliasCommandReadOnlyAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
    }
  }

  // attribute_name - computed: true, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }
}

export class SystemaliasCommandReadOnlyAttributesList extends cdktf.ComplexList {
  public internalValue? : SystemaliasCommandReadOnlyAttributes[] | cdktf.IResolvable

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
  public get(index: number): SystemaliasCommandReadOnlyAttributesOutputReference {
    return new SystemaliasCommandReadOnlyAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemaliasCommandScriptArgumentsAllowedValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#value SystemaliasCommand#value}
  */
  readonly value?: string;
}

export function systemaliasCommandScriptArgumentsAllowedValuesToTerraform(struct?: SystemaliasCommandScriptArgumentsAllowedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function systemaliasCommandScriptArgumentsAllowedValuesToHclTerraform(struct?: SystemaliasCommandScriptArgumentsAllowedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemaliasCommandScriptArgumentsAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemaliasCommandScriptArgumentsAllowedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemaliasCommandScriptArgumentsAllowedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class SystemaliasCommandScriptArgumentsAllowedValuesList extends cdktf.ComplexList {
  public internalValue? : SystemaliasCommandScriptArgumentsAllowedValues[] | cdktf.IResolvable

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
  public get(index: number): SystemaliasCommandScriptArgumentsAllowedValuesOutputReference {
    return new SystemaliasCommandScriptArgumentsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemaliasCommandScriptArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#help SystemaliasCommand#help}
  */
  readonly help?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#id SystemaliasCommand#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#name SystemaliasCommand#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#optional SystemaliasCommand#optional}
  */
  readonly optional?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#range SystemaliasCommand#range}
  */
  readonly range?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#range_delay SystemaliasCommand#range_delay}
  */
  readonly rangeDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#table_path SystemaliasCommand#table_path}
  */
  readonly tablePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#type SystemaliasCommand#type}
  */
  readonly type?: string;
  /**
  * allowed_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#allowed_values SystemaliasCommand#allowed_values}
  */
  readonly allowedValues?: SystemaliasCommandScriptArgumentsAllowedValues[] | cdktf.IResolvable;
}

export function systemaliasCommandScriptArgumentsToTerraform(struct?: SystemaliasCommandScriptArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    help: cdktf.stringToTerraform(struct!.help),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.stringToTerraform(struct!.optional),
    range: cdktf.stringToTerraform(struct!.range),
    range_delay: cdktf.numberToTerraform(struct!.rangeDelay),
    table_path: cdktf.stringToTerraform(struct!.tablePath),
    type: cdktf.stringToTerraform(struct!.type),
    allowed_values: cdktf.listMapper(systemaliasCommandScriptArgumentsAllowedValuesToTerraform, true)(struct!.allowedValues),
  }
}


export function systemaliasCommandScriptArgumentsToHclTerraform(struct?: SystemaliasCommandScriptArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    help: {
      value: cdktf.stringToHclTerraform(struct!.help),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.stringToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_delay: {
      value: cdktf.numberToHclTerraform(struct!.rangeDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    table_path: {
      value: cdktf.stringToHclTerraform(struct!.tablePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_values: {
      value: cdktf.listMapperHcl(systemaliasCommandScriptArgumentsAllowedValuesToHclTerraform, true)(struct!.allowedValues),
      isBlock: true,
      type: "list",
      storageClassType: "SystemaliasCommandScriptArgumentsAllowedValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemaliasCommandScriptArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemaliasCommandScriptArguments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._help !== undefined) {
      hasAnyValues = true;
      internalValueResult.help = this._help;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._rangeDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeDelay = this._rangeDelay;
    }
    if (this._tablePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablePath = this._tablePath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._allowedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemaliasCommandScriptArguments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._help = undefined;
      this._id = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._range = undefined;
      this._rangeDelay = undefined;
      this._tablePath = undefined;
      this._type = undefined;
      this._allowedValues.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._help = value.help;
      this._id = value.id;
      this._name = value.name;
      this._optional = value.optional;
      this._range = value.range;
      this._rangeDelay = value.rangeDelay;
      this._tablePath = value.tablePath;
      this._type = value.type;
      this._allowedValues.internalValue = value.allowedValues;
    }
  }

  // help - computed: true, optional: true, required: false
  private _help?: string; 
  public get help() {
    return this.getStringAttribute('help');
  }
  public set help(value: string) {
    this._help = value;
  }
  public resetHelp() {
    this._help = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpInput() {
    return this._help;
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

  // optional - computed: true, optional: true, required: false
  private _optional?: string; 
  public get optional() {
    return this.getStringAttribute('optional');
  }
  public set optional(value: string) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // range - computed: true, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // range_delay - computed: true, optional: true, required: false
  private _rangeDelay?: number; 
  public get rangeDelay() {
    return this.getNumberAttribute('range_delay');
  }
  public set rangeDelay(value: number) {
    this._rangeDelay = value;
  }
  public resetRangeDelay() {
    this._rangeDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeDelayInput() {
    return this._rangeDelay;
  }

  // table_path - computed: true, optional: true, required: false
  private _tablePath?: string; 
  public get tablePath() {
    return this.getStringAttribute('table_path');
  }
  public set tablePath(value: string) {
    this._tablePath = value;
  }
  public resetTablePath() {
    this._tablePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePathInput() {
    return this._tablePath;
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

  // allowed_values - computed: false, optional: true, required: false
  private _allowedValues = new SystemaliasCommandScriptArgumentsAllowedValuesList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }
  public putAllowedValues(value: SystemaliasCommandScriptArgumentsAllowedValues[] | cdktf.IResolvable) {
    this._allowedValues.internalValue = value;
  }
  public resetAllowedValues() {
    this._allowedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues.internalValue;
  }
}

export class SystemaliasCommandScriptArgumentsList extends cdktf.ComplexList {
  public internalValue? : SystemaliasCommandScriptArguments[] | cdktf.IResolvable

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
  public get(index: number): SystemaliasCommandScriptArgumentsOutputReference {
    return new SystemaliasCommandScriptArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemaliasCommandTableIdsAllowed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#entry_id SystemaliasCommand#entry_id}
  */
  readonly entryId?: string;
}

export function systemaliasCommandTableIdsAllowedToTerraform(struct?: SystemaliasCommandTableIdsAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_id: cdktf.stringToTerraform(struct!.entryId),
  }
}


export function systemaliasCommandTableIdsAllowedToHclTerraform(struct?: SystemaliasCommandTableIdsAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_id: {
      value: cdktf.stringToHclTerraform(struct!.entryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemaliasCommandTableIdsAllowedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemaliasCommandTableIdsAllowed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryId = this._entryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemaliasCommandTableIdsAllowed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entryId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entryId = value.entryId;
    }
  }

  // entry_id - computed: true, optional: true, required: false
  private _entryId?: string; 
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }
  public set entryId(value: string) {
    this._entryId = value;
  }
  public resetEntryId() {
    this._entryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryIdInput() {
    return this._entryId;
  }
}

export class SystemaliasCommandTableIdsAllowedList extends cdktf.ComplexList {
  public internalValue? : SystemaliasCommandTableIdsAllowed[] | cdktf.IResolvable

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
  public get(index: number): SystemaliasCommandTableIdsAllowedOutputReference {
    return new SystemaliasCommandTableIdsAllowedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command fortiswitch_systemalias_command}
*/
export class SystemaliasCommand extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_systemalias_command";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemaliasCommand resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemaliasCommand to import
  * @param importFromId The id of the existing SystemaliasCommand that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemaliasCommand to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_systemalias_command", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemalias_command fortiswitch_systemalias_command} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemaliasCommandConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemaliasCommandConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_systemalias_command',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attribute = config.attribute;
    this._command = config.command;
    this._description = config.description;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._limitShownAttributes = config.limitShownAttributes;
    this._name = config.name;
    this._path = config.path;
    this._permission = config.permission;
    this._tableEntryCreate = config.tableEntryCreate;
    this._tableListing = config.tableListing;
    this._type = config.type;
    this._readOnlyAttributes.internalValue = config.readOnlyAttributes;
    this._scriptArguments.internalValue = config.scriptArguments;
    this._tableIdsAllowed.internalValue = config.tableIdsAllowed;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // command - computed: true, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // limit_shown_attributes - computed: true, optional: true, required: false
  private _limitShownAttributes?: string; 
  public get limitShownAttributes() {
    return this.getStringAttribute('limit_shown_attributes');
  }
  public set limitShownAttributes(value: string) {
    this._limitShownAttributes = value;
  }
  public resetLimitShownAttributes() {
    this._limitShownAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitShownAttributesInput() {
    return this._limitShownAttributes;
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // table_entry_create - computed: true, optional: true, required: false
  private _tableEntryCreate?: string; 
  public get tableEntryCreate() {
    return this.getStringAttribute('table_entry_create');
  }
  public set tableEntryCreate(value: string) {
    this._tableEntryCreate = value;
  }
  public resetTableEntryCreate() {
    this._tableEntryCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableEntryCreateInput() {
    return this._tableEntryCreate;
  }

  // table_listing - computed: true, optional: true, required: false
  private _tableListing?: string; 
  public get tableListing() {
    return this.getStringAttribute('table_listing');
  }
  public set tableListing(value: string) {
    this._tableListing = value;
  }
  public resetTableListing() {
    this._tableListing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableListingInput() {
    return this._tableListing;
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

  // read_only_attributes - computed: false, optional: true, required: false
  private _readOnlyAttributes = new SystemaliasCommandReadOnlyAttributesList(this, "read_only_attributes", false);
  public get readOnlyAttributes() {
    return this._readOnlyAttributes;
  }
  public putReadOnlyAttributes(value: SystemaliasCommandReadOnlyAttributes[] | cdktf.IResolvable) {
    this._readOnlyAttributes.internalValue = value;
  }
  public resetReadOnlyAttributes() {
    this._readOnlyAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyAttributesInput() {
    return this._readOnlyAttributes.internalValue;
  }

  // script_arguments - computed: false, optional: true, required: false
  private _scriptArguments = new SystemaliasCommandScriptArgumentsList(this, "script_arguments", false);
  public get scriptArguments() {
    return this._scriptArguments;
  }
  public putScriptArguments(value: SystemaliasCommandScriptArguments[] | cdktf.IResolvable) {
    this._scriptArguments.internalValue = value;
  }
  public resetScriptArguments() {
    this._scriptArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptArgumentsInput() {
    return this._scriptArguments.internalValue;
  }

  // table_ids_allowed - computed: false, optional: true, required: false
  private _tableIdsAllowed = new SystemaliasCommandTableIdsAllowedList(this, "table_ids_allowed", false);
  public get tableIdsAllowed() {
    return this._tableIdsAllowed;
  }
  public putTableIdsAllowed(value: SystemaliasCommandTableIdsAllowed[] | cdktf.IResolvable) {
    this._tableIdsAllowed.internalValue = value;
  }
  public resetTableIdsAllowed() {
    this._tableIdsAllowed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdsAllowedInput() {
    return this._tableIdsAllowed.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute: cdktf.stringToTerraform(this._attribute),
      command: cdktf.stringToTerraform(this._command),
      description: cdktf.stringToTerraform(this._description),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      limit_shown_attributes: cdktf.stringToTerraform(this._limitShownAttributes),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      permission: cdktf.stringToTerraform(this._permission),
      table_entry_create: cdktf.stringToTerraform(this._tableEntryCreate),
      table_listing: cdktf.stringToTerraform(this._tableListing),
      type: cdktf.stringToTerraform(this._type),
      read_only_attributes: cdktf.listMapper(systemaliasCommandReadOnlyAttributesToTerraform, true)(this._readOnlyAttributes.internalValue),
      script_arguments: cdktf.listMapper(systemaliasCommandScriptArgumentsToTerraform, true)(this._scriptArguments.internalValue),
      table_ids_allowed: cdktf.listMapper(systemaliasCommandTableIdsAllowedToTerraform, true)(this._tableIdsAllowed.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute: {
        value: cdktf.stringToHclTerraform(this._attribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      limit_shown_attributes: {
        value: cdktf.stringToHclTerraform(this._limitShownAttributes),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_entry_create: {
        value: cdktf.stringToHclTerraform(this._tableEntryCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_listing: {
        value: cdktf.stringToHclTerraform(this._tableListing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only_attributes: {
        value: cdktf.listMapperHcl(systemaliasCommandReadOnlyAttributesToHclTerraform, true)(this._readOnlyAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemaliasCommandReadOnlyAttributesList",
      },
      script_arguments: {
        value: cdktf.listMapperHcl(systemaliasCommandScriptArgumentsToHclTerraform, true)(this._scriptArguments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemaliasCommandScriptArgumentsList",
      },
      table_ids_allowed: {
        value: cdktf.listMapperHcl(systemaliasCommandTableIdsAllowedToHclTerraform, true)(this._tableIdsAllowed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemaliasCommandTableIdsAllowedList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
