// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabasePluggableDatabasesRemoteCloneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone#cloned_pdb_name DatabasePluggableDatabasesRemoteClone#cloned_pdb_name}
  */
  readonly clonedPdbName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone#id DatabasePluggableDatabasesRemoteClone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone#pdb_admin_password DatabasePluggableDatabasesRemoteClone#pdb_admin_password}
  */
  readonly pdbAdminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone#pluggable_database_id DatabasePluggableDatabasesRemoteClone#pluggable_database_id}
  */
  readonly pluggableDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone#should_pdb_admin_account_be_locked DatabasePluggableDatabasesRemoteClone#should_pdb_admin_account_be_locked}
  */
  readonly shouldPdbAdminAccountBeLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone#source_container_db_admin_password DatabasePluggableDatabasesRemoteClone#source_container_db_admin_password}
  */
  readonly sourceContainerDbAdminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone#target_container_database_id DatabasePluggableDatabasesRemoteClone#target_container_database_id}
  */
  readonly targetContainerDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone#target_tde_wallet_password DatabasePluggableDatabasesRemoteClone#target_tde_wallet_password}
  */
  readonly targetTdeWalletPassword?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone#timeouts DatabasePluggableDatabasesRemoteClone#timeouts}
  */
  readonly timeouts?: DatabasePluggableDatabasesRemoteCloneTimeouts;
}
export interface DatabasePluggableDatabasesRemoteCloneConnectionStrings {
}

