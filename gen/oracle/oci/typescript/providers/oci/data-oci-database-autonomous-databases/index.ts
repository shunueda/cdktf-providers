// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousDatabasesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#autonomous_container_database_id DataOciDatabaseAutonomousDatabases#autonomous_container_database_id}
  */
  readonly autonomousContainerDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#compartment_id DataOciDatabaseAutonomousDatabases#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#db_version DataOciDatabaseAutonomousDatabases#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#db_workload DataOciDatabaseAutonomousDatabases#db_workload}
  */
  readonly dbWorkload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#display_name DataOciDatabaseAutonomousDatabases#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#id DataOciDatabaseAutonomousDatabases#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#infrastructure_type DataOciDatabaseAutonomousDatabases#infrastructure_type}
  */
  readonly infrastructureType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#is_data_guard_enabled DataOciDatabaseAutonomousDatabases#is_data_guard_enabled}
  */
  readonly isDataGuardEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#is_free_tier DataOciDatabaseAutonomousDatabases#is_free_tier}
  */
  readonly isFreeTier?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#is_refreshable_clone DataOciDatabaseAutonomousDatabases#is_refreshable_clone}
  */
  readonly isRefreshableClone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#is_resource_pool_leader DataOciDatabaseAutonomousDatabases#is_resource_pool_leader}
  */
  readonly isResourcePoolLeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#lifecycle_state_not_equal_to DataOciDatabaseAutonomousDatabases#lifecycle_state_not_equal_to}
  */
  readonly lifecycleStateNotEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#resource_pool_leader_id DataOciDatabaseAutonomousDatabases#resource_pool_leader_id}
  */
  readonly resourcePoolLeaderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#state DataOciDatabaseAutonomousDatabases#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#filter DataOciDatabaseAutonomousDatabases#filter}
  */
  readonly filter?: DataOciDatabaseAutonomousDatabasesFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apex_version - computed: true, optional: false, required: false
  public get apexVersion() {
    return this.getStringAttribute('apex_version');
  }

  // ords_version - computed: true, optional: false, required: false
  public get ordsVersion() {
    return this.getStringAttribute('ords_version');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manual_backup_bucket_name - computed: true, optional: false, required: false
  public get manualBackupBucketName() {
    return this.getStringAttribute('manual_backup_bucket_name');
  }

  // manual_backup_type - computed: true, optional: false, required: false
  public get manualBackupType() {
    return this.getStringAttribute('manual_backup_type');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_group - computed: true, optional: false, required: false
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // host_format - computed: true, optional: false, required: false
  public get hostFormat() {
    return this.getStringAttribute('host_format');
  }

  // is_regional - computed: true, optional: false, required: false
  public get isRegional() {
    return this.getBooleanAttribute('is_regional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // session_mode - computed: true, optional: false, required: false
  public get sessionMode() {
    return this.getStringAttribute('session_mode');
  }

  // syntax_format - computed: true, optional: false, required: false
  public get syntaxFormat() {
    return this.getStringAttribute('syntax_format');
  }

  // tls_authentication - computed: true, optional: false, required: false
  public get tlsAuthentication() {
    return this.getStringAttribute('tls_authentication');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings | undefined) {
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

  // dedicated - computed: true, optional: false, required: false
  public get dedicated() {
    return this.getStringAttribute('dedicated');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getStringAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getStringAttribute('low');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getStringAttribute('medium');
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apex_url - computed: true, optional: false, required: false
  public get apexUrl() {
    return this.getStringAttribute('apex_url');
  }

  // database_transforms_url - computed: true, optional: false, required: false
  public get databaseTransformsUrl() {
    return this.getStringAttribute('database_transforms_url');
  }

  // graph_studio_url - computed: true, optional: false, required: false
  public get graphStudioUrl() {
    return this.getStringAttribute('graph_studio_url');
  }

  // machine_learning_notebook_url - computed: true, optional: false, required: false
  public get machineLearningNotebookUrl() {
    return this.getStringAttribute('machine_learning_notebook_url');
  }

  // machine_learning_user_management_url - computed: true, optional: false, required: false
  public get machineLearningUserManagementUrl() {
    return this.getStringAttribute('machine_learning_user_management_url');
  }

  // mongo_db_url - computed: true, optional: false, required: false
  public get mongoDbUrl() {
    return this.getStringAttribute('mongo_db_url');
  }

  // ords_url - computed: true, optional: false, required: false
  public get ordsUrl() {
    return this.getStringAttribute('ords_url');
  }

  // sql_dev_web_url - computed: true, optional: false, required: false
  public get sqlDevWebUrl() {
    return this.getStringAttribute('sql_dev_web_url');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_count - computed: true, optional: false, required: false
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // max_idle_time_in_minutes - computed: true, optional: false, required: false
  public get maxIdleTimeInMinutes() {
    return this.getNumberAttribute('max_idle_time_in_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn_role - computed: true, optional: false, required: false
  public get arnRole() {
    return this.getStringAttribute('arn_role');
  }

  // autonomous_database_provider - computed: true, optional: false, required: false
  public get autonomousDatabaseProvider() {
    return this.getStringAttribute('autonomous_database_provider');
  }

  // certificate_directory_name - computed: true, optional: false, required: false
  public get certificateDirectoryName() {
    return this.getStringAttribute('certificate_directory_name');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // directory_name - computed: true, optional: false, required: false
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // key_arn - computed: true, optional: false, required: false
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // key_ring - computed: true, optional: false, required: false
  public get keyRing() {
    return this.getStringAttribute('key_ring');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // kms_rest_endpoint - computed: true, optional: false, required: false
  public get kmsRestEndpoint() {
    return this.getStringAttribute('kms_rest_endpoint');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // okv_kms_key - computed: true, optional: false, required: false
  public get okvKmsKey() {
    return this.getStringAttribute('okv_kms_key');
  }

  // okv_uri - computed: true, optional: false, required: false
  public get okvUri() {
    return this.getStringAttribute('okv_uri');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // service_endpoint_uri - computed: true, optional: false, required: false
  public get serviceEndpointUri() {
    return this.getStringAttribute('service_endpoint_uri');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // vault_uri - computed: true, optional: false, required: false
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn_role - computed: true, optional: false, required: false
  public get arnRole() {
    return this.getStringAttribute('arn_role');
  }

  // autonomous_database_provider - computed: true, optional: false, required: false
  public get autonomousDatabaseProvider() {
    return this.getStringAttribute('autonomous_database_provider');
  }

  // certificate_directory_name - computed: true, optional: false, required: false
  public get certificateDirectoryName() {
    return this.getStringAttribute('certificate_directory_name');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // directory_name - computed: true, optional: false, required: false
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // key_arn - computed: true, optional: false, required: false
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // key_ring - computed: true, optional: false, required: false
  public get keyRing() {
    return this.getStringAttribute('key_ring');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // kms_rest_endpoint - computed: true, optional: false, required: false
  public get kmsRestEndpoint() {
    return this.getStringAttribute('kms_rest_endpoint');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // okv_kms_key - computed: true, optional: false, required: false
  public get okvKmsKey() {
    return this.getStringAttribute('okv_kms_key');
  }

  // okv_uri - computed: true, optional: false, required: false
  public get okvUri() {
    return this.getStringAttribute('okv_uri');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // service_endpoint_uri - computed: true, optional: false, required: false
  public get serviceEndpointUri() {
    return this.getStringAttribute('service_endpoint_uri');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // vault_uri - computed: true, optional: false, required: false
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key - computed: true, optional: false, required: false
  private _encryptionKey = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList(this, "encryption_key", false);
  public get encryptionKey() {
    return this._encryptionKey;
  }

  // time_activated - computed: true, optional: false, required: false
  public get timeActivated() {
    return this.getStringAttribute('time_activated');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_version_id - computed: true, optional: false, required: false
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }

  // time_activated - computed: true, optional: false, required: false
  public get timeActivated() {
    return this.getStringAttribute('time_activated');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // lag_time_in_seconds - computed: true, optional: false, required: false
  public get lagTimeInSeconds() {
    return this.getNumberAttribute('lag_time_in_seconds');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_target_component - computed: true, optional: false, required: false
  public get maintenanceTargetComponent() {
    return this.getStringAttribute('maintenance_target_component');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_data_guard_role_changed - computed: true, optional: false, required: false
  public get timeDataGuardRoleChanged() {
    return this.getStringAttribute('time_data_guard_role_changed');
  }

  // time_disaster_recovery_role_changed - computed: true, optional: false, required: false
  public get timeDisasterRecoveryRoleChanged() {
    return this.getStringAttribute('time_disaster_recovery_role_changed');
  }

  // time_maintenance_begin - computed: true, optional: false, required: false
  public get timeMaintenanceBegin() {
    return this.getStringAttribute('time_maintenance_begin');
  }

  // time_maintenance_end - computed: true, optional: false, required: false
  public get timeMaintenanceEnd() {
    return this.getStringAttribute('time_maintenance_end');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_disabled - computed: true, optional: false, required: false
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }

  // repeat_cadence - computed: true, optional: false, required: false
  public get repeatCadence() {
    return this.getStringAttribute('repeat_cadence');
  }

  // retention_period_in_days - computed: true, optional: false, required: false
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }

  // time_of_backup - computed: true, optional: false, required: false
  public get timeOfBackup() {
    return this.getStringAttribute('time_of_backup');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apex_url - computed: true, optional: false, required: false
  public get apexUrl() {
    return this.getStringAttribute('apex_url');
  }

  // database_transforms_url - computed: true, optional: false, required: false
  public get databaseTransformsUrl() {
    return this.getStringAttribute('database_transforms_url');
  }

  // graph_studio_url - computed: true, optional: false, required: false
  public get graphStudioUrl() {
    return this.getStringAttribute('graph_studio_url');
  }

  // machine_learning_notebook_url - computed: true, optional: false, required: false
  public get machineLearningNotebookUrl() {
    return this.getStringAttribute('machine_learning_notebook_url');
  }

  // machine_learning_user_management_url - computed: true, optional: false, required: false
  public get machineLearningUserManagementUrl() {
    return this.getStringAttribute('machine_learning_user_management_url');
  }

  // mongo_db_url - computed: true, optional: false, required: false
  public get mongoDbUrl() {
    return this.getStringAttribute('mongo_db_url');
  }

  // ords_url - computed: true, optional: false, required: false
  public get ordsUrl() {
    return this.getStringAttribute('ords_url');
  }

  // sql_dev_web_url - computed: true, optional: false, required: false
  public get sqlDevWebUrl() {
    return this.getStringAttribute('sql_dev_web_url');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disaster_recovery_type - computed: true, optional: false, required: false
  public get disasterRecoveryType() {
    return this.getStringAttribute('disaster_recovery_type');
  }

  // is_replicate_automatic_backups - computed: true, optional: false, required: false
  public get isReplicateAutomaticBackups() {
    return this.getBooleanAttribute('is_replicate_automatic_backups');
  }

  // is_snapshot_standby - computed: true, optional: false, required: false
  public get isSnapshotStandby() {
    return this.getBooleanAttribute('is_snapshot_standby');
  }

  // time_snapshot_standby_enabled_till - computed: true, optional: false, required: false
  public get timeSnapshotStandbyEnabledTill() {
    return this.getStringAttribute('time_snapshot_standby_enabled_till');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_compute_capacity - computed: true, optional: false, required: false
  public get availableComputeCapacity() {
    return this.getNumberAttribute('available_compute_capacity');
  }

  // is_disabled - computed: true, optional: false, required: false
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }

  // pool_size - computed: true, optional: false, required: false
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }

  // total_compute_capacity - computed: true, optional: false, required: false
  public get totalComputeCapacity() {
    return this.getNumberAttribute('total_compute_capacity');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_week - computed: true, optional: false, required: false
  private _dayOfWeek = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList(this, "day_of_week", false);
  public get dayOfWeek() {
    return this._dayOfWeek;
  }

  // scheduled_start_time - computed: true, optional: false, required: false
  public get scheduledStartTime() {
    return this.getStringAttribute('scheduled_start_time');
  }

  // scheduled_stop_time - computed: true, optional: false, required: false
  public get scheduledStopTime() {
    return this.getStringAttribute('scheduled_stop_time');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // lag_time_in_seconds - computed: true, optional: false, required: false
  public get lagTimeInSeconds() {
    return this.getNumberAttribute('lag_time_in_seconds');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_target_component - computed: true, optional: false, required: false
  public get maintenanceTargetComponent() {
    return this.getStringAttribute('maintenance_target_component');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_data_guard_role_changed - computed: true, optional: false, required: false
  public get timeDataGuardRoleChanged() {
    return this.getStringAttribute('time_data_guard_role_changed');
  }

  // time_disaster_recovery_role_changed - computed: true, optional: false, required: false
  public get timeDisasterRecoveryRoleChanged() {
    return this.getStringAttribute('time_disaster_recovery_role_changed');
  }

  // time_maintenance_begin - computed: true, optional: false, required: false
  public get timeMaintenanceBegin() {
    return this.getStringAttribute('time_maintenance_begin');
  }

  // time_maintenance_end - computed: true, optional: false, required: false
  public get timeMaintenanceEnd() {
    return this.getStringAttribute('time_maintenance_end');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityConnectionUrls {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityConnectionUrlsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityConnectionUrlsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityConnectionUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityConnectionUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityConnectionUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apex_url - computed: true, optional: false, required: false
  public get apexUrl() {
    return this.getStringAttribute('apex_url');
  }

  // database_transforms_url - computed: true, optional: false, required: false
  public get databaseTransformsUrl() {
    return this.getStringAttribute('database_transforms_url');
  }

  // graph_studio_url - computed: true, optional: false, required: false
  public get graphStudioUrl() {
    return this.getStringAttribute('graph_studio_url');
  }

  // machine_learning_notebook_url - computed: true, optional: false, required: false
  public get machineLearningNotebookUrl() {
    return this.getStringAttribute('machine_learning_notebook_url');
  }

  // machine_learning_user_management_url - computed: true, optional: false, required: false
  public get machineLearningUserManagementUrl() {
    return this.getStringAttribute('machine_learning_user_management_url');
  }

  // mongo_db_url - computed: true, optional: false, required: false
  public get mongoDbUrl() {
    return this.getStringAttribute('mongo_db_url');
  }

  // ords_url - computed: true, optional: false, required: false
  public get ordsUrl() {
    return this.getStringAttribute('ords_url');
  }

  // sql_dev_web_url - computed: true, optional: false, required: false
  public get sqlDevWebUrl() {
    return this.getStringAttribute('sql_dev_web_url');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityConnectionUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityConnectionUrlsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityConnectionUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityUrlDetails {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityUrlDetailsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityUrlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityUrlDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityUrlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityUrlDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityUrlDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityUrlDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_gateway_id - computed: true, optional: false, required: false
  public get apiGatewayId() {
    return this.getStringAttribute('api_gateway_id');
  }

  // is_disabled - computed: true, optional: false, required: false
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }

  // vanity_url_host_name - computed: true, optional: false, required: false
  public get vanityUrlHostName() {
    return this.getStringAttribute('vanity_url_host_name');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityUrlDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityUrlDetailsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityUrlDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesAutonomousDatabases {
}

export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesToTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesAutonomousDatabasesToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesAutonomousDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesAutonomousDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesAutonomousDatabases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actual_used_data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get actualUsedDataStorageSizeInTbs() {
    return this.getNumberAttribute('actual_used_data_storage_size_in_tbs');
  }

  // additional_attributes - computed: true, optional: false, required: false
  private _additionalAttributes = new cdktf.StringMap(this, "additional_attributes");
  public get additionalAttributes() {
    return this._additionalAttributes;
  }

  // admin_password - computed: true, optional: false, required: false
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // allocated_storage_size_in_tbs - computed: true, optional: false, required: false
  public get allocatedStorageSizeInTbs() {
    return this.getNumberAttribute('allocated_storage_size_in_tbs');
  }

  // apex_details - computed: true, optional: false, required: false
  private _apexDetails = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList(this, "apex_details", false);
  public get apexDetails() {
    return this._apexDetails;
  }

  // are_primary_whitelisted_ips_used - computed: true, optional: false, required: false
  public get arePrimaryWhitelistedIpsUsed() {
    return this.getBooleanAttribute('are_primary_whitelisted_ips_used');
  }

  // auto_refresh_frequency_in_seconds - computed: true, optional: false, required: false
  public get autoRefreshFrequencyInSeconds() {
    return this.getNumberAttribute('auto_refresh_frequency_in_seconds');
  }

  // auto_refresh_point_lag_in_seconds - computed: true, optional: false, required: false
  public get autoRefreshPointLagInSeconds() {
    return this.getNumberAttribute('auto_refresh_point_lag_in_seconds');
  }

  // autonomous_container_database_id - computed: true, optional: false, required: false
  public get autonomousContainerDatabaseId() {
    return this.getStringAttribute('autonomous_container_database_id');
  }

  // autonomous_database_backup_id - computed: true, optional: false, required: false
  public get autonomousDatabaseBackupId() {
    return this.getStringAttribute('autonomous_database_backup_id');
  }

  // autonomous_database_id - computed: true, optional: false, required: false
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
  }

  // autonomous_maintenance_schedule_type - computed: true, optional: false, required: false
  public get autonomousMaintenanceScheduleType() {
    return this.getStringAttribute('autonomous_maintenance_schedule_type');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // available_upgrade_versions - computed: true, optional: false, required: false
  public get availableUpgradeVersions() {
    return this.getListAttribute('available_upgrade_versions');
  }

  // backup_config - computed: true, optional: false, required: false
  private _backupConfig = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList(this, "backup_config", false);
  public get backupConfig() {
    return this._backupConfig;
  }

  // backup_retention_period_in_days - computed: true, optional: false, required: false
  public get backupRetentionPeriodInDays() {
    return this.getNumberAttribute('backup_retention_period_in_days');
  }

  // byol_compute_count_limit - computed: true, optional: false, required: false
  public get byolComputeCountLimit() {
    return this.getNumberAttribute('byol_compute_count_limit');
  }

  // character_set - computed: true, optional: false, required: false
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }

  // clone_table_space_list - computed: true, optional: false, required: false
  public get cloneTableSpaceList() {
    return this.getNumberListAttribute('clone_table_space_list');
  }

  // clone_type - computed: true, optional: false, required: false
  public get cloneType() {
    return this.getStringAttribute('clone_type');
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_count - computed: true, optional: false, required: false
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // connection_urls - computed: true, optional: false, required: false
  private _connectionUrls = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList(this, "connection_urls", false);
  public get connectionUrls() {
    return this._connectionUrls;
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // customer_contacts - computed: true, optional: false, required: false
  private _customerContacts = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList(this, "customer_contacts", false);
  public get customerContacts() {
    return this._customerContacts;
  }

  // data_safe_status - computed: true, optional: false, required: false
  public get dataSafeStatus() {
    return this.getStringAttribute('data_safe_status');
  }

  // data_storage_size_in_gb - computed: true, optional: false, required: false
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }

  // data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }

  // database_edition - computed: true, optional: false, required: false
  public get databaseEdition() {
    return this.getStringAttribute('database_edition');
  }

  // database_management_status - computed: true, optional: false, required: false
  public get databaseManagementStatus() {
    return this.getStringAttribute('database_management_status');
  }

  // dataguard_region_type - computed: true, optional: false, required: false
  public get dataguardRegionType() {
    return this.getStringAttribute('dataguard_region_type');
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // db_tools_details - computed: true, optional: false, required: false
  private _dbToolsDetails = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList(this, "db_tools_details", false);
  public get dbToolsDetails() {
    return this._dbToolsDetails;
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // db_workload - computed: true, optional: false, required: false
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // disaster_recovery_region_type - computed: true, optional: false, required: false
  public get disasterRecoveryRegionType() {
    return this.getStringAttribute('disaster_recovery_region_type');
  }

  // disaster_recovery_type - computed: true, optional: false, required: false
  public get disasterRecoveryType() {
    return this.getStringAttribute('disaster_recovery_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enable_delete_scheduled_operations - computed: true, optional: false, required: false
  public get enableDeleteScheduledOperations() {
    return this.getBooleanAttribute('enable_delete_scheduled_operations');
  }

  // encryption_key - computed: true, optional: false, required: false
  private _encryptionKey = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList(this, "encryption_key", false);
  public get encryptionKey() {
    return this._encryptionKey;
  }

  // encryption_key_history_entry - computed: true, optional: false, required: false
  private _encryptionKeyHistoryEntry = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList(this, "encryption_key_history_entry", false);
  public get encryptionKeyHistoryEntry() {
    return this._encryptionKeyHistoryEntry;
  }

  // failed_data_recovery_in_seconds - computed: true, optional: false, required: false
  public get failedDataRecoveryInSeconds() {
    return this.getNumberAttribute('failed_data_recovery_in_seconds');
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

  // in_memory_area_in_gbs - computed: true, optional: false, required: false
  public get inMemoryAreaInGbs() {
    return this.getNumberAttribute('in_memory_area_in_gbs');
  }

  // in_memory_percentage - computed: true, optional: false, required: false
  public get inMemoryPercentage() {
    return this.getNumberAttribute('in_memory_percentage');
  }

  // infrastructure_type - computed: true, optional: false, required: false
  public get infrastructureType() {
    return this.getStringAttribute('infrastructure_type');
  }

  // is_access_control_enabled - computed: true, optional: false, required: false
  public get isAccessControlEnabled() {
    return this.getBooleanAttribute('is_access_control_enabled');
  }

  // is_auto_scaling_enabled - computed: true, optional: false, required: false
  public get isAutoScalingEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_enabled');
  }

  // is_auto_scaling_for_storage_enabled - computed: true, optional: false, required: false
  public get isAutoScalingForStorageEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_for_storage_enabled');
  }

  // is_backup_retention_locked - computed: true, optional: false, required: false
  public get isBackupRetentionLocked() {
    return this.getBooleanAttribute('is_backup_retention_locked');
  }

  // is_data_guard_enabled - computed: true, optional: false, required: false
  public get isDataGuardEnabled() {
    return this.getBooleanAttribute('is_data_guard_enabled');
  }

  // is_dedicated - computed: true, optional: false, required: false
  public get isDedicated() {
    return this.getBooleanAttribute('is_dedicated');
  }

  // is_dev_tier - computed: true, optional: false, required: false
  public get isDevTier() {
    return this.getBooleanAttribute('is_dev_tier');
  }

  // is_disable_db_version_upgrade_schedule - computed: true, optional: false, required: false
  public get isDisableDbVersionUpgradeSchedule() {
    return this.getBooleanAttribute('is_disable_db_version_upgrade_schedule');
  }

  // is_disconnect_peer - computed: true, optional: false, required: false
  public get isDisconnectPeer() {
    return this.getBooleanAttribute('is_disconnect_peer');
  }

  // is_free_tier - computed: true, optional: false, required: false
  public get isFreeTier() {
    return this.getBooleanAttribute('is_free_tier');
  }

  // is_local_data_guard_enabled - computed: true, optional: false, required: false
  public get isLocalDataGuardEnabled() {
    return this.getBooleanAttribute('is_local_data_guard_enabled');
  }

  // is_mtls_connection_required - computed: true, optional: false, required: false
  public get isMtlsConnectionRequired() {
    return this.getBooleanAttribute('is_mtls_connection_required');
  }

  // is_preview - computed: true, optional: false, required: false
  public get isPreview() {
    return this.getBooleanAttribute('is_preview');
  }

  // is_preview_version_with_service_terms_accepted - computed: true, optional: false, required: false
  public get isPreviewVersionWithServiceTermsAccepted() {
    return this.getBooleanAttribute('is_preview_version_with_service_terms_accepted');
  }

  // is_reconnect_clone_enabled - computed: true, optional: false, required: false
  public get isReconnectCloneEnabled() {
    return this.getBooleanAttribute('is_reconnect_clone_enabled');
  }

  // is_refreshable_clone - computed: true, optional: false, required: false
  public get isRefreshableClone() {
    return this.getBooleanAttribute('is_refreshable_clone');
  }

  // is_remote_data_guard_enabled - computed: true, optional: false, required: false
  public get isRemoteDataGuardEnabled() {
    return this.getBooleanAttribute('is_remote_data_guard_enabled');
  }

  // is_replicate_automatic_backups - computed: true, optional: false, required: false
  public get isReplicateAutomaticBackups() {
    return this.getBooleanAttribute('is_replicate_automatic_backups');
  }

  // is_schedule_db_version_upgrade_to_earliest - computed: true, optional: false, required: false
  public get isScheduleDbVersionUpgradeToEarliest() {
    return this.getBooleanAttribute('is_schedule_db_version_upgrade_to_earliest');
  }

  // is_shrink_only - computed: true, optional: false, required: false
  public get isShrinkOnly() {
    return this.getBooleanAttribute('is_shrink_only');
  }

  // key_history_entry - computed: true, optional: false, required: false
  private _keyHistoryEntry = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList(this, "key_history_entry", false);
  public get keyHistoryEntry() {
    return this._keyHistoryEntry;
  }

  // key_store_id - computed: true, optional: false, required: false
  public get keyStoreId() {
    return this.getStringAttribute('key_store_id');
  }

  // key_store_wallet_name - computed: true, optional: false, required: false
  public get keyStoreWalletName() {
    return this.getStringAttribute('key_store_wallet_name');
  }

  // key_version_id - computed: true, optional: false, required: false
  public get keyVersionId() {
    return this.getStringAttribute('key_version_id');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // kms_key_lifecycle_details - computed: true, optional: false, required: false
  public get kmsKeyLifecycleDetails() {
    return this.getStringAttribute('kms_key_lifecycle_details');
  }

  // kms_key_version_id - computed: true, optional: false, required: false
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // local_adg_auto_failover_max_data_loss_limit - computed: true, optional: false, required: false
  public get localAdgAutoFailoverMaxDataLossLimit() {
    return this.getNumberAttribute('local_adg_auto_failover_max_data_loss_limit');
  }

  // local_disaster_recovery_type - computed: true, optional: false, required: false
  public get localDisasterRecoveryType() {
    return this.getStringAttribute('local_disaster_recovery_type');
  }

  // local_standby_db - computed: true, optional: false, required: false
  private _localStandbyDb = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList(this, "local_standby_db", false);
  public get localStandbyDb() {
    return this._localStandbyDb;
  }

  // long_term_backup_schedule - computed: true, optional: false, required: false
  private _longTermBackupSchedule = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList(this, "long_term_backup_schedule", false);
  public get longTermBackupSchedule() {
    return this._longTermBackupSchedule;
  }

  // maintenance_target_component - computed: true, optional: false, required: false
  public get maintenanceTargetComponent() {
    return this.getStringAttribute('maintenance_target_component');
  }

  // max_cpu_core_count - computed: true, optional: false, required: false
  public get maxCpuCoreCount() {
    return this.getNumberAttribute('max_cpu_core_count');
  }

  // memory_per_compute_unit_in_gbs - computed: true, optional: false, required: false
  public get memoryPerComputeUnitInGbs() {
    return this.getNumberAttribute('memory_per_compute_unit_in_gbs');
  }

  // memory_per_oracle_compute_unit_in_gbs - computed: true, optional: false, required: false
  public get memoryPerOracleComputeUnitInGbs() {
    return this.getNumberAttribute('memory_per_oracle_compute_unit_in_gbs');
  }

  // ncharacter_set - computed: true, optional: false, required: false
  public get ncharacterSet() {
    return this.getStringAttribute('ncharacter_set');
  }

  // net_services_architecture - computed: true, optional: false, required: false
  public get netServicesArchitecture() {
    return this.getStringAttribute('net_services_architecture');
  }

  // next_long_term_backup_time_stamp - computed: true, optional: false, required: false
  public get nextLongTermBackupTimeStamp() {
    return this.getStringAttribute('next_long_term_backup_time_stamp');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // ocpu_count - computed: true, optional: false, required: false
  public get ocpuCount() {
    return this.getNumberAttribute('ocpu_count');
  }

  // open_mode - computed: true, optional: false, required: false
  public get openMode() {
    return this.getStringAttribute('open_mode');
  }

  // operations_insights_status - computed: true, optional: false, required: false
  public get operationsInsightsStatus() {
    return this.getStringAttribute('operations_insights_status');
  }

  // peer_db_id - computed: true, optional: false, required: false
  public get peerDbId() {
    return this.getStringAttribute('peer_db_id');
  }

  // peer_db_ids - computed: true, optional: false, required: false
  public get peerDbIds() {
    return this.getListAttribute('peer_db_ids');
  }

  // permission_level - computed: true, optional: false, required: false
  public get permissionLevel() {
    return this.getStringAttribute('permission_level');
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // private_endpoint_ip - computed: true, optional: false, required: false
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }

  // private_endpoint_label - computed: true, optional: false, required: false
  public get privateEndpointLabel() {
    return this.getStringAttribute('private_endpoint_label');
  }

  // provisionable_cpus - computed: true, optional: false, required: false
  public get provisionableCpus() {
    return this.getNumberListAttribute('provisionable_cpus');
  }

  // public_connection_urls - computed: true, optional: false, required: false
  private _publicConnectionUrls = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList(this, "public_connection_urls", false);
  public get publicConnectionUrls() {
    return this._publicConnectionUrls;
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }

  // refreshable_mode - computed: true, optional: false, required: false
  public get refreshableMode() {
    return this.getStringAttribute('refreshable_mode');
  }

  // refreshable_status - computed: true, optional: false, required: false
  public get refreshableStatus() {
    return this.getStringAttribute('refreshable_status');
  }

  // remote_disaster_recovery_configuration - computed: true, optional: false, required: false
  private _remoteDisasterRecoveryConfiguration = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList(this, "remote_disaster_recovery_configuration", false);
  public get remoteDisasterRecoveryConfiguration() {
    return this._remoteDisasterRecoveryConfiguration;
  }

  // remote_disaster_recovery_type - computed: true, optional: false, required: false
  public get remoteDisasterRecoveryType() {
    return this.getStringAttribute('remote_disaster_recovery_type');
  }

  // resource_pool_leader_id - computed: true, optional: false, required: false
  public get resourcePoolLeaderId() {
    return this.getStringAttribute('resource_pool_leader_id');
  }

  // resource_pool_summary - computed: true, optional: false, required: false
  private _resourcePoolSummary = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList(this, "resource_pool_summary", false);
  public get resourcePoolSummary() {
    return this._resourcePoolSummary;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // rotate_key_trigger - computed: true, optional: false, required: false
  public get rotateKeyTrigger() {
    return this.getBooleanAttribute('rotate_key_trigger');
  }

  // scheduled_operations - computed: true, optional: false, required: false
  private _scheduledOperations = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList(this, "scheduled_operations", false);
  public get scheduledOperations() {
    return this._scheduledOperations;
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // secret_version_number - computed: true, optional: false, required: false
  public get secretVersionNumber() {
    return this.getNumberAttribute('secret_version_number');
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // service_console_url - computed: true, optional: false, required: false
  public get serviceConsoleUrl() {
    return this.getStringAttribute('service_console_url');
  }

  // shrink_adb_trigger - computed: true, optional: false, required: false
  public get shrinkAdbTrigger() {
    return this.getNumberAttribute('shrink_adb_trigger');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // standby_db - computed: true, optional: false, required: false
  private _standbyDb = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList(this, "standby_db", false);
  public get standbyDb() {
    return this._standbyDb;
  }

  // standby_whitelisted_ips - computed: true, optional: false, required: false
  public get standbyWhitelistedIps() {
    return this.getListAttribute('standby_whitelisted_ips');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // supported_regions_to_clone_to - computed: true, optional: false, required: false
  public get supportedRegionsToCloneTo() {
    return this.getListAttribute('supported_regions_to_clone_to');
  }

  // switchover_to - computed: true, optional: false, required: false
  public get switchoverTo() {
    return this.getStringAttribute('switchover_to');
  }

  // switchover_to_remote_peer_id - computed: true, optional: false, required: false
  public get switchoverToRemotePeerId() {
    return this.getStringAttribute('switchover_to_remote_peer_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_data_guard_role_changed - computed: true, optional: false, required: false
  public get timeDataGuardRoleChanged() {
    return this.getStringAttribute('time_data_guard_role_changed');
  }

  // time_deletion_of_free_autonomous_database - computed: true, optional: false, required: false
  public get timeDeletionOfFreeAutonomousDatabase() {
    return this.getStringAttribute('time_deletion_of_free_autonomous_database');
  }

  // time_disaster_recovery_role_changed - computed: true, optional: false, required: false
  public get timeDisasterRecoveryRoleChanged() {
    return this.getStringAttribute('time_disaster_recovery_role_changed');
  }

  // time_earliest_available_db_version_upgrade - computed: true, optional: false, required: false
  public get timeEarliestAvailableDbVersionUpgrade() {
    return this.getStringAttribute('time_earliest_available_db_version_upgrade');
  }

  // time_latest_available_db_version_upgrade - computed: true, optional: false, required: false
  public get timeLatestAvailableDbVersionUpgrade() {
    return this.getStringAttribute('time_latest_available_db_version_upgrade');
  }

  // time_local_data_guard_enabled - computed: true, optional: false, required: false
  public get timeLocalDataGuardEnabled() {
    return this.getStringAttribute('time_local_data_guard_enabled');
  }

  // time_maintenance_begin - computed: true, optional: false, required: false
  public get timeMaintenanceBegin() {
    return this.getStringAttribute('time_maintenance_begin');
  }

  // time_maintenance_end - computed: true, optional: false, required: false
  public get timeMaintenanceEnd() {
    return this.getStringAttribute('time_maintenance_end');
  }

  // time_of_auto_refresh_start - computed: true, optional: false, required: false
  public get timeOfAutoRefreshStart() {
    return this.getStringAttribute('time_of_auto_refresh_start');
  }

  // time_of_joining_resource_pool - computed: true, optional: false, required: false
  public get timeOfJoiningResourcePool() {
    return this.getStringAttribute('time_of_joining_resource_pool');
  }

  // time_of_last_failover - computed: true, optional: false, required: false
  public get timeOfLastFailover() {
    return this.getStringAttribute('time_of_last_failover');
  }

  // time_of_last_refresh - computed: true, optional: false, required: false
  public get timeOfLastRefresh() {
    return this.getStringAttribute('time_of_last_refresh');
  }

  // time_of_last_refresh_point - computed: true, optional: false, required: false
  public get timeOfLastRefreshPoint() {
    return this.getStringAttribute('time_of_last_refresh_point');
  }

  // time_of_last_switchover - computed: true, optional: false, required: false
  public get timeOfLastSwitchover() {
    return this.getStringAttribute('time_of_last_switchover');
  }

  // time_of_next_refresh - computed: true, optional: false, required: false
  public get timeOfNextRefresh() {
    return this.getStringAttribute('time_of_next_refresh');
  }

  // time_reclamation_of_free_autonomous_database - computed: true, optional: false, required: false
  public get timeReclamationOfFreeAutonomousDatabase() {
    return this.getStringAttribute('time_reclamation_of_free_autonomous_database');
  }

  // time_scheduled_db_version_upgrade - computed: true, optional: false, required: false
  public get timeScheduledDbVersionUpgrade() {
    return this.getStringAttribute('time_scheduled_db_version_upgrade');
  }

  // time_undeleted - computed: true, optional: false, required: false
  public get timeUndeleted() {
    return this.getStringAttribute('time_undeleted');
  }

  // time_until_reconnect_clone_enabled - computed: true, optional: false, required: false
  public get timeUntilReconnectCloneEnabled() {
    return this.getStringAttribute('time_until_reconnect_clone_enabled');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // total_backup_storage_size_in_gbs - computed: true, optional: false, required: false
  public get totalBackupStorageSizeInGbs() {
    return this.getNumberAttribute('total_backup_storage_size_in_gbs');
  }

  // use_latest_available_backup_time_stamp - computed: true, optional: false, required: false
  public get useLatestAvailableBackupTimeStamp() {
    return this.getBooleanAttribute('use_latest_available_backup_time_stamp');
  }

  // used_data_storage_size_in_gbs - computed: true, optional: false, required: false
  public get usedDataStorageSizeInGbs() {
    return this.getNumberAttribute('used_data_storage_size_in_gbs');
  }

  // used_data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get usedDataStorageSizeInTbs() {
    return this.getNumberAttribute('used_data_storage_size_in_tbs');
  }

  // vanity_connection_urls - computed: true, optional: false, required: false
  private _vanityConnectionUrls = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityConnectionUrlsList(this, "vanity_connection_urls", false);
  public get vanityConnectionUrls() {
    return this._vanityConnectionUrls;
  }

  // vanity_url_details - computed: true, optional: false, required: false
  private _vanityUrlDetails = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesVanityUrlDetailsList(this, "vanity_url_details", false);
  public get vanityUrlDetails() {
    return this._vanityUrlDetails;
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // whitelisted_ips - computed: true, optional: false, required: false
  public get whitelistedIps() {
    return this.getListAttribute('whitelisted_ips');
  }
}

export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#name DataOciDatabaseAutonomousDatabases#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#regex DataOciDatabaseAutonomousDatabases#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#values DataOciDatabaseAutonomousDatabases#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseAutonomousDatabasesFilterToTerraform(struct?: DataOciDatabaseAutonomousDatabasesFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseAutonomousDatabasesFilterToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseAutonomousDatabasesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseAutonomousDatabasesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesFilterOutputReference {
    return new DataOciDatabaseAutonomousDatabasesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases oci_database_autonomous_databases}
*/
export class DataOciDatabaseAutonomousDatabases extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_databases";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabases resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseAutonomousDatabases to import
  * @param importFromId The id of the existing DataOciDatabaseAutonomousDatabases that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseAutonomousDatabases to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_databases", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_databases oci_database_autonomous_databases} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseAutonomousDatabasesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabasesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_databases',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autonomousContainerDatabaseId = config.autonomousContainerDatabaseId;
    this._compartmentId = config.compartmentId;
    this._dbVersion = config.dbVersion;
    this._dbWorkload = config.dbWorkload;
    this._displayName = config.displayName;
    this._id = config.id;
    this._infrastructureType = config.infrastructureType;
    this._isDataGuardEnabled = config.isDataGuardEnabled;
    this._isFreeTier = config.isFreeTier;
    this._isRefreshableClone = config.isRefreshableClone;
    this._isResourcePoolLeader = config.isResourcePoolLeader;
    this._lifecycleStateNotEqualTo = config.lifecycleStateNotEqualTo;
    this._resourcePoolLeaderId = config.resourcePoolLeaderId;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_container_database_id - computed: false, optional: true, required: false
  private _autonomousContainerDatabaseId?: string; 
  public get autonomousContainerDatabaseId() {
    return this.getStringAttribute('autonomous_container_database_id');
  }
  public set autonomousContainerDatabaseId(value: string) {
    this._autonomousContainerDatabaseId = value;
  }
  public resetAutonomousContainerDatabaseId() {
    this._autonomousContainerDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousContainerDatabaseIdInput() {
    return this._autonomousContainerDatabaseId;
  }

  // autonomous_databases - computed: true, optional: false, required: false
  private _autonomousDatabases = new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList(this, "autonomous_databases", false);
  public get autonomousDatabases() {
    return this._autonomousDatabases;
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

  // db_version - computed: false, optional: true, required: false
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  public resetDbVersion() {
    this._dbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // db_workload - computed: false, optional: true, required: false
  private _dbWorkload?: string; 
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }
  public set dbWorkload(value: string) {
    this._dbWorkload = value;
  }
  public resetDbWorkload() {
    this._dbWorkload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbWorkloadInput() {
    return this._dbWorkload;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // infrastructure_type - computed: false, optional: true, required: false
  private _infrastructureType?: string; 
  public get infrastructureType() {
    return this.getStringAttribute('infrastructure_type');
  }
  public set infrastructureType(value: string) {
    this._infrastructureType = value;
  }
  public resetInfrastructureType() {
    this._infrastructureType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureTypeInput() {
    return this._infrastructureType;
  }

  // is_data_guard_enabled - computed: false, optional: true, required: false
  private _isDataGuardEnabled?: boolean | cdktf.IResolvable; 
  public get isDataGuardEnabled() {
    return this.getBooleanAttribute('is_data_guard_enabled');
  }
  public set isDataGuardEnabled(value: boolean | cdktf.IResolvable) {
    this._isDataGuardEnabled = value;
  }
  public resetIsDataGuardEnabled() {
    this._isDataGuardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDataGuardEnabledInput() {
    return this._isDataGuardEnabled;
  }

  // is_free_tier - computed: false, optional: true, required: false
  private _isFreeTier?: boolean | cdktf.IResolvable; 
  public get isFreeTier() {
    return this.getBooleanAttribute('is_free_tier');
  }
  public set isFreeTier(value: boolean | cdktf.IResolvable) {
    this._isFreeTier = value;
  }
  public resetIsFreeTier() {
    this._isFreeTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFreeTierInput() {
    return this._isFreeTier;
  }

  // is_refreshable_clone - computed: false, optional: true, required: false
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

  // is_resource_pool_leader - computed: false, optional: true, required: false
  private _isResourcePoolLeader?: boolean | cdktf.IResolvable; 
  public get isResourcePoolLeader() {
    return this.getBooleanAttribute('is_resource_pool_leader');
  }
  public set isResourcePoolLeader(value: boolean | cdktf.IResolvable) {
    this._isResourcePoolLeader = value;
  }
  public resetIsResourcePoolLeader() {
    this._isResourcePoolLeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResourcePoolLeaderInput() {
    return this._isResourcePoolLeader;
  }

  // lifecycle_state_not_equal_to - computed: false, optional: true, required: false
  private _lifecycleStateNotEqualTo?: string; 
  public get lifecycleStateNotEqualTo() {
    return this.getStringAttribute('lifecycle_state_not_equal_to');
  }
  public set lifecycleStateNotEqualTo(value: string) {
    this._lifecycleStateNotEqualTo = value;
  }
  public resetLifecycleStateNotEqualTo() {
    this._lifecycleStateNotEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStateNotEqualToInput() {
    return this._lifecycleStateNotEqualTo;
  }

  // resource_pool_leader_id - computed: false, optional: true, required: false
  private _resourcePoolLeaderId?: string; 
  public get resourcePoolLeaderId() {
    return this.getStringAttribute('resource_pool_leader_id');
  }
  public set resourcePoolLeaderId(value: string) {
    this._resourcePoolLeaderId = value;
  }
  public resetResourcePoolLeaderId() {
    this._resourcePoolLeaderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolLeaderIdInput() {
    return this._resourcePoolLeaderId;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseAutonomousDatabasesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseAutonomousDatabasesFilter[] | cdktf.IResolvable) {
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
      autonomous_container_database_id: cdktf.stringToTerraform(this._autonomousContainerDatabaseId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      db_workload: cdktf.stringToTerraform(this._dbWorkload),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      infrastructure_type: cdktf.stringToTerraform(this._infrastructureType),
      is_data_guard_enabled: cdktf.booleanToTerraform(this._isDataGuardEnabled),
      is_free_tier: cdktf.booleanToTerraform(this._isFreeTier),
      is_refreshable_clone: cdktf.booleanToTerraform(this._isRefreshableClone),
      is_resource_pool_leader: cdktf.booleanToTerraform(this._isResourcePoolLeader),
      lifecycle_state_not_equal_to: cdktf.stringToTerraform(this._lifecycleStateNotEqualTo),
      resource_pool_leader_id: cdktf.stringToTerraform(this._resourcePoolLeaderId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDatabaseAutonomousDatabasesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autonomous_container_database_id: {
        value: cdktf.stringToHclTerraform(this._autonomousContainerDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_workload: {
        value: cdktf.stringToHclTerraform(this._dbWorkload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      infrastructure_type: {
        value: cdktf.stringToHclTerraform(this._infrastructureType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_data_guard_enabled: {
        value: cdktf.booleanToHclTerraform(this._isDataGuardEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_free_tier: {
        value: cdktf.booleanToHclTerraform(this._isFreeTier),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_refreshable_clone: {
        value: cdktf.booleanToHclTerraform(this._isRefreshableClone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_resource_pool_leader: {
        value: cdktf.booleanToHclTerraform(this._isResourcePoolLeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lifecycle_state_not_equal_to: {
        value: cdktf.stringToHclTerraform(this._lifecycleStateNotEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_pool_leader_id: {
        value: cdktf.stringToHclTerraform(this._resourcePoolLeaderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseAutonomousDatabasesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseAutonomousDatabasesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
