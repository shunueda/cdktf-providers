// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseDbVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions#compartment_id DataOciDatabaseDbVersions#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions#db_system_id DataOciDatabaseDbVersions#db_system_id}
  */
  readonly dbSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions#db_system_shape DataOciDatabaseDbVersions#db_system_shape}
  */
  readonly dbSystemShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions#id DataOciDatabaseDbVersions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions#is_database_software_image_supported DataOciDatabaseDbVersions#is_database_software_image_supported}
  */
  readonly isDatabaseSoftwareImageSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions#is_upgrade_supported DataOciDatabaseDbVersions#is_upgrade_supported}
  */
  readonly isUpgradeSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions#shape_attribute DataOciDatabaseDbVersions#shape_attribute}
  */
  readonly shapeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions#storage_management DataOciDatabaseDbVersions#storage_management}
  */
  readonly storageManagement?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions#filter DataOciDatabaseDbVersions#filter}
  */
  readonly filter?: DataOciDatabaseDbVersionsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseDbVersionsDbVersions {
}

export function dataOciDatabaseDbVersionsDbVersionsToTerraform(struct?: DataOciDatabaseDbVersionsDbVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseDbVersionsDbVersionsToHclTerraform(struct?: DataOciDatabaseDbVersionsDbVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseDbVersionsDbVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseDbVersionsDbVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseDbVersionsDbVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_latest_for_major_version - computed: true, optional: false, required: false
  public get isLatestForMajorVersion() {
    return this.getBooleanAttribute('is_latest_for_major_version');
  }

  // is_preview_db_version - computed: true, optional: false, required: false
  public get isPreviewDbVersion() {
    return this.getBooleanAttribute('is_preview_db_version');
  }

  // is_upgrade_supported - computed: true, optional: false, required: false
  public get isUpgradeSupported() {
    return this.getBooleanAttribute('is_upgrade_supported');
  }

  // supports_pdb - computed: true, optional: false, required: false
  public get supportsPdb() {
    return this.getBooleanAttribute('supports_pdb');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciDatabaseDbVersionsDbVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseDbVersionsDbVersionsOutputReference {
    return new DataOciDatabaseDbVersionsDbVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseDbVersionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions#name DataOciDatabaseDbVersions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions#regex DataOciDatabaseDbVersions#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions#values DataOciDatabaseDbVersions#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseDbVersionsFilterToTerraform(struct?: DataOciDatabaseDbVersionsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseDbVersionsFilterToHclTerraform(struct?: DataOciDatabaseDbVersionsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseDbVersionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseDbVersionsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseDbVersionsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseDbVersionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseDbVersionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseDbVersionsFilterOutputReference {
    return new DataOciDatabaseDbVersionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions oci_database_db_versions}
*/
export class DataOciDatabaseDbVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_db_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseDbVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseDbVersions to import
  * @param importFromId The id of the existing DataOciDatabaseDbVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseDbVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_db_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_db_versions oci_database_db_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseDbVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_versions',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._dbSystemId = config.dbSystemId;
    this._dbSystemShape = config.dbSystemShape;
    this._id = config.id;
    this._isDatabaseSoftwareImageSupported = config.isDatabaseSoftwareImageSupported;
    this._isUpgradeSupported = config.isUpgradeSupported;
    this._shapeAttribute = config.shapeAttribute;
    this._storageManagement = config.storageManagement;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // db_system_id - computed: false, optional: true, required: false
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  public resetDbSystemId() {
    this._dbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // db_system_shape - computed: false, optional: true, required: false
  private _dbSystemShape?: string; 
  public get dbSystemShape() {
    return this.getStringAttribute('db_system_shape');
  }
  public set dbSystemShape(value: string) {
    this._dbSystemShape = value;
  }
  public resetDbSystemShape() {
    this._dbSystemShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemShapeInput() {
    return this._dbSystemShape;
  }

  // db_versions - computed: true, optional: false, required: false
  private _dbVersions = new DataOciDatabaseDbVersionsDbVersionsList(this, "db_versions", false);
  public get dbVersions() {
    return this._dbVersions;
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

  // is_database_software_image_supported - computed: false, optional: true, required: false
  private _isDatabaseSoftwareImageSupported?: boolean | cdktf.IResolvable; 
  public get isDatabaseSoftwareImageSupported() {
    return this.getBooleanAttribute('is_database_software_image_supported');
  }
  public set isDatabaseSoftwareImageSupported(value: boolean | cdktf.IResolvable) {
    this._isDatabaseSoftwareImageSupported = value;
  }
  public resetIsDatabaseSoftwareImageSupported() {
    this._isDatabaseSoftwareImageSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDatabaseSoftwareImageSupportedInput() {
    return this._isDatabaseSoftwareImageSupported;
  }

  // is_upgrade_supported - computed: false, optional: true, required: false
  private _isUpgradeSupported?: boolean | cdktf.IResolvable; 
  public get isUpgradeSupported() {
    return this.getBooleanAttribute('is_upgrade_supported');
  }
  public set isUpgradeSupported(value: boolean | cdktf.IResolvable) {
    this._isUpgradeSupported = value;
  }
  public resetIsUpgradeSupported() {
    this._isUpgradeSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpgradeSupportedInput() {
    return this._isUpgradeSupported;
  }

  // shape_attribute - computed: false, optional: true, required: false
  private _shapeAttribute?: string; 
  public get shapeAttribute() {
    return this.getStringAttribute('shape_attribute');
  }
  public set shapeAttribute(value: string) {
    this._shapeAttribute = value;
  }
  public resetShapeAttribute() {
    this._shapeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeAttributeInput() {
    return this._shapeAttribute;
  }

  // storage_management - computed: false, optional: true, required: false
  private _storageManagement?: string; 
  public get storageManagement() {
    return this.getStringAttribute('storage_management');
  }
  public set storageManagement(value: string) {
    this._storageManagement = value;
  }
  public resetStorageManagement() {
    this._storageManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageManagementInput() {
    return this._storageManagement;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseDbVersionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseDbVersionsFilter[] | cdktf.IResolvable) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      db_system_id: cdktf.stringToTerraform(this._dbSystemId),
      db_system_shape: cdktf.stringToTerraform(this._dbSystemShape),
      id: cdktf.stringToTerraform(this._id),
      is_database_software_image_supported: cdktf.booleanToTerraform(this._isDatabaseSoftwareImageSupported),
      is_upgrade_supported: cdktf.booleanToTerraform(this._isUpgradeSupported),
      shape_attribute: cdktf.stringToTerraform(this._shapeAttribute),
      storage_management: cdktf.stringToTerraform(this._storageManagement),
      filter: cdktf.listMapper(dataOciDatabaseDbVersionsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_system_id: {
        value: cdktf.stringToHclTerraform(this._dbSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_system_shape: {
        value: cdktf.stringToHclTerraform(this._dbSystemShape),
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
      is_database_software_image_supported: {
        value: cdktf.booleanToHclTerraform(this._isDatabaseSoftwareImageSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_upgrade_supported: {
        value: cdktf.booleanToHclTerraform(this._isUpgradeSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shape_attribute: {
        value: cdktf.stringToHclTerraform(this._shapeAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_management: {
        value: cdktf.stringToHclTerraform(this._storageManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseDbVersionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseDbVersionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
