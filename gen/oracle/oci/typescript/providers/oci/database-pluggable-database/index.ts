// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabasePluggableDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#container_database_admin_password DatabasePluggableDatabase#container_database_admin_password}
  */
  readonly containerDatabaseAdminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#container_database_id DatabasePluggableDatabase#container_database_id}
  */
  readonly containerDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#convert_to_regular_trigger DatabasePluggableDatabase#convert_to_regular_trigger}
  */
  readonly convertToRegularTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#defined_tags DatabasePluggableDatabase#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#freeform_tags DatabasePluggableDatabase#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#id DatabasePluggableDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#kms_key_version_id DatabasePluggableDatabase#kms_key_version_id}
  */
  readonly kmsKeyVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#pdb_admin_password DatabasePluggableDatabase#pdb_admin_password}
  */
  readonly pdbAdminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#pdb_name DatabasePluggableDatabase#pdb_name}
  */
  readonly pdbName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#refresh_trigger DatabasePluggableDatabase#refresh_trigger}
  */
  readonly refreshTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#rotate_key_trigger DatabasePluggableDatabase#rotate_key_trigger}
  */
  readonly rotateKeyTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#should_create_pdb_backup DatabasePluggableDatabase#should_create_pdb_backup}
  */
  readonly shouldCreatePdbBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#should_pdb_admin_account_be_locked DatabasePluggableDatabase#should_pdb_admin_account_be_locked}
  */
  readonly shouldPdbAdminAccountBeLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#tde_wallet_password DatabasePluggableDatabase#tde_wallet_password}
  */
  readonly tdeWalletPassword?: string;
  /**
  * pdb_creation_type_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#pdb_creation_type_details DatabasePluggableDatabase#pdb_creation_type_details}
  */
  readonly pdbCreationTypeDetails?: DatabasePluggableDatabasePdbCreationTypeDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#timeouts DatabasePluggableDatabase#timeouts}
  */
  readonly timeouts?: DatabasePluggableDatabaseTimeouts;
}
export interface DatabasePluggableDatabaseConnectionStrings {
}

