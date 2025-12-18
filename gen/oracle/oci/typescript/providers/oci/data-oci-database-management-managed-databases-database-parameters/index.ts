// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters#id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameters#is_allowed_values_included}
  */
  readonly isAllowedValuesIncluded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#opc_named_credential_id}
  */
  readonly opcNamedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters#source DataOciDatabaseManagementManagedDatabasesDatabaseParameters#source}
  */
  readonly source?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters#filter DataOciDatabaseManagementManagedDatabasesDatabaseParameters#filter}
  */
  readonly filter?: DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues {
}

export function dataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesToTerraform(struct?: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues | undefined) {
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

export class DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference {
    return new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems {
}

export function dataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsToTerraform(struct?: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList(this, "allowed_values", false);
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

export class DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference {
    return new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection {
}

export function dataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionToTerraform(struct?: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference {
    return new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters#regex DataOciDatabaseManagementManagedDatabasesDatabaseParameters#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters#values DataOciDatabaseManagementManagedDatabasesDatabaseParameters#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterToTerraform(struct?: DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
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
      this._regex = value.regex;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference {
    return new DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters oci_database_management_managed_databases_database_parameters}
*/
export class DataOciDatabaseManagementManagedDatabasesDatabaseParameters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_databases_database_parameters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesDatabaseParameters to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabasesDatabaseParameters that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesDatabaseParameters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_databases_database_parameters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_databases_database_parameters oci_database_management_managed_databases_database_parameters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_databases_database_parameters',
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
    this._opcNamedCredentialId = config.opcNamedCredentialId;
    this._source = config.source;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_parameters_collection - computed: true, optional: false, required: false
  private _databaseParametersCollection = new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList(this, "database_parameters_collection", false);
  public get databaseParametersCollection() {
    return this._databaseParametersCollection;
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

  // opc_named_credential_id - computed: false, optional: true, required: false
  private _opcNamedCredentialId?: string; 
  public get opcNamedCredentialId() {
    return this.getStringAttribute('opc_named_credential_id');
  }
  public set opcNamedCredentialId(value: string) {
    this._opcNamedCredentialId = value;
  }
  public resetOpcNamedCredentialId() {
    this._opcNamedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcNamedCredentialIdInput() {
    return this._opcNamedCredentialId;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
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
      opc_named_credential_id: cdktf.stringToTerraform(this._opcNamedCredentialId),
      source: cdktf.stringToTerraform(this._source),
      filter: cdktf.listMapper(dataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterToTerraform, true)(this._filter.internalValue),
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
      opc_named_credential_id: {
        value: cdktf.stringToHclTerraform(this._opcNamedCredentialId),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
