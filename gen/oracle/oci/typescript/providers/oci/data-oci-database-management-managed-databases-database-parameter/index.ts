// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameter#id DataOciDatabaseManagementManagedDatabasesDatabaseParameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameter#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameter#is_allowed_values_included}
  */
  readonly isAllowedValuesIncluded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameter#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameter#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameter#name DataOciDatabaseManagementManagedDatabasesDatabaseParameter#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameter#source DataOciDatabaseManagementManagedDatabasesDatabaseParameter#source}
  */
  readonly source?: string;
}
export interface DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues {
}

export function dataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesToTerraform(struct?: DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // ordinal - computed: true, optional: false, required: false
  public get ordinal() {
    return this.getNumberAttribute('ordinal');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference {
    return new DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems {
}

export function dataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsToTerraform(struct?: DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // constraint - computed: true, optional: false, required: false
  public get constraint() {
    return this.getStringAttribute('constraint');
  }

  // container_id - computed: true, optional: false, required: false
  public get containerId() {
    return this.getNumberAttribute('container_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_value - computed: true, optional: false, required: false
  public get displayValue() {
    return this.getStringAttribute('display_value');
  }

  // is_adjusted - computed: true, optional: false, required: false
  public get isAdjusted() {
    return this.getBooleanAttribute('is_adjusted');
  }

  // is_basic - computed: true, optional: false, required: false
  public get isBasic() {
    return this.getBooleanAttribute('is_basic');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // is_deprecated - computed: true, optional: false, required: false
  public get isDeprecated() {
    return this.getBooleanAttribute('is_deprecated');
  }

  // is_instance_modifiable - computed: true, optional: false, required: false
  public get isInstanceModifiable() {
    return this.getBooleanAttribute('is_instance_modifiable');
  }

  // is_modified - computed: true, optional: false, required: false
  public get isModified() {
    return this.getStringAttribute('is_modified');
  }

  // is_pdb_modifiable - computed: true, optional: false, required: false
  public get isPdbModifiable() {
    return this.getBooleanAttribute('is_pdb_modifiable');
  }

  // is_session_modifiable - computed: true, optional: false, required: false
  public get isSessionModifiable() {
    return this.getBooleanAttribute('is_session_modifiable');
  }

  // is_specified - computed: true, optional: false, required: false
  public get isSpecified() {
    return this.getBooleanAttribute('is_specified');
  }

  // is_system_modifiable - computed: true, optional: false, required: false
  public get isSystemModifiable() {
    return this.getStringAttribute('is_system_modifiable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // ordinal - computed: true, optional: false, required: false
  public get ordinal() {
    return this.getNumberAttribute('ordinal');
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_comment - computed: true, optional: false, required: false
  public get updateComment() {
    return this.getStringAttribute('update_comment');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference {
    return new DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameter oci_database_management_managed_databases_database_parameter}
*/
export class DataOciDatabaseManagementManagedDatabasesDatabaseParameter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_databases_database_parameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesDatabaseParameter to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabasesDatabaseParameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesDatabaseParameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_databases_database_parameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameter oci_database_management_managed_databases_database_parameter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_databases_database_parameter',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._isAllowedValuesIncluded = config.isAllowedValuesIncluded;
    this._managedDatabaseId = config.managedDatabaseId;
    this._name = config.name;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_sub_type - computed: true, optional: false, required: false
  public get databaseSubType() {
    return this.getStringAttribute('database_sub_type');
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
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

  // is_allowed_values_included - computed: false, optional: true, required: false
  private _isAllowedValuesIncluded?: boolean | cdktf.IResolvable; 
  public get isAllowedValuesIncluded() {
    return this.getBooleanAttribute('is_allowed_values_included');
  }
  public set isAllowedValuesIncluded(value: boolean | cdktf.IResolvable) {
    this._isAllowedValuesIncluded = value;
  }
  public resetIsAllowedValuesIncluded() {
    this._isAllowedValuesIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAllowedValuesIncludedInput() {
    return this._isAllowedValuesIncluded;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // managed_database_id - computed: false, optional: false, required: true
  private _managedDatabaseId?: string; 
  public get managedDatabaseId() {
    return this.getStringAttribute('managed_database_id');
  }
  public set managedDatabaseId(value: string) {
    this._managedDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDatabaseIdInput() {
    return this._managedDatabaseId;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_allowed_values_included: cdktf.booleanToTerraform(this._isAllowedValuesIncluded),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      name: cdktf.stringToTerraform(this._name),
      source: cdktf.stringToTerraform(this._source),
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
      is_allowed_values_included: {
        value: cdktf.booleanToHclTerraform(this._isAllowedValuesIncluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      managed_database_id: {
        value: cdktf.stringToHclTerraform(this._managedDatabaseId),
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
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