export function databasePluggableDatabaseConnectionStringsToTerraform(struct?: DatabasePluggableDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databasePluggableDatabaseConnectionStringsToHclTerraform(struct?: DatabasePluggableDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabasePluggableDatabaseConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabasePluggableDatabaseConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePluggableDatabaseConnectionStrings | undefined) {
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

export class DatabasePluggableDatabaseConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): DatabasePluggableDatabaseConnectionStringsOutputReference {
    return new DatabasePluggableDatabaseConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabasePluggableDatabasePdbNodeLevelDetails {
}

export function databasePluggableDatabasePdbNodeLevelDetailsToTerraform(struct?: DatabasePluggableDatabasePdbNodeLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databasePluggableDatabasePdbNodeLevelDetailsToHclTerraform(struct?: DatabasePluggableDatabasePdbNodeLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabasePluggableDatabasePdbNodeLevelDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePluggableDatabasePdbNodeLevelDetails | undefined) {
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

export class DatabasePluggableDatabasePdbNodeLevelDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference {
    return new DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabasePluggableDatabasePluggableDatabaseManagementConfig {
}

export function databasePluggableDatabasePluggableDatabaseManagementConfigToTerraform(struct?: DatabasePluggableDatabasePluggableDatabaseManagementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databasePluggableDatabasePluggableDatabaseManagementConfigToHclTerraform(struct?: DatabasePluggableDatabasePluggableDatabaseManagementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabasePluggableDatabasePluggableDatabaseManagementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePluggableDatabasePluggableDatabaseManagementConfig | undefined) {
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

export class DatabasePluggableDatabasePluggableDatabaseManagementConfigList extends cdktf.ComplexList {

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
  public get(index: number): DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference {
    return new DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabasePluggableDatabaseRefreshableCloneConfig {
}

export function databasePluggableDatabaseRefreshableCloneConfigToTerraform(struct?: DatabasePluggableDatabaseRefreshableCloneConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databasePluggableDatabaseRefreshableCloneConfigToHclTerraform(struct?: DatabasePluggableDatabaseRefreshableCloneConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabasePluggableDatabaseRefreshableCloneConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabasePluggableDatabaseRefreshableCloneConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePluggableDatabaseRefreshableCloneConfig | undefined) {
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

export class DatabasePluggableDatabaseRefreshableCloneConfigList extends cdktf.ComplexList {

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
  public get(index: number): DatabasePluggableDatabaseRefreshableCloneConfigOutputReference {
    return new DatabasePluggableDatabaseRefreshableCloneConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#is_refreshable_clone DatabasePluggableDatabase#is_refreshable_clone}
  */
  readonly isRefreshableClone?: boolean | cdktf.IResolvable;
}

export function databasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsToTerraform(struct?: DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference | DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_refreshable_clone: cdktf.booleanToTerraform(struct!.isRefreshableClone),
  }
}


export function databasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsToHclTerraform(struct?: DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference | DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_refreshable_clone: {
      value: cdktf.booleanToHclTerraform(struct!.isRefreshableClone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isRefreshableClone !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRefreshableClone = this._isRefreshableClone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isRefreshableClone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isRefreshableClone = value.isRefreshableClone;
    }
  }

  // is_refreshable_clone - computed: true, optional: true, required: false
  private _isRefreshableClone?: boolean | cdktf.IResolvable; 
  public get isRefreshableClone() {
    return this.getBooleanAttribute('is_refreshable_clone');
  }
  public set isRefreshableClone(value: boolean | cdktf.IResolvable) {
    this._isRefreshableClone = value;
  }
  public resetIsRefreshableClone() {
    this._isRefreshableClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRefreshableCloneInput() {
    return this._isRefreshableClone;
  }
}
export interface DatabasePluggableDatabasePdbCreationTypeDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#creation_type DatabasePluggableDatabase#creation_type}
  */
  readonly creationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#dblink_user_password DatabasePluggableDatabase#dblink_user_password}
  */
  readonly dblinkUserPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#dblink_username DatabasePluggableDatabase#dblink_username}
  */
  readonly dblinkUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#is_thin_clone DatabasePluggableDatabase#is_thin_clone}
  */
  readonly isThinClone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#source_container_database_admin_password DatabasePluggableDatabase#source_container_database_admin_password}
  */
  readonly sourceContainerDatabaseAdminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#source_pluggable_database_id DatabasePluggableDatabase#source_pluggable_database_id}
  */
  readonly sourcePluggableDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#source_pluggable_database_snapshot_id DatabasePluggableDatabase#source_pluggable_database_snapshot_id}
  */
  readonly sourcePluggableDatabaseSnapshotId?: string;
  /**
  * refreshable_clone_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#refreshable_clone_details DatabasePluggableDatabase#refreshable_clone_details}
  */
  readonly refreshableCloneDetails?: DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails;
}

export function databasePluggableDatabasePdbCreationTypeDetailsToTerraform(struct?: DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference | DatabasePluggableDatabasePdbCreationTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_type: cdktf.stringToTerraform(struct!.creationType),
    dblink_user_password: cdktf.stringToTerraform(struct!.dblinkUserPassword),
    dblink_username: cdktf.stringToTerraform(struct!.dblinkUsername),
    is_thin_clone: cdktf.booleanToTerraform(struct!.isThinClone),
    source_container_database_admin_password: cdktf.stringToTerraform(struct!.sourceContainerDatabaseAdminPassword),
    source_pluggable_database_id: cdktf.stringToTerraform(struct!.sourcePluggableDatabaseId),
    source_pluggable_database_snapshot_id: cdktf.stringToTerraform(struct!.sourcePluggableDatabaseSnapshotId),
    refreshable_clone_details: databasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsToTerraform(struct!.refreshableCloneDetails),
  }
}


export function databasePluggableDatabasePdbCreationTypeDetailsToHclTerraform(struct?: DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference | DatabasePluggableDatabasePdbCreationTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation_type: {
      value: cdktf.stringToHclTerraform(struct!.creationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dblink_user_password: {
      value: cdktf.stringToHclTerraform(struct!.dblinkUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dblink_username: {
      value: cdktf.stringToHclTerraform(struct!.dblinkUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_thin_clone: {
      value: cdktf.booleanToHclTerraform(struct!.isThinClone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_container_database_admin_password: {
      value: cdktf.stringToHclTerraform(struct!.sourceContainerDatabaseAdminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_pluggable_database_id: {
      value: cdktf.stringToHclTerraform(struct!.sourcePluggableDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_pluggable_database_snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.sourcePluggableDatabaseSnapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refreshable_clone_details: {
      value: databasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsToHclTerraform(struct!.refreshableCloneDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabasePluggableDatabasePdbCreationTypeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationType = this._creationType;
    }
    if (this._dblinkUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.dblinkUserPassword = this._dblinkUserPassword;
    }
    if (this._dblinkUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.dblinkUsername = this._dblinkUsername;
    }
    if (this._isThinClone !== undefined) {
      hasAnyValues = true;
      internalValueResult.isThinClone = this._isThinClone;
    }
    if (this._sourceContainerDatabaseAdminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceContainerDatabaseAdminPassword = this._sourceContainerDatabaseAdminPassword;
    }
    if (this._sourcePluggableDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePluggableDatabaseId = this._sourcePluggableDatabaseId;
    }
    if (this._sourcePluggableDatabaseSnapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePluggableDatabaseSnapshotId = this._sourcePluggableDatabaseSnapshotId;
    }
    if (this._refreshableCloneDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshableCloneDetails = this._refreshableCloneDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePluggableDatabasePdbCreationTypeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._creationType = undefined;
      this._dblinkUserPassword = undefined;
      this._dblinkUsername = undefined;
      this._isThinClone = undefined;
      this._sourceContainerDatabaseAdminPassword = undefined;
      this._sourcePluggableDatabaseId = undefined;
      this._sourcePluggableDatabaseSnapshotId = undefined;
      this._refreshableCloneDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._creationType = value.creationType;
      this._dblinkUserPassword = value.dblinkUserPassword;
      this._dblinkUsername = value.dblinkUsername;
      this._isThinClone = value.isThinClone;
      this._sourceContainerDatabaseAdminPassword = value.sourceContainerDatabaseAdminPassword;
      this._sourcePluggableDatabaseId = value.sourcePluggableDatabaseId;
      this._sourcePluggableDatabaseSnapshotId = value.sourcePluggableDatabaseSnapshotId;
      this._refreshableCloneDetails.internalValue = value.refreshableCloneDetails;
    }
  }

  // creation_type - computed: false, optional: false, required: true
  private _creationType?: string; 
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }
  public set creationType(value: string) {
    this._creationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTypeInput() {
    return this._creationType;
  }

  // dblink_user_password - computed: true, optional: true, required: false
  private _dblinkUserPassword?: string; 
  public get dblinkUserPassword() {
    return this.getStringAttribute('dblink_user_password');
  }
  public set dblinkUserPassword(value: string) {
    this._dblinkUserPassword = value;
  }
  public resetDblinkUserPassword() {
    this._dblinkUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dblinkUserPasswordInput() {
    return this._dblinkUserPassword;
  }

  // dblink_username - computed: true, optional: true, required: false
  private _dblinkUsername?: string; 
  public get dblinkUsername() {
    return this.getStringAttribute('dblink_username');
  }
  public set dblinkUsername(value: string) {
    this._dblinkUsername = value;
  }
  public resetDblinkUsername() {
    this._dblinkUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dblinkUsernameInput() {
    return this._dblinkUsername;
  }

  // is_thin_clone - computed: true, optional: true, required: false
  private _isThinClone?: boolean | cdktf.IResolvable; 
  public get isThinClone() {
    return this.getBooleanAttribute('is_thin_clone');
  }
  public set isThinClone(value: boolean | cdktf.IResolvable) {
    this._isThinClone = value;
  }
  public resetIsThinClone() {
    this._isThinClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isThinCloneInput() {
    return this._isThinClone;
  }

  // source_container_database_admin_password - computed: true, optional: true, required: false
  private _sourceContainerDatabaseAdminPassword?: string; 
  public get sourceContainerDatabaseAdminPassword() {
    return this.getStringAttribute('source_container_database_admin_password');
  }
  public set sourceContainerDatabaseAdminPassword(value: string) {
    this._sourceContainerDatabaseAdminPassword = value;
  }
  public resetSourceContainerDatabaseAdminPassword() {
    this._sourceContainerDatabaseAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceContainerDatabaseAdminPasswordInput() {
    return this._sourceContainerDatabaseAdminPassword;
  }

  // source_pluggable_database_id - computed: false, optional: false, required: true
  private _sourcePluggableDatabaseId?: string; 
  public get sourcePluggableDatabaseId() {
    return this.getStringAttribute('source_pluggable_database_id');
  }
  public set sourcePluggableDatabaseId(value: string) {
    this._sourcePluggableDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePluggableDatabaseIdInput() {
    return this._sourcePluggableDatabaseId;
  }

  // source_pluggable_database_snapshot_id - computed: true, optional: true, required: false
  private _sourcePluggableDatabaseSnapshotId?: string; 
  public get sourcePluggableDatabaseSnapshotId() {
    return this.getStringAttribute('source_pluggable_database_snapshot_id');
  }
  public set sourcePluggableDatabaseSnapshotId(value: string) {
    this._sourcePluggableDatabaseSnapshotId = value;
  }
  public resetSourcePluggableDatabaseSnapshotId() {
    this._sourcePluggableDatabaseSnapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePluggableDatabaseSnapshotIdInput() {
    return this._sourcePluggableDatabaseSnapshotId;
  }

  // refreshable_clone_details - computed: false, optional: true, required: false
  private _refreshableCloneDetails = new DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference(this, "refreshable_clone_details");
  public get refreshableCloneDetails() {
    return this._refreshableCloneDetails;
  }
  public putRefreshableCloneDetails(value: DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails) {
    this._refreshableCloneDetails.internalValue = value;
  }
  public resetRefreshableCloneDetails() {
    this._refreshableCloneDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshableCloneDetailsInput() {
    return this._refreshableCloneDetails.internalValue;
  }
}
export interface DatabasePluggableDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#create DatabasePluggableDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#delete DatabasePluggableDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#update DatabasePluggableDatabase#update}
  */
  readonly update?: string;
}

export function databasePluggableDatabaseTimeoutsToTerraform(struct?: DatabasePluggableDatabaseTimeouts | cdktf.IResolvable): any {
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


export function databasePluggableDatabaseTimeoutsToHclTerraform(struct?: DatabasePluggableDatabaseTimeouts | cdktf.IResolvable): any {
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

export class DatabasePluggableDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabasePluggableDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabasePluggableDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database oci_database_pluggable_database}
*/
export class DatabasePluggableDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_pluggable_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabasePluggableDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabasePluggableDatabase to import
  * @param importFromId The id of the existing DatabasePluggableDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabasePluggableDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_pluggable_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_pluggable_database oci_database_pluggable_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabasePluggableDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DatabasePluggableDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_pluggable_database',
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
    this._containerDatabaseAdminPassword = config.containerDatabaseAdminPassword;
    this._containerDatabaseId = config.containerDatabaseId;
    this._convertToRegularTrigger = config.convertToRegularTrigger;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._kmsKeyVersionId = config.kmsKeyVersionId;
    this._pdbAdminPassword = config.pdbAdminPassword;
    this._pdbName = config.pdbName;
    this._refreshTrigger = config.refreshTrigger;
    this._rotateKeyTrigger = config.rotateKeyTrigger;
    this._shouldCreatePdbBackup = config.shouldCreatePdbBackup;
    this._shouldPdbAdminAccountBeLocked = config.shouldPdbAdminAccountBeLocked;
    this._tdeWalletPassword = config.tdeWalletPassword;
    this._pdbCreationTypeDetails.internalValue = config.pdbCreationTypeDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new DatabasePluggableDatabaseConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // container_database_admin_password - computed: true, optional: true, required: false
  private _containerDatabaseAdminPassword?: string; 
  public get containerDatabaseAdminPassword() {
    return this.getStringAttribute('container_database_admin_password');
  }
  public set containerDatabaseAdminPassword(value: string) {
    this._containerDatabaseAdminPassword = value;
  }
  public resetContainerDatabaseAdminPassword() {
    this._containerDatabaseAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDatabaseAdminPasswordInput() {
    return this._containerDatabaseAdminPassword;
  }

  // container_database_id - computed: false, optional: false, required: true
  private _containerDatabaseId?: string; 
  public get containerDatabaseId() {
    return this.getStringAttribute('container_database_id');
  }
  public set containerDatabaseId(value: string) {
    this._containerDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDatabaseIdInput() {
    return this._containerDatabaseId;
  }

  // convert_to_regular_trigger - computed: false, optional: true, required: false
  private _convertToRegularTrigger?: number; 
  public get convertToRegularTrigger() {
    return this.getNumberAttribute('convert_to_regular_trigger');
  }
  public set convertToRegularTrigger(value: number) {
    this._convertToRegularTrigger = value;
  }
  public resetConvertToRegularTrigger() {
    this._convertToRegularTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertToRegularTriggerInput() {
    return this._convertToRegularTrigger;
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

  // is_restricted - computed: true, optional: false, required: false
  public get isRestricted() {
    return this.getBooleanAttribute('is_restricted');
  }

  // kms_key_version_id - computed: false, optional: true, required: false
  private _kmsKeyVersionId?: string; 
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }
  public set kmsKeyVersionId(value: string) {
    this._kmsKeyVersionId = value;
  }
  public resetKmsKeyVersionId() {
    this._kmsKeyVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyVersionIdInput() {
    return this._kmsKeyVersionId;
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

  // pdb_name - computed: false, optional: false, required: true
  private _pdbName?: string; 
  public get pdbName() {
    return this.getStringAttribute('pdb_name');
  }
  public set pdbName(value: string) {
    this._pdbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbNameInput() {
    return this._pdbName;
  }

  // pdb_node_level_details - computed: true, optional: false, required: false
  private _pdbNodeLevelDetails = new DatabasePluggableDatabasePdbNodeLevelDetailsList(this, "pdb_node_level_details", false);
  public get pdbNodeLevelDetails() {
    return this._pdbNodeLevelDetails;
  }

  // pluggable_database_management_config - computed: true, optional: false, required: false
  private _pluggableDatabaseManagementConfig = new DatabasePluggableDatabasePluggableDatabaseManagementConfigList(this, "pluggable_database_management_config", false);
  public get pluggableDatabaseManagementConfig() {
    return this._pluggableDatabaseManagementConfig;
  }

  // refresh_trigger - computed: false, optional: true, required: false
  private _refreshTrigger?: number; 
  public get refreshTrigger() {
    return this.getNumberAttribute('refresh_trigger');
  }
  public set refreshTrigger(value: number) {
    this._refreshTrigger = value;
  }
  public resetRefreshTrigger() {
    this._refreshTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTriggerInput() {
    return this._refreshTrigger;
  }

  // refreshable_clone_config - computed: true, optional: false, required: false
  private _refreshableCloneConfig = new DatabasePluggableDatabaseRefreshableCloneConfigList(this, "refreshable_clone_config", false);
  public get refreshableCloneConfig() {
    return this._refreshableCloneConfig;
  }

  // rotate_key_trigger - computed: false, optional: true, required: false
  private _rotateKeyTrigger?: number; 
  public get rotateKeyTrigger() {
    return this.getNumberAttribute('rotate_key_trigger');
  }
  public set rotateKeyTrigger(value: number) {
    this._rotateKeyTrigger = value;
  }
  public resetRotateKeyTrigger() {
    this._rotateKeyTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateKeyTriggerInput() {
    return this._rotateKeyTrigger;
  }

  // should_create_pdb_backup - computed: true, optional: true, required: false
  private _shouldCreatePdbBackup?: boolean | cdktf.IResolvable; 
  public get shouldCreatePdbBackup() {
    return this.getBooleanAttribute('should_create_pdb_backup');
  }
  public set shouldCreatePdbBackup(value: boolean | cdktf.IResolvable) {
    this._shouldCreatePdbBackup = value;
  }
  public resetShouldCreatePdbBackup() {
    this._shouldCreatePdbBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldCreatePdbBackupInput() {
    return this._shouldCreatePdbBackup;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // tde_wallet_password - computed: true, optional: true, required: false
  private _tdeWalletPassword?: string; 
  public get tdeWalletPassword() {
    return this.getStringAttribute('tde_wallet_password');
  }
  public set tdeWalletPassword(value: string) {
    this._tdeWalletPassword = value;
  }
  public resetTdeWalletPassword() {
    this._tdeWalletPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeWalletPasswordInput() {
    return this._tdeWalletPassword;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // pdb_creation_type_details - computed: false, optional: true, required: false
  private _pdbCreationTypeDetails = new DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference(this, "pdb_creation_type_details");
  public get pdbCreationTypeDetails() {
    return this._pdbCreationTypeDetails;
  }
  public putPdbCreationTypeDetails(value: DatabasePluggableDatabasePdbCreationTypeDetails) {
    this._pdbCreationTypeDetails.internalValue = value;
  }
  public resetPdbCreationTypeDetails() {
    this._pdbCreationTypeDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbCreationTypeDetailsInput() {
    return this._pdbCreationTypeDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabasePluggableDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabasePluggableDatabaseTimeouts) {
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
      container_database_admin_password: cdktf.stringToTerraform(this._containerDatabaseAdminPassword),
      container_database_id: cdktf.stringToTerraform(this._containerDatabaseId),
      convert_to_regular_trigger: cdktf.numberToTerraform(this._convertToRegularTrigger),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      kms_key_version_id: cdktf.stringToTerraform(this._kmsKeyVersionId),
      pdb_admin_password: cdktf.stringToTerraform(this._pdbAdminPassword),
      pdb_name: cdktf.stringToTerraform(this._pdbName),
      refresh_trigger: cdktf.numberToTerraform(this._refreshTrigger),
      rotate_key_trigger: cdktf.numberToTerraform(this._rotateKeyTrigger),
      should_create_pdb_backup: cdktf.booleanToTerraform(this._shouldCreatePdbBackup),
      should_pdb_admin_account_be_locked: cdktf.booleanToTerraform(this._shouldPdbAdminAccountBeLocked),
      tde_wallet_password: cdktf.stringToTerraform(this._tdeWalletPassword),
      pdb_creation_type_details: databasePluggableDatabasePdbCreationTypeDetailsToTerraform(this._pdbCreationTypeDetails.internalValue),
      timeouts: databasePluggableDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_database_admin_password: {
        value: cdktf.stringToHclTerraform(this._containerDatabaseAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_database_id: {
        value: cdktf.stringToHclTerraform(this._containerDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      convert_to_regular_trigger: {
        value: cdktf.numberToHclTerraform(this._convertToRegularTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      kms_key_version_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyVersionId),
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
      pdb_name: {
        value: cdktf.stringToHclTerraform(this._pdbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_trigger: {
        value: cdktf.numberToHclTerraform(this._refreshTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotate_key_trigger: {
        value: cdktf.numberToHclTerraform(this._rotateKeyTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      should_create_pdb_backup: {
        value: cdktf.booleanToHclTerraform(this._shouldCreatePdbBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_pdb_admin_account_be_locked: {
        value: cdktf.booleanToHclTerraform(this._shouldPdbAdminAccountBeLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tde_wallet_password: {
        value: cdktf.stringToHclTerraform(this._tdeWalletPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdb_creation_type_details: {
        value: databasePluggableDatabasePdbCreationTypeDetailsToHclTerraform(this._pdbCreationTypeDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabasePluggableDatabasePdbCreationTypeDetailsList",
      },
      timeouts: {
        value: databasePluggableDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabasePluggableDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
