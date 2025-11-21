// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseBackupDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#compartment_id DatabaseBackupDestination#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#connection_string DatabaseBackupDestination#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#defined_tags DatabaseBackupDestination#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#display_name DatabaseBackupDestination#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#freeform_tags DatabaseBackupDestination#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#id DatabaseBackupDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#local_mount_point_path DatabaseBackupDestination#local_mount_point_path}
  */
  readonly localMountPointPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#type DatabaseBackupDestination#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#vpc_users DatabaseBackupDestination#vpc_users}
  */
  readonly vpcUsers?: string[];
  /**
  * mount_type_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#mount_type_details DatabaseBackupDestination#mount_type_details}
  */
  readonly mountTypeDetails?: DatabaseBackupDestinationMountTypeDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#timeouts DatabaseBackupDestination#timeouts}
  */
  readonly timeouts?: DatabaseBackupDestinationTimeouts;
}
export interface DatabaseBackupDestinationAssociatedDatabases {
}

export function databaseBackupDestinationAssociatedDatabasesToTerraform(struct?: DatabaseBackupDestinationAssociatedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseBackupDestinationAssociatedDatabasesToHclTerraform(struct?: DatabaseBackupDestinationAssociatedDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseBackupDestinationAssociatedDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseBackupDestinationAssociatedDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseBackupDestinationAssociatedDatabases | undefined) {
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

export class DatabaseBackupDestinationAssociatedDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseBackupDestinationAssociatedDatabasesOutputReference {
    return new DatabaseBackupDestinationAssociatedDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseBackupDestinationAssociatedLongTermBackups {
}

export function databaseBackupDestinationAssociatedLongTermBackupsToTerraform(struct?: DatabaseBackupDestinationAssociatedLongTermBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseBackupDestinationAssociatedLongTermBackupsToHclTerraform(struct?: DatabaseBackupDestinationAssociatedLongTermBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseBackupDestinationAssociatedLongTermBackupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseBackupDestinationAssociatedLongTermBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseBackupDestinationAssociatedLongTermBackups | undefined) {
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

export class DatabaseBackupDestinationAssociatedLongTermBackupsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseBackupDestinationAssociatedLongTermBackupsOutputReference {
    return new DatabaseBackupDestinationAssociatedLongTermBackupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseBackupDestinationMountTypeDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#local_mount_point_path DatabaseBackupDestination#local_mount_point_path}
  */
  readonly localMountPointPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#mount_type DatabaseBackupDestination#mount_type}
  */
  readonly mountType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#nfs_server DatabaseBackupDestination#nfs_server}
  */
  readonly nfsServer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#nfs_server_export DatabaseBackupDestination#nfs_server_export}
  */
  readonly nfsServerExport?: string;
}

export function databaseBackupDestinationMountTypeDetailsToTerraform(struct?: DatabaseBackupDestinationMountTypeDetailsOutputReference | DatabaseBackupDestinationMountTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_mount_point_path: cdktf.stringToTerraform(struct!.localMountPointPath),
    mount_type: cdktf.stringToTerraform(struct!.mountType),
    nfs_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nfsServer),
    nfs_server_export: cdktf.stringToTerraform(struct!.nfsServerExport),
  }
}


export function databaseBackupDestinationMountTypeDetailsToHclTerraform(struct?: DatabaseBackupDestinationMountTypeDetailsOutputReference | DatabaseBackupDestinationMountTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_mount_point_path: {
      value: cdktf.stringToHclTerraform(struct!.localMountPointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_type: {
      value: cdktf.stringToHclTerraform(struct!.mountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nfsServer),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nfs_server_export: {
      value: cdktf.stringToHclTerraform(struct!.nfsServerExport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseBackupDestinationMountTypeDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseBackupDestinationMountTypeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localMountPointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMountPointPath = this._localMountPointPath;
    }
    if (this._mountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountType = this._mountType;
    }
    if (this._nfsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsServer = this._nfsServer;
    }
    if (this._nfsServerExport !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsServerExport = this._nfsServerExport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseBackupDestinationMountTypeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localMountPointPath = undefined;
      this._mountType = undefined;
      this._nfsServer = undefined;
      this._nfsServerExport = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localMountPointPath = value.localMountPointPath;
      this._mountType = value.mountType;
      this._nfsServer = value.nfsServer;
      this._nfsServerExport = value.nfsServerExport;
    }
  }

  // local_mount_point_path - computed: true, optional: true, required: false
  private _localMountPointPath?: string; 
  public get localMountPointPath() {
    return this.getStringAttribute('local_mount_point_path');
  }
  public set localMountPointPath(value: string) {
    this._localMountPointPath = value;
  }
  public resetLocalMountPointPath() {
    this._localMountPointPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountPointPathInput() {
    return this._localMountPointPath;
  }

  // mount_type - computed: false, optional: false, required: true
  private _mountType?: string; 
  public get mountType() {
    return this.getStringAttribute('mount_type');
  }
  public set mountType(value: string) {
    this._mountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTypeInput() {
    return this._mountType;
  }

  // nfs_server - computed: true, optional: true, required: false
  private _nfsServer?: string[]; 
  public get nfsServer() {
    return this.getListAttribute('nfs_server');
  }
  public set nfsServer(value: string[]) {
    this._nfsServer = value;
  }
  public resetNfsServer() {
    this._nfsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsServerInput() {
    return this._nfsServer;
  }

  // nfs_server_export - computed: true, optional: true, required: false
  private _nfsServerExport?: string; 
  public get nfsServerExport() {
    return this.getStringAttribute('nfs_server_export');
  }
  public set nfsServerExport(value: string) {
    this._nfsServerExport = value;
  }
  public resetNfsServerExport() {
    this._nfsServerExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsServerExportInput() {
    return this._nfsServerExport;
  }
}
export interface DatabaseBackupDestinationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#create DatabaseBackupDestination#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#delete DatabaseBackupDestination#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#update DatabaseBackupDestination#update}
  */
  readonly update?: string;
}

export function databaseBackupDestinationTimeoutsToTerraform(struct?: DatabaseBackupDestinationTimeouts | cdktf.IResolvable): any {
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


export function databaseBackupDestinationTimeoutsToHclTerraform(struct?: DatabaseBackupDestinationTimeouts | cdktf.IResolvable): any {
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

export class DatabaseBackupDestinationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseBackupDestinationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseBackupDestinationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination oci_database_backup_destination}
*/
export class DatabaseBackupDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_backup_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseBackupDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseBackupDestination to import
  * @param importFromId The id of the existing DatabaseBackupDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseBackupDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_backup_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_backup_destination oci_database_backup_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseBackupDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseBackupDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_backup_destination',
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
    this._connectionString = config.connectionString;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._localMountPointPath = config.localMountPointPath;
    this._type = config.type;
    this._vpcUsers = config.vpcUsers;
    this._mountTypeDetails.internalValue = config.mountTypeDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_databases - computed: true, optional: false, required: false
  private _associatedDatabases = new DatabaseBackupDestinationAssociatedDatabasesList(this, "associated_databases", false);
  public get associatedDatabases() {
    return this._associatedDatabases;
  }

  // associated_long_term_backup_count - computed: true, optional: false, required: false
  public get associatedLongTermBackupCount() {
    return this.getNumberAttribute('associated_long_term_backup_count');
  }

  // associated_long_term_backups - computed: true, optional: false, required: false
  private _associatedLongTermBackups = new DatabaseBackupDestinationAssociatedLongTermBackupsList(this, "associated_long_term_backups", false);
  public get associatedLongTermBackups() {
    return this._associatedLongTermBackups;
  }

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

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // local_mount_point_path - computed: true, optional: true, required: false
  private _localMountPointPath?: string; 
  public get localMountPointPath() {
    return this.getStringAttribute('local_mount_point_path');
  }
  public set localMountPointPath(value: string) {
    this._localMountPointPath = value;
  }
  public resetLocalMountPointPath() {
    this._localMountPointPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountPointPathInput() {
    return this._localMountPointPath;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // utilized_storage_size_in_gbs - computed: true, optional: false, required: false
  public get utilizedStorageSizeInGbs() {
    return this.getNumberAttribute('utilized_storage_size_in_gbs');
  }

  // vpc_users - computed: false, optional: true, required: false
  private _vpcUsers?: string[]; 
  public get vpcUsers() {
    return this.getListAttribute('vpc_users');
  }
  public set vpcUsers(value: string[]) {
    this._vpcUsers = value;
  }
  public resetVpcUsers() {
    this._vpcUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcUsersInput() {
    return this._vpcUsers;
  }

  // mount_type_details - computed: false, optional: true, required: false
  private _mountTypeDetails = new DatabaseBackupDestinationMountTypeDetailsOutputReference(this, "mount_type_details");
  public get mountTypeDetails() {
    return this._mountTypeDetails;
  }
  public putMountTypeDetails(value: DatabaseBackupDestinationMountTypeDetails) {
    this._mountTypeDetails.internalValue = value;
  }
  public resetMountTypeDetails() {
    this._mountTypeDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTypeDetailsInput() {
    return this._mountTypeDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseBackupDestinationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseBackupDestinationTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      connection_string: cdktf.stringToTerraform(this._connectionString),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      local_mount_point_path: cdktf.stringToTerraform(this._localMountPointPath),
      type: cdktf.stringToTerraform(this._type),
      vpc_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcUsers),
      mount_type_details: databaseBackupDestinationMountTypeDetailsToTerraform(this._mountTypeDetails.internalValue),
      timeouts: databaseBackupDestinationTimeoutsToTerraform(this._timeouts.internalValue),
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
      connection_string: {
        value: cdktf.stringToHclTerraform(this._connectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_mount_point_path: {
        value: cdktf.stringToHclTerraform(this._localMountPointPath),
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
      vpc_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mount_type_details: {
        value: databaseBackupDestinationMountTypeDetailsToHclTerraform(this._mountTypeDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseBackupDestinationMountTypeDetailsList",
      },
      timeouts: {
        value: databaseBackupDestinationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseBackupDestinationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
