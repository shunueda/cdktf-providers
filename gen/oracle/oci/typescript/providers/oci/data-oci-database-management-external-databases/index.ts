// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_databases
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementExternalDatabasesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_databases#compartment_id DataOciDatabaseManagementExternalDatabases#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_databases#display_name DataOciDatabaseManagementExternalDatabases#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_databases#external_database_id DataOciDatabaseManagementExternalDatabases#external_database_id}
  */
  readonly externalDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_databases#external_db_system_id DataOciDatabaseManagementExternalDatabases#external_db_system_id}
  */
  readonly externalDbSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_databases#id DataOciDatabaseManagementExternalDatabases#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_databases#filter DataOciDatabaseManagementExternalDatabases#filter}
  */
  readonly filter?: DataOciDatabaseManagementExternalDatabasesFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig {
}

export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigToTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigToHclTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_id - computed: true, optional: false, required: false
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }

  // database_management_status - computed: true, optional: false, required: false
  public get databaseManagementStatus() {
    return this.getStringAttribute('database_management_status');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference {
    return new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo {
}

export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoToTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoToHclTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference {
    return new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo {
}

export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoToTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoToHclTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // exadata_infra_info - computed: true, optional: false, required: false
  private _exadataInfraInfo = new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList(this, "exadata_infra_info", false);
  public get exadataInfraInfo() {
    return this._exadataInfraInfo;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference {
    return new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails {
}

export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsToTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsToHclTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // database_connector_id - computed: true, optional: false, required: false
  public get databaseConnectorId() {
    return this.getStringAttribute('database_connector_id');
  }

  // management_agent_id - computed: true, optional: false, required: false
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }

  // private_end_point_id - computed: true, optional: false, required: false
  public get privateEndPointId() {
    return this.getStringAttribute('private_end_point_id');
  }
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference {
    return new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials {
}

export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsToTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsToHclTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential_name - computed: true, optional: false, required: false
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // named_credential_id - computed: true, optional: false, required: false
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // ssl_secret_id - computed: true, optional: false, required: false
  public get sslSecretId() {
    return this.getStringAttribute('ssl_secret_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference {
    return new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString {
}

export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringToTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringToHclTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference {
    return new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails {
}

export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsToTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsToHclTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_credentials - computed: true, optional: false, required: false
  private _connectionCredentials = new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList(this, "connection_credentials", false);
  public get connectionCredentials() {
    return this._connectionCredentials;
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList(this, "connection_string", false);
  public get connectionString() {
    return this._connectionString;
  }
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference {
    return new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs {
}

export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsToTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsToHclTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_details - computed: true, optional: false, required: false
  private _connectorDetails = new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList(this, "connector_details", false);
  public get connectorDetails() {
    return this._connectorDetails;
  }

  // database_connection_details - computed: true, optional: false, required: false
  private _databaseConnectionDetails = new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList(this, "database_connection_details", false);
  public get databaseConnectionDetails() {
    return this._databaseConnectionDetails;
  }

  // feature - computed: true, optional: false, required: false
  public get feature() {
    return this.getStringAttribute('feature');
  }

  // feature_status - computed: true, optional: false, required: false
  public get featureStatus() {
    return this.getStringAttribute('feature_status');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference {
    return new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails {
}

export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsToTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsToHclTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_number - computed: true, optional: false, required: false
  public get instanceNumber() {
    return this.getNumberAttribute('instance_number');
  }
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference {
    return new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems {
}

export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsToTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsToHclTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database_platform_name - computed: true, optional: false, required: false
  public get databasePlatformName() {
    return this.getStringAttribute('database_platform_name');
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

  // db_management_config - computed: true, optional: false, required: false
  private _dbManagementConfig = new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList(this, "db_management_config", false);
  public get dbManagementConfig() {
    return this._dbManagementConfig;
  }

  // db_system_info - computed: true, optional: false, required: false
  private _dbSystemInfo = new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList(this, "db_system_info", false);
  public get dbSystemInfo() {
    return this._dbSystemInfo;
  }

  // db_unique_name - computed: true, optional: false, required: false
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }

  // dbmgmt_feature_configs - computed: true, optional: false, required: false
  private _dbmgmtFeatureConfigs = new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList(this, "dbmgmt_feature_configs", false);
  public get dbmgmtFeatureConfigs() {
    return this._dbmgmtFeatureConfigs;
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

  // external_container_database_id - computed: true, optional: false, required: false
  public get externalContainerDatabaseId() {
    return this.getStringAttribute('external_container_database_id');
  }

  // external_db_home_id - computed: true, optional: false, required: false
  public get externalDbHomeId() {
    return this.getStringAttribute('external_db_home_id');
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

  // instance_details - computed: true, optional: false, required: false
  private _instanceDetails = new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList(this, "instance_details", false);
  public get instanceDetails() {
    return this._instanceDetails;
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

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference {
    return new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection {
}

export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionToTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionToHclTerraform(struct?: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference {
    return new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDatabasesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_databases#name DataOciDatabaseManagementExternalDatabases#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_databases#regex DataOciDatabaseManagementExternalDatabases#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_databases#values DataOciDatabaseManagementExternalDatabases#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseManagementExternalDatabasesFilterToTerraform(struct?: DataOciDatabaseManagementExternalDatabasesFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseManagementExternalDatabasesFilterToHclTerraform(struct?: DataOciDatabaseManagementExternalDatabasesFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseManagementExternalDatabasesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDatabasesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseManagementExternalDatabasesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseManagementExternalDatabasesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseManagementExternalDatabasesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseManagementExternalDatabasesFilterOutputReference {
    return new DataOciDatabaseManagementExternalDatabasesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_databases oci_database_management_external_databases}
*/
export class DataOciDatabaseManagementExternalDatabases extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_databases";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementExternalDatabases resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementExternalDatabases to import
  * @param importFromId The id of the existing DataOciDatabaseManagementExternalDatabases that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_databases#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementExternalDatabases to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_databases", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_databases oci_database_management_external_databases} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementExternalDatabasesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementExternalDatabasesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_databases',
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
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._externalDatabaseId = config.externalDatabaseId;
    this._externalDbSystemId = config.externalDbSystemId;
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
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

  // external_database_collection - computed: true, optional: false, required: false
  private _externalDatabaseCollection = new DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList(this, "external_database_collection", false);
  public get externalDatabaseCollection() {
    return this._externalDatabaseCollection;
  }

  // external_database_id - computed: false, optional: true, required: false
  private _externalDatabaseId?: string; 
  public get externalDatabaseId() {
    return this.getStringAttribute('external_database_id');
  }
  public set externalDatabaseId(value: string) {
    this._externalDatabaseId = value;
  }
  public resetExternalDatabaseId() {
    this._externalDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDatabaseIdInput() {
    return this._externalDatabaseId;
  }

  // external_db_system_id - computed: false, optional: true, required: false
  private _externalDbSystemId?: string; 
  public get externalDbSystemId() {
    return this.getStringAttribute('external_db_system_id');
  }
  public set externalDbSystemId(value: string) {
    this._externalDbSystemId = value;
  }
  public resetExternalDbSystemId() {
    this._externalDbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDbSystemIdInput() {
    return this._externalDbSystemId;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseManagementExternalDatabasesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseManagementExternalDatabasesFilter[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      external_database_id: cdktf.stringToTerraform(this._externalDatabaseId),
      external_db_system_id: cdktf.stringToTerraform(this._externalDbSystemId),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataOciDatabaseManagementExternalDatabasesFilterToTerraform, true)(this._filter.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_database_id: {
        value: cdktf.stringToHclTerraform(this._externalDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_db_system_id: {
        value: cdktf.stringToHclTerraform(this._externalDbSystemId),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseManagementExternalDatabasesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseManagementExternalDatabasesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
