// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/end_user_my_requests
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndUserMyRequestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the catalog entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/end_user_my_requests#entry_id EndUserMyRequests#entry_id}
  */
  readonly entryId: string;
  /**
  * requester_field_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/end_user_my_requests#requester_field_values EndUserMyRequests#requester_field_values}
  */
  readonly requesterFieldValues?: EndUserMyRequestsRequesterFieldValues[] | cdktf.IResolvable;
}
export interface EndUserMyRequestsRequesterFieldValues {
  /**
  * The ID of a requesterField.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/end_user_my_requests#id EndUserMyRequests#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A human-readable description of requesterField. It's used for display purposes and is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/end_user_my_requests#label EndUserMyRequests#label}
  */
  readonly label?: string;
  /**
  * Type of value for the requester field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/end_user_my_requests#type EndUserMyRequests#type}
  */
  readonly type?: string;
  /**
  * The value of requesterField, which depends on the type of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/end_user_my_requests#value EndUserMyRequests#value}
  */
  readonly value?: string;
  /**
  * The values of requesterField with the type MULTISELECT.
  * If the field type is MULTISELECT, this property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/end_user_my_requests#values EndUserMyRequests#values}
  */
  readonly values?: string[];
}

export function endUserMyRequestsRequesterFieldValuesToTerraform(struct?: EndUserMyRequestsRequesterFieldValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function endUserMyRequestsRequesterFieldValuesToHclTerraform(struct?: EndUserMyRequestsRequesterFieldValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndUserMyRequestsRequesterFieldValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndUserMyRequestsRequesterFieldValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndUserMyRequestsRequesterFieldValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._label = undefined;
      this._type = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._label = value.label;
      this._type = value.type;
      this._value = value.value;
      this._values = value.values;
    }
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // value - computed: false, optional: true, required: false
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
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

export class EndUserMyRequestsRequesterFieldValuesList extends cdktf.ComplexList {
  public internalValue? : EndUserMyRequestsRequesterFieldValues[] | cdktf.IResolvable

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
  public get(index: number): EndUserMyRequestsRequesterFieldValuesOutputReference {
    return new EndUserMyRequestsRequesterFieldValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/end_user_my_requests okta_end_user_my_requests}
*/
export class EndUserMyRequests extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_end_user_my_requests";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndUserMyRequests resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndUserMyRequests to import
  * @param importFromId The id of the existing EndUserMyRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/end_user_my_requests#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndUserMyRequests to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_end_user_my_requests", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/end_user_my_requests okta_end_user_my_requests} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndUserMyRequestsConfig
  */
  public constructor(scope: Construct, id: string, config: EndUserMyRequestsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_end_user_my_requests',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entryId = config.entryId;
    this._requesterFieldValues.internalValue = config.requesterFieldValues;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entry_id - computed: false, optional: false, required: true
  private _entryId?: string; 
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }
  public set entryId(value: string) {
    this._entryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryIdInput() {
    return this._entryId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // requester_field_values - computed: false, optional: true, required: false
  private _requesterFieldValues = new EndUserMyRequestsRequesterFieldValuesList(this, "requester_field_values", false);
  public get requesterFieldValues() {
    return this._requesterFieldValues;
  }
  public putRequesterFieldValues(value: EndUserMyRequestsRequesterFieldValues[] | cdktf.IResolvable) {
    this._requesterFieldValues.internalValue = value;
  }
  public resetRequesterFieldValues() {
    this._requesterFieldValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterFieldValuesInput() {
    return this._requesterFieldValues.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entry_id: cdktf.stringToTerraform(this._entryId),
      requester_field_values: cdktf.listMapper(endUserMyRequestsRequesterFieldValuesToTerraform, true)(this._requesterFieldValues.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entry_id: {
        value: cdktf.stringToHclTerraform(this._entryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requester_field_values: {
        value: cdktf.listMapperHcl(endUserMyRequestsRequesterFieldValuesToHclTerraform, true)(this._requesterFieldValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndUserMyRequestsRequesterFieldValuesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
