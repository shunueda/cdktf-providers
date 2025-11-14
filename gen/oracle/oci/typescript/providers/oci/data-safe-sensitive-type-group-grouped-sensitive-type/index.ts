// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeSensitiveTypeGroupGroupedSensitiveTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type#id DataSafeSensitiveTypeGroupGroupedSensitiveType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type#sensitive_type_group_id DataSafeSensitiveTypeGroupGroupedSensitiveType#sensitive_type_group_id}
  */
  readonly sensitiveTypeGroupId: string;
  /**
  * patch_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type#patch_operations DataSafeSensitiveTypeGroupGroupedSensitiveType#patch_operations}
  */
  readonly patchOperations?: DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperations[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type#timeouts DataSafeSensitiveTypeGroupGroupedSensitiveType#timeouts}
  */
  readonly timeouts?: DataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeouts;
}
export interface DataSafeSensitiveTypeGroupGroupedSensitiveTypeItems {
}

export function dataSafeSensitiveTypeGroupGroupedSensitiveTypeItemsToTerraform(struct?: DataSafeSensitiveTypeGroupGroupedSensitiveTypeItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeSensitiveTypeGroupGroupedSensitiveTypeItemsToHclTerraform(struct?: DataSafeSensitiveTypeGroupGroupedSensitiveTypeItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeSensitiveTypeGroupGroupedSensitiveTypeItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSafeSensitiveTypeGroupGroupedSensitiveTypeItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSensitiveTypeGroupGroupedSensitiveTypeItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sensitive_type_id - computed: true, optional: false, required: false
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }
}

export class DataSafeSensitiveTypeGroupGroupedSensitiveTypeItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeSensitiveTypeGroupGroupedSensitiveTypeItemsOutputReference {
    return new DataSafeSensitiveTypeGroupGroupedSensitiveTypeItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type#operation DataSafeSensitiveTypeGroupGroupedSensitiveType#operation}
  */
  readonly operation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type#selection DataSafeSensitiveTypeGroupGroupedSensitiveType#selection}
  */
  readonly selection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type#value DataSafeSensitiveTypeGroupGroupedSensitiveType#value}
  */
  readonly value: { [key: string]: string };
}

export function dataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperationsToTerraform(struct?: DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    selection: cdktf.stringToTerraform(struct!.selection),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperationsToHclTerraform(struct?: DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection: {
      value: cdktf.stringToHclTerraform(struct!.selection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._selection !== undefined) {
      hasAnyValues = true;
      internalValueResult.selection = this._selection;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._selection = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._selection = value.selection;
      this._value = value.value;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // selection - computed: false, optional: false, required: true
  private _selection?: string; 
  public get selection() {
    return this.getStringAttribute('selection');
  }
  public set selection(value: string) {
    this._selection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInput() {
    return this._selection;
  }

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperationsList extends cdktf.ComplexList {
  public internalValue? : DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperations[] | cdktf.IResolvable

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
  public get(index: number): DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperationsOutputReference {
    return new DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type#create DataSafeSensitiveTypeGroupGroupedSensitiveType#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type#delete DataSafeSensitiveTypeGroupGroupedSensitiveType#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type#update DataSafeSensitiveTypeGroupGroupedSensitiveType#update}
  */
  readonly update?: string;
}

export function dataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeoutsToTerraform(struct?: DataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeoutsToHclTerraform(struct?: DataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type oci_data_safe_sensitive_type_group_grouped_sensitive_type}
*/
export class DataSafeSensitiveTypeGroupGroupedSensitiveType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sensitive_type_group_grouped_sensitive_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeSensitiveTypeGroupGroupedSensitiveType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeSensitiveTypeGroupGroupedSensitiveType to import
  * @param importFromId The id of the existing DataSafeSensitiveTypeGroupGroupedSensitiveType that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeSensitiveTypeGroupGroupedSensitiveType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sensitive_type_group_grouped_sensitive_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_sensitive_type_group_grouped_sensitive_type oci_data_safe_sensitive_type_group_grouped_sensitive_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeSensitiveTypeGroupGroupedSensitiveTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeSensitiveTypeGroupGroupedSensitiveTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sensitive_type_group_grouped_sensitive_type',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._sensitiveTypeGroupId = config.sensitiveTypeGroupId;
    this._patchOperations.internalValue = config.patchOperations;
    this._timeouts.internalValue = config.timeouts;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataSafeSensitiveTypeGroupGroupedSensitiveTypeItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // sensitive_type_group_id - computed: false, optional: false, required: true
  private _sensitiveTypeGroupId?: string; 
  public get sensitiveTypeGroupId() {
    return this.getStringAttribute('sensitive_type_group_id');
  }
  public set sensitiveTypeGroupId(value: string) {
    this._sensitiveTypeGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTypeGroupIdInput() {
    return this._sensitiveTypeGroupId;
  }

  // patch_operations - computed: false, optional: true, required: false
  private _patchOperations = new DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperationsList(this, "patch_operations", false);
  public get patchOperations() {
    return this._patchOperations;
  }
  public putPatchOperations(value: DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperations[] | cdktf.IResolvable) {
    this._patchOperations.internalValue = value;
  }
  public resetPatchOperations() {
    this._patchOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchOperationsInput() {
    return this._patchOperations.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      sensitive_type_group_id: cdktf.stringToTerraform(this._sensitiveTypeGroupId),
      patch_operations: cdktf.listMapper(dataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperationsToTerraform, true)(this._patchOperations.internalValue),
      timeouts: dataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeoutsToTerraform(this._timeouts.internalValue),
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
      sensitive_type_group_id: {
        value: cdktf.stringToHclTerraform(this._sensitiveTypeGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patch_operations: {
        value: cdktf.listMapperHcl(dataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperationsToHclTerraform, true)(this._patchOperations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeSensitiveTypeGroupGroupedSensitiveTypePatchOperationsList",
      },
      timeouts: {
        value: dataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeSensitiveTypeGroupGroupedSensitiveTypeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
