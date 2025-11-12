// https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoderParameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A default value for the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#default DataCoderParameter#default}
  */
  readonly default?: string;
  /**
  * Describe what this parameter does.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#description DataCoderParameter#description}
  */
  readonly description?: string;
  /**
  * The displayed name of the parameter as it will appear in the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#display_name DataCoderParameter#display_name}
  */
  readonly displayName?: string;
  /**
  * The value of an ephemeral parameter will not be preserved between consecutive workspace builds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#ephemeral DataCoderParameter#ephemeral}
  */
  readonly ephemeral?: boolean | cdktf.IResolvable;
  /**
  * The type of this parameter. Must be one of: `"radio"`, `"slider"`, `"input"`, `"dropdown"`, `"checkbox"`, `"switch"`, `"multi-select"`, `"tag-select"`, `"textarea"`, `"error"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#form_type DataCoderParameter#form_type}
  */
  readonly formType?: string;
  /**
  * A URL to an icon that will display in the dashboard. View built-in icons [here](https://github.com/coder/coder/tree/main/site/static/icon). Use a built-in icon with `"${data.coder_workspace.me.access_url}/icon/<path>"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#icon DataCoderParameter#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#id DataCoderParameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether this value can be changed after workspace creation. This can be destructive for values like region, so use with caution!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#mutable DataCoderParameter#mutable}
  */
  readonly mutable?: boolean | cdktf.IResolvable;
  /**
  * The name of the parameter. If this is changed, developers will be re-prompted for a new value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#name DataCoderParameter#name}
  */
  readonly name: string;
  /**
  * The order determines the position of a template parameter in the UI/CLI presentation. The lowest order is shown first and parameters with equal order are sorted by name (ascending order).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#order DataCoderParameter#order}
  */
  readonly order?: number;
  /**
  * JSON encoded string containing the metadata for controlling the appearance of this parameter in the UI. This option is purely cosmetic and does not affect the function of the parameter in terraform. See [styling options documentation](https://coder.com/docs/admin/templates/extending-templates/dynamic-parameters#available-styling-options) for available styling attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#styling DataCoderParameter#styling}
  */
  readonly styling?: string;
  /**
  * The type of this parameter. Must be one of: `"string"`, `"number"`, `"bool"`, `"list(string)"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#type DataCoderParameter#type}
  */
  readonly type?: string;
  /**
  * option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#option DataCoderParameter#option}
  */
  readonly option?: DataCoderParameterOption[] | cdktf.IResolvable;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#validation DataCoderParameter#validation}
  */
  readonly validation?: DataCoderParameterValidation;
}
export interface DataCoderParameterOption {
  /**
  * Describe what selecting this value does.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#description DataCoderParameter#description}
  */
  readonly description?: string;
  /**
  * A URL to an icon that will display in the dashboard. View built-in icons [here](https://github.com/coder/coder/tree/main/site/static/icon). Use a built-in icon with `"${data.coder_workspace.me.access_url}/icon/<path>"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#icon DataCoderParameter#icon}
  */
  readonly icon?: string;
  /**
  * The display name of this value in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#name DataCoderParameter#name}
  */
  readonly name: string;
  /**
  * The value of this option set on the parameter if selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#value DataCoderParameter#value}
  */
  readonly value: string;
}

