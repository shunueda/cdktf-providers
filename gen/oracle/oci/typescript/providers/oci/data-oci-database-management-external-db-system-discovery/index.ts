// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementExternalDbSystemDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discovery#external_db_system_discovery_id DataOciDatabaseManagementExternalDbSystemDiscovery#external_db_system_discovery_id}
  */
  readonly externalDbSystemDiscoveryId: string;
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstances {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adr_home_directory - computed: true, optional: false, required: false
  public get adrHomeDirectory() {
    return this.getStringAttribute('adr_home_directory');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponents {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // association_type - computed: true, optional: false, required: false
  public get associationType() {
    return this.getStringAttribute('association_type');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString | undefined) {
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

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // named_credential_id - computed: true, optional: false, required: false
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfo {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // connection_credentials - computed: true, optional: false, required: false
  private _connectionCredentials = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsList(this, "connection_credentials", false);
  public get connectionCredentials() {
    return this._connectionCredentials;
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringList(this, "connection_string", false);
  public get connectionString() {
    return this._connectionString;
  }

  // database_credential - computed: true, optional: false, required: false
  private _databaseCredential = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialList(this, "database_credential", false);
  public get databaseCredential() {
    return this._databaseCredential;
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnector {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // connection_failure_message - computed: true, optional: false, required: false
  public get connectionFailureMessage() {
    return this.getStringAttribute('connection_failure_message');
  }

  // connection_info - computed: true, optional: false, required: false
  private _connectionInfo = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoList(this, "connection_info", false);
  public get connectionInfo() {
    return this._connectionInfo;
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // time_connection_status_last_updated - computed: true, optional: false, required: false
  public get timeConnectionStatusLastUpdated() {
    return this.getStringAttribute('time_connection_status_last_updated');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstances {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adr_home_directory - computed: true, optional: false, required: false
  public get adrHomeDirectory() {
    return this.getStringAttribute('adr_home_directory');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // connector - computed: true, optional: false, required: false
  private _connector = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorList(this, "connector", false);
  public get connector() {
    return this._connector;
  }

  // crs_base_directory - computed: true, optional: false, required: false
  public get crsBaseDirectory() {
    return this.getStringAttribute('crs_base_directory');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // node_role - computed: true, optional: false, required: false
  public get nodeRole() {
    return this.getStringAttribute('node_role');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentials {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentials | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionString {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionString | undefined) {
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

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredential {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // named_credential_id - computed: true, optional: false, required: false
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfo {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // connection_credentials - computed: true, optional: false, required: false
  private _connectionCredentials = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsList(this, "connection_credentials", false);
  public get connectionCredentials() {
    return this._connectionCredentials;
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringList(this, "connection_string", false);
  public get connectionString() {
    return this._connectionString;
  }

  // database_credential - computed: true, optional: false, required: false
  private _databaseCredential = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialList(this, "database_credential", false);
  public get databaseCredential() {
    return this._databaseCredential;
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnector {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // connection_failure_message - computed: true, optional: false, required: false
  public get connectionFailureMessage() {
    return this.getStringAttribute('connection_failure_message');
  }

  // connection_info - computed: true, optional: false, required: false
  private _connectionInfo = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoList(this, "connection_info", false);
  public get connectionInfo() {
    return this._connectionInfo;
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // time_connection_status_last_updated - computed: true, optional: false, required: false
  public get timeConnectionStatusLastUpdated() {
    return this.getStringAttribute('time_connection_status_last_updated');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstances {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adr_home_directory - computed: true, optional: false, required: false
  public get adrHomeDirectory() {
    return this.getStringAttribute('adr_home_directory');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // oracle_home - computed: true, optional: false, required: false
  public get oracleHome() {
    return this.getStringAttribute('oracle_home');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpoints {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return this.getListAttribute('services');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurations {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_number - computed: true, optional: false, required: false
  public get networkNumber() {
    return this.getNumberAttribute('network_number');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString | undefined) {
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

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // named_credential_id - computed: true, optional: false, required: false
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // connection_credentials - computed: true, optional: false, required: false
  private _connectionCredentials = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsList(this, "connection_credentials", false);
  public get connectionCredentials() {
    return this._connectionCredentials;
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringList(this, "connection_string", false);
  public get connectionString() {
    return this._connectionString;
  }

  // database_credential - computed: true, optional: false, required: false
  private _databaseCredential = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialList(this, "database_credential", false);
  public get databaseCredential() {
    return this._databaseCredential;
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnector {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // connection_failure_message - computed: true, optional: false, required: false
  public get connectionFailureMessage() {
    return this.getStringAttribute('connection_failure_message');
  }

  // connection_info - computed: true, optional: false, required: false
  private _connectionInfo = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoList(this, "connection_info", false);
  public get connectionInfo() {
    return this._connectionInfo;
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // time_connection_status_last_updated - computed: true, optional: false, required: false
  public get timeConnectionStatusLastUpdated() {
    return this.getStringAttribute('time_connection_status_last_updated');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabases {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabases | undefined) {
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

  // connector - computed: true, optional: false, required: false
  private _connector = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorList(this, "connector", false);
  public get connector() {
    return this._connector;
  }

  // container_database_id - computed: true, optional: false, required: false
  public get containerDatabaseId() {
    return this.getStringAttribute('container_database_id');
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurations {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_number - computed: true, optional: false, required: false
  public get networkNumber() {
    return this.getNumberAttribute('network_number');
  }

  // scan_name - computed: true, optional: false, required: false
  public get scanName() {
    return this.getStringAttribute('scan_name');
  }

  // scan_port - computed: true, optional: false, required: false
  public get scanPort() {
    return this.getNumberAttribute('scan_port');
  }

  // scan_protocol - computed: true, optional: false, required: false
  public get scanProtocol() {
    return this.getStringAttribute('scan_protocol');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurations {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // network_number - computed: true, optional: false, required: false
  public get networkNumber() {
    return this.getNumberAttribute('network_number');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponents {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adr_home_directory - computed: true, optional: false, required: false
  public get adrHomeDirectory() {
    return this.getStringAttribute('adr_home_directory');
  }

  // asm_instances - computed: true, optional: false, required: false
  private _asmInstances = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesList(this, "asm_instances", false);
  public get asmInstances() {
    return this._asmInstances;
  }

  // associated_components - computed: true, optional: false, required: false
  private _associatedComponents = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsList(this, "associated_components", false);
  public get associatedComponents() {
    return this._associatedComponents;
  }

  // can_enable_all_current_pdbs - computed: true, optional: false, required: false
  public get canEnableAllCurrentPdbs() {
    return this.getBooleanAttribute('can_enable_all_current_pdbs');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_instances - computed: true, optional: false, required: false
  private _clusterInstances = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesList(this, "cluster_instances", false);
  public get clusterInstances() {
    return this._clusterInstances;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // connector - computed: true, optional: false, required: false
  private _connector = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorList(this, "connector", false);
  public get connector() {
    return this._connector;
  }

  // container_database_id - computed: true, optional: false, required: false
  public get containerDatabaseId() {
    return this.getStringAttribute('container_database_id');
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // crs_base_directory - computed: true, optional: false, required: false
  public get crsBaseDirectory() {
    return this.getStringAttribute('crs_base_directory');
  }

  // db_edition - computed: true, optional: false, required: false
  public get dbEdition() {
    return this.getStringAttribute('db_edition');
  }

  // db_id - computed: true, optional: false, required: false
  public get dbId() {
    return this.getStringAttribute('db_id');
  }

  // db_instances - computed: true, optional: false, required: false
  private _dbInstances = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesList(this, "db_instances", false);
  public get dbInstances() {
    return this._dbInstances;
  }

  // db_node_name - computed: true, optional: false, required: false
  public get dbNodeName() {
    return this.getStringAttribute('db_node_name');
  }

  // db_packs - computed: true, optional: false, required: false
  public get dbPacks() {
    return this.getStringAttribute('db_packs');
  }

  // db_role - computed: true, optional: false, required: false
  public get dbRole() {
    return this.getStringAttribute('db_role');
  }

  // db_type - computed: true, optional: false, required: false
  public get dbType() {
    return this.getStringAttribute('db_type');
  }

  // db_unique_name - computed: true, optional: false, required: false
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // grid_home - computed: true, optional: false, required: false
  public get gridHome() {
    return this.getStringAttribute('grid_home');
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // home_directory - computed: true, optional: false, required: false
  public get homeDirectory() {
    return this.getStringAttribute('home_directory');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // is_auto_enable_pluggable_database - computed: true, optional: false, required: false
  public get isAutoEnablePluggableDatabase() {
    return this.getBooleanAttribute('is_auto_enable_pluggable_database');
  }

  // is_cluster - computed: true, optional: false, required: false
  public get isCluster() {
    return this.getBooleanAttribute('is_cluster');
  }

  // is_flex_cluster - computed: true, optional: false, required: false
  public get isFlexCluster() {
    return this.getBooleanAttribute('is_flex_cluster');
  }

  // is_flex_enabled - computed: true, optional: false, required: false
  public get isFlexEnabled() {
    return this.getBooleanAttribute('is_flex_enabled');
  }

  // is_selected_for_monitoring - computed: true, optional: false, required: false
  public get isSelectedForMonitoring() {
    return this.getBooleanAttribute('is_selected_for_monitoring');
  }

  // listener_alias - computed: true, optional: false, required: false
  public get listenerAlias() {
    return this.getStringAttribute('listener_alias');
  }

  // listener_type - computed: true, optional: false, required: false
  public get listenerType() {
    return this.getStringAttribute('listener_type');
  }

  // log_directory - computed: true, optional: false, required: false
  public get logDirectory() {
    return this.getStringAttribute('log_directory');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: false
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // network_configurations - computed: true, optional: false, required: false
  private _networkConfigurations = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsList(this, "network_configurations", false);
  public get networkConfigurations() {
    return this._networkConfigurations;
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // node_role - computed: true, optional: false, required: false
  public get nodeRole() {
    return this.getStringAttribute('node_role');
  }

  // ocr_file_location - computed: true, optional: false, required: false
  public get ocrFileLocation() {
    return this.getStringAttribute('ocr_file_location');
  }

  // oracle_home - computed: true, optional: false, required: false
  public get oracleHome() {
    return this.getStringAttribute('oracle_home');
  }

  // pluggable_databases - computed: true, optional: false, required: false
  private _pluggableDatabases = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesList(this, "pluggable_databases", false);
  public get pluggableDatabases() {
    return this._pluggableDatabases;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // scan_configurations - computed: true, optional: false, required: false
  private _scanConfigurations = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsList(this, "scan_configurations", false);
  public get scanConfigurations() {
    return this._scanConfigurations;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // trace_directory - computed: true, optional: false, required: false
  public get traceDirectory() {
    return this.getStringAttribute('trace_directory');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vip_configurations - computed: true, optional: false, required: false
  private _vipConfigurations = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsList(this, "vip_configurations", false);
  public get vipConfigurations() {
    return this._vipConfigurations;
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentials {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentials | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionString {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionString | undefined) {
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

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfo {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // connection_credentials - computed: true, optional: false, required: false
  private _connectionCredentials = new DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsList(this, "connection_credentials", false);
  public get connectionCredentials() {
    return this._connectionCredentials;
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringList(this, "connection_string", false);
  public get connectionString() {
    return this._connectionString;
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnector {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // connection_info - computed: true, optional: false, required: false
  private _connectionInfo = new DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoList(this, "connection_info", false);
  public get connectionInfo() {
    return this._connectionInfo;
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValue {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValue | undefined) {
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

  // connector - computed: true, optional: false, required: false
  private _connector = new DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorList(this, "connector", false);
  public get connector() {
    return this._connector;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_selected_for_monitoring - computed: true, optional: false, required: false
  public get isSelectedForMonitoring() {
    return this.getBooleanAttribute('is_selected_for_monitoring');
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperations {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // selection - computed: true, optional: false, required: false
  public get selection() {
    return this.getStringAttribute('selection');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discovery oci_database_management_external_db_system_discovery}
*/
export class DataOciDatabaseManagementExternalDbSystemDiscovery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_db_system_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystemDiscovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementExternalDbSystemDiscovery to import
  * @param importFromId The id of the existing DataOciDatabaseManagementExternalDbSystemDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementExternalDbSystemDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_db_system_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discovery oci_database_management_external_db_system_discovery} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementExternalDbSystemDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementExternalDbSystemDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_db_system_discovery',
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
    this._externalDbSystemDiscoveryId = config.externalDbSystemDiscoveryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // discovered_components - computed: true, optional: false, required: false
  private _discoveredComponents = new DataOciDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsList(this, "discovered_components", false);
  public get discoveredComponents() {
    return this._discoveredComponents;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_db_system_discovery_id - computed: false, optional: false, required: true
  private _externalDbSystemDiscoveryId?: string; 
  public get externalDbSystemDiscoveryId() {
    return this.getStringAttribute('external_db_system_discovery_id');
  }
  public set externalDbSystemDiscoveryId(value: string) {
    this._externalDbSystemDiscoveryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDbSystemDiscoveryIdInput() {
    return this._externalDbSystemDiscoveryId;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // grid_home - computed: true, optional: false, required: false
  public get gridHome() {
    return this.getStringAttribute('grid_home');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // patch_operations - computed: true, optional: false, required: false
  private _patchOperations = new DataOciDatabaseManagementExternalDbSystemDiscoveryPatchOperationsList(this, "patch_operations", false);
  public get patchOperations() {
    return this._patchOperations;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_db_system_discovery_id: cdktf.stringToTerraform(this._externalDbSystemDiscoveryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_db_system_discovery_id: {
        value: cdktf.stringToHclTerraform(this._externalDbSystemDiscoveryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
