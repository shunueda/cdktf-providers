// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_backup_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseBackupDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_backup_destination#backup_destination_id DataOciDatabaseBackupDestination#backup_destination_id}
  */
  readonly backupDestinationId: string;
}
export interface DataOciDatabaseBackupDestinationAssociatedDatabases {
}

export function dataOciDatabaseBackupDestinationAssociatedDatabasesToTerraform(struct?: DataOciDatabaseBackupDestinationAssociatedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseBackupDestinationAssociatedDatabasesToHclTerraform(struct?: DataOciDatabaseBackupDestinationAssociatedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseBackupDestinationAssociatedDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseBackupDestinationAssociatedDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseBackupDestinationAssociatedDatabases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciDatabaseBackupDestinationAssociatedDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseBackupDestinationAssociatedDatabasesOutputReference {
    return new DataOciDatabaseBackupDestinationAssociatedDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseBackupDestinationAssociatedLongTermBackups {
}

export function dataOciDatabaseBackupDestinationAssociatedLongTermBackupsToTerraform(struct?: DataOciDatabaseBackupDestinationAssociatedLongTermBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseBackupDestinationAssociatedLongTermBackupsToHclTerraform(struct?: DataOciDatabaseBackupDestinationAssociatedLongTermBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseBackupDestinationAssociatedLongTermBackupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseBackupDestinationAssociatedLongTermBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseBackupDestinationAssociatedLongTermBackups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciDatabaseBackupDestinationAssociatedLongTermBackupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseBackupDestinationAssociatedLongTermBackupsOutputReference {
    return new DataOciDatabaseBackupDestinationAssociatedLongTermBackupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseBackupDestinationMountTypeDetails {
}

export function dataOciDatabaseBackupDestinationMountTypeDetailsToTerraform(struct?: DataOciDatabaseBackupDestinationMountTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseBackupDestinationMountTypeDetailsToHclTerraform(struct?: DataOciDatabaseBackupDestinationMountTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseBackupDestinationMountTypeDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseBackupDestinationMountTypeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseBackupDestinationMountTypeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_mount_point_path - computed: true, optional: false, required: false
  public get localMountPointPath() {
    return this.getStringAttribute('local_mount_point_path');
  }

  // mount_type - computed: true, optional: false, required: false
  public get mountType() {
    return this.getStringAttribute('mount_type');
  }

  // nfs_server - computed: true, optional: false, required: false
  public get nfsServer() {
    return this.getListAttribute('nfs_server');
  }

  // nfs_server_export - computed: true, optional: false, required: false
  public get nfsServerExport() {
    return this.getStringAttribute('nfs_server_export');
  }
}

export class DataOciDatabaseBackupDestinationMountTypeDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseBackupDestinationMountTypeDetailsOutputReference {
    return new DataOciDatabaseBackupDestinationMountTypeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_backup_destination oci_database_backup_destination}
*/
export class DataOciDatabaseBackupDestination extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_backup_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseBackupDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseBackupDestination to import
  * @param importFromId The id of the existing DataOciDatabaseBackupDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_backup_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseBackupDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_backup_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_backup_destination oci_database_backup_destination} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseBackupDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseBackupDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_backup_destination',
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
    this._backupDestinationId = config.backupDestinationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_databases - computed: true, optional: false, required: false
  private _associatedDatabases = new DataOciDatabaseBackupDestinationAssociatedDatabasesList(this, "associated_databases", false);
  public get associatedDatabases() {
    return this._associatedDatabases;
  }

  // associated_long_term_backup_count - computed: true, optional: false, required: false
  public get associatedLongTermBackupCount() {
    return this.getNumberAttribute('associated_long_term_backup_count');
  }

  // associated_long_term_backups - computed: true, optional: false, required: false
  private _associatedLongTermBackups = new DataOciDatabaseBackupDestinationAssociatedLongTermBackupsList(this, "associated_long_term_backups", false);
  public get associatedLongTermBackups() {
    return this._associatedLongTermBackups;
  }

  // backup_destination_id - computed: false, optional: false, required: true
  private _backupDestinationId?: string; 
  public get backupDestinationId() {
    return this.getStringAttribute('backup_destination_id');
  }
  public set backupDestinationId(value: string) {
    this._backupDestinationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDestinationIdInput() {
    return this._backupDestinationId;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // local_mount_point_path - computed: true, optional: false, required: false
  public get localMountPointPath() {
    return this.getStringAttribute('local_mount_point_path');
  }

  // mount_type_details - computed: true, optional: false, required: false
  private _mountTypeDetails = new DataOciDatabaseBackupDestinationMountTypeDetailsList(this, "mount_type_details", false);
  public get mountTypeDetails() {
    return this._mountTypeDetails;
  }

  // nfs_mount_type - computed: true, optional: false, required: false
  public get nfsMountType() {
    return this.getStringAttribute('nfs_mount_type');
  }

  // nfs_server - computed: true, optional: false, required: false
  public get nfsServer() {
    return this.getListAttribute('nfs_server');
  }

  // nfs_server_export - computed: true, optional: false, required: false
  public get nfsServerExport() {
    return this.getStringAttribute('nfs_server_export');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_at_which_storage_details_are_updated - computed: true, optional: false, required: false
  public get timeAtWhichStorageDetailsAreUpdated() {
    return this.getStringAttribute('time_at_which_storage_details_are_updated');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // total_storage_size_in_gbs - computed: true, optional: false, required: false
  public get totalStorageSizeInGbs() {
    return this.getNumberAttribute('total_storage_size_in_gbs');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // utilized_storage_size_in_gbs - computed: true, optional: false, required: false
  public get utilizedStorageSizeInGbs() {
    return this.getNumberAttribute('utilized_storage_size_in_gbs');
  }

  // vpc_users - computed: true, optional: false, required: false
  public get vpcUsers() {
    return this.getListAttribute('vpc_users');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_destination_id: cdktf.stringToTerraform(this._backupDestinationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_destination_id: {
        value: cdktf.stringToHclTerraform(this._backupDestinationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