export function databasePluggableDatabasesRemoteCloneConnectionStringsToTerraform(struct?: DatabasePluggableDatabasesRemoteCloneConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databasePluggableDatabasesRemoteCloneConnectionStringsToHclTerraform(struct?: DatabasePluggableDatabasesRemoteCloneConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabasePluggableDatabasesRemoteCloneConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePluggableDatabasesRemoteCloneConnectionStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_connection_strings - computed: true, optional: false, required: false
  private _allConnectionStrings = new cdktf.StringMap(this, "all_connection_strings");
  public get allConnectionStrings() {
    return this._allConnectionStrings;
  }

  // pdb_default - computed: true, optional: false, required: false
  public get pdbDefault() {
    return this.getStringAttribute('pdb_default');
  }

  // pdb_ip_default - computed: true, optional: false, required: false
  public get pdbIpDefault() {
    return this.getStringAttribute('pdb_ip_default');
  }
}

export class DatabasePluggableDatabasesRemoteCloneConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference {
    return new DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails {
}

export function databasePluggableDatabasesRemoteClonePdbNodeLevelDetailsToTerraform(struct?: DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databasePluggableDatabasesRemoteClonePdbNodeLevelDetailsToHclTerraform(struct?: DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // open_mode - computed: true, optional: false, required: false
  public get openMode() {
    return this.getStringAttribute('open_mode');
  }
}

export class DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference {
    return new DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig {
}

export function databasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigToTerraform(struct?: DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigToHclTerraform(struct?: DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // management_status - computed: true, optional: false, required: false
  public get managementStatus() {
    return this.getStringAttribute('management_status');
  }
}

export class DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList extends cdktf.ComplexList {

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
  public get(index: number): DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference {
    return new DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig {
}

export function databasePluggableDatabasesRemoteCloneRefreshableCloneConfigToTerraform(struct?: DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databasePluggableDatabasesRemoteCloneRefreshableCloneConfigToHclTerraform(struct?: DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_refreshable_clone - computed: true, optional: false, required: false
  public get isRefreshableClone() {
    return this.getBooleanAttribute('is_refreshable_clone');
  }
}

export class DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList extends cdktf.ComplexList {

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
  public get(index: number): DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference {
    return new DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabasePluggableDatabasesRemoteCloneTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone#create DatabasePluggableDatabasesRemoteClone#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone#delete DatabasePluggableDatabasesRemoteClone#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone#update DatabasePluggableDatabasesRemoteClone#update}
  */
  readonly update?: string;
}

export function databasePluggableDatabasesRemoteCloneTimeoutsToTerraform(struct?: DatabasePluggableDatabasesRemoteCloneTimeouts | cdktf.IResolvable): any {
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


export function databasePluggableDatabasesRemoteCloneTimeoutsToHclTerraform(struct?: DatabasePluggableDatabasesRemoteCloneTimeouts | cdktf.IResolvable): any {
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

export class DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabasePluggableDatabasesRemoteCloneTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabasePluggableDatabasesRemoteCloneTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone oci_database_pluggable_databases_remote_clone}
*/
export class DatabasePluggableDatabasesRemoteClone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_pluggable_databases_remote_clone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabasePluggableDatabasesRemoteClone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabasePluggableDatabasesRemoteClone to import
  * @param importFromId The id of the existing DatabasePluggableDatabasesRemoteClone that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabasePluggableDatabasesRemoteClone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_pluggable_databases_remote_clone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_pluggable_databases_remote_clone oci_database_pluggable_databases_remote_clone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabasePluggableDatabasesRemoteCloneConfig
  */
  public constructor(scope: Construct, id: string, config: DatabasePluggableDatabasesRemoteCloneConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_pluggable_databases_remote_clone',
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
    this._clonedPdbName = config.clonedPdbName;
    this._id = config.id;
    this._pdbAdminPassword = config.pdbAdminPassword;
    this._pluggableDatabaseId = config.pluggableDatabaseId;
    this._shouldPdbAdminAccountBeLocked = config.shouldPdbAdminAccountBeLocked;
    this._sourceContainerDbAdminPassword = config.sourceContainerDbAdminPassword;
    this._targetContainerDatabaseId = config.targetContainerDatabaseId;
    this._targetTdeWalletPassword = config.targetTdeWalletPassword;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloned_pdb_name - computed: false, optional: false, required: true
  private _clonedPdbName?: string; 
  public get clonedPdbName() {
    return this.getStringAttribute('cloned_pdb_name');
  }
  public set clonedPdbName(value: string) {
    this._clonedPdbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clonedPdbNameInput() {
    return this._clonedPdbName;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new DatabasePluggableDatabasesRemoteCloneConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // container_database_id - computed: true, optional: false, required: false
  public get containerDatabaseId() {
    return this.getStringAttribute('container_database_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
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

  // is_restricted - computed: true, optional: false, required: false
  public get isRestricted() {
    return this.getBooleanAttribute('is_restricted');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // open_mode - computed: true, optional: false, required: false
  public get openMode() {
    return this.getStringAttribute('open_mode');
  }

  // pdb_admin_password - computed: true, optional: true, required: false
  private _pdbAdminPassword?: string; 
  public get pdbAdminPassword() {
    return this.getStringAttribute('pdb_admin_password');
  }
  public set pdbAdminPassword(value: string) {
    this._pdbAdminPassword = value;
  }
  public resetPdbAdminPassword() {
    this._pdbAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbAdminPasswordInput() {
    return this._pdbAdminPassword;
  }

  // pdb_name - computed: true, optional: false, required: false
  public get pdbName() {
    return this.getStringAttribute('pdb_name');
  }

  // pdb_node_level_details - computed: true, optional: false, required: false
  private _pdbNodeLevelDetails = new DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList(this, "pdb_node_level_details", false);
  public get pdbNodeLevelDetails() {
    return this._pdbNodeLevelDetails;
  }

  // pluggable_database_id - computed: false, optional: false, required: true
  private _pluggableDatabaseId?: string; 
  public get pluggableDatabaseId() {
    return this.getStringAttribute('pluggable_database_id');
  }
  public set pluggableDatabaseId(value: string) {
    this._pluggableDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluggableDatabaseIdInput() {
    return this._pluggableDatabaseId;
  }

  // pluggable_database_management_config - computed: true, optional: false, required: false
  private _pluggableDatabaseManagementConfig = new DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList(this, "pluggable_database_management_config", false);
  public get pluggableDatabaseManagementConfig() {
    return this._pluggableDatabaseManagementConfig;
  }

  // refreshable_clone_config - computed: true, optional: false, required: false
  private _refreshableCloneConfig = new DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList(this, "refreshable_clone_config", false);
  public get refreshableCloneConfig() {
    return this._refreshableCloneConfig;
  }

  // should_pdb_admin_account_be_locked - computed: true, optional: true, required: false
  private _shouldPdbAdminAccountBeLocked?: boolean | cdktf.IResolvable; 
  public get shouldPdbAdminAccountBeLocked() {
    return this.getBooleanAttribute('should_pdb_admin_account_be_locked');
  }
  public set shouldPdbAdminAccountBeLocked(value: boolean | cdktf.IResolvable) {
    this._shouldPdbAdminAccountBeLocked = value;
  }
  public resetShouldPdbAdminAccountBeLocked() {
    this._shouldPdbAdminAccountBeLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldPdbAdminAccountBeLockedInput() {
    return this._shouldPdbAdminAccountBeLocked;
  }

  // source_container_db_admin_password - computed: false, optional: false, required: true
  private _sourceContainerDbAdminPassword?: string; 
  public get sourceContainerDbAdminPassword() {
    return this.getStringAttribute('source_container_db_admin_password');
  }
  public set sourceContainerDbAdminPassword(value: string) {
    this._sourceContainerDbAdminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceContainerDbAdminPasswordInput() {
    return this._sourceContainerDbAdminPassword;
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

  // target_container_database_id - computed: false, optional: false, required: true
  private _targetContainerDatabaseId?: string; 
  public get targetContainerDatabaseId() {
    return this.getStringAttribute('target_container_database_id');
  }
  public set targetContainerDatabaseId(value: string) {
    this._targetContainerDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetContainerDatabaseIdInput() {
    return this._targetContainerDatabaseId;
  }

  // target_tde_wallet_password - computed: true, optional: true, required: false
  private _targetTdeWalletPassword?: string; 
  public get targetTdeWalletPassword() {
    return this.getStringAttribute('target_tde_wallet_password');
  }
  public set targetTdeWalletPassword(value: string) {
    this._targetTdeWalletPassword = value;
  }
  public resetTargetTdeWalletPassword() {
    this._targetTdeWalletPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTdeWalletPasswordInput() {
    return this._targetTdeWalletPassword;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabasePluggableDatabasesRemoteCloneTimeouts) {
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
      cloned_pdb_name: cdktf.stringToTerraform(this._clonedPdbName),
      id: cdktf.stringToTerraform(this._id),
      pdb_admin_password: cdktf.stringToTerraform(this._pdbAdminPassword),
      pluggable_database_id: cdktf.stringToTerraform(this._pluggableDatabaseId),
      should_pdb_admin_account_be_locked: cdktf.booleanToTerraform(this._shouldPdbAdminAccountBeLocked),
      source_container_db_admin_password: cdktf.stringToTerraform(this._sourceContainerDbAdminPassword),
      target_container_database_id: cdktf.stringToTerraform(this._targetContainerDatabaseId),
      target_tde_wallet_password: cdktf.stringToTerraform(this._targetTdeWalletPassword),
      timeouts: databasePluggableDatabasesRemoteCloneTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloned_pdb_name: {
        value: cdktf.stringToHclTerraform(this._clonedPdbName),
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
      pdb_admin_password: {
        value: cdktf.stringToHclTerraform(this._pdbAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pluggable_database_id: {
        value: cdktf.stringToHclTerraform(this._pluggableDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_pdb_admin_account_be_locked: {
        value: cdktf.booleanToHclTerraform(this._shouldPdbAdminAccountBeLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_container_db_admin_password: {
        value: cdktf.stringToHclTerraform(this._sourceContainerDbAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_container_database_id: {
        value: cdktf.stringToHclTerraform(this._targetContainerDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_tde_wallet_password: {
        value: cdktf.stringToHclTerraform(this._targetTdeWalletPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: databasePluggableDatabasesRemoteCloneTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabasePluggableDatabasesRemoteCloneTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
