// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousDatabasesClonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones#autonomous_database_id DataOciDatabaseAutonomousDatabasesClones#autonomous_database_id}
  */
  readonly autonomousDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones#clone_type DataOciDatabaseAutonomousDatabasesClones#clone_type}
  */
  readonly cloneType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones#compartment_id DataOciDatabaseAutonomousDatabasesClones#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones#display_name DataOciDatabaseAutonomousDatabasesClones#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones#id DataOciDatabaseAutonomousDatabasesClones#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones#state DataOciDatabaseAutonomousDatabasesClones#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones#filter DataOciDatabaseAutonomousDatabasesClones#filter}
  */
  readonly filter?: DataOciDatabaseAutonomousDatabasesClonesFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings | undefined) {
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
  private _profiles = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey | undefined) {
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

  // autonomous_databases_clone_provider - computed: true, optional: false, required: false
  public get autonomousDatabasesCloneProvider() {
    return this.getStringAttribute('autonomous_databases_clone_provider');
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey | undefined) {
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

  // autonomous_databases_clone_provider - computed: true, optional: false, required: false
  public get autonomousDatabasesCloneProvider() {
    return this.getStringAttribute('autonomous_databases_clone_provider');
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key - computed: true, optional: false, required: false
  private _encryptionKey = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList(this, "encryption_key", false);
  public get encryptionKey() {
    return this._encryptionKey;
  }

  // time_activated - computed: true, optional: false, required: false
  public get timeActivated() {
    return this.getStringAttribute('time_activated');
  }
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_week - computed: true, optional: false, required: false
  private _dayOfWeek = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList(this, "day_of_week", false);
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityConnectionUrls {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityConnectionUrlsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityConnectionUrlsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityConnectionUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityConnectionUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityConnectionUrls | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityConnectionUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityConnectionUrlsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityConnectionUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityUrlDetails {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityUrlDetailsToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityUrlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityUrlDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityUrlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityUrlDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityUrlDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityUrlDetails | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityUrlDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityUrlDetailsOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityUrlDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases {
}

export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases | undefined) {
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

  // allocated_storage_size_in_tbs - computed: true, optional: false, required: false
  public get allocatedStorageSizeInTbs() {
    return this.getNumberAttribute('allocated_storage_size_in_tbs');
  }

  // apex_details - computed: true, optional: false, required: false
  private _apexDetails = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList(this, "apex_details", false);
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
  private _backupConfig = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList(this, "backup_config", false);
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
  private _connectionStrings = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // connection_urls - computed: true, optional: false, required: false
  private _connectionUrls = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList(this, "connection_urls", false);
  public get connectionUrls() {
    return this._connectionUrls;
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // customer_contacts - computed: true, optional: false, required: false
  private _customerContacts = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList(this, "customer_contacts", false);
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
  private _dbToolsDetails = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList(this, "db_tools_details", false);
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // encryption_key - computed: true, optional: false, required: false
  private _encryptionKey = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList(this, "encryption_key", false);
  public get encryptionKey() {
    return this._encryptionKey;
  }

  // encryption_key_history_entry - computed: true, optional: false, required: false
  private _encryptionKeyHistoryEntry = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList(this, "encryption_key_history_entry", false);
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

  // key_history_entry - computed: true, optional: false, required: false
  private _keyHistoryEntry = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList(this, "key_history_entry", false);
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
  private _localStandbyDb = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList(this, "local_standby_db", false);
  public get localStandbyDb() {
    return this._localStandbyDb;
  }

  // long_term_backup_schedule - computed: true, optional: false, required: false
  private _longTermBackupSchedule = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList(this, "long_term_backup_schedule", false);
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

  // peer_db_ids - computed: true, optional: false, required: false
  public get peerDbIds() {
    return this.getListAttribute('peer_db_ids');
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
  private _publicConnectionUrls = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList(this, "public_connection_urls", false);
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
  private _remoteDisasterRecoveryConfiguration = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList(this, "remote_disaster_recovery_configuration", false);
  public get remoteDisasterRecoveryConfiguration() {
    return this._remoteDisasterRecoveryConfiguration;
  }

  // resource_pool_leader_id - computed: true, optional: false, required: false
  public get resourcePoolLeaderId() {
    return this.getStringAttribute('resource_pool_leader_id');
  }

  // resource_pool_summary - computed: true, optional: false, required: false
  private _resourcePoolSummary = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList(this, "resource_pool_summary", false);
  public get resourcePoolSummary() {
    return this._resourcePoolSummary;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // scheduled_operations - computed: true, optional: false, required: false
  private _scheduledOperations = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList(this, "scheduled_operations", false);
  public get scheduledOperations() {
    return this._scheduledOperations;
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

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // standby_db - computed: true, optional: false, required: false
  private _standbyDb = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList(this, "standby_db", false);
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

  // total_backup_storage_size_in_gbs - computed: true, optional: false, required: false
  public get totalBackupStorageSizeInGbs() {
    return this.getNumberAttribute('total_backup_storage_size_in_gbs');
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
  private _vanityConnectionUrls = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityConnectionUrlsList(this, "vanity_connection_urls", false);
  public get vanityConnectionUrls() {
    return this._vanityConnectionUrls;
  }

  // vanity_url_details - computed: true, optional: false, required: false
  private _vanityUrlDetails = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesVanityUrlDetailsList(this, "vanity_url_details", false);
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

export class DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabasesClonesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones#name DataOciDatabaseAutonomousDatabasesClones#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones#regex DataOciDatabaseAutonomousDatabasesClones#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones#values DataOciDatabaseAutonomousDatabasesClones#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseAutonomousDatabasesClonesFilterToTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseAutonomousDatabasesClonesFilterToHclTerraform(struct?: DataOciDatabaseAutonomousDatabasesClonesFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabasesClonesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseAutonomousDatabasesClonesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseAutonomousDatabasesClonesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseAutonomousDatabasesClonesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference {
    return new DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones oci_database_autonomous_databases_clones}
*/
export class DataOciDatabaseAutonomousDatabasesClones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_databases_clones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabasesClones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseAutonomousDatabasesClones to import
  * @param importFromId The id of the existing DataOciDatabaseAutonomousDatabasesClones that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseAutonomousDatabasesClones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_databases_clones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_databases_clones oci_database_autonomous_databases_clones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseAutonomousDatabasesClonesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabasesClonesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_databases_clones',
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
    this._cloneType = config.cloneType;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // autonomous_databases - computed: true, optional: false, required: false
  private _autonomousDatabases = new DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList(this, "autonomous_databases", false);
  public get autonomousDatabases() {
    return this._autonomousDatabases;
  }

  // clone_type - computed: false, optional: true, required: false
  private _cloneType?: string; 
  public get cloneType() {
    return this.getStringAttribute('clone_type');
  }
  public set cloneType(value: string) {
    this._cloneType = value;
  }
  public resetCloneType() {
    this._cloneType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneTypeInput() {
    return this._cloneType;
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
  private _filter = new DataOciDatabaseAutonomousDatabasesClonesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseAutonomousDatabasesClonesFilter[] | cdktf.IResolvable) {
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
      autonomous_database_id: cdktf.stringToTerraform(this._autonomousDatabaseId),
      clone_type: cdktf.stringToTerraform(this._cloneType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDatabaseAutonomousDatabasesClonesFilterToTerraform, true)(this._filter.internalValue),
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
      clone_type: {
        value: cdktf.stringToHclTerraform(this._cloneType),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseAutonomousDatabasesClonesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseAutonomousDatabasesClonesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
