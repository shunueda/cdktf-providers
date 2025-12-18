// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dif_stacks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDifStacksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dif_stacks#compartment_id DataOciDifStacks#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dif_stacks#display_name DataOciDifStacks#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dif_stacks#id DataOciDifStacks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dif_stacks#state DataOciDifStacks#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dif_stacks#filter DataOciDifStacks#filter}
  */
  readonly filter?: DataOciDifStacksFilter[] | cdktf.IResolvable;
}
export interface DataOciDifStacksStackCollectionItemsAdbDbCredentials {
}

export function dataOciDifStacksStackCollectionItemsAdbDbCredentialsToTerraform(struct?: DataOciDifStacksStackCollectionItemsAdbDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsAdbDbCredentialsToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsAdbDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsAdbDbCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsAdbDbCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsAdbDbCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
  }
}

export class DataOciDifStacksStackCollectionItemsAdbDbCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsAdbDbCredentialsOutputReference {
    return new DataOciDifStacksStackCollectionItemsAdbDbCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsAdb {
}

export function dataOciDifStacksStackCollectionItemsAdbToTerraform(struct?: DataOciDifStacksStackCollectionItemsAdb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsAdbToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsAdb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsAdbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsAdb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsAdb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_password_id - computed: true, optional: false, required: false
  public get adminPasswordId() {
    return this.getStringAttribute('admin_password_id');
  }

  // artifact_object_storage_path - computed: true, optional: false, required: false
  public get artifactObjectStoragePath() {
    return this.getStringAttribute('artifact_object_storage_path');
  }

  // data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }

  // db_credentials - computed: true, optional: false, required: false
  private _dbCredentials = new DataOciDifStacksStackCollectionItemsAdbDbCredentialsList(this, "db_credentials", false);
  public get dbCredentials() {
    return this._dbCredentials;
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // db_workload - computed: true, optional: false, required: false
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }

  // ecpu - computed: true, optional: false, required: false
  public get ecpu() {
    return this.getNumberAttribute('ecpu');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // is_mtls_connection_required - computed: true, optional: false, required: false
  public get isMtlsConnectionRequired() {
    return this.getBooleanAttribute('is_mtls_connection_required');
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tools_public_access - computed: true, optional: false, required: false
  public get toolsPublicAccess() {
    return this.getStringAttribute('tools_public_access');
  }
}

export class DataOciDifStacksStackCollectionItemsAdbList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsAdbOutputReference {
    return new DataOciDifStacksStackCollectionItemsAdbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsDifDependencies {
}

export function dataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsDifDependenciesToTerraform(struct?: DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsDifDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsDifDependenciesToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsDifDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsDifDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsDifDependencies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsDifDependencies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_instance_id - computed: true, optional: false, required: false
  public get serviceInstanceId() {
    return this.getStringAttribute('service_instance_id');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
}

export class DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsDifDependenciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsDifDependenciesOutputReference {
    return new DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsDifDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetails {
}

export function dataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsToTerraform(struct?: DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dif_dependencies - computed: true, optional: false, required: false
  private _difDependencies = new DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsDifDependenciesList(this, "dif_dependencies", false);
  public get difDependencies() {
    return this._difDependencies;
  }

  // domain_names - computed: true, optional: false, required: false
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
}

export class DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsOutputReference {
    return new DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsDataflowConnections {
}

export function dataOciDifStacksStackCollectionItemsDataflowConnectionsToTerraform(struct?: DataOciDifStacksStackCollectionItemsDataflowConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsDataflowConnectionsToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsDataflowConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsDataflowConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsDataflowConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsDataflowConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_details - computed: true, optional: false, required: false
  private _connectionDetails = new DataOciDifStacksStackCollectionItemsDataflowConnectionsConnectionDetailsList(this, "connection_details", false);
  public get connectionDetails() {
    return this._connectionDetails;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciDifStacksStackCollectionItemsDataflowConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsDataflowConnectionsOutputReference {
    return new DataOciDifStacksStackCollectionItemsDataflowConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsDataflowDriverShapeConfig {
}

export function dataOciDifStacksStackCollectionItemsDataflowDriverShapeConfigToTerraform(struct?: DataOciDifStacksStackCollectionItemsDataflowDriverShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsDataflowDriverShapeConfigToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsDataflowDriverShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsDataflowDriverShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsDataflowDriverShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsDataflowDriverShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciDifStacksStackCollectionItemsDataflowDriverShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsDataflowDriverShapeConfigOutputReference {
    return new DataOciDifStacksStackCollectionItemsDataflowDriverShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsDataflowExecutorShapeConfig {
}

export function dataOciDifStacksStackCollectionItemsDataflowExecutorShapeConfigToTerraform(struct?: DataOciDifStacksStackCollectionItemsDataflowExecutorShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsDataflowExecutorShapeConfigToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsDataflowExecutorShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsDataflowExecutorShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsDataflowExecutorShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsDataflowExecutorShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciDifStacksStackCollectionItemsDataflowExecutorShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsDataflowExecutorShapeConfigOutputReference {
    return new DataOciDifStacksStackCollectionItemsDataflowExecutorShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsDataflow {
}

export function dataOciDifStacksStackCollectionItemsDataflowToTerraform(struct?: DataOciDifStacksStackCollectionItemsDataflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsDataflowToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsDataflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsDataflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsDataflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsDataflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_uri - computed: true, optional: false, required: false
  public get archiveUri() {
    return this.getStringAttribute('archive_uri');
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new DataOciDifStacksStackCollectionItemsDataflowConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }

  // driver_shape - computed: true, optional: false, required: false
  public get driverShape() {
    return this.getStringAttribute('driver_shape');
  }

  // driver_shape_config - computed: true, optional: false, required: false
  private _driverShapeConfig = new DataOciDifStacksStackCollectionItemsDataflowDriverShapeConfigList(this, "driver_shape_config", false);
  public get driverShapeConfig() {
    return this._driverShapeConfig;
  }

  // execute - computed: true, optional: false, required: false
  public get execute() {
    return this.getStringAttribute('execute');
  }

  // executor_shape - computed: true, optional: false, required: false
  public get executorShape() {
    return this.getStringAttribute('executor_shape');
  }

  // executor_shape_config - computed: true, optional: false, required: false
  private _executorShapeConfig = new DataOciDifStacksStackCollectionItemsDataflowExecutorShapeConfigList(this, "executor_shape_config", false);
  public get executorShapeConfig() {
    return this._executorShapeConfig;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // log_bucket_instance_id - computed: true, optional: false, required: false
  public get logBucketInstanceId() {
    return this.getStringAttribute('log_bucket_instance_id');
  }

  // num_executors - computed: true, optional: false, required: false
  public get numExecutors() {
    return this.getNumberAttribute('num_executors');
  }

  // private_endpoint_id - computed: true, optional: false, required: false
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }

  // spark_version - computed: true, optional: false, required: false
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }

  // warehouse_bucket_instance_id - computed: true, optional: false, required: false
  public get warehouseBucketInstanceId() {
    return this.getStringAttribute('warehouse_bucket_instance_id');
  }
}

export class DataOciDifStacksStackCollectionItemsDataflowList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsDataflowOutputReference {
    return new DataOciDifStacksStackCollectionItemsDataflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsGenaiEndpoints {
}

export function dataOciDifStacksStackCollectionItemsGenaiEndpointsToTerraform(struct?: DataOciDifStacksStackCollectionItemsGenaiEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsGenaiEndpointsToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsGenaiEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsGenaiEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsGenaiEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsGenaiEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // is_content_moderation_enabled - computed: true, optional: false, required: false
  public get isContentModerationEnabled() {
    return this.getBooleanAttribute('is_content_moderation_enabled');
  }
}

export class DataOciDifStacksStackCollectionItemsGenaiEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsGenaiEndpointsOutputReference {
    return new DataOciDifStacksStackCollectionItemsGenaiEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsGenai {
}

export function dataOciDifStacksStackCollectionItemsGenaiToTerraform(struct?: DataOciDifStacksStackCollectionItemsGenai): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsGenaiToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsGenai): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsGenaiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsGenai | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsGenai | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_model - computed: true, optional: false, required: false
  public get baseModel() {
    return this.getStringAttribute('base_model');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataOciDifStacksStackCollectionItemsGenaiEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // oci_region - computed: true, optional: false, required: false
  public get ociRegion() {
    return this.getStringAttribute('oci_region');
  }

  // unit_count - computed: true, optional: false, required: false
  public get unitCount() {
    return this.getNumberAttribute('unit_count');
  }
}

export class DataOciDifStacksStackCollectionItemsGenaiList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsGenaiOutputReference {
    return new DataOciDifStacksStackCollectionItemsGenaiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsGgcsConnectionsDifDependencies {
}

export function dataOciDifStacksStackCollectionItemsGgcsConnectionsDifDependenciesToTerraform(struct?: DataOciDifStacksStackCollectionItemsGgcsConnectionsDifDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsGgcsConnectionsDifDependenciesToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsGgcsConnectionsDifDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsGgcsConnectionsDifDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsGgcsConnectionsDifDependencies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsGgcsConnectionsDifDependencies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_instance_id - computed: true, optional: false, required: false
  public get serviceInstanceId() {
    return this.getStringAttribute('service_instance_id');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
}

export class DataOciDifStacksStackCollectionItemsGgcsConnectionsDifDependenciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsGgcsConnectionsDifDependenciesOutputReference {
    return new DataOciDifStacksStackCollectionItemsGgcsConnectionsDifDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsGgcsConnections {
}

export function dataOciDifStacksStackCollectionItemsGgcsConnectionsToTerraform(struct?: DataOciDifStacksStackCollectionItemsGgcsConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsGgcsConnectionsToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsGgcsConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsGgcsConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsGgcsConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsGgcsConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // dif_dependencies - computed: true, optional: false, required: false
  private _difDependencies = new DataOciDifStacksStackCollectionItemsGgcsConnectionsDifDependenciesList(this, "dif_dependencies", false);
  public get difDependencies() {
    return this._difDependencies;
  }

  // gg_admin_secret_id - computed: true, optional: false, required: false
  public get ggAdminSecretId() {
    return this.getStringAttribute('gg_admin_secret_id');
  }
}

export class DataOciDifStacksStackCollectionItemsGgcsConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsGgcsConnectionsOutputReference {
    return new DataOciDifStacksStackCollectionItemsGgcsConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsGgcsSources {
}

export function dataOciDifStacksStackCollectionItemsGgcsSourcesToTerraform(struct?: DataOciDifStacksStackCollectionItemsGgcsSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsGgcsSourcesToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsGgcsSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsGgcsSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsGgcsSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsGgcsSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // should_start_source_operations - computed: true, optional: false, required: false
  public get shouldStartSourceOperations() {
    return this.getBooleanAttribute('should_start_source_operations');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // target_connection_name - computed: true, optional: false, required: false
  public get targetConnectionName() {
    return this.getStringAttribute('target_connection_name');
  }

  // target_uri - computed: true, optional: false, required: false
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
}

export class DataOciDifStacksStackCollectionItemsGgcsSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsGgcsSourcesOutputReference {
    return new DataOciDifStacksStackCollectionItemsGgcsSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsGgcsTargets {
}

export function dataOciDifStacksStackCollectionItemsGgcsTargetsToTerraform(struct?: DataOciDifStacksStackCollectionItemsGgcsTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsGgcsTargetsToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsGgcsTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsGgcsTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsGgcsTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsGgcsTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // should_start_target_operations - computed: true, optional: false, required: false
  public get shouldStartTargetOperations() {
    return this.getBooleanAttribute('should_start_target_operations');
  }

  // source_connection_name - computed: true, optional: false, required: false
  public get sourceConnectionName() {
    return this.getStringAttribute('source_connection_name');
  }

  // source_uri - computed: true, optional: false, required: false
  public get sourceUri() {
    return this.getStringAttribute('source_uri');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
}

export class DataOciDifStacksStackCollectionItemsGgcsTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsGgcsTargetsOutputReference {
    return new DataOciDifStacksStackCollectionItemsGgcsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsGgcsUsers {
}

export function dataOciDifStacksStackCollectionItemsGgcsUsersToTerraform(struct?: DataOciDifStacksStackCollectionItemsGgcsUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsGgcsUsersToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsGgcsUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsGgcsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsGgcsUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsGgcsUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
  }
}

export class DataOciDifStacksStackCollectionItemsGgcsUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsGgcsUsersOutputReference {
    return new DataOciDifStacksStackCollectionItemsGgcsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsGgcs {
}

export function dataOciDifStacksStackCollectionItemsGgcsToTerraform(struct?: DataOciDifStacksStackCollectionItemsGgcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsGgcsToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsGgcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsGgcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsGgcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsGgcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifact_object_storage_path - computed: true, optional: false, required: false
  public get artifactObjectStoragePath() {
    return this.getStringAttribute('artifact_object_storage_path');
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new DataOciDifStacksStackCollectionItemsGgcsConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ocpu - computed: true, optional: false, required: false
  public get ocpu() {
    return this.getNumberAttribute('ocpu');
  }

  // ogg_version - computed: true, optional: false, required: false
  public get oggVersion() {
    return this.getStringAttribute('ogg_version');
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }

  // public_subnet_id - computed: true, optional: false, required: false
  public get publicSubnetId() {
    return this.getStringAttribute('public_subnet_id');
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataOciDifStacksStackCollectionItemsGgcsSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciDifStacksStackCollectionItemsGgcsTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataOciDifStacksStackCollectionItemsGgcsUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
}

export class DataOciDifStacksStackCollectionItemsGgcsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsGgcsOutputReference {
    return new DataOciDifStacksStackCollectionItemsGgcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsObjectstorage {
}

export function dataOciDifStacksStackCollectionItemsObjectstorageToTerraform(struct?: DataOciDifStacksStackCollectionItemsObjectstorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsObjectstorageToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsObjectstorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsObjectstorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsObjectstorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsObjectstorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_tiering - computed: true, optional: false, required: false
  public get autoTiering() {
    return this.getStringAttribute('auto_tiering');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // object_versioning - computed: true, optional: false, required: false
  public get objectVersioning() {
    return this.getStringAttribute('object_versioning');
  }

  // storage_tier - computed: true, optional: false, required: false
  public get storageTier() {
    return this.getStringAttribute('storage_tier');
  }
}

export class DataOciDifStacksStackCollectionItemsObjectstorageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsObjectstorageOutputReference {
    return new DataOciDifStacksStackCollectionItemsObjectstorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsAssignedConnections {
}

export function dataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsAssignedConnectionsToTerraform(struct?: DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsAssignedConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsAssignedConnectionsToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsAssignedConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsAssignedConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsAssignedConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsAssignedConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // requested_by - computed: true, optional: false, required: false
  public get requestedBy() {
    return this.getStringAttribute('requested_by');
  }
}

export class DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsAssignedConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsAssignedConnectionsOutputReference {
    return new DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsAssignedConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsEndpointDetails {
}

export function dataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsEndpointDetailsToTerraform(struct?: DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsEndpointDetailsToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsEndpointDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsEndpointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsEndpointDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
}

export class DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsEndpointDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsEndpointDetailsOutputReference {
    return new DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsEndpointDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetails {
}

export function dataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsToTerraform(struct?: DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_connections - computed: true, optional: false, required: false
  private _assignedConnections = new DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsAssignedConnectionsList(this, "assigned_connections", false);
  public get assignedConnections() {
    return this._assignedConnections;
  }

  // endpoint_details - computed: true, optional: false, required: false
  private _endpointDetails = new DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsEndpointDetailsList(this, "endpoint_details", false);
  public get endpointDetails() {
    return this._endpointDetails;
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // model_version - computed: true, optional: false, required: false
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }

  // oci_region - computed: true, optional: false, required: false
  public get ociRegion() {
    return this.getStringAttribute('oci_region');
  }

  // private_endpoint_id - computed: true, optional: false, required: false
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
}

export class DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsOutputReference {
    return new DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItemsServiceDetails {
}

export function dataOciDifStacksStackCollectionItemsServiceDetailsToTerraform(struct?: DataOciDifStacksStackCollectionItemsServiceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsServiceDetailsToHclTerraform(struct?: DataOciDifStacksStackCollectionItemsServiceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsServiceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItemsServiceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItemsServiceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_details - computed: true, optional: false, required: false
  private _additionalDetails = new DataOciDifStacksStackCollectionItemsServiceDetailsAdditionalDetailsList(this, "additional_details", false);
  public get additionalDetails() {
    return this._additionalDetails;
  }

  // current_artifact_path - computed: true, optional: false, required: false
  public get currentArtifactPath() {
    return this.getStringAttribute('current_artifact_path');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_url - computed: true, optional: false, required: false
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataOciDifStacksStackCollectionItemsServiceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsServiceDetailsOutputReference {
    return new DataOciDifStacksStackCollectionItemsServiceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollectionItems {
}

export function dataOciDifStacksStackCollectionItemsToTerraform(struct?: DataOciDifStacksStackCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionItemsToHclTerraform(struct?: DataOciDifStacksStackCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adb - computed: true, optional: false, required: false
  private _adb = new DataOciDifStacksStackCollectionItemsAdbList(this, "adb", false);
  public get adb() {
    return this._adb;
  }

  // add_service_trigger - computed: true, optional: false, required: false
  public get addServiceTrigger() {
    return this.getNumberAttribute('add_service_trigger');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // dataflow - computed: true, optional: false, required: false
  private _dataflow = new DataOciDifStacksStackCollectionItemsDataflowList(this, "dataflow", false);
  public get dataflow() {
    return this._dataflow;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deploy_artifacts_trigger - computed: true, optional: false, required: false
  public get deployArtifactsTrigger() {
    return this.getNumberAttribute('deploy_artifacts_trigger');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // genai - computed: true, optional: false, required: false
  private _genai = new DataOciDifStacksStackCollectionItemsGenaiList(this, "genai", false);
  public get genai() {
    return this._genai;
  }

  // ggcs - computed: true, optional: false, required: false
  private _ggcs = new DataOciDifStacksStackCollectionItemsGgcsList(this, "ggcs", false);
  public get ggcs() {
    return this._ggcs;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // notification_email - computed: true, optional: false, required: false
  public get notificationEmail() {
    return this.getStringAttribute('notification_email');
  }

  // objectstorage - computed: true, optional: false, required: false
  private _objectstorage = new DataOciDifStacksStackCollectionItemsObjectstorageList(this, "objectstorage", false);
  public get objectstorage() {
    return this._objectstorage;
  }

  // service_details - computed: true, optional: false, required: false
  private _serviceDetails = new DataOciDifStacksStackCollectionItemsServiceDetailsList(this, "service_details", false);
  public get serviceDetails() {
    return this._serviceDetails;
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return this.getListAttribute('services');
  }

  // stack_templates - computed: true, optional: false, required: false
  public get stackTemplates() {
    return this.getListAttribute('stack_templates');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
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

export class DataOciDifStacksStackCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionItemsOutputReference {
    return new DataOciDifStacksStackCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksStackCollection {
}

export function dataOciDifStacksStackCollectionToTerraform(struct?: DataOciDifStacksStackCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDifStacksStackCollectionToHclTerraform(struct?: DataOciDifStacksStackCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDifStacksStackCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksStackCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDifStacksStackCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDifStacksStackCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDifStacksStackCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDifStacksStackCollectionOutputReference {
    return new DataOciDifStacksStackCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDifStacksFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dif_stacks#name DataOciDifStacks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dif_stacks#regex DataOciDifStacks#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dif_stacks#values DataOciDifStacks#values}
  */
  readonly values: string[];
}

export function dataOciDifStacksFilterToTerraform(struct?: DataOciDifStacksFilter | cdktf.IResolvable): any {
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


export function dataOciDifStacksFilterToHclTerraform(struct?: DataOciDifStacksFilter | cdktf.IResolvable): any {
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

export class DataOciDifStacksFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDifStacksFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDifStacksFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDifStacksFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDifStacksFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDifStacksFilterOutputReference {
    return new DataOciDifStacksFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dif_stacks oci_dif_stacks}
*/
export class DataOciDifStacks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dif_stacks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDifStacks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDifStacks to import
  * @param importFromId The id of the existing DataOciDifStacks that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dif_stacks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDifStacks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dif_stacks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dif_stacks oci_dif_stacks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDifStacksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciDifStacksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_dif_stacks',
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
    this._id = config.id;
    this._state = config.state;
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

  // id - computed: false, optional: true, required: false
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

  // stack_collection - computed: true, optional: false, required: false
  private _stackCollection = new DataOciDifStacksStackCollectionList(this, "stack_collection", false);
  public get stackCollection() {
    return this._stackCollection;
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
  private _filter = new DataOciDifStacksFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDifStacksFilter[] | cdktf.IResolvable) {
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
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDifStacksFilterToTerraform, true)(this._filter.internalValue),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDifStacksFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDifStacksFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
