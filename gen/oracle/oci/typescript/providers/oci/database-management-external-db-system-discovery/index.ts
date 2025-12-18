// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseManagementExternalDbSystemDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#agent_id DatabaseManagementExternalDbSystemDiscovery#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#compartment_id DatabaseManagementExternalDbSystemDiscovery#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#defined_tags DatabaseManagementExternalDbSystemDiscovery#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#display_name DatabaseManagementExternalDbSystemDiscovery#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#freeform_tags DatabaseManagementExternalDbSystemDiscovery#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#id DatabaseManagementExternalDbSystemDiscovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * patch_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#patch_operations DatabaseManagementExternalDbSystemDiscovery#patch_operations}
  */
  readonly patchOperations?: DatabaseManagementExternalDbSystemDiscoveryPatchOperations[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#timeouts DatabaseManagementExternalDbSystemDiscovery#timeouts}
  */
  readonly timeouts?: DatabaseManagementExternalDbSystemDiscoveryTimeouts;
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstances {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstances | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponents {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponents | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfo {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfo | undefined) {
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
  private _connectionCredentials = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsList(this, "connection_credentials", false);
  public get connectionCredentials() {
    return this._connectionCredentials;
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringList(this, "connection_string", false);
  public get connectionString() {
    return this._connectionString;
  }

  // database_credential - computed: true, optional: false, required: false
  private _databaseCredential = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialList(this, "database_credential", false);
  public get databaseCredential() {
    return this._databaseCredential;
  }
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnector {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnector | undefined) {
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
  private _connectionInfo = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorConnectionInfoList(this, "connection_info", false);
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstances {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstances | undefined) {
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
  private _connector = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesConnectorList(this, "connector", false);
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentials {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentials | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionString {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionString | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredential {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredential | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfo {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfo | undefined) {
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
  private _connectionCredentials = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsList(this, "connection_credentials", false);
  public get connectionCredentials() {
    return this._connectionCredentials;
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoConnectionStringList(this, "connection_string", false);
  public get connectionString() {
    return this._connectionString;
  }

  // database_credential - computed: true, optional: false, required: false
  private _databaseCredential = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialList(this, "database_credential", false);
  public get databaseCredential() {
    return this._databaseCredential;
  }
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnector {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnector | undefined) {
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
  private _connectionInfo = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorConnectionInfoList(this, "connection_info", false);
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstances {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstances | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpoints {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpoints | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurations {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurations | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo | undefined) {
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
  private _connectionCredentials = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsList(this, "connection_credentials", false);
  public get connectionCredentials() {
    return this._connectionCredentials;
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringList(this, "connection_string", false);
  public get connectionString() {
    return this._connectionString;
  }

  // database_credential - computed: true, optional: false, required: false
  private _databaseCredential = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialList(this, "database_credential", false);
  public get databaseCredential() {
    return this._databaseCredential;
  }
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnector {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnector | undefined) {
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
  private _connectionInfo = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoList(this, "connection_info", false);
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabases {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabases | undefined) {
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
  private _connector = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesConnectorList(this, "connector", false);
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurations {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurations | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurations {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurations | undefined) {
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

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponents {
}

export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalDbSystemDiscoveryDiscoveredComponentsToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponents | undefined) {
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
  private _asmInstances = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAsmInstancesList(this, "asm_instances", false);
  public get asmInstances() {
    return this._asmInstances;
  }

  // associated_components - computed: true, optional: false, required: false
  private _associatedComponents = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsAssociatedComponentsList(this, "associated_components", false);
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
  private _clusterInstances = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsClusterInstancesList(this, "cluster_instances", false);
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
  private _connector = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsConnectorList(this, "connector", false);
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
  private _dbInstances = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsDbInstancesList(this, "db_instances", false);
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
  private _endpoints = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsEndpointsList(this, "endpoints", false);
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
  private _networkConfigurations = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsNetworkConfigurationsList(this, "network_configurations", false);
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
  private _pluggableDatabases = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsPluggableDatabasesList(this, "pluggable_databases", false);
  public get pluggableDatabases() {
    return this._pluggableDatabases;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // scan_configurations - computed: true, optional: false, required: false
  private _scanConfigurations = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsScanConfigurationsList(this, "scan_configurations", false);
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
  private _vipConfigurations = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsVipConfigurationsList(this, "vip_configurations", false);
  public get vipConfigurations() {
    return this._vipConfigurations;
  }
}

export class DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#credential_name DatabaseManagementExternalDbSystemDiscovery#credential_name}
  */
  readonly credentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#credential_type DatabaseManagementExternalDbSystemDiscovery#credential_type}
  */
  readonly credentialType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#password_secret_id DatabaseManagementExternalDbSystemDiscovery#password_secret_id}
  */
  readonly passwordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#role DatabaseManagementExternalDbSystemDiscovery#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#ssl_secret_id DatabaseManagementExternalDbSystemDiscovery#ssl_secret_id}
  */
  readonly sslSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#user_name DatabaseManagementExternalDbSystemDiscovery#user_name}
  */
  readonly userName?: string;
}

export function databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsOutputReference | DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    password_secret_id: cdktf.stringToTerraform(struct!.passwordSecretId),
    role: cdktf.stringToTerraform(struct!.role),
    ssl_secret_id: cdktf.stringToTerraform(struct!.sslSecretId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsOutputReference | DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.sslSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._passwordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretId = this._passwordSecretId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._sslSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSecretId = this._sslSecretId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialName = undefined;
      this._credentialType = undefined;
      this._passwordSecretId = undefined;
      this._role = undefined;
      this._sslSecretId = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialName = value.credentialName;
      this._credentialType = value.credentialType;
      this._passwordSecretId = value.passwordSecretId;
      this._role = value.role;
      this._sslSecretId = value.sslSecretId;
      this._userName = value.userName;
    }
  }

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // password_secret_id - computed: false, optional: true, required: false
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  public resetPasswordSecretId() {
    this._passwordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // ssl_secret_id - computed: false, optional: true, required: false
  private _sslSecretId?: string; 
  public get sslSecretId() {
    return this.getStringAttribute('ssl_secret_id');
  }
  public set sslSecretId(value: string) {
    this._sslSecretId = value;
  }
  public resetSslSecretId() {
    this._sslSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSecretIdInput() {
    return this._sslSecretId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#host_name DatabaseManagementExternalDbSystemDiscovery#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#hosts DatabaseManagementExternalDbSystemDiscovery#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#port DatabaseManagementExternalDbSystemDiscovery#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#protocol DatabaseManagementExternalDbSystemDiscovery#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#service DatabaseManagementExternalDbSystemDiscovery#service}
  */
  readonly service?: string;
}

export function databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringOutputReference | DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringOutputReference | DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostName = undefined;
      this._hosts = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostName = value.hostName;
      this._hosts = value.hosts;
      this._port = value.port;
      this._protocol = value.protocol;
      this._service = value.service;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#component_type DatabaseManagementExternalDbSystemDiscovery#component_type}
  */
  readonly componentType: string;
  /**
  * connection_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#connection_credentials DatabaseManagementExternalDbSystemDiscovery#connection_credentials}
  */
  readonly connectionCredentials?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentials;
  /**
  * connection_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#connection_string DatabaseManagementExternalDbSystemDiscovery#connection_string}
  */
  readonly connectionString?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionString;
}

export function databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoOutputReference | DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_type: cdktf.stringToTerraform(struct!.componentType),
    connection_credentials: databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsToTerraform(struct!.connectionCredentials),
    connection_string: databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringToTerraform(struct!.connectionString),
  }
}


export function databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoOutputReference | DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_type: {
      value: cdktf.stringToHclTerraform(struct!.componentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_credentials: {
      value: databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsToHclTerraform(struct!.connectionCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsList",
    },
    connection_string: {
      value: databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringToHclTerraform(struct!.connectionString),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentType = this._componentType;
    }
    if (this._connectionCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionCredentials = this._connectionCredentials?.internalValue;
    }
    if (this._connectionString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._componentType = undefined;
      this._connectionCredentials.internalValue = undefined;
      this._connectionString.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._componentType = value.componentType;
      this._connectionCredentials.internalValue = value.connectionCredentials;
      this._connectionString.internalValue = value.connectionString;
    }
  }

  // component_type - computed: false, optional: false, required: true
  private _componentType?: string; 
  public get componentType() {
    return this.getStringAttribute('component_type');
  }
  public set componentType(value: string) {
    this._componentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType;
  }

  // connection_credentials - computed: false, optional: true, required: false
  private _connectionCredentials = new DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentialsOutputReference(this, "connection_credentials");
  public get connectionCredentials() {
    return this._connectionCredentials;
  }
  public putConnectionCredentials(value: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionCredentials) {
    this._connectionCredentials.internalValue = value;
  }
  public resetConnectionCredentials() {
    this._connectionCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCredentialsInput() {
    return this._connectionCredentials.internalValue;
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString = new DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionStringOutputReference(this, "connection_string");
  public get connectionString() {
    return this._connectionString;
  }
  public putConnectionString(value: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoConnectionString) {
    this._connectionString.internalValue = value;
  }
  public resetConnectionString() {
    this._connectionString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString.internalValue;
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#agent_id DatabaseManagementExternalDbSystemDiscovery#agent_id}
  */
  readonly agentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#connector_type DatabaseManagementExternalDbSystemDiscovery#connector_type}
  */
  readonly connectorType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#display_name DatabaseManagementExternalDbSystemDiscovery#display_name}
  */
  readonly displayName: string;
  /**
  * connection_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#connection_info DatabaseManagementExternalDbSystemDiscovery#connection_info}
  */
  readonly connectionInfo?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfo;
}

export function databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorOutputReference | DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_id: cdktf.stringToTerraform(struct!.agentId),
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    connection_info: databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoToTerraform(struct!.connectionInfo),
  }
}


export function databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorOutputReference | DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_id: {
      value: cdktf.stringToHclTerraform(struct!.agentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_type: {
      value: cdktf.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_info: {
      value: databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoToHclTerraform(struct!.connectionInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentId = this._agentId;
    }
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._connectionInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionInfo = this._connectionInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentId = undefined;
      this._connectorType = undefined;
      this._displayName = undefined;
      this._connectionInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentId = value.agentId;
      this._connectorType = value.connectorType;
      this._displayName = value.displayName;
      this._connectionInfo.internalValue = value.connectionInfo;
    }
  }

  // agent_id - computed: false, optional: true, required: false
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  public resetAgentId() {
    this._agentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
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

  // connection_info - computed: false, optional: true, required: false
  private _connectionInfo = new DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfoOutputReference(this, "connection_info");
  public get connectionInfo() {
    return this._connectionInfo;
  }
  public putConnectionInfo(value: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorConnectionInfo) {
    this._connectionInfo.internalValue = value;
  }
  public resetConnectionInfo() {
    this._connectionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInfoInput() {
    return this._connectionInfo.internalValue;
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#compartment_id DatabaseManagementExternalDbSystemDiscovery#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#display_name DatabaseManagementExternalDbSystemDiscovery#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#is_selected_for_monitoring DatabaseManagementExternalDbSystemDiscovery#is_selected_for_monitoring}
  */
  readonly isSelectedForMonitoring?: boolean | cdktf.IResolvable;
  /**
  * connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#connector DatabaseManagementExternalDbSystemDiscovery#connector}
  */
  readonly connector?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnector;
}

export function databaseManagementExternalDbSystemDiscoveryPatchOperationsValueToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueOutputReference | DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_selected_for_monitoring: cdktf.booleanToTerraform(struct!.isSelectedForMonitoring),
    connector: databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorToTerraform(struct!.connector),
  }
}


export function databaseManagementExternalDbSystemDiscoveryPatchOperationsValueToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueOutputReference | DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_selected_for_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.isSelectedForMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connector: {
      value: databaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorToHclTerraform(struct!.connector),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isSelectedForMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSelectedForMonitoring = this._isSelectedForMonitoring;
    }
    if (this._connector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connector = this._connector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._displayName = undefined;
      this._isSelectedForMonitoring = undefined;
      this._connector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._displayName = value.displayName;
      this._isSelectedForMonitoring = value.isSelectedForMonitoring;
      this._connector.internalValue = value.connector;
    }
  }

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

  // is_selected_for_monitoring - computed: false, optional: true, required: false
  private _isSelectedForMonitoring?: boolean | cdktf.IResolvable; 
  public get isSelectedForMonitoring() {
    return this.getBooleanAttribute('is_selected_for_monitoring');
  }
  public set isSelectedForMonitoring(value: boolean | cdktf.IResolvable) {
    this._isSelectedForMonitoring = value;
  }
  public resetIsSelectedForMonitoring() {
    this._isSelectedForMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSelectedForMonitoringInput() {
    return this._isSelectedForMonitoring;
  }

  // connector - computed: false, optional: true, required: false
  private _connector = new DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnectorOutputReference(this, "connector");
  public get connector() {
    return this._connector;
  }
  public putConnector(value: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueConnector) {
    this._connector.internalValue = value;
  }
  public resetConnector() {
    this._connector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorInput() {
    return this._connector.internalValue;
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryPatchOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#operation DatabaseManagementExternalDbSystemDiscovery#operation}
  */
  readonly operation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#selection DatabaseManagementExternalDbSystemDiscovery#selection}
  */
  readonly selection: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#value DatabaseManagementExternalDbSystemDiscovery#value}
  */
  readonly value?: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValue;
}

export function databaseManagementExternalDbSystemDiscoveryPatchOperationsToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryPatchOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    selection: cdktf.stringToTerraform(struct!.selection),
    value: databaseManagementExternalDbSystemDiscoveryPatchOperationsValueToTerraform(struct!.value),
  }
}


export function databaseManagementExternalDbSystemDiscoveryPatchOperationsToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryPatchOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection: {
      value: cdktf.stringToHclTerraform(struct!.selection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: databaseManagementExternalDbSystemDiscoveryPatchOperationsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementExternalDbSystemDiscoveryPatchOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryPatchOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._selection !== undefined) {
      hasAnyValues = true;
      internalValueResult.selection = this._selection;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryPatchOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._selection = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._selection = value.selection;
      this._value.internalValue = value.value;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // selection - computed: false, optional: false, required: true
  private _selection?: string; 
  public get selection() {
    return this.getStringAttribute('selection');
  }
  public set selection(value: string) {
    this._selection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInput() {
    return this._selection;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DatabaseManagementExternalDbSystemDiscoveryPatchOperationsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DatabaseManagementExternalDbSystemDiscoveryPatchOperationsList extends cdktf.ComplexList {
  public internalValue? : DatabaseManagementExternalDbSystemDiscoveryPatchOperations[] | cdktf.IResolvable

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
  public get(index: number): DatabaseManagementExternalDbSystemDiscoveryPatchOperationsOutputReference {
    return new DatabaseManagementExternalDbSystemDiscoveryPatchOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalDbSystemDiscoveryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#create DatabaseManagementExternalDbSystemDiscovery#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#delete DatabaseManagementExternalDbSystemDiscovery#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#update DatabaseManagementExternalDbSystemDiscovery#update}
  */
  readonly update?: string;
}

export function databaseManagementExternalDbSystemDiscoveryTimeoutsToTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryTimeouts | cdktf.IResolvable): any {
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


export function databaseManagementExternalDbSystemDiscoveryTimeoutsToHclTerraform(struct?: DatabaseManagementExternalDbSystemDiscoveryTimeouts | cdktf.IResolvable): any {
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

export class DatabaseManagementExternalDbSystemDiscoveryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseManagementExternalDbSystemDiscoveryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseManagementExternalDbSystemDiscoveryTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery oci_database_management_external_db_system_discovery}
*/
export class DatabaseManagementExternalDbSystemDiscovery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_db_system_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseManagementExternalDbSystemDiscovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseManagementExternalDbSystemDiscovery to import
  * @param importFromId The id of the existing DatabaseManagementExternalDbSystemDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseManagementExternalDbSystemDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_db_system_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_discovery oci_database_management_external_db_system_discovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseManagementExternalDbSystemDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseManagementExternalDbSystemDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_db_system_discovery',
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
    this._agentId = config.agentId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._patchOperations.internalValue = config.patchOperations;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
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

  // discovered_components - computed: true, optional: false, required: false
  private _discoveredComponents = new DatabaseManagementExternalDbSystemDiscoveryDiscoveredComponentsList(this, "discovered_components", false);
  public get discoveredComponents() {
    return this._discoveredComponents;
  }

  // display_name - computed: true, optional: true, required: false
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

  // external_db_system_discovery_id - computed: true, optional: false, required: false
  public get externalDbSystemDiscoveryId() {
    return this.getStringAttribute('external_db_system_discovery_id');
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

  // grid_home - computed: true, optional: false, required: false
  public get gridHome() {
    return this.getStringAttribute('grid_home');
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

  // patch_operations - computed: false, optional: true, required: false
  private _patchOperations = new DatabaseManagementExternalDbSystemDiscoveryPatchOperationsList(this, "patch_operations", false);
  public get patchOperations() {
    return this._patchOperations;
  }
  public putPatchOperations(value: DatabaseManagementExternalDbSystemDiscoveryPatchOperations[] | cdktf.IResolvable) {
    this._patchOperations.internalValue = value;
  }
  public resetPatchOperations() {
    this._patchOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchOperationsInput() {
    return this._patchOperations.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseManagementExternalDbSystemDiscoveryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseManagementExternalDbSystemDiscoveryTimeouts) {
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
      agent_id: cdktf.stringToTerraform(this._agentId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      patch_operations: cdktf.listMapper(databaseManagementExternalDbSystemDiscoveryPatchOperationsToTerraform, true)(this._patchOperations.internalValue),
      timeouts: databaseManagementExternalDbSystemDiscoveryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
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
      patch_operations: {
        value: cdktf.listMapperHcl(databaseManagementExternalDbSystemDiscoveryPatchOperationsToHclTerraform, true)(this._patchOperations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseManagementExternalDbSystemDiscoveryPatchOperationsList",
      },
      timeouts: {
        value: databaseManagementExternalDbSystemDiscoveryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseManagementExternalDbSystemDiscoveryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
