// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFusionauthFormFieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines if the user input should be confirmed by requiring the value to be entered twice. If true, a confirmation field is included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#confirm DataFusionauthFormField#confirm}
  */
  readonly confirm?: boolean | cdktf.IResolvable;
  /**
  * The Id of an existing Consent. This field will be required when the type is set to consent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#consent_id DataFusionauthFormField#consent_id}
  */
  readonly consentId?: string;
  /**
  * The Form Field control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#control DataFusionauthFormField#control}
  */
  readonly control?: string;
  /**
  * An object that can hold any information about the Form Field that should be persisted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#data DataFusionauthFormField#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * A description of the Form Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#description DataFusionauthFormField#description}
  */
  readonly description?: string;
  /**
  * The Id to use for the new Form Field. If not specified a secure random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#form_field_id DataFusionauthFormField#form_field_id}
  */
  readonly formFieldId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#id DataFusionauthFormField#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The key is the path to the value in the user or registration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#key DataFusionauthFormField#key}
  */
  readonly key?: string;
  /**
  * The unique name of the Form Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#name DataFusionauthFormField#name}
  */
  readonly name?: string;
  /**
  * A list of options that are applied to checkbox, radio, or select controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#options DataFusionauthFormField#options}
  */
  readonly options?: string[];
  /**
  * Determines if a value is required to complete the form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#required DataFusionauthFormField#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The data type used to store the value in FusionAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#type DataFusionauthFormField#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#validator DataFusionauthFormField#validator}
  */
  readonly validator?: DataFusionauthFormFieldValidator[] | cdktf.IResolvable;
}
export interface DataFusionauthFormFieldValidator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#enabled DataFusionauthFormField#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#expression DataFusionauthFormField#expression}
  */
  readonly expression?: string;
}

export function dataFusionauthFormFieldValidatorToTerraform(struct?: DataFusionauthFormFieldValidator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function dataFusionauthFormFieldValidatorToHclTerraform(struct?: DataFusionauthFormFieldValidator | cdktf.IResolvable): any {
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
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionauthFormFieldValidatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFusionauthFormFieldValidator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionauthFormFieldValidator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._expression = value.expression;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class DataFusionauthFormFieldValidatorList extends cdktf.ComplexList {
  public internalValue? : DataFusionauthFormFieldValidator[] | cdktf.IResolvable

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
  public get(index: number): DataFusionauthFormFieldValidatorOutputReference {
    return new DataFusionauthFormFieldValidatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field fusionauth_form_field}
*/
export class DataFusionauthFormField extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_form_field";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFusionauthFormField resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFusionauthFormField to import
  * @param importFromId The id of the existing DataFusionauthFormField that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFusionauthFormField to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_form_field", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/form_field fusionauth_form_field} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFusionauthFormFieldConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFusionauthFormFieldConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_form_field',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._confirm = config.confirm;
    this._consentId = config.consentId;
    this._control = config.control;
    this._data = config.data;
    this._description = config.description;
    this._formFieldId = config.formFieldId;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._options = config.options;
    this._required = config.required;
    this._type = config.type;
    this._validator.internalValue = config.validator;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // confirm - computed: false, optional: true, required: false
  private _confirm?: boolean | cdktf.IResolvable; 
  public get confirm() {
    return this.getBooleanAttribute('confirm');
  }
  public set confirm(value: boolean | cdktf.IResolvable) {
    this._confirm = value;
  }
  public resetConfirm() {
    this._confirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmInput() {
    return this._confirm;
  }

  // consent_id - computed: false, optional: true, required: false
  private _consentId?: string; 
  public get consentId() {
    return this.getStringAttribute('consent_id');
  }
  public set consentId(value: string) {
    this._consentId = value;
  }
  public resetConsentId() {
    this._consentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentIdInput() {
    return this._consentId;
  }

  // control - computed: true, optional: true, required: false
  private _control?: string; 
  public get control() {
    return this.getStringAttribute('control');
  }
  public set control(value: string) {
    this._control = value;
  }
  public resetControl() {
    this._control = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlInput() {
    return this._control;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // form_field_id - computed: true, optional: true, required: false
  private _formFieldId?: string; 
  public get formFieldId() {
    return this.getStringAttribute('form_field_id');
  }
  public set formFieldId(value: string) {
    this._formFieldId = value;
  }
  public resetFormFieldId() {
    this._formFieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFieldIdInput() {
    return this._formFieldId;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

  // validator - computed: true, optional: true, required: false
  private _validator = new DataFusionauthFormFieldValidatorList(this, "validator", false);
  public get validator() {
    return this._validator;
  }
  public putValidator(value: DataFusionauthFormFieldValidator[] | cdktf.IResolvable) {
    this._validator.internalValue = value;
  }
  public resetValidator() {
    this._validator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatorInput() {
    return this._validator.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      confirm: cdktf.booleanToTerraform(this._confirm),
      consent_id: cdktf.stringToTerraform(this._consentId),
      control: cdktf.stringToTerraform(this._control),
      data: cdktf.hashMapper(cdktf.stringToTerraform)(this._data),
      description: cdktf.stringToTerraform(this._description),
      form_field_id: cdktf.stringToTerraform(this._formFieldId),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      required: cdktf.booleanToTerraform(this._required),
      type: cdktf.stringToTerraform(this._type),
      validator: cdktf.listMapper(dataFusionauthFormFieldValidatorToTerraform, false)(this._validator.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      confirm: {
        value: cdktf.booleanToHclTerraform(this._confirm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consent_id: {
        value: cdktf.stringToHclTerraform(this._consentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control: {
        value: cdktf.stringToHclTerraform(this._control),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._data),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      form_field_id: {
        value: cdktf.stringToHclTerraform(this._formFieldId),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._options),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      required: {
        value: cdktf.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validator: {
        value: cdktf.listMapperHcl(dataFusionauthFormFieldValidatorToHclTerraform, false)(this._validator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFusionauthFormFieldValidatorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
