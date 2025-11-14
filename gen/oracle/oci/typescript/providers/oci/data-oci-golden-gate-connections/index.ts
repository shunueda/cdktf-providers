// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGoldenGateConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#assignable_deployment_id DataOciGoldenGateConnections#assignable_deployment_id}
  */
  readonly assignableDeploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#assignable_deployment_type DataOciGoldenGateConnections#assignable_deployment_type}
  */
  readonly assignableDeploymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#assigned_deployment_id DataOciGoldenGateConnections#assigned_deployment_id}
  */
  readonly assignedDeploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#compartment_id DataOciGoldenGateConnections#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#connection_type DataOciGoldenGateConnections#connection_type}
  */
  readonly connectionType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#display_name DataOciGoldenGateConnections#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#id DataOciGoldenGateConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#state DataOciGoldenGateConnections#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#technology_type DataOciGoldenGateConnections#technology_type}
  */
  readonly technologyType?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#filter DataOciGoldenGateConnections#filter}
  */
  readonly filter?: DataOciGoldenGateConnectionsFilter[] | cdktf.IResolvable;
}
export interface DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes {
}

export function dataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesToTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesToHclTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference {
    return new DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers {
}

export function dataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersToTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersToHclTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers | undefined) {
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference {
    return new DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateConnectionsConnectionCollectionItemsCatalog {
}

export function dataOciGoldenGateConnectionsConnectionCollectionItemsCatalogToTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItemsCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionsConnectionCollectionItemsCatalogToHclTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItemsCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsCatalogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionsConnectionCollectionItemsCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionsConnectionCollectionItemsCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // catalog_type - computed: true, optional: false, required: false
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_secret_id - computed: true, optional: false, required: false
  public get clientSecretSecretId() {
    return this.getStringAttribute('client_secret_secret_id');
  }

  // glue_id - computed: true, optional: false, required: false
  public get glueId() {
    return this.getStringAttribute('glue_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // principal_role - computed: true, optional: false, required: false
  public get principalRole() {
    return this.getStringAttribute('principal_role');
  }

  // properties_secret_id - computed: true, optional: false, required: false
  public get propertiesSecretId() {
    return this.getStringAttribute('properties_secret_id');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsCatalogList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionItemsCatalogOutputReference {
    return new DataOciGoldenGateConnectionsConnectionCollectionItemsCatalogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps {
}

export function dataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsToTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsToHclTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ingress_ip - computed: true, optional: false, required: false
  public get ingressIp() {
    return this.getStringAttribute('ingress_ip');
  }
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference {
    return new DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateConnectionsConnectionCollectionItemsLocks {
}

export function dataOciGoldenGateConnectionsConnectionCollectionItemsLocksToTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItemsLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionsConnectionCollectionItemsLocksToHclTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItemsLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionsConnectionCollectionItemsLocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionsConnectionCollectionItemsLocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // related_resource_id - computed: true, optional: false, required: false
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference {
    return new DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateConnectionsConnectionCollectionItemsStorage {
}

export function dataOciGoldenGateConnectionsConnectionCollectionItemsStorageToTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItemsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionsConnectionCollectionItemsStorageToHclTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItemsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionsConnectionCollectionItemsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionsConnectionCollectionItemsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // account_key_secret_id - computed: true, optional: false, required: false
  public get accountKeySecretId() {
    return this.getStringAttribute('account_key_secret_id');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // scheme_type - computed: true, optional: false, required: false
  public get schemeType() {
    return this.getStringAttribute('scheme_type');
  }

  // secret_access_key_secret_id - computed: true, optional: false, required: false
  public get secretAccessKeySecretId() {
    return this.getStringAttribute('secret_access_key_secret_id');
  }

  // service_account_key_file_secret_id - computed: true, optional: false, required: false
  public get serviceAccountKeyFileSecretId() {
    return this.getStringAttribute('service_account_key_file_secret_id');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionItemsStorageOutputReference {
    return new DataOciGoldenGateConnectionsConnectionCollectionItemsStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateConnectionsConnectionCollectionItems {
}

export function dataOciGoldenGateConnectionsConnectionCollectionItemsToTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionsConnectionCollectionItemsToHclTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionsConnectionCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionsConnectionCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // account_key - computed: true, optional: false, required: false
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }

  // account_key_secret_id - computed: true, optional: false, required: false
  public get accountKeySecretId() {
    return this.getStringAttribute('account_key_secret_id');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // additional_attributes - computed: true, optional: false, required: false
  private _additionalAttributes = new DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList(this, "additional_attributes", false);
  public get additionalAttributes() {
    return this._additionalAttributes;
  }

  // authentication_mode - computed: true, optional: false, required: false
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // azure_authority_host - computed: true, optional: false, required: false
  public get azureAuthorityHost() {
    return this.getStringAttribute('azure_authority_host');
  }

  // azure_tenant_id - computed: true, optional: false, required: false
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }

  // bootstrap_servers - computed: true, optional: false, required: false
  private _bootstrapServers = new DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList(this, "bootstrap_servers", false);
  public get bootstrapServers() {
    return this._bootstrapServers;
  }

  // catalog - computed: true, optional: false, required: false
  private _catalog = new DataOciGoldenGateConnectionsConnectionCollectionItemsCatalogList(this, "catalog", false);
  public get catalog() {
    return this._catalog;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_secret_id - computed: true, optional: false, required: false
  public get clientSecretSecretId() {
    return this.getStringAttribute('client_secret_secret_id');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_factory - computed: true, optional: false, required: false
  public get connectionFactory() {
    return this.getStringAttribute('connection_factory');
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // connection_url - computed: true, optional: false, required: false
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }

  // consumer_properties - computed: true, optional: false, required: false
  public get consumerProperties() {
    return this.getStringAttribute('consumer_properties');
  }

  // core_site_xml - computed: true, optional: false, required: false
  public get coreSiteXml() {
    return this.getStringAttribute('core_site_xml');
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // db_system_id - computed: true, optional: false, required: false
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // does_use_secret_ids - computed: true, optional: false, required: false
  public get doesUseSecretIds() {
    return this.getBooleanAttribute('does_use_secret_ids');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_ips - computed: true, optional: false, required: false
  private _ingressIps = new DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList(this, "ingress_ips", false);
  public get ingressIps() {
    return this._ingressIps;
  }

  // is_lock_override - computed: true, optional: false, required: false
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }

  // jndi_connection_factory - computed: true, optional: false, required: false
  public get jndiConnectionFactory() {
    return this.getStringAttribute('jndi_connection_factory');
  }

  // jndi_initial_context_factory - computed: true, optional: false, required: false
  public get jndiInitialContextFactory() {
    return this.getStringAttribute('jndi_initial_context_factory');
  }

  // jndi_provider_url - computed: true, optional: false, required: false
  public get jndiProviderUrl() {
    return this.getStringAttribute('jndi_provider_url');
  }

  // jndi_security_credentials - computed: true, optional: false, required: false
  public get jndiSecurityCredentials() {
    return this.getStringAttribute('jndi_security_credentials');
  }

  // jndi_security_credentials_secret_id - computed: true, optional: false, required: false
  public get jndiSecurityCredentialsSecretId() {
    return this.getStringAttribute('jndi_security_credentials_secret_id');
  }

  // jndi_security_principal - computed: true, optional: false, required: false
  public get jndiSecurityPrincipal() {
    return this.getStringAttribute('jndi_security_principal');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_store - computed: true, optional: false, required: false
  public get keyStore() {
    return this.getStringAttribute('key_store');
  }

  // key_store_password - computed: true, optional: false, required: false
  public get keyStorePassword() {
    return this.getStringAttribute('key_store_password');
  }

  // key_store_password_secret_id - computed: true, optional: false, required: false
  public get keyStorePasswordSecretId() {
    return this.getStringAttribute('key_store_password_secret_id');
  }

  // key_store_secret_id - computed: true, optional: false, required: false
  public get keyStoreSecretId() {
    return this.getStringAttribute('key_store_secret_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // locks - computed: true, optional: false, required: false
  private _locks = new DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // private_key_file - computed: true, optional: false, required: false
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }

  // private_key_file_secret_id - computed: true, optional: false, required: false
  public get privateKeyFileSecretId() {
    return this.getStringAttribute('private_key_file_secret_id');
  }

  // private_key_passphrase - computed: true, optional: false, required: false
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }

  // private_key_passphrase_secret_id - computed: true, optional: false, required: false
  public get privateKeyPassphraseSecretId() {
    return this.getStringAttribute('private_key_passphrase_secret_id');
  }

  // producer_properties - computed: true, optional: false, required: false
  public get producerProperties() {
    return this.getStringAttribute('producer_properties');
  }

  // public_key_fingerprint - computed: true, optional: false, required: false
  public get publicKeyFingerprint() {
    return this.getStringAttribute('public_key_fingerprint');
  }

  // redis_cluster_id - computed: true, optional: false, required: false
  public get redisClusterId() {
    return this.getStringAttribute('redis_cluster_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // routing_method - computed: true, optional: false, required: false
  public get routingMethod() {
    return this.getStringAttribute('routing_method');
  }

  // sas_token - computed: true, optional: false, required: false
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }

  // sas_token_secret_id - computed: true, optional: false, required: false
  public get sasTokenSecretId() {
    return this.getStringAttribute('sas_token_secret_id');
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // secret_access_key_secret_id - computed: true, optional: false, required: false
  public get secretAccessKeySecretId() {
    return this.getStringAttribute('secret_access_key_secret_id');
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // security_protocol - computed: true, optional: false, required: false
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }

  // servers - computed: true, optional: false, required: false
  public get servers() {
    return this.getStringAttribute('servers');
  }

  // service_account_key_file - computed: true, optional: false, required: false
  public get serviceAccountKeyFile() {
    return this.getStringAttribute('service_account_key_file');
  }

  // service_account_key_file_secret_id - computed: true, optional: false, required: false
  public get serviceAccountKeyFileSecretId() {
    return this.getStringAttribute('service_account_key_file_secret_id');
  }

  // session_mode - computed: true, optional: false, required: false
  public get sessionMode() {
    return this.getStringAttribute('session_mode');
  }

  // should_use_jndi - computed: true, optional: false, required: false
  public get shouldUseJndi() {
    return this.getBooleanAttribute('should_use_jndi');
  }

  // should_use_resource_principal - computed: true, optional: false, required: false
  public get shouldUseResourcePrincipal() {
    return this.getBooleanAttribute('should_use_resource_principal');
  }

  // should_validate_server_certificate - computed: true, optional: false, required: false
  public get shouldValidateServerCertificate() {
    return this.getBooleanAttribute('should_validate_server_certificate');
  }

  // ssl_ca - computed: true, optional: false, required: false
  public get sslCa() {
    return this.getStringAttribute('ssl_ca');
  }

  // ssl_cert - computed: true, optional: false, required: false
  public get sslCert() {
    return this.getStringAttribute('ssl_cert');
  }

  // ssl_client_keystash - computed: true, optional: false, required: false
  public get sslClientKeystash() {
    return this.getStringAttribute('ssl_client_keystash');
  }

  // ssl_client_keystash_secret_id - computed: true, optional: false, required: false
  public get sslClientKeystashSecretId() {
    return this.getStringAttribute('ssl_client_keystash_secret_id');
  }

  // ssl_client_keystoredb - computed: true, optional: false, required: false
  public get sslClientKeystoredb() {
    return this.getStringAttribute('ssl_client_keystoredb');
  }

  // ssl_client_keystoredb_secret_id - computed: true, optional: false, required: false
  public get sslClientKeystoredbSecretId() {
    return this.getStringAttribute('ssl_client_keystoredb_secret_id');
  }

  // ssl_crl - computed: true, optional: false, required: false
  public get sslCrl() {
    return this.getStringAttribute('ssl_crl');
  }

  // ssl_key - computed: true, optional: false, required: false
  public get sslKey() {
    return this.getStringAttribute('ssl_key');
  }

  // ssl_key_password - computed: true, optional: false, required: false
  public get sslKeyPassword() {
    return this.getStringAttribute('ssl_key_password');
  }

  // ssl_key_password_secret_id - computed: true, optional: false, required: false
  public get sslKeyPasswordSecretId() {
    return this.getStringAttribute('ssl_key_password_secret_id');
  }

  // ssl_key_secret_id - computed: true, optional: false, required: false
  public get sslKeySecretId() {
    return this.getStringAttribute('ssl_key_secret_id');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }

  // ssl_server_certificate - computed: true, optional: false, required: false
  public get sslServerCertificate() {
    return this.getStringAttribute('ssl_server_certificate');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataOciGoldenGateConnectionsConnectionCollectionItemsStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }

  // storage_credential_name - computed: true, optional: false, required: false
  public get storageCredentialName() {
    return this.getStringAttribute('storage_credential_name');
  }

  // stream_pool_id - computed: true, optional: false, required: false
  public get streamPoolId() {
    return this.getStringAttribute('stream_pool_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // technology_type - computed: true, optional: false, required: false
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // tls_ca_file - computed: true, optional: false, required: false
  public get tlsCaFile() {
    return this.getStringAttribute('tls_ca_file');
  }

  // tls_certificate_key_file - computed: true, optional: false, required: false
  public get tlsCertificateKeyFile() {
    return this.getStringAttribute('tls_certificate_key_file');
  }

  // tls_certificate_key_file_password - computed: true, optional: false, required: false
  public get tlsCertificateKeyFilePassword() {
    return this.getStringAttribute('tls_certificate_key_file_password');
  }

  // tls_certificate_key_file_password_secret_id - computed: true, optional: false, required: false
  public get tlsCertificateKeyFilePasswordSecretId() {
    return this.getStringAttribute('tls_certificate_key_file_password_secret_id');
  }

  // tls_certificate_key_file_secret_id - computed: true, optional: false, required: false
  public get tlsCertificateKeyFileSecretId() {
    return this.getStringAttribute('tls_certificate_key_file_secret_id');
  }

  // trigger_refresh - computed: true, optional: false, required: false
  public get triggerRefresh() {
    return this.getBooleanAttribute('trigger_refresh');
  }

  // trust_store - computed: true, optional: false, required: false
  public get trustStore() {
    return this.getStringAttribute('trust_store');
  }

  // trust_store_password - computed: true, optional: false, required: false
  public get trustStorePassword() {
    return this.getStringAttribute('trust_store_password');
  }

  // trust_store_password_secret_id - computed: true, optional: false, required: false
  public get trustStorePasswordSecretId() {
    return this.getStringAttribute('trust_store_password_secret_id');
  }

  // trust_store_secret_id - computed: true, optional: false, required: false
  public get trustStoreSecretId() {
    return this.getStringAttribute('trust_store_secret_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // wallet - computed: true, optional: false, required: false
  public get wallet() {
    return this.getStringAttribute('wallet');
  }

  // wallet_secret_id - computed: true, optional: false, required: false
  public get walletSecretId() {
    return this.getStringAttribute('wallet_secret_id');
  }
}

export class DataOciGoldenGateConnectionsConnectionCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference {
    return new DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateConnectionsConnectionCollection {
}

export function dataOciGoldenGateConnectionsConnectionCollectionToTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionsConnectionCollectionToHclTerraform(struct?: DataOciGoldenGateConnectionsConnectionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionsConnectionCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionsConnectionCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionsConnectionCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciGoldenGateConnectionsConnectionCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciGoldenGateConnectionsConnectionCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionOutputReference {
    return new DataOciGoldenGateConnectionsConnectionCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateConnectionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#name DataOciGoldenGateConnections#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#regex DataOciGoldenGateConnections#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#values DataOciGoldenGateConnections#values}
  */
  readonly values: string[];
}

export function dataOciGoldenGateConnectionsFilterToTerraform(struct?: DataOciGoldenGateConnectionsFilter | cdktf.IResolvable): any {
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


export function dataOciGoldenGateConnectionsFilterToHclTerraform(struct?: DataOciGoldenGateConnectionsFilter | cdktf.IResolvable): any {
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

export class DataOciGoldenGateConnectionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciGoldenGateConnectionsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciGoldenGateConnectionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciGoldenGateConnectionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciGoldenGateConnectionsFilterOutputReference {
    return new DataOciGoldenGateConnectionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections oci_golden_gate_connections}
*/
export class DataOciGoldenGateConnections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_golden_gate_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGoldenGateConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGoldenGateConnections to import
  * @param importFromId The id of the existing DataOciGoldenGateConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGoldenGateConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_golden_gate_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/golden_gate_connections oci_golden_gate_connections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGoldenGateConnectionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGoldenGateConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_golden_gate_connections',
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
    this._assignableDeploymentId = config.assignableDeploymentId;
    this._assignableDeploymentType = config.assignableDeploymentType;
    this._assignedDeploymentId = config.assignedDeploymentId;
    this._compartmentId = config.compartmentId;
    this._connectionType = config.connectionType;
    this._displayName = config.displayName;
    this._id = config.id;
    this._state = config.state;
    this._technologyType = config.technologyType;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignable_deployment_id - computed: false, optional: true, required: false
  private _assignableDeploymentId?: string; 
  public get assignableDeploymentId() {
    return this.getStringAttribute('assignable_deployment_id');
  }
  public set assignableDeploymentId(value: string) {
    this._assignableDeploymentId = value;
  }
  public resetAssignableDeploymentId() {
    this._assignableDeploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignableDeploymentIdInput() {
    return this._assignableDeploymentId;
  }

  // assignable_deployment_type - computed: false, optional: true, required: false
  private _assignableDeploymentType?: string; 
  public get assignableDeploymentType() {
    return this.getStringAttribute('assignable_deployment_type');
  }
  public set assignableDeploymentType(value: string) {
    this._assignableDeploymentType = value;
  }
  public resetAssignableDeploymentType() {
    this._assignableDeploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignableDeploymentTypeInput() {
    return this._assignableDeploymentType;
  }

  // assigned_deployment_id - computed: false, optional: true, required: false
  private _assignedDeploymentId?: string; 
  public get assignedDeploymentId() {
    return this.getStringAttribute('assigned_deployment_id');
  }
  public set assignedDeploymentId(value: string) {
    this._assignedDeploymentId = value;
  }
  public resetAssignedDeploymentId() {
    this._assignedDeploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedDeploymentIdInput() {
    return this._assignedDeploymentId;
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

  // connection_collection - computed: true, optional: false, required: false
  private _connectionCollection = new DataOciGoldenGateConnectionsConnectionCollectionList(this, "connection_collection", false);
  public get connectionCollection() {
    return this._connectionCollection;
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string[]; 
  public get connectionType() {
    return this.getListAttribute('connection_type');
  }
  public set connectionType(value: string[]) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
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

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string[]; 
  public get technologyType() {
    return this.getListAttribute('technology_type');
  }
  public set technologyType(value: string[]) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciGoldenGateConnectionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciGoldenGateConnectionsFilter[] | cdktf.IResolvable) {
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
      assignable_deployment_id: cdktf.stringToTerraform(this._assignableDeploymentId),
      assignable_deployment_type: cdktf.stringToTerraform(this._assignableDeploymentType),
      assigned_deployment_id: cdktf.stringToTerraform(this._assignedDeploymentId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      connection_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectionType),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      technology_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._technologyType),
      filter: cdktf.listMapper(dataOciGoldenGateConnectionsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignable_deployment_id: {
        value: cdktf.stringToHclTerraform(this._assignableDeploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignable_deployment_type: {
        value: cdktf.stringToHclTerraform(this._assignableDeploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assigned_deployment_id: {
        value: cdktf.stringToHclTerraform(this._assignedDeploymentId),
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
      connection_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectionType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      technology_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._technologyType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciGoldenGateConnectionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciGoldenGateConnectionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
