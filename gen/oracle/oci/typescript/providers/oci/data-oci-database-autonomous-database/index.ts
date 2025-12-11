// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_database#autonomous_database_id DataOciDatabaseAutonomousDatabase#autonomous_database_id}
  */
  readonly autonomousDatabaseId: string;
}
export interface DataOciDatabaseAutonomousDatabaseApexDetails {
}

export function dataOciDatabaseAutonomousDatabaseApexDetailsToTerraform(struct?: DataOciDatabaseAutonomousDatabaseApexDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseApexDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseApexDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseApexDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseApexDetails | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseApexDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference {
    return new DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseBackupConfig {
}

export function dataOciDatabaseAutonomousDatabaseBackupConfigToTerraform(struct?: DataOciDatabaseAutonomousDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseBackupConfigToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseBackupConfig | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference {
    return new DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles {
}

export function dataOciDatabaseAutonomousDatabaseConnectionStringsProfilesToTerraform(struct?: DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseConnectionStringsProfilesToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference {
    return new DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseConnectionStrings {
}

export function dataOciDatabaseAutonomousDatabaseConnectionStringsToTerraform(struct?: DataOciDatabaseAutonomousDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseConnectionStringsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseConnectionStrings | undefined) {
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
  private _profiles = new DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }
}

export class DataOciDatabaseAutonomousDatabaseConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference {
    return new DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseConnectionUrls {
}

export function dataOciDatabaseAutonomousDatabaseConnectionUrlsToTerraform(struct?: DataOciDatabaseAutonomousDatabaseConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseConnectionUrlsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseConnectionUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseConnectionUrls | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseConnectionUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference {
    return new DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseCustomerContacts {
}

export function dataOciDatabaseAutonomousDatabaseCustomerContactsToTerraform(struct?: DataOciDatabaseAutonomousDatabaseCustomerContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseCustomerContactsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseCustomerContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseCustomerContacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseCustomerContacts | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseCustomerContactsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference {
    return new DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseDbToolsDetails {
}

export function dataOciDatabaseAutonomousDatabaseDbToolsDetailsToTerraform(struct?: DataOciDatabaseAutonomousDatabaseDbToolsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseDbToolsDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseDbToolsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseDbToolsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseDbToolsDetails | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseDbToolsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference {
    return new DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseEncryptionKey {
}

export function dataOciDatabaseAutonomousDatabaseEncryptionKeyToTerraform(struct?: DataOciDatabaseAutonomousDatabaseEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseEncryptionKeyToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseEncryptionKey | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference {
    return new DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey {
}

export function dataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyToTerraform(struct?: DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference {
    return new DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry {
}

export function dataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryToTerraform(struct?: DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key - computed: true, optional: false, required: false
  private _encryptionKey = new DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList(this, "encryption_key", false);
  public get encryptionKey() {
    return this._encryptionKey;
  }

  // time_activated - computed: true, optional: false, required: false
  public get timeActivated() {
    return this.getStringAttribute('time_activated');
  }
}

export class DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference {
    return new DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseKeyHistoryEntry {
}

export function dataOciDatabaseAutonomousDatabaseKeyHistoryEntryToTerraform(struct?: DataOciDatabaseAutonomousDatabaseKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseKeyHistoryEntryToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseKeyHistoryEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseKeyHistoryEntry | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference {
    return new DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseLocalStandbyDb {
}

export function dataOciDatabaseAutonomousDatabaseLocalStandbyDbToTerraform(struct?: DataOciDatabaseAutonomousDatabaseLocalStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseLocalStandbyDbToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseLocalStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseLocalStandbyDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseLocalStandbyDb | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseLocalStandbyDbList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference {
    return new DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule {
}

export function dataOciDatabaseAutonomousDatabaseLongTermBackupScheduleToTerraform(struct?: DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseLongTermBackupScheduleToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference {
    return new DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasePublicConnectionUrls {
}

export function dataOciDatabaseAutonomousDatabasePublicConnectionUrlsToTerraform(struct?: DataOciDatabaseAutonomousDatabasePublicConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasePublicConnectionUrlsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasePublicConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasePublicConnectionUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasePublicConnectionUrls | undefined) {
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

export class DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference {
    return new DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration {
}

export function dataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationToTerraform(struct?: DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference {
    return new DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseResourcePoolSummary {
}

export function dataOciDatabaseAutonomousDatabaseResourcePoolSummaryToTerraform(struct?: DataOciDatabaseAutonomousDatabaseResourcePoolSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseResourcePoolSummaryToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseResourcePoolSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseResourcePoolSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseResourcePoolSummary | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference {
    return new DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek {
}

export function dataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekToTerraform(struct?: DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference {
    return new DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseScheduledOperations {
}

export function dataOciDatabaseAutonomousDatabaseScheduledOperationsToTerraform(struct?: DataOciDatabaseAutonomousDatabaseScheduledOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseScheduledOperationsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseScheduledOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseScheduledOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseScheduledOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_week - computed: true, optional: false, required: false
  private _dayOfWeek = new DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList(this, "day_of_week", false);
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

export class DataOciDatabaseAutonomousDatabaseScheduledOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference {
    return new DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseStandbyDb {
}

export function dataOciDatabaseAutonomousDatabaseStandbyDbToTerraform(struct?: DataOciDatabaseAutonomousDatabaseStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseStandbyDbToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseStandbyDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseStandbyDb | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseStandbyDbList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference {
    return new DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseVanityConnectionUrls {
}

export function dataOciDatabaseAutonomousDatabaseVanityConnectionUrlsToTerraform(struct?: DataOciDatabaseAutonomousDatabaseVanityConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseVanityConnectionUrlsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseVanityConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseVanityConnectionUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseVanityConnectionUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseVanityConnectionUrls | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseVanityConnectionUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseVanityConnectionUrlsOutputReference {
    return new DataOciDatabaseAutonomousDatabaseVanityConnectionUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseVanityUrlDetails {
}

export function dataOciDatabaseAutonomousDatabaseVanityUrlDetailsToTerraform(struct?: DataOciDatabaseAutonomousDatabaseVanityUrlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseVanityUrlDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseVanityUrlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseVanityUrlDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseVanityUrlDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseVanityUrlDetails | undefined) {
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

export class DataOciDatabaseAutonomousDatabaseVanityUrlDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseVanityUrlDetailsOutputReference {
    return new DataOciDatabaseAutonomousDatabaseVanityUrlDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_database oci_database_autonomous_database}
*/
export class DataOciDatabaseAutonomousDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseAutonomousDatabase to import
  * @param importFromId The id of the existing DataOciDatabaseAutonomousDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseAutonomousDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_database oci_database_autonomous_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseAutonomousDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_database',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autonomousDatabaseId = config.autonomousDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _apexDetails = new DataOciDatabaseAutonomousDatabaseApexDetailsList(this, "apex_details", false);
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

  // autonomous_database_id - computed: false, optional: false, required: true
  private _autonomousDatabaseId?: string; 
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
  }
  public set autonomousDatabaseId(value: string) {
    this._autonomousDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseIdInput() {
    return this._autonomousDatabaseId;
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
  private _backupConfig = new DataOciDatabaseAutonomousDatabaseBackupConfigList(this, "backup_config", false);
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
  private _connectionStrings = new DataOciDatabaseAutonomousDatabaseConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // connection_urls - computed: true, optional: false, required: false
  private _connectionUrls = new DataOciDatabaseAutonomousDatabaseConnectionUrlsList(this, "connection_urls", false);
  public get connectionUrls() {
    return this._connectionUrls;
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // customer_contacts - computed: true, optional: false, required: false
  private _customerContacts = new DataOciDatabaseAutonomousDatabaseCustomerContactsList(this, "customer_contacts", false);
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
  private _dbToolsDetails = new DataOciDatabaseAutonomousDatabaseDbToolsDetailsList(this, "db_tools_details", false);
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
  private _encryptionKey = new DataOciDatabaseAutonomousDatabaseEncryptionKeyList(this, "encryption_key", false);
  public get encryptionKey() {
    return this._encryptionKey;
  }

  // encryption_key_history_entry - computed: true, optional: false, required: false
  private _encryptionKeyHistoryEntry = new DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList(this, "encryption_key_history_entry", false);
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
  private _keyHistoryEntry = new DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList(this, "key_history_entry", false);
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
  private _localStandbyDb = new DataOciDatabaseAutonomousDatabaseLocalStandbyDbList(this, "local_standby_db", false);
  public get localStandbyDb() {
    return this._localStandbyDb;
  }

  // long_term_backup_schedule - computed: true, optional: false, required: false
  private _longTermBackupSchedule = new DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList(this, "long_term_backup_schedule", false);
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
  private _publicConnectionUrls = new DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList(this, "public_connection_urls", false);
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
  private _remoteDisasterRecoveryConfiguration = new DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList(this, "remote_disaster_recovery_configuration", false);
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
  private _resourcePoolSummary = new DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList(this, "resource_pool_summary", false);
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
  private _scheduledOperations = new DataOciDatabaseAutonomousDatabaseScheduledOperationsList(this, "scheduled_operations", false);
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
  private _standbyDb = new DataOciDatabaseAutonomousDatabaseStandbyDbList(this, "standby_db", false);
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
  private _vanityConnectionUrls = new DataOciDatabaseAutonomousDatabaseVanityConnectionUrlsList(this, "vanity_connection_urls", false);
  public get vanityConnectionUrls() {
    return this._vanityConnectionUrls;
  }

  // vanity_url_details - computed: true, optional: false, required: false
  private _vanityUrlDetails = new DataOciDatabaseAutonomousDatabaseVanityUrlDetailsList(this, "vanity_url_details", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_database_id: cdktf.stringToTerraform(this._autonomousDatabaseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autonomous_database_id: {
        value: cdktf.stringToHclTerraform(this._autonomousDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
