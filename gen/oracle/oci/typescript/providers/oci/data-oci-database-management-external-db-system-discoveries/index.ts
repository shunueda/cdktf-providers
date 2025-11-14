// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discoveries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discoveries#compartment_id DataOciDatabaseManagementExternalDbSystemDiscoveries#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discoveries#display_name DataOciDatabaseManagementExternalDbSystemDiscoveries#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discoveries#id DataOciDatabaseManagementExternalDbSystemDiscoveries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discoveries#filter DataOciDatabaseManagementExternalDbSystemDiscoveries#filter}
  */
  readonly filter?: DataOciDatabaseManagementExternalDbSystemDiscoveriesFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAsmInstances {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAsmInstancesToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAsmInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAsmInstancesToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAsmInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAsmInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAsmInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAsmInstances | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAsmInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAsmInstancesOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAsmInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAssociatedComponents {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAssociatedComponentsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAssociatedComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAssociatedComponentsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAssociatedComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAssociatedComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAssociatedComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAssociatedComponents | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAssociatedComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAssociatedComponentsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAssociatedComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentials | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionString | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredential | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfo {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfo | undefined) {
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
  private _connectionCredentials = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionCredentialsList(this, "connection_credentials", false);
  public get connectionCredentials() {
    return this._connectionCredentials;
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoConnectionStringList(this, "connection_string", false);
  public get connectionString() {
    return this._connectionString;
  }

  // database_credential - computed: true, optional: false, required: false
  private _databaseCredential = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoDatabaseCredentialList(this, "database_credential", false);
  public get databaseCredential() {
    return this._databaseCredential;
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnector {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnector | undefined) {
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
  private _connectionInfo = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorConnectionInfoList(this, "connection_info", false);
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstances {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstances | undefined) {
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
  private _connector = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesConnectorList(this, "connector", false);
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionCredentials {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionCredentials | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionString {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionStringToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionStringToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionString | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionStringOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoDatabaseCredential {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoDatabaseCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoDatabaseCredential | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfo {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfo | undefined) {
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
  private _connectionCredentials = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionCredentialsList(this, "connection_credentials", false);
  public get connectionCredentials() {
    return this._connectionCredentials;
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoConnectionStringList(this, "connection_string", false);
  public get connectionString() {
    return this._connectionString;
  }

  // database_credential - computed: true, optional: false, required: false
  private _databaseCredential = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoDatabaseCredentialList(this, "database_credential", false);
  public get databaseCredential() {
    return this._databaseCredential;
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnector {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnector | undefined) {
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
  private _connectionInfo = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorConnectionInfoList(this, "connection_info", false);
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsDbInstances {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsDbInstancesToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsDbInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsDbInstancesToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsDbInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsDbInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsDbInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsDbInstances | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsDbInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsDbInstancesOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsDbInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsEndpoints {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsEndpointsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsEndpointsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsEndpoints | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsEndpointsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsNetworkConfigurations {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsNetworkConfigurationsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsNetworkConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsNetworkConfigurationsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsNetworkConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsNetworkConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsNetworkConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsNetworkConfigurations | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsNetworkConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsNetworkConfigurationsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsNetworkConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentials | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionString | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredential | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfo | undefined) {
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
  private _connectionCredentials = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionCredentialsList(this, "connection_credentials", false);
  public get connectionCredentials() {
    return this._connectionCredentials;
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoConnectionStringList(this, "connection_string", false);
  public get connectionString() {
    return this._connectionString;
  }

  // database_credential - computed: true, optional: false, required: false
  private _databaseCredential = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoDatabaseCredentialList(this, "database_credential", false);
  public get databaseCredential() {
    return this._databaseCredential;
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnector {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnector | undefined) {
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
  private _connectionInfo = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorConnectionInfoList(this, "connection_info", false);
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabases {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabases | undefined) {
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
  private _connector = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesConnectorList(this, "connector", false);
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsScanConfigurations {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsScanConfigurationsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsScanConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsScanConfigurationsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsScanConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsScanConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsScanConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsScanConfigurations | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsScanConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsScanConfigurationsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsScanConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsVipConfigurations {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsVipConfigurationsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsVipConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsVipConfigurationsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsVipConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsVipConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsVipConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsVipConfigurations | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsVipConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsVipConfigurationsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsVipConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponents {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponents | undefined) {
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
  private _asmInstances = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAsmInstancesList(this, "asm_instances", false);
  public get asmInstances() {
    return this._asmInstances;
  }

  // associated_components - computed: true, optional: false, required: false
  private _associatedComponents = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsAssociatedComponentsList(this, "associated_components", false);
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
  private _clusterInstances = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsClusterInstancesList(this, "cluster_instances", false);
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
  private _connector = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsConnectorList(this, "connector", false);
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
  private _dbInstances = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsDbInstancesList(this, "db_instances", false);
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
  private _endpoints = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsEndpointsList(this, "endpoints", false);
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
  private _networkConfigurations = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsNetworkConfigurationsList(this, "network_configurations", false);
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
  private _pluggableDatabases = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsPluggableDatabasesList(this, "pluggable_databases", false);
  public get pluggableDatabases() {
    return this._pluggableDatabases;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // scan_configurations - computed: true, optional: false, required: false
  private _scanConfigurations = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsScanConfigurationsList(this, "scan_configurations", false);
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
  private _vipConfigurations = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsVipConfigurationsList(this, "vip_configurations", false);
  public get vipConfigurations() {
    return this._vipConfigurations;
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionCredentials {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionCredentialsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionCredentialsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionCredentials | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionCredentialsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionString {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionStringToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionStringToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionString | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionStringOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfo {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfo | undefined) {
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
  private _connectionCredentials = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionCredentialsList(this, "connection_credentials", false);
  public get connectionCredentials() {
    return this._connectionCredentials;
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoConnectionStringList(this, "connection_string", false);
  public get connectionString() {
    return this._connectionString;
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnector {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnector | undefined) {
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
  private _connectionInfo = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorConnectionInfoList(this, "connection_info", false);
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValue {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValue | undefined) {
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
  private _connector = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueConnectorList(this, "connector", false);
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperations {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperations | undefined) {
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
  private _value = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItems {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItems | undefined) {
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
  private _discoveredComponents = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsDiscoveredComponentsList(this, "discovered_components", false);
  public get discoveredComponents() {
    return this._discoveredComponents;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_db_system_discovery_id - computed: true, optional: false, required: false
  public get externalDbSystemDiscoveryId() {
    return this.getStringAttribute('external_db_system_discovery_id');
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
  private _patchOperations = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsPatchOperationsList(this, "patch_operations", false);
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
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollection {
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalDbSystemDiscoveriesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discoveries#name DataOciDatabaseManagementExternalDbSystemDiscoveries#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discoveries#regex DataOciDatabaseManagementExternalDbSystemDiscoveries#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discoveries#values DataOciDatabaseManagementExternalDbSystemDiscoveries#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseManagementExternalDbSystemDiscoveriesFilterToTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseManagementExternalDbSystemDiscoveriesFilterToHclTerraform(struct?: DataOciDatabaseManagementExternalDbSystemDiscoveriesFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalDbSystemDiscoveriesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseManagementExternalDbSystemDiscoveriesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseManagementExternalDbSystemDiscoveriesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseManagementExternalDbSystemDiscoveriesFilterOutputReference {
    return new DataOciDatabaseManagementExternalDbSystemDiscoveriesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discoveries oci_database_management_external_db_system_discoveries}
*/
export class DataOciDatabaseManagementExternalDbSystemDiscoveries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_db_system_discoveries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystemDiscoveries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementExternalDbSystemDiscoveries to import
  * @param importFromId The id of the existing DataOciDatabaseManagementExternalDbSystemDiscoveries that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discoveries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementExternalDbSystemDiscoveries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_db_system_discoveries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_external_db_system_discoveries oci_database_management_external_db_system_discoveries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementExternalDbSystemDiscoveriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementExternalDbSystemDiscoveriesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_db_system_discoveries',
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
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // external_db_system_discovery_collection - computed: true, optional: false, required: false
  private _externalDbSystemDiscoveryCollection = new DataOciDatabaseManagementExternalDbSystemDiscoveriesExternalDbSystemDiscoveryCollectionList(this, "external_db_system_discovery_collection", false);
  public get externalDbSystemDiscoveryCollection() {
    return this._externalDbSystemDiscoveryCollection;
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
  private _filter = new DataOciDatabaseManagementExternalDbSystemDiscoveriesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseManagementExternalDbSystemDiscoveriesFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataOciDatabaseManagementExternalDbSystemDiscoveriesFilterToTerraform, true)(this._filter.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseManagementExternalDbSystemDiscoveriesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseManagementExternalDbSystemDiscoveriesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