export function dataCoderParameterOptionToTerraform(struct?: DataCoderParameterOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    icon: cdktf.stringToTerraform(struct!.icon),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataCoderParameterOptionToHclTerraform(struct?: DataCoderParameterOption | cdktf.IResolvable): any {
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
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
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

export class DataCoderParameterOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoderParameterOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
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

  public set internalValue(value: DataCoderParameterOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._icon = undefined;
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
      this._description = value.description;
      this._icon = value.icon;
      this._name = value.name;
      this._value = value.value;
    }
  }

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

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

export class DataCoderParameterOptionList extends cdktf.ComplexList {
  public internalValue? : DataCoderParameterOption[] | cdktf.IResolvable

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
  public get(index: number): DataCoderParameterOptionOutputReference {
    return new DataCoderParameterOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoderParameterValidation {
  /**
  * An error message to display if the value breaks the validation rules. The following placeholders are supported: `{max}`, `{min}`, and `{value}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#error DataCoderParameter#error}
  */
  readonly error?: string;
  /**
  * The maximum value of a number parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#max DataCoderParameter#max}
  */
  readonly max?: number;
  /**
  * The minimum value of a number parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#min DataCoderParameter#min}
  */
  readonly min?: number;
  /**
  * Number monotonicity, either increasing or decreasing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#monotonic DataCoderParameter#monotonic}
  */
  readonly monotonic?: string;
  /**
  * A regex for the input parameter to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#regex DataCoderParameter#regex}
  */
  readonly regex?: string;
}

export function dataCoderParameterValidationToTerraform(struct?: DataCoderParameterValidationOutputReference | DataCoderParameterValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error: cdktf.stringToTerraform(struct!.error),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    monotonic: cdktf.stringToTerraform(struct!.monotonic),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataCoderParameterValidationToHclTerraform(struct?: DataCoderParameterValidationOutputReference | DataCoderParameterValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error: {
      value: cdktf.stringToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monotonic: {
      value: cdktf.stringToHclTerraform(struct!.monotonic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCoderParameterValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCoderParameterValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._monotonic !== undefined) {
      hasAnyValues = true;
      internalValueResult.monotonic = this._monotonic;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoderParameterValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._error = undefined;
      this._max = undefined;
      this._min = undefined;
      this._monotonic = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._error = value.error;
      this._max = value.max;
      this._min = value.min;
      this._monotonic = value.monotonic;
      this._regex = value.regex;
    }
  }

  // error - computed: false, optional: true, required: false
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // max_disabled - computed: true, optional: false, required: false
  public get maxDisabled() {
    return this.getBooleanAttribute('max_disabled');
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // min_disabled - computed: true, optional: false, required: false
  public get minDisabled() {
    return this.getBooleanAttribute('min_disabled');
  }

  // monotonic - computed: false, optional: true, required: false
  private _monotonic?: string; 
  public get monotonic() {
    return this.getStringAttribute('monotonic');
  }
  public set monotonic(value: string) {
    this._monotonic = value;
  }
  public resetMonotonic() {
    this._monotonic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monotonicInput() {
    return this._monotonic;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter coder_parameter}
*/
export class DataCoderParameter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coder_parameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoderParameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoderParameter to import
  * @param importFromId The id of the existing DataCoderParameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoderParameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coder_parameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/parameter coder_parameter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoderParameterConfig
  */
  public constructor(scope: Construct, id: string, config: DataCoderParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'coder_parameter',
      terraformGeneratorMetadata: {
        providerName: 'coder',
        providerVersion: '2.13.1',
        providerVersionConstraint: '2.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._default = config.default;
    this._description = config.description;
    this._displayName = config.displayName;
    this._ephemeral = config.ephemeral;
    this._formType = config.formType;
    this._icon = config.icon;
    this._id = config.id;
    this._mutable = config.mutable;
    this._name = config.name;
    this._order = config.order;
    this._styling = config.styling;
    this._type = config.type;
    this._option.internalValue = config.option;
    this._validation.internalValue = config.validation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // ephemeral - computed: false, optional: true, required: false
  private _ephemeral?: boolean | cdktf.IResolvable; 
  public get ephemeral() {
    return this.getBooleanAttribute('ephemeral');
  }
  public set ephemeral(value: boolean | cdktf.IResolvable) {
    this._ephemeral = value;
  }
  public resetEphemeral() {
    this._ephemeral = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralInput() {
    return this._ephemeral;
  }

  // form_type - computed: false, optional: true, required: false
  private _formType?: string; 
  public get formType() {
    return this.getStringAttribute('form_type');
  }
  public set formType(value: string) {
    this._formType = value;
  }
  public resetFormType() {
    this._formType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formTypeInput() {
    return this._formType;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // mutable - computed: false, optional: true, required: false
  private _mutable?: boolean | cdktf.IResolvable; 
  public get mutable() {
    return this.getBooleanAttribute('mutable');
  }
  public set mutable(value: boolean | cdktf.IResolvable) {
    this._mutable = value;
  }
  public resetMutable() {
    this._mutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutableInput() {
    return this._mutable;
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

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // styling - computed: false, optional: true, required: false
  private _styling?: string; 
  public get styling() {
    return this.getStringAttribute('styling');
  }
  public set styling(value: string) {
    this._styling = value;
  }
  public resetStyling() {
    this._styling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stylingInput() {
    return this._styling;
  }

  // type - computed: false, optional: true, required: false
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // option - computed: false, optional: true, required: false
  private _option = new DataCoderParameterOptionList(this, "option", false);
  public get option() {
    return this._option;
  }
  public putOption(value: DataCoderParameterOption[] | cdktf.IResolvable) {
    this._option.internalValue = value;
  }
  public resetOption() {
    this._option.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option.internalValue;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new DataCoderParameterValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataCoderParameterValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.stringToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      ephemeral: cdktf.booleanToTerraform(this._ephemeral),
      form_type: cdktf.stringToTerraform(this._formType),
      icon: cdktf.stringToTerraform(this._icon),
      id: cdktf.stringToTerraform(this._id),
      mutable: cdktf.booleanToTerraform(this._mutable),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      styling: cdktf.stringToTerraform(this._styling),
      type: cdktf.stringToTerraform(this._type),
      option: cdktf.listMapper(dataCoderParameterOptionToTerraform, true)(this._option.internalValue),
      validation: dataCoderParameterValidationToTerraform(this._validation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.stringToHclTerraform(this._default),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ephemeral: {
        value: cdktf.booleanToHclTerraform(this._ephemeral),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      form_type: {
        value: cdktf.stringToHclTerraform(this._formType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
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
      mutable: {
        value: cdktf.booleanToHclTerraform(this._mutable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      styling: {
        value: cdktf.stringToHclTerraform(this._styling),
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
      option: {
        value: cdktf.listMapperHcl(dataCoderParameterOptionToHclTerraform, true)(this._option.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCoderParameterOptionList",
      },
      validation: {
        value: dataCoderParameterValidationToHclTerraform(this._validation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCoderParameterValidationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
